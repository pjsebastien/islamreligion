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
    "Doua contre la paresse en islam : invocations pour retrouver la motivation",
  description:
    "Découvrez la doua contre la paresse (al-kasal) en islam : invocations authentiques en arabe avec phonétique et traduction, hadiths sur la motivation, le tawakkul et l&apos;effort, et conseils pratiques pour vaincre la procrastination.",
  openGraph: {
    title:
      "Doua contre la paresse en islam : invocations pour retrouver la motivation",
    description:
      "Les invocations authentiques contre la paresse en islam : textes en arabe, phonétique, traduction et hadiths. Retrouvez énergie et motivation grâce aux douas prophétiques.",
    url: "https://www.islamreligion.fr/doua-paresse-motivation-islam",
    images: [
      {
        url: "/images/doua-mains-levees-illustration-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-paresse-motivation-islam",
  },
};

const tocItems = [
  { id: "paresse-islam", label: "La paresse (al-kasal) en islam" },
  { id: "doua-ajz-kasal", label: "Doua contre la faiblesse et la paresse" },
  { id: "refuge-paresse", label: "Chercher refuge auprès d&apos;Allah" },
  { id: "douas-motivation", label: "Douas pour retrouver la motivation" },
  { id: "motivation-adoration", label: "La motivation par l&apos;adoration" },
  { id: "tawakkul-effort", label: "Tawakkul et effort : l&apos;équilibre islamique" },
  { id: "conseils-pratiques", label: "Conseils pratiques contre la paresse" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua contre la paresse en islam ?",
    answer:
      "La doua la plus connue contre la paresse est : « Allahumma inni a&apos;udhu bika min al-&apos;ajzi wal-kasal » (Seigneur, je cherche refuge auprès de Toi contre la faiblesse et la paresse). Cette invocation est rapportée par al-Bukhari et Muslim. Le Prophète (paix et salut sur lui) la récitait régulièrement pour demander à Allah de le protéger contre l&apos;inactivité et le manque de motivation.",
  },
  {
    question: "La paresse est-elle un péché en islam ?",
    answer:
      "La paresse en elle-même n&apos;est pas classée comme un péché majeur, mais elle est fortement blâmée en islam car elle mène à la négligence des obligations religieuses et mondaines. Le Prophète (paix et salut sur lui) cherchait régulièrement refuge auprès d&apos;Allah contre la paresse (al-kasal), ce qui montre la gravité de ce défaut. Lorsque la paresse conduit à délaisser la prière ou les devoirs, elle devient effectivement un péché.",
  },
  {
    question: "Comment vaincre la paresse selon l&apos;islam ?",
    answer:
      "L&apos;islam propose une approche complète pour vaincre la paresse : réciter les douas prophétiques de protection, maintenir les cinq prières quotidiennes qui structurent la journée, se rappeler la brièveté de la vie et le Jour du Jugement, pratiquer le dhikr (évocation d&apos;Allah) qui revitalise le coeur, s&apos;entourer de personnes pieuses et actives, et allier le tawakkul (confiance en Allah) à l&apos;effort personnel concret.",
  },
  {
    question: "Que dit le Coran sur la paresse ?",
    answer:
      "Le Coran décrit la paresse comme un trait des hypocrites (munafiqun). Allah dit : « Quand ils se lèvent pour la prière, ils se lèvent avec paresse » (Coran, 4:142). Le Coran encourage aussi l&apos;effort et l&apos;action en rappelant que « l&apos;homme n&apos;obtient que le fruit de ses efforts » (Coran, 53:39). Ces versets montrent que l&apos;islam valorise l&apos;énergie, la discipline et la constance dans l&apos;adoration comme dans la vie quotidienne.",
  },
  {
    question: "Quel est le lien entre paresse et faiblesse dans la doua prophétique ?",
    answer:
      "Dans la doua prophétique, la paresse (al-kasal) et la faiblesse (al-&apos;ajz) sont mentionnées ensemble car elles sont complémentaires. Al-&apos;ajz désigne l&apos;incapacité réelle de faire quelque chose, tandis qu&apos;al-kasal est le manque de volonté malgré la capacité. Le Prophète (paix et salut sur lui) cherchait refuge contre les deux, car l&apos;une empêche physiquement et l&apos;autre empêche moralement d&apos;accomplir le bien.",
  },
  {
    question: "Peut-on réciter la doua contre la paresse en français ?",
    answer:
      "Oui, il est permis de faire des invocations personnelles en français. Cependant, il est fortement recommandé d&apos;apprendre la doua en arabe (« Allahumma inni a&apos;udhu bika min al-&apos;ajzi wal-kasal ») car c&apos;est la formulation utilisée par le Prophète (paix et salut sur lui). On peut combiner les deux : réciter en arabe puis formuler ses supplications personnelles en français pour plus de compréhension et de présence du coeur.",
  },
  {
    question: "À quel moment réciter la doua contre la paresse ?",
    answer:
      "La doua contre la paresse peut être récitée à tout moment, mais certains instants sont particulièrement recommandés : le matin après la prière du Fajr pour commencer la journée avec énergie, avant d&apos;entreprendre une tâche difficile, lors des invocations du matin et du soir (adhkar), et au dernier tiers de la nuit. Le Prophète (paix et salut sur lui) intégrait cette doua dans ses invocations quotidiennes régulières.",
  },
  {
    question: "Le tawakkul peut-il mener à la paresse ?",
    answer:
      "Non, le véritable tawakkul (confiance en Allah) ne mène jamais à la paresse. Le Prophète (paix et salut sur lui) a clairement enseigné qu&apos;il faut d&apos;abord fournir l&apos;effort puis s&apos;en remettre à Allah. Lorsqu&apos;un homme lui demanda s&apos;il devait attacher son chameau ou s&apos;en remettre à Allah, il répondit : « Attache-le puis place ta confiance en Allah » (at-Tirmidhi). Le tawakkul authentique est l&apos;opposé de la paresse.",
  },
];

export default function DouaParesseMotivationIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-paresse-motivation-islam/#article",
        headline:
          "Doua contre la paresse en islam : invocations pour retrouver la motivation",
        description:
          "Découvrez la doua contre la paresse (al-kasal) en islam : invocations authentiques en arabe, hadiths sur la motivation, tawakkul et effort, conseils pratiques.",
        image: "/images/doua-mains-levees-illustration-lumiere.jpg",
        datePublished: "2026-04-08",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-paresse-motivation-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-paresse-motivation-islam/#breadcrumb",
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
            name: "Doua contre la paresse",
            item: "https://www.islamreligion.fr/doua-paresse-motivation-islam",
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
          title="Doua contre la paresse en islam : invocations pour retrouver la motivation"
          subtitle="Les invocations authentiques du Prophète pour vaincre la paresse (al-kasal), retrouver l&apos;énergie et raviver la motivation. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-levees-illustration-lumiere.jpg"
          imageAlt="Mains levées en invocation doua contre la paresse avec lumière divine symbolisant la motivation en islam"
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
                <span className="text-foreground">Doua contre la paresse</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La paresse (al-kasal) est un fléau contre lequel le Prophète
                  (paix et salut sur lui) cherchait quotidiennement refuge auprès
                  d&apos;Allah. L&apos;invocation &laquo;&nbsp;Allahumma inni
                  a&apos;udhu bika min al-&apos;ajzi wal-kasal&nbsp;&raquo; est
                  l&apos;une des douas les plus récitées de la Sunna. L&apos;islam
                  enseigne que la motivation naît de l&apos;adoration sincère,
                  de l&apos;effort personnel et du tawakkul (confiance en Allah),
                  formant un équilibre entre spiritualité et action concrète.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La paresse en islam */}
              {/* ============================================ */}
              <section id="paresse-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La paresse (al-kasal) en islam : un fléau spirituel
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme arabe <strong>al-kasal</strong> (الكسل) désigne
                  la paresse, l&apos;inertie et le manque de volonté
                  d&apos;accomplir ce qui est bon et bénéfique. En islam, la
                  paresse n&apos;est pas un simple défaut de caractère : elle est
                  considérée comme un obstacle majeur sur le chemin de
                  l&apos;adoration d&apos;Allah et de l&apos;épanouissement
                  personnel. Le Prophète (paix et salut sur lui) la mentionnait
                  systématiquement dans ses invocations de protection, aux côtés
                  de la lâcheté, de l&apos;avarice et de la faiblesse.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran lui-même associe la paresse à l&apos;hypocrisie.
                  Allah décrit les hypocrites (munafiqun) en ces
                  termes : &laquo;&nbsp;Quand ils se lèvent pour la prière,
                  ils se lèvent avec paresse, cherchant à se montrer aux gens,
                  et ils n&apos;invoquent Allah que très peu&nbsp;&raquo;
                  (Coran, 4:142). Ce verset est un avertissement sévère : la
                  paresse dans l&apos;adoration est un signe d&apos;hypocrisie,
                  car le croyant sincère trouve dans la prière une source
                  d&apos;énergie et de réconfort, non un fardeau.
                </p>

                <HadithCard
                  arabic="اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ"
                  text="Seigneur, je cherche refuge auprès de Toi contre le souci et la tristesse, contre la faiblesse et la paresse, contre l'avarice et la lâcheté, contre le fardeau des dettes et la domination des hommes."
                  source="Rapporté par al-Bukhari (6369)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation complète révèle que le Prophète (paix et
                  salut sur lui) considérait la paresse comme un mal aussi
                  redoutable que la tristesse, l&apos;endettement ou la
                  domination d&apos;autrui. Elle n&apos;est pas un état
                  anodin mais une véritable maladie du coeur qui, si elle
                  n&apos;est pas combattue, peut conduire à la négligence de
                  la prière, à l&apos;abandon du Coran et à une vie
                  dépourvue de sens et d&apos;accomplissement.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Al-kasal affecte l&apos;adoration :</strong>{" "}
                      la paresse éloigne le musulman de la prière, du jeûne,
                      de la lecture du Coran et de toutes les bonnes oeuvres
                      qui rapprochent d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un signe d&apos;éloignement spirituel :</strong>{" "}
                      les savants enseignent que lorsque le coeur est attaché
                      à Allah, le corps trouve naturellement l&apos;énergie
                      pour agir. La paresse chronique peut donc indiquer un
                      affaiblissement de la foi (iman).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Différence entre kasal et &apos;ajz :</strong>{" "}
                      al-kasal est le refus de faire malgré la capacité,
                      tandis qu&apos;al-&apos;ajz est l&apos;incapacité
                      réelle. Le Prophète cherchait refuge contre les deux,
                      car chacun empêche d&apos;avancer sur le chemin du
                      bien.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée illustrant la lutte contre la paresse par l'adoration en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua Allahumma inni a'udhu bika */}
              {/* ============================================ */}
              <section id="doua-ajz-kasal" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua &laquo;&nbsp;Allahumma inni a&apos;udhu bika min al-&apos;ajzi wal-kasal&nbsp;&raquo;
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Cette invocation est le pilier de la protection prophétique
                  contre la paresse. Le Prophète (paix et salut sur lui) la
                  récitait quotidiennement, montrant ainsi l&apos;importance
                  capitale de demander l&apos;aide d&apos;Allah pour surmonter
                  l&apos;inertie et la faiblesse. Elle fait partie des
                  invocations les plus authentiques et les plus fréquemment
                  rapportées dans les recueils de hadiths.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu bika min al-&apos;ajzi wal-kasal
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge auprès de Toi contre la faiblesse et la paresse&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6369) et Muslim (2706)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants ont longuement commenté cette invocation. Ibn
                  al-Qayyim explique que la faiblesse (al-&apos;ajz) et la
                  paresse (al-kasal) sont les deux causes principales de
                  l&apos;échec dans ce monde et dans l&apos;au-delà.
                  L&apos;être humain qui en est affligé ne peut accomplir ni
                  ses devoirs religieux ni ses responsabilités mondaines.
                  Al-&apos;ajz paralyse le corps, tandis qu&apos;al-kasal
                  paralyse la volonté. Ensemble, ils constituent un obstacle
                  insurmontable que seule l&apos;aide divine peut lever.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La version complète de cette doua inclut d&apos;autres maux
                  dont le Prophète (paix et salut sur lui) demandait la
                  protection : le souci (al-hamm), la tristesse (al-hazan),
                  l&apos;avarice (al-bukhl), la lâcheté (al-jubn), le poids
                  des dettes (dala&apos; ad-dayn) et la domination des
                  hommes (ghalabat ar-rijal). Chacun de ces maux est lié aux
                  autres : la paresse engendre le souci, le souci mène à la
                  tristesse, et la tristesse renforce la paresse dans un
                  cercle vicieux que cette doua cherche précisément à briser.
                </p>

                <HadithCard
                  arabic="المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف وفي كل خير"
                  text="Le croyant fort est meilleur et plus aimé d'Allah que le croyant faible, et en chacun il y a du bien."
                  source="Rapporté par Muslim (2664)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith célèbre, rapporté par Muslim, illustre parfaitement
                  pourquoi le Prophète (paix et salut sur lui) combattait la
                  paresse avec tant de détermination. La force dont il est
                  question ici englobe la force physique, la force de volonté
                  et la force de la foi. Le croyant fort est celui qui agit,
                  qui produit, qui s&apos;efforce dans l&apos;adoration et dans
                  la vie quotidienne. La paresse est l&apos;ennemi direct de
                  cette force, et c&apos;est pourquoi elle doit être combattue
                  par la doua, la discipline et l&apos;effort constant.
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
              {/* SECTION 3 : Chercher refuge */}
              {/* ============================================ */}
              <section id="refuge-paresse" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Chercher refuge auprès d&apos;Allah contre la paresse
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le concept d&apos;isti&apos;adha (demande de refuge) est
                  fondamental en islam. Lorsque le croyant dit
                  &laquo;&nbsp;a&apos;udhu billah&nbsp;&raquo; (je cherche
                  refuge auprès d&apos;Allah), il reconnaît sa propre faiblesse
                  face à un mal et place sa confiance totale en la protection
                  divine. Face à la paresse, cette démarche est
                  particulièrement puissante car elle brise l&apos;orgueil qui
                  empêche souvent de reconnaître son manque de motivation.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَالْجُبْنِ وَالْهَرَمِ وَالْبُخْلِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu bika min al-&apos;ajzi wal-kasali wal-jubni wal-harami wal-bukhl
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge auprès de Toi contre la faiblesse, la paresse, la lâcheté, la sénilité et l&apos;avarice&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (2823) et Muslim (2706)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette variante de la doua montre que la paresse s&apos;inscrit
                  dans un ensemble plus large de défauts qui paralysent le
                  croyant. La lâcheté (al-jubn) empêche d&apos;affronter les
                  difficultés, la sénilité (al-haram) représente la perte des
                  capacités, et l&apos;avarice (al-bukhl) empêche de donner et
                  de partager. Le Prophète (paix et salut sur lui) enseignait à
                  demander la protection contre tous ces maux simultanément,
                  car ils sont interconnectés et se renforcent mutuellement.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma a&apos;inni &apos;ala dhikrika wa shukrika wa husni &apos;ibadatik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, aide-moi à T&apos;évoquer, à Te remercier et à T&apos;adorer de la meilleure manière&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (1522), an-Nasa&apos;i (1303)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua, que le Prophète (paix et salut sur lui) enseigna
                  à Mu&apos;adh ibn Jabal en lui tenant la main, est un remède
                  direct contre la paresse dans l&apos;adoration. Elle demande
                  à Allah l&apos;aide nécessaire pour maintenir le dhikr
                  (évocation), la gratitude (shukr) et l&apos;excellence dans
                  l&apos;adoration (&apos;ibada). Lorsque le croyant se sent
                  incapable de se lever pour prier, de lire le Coran ou
                  d&apos;accomplir une bonne action, cette invocation est le
                  premier pas vers le réveil spirituel. Si vous traversez
                  également une période d&apos;angoisse, découvrez nos{" "}
                  <Link href="/doua-angoisse-stress-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas contre l&apos;angoisse et le stress</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas pour la motivation */}
              {/* ============================================ */}
              <section id="douas-motivation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas pour retrouver la motivation et l&apos;énergie
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des invocations de protection contre la paresse,
                  l&apos;islam offre de nombreuses douas qui insufflent
                  motivation, détermination et énergie au croyant. Ces
                  invocations, tirées du Coran et de la Sunna, sont des outils
                  spirituels puissants pour celui qui souhaite retrouver son
                  dynamisme et son enthousiasme dans l&apos;adoration comme
                  dans la vie quotidienne.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour demander la fermeté et la détermination
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation coranique est idéale pour celui qui sent sa
                  résolution faiblir et sa motivation s&apos;éteindre. Elle
                  demande à Allah de raffermir les pas et d&apos;accorder la
                  victoire sur les obstacles.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana afrigh &apos;alayna sabran wa thabbit aqdamana wansurna &apos;alal-qawmil-kafirin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, déverse sur nous la patience, affermis nos pas et accorde-nous la victoire&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:250)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour la facilité dans les affaires
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Parfois, la paresse naît de la difficulté perçue de la tâche.
                  Cette doua demande à Allah de rendre facile ce qui semble
                  impossible, une invocation particulièrement utile pour
                  surmonter la procrastination.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma la sahla illa ma ja&apos;altahu sahlan wa Anta taj&apos;alul-hazna idha shi&apos;ta sahla
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, rien n&apos;est facile sauf ce que Tu rends facile, et Tu rends le difficile facile si Tu le veux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Hibban (974), authentifié par al-Albani
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les invocations pour la motivation en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour la constance dans le bien
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La motivation n&apos;est utile que si elle est constante.
                  Cette invocation demande à Allah de maintenir le coeur
                  fermement attaché à Sa religion et à l&apos;obéissance,
                  même dans les moments de fatigue et de découragement.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ya Muqallibal-qulub thabbit qalbi &apos;ala dinik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Celui qui retourne les coeurs, affermis mon coeur sur Ta religion&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (2140), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) récitait fréquemment
                  cette doua, et lorsqu&apos;on lui demanda pourquoi il la
                  répétait si souvent alors qu&apos;il était le meilleur des
                  hommes, il expliqua que les coeurs des êtres humains se
                  trouvent entre deux doigts du Miséricordieux qui les
                  retourne comme Il le souhaite. Cette prise de conscience que
                  notre motivation et notre engagement dépendent
                  ultimement de la grâce d&apos;Allah nous pousse à
                  constamment Lui demander la fermeté. Pour d&apos;autres
                  invocations liées à la réussite, consultez notre article
                  sur la{" "}
                  <Link href="/doua-reussite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour la réussite en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Motivation par l'adoration */}
              {/* ============================================ */}
              <section id="motivation-adoration" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Retrouver la motivation par l&apos;adoration
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;un des enseignements les plus profonds de l&apos;islam
                  est que la véritable motivation ne vient pas de la volonté
                  humaine seule, mais de la connexion avec Allah. Les cinq
                  prières quotidiennes, la lecture du Coran, le dhikr et le
                  jeûne sont des actes d&apos;adoration qui rechargent le
                  coeur en énergie spirituelle et dissipent naturellement la
                  paresse et la procrastination.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) disait à Bilal :
                  &laquo;&nbsp;Ô Bilal, fais l&apos;appel à la prière, et
                  donne-nous le repos par elle&nbsp;&raquo; (Abu Dawud). Cette
                  parole révèle que la prière n&apos;était pas perçue comme une
                  contrainte supplémentaire mais comme une source de repos et
                  de revitalisation. Le croyant qui se sent paralysé par la
                  paresse trouvera dans la salat un remède puissant : le simple
                  fait de se lever, de faire les ablutions et de prier brise le
                  cycle de l&apos;inactivité.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La prière du Fajr : vaincre la paresse dès l&apos;aube
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Se lever pour la prière de l&apos;aube est le premier
                        combat contre la paresse. Le Prophète (paix et salut
                        sur lui) a enseigné que Shaytan noue trois noeuds sur
                        la nuque du dormeur, et que chaque noeud se dénoue
                        lorsque le croyant se réveille en mentionnant Allah,
                        fait ses ablutions et prie. Celui qui accomplit le
                        Fajr commence sa journée dans l&apos;énergie et la
                        bénédiction.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le dhikr : l&apos;énergie du coeur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;évocation d&apos;Allah (dhikr) est décrite dans
                        le Coran comme ce par quoi les coeurs se tranquillisent
                        (Coran, 13:28). Les adhkar du matin et du soir, la
                        lecture régulière du Coran et la répétition des
                        formules de louange revitalisent l&apos;âme et donnent
                        au croyant l&apos;élan nécessaire pour affronter ses
                        responsabilités.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le jeûne volontaire : discipliner le corps et l&apos;âme
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le jeûne surérogatoire (les lundis et jeudis, les
                        trois jours blancs de chaque mois) est un entraînement
                        à la discipline et à la maîtrise de soi. En
                        contrôlant ses désirs les plus fondamentaux, le
                        croyant développe une volonté qui se transpose
                        naturellement dans tous les domaines de sa vie.
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="إن الشيطان يعقد على قافية رأس أحدكم إذا هو نام ثلاث عقد يضرب كل عقدة عليك ليل طويل فارقد"
                  text="Shaytan noue trois noeuds à l'arrière de la tête de l'un d'entre vous lorsqu'il dort, en frappant sur chaque noeud : 'Tu as encore une longue nuit, alors dors.'"
                  source="Rapporté par al-Bukhari (1142) et Muslim (776)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith révèle que la paresse, particulièrement celle du
                  matin, est directement liée à l&apos;influence de Shaytan.
                  Chaque noeud est un murmure qui invite à rester au lit, à
                  remettre à plus tard, à procrastiner. Le remède prophétique
                  est clair : mentionner Allah au réveil, faire les ablutions
                  et prier. Ces trois actions successives dénouent les trois
                  noeuds et libèrent le croyant de l&apos;emprise de la
                  paresse. Celui qui les accomplit se réveille actif et
                  serein, tandis que celui qui les néglige se réveille l&apos;âme
                  lourde et l&apos;esprit troublé.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Tawakkul et effort */}
              {/* ============================================ */}
              <section id="tawakkul-effort" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Tawakkul et effort : l&apos;équilibre islamique contre la paresse
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;un des concepts les plus mal compris en islam est le
                  tawakkul (confiance en Allah). Certains croient à tort que
                  s&apos;en remettre à Allah dispense de fournir des efforts
                  personnels. Or, l&apos;islam enseigne exactement le
                  contraire : le véritable tawakkul consiste à fournir le
                  maximum d&apos;effort tout en sachant que le résultat
                  dépend ultimement d&apos;Allah. Cette compréhension est le
                  meilleur antidote contre la paresse déguisée en piété.
                </p>

                <HadithCard
                  arabic="اعقلها وتوكل"
                  text="Attache-la (ta chamelle) puis place ta confiance en Allah."
                  source="Rapporté par at-Tirmidhi (2517)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith concis résume toute la philosophie islamique de
                  l&apos;action. Un compagnon avait demandé au Prophète (paix
                  et salut sur lui) s&apos;il devait attacher sa chamelle ou
                  simplement s&apos;en remettre à Allah. La réponse du
                  Prophète est d&apos;une clarté limpide : fais d&apos;abord
                  ta part (attache la chamelle), puis remets le résultat à
                  Allah (tawakkul). Il n&apos;y a aucune place pour la
                  paresse dans cette équation.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le faux tawakkul (tawakul)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les savants distinguent le tawakkul authentique du
                      &laquo;&nbsp;tawakul&nbsp;&raquo; (sans prolongation),
                      qui est la paresse déguisée en piété. Celui qui
                      abandonne les moyens en prétextant la confiance en Allah
                      contredit la Sunna du Prophète qui était l&apos;homme le
                      plus actif et le plus travailleur de son époque.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le vrai tawakkul
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le véritable tawakkul libère de l&apos;anxiété liée aux
                      résultats et permet de se concentrer sur l&apos;effort.
                      Le croyant qui place sa confiance en Allah travaille
                      avec sérénité car il sait que, quel que soit le
                      résultat, Allah lui accordera ce qui est le mieux pour
                      lui dans ce monde et dans l&apos;au-delà.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Coran affirme : &laquo;&nbsp;L&apos;homme n&apos;obtient
                  que le fruit de ses efforts&nbsp;&raquo; (Coran, 53:39). Ce
                  verset est un rappel puissant : la récompense divine est
                  proportionnelle à l&apos;effort fourni. La paresse est donc
                  un double préjudice : elle nuit au croyant dans sa vie
                  terrestre en le privant de résultats concrets, et elle le
                  prive dans l&apos;au-delà de la récompense qu&apos;il
                  aurait obtenue s&apos;il avait agi. Pour approfondir les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;effort est une adoration :</strong>{" "}
                      travailler pour subvenir aux besoins de sa famille,
                      étudier pour acquérir la science et s&apos;entraîner
                      physiquement sont des actes récompensés par Allah
                      lorsqu&apos;ils sont accomplis avec la bonne intention.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le Prophète, modèle d&apos;activité :</strong>{" "}
                      le Prophète (paix et salut sur lui) participait aux
                      travaux collectifs, cousait ses propres vêtements,
                      aidait sa famille dans les tâches domestiques et ne
                      restait jamais inactif. Son exemple est le meilleur
                      remède contre la paresse.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Commencer par de petits actes :</strong>{" "}
                      le Prophète a enseigné que les actes les plus aimés
                      d&apos;Allah sont les plus constants, même s&apos;ils
                      sont peu nombreux (al-Bukhari). Commencer par de petites
                      actions régulières est plus efficace que de grandes
                      résolutions jamais tenues.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua contre l&apos;angoisse et le stress en islam"
                  description="Découvrez les invocations prophétiques pour apaiser l&apos;anxiété et retrouver la sérénité intérieure."
                  href="/doua-angoisse-stress-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour vaincre la paresse au quotidien
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam propose une approche holistique qui combine la
                  dimension spirituelle (douas, prière, dhikr) et la dimension
                  pratique (organisation, discipline, hygiène de vie) pour
                  vaincre la paresse. Voici les conseils tirés de la Sunna et
                  des enseignements des savants pour retrouver une vie active et
                  productive.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Se lever tôt et prier le Fajr
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a demandé la baraka
                      pour sa communauté dans les heures matinales. Se lever
                      pour le Fajr, réciter les adhkar du matin et commencer
                      sa journée par l&apos;adoration crée un élan qui porte
                      toute la journée. Le sommeil excessif est un piège
                      de Shaytan.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      S&apos;entourer de personnes actives
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a comparé le bon
                      compagnon au vendeur de musc. S&apos;entourer de
                      personnes motivées, pieuses et travailleuses est un
                      puissant stimulant. La paresse est contagieuse, mais
                      l&apos;énergie et la motivation le sont aussi.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Se rappeler la mort et le Jour Dernier
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) recommandait de
                      souvent se rappeler la mort, le &laquo;&nbsp;destructeur
                      des plaisirs&nbsp;&raquo;. Ce rappel brise
                      l&apos;illusion que le temps est infini et pousse le
                      croyant à agir avec urgence et détermination, avant
                      qu&apos;il ne soit trop tard.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Fixer des objectifs réalistes
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a enseigné la
                      modération dans l&apos;effort : &laquo;&nbsp;Chargez-vous
                      des oeuvres que vous pouvez supporter, car Allah ne se
                      lasse pas tant que vous ne vous lassez pas&nbsp;&raquo;
                      (al-Bukhari). Des objectifs progressifs et réalistes
                      évitent le découragement et maintiennent la constance.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En définitive, vaincre la paresse en islam est un combat
                  quotidien qui mobilise toutes les dimensions de l&apos;être :
                  le coeur par la doua et le dhikr, le corps par la prière et
                  le mouvement, l&apos;esprit par la science et la
                  planification, et l&apos;âme par la conscience de la mort et
                  de la rencontre avec Allah. Le croyant qui s&apos;arme de
                  ces outils prophétiques peut surmonter n&apos;importe quel
                  épisode de découragement et retrouver une vie pleine de sens,
                  d&apos;énergie et de proximité avec son Créateur.
                </p>
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
                    href="/doua-angoisse-stress-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre l&apos;angoisse et le stress
                  </Link>
                  <Link
                    href="/doua-reussite-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour la réussite
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/remede-angoisse-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remède contre l&apos;angoisse
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
