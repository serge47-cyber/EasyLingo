export interface TranslationWord {
  word: string;
  transcription: string;
  exampleSentence: string;
}

export const presetGrammarRules: Record<string, Record<"en" | "ro" | "es" | "de" | "fr" | "it" | "uk", { name: string; formula: string; examples: string[] }>> = {
  organic_farming: {
    en: {
      name: "Present Perfect Passive",
      formula: "Subject + have/has + been + Verb (V3/ -ed)",
      examples: [
        "The tomatoes have finally been picked.",
        "Our agriculture technique has been altered to protect local honeybees."
      ]
    },
    ro: {
      name: "Diateza Pasivă la Perfect Compus",
      formula: "Subiect + am/ai/a/am/ați/au + fost + Participiu (V3)",
      examples: [
        "Roșiile au fost în sfârșit recoltate.",
        "Tehnica noastră agricolă a fost modificată pentru a proteja albinele locale."
      ]
    },
    es: {
      name: "Voz Pasiva en Pretérito Perfecto",
      formula: "Sujeto + haber (presente) + sido + Participio",
      examples: [
        "Los tomates finalmente han sido cosechados.",
        "Nuestra técnica agrícola ha sido modificada para proteger las abejas locales."
      ]
    },
    de: {
      name: "Passiv im Perfekt",
      formula: "Subjekt + Hilfsverb (haben/sein) + ... + worden + Partizip II",
      examples: [
        "Die Tomaten sind endlich geerntet worden.",
        "Unsere landwirtschaftliche Technik ist geändert worden, um lokale Bienen zu schützen."
      ]
    },
    fr: {
      name: "Passif au Passé Composé",
      formula: "Sujet + avoir/être (présent) + été + Participe Passé",
      examples: [
        "Les tomates ont enfin été récoltées.",
        "Notre technique agricole a été modifiée pour protéger les abeilles locales."
      ]
    },
    it: {
      name: "Passivo al Passato Prossimo",
      formula: "Soggetto + essere (presente) + stato + Participio",
      examples: [
        "I pomodori sono stati finalmente raccolti.",
        "La nostra tecnica agricola è stata modificata per proteggere le api locali."
      ]
    },
    uk: {
      name: "Пасивний стан у теперішньому перфекті",
      formula: "Основа + have/has + been + Дієслово V3/ -ed",
      examples: [
        "Помідори нарешті були зібрані.",
        "Наша техніка сільського господарства була змінена для захисту місцевих бджіл."
      ]
    }
  },
  adaptive_intelligence: {
    en: {
      name: "Present Continuous Passive",
      formula: "Subject + am/is/are + being + Verb (V3 / -ed)",
      examples: [
        "Interactive lesson plans are being shaped by deep training algorithms.",
        "My speech is being processed by the phonetic neural network right now."
      ]
    },
    ro: {
      name: "Diateza Pasivă la Prezent Continuu",
      formula: "Subiect + sunt/ești/este/suntem/sunteți/sunt + în curs de + Participiu",
      examples: [
        "Planurile de lecții interactive sunt modelate de algoritmi profunzi în acest moment.",
        "Discursul meu este procesat de rețeaua neuronală chiar acum."
      ]
    },
    es: {
      name: "Voz Pasiva en Presente Continuo",
      formula: "Sujeto + estar (presente) + siendo + Participio",
      examples: [
        "Los planes de lecciones interactivas están siendo construidos por algoritmos profundos.",
        "Mi discurso está siendo procesado por la red neuronal en este momento."
      ]
    },
    de: {
      name: "Passiv im Präsens Progressiv",
      formula: "Subjekt + sein (Präsens) + am/im ... + Partizip II",
      examples: [
        "Interaktive Lehrpläne werden derzeit durch tiefe Algorithmen geformt.",
        "Meine Sprache wird gerade von einem neuronalen Netzwerk verarbeitet."
      ]
    },
    fr: {
      name: "Passif au Présent Continu",
      formula: "Sujet + être (présent) + en train d'être + Participe Passé",
      examples: [
        "Les plans de cours interactifs sont en train d'être façonnés par des algorithmes profonds.",
        "Mon discours est en train d'être traité par le réseau neuronal en ce moment."
      ]
    },
    it: {
      name: "Passivo al Presente Continuo",
      formula: "Soggetto + stare (presente) + venendo + Participio",
      examples: [
        "I piani di lezione interattivi vengono modellati da algoritmi profondi.",
        "Il mio discorso viene elaborato dalla rete neurale proprio ora."
      ]
    },
    uk: {
      name: "Пасивний стан у теперішньому тривалому часі",
      formula: "Основа + am/is/are + being + Дієслово V3 / -ed",
      examples: [
        "Плани інтерактивних занять формуються за допомогою глибинних алгоритмів.",
        "Моя мова прямо зараз розпізнається фонетичною нейронною мережею."
      ]
    }
  }
};

export const presetTexts: Record<string, Record<"en" | "ro" | "es" | "de" | "fr" | "it" | "uk", string>> = {
  organic_farming: {
    en: "Humans have cultivated herbs for centuries. The tomatoes are sun-ripened, and carefully picked by hand. In sustainable agriculture, herbs have been freshly harvested at dawn to preserve their volatile aromatic oils. Farmers have used organic methodologies to cultivate soil bacteria. When succulent products have been gathered, they are immediately brought to local organic markets.",
    ro: "Oamenii au cultivat ierburi de secole. Roșiile sunt coapte de soare și culese cu atenție manual. În agricultura durabilă, ierburile au fost proaspăt recoltate în zori pentru a-și păstra uleiurile aromatice volatile. Fermierii au folosit metodologii organice pentru a cultiva bacteriile din sol. Când produsele suculente au fost adunate, ele sunt imediat aduse la piețele de desfacere locale.",
    es: "Los seres humanos han cultivado hierbas durante siglos. Los tomates están madurados al sol y cosechados minuciosamente a mano. En la agricultura sostenible, las hierbas han sido recién cosechadas al amanecer para preservar sus aceites aromáticos volátiles. Cuando los productos suculentos han sido recolectados, se llevan de inmediato a los mercados locales.",
    de: "Menschen kultivieren Kräuter seit Jahrhunderten. Die Tomaten sind sonnengereift und sorgfältig von Hand gepflückt. In der nachhaltigen Landwirtschaft werden Kräuter frisch im Morgengrauen geerntet, um ihre flüchtigen aromatischen Öle zu bewahren. Landwirte nutzen organische Methoden, um Bodenbakterien zu kultivieren. Wenn die saftigen Produkte gesammelt sind, werden sie sofort zu lokalen Biomärkten gebracht.",
    fr: "Les humains cultivent des herbes depuis des siècles. Les tomates sont mûries au soleil et soigneusement cueillies à la main. Dans l'agriculture durable, les herbes ont été fraîchement récoltées à l'aube pour préserver leurs huiles aromatiques volatiles. Les agriculteurs ont utilisé des méthodologies biologiques pour cultiver les bactéries du sol.",
    it: "Gli esseri umani coltivano erbe da secoli. I pomodori sono maturati al sole e accuratamente raccolti a mano. Nell'agricoltura sostenibile, le erbe sono state appena raccolte all'alba pentru a preservare i loro oli aromatici volatili. Gli agricoltori hanno utilizzato metodologie biologiche per coltivare i batteri del suolo.",
    uk: "Люди вирощували трави протягом століть. Помідори дозріли на сонці та дбайливо зібрані вручну. У сталому сільському господарстві трави свіжозібрані на світанку, щоб зберегти їхні леткі ефірні олії. Фермери використовували органічні методології для культивування ґрунтових бактерій. Коли соковиті продукти зібрані, їх негайно привозять на місцеві ринки."
  },
  adaptive_intelligence: {
    en: "Modern schools are deploying autonomous systems. Interactive lesson plans are being shaped by deep algorithms. Currently, students' cognitive patterns are being carefully monitored using neural trackers. This adaptive software is teaching critical languages. While new lessons are being structured in real time, full integration of standard materials has been slow.",
    ro: "Școlile moderne desfășoară sisteme autonome. Planurile de lecții interactive sunt modelate de algoritmi profunzi. În prezent, modelele cognitive ale elevilor sunt monitorizate cu atenție folosind trackele neuronale. Acest software adaptiv predă limbi esențiale. În timp ce lecțiile noi sunt structurate în timp real, integrarea completă a materialelor standard a fost lentă.",
    es: "Las escuelas modernas están desplegando sistemas autónomos. Los planes de lecciones interactivas están siendo construidos por algoritmos profundos. Actualmente, los patrones cognitivos de los estudiantes están siendo monitoreados con cuidado usando rastreadores neuronales. Este software adaptativo enseña idiomas clave.",
    de: "Moderne Schulen setzen autonome Systeme ein. Interaktive Lehrpläne werden durch tiefe Algorithmen geformt. Derzeit werden die kognitiven Muster der Schüler mithilfe neuronaler Tracker sorgfältig überwacht. Diese adaptive Software lehrt wichtige Sprachen. Während neue Lektionen in Echtzeit strukturiert werden, verläuft die vollständige Integration langsamer.",
    fr: "Les écoles modernes déploient des systèmes autonomes. Les plans de cours interactifs sont façonnés par des algorithmes profunzi. Actuellement, les schémas cognitifs des élèves sont surveillés de près à l'aide de trackers neuronaux. Ce logiciel adaptatif enseigne des langues essentielles.",
    it: "Le scuole moderne stanno distribuendo sistemi autonomi. I piani di lezione interattivi vengono modellati da algoritmi profondi. Attualmente, i modelli cognitivi degli studenti vengono monitorati con cura utilizando tracker neurali. Questo software adattabile insegna lingue critiche.",
    uk: "Сучасні школи впроваджують автономні системи. Інтерактивні плани уроків формуються за допомогою глибоких алгоритмів. Зараз когнітивні шаблони учнів ретельно відстежуються за допомогою нейронних трекерів. Це адаптивне програмне забезпечення навчає важливих мов. Тоді як нові уроки структуруються в режимі реального часу, інтеграція матеріалів триває повільно."
  }
};

export const vocabularyTranslations: Record<string, Record<"uk" | "en" | "ro" | "es", string>> = {
  "cultivate": { uk: "культивувати, вирощувати, плекати", en: "cultivate, grow, tend", ro: "a cultiva, a crește, a îngriji", es: "cultivar, crecer, cuidar" },
  "harvest": { uk: "збирати врожай / жнива", en: "harvest, reap, gather crops", ro: "a recolta, a culege recolta", es: "cosechar, recolectar la cosecha" },
  "succulent": { uk: "соковитий, м'ясистий", en: "succulent, juicy, fleshy", ro: "suculent, zemos, cărnos", es: "suculento, jugoso, carnoso" },
  "dawn": { uk: "світанок, рання зоря", en: "dawn, early sunrise", ro: "zori de zi, revărsatul zorilor", es: "amanecer, alba" },
  "agriculture": { uk: "сільське господарство, землеробство", en: "agriculture, farming", ro: "agricultură, cultură agricolă", es: "agricultura, cultivo de la tierra" },
  "volatile": { uk: "леткий, ефірний, випаровуваний", en: "volatile, evaporating quickly, ethereal", ro: "volatil, eteric, evaporabil", es: "volátil, etéreo, evaporable" },
  "aromatic": { uk: "ароматний, духмяний", en: "aromatic, fragrant, sweet-smelling", ro: "aromatic, înmiresmat, parfumat", es: "aromático, fragante, oloroso" },
  "sustainable": { uk: "сталий, екологічно раціональний", en: "sustainable, eco-friendly", ro: "sustenabil, ecologic, durabil", es: "sostenible, ecológico" },
  "autonomous": { uk: "автономний, незалежний", en: "autonomous, independent, self-governing", ro: "autonom, independent, de sine stătător", es: "autónomo, independiente" },
  "cognitive": { uk: "когнітивний, пізнавальний", en: "cognitive, relating to mental processes of understanding", ro: "cognitiv, legat de procesele mentale de înțelegere", es: "cognitivo, relacionado con los procesos de comprensión" },
  "integration": { uk: "інтеграція, об'єднання", en: "integration, combination, merging", ro: "integrare, combinare, unire", es: "integración, combinación, unión" },
  "algorithm": { uk: "алгоритм", en: "algorithm, set of rules, computer recipe", ro: "algoritm, set de reguli de calcul", es: "algoritmo, conjunto de reglas de cálculo" },
  "adaptive": { uk: "адаптивний, пристосований", en: "adaptive, flexible, adjusting easily", ro: "adaptiv, adaptabil, flexibil", es: "adaptativo, adaptable, flexible" },
  "deploy": { uk: "розгортати, застосовувати", en: "deploy, roll out, set in motion, use", ro: "a desfășura, a implementa, a utiliza", es: "desplegar, implementar, emplear" },
  "structured": { uk: "структурований", en: "structured, organized, methodical", ro: "structurat, organizat, metodic", es: "estructurado, organizado, metódico" }
};

export const lesson1Vocabulary: Record<string, Record<"en" | "ro" | "es" | "de" | "fr" | "it" | "uk", TranslationWord>> = {
  "cultivate": {
    en: { word: "cultivate", transcription: "/ˈkʌltɪveɪt/", exampleSentence: "She cultivates sweet organic roses and sage in her garden." },
    ro: { word: "a cultiva", transcription: "[a kul.ti'va]", exampleSentence: "Ea cultivă trandafiri organici dulci și salvie în grădina ei." },
    es: { word: "cultivar", transcription: "[kul.ti'βar]", exampleSentence: "Ella cultiva rosas orgánicas dulces y salvia en su jardín." },
    de: { word: "kultivieren", transcription: "[kʊltiˈviːʁən]", exampleSentence: "Sie kultiviert süße Bio-Rosen und Salbei in ihrem Garten." },
    fr: { word: "cultiver", transcription: "[kyltive]", exampleSentence: "Elle cultive des roses biologiques douces et de la sauge dans son jardin." },
    it: { word: "coltivare", transcription: "[colti'vare]", exampleSentence: "Coltiva dolci rose biologiche e salvia nel suo giardino." },
    uk: { word: "культивувати", transcription: "[kul'tyvuvaty]", exampleSentence: "Вона вирощує солодкі органічні троянди та шавлію у своєму саду." }
  },
  "harvest": {
    en: { word: "harvest", transcription: "/ˈhɑːrvɪst/", exampleSentence: "Sarsaparilla roots have been harvested by wildcrafters for decades." },
    ro: { word: "a recolta", transcription: "[a re.kol'ta]", exampleSentence: "Rădăcinile de sarsaparila au fost recoltate de culegători de zeci de ani." },
    es: { word: "cosechar", transcription: "[ko.se'tʃar]", exampleSentence: "Las raíces de zarzaparrilla han sido cosechadas por recolectores silvestres durante décadas." },
    de: { word: "ernten", transcription: "[ˈɛʁntn̩]", exampleSentence: "Sarsaparilla-Wurzeln werden seit Jahrzehnten von Wildsammlern geerntet." },
    fr: { word: "récolter", transcription: "[rekolte]", exampleSentence: "Les racines de salsepareille sont récoltées par des cueilleurs amateurs depuis des décennies." },
    it: { word: "raccogliere", transcription: "[rak'kɔʎʎere]", exampleSentence: "Le radici di salsapariglia sono state raccolte dai raccoglitori selvatici per decenni." },
    uk: { word: "збирати врожай", transcription: "[zby'raty vrozhay]", exampleSentence: "Коріння сарсапарелі збирали дикі збирачі протягом десятиліть." }
  },
  "succulent": {
    en: { word: "succulent", transcription: "/ˈsʌkjʊlənt/", exampleSentence: "Nothing tastes sweeter than succulent tomatoes right off the vine." },
    ro: { word: "suculent", transcription: "[su.ku'lent]", exampleSentence: "Nimic nu are un gust mai dulce decât roșiile suculente direct de pe vrej." },
    es: { word: "suculento", transcription: "[su.ku'len.to]", exampleSentence: "Nada sabe más dulce que los tomates suculentos recién cosechados de la planta." },
    de: { word: "saftig", transcription: "[ˈzaftɪç]", exampleSentence: "Nichts schmeckt süßer als saftige Tomaten direkt vom Strauch." },
    fr: { word: "succulent", transcription: "[sykylɑ̃]", exampleSentence: "Rien n'a un goût plus doux que les tomates succulentes sorties de la vigne." },
    it: { word: "succulento", transcription: "[sukku'lento]", exampleSentence: "Niente è più dolce dei pomodori succulenti appena colti dalla pianta." },
    uk: { word: "соковитий", transcription: "[soko'vytyi]", exampleSentence: "Ніщо не смакує солодше, ніж соковиті помідори прямо з грядки." }
  },
  "dawn": {
    en: { word: "dawn", transcription: "/dɔːn/", exampleSentence: "To avoid the midday heat, harvesting begins at the break of dawn." },
    ro: { word: "zori de zi", transcription: "[zori]", exampleSentence: "Pentru a evita căldura amiezii, recoltarea începe în zori de zi." },
    es: { word: "amanecer", transcription: "[a.ma.ne'ser]", exampleSentence: "Para evitar el calor del mediodía, la cosecha comienza al amanecer." },
    de: { word: "Morgengrauen", transcription: "[ˈmɔʁɡn̩ˌɡʁaʊ̯ən]", exampleSentence: "Um die Mittagshitze zu vermeiden, beginnt die Ernte im Morgengrauen." },
    fr: { word: "aube", transcription: "[ob]", exampleSentence: "Pour éviter la chaleur de la mi-journée, la récolte commence dès l'aube." },
    it: { word: "alba", transcription: "[alba]", exampleSentence: "Per evitare la calura di mezzogiorno, la raccolta inizia all'alba." },
    uk: { word: "світанок", transcription: "[svi'tanok]", exampleSentence: "Щоб уникнути полуденної спеки, збір врожаю починається на світанку." }
  },
  "agriculture": {
    en: { word: "agriculture", transcription: "/ˈæɡrɪkʌltʃər/", exampleSentence: "Modern sustainable agriculture aims to minimize synthetic chemicals." },
    ro: { word: "agricultură", transcription: "[a.gri.kul'tu.rə]", exampleSentence: "Agricultura durabilă modernă își propune să reducă la minimum produsele chimice de sinteză." },
    es: { word: "agricultura", transcription: "[a.ɣri.kul'tu.ra]", exampleSentence: "La agricultura sostenible moderna tiene como objetivo minimizar los productos químicos sintéticos." },
    de: { word: "Landwirtschaft", transcription: "[ˈlantvɪʁtʃaft]", exampleSentence: "Eine moderne nachhaltige Landwirtschaft zielt darauf ab, synthetische Chemikalien zu minimieren." },
    fr: { word: "agriculture", transcription: "[aɡʁikyltyʁ]", exampleSentence: "L'agriculture durable moderne vise à minimiser les produits chimiques synthétiques." },
    it: { word: "agricoltura", transcription: "[agrikol'tura]", exampleSentence: "L'agricoltura sostenibile moderna mira a ridurre al minimo i prodotti chimici sintetici." },
    uk: { word: "сільське господарство", transcription: "[sil's'ke hospo'darstvo]", exampleSentence: "Сучасне стале сільське господарство прагне мінімізувати хімікати." }
  },
  "volatile": {
    en: { word: "volatile", transcription: "/ˈvɒlətaɪl/", exampleSentence: "Freshly cut rosemary releases highly volatile essential oils." },
    ro: { word: "volatil", transcription: "[vo.la'til]", exampleSentence: "Rozmarinul proaspăt tăiat eliberează uleiuri esențiale foarte volatile." },
    es: { word: "volátil", transcription: "[bo'la.til]", exampleSentence: "El romero recién cortado libera aceites esenciales altamente volátiles." },
    de: { word: "flüchtig", transcription: "[ˈflʏçtɪç]", exampleSentence: "Frisch geschnittener Rosmarin setzt leicht flüchtige ätherische Öle frei." },
    fr: { word: "volatile", transcription: "[volatil]", exampleSentence: "Le romarin fraîchement coupé libère des huiles essentielles très volatiles." },
    it: { word: "volatile", transcription: "[vola'tile]", exampleSentence: "Il rosmarino appena tagliato rilascia oli essenziali altamente volatili." },
    uk: { word: "леткий", transcription: "[let'kyi]", exampleSentence: "Свіжозрізаний розмарин виділяє високолеткі ефірні олії." }
  },
  "aromatic": {
    en: { word: "aromatic", transcription: "/ˌærəˈmætɪk/", exampleSentence: "The kitchen was filled with the aromatic fragrance of dried mint." },
    ro: { word: "aromatic", transcription: "[a.ro'ma.tik]", exampleSentence: "Bucătăria era plină de parfumul aromatic de mentă uscată." },
    es: { word: "aromático", transcription: "[a.ro'ma.ti.ko]", exampleSentence: "La cocina se llenó de la fragancia aromática de la menta seca." },
    de: { word: "aromatisch", transcription: "[aʁoˈmaːtɪʃ]", exampleSentence: "Die Küche war erfüllt vom aromatischen Duft getrockneter Minze." },
    fr: { word: "aromatique", transcription: "[aʁɔmatik]", exampleSentence: "La cuisine était remplie du parfum aromatique de la menthe séchée." },
    it: { word: "aromatico", transcription: "[aro'matiko]", exampleSentence: "La cucina era piena della fragranza aromatica della menta essiccata." },
    uk: { word: "ароматний", transcription: "[aro'matnyi]", exampleSentence: "Кухня була наповнена ароматними пахощами сушеної м'яти." }
  },
  "sustainable": {
    en: { word: "sustainable", transcription: "/səˈsteɪnəbl/", exampleSentence: "We must adopt sustainable farming practices to protect our soil." },
    ro: { word: "sustenabil", transcription: "[sus.te.ni'bil]", exampleSentence: "Trebuie să adoptăm practici agricole durabile pentru a ne proteja solul." },
    es: { word: "sostenible", transcription: "[sos'te.ni.βle]", exampleSentence: "Debemos adoptar prácticas agrícolas sostenibles para proteger nuestro suelo." },
    de: { word: "nachhaltig", transcription: "[ˈnaːxˌhaltɪç]", exampleSentence: "Wir müssen nachhaltige landwirtschaftliche Praktiken anwenden, um unseren Boden zu schützen." },
    fr: { word: "durable", transcription: "[dyʁabl]", exampleSentence: "Nous devons adopter des pratiques agricoles durables pour protéger notre sol." },
    it: { word: "sostenibile", transcription: "[sosteni'bile]", exampleSentence: "Dobbiamo adottare pratiche agricole sostenibili per proteggere il nostro suolo." },
    uk: { word: "сталий", transcription: "[sta'lyi]", exampleSentence: "Ми повинні впроваджувати екологічно сталі методи господарювання, щоб захистити наш ґрунт." }
  }
};

export const lesson2Vocabulary: Record<string, Record<"en" | "ro" | "es" | "de" | "fr" | "it" | "uk", TranslationWord>> = {
  "autonomous": {
    en: { word: "autonomous", transcription: "/ɔːˈtɒnəməs/", exampleSentence: "The classroom utilized autonomous software to assign tailored spelling tests." },
    ro: { word: "autonom", transcription: "[au.to'nom]", exampleSentence: "Clasa a folosit un software autonom pentru a atribui teste de ortografie personalizate." },
    es: { word: "autónomo", transcription: "[au'to.no.mo]", exampleSentence: "El aula utilizó software autónomo para asignar pruebas de ortografía personalizadas." },
    de: { word: "autonom", transcription: "[aʊ̯toˈnoːm]", exampleSentence: "Das Klassenzimmer nutzte autonome Software, um maßgeschneiderte Rechtschreibtests zuzuweisen." },
    fr: { word: "autonome", transcription: "[otɔnom]", exampleSentence: "La classe a utilisé un logiciel autonome pour attribuer des tests d'orthographe sur mesure." },
    it: { word: "autonomo", transcription: "[au'tonomo]", exampleSentence: "La classe ha utilizzato un software autonomo per assegnare test di ortografia su misura." },
    uk: { word: "автономний", transcription: "[avto'nomnyi]", exampleSentence: "У класі використовувалося автономне програмне забезпечення для індивідуальних диктантів." }
  },
  "cognitive": {
    en: { word: "cognitive", transcription: "/ˈkɒɡnətɪv/", exampleSentence: "Solving spaced-repetition puzzles enhances student cognitive retention." },
    ro: { word: "cognitiv", transcription: "[kog.ni'tiv]", exampleSentence: "Rezolvarea puzzle-urilor cu repetiție spațiată îmbunătățește retenția cognitivă a elevilor." },
    es: { word: "cognitivo", transcription: "[koɣ.ni'ti.βo]", exampleSentence: "Resolver acertijos de repetición espaciada mejora la retención cognitiva de los estudiantes." },
    de: { word: "kognitiv", transcription: "[kɔɡniˈtiːf]", exampleSentence: "Das Lösen von Rätseln mit verteilter Wiederholung verbessert die kognitive Behaltensleistung der Schüler." },
    fr: { word: "cognitif", transcription: "[kɔɡnitif]", exampleSentence: "La résolution d'énigmes de répétition espacée améliore la rétention cognitive des élèves." },
    it: { word: "cognitivo", transcription: "[konni'tivo]", exampleSentence: "Risolvere enigmi con ripetizione dilazionata migliora la ritenzione cognitiva degli studenti." },
    uk: { word: "когнітивний", transcription: "[koh'nytyvnyi]", exampleSentence: "Розв'язування головоломок покращує когнітивне запам'ятовування." }
  },
  "integration": {
    en: { word: "integration", transcription: "/ˌɪntɪˈɡreɪʃn/", exampleSentence: "Seamless integration of interactive videos keeps students intensely focused." },
    ro: { word: "integrare", transcription: "[in.te'gra.re]", exampleSentence: "Integrarea perfectă a videoclipurilor interactive îi menține pe elevi extrem de concentrați." },
    es: { word: "integración", transcription: "[in.te.ɣra'sjon]", exampleSentence: "La integración perfecta de videos interactivos mantiene a los estudiantes intensamente concentrados." },
    de: { word: "Integration", transcription: "[ɪnteɡraˈtsi̯oːn]", exampleSentence: "Die nahtlose Integration interaktiver Videos sorgt dafür, dass die Schüler hochgradig konzentriert bleiben." },
    fr: { word: "intégration", transcription: "[ɛ̃teɡrasjɔ̃]", exampleSentence: "L'intégration transparente de vidéos interactives maintient les élèves intensément concentrés." },
    it: { word: "integrazione", transcription: "[integrat'tsjone]", exampleSentence: "L'integrazione fluida di video interattivi mantiene gli studenti intensamente concentrati." },
    uk: { word: "інтеграція", transcription: "[ynte'hratsiya]", exampleSentence: "Безшовна інтеграція інтерактивних відео підтримує фокус уваги студентів." }
  },
  "algorithm": {
    en: { word: "algorithm", transcription: "/ˈælɡərɪðəm/", exampleSentence: "The AI algorithms analyze how quickly you recall flashcard definitions." },
    ro: { word: "algoritm", transcription: "[al.go'ritm]", exampleSentence: "Algoritmii de IA analizează cât de repede îți amintești definițiile de pe carduri." },
    es: { word: "algoritmo", transcription: "[al'ɣo'rit.mo]", exampleSentence: "Los algoritmos de IA analizan qué tan rápido recuerdas las definiciones de las tarjetas didácticas." },
    de: { word: "Algorithmus", transcription: "[alɡoˈʁɪtmʊs]", exampleSentence: "Die KI-Algorithmen analysieren, wie schnell Sie sich an Definitionen auf Karteikarten erinnern." },
    fr: { word: "algorithme", transcription: "[alɡɔʁitm]", exampleSentence: "Les algorithmes d'IA analysent la rapidité dengan laquelle vous vous souvenez des définitions des cartes mémoire." },
    it: { word: "algoritmo", transcription: "[algo'ritmo]", exampleSentence: "Gli algoritmi di intelligenza artificiale analizzano la rapidità con cui ricordi le definizioni delle flashcard." },
    uk: { word: "алгоритм", transcription: "[alho'rytm]", exampleSentence: "Алгоритми ШІ аналізують, як швидко ви згадуєте визначення на картках." }
  },
  "adaptive": {
    en: { word: "adaptive", transcription: "/əˈdæptɪv/", exampleSentence: "This platform is highly adaptive, moving faster if you answer correctly." },
    ro: { word: "adaptiv", transcription: "[a.dap'tiv]", exampleSentence: "Această platformă este extrem de adaptivă, adaptându-se dacă răspunzi corect." },
    es: { word: "adaptativo", transcription: "[a.ðap.ta'ti.βo]", exampleSentence: "Esta plataforma es muy adaptativa, avanzando más rápido si respondes correctamente." },
    de: { word: "adaptiv", transcription: "[adapˈtiːf]", exampleSentence: "Diese Plattform ist äußerst anpassungsfähig und arbeitet schneller, wenn Sie richtig antworten." },
    fr: { word: "adaptatif", transcription: "[adaptatif]", exampleSentence: "Cette plateforme est très adaptative, allant plus vite si vous répondez correctement." },
    it: { word: "adattabile", transcription: "[adat'tabile]", exampleSentence: "Questa plataforma è altamente adattabile, muovendosi più velocemente se rispondi correttamente." },
    uk: { word: "адаптивний", transcription: "[adap'tyvnyi]", exampleSentence: "Ця платформа є висоадаптивною, прискорюючись у разі правильних відповідей." }
  },
  "deploy": {
    en: { word: "deploy", transcription: "/dɪˈplɔɪ/", exampleSentence: "Tech-focused academies deploy advanced neural nets to personalize lessons." },
    ro: { word: "a desfășura", transcription: "[a des.fə.ʃu'ra]", exampleSentence: "Academiile axate pe tehnologie implementează rețele neuronale avansate pentru a personaliza lecțiile." },
    es: { word: "desplegar", transcription: "[des.ple'ɣar]", exampleSentence: "Las academias centradas en la tecnología despliegan redes neuronales avanzadas para personalizar las lecciones." },
    de: { word: "einsetzen", transcription: "[ˈaɪ̯nˌzɛtsn̩]", exampleSentence: "Technologieorientierte Akademien setzen fortschrittliche neuronale Netze ein, um den Unterricht zu personalisieren." },
    fr: { word: "déployer", transcription: "[deplwaje]", exampleSentence: "Les académies axées sur la technologie déploient des réseaux neuronaux avancés pour personnaliser les cours." },
    it: { word: "distribuire", transcription: "[distri'buire]", exampleSentence: "Le accademie orientate alla tecnologia distribuiscono reti neurali avanzate per personalizzare le lezioni." },
    uk: { word: "розгортати", transcription: "[roz'hortaty]", exampleSentence: "Технічні академії застосовують нейромережі для персоналізації уроків." }
  },
  "structured": {
    en: { word: "structured", transcription: "/ˈstrʌktʃərd/", exampleSentence: "Her studying became highly structured once they introduced spaced repetition." },
    ro: { word: "structurat", transcription: "[struk.tu'rat]", exampleSentence: "Studiul ei a devenit extrem de structurat odată ce a fost introdusă repetiția spațiată." },
    es: { word: "estructurado", transcription: "[es.truk.tu'ra.ðo]", exampleSentence: "Su estudio se volvió muy estructurado una vez que introdujeron la repetición espaciada." },
    de: { word: "strukturiert", transcription: "[stʁʊktuˈʁiːɐ̯t]", exampleSentence: "Ihr Lernen wurde sehr strukturiert, sobald die verteilte Wiederholung eingeführt wurde." },
    fr: { word: "structuré", transcription: "[stʁyktyʁe]", exampleSentence: "Son étude est devenue très structurée dès qu'ils ont introduit la répétition espacée." },
    it: { word: "strutturato", transcription: "[struttu'rato]", exampleSentence: "Il suo studio è completamento strutturato da quando au introdus repetiția spațiată." },
    uk: { word: "структурований", transcription: "[struktu'rovanyi]", exampleSentence: "Її навчання стало чітко структурованим після впровадження інтервальних повторень." }
  }
};

export const grammarExplanations: Record<"uk" | "en" | "ro" | "es", string> = {
  uk: "Пасивний стан використовується, коли дія важливіша за її виконавця.",
  en: "The passive voice is used to emphasize the action rather than the performer.",
  ro: "Diateza pasivă este folosită pentru a sublinia acțiunea, nu autorul ei.",
  es: "La voz pasiva se utiliza para enfatizar la acción en lugar de quien la realiza."
};

export const errorReasons: Record<number, Record<"uk" | "en" | "ro" | "es", string>> = {
  0: {
    uk: "Забули допоміжне дієслово passive voice ('been'/'being'), через що речення звучить у активному стані.",
    en: "Forgot correct auxiliary verb components for proper passive structuring.",
    ro: "S-a uitat verbul auxiliar, ceea ce face ca propoziția să fie incorect formată.",
    es: "Se olvidó el verbo auxiliar para la correcta estructuración pasiva."
  },
  1: {
    uk: "Для іменників у множині слід використовувати допоміжне дієслово множини (have / are).",
    en: "Subject-verb agreement failure (use have or are for plurals instead of singular forms).",
    ro: "Dezacord între subiect și verb (folosiți forma de plural corespunzătoare).",
    es: "Falta de concordancia entre sujeto y verbo (use plural en lugar de singular)."
  }
};

export const blankHints: Record<number, Record<"uk" | "en" | "ro" | "es", string>> = {
  0: {
    uk: "Допоміжне дієслово пасивного стану",
    en: "Auxiliary verb helper representing completion/plurality/duration in passive",
    ro: "Modelul verbului auxiliar pasiv corespunzător",
    es: "Verbo auxiliar que representa la construcción pasiva"
  },
  1: {
    uk: "Основне дієслово у формі дієприкметника",
    en: "The main verb in past participle passive form (V3 / -ed)",
    ro: "Verbul de acțiune principal la participiu trecut (-ed / V3)",
    es: "El verbo de acción principal en participio pasado (-ed / V3)"
  },
  2: {
    uk: "Допоміжне дієслово відповідно до числа підмета",
    en: "Helping modifier matching the subject count",
    ro: "Verb auxiliar potrivit pentru numărul subiectului (singular/plural)",
    es: "Verbo de ayuda que coincide con el número del sujeto"
  },
  3: {
    uk: "Правильна форма дієприкметника минулого часу",
    en: "Proper past participle verb extension",
    ro: "Forma de participiu a verbului indicat",
    es: "Forma de participio del verbo indicado"
  }
};

export const quizHints: Record<number, Record<"uk" | "en" | "ro" | "es", string>> = {
  0: {
    uk: "Зверніть увагу на деталі часу або розповіді",
    en: "Pay attention to specific details of time or analytical criteria.",
    ro: "Fiți atenți la detalii speciale ale timpului sau criteriilor analitice.",
    es: "Preste atención a los detalles específicos de tiempo o criterios analíticos."
  },
  1: {
    uk: "Згадайте частину про заборону хімікатів або підтримку інтеграції",
    en: "Recall facts regarding banning chemicals or integration assistance.",
    ro: "Amintiți-vă faptele referitoare la interdicții sau sprijin.",
    es: "Recuerde los datos sobre la prohibición o el apoyo."
  },
  2: {
    uk: "Слово, що виражає процес або стан у реченні",
    en: "The filler word denoting ongoing status or process role.",
    ro: "Cuvântul potrivit pentru a exprima starea de desfășurare.",
    es: "La palabra adecuada para expresar el estado actual de la acción."
  }
};

export const speakingPrompts: Record<number, Record<"uk" | "en" | "ro" | "es", string>> = {
  0: {
    uk: "Поділіться враженнями над новими досліджуваними словами.",
    en: "Share comments using succulent, agricultural, or cognitive thoughts.",
    ro: "Împărtășiți opinii folosind noile cuvinte studiate.",
    es: "Comparta sus opiniones utilizando las nuevas palabras estudiadas."
  },
  1: {
    uk: "Обговоріть перспективи сталого прогресу або штучної автоматизації у вашій країні.",
    en: "Discuss sustainable processes or deployment of smart solutions in your land.",
    ro: "Discutați despre procese durabile sau automatizarea inteligentă în țara dvs.",
    es: "Discuta sobre procesos sostenibles o la automatización inteligente en su país."
  },
  2: {
    uk: "Опишіть власні плани на майбутнє за допомогою нових форм.",
    en: "Describe your personal schedule utilizing structural patterns.",
    ro: "Descrieți-vă planurile personale utilizând noile structuri.",
    es: "Describa sus planes personales utilizando las nuevas estructuras."
  }
};

export const presetListeningQuestions: Record<string, Record<"en" | "ro" | "es" | "de" | "fr" | "it" | "uk", {
  id: string;
  type: "multiple-choice" | "true-false" | "gap-fill";
  question: string;
  options: string[];
  answer: string;
  hint_uk?: string;
}[]>> = {
  organic_farming: {
    en: [
      {
        id: "l_q1",
        type: "multiple-choice",
        question: "When were the succulent tomatoes in the monologue harvested?",
        options: ["At noon", "At the break of dawn", "Late evening", "They are not harvested yet"],
        answer: "At the break of dawn"
      },
      {
        id: "l_q2",
        type: "true-false",
        question: "Pesticides are widely and deliberately sprayed on this organic field.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "l_q3",
        type: "gap-fill",
        question: "Fill the blank: 'In this field, aromatic herbs have been ___ under the golden sun.'",
        options: [],
        answer: "cultivated"
      }
    ],
    ro: [
      {
        id: "l_q1",
        type: "multiple-choice",
        question: "Când au fost recoltate roșiile suculente în monolog?",
        options: ["La amiază", "În zori de zi", "Seara târziu", "Nu sunt recoltate încă"],
        answer: "În zori de zi"
      },
      {
        id: "l_q2",
        type: "true-false",
        question: "Pesticidele sunt pulverizate pe scară largă și în mod deliberat pe acest câmp organic.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "l_q3",
        type: "gap-fill",
        question: "Completați spațiul liber: 'În agricultura durabilă, ierburile au fost proaspăt ___ în zori...'",
        options: [],
        answer: "recoltate"
      }
    ],
    es: [
      {
        id: "l_q1",
        type: "multiple-choice",
        question: "¿Cuándo se cosecharon los tomates suculentos en el monólogo?",
        options: ["Al mediodía", "Al amanecer", "Tarde en la noche", "Aún no se han cosechado"],
        answer: "Al amanecer"
      },
      {
        id: "l_q2",
        type: "true-false",
        question: "Los pesticidas se rocían de manera amplia y deliberada en este campo orgánico.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "l_q3",
        type: "gap-fill",
        question: "Complete el espacio en blanco: 'En la agricultura sostenible, las hierbas han sido recién ___ al amanecer...'",
        options: [],
        answer: "cosechadas"
      }
    ],
    de: [
      {
        id: "l_q1",
        type: "multiple-choice",
        question: "Wann wurden die saftigen Tomaten im Monolog geerntet?",
        options: ["Am Mittag", "Im Morgengrauen", "Spät am Abend", "Sie sind noch nicht geerntet"],
        answer: "Im Morgengrauen"
      },
      {
        id: "l_q2",
        type: "true-false",
        question: "In diesem Bio-Feld werden Pestizide in großem Umfang und absichtlich gesprüht.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "l_q3",
        type: "gap-fill",
        question: "Füllen Sie die Lücke aus: 'In der nachhaltigen Landwirtschaft werden Kräuter frisch im Morgengrauen ___...'",
        options: [],
        answer: "geerntet"
      }
    ],
    fr: [
      {
        id: "l_q1",
        type: "multiple-choice",
        question: "Quand les tomates succulentes ont-elles été récoltées dans le monologue ?",
        options: ["À midi", "À l'aube", "Tard le soir", "Elles ne sont pas encore récoltées"],
        answer: "À l'aube"
      },
      {
        id: "l_q2",
        type: "true-false",
        question: "Les pesticides sont largement et délibérément pulvérisés sur ce champ biologique.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "l_q3",
        type: "gap-fill",
        question: "Remplissez le blanc : 'Dans l'agriculture durable, les herbes ont été fraîchement ___ à l'aube...'",
        options: [],
        answer: "récoltées"
      }
    ],
    it: [
      {
        id: "l_q1",
        type: "multiple-choice",
        question: "Quando sono stati raccolti i pomodori succulenti nel monologo?",
        options: ["A mezzogiorno", "All'alba", "Tarda sera", "Non sono ancora raccolti"],
        answer: "All'alba"
      },
      {
        id: "l_q2",
        type: "true-false",
        question: "I pesticidi vengono ampiamente e deliberatamente spruzzati su questo campo biologico.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "l_q3",
        type: "gap-fill",
        question: "Riempi lo spazio vuoto: 'Nell'agricoltura sostenibile, le erbe sono state appena ___ all'alba...'",
        options: [],
        answer: "raccolte"
      }
    ],
    uk: [
      {
        id: "l_q1",
        type: "multiple-choice",
        question: "Коли у монолозі було зібрано соковиті помідори?",
        options: ["Опівдні", "На світанку", "Пізно ввечері", "Вони ще не зібрані"],
        answer: "На світанку"
      },
      {
        id: "l_q2",
        type: "true-false",
        question: "Пестициди широко та навмисно розпилюються на цьому органічному полі.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "l_q3",
        type: "gap-fill",
        question: "Заповніть пропуск: 'У сталому сільському господарстві трави свіжозібрані на ___, щоб зберегти...'",
        options: [],
        answer: "світанку"
      }
    ]
  },
  adaptive_intelligence: {
    en: [
      {
        id: "la_q1",
        type: "multiple-choice",
        question: "What is analyzing cognitive patterns at this moment?",
        options: ["Paper notebooks", "Standard dictionaries", "Neural algorithms", "Human headmasters"],
        answer: "Neural algorithms"
      },
      {
        id: "la_q2",
        type: "true-false",
        question: "The teacher community is strictly against the integration of digital materials.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "la_q3",
        type: "gap-fill",
        question: "Fill the blank: 'At this moment, autonomous lesson plans are ___ generated.'",
        options: [],
        answer: "being"
      }
    ],
    ro: [
      {
        id: "la_q1",
        type: "multiple-choice",
        question: "Ce analizează modelele cognitive în acest moment?",
        options: ["Caiete de hârtie", "Dicționare standard", "Algoritmi neuronali", "Directori umani"],
        answer: "Algoritmi neuronali"
      },
      {
        id: "la_q2",
        type: "true-false",
        question: "Comunitatea de profesori este strict împotriva integrării materialelor digitale.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "la_q3",
        type: "gap-fill",
        question: "Completați spațiul liber: 'În prezent, modelele cognitive ale elevilor sunt ___ cu atenție...'",
        options: [],
        answer: "monitorizate"
      }
    ],
    es: [
      {
        id: "la_q1",
        type: "multiple-choice",
        question: "¿Qué está analizando los patrones cognitivos en este momento?",
        options: ["Cuadernos de papel", "Diccionarios estándar", "Algoritmos neuronales", "Directores humanos"],
        answer: "Algoritmos neuronales"
      },
      {
        id: "la_q2",
        type: "true-false",
        question: "La comunidad de profesores está estrictamente en contra de la integración de materiales digitales.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "la_q3",
        type: "gap-fill",
        question: "Complete el espacio en blanco: 'Actualmente, los patrones cognitivos de los estudiantes están siendo ___ con cuidado...'",
        options: [],
        answer: "monitoreados"
      }
    ],
    de: [
      {
        id: "la_q1",
        type: "multiple-choice",
        question: "Was analysiert in diesem Moment kognitive Muster?",
        options: ["Papiernotizbücher", "Standardwörterbücher", "Neuronale Algorithmen", "Menschliche Schulleiter"],
        answer: "Neuronale Algorithmen"
      },
      {
        id: "la_q2",
        type: "true-false",
        question: "Die Lehrergemeinschaft ist strikt gegen die Integration digitaler Materialien.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "la_q3",
        type: "gap-fill",
        question: "Füllen Sie die Lücke aus: 'Derzeit werden die kognitiven Muster der Schüler mithilfe neuronaler Tracker sorgfältig ___.'",
        options: [],
        answer: "überwacht"
      }
    ],
    fr: [
      {
        id: "la_q1",
        type: "multiple-choice",
        question: "Qu'est-ce qui analyse les schémas cognitifs en ce moment ?",
        options: ["Cahiers en papier", "Dictionnaires standard", "Algorithmes neuronaux", "Directeurs d'école"],
        answer: "Algorithmes neuronaux"
      },
      {
        id: "la_q2",
        type: "true-false",
        question: "La communauté enseignante est strictement opposée à l'intégration des supports numériques.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "la_q3",
        type: "gap-fill",
        question: "Remplissez le blanc : 'Actuellement, les schémas cognitifs des élèves sont ___ de près...'",
        options: [],
        answer: "surveillés"
      }
    ],
    it: [
      {
        id: "la_q1",
        type: "multiple-choice",
        question: "Cosa sta analizzando i modelli cognitivi in questo momento?",
        options: ["Quaderni di carta", "Dizionari standard", "Algoritmi neurali", "Presidi umani"],
        answer: "Algoritmi neurali"
      },
      {
        id: "la_q2",
        type: "true-false",
        question: "La comunità dei docenti è strettamente contraria all'integrazione di materiali digitali.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "la_q3",
        type: "gap-fill",
        question: "Riempi lo spazio vuoto: 'Attualmente, i modelli cognitivi degli studenti vengono ___ con cura...'",
        options: [],
        answer: "monitorati"
      }
    ],
    uk: [
      {
        id: "la_q1",
        type: "multiple-choice",
        question: "Що в цей момент аналізує когнітивні шаблони?",
        options: ["Паперові зошити", "Стандартні словники", "Нейронні алгоритми", "Директори шкіл"],
        answer: "Нейронні алгоритми"
      },
      {
        id: "la_q2",
        type: "true-false",
        question: "Спільнота вчителів категорично проти інтеграції цифрових матеріалів.",
        options: [],
        answer: "FALSE"
      },
      {
        id: "la_q3",
        type: "gap-fill",
        question: "Заповніть пропуск: 'Зараз когнітивні шаблони учнів ретельно ___ за допомогою нейронних трекерів.'",
        options: [],
        answer: "відстежуються"
      }
    ]
  }
};

export const presetSentenceBuilds: Record<string, Record<"en" | "ro" | "es" | "de" | "fr" | "it" | "uk", {
  correctSentence: string;
  words: string[];
}[]>> = {
  organic_farming: {
    en: [
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
    ],
    ro: [
      {
        correctSentence: "Roșiile suculente au fost proaspăt recoltate de către fermieri.",
        words: ["sau", "fermieri.", "au", "Roșiile", "proaspăt", "fost", "suculente", "către", "de", "recoltate"]
      },
      {
        correctSentence: "Această tehnică veche de cultivare a fost conservată de secole.",
        words: ["secole.", "Această", "veche", "conservată", "a", "tehnică", "de", "fost", "cultivare"]
      },
      {
        correctSentence: "Îngrășămintele chimice au fost complet interzise pe solul nostru.",
        words: ["interzise", "pe", "nostru.", "chimice", "solul", "Îngrășămintele", "complet", "au", "fost"]
      }
    ],
    es: [
      {
        correctSentence: "Los tomates suculentos han sido recién cosechados por los agricultores.",
        words: ["suculentos", "cosechados", "sido", "por", "recién", "agricultores.", "Los", "tomates", "han", "los"]
      },
      {
        correctSentence: "Esta antigua técnica agrícola ha sido preservada durante siglos.",
        words: ["técnica", "de", "Esta", "siglos.", "antigua", "preservada", "durante", "agrícola", "ha", "sido"]
      },
      {
        correctSentence: "Los fertilizantes químicos han sido completamente prohibidos de nuestro suelo.",
        words: ["prohibidos", "químicos", "Los", "sido", "suelo.", "completamente", "de", "nuestro", "fertilizantes", "han"]
      }
    ],
    de: [
      {
        correctSentence: "Die saftigen Tomaten sind frisch von Bauern geerntet worden.",
        words: ["saftigen", "Bauern", "geerntet", "Die", "frisch", "Tomaten", "worden.", "sind", "von"]
      },
      {
        correctSentence: "Diese alte landwirtschaftliche Technik wurde über Jahrhunderte bewahrt.",
        words: ["wurde", "alte", "Diese", "Jahrhunderte", "bewahrt.", "landwirtschaftliche", "über", "Technik"]
      },
      {
        correctSentence: "Chemische Düngemittel wurden vollständig von unserem Boden verbannt.",
        words: ["Düngemittel", "von", "vollständig", "verbannt.", "unserem", "Chemische", "wurden", "Boden"]
      }
    ],
    fr: [
      {
        correctSentence: "Les tomates succulentes ont été fraîchement cueillies par les agriculteurs.",
        words: ["succulentes", "été", "cueillies", "Les", "agriculteurs.", "fraîchement", "par", "ont", "les", "tomates"]
      },
      {
        correctSentence: "Cette technique agricole ancienne a été préservée pendant des siècles.",
        words: ["technique", "ancienne", "été", "préservée", "des", "Cette", "agricole", "pendant", "siècles.", "a"]
      },
      {
        correctSentence: "Les engrais chimiques ont été complètement bannis de notre sol.",
        words: ["chimiques", "été", "complètement", "Les", "engrais", "sol.", "bannis", "de", "notre", "ont"]
      }
    ],
    it: [
      {
        correctSentence: "I pomodori succulenti sono stati appena raccolti dagli agricoltori.",
        words: ["succulenti", "raccolti", "sono", "dagli", "I", "appena", "agricoltori.", "stati", "pomodori"]
      },
      {
        correctSentence: "Questa antica tecnica agricola è stata preservata per secoli.",
        words: ["tecnica", "stata", "preservata", "secoli.", "Questa", "agricola", "per", "è", "antica"]
      },
      {
        correctSentence: "I fertilizzanti chimici sono stati completamente vietati dal nostro terreno.",
        words: ["chimici", "stati", "vietati", "dal", "I", "completamente", "terreno.", "nostro", "sono", "fertilizzanti"]
      }
    ],
    uk: [
      {
        correctSentence: "Соковиті помідори були щойно зібрані фермерами.",
        words: ["зібрані", "Соковиті", "щойно", "були", "фермерами.", "помідори"]
      },
      {
        correctSentence: "Ця стародавня техніка землеробства зберігалася протягом століть.",
        words: ["землеробства", "зберігалася", "Ця", "століть.", "стародавня", "протягом", "техніка"]
      },
      {
        correctSentence: "Хімічні добрива були повністю заборонені на нашому ґрунті.",
        words: ["були", "заборонені", "Хімічні", "ґрунті.", "повністю", "нашому", "на", "добрива"]
      }
    ]
  },
  adaptive_intelligence: {
    en: [
      {
        correctSentence: "Custom spelling lists are being structured by the smart database.",
        words: ["by", "are", "structured", "database.", "Custom", "being", "smart", "spelling", "lists"]
      },
      {
        correctSentence: "Our cognitive retention is being enhanced through adaptive intervals.",
        words: ["retention", "enhanced", "Our", "cognitive", "adaptive", "being", "is", "through", "intervals."]
      }
    ],
    ro: [
      {
        correctSentence: "Listele de ortografie personalizate sunt structurate de baza de date inteligentă.",
        words: ["personalizate", "structurate", "date", "inteligentă.", "Listele", "de", "sunt", "baza", "ortografie"]
      },
      {
        correctSentence: "Retenția noastră cognitivă este îmbunătățită prin intervale adaptive.",
        words: ["cognitivă", "îmbunătățită", "Retenția", "noastră", "adaptive.", "este", "prin", "intervale"]
      }
    ],
    es: [
      {
        correctSentence: "Las listas de deletreo personalizadas están siendo estructuradas por la base de datos inteligente.",
        words: ["deletreo", "estructuradas", "siendo", "por", "Las", "listas", "personalizadas", "están", "base", "datos", "inteligente."]
      },
      {
        correctSentence: "Nuestra retención cognitiva está siendo mejorada mediante intervalos adaptativos.",
        words: ["retención", "mejorada", "Nuestra", "cognitiva", "adaptativos.", "está", "siendo", "mediante", "intervalos"]
      }
    ],
    de: [
      {
        correctSentence: "Benutzerdefinierte Rechtschreiblisten werden von der intelligenten Datenbank strukturiert.",
        words: ["Rechtschreiblisten", "von", "intelligenten", "strukturiert.", "Benutzerdefinierte", "werden", "der", "Datenbank"]
      },
      {
        correctSentence: "Unsere kognitive Merkfähigkeit wird durch adaptive Intervalle verbessert.",
        words: ["Merkfähigkeit", "durch", "verbessert.", "Unsere", "kognitive", "wird", "adaptive", "Intervalle"]
      }
    ],
    fr: [
      {
        correctSentence: "Des listes d'orthographe personnalisées sont structurées par la base de données intelligente.",
        words: ["personnalisées", "structurées", "données", "intelligente.", "Des", "listes", "sont", "par", "la", "base", "d'orthographe"]
      },
      {
        correctSentence: "Notre rétention cognitive est améliorée grâce à des intervalles adaptatifs.",
        words: ["cognitive", "améliorée", "Notre", "rétention", "adaptatifs.", "est", "grâce", "à", "des", "intervalles"]
      }
    ],
    it: [
      {
        correctSentence: "Le liste di ortografia personalizzate vengono strutturate dal database intelligente.",
        words: ["personalizzate", "strutturate", "database", "intelligente.", "Le", "liste", "di", "vengono", "dal", "ortografia"]
      },
      {
        correctSentence: "La nostra ritenzione cognitiva viene migliorata attraverso intervalli adattivi.",
        words: ["cognitiva", "migliorata", "La", "nostra", "adattivi.", "viene", "attraverso", "intervalli", "ritenzione"]
      }
    ],
    uk: [
      {
        correctSentence: "Списки написання слів створюються інтелектуальною базою даних.",
        words: ["написання", "створюються", "Списки", "даних.", "слів", "інтелектуальною", "базою"]
      },
      {
        correctSentence: "Наше когнітивне запам'ятовування покращується за допомогою адаптивних інтервалів.",
        words: ["запам'ятовування", "покращується", "Наше", "когнітивне", "інтервалів.", "за", "допомогою", "адаптивних"]
      }
    ]
  }
};

