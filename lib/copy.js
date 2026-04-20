// lib/copy.js — celotno vidno besedilo na pristajalni strani. Slovenščina.
// loncherafeliz.aprende-hoy.shop.

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
    socialProof: "+5.000 zadovoljnih družin",
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
        title: "Skrbi glede prehrane",
        desc: "Prigrizki, polni pomembnih vitaminov in mineralov, ki jih bodo vsi oboževali.",
      },
      {
        icon: "😩",
        title: "Stresa v kuhinji",
        desc: "Okusni recepti, zaradi katerih bodo vaši najdražji komaj čakali na naslednjo malico.",
      },
    ],
  },

  transformation: {
    kicker: "Preobrazba, ki jo iščete",
    headline: "Poglejte, kako se bosta spremenili prehrana in energija vaših otrok",
    before: {
      tag: "PREJ",
      title: "Brez energije in hranil",
      desc: "Predelana hrana, polna sladkorja in dodatkov, ki ne prinašajo nič dobrega.",
    },
    after: {
      tag: "POTEM",
      title: "Srečni in polni energije",
      desc: "Naravni, okusni in hranljivi prigrizki, ki jih otroci naravnost obožujejo.",
    },
    image: {
      src: "/kids-transformation.webp",
      alt: "Preobrazba: žalosten otrok z nezdravo hrano vs srečen otrok z zdravimi prigrizki",
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
        desc: "Puhaste in zlate, s svežim sadjem in pravim medom.",
      },
      {
        image: "/recipe-pizza.webp",
        title: "Brezglutenska pica",
        desc: "Okusna pica s svežo zelenjavo in stopljenim sirom.",
      },
      {
        image: "/recipe-smoothies.webp",
        title: "Naravni smutiji",
        desc: "Barviti sadni napitki, ki jih bodo popolnoma očarali.",
      },
      {
        image: "/recipe-cookies.webp",
        title: "Ovseni piškoti",
        desc: "Hrustljavi domači piškoti z ovsenimi kosmiči in mandlji.",
      },
    ],
    footnote: "Vseh 500 receptov vas čaka v celotni e-knjigi",
  },

  testimonials: {
    kicker: "DOKAZANI REZULTATI",
    headline: "Več kot 5000 družin je že spremenilo svoj način življenja",
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
          "Nikoli si nisem mislila, da bo moj sin tako hitro vzljubil zdrave prigrizke! Recepti so preprosti in mu gredo zelo v slast.",
      },
      {
        initial: "T",
        name: "Tomaž",
        role: "oče 3 otrok",
        quote:
          "Včasih me je zelo skrbelo, kaj jedo moji otroci, zdaj pa sem veliko bolj pomirjen. Vsi jemo bolj polnovredno!",
      },
      {
        initial: "A",
        name: "Ana",
        role: "strokovnjakinja za prehrano",
        quote:
          "Kot strokovnjakinja potrjujem, da so recepti odlično uravnoteženi. Otroci jih obožujejo, starši pa so lahko brez skrbi.",
      },
      {
        initial: "N",
        name: "Nina",
        role: "zaposlena mamica",
        quote:
          "Ta knjiga je spremenila vse: recepti za 15 minut, ki jih otroci želijo znova in znova. Vredno vsakega centa!",
      },
    ],
  },

  whatYouGet: {
    kicker: "KAJ VKLJUČUJE?",
    headline: "Vse, kar boste našli v tem neverjetnem paketu",
    subheadline: "Popoln priročnik za zdravo otroško prehrano",
    items: [
      "500 hitrih receptov za zdrave šolske malice in prigrizke doma",
      "Pripravljeni tedenski jedilniki + varčni nakupovalni seznami",
      "Ideje za popolno kombiniranje prigrizkov z glavnimi obroki",
      "Preprosta navodila za pripravo po korakih",
      "Seznam zdravih zamenjav za poljubno sestavino",
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
    headline: "Prejmite BREZPLAČNE bonuse v vrednosti nad 90 €",
    subheadline:
      "V vrednosti 92.95 € — DARILO ob vašem današnjem nakupu!",
    badgeLabel: "BREZPLAČNO",
    valueLabel: "Vrednost:",
    items: [
      {
        value: "27.99 €",
        title: "Recepti za mafine in pice brez sladkorja in glutena",
        desc: "Zdrave različice najljubših jedi, pripravljene v nekaj minutah.",
      },
      {
        value: "19.99 €",
        title: "Praktični vodnik za organizacijo hrane",
        desc: "Naučite se pripraviti vse vnaprej in prihranite čas med tednom.",
      },
      {
        value: "14.99 €",
        title: "Posebni recepti za otroke z alergijami",
        desc: "Varni recepti brez mleka, jajc, soje ali arašidov.",
      },
      {
        value: "14.99 €",
        title: "Recepti za okusne in zdrave sladice",
        desc: "Zamenjajte kupljene sladkarije z naravnimi dobrotami.",
      },
      {
        value: "14.99 €",
        title: "Zdravi in preprosti sveži sokovi",
        desc: "Naravni napitki, ki bodo vašim najdražjim polepšali dan.",
      },
    ],
    totalLabel: "🎁 Skupna vrednost bonusov: 92.95 €",
    totalCta: "DANES JIH PREJMETE POPOLNOMA BREZPLAČNO!",
  },

  exclusiveBonuses: {
    kicker: "POLEG TEGA.. ⭐ EKSKLUZIVNI BONUSI!",
    headline: "Samo danes! Zagotovite si še dodatne bonuse",
    subheadline: "za popolno zdravje vaših otrok",
    badgeLabel: "BREZPLAČNO",
    valueLabel: "Vrednost:",
    items: [
      {
        value: "18.99 €",
        title: "Domači sadni gumijasti bonboni z vitaminom C",
        desc: "Naravni bonboni za močan imunski sistem, brez dodanega sladkorja.",
      },
      {
        value: "19.99 €",
        title: "Kako otroke navaditi na zelenjavo",
        desc: "Spremenite zelenjavo v okusno in zabavno pustolovščino.",
      },
      {
        value: "17.99 €",
        title: "Priročnik za prigrizke za neješčne otroke",
        desc: "Hranljive rešitve za otroke s slabšim apetitom.",
      },
      {
        value: "17.99 €",
        title: "Priročnik o superživilih za otroke",
        desc: "Kako v preproste recepte vključiti nujna hranila.",
      },
    ],
    totalLabel: "🎁 Skupna vrednost VSEH bonusov: 167.91 €",
    totalCta: "DANES JIH PREJMETE POPOLNOMA BREZPLAČNO!",
  },

  finalCta: {
    flagline: "⏰ PONUDBA VELJA SAMO DANES!",
    headline: "Popoln paket v vrednosti 201 €",
    subheadline: "Danes z neverjetnim 95 % popustom",
    regularPriceLabel: "Redna cena:",
    regularPrice: "201.00 €",
    offerPrice: "9.90 €",
    bundleList: [
      "✅ 500 receptov za zdrave prigrizke (vrednost 34 €)",
      "✅ 9 ekskluzivnih bonusov (vrednost 167.91 €) — GRATIS!",
      "✅ Recepti pripravljeni v manj kot 15 minutah",
      "✅ Takojšen in doživljenjski dostop",
      "✅ 14-dnevna garancija vračila denarja",
    ],
    button: "Kupite zdaj in prihranite 95 %!",
    trustRow: "🔒 100 % varno plačilo • ⚡ Takojšen dostop • ✅ 14-dnevna garancija",
    bonusesBadge: "✓ 9 BREZPLAČNIH BONUSOV",
    discountStickerLabel: "Samo danes",
    discountStickerValue: "-95%",
    imageAlt: "Popoln paket: E-knjiga Zdravi prigrizki + 9 bonusov",
    image: "/mockup-cta.webp",
  },

  guarantee: {
    alt: "Garancija",
    headline: "Vaš nakup je 100 % zaščiten za 14 dni",
    tag: "NIČELNO TVEGANJE ZA VAS",
    body: "Prepričani smo, da vam bo ta priročnik všeč. Če iz katerega koli razloga ne boste zadovoljni, vam vrnemo celotno kupnino. Brez vprašanj.",
    footer: "✅ Zagotovljeno vračilo • ✅ Brez vprašanj • ✅ Takojšen postopek",
  },

  faq: {
    kicker: "POGOSTA VPRAŠANJA",
    headline: "Vprašanja in odgovori",
    items: [
      {
        q: "Za katero starostno skupino je priročnik namenjen?",
        a: "Priročnik je namenjen otrokom od 2 do 12 let, recepte pa lahko prilagodite poljubni starosti.",
      },
      {
        q: "Ali je primeren za otroke z alergijami?",
        a: "Da! Na voljo so recepti brez mleka, jajc, soje in arašidov, da lahko vsi uživajo v hrani.",
      },
      {
        q: "Ali moram znati dobro kuhati?",
        a: "Ne, recepti so zelo preprosti, z malo sestavinami in jasnimi koraki. Odlično vam bo uspelo!",
      },
      {
        q: "Ali so sestavine drage?",
        a: "Ne, vse sestavine so ugodne in jih najdete v vsakem običajnem supermarketu.",
      },
      {
        q: "Koliko časa traja priprava prigrizkov?",
        a: "Večina prigrizkov je pripravljena v manj kot 15 minutah.",
      },
      {
        q: "Ali lahko plačam v svoji lokalni valuti?",
        a: "Da! Sistem samodejno pretvori znesek. Plačali boste točno to ceno, ki jo vidite, brez skritih stroškov.",
      },
    ],
  },

  closing: {
    kicker: "ZADNJA PRILOŽNOST! ⚡ Ponudba kmalu poteče",
    headline: "Spremenite prehrano svoje družine še danes!",
    subheadline: "Popoln priročnik + 9 bonusov DARILO! Vse za ceno ene same večerje.",
    regularPrice: "201.00 €",
    offerPrice: "9.90 €",
    ctaLabel: "DA, SVOJ PRIROČNIK ŽELIM ZDAJ!",
    trustRow: "🔒 100 % varno plačilo • ⚡ Takojšen dostop • ✅ 14-dnevna garancija brez tveganja",
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