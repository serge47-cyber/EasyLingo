import { LessonPayload } from "./types";
import {
  presetGrammarRules,
  presetTexts,
  vocabularyTranslations,
  lesson1Vocabulary,
  lesson2Vocabulary,
  grammarExplanations,
  errorReasons,
  blankHints,
  quizHints,
  speakingPrompts,
  presetListeningQuestions,
  presetSentenceBuilds
} from "./presetData";

export const PRESET_LESSONS: { id: string; label: string; text: string; payload: LessonPayload }[] = [
  {
    id: "organic_farming",
    label: "🌿 Lesson 1: Organic Herbs & Harvesting (B1+)",
    text: "Humans have cultivated herbs for centuries. The tomatoes are sun-ripened, and carefully picked by hand. In sustainable agriculture, herbs have been freshly harvested at dawn to preserve their volatile aromatic oils. Farmers have used organic methodologies to cultivate soil bacteria. When succulent products have been gathered, they are immediately brought to local organic markets.",
    payload: {
      topic: "Organic Herbs & Sustainable Harvesting",
      vocabulary: [
        {
          word: "cultivate",
          transcription: "/ˈkʌltɪveɪt/",
          partOfSpeech: "verb",
          translation_uk: "культивувати, вирощувати, плекати",
          exampleSentence: "She cultivates sweet organic roses and sage in her garden.",
          difficulty: "B1"
        },
        {
          word: "harvest",
          transcription: "/ˈhɑːrvɪst/",
          partOfSpeech: "verb/noun",
          translation_uk: "збирати врожай / жнива",
          exampleSentence: "Sarsaparilla roots have been harvested by wildcrafters for decades.",
          difficulty: "B1"
        },
        {
          word: "succulent",
          transcription: "/ˈsʌkjʊlənt/",
          partOfSpeech: "adjective",
          translation_uk: "соковитий, м'ясистий",
          exampleSentence: "Nothing tastes sweeter than succulent tomatoes right off the vine.",
          difficulty: "B2"
        },
        {
          word: "dawn",
          transcription: "/dɔːn/",
          partOfSpeech: "noun",
          translation_uk: "світанок, рання зоря",
          exampleSentence: "To avoid the midday heat, harvesting begins at the break of dawn.",
          difficulty: "A2"
        },
        {
          word: "agriculture",
          transcription: "/ˈæɡrɪkʌltʃər/",
          partOfSpeech: "noun",
          translation_uk: "сільське господарство, землеробство",
          exampleSentence: "Modern sustainable agriculture aims to minimize synthetic chemicals.",
          difficulty: "B1"
        },
        {
          word: "volatile",
          transcription: "/ˈvɒlətaɪl/",
          partOfSpeech: "adjective",
          translation_uk: "леткий, ефірний, випаровуваний",
          exampleSentence: "Freshly cut rosemary releases highly volatile essential oils.",
          difficulty: "B2"
        },
        {
          word: "aromatic",
          transcription: "/ˌærəˈmætɪk/",
          partOfSpeech: "adjective",
          translation_uk: "ароматний, духмяний",
          exampleSentence: "The kitchen was filled with the aromatic fragrance of dried mint.",
          difficulty: "B1"
        },
        {
          word: "sustainable",
          transcription: "/səˈsteɪnəbl/",
          partOfSpeech: "adjective",
          translation_uk: "сталий, екологічно раціональний",
          exampleSentence: "We must adopt sustainable farming practices to protect our soil.",
          difficulty: "B2"
        }
      ],
      grammarRule: {
        name: "Present Perfect Passive",
        formula: "Subject + have/has + been + Verb (V3/ -ed)",
        explanation_uk: "Пасивний стан у теперішньому перфекті використовується, коли дія була завершена до теперішнього моменту, і нам важливий сам результат, а не те, хто саме її виконав. Об'єкт над яким виконується дія виходить на перший план.",
        examples: [
          "The tomatoes have finally been picked.",
          "Our agriculture technique has been altered to protect local honeybees."
        ],
        commonErrors: [
          {
            incorrect: "The organic herbs have harvested at dawn.",
            correct: "The organic herbs have been harvested at dawn.",
            reason_uk: "Забули допоміжне дієслово 'been', тому речення звучить так, ніби трави самі збирали врожай (активний стан замість пасивного)."
          },
          {
            incorrect: "The succulent tomato has been gathered by hand.",
            correct: "The succulent tomatoes have been gathered by hand.",
            reason_uk: "Для іменників у множині (tomatoes) слід використовувати допоміжне дієслово 'have', а не 'has'."
          }
        ],
        fillInBlanks: [
          {
            sentence: "All of our fresh lavender seeds ___ been carefully sown.",
            answer: "have",
            hint_uk: "Допоміжне дієслово для 'lavender seeds' (множина)"
          },
          {
            sentence: "The aromatic oils have recently ___ extracted using steam distillation.",
            answer: "been",
            hint_uk: "Третя частина структури Present Perfect Passive"
          },
          {
            sentence: "This organic garden ___ been cultivated by local volunteers.",
            answer: "has",
            hint_uk: "Допоміжне дієслово для однини ('This organic garden')"
          },
          {
            sentence: "The sweet tomatoes have been freshly ___ from the vine. (pick)",
            answer: "picked",
            hint_uk: "Потрібно поставити дієслово 'pick' у форму V3"
          }
        ],
        sentenceBuild: [
          {
            correctSentence: "The succulent tomatoes have been freshly picked by farmers.",
            words: ["picked", "succulent", "have", "by", "The", "freshly", "farmers.", "been", "tomatoes"]
          },
          {
            correctSentence: "This ancient farming technique has been preserved for centuries.",
            words: ["has", "farming", "preserved", "technique", "for", "been", "This", "centuries.", "ancient"]
          },
          {
            correctSentence: "Chemical fertilizers have been completely banned from our soil.",
            words: ["fertilizers", "been", "from", "completely", "Chemical", "our", "have", "banned", "soil."]
          }
        ]
      },
      listeningScript: "Welcome to our organic sanctuary. In this field, aromatic herbs have been cultivated under the golden sun. Today, our succulent tomatoes have been freshly picked at dawn. Organic farming represents sustainable agriculture where pesticides have been completely banned. Have these techniques been used here for generations? Indeed, they have.",
      listeningQuestions: [
        {
          id: "l_q1",
          type: "multiple-choice",
          question: "When were the succulent tomatoes in the monologue harvested?",
          options: ["At noon", "At the break of dawn", "Late evening", "They are not harvested yet"],
          answer: "At the break of dawn",
          hint_uk: "Зверніть увагу на фактичну деталь часу розповіді"
        },
        {
          id: "l_q2",
          type: "true-false",
          question: "Pesticides are widely and deliberately sprayed on this organic field.",
          options: [],
          answer: "FALSE",
          hint_uk: "Прослухайте частину про заборону хімікатів ('completely banned')"
        },
        {
          id: "l_q3",
          type: "gap-fill",
          question: "Fill the blank: 'In this field, aromatic herbs have been ___ under the golden sun.'",
          options: [],
          answer: "cultivated",
          hint_uk: "Заповніть основним дієсловом, що означає вирощування"
        }
      ],
      visualAssociations: [
        { word: "cultivate", translation: "культивувати, плекати", emoji: "🌱" },
        { word: "harvest", translation: "збирати врожай", emoji: "🧺" },
        { word: "succulent", translation: "соковитий, м'ясистий", emoji: "🍅" },
        { word: "dawn", translation: "світанок", emoji: "🌅" },
        { word: "agriculture", translation: "землеробство", emoji: "🚜" },
        { word: "volatile", translation: "леткий, випаровуваний", emoji: "💨" },
        { word: "aromatic", translation: "духмяний, ароматний", emoji: "👃" },
        { word: "sustainable", translation: "екологічно раціональний", emoji: "♻️" }
      ],
      speakingStarters: [
        {
          prompt_en: "The last time I tasted a succulent fruit or vegetable was...",
          prompt_uk: "Розкажіть про соковиті фрукти чи овочі, які ви нещодавно куштували.",
          correctPatterns: ["tasted", "succulent", "freshly picked", "organic"]
        },
        {
          prompt_en: "Honestly, do you believe sustainable agriculture can save the world, specially when...",
          prompt_uk: "Чи вірите ви в екологічно стійке фермерство для порятунку довкілля?",
          correctPatterns: ["sustainable", "agriculture", "eliminate", "pollution"]
        },
        {
          prompt_en: "If I woke up at the break of dawn every single morning, I would try to...",
          prompt_uk: "Щоб ви робили або вирощували, якби вставали на світанку щодня?",
          correctPatterns: ["dawn", "cultivate", "morning routine", "harvest"]
        }
      ]
    }
  },
  {
    id: "adaptive_intelligence",
    label: "🤖 Lesson 2: AI & Cognitive Education (B2+)",
    text: "Modern schools are deploying autonomous systems. Interactive lesson plans are being shaped by deep algorithms. Currently, students' cognitive patterns are being carefully monitored using neural trackers. This adaptive software is teaching critical languages. While new lessons are being structured in real time, full integration of standard materials has been slow.",
    payload: {
      topic: "Artificial Intelligence in Cognitive Pedagogy",
      vocabulary: [
        {
          word: "autonomous",
          transcription: "/ɔːˈtɒnəməs/",
          partOfSpeech: "adjective",
          translation_uk: "автономний, незалежний",
          exampleSentence: "The classroom utilized autonomous software to assign tailored spelling tests.",
          difficulty: "C1"
        },
        {
          word: "cognitive",
          transcription: "/ˈkɒɡnətɪv/",
          partOfSpeech: "adjective",
          translation_uk: "когнітивний, пізнавальний",
          exampleSentence: "Solving spaced-repetition puzzles enhances student cognitive retention.",
          difficulty: "B2"
        },
        {
          word: "integration",
          transcription: "/ˌɪntɪˈɡreɪʃn/",
          partOfSpeech: "noun",
          translation_uk: "інтеграція, об'єднання",
          exampleSentence: "Seamless integration of interactive videos keeps students intensely focused.",
          difficulty: "B2"
        },
        {
          word: "algorithm",
          transcription: "/ˈælɡərɪðəm/",
          partOfSpeech: "noun",
          translation_uk: "алгоритм",
          exampleSentence: "The AI algorithms analyze how quickly you recall flashcard definitions.",
          difficulty: "B1"
        },
        {
          word: "adaptive",
          transcription: "/əˈdæptɪv/",
          partOfSpeech: "adjective",
          translation_uk: "адаптивний, пристосований",
          exampleSentence: "This platform is highly adaptive, moving faster if you answer correctly.",
          difficulty: "B2"
        },
        {
          word: "deploy",
          transcription: "/dɪˈplɔɪ/",
          partOfSpeech: "verb",
          translation_uk: "розгортати, застосовувати",
          exampleSentence: "Tech-focused academies deploy advanced neural nets to personalize lessons.",
          difficulty: "B2"
        },
        {
          word: "structured",
          transcription: "/ˈstrʌktʃərd/",
          partOfSpeech: "adjective",
          translation_uk: "структурований",
          exampleSentence: "Her studying became highly structured once they introduced spaced repetition.",
          difficulty: "B1"
        }
      ],
      grammarRule: {
        name: "Present Continuous Passive",
        formula: "Subject + am/is/are + being + Verb (V3 / -ed)",
        explanation_uk: "Пасивний стан у теперішньому тривалому часі (Present Continuous Passive) показує дію, яка виконується над об'єктом прямо в цей момент часу (at the moment / right now). Конструкція фокусується на процесі над об'єктом.",
        examples: [
          "Interactive lesson plans are being shaped by deep training algorithms.",
          "My speech is being processed by the phonetic neural network right now."
        ],
        commonErrors: [
          {
            incorrect: "Advanced neural networks is being deployed this semester.",
            correct: "Advanced neural networks are being deployed this semester.",
            reason_uk: "Для іменників у множині (networks) завжди використовується 'are', а не 'is'."
          },
          {
            incorrect: "New structured materials are been formatted at the moment.",
            correct: "New structured materials are being formatted at the moment.",
            reason_uk: "У Present Continuous Passive слід вживати 'being' з закінченням -ing для тривалості, а не перфектну форму 'been'."
          }
        ],
        fillInBlanks: [
          {
            sentence: "Our cognitive responses are ___ measured by the educational algorithm. (measure)",
            answer: "being",
            hint_uk: "Допоміжне дієслово тривалості у пасивному стані"
          },
          {
            sentence: "This modern system is being carefully ___ to secondary classrooms. (integrate)",
            answer: "integrated",
            hint_uk: "Дієслово 'integrate' у третій формі (V3)"
          },
          {
            sentence: "Many autonomous agents ___ being deployed worldwide today.",
            answer: "are",
            hint_uk: "Дієслово-зв'язка для підмета 'agents' у множині"
          }
        ],
        sentenceBuild: [
          {
            correctSentence: "Custom spelling lists are being structured by the smart database.",
            words: ["by", "are", "structured", "database.", "Custom", "being", "smart", "spelling", "lists"]
          },
          {
            correctSentence: "Our cognitive retention is being enhanced through adaptive intervals.",
            words: ["retention", "enhanced", "Our", "cognitive", "adaptive", "being", "is", "through", "intervals."]
          }
        ]
      },
      listeningScript: "Educational techniques are changing rapidly. Modern software is highly adaptive. At this moment, autonomous lesson plans are being generated for thousands of students. Cognitive patterns are being analyzed by neural algorithms. The seamless integration of digital teaching materials has been widely supported by teachers.",
      listeningQuestions: [
        {
          id: "la_q1",
          type: "multiple-choice",
          question: "What is analyzing cognitive patterns at this moment?",
          options: ["Paper notebooks", "Standard dictionaries", "Neural algorithms", "Human headmasters"],
          answer: "Neural algorithms",
          hint_uk: "Прослухайте речення про розбір когнітивних шаблонів"
        },
        {
          id: "la_q2",
          type: "true-false",
          question: "The teacher community is strictly against the integration of digital materials.",
          options: [],
          answer: "FALSE",
          hint_uk: "Останнє речення зазначає, що інтеграція широко підтримується ('widely supported')"
        },
        {
          id: "la_q3",
          type: "gap-fill",
          question: "Fill the blank: 'At this moment, autonomous lesson plans are ___ generated.'",
          options: [],
          answer: "being",
          hint_uk: "Слово, що позначає поточний процес пасивного стану"
        }
      ],
      visualAssociations: [
        { word: "autonomous", translation: "автономний, незалежний", emoji: "🛸" },
        { word: "cognitive", translation: "когнітивний, пізнавальний", emoji: "🧠" },
        { word: "integration", translation: "інтеграція, об'єднання", emoji: "🔌" },
        { word: "algorithm", translation: "алгоритм", emoji: "🔢" },
        { word: "adaptive", translation: "адаптивний", emoji: "⚙️" },
        { word: "deploy", translation: "розгортати, застосовувати", emoji: "🚀" },
        { word: "structured", translation: "структурований", emoji: "🪜" }
      ],
      speakingStarters: [
        {
          prompt_en: "In my experience, using an adaptive learning algorithm is better because...",
          prompt_uk: "Поділіться думками, чому адаптивні алгоритми кращі у навчанні.",
          correctPatterns: ["adaptive", "algorithm", "personalized", "retention"]
        },
        {
          prompt_en: "If I had access to a fully autonomous robot teacher, I would ask it to help me with...",
          prompt_uk: "З чим би ви попросили допомогти роботизованого вчителя?",
          correctPatterns: ["autonomous", "cognitive", "robot", "structuring"]
        }
      ]
    }
  }
];

export function getLocalizedPreset(presetId: string, nativeLang: string, targetLang: string = "en"): LessonPayload & { text?: string } {
  const lang = (["uk", "en", "ro", "es"].includes(nativeLang) ? nativeLang : "uk") as "uk" | "en" | "ro" | "es";
  const target = (["en", "ro", "es", "de", "fr", "it", "uk"].includes(targetLang) ? targetLang : "en") as "en" | "ro" | "es" | "de" | "fr" | "it" | "uk";

  const isLesson1 = presetId === "organic_farming";
  const base = isLesson1 ? PRESET_LESSONS[0] : PRESET_LESSONS[1];
  const vocabsMap = isLesson1 ? lesson1Vocabulary : lesson2Vocabulary;

  // Localize Vocabulary
  const localizedVocabulary = base.payload.vocabulary.map((v) => {
    const targetWordInfo = vocabsMap[v.word] ? vocabsMap[v.word][target] : null;
    const wordInTarget = targetWordInfo?.word || v.word;
    const transcriptionInTarget = targetWordInfo?.transcription || v.transcription;
    const exampleSentenceInTarget = targetWordInfo?.exampleSentence || v.exampleSentence;
    const nativeTranslation = vocabularyTranslations[v.word] ? vocabularyTranslations[v.word][lang] : v.translation_uk;

    return {
      word: wordInTarget,
      transcription: transcriptionInTarget,
      partOfSpeech: v.partOfSpeech,
      translation_uk: nativeTranslation,
      exampleSentence: exampleSentenceInTarget,
      difficulty: v.difficulty
    };
  });

  // Localize Grammar Rule
  const grammarRuleInfo = presetGrammarRules[presetId] ? presetGrammarRules[presetId][target] : null;
  const grammarName = grammarRuleInfo?.name || base.payload.grammarRule.name;
  const grammarFormula = grammarRuleInfo?.formula || base.payload.grammarRule.formula;
  const grammarExamples = grammarRuleInfo?.examples || base.payload.grammarRule.examples;
  const grammarExplanationNative = grammarExplanations[lang] || base.payload.grammarRule.explanation_uk;

  const localizedCommonErrors = base.payload.grammarRule.commonErrors.map((err, idx) => {
    const nativeReason = errorReasons[idx] ? errorReasons[idx][lang] : err.reason_uk;
    return {
      incorrect: err.incorrect,
      correct: err.correct,
      reason_uk: nativeReason
    };
  });

  const localizedFillInBlanks = base.payload.grammarRule.fillInBlanks.map((fb, idx) => {
    const nativeHint = blankHints[idx] ? blankHints[idx][lang] : fb.hint_uk;
    return {
      sentence: fb.sentence,
      answer: fb.answer,
      hint_uk: nativeHint
    };
  });

  // Localize Listening Questions
  const localizedQuestionsSource = presetListeningQuestions[presetId]?.[target] || base.payload.listeningQuestions;
  const localizedListeningQuestions = localizedQuestionsSource.map((q, idx) => {
    const nativeHint = quizHints[idx] ? quizHints[idx][lang] : q.hint_uk;
    return {
      ...q,
      hint_uk: nativeHint
    };
  });

  // Localize Visual Associations
  const localizedVisualAssociations = base.payload.visualAssociations.map((va) => {
    const nativeTranslation = vocabularyTranslations[va.word] ? vocabularyTranslations[va.word][lang] : va.translation;
    return {
      ...va,
      translation: nativeTranslation
    };
  });

  // Localize Speaking Starters
  const localizedSpeakingStarters = base.payload.speakingStarters.map((ss, idx) => {
    let targetPrompt = ss.prompt_en;
    if (presetId === "organic_farming") {
      if (target === "ro") {
        if (idx === 0) targetPrompt = "În opinia mea, a mânca produse proaspete recoltate la zori de zi este excelent deoarece...";
        else if (idx === 1) targetPrompt = "Cred că agricultura durabilă este critică pentru planeta noastră pentru că...";
        else targetPrompt = "Dacă aș cultiva ierburi aromatice, aș dori să încep cu...";
      } else if (target === "es") {
        if (idx === 0) targetPrompt = "En mi opinión, comer productos frescos cosechados al amanecer es excelente porque...";
        else if (idx === 1) targetPrompt = "Creo que la agricultura sostenible es fundamental para nuestro planeta porque...";
        else targetPrompt = "Si cultivara hierbas aromáticas, me gustaría empezar con...";
      } else if (target === "uk") {
        if (idx === 0) targetPrompt = "На мою думку, їсти свіжі продукти, зібрані на світанку, чудово, тому що...";
        else if (idx === 1) targetPrompt = "Я вважаю, що стале сільське господарство є критично важливим для нашої планети, тому що...";
        else targetPrompt = "Якби я вирощував ароматні трави, я б хотів почати з...";
      }
    } else {
      if (target === "ro") {
        if (idx === 0) targetPrompt = "În experiența mea, folosirea unui algoritm adaptiv este mai bună deoarece...";
        else targetPrompt = "Dacă aș avea acces la un robot de predare autonom, i-aș cere să mă ajute cu...";
      } else if (target === "es") {
        if (idx === 0) targetPrompt = "En mi experiencia, usar un algoritmo de aprendizaje adaptativo es mejor porque...";
        else targetPrompt = "Si tuviera acceso a un maestro robot completamente autónomo, le pediría que me ayudara con...";
      } else if (target === "uk") {
        if (idx === 0) targetPrompt = "З мого досвіду, використовувати адаптивний алгоритм навчання краще, тому що...";
        else targetPrompt = "Якби я мав доступ до повністю автономного вчителя-робота, я б попросив його допомогти мені з...";
      }
    }

    const nativePrompt = speakingPrompts[idx] ? speakingPrompts[idx][lang] : ss.prompt_uk;

    const localizedCorrectPatterns = ss.correctPatterns.map((cp) => {
      const vocabDict = isLesson1 ? lesson1Vocabulary : lesson2Vocabulary;
      if (vocabDict[cp] && vocabDict[cp][target]) {
        return vocabDict[cp][target].word;
      }
      return cp;
    });

    return {
      prompt_en: targetPrompt,
      prompt_uk: nativePrompt,
      correctPatterns: localizedCorrectPatterns
    };
  });

  const textLocalized = presetTexts[presetId] ? presetTexts[presetId][target] : base.text;

  return {
    topic: isLesson1 
      ? (target === "ro" ? "Plante Organice și Recoltare Durabilă" : target === "es" ? "Hierbas Orgánicas y Cosecha Sostenible" : base.payload.topic)
      : (target === "ro" ? "Inteligență Artificială și Educație Alternativă" : target === "es" ? "Inteligencia Artificial y Educación Alternativa" : base.payload.topic),
    text: textLocalized,
    vocabulary: localizedVocabulary,
    grammarRule: {
      name: grammarName,
      formula: grammarFormula,
      explanation_uk: grammarExplanationNative,
      examples: grammarExamples,
      commonErrors: localizedCommonErrors,
      fillInBlanks: localizedFillInBlanks,
      sentenceBuild: presetSentenceBuilds[presetId]?.[target] || base.payload.grammarRule.sentenceBuild
    },
    listeningScript: textLocalized,
    listeningQuestions: localizedListeningQuestions,
    visualAssociations: localizedVisualAssociations,
    speakingStarters: localizedSpeakingStarters
  };
}
