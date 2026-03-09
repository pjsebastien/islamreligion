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
    "Doua pour la Palestine et Gaza en islam : invocations authentiques",
  description:
    "Découvrez les douas pour la Palestine et Gaza en islam : invocations authentiques en arabe avec phonétique et traduction, place d&apos;al-Quds et al-Aqsa, doua al-mazlum, patience et actions concrètes pour aider.",
  openGraph: {
    title:
      "Doua pour la Palestine et Gaza en islam : invocations authentiques",
    description:
      "Les invocations authentiques pour la Palestine et Gaza : textes en arabe, phonétique, traduction, hadiths sur al-Quds et le soutien aux opprimés.",
    url: "https://www.islamreligion.fr/doua-palestine-gaza-islam",
    images: [
      {
        url: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-palestine-gaza-islam",
  },
};

const tocItems = [
  { id: "importance-doua-opprimes", label: "L\u2019importance de la doua pour les opprimés" },
  { id: "doua-palestine-gaza", label: "Douas pour la Palestine et Gaza" },
  { id: "al-quds-al-aqsa", label: "Al-Quds et al-Aqsa en islam" },
  { id: "doua-al-mazlum", label: "La doua al-mazlum (de l\u2019opprimé)" },
  { id: "patience-fermete", label: "Doua pour la patience et la fermeté" },
  { id: "aider-au-dela-doua", label: "Comment aider au-delà de la doua" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua faire pour la Palestine et Gaza ?",
    answer:
      "Parmi les douas les plus recommandées pour la Palestine et Gaza : « Allahumma-nsur ikhwanana fi Filastin » (Seigneur, accorde la victoire à nos frères en Palestine), « HasbunAllahu wa ni&apos;mal wakil » (Allah nous suffit, Il est le meilleur Garant) et la doua de l&apos;opprimé « Allahumma inni mazlumun fantasir » (Seigneur, je suis opprimé, accorde-moi la victoire). Ces invocations peuvent être récitées en arabe ou dans toute autre langue.",
  },
  {
    question: "Pourquoi al-Quds (Jérusalem) est-elle sacrée en islam ?",
    answer:
      "Al-Quds est la troisième ville sainte de l&apos;islam après La Mecque et Médine. Elle abrite la mosquée al-Aqsa, première qibla des musulmans et lieu du voyage nocturne (al-Isra&apos;) du Prophète Muhammad (paix et salut sur lui). Le Coran mentionne cette terre comme « bénie » à plusieurs reprises, et le Prophète a encouragé les musulmans à visiter et prier à al-Aqsa.",
  },
  {
    question: "La doua de l'opprimé est-elle exaucée même pour un non-musulman ?",
    answer:
      "Oui, selon les hadiths authentiques, la doua de l&apos;opprimé (mazlum) est exaucée quel que soit son statut religieux. Le Prophète (paix et salut sur lui) a dit : « Crains la doua de l&apos;opprimé, car il n&apos;y a entre elle et Allah aucun voile » (al-Bukhari et Muslim). L&apos;injustice est rejetée par Allah de manière absolue, indépendamment de la religion de la victime.",
  },
  {
    question: "Comment aider la Palestine au-delà de la doua ?",
    answer:
      "Au-delà de la doua, le musulman peut aider la Palestine par les dons aux organisations humanitaires fiables, le boycott des produits soutenant l&apos;injustice, la sensibilisation dans son entourage, le partage d&apos;informations vérifiées, la participation à des manifestations pacifiques, et l&apos;éducation de ses enfants sur l&apos;importance d&apos;al-Quds et d&apos;al-Aqsa en islam.",
  },
  {
    question: "Quel est le meilleur moment pour faire doua pour la Palestine ?",
    answer:
      "La doua est exaucée à tout moment, mais certains instants sont particulièrement propices : le dernier tiers de la nuit, lors de la prosternation (sujud), entre l&apos;adhan et l&apos;iqama, le vendredi après l&apos;Asr, et durant le jeûne avant la rupture (iftar). Le Prophète (paix et salut sur lui) a dit que la doua du jeûneur au moment de la rupture n&apos;est pas rejetée (Ibn Majah).",
  },
  {
    question: "Peut-on invoquer contre les oppresseurs en islam ?",
    answer:
      "Oui, il est permis en islam d&apos;invoquer contre les oppresseurs, à condition de ne pas dépasser la mesure de l&apos;injustice subie. Les prophètes eux-mêmes ont invoqué contre les tyrans : Moussa contre Pharaon (Coran 10:88) et Nuh contre son peuple (Coran 54:10). Cependant, les savants recommandent de privilégier la doua pour la guidée et la justice plutôt que la destruction.",
  },
  {
    question: "La mosquée al-Aqsa est-elle mentionnée dans le Coran ?",
    answer:
      "Oui, la mosquée al-Aqsa est mentionnée explicitement dans le Coran dans la sourate al-Isra (17:1) : « Gloire à Celui qui a fait voyager Son serviteur de nuit, de la Mosquée al-Haram à la Mosquée al-Aqsa dont Nous avons béni les alentours. » Ce verset établit le caractère sacré d&apos;al-Aqsa et de la terre qui l&apos;entoure en islam.",
  },
];

export default function DouaPalestineGazaIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-palestine-gaza-islam/#article",
        headline:
          "Doua pour la Palestine et Gaza en islam : invocations authentiques",
        description:
          "Découvrez les douas pour la Palestine et Gaza en islam : invocations authentiques en arabe, place d'al-Quds et al-Aqsa, doua al-mazlum, patience et actions concrètes.",
        image: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        datePublished: "2026-03-27",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-palestine-gaza-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-palestine-gaza-islam/#breadcrumb",
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
            name: "Doua pour la Palestine",
            item: "https://www.islamreligion.fr/doua-palestine-gaza-islam",
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
          title="Doua pour la Palestine et Gaza en islam : invocations authentiques"
          subtitle="Les invocations du Coran et de la Sunna pour soutenir les opprimés de Palestine et Gaza. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-rayons-motifs-islamiques.jpg"
          imageAlt="Mains levées en invocation doua pour la Palestine avec rayons de lumière et motifs islamiques"
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
                <span className="text-foreground">Doua pour la Palestine</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La Palestine et Gaza occupent une place centrale dans le coeur
                  des musulmans en raison de la mosquée al-Aqsa, première qibla
                  et troisième lieu saint de l&apos;islam. Face aux épreuves que
                  subissent ses habitants, la doua constitue l&apos;arme la plus
                  puissante du croyant. Le Prophète (paix et salut sur lui) a
                  garanti que l&apos;invocation de l&apos;opprimé monte
                  directement à Allah sans aucun voile. Cet article rassemble
                  les invocations authentiques, les hadiths sur le soutien aux
                  opprimés et les moyens concrets d&apos;aider au-delà de la
                  prière.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance de la doua pour les opprimés */}
              {/* ============================================ */}
              <section id="importance-doua-opprimes" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance de la doua pour les opprimés en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La <strong>doua</strong> (invocation) occupe un rang
                  exceptionnel en islam. Le Prophète Muhammad (paix et salut
                  sur lui) l&apos;a qualifiée de &laquo;&nbsp;moelle de
                  l&apos;adoration&nbsp;&raquo; (at-Tirmidhi). Lorsqu&apos;il
                  s&apos;agit d&apos;invoquer pour les opprimés, cette
                  importance se décuple, car Allah a accordé à la doua de
                  l&apos;opprimé un statut unique parmi toutes les invocations.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En islam, l&apos;intercession pour les frères et soeurs en
                  difficulté n&apos;est pas un simple acte de solidarité
                  humaine : c&apos;est un devoir religieux et une forme
                  d&apos;adoration à part entière. Le Prophète (paix et salut
                  sur lui) a enseigné que celui qui invoque pour son frère en
                  son absence bénéficie de la même doua par un ange qui dit :
                  &laquo;&nbsp;Et pour toi la même chose&nbsp;&raquo; (Muslim).
                  Ainsi, invoquer pour les habitants de Palestine et de Gaza
                  est un acte qui profite autant à celui qui prie qu&apos;à
                  ceux pour qui il prie.
                </p>

                <HadithCard
                  arabic="واتقِ دعوة المظلوم فإنه ليس بينها وبين الله حجاب"
                  text="Crains la doua de l'opprimé, car il n'y a entre elle et Allah aucun voile."
                  source="Rapporté par al-Bukhari (1496) et Muslim (19)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondateur établit que la doua de l&apos;opprimé
                  traverse tous les obstacles pour atteindre le Trône
                  d&apos;Allah. Aucune condition de piété, de nationalité ou
                  de langue n&apos;est requise : la justice divine transcende
                  tous les critères humains. C&apos;est cette promesse qui
                  donne aux musulmans du monde entier la certitude que leurs
                  invocations pour la Palestine et Gaza sont entendues et
                  acceptées par le Très-Haut. Pour approfondir la doua de
                  celui qui subit l&apos;injustice, consultez notre article
                  détaillé sur la{" "}
                  <Link href="/doua-opprime-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de l&apos;opprimé en islam</Link>.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un devoir collectif :</strong>{" "}
                      invoquer pour les opprimés fait partie des obligations
                      de la communauté musulmane envers ses membres en
                      souffrance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une récompense double :</strong>{" "}
                      celui qui invoque pour son frère en son absence reçoit
                      la même doua par un ange, selon le hadith rapporté par
                      Muslim.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sans aucun voile :</strong>{" "}
                      la doua de l&apos;opprimé bénéficie d&apos;un accès
                      direct au Trône d&apos;Allah, ce qui en fait
                      l&apos;invocation la plus redoutable.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en doua avec rayons dorés symbolisant l'invocation pour les opprimés de Palestine"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Douas pour la Palestine et Gaza */}
              {/* ============================================ */}
              <section id="doua-palestine-gaza" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas authentiques pour la Palestine et Gaza
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les invocations suivantes sont tirées du Coran et de la
                  Sunna. Elles peuvent être récitées à tout moment pour
                  demander à Allah de soutenir les habitants de Palestine et
                  de Gaza, de leur accorder la victoire, la patience et la
                  délivrance. Chaque doua est présentée en arabe, en
                  phonétique et avec sa traduction en français.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour la victoire des opprimés
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation est inspirée des supplications prophétiques
                  pour demander à Allah d&apos;accorder le secours et la
                  victoire aux croyants opprimés. Elle est particulièrement
                  adaptée pour invoquer en faveur de la Palestine et de Gaza.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ انْصُرْ إِخْوَانَنَا فِي فِلَسْطِينَ وَفِي غَزَّةَ، اللَّهُمَّ كُنْ لَهُمْ وَلَا تَكُنْ عَلَيْهِمْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma-nsur ikhwanana fi Filastin wa fi Ghazza, Allahumma kun lahum wa la takun &apos;alayhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde la victoire à nos frères en Palestine et à Gaza. Seigneur, sois avec eux et ne sois pas contre eux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Invocation basée sur les formules prophétiques authentiques
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. HasbunAllahu wa ni&apos;mal wakil
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est l&apos;invocation qu&apos;Ibrahim (paix sur lui)
                  prononça lorsqu&apos;il fut jeté dans le feu, et que les
                  compagnons récitèrent à la bataille de Uhud face aux armées
                  coalisées. Elle exprime la confiance absolue en Allah comme
                  seul protecteur et garant face à toute oppression.
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
                  3. Doua de Nuh : appel au secours divin
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le prophète Nuh (paix sur lui) prononça cette invocation
                  après des siècles de patience face à l&apos;oppression de
                  son peuple. Elle est d&apos;une concision et d&apos;une
                  puissance remarquables, parfaitement adaptée aux situations
                  où l&apos;oppression semble insurmontable.
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
                  4. Doua pour la fermeté et la protection
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation coranique demande à Allah d&apos;accorder
                  la patience, d&apos;affermir les pas et d&apos;accorder la
                  victoire sur les oppresseurs. Les compagnons la récitaient
                  avant chaque combat contre les forces de l&apos;injustice.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana afrigh &apos;alayna sabran wa thabbit aqdamana wansurna &apos;alal-qawmil-kafirin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, déverse sur nous la patience, affermis nos pas et accorde-nous la victoire sur les gens mécréants&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:250)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  5. Remise de l&apos;affaire à Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Inspirée de l&apos;invocation du croyant de la famille de
                  Pharaon, cette doua exprime la confiance totale en la
                  clairvoyance d&apos;Allah sur la situation de Ses
                  serviteurs, même lorsque les circonstances semblent
                  désespérées.
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

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces invocations peuvent être récitées individuellement ou
                  collectivement, à tout moment de la journée. Les savants
                  recommandent de les multiplier lors des moments propices :
                  le dernier tiers de la nuit, lors du sujud (prosternation),
                  et le vendredi. Pour découvrir d&apos;autres invocations
                  face aux épreuves, consultez notre article sur la{" "}
                  <Link href="/doua-moment-difficile-epreuve-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en moment difficile</Link>.
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
              {/* SECTION 3 : Al-Quds et al-Aqsa en islam */}
              {/* ============================================ */}
              <section id="al-quds-al-aqsa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Al-Quds et la mosquée al-Aqsa : leur place en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Pour comprendre l&apos;attachement profond des musulmans à
                  la Palestine, il faut saisir la place unique
                  qu&apos;occupent <strong>al-Quds</strong> (Jérusalem) et la
                  <strong> mosquée al-Aqsa</strong> dans la foi islamique.
                  Cette terre n&apos;est pas simplement un enjeu géopolitique :
                  elle est liée à l&apos;essence même de la croyance musulmane,
                  à travers le Coran, la Sunna et l&apos;histoire des
                  prophètes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran mentionne explicitement la mosquée al-Aqsa dans le
                  récit du voyage nocturne (al-Isra&apos; wal-Mi&apos;raj) :
                  &laquo;&nbsp;Gloire à Celui qui a fait voyager Son serviteur
                  de nuit, de la Mosquée al-Haram à la Mosquée al-Aqsa dont
                  Nous avons béni les alentours&nbsp;&raquo; (Coran, 17:1).
                  L&apos;expression &laquo;&nbsp;dont Nous avons béni les
                  alentours&nbsp;&raquo; indique que la bénédiction divine
                  s&apos;étend à toute la terre de Palestine, et pas seulement
                  au site de la mosquée.
                </p>

                <HadithCard
                  arabic="لا تُشَدُّ الرِّحالُ إلَّا إلى ثلاثةِ مساجدَ: المسجدِ الحرامِ، ومسجدي هذا، والمسجدِ الأقصى"
                  text="On ne voyage (pour la prière) que vers trois mosquées : la Mosquée al-Haram (La Mecque), ma mosquée que voici (Médine) et la Mosquée al-Aqsa (Jérusalem)."
                  source="Rapporté par al-Bukhari (1189) et Muslim (1397)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith place al-Aqsa au même rang que les deux mosquées
                  les plus sacrées de l&apos;islam. La prière accomplie dans
                  la mosquée al-Aqsa équivaut à deux cent cinquante prières
                  effectuées ailleurs, selon certains hadiths rapportés par
                  al-Bayhaqi. Al-Quds fut également la <strong>première
                  qibla</strong> (direction de prière) des musulmans avant que
                  celle-ci ne soit changée vers La Mecque, soulignant son
                  importance primordiale dans l&apos;histoire de la
                  communauté musulmane.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La terre de Palestine est aussi intimement liée à
                  l&apos;histoire des prophètes. Ibrahim, Isma&apos;il,
                  Ishaq, Ya&apos;qub, Yusuf, Dawud, Sulayman, Zakariyya,
                  Yahya et &apos;Issa (paix sur eux tous) ont foulé cette
                  terre bénie. Le Prophète Muhammad (paix et salut sur lui)
                  y a dirigé la prière de tous les prophètes lors du voyage
                  nocturne, établissant ainsi la continuité de la mission
                  prophétique sur cette terre sacrée.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Première qibla :</strong>{" "}
                      al-Quds fut la direction de prière des musulmans
                      pendant environ seize mois avant le changement vers
                      La Mecque.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Terre des prophètes :</strong>{" "}
                      des dizaines de prophètes mentionnés dans le Coran
                      ont vécu et prêché en Palestine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Terre bénie :</strong>{" "}
                      le Coran qualifie la Palestine et ses alentours de
                      terre &laquo;&nbsp;bénie&nbsp;&raquo; à plusieurs
                      reprises (17:1, 21:71, 21:81).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les versets sur al-Aqsa et la terre bénie de Palestine"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua al-mazlum */}
              {/* ============================================ */}
              <section id="doua-al-mazlum" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua al-mazlum : l&apos;invocation de l&apos;opprimé qui n&apos;est jamais rejetée
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme <strong>mazlum</strong> (مظلوم) désigne en arabe
                  celui qui subit le <em>dhulm</em> (injustice, oppression).
                  Les habitants de Palestine et de Gaza incarnent cette
                  réalité de l&apos;oppression subie depuis des décennies :
                  déplacements forcés, destructions, sièges et privations
                  de droits fondamentaux. Leur situation confère à leurs
                  invocations le statut privilégié de la doua al-mazlum,
                  celle que rien ne peut empêcher d&apos;atteindre Allah.
                </p>

                <HadithCard
                  arabic="ثلاث دعوات مستجابات لا شك فيهن: دعوة المظلوم، ودعوة المسافر، ودعوة الوالد على ولده"
                  text="Trois invocations sont exaucées sans aucun doute : la doua de l'opprimé, la doua du voyageur, et la doua du parent pour son enfant."
                  source="Rapporté par at-Tirmidhi (1905), Abu Dawud (1536)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La formule &laquo;&nbsp;sans aucun doute&nbsp;&raquo; (la
                  shakka fihinna) utilisée par le Prophète (paix et salut
                  sur lui) ne laisse aucune place à l&apos;ambiguïté.
                  L&apos;opprimé qui invoque Allah possède une garantie
                  prophétique d&apos;exaucement. Cette certitude doit à la
                  fois réconforter ceux qui subissent l&apos;injustice et
                  terrifier ceux qui la commettent, car aucun pouvoir
                  terrestre ne peut empêcher cette doua d&apos;atteindre le
                  Trône d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que l&apos;exaucement de la doua
                  al-mazlum se manifeste de trois manières possibles : soit
                  Allah accorde exactement ce qui est demandé, soit Il
                  écarte un mal équivalent de la personne, soit Il réserve
                  la récompense pour le Jour du Jugement. Dans tous les
                  cas, aucune invocation de l&apos;opprimé n&apos;est
                  perdue. Les musulmans qui invoquent pour la Palestine
                  peuvent donc avoir la certitude que chaque doua produit
                  son effet, même si celui-ci n&apos;est pas immédiatement
                  visible.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un aspect remarquable de cette doua est qu&apos;elle
                  s&apos;applique indépendamment du statut religieux de
                  l&apos;opprimé. Le Prophète (paix et salut sur lui) a
                  averti ses compagnons de craindre la doua de l&apos;opprimé
                  &laquo;&nbsp;même s&apos;il est mécréant&nbsp;&raquo;
                  (Ahmad), car l&apos;injustice est une réalité
                  qu&apos;Allah rejette de manière absolue. Pour en savoir
                  plus sur les invocations face à l&apos;injustice des
                  autorités, consultez notre article sur la{" "}
                  <Link href="/doua-injustice-autorites-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua face à l&apos;injustice des autorités</Link>.
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
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Patience et fermeté */}
              {/* ============================================ */}
              <section id="patience-fermete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour la patience et la fermeté (sabr et thabat)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La patience (<strong>sabr</strong>) et la fermeté
                  (<strong>thabat</strong>) sont deux qualités essentielles
                  que le Coran et la Sunna associent étroitement à
                  l&apos;épreuve de l&apos;oppression. Les habitants de
                  Palestine et de Gaza font preuve d&apos;une endurance
                  (sumud) qui force l&apos;admiration du monde entier.
                  Invoquer pour qu&apos;Allah leur accorde la patience et
                  la fermeté est l&apos;une des meilleures douas que le
                  musulman puisse formuler en leur faveur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran enseigne que la patience face à l&apos;épreuve
                  est récompensée sans aucun compte : &laquo;&nbsp;Les
                  endurants auront leur pleine récompense sans aucun
                  compte&nbsp;&raquo; (Coran, 39:10). Cette promesse
                  divine s&apos;adresse tout particulièrement à ceux qui
                  endurent l&apos;injustice avec dignité et foi. Le sabr
                  en islam n&apos;est pas la résignation passive : c&apos;est
                  une force intérieure qui permet de résister, de garder
                  espoir et de poursuivre le combat pour la justice tout
                  en maintenant sa confiance en Allah.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le sabr (patience) face à l&apos;adversité
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Coran affirme : &laquo;&nbsp;Ô vous qui croyez,
                        cherchez secours dans la patience et la
                        prière&nbsp;&raquo; (2:153). La patience n&apos;est
                        pas l&apos;acceptation de l&apos;injustice mais la
                        capacité de traverser l&apos;épreuve sans perdre sa
                        foi ni sa dignité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le thabat (fermeté) dans la foi
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La fermeté consiste à rester ancré dans ses
                        convictions malgré la pression et les épreuves.
                        Le Coran rapporte l&apos;invocation des croyants :
                        &laquo;&nbsp;Seigneur, déverse sur nous la patience
                        et fais-nous mourir en état de soumission&nbsp;&raquo;
                        (7:126).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le tawakkul (confiance) en Allah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le tawakkul est la confiance absolue en Allah,
                        sachant que rien ne se produit sans Sa permission
                        et que toute épreuve a une sagesse. Le Coran
                        enseigne : &laquo;&nbsp;Et quiconque place sa
                        confiance en Allah, Il lui suffit&nbsp;&raquo;
                        (65:3).
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="عجبًا لأمر المؤمن، إنَّ أمره كله خير، وليس ذاك لأحد إلا للمؤمن، إن أصابته سرَّاء شكر فكان خيرًا له، وإن أصابته ضرَّاء صبر فكان خيرًا له"
                  text="Comme l'affaire du croyant est étonnante ! Tout son sort est un bien, et cela n'est donné qu'au croyant. Si un bonheur l'atteint, il remercie, et c'est un bien pour lui. Si un malheur le frappe, il patiente, et c'est un bien pour lui."
                  source="Rapporté par Muslim (2999)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith offre une perspective profonde sur l&apos;épreuve
                  que traversent les habitants de Palestine et de Gaza. Leur
                  patience et leur fermeté dans la foi, malgré des
                  souffrances inimaginables, les élèvent au rang des
                  croyants les plus éprouvés et les plus récompensés auprès
                  d&apos;Allah. Le musulman qui invoque pour eux demande
                  en réalité que cette patience leur soit facilitée et que
                  leur fermeté soit renforcée par le secours divin. Pour
                  plus d&apos;invocations dans les moments d&apos;épreuve,
                  découvrez notre guide complet des{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Comment aider au-delà de la doua */}
              {/* ============================================ */}
              <section id="aider-au-dela-doua" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment aider la Palestine au-delà de la doua
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam enseigne que la doua et l&apos;action concrète
                  sont complémentaires et indissociables. Le Prophète (paix
                  et salut sur lui) a dit : &laquo;&nbsp;Attache ta chamelle
                  puis place ta confiance en Allah&nbsp;&raquo;
                  (at-Tirmidhi). Ce principe s&apos;applique pleinement à
                  la cause palestinienne : invoquer Allah est essentiel,
                  mais agir concrètement l&apos;est tout autant.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Les dons humanitaires
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Soutenir les organisations humanitaires fiables qui
                      opèrent en Palestine et à Gaza. Le don (sadaqa) est
                      l&apos;une des meilleures oeuvres en islam, et il est
                      particulièrement méritoire lorsqu&apos;il est destiné
                      aux opprimés et aux nécessiteux.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La sensibilisation et l&apos;éducation
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Partager des informations vérifiées sur la situation
                      en Palestine, éduquer les enfants sur l&apos;importance
                      d&apos;al-Quds et d&apos;al-Aqsa, et combattre la
                      désinformation par le savoir et la vérité.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le boycott éthique
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Boycotter les produits et entreprises qui soutiennent
                      ou profitent de l&apos;oppression est une forme
                      d&apos;action concrète et pacifique. Le choix
                      conscient de consommation est un moyen de pression
                      légitime et efficace.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le plaidoyer pacifique
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Participer à des manifestations pacifiques, signer
                      des pétitions, contacter les représentants politiques
                      et utiliser les réseaux sociaux pour faire entendre la
                      voix de la justice sont des actions encouragées en
                      islam.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui
                  qui voit un mal doit le changer par sa main, s&apos;il ne
                  le peut pas, par sa langue, et s&apos;il ne le peut pas,
                  par son coeur, et c&apos;est le degré le plus faible de
                  la foi (Muslim). Chaque musulman doit donc évaluer ses
                  moyens et agir en conséquence, sans jamais négliger
                  l&apos;invocation qui reste la plus puissante des armes.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne jamais sous-estimer la doua :</strong>{" "}
                      même celui qui ne peut agir concrètement dispose de
                      l&apos;arme la plus puissante : l&apos;invocation
                      sincère adressée à Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Combiner doua et action :</strong>{" "}
                      l&apos;islam enseigne que la confiance en Allah
                      (tawakkul) ne dispense pas de l&apos;effort humain.
                      Les deux sont complémentaires.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rester informé :</strong>{" "}
                      suivre la situation avec des sources fiables permet
                      de formuler des douas précises et de cibler les
                      actions les plus utiles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Éduquer les générations futures :</strong>{" "}
                      transmettre aux enfants l&apos;attachement à al-Quds
                      et la conscience de la cause palestinienne est un
                      investissement à long terme pour la communauté.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua de l'opprimé en islam"
                  description="Découvrez les invocations authentiques de celui qui subit l'injustice, tirées du Coran et de la Sunna, avec les hadiths sur la puissance de cette doua."
                  href="/doua-opprime-islam"
                />
              </section>

              {/* ============================================ */}
              {/* AffiliateForm + FAQ */}
              {/* ============================================ */}
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
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/doua-injustice-autorites-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua face à l&apos;injustice
                  </Link>
                  <Link
                    href="/doua-moment-difficile-epreuve-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en moment difficile
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
