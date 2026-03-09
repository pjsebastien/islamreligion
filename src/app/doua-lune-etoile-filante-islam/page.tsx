import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua en voyant la lune et l&apos;étoile filante en islam : invocations authentiques",
  description:
    "Découvrez la doua en voyant la lune en islam et la doua de l&apos;étoile filante : invocations authentiques en arabe avec phonétique et traduction, hadiths sur le croissant lunaire, observation de la lune au Ramadan et signes d&apos;Allah dans le ciel.",
  openGraph: {
    title:
      "Doua en voyant la lune et l&apos;étoile filante en islam : invocations authentiques",
    description:
      "Les invocations authentiques à réciter en voyant la lune et l&apos;étoile filante en islam : textes en arabe, phonétique, traduction et hadiths sur les signes célestes.",
    url: "https://www.islamreligion.fr/doua-lune-etoile-filante-islam",
    images: [
      {
        url: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-lune-etoile-filante-islam",
  },
};

const tocItems = [
  { id: "lune-en-islam", label: "La lune dans le Coran et la Sunna" },
  { id: "doua-croissant-lunaire", label: "Doua en voyant le croissant lunaire" },
  { id: "croissant-ramadan", label: "L&apos;observation du croissant au Ramadan" },
  { id: "doua-etoile-filante", label: "Doua en voyant une étoile filante" },
  { id: "signes-allah-ciel", label: "La lune et les astres : signes d&apos;Allah" },
  { id: "douas-invocations", label: "Douas en arabe, phonétique et traduction" },
  { id: "adab-observation", label: "Convenances lors de l&apos;observation du ciel" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua réciter en voyant la nouvelle lune en islam ?",
    answer:
      "La doua authentique à réciter en voyant le nouveau croissant lunaire est : « Allahumma ahillahu &apos;alayna bil-amni wal-iman, was-salamati wal-islam, rabbi wa rabbukAllah, hilalu rushdin wa khayr » qui signifie « Seigneur, fais que ce croissant se lève sur nous avec sécurité et foi, paix et soumission à Allah. Mon Seigneur et ton Seigneur est Allah, c&apos;est un croissant de droiture et de bien. » Ce hadith est rapporté par at-Tirmidhi et ad-Darimi.",
  },
  {
    question: "Peut-on faire une doua en voyant une étoile filante ?",
    answer:
      "Oui, selon certains avis de savants, l&apos;apparition d&apos;une étoile filante est un moment propice à l&apos;invocation. Bien qu&apos;il n&apos;existe pas de doua spécifique rapportée du Prophète (paix et salut sur lui) pour l&apos;étoile filante, les savants recommandent de profiter de cet instant pour invoquer Allah, car c&apos;est un moment de contemplation des merveilles de la création divine.",
  },
  {
    question: "Pourquoi la lune est-elle importante en islam ?",
    answer:
      "La lune occupe une place majeure en islam pour plusieurs raisons. Elle sert de base au calendrier hégirien (lunaire) qui détermine les mois islamiques, le début et la fin du Ramadan, les dates du Hajj et les jours de fête. Le Coran mentionne la lune à de nombreuses reprises comme signe de la puissance d&apos;Allah. La sourate Al-Qamar (la Lune) lui est entièrement dédiée, et le miracle de la fission de la lune y est mentionné.",
  },
  {
    question: "Comment observer le croissant lunaire du Ramadan ?",
    answer:
      "L&apos;observation du croissant lunaire (ru&apos;ya al-hilal) pour déterminer le début du Ramadan est une pratique prophétique. Le Prophète (paix et salut sur lui) a dit : « Jeûnez à sa vue et cessez le jeûne à sa vue » (al-Bukhari et Muslim). L&apos;observation se fait après le coucher du soleil le 29e jour de Sha&apos;ban, en direction de l&apos;ouest, dans un endroit dégagé. Si le croissant n&apos;est pas visible, on complète Sha&apos;ban à 30 jours.",
  },
  {
    question: "Que signifie l&apos;étoile filante en islam ?",
    answer:
      "En islam, les étoiles filantes (shuhub) sont mentionnées dans le Coran comme des projectiles lancés contre les djinns qui tentent d&apos;écouter les nouvelles du ciel. Allah dit : « Nous avons décoré le ciel le plus proche de lampes et Nous en avons fait des projectiles pour lapider les démons » (Coran 67:5). C&apos;est avant tout un signe de la puissance d&apos;Allah et de Sa protection du monde céleste.",
  },
  {
    question: "Faut-il réciter la doua de la lune à chaque nouveau mois ?",
    answer:
      "Oui, il est recommandé (mustahabb) de réciter la doua du nouveau croissant lunaire à chaque début de mois hégirien. Cette pratique régulière permet au musulman de renouveler son lien avec le temps sacré, de demander la bénédiction pour le mois à venir et de se rappeler qu&apos;Allah est le Maître du temps et des saisons. C&apos;est une sunna simple à appliquer au quotidien.",
  },
  {
    question: "Quels sont les mérites de contempler le ciel en islam ?",
    answer:
      "La contemplation du ciel, de la lune et des étoiles est vivement encouragée en islam. Le Coran invite les croyants à méditer sur la création des cieux et de la terre : « En vérité, dans la création des cieux et de la terre, et dans l&apos;alternance de la nuit et du jour, il y a certes des signes pour les doués d&apos;intelligence » (Coran 3:190). Cette contemplation renforce la foi et rapproche le serviteur de son Créateur.",
  },
];

export default function DouaLuneEtoileFilanteIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-lune-etoile-filante-islam/#article",
        headline:
          "Doua en voyant la lune et l'étoile filante en islam : invocations authentiques",
        description:
          "Découvrez la doua en voyant la lune en islam et la doua de l'étoile filante : invocations authentiques en arabe, hadiths sur le croissant lunaire et signes d'Allah dans le ciel.",
        image: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg",
        datePublished: "2026-04-13",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-lune-etoile-filante-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-lune-etoile-filante-islam/#breadcrumb",
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
            name: "Doua en voyant la lune",
            item: "https://www.islamreligion.fr/doua-lune-etoile-filante-islam",
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
          title="Doua en voyant la lune et l&apos;étoile filante en islam"
          subtitle="Les invocations authentiques à réciter en observant le croissant lunaire et les étoiles filantes, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/croissant-lune-dore-lanternes-islam-ramadan.jpg"
          imageAlt="Croissant de lune doré avec lanternes islamiques symbolisant la doua en voyant la lune en islam"
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
                <span className="text-foreground">Doua en voyant la lune</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La lune occupe une place particulière en islam : elle rythme le
                  calendrier hégirien, marque le début du Ramadan et constitue un
                  signe manifeste de la puissance d&apos;Allah. Le Prophète (paix
                  et salut sur lui) nous a enseigné une doua spécifique à réciter
                  en voyant le nouveau croissant lunaire, demandant à Allah
                  sécurité, foi et bénédiction pour le mois à venir. Les étoiles
                  filantes, quant à elles, sont des signes célestes mentionnés
                  dans le Coran, et leur observation est un moment propice à
                  l&apos;invocation et à la contemplation.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La lune dans le Coran et la Sunna */}
              {/* ============================================ */}
              <section id="lune-en-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La lune dans le Coran et la Sunna
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La lune (al-qamar) est mentionnée à de nombreuses reprises dans
                  le Coran, tantôt comme signe de la puissance créatrice
                  d&apos;Allah, tantôt comme repère temporel pour les croyants.
                  Une sourate entière, sourate Al-Qamar (la Lune), lui est
                  consacrée, rappelant le miracle de la fission lunaire accordé
                  au Prophète Muhammad (paix et salut sur lui) devant les
                  Qurayshites.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;C&apos;est Lui qui a
                  fait du soleil une clarté et de la lune une lumière, et Il en a
                  déterminé les phases afin que vous sachiez le nombre des années
                  et le calcul (du temps)&nbsp;&raquo; (Yunus, 10:5). Ce verset
                  souligne le rôle fondamental de la lune dans la mesure du
                  temps. Contrairement au calendrier solaire, le calendrier
                  islamique (hégirien) repose entièrement sur les cycles
                  lunaires, ce qui confère à l&apos;observation de la lune une
                  dimension à la fois spirituelle et pratique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) portait une attention
                  particulière à la lune et aux phénomènes célestes. Il
                  enseignait à ses compagnons que le soleil et la lune sont des
                  signes parmi les signes d&apos;Allah, et qu&apos;ils ne
                  s&apos;éclipsent ni pour la mort ni pour la naissance de
                  quiconque, mais qu&apos;Allah les utilise pour rappeler à Ses
                  serviteurs Sa grandeur et Sa puissance.
                </p>

                <HadithCard
                  arabic="إن الشمس والقمر آيتان من آيات الله لا ينخسفان لموت أحد ولا لحياته"
                  text="Le soleil et la lune sont deux signes parmi les signes d&apos;Allah. Ils ne s&apos;éclipsent ni pour la mort ni pour la vie de quiconque."
                  source="Rapporté par al-Bukhari (1041) et Muslim (901)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette parole prophétique corrige une croyance préislamique
                  selon laquelle les éclipses étaient liées aux événements
                  humains. L&apos;islam recentre le regard du croyant : la lune
                  et le soleil sont des créatures soumises à Allah, et leur
                  observation doit mener à la méditation sur la grandeur du
                  Créateur. Le musulman qui lève les yeux vers le ciel nocturne
                  est invité à voir dans chaque phase lunaire un rappel de la
                  toute-puissance divine.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/croissant-lune-dore-etoiles-symbole-islam.jpg"
                    alt="Croissant de lune doré avec étoiles symbole de l&apos;islam et des signes célestes d&apos;Allah"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua en voyant le croissant lunaire */}
              {/* ============================================ */}
              <section id="doua-croissant-lunaire" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua en voyant le nouveau croissant lunaire
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les sunnas oubliées, la doua à réciter en apercevant le
                  nouveau croissant de lune (hilal) est l&apos;une des plus
                  belles. Le Prophète (paix et salut sur lui) ne laissait jamais
                  passer l&apos;apparition du hilal sans invoquer Allah,
                  demandant bénédiction et protection pour le mois à venir.
                  Cette pratique relie le croyant au rythme naturel voulu par
                  Allah et transforme un simple regard vers le ciel en un acte
                  d&apos;adoration.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ رَبِّي وَرَبُّكَ اللَّهُ هِلَالُ رُشْدٍ وَخَيْرٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ahillahu &apos;alayna bil-amni wal-iman, was-salamati wal-islam, rabbi wa rabbukAllah, hilalu rushdin wa khayr
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais que ce croissant se lève sur nous avec sécurité et foi, paix et soumission à Allah. Mon Seigneur et ton Seigneur est Allah, c&apos;est un croissant de droiture et de bien&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3451) et ad-Darimi (1687)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est remarquable par sa richesse. Le Prophète
                  (paix et salut sur lui) y demande quatre choses : la sécurité
                  (al-amn), la foi (al-iman), la préservation (as-salama) et la
                  soumission à Allah (al-islam). En s&apos;adressant au
                  croissant lui-même (&laquo;&nbsp;mon Seigneur et ton Seigneur
                  est Allah&nbsp;&raquo;), il rappelle que cet astre n&apos;est
                  qu&apos;une créature soumise à son Créateur, dissipant ainsi
                  toute forme d&apos;adoration des astres.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants rapportent également une autre formulation attestée
                  dans laquelle le Prophète (paix et salut sur lui) récitait en
                  voyant le hilal :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْيُمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ahillahu &apos;alayna bil-yumni wal-iman, was-salamati wal-islam
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais que ce croissant se lève sur nous avec bonheur, foi, paix et soumission à Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Hibban (888)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le mot &laquo;&nbsp;yumn&nbsp;&raquo; (bonheur, prospérité)
                  remplace ici &laquo;&nbsp;amn&nbsp;&raquo; (sécurité), mais le
                  sens global reste le même : le croyant place le mois à venir
                  sous la protection et la bénédiction d&apos;Allah. Cette
                  pratique prophétique est particulièrement pertinente pour ceux
                  qui cherchent à enrichir leur quotidien d&apos;invocations
                  authentiques. Pour approfondir les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    douas en islam
                  </Link>
                  , nous avons rassemblé les principales invocations du musulman.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Le croissant du Ramadan */}
              {/* ============================================ */}
              <section id="croissant-ramadan" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;observation du croissant lunaire au Ramadan
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;observation du croissant lunaire prend une dimension
                  toute particulière au moment du Ramadan. C&apos;est par cette
                  observation que les musulmans du monde entier déterminent le
                  début et la fin du mois béni de jeûne. Le Prophète (paix et
                  salut sur lui) a établi cette règle avec clarté, liant
                  directement la pratique du jeûne à la vision du hilal.
                </p>

                <HadithCard
                  arabic="صوموا لرؤيته وأفطروا لرؤيته فإن غُبِّي عليكم فأكملوا عدة شعبان ثلاثين"
                  text="Jeûnez à sa vue (le croissant) et cessez le jeûne à sa vue. Si le ciel est couvert, complétez le mois de Sha&apos;ban à trente jours."
                  source="Rapporté par al-Bukhari (1909) et Muslim (1081)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental montre que l&apos;islam attache une
                  importance considérable à l&apos;observation directe du
                  croissant. Les savants ont longuement débattu des conditions de
                  validité de cette observation : faut-il un ou deux témoins ?
                  Peut-on se fier au calcul astronomique ? Chaque communauté
                  peut-elle avoir sa propre observation ? Ces questions
                  témoignent de la centralité de la lune dans la vie religieuse
                  musulmane.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lors de la nuit du 29 Sha&apos;ban, des milliers de musulmans
                  scrutent le ciel à la recherche du fin croissant qui annoncera
                  le début du Ramadan. Ce moment est chargé d&apos;émotion et de
                  spiritualité. Le croyant qui aperçoit le hilal récite la doua
                  du nouveau croissant, puis la joie se répand dans la
                  communauté. Ce rituel ancestral relie les musulmans
                  d&apos;aujourd&apos;hui aux compagnons du Prophète qui
                  pratiquaient exactement la même observation il y a quatorze
                  siècles. Ceux qui souhaitent approfondir les{" "}
                  <Link href="/doua-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    invocations spécifiques au Ramadan
                  </Link>
                  {" "}trouveront un ensemble complet de douas pour ce mois béni.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La ru&apos;ya (observation visuelle) :</strong>{" "}
                      le Prophète (paix et salut sur lui) a lié le jeûne à
                      l&apos;observation directe, donnant au hilal un rôle
                      liturgique unique parmi les astres.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le témoignage :</strong> selon la majorité des
                      savants, le témoignage d&apos;un seul musulman fiable
                      suffit pour confirmer le début du Ramadan, tandis que deux
                      témoins sont requis pour la fin du mois.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le calcul astronomique :</strong> certains savants
                      contemporains admettent l&apos;utilisation du calcul
                      astronomique comme support, mais la majorité maintient la
                      primauté de l&apos;observation visuelle conformément à la
                      Sunna.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua en voyant une étoile filante */}
              {/* ============================================ */}
              <section id="doua-etoile-filante" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua en voyant une étoile filante en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les étoiles filantes (ash-shuhub) occupent une place singulière
                  dans la cosmologie islamique. Le Coran les mentionne à
                  plusieurs reprises, leur attribuant une fonction précise : ce
                  sont des projectiles lancés contre les djinns qui tentent de
                  dérober les nouvelles du ciel. Cette vision coranique
                  transforme un phénomène astronomique en un signe de la
                  protection divine des sphères célestes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;Nous avons décoré le
                  ciel le plus proche de lampes (étoiles) et Nous en avons fait
                  des projectiles pour lapider les démons&nbsp;&raquo; (Al-Mulk,
                  67:5). Et dans sourate Al-Jinn : &laquo;&nbsp;Nous avions
                  touché le ciel et nous l&apos;avons trouvé plein de gardes
                  sévères et de projectiles enflammés&nbsp;&raquo; (Al-Jinn,
                  72:8). Ces versets donnent aux étoiles filantes une dimension
                  spirituelle que le simple regard scientifique ne perçoit pas.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Bien qu&apos;il n&apos;existe pas de hadith authentique
                  prescrivant une doua spécifique au moment de voir une étoile
                  filante, plusieurs savants considèrent que c&apos;est un
                  instant propice à l&apos;invocation. L&apos;imam an-Nawawi et
                  d&apos;autres ont mentionné que tout moment où le cœur est
                  saisi par la grandeur d&apos;Allah est un moment favorable
                  pour lever les mains et invoquer. Le croyant peut alors
                  réciter :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> SubhanAllahi wa bihamdihi, SubhanAllahil-&apos;Adhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire à Allah et louange à Lui, gloire à Allah le Très Grand&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6406) et Muslim (2694)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette parole de glorification, bien que non spécifique à
                  l&apos;étoile filante, est parfaitement adaptée au moment de
                  contemplation où le croyant est frappé par la beauté et la
                  puissance de la création. Le Prophète (paix et salut sur lui)
                  a dit que ces deux paroles sont légères sur la langue, lourdes
                  dans la balance et aimées du Tout Miséricordieux. Le musulman
                  qui observe le ciel nocturne et voit une étoile filante
                  traverser l&apos;obscurité peut transformer cet instant en
                  adoration, en se rappelant les{" "}
                  <Link href="/doua-orage-tonnerre-vent-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    invocations liées aux phénomènes naturels
                  </Link>
                  {" "}que le Prophète nous a enseignées.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg"
                    alt="Mosquée sous un ciel étoilé de nuit illustrant les signes célestes et les étoiles filantes en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : La lune et les astres, signes d'Allah */}
              {/* ============================================ */}
              <section id="signes-allah-ciel" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La lune et les astres : signes d&apos;Allah dans le ciel
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran invite les croyants à lever les yeux vers le ciel et
                  à méditer sur ce qu&apos;ils y voient. La lune, les étoiles,
                  le soleil, la voûte céleste : tout cela constitue des
                  &laquo;&nbsp;ayat&nbsp;&raquo; (signes) qui pointent vers
                  l&apos;existence et la toute-puissance du Créateur. Allah dit :
                  &laquo;&nbsp;En vérité, dans la création des cieux et de la
                  terre, et dans l&apos;alternance de la nuit et du jour, il y a
                  certes des signes pour les doués
                  d&apos;intelligence&nbsp;&raquo; (Al-Imran, 3:190).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La lune, en particulier, est un signe qui se renouvelle chaque
                  mois. Ses phases — du fin croissant à la pleine lune, puis son
                  déclin progressif — sont une parabole de la vie humaine. Le
                  croyant y voit un rappel de la nature éphémère de ce monde et
                  de la certitude du retour à Allah. Chaque nouveau mois lunaire
                  est une occasion de renouveler ses intentions, de se repentir
                  et de repartir sur des bases solides.
                </p>

                <HadithCard
                  arabic="إنكم سترون ربكم كما ترون هذا القمر لا تضامون في رؤيته"
                  text="Vous verrez votre Seigneur comme vous voyez cette lune, sans difficulté aucune à Le voir."
                  source="Rapporté par al-Bukhari (554) et Muslim (633)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith extraordinaire compare la vision d&apos;Allah au
                  Paradis à la clarté avec laquelle on voit la pleine lune. Le
                  Prophète (paix et salut sur lui) a utilisé la lune comme point
                  de comparaison pour illustrer la récompense suprême du
                  croyant : la vision de son Seigneur dans l&apos;au-delà. Ainsi,
                  chaque fois que le musulman contemple la lune, il peut se
                  rappeler cette promesse divine et redoubler d&apos;efforts
                  dans son adoration.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les étoiles, quant à elles, remplissent trois fonctions
                  mentionnées dans le Coran : elles servent de décoration pour
                  le ciel (Al-Mulk, 67:5), de repères pour la navigation
                  (An-Nahl, 16:16) et de projectiles contre les démons qui
                  tentent d&apos;écouter les nouvelles célestes (As-Saffat,
                  37:10). Le musulman qui contemple le ciel étoilé voit donc
                  bien plus qu&apos;un spectacle esthétique : il voit un système
                  ordonné par la sagesse divine, chaque étoile remplissant un
                  rôle précis dans le plan d&apos;Allah.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas en arabe, phonétique et traduction */}
              {/* ============================================ */}
              <section id="douas-invocations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Récapitulatif des douas : arabe, phonétique et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voici l&apos;ensemble des invocations liées à
                  l&apos;observation de la lune et des phénomènes célestes,
                  rassemblées avec leur texte arabe, leur phonétique et leur
                  traduction en français pour faciliter la mémorisation.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua en voyant le nouveau croissant (version principale)
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ رَبِّي وَرَبُّكَ اللَّهُ هِلَالُ رُشْدٍ وَخَيْرٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ahillahu &apos;alayna bil-amni wal-iman, was-salamati wal-islam, rabbi wa rabbukAllah, hilalu rushdin wa khayr
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais que ce croissant se lève sur nous avec sécurité et foi, paix et soumission à Allah. Mon Seigneur et ton Seigneur est Allah, c&apos;est un croissant de droiture et de bien&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3451) et ad-Darimi (1687)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua en voyant le nouveau croissant (variante)
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُ أَكْبَرُ اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ وَالتَّوْفِيقِ لِمَا تُحِبُّ وَتَرْضَى
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahu Akbar, Allahumma ahillahu &apos;alayna bil-amni wal-iman, was-salamati wal-islam, wat-tawfiqi lima tuhibbu wa tarda
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah est le plus Grand. Seigneur, fais que ce croissant se lève sur nous avec sécurité, foi, paix, soumission à Allah et la réussite dans ce que Tu aimes et agrées&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tabarani dans Al-Mu&apos;jam al-Kabir
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua de glorification en contemplant le ciel
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ الَّذِي خَلَقَ هَذَا سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Subhanal-ladhi khalaqa hadha, subhanakaAllahumma wa bihamdik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire à Celui qui a créé cela. Gloire à Toi, Seigneur, et louange à Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Inspiré de l&apos;invocation de contemplation (Coran 3:191)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua des doués d&apos;intelligence face à la création
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا مَا خَلَقْتَ هَذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana ma khalaqta hadha batilan, subhanaka faqina &apos;adhab an-nar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Tu n&apos;as pas créé cela en vain. Gloire à Toi ! Préserve-nous du châtiment du Feu&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Imran (3:191)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces invocations peuvent être récitées à tout moment
                  d&apos;observation du ciel, que ce soit en voyant le croissant
                  lunaire, une étoile filante ou simplement la voûte céleste
                  dans toute sa splendeur. Elles transforment un acte de
                  contemplation en un acte d&apos;adoration, reliant le regard
                  du croyant à la conscience de son Créateur.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Convenances lors de l'observation */}
              {/* ============================================ */}
              <section id="adab-observation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Convenances lors de l&apos;observation du ciel en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam encadre chaque aspect de la vie du croyant, y
                  compris sa relation avec les phénomènes naturels. Observer le
                  ciel, la lune et les étoiles n&apos;échappe pas à cette
                  sagesse prophétique. Voici les convenances (adab) à respecter
                  pour que cette contemplation soit conforme à la Sunna et
                  bénéfique sur le plan spirituel.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Réciter la doua du croissant :</strong> à chaque
                      début de mois hégirien, guetter le hilal et réciter
                      l&apos;invocation prophétique. C&apos;est une sunna simple
                      qui relie le croyant au rythme sacré du temps islamique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Glorifier Allah :</strong> face à la beauté du
                      ciel nocturne, le croyant glorifie son Créateur par le
                      tasbih (SubhanAllah), le takbir (Allahu Akbar) et le
                      tahmid (Alhamdulillah).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas adorer les astres :</strong> l&apos;islam
                      interdit formellement toute forme d&apos;adoration des
                      astres. La lune et les étoiles sont des créatures
                      d&apos;Allah, non des divinités. Le Coran rappelle
                      l&apos;exemple d&apos;Ibrahim qui, après avoir contemplé
                      les étoiles, la lune et le soleil, déclara : &laquo;&nbsp;Je
                      tourne mon visage vers Celui qui a créé les cieux et la
                      terre&nbsp;&raquo; (Al-An&apos;am, 6:79).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rejeter l&apos;astrologie :</strong> l&apos;islam
                      distingue clairement l&apos;astronomie (observation
                      scientifique des astres) de l&apos;astrologie (prédiction
                      de l&apos;avenir par les étoiles). La première est permise
                      et même encouragée, la seconde est strictement interdite.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Méditer sur la création :</strong> le Coran qualifie
                      de &laquo;&nbsp;doués d&apos;intelligence&nbsp;&raquo;
                      (ulu al-albab) ceux qui méditent sur la création des
                      cieux et de la terre. Cette méditation (tafakkur) est une
                      forme d&apos;adoration à part entière.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  En respectant ces convenances, le musulman transforme chaque
                  regard vers le ciel en un acte de foi. Il ne se contente pas
                  d&apos;admirer la beauté de la création : il reconnaît derrière
                  chaque étoile, chaque phase lunaire et chaque étoile filante la
                  main du Créateur qui a tout façonné avec sagesse et mesure.
                </p>
              </section>

              {/* Maillage interne */}
              <div className="mt-12 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  Articles liés
                </p>
                <ul className="mt-3 space-y-2 text-foreground">
                  <li>
                    <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                      Doua en islam : toutes les invocations du musulman
                    </Link>
                  </li>
                  <li>
                    <Link href="/doua-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                      Les douas du Ramadan : invocations pour le mois béni
                    </Link>
                  </li>
                  <li>
                    <Link href="/doua-orage-tonnerre-vent-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                      Doua en cas d&apos;orage, tonnerre et vent en islam
                    </Link>
                  </li>
                </ul>
              </div>

              <AffiliateForm title="Apprenez l&apos;arabe pour comprendre vos douas" description="Maîtrisez la langue du Coran et comprenez enfin le sens profond de chaque invocation que vous récitez au quotidien." preselect="arabe" />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
