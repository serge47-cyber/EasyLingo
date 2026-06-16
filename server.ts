import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import * as dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "15mb" }));

// Initialize Google GenAI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// JSON Schema for Lesson Generation
const lessonResponseSchema = {
  type: Type.OBJECT,
  properties: {
    topic: {
      type: Type.STRING,
      description: "Auto-detected main English lesson topic (in English). Keep it concise, e.g., 'Summer Vegetables & Culinary Herbs' or 'Sustainable Farming'",
    },
    vocabulary: {
      type: Type.ARRAY,
      description: "List of 8 to 15 target vocabulary words or collocations that are explicitly presented in any dictionary, glossary, vocabulary box, list, or bolded terms in the raw text. Seek the material's original study words first.",
      items: {
        type: Type.OBJECT,
        properties: {
          word: { type: Type.STRING, description: "Target word or collocation in English" },
          transcription: { type: Type.STRING, description: "IPA phonetic transcription, e.g., /ˈkʌltɪveɪt/" },
          partOfSpeech: { type: Type.STRING, description: "Part of speech, e.g., verb, noun, adjective, idiom" },
          translation_uk: { type: Type.STRING, description: "Ukrainian translation of the word" },
          exampleSentence: { type: Type.STRING, description: "Authentic practice or contextual example sentence in English using this word" },
          difficulty: { type: Type.STRING, description: "Estimated proficiency difficulty level, e.g., A2, B1, B2, C1" }
        },
        required: ["word", "transcription", "partOfSpeech", "translation_uk", "exampleSentence", "difficulty"],
      },
    },
    grammarRule: {
      type: Type.OBJECT,
      description: "Core grammar rule extracted from the text or generated to match the reading's level.",
      properties: {
        name: { type: Type.STRING, description: "Grammar structure name, e.g., 'Present Perfect Passive'" },
        formula: { type: Type.STRING, description: "Visual structure formula, e.g., 'Subject + have/has + been + V3'" },
        explanation_uk: { type: Type.STRING, description: "Comprehensive, clear grammatical explanation in Ukrainian" },
        examples: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "Examples of sentences using this grammar rule"
        },
        commonErrors: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              incorrect: { type: Type.STRING, description: "Incorrect English sentence example" },
              correct: { type: Type.STRING, description: "Corrected English sentence" },
              reason_uk: { type: Type.STRING, description: "Brief explanation in Ukrainian of why this is an error" }
            },
            required: ["incorrect", "correct", "reason_uk"]
          }
        },
        fillInBlanks: {
          type: Type.ARRAY,
          description: "List of 4 to 5 fill-in-the-blank English sentences targeting the grammar rule or vocabulary words. Use '___' for the blank space.",
          items: {
            type: Type.OBJECT,
            properties: {
              sentence: { type: Type.STRING, description: "Sentence with a blank represented as '___', e.g., 'The herbs ___ been premium dried.'" },
              answer: { type: Type.STRING, description: "The correct sequence of word(s) that fits the blank" },
              hint_uk: { type: Type.STRING, description: "A helpful vocabulary or context clue in Ukrainian" }
            },
            required: ["sentence", "answer", "hint_uk"]
          }
        },
        sentenceBuild: {
          type: Type.ARRAY,
          description: "3 sentences to build by assembling mixed blocks of words.",
          items: {
            type: Type.OBJECT,
            properties: {
              correctSentence: { type: Type.STRING, description: "The correct complete English sentence" },
              words: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "List of words from correctSentence, scrambled randomly. E.g., ['picked', 'have', 'been', 'tomatoes']"
              }
            },
            required: ["correctSentence", "words"]
          }
        }
      },
      required: ["name", "formula", "explanation_uk", "examples", "commonErrors", "fillInBlanks", "sentenceBuild"]
    },
    listeningScript: {
      type: Type.STRING,
      description: "A cohesive, high-quality, authentic monologue story of 50-80 words in English designed for comprehension. It must incorporate at least 3-4 of the core lesson vocabulary items generated above."
    },
    listeningQuestions: {
      type: Type.ARRAY,
      description: "3 questions testing listening comprehension of the listeningScript",
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          type: { type: Type.STRING, description: "Must be exactly one of: 'multiple-choice', 'true-false', 'gap-fill'" },
          question: { type: Type.STRING, description: "Question text in English" },
          options: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Array of 4 options. Required for 'multiple-choice', otherwise pass an empty array"
          },
          answer: { type: Type.STRING, description: "Strictly correct answer string. For 'true-false', must be 'TRUE' or 'FALSE'" },
          hint_uk: { type: Type.STRING, description: "Clue or context tip in Ukrainian" }
        },
        required: ["id", "type", "question", "options", "answer", "hint_uk"]
      }
    },
    visualAssociations: {
      type: Type.ARRAY,
      description: "List of 8 visual card items pairing words/phrases with emojis and Ukrainian translations for memory-matching game",
      items: {
        type: Type.OBJECT,
        properties: {
          word: { type: Type.STRING, description: "English target vocabulary word" },
          translation: { type: Type.STRING, description: "Ukrainian translation" },
          emoji: { type: Type.STRING, description: "Highly relevant single graphic emoji, e.g., '🌱', '🍅', '⚙️'" }
        },
        required: ["word", "translation", "emoji"]
      }
    },
    speakingStarters: {
      type: Type.ARRAY,
      description: "4-5 open-ended questions or 'sentence starters' designed to prompt speaking or self-expression based on the topic",
      items: {
        type: Type.OBJECT,
        properties: {
          prompt_en: { type: Type.STRING, description: "Sentence starter/question in English, e.g., 'The last time I tasted something really succulent was...'" },
          prompt_uk: { type: Type.STRING, description: "Ukrainian translation or motivational prompt context" },
          correctPatterns: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Suggested English vocabulary words/idioms or structures that are relevant and beneficial to use in the answer"
          }
        },
        required: ["prompt_en", "prompt_uk", "correctPatterns"]
      }
    }
  },
  required: [
    "topic",
    "vocabulary",
    "grammarRule",
    "listeningScript",
    "listeningQuestions",
    "visualAssociations",
    "speakingStarters"
  ],
};

// Helper to call ai.models.generateContent with retry logic for rate limits (429) or temporary service issues (503/UNAVAILABLE)
async function generateContentWithRetry(params: Parameters<typeof ai.models.generateContent>[0], retriesRemaining = 3, delay = 1500): Promise<any> {
  try {
    return await ai.models.generateContent(params);
  } catch (error: any) {
    const errorMsg = String(error.message || "").toLowerCase();
    const statusCode = error.status || error.statusCode || (error.error && error.error.code);
    const isTransient = 
      statusCode === 503 || 
      statusCode === 429 ||
      errorMsg.includes("503") ||
      errorMsg.includes("429") ||
      errorMsg.includes("unavailable") ||
      errorMsg.includes("high demand") ||
      errorMsg.includes("overloaded");

    if (isTransient && retriesRemaining > 0) {
      console.warn(`Gemini transient error encountered: "${error.message || error}". Retrying in ${delay}ms... (${retriesRemaining} attempts left)`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return generateContentWithRetry(params, retriesRemaining - 1, delay * 2);
    }
    throw error;
  }
}

// API: Analyze Text from PDF
const languageNames: Record<string, string> = {
  uk: "Ukrainian",
  en: "English",
  ro: "Romanian",
  es: "Spanish",
  pl: "Polish",
  de: "German",
  fr: "French",
  it: "Italian"
};

app.post("/api/analyze-text", async (req, res) => {
  try {
    const { text, nativeLang = "uk", targetLang = "en" } = req.body;
    if (!text || text.trim().length === 0) {
      return res.status(400).json({ error: "Missing textbook page text for analysis." });
    }

    const nativeLangName = languageNames[nativeLang] || "Ukrainian";
    const targetLangName = languageNames[targetLang] || "English";

    const systemPrompt = `You are a high-fidelity textbook digitizer and an expert language syllabus designer.
Analyze the provided raw textbook page text, extract its integrated elements, and output an interactive structured lesson payload.

The student's native language is: ${nativeLangName}.
The language the student is learning/studying is: ${targetLangName}.

Your core mission is to digitize and map the target lessons into a digital structure.
All vocabulary words, example sentences, listening scripts, comprehension questions, and grammar drills MUST be formulated in ${targetLangName}.
All native-facing elements, translations, grammatical rules, explanations, reasons, hints, and contextual descriptions MUST be translated/written exactly in ${nativeLangName} (even if properties end in '_uk' e.g. "translation_uk", "explanation_uk", "reason_uk", "hint_uk", "prompt_uk"). Do NOT use Ukrainian in those fields if ${nativeLangName} is different.

Strict rules:
1. VOCABULARY EXTRACTION:
   - Identify all words or collocations explicitly designated for learning in this page (e.g., in a wordlist, vocabulary box, glossary table, bolded in text, or highlighted).
   - If the text has no specific list, selectively extract the key medium-to-hard keywords that appear directly in the raw text.
   - For each word, provide its correct IPA transcription, translation in ${nativeLangName} mapped to the "translation_uk" field, part of speech, difficulty level, and a context sentence in ${targetLangName}.

2. LEARNING GOALS & COMPREHENSION (listeningScript and listeningQuestions):
   - Set "listeningScript" directly to the core reading passage itself (or a clean, highly cohesive 60-120 word excerpt/summary if the textbook page is extremely long). This is the text in ${targetLangName} that the student will listen to.
   - Scan the raw textbook page for actual reading comprehension questions, True/False questions, multiple-choice drills, or gap-fills written by the textbook authors.
   - Extract those exact textbook questions/statements in ${targetLangName} and map them to "listeningQuestions".
   - If the material lacks any comprehension questions, generate 3 rigorous comprehension questions testing detail retrieval directly from the passage text (one multiple-choice, one true-false, and one gap-fill) in ${targetLangName} with hints in ${nativeLangName} mapped to "hint_uk".

3. GRAMMAR RULES & DRILLS (grammarRule.fillInBlanks, grammarRule.sentenceBuild):
   - Group the grammar focus of this textbook page (e.g., Passive Voice, Past Simple, Gerunds) with its key formula and concise explanation in ${nativeLangName} mapped to "explanation_uk".
   - Scan the textbook page for actual gap-fill sentences, exercises, or sentence transformation tasks. Extract them and map them directly to "fillInBlanks" and "sentenceBuild", using ${targetLangName} text. Provide hints in ${nativeLangName} mapped to "hint_uk".
   - If no explicit grammar exercises are present, synthesize exercises using exact or slightly modified sentences from the textbook text to reinforce the detected grammar focus in ${targetLangName}, ensuring maximum direct correlation with the study material.

4. SPEAKING & DISCUSSION STARTERS (speakingStarters):
   - Look for post-reading discussion sections, critical thinking questions, "Discussion", "Speaking", "Over to you", or speaking exercises present on the textbook page.
   - Extract those prompts/questions directly in ${targetLangName} and map them to "speakingStarters"! Provide motivational translation/prompts in ${nativeLangName} mapped to "prompt_uk".
   - Only if the text has no discussion questions, design conversational, open-ended question prompts centered directly on the theme of the textbook text in ${targetLangName}.

5. Return a pristine JSON payload following the defined output schema. Ensure no markdown wrappers other than the requested JSON structure. Keep properties named exactly as defined (e.g. translation_uk, explanation_uk, reason_uk, hint_uk, prompt_uk) but fill them with the translated ${nativeLangName} and ${targetLangName} text respectively!`;

    const response = await generateContentWithRetry({
      model: "gemini-2.5-flash",
      contents: [
        { text: systemPrompt },
        { text: `Raw Textbook Text to analyze:\n\n${text}` }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: lessonResponseSchema,
        temperature: 0.2,
      },
    });

    const outputText = response.text;
    if (!outputText) {
      throw new Error("Empty response from Gemini API");
    }

    const parsedData = JSON.parse(outputText.trim());
    res.json(parsedData);
  } catch (error: any) {
    console.error("Gemini lesson generator failed:", error);
    res.status(500).json({
      error: "AI translation and lesson compilation failed.",
      details: error.message || error,
    });
  }
});

// API: Speaking prompt evaluation
app.post("/api/evaluate-speaking-prompt", async (req, res) => {
  try {
    const { prompt, responseText, correctPatterns, nativeLang = "uk", targetLang = "en" } = req.body;
    if (!prompt || responseText === undefined) {
      return res.status(400).json({ error: "Missing prompt or response text." });
    }

    const nativeLangName = languageNames[nativeLang] || "Ukrainian";
    const targetLangName = languageNames[targetLang] || "English";

    const systemPrompt = `You are an expert examiner and feedback agent for learning the ${targetLangName} language.
Analyze the student's typed or spoken response to the prompt: "${prompt}" (written in ${targetLangName}).
Core vocabulary patterns/words suggested to use: ${JSON.stringify(correctPatterns || [])}

Perform a strict check on:
1. Is it gibberish, letters spam (e.g. "dsfadsfas"), completely meaningless, or empty?
   If so:
   - score MUST be between 0 and 10.
   - feedback MUST clearly state in ${nativeLangName} that the input is unrecognized/gibberish, and they need to write a meaningful sentence.
2. Is it relevant to the question? If it's real words but totally unrelated to "${prompt}", give a lower score (e.g., 20-40) and explain why in a friendly tone in ${nativeLangName}.
3. Check grammar, spelling, and vocabulary. Identify which recommended patterns from ${JSON.stringify(correctPatterns || [])} were successfully used.
4. Calculate a realistic and honest score (0-100). Do NOT give high scores (like 40+) for spam, gibberish, or empty answers.
5. Provide helpful and constructive feedback in ${nativeLangName} explaining what was correct, listing spelling/grammar issues, and suggestions for improvement.

Return JSON only fitting this schema:
{
  "score": number,
  "feedback": "concise constructive feedback in active conversational style in ${nativeLangName} (1-2 sentences)",
  "matchedPatterns": ["word1", "word2"]
}`;

    const response = await generateContentWithRetry({
      model: "gemini-3.5-flash",
      contents: [
        { text: systemPrompt },
        { text: `Student response: "${responseText}"` }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER, description: "Honest score 0-100" },
            feedback: { type: Type.STRING, description: "Feedback for study focus" },
            matchedPatterns: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Subset of suggested keywords utilized by the student"
            }
          },
          required: ["score", "feedback", "matchedPatterns"]
        },
        temperature: 0.2,
      },
    });

    res.json(JSON.parse(response.text?.trim() || "{}"));
  } catch (error: any) {
    console.error("Speaking evaluation service error:", error);
    res.status(500).json({ error: "Failed to evaluate speaking prompt response." });
  }
});

// API: Speech pronunciation evaluation
app.post("/api/evaluate-speech", async (req, res) => {
  try {
    const { targetText, speechTranscription, nativeLang = "uk", targetLang = "en" } = req.body;
    if (!targetText || !speechTranscription) {
      return res.status(400).json({ error: "Missing target text or transcript." });
    }

    const nativeLangName = languageNames[nativeLang] || "Ukrainian";
    const targetLangName = languageNames[targetLang] || "English";

    const systemPrompt = `You are a professional phonetics coach and evaluator for the ${targetLangName} language.
Compare the target phrase the student was supposed to say with the actual web-recognized transcript.
Evaluate whether it matches correctly, and write concise, highly motivating audio feedback in ${nativeLangName} (1-2 sentences), indicating any phonetic tips or specific pronunciation guide (e.g. word stresses, vowel qualities).
Return JSON only:
{
  "correct": boolean,
  "score": number (0-100),
  "feedback_uk": "speech feedback in ${nativeLangName}",
  "errorType": "pronunciation" | "spelling" | null,
  "suggestion": "actionable feedback on how to position lips or capture stresses in ${nativeLangName}"
}`;

    const response = await generateContentWithRetry({
      model: "gemini-2.5-flash",
      contents: [
        { text: systemPrompt },
        { text: `Target template: "${targetText}"\nStudent said: "${speechTranscription}"` }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            correct: { type: Type.BOOLEAN },
            score: { type: Type.NUMBER },
            feedback_uk: { type: Type.STRING },
            errorType: { type: Type.STRING },
            suggestion: { type: Type.STRING }
          },
          required: ["correct", "score", "feedback_uk", "suggestion"]
        },
        temperature: 0.3,
      },
    });

    res.json(JSON.parse(response.text?.trim() || "{}"));
  } catch (error: any) {
    console.error("Speech evaluation service error:", error);
    res.status(500).json({ error: "Failed to evaluate pronunciation check." });
  }
});

// Setup Vite & static serving
async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`EasyEnglish server is securely operating at http://localhost:${PORT}`);
  });
}

bootstrap();
