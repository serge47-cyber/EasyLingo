import React, { useState } from "react";
import { VocabItem } from "../types";
import { Check, Info, ArrowRight, RotateCcw, AlertTriangle, CheckSquare, Square, ChevronLeft } from "lucide-react";

interface WordSelectorProps {
  lang: "ua" | "en";
  nativeLang?: string;
  targetLang?: string;
  topic: string;
  vocabulary: VocabItem[];
  onSelectionComplete: (selectedWords: VocabItem[]) => void;
  onBack: () => void;
}

export default function WordSelector({
  lang,
  topic,
  vocabulary,
  onSelectionComplete,
  onBack,
}: WordSelectorProps) {
  const isLanguageUA = lang === "ua";

  // Pre-select ALL words by default to maintain low friction
  const [selectedIndices, setSelectedIndices] = useState<number[]>(() => {
    const initial: number[] = [];
    for (let i = 0; i < vocabulary.length; i++) {
        initial.push(i);
    }
    return initial;
  });

  const handleToggleWord = (index: number) => {
    if (selectedIndices.includes(index)) {
      setSelectedIndices(prev => prev.filter(i => i !== index));
    } else {
      setSelectedIndices(prev => [...prev, index]);
    }
  };

  const handleSelectAll = () => {
    const all: number[] = [];
    for (let i = 0; i < vocabulary.length; i++) {
      all.push(i);
    }
    setSelectedIndices(all);
  };

  const handleClearAll = () => {
    setSelectedIndices([]);
  };

  const handleSubmit = () => {
    if (selectedIndices.length < 1) {
      return;
    }
    const chosenWords = selectedIndices.map(idx => vocabulary[idx]);
    onSelectionComplete(chosenWords);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 animate-fadeIn">
      {/* Back button */}
      <button
        onClick={onBack}
        className="group mb-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800 transition cursor-pointer"
      >
        <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        <span>{isLanguageUA ? "Назад до вибору" : "Back to upload"}</span>
      </button>

      {/* Hero header */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] bg-indigo-50 text-indigo-700 font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
              {isLanguageUA ? "Модуль слів" : "Vocabulary compiler"}
            </span>
            <h1 className="font-display font-black text-xl sm:text-2xl text-slate-850 tracking-tight leading-tight">
              {isLanguageUA ? "Оберіть слова для заняття" : "Customize Words for Your Lesson"}
            </h1>
            <p className="text-xs text-slate-500 max-w-xl">
              {isLanguageUA 
                ? `ШІ знайшов словник для теми "${topic}". Позначте слова, які ви бажаєте тренувати у вправах та картках.` 
                : `AI extracted a dictionary for "${topic}". Select the words you want to cover during drills and matches.`}
            </p>
          </div>

          {/* Quick Select Actions */}
          <div className="flex sm:flex-col shrink-0 gap-2">
            <button
              onClick={handleSelectAll}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition active:scale-95 cursor-pointer flex items-center justify-center gap-1"
            >
              <CheckSquare className="h-3.5 w-3.5" />
              <span>{isLanguageUA ? "Обрати всі" : "Select all"}</span>
            </button>
            <button
              onClick={handleClearAll}
              className="px-3 py-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 text-xs font-bold rounded-lg transition active:scale-95 cursor-pointer flex items-center justify-center gap-1"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>{isLanguageUA ? "Очистити" : "Clear list"}</span>
            </button>
          </div>
        </div>

        {/* Info/Warning counter bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-blue-100 bg-blue-50/20 text-xs">
          <div className="flex items-center gap-2">
            <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${selectedIndices.length > 0 ? "bg-indigo-600 text-white" : "bg-amber-100 text-amber-800"}`}>
              {selectedIndices.length}
            </div>
            <span className="font-semibold text-slate-700">
              {isLanguageUA 
                ? `Обрано словникових одиниць: ${selectedIndices.length} з ${vocabulary.length}` 
                : `Active vocabulary selected: ${selectedIndices.length} of ${vocabulary.length}`}
            </span>
          </div>

          {selectedIndices.length === 0 && (
            <div className="text-rose-600 font-bold flex items-center gap-1 shrink-0">
              <AlertTriangle className="h-4 w-4 shrink-0" />
              <span>{isLanguageUA ? "Оберіть хоча б 1 слово" : "Please select at least 1 word"}</span>
            </div>
          )}
        </div>
      </div>

      {/* Words Grid List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {vocabulary.map((item, index) => {
          const isSelected = selectedIndices.includes(index);
          
          return (
            <div
              key={index}
              onClick={() => handleToggleWord(index)}
              className={`p-3 rounded-xl border-2 transition-all duration-150 flex items-center gap-2.5 select-none ${
                isSelected 
                  ? "border-indigo-600 bg-indigo-50/20 ring-2 ring-indigo-50" 
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50 cursor-pointer"
              }`}
            >
              {/* Custom checkbox indicator */}
              <div className="shrink-0">
                {isSelected ? (
                  <div className="h-4.5 w-4.5 rounded-md bg-indigo-600 text-white flex items-center justify-center">
                    <Check className="h-3 w-3 stroke-[3px]" />
                  </div>
                ) : (
                  <div className="h-4.5 w-4.5 rounded-md border border-slate-300 bg-white flex items-center justify-center" />
                )}
              </div>

              {/* Word Details - Just the Word itself */}
              <div className="min-w-0 flex-1">
                <p className="font-display font-extrabold text-sm text-slate-850 truncate" title={item.word}>
                  {item.word}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Start Button sticky-style bar or centered action */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={selectedIndices.length < 1}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-150 disabled:text-slate-400 disabled:border-slate-200 text-white rounded-xl py-3.5 px-8 font-bold text-sm shadow-md shadow-indigo-150 disabled:shadow-none active:scale-98 transition duration-200 flex items-center gap-2 cursor-pointer font-display disabled:opacity-50"
        >
          <span>{isLanguageUA ? "ПОЧАТИ ЗАНЯТТЯ З ОБРАНИМИ СЛОВАМИ →" : "START STUDY WITH SELECTED WORDS →"}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
