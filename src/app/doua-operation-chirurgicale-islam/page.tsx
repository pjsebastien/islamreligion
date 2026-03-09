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
    "Doua avant une opération chirurgicale en islam : invocations et tawakkul",
  description:
    "Découvrez les douas avant une opération chirurgicale en islam : invocations en arabe avec phonétique et traduction, tawakkul, doua bismillah tawakkaltu, doua de guérison, roqya et visite du malade.",
  openGraph: {
    title:
      "Doua avant une opération chirurgicale en islam : invocations et tawakkul",
    description:
      "Les invocations authentiques avant une opération en islam : textes en arabe, phonétique, traduction, hadiths sur le tawakkul et la guérison.",
    url: "https://www.islamreligion.fr/doua-operation-chirurgicale-islam",
    images: [
      {
        url: "/images/doua-mains-levees-illustration-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-operation-chirurgicale-islam",
  },
};

const tocItems = [
  { id: "tawakkul-chirurgie", label: "Le tawakkul avant une opération" },
  { id: "douas-avant-operation", label: "Douas à réciter avant l\u2019opération" },
  { id: "doua-guerison", label: "Doua pour la guérison après l\u2019opération" },
  { id: "doua-chirurgien", label: "Doua pour le chirurgien et l\u2019équipe médicale" },
  { id: "roqya-operation", label: "Roqya et protection spirituelle" },
  { id: "visite-malade", label: "Visiter le malade après une opération" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua réciter avant une opération chirurgicale en islam ?",
    answer:
      "Avant une opération, il est recommandé de réciter « Bismillahi tawakkaltu &apos;alAllah, wa la hawla wa la quwwata illa billah » (Au nom d&apos;Allah, je place ma confiance en Allah, il n&apos;y a de force ni de puissance qu&apos;en Allah). On peut aussi réciter la doua de Younous « La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin » et multiplier les invocations pour la guérison.",
  },
  {
    question: "Le musulman peut-il se faire opérer en islam ?",
    answer:
      "Oui, se soigner et recourir à la chirurgie est non seulement permis mais encouragé en islam. Le Prophète (paix et salut sur lui) a dit : « Soignez-vous, car Allah n&apos;a pas créé de maladie sans en avoir créé le remède » (Abu Dawud). Le recours aux causes (médecine) ne contredit pas le tawakkul, au contraire il en fait partie.",
  },
  {
    question: "Peut-on faire la roqya avant une opération ?",
    answer:
      "Oui, la roqya (récitation de versets coraniques à visée de protection et de guérison) est tout à fait recommandée avant une opération. On peut réciter sourate Al-Fatiha, Ayat al-Kursi et les trois dernières sourates (Al-Ikhlas, Al-Falaq, An-Nas) en soufflant sur soi-même ou sur le malade. Cela ne remplace pas le traitement médical mais le complète spirituellement.",
  },
  {
    question: "Que dire quand on rend visite à un malade opéré ?",
    answer:
      "Le Prophète (paix et salut sur lui) enseignait de dire lors de la visite du malade : « La ba&apos;s, tahurun in sha Allah » (Pas de mal, c&apos;est une purification si Allah le veut). On peut aussi réciter sept fois : « As&apos;alullaha al-&apos;Adhim Rabbal-&apos;arshil-&apos;adhim an yashfiyak » (Je demande à Allah le Magnifique, Seigneur du Trône immense, de te guérir).",
  },
  {
    question: "Faut-il prier avant d\u2019entrer au bloc opératoire ?",
    answer:
      "Si le musulman est en mesure de prier avant l&apos;opération, il est fortement recommandé d&apos;accomplir deux raka&apos;at de prière surérogatoire et d&apos;y ajouter des invocations personnelles. Si l&apos;heure d&apos;une prière obligatoire approche, il doit l&apos;accomplir si son état le permet. Pendant l&apos;anesthésie, les prières manquées devront être rattrapées après le réveil.",
  },
  {
    question: "Comment garder le tawakkul pendant une opération ?",
    answer:
      "Le tawakkul (confiance en Allah) se manifeste par la prise des causes matérielles (choisir un bon chirurgien, suivre les protocoles médicaux) tout en ayant la certitude que la guérison vient uniquement d&apos;Allah. Le musulman confie son sort à Allah avant l&apos;anesthésie et sait que, quelle que soit l&apos;issue, c&apos;est le décret divin qui s&apos;accomplit.",
  },
  {
    question: "Quels versets du Coran réciter pour la guérison après une opération ?",
    answer:
      "Les versets les plus recommandés pour la guérison sont : sourate Al-Fatiha (la plus grande roqya), Ayat al-Kursi (verset 255 de sourate Al-Baqara), les trois dernières sourates du Coran, et le verset « Wa idha maridtu fa huwa yashfin » (Et quand je suis malade, c&apos;est Lui qui me guérit, Coran 26:80). La récitation régulière de ces versets accompagne la convalescence.",
  },
];

export default function DouaOperationChirurgicaleIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-operation-chirurgicale-islam/#article",
        headline:
          "Doua avant une opération chirurgicale en islam : invocations et tawakkul",
        description:
          "Découvrez les douas avant une opération chirurgicale en islam : invocations en arabe, tawakkul, doua de guérison, roqya et visite du malade.",
        image: "/images/doua-mains-levees-illustration-lumiere.jpg",
        datePublished: "2026-04-03",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-operation-chirurgicale-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-operation-chirurgicale-islam/#breadcrumb",
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
            name: "Doua avant une opération",
            item: "https://www.islamreligion.fr/doua-operation-chirurgicale-islam",
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
          title="Doua avant une opération chirurgicale en islam"
          subtitle="Les invocations authentiques pour se préparer spirituellement à une opération, placer sa confiance en Allah et demander la guérison. Textes en arabe, phonétique et traduction."
          imageSrc="/images/doua-mains-levees-illustration-lumiere.jpg"
          imageAlt="Mains levées en invocation doua avant une opération chirurgicale avec lumière symbolisant la confiance en Allah"
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
                <span className="text-foreground">Doua avant une opération</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Faire face à une opération chirurgicale est une épreuve qui
                  mêle appréhension et espoir. L&apos;islam enseigne au musulman
                  de conjuguer la prise des causes matérielles (choix du
                  chirurgien, respect des protocoles médicaux) avec le tawakkul
                  (confiance absolue en Allah). Plusieurs invocations
                  prophétiques accompagnent le croyant avant, pendant et après
                  l&apos;intervention, lui rappelant que la guérison vient
                  uniquement d&apos;Allah, le Guérisseur (Ash-Shafi).
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le tawakkul avant une opération */}
              {/* ============================================ */}
              <section id="tawakkul-chirurgie" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tawakkul avant une opération chirurgicale
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>tawakkul</strong> (التوكل) est la confiance
                  sincère que le croyant place en Allah tout en prenant les
                  moyens nécessaires. Avant une opération, ce principe prend
                  toute sa dimension : le musulman choisit le meilleur
                  chirurgien, suit les recommandations médicales, puis remet
                  l&apos;issue entre les mains d&apos;Allah. Il ne s&apos;agit
                  ni de fatalisme ni de passivité, mais d&apos;un équilibre
                  profond entre l&apos;action humaine et la soumission au
                  décret divin.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a illustré ce principe
                  lorsqu&apos;un bédouin lui demanda s&apos;il devait attacher
                  son chameau ou s&apos;en remettre à Allah. Sa réponse fut
                  limpide : &laquo;&nbsp;Attache-le et place ta confiance en
                  Allah&nbsp;&raquo; (at-Tirmidhi). De la même manière, le
                  musulman qui entre au bloc opératoire prend toutes les
                  précautions médicales nécessaires, tout en sachant que le
                  résultat appartient à Allah seul.
                </p>

                <HadithCard
                  arabic="تداووا عباد الله فإن الله لم يضع داء إلا وضع له شفاء غير داء واحد: الهرم"
                  text="Soignez-vous, serviteurs d'Allah, car Allah n'a pas créé de maladie sans en avoir créé le remède, à l'exception d'une seule : la vieillesse."
                  source="Rapporté par Abu Dawud (3855), at-Tirmidhi (2038)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith authentique établit clairement que se soigner, y
                  compris par la chirurgie, fait partie de la voie islamique.
                  Refuser un traitement médical en prétextant le tawakkul serait
                  en réalité une incompréhension de ce concept. Le véritable
                  tawakkul consiste à utiliser tous les moyens qu&apos;Allah a
                  mis à disposition, puis à Lui confier le résultat avec
                  sérénité et acceptation.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Consulter les meilleurs spécialistes :</strong>{" "}
                      chercher un chirurgien compétent est un acte de sagesse
                      conforme à la Sunna, pas un manque de confiance en Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Multiplier les invocations :</strong> les jours
                      précédant l&apos;opération sont propices pour intensifier
                      les <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas en islam</Link> et
                      se rapprocher d&apos;Allah par la prière et le dhikr.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Accepter le décret divin :</strong> quelle que soit
                      l&apos;issue de l&apos;opération, le croyant sait que tout
                      fait partie du qadar (destin) d&apos;Allah et que chaque
                      épreuve est source de purification.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée illustrant le tawakkul et la doua avant une opération chirurgicale"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Douas avant l'opération */}
              {/* ============================================ */}
              <section id="douas-avant-operation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas à réciter avant une opération chirurgicale
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Plusieurs invocations authentiques tirées du Coran et de la
                  Sunna sont particulièrement adaptées au moment qui précède
                  une opération. Le croyant les récite avec présence du coeur,
                  confiant son corps et son âme à Celui qui détient la guérison.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Bismillahi tawakkaltu &apos;alAllah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation est celle que le Prophète (paix et salut sur
                  lui) recommandait de réciter à chaque sortie de la maison.
                  Elle est particulièrement appropriée lorsque le musulman
                  quitte son domicile pour se rendre à l&apos;hôpital ou avant
                  d&apos;entrer au bloc opératoire, car elle place chaque pas
                  sous la protection divine.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahi tawakkaltu &apos;alAllah, wa la hawla wa la quwwata illa billah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, je place ma confiance en Allah, il n&apos;y a de force ni de puissance qu&apos;en Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5095), at-Tirmidhi (3426)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. La doua de Younous (invocation de détresse)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsque l&apos;angoisse précédant l&apos;opération se fait
                  sentir, la doua de Younous est un refuge spirituel d&apos;une
                  puissance garantie par le Prophète lui-même. Elle combine
                  l&apos;affirmation de l&apos;unicité d&apos;Allah, Sa
                  glorification et la reconnaissance de ses propres faiblesses.
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
                  3. HasbiyAllahu la ilaha illa Huwa
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation coranique exprime la suffisance d&apos;Allah
                  dans toute situation. Le croyant qui la récite avant une
                  intervention affirme qu&apos;Allah lui suffit comme protecteur,
                  comme garant et comme guérisseur, quelle que soit la gravité
                  de l&apos;opération.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> HasbiyAllahu la ilaha illa Huwa, &apos;alayhi tawakkaltu wa Huwa Rabbul-&apos;arshil-&apos;adhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah me suffit, il n&apos;y a de divinité que Lui. En Lui je place ma confiance, et Il est le Seigneur du Trône immense&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate At-Tawba (9:129)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit que celui qui récite
                  cette invocation sept fois le matin et sept fois le soir,
                  Allah lui suffit contre tout ce qui le préoccupe (Abu Dawud).
                  Les jours précédant l&apos;opération, la récitation régulière
                  de cette doua apporte une sérénité profonde et renforce le
                  lien avec Allah. Pour approfondir les invocations face à la{" "}
                  <Link href="/doua-douleur-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douleur en islam</Link>,
                  consultez notre article dédié.
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
              {/* SECTION 3 : Doua pour la guérison */}
              {/* ============================================ */}
              <section id="doua-guerison" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour la guérison après une opération chirurgicale
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La période de convalescence qui suit une opération est un
                  moment où le croyant ressent de manière particulièrement vive
                  sa dépendance envers Allah. La douleur post-opératoire, la
                  fatigue et l&apos;attente de la guérison sont autant
                  d&apos;occasions de se tourner vers Celui qui guérit
                  véritablement. Le Coran rapporte cette parole d&apos;Ibrahim
                  (paix sur lui) qui résume toute la croyance islamique sur la
                  guérison.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Wa idha maridtu fa Huwa yashfin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Et quand je suis malade, c&apos;est Lui qui me guérit&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ash-Shu&apos;ara (26:80)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce verset attribue la guérison exclusivement à Allah. Le
                  chirurgien, les médicaments et les soins post-opératoires
                  sont des moyens qu&apos;Allah a mis à disposition, mais la
                  guérison elle-même demeure un acte divin. Cette conviction
                  apaise le coeur du malade et l&apos;empêche de s&apos;attacher
                  excessivement aux causes matérielles au détriment de la
                  dimension spirituelle.
                </p>

                <HadithCard
                  arabic="اللهم رب الناس، أذهب البأس، واشف أنت الشافي، لا شفاء إلا شفاؤك، شفاء لا يغادر سقما"
                  text="Ô Allah, Seigneur des hommes, dissipe le mal, guéris, Tu es le Guérisseur, il n'y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie."
                  source="Rapporté par al-Bukhari (5675) et Muslim (2191)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation prophétique est l&apos;une des plus
                  puissantes pour demander la guérison. Le Prophète (paix et
                  salut sur lui) la récitait en passant sa main sur le malade.
                  Après une opération, le patient ou ses proches peuvent la
                  réciter régulièrement, en posant la main droite sur la zone
                  opérée si possible. La répétition de cette doua avec conviction
                  et humilité accompagne la convalescence et renforce le lien
                  spirituel avec Allah. Pour d&apos;autres invocations de{" "}
                  <Link href="/doua-guerison-malade-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">guérison du malade en islam</Link>,
                  consultez notre article complet.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains en prière illustrant la doua pour la guérison après une opération chirurgicale en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Patience face à la douleur :</strong> chaque
                      douleur ressentie après l&apos;opération expie des péchés
                      selon les hadiths authentiques. Le Prophète (paix et salut
                      sur lui) a dit qu&apos;aucune fatigue, maladie, souci ou
                      tristesse n&apos;atteint le musulman sans qu&apos;Allah ne
                      lui pardonne par cela certains de ses péchés (al-Bukhari).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Gratitude pour la santé :</strong> une fois rétabli,
                      le musulman remercie Allah par la prosternation de
                      reconnaissance (sujud ash-shukr) et redouble de bonnes
                      actions.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua pour le chirurgien */}
              {/* ============================================ */}
              <section id="doua-chirurgien" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour le chirurgien et l&apos;équipe médicale
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Invoquer Allah en faveur du chirurgien et de toute
                  l&apos;équipe médicale est un acte de reconnaissance et de
                  sagesse. Le médecin est un moyen entre les mains d&apos;Allah,
                  et prier pour la précision de ses gestes, la clarté de son
                  jugement et la réussite de l&apos;intervention complète la
                  démarche de tawakkul du patient.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  On peut formuler des invocations libres en français ou en
                  arabe, comme : &laquo;&nbsp;Ô Allah, guide la main du
                  chirurgien et accorde-lui la précision, la sagesse et la
                  réussite dans cette opération. Ô Allah, protège-moi par Ta
                  miséricorde et fais de cette intervention une cause de
                  guérison&nbsp;&raquo;. Les invocations personnelles sont
                  acceptées dans toutes les langues.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ سَدِّدْ يَدَهُ وَاهْدِهِ وَوَفِّقْهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma saddid yadahu wahdih wa waffiqhu
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, rends sa main précise, guide-le et accorde-lui la réussite&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Invocation libre inspirée des formulations prophétiques
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) encourageait également
                  à invoquer en faveur de celui qui nous fait du bien. Le
                  chirurgien qui oeuvre pour la guérison du patient mérite
                  cette reconnaissance spirituelle. Après l&apos;opération,
                  il est recommandé de dire à toute personne qui a aidé :
                  &laquo;&nbsp;Jazak Allahu khayran&nbsp;&raquo; (Qu&apos;Allah
                  te récompense par le bien), car le Prophète a enseigné que
                  c&apos;est la meilleure forme de remerciement (at-Tirmidhi).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La famille du patient joue également un rôle spirituel
                  pendant l&apos;opération. Les proches peuvent se réunir pour
                  invoquer Allah, réciter le Coran et multiplier les aumônes
                  (sadaqat) en faveur du malade. La sadaqa est un moyen
                  reconnu dans la Sunna pour attirer la guérison et repousser
                  les malheurs. Le Prophète (paix et salut sur lui) a dit :
                  &laquo;&nbsp;Traitez vos malades par l&apos;aumône&nbsp;&raquo;
                  (rapporté par at-Tabarani, authentifié par al-Albani).
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Roqya et protection */}
              {/* ============================================ */}
              <section id="roqya-operation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Roqya et protection spirituelle avant l&apos;opération
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La roqya shar&apos;iyya (incantation conforme à la Sunna)
                  constitue une protection spirituelle que le musulman peut
                  pratiquer avant une intervention chirurgicale. Il s&apos;agit
                  de réciter des versets du Coran et des invocations
                  prophétiques en soufflant légèrement sur soi-même ou sur le
                  malade, sans aucune pratique contraire à la Sunna.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) pratiquait lui-même la
                  roqya et encourageait les compagnons à la faire. A&apos;icha
                  (qu&apos;Allah l&apos;agrée) rapporte que lorsque le Prophète
                  tombait malade, il récitait les sourates protectrices
                  (Al-Falaq et An-Nas), soufflait dans ses mains et passait ses
                  mains sur son corps. Cette pratique est tout à fait compatible
                  avec le recours à la médecine moderne et ne la remplace en
                  aucun cas.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter sourate Al-Fatiha
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Considérée comme la plus grande roqya, Al-Fatiha est
                        &laquo;&nbsp;la mère du Coran&nbsp;&raquo; et contient
                        en elle la demande de guidance, de miséricorde et de
                        protection. La réciter sur le malade avant
                        l&apos;opération est une Sunna confirmée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter Ayat al-Kursi
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le verset du Trône (Al-Baqara, 2:255) est le plus
                        majestueux du Coran. Le Prophète (paix et salut sur
                        lui) a enseigné que celui qui le récite le soir est
                        protégé par un gardien d&apos;Allah jusqu&apos;au matin.
                        Le réciter avant l&apos;anesthésie place le patient sous
                        la protection divine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter les trois dernières sourates (Al-Mu&apos;awwidhat)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les sourates Al-Ikhlas, Al-Falaq et An-Nas forment un
                        ensemble de protection contre tout mal. Les réciter
                        trois fois chacune, en soufflant dans les paumes des
                        mains puis en les passant sur le corps, est la pratique
                        du Prophète (paix et salut sur lui) rapportée par
                        al-Bukhari et Muslim.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Poser la main sur la zone douloureuse
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) enseignait de poser
                        la main droite sur la zone de douleur et de dire trois
                        fois &laquo;&nbsp;Bismillah&nbsp;&raquo; puis sept
                        fois &laquo;&nbsp;A&apos;udhu bi &apos;izzatillahi wa
                        qudratihi min sharri ma ajidu wa uhadhir&nbsp;&raquo;
                        (Muslim). Cette pratique peut être faite avant
                        l&apos;opération si l&apos;état le permet.
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="ضع يدك على الذي تألم من جسدك وقل: بسم الله ثلاثاً، وقل سبع مرات: أعوذ بعزة الله وقدرته من شر ما أجد وأحاذر"
                  text="Pose ta main sur l'endroit où tu as mal et dis trois fois 'Bismillah', puis dis sept fois : 'Je cherche refuge dans la puissance d'Allah et Son pouvoir contre le mal que je ressens et que je crains.'"
                  source="Rapporté par Muslim (2202)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Visite du malade */}
              {/* ============================================ */}
              <section id="visite-malade" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Visiter le malade après une opération chirurgicale
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La visite du malade (&apos;iyadat al-marid) est un droit du
                  musulman sur son frère et l&apos;une des obligations
                  communautaires les plus méritoires en islam. Après une
                  opération, le patient a particulièrement besoin de soutien
                  moral et spirituel. Le Prophète (paix et salut sur lui) a
                  décrit les mérites considérables de cet acte.
                </p>

                <HadithCard
                  arabic="إن المسلم إذا عاد أخاه المسلم لم يزل في خُرفة الجنة حتى يرجع"
                  text="Lorsqu'un musulman rend visite à son frère malade, il ne cesse d'être dans les jardins du Paradis jusqu'à ce qu'il revienne."
                  source="Rapporté par Muslim (2568)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le visiteur du malade opéré doit suivre certaines recommandations
                  prophétiques. Parmi les douas enseignées par le Prophète (paix
                  et salut sur lui), celle-ci est particulièrement connue et
                  adaptée à la situation post-opératoire :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> As&apos;alullaha al-&apos;Adhim Rabbal-&apos;arshil-&apos;adhim an yashfiyak
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je demande à Allah le Magnifique, Seigneur du Trône immense, de te guérir&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (2083), Abu Dawud (3106)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui qui
                  récite cette invocation sept fois auprès du malade, Allah le
                  guérira de cette maladie, sauf si son terme est arrivé
                  (at-Tirmidhi). Pour approfondir les invocations à réciter
                  lors de la{" "}
                  <Link href="/doua-malade-visite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">visite du malade en islam</Link>,
                  consultez notre article dédié.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Adab de la visite
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Rester bref pour ne pas fatiguer le malade, lui remonter
                      le moral, lui rappeler les mérites de la patience et
                      invoquer pour sa guérison. Éviter les visites tardives ou
                      trop longues qui pourraient gêner le repos post-opératoire.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La parole réconfortante
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Dire au malade &laquo;&nbsp;La ba&apos;s, tahurun in sha
                      Allah&nbsp;&raquo; (Pas de mal, c&apos;est une
                      purification si Allah le veut). Cette parole du Prophète
                      rassure le patient et lui rappelle que la maladie efface
                      les péchés.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La sadaqa pour le malade
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Offrir une aumône au nom du malade est un acte
                      recommandé qui accélère la guérison selon la tradition
                      prophétique. On peut aussi lui apporter de la nourriture
                      ou aider sa famille dans les tâches quotidiennes.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Invoquer dans son absence
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La doua faite en l&apos;absence du malade est exaucée.
                      Un ange dit &laquo;&nbsp;Amin, et à toi de même&nbsp;&raquo;
                      pour chaque invocation faite en faveur d&apos;un frère
                      absent (Muslim). Multiplier les douas même sans pouvoir
                      se rendre à l&apos;hôpital.
                    </p>
                  </div>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour la guérison du malade en islam"
                  description="Toutes les invocations prophétiques pour demander à Allah la guérison, avec textes en arabe, phonétique et traduction."
                  href="/doua-guerison-malade-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
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
                    Doua en islam
                  </Link>
                  <Link
                    href="/doua-guerison-malade-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de guérison du malade
                  </Link>
                  <Link
                    href="/doua-douleur-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre la douleur
                  </Link>
                  <Link
                    href="/doua-malade-visite-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour visiter le malade
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
