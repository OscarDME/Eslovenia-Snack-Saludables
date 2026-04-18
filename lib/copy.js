// lib/copy.js — todo el copy visible de la landing. Esloveno, verbatim desde
// loncherafeliz.aprende-hoy.shop. Cualquier cambio de texto ocurre tukaj.

export const copy = {
  metadata: {
    title:
      "Zdravi prigrizki za otroke | 500 hitrih in okusnih receptov",
    description:
      "Odkrijte 500 receptov za zdrave otroške prigrizke, pripravljene v manj kot 15 minutah. Vključuje 9 brezplačnih bonusov. Posebna ponudba: 9.90 €.",
    productName: "Priročnik za zdrave otroške prigrizke",
  },

  hero: {
    urgencyBar:
      "⚡ ČASOVNO OMEJENA PONUDBA! Samo danes: 95 % popusta",
    badge: "Pripravljeno v manj kot 15 minutah",
    headline: {
      before: "Spremenite prehrano svojih otrok z ",
      accent: "zdravimi prigrizki",
      after: ", ki so hkrati hitri in izjemno okusni",
    },
    subheadline:
      "Preprosti in hranljivi recepti, ki jih bodo vaši najmlajši oboževali – popolni za v šolo ali doma. 500 idej, s katerimi poskrbite za njihovo zdravje, ne da bi po nepotrebnem izgubljali čas!",
    ctaLabel: "Kupite zdaj in prihranite 95 %!",
    starsAriaLabel: "5 zvezdic",
    socialProof: "+5.000 zadovoljnih druÅ¾in",
    trustChips: [
      { icon: "🥗", text: "500 receptov" },
      { icon: "🎁", text: "Bonusi v vrednosti nad 90 € DARILO" },
      { icon: "🛡️", text: "14-dnevna garancija brez tveganja" },
    ],
    image: {
      src: "/hero-snacks.webp",
      alt: "Preobrazba od nezdrave hrane do zdravih prigrizkov v manj kot 15 minutah",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Pripravljeno v", bottom: "15 min" },
      discount: { icon: "💚", top: "95 %", bottom: "popusta" },
    },
  },

  story: {
    kicker: "Naša zgodba",
    paragraphs: [
      "Vaš otrok jé večkrat na dan in to, kar zaužije, neposredno vpliva na njegovo zdravje, energijo in razpoloženje.",
      "Težava ni v tem, da mu občasno ponudite piškot. Težava nastane, ko to zaradi pomanjkanja časa ali idej postane vsakdanja navada.",
      "Ne gre za to, da vam ni mar. Preprosto med utrujenostjo, gospodinjskimi opravili in tisočerimi obveznostmi občasno potrebujete nekaj resnično hitrega in preprostega.",
      "»ZDRAVI PRIGRIZKI ZA OTROKE« je ustvarjen prav za takšne starše – tiste, ki skrbijo za zdravje svojih otrok, a iščejo praktične rešitve namesto zapletenih receptov in neizvedljivih idej.",
    ],
  },

  benefits: {
    kicker: "Glavne prednosti",
    headline: "S Priročnikom za zdrave otroške prigrizke se boste poslovili od...",
    items: [
      {
        icon: "🍪",
        title: "Nezdrave hrane",
        desc: "Hitri recepti z naravnimi sestavinami, brez umetnih dodatkov in konzervansov.",
      },
      {
        icon: "⏱️",
        title: "Pomanjkanja časa",
        desc: "Recepti, pripravljeni v samo 15 minutah, povsem idealni za tiste z natrpanim urnikom.",
      },
      {
        icon: "🥦",
        title: "Skrbi glede prehrane vaših otrok",
        desc: "Prigrizki, polni pomembnih vitaminov in mineralov, ki jih bodo vsi oboževali.",
      },
      {
        icon: "😩",
        title: "Stresa pri pripravi zapletenih jedi",
        desc: "Okusni recepti, zaradi katerih bodo vaši najdražji komaj čakali na vašo naslednjo mojstrovino.",
      },
    ],
  },

  transformation: {
    kicker: "Preobrazba, ki jo iščete",
    headline: "Poglejte, kako se bosta spremenili prehrana in energija vaših otrok",
    before: {
      tag: "PREJ",
      title: "Brez energije in hranilne vrednosti",
      desc: "Predelana hrana, polna sladkorja in dodatkov, ki ne prinašajo nič dobrega",
    },
    after: {
      tag: "POTEM",
      title: "Srečni, živahni in polni energije",
      desc: "Naravni, okusni in hranljivi prigrizki, ki jih otroci naravnost obožujejo",
    },
    image: {
      src: "/kids-transformation.webp",
      alt: "Preobrazba: žalosten otrok, ki jé nezdravo hrano, v primerjavi s srečnim otrokom z zdravimi prigrizki",
    },
  },

  samples: {
    headline: "Neustavljivi recepti, ki jih bodo vzljubili",
    subheadline:
      "Oglejte si le majhen del okusnih receptov, ki jih boste odkrili v e-knjigi",
    items: [
      {
        image: "/recipe-pancakes.webp",
        title: "Zdrave palačinke",
        desc: "Puhaste in zlate, s svežim sadjem in pravim medom",
      },
      {
        image: "/recipe-pizza.webp",
        title: "Brezglutenska pica",
        desc: "Okusna pica s svežo zelenjavo in stopljenim sirom",
      },
      {
        image: "/recipe-smoothies.webp",
        title: "Naravni smutiji",
        desc: "Barviti sadni smutiji, ki jih bodo očarali",
      },
      {
        image: "/recipe-cookies.webp",
        title: "Ovseni piškoti",
        desc: "Hrustljavi domači piškoti z ovsenimi kosmiči in mandlji",
      },
    ],
    footnote: "Vseh 500 receptov vas čaka v celotni e-knjigi",
  },

  testimonials: {
    kicker: "DOKAZANI REZULTATI",
    headline: "Več kot 5000 družin je že spremenilo svoj način prehranjevanja",
    subheadline:
      "Pridružite se tisočem staršev, ki že uživajo v bolj zdravi hrani brez odvečnega stresa",
    rating: 5,
    ratingLabel: "5/5",
    reviewCount: "150 mnenj",
    items: [
      {
        initial: "M",
        name: "Maja",
        role: "mamica 2 majhnih otrok",
        quote:
          "Nikoli si nisem mislila, da bo moj sin tako hitro začel jesti zdrave prigrizke! Recepti niso le zelo preprosti, ampak so mu tudi neverjetno všeč. Hvala, ker ste mi olajšali življenje! To je najboljša naložba, kar sem jih kdaj naredila.",
      },
      {
        initial: "T",
        name: "Tomaž",
        role: "oče 3 otrok",
        quote:
          "Včasih me je zelo skrbelo, kaj dajem svojim otrokom, s to knjigo pa sem našel izjemno okusne in zdrave alternative. Zdaj vsi jemo bolj polnovredno in sem veliko bolj pomirjen!",
      },
      {
        initial: "A",
        name: "Ana",
        role: "strokovnjakinja za prehrano in mamica",
        quote:
          "Kot strokovnjakinja lahko potrdim, da so ti recepti popolnoma uravnoteženi. Moji otroci jih obožujejo, jaz pa sem mirna, saj vem, da dobro jedo. Toplo priporočam vsakemu staršu!",
      },
      {
        initial: "N",
        name: "Nina",
        role: "zaposlena mamica",
        quote:
          "Zaradi natrpanega urnika nisem imela časa za kuhanje. Ta knjiga je spremenila vse: recepti za 15 minut, ki jih moji otroci želijo znova in znova. Vredno vsakega centa! Priporočila sem jo že vsem prijateljicam.",
      },
    ],
  },

  whatYouGet: {
    kicker: "KAJ VKLJUČUJE?",
    headline: "Vse, kar boste našli v tej neverjetni e-knjigi",
    subheadline: "Popoln priročnik za zdravo otroško prehrano",
    items: [
      "500 hitrih in hranljivih receptov za zajtrk, kosilo, večerjo in šolske malice",
      "Pripravljeni tedenski jedilniki + varčni nakupovalni seznami",
      "Ideje za popolno kombiniranje zajtrka, malice in večerje",
      "Preprosta navodila za pripravo po korakih",
      "Seznam zdravih zamenjav, ko vam zmanjka določena sestavina",
      "Brezplačne posodobitve z novimi recepti in jedilniki",
      "In še veliko več…",
    ],
    footnote: {
      line1: "In to še ni vse...",
      line2: "Čaka vas še več!",
      line3: "Prejeli boste tudi...",
    },
  },

  bonuses: {
    flagline: "🔥 SAMO DANES!",
    headline: "Ob nakupu zdaj prejmite BREZPLAČNE bonuse v vrednosti nad 90 €",
    subheadline:
      "V vrednosti 92.95 € — popolnoma VAŠE DARILO ob današnjem nakupu!",
    badgeLabel: "BREZPLAČNO",
    valueLabel: "Vrednost:",
    items: [
      {
        value: "27.99 €",
        title: "Recepti za mafine in pice brez sladkorja in glutena",
        desc: "Pripravite zdrave različice njihove najljubše hrane, brez dodanega sladkorja in glutena, pripravljene dobesedno v nekaj minutah.",
      },
      {
        value: "19.99 €",
        title: "Praktični vodnik za organizacijo in zamrzovanje hrane",
        desc: "Naučite se, kako pripraviti vse naenkrat in imeti pripravljeno hrano za cel teden v manj kot 30 minutah na dan.",
      },
      {
        value: "14.99 €",
        title: "Posebni recepti za otroke z alergijami",
        desc: "Varni in okusni recepti, prilagojeni najpogostejšim alergijam (mleko, jajca, soja, arašidi).",
      },
      {
        value: "14.99 €",
        title: "Recepti za okusne in zdrave sladice",
        desc: "Zamenjajte predelane slaščice z zdravimi prigrizki, pripravljenimi izključno iz naravnih sestavin.",
      },
      {
        value: "14.99 €",
        title: "Zdravi in preprosti sveži sokovi ter napitki",
        desc: "Praktični recepti za naravne, hranljive in okusne sokove, ki bodo osvežili dan vaših najdražjih.",
      },
    ],
    totalLabel: "🎁 Skupna vrednost bonusov: 92.95 €",
    totalCta: "DANES JIH PREJMETE POPOLNOMA BREZPLAČNO OB SVOJEM NAKUPU!",
  },

  exclusiveBonuses: {
    kicker: "POLEG TEGA.. ⭐ EKSKLUZIVNI BONUSI!",
    headline: "Samo danes! Zagotovite si tudi te dodatne ekskluzivne bonuse",
    subheadline: "da preobrazite zdravje svojih otrok",
    badgeLabel: "BREZPLAČNO",
    valueLabel: "Vrednost:",
    items: [
      {
        value: "18.99 €",
        title: "Domači sadni gumijasti bonboni z visoko vsebnostjo vitamina C",
        desc: "Naučite se narediti naravne gumijaste bonbone, bogate z vitaminom C, da na zabaven in okusen način okrepite imunski sistem svojih otrok. Brez dodanega sladkorja, 100 % naravni in polni koristnih snovi!",
      },
      {
        value: "19.99 €",
        title: "Kako otroke navaditi, da vzljubijo zelenjavo",
        desc: "Spremenite zelenjavo v okusno in zabavno pustolovščino za vaše otroke. Preprosti recepti, ki jim bodo pomagali jesti zelenjavo z velikim veseljem.",
      },
      {
        value: "17.99 €",
        title: "Priročnik za hitre prigrizke za neješčne otroke",
        desc: "Odkrijte preproste in hranljive prigrizke, idealne za otroke s slabim tekom, ki jim pomagajo, da jedo zdravo in zelo okusno.",
      },
      {
        value: "17.99 €",
        title: "Priročnik o superživilih za otroke",
        desc: "Naučite se, kako s pomočjo preprostih receptov vključiti superživila, ki bodo izboljšala zdravje in energijo vaših otrok ter jim zagotovila pomembna hranila.",
      },
    ],
    totalLabel: "🎁 Skupna vrednost VSEH bonusov: 167.91 €",
    totalCta: "DANES JIH PREJMETE POPOLNOMA BREZPLAČNO OB SVOJEM NAKUPU!",
  },

  finalCta: {
    flagline: "⏰ PONUDBA VELJA SAMO DANES!",
    headline: "Popoln paket v vrednosti 201 €",
    subheadline: "Danes ga dobite s kar 95 % popustom",
    regularPriceLabel: "Redna cena:",
    regularPrice: "201.00 €",
    offerPrice: "9.90 €",
    bundleList: [
      "✅ 500 receptov za zdrave prigrizke (vrednost 34 €)",
      "✅ 9 ekskluzivnih bonusov v vrednosti 167.91 € — POPOLNOMA BREZPLAČNO!",
      "✅ Recepti, pripravljeni v manj kot 15 minutah",
      "✅ Takojšen in doživljenjski dostop",
      "✅ 14-dnevna garancija vračila denarja",
    ],
    button: "Kupite zdaj in prihranite 95 %!",
    trustRow: "🔒 100 % varno plačilo • ⚡ Takojšen dostop • ✅ 14-dnevna garancija",
    bonusesBadge: "✓ 9 BREZPLAČNIH BONUSOV",
    discountStickerLabel: "Samo danes",
    discountStickerValue: "-95%",
    imageAlt:
      "Popoln paket: E-knjiga Zdravi prigrizki za otroke + 9 bonusov",
    image: "/mockup-cta.webp",
  },

  guarantee: {
    headline: "Vaš nakup je 100 % zaščiten z našo 14-dnevno garancijo",
    tag: "NIČELNO TVEGANJE ZA VAS",
    body: "Tako smo prepričani, da vam bo ta priročnik všeč, da vam ponujamo brezpogojno 14-dnevno garancijo. Če iz katerega koli razloga niste 100 % zadovoljni, vam vrnemo vsak cent. Brez odvečnih vprašanj in zapletov.",
    footer: "✅ Zagotovljeno celotno vračilo kupnine • ✅ Brez odvečnih vprašanj • ✅ Takojšen postopek",
  },

  faq: {
    kicker: "POGOSTA VPRAŠANJA",
    headline: "Pogosto zastavljena vprašanja",
    items: [
      {
        q: "Za katero starostno skupino je priročnik namenjen?",
        a: "Priročnik je namenjen otrokom od 2 do 12 let, čeprav je mogoče recepte zlahka prilagoditi prav vsem starostim.",
      },
      {
        q: "Ali je primeren za otroke z alergijami?",
        a: "Da! Ponujamo recepte, prilagojene najpogostejšim alergijam, kot so mleko, jajca, soja in arašidi, tako da lahko vsi otroci uživajo v okusni in zdravi hrani.",
      },
      {
        q: "Ali moram znati dobro kuhati?",
        a: "Ne, recepti so ustvarjeni tako, da jim je kar se da preprosto slediti, z malo sestavinami in enostavnimi koraki. Tudi če niste strokovnjak v kuhinji, se boste odlično odrezali!",
      },
      {
        q: "Ali so sestavine drage?",
        a: "Ne, vse sestavine so cenovno ugodne in jih je enostavno najti v vsakem običajnem supermarketu. Ne potrebujete dragih ali težko dostopnih izdelkov.",
      },
      {
        q: "Koliko časa traja priprava prigrizkov?",
        a: "Recepti so izjemno hitri, večina prigrizkov je pripravljena v manj kot 15 minutah.",
      },
      {
        q: "Ali lahko plačam v svoji lokalni valuti?",
        a: "Da! Naš plačilni sistem znesek samodejno pretvori po tečaju vaše lokalne valute. Pri plačilu boste videli ceno, prilagojeno vaši valuti, tako da vam ne bo treba skrbeti za dodatne pretvorbe. Zagotavljamo, da je postopek plačila preprost in popolnoma pregleden, ne glede na to, kje se nahajate.",
      },
    ],
  },

  closing: {
    kicker: "ZADNJA PRILOŽNOST! ⚡ Ta ponudba bo kmalu potekla",
    headline:
      "Ne zamudite te edinstvene priložnosti, da preobrazite prehrano svoje družine!",
    subheadline:
      "Popoln priročnik + 9 bonusov v vrednosti 167.91 € DARILO! Vse to za ceno ene same večerje zunaj",
    regularPrice: "201.00 €",
    offerPrice: "9.90 €",
    ctaLabel: "DA, SVOJ PRIROČNIK ŽELIM ZDAJ!",
    trustRow:
      "🔒 100 % varno plačilo • ⚡ Takojšen dostop • ✅ 14-dnevna garancija vračila denarja brez tveganja",
  },

  footer: {
    madeWith: "Ustvarjeno z",
    forWho: "za zdrave družine",
    copyright: "© 2026 Zdravi prigrizki. Vse pravice pridržane.",
  },

  stickyCta: {
    label: "9.90 €",
    ctaLabel: "Kupite zdaj in prihranite 95 %!",
    urgency: "⚡ Časovno omejena ponudba",
  },
};