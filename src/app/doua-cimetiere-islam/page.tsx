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
    "Doua au cimetière en islam : invocations authentiques pour les défunts",
  description:
    "Découvrez la doua au cimetière en islam : invocations authentiques en arabe avec phonétique et traduction, salutation des morts, adab de la visite des tombes, sourates à réciter et hadiths sur la visite des cimetières.",
  openGraph: {
    title:
      "Doua au cimetière en islam : invocations authentiques pour les défunts",
    description:
      "Les invocations authentiques à réciter au cimetière en islam : textes en arabe, phonétique, traduction et hadiths sur la visite des tombes.",
    url: "https://www.islamreligion.fr/doua-cimetiere-islam",
    images: [
      {
        url: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-cimetiere-islam",
  },
};

const tocItems = [
  { id: "visite-tombes-sunna", label: "La visite des tombes : une sunna recommandée" },
  { id: "doua-entree-cimetiere", label: "Doua en entrant au cimetière" },
  { id: "douas-pour-defunts", label: "Douas pour les défunts" },
  { id: "sourates-a-reciter", label: "Sourates à réciter au cimetière" },
  { id: "adab-visite-cimetiere", label: "Les règles de bienséance (adab)" },
  { id: "sagesse-visite-tombes", label: "La sagesse derrière la visite des tombes" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua réciter en entrant au cimetière en islam ?",
    answer:
      "La doua authentique en entrant au cimetière est : « As-salamu alaykum ahl ad-diyar min al-mu&apos;minin wal-muslimin, wa inna in sha Allahu bikum lahiqun, nas&apos;alullaha lana wa lakum al-&apos;afiya » (Paix sur vous, habitants de ces demeures, parmi les croyants et les musulmans. Nous vous rejoindrons, si Allah le veut. Nous demandons à Allah le salut pour nous et pour vous). Ce hadith est rapporté par Muslim.",
  },
  {
    question: "Est-il permis de visiter les cimetières en islam ?",
    answer:
      "Oui, la visite des cimetières est une sunna recommandée (mustahabb) en islam. Le Prophète (paix et salut sur lui) a dit : « Je vous avais interdit de visiter les tombes. Visitez-les désormais, car elles rappellent l&apos;au-delà » (rapporté par Muslim). La visite est recommandée pour les hommes. Pour les femmes, les savants divergent : la majorité des savants l&apos;autorisent à condition qu&apos;elle se fasse avec pudeur et sans lamentations excessives.",
  },
  {
    question: "Peut-on lire le Coran au cimetière ?",
    answer:
      "Les savants divergent sur cette question. L&apos;imam Ahmad et d&apos;autres savants considèrent qu&apos;il est recommandé de réciter sourate Ya-Sin au cimetière, en se basant sur le hadith : « Récitez Ya-Sin auprès de vos morts » (Abu Dawud). D&apos;autres savants, comme Ibn Taymiyya, estiment que la récitation du Coran ne parvient pas aux morts et que la meilleure chose est de faire des douas pour eux. La récitation de sourate al-Fatiha est largement pratiquée dans la communauté musulmane.",
  },
  {
    question: "Quand est-il recommandé de visiter le cimetière ?",
    answer:
      "La visite du cimetière est recommandée à tout moment de l&apos;année, sans restriction de jour. Le Prophète (paix et salut sur lui) visitait le cimetière d&apos;al-Baqi&apos; régulièrement, notamment la nuit. Le vendredi est un jour particulièrement recommandé selon certains savants. Il n&apos;y a pas de jour interdit pour la visite, mais il convient d&apos;éviter de transformer cette pratique en un rituel fixe qui n&apos;a pas de fondement dans la Sunna.",
  },
  {
    question: "Que dire devant la tombe d'un proche décédé ?",
    answer:
      "Devant la tombe d&apos;un proche, il est recommandé de le saluer par le salam, de faire des douas pour lui en demandant à Allah de lui pardonner, de lui faire miséricorde, de l&apos;élever en degré et d&apos;élargir sa tombe. On peut dire : « Allahumma-ghfir lahu warhamhu wa &apos;afihi wa &apos;fu &apos;anhu » (Seigneur, pardonne-lui, fais-lui miséricorde, accorde-lui le salut et absous-le). Les douas personnelles dans sa propre langue sont également acceptées.",
  },
  {
    question: "Les femmes peuvent-elles visiter les cimetières en islam ?",
    answer:
      "La question fait l&apos;objet d&apos;une divergence entre les savants. La majorité des juristes (malikites, shafiites et une partie des hanbalites) autorisent la visite des cimetières par les femmes, à condition qu&apos;elle se fasse dans la pudeur, sans lamentations excessives ni comportements interdits. Les hanafites et certains hanbalites la considèrent comme makruh (déconseillée). Ce qui est unanimement interdit, c&apos;est la visite fréquente accompagnée de pleurs excessifs et de lamentations.",
  },
  {
    question: "Est-il interdit de marcher sur les tombes en islam ?",
    answer:
      "Oui, il est interdit de marcher sur les tombes en islam. Le Prophète (paix et salut sur lui) a dit : « Que je marche sur une braise ou sur une épée, ou que je recouse ma sandale avec mon pied, est plus aimé de moi que de marcher sur la tombe d&apos;un musulman » (rapporté par Ibn Majah). Il est également interdit de s&apos;asseoir sur les tombes. Le respect du défunt après sa mort fait partie des droits du musulman sur son frère.",
  },
  {
    question: "Peut-on faire une doua au cimetière pour un non-musulman ?",
    answer:
      "Les savants sont unanimes sur le fait qu&apos;il n&apos;est pas permis de demander le pardon (istighfar) pour un non-musulman décédé, conformément au verset : « Il n&apos;appartient pas au Prophète et aux croyants d&apos;implorer le pardon en faveur des associateurs » (Coran, 9:113). Cependant, on peut saluer le cimetière de manière générale et faire des douas pour les croyants présents parmi les morts.",
  },
];

export default function DouaCimetiereIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-cimetiere-islam/#article",
        headline:
          "Doua au cimetière en islam : invocations authentiques pour les défunts",
        description:
          "Découvrez la doua au cimetière en islam : invocations authentiques en arabe, adab de la visite des tombes, sourates à réciter et hadiths sur la visite des cimetières.",
        image: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        datePublished: "2026-03-26",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-cimetiere-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-cimetiere-islam/#breadcrumb",
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
            name: "Doua au cimetière",
            item: "https://www.islamreligion.fr/doua-cimetiere-islam",
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
          title="Doua au cimetière en islam : invocations authentiques pour les défunts"
          subtitle="Les invocations à réciter lors de la visite des tombes, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-ouvertes-rayons-dores.jpg"
          imageAlt="Mains ouvertes en invocation doua au cimetière avec rayons dorés symbolisant la miséricorde divine en islam"
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
                <span className="text-foreground">Doua au cimetière</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La visite des cimetières est une sunna recommandée par le
                  Prophète (paix et salut sur lui) qui rappelle l&apos;au-delà
                  et attendrit le coeur. En entrant au cimetière, le musulman
                  salue les défunts par la formule &laquo;&nbsp;As-salamu
                  alaykum ahl ad-diyar&nbsp;&raquo; puis invoque Allah en
                  faveur des morts en demandant le pardon, la miséricorde et
                  l&apos;élargissement de leurs tombes. Cet article rassemble
                  toutes les douas authentiques à réciter au cimetière, les
                  règles de bienséance et les hadiths sur cette pratique.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La visite des tombes, une sunna */}
              {/* ============================================ */}
              <section id="visite-tombes-sunna" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La visite des tombes : une sunna recommandée en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La visite des cimetières occupe une place importante dans la
                  tradition prophétique. Aux premiers temps de l&apos;islam, le
                  Prophète (paix et salut sur lui) avait d&apos;abord interdit
                  la visite des tombes, car les gens de la Jahiliyya
                  (période préislamique) y pratiquaient des rites idolâtres et
                  des lamentations excessives. Une fois le monothéisme
                  fermement établi dans les coeurs, cette interdiction fut
                  levée et remplacée par une recommandation.
                </p>

                <HadithCard
                  arabic="كنت نهيتكم عن زيارة القبور فزوروها فإنها تذكر الآخرة"
                  text="Je vous avais interdit de visiter les tombes. Visitez-les désormais, car elles rappellent l'au-delà."
                  source="Rapporté par Muslim (977)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith constitue le fondement juridique de la visite des
                  cimetières en islam. L&apos;expression &laquo;&nbsp;elles
                  rappellent l&apos;au-delà&nbsp;&raquo; révèle la sagesse
                  profonde de cette pratique : se tenir devant les tombes
                  rappelle au vivant la réalité inévitable de la mort, le
                  détourne de l&apos;attachement excessif à ce monde éphémère
                  et l&apos;incite à préparer sa vie future. Le Prophète (paix
                  et salut sur lui) visitait régulièrement le cimetière
                  d&apos;al-Baqi&apos; à Médine, parfois même la nuit, comme
                  le rapporte &apos;Aisha (qu&apos;Allah l&apos;agrée).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de l&apos;islam sont unanimes sur le caractère
                  recommandé (mustahabb) de la visite des tombes pour les
                  hommes. Pour les femmes, la question fait l&apos;objet
                  d&apos;une divergence. La majorité des juristes, parmi
                  lesquels les malikites et les shafiites, autorisent cette
                  visite à condition qu&apos;elle se fasse dans la dignité et
                  sans lamentations. Ce qui est unanimement interdit, c&apos;est
                  la visite qui s&apos;accompagne de pleurs excessifs, de
                  gémissements ou de pratiques contraires à la Sunna.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un rappel de la mort :</strong> la visite des
                      tombes attendrit le coeur et rappelle que chaque être
                      vivant retournera à Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un bienfait pour les défunts :</strong> les
                      douas du vivant profitent aux morts, qui sont dans le
                      besoin de chaque invocation adressée en leur faveur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un acte d&apos;adoration :</strong> suivre la
                      Sunna du Prophète dans cette visite est en soi un acte
                      récompensé par Allah. Découvrez toutes les{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>{" "}
                      dans notre guide complet.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les invocations à réciter au cimetière en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua en entrant au cimetière */}
              {/* ============================================ */}
              <section id="doua-entree-cimetiere" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua en entrant au cimetière : la salutation des morts
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Lorsque le musulman pénètre dans un cimetière, la Sunna
                  l&apos;invite à saluer les habitants des tombes comme il
                  saluerait des vivants. Cette salutation témoigne du lien
                  permanent qui unit les vivants et les morts dans la
                  communauté des croyants. Plusieurs formulations authentiques
                  ont été rapportées du Prophète (paix et salut sur lui), et
                  la plus célèbre est celle rapportée par Muslim.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua principale en entrant au cimetière
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est la formule la plus authentique et la plus complète,
                  rapportée par Muslim dans son Sahih. Le Prophète (paix et
                  salut sur lui) l&apos;enseignait à ses compagnons lorsqu&apos;ils
                  visitaient les cimetières.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ، نَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> As-salamu alaykum ahl ad-diyar min al-mu&apos;minin wal-muslimin, wa inna in sha Allahu bikum lahiqun, nas&apos;alullaha lana wa lakum al-&apos;afiya
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Que la paix soit sur vous, habitants de ces demeures, parmi les croyants et les musulmans. Nous vous rejoindrons, si Allah le veut. Nous demandons à Allah le salut pour nous et pour vous&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (975)
                  </p>
                </div>

                <HadithCard
                  arabic="كان رسول الله صلى الله عليه وسلم كلما كان ليلتها من رسول الله يخرج من آخر الليل إلى البقيع فيقول: السلام عليكم دار قوم مؤمنين"
                  text="Le Messager d'Allah (paix et salut sur lui), chaque fois que c'était la nuit de 'Aisha, sortait en fin de nuit vers al-Baqi' et disait : 'Paix sur vous, demeure d'un peuple croyant.'"
                  source="Rapporté par Muslim (974)"
                />

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Formule complétée avec la demande de pardon
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Une autre version, rapportée également par Muslim, ajoute
                  la demande de miséricorde pour ceux qui sont déjà partis et
                  ceux qui suivront. Elle exprime la fraternité entre les
                  générations de croyants.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    السَّلَامُ عَلَيْكُمْ دَارَ قَوْمٍ مُؤْمِنِينَ، وَأَتَاكُمْ مَا تُوعَدُونَ غَدًا مُؤَجَّلُونَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ، اللَّهُمَّ اغْفِرْ لِأَهْلِ بَقِيعِ الْغَرْقَدِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> As-salamu alaykum dara qawmin mu&apos;minin, wa atakum ma tu&apos;aduna ghadan mu&apos;ajjalun, wa inna in sha Allahu bikum lahiqun, Allahumma-ghfir li-ahli Baqi&apos;il-Gharqad
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Paix sur vous, demeure d&apos;un peuple croyant. Ce qui vous a été promis vous est parvenu, à un terme fixé, et nous vous rejoindrons, si Allah le veut. Seigneur, pardonne aux habitants d&apos;al-Baqi&apos;&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (974)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;expression &laquo;&nbsp;wa inna in sha Allahu bikum
                  lahiqun&nbsp;&raquo; (nous vous rejoindrons, si Allah le
                  veut) est d&apos;une profondeur remarquable. Elle rappelle
                  au visiteur que la mort est inévitable et que la séparation
                  entre les vivants et les morts n&apos;est que temporaire.
                  Cette prise de conscience est l&apos;un des objectifs
                  principaux de la visite des cimetières : elle ramène le
                  croyant à l&apos;essentiel et l&apos;éloigne des
                  distractions de ce monde. Pour en savoir plus sur les
                  invocations liées à la mort, consultez notre article sur la{" "}
                  <Link href="/doua-mort-defunt-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour le mort et le défunt</Link>.
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
              {/* SECTION 3 : Douas pour les défunts */}
              {/* ============================================ */}
              <section id="douas-pour-defunts" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas authentiques pour les défunts au cimetière
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Après avoir salué les habitants du cimetière, le musulman
                  peut invoquer Allah en faveur des défunts. Ces douas sont
                  un véritable cadeau spirituel pour les morts, car le
                  Prophète (paix et salut sur lui) a enseigné que les actions
                  du défunt s&apos;arrêtent à sa mort, à l&apos;exception de
                  trois choses, parmi lesquelles l&apos;enfant pieux qui
                  invoque pour lui. Voici les invocations les plus
                  authentiques à réciter devant les tombes.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua générale pour le pardon et la miséricorde
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation complète, rapportée par Muslim, est celle
                  que le Prophète (paix et salut sur lui) enseignait pour la
                  prière funéraire et qui peut également être récitée au
                  cimetière. Elle couvre tous les aspects de la miséricorde
                  divine envers le défunt.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ وَنَقِّهِ مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الْأَبْيَضَ مِنَ الدَّنَسِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma-ghfir lahu warhamhu wa &apos;afihi wa&apos;fu &apos;anhu wa akrim nuzulahu wa wassi&apos; mudkhalahu waghsilhu bil-ma&apos;i wath-thalji wal-barad, wa naqqihi min al-khataya kama naqqayta ath-thawba al-abyada min ad-danas
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, pardonne-lui, fais-lui miséricorde, accorde-lui le salut et absous-le. Honore son accueil et élargis son entrée, lave-le avec l&apos;eau, la neige et la grêle, et purifie-le de ses péchés comme Tu purifies le vêtement blanc de la souillure&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (963)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour la fermeté dans la tombe
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) recommandait
                  d&apos;invoquer Allah pour que le défunt soit affermi lors
                  de l&apos;interrogatoire des deux anges (Munkar et Nakir)
                  dans la tombe. C&apos;est une épreuve que chaque être humain
                  traversera, et la doua du vivant peut aider le défunt à y
                  faire face.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ ثَبِّتْهُ عِنْدَ الْمَسْأَلَةِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma thabbithu &apos;inda al-mas&apos;ala
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, affermis-le lors de l&apos;interrogatoire&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (3221), authentifié par al-Albani
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour les parents décédés
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Coran enseigne une invocation spécifique pour les parents
                  décédés, que le musulman peut réciter au cimetière devant
                  la tombe de son père ou de sa mère. Cette doua coranique
                  est d&apos;une tendresse et d&apos;une beauté
                  remarquables.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi irhamhuma kama rabbayani saghira
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais-leur miséricorde comme ils m&apos;ont élevé tout petit&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Isra (17:24)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Invoquer pour ses parents décédés fait partie des actes les
                  plus méritoires en islam. Le Prophète (paix et salut sur
                  lui) a dit qu&apos;un serviteur peut voir son degré
                  s&apos;élever au Paradis grâce aux invocations de son
                  enfant. Le cimetière est un lieu propice pour ces douas, car
                  la proximité des tombes attendrit le coeur et renforce la
                  sincérité de l&apos;invocation. Pour découvrir davantage de
                  douas pour les parents, consultez notre article sur la{" "}
                  <Link href="/doua-parents-decedes-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour les parents décédés</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Sourates à réciter */}
              {/* ============================================ */}
              <section id="sourates-a-reciter" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Que réciter au cimetière : al-Fatiha, Ya-Sin et autres sourates
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La question de la récitation du Coran au cimetière fait
                  l&apos;objet d&apos;une divergence savante respectable.
                  Certains savants encouragent la récitation de sourates
                  spécifiques auprès des tombes, tandis que d&apos;autres
                  estiment que la meilleure chose est de se limiter aux douas
                  authentiques. Voici les principales positions et les textes
                  sur lesquels elles se fondent.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Sourate al-Fatiha
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La récitation de sourate al-Fatiha au cimetière est une
                        pratique très répandue dans la communauté musulmane. Bien
                        qu&apos;il n&apos;existe pas de hadith explicite du
                        Prophète ordonnant cette récitation spécifique au
                        cimetière, de nombreux savants la considèrent comme
                        bénéfique. Al-Fatiha est la mère du Coran (Umm
                        al-Kitab) et contient en elle-même une invocation
                        complète adressée à Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Sourate Ya-Sin (36)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le hadith &laquo;&nbsp;Récitez Ya-Sin auprès de vos
                        morts&nbsp;&raquo; (rapporté par Abu Dawud et Ibn Majah)
                        est invoqué par de nombreux savants pour recommander la
                        récitation de cette sourate au cimetière. Certains
                        savants comme an-Nawawi et Ibn Qudama considèrent
                        cette pratique comme recommandée, tandis que d&apos;autres
                        estiment que ce hadith concerne le mourant et non le
                        défunt déjà enterré.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Sourate al-Mulk (67)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a décrit sourate
                        al-Mulk comme celle qui protège du châtiment de la
                        tombe. Bien que sa récitation soit principalement
                        recommandée chaque nuit par le vivant pour lui-même,
                        certains savants considèrent qu&apos;elle peut être
                        récitée au cimetière en tant qu&apos;invocation en
                        faveur du défunt.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Sourate al-Ikhlas (112)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Sourate al-Ikhlas équivaut au tiers du Coran selon le
                        hadith authentique. Sa récitation au cimetière est
                        pratiquée par de nombreux musulmans. L&apos;imam Ahmad
                        a rapporté qu&apos;il est recommandé de réciter
                        al-Fatiha, al-Falaq, an-Nas et al-Ikhlas puis
                        d&apos;en offrir la récompense aux habitants du
                        cimetière.
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="اقرؤوا يس على موتاكم"
                  text="Récitez Ya-Sin auprès de vos morts."
                  source="Rapporté par Abu Dawud (3121), Ibn Majah (1448)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La position la plus équilibrée, adoptée par de nombreux
                  savants contemporains, est de combiner la récitation du
                  Coran avec les douas authentiques. Le visiteur peut réciter
                  ce qu&apos;il souhaite du Coran, puis invoquer Allah en
                  faveur des défunts en utilisant les formules prophétiques
                  mentionnées plus haut. L&apos;essentiel est que la visite
                  soit empreinte de sincérité, de recueillement et de respect
                  pour les morts.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-chapelet-bois-islam-versets.jpg"
                    alt="Coran ouvert avec chapelet en bois illustrant la récitation des sourates au cimetière en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Adab de la visite */}
              {/* ============================================ */}
              <section id="adab-visite-cimetiere" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les règles de bienséance (adab) lors de la visite du cimetière
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La visite du cimetière en islam est encadrée par des règles
                  de bienséance (adab) précises qui visent à préserver la
                  dignité des morts et la spiritualité de la visite. Le
                  respect de ces adab transforme une simple visite en un acte
                  d&apos;adoration complet, bénéfique à la fois pour le
                  visiteur et pour les défunts. Voici les principales règles
                  à observer.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Saluer les morts en entrant
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Dès l&apos;entrée du cimetière, prononcer la salutation
                      prophétique mentionnée plus haut. C&apos;est une sunna
                      confirmée qui témoigne du respect envers les défunts et
                      du lien entre les vivants et les morts dans la
                      communauté musulmane.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Ne pas marcher sur les tombes
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a interdit de
                      marcher sur les tombes et de s&apos;asseoir dessus.
                      Le visiteur doit emprunter les allées prévues et éviter
                      de piétiner les sépultures, par respect pour les
                      défunts qui s&apos;y trouvent.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Éviter les lamentations excessives
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les pleurs silencieux et naturels sont autorisés, comme
                      le Prophète (paix et salut sur lui) a pleuré à la mort
                      de son fils Ibrahim. En revanche, les cris, les
                      gémissements et les lamentations bruyantes (niyaha)
                      sont strictement interdits car ils nuisent au défunt
                      selon certains hadiths.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Se tourner vers la qibla pour invoquer
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Certains savants recommandent de se tourner vers la
                      qibla lorsqu&apos;on fait des douas au cimetière, comme
                      pour toute invocation. D&apos;autres estiment qu&apos;il
                      est préférable de faire face à la tombe du défunt.
                      Les deux positions sont acceptables.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas construire sur les tombes :</strong> le
                      Prophète (paix et salut sur lui) a interdit de
                      construire des édifices, de blanchir ou de décorer les
                      tombes. La simplicité est de rigueur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas invoquer le défunt :</strong> la doua
                      s&apos;adresse exclusivement à Allah. Demander au mort
                      d&apos;intercéder ou de répondre à une demande est une
                      forme de shirk (associationnisme) interdite en islam.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Méditer sur sa propre mort :</strong> le but
                      principal de la visite est de se rappeler
                      l&apos;au-delà. Le visiteur doit profiter de ce moment
                      pour faire son examen de conscience et renouveler ses
                      intentions pour l&apos;au-delà.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Retirer ses chaussures si nécessaire :</strong>{" "}
                      certains savants recommandent de retirer ses chaussures
                      dans le cimetière, en se basant sur le hadith de
                      Bashir ibn al-Khassassiyya (Abu Dawud). D&apos;autres
                      considèrent que cela n&apos;est pas obligatoire mais
                      préférable.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : La sagesse derrière la visite */}
              {/* ============================================ */}
              <section id="sagesse-visite-tombes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La sagesse derrière la visite des tombes en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La visite des cimetières n&apos;est pas un acte anodin dans
                  la spiritualité islamique. Elle remplit plusieurs fonctions
                  essentielles qui touchent à la fois le coeur du vivant et
                  l&apos;âme du défunt. Comprendre ces sagesses permet de
                  vivre la visite avec plus de profondeur et d&apos;en tirer
                  un bénéfice maximal.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La première sagesse est le rappel de la mort (dhikr
                  al-mawt). Dans le tourbillon de la vie quotidienne,
                  l&apos;être humain a tendance à oublier qu&apos;il est
                  mortel. Les projets, les ambitions et les préoccupations
                  matérielles créent un voile d&apos;insouciance qui
                  l&apos;éloigne de la réalité de l&apos;au-delà. La visite
                  du cimetière déchire ce voile : en se tenant devant les
                  tombes de ceux qui étaient vivants hier, le croyant prend
                  conscience que sa propre tombe l&apos;attend et que chaque
                  jour qui passe le rapproche de cet instant inévitable.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La deuxième sagesse est la bienfaisance envers les morts.
                  Les défunts sont dans un besoin immense des invocations des
                  vivants. Le Prophète (paix et salut sur lui) a enseigné que
                  les actions du mort s&apos;arrêtent à sa mort, sauf trois :
                  une aumône continue (sadaqa jariya), une science utile dont
                  les gens profitent, et un enfant pieux qui invoque pour lui.
                  En visitant le cimetière et en invoquant Allah pour les
                  défunts, le vivant accomplit un acte de charité spirituelle
                  envers ceux qui ne peuvent plus rien faire pour eux-mêmes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La troisième sagesse est le détachement de ce monde
                  (zuhd). En voyant les tombes, le visiteur se rappelle que
                  les richesses, les honneurs et les plaisirs de ce monde
                  sont éphémères. Rien de tout cela n&apos;accompagne
                  l&apos;homme dans sa tombe, si ce n&apos;est ses bonnes
                  actions. Cette prise de conscience aide le croyant à
                  recalibrer ses priorités et à investir davantage dans ce
                  qui lui profitera dans l&apos;au-delà. Pour approfondir la
                  dimension spirituelle des invocations, découvrez notre
                  guide sur les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas en islam</Link>.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Enfin, la visite du cimetière renforce les liens
                  communautaires entre les vivants et les morts. En islam, la
                  oumma (communauté) ne se limite pas aux vivants : elle
                  englobe toutes les générations de croyants, passées,
                  présentes et futures. La salutation &laquo;&nbsp;As-salamu
                  alaykum ahl ad-diyar min al-mu&apos;minin
                  wal-muslimin&nbsp;&raquo; exprime cette continuité et
                  rappelle que la mort n&apos;est qu&apos;une étape dans un
                  voyage qui mène vers la rencontre avec Allah. La doua pour
                  les morts est aussi un acte de solidarité, car chaque
                  croyant espère qu&apos;après sa propre mort, d&apos;autres
                  viendront invoquer pour lui.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour le mort et le défunt en islam"
                  description="Découvrez toutes les invocations authentiques à réciter pour le défunt, de l&apos;agonie à l&apos;enterrement et au-delà."
                  href="/doua-mort-defunt-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

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
                    href="/doua-mort-defunt-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour le mort et le défunt
                  </Link>
                  <Link
                    href="/doua-parents-decedes-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour les parents décédés
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
