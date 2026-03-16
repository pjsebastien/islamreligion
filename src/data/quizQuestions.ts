export interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Level {
  id: number;
  title: string;
  description: string;
  emoji: string;
  questions: Question[];
}

export const levels: Level[] = [
  {
    id: 1,
    title: "Petit musulman",
    description: "Les bases de l'islam pour les plus jeunes",
    emoji: "⭐",
    questions: [
      {
        question: "Combien y a-t-il de piliers en islam ?",
        options: ["3", "5", "7", "10"],
        correctIndex: 1,
        explanation:
          "L'islam repose sur 5 piliers : la shahada (attestation de foi), la salat (prière), la zakat (aumône), le jeûne du Ramadan et le Hajj (pèlerinage à La Mecque).",
      },
      {
        question: "Comment s'appelle le livre sacré des musulmans ?",
        options: ["La Bible", "La Torah", "Le Coran", "Les Psaumes"],
        correctIndex: 2,
        explanation:
          "Le Coran (القرآن) est la parole d'Allah révélée au Prophète Muhammad ﷺ par l'ange Jibril (Gabriel). Il contient 114 sourates.",
      },
      {
        question: "Que dit-on avant de manger ?",
        options: [
          "Alhamdoulillah",
          "Bismillah",
          "SubhanAllah",
          "Allahu Akbar",
        ],
        correctIndex: 1,
        explanation:
          "On dit « Bismillah » (بسم الله) qui signifie « Au nom d'Allah ». C'est une sunna du Prophète ﷺ avant de commencer un repas.",
      },
      {
        question: "Combien de prières obligatoires fait-on chaque jour ?",
        options: ["3", "4", "5", "7"],
        correctIndex: 2,
        explanation:
          "Les 5 prières quotidiennes sont : Fajr (aube), Dhouhr (midi), Asr (après-midi), Maghrib (coucher du soleil) et Isha (nuit).",
      },
      {
        question: "Comment s'appelle le mois du jeûne ?",
        options: ["Mouharram", "Rajab", "Ramadan", "Dhoul Hijja"],
        correctIndex: 2,
        explanation:
          "Le Ramadan est le 9ᵉ mois du calendrier hégirien. Les musulmans jeûnent de l'aube au coucher du soleil. C'est aussi le mois où le Coran a été révélé.",
      },
      {
        question: "Qui est le dernier prophète en islam ?",
        options: ["Ibrahim", "Moussa", "Issa", "Muhammad ﷺ"],
        correctIndex: 3,
        explanation:
          "Muhammad ﷺ est le dernier prophète et messager envoyé par Allah à l'humanité. Il est né à La Mecque et a reçu la révélation du Coran à l'âge de 40 ans.",
      },
    ],
  },
  {
    id: 2,
    title: "Apprenti savant",
    description: "Approfondis tes connaissances sur l'islam",
    emoji: "🌙",
    questions: [
      {
        question: "Combien de sourates contient le Coran ?",
        options: ["99", "114", "120", "130"],
        correctIndex: 1,
        explanation:
          "Le Coran contient 114 sourates. La plus longue est Al-Baqara (286 versets) et la plus courte est Al-Kawthar (3 versets).",
      },
      {
        question: "Quelle est la première sourate du Coran ?",
        options: ["Al-Baqara", "Al-Ikhlas", "Al-Fatiha", "An-Nas"],
        correctIndex: 2,
        explanation:
          "Al-Fatiha (الفاتحة) signifie « L'Ouverture ». Elle compte 7 versets et est récitée dans chaque unité de prière (rak'a).",
      },
      {
        question: "Quel est le premier pilier de l'islam ?",
        options: [
          "La prière",
          "Le jeûne",
          "La shahada",
          "Le pèlerinage",
        ],
        correctIndex: 2,
        explanation:
          "La shahada (الشهادة) est l'attestation de foi : « J'atteste qu'il n'y a de divinité qu'Allah et que Muhammad est Son messager. » C'est le fondement de l'islam.",
      },
      {
        question:
          "Vers quelle ville se tournent les musulmans pour prier ?",
        options: ["Médine", "Jérusalem", "Le Caire", "La Mecque"],
        correctIndex: 3,
        explanation:
          "Les musulmans se tournent vers la Kaaba, située à La Mecque (مكة المكرمة), pour accomplir la prière. Cette direction s'appelle la qibla.",
      },
      {
        question: "Combien de rak'at comporte la prière du Dhouhr ?",
        options: ["2", "3", "4", "5"],
        correctIndex: 2,
        explanation:
          "La prière du Dhouhr (الظهر) comporte 4 rak'at. Fajr en a 2, Asr en a 4, Maghrib en a 3 et Isha en a 4.",
      },
      {
        question: "Que dit-on quand quelque chose de bien arrive ?",
        options: [
          "Astaghfirullah",
          "Alhamdoulillah",
          "Inna lillahi",
          "La hawla",
        ],
        correctIndex: 1,
        explanation:
          "« Alhamdoulillah » (الحمد لله) signifie « Louange à Allah ». On le dit pour remercier Allah d'un bienfait, après avoir mangé, ou après avoir éternué.",
      },
      {
        question:
          "Comment s'appelle le pèlerinage à La Mecque ?",
        options: ["La Omra", "Le Hajj", "Le Jihad", "Le Zikr"],
        correctIndex: 1,
        explanation:
          "Le Hajj (الحج) est le 5ᵉ pilier de l'islam. Tout musulman qui en a les moyens doit l'accomplir au moins une fois dans sa vie. La Omra est le petit pèlerinage.",
      },
      {
        question: "Combien y a-t-il de piliers de la foi (iman) ?",
        options: ["4", "5", "6", "7"],
        correctIndex: 2,
        explanation:
          "Les 6 piliers de la foi sont : croire en Allah, en Ses anges, en Ses livres, en Ses prophètes, au Jour dernier et au destin (bon ou mauvais).",
      },
    ],
  },
  {
    id: 3,
    title: "Graine de savant",
    description: "Le niveau des vrais connaisseurs",
    emoji: "🏆",
    questions: [
      {
        question:
          "Dans quelle ville est né le Prophète Muhammad ﷺ ?",
        options: ["Médine", "La Mecque", "Taëf", "Jérusalem"],
        correctIndex: 1,
        explanation:
          "Le Prophète ﷺ est né à La Mecque (مكة) en 570 après J.-C., dans la tribu des Quraysh. Il a ensuite émigré à Médine en 622, événement qui marque le début du calendrier hégirien.",
      },
      {
        question:
          "Comment s'appelle l'ange qui a transmis le Coran au Prophète ﷺ ?",
        options: ["Mikaïl", "Israfil", "Jibril", "Azraïl"],
        correctIndex: 2,
        explanation:
          "Jibril (جبريل), ou Gabriel, est l'ange chargé de transmettre la révélation divine aux prophètes. La première révélation a eu lieu dans la grotte de Hira.",
      },
      {
        question: "Quelle est la plus longue sourate du Coran ?",
        options: ["Al-Imran", "An-Nisa", "Al-Baqara", "Al-Maïda"],
        correctIndex: 2,
        explanation:
          "Al-Baqara (البقرة) est la 2ᵉ sourate du Coran et la plus longue avec 286 versets. Son nom signifie « La Vache » en référence à un récit concernant le peuple de Moussa.",
      },
      {
        question: "Qu'est-ce que la zakat ?",
        options: [
          "Une prière surérogatoire",
          "L'aumône obligatoire",
          "Le jeûne volontaire",
          "Un type de pèlerinage",
        ],
        correctIndex: 1,
        explanation:
          "La zakat (الزكاة) est le 3ᵉ pilier de l'islam. C'est une aumône obligatoire de 2,5 % sur l'épargne annuelle, redistribuée aux plus nécessiteux.",
      },
      {
        question:
          "Comment appelle-t-on la chaîne de transmission d'un hadith ?",
        options: ["Le matn", "L'isnad", "Le fiqh", "Le tafsir"],
        correctIndex: 1,
        explanation:
          "L'isnad (الإسناد) est la chaîne de rapporteurs qui relie un hadith au Prophète ﷺ. Le matn est le texte du hadith lui-même. Les savants vérifient chaque maillon de l'isnad.",
      },
      {
        question:
          "Quel événement marque le début du calendrier hégirien ?",
        options: [
          "La naissance du Prophète ﷺ",
          "La première révélation",
          "L'émigration à Médine (Hijra)",
          "La conquête de La Mecque",
        ],
        correctIndex: 2,
        explanation:
          "La Hijra (الهجرة) est l'émigration du Prophète ﷺ de La Mecque vers Médine en 622. Le calife Omar ibn al-Khattab a fixé cet événement comme point de départ du calendrier islamique.",
      },
      {
        question:
          "Quelle est la nuit la plus importante du Ramadan ?",
        options: [
          "La 1ʳᵉ nuit",
          "La 15ᵉ nuit",
          "Laylat al-Qadr",
          "La dernière nuit",
        ],
        correctIndex: 2,
        explanation:
          "Laylat al-Qadr (ليلة القدر), la Nuit du Destin, est meilleure que mille mois (sourate Al-Qadr). Elle se situe dans les dix dernières nuits impaires du Ramadan.",
      },
      {
        question:
          "Combien de prophètes sont mentionnés par leur nom dans le Coran ?",
        options: ["12", "20", "25", "30"],
        correctIndex: 2,
        explanation:
          "25 prophètes sont nommés dans le Coran, parmi lesquels Adam, Nouh (Noé), Ibrahim (Abraham), Moussa (Moïse), Issa (Jésus) et Muhammad ﷺ.",
      },
    ],
  },
];
