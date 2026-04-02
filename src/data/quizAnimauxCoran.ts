export interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Chapter {
  animal: string;
  emoji: string;
  theme: string;
  questions: Question[];
}

export const chapters: Chapter[] = [
  {
    animal: "Nour l'abeille",
    emoji: "🐝",
    theme: "Le travail en équipe",
    questions: [
      {
        question: "Que font les abeilles ensemble ?",
        options: [
          "Elles dorment toute la journée",
          "Elles travaillent en équipe",
          "Elles se battent entre elles",
        ],
        correctIndex: 1,
        explanation:
          "Les abeilles ne peuvent pas survivre seules. Une seule abeille ne peut pas faire de miel : c'est toute la ruche qui travaille ensemble !",
      },
      {
        question: "Qui a guidé les abeilles ?",
        options: ["Le vent", "Les humains", "Allah"],
        correctIndex: 2,
        explanation:
          "Dans le Coran, Allah dit qu'Il a inspiré les abeilles. Même un petit insecte suit un plan parfait sans école ni professeur.",
      },
      {
        question: "Que nous apprend l'abeille ?",
        options: [
          "Être le plus fort",
          "Travailler ensemble avec amour",
          "Aller vite tout seul",
        ],
        correctIndex: 1,
        explanation:
          "Une ruche peut contenir jusqu'à 50 000 abeilles, et chacune a un rôle précis. C'est une vraie équipe organisée.",
      },
    ],
  },
  {
    animal: "Salam la fourmi",
    emoji: "🐜",
    theme: "La patience",
    questions: [
      {
        question: "Que font les fourmis toute la journée ?",
        options: [
          "Elles jouent",
          "Elles travaillent petit à petit",
          "Elles dorment",
        ],
        correctIndex: 1,
        explanation:
          "Une fourmi peut porter jusqu'à 10 à 50 fois son poids. Imagine porter une voiture 😄",
      },
      {
        question:
          "Que fait le prophète Souleymane en voyant les fourmis ?",
        options: [
          "Il les écrase",
          "Il ignore",
          "Il arrête son armée",
        ],
        correctIndex: 2,
        explanation:
          "Le prophète Souleymane a stoppé toute son armée pour ne pas écraser une seule fourmi → preuve d'une immense sagesse.",
      },
      {
        question: "Que nous apprend la fourmi ?",
        options: ["Aller vite", "Être patient", "Abandonner"],
        correctIndex: 1,
        explanation:
          "Les fourmis construisent leur nid grain par grain. Les grandes choses prennent du temps.",
      },
    ],
  },
  {
    animal: "Sadiq le loup",
    emoji: "🐺",
    theme: "La vérité",
    questions: [
      {
        question: "Pourquoi le loup est-il accusé ?",
        options: [
          "Il a attaqué",
          "Les frères de Youssouf ont menti",
          "Il était méchant",
        ],
        correctIndex: 1,
        explanation:
          "Ils ont utilisé du faux sang pour faire croire à leur mensonge → preuve que mentir entraîne souvent d'autres mensonges.",
      },
      {
        question: "Que fait Youssouf à la fin ?",
        options: ["Il se venge", "Il pardonne", "Il fuit"],
        correctIndex: 1,
        explanation:
          "Malgré tout ce qu'il a vécu, Youssouf choisit de pardonner → c'est une des plus grandes leçons du Coran.",
      },
      {
        question: "Que nous apprend cette histoire ?",
        options: [
          "Mentir est utile",
          "Dire la vérité est important",
          "Il faut se cacher",
        ],
        correctIndex: 1,
        explanation:
          "Un mensonge peut blesser même des personnes innocentes, comme le loup dans l'histoire.",
      },
    ],
  },
  {
    animal: "Sabr le chameau",
    emoji: "🐪",
    theme: "Observer la création",
    questions: [
      {
        question: "Pourquoi le chameau peut-il vivre dans le désert ?",
        options: [
          "Il est magique",
          "Il est créé pour ça",
          "Il ne ressent rien",
        ],
        correctIndex: 1,
        explanation:
          "Le chameau peut boire jusqu'à 100 litres d'eau en une seule fois 😲",
      },
      {
        question: "Combien de paupières a le chameau ?",
        options: ["1", "2", "3"],
        correctIndex: 2,
        explanation:
          "Sa 3ème paupière est transparente : elle protège ses yeux du sable sans l'empêcher de voir.",
      },
      {
        question: "Que nous apprend le chameau ?",
        options: [
          "Regarder et réfléchir",
          "Ignorer le monde",
          "Se plaindre",
        ],
        correctIndex: 0,
        explanation:
          "Le Coran invite à observer le chameau → c'est un signe de la perfection de la création.",
      },
    ],
  },
  {
    animal: "Le Hudhud",
    emoji: "🐦",
    theme: "Dire la vérité",
    questions: [
      {
        question: "Quel est le rôle du Hudhud ?",
        options: ["Jouer", "Être messager", "Dormir"],
        correctIndex: 1,
        explanation:
          "Un simple oiseau a transmis un message qui a changé le destin d'un royaume entier.",
      },
      {
        question: "Que fait le roi Souleymane ?",
        options: [
          "Il attaque",
          "Il envoie un message",
          "Il ignore",
        ],
        correctIndex: 1,
        explanation:
          "Le message était respectueux, pas une menace → preuve que la douceur peut être plus forte que la force.",
      },
      {
        question: "Que nous apprend cette histoire ?",
        options: [
          "Les mots sont puissants",
          "Il faut se battre",
          "Il faut fuir",
        ],
        correctIndex: 0,
        explanation:
          "Parfois, quelques mots peuvent changer une vie… ou même un peuple entier.",
      },
    ],
  },
  {
    animal: "Noon la baleine",
    emoji: "🐋",
    theme: "Demander pardon",
    questions: [
      {
        question: "Que fait le prophète Younous ?",
        options: ["Il reste", "Il part trop vite", "Il dort"],
        correctIndex: 1,
        explanation:
          "Même les prophètes peuvent faire des erreurs → mais ils reviennent toujours vers Allah.",
      },
      {
        question: "Où se retrouve-t-il ?",
        options: [
          "Dans une maison",
          "Dans une grotte",
          "Dans le ventre du poisson",
        ],
        correctIndex: 2,
        explanation:
          "Trois ténèbres : la nuit, la mer, le ventre du poisson → situation la plus sombre possible.",
      },
      {
        question: "Que nous apprend cette histoire ?",
        options: [
          "Ne jamais demander pardon",
          "Il est trop tard",
          "On peut toujours revenir vers Allah",
        ],
        correctIndex: 2,
        explanation:
          "Sa prière est aujourd'hui encore connue et récitée → elle est très puissante.",
      },
    ],
  },
  {
    animal: "Zaraa la vache",
    emoji: "🐄",
    theme: "Faire confiance",
    questions: [
      {
        question:
          "Que fait le peuple quand on leur demande de sacrifier une vache ?",
        options: [
          "Ils obéissent",
          "Ils posent beaucoup de questions",
          "Ils fuient",
        ],
        correctIndex: 1,
        explanation:
          "Plus ils posaient de questions, plus la tâche devenait compliquée.",
      },
      {
        question: "Pourquoi c'est un problème ?",
        options: [
          "Ça complique tout",
          "Ça fait rire",
          "Ça aide",
        ],
        correctIndex: 0,
        explanation:
          "Ce qui était simple au départ est devenu difficile à cause du manque de confiance.",
      },
      {
        question: "Que nous apprend cette histoire ?",
        options: [
          "Tout comprendre avant d'agir",
          "Faire confiance",
          "Refuser",
        ],
        correctIndex: 1,
        explanation:
          "Parfois, comprendre vient après avoir agi, pas avant.",
      },
    ],
  },
  {
    animal: "Abboud l'éléphant",
    emoji: "🐘",
    theme: "Le vrai courage",
    questions: [
      {
        question: "Que veut faire l'armée ?",
        options: ["Construire", "Détruire la Kaaba", "Aider"],
        correctIndex: 1,
        explanation:
          "C'est l'histoire de la sourate Al-Fil (l'Éléphant), très connue.",
      },
      {
        question: "Que font les éléphants ?",
        options: [
          "Ils attaquent",
          "Ils fuient",
          "Ils refusent d'avancer",
        ],
        correctIndex: 2,
        explanation:
          "Les éléphants se sont arrêtés → même un animal peut refuser l'injustice.",
      },
      {
        question: "Que nous apprend cette histoire ?",
        options: [
          "Être fort physiquement",
          "Dire non à l'injustice",
          "Suivre tout le monde",
        ],
        correctIndex: 1,
        explanation:
          "Le vrai courage, ce n'est pas d'être fort… c'est de faire le bien.",
      },
    ],
  },
  {
    animal: "Le serpent de Moussa",
    emoji: "🐍",
    theme: "Affronter la peur",
    questions: [
      {
        question: "Que devient le bâton de Moussa ?",
        options: ["Un arbre", "Un serpent", "Une pierre"],
        correctIndex: 1,
        explanation:
          "Le bâton de Moussa devient un serpent pour montrer un signe puissant.",
      },
      {
        question: "Que ressent Moussa ?",
        options: ["De la joie", "De la peur", "Rien"],
        correctIndex: 1,
        explanation:
          "Avoir peur est normal, même pour les plus grands.",
      },
      {
        question: "Que nous apprend cette histoire ?",
        options: [
          "La peur est mauvaise",
          "Il faut fuir",
          "On peut agir malgré la peur",
        ],
        correctIndex: 2,
        explanation:
          "Le courage = agir même quand on a peur.",
      },
    ],
  },
  {
    animal: "Qitmir le chien",
    emoji: "🐕",
    theme: "La fidélité",
    questions: [
      {
        question:
          "Que fait Qitmir pendant le sommeil des jeunes ?",
        options: ["Il part", "Il dort ailleurs", "Il veille"],
        correctIndex: 2,
        explanation:
          "Qitmir est resté fidèle pendant 309 ans → symbole de loyauté extrême.",
      },
      {
        question: "Combien de temps dorment-ils ?",
        options: ["Quelques jours", "309 ans", "1 an"],
        correctIndex: 1,
        explanation:
          "Cette histoire est celle des gens de la caverne (Ashab al-Kahf).",
      },
      {
        question: "Que nous apprend cette histoire ?",
        options: ["Être seul", "Être fidèle", "Oublier les autres"],
        correctIndex: 1,
        explanation:
          "La fidélité est une des plus belles qualités humaines… et animales.",
      },
    ],
  },
];

/** Flatten all questions for sequential quiz play */
export function getAllQuestions(): (Question & {
  chapterIndex: number;
  animal: string;
  emoji: string;
})[] {
  return chapters.flatMap((ch, ci) =>
    ch.questions.map((q) => ({
      ...q,
      chapterIndex: ci,
      animal: ch.animal,
      emoji: ch.emoji,
    }))
  );
}
