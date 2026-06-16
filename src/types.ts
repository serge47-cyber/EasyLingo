export interface VocabItem {
  word: string;
  transcription: string;
  partOfSpeech: string;
  translation_uk: string;
  exampleSentence: string;
  difficulty: string;
}

export interface CommonError {
  incorrect: string;
  correct: string;
  reason_uk: string;
}

export interface FillBlankItem {
  sentence: string;
  answer: string;
  hint_uk: string;
}

export interface ScrambledSentence {
  correctSentence: string;
  words: string[];
}

export interface GrammarBlock {
  name: string;
  formula: string;
  explanation_uk: string;
  examples: string[];
  commonErrors: CommonError[];
  fillInBlanks: FillBlankItem[];
  sentenceBuild: ScrambledSentence[];
}

export interface ListeningQuestion {
  id: string;
  type: "multiple-choice" | "true-false" | "gap-fill";
  question: string;
  options: string[];
  answer: string;
  hint_uk: string;
}

export interface VisualAssociation {
  word: string;
  translation: string;
  emoji: string;
}

export interface SpeakingStarter {
  prompt_en: string;
  prompt_uk: string;
  correctPatterns: string[];
}

export interface LessonPayload {
  topic: string;
  vocabulary: VocabItem[];
  grammarRule: GrammarBlock;
  listeningScript: string;
  listeningQuestions: ListeningQuestion[];
  visualAssociations: VisualAssociation[];
  speakingStarters: SpeakingStarter[];
}

export type LearningMethodology =
  | "spaced_repetition"
  | "task_based"
  | "phonics_shadowing"
  | "lexical_approach"
  | "tpr"
  | "gamified_mixed";

export interface MethodologyMeta {
  id: LearningMethodology;
  title: string;
  emojis: string;
  ideologicalFounder: string;
  description_uk: string;
  tagline: string;
  activitiesOrder: number[]; // Index indices of the 7 activities
  styleTone: "academic" | "supportive" | "playful" | "phonetic";
}

export interface LessonStats {
  lessonId: string;
  topic: string;
  date: string;
  methodology: string;
  scores: {
    vocabulary: number;
    grammar: number;
    listening: number;
    pronunciation: number;
    spelling: number;
    speaking: number;
  };
  weakWords: string[];
  timeSpentSeconds: number;
}
