export interface LocalizedUI {
  exitLessonTitle: string;
  exitLessonDesc: string;
  yesExit: string;
  cancel: string;
  streakTitle: string;
  streakLabel: string;
  xpTitle: string;
  exitButton: string;
  syllabusTopic: string;
  methodologyTitle: string;
  methodologySub: string;
  founderLabel: string;
  syllabusOrderLabel: string;
  startLessonButton: string;
  backToSyllabus: string;
  vocabModuleTitle: string;
  vocabChooseLabel: string;
  vocabSub: string;
  selectAll: string;
  clearAll: string;
  selectedCountLabel: string;
  selectMinimumLabel: string;
  startWithSelected: string;
  presetTitle: string;
  uploadTitle: string;
  pasteTitle: string;
  presetTextbookLabel: string;
  startPresetButton: string;
  uploadLabel: string;
  dragDropLabel: string;
  loadingPdfMetadata: string;
  loadingPdfDetails: string;
  pdfUploadButton: string;
  pdfSuccessLabel: string;
  pdfTotalPages: string;
  pdfChangeBtn: string;
  fromPageLabel: string;
  toPageLabel: string;
  pdfTip: string;
  pasteLabel: string;
  pastePlaceholder: string;
  analyzePastedTextBtn: string;
  analyzingSetup: string;
  analyzingGemini: string;
  analysisErrorTitle: string;
  nextGenTitle: string;
  turnPdfTitle: string;
  turnPdfDesc: string;
  choosePdfWarning: string;
  clickUploadWarning: string;
  startAnalysisBtn: string;
  wordsLog: string;
  flashcardLabel: string;
  clickToReveal: string;
  listenSample: string;
  speakSent: string;
  stopAudio: string;
  assembleSentenceDrill: string;
  assemblyPlaceholder: string;
  comprehensionQuizzes: string;
  comprehensionPlaceholder: string;
  typeGapWord: string;
  correctAnswer: string;
  listeningAccuracy: string;
  submitAnswers: string;
  trySpellingReview: string;
  pronounceLabTitle: string;
  recordOwnVoice: string;
  listeningTarget: string;
  unsupportedSpeechSynth: string;
  acousticReplay: string;
  spellInputPlaceholder: string;
  spellInputCheck: string;
  spellInputNext: string;
  completedActivitiesTitle: string;
  completedActivitiesSubtitle: string;
  activitiesScoreCard: string;
  cefrLevel: string;
  aiCoachingTitle: string;
  weakWordsLabel: string;
  weakWordsSuccess: string;
  repeatWholeLesson: string;
  changeMethodology: string;
  repeatWeakSpots: string;
  loadNewSyllabus: string;
  toggleProgress: string;
  historicLogsTitle: string;
  clearHistory: string;
  noHistory: string;
  pronounceMicIdle: string;
  evaluatingSpeechAI: string;
  cognitiveEvaluation: string;
  suggestionPhonetics: string;
  matchedKeywordsLabel: string;
  checkingSentenceAI: string;
  writeMinSentence: string;
  productionPromptLabel: string;
  productionContext: string;
  productionPlaceholder: string;
  completeSentenceTitle: string;
  audioRate: string;
  gameMatchingTitle: string;
  gameMatchingInst: string;
  gameBestScore: string;
  gameOverSpam: string;
  gameComplete: string;
  timeLimit: string;
  secondsSuffix: string;
  congratsCardTitle: string;
}

export const LOCALIZATION_DICTIONARY: Record<string, LocalizedUI> = {
  uk: {
    exitLessonTitle: "Завершити тренування?",
    exitLessonDesc: "Ви дійсно бажаєте завершити тренування? Поточний прогрес сесії буде скинуто.",
    yesExit: "Так, вийти",
    cancel: "Скасувати",
    streakTitle: "Днів поспіль на платформі",
    streakLabel: "дн",
    xpTitle: "Ваші бали досвіду",
    exitButton: "Вихід",
    syllabusTopic: "Тема",
    methodologyTitle: "Оберіть Методологію Навчання",
    methodologySub: "Платформа автоматично перебудує 7 навчальних завдань відповідно до обраного когнітивного підходу.",
    founderLabel: "Ідеолог",
    syllabusOrderLabel: "ДИНАМІЧНИЙ ПОРЯДОК НАВЧАННЯ",
    startLessonButton: "ПОЧАТИ УРОК →",
    backToSyllabus: "Назад до вибору матеріалів",
    vocabModuleTitle: "Модуль слів",
    vocabChooseLabel: "Оберіть слова для заняття",
    vocabSub: "ШІ виділив найціннішу термінологію з матеріалу. Позначте слова, які хочете тренувати.",
    selectAll: "Обрати всі",
    clearAll: "Очистити",
    selectedCountLabel: "вибрано",
    selectMinimumLabel: "Оберіть хоча б 1 слово",
    startWithSelected: "ПОЧАТИ ЗАНЯТТЯ З ОБРАНИМИ СЛОВАМИ →",
    presetTitle: "Готові Приклади",
    uploadTitle: "Завантажити PDF",
    pasteTitle: "Вставити Текст",
    presetTextbookLabel: "Оберіть тему готового уроку:",
    startPresetButton: "ЗАПУСТИТИ ГОТОВИЙ УРОК →",
    uploadLabel: "Натисніть для вибору підручника",
    dragDropLabel: "або перетягніть навчальний PDF-посібник",
    loadingPdfMetadata: "Зчитуємо та завантажуємо документ...",
    loadingPdfDetails: "Визначаємо кількість сторінок та структуру файлу",
    pdfUploadButton: "Завантажити",
    pdfSuccessLabel: "ПОСІБНИК ЗАВАНТАЖЕНО",
    pdfTotalPages: "Усього сторінок",
    pdfChangeBtn: "Змінити файл",
    fromPageLabel: "Стартова сторінка",
    toPageLabel: "Кінцева сторінка",
    pdfTip: "Рекомендований діапазон: 1-3 сторінки для високої швидкості та фокусування ШІ на конкретній темі.",
    pasteLabel: "Вставте текст з підручника англійською:",
    pastePlaceholder: "Введіть лексичний уривок, граматичні правила з книги або речення для опрацювання...",
    analyzePastedTextBtn: "АНАЛІЗУВАТИ ВСТАВЛЕНИЙ ТЕКСТ →",
    analyzingSetup: "🔮 Ознайомлення з матеріалами...",
    analyzingGemini: "🤖 ШІ аналізує структуру та термінологію (займає ~10 сек)...",
    analysisErrorTitle: "Помилка аналізу!",
    nextGenTitle: "EdTech AI Нового Покоління",
    turnPdfTitle: "Перетворіть ваші PDF у Розумні Уроки",
    turnPdfDesc: "Просто завантажте сторінки підручника чи скопіюйте текст. ШІ створить 7 типів персоналізованих інтерактивних завдань за лічені секунди.",
    choosePdfWarning: "ОБЕРІТЬ PDF-ФАЙЛ ПОПЕРЕДНЬО...",
    clickUploadWarning: "КЛІКНІТЬ 'ЗАВАНТАЖИТИ' ДЛЯ ОБРОБКИ...",
    startAnalysisBtn: "РОЗПОЧАТИ АНАЛІЗ PDF-ДІАПАЗОНУ →",
    wordsLog: "слів",
    flashcardLabel: "Картка",
    clickToReveal: "Клацніть щоб перевернути",
    listenSample: "Слухати зразок",
    speakSent: "Озвучити речення",
    stopAudio: "Зупинити",
    assembleSentenceDrill: "Зберіть речення",
    assemblyPlaceholder: "Натискайте блоки нижче для побудови...",
    comprehensionQuizzes: "Питання для перевірки:",
    comprehensionPlaceholder: "Прослухайте монолог та виконайте завдання нижче.",
    typeGapWord: "Введіть пропущене слово...",
    correctAnswer: "Правильно",
    listeningAccuracy: "Результат аудіювання",
    submitAnswers: "Надіслати відповіді",
    trySpellingReview: "Спробувати ще раз",
    pronounceLabTitle: "Лабораторія Вимови",
    recordOwnVoice: "Записати власну вимову",
    listeningTarget: "Слухати зразок",
    unsupportedSpeechSynth: "Синтез мовлення не підтримується цим браузером.",
    acousticReplay: "Послухати ще раз",
    spellInputPlaceholder: "Введіть це слово англійською по буквах...",
    spellInputCheck: "Перевірити правопис",
    spellInputNext: "Наступне слово",
    completedActivitiesTitle: "Тренування Завершено!",
    completedActivitiesSubtitle: "Ось детальний звіт про ваші лінгвістичні результати та оцінки ШІ.",
    activitiesScoreCard: "ЗАГАЛЬНИЙ БАЛ",
    cefrLevel: "CEFR РІВЕНЬ",
    aiCoachingTitle: "РЕКОМЕНДАЦІЇ ШІ-ВАЙЗЕРА",
    weakWordsLabel: "СЛАБКІ СЛОВА УРОКУ (ПОТРЕБУЮТЬ УВАГИ):",
    weakWordsSuccess: "Немає слабких слів! Справжній лінгвістичний геній!",
    repeatWholeLesson: "Повторити весь урок повністю",
    changeMethodology: "Змінити методику вивчення",
    repeatWeakSpots: "Повторити лише слабкі місця",
    loadNewSyllabus: "Завантажити новий підручник",
    toggleProgress: "Подивитися прогрес",
    historicLogsTitle: "МУЛЬТИСЕСІЙНИЙ ЛОГ",
    clearHistory: "Очистити",
    noHistory: "Сесій поки немає. Пройдіть перший урок.",
    pronounceMicIdle: "Нічого не почуто. Натисніть кнопку мікрофону для запису.",
    evaluatingSpeechAI: "Аналіз вимови ШІ...",
    cognitiveEvaluation: "КОГНІТИВНА ОЦІНКА:",
    suggestionPhonetics: "Вказівка щодо вимови:",
    matchedKeywordsLabel: "КЛЮЧОВІ СЛОВА:",
    checkingSentenceAI: "ШІ аналізує структуру речення...",
    writeMinSentence: "Будь ласка, напишіть хоча б одне змістовне речення.",
    productionPromptLabel: "Завершіть речення або питання:",
    productionContext: "Контекст",
    productionPlaceholder: "Завершіть шаблон речення відповідно до контексту...",
    completeSentenceTitle: "Контекстне Говоріння",
    audioRate: "Швидкість",
    gameMatchingTitle: "Асоціо-пазл",
    gameMatchingInst: "Знайдіть відповідність між словами у парах!",
    gameBestScore: "Рекорд",
    gameOverSpam: "Гра закінчилася (Забагато помилок)",
    gameComplete: "Пазл завершено успішно!",
    timeLimit: "Обмеження по часу",
    secondsSuffix: "сек",
    congratsCardTitle: "Вітаємо!"
  },
  en: {
    exitLessonTitle: "Exit active lesson?",
    exitLessonDesc: "Are you sure you want to stop this training session? All active points and progress will be lost.",
    yesExit: "Yes, Exit",
    cancel: "Cancel",
    streakTitle: "Daily Streak on the platform",
    streakLabel: "days",
    xpTitle: "Your Experience points",
    exitButton: "Exit",
    syllabusTopic: "Topic",
    methodologyTitle: "Configure Educational Methodology",
    methodologySub: "The platform dynamically rearranges 7 interactive learning activities according to the selected neurological model.",
    founderLabel: "Founder",
    syllabusOrderLabel: "DYNAMIC SYLLABUS FLOW",
    startLessonButton: "START METHODOLOGY LESSON →",
    backToSyllabus: "Back to materials onboarding",
    vocabModuleTitle: "Vocabulary compiler",
    vocabChooseLabel: "Customize Words for Your Lesson",
    vocabSub: "Our AI extracted the most valuable keywords. Pick the words you want to study specifically.",
    selectAll: "Select all",
    clearAll: "Clear list",
    selectedCountLabel: "selected",
    selectMinimumLabel: "Please select at least 1 word",
    startWithSelected: "START STUDY WITH SELECTED WORDS →",
    presetTitle: "Preset Drills",
    uploadTitle: "Upload Textbook",
    pasteTitle: "Paste Text",
    presetTextbookLabel: "Select textbook template:",
    startPresetButton: "START PRESET LESSON →",
    uploadLabel: "Click to select a textbook",
    dragDropLabel: "or drag and drop your lesson PDF file here",
    loadingPdfMetadata: "Reading and loading document...",
    loadingPdfDetails: "Counting pages and checking document parameters",
    pdfUploadButton: "Upload File",
    pdfSuccessLabel: "DOCUMENT LOADED",
    pdfTotalPages: "Total pages",
    pdfChangeBtn: "Change file",
    fromPageLabel: "From page",
    toPageLabel: "To page",
    pdfTip: "We recommend analyzing 1-3 targeted pages for optimal speed and accurate topic focusing.",
    pasteLabel: "Paste raw English textbook lesson text:",
    pastePlaceholder: "Paste vocabulary columns, grammatical explanations, reading blocks, or transcript exercises...",
    analyzePastedTextBtn: "ANALYZE PASTED TEXT →",
    analyzingSetup: "🔮 Initializing AI analysis...",
    analyzingGemini: "🤖 Gemini parsing structure and creating lessons (~10s)...",
    analysisErrorTitle: "Parsing Error!",
    nextGenTitle: "Next-Gen AI Language Learning",
    turnPdfTitle: "Turn PDF Content into Smart Lessons",
    turnPdfDesc: "Simply upload textbook pages or paste lesson text. Our AI will automatically construct 7 modular learning activities in seconds.",
    choosePdfWarning: "CHOOSE PDF FILE FIRST...",
    clickUploadWarning: "CLICK 'UPLOAD' TO PROCESS DOCUMENT...",
    startAnalysisBtn: "START SELECTED RANGE ANALYSIS →",
    wordsLog: "words",
    flashcardLabel: "Flashcard",
    clickToReveal: "Click to reveal definition",
    listenSample: "Listen target model",
    speakSent: "Speak target goal",
    stopAudio: "Stop",
    assembleSentenceDrill: "Assemble sentences",
    assemblyPlaceholder: "Click elements below to arrange sequence...",
    comprehensionQuizzes: "Review Comprehension Quizzes:",
    comprehensionPlaceholder: "Listen carefully to the voice narrative and solve quizzes below.",
    typeGapWord: "Type correctly missing word...",
    correctAnswer: "Correct",
    listeningAccuracy: "Listening comprehension result",
    submitAnswers: "Submit answers",
    trySpellingReview: "Retry review",
    pronounceLabTitle: "Shadowing Pronuciation",
    recordOwnVoice: "Record your own voice",
    listeningTarget: "Listen target model",
    unsupportedSpeechSynth: "Speech synthesis is unsupported in this browser.",
    acousticReplay: "Acoustic replay",
    spellInputPlaceholder: "Type this word in English letter by letter...",
    spellInputCheck: "Check spelling",
    spellInputNext: "Next vocabulary card",
    completedActivitiesTitle: "Training Session Complete!",
    completedActivitiesSubtitle: "Here is your detailed linguistic audit and AI-generated progress report.",
    activitiesScoreCard: "COMPOSITE GRADE",
    cefrLevel: "CEFR BANDING",
    aiCoachingTitle: "COACHING BLUEPRINT",
    weakWordsLabel: "WEAK SPOTS FOR EXTRA DRILLS:",
    weakWordsSuccess: "Zero weak spots found. Outstanding retention!",
    repeatWholeLesson: "Repeat entire lesson fully",
    changeMethodology: "Change study methodology",
    repeatWeakSpots: "Drill weak terms again",
    loadNewSyllabus: "Load new PDF syllabus",
    toggleProgress: "Toggle progress logs",
    historicLogsTitle: "HISTORIC SCORE LOGS",
    clearHistory: "Clear",
    noHistory: "No saved sessions yet. Start your first lesson.",
    pronounceMicIdle: "Microphone idle. Click button to begin articulating.",
    evaluatingSpeechAI: "AI processing stresses...",
    cognitiveEvaluation: "SPEECH ACCURACY:",
    suggestionPhonetics: "Phonetic clue:",
    matchedKeywordsLabel: "USED KEYWORDS:",
    checkingSentenceAI: "AI parsing structural grammar...",
    writeMinSentence: "Please write at least one meaningful sentence.",
    productionPromptLabel: "Complete the sentence prompt:",
    productionContext: "Context",
    productionPlaceholder: "Complete the sentence starter incorporating targets...",
    completeSentenceTitle: "Custom Comm Output",
    audioRate: "Speed",
    gameMatchingTitle: "Visual Mesh",
    gameMatchingInst: "Click matching cards to link foreign units!",
    gameBestScore: "Record",
    gameOverSpam: "Session ended (Too many incorrect links)",
    gameComplete: "Linguistic puzzle solved!",
    timeLimit: "Time remaining",
    secondsSuffix: "sec",
    congratsCardTitle: "Perfect Match!"
  },
  ro: {
    exitLessonTitle: "Terminați sesiunea?",
    exitLessonDesc: "Sigur doriți să opriți sesiunea de antrenament? Tot progresul activ va fi pierdut.",
    yesExit: "Da, Ieșire",
    cancel: "Anulează",
    streakTitle: "Zile consecutive pe platformă",
    streakLabel: "zile",
    xpTitle: "Punctele tale de experiență",
    exitButton: "Ieșire",
    syllabusTopic: "Subiect",
    methodologyTitle: "Alegeți o Metodologie de Învățare",
    methodologySub: "Platforma va rearanja automat cele 7 activități interactive pe baza modelului cognitiv selectat.",
    founderLabel: "Fondator",
    syllabusOrderLabel: "FLUXUL DINAMIC AL CURRICULEI",
    startLessonButton: "ÎNCEPE LECȚIA →",
    backToSyllabus: "Înapoi la încărcarea materialelor",
    vocabModuleTitle: "Compilator Vocabular",
    vocabChooseLabel: "Personalizați cuvintele lecției",
    vocabSub: "Inteligența artificială a identificat cei mai importanți termeni. Alegeți pe cei pe care doriți să îi exersați.",
    selectAll: "Selectează tot",
    clearAll: "Golește lista",
    selectedCountLabel: "selectate",
    selectMinimumLabel: "Vă rugăm să selectați cel puțin 1 cuvânt",
    startWithSelected: "ÎNCEPE LECȚIA CU CUVINTELE SELECTATE →",
    presetTitle: "Exemple predefinite",
    uploadTitle: "Încarcă PDF",
    pasteTitle: "Lipește Text",
    presetTextbookLabel: "Alegeți un șablon de lecție:",
    startPresetButton: "ÎNCEPE LECȚIA COMPLETĂ →",
    uploadLabel: "Faceți clic pentru a alege un manual",
    dragDropLabel: "sau trageți fișierul PDF de lecție aici",
    loadingPdfMetadata: "Se citește și se încarcă documentul...",
    loadingPdfDetails: "Se stabilește numărul de pagini și structura fișierului",
    pdfUploadButton: "Încarcă fișierul",
    pdfSuccessLabel: "DOCUMENT ÎNCĂRCAT",
    pdfTotalPages: "Total pagini",
    pdfChangeBtn: "Schimbă fișierul",
    fromPageLabel: "De la pagina",
    toPageLabel: "Până la pagina",
    pdfTip: "Vă recomandăm să analizați 1-3 pagini pentru o viteză maximă și o focalizare optimă a IA pe un subiect.",
    pasteLabel: "Lipește textul din manual:",
    pastePlaceholder: "Introduceți fragmente de vocabular, explicații gramaticale sau propoziții...",
    analyzePastedTextBtn: "ANALIZEAZĂ TEXTUL LIPIT →",
    analyzingSetup: "🔮 Se inițializează analiza IA...",
    analyzingGemini: "🤖 Gemini analizează structura și termenii (durează ~10 sec)...",
    analysisErrorTitle: "Eroare de analiză!",
    nextGenTitle: "Platformă EdTech AI de generație următoare",
    turnPdfTitle: "Transformă manualele tale PDF în lecții interactive",
    turnPdfDesc: "Doar încarcă pagini de manual sau lipește un text. IA va genera 7 activități de studiu în câteva secunde.",
    choosePdfWarning: "ALEGEȚI UN FIȘIER PDF ÎNAINTE...",
    clickUploadWarning: "APĂSAȚI 'ÎNCARCĂ' PENTRU PROCESARE...",
    startAnalysisBtn: "ÎNCEPE ANALIZA PAGINILOR SELECTATE →",
    wordsLog: "cuvinte",
    flashcardLabel: "Card",
    clickToReveal: "Faceți clic pentru a întoarce cardul",
    listenSample: "Ascultă modelul",
    speakSent: "Rostește propoziția",
    stopAudio: "Oprește",
    assembleSentenceDrill: "Asamblați propoziții",
    assemblyPlaceholder: "Apăsați pe blocurile de mai jos pentru a asambla...",
    comprehensionQuizzes: "Întrebări de înțelegere de text:",
    comprehensionPlaceholder: "Ascultați cu atenție narațiunea audio și rezolvați chestionarele de mai jos.",
    typeGapWord: "Introduceți cuvântul lipsă...",
    correctAnswer: "Corect",
    listeningAccuracy: "Scorul de ascultare",
    submitAnswers: "Trimite răspunsurile",
    trySpellingReview: "Încearcă din nou",
    pronounceLabTitle: "Laborator de Pronunție",
    recordOwnVoice: "Înregistrează pronunția ta",
    listeningTarget: "Ascultă modelul",
    unsupportedSpeechSynth: "Sinteza vocală nu este suportată de acest navigator.",
    acousticReplay: "Ascultă din nou",
    spellInputPlaceholder: "Introduceți cuvântul literă cu literă...",
    spellInputCheck: "Verifică scrierea",
    spellInputNext: "Următorul card",
    completedActivitiesTitle: "Sesiune Completată cu Succes!",
    completedActivitiesSubtitle: "Iată raportul detaliat privind performanța lingvistică și evaluarea IA.",
    activitiesScoreCard: "SCOR COMPUS",
    cefrLevel: "NIVEL CEFR",
    aiCoachingTitle: "RECOMANDĂRI IA COACH",
    weakWordsLabel: "CUVINTE CARE NECESITĂ REVIZUIRE (PUNCTE SLABE):",
    weakWordsSuccess: "Excelent! Nu ai puncte slabe în această sesiune!",
    repeatWholeLesson: "Repetă toată lecția",
    changeMethodology: "Schimbă metodologia",
    repeatWeakSpots: "Repetă doar cuvintele slabe",
    loadNewSyllabus: "Încarcă un manual nou",
    toggleProgress: "Afișează istoricul",
    historicLogsTitle: "ISTORIC SESIUNI",
    clearHistory: "Golește",
    noHistory: "Nu există sesiuni salvate. Începe prima lecție.",
    pronounceMicIdle: "Microfon inactiv. Apăsați butonul pentru a înregistra pronunția.",
    evaluatingSpeechAI: "IA evaluează pronunția...",
    cognitiveEvaluation: "EVALUARE COGNITIVĂ:",
    suggestionPhonetics: "Sfat fonetic:",
    matchedKeywordsLabel: "CUVINTE CHEIE UTILIZATE:",
    checkingSentenceAI: "IA analizează structura propoziției...",
    writeMinSentence: "Vă rugăm să scrieți cel puțin o propoziție cu înțeles.",
    productionPromptLabel: "Completați textul conform contextului:",
    productionContext: "Context",
    productionPlaceholder: "Completați șablonul folosind cuvintele cheie...",
    completeSentenceTitle: "Producere de limbaj",
    audioRate: "Viteză",
    gameMatchingTitle: "Asociere vizuală",
    gameMatchingInst: "Asociați cuvintele cu traducerile lor!",
    gameBestScore: "Record",
    gameOverSpam: "Sesiune finalizată (Prea multe greșeli)",
    gameComplete: "Puzzle lingvistic rezolvat cu succes!",
    timeLimit: "Timp rămas",
    secondsSuffix: "sec",
    congratsCardTitle: "Potrivire perfectă!"
  },
  es: {
    exitLessonTitle: "¿Terminar lección?",
    exitLessonDesc: "¿Seguro que desea salir? Todo el progreso de esta sesión se perderá.",
    yesExit: "Sí, salir",
    cancel: "Cancelar",
    streakTitle: "Racha de días en la plataforma",
    streakLabel: "días",
    xpTitle: "Tus puntos de experiencia",
    exitButton: "Salir",
    syllabusTopic: "Tema",
    methodologyTitle: "Configura la Metodología Educativa",
    methodologySub: "La plataforma reordena automáticamente las 7 actividades interactivas basadas en el modelo cognitivo seleccionado.",
    founderLabel: "Fundador",
    syllabusOrderLabel: "FLUJO DINÁMICO DE LA CURRÍCULA",
    startLessonButton: "COMENZAR LECCIÓN →",
    backToSyllabus: "Volver a la selección de materiales",
    vocabModuleTitle: "Compilador de Vocabulario",
    vocabChooseLabel: "Personaliza las palabras de la lección",
    vocabSub: "Nuestra IA extrajo los términos clave. Selecciona los vocablos que quieres practicar.",
    selectAll: "Seleccionar todo",
    clearAll: "Limpiar lista",
    selectedCountLabel: "seleccionadas",
    selectMinimumLabel: "Por favor selecciona al menos 1 palabra",
    startWithSelected: "COMENZAR CON PALABRAS SELECCIONADAS →",
    presetTitle: "Ejemplos predefinidos",
    uploadTitle: "Subir PDF",
    pasteTitle: "Pegar Texto",
    presetTextbookLabel: "Selecciona una lección predefinida:",
    startPresetButton: "INICIAR LECCIÓN COMPLETADA →",
    uploadLabel: "Haz clic para seleccionar tu libro",
    dragDropLabel: "o arrastra el archivo PDF de tu lección aquí",
    loadingPdfMetadata: "Leyendo y cargando el documento...",
    loadingPdfDetails: "Contando páginas y revisando parámetros",
    pdfUploadButton: "Subir archivo",
    pdfSuccessLabel: "DOCUMENTO CARGADO",
    pdfTotalPages: "Páginas totales",
    pdfChangeBtn: "Cambiar archivo",
    fromPageLabel: "Desde la página",
    toPageLabel: "Hasta la página",
    pdfTip: "Recomendamos analizar de 1 a 3 páginas para máxima velocidad y una correcta focalización del tema por la IA.",
    pasteLabel: "Pega el texto del libro de texto:",
    pastePlaceholder: "Agrega las columnas de vocabulario, explicaciones gramaticales, o enunciados...",
    analyzePastedTextBtn: "ANALIZAR TEXTO PEGADO →",
    analyzingSetup: "🔮 Inicializando análisis de IA...",
    analyzingGemini: "🤖 Gemini analizando estructura y términos (tarda ~10 s)...",
    analysisErrorTitle: "¡Error de análisis!",
    nextGenTitle: "Siguiente Generación de EdTech AI",
    turnPdfTitle: "Convierte tus PDF en lecciones inteligentes",
    turnPdfDesc: "Solo sube las páginas de tu libro de texto o pega el texto para que la IA genere 7 actividades de estudio en segundos.",
    choosePdfWarning: "SELECCIONA UN ARCHIVO PDF...",
    clickUploadWarning: "HAZ CLIC EN 'SUBIR' PARA PROCESAR...",
    startAnalysisBtn: "INICIAR ANÁLISIS DE PÁGINAS SELECCIONADAS →",
    wordsLog: "palabras",
    flashcardLabel: "Tarjeta",
    clickToReveal: "Haz clic para voltear la tarjeta",
    listenSample: "Escuchar pronunciación",
    speakSent: "Pronunciar oración",
    stopAudio: "Detener",
    assembleSentenceDrill: "Ensamblar oraciones",
    assemblyPlaceholder: "Presiona los bloques abajo para ordenar...",
    comprehensionQuizzes: "De comprensión lectora/auditiva:",
    comprehensionPlaceholder: "Escucha con atención la narración y resuelve los cuestionarios de abajo.",
    typeGapWord: "Escribe la palabra faltante...",
    correctAnswer: "Correcto",
    listeningAccuracy: "Puntuación de comprensión",
    submitAnswers: "Enviar respuestas",
    trySpellingReview: "Intentar de nuevo",
    pronounceLabTitle: "Laboratorio de Pronunciación",
    recordOwnVoice: "Graba tu pronunciación",
    listeningTarget: "Escuchar pronunciación",
    unsupportedSpeechSynth: "La síntesis de voz no es compatible con este navegador.",
    acousticReplay: "Escuchar otra vez",
    spellInputPlaceholder: "Escribe la palabra letra por letra...",
    spellInputCheck: "Comprobar ortografía",
    spellInputNext: "Siguiente tarjeta",
    completedActivitiesTitle: "¡Lección Completada con Éxito!",
    completedActivitiesSubtitle: "Este es el reporte detallado de tu desempeño y la evaluación de la IA.",
    activitiesScoreCard: "PUNTUACIÓN GENERAL",
    cefrLevel: "NIVEL CEFR",
    aiCoachingTitle: "PLAN DE ENTRENAMIENTO IA",
    weakWordsLabel: "PALABRAS QUE REQUIEREN REVISIÓN (PUNTOS DÉBILES):",
    weakWordsSuccess: "¡Increíble! ¡No tienes puntos débiles en esta sesión!",
    repeatWholeLesson: "Repetir lección completa",
    changeMethodology: "Cambiar metodología de estudio",
    repeatWeakSpots: "Repetir solo palabras débiles",
    loadNewSyllabus: "Cargar nuevo manual PDF",
    toggleProgress: "Mostrar bitácora histórica",
    historicLogsTitle: "HISTORIAL DE SESIONES",
    clearHistory: "Limpiar",
    noHistory: "No hay sesiones guardadas. Completa tu primera lección.",
    pronounceMicIdle: "Micrófono inactivo. Presiona para grabar tu pronunciación.",
    evaluatingSpeechAI: "La IA analiza la pronunciación...",
    cognitiveEvaluation: "EVALUACIÓN COGNITIVA:",
    suggestionPhonetics: "Clave fonética:",
    matchedKeywordsLabel: "PALABRAS CLAVE UTILIZADAS:",
    checkingSentenceAI: "La IA analiza la estructura gramatical...",
    writeMinSentence: "Por favor escribe al menos una oración con sentido.",
    productionPromptLabel: "Completa el enunciado de acuerdo al contexto:",
    productionContext: "Contexto",
    productionPlaceholder: "Completa la plantilla usando las palabras clave...",
    completeSentenceTitle: "Producción de expresión",
    audioRate: "Velocidad",
    gameMatchingTitle: "Asociación visual",
    gameMatchingInst: "¡Haz clic en las tarjetas que corresponden para unirlas!",
    gameBestScore: "Record",
    gameOverSpam: "Sesión terminada (Exceso de errores)",
    gameComplete: "¡Rompecabezas lingüístico resuelto!",
    timeLimit: "Tiempo restante",
    secondsSuffix: "seg",
    congratsCardTitle: "¡Pareja perfecta!"
  }
};

export const TARGET_LANG_ADJECTIVES: Record<string, Record<string, { adverb: string; genitive: string; neuter: string }>> = {
  uk: {
    en: { adverb: "англійською", genitive: "англійської", neuter: "англійське" },
    ro: { adverb: "румунською", genitive: "румунської", neuter: "румунське" },
    es: { adverb: "іспанською", genitive: "іспанської", neuter: "іспанське" },
    de: { adverb: "німецькою", genitive: "німецької", neuter: "німецьке" },
    fr: { adverb: "французькою", genitive: "французької", neuter: "французьке" },
    it: { adverb: "італійською", genitive: "італійської", neuter: "італійське" },
    uk: { adverb: "українською", genitive: "української", neuter: "українське" }
  },
  en: {
    en: { adverb: "in English", genitive: "English", neuter: "English" },
    ro: { adverb: "in Romanian", genitive: "Romanian", neuter: "Romanian" },
    es: { adverb: "in Spanish", genitive: "Spanish", neuter: "Spanish" },
    de: { adverb: "in German", genitive: "German", neuter: "German" },
    fr: { adverb: "in French", genitive: "French", neuter: "French" },
    it: { adverb: "in Italian", genitive: "Italian", neuter: "Italian" },
    uk: { adverb: "in Ukrainian", genitive: "Ukrainian", neuter: "Ukrainian" }
  },
  ro: {
    en: { adverb: "în engleză", genitive: "engleză", neuter: "engleză" },
    ro: { adverb: "în română", genitive: "română", neuter: "română" },
    es: { adverb: "în spaniolă", genitive: "spaniolă", neuter: "spaniolă" },
    de: { adverb: "în germană", genitive: "germană", neuter: "germană" },
    fr: { adverb: "în franceză", genitive: "franceză", neuter: "franceză" },
    it: { adverb: "în italiană", genitive: "italiană", neuter: "italiană" },
    uk: { adverb: "în ucraineană", genitive: "ucraineană", neuter: "ucraineană" }
  },
  es: {
    en: { adverb: "en inglés", genitive: "inglés", neuter: "inglés" },
    ro: { adverb: "en rumano", genitive: "rumano", neuter: "rumano" },
    es: { adverb: "en español", genitive: "español", neuter: "español" },
    de: { adverb: "en alemán", genitive: "alemán", neuter: "alemán" },
    fr: { adverb: "en francés", genitive: "francés", neuter: "francés" },
    it: { adverb: "en italiano", genitive: "italiano", neuter: "italiano" },
    uk: { adverb: "en ucraniano", genitive: "ucraniano", neuter: "ucraniano" }
  }
};

export function getLanguageAdjective(
  nativeLang: string,
  targetLang: string,
  form: "adverb" | "genitive" | "neuter" = "adverb"
): string {
  const native = TARGET_LANG_ADJECTIVES[nativeLang] || TARGET_LANG_ADJECTIVES["uk"];
  const target = native[targetLang] || native["en"];
  return target[form];
}

