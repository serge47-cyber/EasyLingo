import React, { useState } from "react";
import { Award, Flame, Globe2, Sparkles, BookOpen } from "lucide-react";
import { LOCALIZATION_DICTIONARY } from "../localization";

interface HeaderProps {
  xp: number;
  streak: number;
  nativeLang: string;
  setNativeLang: (n: string) => void;
  targetLang: string;
  setTargetLang: (t: string) => void;
  currentActivityIndex?: number;
  totalActivities?: number;
  activityTitle?: string;
  onExit?: () => void;
}

const NATIVE_LANG_LABELS: Record<string, string> = {
  uk: "UA",
  en: "EN",
  ro: "RO",
  es: "ES"
};

const TARGET_LANG_LABELS: Record<string, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  ro: "Română",
  uk: "Українська"
};

export default function Header({
  xp,
  streak,
  nativeLang,
  setNativeLang,
  targetLang,
  setTargetLang,
  currentActivityIndex,
  totalActivities,
  activityTitle,
  onExit,
}: HeaderProps) {
  const t = LOCALIZATION_DICTIONARY[nativeLang] || LOCALIZATION_DICTIONARY["uk"];
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo and Brand */}
        <div 
          onClick={onExit}
          className="flex cursor-pointer items-center gap-2.5 transition active:scale-95"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-display text-xl font-bold text-white shadow-md shadow-blue-200">
            E
          </div>
          <div className="hidden sm:block">
            <h1 className="font-display text-lg font-bold tracking-tight text-blue-900">
              EasyLingo
            </h1>
            <p className="font-mono text-[10px] text-slate-400">🎓 PDF Interactive Syllabus</p>
          </div>
        </div>

        {/* Center Progress Bar (Only shown during active lesson) */}
        {currentActivityIndex !== undefined && totalActivities !== undefined && (
          <div className="flex flex-1 max-w-md mx-6 items-center flex-col justify-center sm:-translate-x-2">
            <div className="flex w-full items-center justify-between font-mono text-[11px] text-slate-500 mb-1 px-1">
              <span className="truncate max-w-[150px] sm:max-w-xs font-semibold text-slate-700">
                {activityTitle || "Activity"}
              </span>
              <span>
                {currentActivityIndex + 1} / {totalActivities}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
              <div
                style={{ width: `${((currentActivityIndex + 1) / totalActivities) * 100}%` }}
                className="h-full rounded-full bg-blue-600 transition-all duration-300 ease-out"
              />
            </div>
          </div>
        )}

        {/* Right side stats & localized state */}
        <div className="flex items-center gap-3">
          {/* Streak Indicator */}
          <div 
            title={t.streakTitle}
            className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-amber-700 font-mono text-xs font-semibold shadow-sm border border-amber-100 animate-pulse"
          >
            <Flame className="h-4 w-4 fill-amber-500 stroke-amber-600" />
            <span>{streak} {t.streakLabel}</span>
          </div>

          {/* XP Indicator */}
          <div 
            title={t.xpTitle}
            className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-blue-700 font-mono text-xs font-semibold border border-blue-100"
          >
            <Sparkles className="h-4 w-4 text-blue-500 fill-blue-200" />
            <span>{xp} XP</span>
          </div>

          {/* Language Info display badged selector */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 active:scale-95 transition-all text-xs font-semibold font-mono text-slate-700"
              title={t.streakTitle}
            >
              <Globe2 className="h-3.5 w-3.5 text-blue-600" />
              <span>{NATIVE_LANG_LABELS[nativeLang] || nativeLang.toUpperCase()} → {targetLang.toUpperCase()}</span>
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-3 shadow-xl z-50 space-y-2">
                <div className="font-mono text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Рідна мова / Native</div>
                <div className="grid grid-cols-2 gap-1">
                  {Object.keys(LOCALIZATION_DICTIONARY).map((code) => (
                    <button
                      key={code}
                      onClick={() => {
                        setNativeLang(code);
                        localStorage.setItem("easyenglish_native_lang", code);
                        setShowLangMenu(false);
                      }}
                      className={`px-1.5 py-1 text-xs font-semibold rounded-md border text-center transition ${
                        nativeLang === code
                          ? "bg-blue-50 border-blue-200 text-blue-700"
                          : "bg-slate-50 border-slate-100 hover:bg-slate-100 text-slate-600"
                      }`}
                    >
                      {NATIVE_LANG_LABELS[code] || code.toUpperCase()}
                    </button>
                  ))}
                </div>

                <div className="font-mono text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-2">Вивчаю / Studying</div>
                <div className="grid grid-cols-1 gap-1 max-h-40 overflow-y-auto">
                  {Object.entries(TARGET_LANG_LABELS).map(([code, label]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setTargetLang(code);
                        localStorage.setItem("easyenglish_target_lang", code);
                        setShowLangMenu(false);
                      }}
                      className={`px-2 py-1 text-left text-xs font-semibold rounded-md border transition flex justify-between items-center ${
                        targetLang === code
                          ? "bg-violet-50 border-violet-200 text-violet-700"
                          : "bg-slate-50 border-slate-100 hover:bg-slate-100 text-slate-600"
                      }`}
                    >
                      <span>{label}</span>
                      <span className="text-[10px] opacity-60 uppercase">{code}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {onExit && (
            <button
              onClick={onExit}
              className="text-xs font-semibold font-mono text-rose-600 bg-rose-50 hover:bg-rose-100 px-2.5 py-1.5 rounded-lg active:scale-95 transition ml-1"
            >
              {t.exitButton}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
