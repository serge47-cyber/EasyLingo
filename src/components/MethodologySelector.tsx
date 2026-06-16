import React, { useState } from "react";
import { Award, Brain, Target, Mic, BookOpen, MoveLeft, ChevronRight, HelpCircle, Trophy, User } from "lucide-react";
import { LearningMethodology, MethodologyMeta } from "../types";

interface MethodologySelectorProps {
  lang: "ua" | "en";
  nativeLang?: string;
  targetLang?: string;
  topic: string;
  onMethodologySelected: (meta: MethodologyMeta) => void;
  onBack: () => void;
}

export default function MethodologySelector({
  lang,
  nativeLang = "uk",
  targetLang = "en",
  topic,
  onMethodologySelected,
  onBack,
}: MethodologySelectorProps) {
  const isLanguageUA = nativeLang === "uk";

  // Formulate metadata for the 6 methodologies with multi-language localizations
  const methodologies: (MethodologyMeta & {
    taglines: Record<string, string>;
    descriptions: Record<string, string>;
  })[] = [
    {
      id: "spaced_repetition",
      title: "Spaced Repetition",
      emojis: "🧠",
      ideologicalFounder: "Hermann Ebbinghaus",
      tagline: isLanguageUA ? "Картки з інтервальним повторенням" : "Anki-style interval recall cards",
      taglines: {
        uk: "Картки з інтервальним повторенням",
        en: "Anki-style interval recall cards",
        ro: "Carduri de repetare la intervale",
        es: "Tarjetas de repetición espaciada"
      },
      description_uk: "spaced",
      descriptions: {
        uk: "Система будує інтервали повторення на основі кривої забування Еббінгауса. Орієнтована на перенесення слів з короткострокової у довгострокову пам'ять.",
        en: "Builds memory consolidation intervals based on Ebbinghaus forgetting curve. It places flashcards and spelling quizzes first to cement terminology.",
        ro: "Construiește intervale de consolidare a memoriei bazate pe curba uitării a lui Ebbinghaus. Pune pe primul loc cardurile de memorie și testele de scriere pentru a fixa terminologia.",
        es: "Construye intervalos de consolidación de memoria basados en la curva del olvido de Ebbinghaus. Coloca primero las tarjetas y pruebas de ortografía para consolidar la terminología."
      },
      activitiesOrder: [0, 5, 4, 1, 2, 3, 6], // Cards -> Match -> Spelling -> Grammar -> Listening -> Speak -> OpenSpeak
      styleTone: "supportive"
    },
    {
      id: "task_based",
      title: "Task-Based Learning",
      emojis: "🎯",
      ideologicalFounder: "Dave Willis / Jane Willis",
      tagline: isLanguageUA ? "Виконання комунікативних завдань" : "Real contextual tasks first",
      taglines: {
        uk: "Виконання комунікативних завдань",
        en: "Real contextual tasks first",
        ro: "Sarcini contextuale reale mai întâi",
        es: "Tareas contextuales primero"
      },
      description_uk: "task",
      descriptions: {
        uk: "Комунікативний підхід, де спочатку студент виконує реальне завдання (аудіювання, говоріння), а потім фокусується на граматиці та окремих словах.",
        en: "Receptive comprehension task and speaking starter come first to establish rich context, then analyzes grammar and structures afterward.",
        ro: "O sarcină de înțelegere receptivă și un exercițiu de vorbire inițiază lecția pentru a stabili un context bogat, analizând ulterior gramatica și structurile.",
        es: "La tarea de comprensión receptiva y el ejercicio de habla van primero para establecer un contexto enriquecido, analizando la gramática y las estructuras después."
      },
      activitiesOrder: [2, 6, 1, 0, 3, 4, 5], // Listening -> Speaking starters -> Grammar -> Flashcards -> Speak -> Spelling -> Match
      styleTone: "academic"
    },
    {
      id: "phonics_shadowing",
      title: "Phonics & Shadowing",
      emojis: "🎵",
      ideologicalFounder: "Alexander Arguelles",
      tagline: isLanguageUA ? "Робота над вимовою та копіюванням" : "Developing articulation muscle memory",
      taglines: {
        uk: "Робота над вимовою та копіюванням",
        en: "Developing articulation muscle memory",
        ro: "Dezvoltarea memoriei musculare a articulării",
        es: "Desarrollo de memoria muscular de pronunciación"
      },
      description_uk: "phonics",
      descriptions: {
        uk: "Акцент на слуховий та артикуляційний апарати. Тінінг та вимова нових слів ідуть спочатку, щоб подолати мовний бар'єр на фізичному рівні.",
        en: "Active voice shadowing and pronunciation drills come first, training your vocal cords and auditory sensors right at the lesson's start.",
        ro: "Shadowing-ul vocal activ și exercițiile de pronunție vin pe primul loc, antrenându-ți corzile vocale și receptorii auditivi chiar de la începutul lecției.",
        es: "El sombreado de voz activa (shadowing) y los ejercicios de pronunciación van primero, entrenando tus cuerdas vocales y sensores auditivos al inicio."
      },
      activitiesOrder: [3, 2, 0, 6, 5, 1, 4], // Pronunciation -> Listening -> Flashcards -> Speaking -> Match -> Grammar -> Spelling
      styleTone: "phonetic"
    },
    {
      id: "lexical_approach",
      title: "Lexical Approach",
      emojis: "📖",
      ideologicalFounder: "Michael Lewis",
      tagline: isLanguageUA ? "Фокус на стійких колокаціях та фразах" : "Fluency through chunks & collocations",
      taglines: {
        uk: "Фокус на стійких колокаціях та фразах",
        en: "Fluency through chunks & collocations",
        ro: "Fluență prin blocuri și colocări",
        es: "Fluidez a través de bloques y colocaciones"
      },
      description_uk: "lexical",
      descriptions: {
        uk: "Слова вивчаються не окремо, а готовими мовленнєвими блоками (chunks). Картки поєднують слова з контекстними реченнями з підручника.",
        en: "Vocabulary cards present complete idioms, phrases, and collocations as multi-word blocks, avoiding mechanical dictionary isolation.",
        ro: "Cardurile de vocabular prezintă expresii complete, fraze și colocări ca blocuri de mai multe cuvinte, evitând izolarea mecanică din dicționar.",
        es: "Las tarjetas de vocabulario presentan modismos, frases y colocaciones completas como bloques de palabras, evitando el aislamiento mecánico."
      },
      activitiesOrder: [0, 5, 6, 2, 1, 3, 4], // Flashcards -> Match -> Speaking -> Listening -> Grammar -> Pronunciation -> Spelling
      styleTone: "academic"
    },
    {
      id: "tpr",
      title: "Total Physical Response",
      emojis: "🔄",
      ideologicalFounder: "James Asher",
      tagline: isLanguageUA ? "Сприйняття мови через дію" : "Language assimilation through actions",
      taglines: {
        uk: "Сприйняття мови через дію",
        en: "Language assimilation through actions",
        ro: "Asimilarea limbajului prin acțiuni",
        es: "Asimilación del lenguaje por acciones"
      },
      description_uk: "tpr",
      descriptions: {
        uk: "Запам'ятовування через візуальну дію та гру. Стартує з гри 'Memory Match' для створення образних зв'язків у гемісферах мозку.",
        en: "Begins physical concept matches immediately, creating spatial motor-sensory triggers that connect words with imagery and actions.",
        ro: "Începe imediat cu potrivirea vizuală a conceptelor, creând stimuli motori și senzoriali care conectează cuvintele cu imaginile și acțiunile.",
        es: "Comienza con la asociación visual de conceptos de inmediato, creando estímulos motores que conectan palabras con imágenes y acciones."
      },
      activitiesOrder: [5, 0, 2, 3, 1, 4, 6], // Match -> Flashcards -> Listening -> Pronunciation -> Grammar -> Spelling -> Speaking
      styleTone: "playful"
    },
    {
      id: "gamified_mixed",
      title: "Gamified Mixed",
      emojis: "🎲",
      ideologicalFounder: "Duolingo-inspired",
      tagline: isLanguageUA ? "Комбінований ігровий режим на бали" : "Rapid gaming intervals, badges and scores",
      taglines: {
        uk: "Комбінований ігровий режим на бали",
        en: "Rapid gaming intervals, badges and scores",
        ro: "Intervale rapide de joc, medalii și scoruri",
        es: "Intervalos de juego rápidos, medallas y puntajes"
      },
      description_uk: "gamified",
      descriptions: {
        uk: "Чергування швидких вправ на написання, зіставлення, блокову граматику та аудіювання. Дає найбільше балів досвіду.",
        en: "Shuffle rapid typing spelling tests, match-up boards, and grammar block builders in a game loop centered on high scores and streaks.",
        ro: "Alternează teste rapide de scriere, potriviri tematice și constructori de gramatică într-un circuit centrat pe scoruri mari și serii de zile.",
        es: "Alterna pruebas rápidas de ortografía, tableros de asociación y construcción de gramática en un ciclo de juego centrado en puntuaciones."
      },
      activitiesOrder: [4, 5, 0, 1, 2, 3, 6], // Spelling -> Match -> Flashcards -> Grammar -> Listening -> Speak -> OpenSpeak
      styleTone: "playful"
    }
  ];

  const [selectedMethodId, setSelectedMethodId] = useState<LearningMethodology>("spaced_repetition");
  const currentMethod = methodologies.find(m => m.id === selectedMethodId)!;

  // Translate activity indices into human readable titles
  const activityNames = [
    nativeLang === "uk" ? "🃏 Словникові Картки" : nativeLang === "ro" ? "🃏 Carduri de vocabular" : nativeLang === "es" ? "🃏 Tarjetas de vocabulario" : "🃏 Vocabulary Flashcards",
    nativeLang === "uk" ? "📝 Граматичний Фокус" : nativeLang === "ro" ? "📝 Gramatică și structuri" : nativeLang === "es" ? "📝 Enfoque gramatical" : "📝 Grammar Focus",
    nativeLang === "uk" ? "🔊 Аудіювання з тестами" : nativeLang === "ro" ? "🔊 Înțelegere audio cu teste" : nativeLang === "es" ? "🔊 Comprensión auditiva" : "🔊 Listening Comprehension",
    nativeLang === "uk" ? "🎙️ Перевірка Вимови" : nativeLang === "ro" ? "🎙️ Verificarea pronunției" : nativeLang === "es" ? "🎙️ Prueba de pronunciación" : "🎙️ Pronunciation Check",
    nativeLang === "uk" ? "⌨️ Швидкий Набір слів" : nativeLang === "ro" ? "⌨️ Scriere rapidă" : nativeLang === "es" ? "⌨️ Ortografía y escritura" : "⌨️ Spelling & Typing",
    nativeLang === "uk" ? "🧩 Гра 'Memory Match'" : nativeLang === "ro" ? "🧩 Joc de potrivire" : nativeLang === "es" ? "🧩 Juego de asociación" : "🧩 Visual Matching Game",
    nativeLang === "uk" ? "💬 Розмовні Шаблони" : nativeLang === "ro" ? "💬 Exerciții de vorbire" : nativeLang === "es" ? "💬 Expresión oral" : "💬 Speaking Starters"
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12 animate-fadeIn">
      {/* Header Back Button */}
      <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-5">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition active:scale-95"
        >
          <MoveLeft className="h-4 w-4" />
          <span>{isLanguageUA ? "Назад до вибору матеріалів" : "Back to materials onboarding"}</span>
        </button>
        <span className="font-mono text-[11px] text-slate-400 font-semibold bg-slate-100 px-2.5 py-1 rounded-full">
          📘 {isLanguageUA ? "Тема" : "Active Syllabus"}: {topic}
        </span>
      </div>

      <div className="text-center mb-10">
        <h2 className="font-display text-2.5xl font-extrabold text-slate-900 sm:text-3.5xl">
          {isLanguageUA ? "Оберіть Методологію Навчання" : "Configure Educational Methodology"}
        </h2>
        <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto">
          {isLanguageUA 
            ? "Оберіть методику, яка відповідає вашим цілям. Це змінить черговість уроку, вагу тестів та стиль зворотного зв'язку." 
            : "Choose the method that suits your learning style. This determines the activity structure sequence and test weight coefficients."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Six Methodologies Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {methodologies.map((method) => {
            const isSelected = method.id === selectedMethodId;
            return (
              <div
                key={method.id}
                onClick={() => setSelectedMethodId(method.id)}
                className={`p-5 rounded-2xl border-2 text-left cursor-pointer transition-all ${isSelected ? "border-blue-600 bg-blue-50/10 shadow-md shadow-blue-100" : "bg-white border-slate-200 hover:border-slate-350 hover:shadow-sm"}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{method.emojis}</span>
                  {isSelected && (
                    <span className="h-2 w-2 rounded-full bg-blue-600 ring-4 ring-blue-100" />
                  )}
                </div>
                <h4 className="font-display font-extrabold text-slate-800 text-sm mb-1">
                  {method.title}
                </h4>
                <p className="text-[10px] text-slate-500 font-medium mb-2.5 truncate max-w-[200px]" title={method.taglines[nativeLang] || method.taglines["en"]}>
                  {method.taglines[nativeLang] || method.taglines["en"]}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono font-semibold">
                  <User className="h-3 w-3" />
                  <span>{method.ideologicalFounder}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Explanation Card */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{currentMethod.emojis}</span>
            <div>
              <h3 className="font-display font-black text-slate-900 text-lg">
                {currentMethod.title}
              </h3>
              <p className="text-xs text-blue-600 font-semibold font-mono">
                {isLanguageUA ? "Ідеолог" : "Founder"}: {currentMethod.ideologicalFounder}
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 mb-5">
            {currentMethod.descriptions[nativeLang] || currentMethod.descriptions["en"]}
          </p>

          {/* Dynamic Syllabus Path Sequence */}
          <div className="space-y-3 mb-6">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
              📋 {isLanguageUA ? "ДИНАМІЧНИЙ ПОРЯДОК НАВЧАННЯ" : "DYNAMIC SYLLABUS FLOW"}
            </span>
            <div className="space-y-2">
              {currentMethod.activitiesOrder.map((actIdx, stepNum) => (
                <div
                  key={actIdx}
                  className="flex items-center gap-2.5 bg-white border border-slate-150 p-2.5 rounded-xl text-xs text-slate-700 hover:border-slate-300 transition-all"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 font-mono text-[10px] font-bold text-blue-600">
                    {stepNum + 1}
                  </div>
                  <span className="font-semibold truncate">{activityNames[actIdx]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Proceed Button */}
          <button
            onClick={() => onMethodologySelected(currentMethod)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 px-4 font-bold text-sm shadow-md shadow-blue-100 transition cursor-pointer active:scale-98 flex items-center justify-center gap-2"
          >
            <span>{isLanguageUA ? "ПОЧАТИ УРОК →" : "START METHODOLOGY LESSON →"}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
