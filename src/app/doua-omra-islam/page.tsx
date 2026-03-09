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
    "Doua omra : invocations authentiques pour chaque étape du petit pèlerinage",
  description:
    "Découvrez les douas de la omra en islam : talbiyah, invocations du tawaf, de Safa et Marwa, de l&apos;ihram et entre le Rukn Yamani et le Hajr Aswad. Textes en arabe, phonétique et traduction française.",
  openGraph: {
    title:
      "Doua omra : invocations authentiques pour chaque étape du petit pèlerinage",
    description:
      "Toutes les douas de la omra en islam : talbiyah, tawaf, sa&apos;y entre Safa et Marwa, ihram. Arabe, phonétique et traduction.",
    url: "https://www.islamreligion.fr/doua-omra-islam",
    images: [
      {
        url: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-omra-islam",
  },
};

const tocItems = [
  { id: "introduction-omra", label: "La omra et ses invocations" },
  { id: "doua-talbiyah", label: "La talbiyah : Labbayk Allahumma labbayk" },
  { id: "doua-ihram", label: "Doua en entrant en état d&apos;ihram" },
  { id: "doua-tawaf", label: "Douas pendant le tawaf" },
  { id: "doua-rukn-yamani", label: "Doua entre le Rukn Yamani et le Hajr Aswad" },
  { id: "doua-safa-marwa", label: "Douas à Safa et Marwa" },
  { id: "conseils-invocations", label: "Conseils pour maximiser ses douas" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelles sont les douas à réciter pendant la omra ?",
    answer:
      "Les douas de la omra comprennent la talbiyah (Labbayk Allahumma labbayk), les invocations lors de l&apos;entrée en ihram, les douas pendant le tawaf autour de la Kaaba, l&apos;invocation entre le Rukn Yamani et le Hajr Aswad (Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina &apos;adhaban-nar), et les douas lors du sa&apos;y entre Safa et Marwa. Le pèlerin peut également faire des invocations personnelles à chaque étape.",
  },
  {
    question: "Quelle est la talbiyah complète en arabe et en phonétique ?",
    answer:
      "La talbiyah complète est : Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni&apos;mata laka wal-mulk, la sharika lak. En arabe : لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ لَا شَرِيكَ لَكَ. Sa traduction : Me voici Seigneur, me voici. Me voici, Tu n&apos;as aucun associé, me voici. Certes la louange, la grâce et la royauté T&apos;appartiennent, Tu n&apos;as aucun associé.",
  },
  {
    question: "Peut-on faire la doua en français pendant la omra ?",
    answer:
      "Oui, il est permis de faire des invocations personnelles en français pendant la omra. Cependant, les formules prophétiques spécifiques comme la talbiyah et la doua entre le Rukn Yamani et le Hajr Aswad doivent être récitées en arabe. Pour les supplications libres, toute langue est acceptée car Allah comprend toutes les langues.",
  },
  {
    question: "Quelle doua réciter entre le Rukn Yamani et le Hajr Aswad ?",
    answer:
      "La doua authentique à réciter entre le Rukn Yamani et le Hajr Aswad est : Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina &apos;adhaban-nar (Seigneur, accorde-nous une belle part ici-bas et une belle part dans l&apos;au-delà, et protège-nous du châtiment du Feu). Cette invocation est rapportée par Abu Dawud et authentifiée par plusieurs savants.",
  },
  {
    question: "Combien de tours de tawaf faut-il faire lors de la omra ?",
    answer:
      "Le tawaf de la omra comporte sept tours autour de la Kaaba, en commençant et en terminant à la Pierre Noire (Hajr Aswad). Le pèlerin fait un signe de la main ou touche la Pierre Noire au début de chaque tour si possible, et récite des invocations tout au long du tawaf. Après le tawaf, il accomplit deux raka&apos;at derrière le Maqam Ibrahim.",
  },
  {
    question: "Quand doit-on arrêter la talbiyah pendant la omra ?",
    answer:
      "Le pèlerin commence la talbiyah au moment de l&apos;entrée en état d&apos;ihram et la répète tout au long du voyage jusqu&apos;à la Mecque. Il arrête la talbiyah lorsqu&apos;il commence le tawaf autour de la Kaaba, c&apos;est-à-dire au moment où il touche ou fait un signe vers la Pierre Noire pour débuter le premier tour.",
  },
  {
    question: "Y a-t-il une doua spécifique à Safa et Marwa ?",
    answer:
      "Oui, lorsque le pèlerin monte sur Safa, il se tourne vers la Kaaba, lève les mains et dit : Innassafa wal-Marwata min sha&apos;a&apos;irillah (Safa et Marwa font partie des rites d&apos;Allah). Puis il prononce trois fois : La ilaha illAllahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa &apos;ala kulli shay&apos;in qadir. Il fait des douas personnelles entre ces répétitions.",
  },
  {
    question: "La omra est-elle obligatoire en islam ?",
    answer:
      "La omra est considérée comme obligatoire une fois dans la vie selon l&apos;école hanbalite et l&apos;avis de nombreux savants, en se basant sur le hadith : Le Prophète (paix et salut sur lui) a dit que l&apos;islam est bâti sur cinq piliers dont le pèlerinage. D&apos;autres écoles la considèrent comme une sunna fortement recommandée (sunna mu&apos;akkada). Dans tous les cas, elle est un acte d&apos;adoration d&apos;une grande valeur spirituelle.",
  },
];

export default function DouaOmraIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-omra-islam/#article",
        headline:
          "Doua omra : invocations authentiques pour chaque étape du petit pèlerinage",
        description:
          "Découvrez les douas de la omra en islam : talbiyah, tawaf, Safa et Marwa, ihram et doua entre le Rukn Yamani et le Hajr Aswad.",
        image: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        datePublished: "2026-03-28",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-omra-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-omra-islam/#breadcrumb",
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
            name: "Doua de la omra",
            item: "https://www.islamreligion.fr/doua-omra-islam",
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
          title="Doua omra : les invocations authentiques pour chaque étape du petit pèlerinage"
          subtitle="Talbiyah, tawaf, Safa et Marwa, ihram : toutes les douas de la omra en arabe, phonétique et traduction française, tirées de la Sunna authentique."
          imageSrc="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
          imageAlt="Intérieur de mosquée avec arches et lumière illustrant la spiritualité de la omra et des douas du pèlerinage en islam"
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
                <span className="text-foreground">Doua de la omra</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La <strong>omra</strong> (petit pèlerinage) est un acte
                  d&apos;adoration majeur en islam, accompagné d&apos;invocations
                  spécifiques à chaque étape. De la <strong>talbiyah</strong>{" "}
                  (Labbayk Allahumma labbayk) prononcée dès l&apos;ihram
                  jusqu&apos;aux douas entre <strong>Safa et Marwa</strong>, le
                  pèlerin dispose d&apos;un répertoire d&apos;invocations
                  authentiques tirées de la Sunna. Cet article présente chaque
                  doua en arabe, en phonétique et en traduction française, pour
                  accompagner le musulman dans cette expérience spirituelle
                  unique.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Introduction à la omra */}
              {/* ============================================ */}
              <section id="introduction-omra" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La omra et la place des invocations dans le petit pèlerinage
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La <strong>omra</strong> (&apos;umra en arabe : عُمْرَة)
                  désigne le petit pèlerinage à La Mecque, que le musulman peut
                  accomplir à tout moment de l&apos;année, contrairement au hajj
                  qui est limité à des dates précises. Ce rite sacré comprend
                  l&apos;entrée en état d&apos;ihram, le tawaf (circumambulation)
                  autour de la Kaaba, le sa&apos;y (marche) entre Safa et Marwa,
                  et le rasage ou raccourcissement des cheveux. Chacune de ces
                  étapes est accompagnée de <strong>douas</strong> spécifiques
                  que le Prophète (paix et salut sur lui) nous a enseignées.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;importance des invocations pendant la omra ne saurait
                  être sous-estimée. Le pèlerin se trouve dans un lieu sacré
                  (al-Haram), à proximité de la Maison d&apos;Allah, dans un
                  état de pureté rituelle et de dévotion totale. Ces conditions
                  réunies font de la omra l&apos;un des moments les plus
                  propices à l&apos;exaucement des douas. Le Prophète (paix et
                  salut sur lui) a d&apos;ailleurs souligné la valeur immense
                  de ce pèlerinage.
                </p>

                <HadithCard
                  arabic="العمرة إلى العمرة كفارة لما بينهما، والحج المبرور ليس له جزاء إلا الجنة"
                  text="La omra jusqu&apos;à la omra suivante est une expiation des péchés commis entre les deux, et le hajj agréé n&apos;a d&apos;autre récompense que le Paradis."
                  source="Rapporté par al-Bukhari (1773) et Muslim (1349)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith montre que la omra est un moyen puissant de
                  purification des péchés. C&apos;est pourquoi le musulman doit
                  s&apos;y préparer spirituellement en apprenant les invocations
                  authentiques, en purifiant son intention (niyyah) et en
                  comprenant le sens profond de chaque rite. Les douas ne sont
                  pas de simples formules à répéter mécaniquement : elles sont
                  le lien vivant entre le pèlerin et son Seigneur, l&apos;expression
                  de sa soumission, de sa gratitude et de ses espoirs.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un acte d&apos;adoration complet :</strong>{" "}
                      la omra combine le corps (marche, circumambulation), le
                      coeur (intention, humilité) et la langue (invocations,
                      talbiyah).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Accessible toute l&apos;année :</strong>{" "}
                      contrairement au hajj, la omra peut être accomplie à tout
                      moment, ce qui en fait un acte de dévotion facilement
                      renouvelable.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Lieu d&apos;exaucement :</strong> la proximité de
                      la Kaaba et du Maqam Ibrahim fait de la omra un moment
                      privilégié pour adresser ses douas à Allah. Pour découvrir
                      l&apos;ensemble des{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                      consultez notre guide complet.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/kaaba-mecque-pelerinage-hajj-islam.jpg"
                    alt="La Kaaba à La Mecque lors du pèlerinage, lieu sacré des douas de la omra en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : La talbiyah */}
              {/* ============================================ */}
              <section id="doua-talbiyah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La talbiyah : Labbayk Allahumma labbayk
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La <strong>talbiyah</strong> est l&apos;invocation la plus
                  emblématique de la omra et du hajj. Elle est prononcée dès
                  l&apos;entrée en état d&apos;ihram et répétée tout au long du
                  trajet jusqu&apos;au début du tawaf. Cette formule exprime la
                  réponse du serviteur à l&apos;appel d&apos;Allah, un cri de
                  soumission et de joie spirituelle qui résonne dans le coeur de
                  chaque pèlerin.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ لَا شَرِيكَ لَكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni&apos;mata laka wal-mulk, la sharika lak
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Me voici, Seigneur, me voici. Me voici, Tu n&apos;as aucun associé, me voici. Certes, la louange, la grâce et la royauté T&apos;appartiennent. Tu n&apos;as aucun associé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (1549) et Muslim (1184)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La talbiyah contient plusieurs dimensions spirituelles
                  profondes. Le mot &laquo;&nbsp;Labbayk&nbsp;&raquo; signifie
                  littéralement &laquo;&nbsp;me voici à Ton service&nbsp;&raquo;,
                  une réponse directe à l&apos;appel qu&apos;Allah a adressé à
                  l&apos;humanité par l&apos;intermédiaire d&apos;Ibrahim (paix
                  sur lui) lorsqu&apos;Il lui ordonna de proclamer le
                  pèlerinage. Chaque pèlerin qui prononce la talbiyah perpétue
                  cette réponse ancestrale à l&apos;appel divin.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;affirmation &laquo;&nbsp;la sharika lak&nbsp;&raquo;
                  (Tu n&apos;as aucun associé) réaffirme le tawhid (unicité
                  d&apos;Allah), fondement même de l&apos;islam. Le pèlerin
                  reconnaît que toute louange, toute grâce et toute souveraineté
                  appartiennent exclusivement à Allah. C&apos;est un acte de
                  purification du coeur de toute forme de shirk, visible ou
                  caché. Les savants recommandent de prononcer la talbiyah à
                  voix haute pour les hommes et à voix basse pour les femmes,
                  en la répétant fréquemment jusqu&apos;au début du tawaf.
                </p>

                <HadithCard
                  arabic="ما من مسلم يلبي إلا لبى ما عن يمينه وشماله من حجر أو شجر أو مدر حتى تنقطع الأرض من ها هنا وها هنا"
                  text="Aucun musulman ne prononce la talbiyah sans que tout ce qui se trouve à sa droite et à sa gauche, pierres, arbres et terre, ne la prononce avec lui, jusqu&apos;aux confins de la terre."
                  source="Rapporté par at-Tirmidhi (828), Ibn Majah (2921)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre la dimension cosmique de la talbiyah :
                  lorsque le pèlerin répond à l&apos;appel d&apos;Allah, toute
                  la création l&apos;accompagne dans cette glorification. Ce
                  n&apos;est pas un simple acte individuel, mais une communion
                  avec l&apos;ensemble de l&apos;univers dans la soumission à
                  Allah. Pour les pèlerins qui accomplissent également le
                  grand pèlerinage, consultez nos{" "}
                  <Link href="/doua-hajj-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas du hajj</Link>{" "}
                  pour un guide complet.
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
              {/* SECTION 3 : Doua en entrant en ihram */}
              {/* ============================================ */}
              <section id="doua-ihram" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua en entrant en état d&apos;ihram pour la omra
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;<strong>ihram</strong> est l&apos;état de sacralisation
                  dans lequel le pèlerin entre avant de commencer les rites de
                  la omra. Cet état débute à un point précis appelé
                  <strong> miqat</strong>, qui varie selon la provenance du
                  pèlerin. L&apos;entrée en ihram s&apos;accompagne d&apos;une
                  intention (niyyah) formulée dans le coeur et d&apos;invocations
                  spécifiques qui marquent le début du voyage spirituel.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Avant de formuler l&apos;intention de la omra, le pèlerin
                  accomplit un ghusl (grande ablution), se parfume (avant
                  l&apos;ihram uniquement), revêt les deux pièces de tissu blanc
                  non cousu (pour les hommes) et prie deux raka&apos;at. Ensuite,
                  il prononce la formule d&apos;intention suivante :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَبَّيْكَ اللَّهُمَّ عُمْرَةً
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Labbayk Allahumma &apos;umratan
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Me voici, Seigneur, pour une omra&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (1218)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le pèlerin qui craint un empêchement (maladie, retard,
                  problème de visa) peut ajouter une condition dans son
                  intention, comme l&apos;a enseigné le Prophète (paix et salut
                  sur lui) à Duba&apos;a bint az-Zubayr :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ مَحِلِّي حَيْثُ حَبَسْتَنِي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma mahilli haythu habastani
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, mon lieu de désacralisation sera là où Tu me retiendras&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (5089) et Muslim (1207)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette formule de réserve (ishtiraat) protège le pèlerin en
                  cas d&apos;empêchement : si un obstacle survient, il pourra se
                  désacraliser sans avoir à offrir un sacrifice compensatoire.
                  C&apos;est une preuve de la miséricorde de la législation
                  islamique qui prend en compte les réalités humaines. Après
                  avoir formulé son intention, le pèlerin commence immédiatement
                  la talbiyah et ne cesse de la répéter jusqu&apos;à son arrivée
                  à la Kaaba pour le tawaf.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le miqat :</strong> chaque direction a son miqat
                      désigné par le Prophète (paix et salut sur lui). Pour les
                      habitants de Médine, c&apos;est Dhul-Hulayfa ; pour ceux
                      venant du Sham, c&apos;est al-Juhfa.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les interdits de l&apos;ihram :</strong> une fois
                      en état d&apos;ihram, le pèlerin s&apos;abstient de se
                      parfumer, de se couper les ongles, de porter des vêtements
                      cousus (pour les hommes) et de toute relation conjugale.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;intention du coeur :</strong> la niyyah se
                      fait dans le coeur et n&apos;a pas besoin d&apos;être
                      prononcée à voix haute. Seule la formule d&apos;entrée en
                      ihram est dite verbalement.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas pendant le tawaf */}
              {/* ============================================ */}
              <section id="doua-tawaf" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas pendant le tawaf autour de la Kaaba
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>tawaf</strong> consiste à accomplir sept tours
                  autour de la Kaaba dans le sens inverse des aiguilles d&apos;une
                  montre, en commençant et en terminant à la Pierre Noire (Hajr
                  Aswad). C&apos;est l&apos;un des moments les plus intenses de
                  la omra sur le plan spirituel, où le pèlerin se trouve au plus
                  près de la Maison d&apos;Allah. Il n&apos;existe pas de doua
                  fixe pour chaque tour, contrairement à ce que certains livrets
                  populaires peuvent laisser croire. Le pèlerin est libre de
                  réciter des invocations coraniques, des adhkar prophétiques ou
                  des douas personnelles.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cependant, plusieurs invocations authentiques sont
                  particulièrement recommandées pendant le tawaf. Au début de
                  chaque tour, en faisant face à la Pierre Noire, le pèlerin
                  dit &laquo;&nbsp;Bismillah, Allahu Akbar&nbsp;&raquo; tout en
                  faisant un signe de la main vers la Pierre si l&apos;accès
                  direct n&apos;est pas possible. Les savants recommandent
                  également la lecture du Coran pendant le tawaf, en particulier
                  des sourates courtes et des versets de doua.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah, Allahu Akbar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, Allah est le Plus Grand&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    À dire en passant devant la Pierre Noire à chaque tour
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Pendant le tawaf, le pèlerin peut invoquer Allah pour tout ce
                  qu&apos;il souhaite : le pardon de ses péchés, la guérison
                  d&apos;un proche, la réussite dans ses projets, la guidée
                  pour sa famille. Il peut aussi réciter les invocations
                  coraniques les plus connues, comme celle d&apos;Ibrahim (paix
                  sur lui) et celle des croyants pour l&apos;au-delà. Le tawaf
                  est un moment de communion intime avec Allah où chaque pas
                  autour de la Kaaba est un acte d&apos;adoration.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> SubhanAllah, wal-hamdulillah, wa la ilaha illAllah, wAllahu Akbar, wa la hawla wa la quwwata illa billah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire à Allah, louange à Allah, il n&apos;y a de divinité qu&apos;Allah, Allah est le Plus Grand, et il n&apos;y a de force ni de puissance qu&apos;en Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Dhikr recommandé pendant le tawaf
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Après les sept tours du tawaf, le pèlerin se dirige vers le
                  Maqam Ibrahim et accomplit deux raka&apos;at, en récitant de
                  préférence la sourate al-Kafirun dans la première raka&apos;a
                  et la sourate al-Ikhlas dans la seconde, comme le faisait le
                  Prophète (paix et salut sur lui). Il boit ensuite de l&apos;eau
                  de Zamzam en formulant une doua, car le Prophète a enseigné
                  que l&apos;eau de{" "}
                  <Link href="/doua-zamzam-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Zamzam est pour ce pour quoi elle est bue</Link>.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
                    alt="Pèlerin en invocation doua lors du tawaf autour de la Kaaba pendant la omra en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua entre Rukn Yamani et Hajr Aswad */}
              {/* ============================================ */}
              <section id="doua-rukn-yamani" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua entre le Rukn Yamani et le Hajr Aswad
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi toutes les invocations du tawaf, il en est une qui
                  bénéficie d&apos;une attestation prophétique spécifique :
                  la doua récitée entre le <strong>Rukn Yamani</strong> (le coin
                  yéménite de la Kaaba) et le <strong>Hajr Aswad</strong> (la
                  Pierre Noire). Cette portion du tawaf, qui constitue le
                  dernier quart de chaque tour, est un lieu privilégié
                  d&apos;invocation que le Prophète (paix et salut sur lui)
                  honorait d&apos;une doua particulière.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina &apos;adhaban-nar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-nous une belle part ici-bas, une belle part dans l&apos;au-delà, et protège-nous du châtiment du Feu&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Baqara (2:201) - Rapporté par Abu Dawud (1892)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation coranique est l&apos;une des douas les plus
                  complètes de l&apos;islam. En quelques mots, elle englobe
                  tout ce dont le croyant a besoin : le bien dans cette vie
                  (hasanah fid-dunya) qui comprend la santé, la subsistance
                  licite, une famille pieuse et la tranquillité du coeur ;
                  le bien dans l&apos;au-delà (hasanah fil-akhira) qui désigne
                  le Paradis et la satisfaction d&apos;Allah ; et la protection
                  contre le châtiment du Feu. Les savants ont souligné que le
                  Prophète (paix et salut sur lui) faisait abondamment cette
                  doua, pas seulement pendant le tawaf, mais en toute
                  circonstance.
                </p>

                <HadithCard
                  arabic="كان أكثر دعاء النبي صلى الله عليه وسلم: اللهم ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار"
                  text="La doua la plus fréquente du Prophète (paix et salut sur lui) était : Seigneur, accorde-nous une belle part ici-bas, une belle part dans l&apos;au-delà, et protège-nous du châtiment du Feu."
                  source="Rapporté par al-Bukhari (6389) et Muslim (2690)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Rukn Yamani lui-même possède une particularité : le
                  Prophète (paix et salut sur lui) le touchait de la main
                  droite lors du tawaf, sans l&apos;embrasser ni dire
                  &laquo;&nbsp;Allahu Akbar&nbsp;&raquo; en le touchant. Ce
                  geste est une sunna que le pèlerin accomplit lorsque
                  l&apos;affluence le permet. S&apos;il ne peut pas le toucher,
                  il ne fait pas de signe de la main vers lui, contrairement à
                  la Pierre Noire. Le trajet entre le Rukn Yamani et la Pierre
                  Noire est donc un moment de recueillement intense, consacré
                  à cette doua bénie.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Doua attestée par la Sunna :</strong> cette
                      invocation est l&apos;une des rares douas spécifiquement
                      liées à un passage précis du tawaf.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>À chaque tour :</strong> le pèlerin récite cette
                      doua sept fois au total, une fois par tour de tawaf, entre
                      le Rukn Yamani et la Pierre Noire.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invocation universelle :</strong> cette doua peut
                      être récitée en dehors du tawaf, à tout moment de la vie,
                      tant elle est complète et bénéfique. Pour approfondir les
                      invocations liées au jour sacré de{" "}
                      <Link href="/doua-arafat-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Arafat</Link>,
                      consultez notre article dédié.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas à Safa et Marwa */}
              {/* ============================================ */}
              <section id="doua-safa-marwa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas à Safa et Marwa lors du sa&apos;y
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>sa&apos;y</strong> consiste à effectuer sept
                  allers-retours entre les collines de <strong>Safa</strong> et
                  de <strong>Marwa</strong>, en commémoration de la course
                  d&apos;Hajar (que la paix soit sur elle) à la recherche
                  d&apos;eau pour son fils Isma&apos;il. Ce rite est un pilier
                  de la omra et s&apos;accompagne d&apos;invocations spécifiques
                  que le Prophète (paix et salut sur lui) a pratiquées lors de
                  son pèlerinage d&apos;adieu.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En montant sur Safa pour la première fois, le pèlerin se
                  tourne vers la Kaaba et récite le verset coranique suivant :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Innassafa wal-Marwata min sha&apos;a&apos;irillah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Certes, Safa et Marwa font partie des rites d&apos;Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Baqara (2:158)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Puis, toujours face à la Kaaba, le pèlerin lève les mains et
                  prononce trois fois l&apos;invocation suivante, en intercalant
                  des douas personnelles entre chaque répétition :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illAllahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa &apos;ala kulli shay&apos;in qadir. La ilaha illAllahu wahdah, anjaza wa&apos;dah, wa nasara &apos;abdah, wa hazamal-ahzaba wahdah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité qu&apos;Allah, Seul, sans associé. A Lui la royauté, à Lui la louange, et Il est Omnipotent. Il n&apos;y a de divinité qu&apos;Allah Seul, Il a réalisé Sa promesse, a secouru Son serviteur et a vaincu les coalisés Seul&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (1218)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le pèlerin répète cette même séquence à chaque fois
                  qu&apos;il atteint Safa ou Marwa, soit sept fois au total
                  (quatre fois à Safa et trois fois à Marwa). Entre les deux
                  collines, il est libre de faire des douas personnelles, de
                  réciter du Coran ou de pratiquer le dhikr. Les hommes
                  accélèrent le pas entre les deux marques vertes
                  (signalées par des lumières vertes aujourd&apos;hui), en
                  souvenir de la course d&apos;Hajar dans la vallée.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le sa&apos;y est un moment privilégié pour les invocations
                  personnelles. Le pèlerin peut demander à Allah tout ce
                  qu&apos;il souhaite : la guidance pour lui et sa famille, le
                  pardon de ses péchés, la subsistance licite, la guérison des
                  maladies, la résolution des difficultés. Les savants
                  recommandent de profiter de ce moment pour formuler des douas
                  sincères et détaillées, car le pèlerin se trouve dans un lieu
                  sacré, en état d&apos;ihram, accomplissant un rite agréé par
                  Allah.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pour maximiser ses douas */}
              {/* ============================================ */}
              <section id="conseils-invocations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pour maximiser ses douas pendant la omra
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La omra est une occasion unique de se rapprocher d&apos;Allah
                  et de Lui adresser des invocations dans les conditions les
                  plus favorables. Voici les conseils des savants pour tirer le
                  meilleur profit spirituel de ce voyage béni et s&apos;assurer
                  que ses douas sont faites dans les meilleures dispositions.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Préparer une liste de douas avant le voyage
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Écrivez à l&apos;avance les invocations que vous
                        souhaitez faire : pour vous-même, votre famille, vos
                        proches, la communauté. Le jour du pèlerinage,
                        l&apos;émotion et l&apos;affluence peuvent faire
                        oublier certaines demandes. Une liste préparée permet
                        de ne rien omettre.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Apprendre les douas en arabe avec leur sens
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Mémoriser les invocations prophétiques en arabe est
                        important, mais comprendre leur signification est
                        essentiel. Une doua comprise avec le coeur a un impact
                        spirituel bien supérieur à une formule récitée sans
                        compréhension. Prenez le temps d&apos;apprendre la
                        traduction de chaque invocation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Choisir les moments propices pendant la omra
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Certains moments sont particulièrement bénis pour la
                        doua : lors du tawaf, en buvant l&apos;eau de Zamzam,
                        sur les collines de Safa et Marwa, et après les deux
                        raka&apos;at derrière le Maqam Ibrahim. Le dernier
                        tiers de la nuit à La Mecque est également un moment
                        exceptionnel pour invoquer Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Invoquer avec humilité et certitude
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné
                        d&apos;invoquer Allah avec la certitude d&apos;être
                        exaucé. La présence du coeur (hudur al-qalb), les
                        larmes sincères et l&apos;humilité sont des facteurs
                        qui rapprochent le serviteur de l&apos;exaucement.
                        Évitez de faire vos douas de manière mécanique ou
                        précipitée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas se limiter aux formules imposées
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Hormis la doua entre le Rukn Yamani et la Pierre Noire,
                        aucune invocation spécifique n&apos;est obligatoire
                        pour chaque tour du tawaf. Le pèlerin est libre de
                        parler à Allah avec ses propres mots, dans sa propre
                        langue. Les livrets qui imposent une doua différente
                        pour chaque tour n&apos;ont aucun fondement dans la
                        Sunna.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La omra est avant tout un voyage du coeur vers Allah. Les
                  invocations en sont le langage le plus intime. Que le pèlerin
                  récite en arabe ou dans sa langue maternelle, l&apos;essentiel
                  est la sincérité, l&apos;humilité et la certitude que chaque
                  doua est entendue par le Très-Haut. Pour compléter votre
                  préparation spirituelle, découvrez les{" "}
                  <Link href="/doua-hajj-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas du hajj</Link>{" "}
                  et les invocations de{" "}
                  <Link href="/doua-arafat-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Arafat</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua en buvant l&apos;eau de Zamzam"
                  description="Découvrez l&apos;invocation à réciter en buvant l&apos;eau de Zamzam et les bienfaits de cette eau bénie."
                  href="/doua-zamzam-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour réciter vos douas de omra avec compréhension"
                description="Maîtrisez la langue du Coran pour vivre pleinement votre pèlerinage et comprendre chaque invocation. Découvrez nos formations en ligne adaptées à tous les niveaux."
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
                    href="/doua-hajj-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du hajj
                  </Link>
                  <Link
                    href="/doua-arafat-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de Arafat
                  </Link>
                  <Link
                    href="/doua-zamzam-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de Zamzam
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
