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
    "Doua de l'opprimé en islam : l'invocation qui n'est jamais rejetée",
  description:
    "Découvrez la doua de l'opprimé en islam : invocations authentiques en arabe avec phonétique et traduction, hadiths sur l'oppression (dhulm), doua de Moussa et Younous, conditions d'exaucement et conseils pratiques.",
  openGraph: {
    title:
      "Doua de l'opprimé en islam : l'invocation qui n'est jamais rejetée",
    description:
      "Les invocations authentiques de l'opprimé en islam : textes en arabe, phonétique, traduction et hadiths. La doua qui n'est jamais rejetée par Allah.",
    url: "https://www.islamreligion.fr/doua-opprime-islam",
    images: [
      {
        url: "/images/doua-mains-levees-illustration-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-opprime-islam",
  },
};

const tocItems = [
  { id: "definition-oppression", label: "Définition de l'oppression en islam" },
  { id: "hadith-opprime", label: "Le hadith : Crains la doua de l'opprimé" },
  { id: "douas-coraniques", label: "Douas coraniques et prophétiques" },
  { id: "doua-moussa", label: "Doua de Moussa contre Pharaon" },
  { id: "doua-younous", label: "Doua de Younous dans la baleine" },
  { id: "conditions-exaucement", label: "Conditions d'exaucement" },
  { id: "face-injustice", label: "Que faire face à l'injustice" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua de l'opprimé en islam ?",
    answer:
      "La doua de l&apos;opprimé regroupe plusieurs invocations authentiques adressées à Allah par celui qui subit une injustice. Parmi les plus connues : « HasbunAllahu wa ni&apos;mal wakil » (Allah nous suffit, Il est le meilleur Garant) et la doua de Younous « La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin ». Le Prophète (paix et salut sur lui) a affirmé que la doua de l&apos;opprimé monte directement à Allah sans aucun voile.",
  },
  {
    question: "Est-ce que la doua de l'opprimé est toujours exaucée ?",
    answer:
      "Oui, selon plusieurs hadiths authentiques, la doua de l&apos;opprimé est toujours exaucée. Le Prophète (paix et salut sur lui) a dit : « Crains la doua de l&apos;opprimé, car il n&apos;y a entre elle et Allah aucun voile » (al-Bukhari et Muslim). Cette invocation est acceptée même si l&apos;opprimé est un non-musulman ou un pécheur, car l&apos;injustice est rejetée par Allah dans tous les cas.",
  },
  {
    question: "Peut-on faire la doua de l'opprimé en français ?",
    answer:
      "Oui, la doua de l&apos;opprimé peut être faite dans toute langue. Allah comprend toutes les langues et entend la plainte de chaque opprimé. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe, car elles ont une puissance spirituelle particulière. Pour les supplications personnelles, le français est parfaitement valide.",
  },
  {
    question: "Qu'est-ce que le dhulm (oppression) en islam ?",
    answer:
      "Le dhulm (ظلم) désigne toute forme d&apos;injustice, d&apos;oppression ou de transgression des droits d&apos;autrui. En islam, il existe trois types de dhulm : l&apos;injustice envers Allah (le shirk), l&apos;injustice envers soi-même (les péchés) et l&apos;injustice envers les autres (usurpation de droits, violence, calomnie, etc.). Allah a interdit l&apos;injustice à Lui-même et l&apos;a rendue interdite entre Ses serviteurs.",
  },
  {
    question: "Quel est le hadith sur l'opprimé le plus connu ?",
    answer:
      "Le hadith le plus célèbre est rapporté par al-Bukhari et Muslim : le Prophète (paix et salut sur lui) a dit à Mu&apos;adh ibn Jabal lorsqu&apos;il l&apos;envoya au Yémen : « Crains la doua de l&apos;opprimé (mazlum), car il n&apos;y a entre elle et Allah aucun voile (hijab). » Ce hadith souligne que rien ne peut empêcher cette invocation d&apos;atteindre le Trône d&apos;Allah.",
  },
  {
    question: "La doua de l'opprimé fonctionne-t-elle même contre un musulman ?",
    answer:
      "Oui, si un musulman commet une injustice envers un autre, la doua de l&apos;opprimé s&apos;applique contre lui. L&apos;islam ne fait pas de distinction : l&apos;injustice est condamnée quel que soit son auteur. Le Prophète (paix et salut sur lui) a dit : « Aide ton frère qu&apos;il soit oppresseur ou opprimé », et aider l&apos;oppresseur signifie l&apos;empêcher de commettre l&apos;injustice.",
  },
  {
    question: "Combien de temps faut-il pour que la doua de l'opprimé soit exaucée ?",
    answer:
      "Il n&apos;y a pas de délai fixe. Allah peut exaucer la doua de l&apos;opprimé immédiatement ou différer la réponse selon Sa sagesse. Le Prophète (paix et salut sur lui) a enseigné que toute doua est exaucée de trois manières : soit la demande est accordée, soit un mal équivalent est écarté, soit la récompense est gardée pour l&apos;au-delà. La patience et la persévérance dans l&apos;invocation sont essentielles.",
  },
  {
    question: "Peut-on invoquer contre son oppresseur en islam ?",
    answer:
      "Oui, il est permis d&apos;invoquer contre son oppresseur en islam, à condition de ne pas dépasser la mesure de l&apos;injustice subie. Cependant, les savants recommandent de privilégier le pardon lorsque c&apos;est possible, car Allah dit : « Celui qui pardonne et qui se réconcilie, sa récompense incombe à Allah » (Coran 42:40). Le pardon est une vertu supérieure, mais la justice reste un droit légitime.",
  },
];

export default function DouaOpprimeIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-opprime-islam/#article",
        headline:
          "Doua de l'opprimé en islam : l'invocation qui n'est jamais rejetée",
        description:
          "Découvrez la doua de l'opprimé en islam : invocations authentiques en arabe, hadiths sur l'oppression, doua de Moussa et Younous, conditions d'exaucement.",
        image: "/images/doua-mains-levees-illustration-lumiere.jpg",
        datePublished: "2026-03-09",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-opprime-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-opprime-islam/#breadcrumb",
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
            name: "Doua de l'opprimé",
            item: "https://www.islamreligion.fr/doua-opprime-islam",
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
          title="Doua de l'opprimé en islam : l'invocation qui n'est jamais rejetée"
          subtitle="Les invocations authentiques de celui qui subit l'injustice, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-levees-illustration-lumiere.jpg"
          imageAlt="Mains levées en invocation doua de l'opprimé avec lumière divine symbolisant la justice en islam"
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
                <span className="text-foreground">Doua de l&apos;opprimé</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La doua de l&apos;opprimé occupe une place unique en islam :
                  c&apos;est l&apos;une des rares invocations dont le Prophète
                  (paix et salut sur lui) a garanti qu&apos;elle n&apos;est
                  jamais rejetée par Allah. Qu&apos;il soit musulman ou non,
                  pieux ou pécheur, l&apos;opprimé qui lève ses mains vers le
                  ciel voit sa plainte monter directement au Trône divin, sans
                  aucun voile. Cette réalité spirituelle doit à la fois
                  réconforter celui qui subit l&apos;injustice et effrayer celui
                  qui la commet.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Définition de l'oppression */}
              {/* ============================================ */}
              <section id="definition-oppression" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Définition de l&apos;oppression (dhulm) en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme arabe <strong>dhulm</strong> (ظلم) désigne toute
                  forme d&apos;injustice, d&apos;oppression ou de transgression
                  des droits. En islam, ce concept revêt une gravité
                  considérable : Allah a déclaré l&apos;injustice interdite pour
                  Lui-même et l&apos;a rendue illicite entre Ses serviteurs.
                  Cette interdiction divine absolue confère à l&apos;opprimé un
                  statut particulier dans la relation entre le serviteur et son
                  Créateur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de l&apos;islam distinguent traditionnellement
                  trois catégories de dhulm. La première est l&apos;injustice
                  envers Allah, qui se manifeste principalement par le shirk
                  (associationnisme), considéré comme la plus grande forme
                  d&apos;oppression. Le Coran affirme : &laquo;&nbsp;Le shirk
                  est certes une immense injustice&nbsp;&raquo; (Luqman, 31:13).
                  La deuxième catégorie est l&apos;injustice envers soi-même,
                  qui englobe les péchés et les actes qui nuisent à
                  l&apos;individu sur le plan spirituel et physique. La
                  troisième, qui nous concerne particulièrement ici, est
                  l&apos;injustice envers autrui : usurpation des droits,
                  violence physique ou verbale, calomnie, vol, tromperie ou
                  toute forme d&apos;abus de pouvoir.
                </p>

                <HadithCard
                  arabic="إن الله ليملي للظالم حتى إذا أخذه لم يفلته"
                  text="Allah laisse un répit à l'oppresseur, mais lorsqu'Il le saisit, Il ne le laisse plus échapper."
                  source="Rapporté par al-Bukhari (4686) et Muslim (2583)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre un principe fondamental : même si
                  l&apos;injustice semble perdurer sans conséquence,
                  Allah n&apos;oublie rien. Le délai accordé à l&apos;oppresseur
                  n&apos;est pas un signe de négligence divine, mais un temps de
                  test pour toutes les parties. L&apos;opprimé est éprouvé dans
                  sa patience, tandis que l&apos;oppresseur accumule les
                  conséquences de ses actes. Lorsque le châtiment arrive, il est
                  implacable et sans appel.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le dhulm est interdit en toute circonstance :</strong>{" "}
                      qu&apos;il vise un musulman ou un non-musulman, un proche
                      ou un étranger, l&apos;injustice reste un péché majeur en
                      islam.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le Jour du Jugement :</strong> le Prophète (paix
                      et salut sur lui) a averti que l&apos;oppression sera des
                      ténèbres (dhulumat) au Jour de la Résurrection (Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La restitution des droits :</strong> l&apos;oppresseur
                      devra rendre les droits qu&apos;il a usurpés, et si cela
                      n&apos;est pas possible en ce monde, ce sera par ses
                      bonnes actions au Jour Dernier. Le <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">repentir sincère (tawba)</Link> reste
                      la seule issue pour l&apos;oppresseur avant qu&apos;il ne
                      soit trop tard.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée illustrant l'invocation de l'opprimé en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Le hadith célèbre */}
              {/* ============================================ */}
              <section id="hadith-opprime" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  &laquo;&nbsp;Crains la doua de l&apos;opprimé&nbsp;&raquo; : le hadith fondateur
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le hadith le plus célèbre concernant la doua de l&apos;opprimé
                  est celui rapporté par al-Bukhari et Muslim, dans lequel le
                  Prophète (paix et salut sur lui) recommande à Mu&apos;adh ibn
                  Jabal de craindre cette invocation particulière. Ce hadith
                  constitue le fondement de toute la doctrine islamique sur la
                  puissance de l&apos;invocation de celui qui subit
                  l&apos;injustice.
                </p>

                <HadithCard
                  arabic="واتقِ دعوة المظلوم فإنه ليس بينها وبين الله حجاب"
                  text="Crains la doua de l'opprimé, car il n'y a entre elle et Allah aucun voile."
                  source="Rapporté par al-Bukhari (1496) et Muslim (19)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;expression &laquo;&nbsp;aucun voile&nbsp;&raquo;
                  (hijab) est d&apos;une puissance considérable. Elle signifie
                  que contrairement aux autres invocations qui peuvent être
                  retardées, filtrées par les conditions d&apos;exaucement ou
                  différées selon la sagesse divine, la doua de l&apos;opprimé
                  s&apos;élève directement jusqu&apos;au Trône d&apos;Allah sans
                  aucun obstacle. Cette particularité en fait l&apos;invocation
                  la plus redoutable de l&apos;islam.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un autre hadith, rapporté par at-Tirmidhi, complète cette
                  compréhension en mentionnant les trois invocations qui ne sont
                  jamais rejetées. Le Prophète (paix et salut sur lui) a
                  dit :
                </p>

                <HadithCard
                  arabic="ثلاث دعوات مستجابات لا شك فيهن: دعوة المظلوم، ودعوة المسافر، ودعوة الوالد على ولده"
                  text="Trois invocations sont exaucées sans aucun doute : la doua de l'opprimé, la doua du voyageur, et la doua du parent pour son enfant."
                  source="Rapporté par at-Tirmidhi (1905), Abu Dawud (1536)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est d&apos;une importance capitale car il classe la
                  doua de l&apos;opprimé parmi un groupe très restreint
                  d&apos;invocations dont l&apos;exaucement est garanti. La
                  formule &laquo;&nbsp;sans aucun doute&nbsp;&raquo; (la shakka
                  fihinna) ne laisse aucune ambiguïté. L&apos;opprimé qui invoque
                  Allah avec sincérité peut avoir la certitude absolue que sa
                  plainte sera entendue et que justice sera rendue, dans cette
                  vie ou dans l&apos;au-delà.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants soulignent un point remarquable : cette garantie
                  d&apos;exaucement s&apos;applique même si l&apos;opprimé est
                  un pécheur, un non-musulman ou une personne éloignée de la
                  pratique religieuse. Car la justice divine transcende le statut
                  religieux de l&apos;individu. Allah rejette l&apos;injustice
                  de manière absolue, et c&apos;est pourquoi il répond à
                  quiconque en est victime. Ce point devrait faire trembler tout
                  musulman tenté de commettre une injustice envers qui que ce
                  soit.
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
              {/* SECTION 3 : Douas coraniques et prophétiques */}
              {/* ============================================ */}
              <section id="douas-coraniques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas coraniques et prophétiques de l&apos;opprimé
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran et la Sunna regorgent d&apos;invocations que
                  l&apos;opprimé peut adresser à Allah pour demander justice,
                  protection et délivrance. Voici les principales invocations
                  authentiques, accompagnées de leur texte arabe, de leur
                  phonétique et de leur traduction en français.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. HasbunAllahu wa ni&apos;mal wakil
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est l&apos;invocation qu&apos;Ibrahim (paix sur lui) a
                  prononcée lorsqu&apos;il fut jeté dans le feu, et que les
                  compagnons du Prophète ont récitée lors de la bataille de Uhud.
                  Elle exprime une confiance absolue en Allah comme protecteur et
                  garant.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> HasbunAllahu wa ni&apos;mal wakil
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah nous suffit, Il est le meilleur Garant&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Imran (3:173)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de protection contre l&apos;injustice
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) enseignait cette invocation
                  pour demander à Allah de se défendre contre les oppresseurs et
                  de trouver refuge auprès de Lui face à toute forme de
                  tyrannie.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ وَمِنْ شَرِّ مَا لَمْ أَعْمَلْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu bika min sharri ma &apos;amiltu wa min sharri ma lam a&apos;mal
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge auprès de Toi contre le mal de ce que j&apos;ai fait et le mal de ce que je n&apos;ai pas fait&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2716)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Invocation pour demander justice à Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette doua puissante est récitée par celui qui subit une
                  injustice et remet son affaire entre les mains d&apos;Allah, le
                  Juge suprême qui ne commet aucune injustice.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي مَظْلُومٌ فَانْتَصِرْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni mazlumun fantasir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je suis opprimé, accorde-moi la victoire&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (4563)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua de Nuh (Noé) contre son peuple oppresseur
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Après des siècles de da&apos;wa et de patience face aux
                  moqueries et à la persécution de son peuple, le prophète Nuh
                  (paix sur lui) adressa cette invocation à Allah. C&apos;est
                  l&apos;exemple même de la doua de l&apos;opprimé qui a
                  épuisé tous les moyens de patience.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ إِنِّي مَغْلُوبٌ فَانتَصِرْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi inni maghlubun fantasir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je suis vaincu, accorde-moi le secours&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Qamar (54:10)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  5. Remise de l&apos;affaire à Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le croyant opprimé peut également remettre entièrement son
                  affaire entre les mains d&apos;Allah, en reconnaissant sa
                  faiblesse et en plaçant sa confiance totale en son Seigneur.
                  Cette invocation est inspirée de l&apos;attitude du prophète
                  Shu&apos;ayb (paix sur lui) face à son peuple.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Wa ufawwidu amri ilAllahi innAllaha basirun bil-&apos;ibad
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Et je remets mon sort à Allah. Allah est certes Clairvoyant sur Ses serviteurs&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ghafir (40:44)
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua de Moussa */}
              {/* ============================================ */}
              <section id="doua-moussa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de Moussa contre Pharaon
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;histoire de Moussa (paix sur lui) face à Pharaon est
                  l&apos;un des récits les plus emblématiques de l&apos;oppression
                  et de la délivrance dans le Coran. Pharaon, archétype du tyran,
                  avait asservi les Bani Isra&apos;il, massacrant leurs enfants
                  mâles et humiliant leur peuple pendant des décennies.
                  C&apos;est dans ce contexte de souffrance extrême que Moussa fut
                  envoyé par Allah comme libérateur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Après avoir épuisé tous les appels à la raison et présenté les
                  signes divins les plus éclatants, Moussa, face à
                  l&apos;obstination de Pharaon, prononça cette invocation
                  décisive rapportée dans le Coran :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا إِنَّكَ آتَيْتَ فِرْعَوْنَ وَمَلَأَهُ زِينَةً وَأَمْوَالًا فِي الْحَيَاةِ الدُّنْيَا رَبَّنَا لِيُضِلُّوا عَن سَبِيلِكَ رَبَّنَا اطْمِسْ عَلَىٰ أَمْوَالِهِمْ وَاشْدُدْ عَلَىٰ قُلُوبِهِمْ فَلَا يُؤْمِنُوا حَتَّىٰ يَرَوُا الْعَذَابَ الْأَلِيمَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana innaka atayta Fir&apos;awna wa mala&apos;ahu zinatan wa amwalan fil-hayatid-dunya, Rabbana liyudillu &apos;an sabilik, Rabbana-tmis &apos;ala amwalihim washudud &apos;ala qulubihim fala yu&apos;minu hatta yarawul-&apos;adhabal-alim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Tu as accordé à Pharaon et ses notables parure et biens en cette vie, et voilà Seigneur, qu&apos;ils égarent les gens de Ton sentier. Seigneur, anéantis leurs biens et endurcis leurs coeurs, afin qu&apos;ils ne croient que lorsqu&apos;ils verront le châtiment douloureux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Younous (10:88)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La réponse d&apos;Allah à cette doua fut immédiate et sans
                  appel. Le verset suivant rapporte : &laquo;&nbsp;Votre
                  invocation est exaucée&nbsp;&raquo; (Coran, 10:89). Allah
                  noya Pharaon et ses armées dans la mer Rouge, réalisant
                  ainsi la promesse de délivrance faite aux opprimés. Cet
                  épisode est un rappel puissant : aucun tyran, aussi
                  puissant soit-il, ne peut échapper à la justice divine
                  lorsque l&apos;opprimé invoque son Seigneur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les leçons tirées de cette histoire sont multiples. Tout
                  d&apos;abord, Moussa n&apos;a invoqué contre Pharaon
                  qu&apos;après avoir épuisé tous les moyens de dialogue et
                  d&apos;appel pacifique. Ensuite, sa doua était motivée non
                  par une vengeance personnelle, mais par le désir de voir
                  triompher la vérité et cesser l&apos;oppression d&apos;un
                  peuple entier. Enfin, la réponse divine montre que la
                  patience de l&apos;opprimé n&apos;est jamais vaine et que
                  la délivrance, bien qu&apos;elle puisse tarder, finit
                  toujours par arriver.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les versets sur la doua de l'opprimé"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua de Younous */}
              {/* ============================================ */}
              <section id="doua-younous" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de Younous dans le ventre de la baleine
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua de Younous (Jonas, paix sur lui) est considérée par
                  de nombreux savants comme l&apos;une des invocations les plus
                  puissantes de l&apos;islam. Engloutie par un poisson géant
                  dans les profondeurs de l&apos;océan, plongé dans trois
                  couches de ténèbres (la nuit, la mer et le ventre du
                  poisson), Younous adressa à Allah une invocation d&apos;une
                  sincérité absolue.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité que Toi, gloire à Toi, j&apos;étais certes parmi les injustes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Anbiya (21:87)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné la puissance
                  extraordinaire de cette invocation dans un hadith
                  authentique :
                </p>

                <HadithCard
                  arabic="دعوة ذي النون إذ دعا وهو في بطن الحوت: لا إله إلا أنت سبحانك إني كنت من الظالمين، فإنه لم يدع بها رجل مسلم في شيء قط إلا استجاب الله له"
                  text="L'invocation de Dhoun-Noun (Younous) lorsqu'il invoqua dans le ventre du poisson : 'Il n'y a de divinité que Toi, gloire à Toi, j'étais certes parmi les injustes.' Aucun musulman n'invoque par cette formule pour quoi que ce soit sans qu'Allah ne l'exauce."
                  source="Rapporté par at-Tirmidhi (3505), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce qui rend cette invocation si puissante, c&apos;est
                  qu&apos;elle combine trois éléments fondamentaux : le tawhid
                  (affirmation de l&apos;unicité d&apos;Allah par &laquo;&nbsp;La
                  ilaha illa Anta&nbsp;&raquo;), la glorification d&apos;Allah
                  (par &laquo;&nbsp;Subhanaka&nbsp;&raquo;) et la
                  reconnaissance de ses propres fautes (par &laquo;&nbsp;Inni
                  kuntu min adh-dhalimin&nbsp;&raquo;). L&apos;opprimé qui
                  récite cette doua reconnaît humblement qu&apos;il n&apos;est
                  pas parfait, tout en affirmant sa confiance absolue en
                  l&apos;unicité et la perfection d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter cette invocation dans
                  toute situation de détresse, d&apos;oppression ou de
                  difficulté. Que l&apos;on soit victime d&apos;une injustice
                  professionnelle, familiale, judiciaire ou sociale, la doua
                  de Younous constitue un refuge spirituel d&apos;une efficacité
                  garantie par le Prophète (paix et salut sur lui) lui-même.
                  Sa récitation régulière, avec présence du coeur et sincérité,
                  est un moyen de libération pour quiconque se sent emprisonné
                  par les circonstances de la vie.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Trois composantes :</strong> tawhid,
                      glorification et reconnaissance des fautes font de cette
                      doua un modèle complet d&apos;invocation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Universelle :</strong> applicable dans toute
                      situation de détresse, pas uniquement en cas
                      d&apos;oppression humaine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Garantie prophétique :</strong> le Prophète
                      affirme qu&apos;aucun musulman ne la récite sans être
                      exaucé, ce qui en fait une doua d&apos;une puissance
                      exceptionnelle. Pour approfondir les <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                      consultez notre guide complet.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Conditions d'exaucement */}
              {/* ============================================ */}
              <section id="conditions-exaucement" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conditions d&apos;exaucement spécifiques à l&apos;opprimé
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Bien que la doua de l&apos;opprimé bénéficie d&apos;un
                  statut privilégié auprès d&apos;Allah, certaines conditions
                  et recommandations permettent de maximiser son effet et
                  d&apos;en tirer le meilleur bénéfice spirituel. Les savants
                  de l&apos;islam ont détaillé ces conditions en s&apos;appuyant
                  sur le Coran et la Sunna.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La sincérité (ikhlas) dans l&apos;invocation
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;opprimé doit adresser sa plainte exclusivement à
                        Allah, sans chercher à impressionner les gens ni à
                        utiliser l&apos;invocation comme un outil de vengeance
                        disproportionnée. La sincérité du coeur est la première
                        condition de l&apos;exaucement de toute doua.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas dépasser la mesure de l&apos;injustice subie
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si l&apos;opprimé invoque contre son oppresseur, il doit
                        se limiter à demander justice, sans souhaiter un mal
                        supérieur à l&apos;injustice subie. Dépasser cette
                        mesure transformerait l&apos;opprimé en oppresseur à son
                        tour, et sa doua pourrait se retourner contre lui.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La certitude dans la réponse d&apos;Allah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné
                        d&apos;invoquer avec la conviction ferme qu&apos;Allah
                        répondra. Le doute et l&apos;hésitation affaiblissent
                        l&apos;invocation. L&apos;opprimé doit savoir, avec
                        certitude, que sa plainte est entendue et que justice
                        sera rendue.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Choisir les moments propices
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Bien que la doua de l&apos;opprimé soit exaucée à tout
                        moment, certains instants sont particulièrement
                        favorables : le dernier tiers de la nuit, lors de la
                        prosternation (sujud), entre l&apos;adhan et
                        l&apos;iqama, et le vendredi après l&apos;Asr. Combiner
                        le statut privilégié de l&apos;opprimé avec ces moments
                        bénis multiplie les chances d&apos;une réponse rapide.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Privilégier le pardon quand c&apos;est possible
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les savants recommandent, lorsque c&apos;est possible,
                        de pardonner à l&apos;oppresseur plutôt que
                        d&apos;invoquer contre lui. Allah dit : &laquo;&nbsp;Et
                        que les détenteurs de mérite parmi vous ne jurent pas de
                        ne plus donner [...] Qu&apos;ils pardonnent et passent
                        outre. N&apos;aimez-vous pas qu&apos;Allah vous
                        pardonne&nbsp;?&nbsp;&raquo; (Coran, 24:22). Le pardon
                        est une vertu supérieure qui attire la miséricorde
                        divine. Pour comprendre comment obtenir le pardon
                        d&apos;Allah, consultez notre article sur les{" "}
                        <Link href="/conditions-maghfira-pardon" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">conditions de la maghfira</Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="ما زاد الله عبدا بعفو إلا عزا"
                  text="Allah n'augmente le serviteur qui pardonne qu'en honneur et en dignité."
                  source="Rapporté par Muslim (2588)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Face à l'injustice */}
              {/* ============================================ */}
              <section id="face-injustice" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Que faire face à l&apos;injustice en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam ne se contente pas d&apos;offrir des invocations
                  à l&apos;opprimé : il propose une démarche complète qui allie
                  la dimension spirituelle (doua et patience) à l&apos;action
                  concrète (défense des droits et recours légaux). Le musulman
                  face à l&apos;injustice n&apos;est ni passif ni résigné : il
                  agit avec sagesse tout en plaçant sa confiance en Allah.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La patience (sabr) comme force
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La patience face à l&apos;injustice n&apos;est pas de la
                      passivité. C&apos;est une force intérieure qui permet de
                      garder son calme, de réfléchir avec lucidité et
                      d&apos;agir au bon moment. Le Coran promet :
                      &laquo;&nbsp;Les endurants auront leur pleine récompense
                      sans aucun compte&nbsp;&raquo; (Coran, 39:10).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;invocation constante
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Multiplier les douas, en particulier celles mentionnées
                      dans cet article, en choisissant les moments propices.
                      Ne jamais abandonner l&apos;invocation, même si la
                      réponse semble tarder. La persévérance dans la doua est
                      elle-même un acte d&apos;adoration.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La défense légitime des droits
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;islam autorise l&apos;opprimé à défendre ses droits
                      par tous les moyens légaux et légitimes. Le recours à la
                      justice, au dialogue, à la médiation et à
                      l&apos;arbitrage sont des démarches encouragées. Le
                      Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Secours ton frère qu&apos;il soit oppresseur
                      ou opprimé&nbsp;&raquo; (al-Bukhari).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le rappel et la nasiha
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Lorsque c&apos;est possible et sûr, rappeler à
                      l&apos;oppresseur les conséquences de ses actes est un
                      devoir islamique. Le conseil sincère (nasiha) peut
                      parfois suffire à éveiller la conscience de celui qui
                      commet l&apos;injustice et à résoudre le conflit de
                      manière pacifique.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, le musulman face à l&apos;injustice combine quatre
                  éléments : la patience intérieure (sabr), l&apos;invocation
                  constante (doua), l&apos;action concrète pour défendre ses
                  droits et le recours au pardon lorsque les circonstances le
                  permettent. Cette approche équilibrée reflète la sagesse de
                  l&apos;enseignement islamique qui ne sépare jamais la
                  spiritualité de l&apos;action. Pour approfondir la dimension
                  spirituelle de la prière, découvrez notre article sur{" "}
                  <Link href="/prier-islam-excellence-spirituelle" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">prier en islam avec excellence</Link>.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne jamais rendre l&apos;injustice par l&apos;injustice :</strong>{" "}
                      répondre à l&apos;oppression par une oppression similaire
                      transforme la victime en coupable devant Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Documenter l&apos;injustice :</strong> garder des
                      preuves et des témoignages est une démarche sage qui
                      facilite le recours légal si nécessaire.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Chercher le soutien communautaire :</strong>{" "}
                      s&apos;entourer de personnes de confiance, consulter un
                      imam ou un conseiller peut aider à traverser
                      l&apos;épreuve et à trouver des solutions adaptées.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se rappeler la promesse divine :</strong> Allah a
                      promis que l&apos;injustice sera châtiée et que
                      l&apos;opprimé sera rétribué. Cette certitude donne force
                      et sérénité dans les moments les plus difficiles. Les{" "}
                      <Link href="/invocations-reussite-facilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations pour la réussite</Link>{" "}
                      peuvent également accompagner l&apos;opprimé dans sa
                      quête de justice.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le repentir sincère en islam (tawba)"
                  description="Découvrez les conditions du repentir sincère et comment revenir à Allah après avoir commis une injustice."
                  href="/repentir-sincere-islam-tawba"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter les douas avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
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
                    href="/doua-voyageur-safar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du voyageur
                  </Link>
                  <Link
                    href="/invocations-reussite-facilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Invocations pour la réussite
                  </Link>
                  <Link
                    href="/istikhara-priere-consultation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prière de consultation (istikhara)
                  </Link>
                  <Link
                    href="/remede-angoisse-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remède contre l&apos;angoisse
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
