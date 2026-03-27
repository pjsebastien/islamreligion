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
    "Doua orage, tonnerre et vent en islam : invocations authentiques",
  description:
    "Découvrez les douas authentiques lors de l'orage, du tonnerre et du vent en islam. Textes en arabe, phonétique et traduction française. Hadiths et invocations prophétiques pour se protéger des intempéries.",
  openGraph: {
    title:
      "Doua orage, tonnerre et vent en islam : invocations authentiques",
    description:
      "Les invocations prophétiques lors de l'orage, du tonnerre et du vent : textes en arabe, phonétique, traduction et hadiths authentiques.",
    url: "https://www.islamreligion.fr/doua-orage-tonnerre-vent-islam",
    images: [
      {
        url: "/images/doua-mains-levees-illustration-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-orage-tonnerre-vent-islam",
  },
};

const tocItems = [
  { id: "tonnerre-glorifie-allah", label: "Le tonnerre glorifie Allah (Coran 13:13)" },
  { id: "doua-tonnerre", label: "Doua lors du tonnerre" },
  { id: "doua-vent", label: "Doua lors du vent" },
  { id: "doua-pluie", label: "Doua lors de la pluie" },
  { id: "refuge-vent-destructeur", label: "Se réfugier contre le vent destructeur" },
  { id: "recapitulatif-douas", label: "Récapitulatif des douas" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua dire quand il y a de l'orage en islam ?",
    answer:
      "Lors de l&apos;orage, le musulman peut réciter plusieurs invocations authentiques. La principale est celle dite au moment du tonnerre : « Subhanalladhi yusabbihu ar-ra&apos;du bi hamdihi wal-mala&apos;ikatu min khifatihi » (Gloire à Celui que le tonnerre glorifie par Sa louange, ainsi que les anges, par crainte de Lui). On peut aussi demander la pluie bénéfique par « Allahumma sayyiban nafi&apos;an » et chercher refuge contre le vent destructeur.",
  },
  {
    question: "Que dit-on quand on entend le tonnerre en islam ?",
    answer:
      "Lorsqu&apos;on entend le tonnerre, il est rapporté que &apos;Abdullah ibn az-Zubayr (qu&apos;Allah l&apos;agrée) cessait de parler et disait : « Subhanalladhi yusabbihu ar-ra&apos;du bi hamdihi wal-mala&apos;ikatu min khifatihi » (Gloire à Celui que le tonnerre glorifie par Sa louange, ainsi que les anges, par crainte de Lui). Cette pratique est rapportée par l&apos;imam Malik dans al-Muwatta.",
  },
  {
    question: "Quelle est la doua du vent en islam ?",
    answer:
      "Le Prophète (paix et salut sur lui) a enseigné cette doua lorsqu&apos;il y avait du vent : « Allahumma inni as&apos;aluka khayraha wa khayra ma fiha wa khayra ma ursilat bihi, wa a&apos;udhu bika min sharriha wa sharri ma fiha wa sharri ma ursilat bihi » (Seigneur, je Te demande le bien de ce vent, le bien de ce qu&apos;il contient et le bien de ce avec quoi il a été envoyé. Et je cherche refuge auprès de Toi contre son mal, le mal de ce qu&apos;il contient et le mal de ce avec quoi il a été envoyé). Rapporté par Muslim.",
  },
  {
    question: "Peut-on faire la doua de l'orage en français ?",
    answer:
      "Oui, il est permis de faire des invocations dans toute langue, y compris en français. Cependant, il est recommandé d&apos;apprendre les formulations prophétiques en arabe, car elles ont été enseignées par le Prophète (paix et salut sur lui) lui-même. Réciter en arabe les douas du tonnerre et du vent permet de suivre la Sunna au plus près.",
  },
  {
    question: "Le tonnerre est-il un ange en islam ?",
    answer:
      "Selon certaines narrations, le tonnerre (ar-Ra&apos;d) est un ange chargé des nuages. Ibn Abbas (qu&apos;Allah l&apos;agrée) a dit que le tonnerre est un ange qui dirige les nuages comme le berger dirige son troupeau. Le Coran mentionne que « le tonnerre glorifie Sa louange, ainsi que les anges, par crainte de Lui » (sourate ar-Ra&apos;d, 13:13), ce qui montre le lien entre le tonnerre et la glorification d&apos;Allah.",
  },
  {
    question: "Faut-il avoir peur de l'orage en islam ?",
    answer:
      "L&apos;islam enseigne un équilibre entre crainte respectueuse et confiance en Allah. L&apos;orage, le tonnerre et la foudre sont des signes de la puissance d&apos;Allah qui doivent inspirer l&apos;humilité et le souvenir de Lui. Le Prophète (paix et salut sur lui) ressentait une certaine appréhension lors du vent violent, craignant un possible châtiment, mais il se tournait immédiatement vers l&apos;invocation et la prière. Le croyant ne doit pas paniquer mais plutôt invoquer Allah et Lui demander protection.",
  },
  {
    question: "Quelle doua dire quand il pleut en islam ?",
    answer:
      "Lorsqu&apos;il commence à pleuvoir, le Prophète (paix et salut sur lui) disait : « Allahumma sayyiban nafi&apos;an » (Seigneur, une pluie bénéfique). Rapporté par al-Bukhari. Après la pluie, il disait : « Mutirnaa bi fadlillahi wa rahmatihi » (Nous avons reçu la pluie par la grâce et la miséricorde d&apos;Allah). La pluie est un moment propice à l&apos;exaucement des douas.",
  },
];

export default function DouaOrageTonnerreVentIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-orage-tonnerre-vent-islam/#article",
        headline:
          "Doua orage, tonnerre et vent en islam : invocations authentiques",
        description:
          "Découvrez les douas authentiques lors de l'orage, du tonnerre et du vent en islam. Textes en arabe, phonétique et traduction française.",
        image: "/images/doua-mains-levees-illustration-lumiere.jpg",
        datePublished: "2026-03-26",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-orage-tonnerre-vent-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-orage-tonnerre-vent-islam/#breadcrumb",
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
            name: "Doua orage, tonnerre et vent",
            item: "https://www.islamreligion.fr/doua-orage-tonnerre-vent-islam",
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
          title="Doua orage, tonnerre et vent en islam : les invocations authentiques"
          subtitle="Les invocations prophétiques à réciter lors de l'orage, du tonnerre et du vent. Textes en arabe, phonétique et traduction française tirés du Coran et de la Sunna."
          imageSrc="/images/doua-mains-levees-illustration-lumiere.jpg"
          imageAlt="Mains levées en doua lors d'un orage avec lumière divine symbolisant la protection en islam"
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
                <span className="text-foreground">Doua orage, tonnerre et vent</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;orage, le tonnerre et le vent sont des manifestations de
                  la puissance d&apos;Allah qui doivent amener le croyant à se
                  tourner vers son Seigneur. Le Coran enseigne que le tonnerre
                  glorifie Allah par Sa louange (sourate ar-Ra&apos;d, 13:13).
                  Le Prophète (paix et salut sur lui) a enseigné des invocations
                  précises pour chacun de ces phénomènes : doua du tonnerre, doua
                  du vent, doua de la pluie et demande de protection contre les
                  intempéries destructrices. Ces moments sont aussi des occasions
                  privilégiées d&apos;exaucement.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le tonnerre glorifie Allah */}
              {/* ============================================ */}
              <section id="tonnerre-glorifie-allah" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tonnerre glorifie Allah : le verset de sourate ar-Ra&apos;d (13:13)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran établit un lien direct entre le tonnerre et la
                  glorification d&apos;Allah. Le verset 13 de la sourate ar-Ra&apos;d
                  (Le Tonnerre) est le fondement coranique de l&apos;attitude du
                  musulman face à l&apos;orage. Ce verset révèle que le tonnerre
                  n&apos;est pas un simple phénomène météorologique dénué de sens
                  spirituel, mais une créature qui célèbre la louange de son
                  Créateur.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    وَيُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ وَيُرْسِلُ الصَّوَاعِقَ فَيُصِيبُ بِهَا مَن يَشَاءُ
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Et le tonnerre glorifie Sa louange, ainsi que
                    les anges, par crainte de Lui. Et Il lance les foudres dont
                    Il atteint qui Il veut&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate ar-Ra&apos;d (13:13)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset contient plusieurs enseignements fondamentaux pour le
                  croyant. Premièrement, le tonnerre est présenté comme une
                  entité qui glorifie Allah (yusabbihu ar-ra&apos;du bi hamdihi).
                  Les exégètes du Coran, parmi lesquels Ibn Kathir et at-Tabari,
                  expliquent que cette glorification peut être comprise de manière
                  littérale : le tonnerre est un ange ou une créature qui
                  prononce le tasbih (glorification) d&apos;Allah. Ibn Abbas
                  (qu&apos;Allah l&apos;agrée) a d&apos;ailleurs rapporté que le
                  tonnerre est un ange chargé de diriger les nuages, comme le
                  berger conduit son troupeau.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Deuxièmement, les anges eux-mêmes ressentent une crainte
                  révérencielle (khifa) devant la puissance divine qui se
                  manifeste dans l&apos;orage. Si les anges, qui sont des créatures
                  pures et obéissantes, éprouvent cette crainte, à plus forte
                  raison le croyant doit-il ressentir humilité et soumission
                  lorsqu&apos;il entend le tonnerre gronder. Troisièmement, la
                  mention de la foudre (sawa&apos;iq) rappelle qu&apos;Allah est
                  capable de châtier qui Il veut, et que ces phénomènes
                  atmosphériques ont déjà servi d&apos;instrument de châtiment
                  pour les peuples qui se sont détournés de Lui.
                </p>

                <HadithCard
                  arabic="كان النبي صلى الله عليه وسلم إذا عصفت الريح قال: اللهم إني أسألك خيرها وخير ما فيها وخير ما أرسلت به، وأعوذ بك من شرها وشر ما فيها وشر ما أرسلت به"
                  text="Lorsque le vent soufflait avec force, le Prophète (paix et salut sur lui) disait : Seigneur, je Te demande le bien de ce vent, le bien de ce qu'il contient et le bien de ce avec quoi il a été envoyé. Et je cherche refuge auprès de Toi contre son mal, le mal de ce qu'il contient et le mal de ce avec quoi il a été envoyé."
                  source="Rapporté par Muslim (899)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith montre que le Prophète (paix et salut sur lui) ne
                  restait jamais indifférent face aux phénomènes atmosphériques.
                  Chaque manifestation de la nature était pour lui une occasion de
                  se tourner vers Allah, entre espoir de bien et crainte de mal.
                  Cette attitude prophétique doit être celle de tout musulman
                  lorsqu&apos;il fait face à un orage, au tonnerre ou à un vent
                  violent. Vous retrouverez d&apos;autres invocations de{" "}
                  <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua de protection en islam
                  </Link>{" "}
                  pour compléter vos connaissances.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en doua avec rayons dorés symbolisant l'invocation lors de l'orage en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua lors du tonnerre */}
              {/* ============================================ */}
              <section id="doua-tonnerre" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua lors du tonnerre : subhanalladhi yusabbihu ar-ra&apos;du bi hamdihi
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Lorsque le musulman entend le tonnerre gronder, la Sunna lui
                  enseigne une invocation précise qui reprend les termes même du
                  verset coranique. Cette pratique est rapportée de la part de
                  plusieurs compagnons, notamment &apos;Abdullah ibn az-Zubayr
                  (qu&apos;Allah l&apos;agrée), qui cessait de parler dès
                  qu&apos;il entendait le tonnerre pour prononcer cette
                  glorification.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Subhanalladhi yusabbihu ar-ra&apos;du bi hamdihi wal-mala&apos;ikatu min khifatihi
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire à Celui que le tonnerre glorifie par Sa
                    louange, ainsi que les anges, par crainte de Lui&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Malik dans al-Muwatta (2/992)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;imam Malik rapporte dans son ouvrage al-Muwatta que
                  &apos;Abdullah ibn az-Zubayr, lorsqu&apos;il entendait le
                  tonnerre, interrompait immédiatement sa conversation et
                  prononçait cette parole de glorification. Cette pratique
                  démontre le profond respect des compagnons pour les signes
                  d&apos;Allah dans la création. Le tonnerre n&apos;était pas pour
                  eux un bruit anodin, mais un rappel vivant de la grandeur et de
                  la puissance du Créateur qui méritait une réponse immédiate de
                  la part du serviteur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de prononcer cette invocation à chaque
                  coup de tonnerre que l&apos;on entend. C&apos;est un acte de
                  dhikr (rappel d&apos;Allah) simple mais puissant, qui
                  transforme un moment de crainte naturelle en un moment
                  d&apos;adoration et de connexion spirituelle. L&apos;imam
                  an-Nawawi mentionne que cette pratique est recommandée
                  (mustahabb) et qu&apos;elle fait partie des adhkar
                  (invocations) liés aux circonstances particulières que le
                  musulman devrait connaître et pratiquer.
                </p>

                <HadithCard
                  arabic="لا تسبوا الريح فإنها من روح الله تأتي بالرحمة والعذاب ولكن سلوا الله من خيرها واستعيذوا بالله من شرها"
                  text="N'insultez pas le vent, car il fait partie du souffle d'Allah : il apporte la miséricorde et le châtiment. Mais demandez à Allah son bien et cherchez refuge auprès de Lui contre son mal."
                  source="Rapporté par at-Tirmidhi (2252), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est essentiel pour comprendre la vision islamique des
                  phénomènes météorologiques. Le Prophète (paix et salut sur lui)
                  interdit d&apos;insulter ou de maudire le vent, car celui-ci
                  est une créature d&apos;Allah qui obéit à Son commandement. Au
                  lieu de se plaindre des intempéries, le musulman est invité à se
                  tourner vers Allah pour demander le bien et se protéger du mal.
                  Cette attitude transforme chaque orage en une occasion de
                  rapprochement avec le Créateur.
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
              {/* SECTION 3 : Doua lors du vent */}
              {/* ============================================ */}
              <section id="doua-vent" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua lors du vent : Allahumma inni as&apos;aluka khayraha
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le vent occupe une place particulière dans la tradition
                  prophétique. Le Prophète (paix et salut sur lui) était
                  particulièrement attentif lorsque le vent se levait ou
                  soufflait avec force. &apos;A&apos;icha (qu&apos;Allah
                  l&apos;agrée) rapporte que son visage changeait d&apos;expression
                  lorsqu&apos;il voyait un nuage ou ressentait un vent fort.
                  Cette réaction n&apos;était pas de la peur irrationnelle, mais
                  une conscience aiguë que le vent pouvait être porteur de bien
                  comme de mal, et que seul Allah en décide.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيهَا وَشَرِّ مَا أُرْسِلَتْ بِهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka khayraha wa khayra ma fiha wa khayra ma ursilat bihi, wa a&apos;udhu bika min sharriha wa sharri ma fiha wa sharri ma ursilat bihi
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande le bien de ce vent, le
                    bien de ce qu&apos;il contient et le bien de ce avec quoi il
                    a été envoyé. Et je cherche refuge auprès de Toi contre son
                    mal, le mal de ce qu&apos;il contient et le mal de ce avec
                    quoi il a été envoyé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (899)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est remarquable par sa structure tripartite.
                  Le Prophète (paix et salut sur lui) demande trois types de
                  bien : le bien du vent lui-même, le bien de ce qu&apos;il
                  contient (pluie, fraîcheur, pollinisation) et le bien de la
                  mission pour laquelle il a été envoyé. Symétriquement, il
                  cherche refuge contre trois types de mal : le mal du vent
                  (destruction, tempête), le mal de ce qu&apos;il porte (sable,
                  poussière, maladie) et le mal de sa mission éventuelle
                  (châtiment d&apos;un peuple).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran mentionne à de nombreuses reprises le vent comme un
                  signe d&apos;Allah et un instrument de Sa volonté. Le vent a
                  servi de moyen de destruction pour le peuple de &apos;Ad, qui
                  fut anéanti par un vent violent et glacial pendant sept nuits et
                  huit jours consécutifs (sourate al-Haqqah, 69:6-7). Mais le
                  vent est aussi décrit comme un porteur de bonnes nouvelles,
                  annonçant la pluie et la miséricorde divine (sourate al-A&apos;raf,
                  7:57). Cette dualité justifie pleinement la doua prophétique qui
                  demande le bien et se protège du mal. Pour en savoir plus sur
                  les invocations liées à la pluie, consultez notre article sur
                  la{" "}
                  <Link href="/doua-pluie-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua de la pluie en islam
                  </Link>.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le vent est une créature d&apos;Allah :</strong>{" "}
                      il ne faut jamais l&apos;insulter ni le maudire, car il
                      obéit au commandement divin.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Chaque vent a une mission :</strong>{" "}
                      qu&apos;il apporte la pluie bienfaisante ou qu&apos;il
                      soit un avertissement, le vent est toujours envoyé par
                      Allah avec un objectif précis.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;invocation est la meilleure réponse :</strong>{" "}
                      face à tout phénomène naturel impressionnant, le musulman
                      se tourne vers Allah plutôt que de se lamenter.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua lors de la pluie */}
              {/* ============================================ */}
              <section id="doua-pluie" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua lors de la pluie : Allahumma sayyiban nafi&apos;an
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La pluie est étroitement liée à l&apos;orage et au tonnerre.
                  Dans la tradition prophétique, la pluie est considérée comme
                  une miséricorde d&apos;Allah, et le moment où elle tombe est
                  un instant privilégié pour l&apos;invocation. Le Prophète
                  (paix et salut sur lui) a enseigné une doua concise mais
                  puissante à réciter lorsque les premières gouttes tombent.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ صَيِّبًا نَافِعًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma sayyiban nafi&apos;an
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, (accorde-nous) une pluie
                    bénéfique&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (1032)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le terme &laquo;&nbsp;sayyib&nbsp;&raquo; désigne une pluie
                  abondante qui coule et descend du ciel, tandis que
                  &laquo;&nbsp;nafi&apos;an&nbsp;&raquo; signifie
                  &laquo;&nbsp;bénéfique&nbsp;&raquo; ou
                  &laquo;&nbsp;profitable&nbsp;&raquo;. En demandant une pluie
                  bénéfique, le croyant reconnaît que toute pluie n&apos;est pas
                  nécessairement un bien : elle peut aussi causer des inondations,
                  des destructions ou des dommages. C&apos;est pourquoi la
                  précision &laquo;&nbsp;nafi&apos;an&nbsp;&raquo; est
                  essentielle dans cette invocation.
                </p>

                <HadithCard
                  arabic="مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ"
                  text="Nous avons reçu la pluie par la grâce et la miséricorde d'Allah."
                  source="Rapporté par al-Bukhari (846) et Muslim (71)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Après la pluie, le Prophète (paix et salut sur lui) prononçait
                  cette parole pour attribuer la pluie à la grâce d&apos;Allah
                  seul, et non aux étoiles ou aux phénomènes naturels comme le
                  faisaient les Arabes de l&apos;époque préislamique. Ce hadith
                  rappelle l&apos;importance du tawhid (unicité d&apos;Allah)
                  jusque dans les détails de la vie quotidienne. Attribuer la
                  pluie à autre qu&apos;Allah est une forme de koufr an-ni&apos;ma
                  (ingratitude envers les bienfaits divins).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La pluie est également un moment propice à l&apos;exaucement
                  des invocations. Le Prophète (paix et salut sur lui) a dit :
                  &laquo;&nbsp;Deux douas ne sont pas rejetées : la doua au moment
                  de l&apos;appel à la prière et la doua au moment de la
                  pluie&nbsp;&raquo; (rapporté par al-Hakim, authentifié par
                  al-Albani). Le croyant avisé profite donc de ce moment pour
                  multiplier les invocations et demander à Allah ce dont il a
                  besoin. Retrouvez l&apos;ensemble de nos{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    douas en islam
                  </Link>{" "}
                  pour enrichir votre pratique au quotidien.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains en prière et invocation doua en islam lors de la pluie et l'orage"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Refuge contre le vent destructeur */}
              {/* ============================================ */}
              <section id="refuge-vent-destructeur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Chercher refuge auprès d&apos;Allah contre le vent destructeur
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran relate comment des peuples entiers ont été détruits
                  par le vent en raison de leur désobéissance envers Allah. Le
                  peuple de &apos;Ad, connu pour sa force physique et son
                  arrogance, fut anéanti par un vent glacial et violent
                  (rih sarsar &apos;atiya) envoyé par Allah durant sept nuits et
                  huit jours consécutifs. Cet épisode, mentionné dans plusieurs
                  sourates (al-Haqqah, al-Qamar, Fussilat), sert
                  d&apos;avertissement pour toutes les générations suivantes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  &apos;A&apos;icha (qu&apos;Allah l&apos;agrée) rapporte que
                  le Prophète (paix et salut sur lui) était visiblement préoccupé
                  lorsque le vent soufflait fort. Elle lui en demanda la raison,
                  et il répondit qu&apos;il craignait que ce vent ne soit porteur
                  d&apos;un châtiment, à l&apos;image de ce qui arriva au peuple
                  de &apos;Ad. Cette crainte prophétique n&apos;est pas un signe
                  de faiblesse mais d&apos;une conscience spirituelle aiguë. Le
                  Prophète (paix et salut sur lui) savait que les phénomènes
                  naturels sont entre les mains d&apos;Allah et peuvent servir
                  d&apos;instrument de châtiment ou de miséricorde.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا أَرْسَلْتَ فِيهَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu bika min sharri ma arsalta fiha
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge auprès de Toi
                    contre le mal de ce que Tu as envoyé en elle
                    (la tempête)&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Extrait du hadith rapporté par Muslim (899)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent au musulman de combiner plusieurs
                  attitudes lors d&apos;un vent violent ou d&apos;une tempête.
                  La première est de réciter les invocations prophétiques citées
                  dans cet article. La deuxième est de multiplier le dhikr
                  (souvenir d&apos;Allah), le istighfar (demande de pardon) et
                  la salat (prière), car ces actes d&apos;adoration sont les
                  meilleurs moyens de se rapprocher d&apos;Allah et de mériter Sa
                  protection. La troisième est de ne jamais insulter le vent, la
                  pluie ou le tonnerre, car ces créatures obéissent à leur
                  Seigneur et ne font qu&apos;exécuter Son ordre.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La crainte d&apos;Allah protège :</strong>{" "}
                      celui qui craint Allah et L&apos;invoque sincèrement
                      bénéficie de Sa protection, même face aux éléments les plus
                      violents.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le istighfar est une protection :</strong>{" "}
                      demander pardon à Allah pendant l&apos;orage et la
                      tempête est une cause de préservation contre tout mal.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne jamais maudire les intempéries :</strong>{" "}
                      le vent, la pluie et le tonnerre sont des créatures
                      d&apos;Allah ; les insulter est interdit en islam.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Récapitulatif des douas */}
              {/* ============================================ */}
              <section id="recapitulatif-douas" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Récapitulatif des douas de l&apos;orage, du tonnerre et du vent
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voici un récapitulatif complet des invocations authentiques à
                  réciter lors des différents phénomènes météorologiques.
                  Mémorisez-les et enseignez-les à vos proches afin que chaque
                  orage devienne une occasion de rapprochement avec Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua en entendant le tonnerre
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Subhanalladhi yusabbihu ar-ra&apos;du bi hamdihi wal-mala&apos;ikatu min khifatihi
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire à Celui que le tonnerre glorifie par Sa
                    louange, ainsi que les anges, par crainte de Lui&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Malik dans al-Muwatta
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua lors du vent
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيهَا وَشَرِّ مَا أُرْسِلَتْ بِهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka khayraha wa khayra ma fiha wa khayra ma ursilat bihi, wa a&apos;udhu bika min sharriha wa sharri ma fiha wa sharri ma ursilat bihi
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande le bien de ce vent, le
                    bien de ce qu&apos;il contient et le bien de ce avec quoi il
                    a été envoyé. Et je cherche refuge auprès de Toi contre son
                    mal, le mal de ce qu&apos;il contient et le mal de ce avec
                    quoi il a été envoyé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (899)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua au début de la pluie
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ صَيِّبًا نَافِعًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma sayyiban nafi&apos;an
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, (accorde-nous) une pluie
                    bénéfique&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (1032)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua après la pluie
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Mutirnaa bi fadlillahi wa rahmatihi
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Nous avons reçu la pluie par la grâce et la
                    miséricorde d&apos;Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (846) et Muslim (71)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  5. Doua si la pluie devient excessive
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ حَوَالَيْنَا وَلَا عَلَيْنَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma hawalayna wa la &apos;alayna
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, autour de nous et non sur
                    nous&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (1013) et Muslim (897)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces cinq invocations couvrent l&apos;ensemble des situations
                  liées aux intempéries. Le musulman qui les mémorise et les
                  pratique régulièrement transforme chaque orage en un acte
                  d&apos;adoration et de rappel d&apos;Allah. Il ne s&apos;agit
                  pas de simples formules à réciter mécaniquement, mais
                  d&apos;invocations à prononcer avec présence du coeur et
                  conscience de la grandeur du Créateur. L&apos;orage, le
                  tonnerre et le vent deviennent alors des rappels vivants de la
                  puissance, de la miséricorde et de la souveraineté d&apos;Allah
                  sur Sa création.
                </p>
              </section>

              {/* ============================================ */}
              {/* AFFILIATE FORM */}
              {/* ============================================ */}
              <SocialBanner />

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
