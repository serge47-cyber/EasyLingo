import React, { useState, useEffect } from "react";
import { Upload, FileText, ChevronRight, Sparkles, AlertCircle, FileSpreadsheet, Layers, Book, RefreshCw } from "lucide-react";
import { LessonPayload } from "../types";
import { PRESET_LESSONS, getLocalizedPreset } from "../presets";
import { LOCALIZATION_DICTIONARY, getLanguageAdjective } from "../localization";

const sleepyServerLoc: Record<string, { title: string; desc: string; ready: string }> = {
  uk: {
    title: "Сервер прокидається (холодний старт)",
    desc: "Оскільки додаток розміщено на безкоштовному хостингу, за відсутності активності сервер засинає. Ми вже відправили йому фоновий запит на активацію. Зачекайте близько 30-45 секунд — це буває лише при першому запуску, далі платформа працюватиме блискавично!",
    ready: "Ура! Сервер успішно активний та готовий!"
  },
  en: {
    title: "Server is waking up (cold start active)",
    desc: "Since this platform is hosted on a free sandbox environment, the server spins down during relative inactivity. We have proactively signaled it to wake up. Please wait 30-45 seconds — this is details of the first run only, afterwards all features work instantly!",
    ready: "Success! Server is fully active and ready!"
  },
  ro: {
    title: "Serverul se trezește (pornire la rece)",
    desc: "Deoarece aplicația este găzduită pe o platformă gratuită, serverul oprește când e inactiv. Am lansat deja pornirea lui în fundal. Vă rugăm să așteptați 30-45 de secunde; este o procedură unică, iar ulterior totul va funcționa instantaneu!",
    ready: "Succes! Serverul este complet activ!"
  },
  es: {
    title: "El servidor se está despertando (arranque en frío)",
    desc: "Ya que la aplicación está alojada de forma gratuita, el servidor se suspende por inactividad. Ya lo estamos despertando automáticamente en segundo plano. Espere de 30-45 segundos — ¡esto sucede solo en la primera petición y luego responderá de inmediato!",
    ready: "¡Éxito! ¡El servidor ya está listo!"
  }
};

interface OnboardingProps {
  lang: "ua" | "en";
  nativeLang: string;
  targetLang: string;
  onLessonReady: (payload: LessonPayload, sourceText: string) => void;
}

export default function Onboarding({ lang, nativeLang, targetLang, onLessonReady }: OnboardingProps) {
  const t = LOCALIZATION_DICTIONARY[nativeLang] || LOCALIZATION_DICTIONARY["uk"];

  const [serverStatus, setServerStatus] = useState<"checking" | "awake" | "sleeping" | "error">("checking");
  const [secondsWaking, setSecondsWaking] = useState<number>(0);

  // Proactive background awake trigger
  useEffect(() => {
    let isMounted = true;
    let timerId: any = null;
    const startTime = Date.now();

    const checkServerStatus = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000); // Fail fast (2s) to detect sleepy state
        
        const res = await fetch("/api/health", { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          if (isMounted) setServerStatus("awake");
        } else {
          throw new Error("unhealthy");
        }
      } catch (err) {
        if (!isMounted) return;
        setServerStatus("sleeping");

        // Keep counting seconds
        timerId = setInterval(() => {
          setSecondsWaking(Math.floor((Date.now() - startTime) / 1000));
        }, 1000);

        // Keep pinging until it answers
        const retryInterval = setInterval(async () => {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000);
            const res = await fetch("/api/health", { signal: controller.signal });
            clearTimeout(timeoutId);

            if (res.ok) {
              clearInterval(retryInterval);
              clearInterval(timerId);
              if (isMounted) {
                setServerStatus("awake");
                // Clear the status notification after a few seconds of triumph!
                setTimeout(() => {
                  if (isMounted) setServerStatus("awake");
                }, 4000);
              }
            }
          } catch (e) {
            // Still sleeping
          }
        }, 3000);
      }
    };

    checkServerStatus();

    return () => {
      isMounted = false;
      if (timerId) clearInterval(timerId);
    };
  }, []);

  const [activeTab, setActiveTab] = useState<"preset" | "upload" | "paste">("preset");
  const [selectedPresetId, setSelectedPresetId] = useState<string>("organic_farming");
  
  const [pageFrom, setPageFrom] = useState<number>(1);
  const [pageTo, setPageTo] = useState<number>(3);
  const [customText, setCustomText] = useState<string>("");
  
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [isPdfLoading, setIsPdfLoading] = useState<boolean>(false);
  const [isPdfLoaded, setIsPdfLoaded] = useState<boolean>(false);
  const [pdfMaxPages, setPdfMaxPages] = useState<number>(100);
  
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisStage, setAnalysisStage] = useState<string>("");
  const [errorText, setErrorText] = useState<string | null>(null);

  // Read PDF Pages count and metadata to unlock settings
  const loadPdfMetadata = async (file: File) => {
    setIsPdfLoading(true);
    setIsPdfLoaded(false);
    setErrorText(null);
    try {
      const pdfjsLib = (window as any).pdfjsLib;
      if (!pdfjsLib) {
        throw new Error(t.loadingPdfMetadata);
      }
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;
      
      setPdfMaxPages(pdf.numPages);
      setPageFrom(1);
      setPageTo(Math.min(3, pdf.numPages));
      setIsPdfLoaded(true);
    } catch (err: any) {
      console.error(err);
      setErrorText(err.message || String(err));
      setIsPdfLoaded(false);
    } finally {
      setIsPdfLoading(false);
    }
  };
  
  // Parse Text using client-side PDF.js
  const extractTextFromPDF = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const pdfjsLib = (window as any).pdfjsLib;
      if (!pdfjsLib) {
        reject(new Error(t.loadingPdfMetadata));
        return;
      }

      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const arrayBuffer = e.target?.result as ArrayBuffer;
          if (!arrayBuffer) {
            reject(new Error("Empty PDF data"));
            return;
          }

          const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
          const pdf = await loadingTask.promise;
          let fullText = "";

          // Bound check pages
          const startPage = Math.max(1, pageFrom);
          const endPage = Math.min(pdf.numPages, pageTo);

          setAnalysisStage(`📖 Extracting pages ${startPage}-${endPage} of ${pdf.numPages}...`);

          for (let i = startPage; i <= endPage; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items
              .map((item: any) => item.str || "")
              .join(" ");
            fullText += pageText + "\n\n";
          }

          if (fullText.trim().length < 15) {
            const simulatedTopic = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ");
            console.log("Extracted text too short. Synthesizing topic from filename:", simulatedTopic);
            resolve(`[Educational Lesson Topic: "${simulatedTopic}"] Direct textbook text extraction returned minimal content. Please design a comprehensive, high-fidelity language study course lesson about this topic with a robust dialog/script, vocabulary words, grammar focus, and creative speaking starters.`);
          } else {
            resolve(fullText);
          }
        } catch (err: any) {
          reject(err);
        }
      };
      reader.onerror = () => reject(new Error("File uploading failure"));
      reader.readAsArrayBuffer(file);
    });
  };

  // Run AI Analysis request
  const handleStartAnalysis = async () => {
    setErrorText(null);
    setIsAnalyzing(true);
    setAnalysisStage(t.analyzingSetup);
    
    try {
      let extractedText = "";
      
      if (activeTab === "preset") {
        // Preset lessons load instantly and are pre-localized client-side, bypassing quota limits!
        const p = getLocalizedPreset(selectedPresetId, nativeLang, targetLang);
        setTimeout(() => {
          onLessonReady(p, p.text || "");
          setIsAnalyzing(false);
        }, 800);
        return;
      } else if (activeTab === "paste") {
        extractedText = customText.trim();
        if (extractedText.length < 30) {
          throw new Error("Please paste at least 30 characters of raw textbook material.");
        }
      } else if (activeTab === "upload") {
        if (!pdfFile) {
          throw new Error("Please select and upload a PDF file first.");
        }
        extractedText = await extractTextFromPDF(pdfFile);
      }

      if (activeTab === "preset") {
        const stageMsg = nativeLang === "ro" 
          ? "🌍 Se localizează lecția predefinită (durează ~10 s)..." 
          : nativeLang === "es" 
          ? "🌍 Localizando la lección predefinida (~10 s)..." 
          : "🌍 Localizing preset lesson under your language choices (~10s)...";
        setAnalysisStage(stageMsg);
      } else {
        setAnalysisStage(t.analyzingGemini);
      }

      // Perform Fetch call to server API proxying Gemini
      const response = await fetch("/api/analyze-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: extractedText,
          nativeLang: nativeLang,
          targetLang: targetLang
        })
      });

      const data = await response.json();
      if (!response.ok) {
        const errorDetail = data.details ? `: ${data.details}` : "";
        throw new Error((data.error || "Internal API failed") + errorDetail);
      }

      onLessonReady(data, extractedText);
    } catch (err: any) {
      console.error(err);
      let msg = err.message || String(err);
      if (msg.includes("429") || msg.toLowerCase().includes("quota") || msg.toLowerCase().includes("limit") || msg.toLowerCase().includes("exhausted")) {
        msg += " (Note: The Gemini API has temporarily reached its free tier limit. Please use 'Preset Drills' above, as they are fully pre-localized client-side and open instantly without any API or network limits!)";
      }
      setErrorText(msg);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/pdf") {
        setPdfFile(file);
        setIsPdfLoaded(false);
        setErrorText(null);
      } else {
        setErrorText("Only PDF files (.pdf) are supported.");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
      setIsPdfLoaded(false);
      setErrorText(null);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12 animate-fadeIn">
      {/* Visual Welcome Banner */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 mb-4 text-xs font-semibold text-blue-700 font-mono">
          <Sparkles className="h-3.5 w-3.5 animate-spin duration-700" />
          {t.nextGenTitle}
        </div>
        <h2 className="font-display text-3.5xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          {t.turnPdfTitle}
        </h2>
        <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
          {t.turnPdfDesc}
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200/80 shadow-md shadow-slate-100 p-6">
        {/* Sleeper server warming tracker */}
        {serverStatus === "sleeping" && (() => {
          const loc = sleepyServerLoc[nativeLang] || sleepyServerLoc["uk"];
          return (
            <div className="mb-6 p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl flex items-start gap-3 animate-pulse">
              <div className="text-lg leading-none mt-0.5">😴</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                  <span className="font-display font-bold text-amber-950 text-xs">
                    {loc.title}
                  </span>
                  <span className="bg-amber-100 text-amber-900 text-[10px] font-mono font-black px-1.5 py-0.5 rounded-md shrink-0">
                    ⏱️ {secondsWaking}s
                  </span>
                </div>
                <p className="text-[11px] text-amber-900/80 leading-relaxed font-sans mt-0.5">
                  {loc.desc}
                </p>
              </div>
            </div>
          );
        })()}

        <div className="flex border-b border-slate-200 mb-6 font-display">
          <button
            onClick={() => { setActiveTab("preset"); setErrorText(null); }}
            className={`pb-3 px-4 text-sm font-semibold transition-all border-b-2 -mb-px ${activeTab === "preset" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"}`}
          >
            📖 {t.presetTitle}
          </button>
          <button
            onClick={() => { setActiveTab("upload"); setErrorText(null); }}
            className={`pb-3 px-4 text-sm font-semibold transition-all border-b-2 -mb-px ${activeTab === "upload" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"}`}
          >
            📥 {t.uploadTitle}
          </button>
          <button
            onClick={() => { setActiveTab("paste"); setErrorText(null); }}
            className={`pb-3 px-4 text-sm font-semibold transition-all border-b-2 -mb-px ${activeTab === "paste" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"}`}
          >
            ✍️ {t.pasteTitle}
          </button>
        </div>

        {/* Preset Tab Content */}
        {activeTab === "preset" && (
          <div className="space-y-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              {t.presetTextbookLabel}
            </label>
            <div className="space-y-3">
              {PRESET_LESSONS.map((preset) => (
                <div
                  key={preset.id}
                  onClick={() => { setSelectedPresetId(preset.id); }}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPresetId === preset.id ? "bg-blue-50/50 border-blue-600 shadow-sm" : "bg-white border-slate-200 hover:border-slate-350"}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-medium text-slate-800 text-sm">
                      {preset.id === "organic_farming"
                        ? nativeLang === "uk"
                          ? "🌿 Урок 1: Органічні Трави та Збір Врожаю (B1+)"
                          : nativeLang === "ro"
                          ? "🌿 Lecția 1: Plante Aromatice și Recoltare Organică (B1+)"
                          : nativeLang === "es"
                          ? "🌿 Lección 1: Hierbas Orgánicas y Cosecha (B1+)"
                          : "🌿 Lesson 1: Organic Herbs & Harvesting (B1+)"
                        : nativeLang === "uk"
                        ? "🤖 Урок 2: ШІ та Когнітивна Освіта (B2+)"
                        : nativeLang === "ro"
                        ? "🤖 Lecția 2: Inteligența Artificială și Educația Cognitivă (B2+)"
                        : nativeLang === "es"
                        ? "🤖 Lección 2: Inteligencia Artificial y Educación Cognitiva (B2+)"
                        : "🤖 Lesson 2: AI & Cognitive Education (B2+)"
                      }
                    </span>
                    <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded ${preset.payload.vocabulary.length > 7 ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"}`}>
                      {preset.payload.vocabulary.length} Vocab
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 italic">
                    "{getLocalizedPreset(preset.id, nativeLang, targetLang).text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PDF Upload Tab Content */}
        {activeTab === "upload" && (
          <div className="space-y-5 animate-fadeIn">
            {/* Stage 1: File Upload / Read */}
            {!isPdfLoaded ? (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${isDragOver ? "border-blue-600 bg-blue-50/20" : pdfFile ? "border-amber-400 bg-amber-50/10" : "border-slate-300 hover:border-blue-450 bg-slate-50/50"}`}
              >
                <input
                  type="file"
                  id="pdf-file-picker"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  disabled={isPdfLoading}
                />
                
                {isPdfLoading ? (
                  <div className="py-6 space-y-4">
                    <RefreshCw className="h-10 w-10 mx-auto text-blue-600 animate-spin" />
                    <div>
                      <span className="font-semibold text-sm block text-blue-800">
                        {t.loadingPdfMetadata}
                      </span>
                      <span className="text-xs text-slate-500 mt-1 block">
                        {t.loadingPdfDetails}
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <label htmlFor="pdf-file-picker" className="cursor-pointer space-y-3 block">
                      <Upload className={`h-10 w-10 mx-auto ${pdfFile ? "text-amber-500 animate-pulse" : "text-slate-400"}`} />
                      <div>
                        <span className="font-semibold text-sm block text-blue-600 hover:underline">
                          {t.uploadLabel}
                        </span>
                        <span className="text-xs text-slate-500 mt-1 block">
                          {t.dragDropLabel}
                        </span>
                      </div>
                    </label>
 
                     {pdfFile && (
                      <div className="mt-5 p-4 rounded-xl border border-amber-200/80 bg-amber-50/30 max-w-md mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
                        <div className="inline-flex items-center gap-2 text-amber-900 text-xs font-semibold">
                          <FileText className="h-4.5 w-4.5 shrink-0 text-amber-600" />
                          <div className="text-left">
                            <span className="truncate max-w-[150px] block font-medium" title={pdfFile.name}>{pdfFile.name}</span>
                            <span className="text-[10px] text-amber-600 font-mono">({(pdfFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            loadPdfMetadata(pdfFile);
                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-md active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <Upload className="h-3.5 w-3.5" />
                          <span>{t.pdfUploadButton}</span>
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            ) : (
              /* PDF Loaded Success view */
              <div className="p-5 border-2 border-emerald-500 bg-emerald-50/20 rounded-xl flex items-center justify-between gap-4 animate-scaleUp">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-lg">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-700 block">
                      {t.pdfSuccessLabel}
                    </span>
                    <h4 className="font-display font-medium text-slate-900 text-sm truncate max-w-[240px]">
                      {pdfFile?.name}
                    </h4>
                    <span className="text-xs text-slate-500 font-mono">
                      {t.pdfTotalPages}: {pdfMaxPages}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setPdfFile(null);
                    setIsPdfLoaded(false);
                  }}
                  className="text-slate-400 hover:text-slate-600 text-xs transition underline decoration-dashed underline-offset-4 cursor-pointer"
                >
                  {t.pdfChangeBtn}
                </button>
              </div>
            )}

            {/* Page Selection Container - displays disabled/translucent until PDF is loaded */}
            <div className={`relative rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 ${!isPdfLoaded ? "opacity-45 pointer-events-none select-none" : ""}`}>
              {!isPdfLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-100/10 backdrop-blur-[0.5px] rounded-xl pointer-events-none">
                  <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200/80 px-3 py-1.5 rounded-full shadow-xs">
                    🔒 Locked
                  </span>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    {t.fromPageLabel}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={pdfMaxPages}
                    value={pageFrom}
                    onChange={(e) => {
                      const fromVal = Math.min(pdfMaxPages, Math.max(1, parseInt(e.target.value) || 1));
                      setPageFrom(fromVal);
                      if (pageTo < fromVal) {
                        setPageTo(fromVal);
                      }
                    }}
                    className="w-full text-sm rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-800 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    {t.toPageLabel}
                  </label>
                  <input
                    type="number"
                    min={pageFrom}
                    max={pdfMaxPages}
                    value={pageTo}
                    onChange={(e) => setPageTo(Math.min(pdfMaxPages, Math.max(pageFrom, parseInt(e.target.value) || pageFrom)))}
                    className="w-full text-sm rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-800 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <p className="text-[10px] text-slate-500 italic mt-3 leading-normal">
                💡 {t.pdfTip}
              </p>
            </div>
          </div>
        )}

        {/* Paste Tab Content */}
        {activeTab === "paste" && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                {nativeLang === "uk"
                  ? `Вставте текст з підручника ${getLanguageAdjective(nativeLang, targetLang, "adverb")}:`
                  : nativeLang === "en"
                  ? `Paste raw ${getLanguageAdjective(nativeLang, targetLang, "genitive")} textbook lesson text:`
                  : t.pasteLabel}
              </label>
              <textarea
                rows={6}
                placeholder={t.pastePlaceholder}
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-800 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Error Message */}
        {errorText && (
          <div className="mt-5 p-4 bg-red-50 text-red-800 rounded-xl border border-red-100 flex items-start gap-2.5">
            <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold block mb-0.5">{t.analysisErrorTitle}</span>
              {errorText}
            </div>
          </div>
        )}

        {/* Run Button */}
        <button
          onClick={handleStartAnalysis}
          disabled={isAnalyzing || (activeTab === "upload" && !isPdfLoaded)}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-100 disabled:text-slate-400 disabled:border-slate-200 disabled:shadow-none text-white rounded-xl py-3.5 px-4 font-bold text-sm shadow-md shadow-blue-100 disabled:opacity-60 active:scale-98 transition duration-200 flex items-center justify-center gap-2 cursor-pointer font-display"
        >
          {isAnalyzing ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" />
              <span className="animate-pulse">{analysisStage}</span>
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 fill-white animate-pulse" />
              <span>
                {activeTab === "preset"
                  ? t.startPresetButton
                  : activeTab === "upload"
                  ? (!pdfFile 
                    ? t.choosePdfWarning
                    : !isPdfLoaded 
                    ? t.clickUploadWarning 
                    : t.startAnalysisBtn)
                  : t.analyzePastedTextBtn
                }
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
