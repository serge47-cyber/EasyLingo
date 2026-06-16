import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Onboarding from "./components/Onboarding";
import WordSelector from "./components/WordSelector";
import MethodologySelector from "./components/MethodologySelector";
import LessonActivities from "./components/LessonActivities";
import AssessmentResult from "./components/AssessmentResult";
import { LessonPayload, MethodologyMeta, LessonStats, VocabItem } from "./types";
import { LOCALIZATION_DICTIONARY } from "./localization";

export default function App() {
  // Localization settings
  const [nativeLang, setNativeLang] = useState<string>(() => {
    return localStorage.getItem("easyenglish_native_lang") || "uk";
  });

  const [targetLang, setTargetLang] = useState<string>(() => {
    return localStorage.getItem("easyenglish_target_lang") || "en";
  });

  // Keep derived legacy helper for components
  const lang = nativeLang === "uk" ? "ua" : "en";

  // Experience and streak statistics
  const [xp, setXp] = useState<number>(() => {
    const savedXp = localStorage.getItem("easyenglish_xp");
    return savedXp ? parseInt(savedXp) : 150; // default 150 baseline points
  });

  const [streak, setStreak] = useState<number>(() => {
    const savedStreak = localStorage.getItem("easyenglish_streak");
    return savedStreak ? parseInt(savedStreak) : 5; // default 5-day active streak
  });

  // Flow State Machine: 'onboarding' | 'word-selector' | 'methodology' | 'activities' | 'assessment'
  const [phase, setPhase] = useState<"onboarding" | "word-selector" | "methodology" | "activities" | "assessment">("onboarding");

  // Dynamic lesson payload and strategy
  const [payload, setPayload] = useState<LessonPayload | null>(null);
  const [originalPayload, setOriginalPayload] = useState<LessonPayload | null>(null);
  const [customizedPayload, setCustomizedPayload] = useState<LessonPayload | null>(null);
  const [methodology, setMethodology] = useState<MethodologyMeta | null>(null);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);

  // Active workout results
  const [scores, setScores] = useState<Record<string, number>>({
    vocabulary: 0,
    grammar: 0,
    listening: 0,
    pronunciation: 0,
    spelling: 0,
    speaking: 0
  });
  const [weakWords, setWeakWords] = useState<string[]>([]);
  const [sessionStartTime, setSessionStartTime] = useState<number>(0);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(0);

  // Synchronize statistics with local storage
  useEffect(() => {
    localStorage.setItem("easyenglish_xp", xp.toString());
  }, [xp]);

  useEffect(() => {
    localStorage.setItem("easyenglish_streak", streak.toString());
  }, [streak]);

  // Phase O: Lesson ready triggers word selector
  const handleLessonReady = (lessonPayload: LessonPayload) => {
    setPayload(lessonPayload);
    setOriginalPayload(lessonPayload);
    setCustomizedPayload(null);
    if (lessonPayload.vocabulary && lessonPayload.vocabulary.length > 0) {
      setPhase("word-selector");
    } else {
      setPhase("methodology");
      setSessionStartTime(Date.now());
    }
  };

  // When word selector completes, build customized payload with up to 10 selected words
  const handleWordsSelected = (selectedWords: VocabItem[]) => {
    if (!originalPayload) return;
    const wordSet = new Set(selectedWords.map(w => w.word.toLowerCase()));
    
    // Filter existing visualAssociations to preserve matching cards for selected words
    const filteredVisuals = (originalPayload.visualAssociations || []).filter(item => 
      wordSet.has(item.word.toLowerCase())
    );
    
    // Fallback represented words to ensure everyone has a match card
    const representedWords = new Set(filteredVisuals.map(fa => fa.word.toLowerCase()));
    selectedWords.forEach(w => {
      if (!representedWords.has(w.word.toLowerCase())) {
        filteredVisuals.push({
          word: w.word,
          translation: w.translation_uk,
          emoji: "📚"
        });
      }
    });

    const customized: LessonPayload = {
      ...originalPayload,
      vocabulary: selectedWords,
      visualAssociations: filteredVisuals
    };
    
    setPayload(customized);
    setCustomizedPayload(customized);
    setPhase("methodology");
    setSessionStartTime(Date.now());
  };

  // Phase 1: Methodology selected, routing to dynamic syllabus drill
  const handleMethodologySelected = (selectedMeta: MethodologyMeta) => {
    setMethodology(selectedMeta);
    setPhase("activities");
  };

  // Phase 2: Active Activities done. Proceeding to score dashboards
  const handleLessonFinished = (
    finalScores: Record<string, number>,
    finalWeakWords: string[]
  ) => {
    const duration = Math.round((Date.now() - sessionStartTime) / 1000);
    setTimeSpentSeconds(duration);
    setScores(finalScores);
    setWeakWords(finalWeakWords);

    // Increment points for course completion
    const gainedXP = 120 + finalWeakWords.length * 10;
    setXp((prev) => prev + gainedXP);

    // Save session logs to history array
    if (payload && methodology) {
      const statsEntry: LessonStats = {
        lessonId: `lesson_${Date.now()}`,
        topic: payload.topic,
        date: new Date().toLocaleDateString(lang === "ua" ? "uk-UA" : "en-US"),
        methodology: methodology.title,
        scores: {
          vocabulary: finalScores.vocabulary || 0,
          grammar: finalScores.grammar || 0,
          listening: finalScores.listening || 0,
          pronunciation: finalScores.pronunciation || 0,
          spelling: finalScores.spelling || 0,
          speaking: finalScores.speaking || 0,
        },
        weakWords: finalWeakWords,
        timeSpentSeconds: duration
      };

      const existingString = localStorage.getItem("easyenglish_history");
      const currentHistory = existingString ? JSON.parse(existingString) : [];
      currentHistory.push({
        topic: payload.topic,
        compositeScore: Math.round(
          Object.values(finalScores).reduce((a, b) => a + b, 0) / Object.keys(finalScores).length
        ),
        date: statsEntry.date,
        methodology: statsEntry.methodology
      });
      localStorage.setItem("easyenglish_history", JSON.stringify(currentHistory));
    }

    setPhase("assessment");
  };

  // Phase 3 Actions: Restart drills targeting weak vocabulary directly
  const handleRestartWeakSpot = () => {
    const basePayload = customizedPayload || payload || originalPayload;
    if (!basePayload || weakWords.length === 0) return;

    // Filter vocab to include weak items only
    const filteredVocab = basePayload.vocabulary.filter((word) =>
      weakWords.includes(word.word)
    );

    // Reconstruct vocabulary deck
    const reconstructionPayload: LessonPayload = {
      ...basePayload,
      vocabulary: filteredVocab
    };

    setPayload(reconstructionPayload);
    // Force Spaced Repetition to focus on flashcards/spelling
    setPhase("activities");
    setSessionStartTime(Date.now());
  };

  const handleRepeatSameMethodology = () => {
    const basePayload = customizedPayload || originalPayload;
    if (!basePayload) return;
    setPayload(basePayload);
    setWeakWords([]);
    setPhase("activities");
    setSessionStartTime(Date.now());
  };

  const handleChangeMethodology = () => {
    const basePayload = customizedPayload || originalPayload;
    if (!basePayload) return;
    setPayload(basePayload);
    setWeakWords([]);
    setMethodology(null);
    setPhase("methodology");
  };

  const handleProceedNextLesson = () => {
    setPayload(null);
    setOriginalPayload(null);
    setCustomizedPayload(null);
    setMethodology(null);
    setWeakWords([]);
    setPhase("onboarding");
  };

  const handleExitLesson = () => {
    setShowExitModal(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-indigo-100 selection:text-indigo-950">
      {/* Dynamic Navigation Header */}
      <Header
        xp={xp}
        streak={streak}
        nativeLang={nativeLang}
        setNativeLang={setNativeLang}
        targetLang={targetLang}
        setTargetLang={setTargetLang}
        onExit={phase !== "onboarding" ? handleExitLesson : undefined}
      />

      {/* Main Flow Router Container */}
      <main className="flex-1">
        {phase === "onboarding" && (
          <Onboarding 
            lang={lang} 
            nativeLang={nativeLang} 
            targetLang={targetLang} 
            onLessonReady={handleLessonReady} 
          />
        )}

        {phase === "word-selector" && originalPayload && (
          <WordSelector
            lang={lang}
            nativeLang={nativeLang}
            targetLang={targetLang}
            topic={originalPayload.topic}
            vocabulary={originalPayload.vocabulary}
            onSelectionComplete={handleWordsSelected}
            onBack={() => setPhase("onboarding")}
          />
        )}

        {phase === "methodology" && payload && (
          <MethodologySelector
            lang={lang}
            nativeLang={nativeLang}
            targetLang={targetLang}
            topic={payload.topic}
            onMethodologySelected={handleMethodologySelected}
            onBack={() => {
              if (originalPayload && originalPayload.vocabulary && originalPayload.vocabulary.length > 0) {
                setPhase("word-selector");
              } else {
                setPhase("onboarding");
              }
            }}
          />
        )}

        {phase === "activities" && payload && methodology && (
          <LessonActivities
            lang={lang}
            nativeLang={nativeLang}
            targetLang={targetLang}
            payload={payload}
            methodology={methodology}
            onLessonFinished={handleLessonFinished}
            onExit={handleExitLesson}
          />
        )}

        {phase === "assessment" && payload && methodology && (
          <AssessmentResult
            lang={lang}
            nativeLang={nativeLang}
            targetLang={targetLang}
            payload={payload}
            methodology={methodology}
            scores={scores}
            weakWords={weakWords}
            timeSpentSeconds={timeSpentSeconds}
            onRestartWeakSpot={handleRestartWeakSpot}
            onProceedNextLesson={handleProceedNextLesson}
            onRepeatSameMethodology={handleRepeatSameMethodology}
            onChangeMethodology={handleChangeMethodology}
          />
        )}
      </main>

      {/* Custom Exit Lesson Confirmation Modal (Solves iframe standard confirm blocker) */}
      {showExitModal && (() => {
        const t = LOCALIZATION_DICTIONARY[nativeLang] || LOCALIZATION_DICTIONARY["uk"];
        return (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl max-w-sm w-full p-6 space-y-5 animate-scaleUp">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 text-base">
                  ⚠️
                </div>
                <h3 className="font-display font-black text-slate-900 text-base leading-tight">
                  {t.exitLessonTitle}
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.exitLessonDesc}
              </p>
              <div className="flex gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowExitModal(false);
                    handleProceedNextLesson();
                  }}
                  className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-3 rounded-xl transition cursor-pointer"
                >
                  {t.yesExit}
                </button>
                <button
                  type="button"
                  onClick={() => setShowExitModal(false)}
                  className="flex-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs py-3 rounded-xl transition cursor-pointer"
                >
                  {t.cancel}
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Humble Elegant footer */}
      <footer className="border-t border-slate-200/80 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <p className="font-mono text-[11px] text-slate-400">
            © 2026 EasyLingo Platform. Inspired by Dave Willis TBLT & Ebbinghaus Repetitions.
          </p>
          <div className="flex gap-4 font-mono text-[11px] text-indigo-500 font-bold">
            <span className="hover:underline cursor-help">asienglishclass / КНУБА</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
