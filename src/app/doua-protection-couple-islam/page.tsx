import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua de protection du couple en islam : invocations pour préserver votre mariage",
  description:
    "Découvrez les douas de protection du couple en islam : invocations authentiques en arabe avec phonétique et traduction pour préserver l'harmonie conjugale, protéger votre mariage contre le Shaytan et renforcer l'amour et la miséricorde entre époux.",
  openGraph: {
    title:
      "Doua de protection du couple en islam : invocations pour préserver votre mariage",
    description:
      "Les invocations authentiques pour protéger le couple en islam : douas coraniques et prophétiques en arabe, phonétique et traduction pour l'harmonie conjugale.",
    url: "https://www.islamreligion.fr/doua-protection-couple-islam",
    images: [
      {
        url: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-protection-couple-islam",
  },
};

const tocItems = [
  { id: "couple-en-islam", label: "Le couple en islam : un lien sacré" },
  { id: "doua-qurrata-ayun", label: "Doua Qurrata A'yun (Coran 25:74)" },
  { id: "doua-mawaddah-rahmah", label: "Doua pour la mawaddah et la rahmah" },
  { id: "protection-shaytan", label: "Protection contre le Shaytan" },
  { id: "doua-nuit-noces", label: "Doua de la nuit de noces" },
  { id: "doua-patience-amour", label: "Doua pour la patience et l'amour" },
  { id: "conseils-pratiques", label: "Conseils pratiques pour le couple" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua pour protéger son couple en islam ?",
    answer:
      "La doua la plus recommandée pour protéger son couple est celle mentionnée dans le Coran (sourate Al-Furqan, 25:74) : « Rabbana hab lana min azwajina wa dhurriyyatina qurrata a&apos;yunin wa-j&apos;alna lil-muttaqina imama » (Seigneur, accorde-nous en nos épouses et nos descendants la joie des yeux, et fais de nous un modèle pour les pieux). Cette invocation englobe la demande d&apos;harmonie conjugale, de descendance vertueuse et de piété.",
  },
  {
    question: "Comment protéger son mariage du mauvais oeil et du Shaytan ?",
    answer:
      "Pour protéger son mariage du mauvais oeil et du Shaytan, il est recommandé de réciter les sourates protectrices (Al-Falaq et An-Nas) quotidiennement, de prononcer « Bismillah » avant les rapports intimes, de mentionner le nom d&apos;Allah fréquemment au sein du foyer et d&apos;éviter d&apos;exposer les détails de sa vie conjugale aux autres. Le Prophète (paix et salut sur lui) a enseigné que le Shaytan tente activement de séparer les couples.",
  },
  {
    question: "Peut-on faire une doua pour sauver son couple en difficulté ?",
    answer:
      "Oui, la doua est l&apos;une des premières démarches recommandées lorsqu&apos;un couple traverse des difficultés. En plus des invocations spécifiques, il est conseillé de prier la salat al-hajah (prière du besoin), de multiplier l&apos;istighfar (demande de pardon) et de faire preuve de patience. La doua doit cependant s&apos;accompagner d&apos;efforts concrets : dialogue, compromis, et si nécessaire, recours à un médiateur ou un conseiller conjugal.",
  },
  {
    question: "Quelle doua réciter le soir du mariage (nuit de noces) ?",
    answer:
      "Le Prophète (paix et salut sur lui) a enseigné la doua suivante pour la nuit de noces : « Allahumma inni as&apos;aluka khayraha wa khayra ma jabaltaha alayh, wa a&apos;udhu bika min sharriha wa sharri ma jabaltaha alayh » (O Allah, je Te demande son bien et le bien de ce sur quoi Tu l&apos;as créée, et je cherche refuge auprès de Toi contre son mal et le mal de ce sur quoi Tu l&apos;as créée). Ce hadith est rapporté par Abu Dawud et Ibn Majah.",
  },
  {
    question: "Le Coran parle-t-il de la protection du couple ?",
    answer:
      "Oui, le Coran accorde une grande importance à la protection et à l&apos;harmonie du couple. Le verset le plus célèbre est celui de la sourate Ar-Rum (30:21) : « Et parmi Ses signes, Il a créé de vous, pour vous, des épouses pour que vous viviez en tranquillité avec elles et Il a mis entre vous de l&apos;affection (mawaddah) et de la miséricorde (rahmah). » Ce verset montre que le couple est un signe divin fondé sur l&apos;amour et la miséricorde.",
  },
  {
    question: "Comment renforcer l'amour dans le couple selon la Sunna ?",
    answer:
      "La Sunna offre de nombreux conseils pour renforcer l&apos;amour conjugal : échanger des paroles douces, offrir des cadeaux (le Prophète a dit « Offrez-vous des cadeaux, vous vous aimerez »), prier ensemble, réciter le Coran au sein du foyer, partager les tâches ménagères comme le faisait le Prophète (paix et salut sur lui), et exprimer régulièrement sa gratitude envers son conjoint.",
  },
  {
    question: "Peut-on faire la doua de protection du couple en français ?",
    answer:
      "Oui, il est tout à fait permis de faire la doua de protection du couple en français ou dans toute autre langue. Allah comprend toutes les langues et répond à l&apos;invocation sincère de Ses serviteurs. Toutefois, il est recommandé d&apos;apprendre les douas prophétiques en arabe pour bénéficier de leur barakah particulière, tout en comprenant leur sens grâce à la traduction.",
  },
  {
    question: "Quand faut-il réciter les douas de protection du couple ?",
    answer:
      "Les douas de protection du couple peuvent être récitées à tout moment, mais certains instants sont particulièrement propices : au dernier tiers de la nuit, lors de la prosternation (sujud), après les prières obligatoires, le vendredi et entre l&apos;adhan et l&apos;iqama. Il est également recommandé de les réciter quotidiennement dans les adhkar du matin et du soir pour maintenir une protection constante sur le foyer.",
  },
];

export default function DouaProtectionCoupleIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-protection-couple-islam/#article",
        headline:
          "Doua de protection du couple en islam : invocations pour préserver votre mariage",
        description:
          "Découvrez les douas de protection du couple en islam : invocations authentiques en arabe avec phonétique et traduction pour préserver l'harmonie conjugale et protéger votre mariage.",
        image: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        datePublished: "2026-04-11",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-protection-couple-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-protection-couple-islam/#breadcrumb",
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
            name: "Doua en islam",
            item: "https://www.islamreligion.fr/doua-islam",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Doua de protection du couple",
            item: "https://www.islamreligion.fr/doua-protection-couple-islam",
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
          title="Doua de protection du couple en islam : invocations pour préserver votre mariage"
          subtitle="Les invocations authentiques tirées du Coran et de la Sunna pour protéger votre couple, renforcer l'amour conjugal et éloigner le Shaytan de votre foyer. Textes en arabe, phonétique et traduction."
          imageSrc="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
          imageAlt="Mains jointes en invocation doua de protection du couple avec lumière subtile symbolisant l'amour et la miséricorde en islam"
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
                <Link href="/doua-islam" className="hover:text-primary">
                  Doua en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Doua de protection du couple</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le couple occupe une place centrale en islam : il est décrit
                  comme un signe d&apos;Allah fondé sur la mawaddah (affection)
                  et la rahmah (miséricorde). Protéger cette union sacrée passe
                  par des invocations authentiques issues du Coran et de la Sunna,
                  la mention constante d&apos;Allah au sein du foyer et la mise
                  en pratique des enseignements prophétiques. Cet article vous
                  présente les douas essentielles pour préserver votre couple,
                  éloigner le Shaytan et renforcer l&apos;amour entre époux.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le couple en islam */}
              {/* ============================================ */}
              <section id="couple-en-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le couple en islam : un lien sacré à protéger
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mariage en islam n&apos;est pas un simple contrat social :
                  c&apos;est un acte d&apos;adoration, un signe divin et un
                  engagement sacré. Allah a fait du couple l&apos;une des
                  manifestations les plus profondes de Sa sagesse et de Sa
                  miséricorde. Le verset fondateur de la sourate Ar-Rum
                  (30:21) résume cette réalité avec une éloquence
                  remarquable.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Wa min ayatihi an khalaqa lakum min anfusikum azwajan litaskunou ilayha wa ja&apos;ala baynakum mawaddatan wa rahmah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Et parmi Ses signes, Il a créé de vous, pour
                    vous, des épouses pour que vous viviez en tranquillité
                    avec elles et Il a mis entre vous de l&apos;affection
                    (mawaddah) et de la miséricorde (rahmah)&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ar-Rum (30:21)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce verset révèle trois piliers fondamentaux du couple en
                  islam. Le premier est la sakina, la tranquillité et la
                  sérénité que chaque conjoint doit trouver auprès de
                  l&apos;autre. Le deuxième est la mawaddah, l&apos;affection
                  profonde et l&apos;amour sincère qui lie les deux époux.
                  Le troisième est la rahmah, la miséricorde et la compassion
                  qui permettent de surmonter les épreuves et de pardonner les
                  imperfections de l&apos;autre. Lorsque ces trois éléments
                  sont présents, le couple devient véritablement un signe
                  d&apos;Allah sur terre.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a incarné le
                  modèle parfait du conjoint bienveillant. Il aidait ses
                  épouses dans les tâches domestiques, les consultait dans les
                  décisions importantes, plaisantait avec elles et ne
                  levait jamais la main sur aucune d&apos;entre elles.
                  Aisha (qu&apos;Allah soit satisfait d&apos;elle) rapporte
                  qu&apos;il était au service de sa famille lorsqu&apos;il
                  était chez lui, et que lorsque l&apos;heure de la prière
                  arrivait, il sortait pour la prière (al-Bukhari).
                </p>

                <HadithCard
                  arabic="خيركم خيركم لأهله وأنا خيركم لأهلي"
                  text="Les meilleurs d'entre vous sont ceux qui sont les meilleurs envers leurs épouses, et je suis le meilleur d'entre vous envers les miennes."
                  source="Rapporté par at-Tirmidhi (3895), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith établit un critère de valeur remarquable : la
                  bonté envers son conjoint est le signe de la véritable
                  noblesse de caractère en islam. Le Prophète (paix et salut
                  sur lui) n&apos;a pas dit que les meilleurs sont ceux qui
                  prient le plus ou qui jeûnent le plus, mais ceux qui traitent
                  le mieux leur famille. Cette priorité montre à quel point
                  la relation conjugale est centrale dans la spiritualité
                  islamique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La sakina :</strong> le couple est un refuge de
                      paix et de tranquillité où chaque conjoint trouve le
                      repos du coeur et de l&apos;esprit.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La mawaddah :</strong> l&apos;affection profonde
                      et l&apos;amour sincère sont un don d&apos;Allah qui se
                      cultive par les bonnes actions et les douas.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La rahmah :</strong> la miséricorde permet de
                      traverser les épreuves, de pardonner et de grandir
                      ensemble dans la foi. Découvrez notre{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">guide complet des douas en islam</Link>{" "}
                      pour approfondir vos invocations quotidiennes.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en invocation avec rayons dorés symbolisant la doua de protection du couple en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua Qurrata A'yun */}
              {/* ============================================ */}
              <section id="doua-qurrata-ayun" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua Qurrata A&apos;yun : l&apos;invocation coranique pour le couple (25:74)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les douas les plus puissantes pour la protection du
                  couple figure l&apos;invocation des serviteurs du
                  Tout-Miséricordieux mentionnée dans la sourate Al-Furqan.
                  Cette doua est récitée par les croyants sincères qui
                  aspirent à un foyer épanoui, une descendance vertueuse et
                  un rang élevé auprès d&apos;Allah.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana hab lana min azwajina wa dhurriyyatina qurrata a&apos;yunin wa-j&apos;alna lil-muttaqina imama
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-nous en nos épouses et nos
                    descendants la joie des yeux, et fais de nous un modèle
                    pour les pieux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Furqan (25:74)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;expression &laquo;&nbsp;qurrata a&apos;yun&nbsp;&raquo;
                  (joie des yeux, littéralement &laquo;&nbsp;fraîcheur des
                  yeux&nbsp;&raquo;) est d&apos;une richesse sémantique
                  considérable en arabe. Elle désigne la joie si profonde
                  qu&apos;elle apaise le regard et rafraîchit le coeur. Les
                  exégètes expliquent que cette expression implique un bonheur
                  complet et durable, celui que l&apos;on éprouve en voyant
                  son conjoint et ses enfants suivre le chemin de la piété
                  et de la rectitude.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Kathir, dans son tafsir, commente ce verset en
                  expliquant que les serviteurs du Tout-Miséricordieux
                  demandent à Allah que leurs conjoints et leurs enfants
                  soient obéissants à Allah, afin que leur regard soit
                  réjoui en les voyant pratiquer l&apos;islam avec sincérité.
                  Cette doua ne demande pas seulement l&apos;harmonie
                  conjugale au sens affectif, mais vise un objectif plus
                  élevé : un foyer bâti sur la taqwa (crainte révérencielle
                  d&apos;Allah) et orienté vers l&apos;agrément divin.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La deuxième partie de l&apos;invocation,
                  &laquo;&nbsp;wa-j&apos;alna lil-muttaqina
                  imama&nbsp;&raquo; (fais de nous un modèle pour les
                  pieux), élève encore davantage l&apos;ambition spirituelle.
                  Le couple musulman ne se contente pas de vivre sa foi en
                  privé : il aspire à devenir un exemple pour la communauté,
                  un phare de piété et de bonté qui inspire les autres
                  familles. Cette dimension collective donne au couple une
                  responsabilité qui dépasse le cadre domestique et le
                  projette dans un rôle de leadership spirituel.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Récitation quotidienne :</strong> les savants
                      recommandent de réciter cette doua régulièrement, en
                      particulier après les prières obligatoires et lors des
                      moments d&apos;intimité spirituelle avec Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pour les célibataires aussi :</strong> cette doua
                      peut être récitée par ceux qui cherchent un conjoint
                      pieux, en anticipant la bénédiction d&apos;Allah sur
                      leur futur foyer. Si vous êtes dans cette situation,
                      consultez notre article sur la{" "}
                      <Link href="/doua-trouver-mari-femme-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour trouver un mari ou une femme en islam</Link>.
                    </span>
                  </li>
                </ul>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Mawaddah et Rahmah */}
              {/* ============================================ */}
              <section id="doua-mawaddah-rahmah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour la mawaddah et la rahmah entre époux
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La mawaddah (affection profonde) et la rahmah (miséricorde)
                  sont les deux piliers émotionnels du couple en islam. Ces
                  deux qualités ne sont pas seulement des sentiments
                  naturels : elles sont un don d&apos;Allah qu&apos;il
                  convient de préserver par l&apos;invocation, la gratitude
                  et les bonnes actions. Plusieurs douas prophétiques
                  permettent de demander à Allah de renforcer ces liens
                  précieux entre les conjoints.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا وَاهْدِنَا سُبُلَ السَّلَامِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma allif bayna qulubina wa aslih dhata baynina wa-hdina subula s-salam
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;O Allah, réconcilie nos coeurs, améliore nos
                    relations mutuelles et guide-nous sur les chemins de la
                    paix&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (969), authentifié
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est particulièrement adaptée au couple car
                  elle demande trois choses essentielles à l&apos;harmonie
                  conjugale. Premièrement, la réconciliation des coeurs
                  (ta&apos;lif al-qulub), qui est la base de tout amour
                  durable. Deuxièmement, l&apos;amélioration des relations
                  mutuelles (islah dhat al-bayn), qui couvre la résolution
                  des conflits, la communication et le respect mutuel.
                  Troisièmement, la guidance vers les chemins de la paix
                  (subul as-salam), qui oriente le couple vers des choix
                  qui apportent sérénité et bénédiction.
                </p>

                <HadithCard
                  arabic="تهادوا تحابوا"
                  text="Offrez-vous des cadeaux, vous vous aimerez."
                  source="Rapporté par al-Bukhari dans al-Adab al-Mufrad (594)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que l&apos;amour conjugal se
                  nourrit de gestes concrets autant que de douas. Le
                  Prophète (paix et salut sur lui) était attentionné envers
                  ses épouses : il les appelait par des surnoms
                  affectueux, partageait les repas avec elles, les
                  accompagnait lors de certains voyages et prenait soin de
                  leur bonheur au quotidien. Ces pratiques prophétiques,
                  combinées aux invocations régulières, créent un
                  environnement propice à la mawaddah et à la rahmah.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّهَا وَحُبَّ مَنْ يُحِبُّهَا وَحُبَّ عَمَلٍ يُقَرِّبُنِي إِلَى حُبِّهَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka hubbaha wa hubba man yuhibbuha wa hubba &apos;amalin yuqarribuni ila hubbiha
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;O Allah, je Te demande son amour, l&apos;amour
                    de ceux qui l&apos;aiment et l&apos;amour de toute action
                    qui me rapproche de son amour&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Inspirée du hadith rapporté par at-Tirmidhi (3490)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette structure de doua, que le Prophète (paix et salut
                  sur lui) utilisait pour demander l&apos;amour du bien, peut
                  être adaptée pour demander l&apos;amour de son conjoint et
                  la consolidation du lien conjugal. Elle enseigne que
                  l&apos;amour véritable en islam n&apos;est pas seulement
                  un sentiment passif, mais une quête active qui passe par
                  des actions concrètes et des invocations sincères. Pour
                  approfondir les invocations liées au{" "}
                  <Link href="/doua-mariage-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">mariage en islam</Link>,
                  consultez notre article dédié.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Protection contre le Shaytan */}
              {/* ============================================ */}
              <section id="protection-shaytan" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Protéger son couple contre le Shaytan : douas et pratiques prophétiques
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Shaytan (Satan) considère la destruction du couple
                  comme l&apos;une de ses plus grandes victoires. Le Prophète
                  (paix et salut sur lui) a clairement averti la communauté
                  musulmane que le Shaytan déploie des efforts considérables
                  pour semer la discorde entre les époux. Comprendre cette
                  réalité et connaître les moyens de s&apos;en protéger est
                  essentiel pour tout couple musulman.
                </p>

                <HadithCard
                  arabic="إن إبليس يضع عرشه على الماء ثم يبعث سراياه فأدناهم منه منزلة أعظمهم فتنة يجيء أحدهم فيقول فعلت كذا وكذا فيقول ما صنعت شيئا ثم يجيء أحدهم فيقول ما تركته حتى فرقت بينه وبين امرأته فيدنيه منه ويقول نعم أنت"
                  text="Iblis installe son trône sur l'eau, puis envoie ses troupes. Le plus rapproché de lui en rang est celui qui cause le plus de fitna. L'un d'eux vient et dit : 'J'ai fait ceci et cela.' Il répond : 'Tu n'as rien fait.' Puis un autre vient et dit : 'Je ne l'ai pas quitté jusqu'à ce que j'aie séparé l'homme de sa femme.' Alors Iblis le rapproche de lui et dit : 'Oui, toi (tu as bien agi).'"
                  source="Rapporté par Muslim (2813)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est d&apos;une gravité considérable. Il révèle
                  que la séparation du couple est la mission la plus
                  valorisée dans l&apos;armée du Shaytan. Cela montre
                  combien l&apos;union conjugale est précieuse aux yeux
                  d&apos;Allah et combien elle est ciblée par les forces
                  du mal. Plusieurs moyens de protection existent pour
                  contrer ces attaques insidieuses.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter Bismillah avant les rapports intimes
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné que
                        celui qui dit &laquo;&nbsp;Bismillah, Allahumma
                        jannibnash-shaytana wa jannibish-shaytana ma
                        razaqtana&nbsp;&raquo; (Au nom d&apos;Allah. O Allah,
                        éloigne de nous le Shaytan et éloigne le Shaytan de
                        ce que Tu nous accorderas) avant les rapports, si un
                        enfant est conçu, le Shaytan ne lui nuira jamais
                        (al-Bukhari, 5165).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter sourate Al-Baqara dans le foyer
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a dit :
                        &laquo;&nbsp;Ne faites pas de vos maisons des
                        tombeaux. Le Shaytan fuit la maison dans laquelle
                        sourate Al-Baqara est récitée&nbsp;&raquo; (Muslim,
                        780). Réciter cette sourate régulièrement dans le
                        foyer conjugal crée une barrière spirituelle contre
                        les tentations diaboliques.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les adhkar du matin et du soir
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les invocations matinales et vespérales constituent
                        un bouclier quotidien pour le couple. En particulier,
                        la récitation d&apos;Ayat al-Kursi (Coran 2:255),
                        des trois dernières sourates du Coran (Al-Ikhlas,
                        Al-Falaq, An-Nas) et des formules de dhikr
                        prophétiques protègent chaque conjoint et le foyer
                        tout entier.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas divulguer les secrets du couple
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a interdit de
                        divulguer l&apos;intimité conjugale. Partager les
                        détails de sa vie de couple avec des tiers ouvre la
                        porte au mauvais oeil, à la jalousie et aux
                        interventions nuisibles qui peuvent détruire
                        l&apos;harmonie du foyer.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains en prière et invocation en islam pour la protection du couple et du foyer"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua de la nuit de noces */}
              {/* ============================================ */}
              <section id="doua-nuit-noces" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de la nuit de noces : bénir le début de la vie conjugale
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La nuit de noces est un moment fondateur dans la vie du
                  couple musulman. L&apos;islam a prévu des invocations
                  spécifiques pour ce moment afin de placer cette nouvelle
                  union sous la protection et la bénédiction d&apos;Allah
                  dès les premiers instants. Ces douas ne sont pas de
                  simples formalités : elles inscrivent le couple dans une
                  démarche spirituelle dès le commencement de leur vie
                  commune.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا جَبَلْتَهَا عَلَيْهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka khayraha wa khayra ma jabaltaha &apos;alayh, wa a&apos;udhu bika min sharriha wa sharri ma jabaltaha &apos;alayh
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;O Allah, je Te demande son bien et le bien
                    de ce sur quoi Tu l&apos;as créée, et je cherche refuge
                    auprès de Toi contre son mal et le mal de ce sur quoi Tu
                    l&apos;as créée&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (2160), Ibn Majah (1918)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua, prononcée par le mari en posant sa main sur
                  le front de son épouse, est un acte de tawakkul
                  (confiance en Allah) remarquable. Elle reconnaît que
                  chaque être humain possède des qualités et des défauts,
                  et demande à Allah de faire émerger le meilleur de
                  chaque conjoint tout en protégeant le couple des
                  aspects négatifs. Les savants recommandent de réciter
                  cette doua non seulement lors de la nuit de noces, mais
                  aussi chaque fois que le couple traverse une période
                  difficile.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En complément de cette invocation personnelle, les
                  proches et les invités du mariage sont encouragés à
                  invoquer pour les mariés avec la doua prophétique :
                  &laquo;&nbsp;Barakallahu laka wa baraka &apos;alayka wa
                  jama&apos;a baynakuma fi khayr&nbsp;&raquo; (Qu&apos;Allah
                  te bénisse, répande Sa bénédiction sur toi et unisse
                  votre couple dans le bien). Cette doua, rapportée par
                  at-Tirmidhi (1091), est la Sunna à suivre pour
                  féliciter les nouveaux mariés.
                </p>

                <HadithCard
                  arabic="بارك الله لك وبارك عليك وجمع بينكما في خير"
                  text="Qu'Allah te bénisse, répande Sa bénédiction sur toi et unisse votre couple dans le bien."
                  source="Rapporté par at-Tirmidhi (1091), Abu Dawud (2130)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette formule de félicitation prophétique remplace les
                  formules pré-islamiques qui contenaient parfois des
                  expressions inappropriées. Le Prophète (paix et salut
                  sur lui) a voulu que même les félicitations du mariage
                  soient une invocation adressée à Allah, un rappel que
                  la réussite du couple dépend avant tout de la
                  bénédiction divine. Chaque mot de cette doua porte une
                  signification profonde : la barakah (bénédiction)
                  d&apos;Allah est la clé de la prospérité, de la
                  longévité et du bonheur conjugal.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Patience et amour */}
              {/* ============================================ */}
              <section id="doua-patience-amour" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour la patience et l&apos;amour durable dans le couple
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Tout couple traverse des épreuves. Les désaccords, les
                  difficultés financières, les différences de caractère et
                  les tensions du quotidien peuvent fragiliser même les
                  unions les plus solides. L&apos;islam enseigne que la
                  patience (sabr) et l&apos;amour véritable ne sont pas des
                  sentiments passifs, mais des vertus actives qui se
                  cultivent par la doua, les efforts personnels et la
                  confiance en Allah.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana afrigh &apos;alayna sabran wa tawaffana muslimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, déverse sur nous la patience et
                    fais-nous mourir en état de soumission (à
                    Toi)&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-A&apos;raf (7:126)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le verbe &laquo;&nbsp;afrigh&nbsp;&raquo; (déverser)
                  utilisé dans cette doua est particulièrement éloquent.
                  Il ne s&apos;agit pas de demander une petite dose de
                  patience, mais un déversement complet, une inondation de
                  sabr qui submerge le coeur et le fortifie face à toutes
                  les épreuves. Pour le couple, cette doua est un remède
                  puissant contre l&apos;impatience, la colère et la
                  frustration qui sont les ennemis silencieux de toute
                  relation conjugale.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que
                  l&apos;amour durable se construit par des gestes simples
                  mais constants. Le regard bienveillant, la parole douce,
                  le sourire partagé, l&apos;écoute attentive et le pardon
                  répété sont les briques d&apos;un amour qui résiste au
                  temps. La doua accompagne ces efforts en demandant à
                  Allah de placer la barakah dans chaque interaction entre
                  les époux.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invoquer ensemble :</strong> le couple qui
                      invoque Allah ensemble renforce son lien spirituel et
                      affectif. La prière en commun et le dhikr partagé
                      créent une atmosphère de sérénité dans le foyer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas dormir en état de colère :</strong> les
                      savants recommandent de résoudre les conflits avant
                      la fin de la journée et de ne jamais laisser la rancune
                      s&apos;installer entre les conjoints.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Renouveler l&apos;intention :</strong> chaque
                      jour, renouveler l&apos;intention de plaire à Allah à
                      travers sa relation conjugale transforme les actes
                      quotidiens les plus simples en actes d&apos;adoration.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour trouver un mari ou une femme en islam"
                  description="Si vous êtes célibataire, découvrez les invocations authentiques pour demander à Allah un conjoint pieux et vertueux."
                  href="/doua-trouver-mari-femme-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour protéger son couple au quotidien
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua de protection du couple ne se limite pas aux
                  invocations verbales : elle s&apos;incarne dans un mode
                  de vie complet qui combine la dimension spirituelle et
                  les actions concrètes. Le Prophète (paix et salut sur
                  lui) nous a laissé un enseignement riche en conseils
                  pratiques pour maintenir l&apos;harmonie conjugale et
                  protéger le foyer musulman.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La communication bienveillante
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Coran ordonne de parler avec douceur
                      (&laquo;&nbsp;qawlan layyina&nbsp;&raquo;). Dans le
                      couple, la parole douce apaise les tensions, désamorce
                      les conflits et renforce le lien émotionnel. Éviter
                      les reproches constants, les critiques blessantes et
                      les mots prononcés sous l&apos;effet de la colère est
                      une forme de protection du couple.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La prière et le dhikr en commun
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Prier ensemble, réciter le Coran dans le foyer et
                      pratiquer le dhikr en couple sont des actes qui
                      renforcent la spiritualité commune. Le foyer où Allah
                      est mentionné régulièrement est protégé du Shaytan et
                      baigné dans la lumière divine.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le pardon et la miséricorde
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Aucun conjoint n&apos;est parfait. La capacité à
                      pardonner les erreurs de l&apos;autre et à faire
                      preuve de miséricorde est la clé d&apos;un amour
                      durable. Le Prophète (paix et salut sur lui) a dit
                      qu&apos;Allah n&apos;accorde Sa miséricorde qu&apos;à
                      ceux qui sont miséricordieux envers les autres
                      (al-Bukhari).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La protection de l&apos;intimité
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Protéger l&apos;intimité du couple est un devoir
                      islamique. Ne pas divulguer les secrets conjugaux, ne
                      pas se plaindre publiquement de son conjoint et
                      préserver la dignité de l&apos;autre en toute
                      circonstance sont des moyens essentiels de protection
                      du lien matrimonial.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, la protection du couple en islam repose sur un
                  équilibre entre les invocations sincères et les actions
                  quotidiennes inspirées de la Sunna. Chaque doua récitée
                  avec coeur, chaque geste de bonté envers son conjoint et
                  chaque effort pour maintenir la paix du foyer sont autant
                  de boucliers spirituels contre les épreuves et les
                  tentations. Le couple qui place Allah au centre de sa
                  relation trouve dans cette démarche une source
                  inépuisable de force, d&apos;amour et de sérénité.
                  Consultez également notre article sur la{" "}
                  <Link href="/doua-mariage-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du mariage en islam</Link>{" "}
                  pour découvrir les invocations liées à la cérémonie et
                  aux étapes du mariage.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Constance dans les douas :</strong> les
                      invocations de protection du couple doivent être
                      récitées quotidiennement, pas seulement en période
                      de crise.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Éviter les causes de discorde :</strong>{" "}
                      l&apos;ingérence de la belle-famille, la comparaison
                      avec d&apos;autres couples et le manque de
                      communication sont des facteurs de fragilisation
                      qu&apos;il faut combattre activement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Chercher l&apos;aide si nécessaire :</strong>{" "}
                      consulter un imam, un conseiller conjugal ou un
                      médiateur n&apos;est pas un signe de faiblesse mais
                      de sagesse. Le Prophète (paix et salut sur lui)
                      lui-même consultait ses épouses et ses compagnons
                      dans les décisions importantes.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter les douas de protection du couple avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles sur les invocations en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/doua-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en islam (guide complet)
                  </Link>
                  <Link
                    href="/doua-mariage-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du mariage
                  </Link>
                  <Link
                    href="/doua-trouver-mari-femme-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour trouver un conjoint
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/invocations-reussite-facilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Invocations pour la réussite
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages mères */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le même sujet
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Comprendre l&apos;islam
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
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
