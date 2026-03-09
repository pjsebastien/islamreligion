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
    "Doua du repentir (tawba) en islam : invocations pour demander pardon à Allah",
  description:
    "Découvrez les douas du repentir (tawba) en islam : sayyid al-istighfar, invocations coraniques en arabe avec phonétique et traduction, conditions du repentir sincère et salat at-tawba.",
  openGraph: {
    title:
      "Doua du repentir (tawba) en islam : invocations pour demander pardon à Allah",
    description:
      "Les invocations authentiques du repentir en islam : sayyid al-istighfar, douas coraniques, salat at-tawba, conditions de la tawba sincère et hadiths sur le pardon d&apos;Allah.",
    url: "https://www.islamreligion.fr/doua-repentir-tawba-islam",
    images: [
      {
        url: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-repentir-tawba-islam",
  },
};

const tocItems = [
  { id: "tawba-en-islam", label: "La tawba (repentir) en islam" },
  { id: "conditions-repentir", label: "Les conditions du repentir sincère" },
  { id: "sayyid-al-istighfar", label: "Sayyid al-istighfar : la maîtresse des douas" },
  { id: "douas-coraniques-tawba", label: "Douas coraniques pour la tawba" },
  { id: "salat-at-tawba", label: "La salat at-tawba (prière du repentir)" },
  { id: "douas-prophetiques-pardon", label: "Douas prophétiques pour le pardon" },
  { id: "misericorde-allah", label: "La miséricorde infinie d&apos;Allah" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua pour le repentir en islam ?",
    answer:
      "La meilleure doua pour le repentir est le sayyid al-istighfar (la maîtresse de la demande de pardon), enseignée par le Prophète (paix et salut sur lui). Elle commence par « Allahumma Anta Rabbi, la ilaha illa Anta, khalaqtani wa ana &apos;abduka... ». Le Prophète a dit que celui qui la récite avec conviction le jour et meurt cette nuit-là entrera au Paradis (al-Bukhari).",
  },
  {
    question: "Quelles sont les conditions du repentir sincère (tawba) en islam ?",
    answer:
      "Les savants ont défini quatre conditions pour que la tawba soit acceptée : cesser immédiatement le péché, regretter sincèrement de l&apos;avoir commis, prendre la ferme résolution de ne plus y revenir, et restituer les droits d&apos;autrui si le péché impliquait une injustice envers quelqu&apos;un. Si ces conditions sont réunies, Allah promet d&apos;accepter le repentir.",
  },
  {
    question: "Peut-on se repentir après avoir commis un grand péché ?",
    answer:
      "Oui, absolument. Allah dit dans le Coran : « Dis : Ô Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d&apos;Allah. Car Allah pardonne tous les péchés » (Az-Zumar, 39:53). La tawba est acceptée pour tous les péchés, aussi graves soient-ils, tant que le repentir est sincère et intervient avant l&apos;agonie de la mort.",
  },
  {
    question: "Qu'est-ce que la salat at-tawba ?",
    answer:
      "La salat at-tawba est une prière surérogatoire de deux rak&apos;at accomplie spécifiquement pour le repentir. Le Prophète (paix et salut sur lui) a dit : « Il n&apos;est aucun serviteur qui commet un péché, puis se purifie et accomplit deux rak&apos;at, puis demande pardon à Allah, sans qu&apos;Allah ne lui pardonne » (Abu Dawud, at-Tirmidhi). On effectue les ablutions, on prie deux rak&apos;at, puis on invoque Allah pour le pardon.",
  },
  {
    question: "Combien de fois par jour le Prophète demandait-il pardon à Allah ?",
    answer:
      "Le Prophète (paix et salut sur lui) demandait pardon à Allah plus de 70 fois par jour, voire 100 fois selon certaines narrations. Il disait : « Par Allah, je demande pardon à Allah et je me repens vers Lui plus de 70 fois par jour » (al-Bukhari). Cela montre que l&apos;istighfar est une pratique constante, même pour celui qui est déjà pardonné.",
  },
  {
    question: "La tawba peut-elle être faite en français ?",
    answer:
      "Oui, la tawba et la demande de pardon peuvent être faites dans toute langue. Allah entend et comprend toutes les langues. Cependant, il est recommandé d&apos;apprendre les formules prophétiques en arabe comme le sayyid al-istighfar, car elles portent une bénédiction particulière. Pour les supplications personnelles et le dialogue intime avec Allah, le français est parfaitement valide.",
  },
  {
    question: "Jusqu'à quand peut-on se repentir en islam ?",
    answer:
      "La porte du repentir reste ouverte jusqu&apos;à deux moments : au niveau individuel, jusqu&apos;à ce que l&apos;âme atteigne la gorge lors de l&apos;agonie (al-ghargharah) ; au niveau collectif, jusqu&apos;au lever du soleil de l&apos;ouest, signe majeur de la fin des temps. Le Prophète (paix et salut sur lui) a dit : « Allah tend Sa main la nuit pour accepter le repentir de celui qui a péché le jour, et Il tend Sa main le jour pour accepter le repentir de celui qui a péché la nuit » (Muslim).",
  },
  {
    question: "Quelle est la doua coranique la plus connue pour demander pardon ?",
    answer:
      "La doua coranique la plus célèbre pour demander pardon est celle d&apos;Adam et Hawwa (Eve) : « Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakounanna minal khassirin » (Notre Seigneur, nous nous sommes fait du tort à nous-mêmes. Si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons du nombre des perdants) - sourate Al-A&apos;raf, 7:23.",
  },
];

export default function DouaRepentirTawbaIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-repentir-tawba-islam/#article",
        headline:
          "Doua du repentir (tawba) en islam : invocations pour demander pardon à Allah",
        description:
          "Découvrez les douas du repentir (tawba) en islam : sayyid al-istighfar, invocations coraniques, conditions du repentir sincère et salat at-tawba.",
        image: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        datePublished: "2026-04-01",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-repentir-tawba-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-repentir-tawba-islam/#breadcrumb",
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
            name: "Doua du repentir (tawba)",
            item: "https://www.islamreligion.fr/doua-repentir-tawba-islam",
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
          title="Doua du repentir (tawba) en islam : invocations pour demander pardon à Allah"
          subtitle="Les invocations authentiques du repentir tirées du Coran et de la Sunna. Sayyid al-istighfar, douas coraniques, salat at-tawba : textes en arabe, phonétique et traduction."
          imageSrc="/images/prosternation-sujud-priere-islam-mosquee.jpg"
          imageAlt="Prosternation sujud dans une mosquée illustrant le repentir et l'humilité devant Allah en islam"
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
                <span className="text-foreground">Doua du repentir (tawba)</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La tawba (repentir) est l&apos;un des piliers de la vie
                  spirituelle en islam. Allah aime celui qui se repent et
                  promet de pardonner tous les péchés sans exception à
                  condition que le repentir soit sincère. Le Prophète (paix
                  et salut sur lui) nous a enseigné des invocations
                  puissantes pour demander pardon, dont le sayyid al-istighfar,
                  les douas coraniques d&apos;Adam et de Younous, et la
                  pratique de la salat at-tawba. Découvrez ces invocations
                  authentiques en arabe, avec leur phonétique et leur
                  traduction française.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La tawba en islam */}
              {/* ============================================ */}
              <section id="tawba-en-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La tawba (repentir) en islam : un acte d&apos;adoration fondamental
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme arabe <strong>tawba</strong> (توبة) signifie
                  littéralement &laquo;&nbsp;revenir&nbsp;&raquo;. En islam,
                  il désigne le retour sincère du serviteur vers Allah après
                  avoir commis un péché, accompagné de regret et de la ferme
                  résolution de ne plus récidiver. Contrairement à une idée
                  répandue, la tawba n&apos;est pas un aveu de faiblesse :
                  c&apos;est l&apos;un des actes d&apos;adoration les plus
                  nobles et les plus aimés d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran mentionne le repentir dans plus de 80 versets,
                  soulignant son importance capitale dans la relation entre le
                  serviteur et son Créateur. Allah Se désigne Lui-même comme
                  &laquo;&nbsp;At-Tawwab&nbsp;&raquo; (Celui qui accepte le
                  repentir de manière répétée) et &laquo;&nbsp;Al-Ghafur&nbsp;&raquo;
                  (Le Très Pardonneur). Ces deux noms divins illustrent que
                  le pardon n&apos;est pas une exception dans la relation avec
                  Allah, mais un trait fondamental de Sa miséricorde envers
                  Ses créatures.
                </p>

                <HadithCard
                  arabic="كل بني آدم خطاء وخير الخطائين التوابون"
                  text="Tout fils d'Adam est pécheur, et les meilleurs des pécheurs sont ceux qui se repentent constamment."
                  source="Rapporté par at-Tirmidhi (2499), Ibn Majah (4251)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith établit une réalité fondamentale : le péché fait
                  partie de la nature humaine. Nul être humain n&apos;est à
                  l&apos;abri de la faute. Ce qui distingue le croyant
                  vertueux, ce n&apos;est pas l&apos;absence de péché, mais
                  sa capacité à revenir constamment vers Allah avec humilité
                  et repentir. Le Prophète (paix et salut sur lui) lui-même,
                  bien qu&apos;il fût préservé du péché, demandait pardon à
                  Allah plus de 70 fois par jour, montrant ainsi que
                  l&apos;istighfar est une pratique quotidienne essentielle
                  pour tout musulman.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah exprime dans le Coran Sa joie immense lorsqu&apos;un
                  serviteur se repent sincèrement. Le Prophète (paix et salut
                  sur lui) a illustré cette joie divine par une parabole
                  célèbre : celle d&apos;un homme perdu dans le désert qui
                  retrouve son chameau chargé de provisions après avoir perdu
                  tout espoir. La joie d&apos;Allah pour le repentir de Son
                  serviteur est plus grande encore que la joie de cet homme.
                  Cette image puissante doit encourager tout pécheur à ne
                  jamais désespérer de la miséricorde divine.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/prosternation-sujud-priere-islam-mosquee.jpg"
                    alt="Musulman en prosternation sujud dans une mosquée symbolisant l'humilité et le repentir devant Allah"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Conditions du repentir sincère */}
              {/* ============================================ */}
              <section id="conditions-repentir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les conditions du repentir sincère en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Pour que la tawba soit valide et acceptée par Allah, les
                  savants de l&apos;islam ont identifié des conditions
                  essentielles à réunir. L&apos;imam an-Nawawi, Ibn al-Qayyim
                  et d&apos;autres grands savants ont détaillé ces conditions
                  en se basant sur le Coran et la Sunna. Sans ces conditions,
                  le repentir reste superficiel et risque de n&apos;être
                  qu&apos;une parole sans effet.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cesser immédiatement le péché :</strong>{" "}
                      le repentir n&apos;a aucune valeur si la personne
                      continue à commettre le péché dont elle se repent. La
                      première étape est l&apos;arrêt complet et immédiat de
                      la transgression.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Éprouver un regret sincère (nadam) :</strong>{" "}
                      le coeur doit ressentir une véritable tristesse et un
                      remords profond pour avoir désobéi à Allah. Le Prophète
                      (paix et salut sur lui) a dit : &laquo;&nbsp;Le regret
                      est le repentir&nbsp;&raquo; (Ibn Majah). Ce sentiment
                      de remords est le noyau même de la tawba.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prendre la ferme résolution de ne plus récidiver :</strong>{" "}
                      il ne suffit pas de regretter le passé. Le repentant
                      doit avoir la détermination sincère de ne plus retomber
                      dans le même péché. Si la personne retombe malgré cette
                      résolution, elle peut se repentir à nouveau, car la
                      porte de la tawba reste ouverte.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Restituer les droits d&apos;autrui :</strong>{" "}
                      si le péché impliquait un tort envers une autre personne
                      (vol, médisance, injustice), il faut restituer les
                      droits usurpés ou demander pardon à la personne lésée.
                      Le <Link href="/doua-pardon-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">pardon entre les serviteurs</Link> est
                      indispensable pour que le repentir soit complet.
                    </span>
                  </li>
                </ul>

                <HadithCard
                  arabic="إن الله يبسط يده بالليل ليتوب مسيء النهار ويبسط يده بالنهار ليتوب مسيء الليل حتى تطلع الشمس من مغربها"
                  text="Allah tend Sa main la nuit pour accepter le repentir de celui qui a péché le jour, et Il tend Sa main le jour pour accepter le repentir de celui qui a péché la nuit, jusqu'à ce que le soleil se lève de l'ouest."
                  source="Rapporté par Muslim (2759)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith magnifique illustre la patience et la générosité
                  infinies d&apos;Allah envers Ses serviteurs pécheurs. Jour
                  et nuit, sans relâche, Allah attend le retour de Ses
                  créatures. Il ne Se lasse jamais de pardonner tant que le
                  serviteur ne se lasse pas de se repentir. Cette réalité
                  doit remplir le coeur du croyant d&apos;espoir et
                  l&apos;encourager à multiplier les demandes de pardon, quel
                  que soit le nombre de ses chutes.
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
              {/* SECTION 3 : Sayyid al-istighfar */}
              {/* ============================================ */}
              <section id="sayyid-al-istighfar" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Sayyid al-istighfar : la maîtresse des demandes de pardon
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi toutes les invocations de repentir, le <strong>sayyid
                  al-istighfar</strong> (سيد الاستغفار) occupe une place
                  unique. Le Prophète (paix et salut sur lui) l&apos;a qualifié
                  de &laquo;&nbsp;maîtresse des demandes de pardon&nbsp;&raquo;
                  et a promis une récompense exceptionnelle à celui qui la
                  récite avec conviction. Cette doua est considérée par les
                  savants comme l&apos;invocation la plus complète et la plus
                  puissante pour obtenir le pardon d&apos;Allah.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma Anta Rabbi, la ilaha illa Anta, khalaqtani wa ana &apos;abduka, wa ana &apos;ala &apos;ahdika wa wa&apos;dika mastata&apos;tu, a&apos;udhu bika min sharri ma sana&apos;tu, abu&apos;u laka bi ni&apos;matika &apos;alayya wa abu&apos;u bi dhanbi, faghfir li fa innahu la yaghfiru adh-dhunuba illa Anta
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Tu es mon Seigneur. Il n&apos;y a de divinité digne d&apos;adoration que Toi. Tu m&apos;as créé et je suis Ton serviteur. Je suis fidèle à Ton pacte et à Ta promesse autant que je le peux. Je cherche refuge auprès de Toi contre le mal de ce que j&apos;ai commis. Je reconnais Ton bienfait sur moi et je reconnais mon péché. Pardonne-moi, car nul ne pardonne les péchés si ce n&apos;est Toi.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6306)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit au sujet de cette
                  invocation : &laquo;&nbsp;Celui qui la prononce le jour avec
                  conviction et meurt ce jour-là avant le soir entrera au
                  Paradis. Et celui qui la prononce la nuit avec conviction
                  et meurt avant le matin entrera au Paradis.&nbsp;&raquo;
                  Cette promesse prophétique souligne la valeur immense de
                  cette doua et encourage le croyant à l&apos;intégrer dans
                  ses adhkar (invocations) quotidiens, le matin et le soir.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;analyse de cette invocation révèle sa profondeur
                  théologique. Elle commence par la reconnaissance de la
                  seigneurie d&apos;Allah (rububiyyah) et de Son unicité
                  (tawhid). Puis elle affirme le lien de servitude
                  (&apos;ubudiyyah) entre le croyant et son Créateur. Ensuite,
                  elle exprime l&apos;engagement à respecter le pacte divin
                  tout en reconnaissant la faiblesse humaine. Enfin, elle
                  contient l&apos;aveu du péché et la demande de pardon, avec
                  la reconnaissance qu&apos;Allah seul peut absoudre les
                  fautes. Chaque mot de cette doua est chargé de sens et de
                  spiritualité.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas coraniques pour la tawba */}
              {/* ============================================ */}
              <section id="douas-coraniques-tawba" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas coraniques pour le repentir (tawba)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran contient de nombreuses invocations que les prophètes
                  et les croyants adressèrent à Allah pour implorer Son
                  pardon. Ces douas coraniques sont d&apos;une puissance
                  particulière car elles sont la Parole même d&apos;Allah,
                  révélées pour que nous les utilisions dans nos moments de
                  repentir et de retour vers Lui.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. La doua d&apos;Adam et Hawwa (Eve)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est la toute première doua de repentir de
                  l&apos;humanité. Après avoir désobéi à Allah en mangeant de
                  l&apos;arbre interdit, Adam et Hawwa prononcèrent cette
                  invocation qui devint le modèle de tout repentir sincère.
                  Elle est considérée comme la doua fondatrice de la tawba.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakounanna minal khassirin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Notre Seigneur, nous nous sommes fait du tort à nous-mêmes. Si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons certainement du nombre des perdants.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-A&apos;raf (7:23)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. La doua de Younous (Jonas) dans la baleine
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le prophète Younous (paix sur lui), englouti par la baleine
                  dans les ténèbres abyssales, prononça cette invocation
                  devenue l&apos;une des plus célèbres du Coran. Le Prophète
                  Muhammad (paix et salut sur lui) a affirmé qu&apos;aucun
                  musulman n&apos;invoque Allah avec cette doua sans qu&apos;il
                  ne lui soit répondu.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité digne d&apos;adoration que Toi, gloire et pureté à Toi, j&apos;ai été parmi les injustes.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Anbiya (21:87)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. La doua de Moussa (Moïse)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Après avoir involontairement causé la mort d&apos;un homme,
                  Moussa (paix sur lui) se tourna immédiatement vers Allah
                  avec cette invocation de repentir, reconnaissant sa faute
                  et implorant le pardon divin.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi inni zalamtu nafsi faghfir li
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je me suis fait du tort à moi-même, pardonne-moi.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Qasas (28:16)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces douas coraniques partagent un point commun essentiel :
                  la reconnaissance de la faute et l&apos;aveu de sa propre
                  injustice envers soi-même. Chaque prophète commence par
                  reconnaître qu&apos;il s&apos;est fait du tort avant de
                  demander le pardon divin. Cette attitude d&apos;humilité et
                  de responsabilité est le coeur même du repentir en islam.
                  Pour approfondir les invocations de ces prophètes,
                  consultez notre article sur les{" "}
                  <Link href="/doua-prophetes-younous-moussa-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    douas des prophètes Younous et Moussa
                  </Link>.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette d'un musulman en prière dans une mosquée au coucher du soleil illustrant le repentir sincère"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Salat at-tawba */}
              {/* ============================================ */}
              <section id="salat-at-tawba" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La salat at-tawba : la prière du repentir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus des invocations verbales, l&apos;islam a institué
                  une prière spécifique pour le repentir : la <strong>salat
                  at-tawba</strong> (صلاة التوبة). Cette prière surérogatoire
                  de deux rak&apos;at est un moyen privilégié de se rapprocher
                  d&apos;Allah après avoir commis un péché. Elle associe la
                  purification physique (les ablutions) à la purification
                  spirituelle (la prière et l&apos;invocation).
                </p>

                <HadithCard
                  arabic="ما من عبد يذنب ذنبا فيحسن الطهور ثم يقوم فيصلي ركعتين ثم يستغفر الله إلا غفر الله له"
                  text="Il n'est aucun serviteur qui commet un péché, puis se purifie correctement, puis accomplit deux rak'at, puis demande pardon à Allah, sans qu'Allah ne lui pardonne."
                  source="Rapporté par Abu Dawud (1521), at-Tirmidhi (406)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les étapes de la salat at-tawba sont les suivantes : le
                  croyant commence par accomplir ses ablutions (wudu) de
                  manière soignée, en prenant conscience que l&apos;eau purifie
                  symboliquement ses péchés. Ensuite, il accomplit deux
                  rak&apos;at avec concentration et recueillement (khushu&apos;),
                  en récitant ce qu&apos;il souhaite du Coran. Après la prière,
                  il lève ses mains et invoque Allah avec sincérité, lui
                  demandant pardon pour le péché commis. Il peut utiliser les
                  douas mentionnées dans cet article, en particulier le sayyid
                  al-istighfar ou les douas coraniques d&apos;Adam et de
                  Younous.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent d&apos;accomplir cette prière dès
                  que possible après le péché, sans la retarder. Plus le
                  repentir est rapide, plus il est sincère et plus il a de
                  chances d&apos;être accepté. Il est également permis de
                  l&apos;accomplir à tout moment, sauf pendant les horaires
                  où la prière est déconseillée (après le fajr jusqu&apos;au
                  lever du soleil, au zénith, et après le &apos;asr jusqu&apos;au
                  coucher du soleil), bien que certains savants autorisent la
                  salat at-tawba même pendant ces périodes en raison de son
                  caractère urgent.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Faire ses ablutions avec soin :</strong>{" "}
                      le wudu est un acte de purification physique et
                      spirituelle. Le Prophète a enseigné que les péchés
                      sortent avec l&apos;eau des ablutions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prier deux rak&apos;at avec recueillement :</strong>{" "}
                      se concentrer pleinement sur la prière, en ressentant
                      la présence et la proximité d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invoquer Allah après la prière :</strong>{" "}
                      demander pardon avec sincérité, en avouant le péché
                      commis et en prenant la résolution de ne plus y revenir.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas prophétiques pour le pardon */}
              {/* ============================================ */}
              <section id="douas-prophetiques-pardon" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas prophétiques pour demander pardon à Allah
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus du sayyid al-istighfar et des douas coraniques, le
                  Prophète (paix et salut sur lui) nous a enseigné plusieurs
                  formules de demande de pardon à intégrer dans notre
                  quotidien. Ces invocations prophétiques sont des moyens
                  simples et efficaces de purifier son coeur et de maintenir
                  un lien constant avec Allah. Découvrez également notre guide
                  complet sur la{" "}
                  <Link href="/doua-pardon-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua du pardon en islam
                  </Link>{" "}
                  pour approfondir ce sujet.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. La formule simple d&apos;istighfar
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Astaghfirullaha wa atubu ilayhi
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je demande pardon à Allah et je me repens vers Lui.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6307) et Muslim (2702)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) répétait cette formule
                  plus de 100 fois par jour. Ibn &apos;Umar (qu&apos;Allah soit
                  satisfait de lui) rapporte qu&apos;ils comptaient parfois
                  dans une seule assise du Prophète plus de 100 fois cette
                  invocation. C&apos;est l&apos;invocation la plus simple et
                  la plus accessible pour tout musulman.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. La doua complète de repentir
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِندِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni zalamtu nafsi zulman kathiran, wa la yaghfiru adh-dhunuba illa Anta, faghfir li maghfiratan min &apos;indika warhamni innaka Antal Ghafuru ar-Rahim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je me suis fait beaucoup de tort à moi-même et nul ne pardonne les péchés si ce n&apos;est Toi. Accorde-moi un pardon venant de Toi et fais-moi miséricorde, car Tu es certes le Très Pardonneur, le Très Miséricordieux.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (834) et Muslim (2705)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua, enseignée par le Prophète (paix et salut sur
                  lui) à Abu Bakr as-Siddiq (qu&apos;Allah soit satisfait de
                  lui) pour qu&apos;il la récite dans sa prière, est l&apos;une
                  des plus complètes pour le repentir. Abu Bakr avait demandé
                  au Prophète de lui enseigner une invocation à dire dans la
                  prière, et c&apos;est cette doua qu&apos;il lui transmit.
                  Elle est particulièrement recommandée lors du sujud
                  (prosternation) et avant le salam final de la prière.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Istighfar avec reconnaissance de l&apos;unicité d&apos;Allah
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Astaghfirullaha alladhi la ilaha illa Huwa al-Hayyu al-Qayyumu wa atubu ilayhi
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je demande pardon à Allah, Celui en dehors de qui il n&apos;y a pas de divinité, le Vivant, le Subsistant, et je me repens vers Lui.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (1517), at-Tirmidhi (3577)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit que celui qui
                  récite cette invocation sera pardonné, même s&apos;il a fui
                  du champ de bataille (un péché majeur en islam). Cette
                  promesse souligne la puissance extraordinaire de cette
                  formule qui combine la demande de pardon avec la
                  reconnaissance de l&apos;unicité et des attributs
                  d&apos;Allah. Elle est recommandée après chaque prière et
                  avant de dormir.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : La miséricorde infinie d'Allah */}
              {/* ============================================ */}
              <section id="misericorde-allah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La miséricorde infinie d&apos;Allah envers le repentant
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;un des versets les plus réconfortants du Coran est
                  celui dans lequel Allah s&apos;adresse directement aux
                  pécheurs avec une tendresse et une générosité sans pareilles.
                  Ce verset est souvent qualifié par les savants de
                  &laquo;&nbsp;verset le plus porteur d&apos;espoir du
                  Coran&nbsp;&raquo;. Allah dit :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Qul ya &apos;ibadiya alladhina asrafu &apos;ala anfusihim la taqnatu min rahmatillah, innAllaha yaghfiru adh-dhunuba jami&apos;an, innahu Huwa al-Ghafuru ar-Rahim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Dis : Ô Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d&apos;Allah. Car Allah pardonne tous les péchés. Il est certes le Très Pardonneur, le Très Miséricordieux.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Az-Zumar (39:53)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset mérite une attention particulière. Premièrement,
                  Allah dit &laquo;&nbsp;Mes serviteurs&nbsp;&raquo; (&apos;ibadi),
                  utilisant le pronom possessif pour exprimer Sa proximité et
                  Son amour, même envers ceux qui ont péché. Deuxièmement, Il
                  dit &laquo;&nbsp;tous les péchés&nbsp;&raquo; (jami&apos;an),
                  sans aucune exception, montrant que Sa miséricorde englobe
                  toutes les fautes, des plus petites aux plus graves.
                  Troisièmement, Il interdit le désespoir (&laquo;&nbsp;ne
                  désespérez pas&nbsp;&raquo;), car le désespoir de la
                  miséricorde d&apos;Allah est lui-même un péché.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants rapportent qu&apos;Allah a divisé Sa miséricorde
                  en cent parts. Il en a envoyé une seule sur terre, grâce à
                  laquelle les créatures se montrent de la compassion entre
                  elles. Les 99 parts restantes sont réservées pour le Jour
                  du Jugement. Cette réalité doit remplir le coeur du
                  repentant d&apos;un espoir immense : si la miséricorde que
                  nous observons dans ce monde n&apos;est qu&apos;un
                  centième de la miséricorde divine totale, alors le pardon
                  d&apos;Allah pour celui qui se repent sincèrement est
                  incommensurable.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est important de noter que la tawba transforme les
                  mauvaises actions en bonnes actions, comme le mentionne
                  Allah dans le Coran : &laquo;&nbsp;Sauf celui qui se repent,
                  croit et accomplit une bonne oeuvre ; ceux-là, Allah
                  changera leurs mauvaises actions en bonnes
                  actions&nbsp;&raquo; (Al-Furqan, 25:70). Ce verset est
                  l&apos;une des plus grandes motivations pour le repentir :
                  non seulement Allah pardonne, mais Il transforme le mal
                  passé en bien. Pour découvrir toutes les invocations liées
                  au pardon et à l&apos;adoration, visitez notre page
                  complète sur la{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua en islam
                  </Link>.
                </p>
              </section>

              {/* Formulaire affiliation avant FAQ */}
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
