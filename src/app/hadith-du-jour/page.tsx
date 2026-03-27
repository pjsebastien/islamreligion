import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";
import ArticleCTA from "@/components/ArticleCTA";
import { publishSchedule, isPublished } from "@/data/publishSchedule";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Hadith du jour : paroles authentiques du Prophète Muhammad ﷺ",
  description:
    "Découvrez chaque jour un hadith authentique du Prophète Muhammad ﷺ avec texte arabe, traduction française, source et explication. Collections Bukhari, Muslim, Tirmidhi et plus.",
  openGraph: {
    title: "Hadith du jour : paroles authentiques du Prophète Muhammad ﷺ",
    description:
      "Un hadith authentique chaque jour : texte arabe, traduction, source et explication détaillée. Explorez les hadiths par thème.",
    url: "https://www.islamreligion.fr/hadith-du-jour",
    images: [
      {
        url: "/images/coran-ouvert-chapelet-bois-islam-versets.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-du-jour",
  },
};

const tocItems = [
  { id: "hadith-du-jour", label: "Hadith du jour" },
  { id: "definition", label: "Qu'est-ce qu'un hadith ?" },
  { id: "collections", label: "Les grandes collections" },
  { id: "authenticite", label: "Authenticité des hadiths" },
  { id: "catalogue", label: "Hadiths par thème" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Qu'est-ce qu'un hadith en islam ?",
    answer:
      "Un hadith (حديث) est une parole, un acte ou une approbation tacite du Prophète Muhammad ﷺ rapporté par ses Compagnons. Les hadiths constituent la Sunna, la deuxième source de législation islamique après le Coran. Chaque hadith se compose d'un isnad (chaîne de transmission) et d'un matn (texte du récit).",
  },
  {
    question: "Quelle est la différence entre hadith et Coran ?",
    answer:
      "Le Coran est la parole d'Allah révélée au Prophète ﷺ par l'ange Jibril (Gabriel), inimitable dans sa forme et son contenu. Le hadith est la parole du Prophète ﷺ lui-même, inspirée par Allah mais formulée par le Prophète. Le Coran est récité dans la prière, pas le hadith. Le hadith explique, commente et précise les enseignements du Coran.",
  },
  {
    question: "Qu'est-ce qu'un hadith Sahih (authentique) ?",
    answer:
      "Un hadith Sahih est un hadith dont la chaîne de transmission (isnad) est continue, dont chaque rapporteur est reconnu pour sa probité et sa précision, qui ne contredit pas d'autres sources fiables et qui n'a pas de défaut caché. C'est le plus haut niveau d'authenticité. Les deux recueils les plus authentiques sont le Sahih Al-Bukhari et le Sahih Muslim.",
  },
  {
    question: "Combien de hadiths existent en islam ?",
    answer:
      "L'imam Al-Bukhari a examiné environ 600 000 récits et en a retenu 7 275 dans son Sahih (dont environ 2 602 sans répétition). Le Sahih Muslim en contient environ 3 033 sans répétition. Au total, les six grandes collections canoniques (Kutub as-Sittah) rassemblent des dizaines de milliers de hadiths uniques couvrant tous les aspects de la vie.",
  },
  {
    question: "Les hadiths Qudsi sont-ils différents des hadiths classiques ?",
    answer:
      "Oui, un hadith Qudsi (sacré) est un hadith dont le sens est attribué à Allah, mais dont la formulation est celle du Prophète ﷺ. Le Prophète dit : 'Allah a dit...' puis rapporte la parole divine. Il diffère du Coran car il n'est pas récité dans la prière et sa formulation n'est pas d'origine divine comme le Coran.",
  },
  {
    question: "Pourquoi l'isnad (chaine de transmission) est-il important ?",
    answer:
      "L'isnad est le système de vérification unique à la civilisation islamique. Il permet de remonter jusqu'au Prophète ﷺ en vérifiant chaque maillon : le rapporteur était-il contemporain du précédent ? Était-il fiable ? Avait-il bonne mémoire ? Ce système a été développé par les savants du hadith pour distinguer le vrai du faux. L'imam Abdallah Ibn al-Mubarak a dit : 'L'isnad fait partie de la religion.'",
  },
  {
    question: "Comment savoir si un hadith est authentique ou faible ?",
    answer:
      "Les savants du hadith ont établi des critères rigoureux : continuité de la chaîne de transmission, probité et précision des rapporteurs, absence de contradiction avec des sources plus fiables, et absence de défauts cachés. Les hadiths sont classés en Sahih (authentique), Hasan (bon), et Da'if (faible). Pour vérifier, on consulte les ouvrages de référence comme les Sahih de Bukhari et Muslim, ou les travaux de scholars contemporains.",
  },
  {
    question: "Quelles sont les six grandes collections de hadiths ?",
    answer:
      "Les Kutub as-Sittah (les six livres) sont : 1) Sahih Al-Bukhari, 2) Sahih Muslim, 3) Sunan Abu Dawud, 4) Jami' at-Tirmidhi, 5) Sunan an-Nasa'i, 6) Sunan Ibn Majah. Les deux premiers sont considérés comme les plus authentiques. Ces six collections forment le socle de référence pour les hadiths dans l'islam sunnite.",
  },
];

/* ─── Banque de 30 hadiths pour la rotation quotidienne ─── */
const dailyHadiths = [
  {
    title: "Les actes ne valent que par les intentions",
    narrator: "'Umar ibn al-Khattab",
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ",
    translation: "Les actes ne valent que par les intentions, et chacun n'aura que ce qu'il a eu comme intention. Celui dont l'émigration a été pour Allah et Son Messager, son émigration est pour Allah et Son Messager. Et celui dont l'émigration a été pour obtenir un bien de ce monde ou pour épouser une femme, son émigration sera pour ce vers quoi il a émigré.",
    source: "Sahih Al-Bukhari, n°1 — Sahih Muslim, n°1907",
    grade: "sahih" as const,
    explanation: "Ce hadith est considéré comme le fondement de toute action en islam. Il enseigne que la valeur d'un acte dépend de l'intention qui le motive. Une même action peut être un acte d'adoration ou un acte mondain selon la niya (intention) de celui qui l'accomplit. Les savants ont placé ce hadith en tête de leurs ouvrages pour rappeler l'importance de purifier ses intentions.",
  },
  {
    title: "L'islam est bâti sur cinq piliers",
    narrator: "Ibn 'Umar",
    arabic: "بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ",
    translation: "L'islam est bâti sur cinq (piliers) : l'attestation qu'il n'y a de divinité digne d'adoration qu'Allah et que Muhammad est le Messager d'Allah, l'accomplissement de la prière, l'acquittement de la zakat, le pèlerinage à la Maison (sacrée) et le jeûne du Ramadan.",
    source: "Sahih Al-Bukhari, n°8 — Sahih Muslim, n°16",
    grade: "sahih" as const,
    explanation: "Ce hadith fondamental énumère les cinq piliers de l'islam, qui constituent les obligations essentielles de tout musulman. Chaque pilier représente un aspect de la foi : la parole (shahada), le corps (prière), les biens (zakat), l'endurance (jeûne) et le voyage (pèlerinage). Ces piliers forment la base de la pratique religieuse.",
  },
  {
    title: "La pudeur fait partie de la foi",
    narrator: "Abu Hurayra",
    arabic: "الْإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً، وَالْحَيَاءُ شُعْبَةٌ مِنَ الْإِيمَانِ",
    translation: "La foi comporte soixante et quelques branches, et la pudeur est une branche de la foi.",
    source: "Sahih Al-Bukhari, n°9 — Sahih Muslim, n°35",
    grade: "sahih" as const,
    explanation: "Ce hadith enseigne que la foi n'est pas un concept monolithique mais se manifeste à travers de nombreuses branches : des actes du cœur (sincérité, confiance en Allah), des actes de la langue (dhikr, rappel) et des actes du corps (prière, charité). La pudeur est mise en avant comme une qualité protectrice qui empêche le croyant de commettre ce qui déplaît à Allah.",
  },
  {
    title: "Celui qui croit en Allah et au Jour dernier",
    narrator: "Abu Hurayra",
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ",
    translation: "Que celui qui croit en Allah et au Jour dernier dise du bien ou qu'il se taise. Que celui qui croit en Allah et au Jour dernier honore son voisin. Et que celui qui croit en Allah et au Jour dernier honore son hôte.",
    source: "Sahih Al-Bukhari, n°6018 — Sahih Muslim, n°47",
    grade: "sahih" as const,
    explanation: "Ce hadith lie la foi à trois comportements concrets : maîtriser sa parole, respecter ses voisins et être généreux envers ses hôtes. Il montre que la foi véritable se traduit par des actes quotidiens. Le silence est préféré à la parole nuisible, ce qui souligne l'importance de la parole en islam.",
  },
  {
    title: "Aucun d'entre vous ne croit véritablement",
    narrator: "Anas ibn Malik",
    arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    translation: "Aucun d'entre vous ne croit véritablement tant qu'il n'aime pas pour son frère ce qu'il aime pour lui-même.",
    source: "Sahih Al-Bukhari, n°13 — Sahih Muslim, n°45",
    grade: "sahih" as const,
    explanation: "Ce hadith établit un principe fondamental d'altruisme en islam. La foi complète exige de dépasser l'égoïsme et de vouloir pour autrui le même bien que pour soi. Il s'agit d'une règle d'or que l'on retrouve dans de nombreuses traditions spirituelles, mais qui en islam est directement liée à la validité de la foi.",
  },
  {
    title: "Le musulman est celui dont les gens sont à l'abri",
    narrator: "Abdallah ibn 'Amr",
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ، وَالْمُهَاجِرُ مَنْ هَجَرَ مَا نَهَى اللَّهُ عَنْهُ",
    translation: "Le musulman est celui dont les musulmans sont à l'abri de sa langue et de sa main. Et l'émigré (al-muhajir) est celui qui délaisse ce qu'Allah a interdit.",
    source: "Sahih Al-Bukhari, n°10 — Sahih Muslim, n°40",
    grade: "sahih" as const,
    explanation: "Ce hadith redéfinit l'identité du musulman non pas par les apparences mais par le comportement. Être musulman, c'est d'abord ne nuire à personne, ni par la parole ni par les actes. Le Prophète ﷺ insiste sur la responsabilité individuelle : la vraie émigration n'est pas géographique mais spirituelle, c'est quitter le péché.",
  },
  {
    title: "Facilitez et ne rendez pas les choses difficiles",
    narrator: "Anas ibn Malik",
    arabic: "يَسِّرُوا وَلَا تُعَسِّرُوا، وَبَشِّرُوا وَلَا تُنَفِّرُوا",
    translation: "Facilitez les choses et ne les rendez pas difficiles. Annoncez la bonne nouvelle et ne repoussez pas les gens.",
    source: "Sahih Al-Bukhari, n°69 — Sahih Muslim, n°1734",
    grade: "sahih" as const,
    explanation: "Ce hadith exprime un principe pédagogique fondamental en islam : la douceur et la facilité priment sur la rigueur et la sévérité. Le Prophète ﷺ l'appliquait dans son enseignement et dans ses jugements. Il ne choisissait jamais l'option la plus difficile quand une option plus facile était permise.",
  },
  {
    title: "La religion c'est le bon conseil",
    narrator: "Tamim ad-Dari",
    arabic: "الدِّينُ النَّصِيحَةُ، قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ، وَلِكِتَابِهِ، وَلِرَسُولِهِ، وَلِأَئِمَّةِ الْمُسْلِمِينَ، وَعَامَّتِهِمْ",
    translation: "La religion, c'est le bon conseil (nassiha). Nous avons dit : Envers qui ? Il a dit : Envers Allah, envers Son Livre, envers Son Messager, envers les dirigeants des musulmans et envers l'ensemble des musulmans.",
    source: "Sahih Muslim, n°55",
    grade: "sahih" as const,
    explanation: "Ce hadith résume l'islam en un seul mot : nassiha (le conseil sincère). Le bon conseil envers Allah signifie la sincérité dans l'adoration. Envers le Coran, c'est le lire, le méditer et l'appliquer. Envers le Prophète, c'est suivre sa Sunna. Envers les dirigeants, c'est les conseiller avec sagesse. Et envers les musulmans, c'est vouloir leur bien.",
  },
  {
    title: "Le licite et l'illicite sont clairs",
    narrator: "An-Nu'man ibn Bashir",
    arabic: "إِنَّ الْحَلَالَ بَيِّنٌ وَإِنَّ الْحَرَامَ بَيِّنٌ وَبَيْنَهُمَا أُمُورٌ مُشْتَبِهَاتٌ لَا يَعْلَمُهُنَّ كَثِيرٌ مِنَ النَّاسِ، فَمَنِ اتَّقَى الشُّبُهَاتِ فَقَدِ اسْتَبْرَأَ لِدِينِهِ وَعِرْضِهِ",
    translation: "Le licite est clair et l'illicite est clair, et entre les deux il y a des choses ambiguës que beaucoup de gens ne connaissent pas. Celui qui se prémunit contre les ambiguïtés a préservé sa religion et son honneur.",
    source: "Sahih Al-Bukhari, n°52 — Sahih Muslim, n°1599",
    grade: "sahih" as const,
    explanation: "Ce hadith pose les bases de la jurisprudence islamique (fiqh). Il distingue trois catégories : le clairement licite, le clairement illicite, et une zone grise. La piété consiste à éviter les zones ambiguës par précaution (wara'). Le Prophète ﷺ compare cela à un berger qui fait paître son troupeau près d'un terrain interdit : il risque d'y pénétrer.",
  },
  {
    title: "Laisse ce qui te met dans le doute",
    narrator: "Al-Hasan ibn 'Ali",
    arabic: "دَعْ مَا يَرِيبُكَ إِلَى مَا لَا يَرِيبُكَ",
    translation: "Laisse ce qui te met dans le doute pour ce qui ne te met pas dans le doute.",
    source: "Jami' at-Tirmidhi, n°2518 — Sunan an-Nasa'i, n°5711",
    grade: "sahih" as const,
    explanation: "Ce hadith concis pose une règle pratique universelle : face à un choix douteux, le croyant choisit la voie la plus sûre. Ce principe de précaution s'applique à tous les domaines : alimentation, transactions, relations. La tranquillité du cœur est un signe que l'on est sur le bon chemin.",
  },
  {
    title: "Fait partie du bel islam",
    narrator: "Abu Hurayra",
    arabic: "مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ",
    translation: "Fait partie du bel islam d'une personne de délaisser ce qui ne la concerne pas.",
    source: "Jami' at-Tirmidhi, n°2317",
    grade: "hasan" as const,
    explanation: "Ce hadith enseigne une sagesse pratique : ne pas se mêler de ce qui ne nous regarde pas est un signe de maturité spirituelle. Cela inclut les paroles inutiles, la curiosité malsaine et l'ingérence dans la vie d'autrui. Le croyant concentre son énergie sur ce qui le rapproche d'Allah et améliore sa propre vie.",
  },
  {
    title: "Ne vous mettez pas en colère",
    narrator: "Abu Hurayra",
    arabic: "لَا تَغْضَبْ، فَرَدَّدَ مِرَارًا، قَالَ: لَا تَغْضَبْ",
    translation: "Un homme demanda au Prophète ﷺ : 'Fais-moi une recommandation.' Il répondit : 'Ne te mets pas en colère.' L'homme répéta sa demande plusieurs fois, et le Prophète ﷺ répétait : 'Ne te mets pas en colère.'",
    source: "Sahih Al-Bukhari, n°6116",
    grade: "sahih" as const,
    explanation: "La répétition de ce conseil souligne son importance. La colère est la source de nombreux péchés : injustice, violence verbale, rupture des liens. Le Prophète ﷺ a enseigné des remèdes contre la colère : faire ses ablutions, s'asseoir si l'on est debout, se coucher si l'on est assis, et chercher refuge auprès d'Allah contre Satan.",
  },
  {
    title: "Le fort n'est pas celui qui terrasse les gens",
    narrator: "Abu Hurayra",
    arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    translation: "Le fort n'est pas celui qui terrasse les gens dans la lutte, mais le fort est celui qui se domine quand il est en colère.",
    source: "Sahih Al-Bukhari, n°6114 — Sahih Muslim, n°2609",
    grade: "sahih" as const,
    explanation: "Ce hadith redéfinit la notion de force. Dans la société arabe de l'époque, la force physique était admirée. Le Prophète ﷺ enseigne que la véritable force est morale : c'est la maîtrise de soi face à la provocation. Cette requalification élève le combat intérieur (jihad an-nafs) au-dessus du combat physique.",
  },
  {
    title: "Sourire à ton frère est une charité",
    narrator: "Abu Dharr",
    arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    translation: "Ton sourire à ton frère est une charité (sadaqa).",
    source: "Jami' at-Tirmidhi, n°1956",
    grade: "hasan" as const,
    explanation: "Ce hadith élargit la notion de charité au-delà du don matériel. Un simple sourire, un mot aimable, enlever un obstacle du chemin : tout cela est une sadaqa. Le Prophète ﷺ montrait par là que l'islam est accessible à tous, même à ceux qui n'ont pas de biens à donner.",
  },
  {
    title: "Allah ne regarde pas vos apparences",
    narrator: "Abu Hurayra",
    arabic: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    translation: "Allah ne regarde ni vos apparences ni vos richesses, mais Il regarde vos coeurs et vos actes.",
    source: "Sahih Muslim, n°2564",
    grade: "sahih" as const,
    explanation: "Ce hadith rappelle que la valeur d'un individu auprès d'Allah ne dépend ni de son physique ni de sa fortune, mais de la sincérité de son cœur et de la qualité de ses actions. C'est un puissant rappel contre toute forme de discrimination sociale, raciale ou économique.",
  },
  {
    title: "Les meilleurs d'entre vous sont ceux qui apprennent le Coran",
    narrator: "'Uthman ibn 'Affan",
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    translation: "Les meilleurs d'entre vous sont ceux qui apprennent le Coran et l'enseignent.",
    source: "Sahih Al-Bukhari, n°5027",
    grade: "sahih" as const,
    explanation: "Ce hadith met en valeur l'apprentissage et la transmission du savoir coranique. Il ne suffit pas d'apprendre pour soi : le vrai mérite est dans le partage. Le Prophète ﷺ a ainsi posé les bases d'une civilisation fondée sur la transmission du savoir religieux de génération en génération.",
  },
  {
    title: "Quiconque emprunte un chemin pour acquérir un savoir",
    narrator: "Abu Hurayra",
    arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ",
    translation: "Quiconque emprunte un chemin pour y acquérir un savoir, Allah lui facilitera un chemin vers le Paradis.",
    source: "Sahih Muslim, n°2699",
    grade: "sahih" as const,
    explanation: "Ce hadith illustre l'importance du savoir en islam. La quête de connaissance est un acte d'adoration récompensé. Le 'chemin' désigne aussi bien un déplacement physique vers un lieu d'apprentissage qu'un effort intellectuel. Allah récompense l'intention et l'effort, pas seulement le résultat.",
  },
  {
    title: "Celui qui ne remercie pas les gens",
    narrator: "Abu Hurayra",
    arabic: "لَا يَشْكُرُ اللَّهَ مَنْ لَا يَشْكُرُ النَّاسَ",
    translation: "Celui qui ne remercie pas les gens ne remercie pas Allah.",
    source: "Sunan Abu Dawud, n°4811 — Jami' at-Tirmidhi, n°1954",
    grade: "sahih" as const,
    explanation: "Ce hadith lie la gratitude envers les créatures à la gratitude envers le Créateur. La reconnaissance est un pilier du comportement islamique. Remercier les gens pour leurs bienfaits est une obligation morale qui reflète la reconnaissance envers Allah, source de tout bien.",
  },
  {
    title: "Les croyants dans leur affection mutuelle",
    narrator: "An-Nu'man ibn Bashir",
    arabic: "مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ إِذَا اشْتَكَى مِنْهُ عُضْوٌ تَدَاعَى لَهُ سَائِرُ الْجَسَدِ بِالسَّهَرِ وَالْحُمَّى",
    translation: "L'exemple des croyants dans leur affection mutuelle, leur miséricorde et leur compassion est celui d'un corps : lorsqu'un membre souffre, tout le reste du corps réagit par l'insomnie et la fièvre.",
    source: "Sahih Al-Bukhari, n°6011 — Sahih Muslim, n°2586",
    grade: "sahih" as const,
    explanation: "Cette métaphore du corps illustre la solidarité islamique (ukhuwwa). La communauté musulmane (Oumma) est comme un organisme vivant : la souffrance de l'un affecte tous les autres. Ce hadith fonde l'obligation de solidarité, d'entraide et d'empathie entre les croyants.",
  },
  {
    title: "Celui qui soulage un croyant d'une difficulté",
    narrator: "Abu Hurayra",
    arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
    translation: "Celui qui soulage un croyant d'une difficulté de ce monde, Allah le soulagera d'une difficulté parmi celles du Jour de la Résurrection.",
    source: "Sahih Muslim, n°2699",
    grade: "sahih" as const,
    explanation: "Ce hadith établit un principe de réciprocité divine : la récompense est à la mesure de l'acte. Soulager autrui dans ce monde entraîne un soulagement dans l'au-delà. C'est une puissante motivation pour l'entraide et la solidarité. Le hadith poursuit en mentionnant d'autres récompenses pour celui qui facilite, dissimule les défauts d'autrui et aide son prochain.",
  },
  {
    title: "Le Paradis est entouré de choses désagréables",
    narrator: "Abu Hurayra",
    arabic: "حُفَّتِ الْجَنَّةُ بِالْمَكَارِهِ وَحُفَّتِ النَّارُ بِالشَّهَوَاتِ",
    translation: "Le Paradis est entouré de choses désagréables (efforts, sacrifices) et l'Enfer est entouré de passions (tentations).",
    source: "Sahih Al-Bukhari, n°6487 — Sahih Muslim, n°2822",
    grade: "sahih" as const,
    explanation: "Ce hadith résume la réalité de l'épreuve terrestre. Le chemin du Paradis passe par la discipline, le sacrifice et la patience — des choses que l'âme n'aime pas naturellement. Inversement, le chemin de l'Enfer est pavé de plaisirs immédiats et de tentations. La sagesse consiste à résister aux désirs éphémères pour atteindre la félicité éternelle.",
  },
  {
    title: "Chaque articulation du corps doit une charité",
    narrator: "Abu Hurayra",
    arabic: "كُلُّ سُلَامَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ، كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ",
    translation: "Chaque articulation du corps humain doit une charité chaque jour où le soleil se lève. Être équitable entre deux personnes est une charité ; aider un homme à monter sur sa monture est une charité ; la bonne parole est une charité ; chaque pas vers la prière est une charité ; et enlever un obstacle du chemin est une charité.",
    source: "Sahih Al-Bukhari, n°2989 — Sahih Muslim, n°1009",
    grade: "sahih" as const,
    explanation: "Ce hadith enseigne que la gratitude pour la santé s'exprime par des actes de bienfaisance quotidiens. Le Prophète ﷺ énumère des exemples simples accessibles à tous : la parole aimable, l'entraide, la marche vers la mosquée, le nettoyage des chemins. La charité n'est pas réservée aux riches.",
  },
  {
    title: "La meilleure aumône est celle faite par le pauvre",
    narrator: "Abu Hurayra",
    arabic: "أَفْضَلُ الصَّدَقَةِ مَا كَانَ عَنْ ظَهْرِ غِنًى، وَابْدَأْ بِمَنْ تَعُولُ",
    translation: "La meilleure aumône est celle donnée après avoir assuré ses propres besoins. Et commence par ceux qui sont à ta charge.",
    source: "Sahih Al-Bukhari, n°1426",
    grade: "sahih" as const,
    explanation: "Ce hadith pose un équilibre entre la générosité et la responsabilité. L'islam n'encourage pas à se dépouiller au point de devenir soi-même dans le besoin. Il faut d'abord subvenir aux besoins de sa famille, puis donner le surplus. L'ordre des priorités est clair : soi-même, puis la famille, puis les autres.",
  },
  {
    title: "Allah est Beau et Il aime la beauté",
    narrator: "Abdallah ibn Mas'ud",
    arabic: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
    translation: "Allah est Beau et Il aime la beauté.",
    source: "Sahih Muslim, n°91",
    grade: "sahih" as const,
    explanation: "Ce hadith révèle un attribut divin — la beauté — et invite le croyant à rechercher la beauté dans tous les aspects de sa vie : vêtements, comportement, environnement, parole. La beauté en islam n'est pas vanité mais harmonie. Le contexte du hadith concerne un homme qui aimait porter de beaux habits et craignait que ce soit de l'orgueil.",
  },
  {
    title: "Prenez garde à l'injustice",
    narrator: "Abdallah ibn 'Umar",
    arabic: "إِنَّ الظُّلْمَ ظُلُمَاتٌ يَوْمَ الْقِيَامَةِ",
    translation: "L'injustice sera des ténèbres le Jour de la Résurrection.",
    source: "Sahih Al-Bukhari, n°2447 — Sahih Muslim, n°2578",
    grade: "sahih" as const,
    explanation: "Ce hadith est un avertissement sévère contre l'oppression sous toutes ses formes. Le jeu de mots en arabe entre dhulm (injustice) et dhulumat (ténèbres) renforce le message : l'injustice plonge son auteur dans les ténèbres au Jour du Jugement. Allah a interdit l'injustice à Lui-même et l'a interdite entre Ses serviteurs.",
  },
  {
    title: "Le meilleur d'entre vous est celui qui est le meilleur envers sa famille",
    narrator: "Aisha",
    arabic: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ، وَأَنَا خَيْرُكُمْ لِأَهْلِي",
    translation: "Le meilleur d'entre vous est celui qui est le meilleur envers sa famille. Et je suis le meilleur d'entre vous envers ma famille.",
    source: "Jami' at-Tirmidhi, n°3895 — Sunan Ibn Majah, n°1977",
    grade: "sahih" as const,
    explanation: "Ce hadith fait de la bienveillance familiale un critère de mérite. Le Prophète ﷺ montrait l'exemple en aidant ses épouses dans les tâches domestiques, en jouant avec ses petits-enfants et en étant doux et patient avec sa famille. La grandeur d'un homme ne se mesure pas à son comportement en public mais à la maison.",
  },
  {
    title: "Fais preuve de bonté envers ta mère",
    narrator: "Abu Hurayra",
    arabic: "جَاءَ رَجُلٌ فَقَالَ: يَا رَسُولَ اللَّهِ، مَنْ أَحَقُّ النَّاسِ بِحُسْنِ صَحَابَتِي؟ قَالَ: أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: ثُمَّ أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: ثُمَّ أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: ثُمَّ أَبُوكَ",
    translation: "Un homme vint au Prophète ﷺ et demanda : 'Ô Messager d'Allah, qui mérite le plus ma bonne compagnie ?' Il répondit : 'Ta mère.' Il dit : 'Puis qui ?' Il répondit : 'Ta mère.' Il dit : 'Puis qui ?' Il répondit : 'Ta mère.' Il dit : 'Puis qui ?' Il répondit : 'Puis ton père.'",
    source: "Sahih Al-Bukhari, n°5971 — Sahih Muslim, n°2548",
    grade: "sahih" as const,
    explanation: "La répétition trois fois de 'ta mère' avant 'ton père' souligne la place éminente de la mère en islam. Ce statut s'explique par les épreuves de la grossesse, de l'accouchement et de l'allaitement. Le Coran confirme : 'Sa mère l'a porté en endurant peine sur peine' (31:14). Le respect des parents est le deuxième commandement après l'adoration d'Allah.",
  },
  {
    title: "Chaque bonne action est une sadaqa",
    narrator: "Jabir ibn Abdallah",
    arabic: "كُلُّ مَعْرُوفٍ صَدَقَةٌ",
    translation: "Toute bonne action est une charité (sadaqa).",
    source: "Sahih Al-Bukhari, n°6021 — Sahih Muslim, n°1005",
    grade: "sahih" as const,
    explanation: "Ce hadith universel élargit la définition de la charité à tout acte de bonté. Aider un aveugle à traverser, sourire, partager un conseil, retirer un danger du chemin : tout cela est une sadaqa. Ce principe rend la charité accessible à tous, indépendamment de la fortune, et encourage la bienfaisance continue.",
  },
  {
    title: "Celui qui invoque Allah et celui qui ne L'invoque pas",
    narrator: "Abu Musa al-Ash'ari",
    arabic: "مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لَا يَذْكُرُ رَبَّهُ مَثَلُ الْحَيِّ وَالْمَيِّتِ",
    translation: "L'exemple de celui qui invoque son Seigneur et de celui qui ne L'invoque pas est comme l'exemple du vivant et du mort.",
    source: "Sahih Al-Bukhari, n°6407",
    grade: "sahih" as const,
    explanation: "Ce hadith compare le cœur qui invoque Allah (dhikr) à un être vivant, et le cœur négligent à un mort. Le dhikr est la nourriture du cœur : sans lui, le cœur s'éteint spirituellement. Cela souligne l'importance de maintenir un lien constant avec Allah à travers l'invocation, la prière et la méditation.",
  },
  {
    title: "Le croyant est le miroir du croyant",
    narrator: "Abu Hurayra",
    arabic: "الْمُؤْمِنُ مِرْآةُ الْمُؤْمِنِ، وَالْمُؤْمِنُ أَخُو الْمُؤْمِنِ يَكُفُّ عَنْهُ ضَيْعَتَهُ وَيَحُوطُهُ مِنْ وَرَائِهِ",
    translation: "Le croyant est le miroir du croyant, et le croyant est le frère du croyant : il le protège de la perte et le défend en son absence.",
    source: "Sunan Abu Dawud, n°4918",
    grade: "hasan" as const,
    explanation: "La métaphore du miroir est riche de sens : le frère croyant te montre tes défauts avec bienveillance, comme un miroir reflète ton image sans déformation. Il te conseille sincèrement, te protège dans ton dos et veille sur tes intérêts. C'est la définition de la fraternité islamique authentique.",
  },
];

export default function HadithDuJour() {
  /* Rotation quotidienne */
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const todayHadith = dailyHadiths[dayOfYear % dailyHadiths.length];

  /* Articles hadith publiés */
  const hadithCategories = [
    { key: "hadith-fondements", label: "Fondements de la foi", description: "Les bases de l'islam : piliers, aqida, sciences du hadith" },
    { key: "hadith-adoration", label: "Adoration et pratique", description: "Prière, jeûne, pèlerinage, invocations" },
    { key: "hadith-famille", label: "Famille et couple", description: "Mariage, parents, éducation des enfants" },
    { key: "hadith-ethique", label: "Éthique et comportement", description: "Bon caractère, patience, pardon, relations" },
    { key: "hadith-societe", label: "Société et vie quotidienne", description: "Charité, commerce, voisinage, science" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.islamreligion.fr/hadith-du-jour/#webpage",
        url: "https://www.islamreligion.fr/hadith-du-jour",
        name: "Hadith du jour : paroles authentiques du Prophète Muhammad ﷺ",
        description:
          "Découvrez chaque jour un hadith authentique du Prophète Muhammad ﷺ avec texte arabe, traduction, source et explication.",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        inLanguage: "fr-FR",
        breadcrumb: {
          "@id": "https://www.islamreligion.fr/hadith-du-jour/#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.islamreligion.fr/hadith-du-jour/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://www.islamreligion.fr",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Hadith du jour",
            item: "https://www.islamreligion.fr/hadith-du-jour",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero
          title="Hadith du jour : paroles authentiques du Prophète ﷺ"
          subtitle="Chaque jour, découvrez un hadith authentique avec texte arabe, traduction française, source vérifiée et explication détaillée. Explorez les grandes collections de hadiths par thème."
          imageSrc="/images/coran-ouvert-chapelet-bois-islam-versets.jpg"
          imageAlt="Coran ouvert avec chapelet, symbolisant l'étude des hadiths du Prophète Muhammad ﷺ"
          compact
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 xl:grid-cols-[300px_1fr]">
            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article className="max-w-3xl">
              <div className="lg:hidden">
                <TableOfContents items={tocItems} />
              </div>

              <nav
                className="mb-8 text-sm text-foreground-secondary"
                aria-label="Fil d'Ariane"
              >
                <Link href="/" className="hover:text-primary">
                  Accueil
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Hadith du jour</span>
              </nav>

              {/* ============================================ */}
              {/* HADITH DU JOUR — rotation quotidienne */}
              {/* ============================================ */}
              <section id="hadith-du-jour" className="scroll-mt-24">
                <div className="mb-8 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent p-6 shadow-lg lg:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      Hadith du jour
                    </span>
                    <span className="text-sm text-foreground-secondary">
                      {now.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </div>
                  <HadithBlock
                    title={todayHadith.title}
                    narrator={todayHadith.narrator}
                    arabic={todayHadith.arabic}
                    translation={todayHadith.translation}
                    source={todayHadith.source}
                    grade={todayHadith.grade}
                    explanation={todayHadith.explanation}
                  />
                  <p className="mt-4 text-center text-xs text-foreground-secondary">
                    Ce hadith change automatiquement chaque jour — revenez demain pour un nouveau hadith
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* QU'EST-CE QU'UN HADITH ? */}
              {/* ============================================ */}
              <section id="definition" className="mt-16 scroll-mt-24">
                <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce qu&apos;un hadith en islam ?
                </h2>

                <p className="text-lg leading-relaxed text-foreground">
                  Le terme <strong>hadith</strong> (حديث) désigne en arabe un récit ou une parole. En sciences islamiques, il désigne spécifiquement toute parole, tout acte, toute approbation tacite ou toute description physique ou morale attribués au Prophète Muhammad ﷺ. Les hadiths constituent la <strong>Sunna prophétique</strong>, qui est la deuxième source de législation en islam après le Coran.
                </p>

                <p className="mt-4 text-base leading-relaxed text-foreground">
                  Contrairement au Coran, qui est la parole d&apos;Allah révélée mot pour mot, le hadith est la parole du Prophète ﷺ, inspirée par la révélation divine mais formulée dans ses propres termes. Allah dit dans le Coran : <em>&laquo;&nbsp;Il ne prononce rien sous l&apos;effet de la passion. Ce n&apos;est rien d&apos;autre qu&apos;une révélation inspirée&nbsp;&raquo;</em> (sourate An-Najm, 53:3-4).
                </p>

                <p className="mt-4 text-base leading-relaxed text-foreground">
                  Chaque hadith se compose de deux éléments essentiels :
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <h3 className="mb-2 font-semibold text-primary">L&apos;isnad (السند)</h3>
                    <p className="text-sm leading-relaxed text-foreground">
                      La chaîne de transmission : la liste des rapporteurs qui ont transmis le hadith de personne en personne depuis le Prophète ﷺ jusqu&apos;au compilateur. C&apos;est cette chaîne qui permet de vérifier l&apos;authenticité du récit.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <h3 className="mb-2 font-semibold text-primary">Le matn (المتن)</h3>
                    <p className="text-sm leading-relaxed text-foreground">
                      Le texte du hadith lui-même : la parole, la description de l&apos;acte ou de l&apos;approbation du Prophète ﷺ. Le matn est le contenu que les savants étudient pour en extraire les enseignements et les règles juridiques.
                    </p>
                  </div>
                </div>

                <HadithCard
                  arabic="إِنَّمَا بُعِثْتُ لِأُتَمِّمَ صَالِحَ الْأَخْلَاقِ"
                  text="Je n'ai été envoyé que pour parfaire les nobles caractères."
                  source="Rapporté par Al-Bukhari dans Al-Adab Al-Mufrad, n°273"
                />

                <p className="mt-4 text-base leading-relaxed text-foreground">
                  L&apos;étude des hadiths est une science à part entière (<strong>ulum al-hadith</strong>) qui a été développée par les savants musulmans dès les premiers siècles de l&apos;islam. Elle comprend la vérification des chaînes de transmission, l&apos;évaluation de la fiabilité des rapporteurs, et la classification des hadiths selon leur degré d&apos;authenticité.
                </p>
              </section>

              {/* ============================================ */}
              {/* LES GRANDES COLLECTIONS */}
              {/* ============================================ */}
              <section id="collections" className="mt-16 scroll-mt-24">
                <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                  Les grandes collections de hadiths (Kutub as-Sittah)
                </h2>

                <p className="text-base leading-relaxed text-foreground">
                  Les savants du hadith ont consacré leur vie à collecter, vérifier et classifier les hadiths prophétiques. Parmi les centaines de compilations, six collections sont considérées comme les plus authentiques et les plus complètes : on les appelle les <strong>Kutub as-Sittah</strong> (les six livres).
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-primary/5">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-primary">Collection</th>
                        <th className="px-4 py-3 font-semibold text-primary">Compilateur</th>
                        <th className="hidden px-4 py-3 font-semibold text-primary sm:table-cell">Hadiths</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="bg-green-50">
                        <td className="px-4 py-3 font-medium">Sahih Al-Bukhari</td>
                        <td className="px-4 py-3">Muhammad ibn Isma&apos;il al-Bukhari (m. 870)</td>
                        <td className="hidden px-4 py-3 sm:table-cell">~7 275</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="px-4 py-3 font-medium">Sahih Muslim</td>
                        <td className="px-4 py-3">Muslim ibn al-Hajjaj (m. 875)</td>
                        <td className="hidden px-4 py-3 sm:table-cell">~3 033</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Sunan Abu Dawud</td>
                        <td className="px-4 py-3">Abu Dawud as-Sijistani (m. 889)</td>
                        <td className="hidden px-4 py-3 sm:table-cell">~5 274</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Jami&apos; at-Tirmidhi</td>
                        <td className="px-4 py-3">Muhammad ibn &apos;Isa at-Tirmidhi (m. 892)</td>
                        <td className="hidden px-4 py-3 sm:table-cell">~3 956</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Sunan an-Nasa&apos;i</td>
                        <td className="px-4 py-3">Ahmad ibn Shu&apos;ayb an-Nasa&apos;i (m. 915)</td>
                        <td className="hidden px-4 py-3 sm:table-cell">~5 761</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Sunan Ibn Majah</td>
                        <td className="px-4 py-3">Muhammad ibn Yazid Ibn Majah (m. 887)</td>
                        <td className="hidden px-4 py-3 sm:table-cell">~4 341</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-base leading-relaxed text-foreground">
                  Les deux <strong>Sahih</strong> (Al-Bukhari et Muslim) jouissent du plus haut degré d&apos;authenticité. L&apos;imam Al-Bukhari a examiné près de 600 000 récits pour n&apos;en retenir que 7 275. Chaque hadith a été vérifié selon des critères extrêmement stricts de continuité de la chaîne, de probité des rapporteurs et d&apos;absence de contradictions.
                </p>

                <p className="mt-4 text-base leading-relaxed text-foreground">
                  D&apos;autres collections majeures complètent les six livres, notamment le <strong>Muwatta</strong> de l&apos;imam Malik, le <strong>Musnad</strong> d&apos;Ahmad ibn Hanbal, et les <strong>40 hadiths d&apos;An-Nawawi</strong> — une sélection des hadiths les plus importants pour la pratique quotidienne du musulman.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Apprenez l'arabe pour lire les hadiths dans leur langue originale"
                description="Comprendre les hadiths en arabe vous permet d'accéder directement aux enseignements du Prophète ﷺ sans intermédiaire."
                href="/apprendre-larabe"
                linkText="Découvrir la formation"
              />

              {/* ============================================ */}
              {/* AUTHENTICITE DES HADITHS */}
              {/* ============================================ */}
              <section id="authenticite" className="mt-16 scroll-mt-24">
                <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                  Authenticité des hadiths : Sahih, Hasan et Da&apos;if
                </h2>

                <p className="text-base leading-relaxed text-foreground">
                  Les savants du hadith ont développé un système rigoureux de classification pour distinguer les récits fiables des récits douteux. Ce système, unique dans l&apos;histoire des civilisations, repose sur l&apos;analyse minutieuse de chaque maillon de la chaîne de transmission.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border-l-4 border-green-500 bg-green-50 p-5">
                    <h3 className="mb-1 font-semibold text-green-800">Sahih (صحيح) — Authentique</h3>
                    <p className="text-sm leading-relaxed text-green-900">
                      Le plus haut niveau d&apos;authenticité. La chaîne de transmission est continue, chaque rapporteur est reconnu pour sa probité (<em>adala</em>) et sa précision (<em>dabt</em>), le hadith ne contredit pas de sources plus fiables, et il ne contient pas de défaut caché (<em>&apos;illa</em>). C&apos;est la référence en matière de législation.
                    </p>
                  </div>

                  <div className="rounded-xl border-l-4 border-yellow-500 bg-yellow-50 p-5">
                    <h3 className="mb-1 font-semibold text-yellow-800">Hasan (حسن) — Bon</h3>
                    <p className="text-sm leading-relaxed text-yellow-900">
                      Un hadith dont la chaîne remplit la plupart des critères du Sahih, mais dont un rapporteur est légèrement moins précis dans sa mémorisation. Le hadith Hasan est accepté comme preuve en jurisprudence et constitue une source fiable d&apos;enseignement.
                    </p>
                  </div>

                  <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-5">
                    <h3 className="mb-1 font-semibold text-red-800">Da&apos;if (ضعيف) — Faible</h3>
                    <p className="text-sm leading-relaxed text-red-900">
                      Un hadith qui ne remplit pas les conditions d&apos;authenticité : chaîne discontinue, rapporteur inconnu ou peu fiable, contradiction avec des sources établies. Les hadiths faibles ne sont généralement pas utilisés pour établir des règles juridiques, mais certains savants les acceptent pour les vertus (<em>fada&apos;il</em>) sous conditions.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-base leading-relaxed text-foreground">
                  L&apos;imam Abdallah ibn al-Mubarak (m. 797) disait : <em>&laquo;&nbsp;L&apos;isnad fait partie de la religion. Sans l&apos;isnad, quiconque dirait ce qu&apos;il voudrait&nbsp;&raquo;</em>. Cette rigueur scientifique a permis de préserver les enseignements du Prophète ﷺ avec une précision remarquable sur plus de quatorze siècles.
                </p>
              </section>

              {/* ============================================ */}
              {/* CATALOGUE PAR THEME */}
              {/* ============================================ */}
              <section id="catalogue" className="mt-16 scroll-mt-24">
                <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                  Explorer les hadiths par thème
                </h2>

                <p className="mb-8 text-base leading-relaxed text-foreground">
                  Retrouvez ci-dessous tous nos articles classés par thème. Chaque article propose des hadiths authentiques avec texte arabe, traduction, source vérifiée et explication détaillée.
                </p>

                {hadithCategories.map((cat) => {
                  const items = publishSchedule.filter(
                    (a) => a.category === cat.key && isPublished(a.publishDate)
                  );
                  if (items.length === 0) return null;
                  return (
                    <div key={cat.key} className="mb-10">
                      <h3 className="mb-2 text-xl font-semibold text-primary">
                        {cat.label}
                      </h3>
                      <p className="mb-4 text-sm text-foreground-secondary">
                        {cat.description}
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((a) => (
                          <Link
                            key={a.slug}
                            href={`/${a.slug}`}
                            className="group rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
                          >
                            <span className="text-sm font-medium text-foreground group-hover:text-primary">
                              {a.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {publishSchedule.filter(
                  (a) => a.category.startsWith("hadith-") && isPublished(a.publishDate)
                ).length === 0 && (
                  <p className="rounded-xl border border-border bg-accent p-6 text-center text-foreground-secondary">
                    Les articles hadith sont en cours de publication. Revenez bientôt pour découvrir notre catalogue complet.
                  </p>
                )}
              </section>

              <SocialBanner />

              <AffiliateForm
                title="Apprenez l'arabe et le Coran en ligne"
                description="Rejoignez des milliers d'étudiants qui apprennent l'arabe classique et la lecture du Coran avec des professeurs qualifiés."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* ============================================ */}
              {/* MAILLAGE INTERNE */}
              {/* ============================================ */}
              <section className="mt-16 rounded-xl bg-accent p-6 lg:p-8">
                <h2 className="mb-4 text-xl font-bold text-primary">
                  Sur le même sujet
                </h2>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/doua-islam"
                    className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en islam
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêves en islam
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes arabes
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
