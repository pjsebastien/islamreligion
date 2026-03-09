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
    "Doua pour le pardon en islam : invocations d&apos;istighfar authentiques",
  description:
    "Découvrez les douas pour le pardon en islam : sayyid al-istighfar, astaghfirullah, rabbana zalamna anfusana. Textes en arabe, phonétique et traduction française avec hadiths authentiques sur l&apos;istighfar.",
  openGraph: {
    title:
      "Doua pour le pardon en islam : invocations d&apos;istighfar authentiques",
    description:
      "Les invocations authentiques pour demander le pardon d&apos;Allah : sayyid al-istighfar, astaghfirullah et douas coraniques. Textes en arabe, phonétique et traduction.",
    url: "https://www.islamreligion.fr/doua-pardon-islam",
    images: [
      {
        url: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-pardon-islam",
  },
};

const tocItems = [
  { id: "importance-istighfar", label: "L&apos;importance de l&apos;istighfar en islam" },
  { id: "sayyid-al-istighfar", label: "Sayyid al-istighfar : la maîtresse des douas" },
  { id: "douas-pardon-coraniques", label: "Douas coraniques pour le pardon" },
  { id: "douas-pardon-prophetiques", label: "Douas prophétiques d&apos;istighfar" },
  { id: "vertus-istighfar", label: "Les vertus spirituelles de l&apos;istighfar" },
  { id: "moments-istighfar", label: "Quand et comment demander pardon" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua pour demander pardon à Allah ?",
    answer:
      "La meilleure doua pour demander pardon est le sayyid al-istighfar (la maîtresse de la demande de pardon). Le Prophète (paix et salut sur lui) a dit que quiconque la récite le matin avec conviction et meurt dans la journée entrera au Paradis, et de même pour celui qui la récite le soir (al-Bukhari). Cette invocation commence par « Allahumma Anta Rabbi, la ilaha illa Anta, khalaqtani wa ana &apos;abduka... ».",
  },
  {
    question: "Combien de fois faut-il dire astaghfirullah par jour ?",
    answer:
      "Le Prophète (paix et salut sur lui) demandait pardon à Allah plus de 70 fois par jour selon certaines narrations, et plus de 100 fois selon d&apos;autres (rapporté par al-Bukhari et Muslim). Il n&apos;y a pas de limite maximale : plus le musulman multiplie l&apos;istighfar, plus il attire la miséricorde d&apos;Allah. L&apos;essentiel est que la demande de pardon soit sincère et accompagnée d&apos;un vrai regret.",
  },
  {
    question: "Quelle est la différence entre istighfar et tawba ?",
    answer:
      "L&apos;istighfar est la demande verbale de pardon à Allah (dire astaghfirullah, réciter des douas de pardon), tandis que la tawba (repentir) est un processus plus complet qui inclut le regret sincère, l&apos;arrêt du péché, la résolution de ne pas y revenir et la restitution des droits d&apos;autrui si nécessaire. L&apos;istighfar fait partie de la tawba, mais la tawba va au-delà de la simple formule verbale.",
  },
  {
    question: "Peut-on demander pardon à Allah en français ?",
    answer:
      "Oui, la demande de pardon peut être formulée dans toute langue, car Allah comprend toutes les langues et connaît ce que recèlent les coeurs. Cependant, il est recommandé d&apos;apprendre les formules prophétiques en arabe, car elles ont été enseignées par le Prophète (paix et salut sur lui) et possèdent une dimension spirituelle particulière. Les supplications personnelles en français restent parfaitement valides.",
  },
  {
    question: "Allah pardonne-t-Il tous les péchés ?",
    answer:
      "Allah pardonne tous les péchés pour celui qui se repent sincèrement. Le Coran affirme : « Dis : Ô Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d&apos;Allah. Car Allah pardonne tous les péchés. Oui, c&apos;est Lui le Pardonneur, le Très Miséricordieux » (Coran 39:53). Le seul péché qu&apos;Allah ne pardonne pas sans repentir est le shirk (associationnisme).",
  },
  {
    question: "Quels sont les meilleurs moments pour faire l'istighfar ?",
    answer:
      "Les meilleurs moments pour l&apos;istighfar sont : le dernier tiers de la nuit (temps du sahar), après chaque prière obligatoire, le matin et le soir dans les adhkar quotidiens, et lors de la prosternation (sujud). Le Coran loue particulièrement ceux qui demandent pardon au temps du sahar (Coran 3:17). L&apos;istighfar peut cependant être pratiqué à tout moment de la journée.",
  },
  {
    question: "L'istighfar a-t-il des bienfaits dans la vie quotidienne ?",
    answer:
      "Oui, l&apos;istighfar apporte de nombreux bienfaits selon le Coran et la Sunna. Allah dit par la bouche de Noé : « Demandez pardon à votre Seigneur, Il vous enverra du ciel des pluies abondantes, vous accordera des biens et des enfants, et vous assignera des jardins et des rivières » (Coran 71:10-12). L&apos;istighfar est donc une cause de subsistance, de soulagement des difficultés et d&apos;exaucement des douas.",
  },
  {
    question: "Quelle doua coranique pour le pardon est la plus connue ?",
    answer:
      "La doua coranique la plus connue pour le pardon est « Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakunanna minal khassirin » (Notre Seigneur, nous nous sommes fait du tort à nous-mêmes. Si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons certainement du nombre des perdants). C&apos;est l&apos;invocation d&apos;Adam et Hawwa (Coran 7:23), et elle est récitée par les musulmans depuis la création de l&apos;humanité.",
  },
];

export default function DouaPardonIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-pardon-islam/#article",
        headline:
          "Doua pour le pardon en islam : invocations d'istighfar authentiques",
        description:
          "Découvrez les douas pour le pardon en islam : sayyid al-istighfar, astaghfirullah, rabbana zalamna anfusana. Textes en arabe, phonétique et traduction française.",
        image: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        datePublished: "2026-03-22",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-pardon-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-pardon-islam/#breadcrumb",
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
            name: "Doua pour le pardon",
            item: "https://www.islamreligion.fr/doua-pardon-islam",
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
          title="Doua pour le pardon en islam : les invocations d&apos;istighfar authentiques"
          subtitle="Les invocations prophétiques et coraniques pour demander pardon à Allah. Textes en arabe, phonétique et traduction française avec hadiths authentiques."
          imageSrc="/images/doua-mains-rayons-motifs-islamiques.jpg"
          imageAlt="Mains levées en invocation doua pour le pardon avec rayons de lumière et motifs islamiques"
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
                <span className="text-foreground">Doua pour le pardon</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;istighfar (demande de pardon) est l&apos;une des
                  adorations les plus puissantes en islam. Le Prophète (paix et
                  salut sur lui) demandait pardon à Allah plus de 100 fois par
                  jour, alors qu&apos;il était exempt de tout péché. Le Coran et
                  la Sunna regorgent d&apos;invocations pour obtenir la
                  maghfira (pardon divin), dont le sayyid al-istighfar, considéré
                  comme la maîtresse de toutes les demandes de pardon. Découvrez
                  dans cet article les douas authentiques pour le pardon, avec
                  leurs textes en arabe, leur phonétique et leur traduction.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : L'importance de l'istighfar */}
              {/* ============================================ */}
              <section id="importance-istighfar" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance de l&apos;istighfar (doua pardon) en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;istighfar, du verbe arabe <strong>istaghfara</strong>{" "}
                  (استغفر), signifie littéralement &laquo;&nbsp;demander le
                  pardon&nbsp;&raquo;. C&apos;est un acte d&apos;adoration
                  fondamental en islam qui consiste à implorer Allah de couvrir
                  nos péchés, de les effacer et de nous accorder Sa miséricorde.
                  Le terme <strong>maghfira</strong> (مغفرة) dérive de la même
                  racine et désigne le pardon divin, l&apos;un des attributs les
                  plus mentionnés dans le Coran.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah se présente dans le Coran sous les noms
                  d&apos;<strong>Al-Ghafur</strong> (le Très Pardonneur),
                  <strong> Al-Ghaffar</strong> (Celui qui ne cesse de pardonner)
                  et <strong>At-Tawwab</strong> (Celui qui accepte le repentir).
                  Ces noms divins témoignent de l&apos;immensité de la
                  miséricorde d&apos;Allah et de Sa volonté de pardonner à Ses
                  serviteurs. Le Coran déclare avec une clarté absolue :
                  &laquo;&nbsp;Dis : Ô Mes serviteurs qui avez commis des excès
                  à votre propre détriment, ne désespérez pas de la miséricorde
                  d&apos;Allah. Car Allah pardonne tous les péchés&nbsp;&raquo;
                  (Coran, 39:53).
                </p>

                <HadithCard
                  arabic="والله إني لأستغفر الله وأتوب إليه في اليوم أكثر من سبعين مرة"
                  text="Par Allah, je demande pardon à Allah et je me repens devant Lui plus de 70 fois par jour."
                  source="Rapporté par al-Bukhari (6307)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est d&apos;une profondeur remarquable : le Prophète
                  (paix et salut sur lui), dont les péchés passés et futurs ont
                  été pardonnés, multipliait pourtant l&apos;istighfar
                  quotidiennement. Cela montre que la demande de pardon
                  n&apos;est pas réservée aux grands pécheurs, mais constitue un
                  acte d&apos;humilité et de proximité avec Allah que tout
                  musulman doit cultiver. L&apos;istighfar est à la fois un
                  aveu de notre faiblesse humaine et une reconnaissance de la
                  grandeur divine.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;istighfar efface les péchés :</strong>{" "}
                      chaque demande de pardon sincère est une occasion pour
                      Allah d&apos;effacer les fautes, petites et grandes, du
                      registre de Son serviteur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;istighfar attire la subsistance :</strong>{" "}
                      le Coran enseigne que demander pardon est une cause de
                      pluie abondante, de biens et de descendance (Coran,
                      71:10-12).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;istighfar soulage les difficultés :</strong>{" "}
                      le Prophète (paix et salut sur lui) a enseigné que celui
                      qui persévère dans l&apos;istighfar, Allah lui accordera
                      une issue à chaque difficulté et une sortie à chaque
                      angoisse (Abu Dawud).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/prosternation-sujud-priere-islam-mosquee.jpg"
                    alt="Prosternation en prière dans une mosquée symbolisant l&apos;humilité et la demande de pardon en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Sayyid al-istighfar */}
              {/* ============================================ */}
              <section id="sayyid-al-istighfar" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Sayyid al-istighfar : la maîtresse des douas de pardon
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>sayyid al-istighfar</strong> (سيد الاستغفار) est
                  considéré comme la plus noble et la plus complète des
                  invocations pour demander pardon à Allah. Le Prophète (paix et
                  salut sur lui) lui a attribué le titre de
                  &laquo;&nbsp;maîtresse de la demande de pardon&nbsp;&raquo;,
                  ce qui en fait la doua pardon par excellence en islam.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma Anta Rabbi, la ilaha
                    illa Anta, khalaqtani wa ana &apos;abduka, wa ana &apos;ala
                    &apos;ahdika wa wa&apos;dika mastata&apos;tu, a&apos;udhu bika
                    min sharri ma sana&apos;tu, abu&apos;u laka bi ni&apos;matika
                    &apos;alayya wa abu&apos;u bi dhanbi, faghfir li fa innahu la
                    yaghfiru adh-dhunuba illa Anta
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, Tu es mon Seigneur, il n&apos;y a de
                    divinité que Toi. Tu m&apos;as créé et je suis Ton serviteur.
                    Je suis fidèle à Ton pacte et à Ta promesse autant que je le
                    peux. Je cherche refuge auprès de Toi contre le mal de ce que
                    j&apos;ai commis. Je reconnais devant Toi Tes bienfaits sur
                    moi et je reconnais mon péché. Pardonne-moi, car nul ne
                    pardonne les péchés si ce n&apos;est Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6306)
                  </p>
                </div>

                <HadithCard
                  arabic="من قالها من النهار موقنا بها فمات من يومه قبل أن يمسي فهو من أهل الجنة ومن قالها من الليل وهو موقن بها فمات قبل أن يصبح فهو من أهل الجنة"
                  text="Quiconque la récite le jour avec conviction et meurt avant le soir est parmi les gens du Paradis, et quiconque la récite la nuit avec conviction et meurt avant le matin est parmi les gens du Paradis."
                  source="Rapporté par al-Bukhari (6306)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette promesse prophétique extraordinaire montre la valeur
                  immense du sayyid al-istighfar. L&apos;invocation contient
                  tous les éléments du repentir sincère : la reconnaissance de
                  la seigneurie d&apos;Allah, l&apos;unicité divine (tawhid),
                  la reconnaissance de son statut de serviteur, l&apos;engagement
                  à respecter le pacte avec Allah, la demande de protection
                  contre le mal de ses propres actes, la gratitude pour les
                  bienfaits reçus, l&apos;aveu du péché et enfin la demande de
                  pardon. C&apos;est une doua pardon complète et parfaite.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter le sayyid al-istighfar
                  chaque matin après la prière du Fajr et chaque soir après la
                  prière du Maghrib. La condition essentielle mentionnée dans le
                  hadith est la <strong>conviction</strong> (yaqin) : il ne
                  s&apos;agit pas de réciter machinalement, mais de comprendre
                  chaque mot et de le ressentir au plus profond du coeur. Pour
                  approfondir votre compréhension du repentir, consultez notre
                  article sur la{" "}
                  <Link href="/doua-repentir-tawba-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du repentir (tawba) en islam</Link>.
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
              {/* SECTION 3 : Douas coraniques */}
              {/* ============================================ */}
              <section id="douas-pardon-coraniques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas coraniques pour demander pardon à Allah
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran contient de nombreuses invocations de pardon
                  prononcées par les prophètes et les croyants. Ces douas
                  coraniques ont une valeur particulière car elles sont la parole
                  même d&apos;Allah, enseignées comme modèle à toute
                  l&apos;humanité. Les réciter, c&apos;est reprendre les mots
                  que les meilleurs des hommes ont adressés à leur Créateur.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua d&apos;Adam et Hawwa (paix sur eux)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est la toute première doua de pardon de l&apos;histoire
                  de l&apos;humanité. Après avoir désobéi à Allah en mangeant
                  de l&apos;arbre interdit, Adam et Hawwa (paix sur eux) ont
                  prononcé cette invocation qui est devenue le modèle éternel
                  du repentir sincère.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana zalamna anfusana wa in
                    lam taghfir lana wa tarhamna lanakunanna minal khassirin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Notre Seigneur, nous nous sommes fait du tort à
                    nous-mêmes. Si Tu ne nous pardonnes pas et ne nous fais pas
                    miséricorde, nous serons certainement du nombre des
                    perdants&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-A&apos;raf (7:23)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de Younous (Jonas) dans le ventre de la baleine
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le prophète Younous (paix sur lui), englouti par la baleine
                  dans les ténèbres, a adressé cette invocation puissante à
                  Allah. Le Prophète Muhammad (paix et salut sur lui) a dit
                  qu&apos;aucun musulman n&apos;invoque Allah avec cette doua
                  sans qu&apos;Il ne lui réponde. Pour en savoir plus sur cette
                  invocation extraordinaire, consultez notre article sur les{" "}
                  <Link href="/doua-prophetes-younous-moussa-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas des prophètes Younous et Moussa</Link>.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illa Anta subhanaka
                    inni kuntu min adh-dhalimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité que Toi, gloire à
                    Toi, j&apos;étais certes du nombre des
                    injustes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Anbiya (21:87)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua des croyants sincères
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation coranique est celle des serviteurs doués
                  d&apos;intelligence (ulu al-albab) qui, après avoir commis
                  une faute ou un péché, se tournent immédiatement vers Allah
                  pour implorer Son pardon. Elle illustre l&apos;attitude du
                  croyant qui ne persiste pas dans le péché.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana faghfir lana
                    dhunubana wa kaffir &apos;anna sayyi&apos;atina wa
                    tawaffana ma&apos;al abrar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Notre Seigneur, pardonne-nous nos péchés,
                    efface nos méfaits et fais-nous mourir avec les vertueux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Imran (3:193)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces douas coraniques de pardon sont d&apos;une richesse
                  spirituelle inestimable. Elles combinent la reconnaissance de
                  la faute, l&apos;humilité face à la grandeur divine et la
                  confiance dans la miséricorde d&apos;Allah. Les réciter
                  régulièrement permet au croyant de maintenir un lien constant
                  de repentir et de purification avec son Créateur.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas prophétiques */}
              {/* ============================================ */}
              <section id="douas-pardon-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas prophétiques d&apos;istighfar
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus du sayyid al-istighfar, le Prophète Muhammad (paix et
                  salut sur lui) a enseigné de nombreuses formules de demande de
                  pardon que tout musulman peut intégrer dans ses invocations
                  quotidiennes. Ces formules, transmises par des chaînes
                  authentiques, constituent le trésor de l&apos;istighfar
                  prophétique.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Astaghfirullah : la formule la plus courante
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est la formule d&apos;istighfar la plus simple et la
                  plus fréquemment utilisée par le Prophète (paix et salut sur
                  lui). Elle peut être récitée à tout moment de la journée et
                  constitue le pilier de la demande de pardon quotidienne.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Astaghfirullaha al-&apos;Adhim
                    alladhi la ilaha illa Huwa al-Hayyu al-Qayyum wa atubu ilayh
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je demande pardon à Allah le Majestueux, Celui
                    en dehors duquel il n&apos;y a pas de divinité, le Vivant,
                    le Subsistant, et je me repens devant Lui&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (1517) et at-Tirmidhi (3577)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de pardon après chaque prière
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Après chaque prière obligatoire, le Prophète (paix et salut
                  sur lui) avait l&apos;habitude de demander pardon trois fois
                  avant de réciter les autres adhkar. Cette pratique souligne que
                  même après un acte d&apos;adoration aussi noble que la prière,
                  le croyant reconnaît ses manquements et implore la
                  miséricorde divine.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Astaghfirullah, astaghfirullah,
                    astaghfirullah (trois fois)
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je demande pardon à Allah&nbsp;&raquo; (trois
                    fois)
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (591)
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-chapelet-bois-islam-versets.jpg"
                    alt="Coran ouvert avec chapelet en bois symbolisant la récitation des douas de pardon et l&apos;istighfar en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua complète de pardon enseignée à Abu Bakr
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Abu Bakr as-Siddiq (qu&apos;Allah l&apos;agrée) demanda au
                  Prophète (paix et salut sur lui) de lui enseigner une
                  invocation à réciter dans sa prière. Le Prophète lui enseigna
                  cette doua magnifique qui englobe toutes les dimensions du
                  pardon.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِّنْ عِندِكَ وَارْحَمْنِي إِنَّكَ أَنتَ الْغَفُورُ الرَّحِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni zalamtu nafsi
                    dhulman kathiran wa la yaghfiru adh-dhunuba illa Anta faghfir
                    li maghfiratan min &apos;indika warhamni innaka Anta
                    al-Ghafuru ar-Rahim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, je me suis fait beaucoup de tort à
                    moi-même et nul ne pardonne les péchés si ce n&apos;est Toi.
                    Accorde-moi un pardon venant de Toi et fais-moi miséricorde,
                    car Tu es le Pardonneur, le Très Miséricordieux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (834) et Muslim (2705)
                  </p>
                </div>

                <HadithCard
                  arabic="إن العبد إذا اعترف بذنبه ثم تاب إلى الله تاب الله عليه"
                  text="Lorsque le serviteur reconnaît son péché puis se repent devant Allah, Allah accepte son repentir."
                  source="Rapporté par al-Bukhari (4141) et Muslim (2769)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Vertus de l'istighfar */}
              {/* ============================================ */}
              <section id="vertus-istighfar" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les vertus spirituelles et matérielles de l&apos;istighfar
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;istighfar ne se limite pas à l&apos;effacement des
                  péchés. Le Coran et la Sunna détaillent de nombreux bienfaits
                  que la demande de pardon procure au croyant, tant sur le plan
                  spirituel que matériel. Ces bienfaits constituent une
                  motivation puissante pour faire de l&apos;istighfar une
                  habitude quotidienne.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;effacement des péchés et la purification du coeur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Chaque péché laisse une tache noire sur le coeur du
                        croyant. L&apos;istighfar nettoie ces taches et
                        redonne au coeur sa luminosité. Le Prophète (paix et
                        salut sur lui) a dit que lorsque le serviteur commet un
                        péché, un point noir est inscrit sur son coeur, et
                        s&apos;il se repent et demande pardon, son coeur est
                        purifié (at-Tirmidhi).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;abondance de la subsistance (rizq)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Allah relate dans le Coran les paroles du prophète Noé
                        à son peuple : &laquo;&nbsp;Demandez pardon à votre
                        Seigneur, car Il est grand Pardonneur. Il vous enverra
                        du ciel des pluies abondantes, vous accordera des biens
                        et des enfants, et vous assignera des jardins et des
                        rivières&nbsp;&raquo; (Coran, 71:10-12). L&apos;istighfar
                        est donc une clé de la subsistance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La sortie des difficultés et des angoisses
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné :
                        &laquo;&nbsp;Quiconque persévère dans l&apos;istighfar,
                        Allah lui accordera une issue à chaque difficulté, un
                        soulagement à chaque angoisse et le pourvoira d&apos;où
                        il ne s&apos;y attend pas&nbsp;&raquo; (Abu Dawud).
                        Cette promesse prophétique fait de l&apos;istighfar un
                        remède universel contre les épreuves de la vie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La protection contre le châtiment divin
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Allah dit dans le Coran : &laquo;&nbsp;Allah n&apos;est
                        point tel qu&apos;Il les châtie alors que tu es parmi
                        eux. Et Allah n&apos;est point tel qu&apos;Il les châtie
                        alors qu&apos;ils demandent pardon&nbsp;&raquo; (Coran,
                        8:33). L&apos;istighfar collectif d&apos;une communauté
                        est donc une protection contre les calamités et les
                        châtiments divins.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;élévation en degrés au Paradis
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;istighfar ne fait pas que protéger du châtiment :
                        il élève le rang du croyant auprès d&apos;Allah. Les
                        péchés transformés en bonnes actions par le repentir
                        sincère augmentent la balance des bonnes oeuvres, comme
                        l&apos;indique le verset : &laquo;&nbsp;Sauf celui qui
                        se repent, croit et accomplit le bien. Pour ceux-là,
                        Allah changera leurs mauvaises actions en bonnes
                        actions&nbsp;&raquo; (Coran, 25:70).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Quand et comment */}
              {/* ============================================ */}
              <section id="moments-istighfar" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quand et comment demander pardon à Allah
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;istighfar peut être pratiqué à tout moment, mais
                  certains instants et certaines conditions sont particulièrement
                  propices à l&apos;acceptation de la doua pardon. Connaître
                  ces moments permet au croyant de maximiser les fruits de sa
                  demande de pardon.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le dernier tiers de la nuit (sahar)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Allah descend au ciel le plus bas durant le dernier tiers
                      de la nuit et dit : &laquo;&nbsp;Y a-t-il quelqu&apos;un
                      qui demande pardon pour que Je lui pardonne&nbsp;?&nbsp;&raquo;
                      (al-Bukhari et Muslim). Le Coran loue spécifiquement ceux
                      qui demandent pardon au temps du sahar (Coran, 3:17).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Après chaque prière obligatoire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) demandait pardon trois
                      fois immédiatement après le salam de chaque prière. Cette
                      pratique régulière ancre l&apos;istighfar dans le quotidien
                      et rappelle au croyant sa dépendance constante envers la
                      miséricorde divine.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Dans la prosternation (sujud)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit : &laquo;&nbsp;Le
                      plus proche que le serviteur soit de son Seigneur, c&apos;est
                      lorsqu&apos;il est en prosternation. Multipliez-y donc les
                      invocations&nbsp;&raquo; (Muslim). La prosternation est un
                      moment d&apos;humilité parfaite, idéal pour l&apos;istighfar.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le matin et le soir (adhkar)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Intégrer le sayyid al-istighfar et les formules de pardon
                      dans les invocations du matin et du soir permet de
                      commencer et de terminer chaque journée sous le signe du
                      repentir et de la purification spirituelle.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà des moments propices, les conditions du coeur sont
                  essentielles pour que l&apos;istighfar soit accepté. Le
                  croyant doit ressentir un véritable regret pour ses péchés,
                  être déterminé à ne pas y revenir et avoir la conviction
                  qu&apos;Allah pardonnera. L&apos;istighfar mécanique, récité
                  sans présence du coeur, perd une grande partie de son
                  efficacité spirituelle. Comme le disait Rabi&apos;a
                  al-&apos;Adawiyya : &laquo;&nbsp;Notre istighfar nécessite
                  lui-même un istighfar&nbsp;&raquo;, rappelant que même notre
                  demande de pardon peut être entachée de négligence.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La sincérité (ikhlas) :</strong> demander pardon
                      uniquement pour la satisfaction d&apos;Allah, sans
                      ostentation ni habitude machinale.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le regret sincère (nadam) :</strong> ressentir au
                      plus profond de son coeur la tristesse d&apos;avoir
                      désobéi à Allah. Le Prophète (paix et salut sur lui) a
                      dit : &laquo;&nbsp;Le regret est le repentir&nbsp;&raquo;
                      (Ibn Majah).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La résolution de ne pas récidiver :</strong>{" "}
                      s&apos;engager fermement à abandonner le péché et à ne
                      pas y revenir. Si l&apos;on retombe par faiblesse,
                      renouveler l&apos;istighfar sans désespérer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La restitution des droits d&apos;autrui :</strong>{" "}
                      si le péché implique une injustice envers une personne, le
                      repentir exige de lui rendre ses droits ou de lui demander
                      pardon directement.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le repentir sincère en islam (tawba)"
                  description="Découvrez les conditions complètes du repentir sincère et les étapes pour revenir à Allah après tout péché."
                  href="/doua-repentir-tawba-islam"
                />
              </section>

              {/* ============================================ */}
              {/* AffiliateForm before FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter les douas avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
                preselect="arabe"
              />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
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
                    href="/doua-repentir-tawba-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du repentir (tawba)
                  </Link>
                  <Link
                    href="/doua-prophetes-younous-moussa-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Douas des prophètes Younous et Moussa
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
