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
    "Doua de la grande ablution (ghusl) en islam : invocations et étapes",
  description:
    "Découvrez la doua de la grande ablution (ghusl) en islam : invocations authentiques en arabe avec phonétique et traduction, étapes du ghusl, cas obligatoires (janaba, menstruation, conversion) et hadiths.",
  openGraph: {
    title:
      "Doua de la grande ablution (ghusl) en islam : invocations et étapes",
    description:
      "Les invocations authentiques de la grande ablution (ghusl) en islam : bismillah, shahada, douas en arabe, phonétique et traduction. Guide complet avec hadiths.",
    url: "https://www.islamreligion.fr/doua-grande-ablution-ghusl-islam",
    images: [
      {
        url: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-grande-ablution-ghusl-islam",
  },
};

const tocItems = [
  { id: "definition-ghusl", label: "Qu\u2019est-ce que le ghusl en islam" },
  { id: "cas-obligatoires", label: "Quand le ghusl est-il obligatoire" },
  { id: "bismillah-ghusl", label: "Dire bismillah avant le ghusl" },
  { id: "douas-ghusl", label: "Les douas de la grande ablution" },
  { id: "etapes-ghusl", label: "Comment faire le ghusl étape par étape" },
  { id: "shahada-apres-ghusl", label: "La shahada après le ghusl" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua de la grande ablution (ghusl) en islam ?",
    answer:
      "La doua de la grande ablution commence par « Bismillah » (Au nom d&apos;Allah) avant de débuter le ghusl, puis se termine par la shahada : « Ashhadu an la ilaha illAllah, wa ashhadu anna Muhammadan &apos;abduhu wa rasuluh » (Je témoigne qu&apos;il n&apos;y a de divinité qu&apos;Allah et que Muhammad est Son serviteur et Son messager). Cette invocation est la même que celle prononcée après les petites ablutions (wudu).",
  },
  {
    question: "Faut-il dire bismillah avant le ghusl ?",
    answer:
      "Oui, il est recommandé (mustahabb) de prononcer « Bismillah » avant de commencer le ghusl, comme pour les petites ablutions. Certains savants, notamment de l&apos;école hanbalite, considèrent même que c&apos;est obligatoire (wajib). Dans tous les cas, prononcer le nom d&apos;Allah avant de se purifier est une sunna fortement encouragée.",
  },
  {
    question: "Quelle est la différence entre le ghusl et le wudu ?",
    answer:
      "Le wudu (petites ablutions) consiste à laver certaines parties du corps (visage, mains, tête, pieds) et est requis avant chaque prière. Le ghusl (grande ablution) consiste à laver l&apos;intégralité du corps avec de l&apos;eau et est obligatoire après l&apos;état de janaba (impureté majeure), la fin des menstrues, les lochies (post-accouchement), la conversion à l&apos;islam et le lavage mortuaire.",
  },
  {
    question: "Comment faire le ghusl après les menstrues ?",
    answer:
      "Le ghusl après les menstrues suit les mêmes étapes que le ghusl classique : prononcer « Bismillah », se laver les mains, laver les parties intimes, faire le wudu complet, verser l&apos;eau sur la tête trois fois en frottant bien les racines des cheveux, puis laver tout le corps en commençant par le côté droit. Aïcha (qu&apos;Allah soit satisfait d&apos;elle) rapporte que le Prophète (paix et salut sur lui) a détaillé cette méthode pour les femmes.",
  },
  {
    question: "Peut-on faire la doua du ghusl en français ?",
    answer:
      "Le bismillah et la shahada doivent idéalement être prononcés en arabe, car ce sont des formules rituelles précises. Cependant, pour les invocations personnelles (doua libre) que l&apos;on peut faire pendant ou après le ghusl, il est tout à fait permis de s&apos;exprimer en français ou dans toute autre langue. Allah comprend toutes les langues.",
  },
  {
    question: "Le ghusl remplace-t-il le wudu ?",
    answer:
      "Oui, selon la majorité des savants, si le ghusl est accompli avec l&apos;intention de la purification complète et qu&apos;il inclut le wudu dans ses étapes, il remplace les petites ablutions. La personne peut donc prier directement après le ghusl sans refaire le wudu séparément, à condition de ne pas avoir annulé ses ablutions entre-temps.",
  },
  {
    question: "Est-il obligatoire de faire le ghusl pour la prière du vendredi ?",
    answer:
      "Le ghusl du vendredi (ghusl al-jumu&apos;a) est fortement recommandé (sunna mu&apos;akkada) selon la majorité des savants. Le Prophète (paix et salut sur lui) a dit : « Le ghusl du vendredi est un devoir pour tout pubère » (al-Bukhari et Muslim). Certains savants, comme Ibn Hazm, le considèrent obligatoire en se basant sur ce hadith, mais la position majoritaire est qu&apos;il s&apos;agit d&apos;une recommandation appuyée.",
  },
  {
    question: "Quelles sont les conditions de validité du ghusl ?",
    answer:
      "Les conditions de validité du ghusl sont : l&apos;intention (niyya) de se purifier de l&apos;impureté majeure, l&apos;utilisation d&apos;eau pure (tahur), faire parvenir l&apos;eau à l&apos;ensemble du corps sans exception (y compris les cheveux, le nombril, les aisselles et entre les orteils), et retirer tout ce qui pourrait empêcher l&apos;eau d&apos;atteindre la peau (vernis à ongles, maquillage épais, etc.).",
  },
];

export default function DouaGrandeAblutionGhuslIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-grande-ablution-ghusl-islam/#article",
        headline:
          "Doua de la grande ablution (ghusl) en islam : invocations et étapes",
        description:
          "Découvrez la doua de la grande ablution (ghusl) en islam : invocations authentiques en arabe, étapes du ghusl, cas obligatoires et hadiths.",
        image: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        datePublished: "2026-04-17",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-grande-ablution-ghusl-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-grande-ablution-ghusl-islam/#breadcrumb",
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
            name: "Doua de la grande ablution (ghusl)",
            item: "https://www.islamreligion.fr/doua-grande-ablution-ghusl-islam",
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
          title="Doua de la grande ablution (ghusl) en islam : invocations et étapes"
          subtitle="Les invocations authentiques à prononcer avant et après le ghusl, les étapes détaillées et les cas où la grande ablution est obligatoire. Textes en arabe, phonétique et traduction."
          imageSrc="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
          imageAlt="Intérieur de mosquée avec arches et tapis illustrant la purification et la grande ablution ghusl en islam"
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
                <span className="text-foreground">Doua de la grande ablution (ghusl)</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le ghusl (grande ablution) est un acte de purification
                  majeure en islam, obligatoire dans plusieurs situations
                  comme la janaba, la fin des menstrues ou la conversion.
                  Avant de commencer, le musulman prononce
                  &laquo;&nbsp;Bismillah&nbsp;&raquo; et, une fois le ghusl
                  terminé, il récite la shahada, exactement comme après le
                  wudu (petites ablutions). Cet article détaille les
                  invocations authentiques, les étapes du ghusl et les cas
                  où il est obligatoire.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Définition du ghusl */}
              {/* ============================================ */}
              <section id="definition-ghusl" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce que le ghusl (grande ablution) en islam ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme arabe <strong>ghusl</strong> (غسل) désigne
                  littéralement le fait de laver ou de baigner. En
                  terminologie islamique, il désigne le lavage rituel
                  complet du corps avec de l&apos;eau pure, dans
                  l&apos;intention de se purifier d&apos;un état
                  d&apos;impureté majeure (hadath akbar). Contrairement au
                  wudu qui ne concerne que certaines parties du corps, le
                  ghusl exige que l&apos;eau atteigne chaque parcelle de la
                  peau et des cheveux.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La grande ablution occupe une place fondamentale dans la
                  pratique musulmane, car sans elle, le croyant ne peut
                  accomplir la prière (salat), toucher le Coran ou effectuer
                  le tawaf (circumambulation autour de la Kaaba). Allah dit
                  dans le Coran : &laquo;&nbsp;Et si vous êtes en état
                  d&apos;impureté majeure (junub), alors purifiez-vous
                  (par le bain rituel)&nbsp;&raquo; (sourate Al-Ma&apos;ida,
                  5:6). Cette purification est donc une condition
                  indispensable pour de nombreux actes d&apos;adoration.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants distinguent deux types de ghusl : le ghusl
                  obligatoire (fard), nécessaire pour lever l&apos;impureté
                  majeure, et le ghusl recommandé (mustahabb), pratiqué
                  dans certaines occasions comme le vendredi, les deux
                  fêtes de l&apos;Aïd ou avant d&apos;entrer en état
                  d&apos;ihram pour le hajj. Dans tous les cas, les
                  invocations à prononcer restent les mêmes, car la
                  purification rituelle s&apos;accompagne toujours du
                  rappel d&apos;Allah.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/salle-priere-mosquee-arches-lumiere-soleil.jpg"
                    alt="Salle de prière de mosquée avec arches et lumière du soleil symbolisant la purification en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Cas obligatoires */}
              {/* ============================================ */}
              <section id="cas-obligatoires" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quand le ghusl est-il obligatoire ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La grande ablution devient obligatoire dans des situations
                  précises, définies par le Coran et la Sunna. Connaître
                  ces cas est essentiel pour tout musulman afin de maintenir
                  son état de pureté rituelle et pouvoir accomplir ses
                  actes d&apos;adoration dans les conditions requises.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La janaba (impureté majeure) :</strong>{" "}
                      elle survient après un rapport intime ou une
                      émission de liquide séminal (mani), que ce soit
                      pendant l&apos;éveil ou le sommeil (rêve érotique).
                      Le ghusl est alors obligatoire avant de pouvoir
                      prier.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La fin des menstrues (hayd) :</strong>{" "}
                      lorsque les règles cessent, la femme doit accomplir
                      le ghusl avant de reprendre la prière, le jeûne et
                      les rapports conjugaux.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les lochies (nifas) :</strong>{" "}
                      les saignements post-accouchement constituent
                      également un état d&apos;impureté majeure. Le ghusl
                      est obligatoire une fois que ces saignements cessent.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La conversion à l&apos;islam :</strong>{" "}
                      selon la majorité des savants, le nouveau musulman
                      doit accomplir le ghusl lors de son entrée en islam.
                      Le Prophète (paix et salut sur lui) a ordonné à
                      plusieurs compagnons de se laver après avoir prononcé
                      la shahada.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le décès :</strong>{" "}
                      laver le défunt (ghusl al-mayyit) fait partie des
                      obligations communautaires (fard kifaya). Ce lavage
                      rituel suit des règles spécifiques transmises par la
                      Sunna.
                    </span>
                  </li>
                </ul>

                <HadithCard
                  arabic="إذا جلس بين شعبها الأربع ثم جهدها فقد وجب الغسل"
                  text="Lorsque l'homme s'installe entre les quatre membres de la femme et qu'il fait l'effort (le rapport), le ghusl devient obligatoire."
                  source="Rapporté par Muslim (348)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith clarifie un point important : le ghusl est
                  obligatoire dès qu&apos;il y a pénétration, même sans
                  éjaculation. Cette règle fait l&apos;unanimité parmi les
                  savants des quatre écoles juridiques. Le Prophète (paix et
                  salut sur lui) a ainsi levé toute ambiguïté sur cette
                  question, car certains compagnons pensaient initialement
                  que seule l&apos;éjaculation rendait le ghusl obligatoire.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Apprenez les règles de purification en arabe"
                description="Comprendre l&apos;arabe vous permet de lire directement les textes de fiqh sur la purification rituelle. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Bismillah avant le ghusl */}
              {/* ============================================ */}
              <section id="bismillah-ghusl" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Dire bismillah avant le ghusl : la première invocation
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Tout comme pour le wudu (petites ablutions), le musulman
                  commence la grande ablution en prononçant le nom
                  d&apos;Allah. Cette invocation est la première doua du
                  ghusl et constitue un acte recommandé (sunna) selon la
                  majorité des savants, voire obligatoire selon certains
                  oulémas de l&apos;école hanbalite.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah&nbsp;&raquo;
                  </p>
                </div>

                <HadithCard
                  arabic="لا وضوء لمن لم يذكر اسم الله عليه"
                  text="Il n'y a pas d'ablution pour celui qui ne mentionne pas le nom d'Allah."
                  source="Rapporté par Abu Dawud (101), at-Tirmidhi (25), Ibn Majah (399)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith, bien que les savants divergent sur son degré
                  d&apos;authenticité, est renforcé par de nombreuses voies
                  de transmission qui se corroborent mutuellement. L&apos;imam
                  Ahmad ibn Hanbal et Ibn Kathir ont considéré que
                  l&apos;ensemble de ces chaînes de transmission confère au
                  hadith une force suffisante pour établir l&apos;obligation
                  de mentionner le nom d&apos;Allah. La position la plus
                  prudente et la plus sage consiste à prononcer
                  &laquo;&nbsp;Bismillah&nbsp;&raquo; systématiquement, que
                  ce soit avant le wudu ou avant le ghusl.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sagesse derrière cette invocation est multiple. Elle
                  rappelle au croyant que même un acte aussi quotidien que
                  le bain rituel est un acte d&apos;adoration lorsqu&apos;il
                  est accompli avec l&apos;intention de plaire à Allah.
                  Prononcer le nom d&apos;Allah au début de la purification,
                  c&apos;est placer l&apos;ensemble du processus sous Sa
                  bénédiction et Sa protection. Le lien entre la{" "}
                  <Link href="/doua-ablutions-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua des ablutions (wudu)
                  </Link>{" "}
                  et celle du ghusl est donc direct : la même formule
                  inaugurale s&apos;applique aux deux types de purification.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Les douas du ghusl */}
              {/* ============================================ */}
              <section id="douas-ghusl" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas de la grande ablution (ghusl) en arabe, phonétique et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voici les invocations authentiques à prononcer lors du
                  ghusl. Elles sont tirées de la Sunna du Prophète (paix et
                  salut sur lui) et s&apos;appliquent aussi bien à la grande
                  ablution qu&apos;aux petites ablutions, car le principe de
                  purification rituelle est le même.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Bismillah (avant de commencer)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Comme mentionné précédemment, le ghusl débute par la
                  mention du nom d&apos;Allah. Cette formule simple mais
                  essentielle sacralise l&apos;acte de purification et le
                  transforme en adoration consciente.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahi ar-Rahmani ar-Rahim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, le Tout Miséricordieux, le Très Miséricordieux&nbsp;&raquo;
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. La shahada (après le ghusl)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Une fois le ghusl terminé, le musulman prononce
                  l&apos;attestation de foi, exactement comme après le wudu.
                  Cette invocation est rapportée dans un hadith authentique
                  et constitue la doua principale de clôture de la
                  purification rituelle.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ashhadu an la ilaha illAllahu wahdahu la sharika lah, wa ashhadu anna Muhammadan &apos;abduhu wa rasuluh
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je témoigne qu&apos;il n&apos;y a de divinité qu&apos;Allah, Seul sans associé, et je témoigne que Muhammad est Son serviteur et Son messager&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (234)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua d&apos;ouverture des portes du Paradis
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation complète la shahada et fait partie de la
                  même tradition prophétique. Elle confère à la purification
                  une dimension eschatologique en liant l&apos;acte de se
                  purifier à l&apos;espoir du Paradis.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ij&apos;alni mina at-tawwabina waj&apos;alni mina al-mutatahhirin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais de moi l&apos;un de ceux qui se repentent et fais de moi l&apos;un de ceux qui se purifient&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (55)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui
                  qui prononce cette invocation après ses ablutions verra
                  les huit portes du Paradis s&apos;ouvrir devant lui, et il
                  pourra entrer par celle qu&apos;il souhaite. Cette
                  promesse extraordinaire montre à quel point la purification
                  rituelle, lorsqu&apos;elle est accompagnée de ses
                  invocations, est un acte d&apos;adoration à part entière
                  et non un simple geste d&apos;hygiène. Pour approfondir
                  toutes les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    douas en islam
                  </Link>
                  , consultez notre guide complet.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en prière et invocation doua après la grande ablution ghusl en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Étapes du ghusl */}
              {/* ============================================ */}
              <section id="etapes-ghusl" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment faire le ghusl étape par étape
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le ghusl suit un ordre précis transmis par la Sunna du
                  Prophète (paix et salut sur lui). Aïcha (qu&apos;Allah soit
                  satisfait d&apos;elle) a décrit en détail la manière dont
                  le Prophète accomplissait la grande ablution, et c&apos;est
                  cette description qui sert de référence pour tous les
                  musulmans.
                </p>

                <HadithCard
                  arabic="كان رسول الله صلى الله عليه وسلم إذا اغتسل من الجنابة يبدأ فيغسل يديه ثم يفرغ بيمينه على شماله فيغسل فرجه ثم يتوضأ وضوءه للصلاة"
                  text="Lorsque le Messager d'Allah (paix et salut sur lui) faisait le ghusl de la janaba, il commençait par se laver les mains, puis versait de l'eau de la main droite sur la main gauche pour laver ses parties intimes, puis faisait le wudu comme pour la prière."
                  source="Rapporté par al-Bukhari (248) et Muslim (316)"
                />

                <div className="mt-6 space-y-4">
                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-4">
                    <p className="font-semibold text-primary">Étape 1 : L&apos;intention (niyya) et Bismillah</p>
                    <p className="mt-2 leading-relaxed text-foreground">
                      Formuler l&apos;intention dans le coeur de se purifier
                      de l&apos;impureté majeure, puis prononcer
                      &laquo;&nbsp;Bismillah&nbsp;&raquo; à voix basse.
                      L&apos;intention est une condition de validité du
                      ghusl selon tous les savants.
                    </p>
                  </div>

                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-4">
                    <p className="font-semibold text-primary">Étape 2 : Lavage des mains</p>
                    <p className="mt-2 leading-relaxed text-foreground">
                      Se laver les deux mains trois fois avant de les
                      plonger dans le récipient d&apos;eau. Cette étape
                      garantit la propreté de l&apos;instrument de lavage
                      lui-même.
                    </p>
                  </div>

                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-4">
                    <p className="font-semibold text-primary">Étape 3 : Lavage des parties intimes</p>
                    <p className="mt-2 leading-relaxed text-foreground">
                      Verser de l&apos;eau avec la main droite sur la main
                      gauche et laver les parties intimes avec la main
                      gauche. Puis laver la main gauche soigneusement.
                    </p>
                  </div>

                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-4">
                    <p className="font-semibold text-primary">Étape 4 : Le wudu complet</p>
                    <p className="mt-2 leading-relaxed text-foreground">
                      Accomplir les petites ablutions (wudu) complètes,
                      comme pour la prière. Certains savants recommandent
                      de reporter le lavage des pieds à la fin du ghusl.
                    </p>
                  </div>

                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-4">
                    <p className="font-semibold text-primary">Étape 5 : Verser l&apos;eau sur la tête</p>
                    <p className="mt-2 leading-relaxed text-foreground">
                      Verser de l&apos;eau sur la tête trois fois en
                      faisant pénétrer l&apos;eau jusqu&apos;aux racines
                      des cheveux avec les doigts. Pour les femmes, il
                      n&apos;est pas nécessaire de défaire les tresses
                      selon un hadith authentique d&apos;Umm Salama.
                    </p>
                  </div>

                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-4">
                    <p className="font-semibold text-primary">Étape 6 : Lavage du corps entier</p>
                    <p className="mt-2 leading-relaxed text-foreground">
                      Verser l&apos;eau sur l&apos;ensemble du corps en
                      commençant par le côté droit, puis le côté gauche.
                      S&apos;assurer que l&apos;eau atteigne chaque partie
                      du corps sans exception : aisselles, nombril, entre
                      les orteils, derrière les oreilles.
                    </p>
                  </div>

                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-4">
                    <p className="font-semibold text-primary">Étape 7 : La doua de clôture</p>
                    <p className="mt-2 leading-relaxed text-foreground">
                      Prononcer la shahada et la doua
                      &laquo;&nbsp;Allahumma ij&apos;alni mina
                      at-tawwabina...&nbsp;&raquo; après avoir terminé le
                      ghusl. Cela complète la purification et ouvre les
                      portes du Paradis au croyant.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Shahada après le ghusl */}
              {/* ============================================ */}
              <section id="shahada-apres-ghusl" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La shahada après le ghusl : la même invocation que le wudu
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Un point essentiel à comprendre est que les invocations
                  prononcées après le ghusl sont identiques à celles du
                  wudu. La raison en est simple : le ghusl englobe le wudu
                  et le complète. Les savants des quatre écoles juridiques
                  s&apos;accordent sur le fait que la shahada récitée après
                  les petites ablutions s&apos;applique également après la
                  grande ablution.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le hadith rapporté par &apos;Umar ibn al-Khattab
                  (qu&apos;Allah soit satisfait de lui) dans Sahih Muslim
                  précise que le Prophète (paix et salut sur lui) a
                  dit : &laquo;&nbsp;Il n&apos;est aucun d&apos;entre vous
                  qui fait ses ablutions et les parfait, puis dit :
                  Ashhadu an la ilaha illAllah wahdahu la sharika lah, wa
                  ashhadu anna Muhammadan &apos;abduhu wa rasuluh, sans que
                  les huit portes du Paradis ne lui soient ouvertes, et il
                  entre par celle qu&apos;il veut&nbsp;&raquo;.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette promesse s&apos;applique donc tant au wudu qu&apos;au
                  ghusl, puisque le ghusl est une forme de purification
                  encore plus complète. Le musulman qui fait sa grande
                  ablution en prononçant bismillah au début et la shahada à
                  la fin accomplit un acte d&apos;adoration complet, alliant
                  la purification physique à la purification spirituelle.
                  Pour découvrir en détail les invocations des petites
                  ablutions, consultez notre article sur la{" "}
                  <Link href="/doua-ablutions-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua des ablutions en islam
                  </Link>
                  .
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est également recommandé de prier deux raka&apos;at
                  (unités de prière) après le ghusl, tout comme après le
                  wudu. Ces deux raka&apos;at sont un acte méritoire qui
                  complète la purification par l&apos;adoration directe
                  d&apos;Allah. Bilal ibn Rabah (qu&apos;Allah soit satisfait
                  de lui) avait l&apos;habitude de prier deux raka&apos;at
                  après chaque ablution, et le Prophète lui a annoncé
                  qu&apos;il avait entendu le bruit de ses sandales au
                  Paradis. Pour les invocations à réciter après la prière,
                  consultez notre guide sur la{" "}
                  <Link href="/doua-apres-priere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua après la prière en islam
                  </Link>
                  .
                </p>
              </section>

              {/* ============================================ */}
              {/* Affiliate Form */}
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
