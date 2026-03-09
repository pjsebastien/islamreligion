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
    "Doua pour les parents décédés en islam : invocations et bonnes actions",
  description:
    "Découvrez les douas pour les parents décédés en islam : invocations authentiques en arabe avec phonétique et traduction, sadaqa jariya, aumône au nom des défunts et hadiths sur le devoir filial après la mort.",
  openGraph: {
    title:
      "Doua pour les parents décédés en islam : invocations et bonnes actions",
    description:
      "Les invocations authentiques pour les parents décédés en islam : textes en arabe, phonétique, traduction et hadiths sur ce qui profite aux défunts.",
    url: "https://www.islamreligion.fr/doua-parents-decedes-islam",
    images: [
      {
        url: "/images/doua-mains-levees-illustration-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-parents-decedes-islam",
  },
};

const tocItems = [
  { id: "place-parents-islam", label: "La place des parents en islam" },
  { id: "douas-parents-decedes", label: "Douas pour les parents décédés" },
  { id: "sadaqa-jariya", label: "La sadaqa jariya au nom des parents" },
  { id: "aumone-bonnes-actions", label: "Aumône et bonnes actions pour eux" },
  { id: "honorer-parents-apres-mort", label: "Honorer ses parents après leur mort" },
  { id: "moments-propices", label: "Moments propices pour invoquer" },
  { id: "erreurs-eviter", label: "Erreurs à éviter" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua pour les parents décédés ?",
    answer:
      "La doua la plus connue est celle du Coran (sourate Al-Isra, 17:24) : « Rabbi irhamhuma kama rabbayyani saghira » (Seigneur, fais-leur miséricorde comme ils m&apos;ont élevé tout petit). Le Prophète (paix et salut sur lui) recommandait également de demander le pardon d&apos;Allah pour eux : « Allahumma ighfir li wa liwalidayya » (Seigneur, pardonne-moi ainsi qu&apos;à mes parents).",
  },
  {
    question: "Peut-on faire des douas pour ses parents décédés en français ?",
    answer:
      "Oui, il est tout à fait permis d&apos;invoquer Allah pour ses parents décédés dans toute langue, y compris le français. Allah comprend toutes les langues et c&apos;est la sincérité du coeur qui compte avant tout. Cependant, apprendre les invocations prophétiques en arabe est recommandé pour bénéficier de leur dimension spirituelle complète.",
  },
  {
    question: "Est-ce que la doua du fils profite à ses parents décédés ?",
    answer:
      "Oui, le Prophète (paix et salut sur lui) a dit : « Lorsque le fils d&apos;Adam meurt, ses oeuvres cessent sauf trois : une aumône continue (sadaqa jariya), une science dont les gens tirent profit, et un enfant pieux qui invoque pour lui. » (Muslim). La doua de l&apos;enfant fait donc partie des rares choses qui continuent de profiter au défunt.",
  },
  {
    question: "Peut-on donner une aumône au nom de ses parents décédés ?",
    answer:
      "Oui, il est permis et même recommandé de donner une aumône (sadaqa) au nom de ses parents décédés. Le Prophète (paix et salut sur lui) a confirmé que la récompense leur parvient. Un homme vint voir le Prophète et lui dit : « Ma mère est décédée, lui sera-t-il bénéfique que je fasse l&apos;aumône en son nom ? » Il répondit : « Oui. » (al-Bukhari et Muslim).",
  },
  {
    question: "Quand faut-il faire la doua pour ses parents décédés ?",
    answer:
      "La doua pour les parents décédés peut être faite à tout moment, mais certains instants sont particulièrement propices : le dernier tiers de la nuit, lors de la prosternation (sujud), entre l&apos;adhan et l&apos;iqama, le vendredi, après les prières obligatoires et lors de la visite au cimetière. La régularité est plus importante que la quantité.",
  },
  {
    question: "Peut-on lire le Coran pour ses parents décédés ?",
    answer:
      "Les savants divergent sur cette question. La majorité des hanafites et hanbalites considèrent que la récompense de la lecture du Coran peut parvenir au défunt si on la lui dédie. D&apos;autres savants, comme certains shafi&apos;ites, estiment que seules la doua, l&apos;aumône et le pèlerinage profitent au défunt de manière certaine. La position la plus sûre est de multiplier les douas et les aumônes, sur lesquelles il y a consensus.",
  },
  {
    question: "Le hajj ou la omra peuvent-ils être accomplis au nom des parents décédés ?",
    answer:
      "Oui, selon la majorité des savants, il est permis d&apos;accomplir le hajj ou la omra au nom d&apos;un parent décédé. Le Prophète (paix et salut sur lui) a autorisé une femme à accomplir le pèlerinage au nom de sa mère décédée (al-Bukhari). Cela fait partie des actes d&apos;adoration dont la récompense parvient au défunt.",
  },
  {
    question: "Comment honorer ses parents après leur mort en islam ?",
    answer:
      "Le Prophète (paix et salut sur lui) a mentionné plusieurs manières d&apos;honorer ses parents après leur mort : invoquer Allah pour eux et demander Son pardon, accomplir les promesses qu&apos;ils avaient faites, maintenir les liens avec leurs amis et proches, donner l&apos;aumône en leur nom et accomplir le pèlerinage pour eux si possible. Ce devoir filial ne s&apos;arrête pas avec la mort.",
  },
];

export default function DouaParentsDecedesIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-parents-decedes-islam/#article",
        headline:
          "Doua pour les parents décédés en islam : invocations et bonnes actions",
        description:
          "Découvrez les douas pour les parents décédés en islam : invocations authentiques en arabe, sadaqa jariya, aumône au nom des défunts et hadiths sur le devoir filial après la mort.",
        image: "/images/doua-mains-levees-illustration-lumiere.jpg",
        datePublished: "2026-03-21",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-parents-decedes-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-parents-decedes-islam/#breadcrumb",
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
            name: "Doua pour les parents décédés",
            item: "https://www.islamreligion.fr/doua-parents-decedes-islam",
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
          title="Doua pour les parents décédés en islam : invocations et bonnes actions"
          subtitle="Les invocations authentiques pour les parents décédés, tirées du Coran et de la Sunna. Textes en arabe, phonétique, traduction française et hadiths sur le devoir filial."
          imageSrc="/images/doua-mains-levees-illustration-lumiere.jpg"
          imageAlt="Mains levées en invocation doua pour les parents décédés avec lumière symbolisant la miséricorde divine en islam"
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
                <span className="text-foreground">Doua pour les parents décédés</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Invoquer Allah pour ses parents décédés fait partie des plus
                  belles formes de piété filiale en islam. Le Coran et la Sunna
                  nous enseignent des douas spécifiques pour demander la
                  miséricorde et le pardon d&apos;Allah en faveur de nos parents.
                  La doua de l&apos;enfant pieux, l&apos;aumône continue (sadaqa
                  jariya) et les bonnes actions accomplies en leur nom figurent
                  parmi les rares choses qui continuent de profiter à une
                  personne après sa mort.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La place des parents en islam */}
              {/* ============================================ */}
              <section id="place-parents-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La place des parents en islam et le devoir filial
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam accorde aux parents un statut d&apos;une noblesse
                  exceptionnelle. Allah a associé la bienfaisance envers les
                  parents à Son propre adoration dans plusieurs versets du Coran,
                  ce qui montre l&apos;importance capitale de ce lien. Cette
                  obligation ne s&apos;éteint pas avec la mort des parents :
                  elle se prolonge à travers la doua, l&apos;aumône et les
                  bonnes actions accomplies en leur nom.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran exprime cette réalité avec une tendresse
                  remarquable dans la sourate Al-Isra : &laquo;&nbsp;Et ton
                  Seigneur a décrété que vous n&apos;adoriez que Lui et que
                  vous soyez bienfaisants envers vos père et mère. Si
                  l&apos;un d&apos;eux ou tous deux atteignent la vieillesse
                  auprès de toi, alors ne leur dis point &quot;fi&quot; et ne
                  les brusque pas, mais adresse-leur des paroles
                  respectueuses&nbsp;&raquo; (Coran, 17:23). Ce verset place
                  la bonté envers les parents juste après le tawhid, soulignant
                  ainsi la gravité de cette obligation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsque les parents quittent ce monde, le croyant ressent
                  naturellement un profond chagrin. L&apos;islam reconnaît
                  cette douleur et offre un cadre spirituel pour la
                  transformer en actes bénéfiques : chaque doua prononcée pour
                  eux, chaque aumône donnée en leur nom et chaque bonne action
                  dédiée à leur mémoire deviennent une source de récompense
                  pour eux dans leur tombe et pour l&apos;enfant qui les
                  accomplit.
                </p>

                <HadithCard
                  arabic="إذا مات الإنسان انقطع عنه عمله إلا من ثلاثة: إلا من صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له"
                  text="Lorsque le fils d'Adam meurt, ses œuvres cessent sauf trois : une aumône continue (sadaqa jariya), une science dont les gens tirent profit, et un enfant pieux qui invoque pour lui."
                  source="Rapporté par Muslim (1631)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental établit que la doua de l&apos;enfant
                  pieux est l&apos;un des trois canaux par lesquels les
                  récompenses continuent de parvenir au défunt. Le terme
                  &laquo;&nbsp;enfant pieux&nbsp;&raquo; (walad salih) désigne
                  celui qui maintient un lien spirituel avec ses parents après
                  leur disparition, en invoquant régulièrement Allah en leur
                  faveur. Cette responsabilité est à la fois un honneur et un
                  devoir pour tout musulman.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Obligation coranique :</strong> Allah a lié la
                      bienfaisance envers les parents à Son adoration dans
                      plusieurs versets (17:23, 31:14, 46:15).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Devoir qui dépasse la mort :</strong> la piété
                      filiale ne s&apos;arrête pas au décès des parents mais
                      se poursuit par la doua, l&apos;aumône et le maintien
                      des liens qu&apos;ils entretenaient.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Triple bénéfice :</strong> l&apos;enfant qui
                      invoque pour ses parents décédés récolte lui-même une
                      récompense tout en faisant parvenir du bien à ses
                      parents et en renforçant son propre lien avec Allah.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les versets sur la piété filiale et la doua pour les parents en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Douas pour les parents décédés */}
              {/* ============================================ */}
              <section id="douas-parents-decedes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas authentiques pour les parents décédés
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran et la Sunna contiennent plusieurs invocations
                  spécifiques que le croyant peut adresser à Allah en faveur de
                  ses parents décédés. Ces douas, prononcées avec sincérité et
                  régularité, constituent un lien spirituel entre l&apos;enfant
                  et ses parents au-delà de la mort. Voici les principales
                  invocations authentiques avec leur texte arabe, leur
                  phonétique et leur traduction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Rabbi irhamhuma kama rabbayyani saghira
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est la doua coranique la plus connue pour les parents.
                  Allah Lui-même l&apos;enseigne dans le Coran, juste après
                  avoir ordonné la bienfaisance envers les parents. Elle
                  exprime une demande de miséricorde en rappelant les soins
                  et la tendresse que les parents ont prodigués pendant
                  l&apos;enfance.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi irhamhuma kama rabbayyani saghira
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais-leur miséricorde comme ils m&apos;ont élevé tout petit&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Isra (17:24)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Allahumma ighfir li wa liwalidayya
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation est inspirée de la doua du prophète Ibrahim
                  (paix sur lui) rapportée dans le Coran. Elle associe la
                  demande de pardon pour soi-même à celle pour les parents,
                  reflétant le lien indissociable entre la piété personnelle
                  et le devoir filial.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana ighfir li wa liwalidayya wa lil-mu&apos;minina yawma yaqumul-hisab
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, pardonne-moi, ainsi qu&apos;à mes parents et aux croyants, le Jour où se dressera le Compte&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ibrahim (14:41)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua complète pour le défunt
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) enseignait cette
                  invocation complète lors de la prière funéraire (salat
                  al-janaza). Elle peut être récitée à tout moment pour
                  demander à Allah de pardonner, de faire miséricorde et
                  d&apos;accorder un accueil honorable au défunt.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ighfir lahu warhamhu wa &apos;afihi wa&apos;fu &apos;anhu wa akrim nuzulahu wa wassi&apos; mudkhalahu
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, pardonne-lui, fais-lui miséricorde, accorde-lui le salut, absous-le, honore son accueil et élargis sa demeure&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (963)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua de Nouh pour ses parents
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le prophète Nouh (paix sur lui) a adressé à Allah cette
                  invocation en incluant ses parents dans sa demande de pardon.
                  C&apos;est un modèle de piété filiale transmis par le Coran
                  lui-même.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi ighfir li wa liwalidayya wa liman dakhala baytiya mu&apos;minan wa lil-mu&apos;minina wal-mu&apos;minat
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, pardonne-moi, ainsi qu&apos;à mes parents, à celui qui entre dans ma maison en croyant, et aux croyants et croyantes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Nouh (71:28)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  5. Demande d&apos;élévation de degré
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que la doua
                  de l&apos;enfant peut élever le degré de ses parents au
                  Paradis. Cette invocation demande spécifiquement à Allah
                  de leur accorder une place élevée dans l&apos;au-delà.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ ارْفَعْ دَرَجَتَهُمَا فِي الْمَهْدِيِّينَ وَاخْلُفْهُمَا فِي عَقِبِهِمَا فِي الْغَابِرِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma irfa&apos; darajatahuma fil-mahdiyyina wakhlufahuma fi &apos;aqibihima fil-ghabirina
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, élève leur rang parmi les bien-guidés, et sois leur successeur auprès de leur descendance parmi ceux qui restent&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Inspiré du hadith rapporté par Abu Dawud (3202)
                  </p>
                </div>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Sadaqa jariya */}
              {/* ============================================ */}
              <section id="sadaqa-jariya" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La sadaqa jariya au nom des parents décédés
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La sadaqa jariya (aumône continue) est l&apos;une des trois
                  oeuvres dont la récompense ne cesse pas après la mort. Donner
                  une sadaqa jariya au nom de ses parents décédés est un acte
                  d&apos;une valeur immense : la récompense leur parvient tant
                  que les gens tirent profit de cette aumône. Construire un
                  puits, financer l&apos;éducation d&apos;un enfant, planter
                  un arbre ou contribuer à la construction d&apos;une mosquée
                  sont autant de formes de sadaqa jariya dont les fruits
                  perdurent.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le concept de sadaqa jariya repose sur un principe
                  fondamental : chaque fois qu&apos;une personne bénéficie de
                  cette aumône, la récompense est inscrite au compte du défunt.
                  Ainsi, un puits creusé au nom d&apos;un parent décédé
                  continue de générer des récompenses chaque fois qu&apos;un
                  être vivant s&apos;y abreuve. Cette vision de la charité
                  perpétuelle est propre à l&apos;islam et offre un moyen
                  concret de maintenir le lien avec ceux qui nous ont quittés.
                </p>

                <HadithCard
                  arabic="إن أبي مات ولم يوصِ، أفينفعه أن أتصدق عنه؟ قال: نعم"
                  text="Un homme dit au Prophète : « Mon père est mort sans avoir fait de testament, lui sera-t-il bénéfique que je fasse l'aumône en son nom ? » Il répondit : « Oui. »"
                  source="Rapporté par Muslim (1004)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants ont détaillé les formes les plus méritoires de
                  sadaqa jariya. Parmi celles-ci, le forage de puits dans les
                  régions qui manquent d&apos;eau est considéré comme l&apos;une
                  des plus vertueuses, car l&apos;eau est à la base de toute
                  vie. Le Prophète (paix et salut sur lui) a dit que la
                  meilleure aumône est de donner à boire. D&apos;autres formes
                  incluent la diffusion du savoir, la construction de lieux
                  d&apos;adoration et le parrainage d&apos;orphelins.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Puits et accès à l&apos;eau
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Financer le forage d&apos;un puits au nom de ses parents
                      décédés est une sadaqa dont la récompense perdure tant
                      que des êtres vivants s&apos;y abreuvent. Sa&apos;d ibn
                      Ubada fit creuser un puits au nom de sa mère décédée,
                      et le Prophète approuva cet acte.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Diffusion du savoir
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Offrir des livres islamiques, financer des cours de
                      Coran ou contribuer à la formation de savants au nom
                      de ses parents génère une récompense à chaque fois
                      qu&apos;une personne tire profit de ce savoir.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Construction de mosquées
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Participer à la construction d&apos;une mosquée au nom
                      des parents décédés fait parvenir la récompense de
                      chaque prière qui y sera accomplie jusqu&apos;au Jour
                      du Jugement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Parrainage d&apos;orphelins
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Prendre en charge un orphelin au nom de ses parents
                      combine la sadaqa jariya et la bonté envers les plus
                      vulnérables, deux actes particulièrement aimés
                      d&apos;Allah.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Aumône et bonnes actions */}
              {/* ============================================ */}
              <section id="aumone-bonnes-actions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Aumône et bonnes actions au nom des parents décédés
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà de la sadaqa jariya, plusieurs types de bonnes
                  actions peuvent être accomplis au nom des parents décédés et
                  leur faire parvenir des récompenses. Le Prophète (paix et
                  salut sur lui) a confirmé dans plusieurs hadiths que
                  certaines oeuvres d&apos;adoration peuvent bénéficier au
                  défunt lorsqu&apos;elles sont accomplies en son nom par un
                  proche.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parmi ces actes, on retrouve le jeûne de rattrapage pour un
                  parent qui avait des jours à rattraper, le pèlerinage (hajj
                  ou omra) au nom du défunt, et l&apos;aumône ponctuelle.
                  Chacun de ces actes a été validé par des hadiths authentiques
                  et constitue un moyen précieux de continuer à honorer ses
                  parents après leur départ. Pour comprendre les invocations
                  liées à la visite des défunts, consultez notre article sur la{" "}
                  <Link href="/doua-mort-defunt-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour le défunt en islam</Link>.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains ouvertes en prière et invocation doua pour les parents décédés en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le jeûne de rattrapage
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si un parent est décédé avec des jours de jeûne
                        obligatoire non accomplis, son enfant peut jeûner à
                        sa place. Le Prophète (paix et salut sur lui) a dit :
                        &laquo;&nbsp;Quiconque meurt en ayant des jours de
                        jeûne à rattraper, son héritier (wali) jeûnera pour
                        lui&nbsp;&raquo; (al-Bukhari et Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le hajj et la omra au nom du défunt
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il est permis d&apos;accomplir le pèlerinage au nom
                        d&apos;un parent décédé qui ne l&apos;avait pas
                        encore accompli ou qui l&apos;avait promis. Une femme
                        demanda au Prophète si elle pouvait accomplir le hajj
                        au nom de sa mère décédée. Il répondit par
                        l&apos;affirmative en disant : &laquo;&nbsp;Si ta
                        mère avait une dette, ne l&apos;aurais-tu pas
                        acquittée ?&nbsp;&raquo; (al-Bukhari).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;aumône ponctuelle (sadaqa)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Toute forme d&apos;aumône donnée avec l&apos;intention
                        de la dédier à ses parents décédés leur parvient. Cela
                        inclut la nourriture aux pauvres, l&apos;aide aux
                        nécessiteux, le soutien aux étudiants en sciences
                        islamiques et toute dépense faite dans le sentier
                        d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;acquittement de leurs dettes
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si les parents ont laissé des dettes, les rembourser
                        est un acte prioritaire qui soulage leur situation
                        dans l&apos;au-delà. Le Prophète (paix et salut sur
                        lui) a averti que l&apos;âme du croyant reste
                        suspendue tant que sa dette n&apos;est pas acquittée
                        (at-Tirmidhi).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Honorer ses parents après la mort */}
              {/* ============================================ */}
              <section id="honorer-parents-apres-mort" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Honorer ses parents après leur mort : un devoir continu
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a détaillé de nombreuses
                  manières de maintenir la piété filiale après le décès des
                  parents. Ces actes dépassent la seule invocation et englobent
                  des comportements concrets qui témoignent de l&apos;amour et
                  du respect que l&apos;enfant porte à ses parents, même après
                  leur disparition. Découvrez également les{" "}
                  <Link href="/doua-parents-vivants-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas pour les parents vivants</Link>{" "}
                  si vous avez encore la chance de les avoir parmi vous.
                </p>

                <HadithCard
                  arabic="إن أبر البر صلة الولد أهل ود أبيه"
                  text="La meilleure forme de piété filiale est que l'enfant maintienne les liens avec les amis de son père."
                  source="Rapporté par Muslim (2552)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith révèle une dimension souvent méconnue de la piété
                  filiale : maintenir les relations que les parents
                  entretenaient de leur vivant. Visiter leurs amis, prendre
                  de leurs nouvelles et leur témoigner du respect sont autant
                  d&apos;actes qui honorent la mémoire des parents et qui
                  valent une récompense auprès d&apos;Allah. Cette continuité
                  dans les liens sociaux reflète la profondeur de
                  l&apos;enseignement prophétique sur le respect dû aux
                  parents.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un autre aspect concerne l&apos;accomplissement des
                  promesses et des voeux que les parents avaient formulés de
                  leur vivant. Si un parent avait promis une aumône, un jeûne
                  ou un acte d&apos;adoration qu&apos;il n&apos;a pas pu
                  accomplir avant sa mort, son enfant peut le faire en son nom.
                  Ce geste témoigne d&apos;un attachement profond à la parole
                  donnée par les parents et d&apos;une conscience vive de la
                  responsabilité filiale.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invoquer régulièrement pour eux :</strong>{" "}
                      faire de la doua pour ses parents une habitude
                      quotidienne, en particulier après les prières
                      obligatoires et lors des moments propices.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Maintenir les liens familiaux :</strong>{" "}
                      préserver les relations avec la famille élargie, les
                      oncles, les tantes et les proches que les parents
                      chérissaient.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Visiter leurs amis :</strong> comme
                      l&apos;enseigne le hadith, honorer les amis des parents
                      est l&apos;une des plus belles formes de birr
                      al-walidayn (piété filiale).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Accomplir leurs voeux non réalisés :</strong>{" "}
                      jeûne, aumône, pèlerinage ou toute promesse
                      qu&apos;ils avaient faite sans pouvoir la tenir.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Visiter leur tombe :</strong> se rendre au
                      cimetière pour les saluer et invoquer Allah en leur
                      faveur, conformément à la sunna. Consultez notre
                      article sur la{" "}
                      <Link href="/doua-cimetiere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua au cimetière en islam</Link>{" "}
                      pour connaître les invocations appropriées.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Moments propices */}
              {/* ============================================ */}
              <section id="moments-propices" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les moments propices pour invoquer en faveur des parents
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Bien que la doua pour les parents décédés soit acceptée à
                  tout moment, certains instants sont considérés par les
                  savants comme particulièrement favorables à l&apos;exaucement
                  des invocations. Combiner la sincérité du coeur avec ces
                  moments bénis renforce la portée spirituelle de la doua.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le dernier tiers de la nuit
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Allah descend au ciel le plus bas chaque nuit et
                        dit : &laquo;&nbsp;Y a-t-il quelqu&apos;un qui
                        M&apos;invoque pour que Je lui réponde ?&nbsp;&raquo;
                        (al-Bukhari et Muslim). Se lever avant l&apos;aube
                        pour invoquer en faveur de ses parents est l&apos;un
                        des actes les plus méritoires.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Lors de la prosternation (sujud)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a dit :
                        &laquo;&nbsp;Le moment où le serviteur est le plus
                        proche de son Seigneur est lorsqu&apos;il est en
                        prosternation, multipliez donc les
                        invocations&nbsp;&raquo; (Muslim). C&apos;est un
                        moment privilégié pour demander la miséricorde
                        d&apos;Allah pour ses parents.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Entre l&apos;adhan et l&apos;iqama
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné que
                        la doua faite entre l&apos;appel à la prière et le
                        second appel n&apos;est pas rejetée (Abu Dawud).
                        Profiter de ce court instant pour invoquer en faveur
                        des parents décédés est une habitude bénéfique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le jour du vendredi
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le vendredi comporte une heure durant laquelle toute
                        doua est exaucée. Bien que les savants divergent sur
                        le moment exact, beaucoup situent cette heure entre
                        la prière de l&apos;Asr et le coucher du soleil.
                        C&apos;est un moment particulièrement propice pour
                        les invocations en faveur des proches décédés.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Lors de la visite au cimetière
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Visiter la tombe de ses parents et invoquer Allah en
                        leur faveur sur place est une sunna confirmée. Le
                        Prophète (paix et salut sur lui) visitait les tombes
                        et enseignait aux compagnons les invocations à
                        réciter lors de cette visite.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Erreurs à éviter */}
              {/* ============================================ */}
              <section id="erreurs-eviter" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Erreurs à éviter concernant les parents décédés
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans le chagrin et le désir de bien faire, certains
                  musulmans commettent des erreurs ou adoptent des pratiques
                  qui n&apos;ont pas de fondement dans le Coran et la Sunna.
                  Il est important de distinguer les actes authentiques de
                  ceux qui relèvent de traditions culturelles ou
                  d&apos;innovations (bid&apos;a) pour que les bonnes actions
                  accomplies au nom des parents soient réellement bénéfiques.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Délaisser la doua après le début du deuil
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Beaucoup invoquent pour leurs parents dans les jours
                      suivant le décès puis cessent progressivement. Or la
                      doua pour les parents décédés est un acte continu qui
                      devrait accompagner le croyant tout au long de sa vie.
                      La régularité, même avec une courte invocation, est
                      préférable à l&apos;intensité passagère.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Les cérémonies non fondées
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Certaines traditions culturelles imposent des
                      cérémonies à des dates précises (3e jour, 7e jour,
                      40e jour) qui n&apos;ont aucun fondement dans la Sunna.
                      L&apos;islam encourage la doua et l&apos;aumône à tout
                      moment, sans les restreindre à des dates arbitraires.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Les lamentations excessives
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;islam permet les pleurs et la tristesse face à
                      la perte d&apos;un parent, mais interdit les
                      lamentations excessives (niyaha) qui témoignent d&apos;un
                      manque de soumission à la volonté d&apos;Allah. Le
                      Prophète a pleuré à la mort de son fils Ibrahim tout en
                      restant dans l&apos;acceptation du décret divin.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Négliger les droits des vivants
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Certains se consacrent tellement à la mémoire des
                      parents décédés qu&apos;ils négligent leurs obligations
                      envers les vivants. L&apos;islam appelle à
                      l&apos;équilibre : honorer les morts tout en remplissant
                      ses devoirs envers les proches encore en vie.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La meilleure manière d&apos;honorer ses parents décédés est
                  de s&apos;en tenir aux actes validés par le Coran et la
                  Sunna : la doua sincère, l&apos;aumône régulière, le
                  maintien des liens familiaux et l&apos;accomplissement des
                  engagements qu&apos;ils avaient pris. Pour approfondir
                  les invocations liées aux épreuves, consultez notre page
                  sur les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas en islam</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour le défunt et la visite au cimetière"
                  description="Découvrez les invocations authentiques à réciter pour tout défunt et lors de la visite des tombes en islam."
                  href="/doua-mort-defunt-islam"
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
                    href="/doua-mort-defunt-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour le défunt
                  </Link>
                  <Link
                    href="/doua-parents-vivants-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour les parents vivants
                  </Link>
                  <Link
                    href="/doua-cimetiere-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua au cimetière
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
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
