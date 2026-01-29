export function getInterviews() {
  return interviews
}

export async function getInterview(slug) {
  const index = interviews.findIndex(({ id }) => id === slug)

  if (index === -1) {
    return null
  }

  const interview = interviews[index]

  return {
    ...interview,
    next: index < interviews.length - 1 ? interviews[index + 1] : null,
  }
}

const interviews = [
  {
    id: 'annie-king',
    name: 'Annie King',
    subtitle: 'Dacă universul are deja un plan, de ce nu ai și tu?',
    intro: `Annie King, autoarea cărții "The Inevitable You: How to Embrace Your Path and Succeed with Relentless Precision", împărtășește abordarea sa revoluționară a planificării vieții prin sistemul unic "Legacy Tracker" și arta spontaneității programate.`,
    video: {
      duration: 2570,
      thumbnail:
        'https://assets.tailwindcss.com/templates/compass/annie-king-video-thumbnail.png',
      sd: 'https://assets.tailwindcss.com/templates/compass/annie-king-720p.mp4',
      hd: 'https://assets.tailwindcss.com/templates/compass/annie-king-1080p.mp4',
    },
    chapters: [
      { start: 0, title: 'Intro – Cunoaște-o pe Annie King' },
      { start: 20, title: 'Crescând într-o Gospodărie Ultra-Organizată' },
      { start: 70, title: "Clubul Planificatorilor de Viitor: O Moștenire a Planificării" },
      { start: 465, title: "'Legacy Tracker': Un Ciclu de Actualizare de Șase Ore" },
      { start: 500, title: 'Timpul Trello și Filosofia Managementului Timpului' },
      {
        start: 520,
        title: 'Programarea Spontaneității: Arta Inspirației Planificate',
      },
      { start: 2220, title: 'Planificarea pentru Neașteptat' },
      { start: 2540, title: 'Gânduri Finale: Planificarea ca Stil de Viață' },
      { start: 2570, title: 'Încheiere' },
    ],
  },
  {
    id: 'nolan-grayson',
    name: 'Dr. Nolan Grayson',
    subtitle: 'Este Nirvana Cuantică cheia către adevărata libertate?',
    intro: `Dr. Nolan Grayson explorează determinismul cuantic, iluzia liberului arbitru și teoria sa despre Nirvana Cuantică—atingerea adevăratei libertăți în universurile paralele.`,
    video: {
      duration: 3480,
      thumbnail:
        'https://assets.tailwindcss.com/templates/compass/nolan-grayson-video-thumbnail.png',
      sd: 'https://assets.tailwindcss.com/templates/compass/nolan-grayson-720p.mp4',
      hd: 'https://assets.tailwindcss.com/templates/compass/nolan-grayson-1080p.mp4',
    },
    chapters: [
      { start: 0, title: 'Intro – Cunoaște-l pe Dr. Nolan Grayson' },
      { start: 192, title: 'Ce Este Determinismul Cuantic?' },
      {
        start: 500,
        title: '\'Capcana Suprapoziției\' și Impactul Acesteia asupra Liberului Arbitru',
      },
      {
        start: 825,
        title:
          'Realitățile Multiversului: Cum Fiecare Alegere se Răspândește prin Lumi Infinite',
      },
      { start: 1170, title: 'Încurcătura și Iluzia Alegerii' },
      {
        start: 1510,
        title: 'Blocarea Cuantică: Ești Blocat pe o Cale Predeterminată?',
      },
      {
        start: 1800,
        title: 'Cum Zgomotul Cuantic Ar Putea Fi Cheia către Adevărata Libertate',
      },
      {
        start: 2140,
        title:
          'Teoria Dr. Grayson despre Nirvana Cuantică: Atingerea Liberului Arbitru în Universuri',
      },
      {
        start: 2475,
        title:
          'Cum să Hackuiești Multiversul: Sfaturi Practice pentru Alinierea Cuantică',
      },
      {
        start: 2845,
        title:
          'Rundă Rapidă: Experimente de Gândire, Cărți și Rutine Preferate',
      },
      {
        start: 3130,
        title: 'Gânduri Finale – Viitorul Liberului Arbitru în Mecanica Cuantică',
      },
      { start: 3450, title: 'Încheiere' },
    ],
  },
  {
    id: 'eleanor-vann',
    name: 'Eleanor Vann',
    subtitle: 'Pasagerul și Calea.',
    intro: `Eleanor Vann, autoarea cărții "The Path and the Passenger: A Drifter's Guide to Getting Lost", împărtășește abordarea sa revoluționară a călătoriei prin filosofia sa unică a spontaneității planificate și arta de a îmbrățișa ocolișurile.`,
    video: {
      duration: 3610,
      thumbnail:
        'https://assets.tailwindcss.com/templates/compass/eleanor-vann-video-thumbnail.png',
      sd: 'https://assets.tailwindcss.com/templates/compass/eleanor-vann-720p.mp4',
      hd: 'https://assets.tailwindcss.com/templates/compass/eleanor-vann-1080p.mp4',
    },
    chapters: [
      { start: 0, title: 'Intro – Cunoaște-o pe Eleanor Vann' },
      { start: 200, title: 'Călătoria Accidentală: Din Spania în Belgia' },
      { start: 478, title: 'Prima Derivă: Scriind Povești pe Șervețele' },
      { start: 795, title: 'Filosofia Călătoriei Fără Plan' },
      {
        start: 1208,
        title: 'Aventuri Neașteptate: Nunți, Proteste și Concerte Folk',
      },
      { start: 1725, title: 'Arta Destinațiilor Aleatoare' },
      { start: 2118, title: 'Îmbrățișând Neașteptatul: Când Planurile Dau Greș' },
      {
        start: 3155,
        title: 'Libertatea de a Renunța: De Ce Controlul Limitează Experiența',
      },
      { start: 3530, title: 'Încheiere' },
    ],
  },
  {
    id: 'sophia-reid',
    name: 'Sophia Reid',
    subtitle: 'Suntem destinați prin design?',
    intro: `Sophia Reid, gazda popularului podcast "Soul Mates: Destined by Design", împărtășește abordarea sa revoluționară a găsirii iubirii prin teoria sa unică "Love Lattice" și arta urmăririi fărâmiturilor de pâine.`,
    video: {
      duration: 2940,
      thumbnail:
        'https://assets.tailwindcss.com/templates/compass/sophia-reid-video-thumbnail.png',
      sd: 'https://assets.tailwindcss.com/templates/compass/sophia-reid-720p.mp4',
      hd: 'https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4',
    },
    chapters: [
      { start: 0, title: 'Intro – Cunoaște-o pe Sophia Reid' },
      {
        start: 462,
        title: 'Miracolul de la Waffle House: Un Moment Viral al Destinului',
      },
      {
        start: 1194,
        title: 'Rețeaua Iubirii: Înțelegerea Urmăririi Fărâmiturilor',
      },
      {
        start: 1967,
        title: 'Bucla Serendipității: Când Fărâmiturile Sunt Ratate',
      },
      { start: 2909, title: 'Încheiere' },
    ],
  },
  {
    id: 'mick-larson',
    name: 'Mick Larson',
    subtitle: 'Cum să jailbreak-uiești realitatea și să-ți hackuiești soarta.',
    intro: `Mick Larson, cunoscut ca The Free Will Hacker, împărtășește abordarea sa radicală de a scăpa de setările implicite ale vieții prin tehnica sa unică "Reality Reboot" și arta de a perturba modelele deterministice.`,
    video: {
      duration: 3630,
      thumbnail:
        'https://assets.tailwindcss.com/templates/compass/mick-larson-video-thumbnail.png',
      sd: 'https://assets.tailwindcss.com/templates/compass/mick-larson-720p.mp4',
      hd: 'https://assets.tailwindcss.com/templates/compass/mick-larson-1080p.mp4',
    },
    chapters: [
      { start: 0, title: 'Intro – Cunoaște-l pe Mick, The Free Will Hacker' },
      {
        start: 83,
        title: 'Sistemul Determinismului: Setările din Fabrică ale Soartei',
      },
      { start: 582, title: 'Tehnica Jailbreak: Hackuirea Soartei Tale' },
      {
        start: 1215,
        title: 'Când Jailbreak-ul Eșuează: Depanarea Libertății',
      },
      { start: 1982, title: 'Ruperea Ciclului Incertitudinii' },
      { start: 2648, title: 'Gânduri Finale despre Hackuirea Realității' },
      { start: 3599, title: 'Încheiere' },
    ],
  },
  {
    id: 'tom-harris',
    name: 'Tom Harris',
    subtitle: 'Întorcând mesele pe Tom.',
    intro: `Tom Harris, gazda Compass Podcast, împărtășește călătoria sa de la punerea sub semnul întrebării a mișcărilor de karate până la îmbrățișarea determinismului, oferind o perspectivă unică asupra liberului arbitru, neuroștiinței și arta de a accepta calea predeterminată a vieții.`,
    video: {
      duration: 4210,
      thumbnail:
        'https://assets.tailwindcss.com/templates/compass/tom-harris-interview-video-thumbnail.png',
      sd: 'https://assets.tailwindcss.com/templates/compass/tom-harris-interview-720p.mp4',
      hd: 'https://assets.tailwindcss.com/templates/compass/tom-harris-interview-1080p.mp4',
    },
    chapters: [
      { start: 0, title: 'Intro – Cunoaște-l pe Tom Harris' },
      {
        start: 312,
        title: 'Primii Ani: Pietre, Teamă Existențială și Karate',
      },
      {
        start: 748,
        title: 'Viața de Colegiu: Ramen Noaptea Târziu și Lecturi Filosofice',
      },
      {
        start: 1247,
        title: 'Descoperirea Exercițiilor: Kettlebells și Crize Existențiale',
      },
      { start: 1679, title: 'Călătoria Meditației: De la Zafu la Practică Profundă' },
      {
        start: 2141,
        title: 'Perspective din Neuroștiință: Procesul de Luare a Deciziilor al Creierului',
      },
      { start: 2533, title: 'Momentul Latte: Punând Sub Semnul Întrebării Liberul Arbitru' },
      {
        start: 3018,
        title: 'Aplicații Practice: Auto-Compasiune și Înțelegere',
      },
      { start: 3424, title: 'Q&A cu Publicul: Întrebări Rapide' },
      { start: 3598, title: 'Încheiere' },
    ],
  },
]
