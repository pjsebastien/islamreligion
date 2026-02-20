import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Remèdes arabes et médecine prophétique : soins naturels en islam",
  description:
    "Découvrez les remèdes arabes et la médecine prophétique : nigelle, miel, hijama, huile d'olive, dattes et autres soins naturels mentionnés dans le Coran et la Sunna.",
  alternates: {
    canonical: "https://www.islamreligion.fr/remede-arabe",
  },
};

const tocItems = [
  { id: "medecine-prophetique", label: "Qu'est-ce que la médecine prophétique ?" },
  { id: "grands-remedes", label: "Les grands remèdes prophétiques" },
  { id: "par-probleme", label: "Remèdes par problème de santé" },
  { id: "guerison-spirituelle", label: "La guérison spirituelle" },
  { id: "precautions", label: "Précautions et bon usage" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "La médecine prophétique remplace-t-elle la médecine moderne ?",
    answer:
      "Non. La médecine prophétique est un complément, pas un substitut. Le Prophète ﷺ a lui-même recommandé de se soigner et de consulter des médecins. L'islam encourage le recours aux soins médicaux tout en valorisant les remèdes naturels mentionnés dans les textes. Aucun traitement médical en cours ne devrait être arrêté au profit d'un remède traditionnel sans avis médical.",
  },
  {
    question: "Qu'est-ce que la hijama (cupping therapy) ?",
    answer:
      "La hijama est une technique de ventouses humides pratiquée depuis l'Antiquité et recommandée par le Prophète ﷺ. Elle consiste à appliquer des ventouses sur des points précis du corps, puis à pratiquer de légères incisions pour extraire du sang. Elle est utilisée pour soulager divers maux : douleurs, migraines, problèmes circulatoires. Elle doit être pratiquée par un praticien formé, dans des conditions d'hygiène strictes.",
  },
  {
    question: "La graine de nigelle soigne-t-elle vraiment toutes les maladies ?",
    answer:
      "Le hadith dit que la graine de nigelle est « un remède contre toute maladie, sauf la mort ». Les savants expliquent qu'il s'agit d'une formule générale qui souligne les bienfaits multiples de la nigelle, pas une promesse de guérison universelle au sens littéral. La recherche scientifique a confirmé ses propriétés anti-inflammatoires, antioxydantes et immunostimulantes, mais elle ne remplace pas un traitement médical adapté.",
  },
  {
    question: "Comment utiliser le miel à des fins thérapeutiques ?",
    answer:
      "Le miel peut être consommé pur (une cuillère à jeun), dilué dans de l'eau tiède, ou appliqué localement sur les plaies et brûlures. Le Coran mentionne le miel comme contenant « une guérison pour les gens » (sourate An-Nahl, verset 69). Pour un usage thérapeutique, privilégiez un miel pur, non chauffé, de préférence local ou de variétés reconnues (jujubier, manuka, sidr).",
  },
  {
    question: "La roqya est-elle un remède reconnu en islam ?",
    answer:
      "La roqya légitime (ar-ruqya ash-shar'iyya) est reconnue et pratiquée en islam. Elle consiste à réciter le Coran et les invocations prophétiques sur une personne malade. Le Prophète ﷺ l'a lui-même pratiquée et autorisée, à condition qu'elle utilise les paroles de Dieu ou Ses noms, qu'elle soit en arabe ou dans une langue comprise, et qu'on croie que la guérison vient de Dieu seul.",
  },
  {
    question: "L'huile d'olive a-t-elle des vertus selon l'islam ?",
    answer:
      "Le Prophète ﷺ a recommandé de consommer l'huile d'olive et de s'en enduire le corps. Le Coran mentionne l'olivier comme un arbre béni (sourate An-Nur, verset 35). L'huile d'olive extra-vierge est riche en antioxydants et en acides gras mono-insaturés. Elle peut être consommée crue, utilisée en cuisine ou appliquée sur la peau et les cheveux.",
  },
  {
    question: "Peut-on combiner médecine prophétique et traitement médical ?",
    answer:
      "Oui, et c'est même recommandé. Les remèdes prophétiques (miel, nigelle, hijama, invocations) peuvent être utilisés en complément d'un traitement médical, jamais en remplacement. Informez toujours votre médecin si vous prenez des compléments naturels, car certaines interactions sont possibles (par exemple, la nigelle peut interagir avec certains médicaments).",
  },
  {
    question: "Les dattes ont-elles des propriétés thérapeutiques ?",
    answer:
      "Le Prophète ﷺ a dit que celui qui mange sept dattes 'ajwa le matin est protégé du poison et de la sorcellerie ce jour-là (rapporté par al-Bukhari). Les dattes sont riches en fibres, potassium, magnésium et sucres naturels. Elles sont particulièrement recommandées pour rompre le jeûne, pour les femmes enceintes et pour apporter une énergie rapide et saine.",
  },
];

const remedyCategories = [
  {
    title: "Douleurs et inflammations",
    items: ["Hijama (ventouses)", "Huile de nigelle", "Miel", "Eau de Zamzam", "Henné"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Digestion et métabolisme",
    items: ["Miel à jeun", "Huile d'olive", "Dattes", "Gingembre", "Séné (sana makki)"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    title: "Immunité et prévention",
    items: ["Graine de nigelle (habba sawda)", "Miel + nigelle", "Talbina (orge)", "Costus marin (al-qist al-hindi)"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Peau et cheveux",
    items: ["Huile d'olive", "Henné", "Miel en application", "Huile de nigelle", "Aloe vera"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Bien-être mental et stress",
    items: ["Récitation du Coran", "Invocations (dhikr)", "Eau de Zamzam", "Talbina", "Miel"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Maux spirituels",
    items: ["Roqya (récitation coranique)", "Eau coranisée", "Miel coranisé", "Huile d'olive coranisée", "Invocations de protection"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
];

export default function RemedeArabe() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.islamreligion.fr/remede-arabe/#webpage",
        url: "https://www.islamreligion.fr/remede-arabe",
        name: "Remèdes arabes et médecine prophétique : soins naturels en islam",
        description:
          "Découvrez les remèdes arabes et la médecine prophétique : nigelle, miel, hijama, huile d'olive et autres soins naturels en islam.",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        inLanguage: "fr-FR",
        breadcrumb: { "@id": "https://www.islamreligion.fr/remede-arabe/#breadcrumb" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.islamreligion.fr/remede-arabe/#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.islamreligion.fr" },
          { "@type": "ListItem", position: 2, name: "Remèdes arabes", item: "https://www.islamreligion.fr/remede-arabe" },
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
          title="Remèdes arabes et médecine prophétique : soins naturels en islam"
          subtitle="Les remèdes mentionnés dans le Coran et la Sunna : nigelle, miel, hijama, huile d'olive et les pratiques de guérison naturelle."
          imageSrc="/images/coran-ouvert-nature-coucher-soleil-islam.jpg"
          imageAlt="Coran ouvert dans la nature au coucher du soleil, symbole de la médecine prophétique"
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

              <nav className="mb-8 text-sm text-foreground-secondary" aria-label="Fil d'Ariane">
                <Link href="/" className="hover:text-primary">Accueil</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Remèdes arabes</span>
              </nav>

              <MedicalDisclaimer />

              {/* ============================================ */}
              {/* SECTION 1 : La médecine prophétique */}
              {/* ============================================ */}
              <section id="medecine-prophetique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce que la médecine prophétique ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La médecine prophétique (<em>at-tibb an-nabawi</em>) désigne l&apos;ensemble
                  des conseils, pratiques et remèdes liés à la santé que l&apos;on retrouve
                  dans les paroles et les actes du Prophète Muhammad ﷺ. Ce n&apos;est pas une
                  médecine au sens clinique du terme, mais un ensemble de recommandations
                  hygiéniques, alimentaires et spirituelles qui s&apos;inscrivent dans la
                  tradition de l&apos;
                  <Link href="/" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    islam
                  </Link>.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Plusieurs savants musulmans ont compilé ces enseignements dans des ouvrages
                  de référence. Le plus célèbre est le chapitre &laquo;&nbsp;At-Tibb&nbsp;&raquo;
                  de l&apos;ouvrage <em>Zad al-Ma&apos;ad</em> d&apos;Ibn al-Qayyim
                  al-Jawziyya (1292-1350), qui recense systématiquement les hadiths relatifs
                  à la santé et les analyse à la lumière des connaissances médicales de
                  son époque.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran lui-même mentionne des éléments à valeur thérapeutique : le miel
                  (&laquo;&nbsp;en sort une boisson aux couleurs variées, dans laquelle il y a
                  une guérison pour les gens&nbsp;&raquo;, sourate An-Nahl, 69), l&apos;olivier
                  (&laquo;&nbsp;un arbre béni&nbsp;&raquo;, sourate An-Nur, 35), et la figue
                  et l&apos;olive (sourate At-Tin, 1).
                </p>

                <HadithCard
                  arabic="تَدَاوَوْا عِبَادَ اللَّهِ فَإِنَّ اللَّهَ لَمْ يَضَعْ دَاءً إِلَّا وَضَعَ لَهُ دَوَاءً"
                  text="Soignez-vous, serviteurs de Dieu, car Dieu n'a pas créé de maladie sans avoir créé son remède."
                  source="Hadith rapporté par Abu Dawud et at-Tirmidhi"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith résume l&apos;approche islamique de la santé : se soigner est
                  non seulement permis mais encouragé. Le croyant est invité à prendre soin
                  de son corps, qui lui est confié comme un dépôt (<em>amana</em>), tout
                  en sachant que la guérison vient de Dieu seul.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg"
                    alt="Dattes, chapelet et Coran disposés pour le ramadan, symboles de la médecine prophétique"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Les grands remèdes */}
              {/* ============================================ */}
              <section id="grands-remedes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les grands remèdes prophétiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Certains remèdes reviennent fréquemment dans les hadiths. Voici les
                  principaux, avec les textes qui les mentionnent et les usages qui en
                  découlent.
                </p>

                {/* Nigelle */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    La graine de nigelle (<em>habba sawda</em>)
                  </h3>
                  <HadithCard
                    arabic="عَلَيْكُمْ بِهَذِهِ الْحَبَّةِ السَّوْدَاءِ فَإِنَّ فِيهَا شِفَاءً مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ"
                    text="Utilisez cette graine noire, car elle contient un remède contre toute maladie, sauf la mort."
                    source="Hadith rapporté par al-Bukhari et Muslim"
                  />
                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    La graine de nigelle (<em>Nigella sativa</em>), aussi appelée
                    &laquo;&nbsp;cumin noir&nbsp;&raquo; ou &laquo;&nbsp;habba sawda&nbsp;&raquo;,
                    est le remède prophétique le plus célèbre. Des études scientifiques
                    modernes ont confirmé ses propriétés anti-inflammatoires, antioxydantes,
                    antimicrobiennes et immunomodulatrices, principalement grâce à son
                    composé actif : la thymoquinone.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Usages courants :</strong> en graines broyées (une cuillère à
                    café par jour), en huile (quelques gouttes dans du miel), en gélules.
                    Se consomme à jeun pour un effet optimal.
                  </p>
                </div>

                {/* Miel */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le miel
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Le Coran présente le miel comme porteur de guérison : &laquo;&nbsp;De
                    leur ventre sort une boisson aux couleurs variées, dans laquelle il y a
                    une guérison pour les gens&nbsp;&raquo; (sourate An-Nahl, verset 69).
                    Le Prophète ﷺ consommait régulièrement du miel et le recommandait
                    pour les troubles digestifs.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Usages courants :</strong> une cuillère à jeun diluée dans de
                    l&apos;eau tiède, en application locale sur les brûlures et les plaies,
                    mélangé à la nigelle ou au gingembre. Les variétés les plus prisées
                    sont le miel de jujubier (<em>sidr</em>), le miel de manuka et le
                    miel de thym.
                  </p>
                </div>

                {/* Hijama */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    La hijama (ventouses)
                  </h3>
                  <HadithCard
                    arabic="إِنَّ أَمْثَلَ مَا تَدَاوَيْتُمْ بِهِ الْحِجَامَةُ"
                    text="Le meilleur de vos remèdes est la hijama."
                    source="Hadith rapporté par al-Bukhari"
                  />
                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    La hijama (<em>cupping therapy</em>) est une pratique ancestrale qui
                    consiste à appliquer des ventouses sur des points précis du corps,
                    suivie de légères incisions superficielles. Le Prophète ﷺ l&apos;a
                    pratiquée lui-même à plusieurs reprises et l&apos;a recommandée pour
                    divers maux : maux de tête, douleurs dorsales et troubles généraux.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Précaution :</strong> la hijama doit être pratiquée par un
                    praticien formé, avec du matériel stérile et dans des conditions
                    d&apos;hygiène irréprochables. Elle est déconseillée pour certaines
                    personnes (troubles de la coagulation, femmes enceintes).
                  </p>
                </div>

                {/* Huile d'olive */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    L&apos;huile d&apos;olive
                  </h3>
                  <HadithCard
                    arabic="كُلُوا الزَّيْتَ وَادَّهِنُوا بِهِ فَإِنَّهُ مِنْ شَجَرَةٍ مُبَارَكَةٍ"
                    text="Mangez de l'huile d'olive et enduisez-vous-en, car elle provient d'un arbre béni."
                    source="Hadith rapporté par at-Tirmidhi et Ibn Majah"
                  />
                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    L&apos;olivier est mentionné à plusieurs reprises dans le Coran comme
                    un arbre béni. L&apos;huile d&apos;olive extra-vierge est reconnue
                    pour ses bienfaits cardiovasculaires, ses propriétés antioxydantes
                    et anti-inflammatoires. Elle est riche en acide oléique, en
                    polyphénols et en vitamine E.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Usages courants :</strong> en cuisine (à froid ou en cuisson
                    douce), en application sur la peau et les cheveux, en gargarisme pour
                    l&apos;hygiène buccale.
                  </p>
                </div>

                {/* Dattes */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Les dattes
                  </h3>
                  <HadithCard
                    arabic="مَنْ تَصَبَّحَ بِسَبْعِ تَمَرَاتٍ عَجْوَةٍ لَمْ يَضُرَّهُ ذَلِكَ الْيَوْمَ سُمٌّ وَلَا سِحْرٌ"
                    text="Celui qui mange le matin sept dattes 'ajwa, ni le poison ni la sorcellerie ne lui nuiront ce jour-là."
                    source="Hadith rapporté par al-Bukhari et Muslim"
                  />
                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Les dattes étaient l&apos;aliment de base du Prophète ﷺ et de ses
                    compagnons. Riches en fibres, en potassium, en magnésium et en
                    sucres naturels rapidement assimilables, elles sont particulièrement
                    recommandées pour rompre le jeûne du Ramadan. La variété
                    &laquo;&nbsp;ajwa&nbsp;&raquo; de Médine est la plus citée dans les
                    hadiths.
                  </p>
                </div>

                {/* Autres remèdes */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Autres remèdes mentionnés dans la Sunna
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">Costus marin (<em>al-qist al-hindi</em>)</p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Recommandé par le Prophète ﷺ pour les inflammations de la gorge et
                      la pleurésie. Utilisé en fumigation, en infusion ou en huile.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">Talbina (bouillie d&apos;orge)</p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Le Prophète ﷺ la recommandait pour le malade et la personne en deuil.
                      Elle &laquo;&nbsp;réconforte le cœur du malade et emporte une partie
                      de son chagrin&nbsp;&raquo; (al-Bukhari).
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">Henné</p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Utilisé en application locale pour les brûlures, les irritations
                      cutanées et les maux de tête. Le Prophète ﷺ le recommandait comme
                      teinture et comme soin.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">Eau de Zamzam</p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Eau de la source sacrée à La Mecque. Le Prophète ﷺ a dit :
                      &laquo;&nbsp;L&apos;eau de Zamzam est pour ce pourquoi elle est
                      bue&nbsp;&raquo; (rapporté par Ahmad et Ibn Majah).
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">Séné (<em>sana makki</em>)</p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Plante laxative recommandée par le Prophète ﷺ. Utilisée en infusion
                      pour soulager la constipation et purifier le système digestif.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">Vinaigre</p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Le Prophète ﷺ a dit : &laquo;&nbsp;Le meilleur des condiments est
                      le vinaigre&nbsp;&raquo; (rapporté par Muslim). Utilisé en
                      assaisonnement et pour ses propriétés digestives.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Par problème de santé */}
              {/* ============================================ */}
              <section id="par-probleme" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Remèdes par problème de santé
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les remèdes prophétiques et arabes peuvent être regroupés par type de
                  problème. Consultez nos articles détaillés ci-dessous pour chaque
                  situation.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { href: "/remede-yeux-islam-soins", label: "Soins des yeux (kohl, miel, nigelle)" },
                    { href: "/remede-arabe-endometriose", label: "Endométriose (nigelle, hijama)" },
                    { href: "/alopecie-remede-islam", label: "Alopécie et chute de cheveux" },
                    { href: "/remede-arabe-acouphene", label: "Acouphènes et bourdonnements" },
                    { href: "/psoriasis-remede-arabe", label: "Psoriasis et soins de la peau" },
                    { href: "/remede-arabe-arreter-fumer", label: "Arrêter de fumer" },
                    { href: "/remede-arabe-constipation", label: "Constipation (séné, dattes)" },
                    { href: "/remede-arabe-hemorroides", label: "Hémorroïdes" },
                    { href: "/remede-arabe-toux-soins-naturels", label: "Toux (miel, costus marin)" },
                    { href: "/remede-angoisse-islam", label: "Angoisse et anxiété" },
                    { href: "/remede-arabe-grossesse", label: "Grossesse et soins naturels" },
                    { href: "/remede-arabe-maigrir-islam", label: "Maigrir selon la Sunna" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary">{link.label}</span>
                    </Link>
                  ))}
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Les grandes catégories
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {remedyCategories.map((cat) => (
                    <div
                      key={cat.title}
                      className="group flex flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-secondary/10 group-hover:text-secondary">
                        {cat.icon}
                      </div>
                      <h3 className="text-lg font-bold text-primary transition-colors group-hover:text-secondary">
                        {cat.title}
                      </h3>
                      <ul className="mt-3 space-y-1">
                        {cat.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-foreground-secondary">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 overflow-hidden rounded-xl">
                  <Image
                    src="/images/calligraphie-allah-islam-coeur-bois.jpg"
                    alt="Calligraphie du nom d'Allah sur bois, symbole de la guérison par la foi en islam"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Guérison spirituelle */}
              {/* ============================================ */}
              <section id="guerison-spirituelle" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La guérison spirituelle en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  En islam, la guérison ne se limite pas au corps. La dimension spirituelle
                  est considérée comme indissociable de la santé physique. Le Coran
                  lui-même est présenté comme une guérison :
                </p>

                <HadithCard
                  text="Nous faisons descendre du Coran ce qui est une guérison et une miséricorde pour les croyants."
                  source="Sourate Al-Isra, verset 82"
                />

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La roqya légitime (<em>ar-ruqya ash-shar&apos;iyya</em>)
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  La roqya désigne la récitation de versets du{" "}
                  <Link href="/apprendre-le-coran" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    Coran
                  </Link>{" "}
                  et d&apos;invocations prophétiques sur une personne malade, dans le but
                  de chercher la guérison auprès de Dieu. Le Prophète ﷺ l&apos;a pratiquée
                  et autorisée à condition qu&apos;elle remplisse trois critères :
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>Utiliser les paroles de Dieu (Coran) ou Ses noms et attributs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>Être en{" "}
                      <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                        langue arabe
                      </Link>{" "}
                      ou dans une langue comprise
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>Croire que la guérison vient de Dieu seul, pas des mots eux-mêmes</span>
                  </li>
                </ul>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les sourates et versets les plus récités dans la roqya sont : Al-Fatiha,
                  les trois dernières sourates (Al-Ikhlas, Al-Falaq, An-Nas), le verset
                  du Trône (Ayat al-Kursi, al-Baqara 255), et les derniers versets de la
                  sourate al-Baqara.
                </p>

                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-6 py-5">
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-amber-800">Mise en garde</p>
                      <p className="mt-1 text-sm leading-relaxed text-amber-700">
                        Toute pratique impliquant des talismans, des incantations
                        incompréhensibles, de la sorcellerie ou l&apos;invocation
                        d&apos;entités autres que Dieu est strictement interdite en islam.
                        Ces pratiques relèvent du charlatanisme et sont contraires à la
                        roqya légitime.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les invocations de guérison
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète ﷺ a enseigné plusieurs invocations à réciter pour le malade.
                  En voici les principales :
                </p>

                <div className="mt-4 space-y-4">
                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                      أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ وَاشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Ôte le mal, Seigneur des hommes, et guéris. Tu es Celui qui
                      guérit, il n&apos;y a de guérison que Ta guérison, une guérison qui ne
                      laisse aucune maladie.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par al-Bukhari et Muslim.
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                      بِسْمِ اللَّهِ أَرْقِيكَ مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ اللَّهُ يَشْفِيكَ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Au nom de Dieu, je te fais la roqya contre tout ce qui te
                      nuit, contre le mal de toute âme ou œil envieux. Que Dieu te
                      guérisse.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par Muslim.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les{" "}
                  <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    rêves
                  </Link>{" "}
                  peuvent parfois indiquer la présence d&apos;un mal spirituel (mauvais
                  œil, envie) ou orienter vers un remède. La récitation du Coran avant
                  de dormir est à la fois un acte de protection et de guérison.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Précautions */}
              {/* ============================================ */}
              <section id="precautions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Précautions et bon usage
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La médecine prophétique est un héritage précieux, mais son usage demande
                  discernement et responsabilité. Voici les principes à respecter.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">1</span>
                    <div>
                      <h3 className="font-semibold text-primary">Ne jamais abandonner un traitement médical</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les remèdes prophétiques sont un complément, jamais un remplacement.
                        Arrêter un traitement prescrit par un médecin au profit d&apos;un
                        remède traditionnel peut avoir des conséquences graves. L&apos;islam
                        encourage le recours à la médecine moderne — elle fait partie des
                        moyens que Dieu a mis à disposition.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">2</span>
                    <div>
                      <h3 className="font-semibold text-primary">Vérifier les interactions médicamenteuses</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Certains remèdes naturels peuvent interagir avec des médicaments.
                        La nigelle, par exemple, peut potentialiser les effets des
                        anticoagulants. Le miel peut affecter la glycémie chez les
                        diabétiques. Informez toujours votre médecin des compléments que
                        vous prenez.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">3</span>
                    <div>
                      <h3 className="font-semibold text-primary">Se méfier des charlatans</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Certaines personnes exploitent la confiance des croyants en vendant
                        des &laquo;&nbsp;remèdes miracles&nbsp;&raquo; à des prix exorbitants
                        ou en pratiquant une fausse roqya. Un vrai praticien n&apos;utilise
                        que le Coran et les invocations authentiques, ne demande pas de sommes
                        démesurées, et ne prétend jamais guérir par sa propre force.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">4</span>
                    <div>
                      <h3 className="font-semibold text-primary">Respecter les dosages</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Même les remèdes naturels peuvent être nocifs en excès. La nigelle,
                        consommée en quantités excessives, peut causer des irritations
                        gastriques. Le séné, pris trop fréquemment, peut entraîner une
                        dépendance intestinale. La modération est un principe islamique
                        qui s&apos;applique aussi aux remèdes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">5</span>
                    <div>
                      <h3 className="font-semibold text-primary">Choisir des produits de qualité</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La qualité du produit conditionne son efficacité. Privilégiez les
                        huiles de nigelle pressées à froid, le miel pur et non chauffé,
                        l&apos;huile d&apos;olive extra-vierge et les dattes issues de
                        sources fiables. Les produits contrefaits ou altérés sont inefficaces,
                        voire dangereux.
                      </p>
                    </div>
                  </div>
                </div>

                <MedicalDisclaimer />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">Sur le même sujet</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Comprendre l&apos;islam
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Interprétation des rêves
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Réciter le Coran
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    La langue arabe
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
