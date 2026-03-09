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
    "Doua du hajj en islam : invocations du pèlerinage en arabe, phonétique et traduction",
  description:
    "Découvrez les douas du hajj en islam : talbiyah, invocations à Arafat, Mina, Muzdalifah, tawaf et sa&apos;y. Textes en arabe avec phonétique et traduction française, hadiths authentiques et guide complet du pèlerinage.",
  openGraph: {
    title:
      "Doua du hajj en islam : invocations du pèlerinage en arabe, phonétique et traduction",
    description:
      "Les douas authentiques du hajj : talbiyah, invocations à Arafat, Mina, Muzdalifah, tawaf al-ifadah et sa&apos;y. Textes en arabe, phonétique et traduction.",
    url: "https://www.islamreligion.fr/doua-hajj-islam",
    images: [
      {
        url: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-hajj-islam",
  },
};

const tocItems = [
  { id: "talbiyah", label: "La Talbiyah : l&apos;invocation d&apos;entrée en sacralisation" },
  { id: "douas-mina-arafat", label: "Douas à Mina et le jour d&apos;Arafat" },
  { id: "muzdalifah-rami", label: "Muzdalifah et le rami al-jamarat" },
  { id: "tawaf-ifadah", label: "Douas du tawaf al-ifadah" },
  { id: "say-safa-marwa", label: "Douas du sa&apos;y entre Safa et Marwa" },
  { id: "douas-generales-hajj", label: "Douas générales pendant le hajj" },
  { id: "vertus-hajj", label: "Vertus et récompenses du hajj" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua la plus importante du hajj ?",
    answer:
      "La doua la plus importante du hajj est celle récitée le jour d&apos;Arafat. Le Prophète (paix et salut sur lui) a dit : « La meilleure des douas est celle du jour d&apos;Arafat, et la meilleure parole que j&apos;ai dite ainsi que les prophètes avant moi est : La ilaha illAllahu wahdahu la sharika lah, lahul mulku wa lahul hamdu wa huwa &apos;ala kulli shay&apos;in qadir. » (at-Tirmidhi). Le jour d&apos;Arafat est considéré comme le pilier du hajj et le moment où les invocations sont le plus exaucées.",
  },
  {
    question: "Comment réciter la talbiyah pendant le hajj ?",
    answer:
      "La talbiyah se récite dès l&apos;entrée en état d&apos;ihram et se poursuit jusqu&apos;au lancer des pierres le jour de l&apos;Aïd. Sa formule est : « Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal hamda wan-ni&apos;mata laka wal-mulk, la sharika lak. » Elle signifie : « Me voici, ô Allah, me voici. Me voici, Tu n&apos;as pas d&apos;associé, me voici. La louange, la grâce et la royauté T&apos;appartiennent. Tu n&apos;as pas d&apos;associé. » Il est recommandé de la réciter à voix haute pour les hommes.",
  },
  {
    question: "Quelles douas réciter pendant le tawaf al-ifadah ?",
    answer:
      "Pendant le tawaf al-ifadah, il n&apos;y a pas de doua spécifique imposée pour chaque tour, à l&apos;exception de la doua entre le Rukn al-Yamani et la Pierre Noire : « Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina &apos;adhaban-nar » (Notre Seigneur, accorde-nous le bien dans ce monde et dans l&apos;au-delà, et protège-nous du châtiment du Feu). Le pèlerin peut invoquer librement Allah durant le reste du tawaf.",
  },
  {
    question: "Peut-on faire les douas du hajj en français ?",
    answer:
      "Oui, les douas personnelles peuvent être faites en français ou dans toute autre langue. Allah comprend toutes les langues et accepte les invocations sincères. Cependant, les formules rituelles comme la talbiyah doivent être récitées en arabe. Pour les invocations libres durant le tawaf, à Arafat ou en d&apos;autres moments du hajj, le pèlerin peut s&apos;exprimer dans sa langue maternelle s&apos;il ne maîtrise pas l&apos;arabe.",
  },
  {
    question: "Quelle est la doua à réciter à Muzdalifah ?",
    answer:
      "À Muzdalifah, le pèlerin prie le Maghreb et le &apos;Isha combinés et raccourcis, puis passe la nuit en invoquant Allah. Il n&apos;y a pas de doua spécifique obligatoire, mais il est recommandé de multiplier les invocations, le dhikr et l&apos;istighfar. Au lever du jour, le pèlerin se dirige vers al-Mash&apos;ar al-Haram pour invoquer Allah face à la qibla avant de se rendre à Mina.",
  },
  {
    question: "Quelles sont les douas du sa'y entre Safa et Marwa ?",
    answer:
      "En montant sur Safa et Marwa, le pèlerin récite : « Inna as-Safa wal-Marwata min sha&apos;a&apos;irillah » (Safa et Marwa font partie des rites d&apos;Allah), puis dit : « Abda&apos;u bima bada&apos;Allahu bihi » (Je commence par ce par quoi Allah a commencé). Il fait face à la Ka&apos;bah, lève les mains et invoque Allah trois fois en disant : « La ilaha illAllahu wahdahu la sharika lah, lahul mulku wa lahul hamdu wa huwa &apos;ala kulli shay&apos;in qadir. » Entre Safa et Marwa, le pèlerin peut invoquer librement.",
  },
  {
    question: "Quelle doua faire lors du rami al-jamarat ?",
    answer:
      "Lors du lancer des pierres (rami al-jamarat), le pèlerin dit « Bismillah, Allahu Akbar » à chaque jet. Après avoir lapidé la petite stèle (al-jamarah as-sughra) et la moyenne (al-jamarah al-wusta), il est recommandé de s&apos;arrêter pour faire une longue doua face à la qibla. En revanche, après la grande stèle (jamarah al-&apos;aqabah), on ne s&apos;arrête pas pour invoquer.",
  },
  {
    question: "Le hajj efface-t-il tous les péchés ?",
    answer:
      "Oui, le hajj accompli avec sincérité et sans commettre de péchés efface tous les péchés antérieurs. Le Prophète (paix et salut sur lui) a dit : « Quiconque accomplit le hajj sans commettre de rapports conjugaux ni de péchés reviendra comme le jour où sa mère l&apos;a mis au monde » (al-Bukhari et Muslim). Cette purification concerne les péchés mineurs et majeurs envers Allah, mais les droits des créatures doivent être restitués séparément.",
  },
];

export default function DouaHajjIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-hajj-islam/#article",
        headline:
          "Doua du hajj en islam : invocations du pèlerinage en arabe, phonétique et traduction",
        description:
          "Découvrez les douas du hajj en islam : talbiyah, invocations à Arafat, Mina, Muzdalifah, tawaf et sa'y. Textes en arabe avec phonétique et traduction française.",
        image: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        datePublished: "2026-04-03",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-hajj-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-hajj-islam/#breadcrumb",
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
            name: "Doua du hajj",
            item: "https://www.islamreligion.fr/doua-hajj-islam",
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
          title="Doua du hajj en islam : les invocations du pèlerinage"
          subtitle="Toutes les douas authentiques du hajj en arabe, phonétique et traduction française. De la talbiyah au tawaf, en passant par Arafat et Muzdalifah."
          imageSrc="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
          imageAlt="Pèlerins en prière devant la Kaaba lors du hajj invocations et douas du pèlerinage en islam"
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
                <span className="text-foreground">Doua du hajj</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le hajj (pèlerinage à La Mecque) est le cinquième pilier de
                  l&apos;islam et un voyage spirituel unique dans la vie du
                  croyant. Chaque étape du hajj est accompagnée
                  d&apos;invocations spécifiques tirées du Coran et de la Sunna
                  : la talbiyah dès l&apos;entrée en sacralisation, les douas
                  à Arafat, Muzdalifah, lors du tawaf et du sa&apos;y. Ce guide
                  complet rassemble les principales douas du hajj en arabe,
                  phonétique et traduction française pour accompagner le pèlerin
                  à chaque moment de ce rite sacré.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La Talbiyah */}
              {/* ============================================ */}
              <section id="talbiyah" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La Talbiyah : l&apos;invocation d&apos;entrée en sacralisation (ihram)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La talbiyah est la première et la plus emblématique des douas
                  du hajj. Elle est prononcée par le pèlerin dès qu&apos;il
                  entre en état d&apos;ihram (sacralisation) au miqat, et se
                  répète tout au long du pèlerinage jusqu&apos;au lancer des
                  pierres (rami) le jour du sacrifice. Cette invocation
                  millénaire, transmise par le Prophète (paix et salut sur lui),
                  exprime la soumission totale du serviteur à l&apos;appel de
                  son Seigneur.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal hamda wan-ni&apos;mata laka wal-mulk, la sharika lak
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Me voici, ô Allah, me voici. Me voici, Tu n&apos;as pas d&apos;associé, me voici. La louange, la grâce et la royauté T&apos;appartiennent. Tu n&apos;as pas d&apos;associé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (1549) et Muslim (1184)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  La talbiyah est bien plus qu&apos;une simple formule rituelle.
                  Elle est la réponse du croyant à l&apos;appel qu&apos;Ibrahim
                  (paix sur lui) lança à l&apos;humanité sur ordre d&apos;Allah
                  : &laquo;&nbsp;Et proclame aux gens le pèlerinage. Ils
                  viendront à toi à pied et sur toute monture
                  élancée&nbsp;&raquo; (Coran, sourate al-Hajj, 22:27). Chaque
                  &laquo;&nbsp;labbayk&nbsp;&raquo; prononcé par le pèlerin est
                  un écho à cet appel ancestral, une affirmation de son tawhid
                  (unicité d&apos;Allah) et de sa présence devant son Créateur.
                </p>

                <HadithCard
                  arabic="ما من مسلم يلبي إلا لبى ما عن يمينه وشماله من حجر أو شجر أو مدر حتى تنقطع الأرض من ها هنا وها هنا"
                  text="Aucun musulman ne prononce la talbiyah sans que ce qui se trouve à sa droite et à sa gauche — pierres, arbres et terre — ne la prononce avec lui, jusqu&apos;aux confins de la terre."
                  source="Rapporté par at-Tirmidhi (828), Ibn Majah (2921)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith extraordinaire révèle la dimension cosmique de la
                  talbiyah : toute la création se joint au pèlerin dans sa
                  glorification d&apos;Allah. Les savants recommandent de
                  prononcer la talbiyah à voix haute pour les hommes, tandis que
                  les femmes la récitent à voix basse. Il est sunna de la
                  répéter abondamment, en particulier lors des changements
                  d&apos;état : en montant, en descendant, en rencontrant
                  d&apos;autres pèlerins, après chaque prière, et au lever et
                  au coucher du soleil.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
                    alt="Pèlerins en ihram récitant la talbiyah lors du hajj devant la Kaaba"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Douas à Mina et Arafat */}
              {/* ============================================ */}
              <section id="douas-mina-arafat" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas à Mina et le jour d&apos;Arafat : le pilier du hajj
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le séjour à Mina et surtout le jour d&apos;Arafat constituent
                  le cœur du pèlerinage. Le Prophète (paix et salut sur lui) a
                  dit : &laquo;&nbsp;Le hajj, c&apos;est Arafat&nbsp;&raquo;
                  (rapporté par Ahmad, at-Tirmidhi et an-Nasa&apos;i),
                  soulignant que cette station est le pilier fondamental sans
                  lequel le hajj n&apos;est pas valide. C&apos;est le jour où
                  Allah descend au ciel le plus proche, Se glorifie de Ses
                  serviteurs devant les anges et affranchit le plus grand nombre
                  de personnes du Feu.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La doua d&apos;Arafat
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le jour d&apos;Arafat (9 dhul hijja) est le moment le plus
                  béni du hajj pour invoquer Allah. Le pèlerin passe
                  l&apos;après-midi en invocations intenses, face à la qibla,
                  les mains levées. Le Prophète (paix et salut sur lui) a
                  enseigné cette doua comme la meilleure à prononcer en ce jour
                  sacré.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illAllahu wahdahu la sharika lah, lahul mulku wa lahul hamdu wa huwa &apos;ala kulli shay&apos;in qadir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah, Seul, sans associé. À Lui la royauté, à Lui la louange, et Il est Omnipotent&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3585)
                  </p>
                </div>

                <HadithCard
                  arabic="خير الدعاء دعاء يوم عرفة"
                  text="La meilleure des invocations est celle du jour d&apos;Arafat."
                  source="Rapporté par at-Tirmidhi (3585), Malik dans al-Muwatta"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  À Mina, le pèlerin arrive le 8 dhul hijja (yawm at-tarwiyah)
                  et y prie les cinq prières en les raccourcissant sans les
                  combiner. C&apos;est un temps de préparation spirituelle avant
                  la grande journée d&apos;Arafat. Le pèlerin multiplie les
                  invocations, le dhikr, la lecture du Coran et la talbiyah. Il
                  est recommandé de demander à Allah le pardon, la guidée, la
                  santé et la réussite dans ce hajj. Le jour d&apos;Arafat, le
                  pèlerin se rend à la plaine d&apos;Arafat après le lever du
                  soleil et y reste jusqu&apos;au coucher du soleil, consacrant
                  chaque instant à l&apos;invocation et à l&apos;imploration
                  divine. Pour en savoir plus sur les <Link href="/doua-arafat-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas spécifiques du jour d&apos;Arafat</Link>,
                  consultez notre guide dédié.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Multiplier le takbir et le tahlil :</strong>{" "}
                      répéter &laquo;&nbsp;Allahu Akbar&nbsp;&raquo;,
                      &laquo;&nbsp;La ilaha illAllah&nbsp;&raquo; et
                      &laquo;&nbsp;Alhamdulillah&nbsp;&raquo; tout au long de la
                      journée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invoquer avec humilité et larmes :</strong>{" "}
                      le jour d&apos;Arafat est le moment où Allah est le plus
                      proche de Ses serviteurs et le plus enclin à répondre à
                      leurs supplications.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invoquer pour soi et pour les autres :</strong>{" "}
                      le pèlerin demande le bien pour sa famille, ses proches,
                      la communauté musulmane et l&apos;humanité entière.
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
              {/* SECTION 3 : Muzdalifah et rami al-jamarat */}
              {/* ============================================ */}
              <section id="muzdalifah-rami" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas à Muzdalifah et lors du rami al-jamarat
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Après le coucher du soleil à Arafat, le pèlerin se dirige vers
                  Muzdalifah où il passe la nuit sous le ciel étoilé. Cette
                  étape du hajj est un moment de recueillement intense et
                  d&apos;invocation. Le pèlerin y prie le Maghreb et le
                  &apos;Isha combinés et raccourcis, ramasse les cailloux pour
                  le rami, et invoque Allah jusqu&apos;à l&apos;aube. Au matin,
                  il se dirige vers al-Mash&apos;ar al-Haram pour invoquer Allah
                  face à la qibla avant le lever du soleil.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah mentionne Muzdalifah dans le Coran : &laquo;&nbsp;Quand
                  vous vous dispersez depuis Arafat, invoquez Allah près du
                  monument sacré (al-Mash&apos;ar al-Haram). Invoquez-Le comme
                  Il vous a guidés, alors qu&apos;auparavant vous étiez parmi
                  les égarés&nbsp;&raquo; (Coran, sourate al-Baqarah, 2:198).
                  Ce verset souligne l&apos;importance capitale de
                  l&apos;invocation à Muzdalifah comme partie intégrante des
                  rites du hajj.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le rami al-jamarat : doua lors du lancer des pierres
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le rami al-jamarat (lapidation des stèles) commence le 10 dhul
                  hijja avec la grande stèle (jamarah al-&apos;aqabah), puis se
                  poursuit les jours de tashriq (11, 12 et éventuellement 13
                  dhul hijja) avec les trois stèles. À chaque jet de caillou,
                  le pèlerin prononce le takbir.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah, Allahu Akbar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, Allah est le plus Grand&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Formule prophétique à chaque lancer de caillou
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Après avoir lapidé la petite stèle (al-jamarah as-sughra) et
                  la stèle moyenne (al-jamarah al-wusta) les jours de tashriq,
                  le pèlerin s&apos;arrête, fait face à la qibla et invoque
                  Allah longuement. C&apos;est l&apos;une des stations
                  d&apos;invocation recommandées du hajj, un moment privilégié
                  où le pèlerin peut demander à Allah tout ce qu&apos;il
                  souhaite. En revanche, après la grande stèle (jamarah
                  al-&apos;aqabah), le pèlerin ne s&apos;arrête pas pour
                  invoquer, conformément à la sunna du Prophète (paix et salut
                  sur lui).
                </p>

                <HadithCard
                  arabic="خذوا عني مناسككم"
                  text="Prenez de moi vos rites (du pèlerinage)."
                  source="Rapporté par Muslim (1297)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Tawaf al-ifadah */}
              {/* ============================================ */}
              <section id="tawaf-ifadah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas du tawaf al-ifadah autour de la Ka&apos;bah
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le tawaf al-ifadah est un pilier obligatoire du hajj. Il
                  s&apos;effectue le jour du sacrifice (10 dhul hijja) ou les
                  jours suivants. Le pèlerin accomplit sept tours autour de la
                  Ka&apos;bah en invoquant Allah et en méditant sur la grandeur
                  de cette Maison sacrée bâtie par Ibrahim et Isma&apos;il (paix
                  sur eux). Lors de ce tawaf sacré, le pèlerin se connecte à une
                  tradition vieille de plusieurs millénaires et rejoint les
                  millions de croyants qui ont foulé ce sol béni avant lui.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La doua la plus authentifiée pendant le tawaf est celle récitée
                  entre le Rukn al-Yamani (le coin yéménite) et la Pierre Noire.
                  Cette invocation coranique est recommandée à chaque tour et
                  constitue une synthèse parfaite des demandes du croyant : le
                  bien dans ce monde et dans l&apos;au-delà, et la protection
                  contre le châtiment du Feu.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina &apos;adhaban-nar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Notre Seigneur, accorde-nous le bien dans ce monde et dans l&apos;au-delà, et protège-nous du châtiment du Feu&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Baqarah (2:201)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  En dehors de cette invocation spécifique, le pèlerin est libre
                  d&apos;invoquer Allah comme il le souhaite durant le tawaf. Il
                  peut réciter du Coran, faire du dhikr, demander le pardon ou
                  adresser des supplications personnelles. Les savants
                  recommandent de varier les invocations et de ne pas se limiter
                  à une formule unique pour l&apos;ensemble des tours. Le tawaf
                  est un moment d&apos;intimité spirituelle avec Allah, et le
                  pèlerin doit en profiter pour ouvrir son cœur et exprimer ses
                  besoins les plus profonds. Si vous préparez également une
                  &apos;omra, retrouvez les <Link href="/doua-omra-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas de la &apos;omra</Link> dans
                  notre guide complet.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
                    alt="Pèlerins effectuant le tawaf autour de la Kaaba lors du hajj en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Sa'y entre Safa et Marwa */}
              {/* ============================================ */}
              <section id="say-safa-marwa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas du sa&apos;y entre Safa et Marwa
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le sa&apos;y (parcours) entre les monts Safa et Marwa commémore
                  la course de Hajar (que la paix soit sur elle), l&apos;épouse
                  d&apos;Ibrahim, lorsqu&apos;elle cherchait de l&apos;eau pour
                  son fils Isma&apos;il dans le désert aride de La Mecque. Ce
                  rite, composé de sept allers-retours entre les deux collines,
                  est un pilier du hajj et un témoignage de la confiance absolue
                  en Allah, même dans les situations les plus désespérées.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En montant sur Safa, le pèlerin récite le verset coranique
                  &laquo;&nbsp;Inna as-Safa wal-Marwata min sha&apos;a&apos;irillah&nbsp;&raquo;
                  (Certes, Safa et Marwa font partie des rites d&apos;Allah)
                  [Coran, 2:158], puis dit : &laquo;&nbsp;Abda&apos;u bima
                  bada&apos;Allahu bihi&nbsp;&raquo; (Je commence par ce par
                  quoi Allah a commencé). Il fait ensuite face à la Ka&apos;bah,
                  lève les mains et prononce l&apos;invocation suivante trois
                  fois, en intercalant des douas personnelles.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illAllahu wahdahu la sharika lah, lahul mulku wa lahul hamdu wa huwa &apos;ala kulli shay&apos;in qadir, la ilaha illAllahu wahdah, anjaza wa&apos;dah, wa nasara &apos;abdah, wa hazama al-ahzaba wahdah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah, Seul, sans associé. À Lui la royauté, à Lui la louange, et Il est Omnipotent. Il n&apos;y a de divinité qu&apos;Allah Seul. Il a accompli Sa promesse, secouru Son serviteur et vaincu les coalisés Seul&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (1218)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Entre Safa et Marwa, le pèlerin invoque librement Allah. Il
                  n&apos;existe pas de doua spécifique imposée pour le trajet
                  entre les deux collines. C&apos;est un moment privilégié pour
                  les supplications personnelles, le repentir et la demande de
                  guidée. Les hommes accélèrent le pas entre les deux repères
                  verts lumineux, rappelant la course désespérée de Hajar. Ce
                  rite enseigne au croyant que l&apos;effort et la confiance en
                  Allah ne sont jamais vains : c&apos;est de la course de Hajar
                  qu&apos;a jailli la source bénie de <Link href="/doua-zamzam-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Zamzam</Link>,
                  qui coule encore aujourd&apos;hui.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas générales pendant le hajj */}
              {/* ============================================ */}
              <section id="douas-generales-hajj" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas générales à réciter pendant tout le hajj
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus des invocations spécifiques à chaque étape, le pèlerin
                  est encouragé à multiplier les douas tout au long du hajj. Le
                  pèlerinage est l&apos;un des moments les plus bénis de la vie
                  du musulman, et chaque instant passé en terre sacrée est une
                  opportunité d&apos;invoquer Allah et de se rapprocher de Lui.
                  Voici des douas générales authentiques que le pèlerin peut
                  réciter à tout moment.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;alukal-huda wat-tuqa wal-&apos;afafa wal-ghina
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande la guidée, la piété, la chasteté et la suffisance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2721)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a également enseigné
                  l&apos;importance de l&apos;istighfar (demande de pardon)
                  pendant le hajj. Le pèlerinage est un renouveau spirituel
                  total, et le croyant doit saisir cette occasion pour se
                  purifier de tous ses péchés passés. L&apos;invocation de
                  sayyid al-istighfar est particulièrement recommandée.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le pèlerin ne doit pas oublier d&apos;invoquer pour ses
                  proches absents, pour les malades, pour les défunts et pour
                  l&apos;ensemble de la communauté musulmane. La doua du pèlerin
                  est exaucée, et c&apos;est un acte de générosité spirituelle
                  que de partager ce moment béni avec ceux qui n&apos;ont pas eu
                  la possibilité d&apos;accomplir le hajj. Pour découvrir
                  l&apos;ensemble des <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas en islam</Link>,
                  consultez notre guide principal.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Vertus et récompenses du hajj */}
              {/* ============================================ */}
              <section id="vertus-hajj" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Vertus et récompenses du hajj accompli avec doua
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le hajj occupe une place éminente parmi les actes
                  d&apos;adoration en islam. Cinquième pilier de la religion, il
                  est obligatoire une fois dans la vie pour tout musulman qui en
                  a la capacité physique et financière. Les vertus et
                  récompenses attachées au hajj sont immenses, et la doua en
                  constitue l&apos;âme et la substance spirituelle.
                </p>

                <HadithCard
                  arabic="من حج فلم يرفث ولم يفسق رجع كيوم ولدته أمه"
                  text="Quiconque accomplit le hajj sans commettre de rapports conjugaux ni de péchés reviendra (pur de ses péchés) comme le jour où sa mère l&apos;a mis au monde."
                  source="Rapporté par al-Bukhari (1521) et Muslim (1350)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre la purification totale que le hajj procure
                  au croyant sincère. Le pèlerin qui accomplit les rites avec
                  piété, qui multiplie les invocations et qui s&apos;abstient de
                  tout péché revient de son pèlerinage dans un état de pureté
                  spirituelle comparable à celui du nouveau-né. Cette promesse
                  prophétique est un encouragement puissant à vivre le hajj dans
                  la dévotion la plus complète.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants rappellent que le hajj mabrur (agréé) est celui qui
                  transforme le pèlerin en profondeur. Ses signes sont
                  l&apos;amélioration du comportement après le retour,
                  l&apos;augmentation de la piété, le renforcement des liens
                  familiaux et communautaires, et la persévérance dans
                  l&apos;invocation et le dhikr. Le hajj n&apos;est pas
                  simplement un voyage physique vers La Mecque, mais un voyage
                  intérieur vers Allah, et les douas récitées en sont le
                  carburant spirituel.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le hajj mabrur n&apos;a d&apos;autre récompense que le Paradis</strong>{" "}
                      (rapporté par al-Bukhari et Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le hajj efface les péchés antérieurs :</strong>{" "}
                      le pèlerin sincère revient purifié de toutes ses fautes
                      passées envers Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le pèlerin est l&apos;invité d&apos;Allah :</strong>{" "}
                      celui qui accomplit le hajj est considéré comme un hôte
                      d&apos;Allah, et l&apos;hôte ne quitte pas les lieux
                      sans avoir reçu la générosité de Son Hôte.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Formulaire affiliation */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter les douas avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
                preselect="arabe"
              />

              {/* FAQ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>

              {/* Maillage interne */}
              <nav className="mt-16 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  Articles liés
                </p>
                <ul className="mt-4 space-y-2">
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
                      href="/doua-arafat-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua du jour d&apos;Arafat en islam
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doua-omra-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua de la &apos;omra en islam
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doua-zamzam-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua de l&apos;eau de Zamzam en islam
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
