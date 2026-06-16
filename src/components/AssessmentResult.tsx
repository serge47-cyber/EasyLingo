import React, { useState } from "react";
import { Award, Share2, ArrowRight, RotateCcw, BarChart3, AlertCircle, CheckCircle2, ChevronRight, BookOpen, Star } from "lucide-react";
import { LessonPayload, MethodologyMeta } from "../types";

interface AssessmentResultProps {
  lang: "ua" | "en";
  nativeLang?: string;
  targetLang?: string;
  payload: LessonPayload;
  methodology: MethodologyMeta;
  scores: Record<string, number>;
  weakWords: string[];
  timeSpentSeconds: number;
  onRestartWeakSpot: () => void;
  onProceedNextLesson: () => void;
  onRepeatSameMethodology: () => void;
  onChangeMethodology: () => void;
}

export default function AssessmentResult({
  lang,
  payload,
  methodology,
  scores,
  weakWords,
  timeSpentSeconds,
  onRestartWeakSpot,
  onProceedNextLesson,
  onRepeatSameMethodology,
  onChangeMethodology,
}: AssessmentResultProps) {
  const isLanguageUA = lang === "ua";

  // Calculate composite score (average of the 6 disciplines)
  const scoreKeys = ["vocabulary", "grammar", "listening", "pronunciation", "spelling", "speaking"];
  const averageScore = Math.round(
    scoreKeys.reduce((acc, curr) => acc + (scores[curr] || 0), 0) / scoreKeys.length
  );

  // CEFR labels
  const cefrRanking = averageScore >= 90 ? "C1 Advanced" : averageScore >= 75 ? "B2 Upper-Int" : averageScore >= 55 ? "B1 Intermediate" : "A2 Pre-Int";

  // Dynamic advice generator based on weakest score element
  const getSyllabusRecommendation = () => {
    const minVal = Math.min(...scoreKeys.map(k => scores[k] || 0));
    const weakestKey = scoreKeys.find(k => scores[k] === minVal) || "vocabulary";

    const localRecommendations: Record<string, string> = {
      vocabulary: isLanguageUA 
        ? "Вашою найслабшою зоною став словниковий запас. Рекомендуємо частіше користуватися картками Spaced Repetition та знаходити асоціації у грі Memory Match."
        : "Vocabulary recall was your lowest area. Focus on Spaced Repetition flashcards and try mapping visual associations to solidify lexical density.",
      grammar: isLanguageUA
        ? "Граматичне правило було засвоєне недостатньо. Перегляньте формулу правила Present Perfect / Continuous Passive та попрактикуйтесь будувати речення з блоків."
        : "The passive grammar structure requires refinement. Review the structural formulas and prioritize scrambled block builders.",
      listening: isLanguageUA
        ? "Сприйняття тексту на слух далося важко. Спробуйте послухати монолог ще кілька разів на уповільненій швидкості 0.75x та наголошуйте на закінченнях."
        : "Listening accuracy needs practice. Try slowing the monogram to 0.75x, and carefully trace phoneme transitions as you audiate.",
      pronunciation: isLanguageUA
        ? "Артикуляція потребує додаткових тренувань. Використовуйте режим Phonics & Shadowing, щоб копіювати вимову вслід за носієм зразка."
        : "Vocal muscle articulation is still developing. Adopt the Shadowing method to record and compare your vocals against the native model.",
      spelling: isLanguageUA
        ? "Орфографія показала низький результат. Напишіть кожне вивчене слово на аркуші або введіть його кілька разів у розділі Spelling кілька разів."
        : "Spelling and orthographical writing fell below targets. Use active typing drills repeatedly to build muscular memory for these words.",
      speaking: isLanguageUA
        ? "Свобода усного висловлювання потребує вдосконалення. Намагайтеся прописувати більше готових мовленнєвих шаблонів (chunks), використовуючи нову лексику."
        : "Contextual speaking output is still developing. Drill complete lexical chunks rather than individual word stems to accelerate active fluency."
    };

    return localRecommendations[weakestKey] || localRecommendations.vocabulary;
  };

  const adviceDetail = getSyllabusRecommendation();

  // Show previous progress histories stored in local storage
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [progressLog, setProgressLog] = useState<any[]>(() => {
    const historicalString = localStorage.getItem("easyenglish_history");
    return historicalString ? JSON.parse(historicalString) : [];
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12 animate-fadeIn">
      {/* Top Banner Celebration */}
      <div className="text-center mb-10 space-y-3">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg shadow-amber-200">
          <Star className="h-8 w-8 fill-white animate-bounce" />
        </div>
        <h2 className="font-display text-3xl font-black text-slate-900 md:text-3.5xl">
          {isLanguageUA ? "🏆 РЕЗУЛЬТАТ УРОКУ" : "🏆 SYLLABUS COMPLETE"}
        </h2>
        <p className="text-sm text-slate-500 max-w-sm mx-auto">
          {isLanguageUA 
            ? `Ви щойно завершили інтерактивне заняття з теми "${payload.topic}" за методикою ${methodology.title}.` 
            : `You constructed and passed the exam from "${payload.topic}" using the ${methodology.title} methodology.`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Metrics & CEFR Radar Bento */}
        <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-md p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-display font-black text-slate-800 text-sm tracking-wide">
              📊 {isLanguageUA ? "ОЦІНКА ЗНАНЬ ЗА ДИСЦИПЛІНАМИ" : "CEFR SKILLS AUDIT"}
            </h3>
            <span className="font-mono text-[10px] font-bold text-slate-400">
              {cefrRanking}
            </span>
          </div>

          {/* Bar metrics breakdown */}
          <div className="space-y-4">
            {[
              { label: isLanguageUA ? "Словник & Лексика" : "Vocabulary Recall", key: "vocabulary", color: "bg-blue-600" },
              { label: isLanguageUA ? "Конструктор Граматики" : "Grammar Form", key: "grammar", color: "bg-blue-600" },
              { label: isLanguageUA ? "Аудіювання & Слух" : "Acoustic Listening", key: "listening", color: "bg-emerald-600" },
              { label: isLanguageUA ? "Фонетична Вимова" : "Vocal Articulation", key: "pronunciation", color: "bg-amber-500" },
              { label: isLanguageUA ? "Орфографія & Диктанти" : "Orthography Spelling", key: "spelling", color: "bg-pink-600" },
              { label: isLanguageUA ? "Говоріння & Продукція" : "Speaking Production", key: "speaking", color: "bg-violet-600" }
            ].map((skill) => {
              const val = scores[skill.key] || 0;
              return (
                <div key={skill.key} className="space-y-1 text-xs">
                  <div className="flex justify-between font-medium text-slate-600">
                    <span>{skill.label}</span>
                    <span className="font-bold font-mono">{val}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div
                      style={{ width: `${val}%` }}
                      className={`h-full rounded-full transition-all duration-1000 ${skill.color}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Overall score section */}
          <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-between border border-slate-150">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                {isLanguageUA ? "ЗАГАЛЬНИЙ БАЛ" : "COMPOSITE GRADE"}
              </span>
              <span className="font-display font-black text-2.5xl text-slate-900 leading-none">
                {averageScore} / 100
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                {isLanguageUA ? "CEFR РІВЕНЬ" : "CEFR BANDING"}
              </span>
              <span className="text-blue-600 font-bold text-sm bg-blue-50 px-2.5 py-1 rounded">
                ✔ {cefrRanking}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Coaching Recommendations & Weak Words */}
        <div className="md:col-span-5 space-y-6">
          {/* Coaching card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 space-y-4">
            <h3 className="font-display font-black text-slate-800 text-sm tracking-wide">
              💡 {isLanguageUA ? "РЕКОМЕНДАЦІЇ ШІ-ВАЙЗЕРА" : "COACHING BLUEPRINT"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans bg-slate-50 p-4 rounded-xl border border-slate-100">
              {adviceDetail}
            </p>

            {/* Weak Words tag clouds */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono block">
                🔴 {isLanguageUA ? "СЛАБКІ СЛОВА УРОКУ (ПОТРЕБУЮТЬ УВАГИ):" : "WEAK SPOTS FOR EXTRA DRILLS:"}
              </span>
              {weakWords.length > 0 ? (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {weakWords.map((word) => (
                    <span
                      key={word}
                      className="px-2.5 py-1 bg-red-50 text-red-700 border border-red-100 font-mono text-xs font-bold rounded-lg"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400 font-medium italic pt-1">
                  🎉 {isLanguageUA ? "Немає слабких слів! Справжній лінгвістичний геній!" : "Zero weak spots found. Outstanding retention!"}
                </p>
              )}
            </div>

            {/* Main call to action controls */}
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <button
                onClick={onRepeatSameMethodology}
                className="w-full border border-blue-600 bg-blue-50/20 hover:bg-blue-50 text-blue-800 rounded-xl py-3 text-xs font-bold transition active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="h-4 w-4 text-blue-600" />
                <span>{isLanguageUA ? "Повторити весь урок повністю" : "Repeat entire lesson fully"}</span>
              </button>

              <button
                onClick={onChangeMethodology}
                className="w-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl py-3 text-xs font-bold transition active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="h-4 w-4 text-slate-400" />
                <span>{isLanguageUA ? "Змінити методику вивчення" : "Change study methodology"}</span>
              </button>

              {weakWords.length > 0 && (
                <button
                  onClick={onRestartWeakSpot}
                  className="w-full border border-red-250 bg-red-50/10 hover:bg-red-50/30 text-red-700 rounded-xl py-3 text-xs font-bold transition active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="h-4 w-4 text-red-500" />
                  <span>{isLanguageUA ? "Повторити лише слабкі місця" : "Drill weak terms again"}</span>
                </button>
              )}

              <button
                onClick={onProceedNextLesson}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-xs font-bold shadow-md shadow-blue-100 transition active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{isLanguageUA ? "Завантажити новий підручник" : "Load new PDF syllabus"}</span>
                <ChevronRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => setShowHistory(!showHistory)}
                className="w-full border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl py-3 text-xs font-medium transition active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <BarChart3 className="h-4 w-4 text-slate-400" />
                <span>{isLanguageUA ? "Подивитися прогрес" : "Toggle progress logs"}</span>
              </button>
            </div>
          </div>

          {/* Historical progress logs panel */}
          {showHistory && (
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4 animate-scaleUp">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h4 className="font-display font-black text-xs text-slate-700">
                  {isLanguageUA ? "📝 МУЛЬТИСЕСІЙНИЙ ЛОГ" : "📝 HISTORIC SCORE LOGS"}
                </h4>
                <button
                  onClick={() => {
                    localStorage.removeItem("easyenglish_history");
                    setProgressLog([]);
                  }}
                  className="text-[10px] text-rose-600 font-bold hover:underline"
                >
                  {isLanguageUA ? "Очистити" : "Clear list"}
                </button>
              </div>

              {progressLog.length === 0 ? (
                <p className="text-xs text-slate-400 italic">
                  {isLanguageUA ? "Сесій поки немає. Пройдіть перший урок." : "No saved sessions yet."}
                </p>
              ) : (
                <div className="space-y-3 max-h-[220px] overflow-y-auto">
                  {progressLog.slice().reverse().map((logItem: any, idx: number) => (
                    <div key={idx} className="bg-slate-50 rounded-xl p-3 border border-slate-150 space-y-1.5 font-sans text-[11px]">
                      <div className="flex items-center justify-between font-bold">
                        <span className="text-slate-700 truncate max-w-[120px]">{logItem.topic}</span>
                        <span className="text-blue-600">{logItem.compositeScore}/100</span>
                      </div>
                      <div className="flex justify-between text-slate-400 font-mono text-[10px]">
                        <span>{logItem.date}</span>
                        <span>{logItem.methodology}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
