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
    "Doua du jour d'Arafat en islam : invocations, mérite et jeûne",
  description:
    "Découvrez la doua du jour d'Arafat en islam : la meilleure invocation est celle du jour d'Arafat, textes en arabe avec phonétique et traduction, mérite du jeûne d'Arafat et hadiths authentiques.",
  openGraph: {
    title:
      "Doua du jour d'Arafat en islam : invocations, mérite et jeûne",
    description:
      "La meilleure doua est celle du jour d'Arafat. Invocations authentiques en arabe, phonétique et traduction, mérite du jeûne et hadiths sur le jour d'Arafat.",
    url: "https://www.islamreligion.fr/doua-arafat-islam",
    images: [
      {
        url: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-arafat-islam",
  },
};

const tocItems = [
  { id: "importance-jour-arafat", label: "L'importance du jour d'Arafat" },
  { id: "meilleure-doua-arafat", label: "La meilleure doua est celle d'Arafat" },
  { id: "jeune-jour-arafat", label: "Le jeûne du jour d'Arafat" },
  { id: "douas-jour-arafat", label: "Les douas à réciter le jour d'Arafat" },
  { id: "moments-propices", label: "Les moments propices pour invoquer" },
  { id: "conseils-pratiques", label: "Conseils pratiques pour le jour d'Arafat" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua du jour d'Arafat ?",
    answer:
      "La meilleure doua du jour d&apos;Arafat est : « La ilaha illAllahu wahdahu la sharika lah, lahul mulku wa lahul hamd, wa huwa &apos;ala kulli shay&apos;in qadir » (Il n&apos;y a de divinité qu&apos;Allah, Seul, sans associé. À Lui la royauté et la louange, et Il est capable de toute chose). Le Prophète (paix et salut sur lui) a dit que la meilleure invocation est celle du jour d&apos;Arafat (at-Tirmidhi).",
  },
  {
    question: "Quand commence et finit le jour d'Arafat ?",
    answer:
      "Le jour d&apos;Arafat correspond au 9 du mois de Dhul Hijja dans le calendrier islamique. Il commence à l&apos;aube (fajr) et se termine au coucher du soleil (maghrib). C&apos;est durant cette journée entière que les invocations sont particulièrement recommandées, avec une intensification dans l&apos;après-midi.",
  },
  {
    question: "Peut-on jeûner le jour d'Arafat si on ne fait pas le hajj ?",
    answer:
      "Oui, le jeûne du jour d&apos;Arafat est fortement recommandé (mustahabb) pour ceux qui ne sont pas en pèlerinage. Le Prophète (paix et salut sur lui) a dit que le jeûne de ce jour expie les péchés de l&apos;année précédente et de l&apos;année suivante (Muslim). En revanche, les pèlerins ne doivent pas jeûner ce jour-là afin de garder leurs forces pour les rites.",
  },
  {
    question: "Faut-il réciter la doua d'Arafat en arabe uniquement ?",
    answer:
      "La formule prophétique « La ilaha illAllahu wahdahu la sharika lah... » doit idéalement être récitée en arabe pour suivre la Sunna. Cependant, les supplications personnelles peuvent être faites dans toute langue. Allah comprend toutes les langues, et l&apos;essentiel est la sincérité du coeur. Apprendre les invocations en arabe reste néanmoins recommandé.",
  },
  {
    question: "Le jour d'Arafat concerne-t-il uniquement les pèlerins ?",
    answer:
      "Non, le jour d&apos;Arafat concerne tous les musulmans du monde entier. Même sans accomplir le hajj, chaque musulman peut profiter de ce jour béni en jeûnant, en multipliant les invocations, en faisant le dhikr et en demandant pardon à Allah. C&apos;est un jour où Allah affranchit un grand nombre de Ses serviteurs du Feu.",
  },
  {
    question: "Combien de fois faut-il répéter la doua d'Arafat ?",
    answer:
      "Il n&apos;y a pas de nombre précis imposé par la Sunna. Les savants recommandent de multiplier cette invocation tout au long de la journée du 9 Dhul Hijja, en particulier après la prière du Dhuhr et jusqu&apos;au coucher du soleil. La répétition fréquente avec présence du coeur est plus méritoire qu&apos;une récitation mécanique.",
  },
  {
    question: "Quels autres actes d'adoration sont recommandés le jour d'Arafat ?",
    answer:
      "En plus de la doua et du jeûne, il est recommandé le jour d&apos;Arafat de multiplier le dhikr (rappel d&apos;Allah), le takbir (Allahu Akbar), le tahlil (La ilaha illAllah), le tahmid (Al-hamdulillah), la lecture du Coran, le repentir sincère (tawba), les aumônes et les bonnes actions. C&apos;est l&apos;un des jours les plus méritoires de l&apos;année.",
  },
];

export default function DouaArafatIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-arafat-islam/#article",
        headline:
          "Doua du jour d'Arafat en islam : invocations, mérite et jeûne",
        description:
          "Découvrez la doua du jour d'Arafat en islam : la meilleure invocation, textes en arabe avec phonétique et traduction, mérite du jeûne et hadiths authentiques.",
        image: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        datePublished: "2026-03-28",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-arafat-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-arafat-islam/#breadcrumb",
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
            name: "Doua du jour d'Arafat",
            item: "https://www.islamreligion.fr/doua-arafat-islam",
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
          title="Doua du jour d'Arafat en islam : invocations, mérite et jeûne"
          subtitle="La meilleure invocation est celle du jour d'Arafat. Découvrez les douas authentiques en arabe, phonétique et traduction, le mérite du jeûne et les hadiths sur ce jour béni."
          imageSrc="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
          imageAlt="Pèlerins en invocation doua le jour d'Arafat lors du hajj devant la Kaaba en islam"
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
                <span className="text-foreground">Doua du jour d&apos;Arafat</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le jour d&apos;Arafat (9 Dhul Hijja) est le jour le plus
                  méritoire de l&apos;année en islam. Le Prophète (paix et salut
                  sur lui) a enseigné que la meilleure invocation est celle du
                  jour d&apos;Arafat, et la meilleure parole qu&apos;il ait
                  prononcée, lui et les prophètes avant lui, est :
                  &laquo;&nbsp;La ilaha illAllahu wahdahu la sharika lah, lahul
                  mulku wa lahul hamd, wa huwa &apos;ala kulli shay&apos;in
                  qadir&nbsp;&raquo;. Ce jour est également marqué par le jeûne
                  qui expie les péchés de deux années.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance du jour d'Arafat */}
              {/* ============================================ */}
              <section id="importance-jour-arafat" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance du jour d&apos;Arafat en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le jour d&apos;Arafat, qui correspond au 9 du mois de Dhul
                  Hijja, est considéré comme le jour le plus important et le
                  plus méritoire de l&apos;année dans la tradition islamique.
                  C&apos;est le pilier central du pèlerinage (hajj), à tel point
                  que le Prophète (paix et salut sur lui) a déclaré :
                  &laquo;&nbsp;Le hajj, c&apos;est Arafat&nbsp;&raquo;. Cette
                  affirmation souligne que sans la station à Arafat, le
                  pèlerinage n&apos;est pas valide.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce jour béni fait partie des dix premiers jours de Dhul Hijja,
                  dont Allah a juré dans le Coran : &laquo;&nbsp;Par l&apos;aube,
                  et par les dix nuits&nbsp;&raquo; (sourate Al-Fajr, 89:1-2).
                  Les savants, parmi lesquels Ibn Abbas (qu&apos;Allah soit
                  satisfait de lui), ont interprété ces &laquo;&nbsp;dix
                  nuits&nbsp;&raquo; comme étant les dix premiers jours de Dhul
                  Hijja. Le jour d&apos;Arafat en est le sommet, le point
                  culminant de cette période exceptionnelle.
                </p>

                <HadithCard
                  arabic="ما من يوم أكثر من أن يعتق الله فيه عبدا من النار من يوم عرفة، وإنه ليدنو ثم يباهي بهم الملائكة"
                  text="Il n'y a pas de jour où Allah affranchit plus de serviteurs du Feu que le jour d'Arafat. Il Se rapproche d'eux, puis Se vante d'eux auprès des anges."
                  source="Rapporté par Muslim (1348)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith révèle la grandeur incomparable de ce jour. Allah
                  Lui-même Se rapproche de Ses serviteurs et les libère du
                  châtiment éternel. Il Se vante d&apos;eux auprès des anges,
                  ce qui témoigne de l&apos;amour et de la miséricorde divine
                  envers ceux qui L&apos;invoquent en ce jour béni. Cette
                  proximité divine fait du jour d&apos;Arafat une occasion
                  unique pour obtenir le pardon, la miséricorde et
                  l&apos;affranchissement du Feu.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pilier du hajj :</strong> la station à Arafat est
                      le rite sans lequel le pèlerinage est invalide, comme
                      l&apos;a enseigné le Prophète (paix et salut sur lui).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Jour d&apos;affranchissement :</strong> Allah
                      libère plus de serviteurs du Feu en ce jour que tout autre
                      jour de l&apos;année.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Fierté divine :</strong> Allah Se vante de Ses
                      serviteurs auprès des anges, signe de Son amour pour ceux
                      qui L&apos;implorent à Arafat.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/kaaba-mecque-pelerinage-hajj-islam.jpg"
                    alt="La Kaaba à La Mecque entourée de pèlerins lors du hajj symbolisant le jour d'Arafat en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : La meilleure doua */}
              {/* ============================================ */}
              <section id="meilleure-doua-arafat" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La meilleure doua est celle du jour d&apos;Arafat
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a désigné
                  explicitement l&apos;invocation du jour d&apos;Arafat comme
                  étant la meilleure de toutes les invocations. Ce statut
                  exceptionnel confère à ce jour une dimension spirituelle
                  inégalée pour le croyant qui cherche à se rapprocher
                  d&apos;Allah par la doua.
                </p>

                <HadithCard
                  arabic="خير الدعاء دعاء يوم عرفة، وخير ما قلت أنا والنبيون من قبلي: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير"
                  text="La meilleure invocation est celle du jour d'Arafat, et la meilleure parole que j'ai prononcée, moi et les prophètes avant moi, est : Il n'y a de divinité qu'Allah, Seul, sans associé. À Lui la royauté et la louange, et Il est capable de toute chose."
                  source="Rapporté par at-Tirmidhi (3585), qualifié de hassan par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est d&apos;une richesse théologique
                  considérable. Elle rassemble les fondements mêmes de la foi
                  islamique en une seule formule. Le tawhid
                  (l&apos;affirmation de l&apos;unicité d&apos;Allah) y est
                  proclamé avec force par &laquo;&nbsp;La ilaha
                  illAllah&nbsp;&raquo;. L&apos;exclusivité de la divinité est
                  renforcée par &laquo;&nbsp;wahdahu la sharika lah&nbsp;&raquo;
                  (Seul, sans associé). Puis vient la reconnaissance de la
                  souveraineté absolue d&apos;Allah (&laquo;&nbsp;lahul
                  mulku&nbsp;&raquo;), la louange qui Lui est due
                  (&laquo;&nbsp;lahul hamd&nbsp;&raquo;) et Sa puissance
                  illimitée (&laquo;&nbsp;wa huwa &apos;ala kulli shay&apos;in
                  qadir&nbsp;&raquo;).
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illAllahu wahdahu la sharika lah, lahul mulku wa lahul hamd, wa huwa &apos;ala kulli shay&apos;in qadir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité qu&apos;Allah, Seul, sans associé. À Lui la royauté et la louange, et Il est capable de toute chose&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3585)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que cette formule est en réalité un
                  dhikr (rappel d&apos;Allah) et non une demande spécifique.
                  Cela enseigne un principe fondamental : la meilleure
                  invocation n&apos;est pas nécessairement celle où l&apos;on
                  demande quelque chose, mais celle où l&apos;on glorifie et
                  reconnaît la grandeur d&apos;Allah. Lorsque le serviteur est
                  occupé à louer son Seigneur, Allah lui accorde ce qu&apos;il
                  n&apos;a même pas demandé, comme l&apos;indiquent plusieurs
                  hadiths. Pour approfondir les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
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
              {/* SECTION 3 : Le jeûne du jour d'Arafat */}
              {/* ============================================ */}
              <section id="jeune-jour-arafat" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le jeûne du jour d&apos;Arafat : deux années de péchés expiées
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les mérites exceptionnels du jour d&apos;Arafat figure
                  le jeûne de cette journée pour les non-pèlerins. Le Prophète
                  (paix et salut sur lui) a attribué à ce jeûne une récompense
                  considérable qui n&apos;a pas d&apos;équivalent dans le
                  calendrier islamique, à l&apos;exception du mois de Ramadan.
                </p>

                <HadithCard
                  arabic="صيام يوم عرفة، أحتسب على الله أن يكفر السنة التي قبله والسنة التي بعده"
                  text="Le jeûne du jour d'Arafat, j'espère d'Allah qu'il expiera les péchés de l'année précédente et de l'année suivante."
                  source="Rapporté par Muslim (1162)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette expiation concerne les péchés mineurs (sagha&apos;ir)
                  selon l&apos;avis unanime des savants. Les péchés majeurs
                  (kaba&apos;ir) nécessitent un repentir sincère et spécifique
                  (tawba). Néanmoins, le fait qu&apos;un seul jour de jeûne
                  puisse effacer les péchés mineurs de deux années entières
                  témoigne de la générosité immense d&apos;Allah et du statut
                  exceptionnel de ce jour.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est important de noter que le jeûne du jour d&apos;Arafat
                  est réservé aux musulmans qui ne sont pas en pèlerinage. Les
                  pèlerins présents à Arafat ne doivent pas jeûner, car le
                  Prophète (paix et salut sur lui) ne jeûnait pas ce jour-là
                  lorsqu&apos;il accomplissait le hajj. L&apos;objectif est de
                  préserver les forces du pèlerin pour les rites exigeants de
                  la journée, notamment la station debout (wuquf) et les
                  invocations prolongées sous le soleil de l&apos;Arabie.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour les non-pèlerins
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le jeûne est fortement recommandé (mustahabb). Il expie
                      les péchés mineurs de l&apos;année précédente et de
                      l&apos;année suivante. C&apos;est l&apos;un des jeûnes
                      surérogatoires les plus méritoires de l&apos;année.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour les pèlerins
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le jeûne n&apos;est pas recommandé selon la Sunna. Le
                      pèlerin doit conserver ses forces pour la station à
                      Arafat, les invocations et les rites qui suivent
                      (Muzdalifa, lapidation, sacrifice).
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas à réciter */}
              {/* ============================================ */}
              <section id="douas-jour-arafat" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas à réciter le jour d&apos;Arafat
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le jour d&apos;Arafat est une journée consacrée
                  à l&apos;invocation et au rappel d&apos;Allah. En plus de la
                  formule principale mentionnée précédemment, le musulman peut
                  enrichir ses invocations avec d&apos;autres douas
                  authentiques tirées du Coran et de la Sunna. Voici les
                  invocations recommandées pour maximiser le bénéfice spirituel
                  de cette journée bénie.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. L&apos;invocation principale d&apos;Arafat (à répéter abondamment)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette formule est le coeur du dhikr du jour d&apos;Arafat.
                  Elle doit être récitée aussi souvent que possible tout au
                  long de la journée, en particulier après la prière du Dhuhr
                  et jusqu&apos;au coucher du soleil.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illAllahu wahdahu la sharika lah, lahul mulku wa lahul hamd, wa huwa &apos;ala kulli shay&apos;in qadir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité qu&apos;Allah, Seul, sans associé. À Lui la royauté et la louange, et Il est capable de toute chose&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3585)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de demande de pardon (istighfar)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le jour d&apos;Arafat étant un jour de pardon et
                  d&apos;affranchissement du Feu, la demande de pardon
                  (istighfar) y occupe une place centrale. Le sayyid
                  al-istighfar est la formule la plus complète enseignée par le
                  Prophète (paix et salut sur lui).
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma Anta Rabbi, la ilaha illa Anta, khalaqtani wa ana &apos;abduk, wa ana &apos;ala &apos;ahdika wa wa&apos;dika mastata&apos;t, a&apos;udhu bika min sharri ma sana&apos;t, abu&apos;u laka bi ni&apos;matika &apos;alayya wa abu&apos;u bi dhanbi, faghfir li fa innahu la yaghfirudh-dhunuba illa Ant
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Tu es mon Seigneur, il n&apos;y a de divinité que Toi. Tu m&apos;as créé et je suis Ton serviteur. Je respecte Ton pacte et Ta promesse autant que je le peux. Je cherche refuge auprès de Toi contre le mal de ce que j&apos;ai commis. Je reconnais Tes bienfaits sur moi et je reconnais mes péchés. Pardonne-moi, car nul ne pardonne les péchés si ce n&apos;est Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6306)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour le bien dans les deux mondes
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation coranique, récitée par le Prophète (paix et
                  salut sur lui) de manière fréquente, est particulièrement
                  adaptée au jour d&apos;Arafat car elle englobe toutes les
                  demandes en un seul verset.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina &apos;adhaban-nar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Notre Seigneur, accorde-nous une belle part ici-bas et une belle part dans l&apos;au-delà, et protège-nous du châtiment du Feu&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:201)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua de Younous (paix sur lui)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La doua de Younous est l&apos;une des invocations les plus
                  puissantes de l&apos;islam. Récitée le jour d&apos;Arafat,
                  elle combine le tawhid, la glorification d&apos;Allah et
                  l&apos;humilité du serviteur, ce qui en fait une formule
                  particulièrement efficace pour obtenir l&apos;exaucement.
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

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  5. Doua pour la guidance et la piété
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) demandait fréquemment à
                  Allah la guidance, la piété, la chasteté et la richesse
                  intérieure. Cette invocation est idéale pour le jour
                  d&apos;Arafat car elle touche aux dimensions les plus
                  profondes de la vie spirituelle.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَىٰ وَالتُّقَىٰ وَالْعَفَافَ وَالْغِنَىٰ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;alukal-huda wat-tuqa wal-&apos;afafa wal-ghina
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande la guidance, la piété, la chasteté et la suffisance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2721)
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en prière et invocation doua le jour d'Arafat en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Moments propices */}
              {/* ============================================ */}
              <section id="moments-propices" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les moments propices pour invoquer le jour d&apos;Arafat
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Bien que l&apos;ensemble du jour d&apos;Arafat soit béni et
                  propice aux invocations, certains moments sont
                  particulièrement favorables. Les savants de l&apos;islam ont
                  identifié, à partir du Coran et de la Sunna, les instants
                  où la doua a le plus de chances d&apos;être exaucée durant
                  cette journée exceptionnelle.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Après la prière du Dhuhr jusqu&apos;au Maghrib
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        C&apos;est le moment le plus important pour les
                        invocations du jour d&apos;Arafat. Les pèlerins se
                        tiennent debout à Arafat durant cette période, et les
                        non-pèlerins sont encouragés à consacrer cet
                        après-midi à la doua et au dhikr. L&apos;intensité
                        spirituelle atteint son paroxysme aux dernières heures
                        avant le coucher du soleil.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le dernier tiers de la nuit précédant Arafat
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La nuit du 8 au 9 Dhul Hijja offre une occasion
                        précieuse de se préparer spirituellement. Le Prophète
                        (paix et salut sur lui) a enseigné qu&apos;Allah
                        descend au ciel le plus bas chaque nuit durant le
                        dernier tiers et demande : &laquo;&nbsp;Qui
                        M&apos;invoque pour que Je lui réponde ?&nbsp;&raquo;
                        (al-Bukhari et Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Durant la prosternation (sujud)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a dit :
                        &laquo;&nbsp;Le moment où le serviteur est le plus
                        proche de son Seigneur est lorsqu&apos;il est en
                        prosternation. Multipliez-y donc les
                        invocations&nbsp;&raquo; (Muslim). Combiner la
                        prosternation avec le jour d&apos;Arafat offre une
                        double proximité divine. Découvrez les{" "}
                        <Link href="/doua-hajj-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas du hajj</Link>{" "}
                        pour compléter vos invocations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Entre l&apos;adhan et l&apos;iqama
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné que la
                        doua entre l&apos;appel à la prière et le début de la
                        prière n&apos;est pas rejetée (Abu Dawud). Le jour
                        d&apos;Arafat, chaque prière est une occasion
                        supplémentaire d&apos;invoquer Allah dans ce créneau
                        béni.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;essentiel est de ne pas laisser cette journée passer
                  sans y consacrer un maximum de temps à l&apos;invocation.
                  Que l&apos;on soit au travail, à la maison ou en déplacement,
                  le musulman peut invoquer Allah silencieusement dans son coeur
                  tout au long du jour d&apos;Arafat. Chaque instant de cette
                  journée est une opportunité que le croyant avisé ne laisse pas
                  échapper. Pour découvrir les invocations liées à la{" "}
                  <Link href="/doua-omra-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">omra en islam</Link>,
                  consultez notre guide dédié.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour profiter du jour d&apos;Arafat
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le jour d&apos;Arafat est une occasion annuelle que le
                  musulman doit préparer avec soin. Voici des recommandations
                  pratiques pour tirer le meilleur bénéfice de cette journée
                  bénie, que l&apos;on soit pèlerin à Arafat ou non-pèlerin
                  dans son pays.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Préparer ses invocations à l&apos;avance
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Écrire une liste de douas personnelles et de demandes
                      spécifiques avant le jour d&apos;Arafat permet de ne
                      rien oublier et de rester concentré durant les
                      invocations. Ajoutez-y les douas prophétiques en arabe
                      pour alterner entre formules authentiques et supplications
                      personnelles.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Jeûner avec intention (niyya)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Formuler l&apos;intention de jeûner le jour d&apos;Arafat
                      avant l&apos;aube. Le jeûne combine la privation
                      physique à l&apos;élévation spirituelle, créant un état
                      de soumission totale à Allah qui renforce la puissance
                      des invocations.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Multiplier le dhikr et le takbir
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      En plus des douas, réciter abondamment le takbir
                      (Allahu Akbar), le tahlil (La ilaha illAllah), le tahmid
                      (Al-hamdulillah) et le tasbih (SubhanAllah). Ces formules
                      de rappel occupent le coeur et la langue dans le
                      souvenir d&apos;Allah tout au long de la journée.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Se repentir sincèrement
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le jour d&apos;Arafat est le jour du pardon par
                      excellence. Profitez-en pour vous repentir sincèrement
                      de tous vos péchés, grands et petits, avec la ferme
                      résolution de ne pas y revenir. Le repentir combiné au
                      jeûne et à la doua forme un ensemble puissant.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invoquer pour les autres :</strong> le Prophète
                      (paix et salut sur lui) a enseigné que lorsque le
                      musulman invoque pour son frère en son absence, un ange
                      dit : &laquo;&nbsp;Et à toi la même chose&nbsp;&raquo;
                      (Muslim). Le jour d&apos;Arafat est l&apos;occasion
                      idéale d&apos;invoquer pour sa famille, ses proches et
                      la communauté musulmane.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pleurer devant Allah :</strong> les larmes de
                      sincérité sont un signe d&apos;humilité et de crainte
                      d&apos;Allah. Le jour d&apos;Arafat est un moment
                      propice pour ouvrir son coeur et verser des larmes
                      devant son Créateur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas désespérer :</strong> même si l&apos;on
                      n&apos;a pas pu jeûner ou consacrer toute la journée aux
                      invocations, chaque instant de doua compte. Allah est le
                      Plus Généreux et Il accepte l&apos;effort sincère de Son
                      serviteur, aussi modeste soit-il.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* AffiliateForm */}
              {/* ============================================ */}
              <div className="mt-16">
                <SocialBanner />

              <AffiliateForm
                  title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                  description="Maîtrisez la langue du Coran pour réciter les douas avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
                  preselect="arabe"
                />
              </div>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>

              {/* ============================================ */}
              {/* Maillage interne */}
              {/* ============================================ */}
              <nav className="mt-16 rounded-xl border border-border bg-white p-6">
                <h2 className="text-lg font-semibold text-primary">
                  Articles connexes
                </h2>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="/doua-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua en islam : guide complet des invocations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doua-hajj-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua du hajj : les invocations du pèlerinage
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doua-omra-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua de la omra : invocations du petit pèlerinage
                    </Link>
                  </li>
                </ul>
              </nav>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
