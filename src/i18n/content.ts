export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

type SiteContent = {
  nav: { href: string; label: string }[];
  ctaDonate: string;
  footerText: string;
  hero: {
    badge: string;
    title: string;
    description: string;
    join: string;
  };
  home: {
    impactEyebrow: string;
    impactTitle: string;
    impactDescription: string;
    missionEyebrow: string;
    missionTitle: string;
    missionDescription: string;
    supportProject: string;
    learnMore: string;
    testimonialsEyebrow: string;
    testimonialsTitle: string;
    testimonialsDescription: string;
    psychologyEyebrow: string;
    psychologyTitle: string;
    psychologyDescription: string;
    psychologyPoints: string[];
    supportEyebrow: string;
  };
  about: {
    title: string;
    description: string;
    eyebrow: string;
    missionTitle: string;
    missionDescription: string;
    values: { title: string; description: string }[];
    howTitle: string;
    howDescription: string;
    teamTitle: string;
    teamDescription: string;
  };
  activitiesPage: { eyebrow: string; title: string; description: string };
  support: {
    eyebrow: string;
    title: string;
    description: string;
    tiers: string;
    donationTitle: string;
    donationDescription: string;
    donationCta: string;
  };
  enrollment: {
    eyebrow: string;
    title: string;
    description: string;
    eligibility: string;
    rules: string[];
  };
  news: { eyebrow: string; title: string; description: string };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    socialLinks: string;
  };
  contactForm: {
    fullName: string;
    email: string;
    message: string;
    send: string;
  };
  enrollmentForm: {
    guardian: string;
    childName: string;
    childAge: string;
    familySituation: string;
    submit: string;
  };
  newsletter: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    button: string;
    privacy: string;
  };
  impactNumbers: { value: string; label: string }[];
  testimonials: { quote: string; name: string }[];
  sponsorshipTiers: { name: string; amount: string; perks: string }[];
  team: { role: string; name: string }[];
  activities: { title: string; description: string }[];
  posts: { title: string; excerpt: string; date: string }[];
};

const content: Record<Locale, SiteContent> = {
  it: {
    nav: [
      { href: "/", label: "Home" },
      { href: "/about", label: "Progetto" },
      { href: "/activities", label: "Attivita" },
      { href: "/#support", label: "Sostienici" },
      { href: "/enrollment", label: "Iscrizione" },
      { href: "/news", label: "News" },
      { href: "/contact", label: "Contatti" }
    ],
    ctaDonate: "Dona",
    footerText: "Sport per ogni bambino.",
    hero: {
      badge: "Futsal giovanile gratuito in Sardegna",
      title: "Ogni bambino merita un luogo sicuro dove giocare, crescere e sentirsi parte.",
      description:
        "Sardinia United offre attivita calcistiche gratuite per bambini dai 4 ai 12 anni provenienti da famiglie in difficolta economica, unendo sport, educazione e supporto emotivo.",
      join: "Partecipa al programma"
    },
    home: {
      impactEyebrow: "Impatto",
      impactTitle: "Cosa rende possibile il tuo supporto",
      impactDescription:
        "Rimuoviamo le barriere economiche per offrire ai bambini esperienze sportive sicure e significative.",
      missionEyebrow: "Missione",
      missionTitle: "Educazione attraverso lo sport",
      missionDescription:
        "Il programma unisce futsal, mentoring e supporto psico-educativo per favorire fiducia, appartenenza e crescita sana.",
      supportProject: "Sostieni il progetto",
      learnMore: "Scopri di piu",
      testimonialsEyebrow: "Testimonianze",
      testimonialsTitle: "Le voci della nostra comunita",
      testimonialsDescription:
        "Genitori, educatori e volontari raccontano il valore dello sport inclusivo.",
      psychologyEyebrow: "Benessere psicologico",
      psychologyTitle: "La psicologa dello sport: un valore centrale del progetto",
      psychologyDescription:
        "La presenza della psicologa non e accessoria: migliora la continuita del percorso, supporta le famiglie e aiuta i bambini a trasformare lo sport in crescita emotiva.",
      psychologyPoints: [
        "Supporta autostima, gestione delle emozioni e senso di appartenenza.",
        "Affianca allenatori e genitori con strumenti educativi pratici.",
        "Riduce il rischio di abbandono, isolamento e disagio relazionale."
      ],
      supportEyebrow: "Sostieni il progetto"
    },
    about: {
      title: "Progetto",
      description: "Scopri missione, valori e team multidisciplinare di Sardinia United.",
      eyebrow: "Chi siamo",
      missionTitle: "Missione e valori",
      missionDescription:
        "Sardinia United promuove inclusione sociale, pari opportunita e benessere emotivo attraverso attivita gratuite di futsal per bambini.",
      values: [
        {
          title: "Inclusione Sociale",
          description: "Uno spazio sicuro dove ogni bambino si sente accolto e rispettato."
        },
        {
          title: "Pari Accesso",
          description: "Nessuna quota di partecipazione per le famiglie idonee."
        },
        {
          title: "Crescita e Benessere",
          description: "Lo sport come strumento di fiducia, salute e competenze di vita."
        }
      ],
      howTitle: "Come funziona il programma",
      howDescription:
        "I bambini entrano in gruppi per eta, partecipano a sessioni guidate e possono accedere a supporto educativo e psicologico.",
      teamTitle: "Il nostro team",
      teamDescription:
        "Professionisti e volontari che rendono il progetto sostenibile e centrato sulla persona."
    },
    activitiesPage: {
      eyebrow: "Attivita",
      title: "Un percorso completo di supporto",
      description:
        "Il nostro lavoro va oltre lo sport: ogni attivita e pensata per far crescere i bambini a livello fisico, sociale ed emotivo."
    },
    support: {
      eyebrow: "Sostienici",
      title: "Investi nel futuro dei bambini",
      description:
        "Il tuo contributo ci aiuta a mantenere gratuiti allenamenti, laboratori, materiali e servizi di supporto.",
      tiers: "Livelli di sponsorizzazione",
      donationTitle: "Area donazioni",
      donationDescription:
        "Donazioni singole o ricorrenti ci permettono di offrire attrezzatura, supporto trasporti e attivita multidisciplinari tutto l'anno.",
      donationCta: "Diventa partner oggi"
    },
    enrollment: {
      eyebrow: "Iscrizione",
      title: "Entra nel programma",
      description:
        "Le famiglie possono richiedere l'iscrizione gratuita. Priorita ai bambini 4-12 anni provenienti da nuclei in difficolta economica in Sardegna.",
      eligibility: "Requisiti di accesso",
      rules: [
        "Eta del bambino compresa tra 4 e 12 anni.",
        "Residenza in Sardegna.",
        "Vulnerabilita economica verificata con valutazione riservata."
      ]
    },
    news: {
      eyebrow: "News / Impatto",
      title: "Aggiornamenti e storie di successo",
      description: "Uno spazio in stile blog per condividere traguardi, storie e progressi del progetto."
    },
    contact: {
      eyebrow: "Contatti",
      title: "Costruiamo opportunita insieme",
      description:
        "Contattaci per informazioni, sostegno all'associazione o collaborazioni con il nostro team.",
      socialLinks: "Link social"
    },
    contactForm: {
      fullName: "Nome completo",
      email: "Email",
      message: "Messaggio",
      send: "Invia messaggio"
    },
    enrollmentForm: {
      guardian: "Nome genitore / tutore",
      childName: "Nome del bambino",
      childAge: "Eta del bambino",
      familySituation: "Situazione familiare (opzionale)",
      submit: "Invia richiesta"
    },
    newsletter: {
      eyebrow: "Newsletter",
      title: "Resta aggiornato sull'impatto",
      description:
        "Ricevi storie, traguardi e iniziative di Sardinia United direttamente via email.",
      emailLabel: "La tua email",
      button: "Iscriviti",
      privacy: "Niente spam. Solo aggiornamenti utili sul progetto."
    },
    impactNumbers: [
      { value: "80+", label: "Bambini supportati ogni anno" },
      { value: "100%", label: "Accesso gratuito per famiglie idonee" },
      { value: "4-12", label: "Fascia di eta del programma futsal" },
      { value: "12", label: "Mesi di attivita nella comunita" }
    ],
    testimonials: [
      {
        quote:
          "Mio figlio ha ritrovato fiducia, amicizie e un luogo sicuro dove crescere. Sardinia United ci ha cambiato la vita.",
        name: "Elena, mamma"
      },
      {
        quote:
          "Qui ogni bambino viene valorizzato con dignita e incoraggiamento, indipendentemente dal contesto di partenza.",
        name: "Marco, allenatore volontario"
      },
      {
        quote:
          "L'unione tra sport e supporto psicologico rende questo progetto davvero unico.",
        name: "Giulia, consulente scolastica"
      }
    ],
    sponsorshipTiers: [
      { name: "Bronze", amount: "EUR 500 / anno", perks: "Logo sul sito + menzione social" },
      { name: "Silver", amount: "EUR 1.500 / anno", perks: "Perk Bronze + banner eventi" },
      { name: "Gold", amount: "EUR 3.000 / anno", perks: "Perk Silver + branding kit allenamento" },
      { name: "Main Sponsor", amount: "EUR 7.500+ / anno", perks: "Massima visibilita + partner strategico" }
    ],
    team: [
      { role: "Allenatore responsabile", name: "Luca Piras" },
      { role: "Allenatrice giovanile", name: "Sara Melis" },
      { role: "Psicologa dello sport", name: "Dr.ssa Francesca Serra" },
      { role: "Fundraiser", name: "Antonio Manca" }
    ],
    activities: [
      {
        title: "Allenamenti settimanali",
        description:
          "Sessioni inclusive di futsal per sviluppare abilita motorie, collaborazione e autostima."
      },
      {
        title: "Tornei di comunita",
        description:
          "Eventi amichevoli in cui i bambini celebrano impegno, rispetto e fair play."
      },
      {
        title: "Laboratori educativi",
        description:
          "Incontri su nutrizione, scuola, consapevolezza emotiva e competenze per la vita."
      },
      {
        title: "Supporto psicologico",
        description:
          "Incontri accessibili per bambini e famiglie a sostegno di resilienza e benessere."
      }
    ],
    posts: [
      {
        title: "Torneo di primavera: 60 sorrisi in campo",
        excerpt: "Una giornata di gioia, squadra e inclusione con famiglie da tutta l'isola.",
        date: "Marzo 2026"
      },
      {
        title: "Nuovi laboratori su intelligenza emotiva",
        excerpt:
          "I bambini hanno esplorato le emozioni con giochi e storytelling insieme alla psicologa.",
        date: "Febbraio 2026"
      },
      {
        title: "Ritorno a scuola con il supporto dello sport",
        excerpt:
          "Come allenamento e routine aiutano fiducia, motivazione e partecipazione in classe.",
        date: "Gennaio 2026"
      }
    ]
  },
  en: {
    nav: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/activities", label: "Activities" },
      { href: "/#support", label: "Support Us" },
      { href: "/enrollment", label: "Enrollment" },
      { href: "/news", label: "News" },
      { href: "/contact", label: "Contact" }
    ],
    ctaDonate: "Donate",
    footerText: "Sport for every child.",
    hero: {
      badge: "Free youth futsal in Sardinia",
      title: "Every child deserves a safe place to play, grow, and belong.",
      description:
        "Sardinia United offers free football activities for children aged 4-12 from economically disadvantaged families, combining sport, education, and emotional support.",
      join: "Join the program"
    },
    home: {
      impactEyebrow: "Impact",
      impactTitle: "What your support makes possible",
      impactDescription:
        "We remove financial barriers so children can access safe, meaningful sport experiences.",
      missionEyebrow: "Mission",
      missionTitle: "Education through sport",
      missionDescription:
        "Our program combines futsal, mentorship, and psycho-educational support to foster confidence, belonging, and healthy development.",
      supportProject: "Support the project",
      learnMore: "Learn more",
      testimonialsEyebrow: "Testimonials",
      testimonialsTitle: "Voices from our community",
      testimonialsDescription:
        "Parents, educators, and volunteers share the value of inclusive sport.",
      psychologyEyebrow: "Psychological well-being",
      psychologyTitle: "The sport psychologist is a core value driver",
      psychologyDescription:
        "This role is not optional: it strengthens continuity, supports families, and helps children turn sport into emotional growth.",
      psychologyPoints: [
        "Supports self-esteem, emotional regulation, and belonging.",
        "Guides coaches and parents with practical educational tools.",
        "Helps reduce dropout risk, isolation, and relational discomfort."
      ],
      supportEyebrow: "Support the project"
    },
    about: {
      title: "About the Project",
      description: "Discover Sardinia United's mission, values, and multidisciplinary team.",
      eyebrow: "About / Project",
      missionTitle: "Mission and values",
      missionDescription:
        "Sardinia United promotes social inclusion, equal opportunities, and emotional well-being through free futsal activities for children.",
      values: [
        {
          title: "Social Inclusion",
          description: "A safe space where every child feels seen, welcomed, and respected."
        },
        { title: "Equal Access", description: "No participation fees for eligible families." },
        {
          title: "Growth and Well-being",
          description: "Sport as a tool for confidence, healthy habits, and life skills."
        }
      ],
      howTitle: "How the program works",
      howDescription:
        "Children join age-based futsal groups, participate in guided sessions, and can access educational and psychological support when needed.",
      teamTitle: "Our Team",
      teamDescription:
        "Professionals and volunteers who make this project sustainable and human-centered."
    },
    activitiesPage: {
      eyebrow: "Activities",
      title: "A complete support path for children",
      description:
        "Our work goes beyond sport: each activity is designed to help children thrive physically, socially, and emotionally."
    },
    support: {
      eyebrow: "Support Us",
      title: "Invest in children's futures",
      description:
        "Your contribution helps us keep training, workshops, equipment, and support services free for families.",
      tiers: "Sponsorship tiers",
      donationTitle: "Donation section",
      donationDescription:
        "One-time and recurring donations help us provide equipment, transport support, and multidisciplinary activities all year round.",
      donationCta: "Become a partner today"
    },
    enrollment: {
      eyebrow: "Enrollment",
      title: "Join the program",
      description:
        "Families can apply for free enrollment. Priority is given to children aged 4-12 from economically disadvantaged households in Sardinia.",
      eligibility: "Eligibility",
      rules: [
        "Child age between 4 and 12 years.",
        "Residence in Sardinia.",
        "Economic vulnerability criteria verified through confidential review."
      ]
    },
    news: {
      eyebrow: "News / Impact",
      title: "Updates and success stories",
      description: "A blog-style area to share milestones, stories from families, and project progress."
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build opportunities together",
      description:
        "Reach out to ask questions, support the association, or collaborate with our team.",
      socialLinks: "Social links"
    },
    contactForm: {
      fullName: "Full name",
      email: "Email",
      message: "Message",
      send: "Send message"
    },
    enrollmentForm: {
      guardian: "Parent / Guardian Name",
      childName: "Child Name",
      childAge: "Child Age",
      familySituation: "Family situation (optional)",
      submit: "Submit request"
    },
    newsletter: {
      eyebrow: "Newsletter",
      title: "Stay updated on our impact",
      description:
        "Receive stories, milestones, and Sardinia United initiatives directly in your inbox.",
      emailLabel: "Your email",
      button: "Subscribe",
      privacy: "No spam. Only meaningful project updates."
    },
    impactNumbers: [
      { value: "80+", label: "Children supported each year" },
      { value: "100%", label: "Free access for eligible families" },
      { value: "4-12", label: "Age range in our futsal program" },
      { value: "12", label: "Months of community activities" }
    ],
    testimonials: [
      {
        quote:
          "My son found confidence, new friends, and a safe place to grow. Sardinia United changed our life.",
        name: "Elena, parent"
      },
      {
        quote:
          "Here every child is treated with dignity and encouragement, regardless of their background.",
        name: "Marco, volunteer coach"
      },
      {
        quote:
          "The combination of sport and psychological support makes this project truly special.",
        name: "Giulia, school counselor"
      }
    ],
    sponsorshipTiers: [
      { name: "Bronze", amount: "EUR 500 / year", perks: "Logo on website + social mention" },
      { name: "Silver", amount: "EUR 1,500 / year", perks: "Bronze perks + event banner" },
      { name: "Gold", amount: "EUR 3,000 / year", perks: "Silver perks + training kit branding" },
      {
        name: "Main Sponsor",
        amount: "EUR 7,500+ / year",
        perks: "Full visibility + strategic partner status"
      }
    ],
    team: [
      { role: "Head Coach", name: "Luca Piras" },
      { role: "Youth Coach", name: "Sara Melis" },
      { role: "Sport Psychologist", name: "Dr. Francesca Serra" },
      { role: "Fundraiser", name: "Antonio Manca" }
    ],
    activities: [
      {
        title: "Weekly Training",
        description:
          "Inclusive futsal sessions designed for motor development, teamwork, and self-confidence."
      },
      {
        title: "Community Tournaments",
        description:
          "Friendly events where children celebrate effort, respect, and fair play over competition."
      },
      {
        title: "Educational Workshops",
        description:
          "Interactive workshops on nutrition, school engagement, emotional awareness, and life skills."
      },
      {
        title: "Psychological Support",
        description:
          "Accessible sessions for children and families to support resilience and overall well-being."
      }
    ],
    posts: [
      {
        title: "Spring Tournament: 60 Smiles on the Pitch",
        excerpt: "A day focused on joy, teamwork, and inclusion with families from across the island.",
        date: "March 2026"
      },
      {
        title: "New Workshop Series on Emotional Intelligence",
        excerpt:
          "Children explored emotional awareness through games and storytelling with our psychologist.",
        date: "February 2026"
      },
      {
        title: "Back-to-School Support Through Sport",
        excerpt:
          "How structured training helps improve confidence, routine, and motivation in the classroom.",
        date: "January 2026"
      }
    ]
  }
};

export function getContent(locale: Locale) {
  return content[locale];
}
