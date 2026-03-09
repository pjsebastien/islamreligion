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
    "Doua d\u2019entr\u00e9e \u00e0 la mosqu\u00e9e en islam : invocations authentiques en arabe",
  description:
    "D\u00e9couvrez la doua d\u2019entr\u00e9e et de sortie de la mosqu\u00e9e en islam : invocations authentiques en arabe avec phon\u00e9tique et traduction, adab du musulman, tahiyyat al-masjid et hadiths sur les mosqu\u00e9es.",
  openGraph: {
    title:
      "Doua d\u2019entr\u00e9e \u00e0 la mosqu\u00e9e en islam : invocations authentiques en arabe",
    description:
      "Les invocations authentiques pour entrer et sortir de la mosqu\u00e9e en islam : textes en arabe, phon\u00e9tique, traduction et hadiths proph\u00e9tiques.",
    url: "https://www.islamreligion.fr/doua-mosquee-islam",
    images: [
      {
        url: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-mosquee-islam",
  },
};

const tocItems = [
  { id: "doua-entree-mosquee", label: "Doua d\u2019entr\u00e9e \u00e0 la mosqu\u00e9e" },
  { id: "doua-sortie-mosquee", label: "Doua de sortie de la mosqu\u00e9e" },
  { id: "adab-entree-mosquee", label: "Adab d\u2019entr\u00e9e avec le pied droit" },
  { id: "tahiyyat-al-masjid", label: "La pri\u00e8re tahiyyat al-masjid" },
  { id: "douas-mosquee-completes", label: "Douas compl\u00e8tes en arabe" },
  { id: "merite-mosquee-islam", label: "M\u00e9rites de la mosqu\u00e9e en islam" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua d\u2019entr\u00e9e \u00e0 la mosqu\u00e9e en islam ?",
    answer:
      "La doua d&apos;entr\u00e9e \u00e0 la mosqu\u00e9e est : \u00ab Allahumma iftah li abwaba rahmatik \u00bb (\u00ab Seigneur, ouvre-moi les portes de Ta mis\u00e9ricorde \u00bb). Cette invocation est rapport\u00e9e par Muslim (713) d&apos;apr\u00e8s Abu Usayd. Le Proph\u00e8te (paix et salut sur lui) la r\u00e9citait chaque fois qu&apos;il entrait dans une mosqu\u00e9e.",
  },
  {
    question: "Quelle est la doua de sortie de la mosqu\u00e9e ?",
    answer:
      "La doua de sortie de la mosqu\u00e9e est : \u00ab Allahumma inni as&apos;aluka min fadlik \u00bb (\u00ab Seigneur, je Te demande de Ta gr\u00e2ce \u00bb). Cette invocation est rapport\u00e9e par Muslim (713). Le musulman demande la gr\u00e2ce d&apos;Allah en quittant la mosqu\u00e9e pour b\u00e9n\u00e9ficier de Ses bienfaits dans sa vie quotidienne.",
  },
  {
    question: "Avec quel pied doit-on entrer dans la mosqu\u00e9e ?",
    answer:
      "On entre dans la mosqu\u00e9e avec le pied droit, conform\u00e9ment \u00e0 la Sunna du Proph\u00e8te (paix et salut sur lui). Anas ibn Malik rapporte que le Proph\u00e8te aimait commencer par la droite en toute chose noble : se chausser, se peigner et entrer dans la mosqu\u00e9e (al-Bukhari et Muslim). En sortant, on avance le pied gauche en premier.",
  },
  {
    question: "Qu\u2019est-ce que tahiyyat al-masjid ?",
    answer:
      "Tahiyyat al-masjid (\u062a\u062d\u064a\u0629 \u0627\u0644\u0645\u0633\u062c\u062f) signifie litt\u00e9ralement \u00ab la salutation de la mosqu\u00e9e \u00bb. C&apos;est une pri\u00e8re de deux rak&apos;at que le musulman accomplit d\u00e8s son entr\u00e9e dans la mosqu\u00e9e, avant de s&apos;asseoir. Le Proph\u00e8te (paix et salut sur lui) a dit : \u00ab Lorsque l&apos;un d&apos;entre vous entre dans la mosqu\u00e9e, qu&apos;il ne s&apos;assoie pas avant d&apos;avoir pri\u00e9 deux rak&apos;at \u00bb (al-Bukhari et Muslim).",
  },
  {
    question: "Peut-on r\u00e9citer la doua de la mosqu\u00e9e en fran\u00e7ais ?",
    answer:
      "Les invocations d&apos;entr\u00e9e et de sortie de la mosqu\u00e9e sont des adh-kar (formules de rappel) qui se r\u00e9citent id\u00e9alement en arabe pour suivre la Sunna. Cependant, le musulman qui ne ma\u00eetrise pas encore l&apos;arabe peut les dire en fran\u00e7ais tout en apprenant progressivement les formulations arabes. L&apos;essentiel est de faire l&apos;invocation avec sinc\u00e9rit\u00e9 et pr\u00e9sence du c\u0153ur.",
  },
  {
    question: "Faut-il enlever ses chaussures avant d\u2019entrer dans la mosqu\u00e9e ?",
    answer:
      "Oui, il est obligatoire de retirer ses chaussures avant de fouler l&apos;espace de pri\u00e8re de la mosqu\u00e9e, par respect pour ce lieu sacr\u00e9. Cependant, dans certaines mosqu\u00e9es qui disposent d&apos;un vestibule, les chaussures sont retir\u00e9es dans cette zone pr\u00e9vue \u00e0 cet effet. Le Proph\u00e8te (paix et salut sur lui) priait parfois avec ses sandales lorsqu&apos;elles \u00e9taient propres (Abu Dawud).",
  },
  {
    question: "Quels sont les m\u00e9rites de se rendre \u00e0 la mosqu\u00e9e en islam ?",
    answer:
      "Les m\u00e9rites sont immenses. Le Proph\u00e8te (paix et salut sur lui) a dit que chaque pas vers la mosqu\u00e9e \u00e9l\u00e8ve le croyant d&apos;un degr\u00e9 et efface un p\u00e9ch\u00e9 (al-Bukhari et Muslim). Celui qui fr\u00e9quente assid\u00fbment la mosqu\u00e9e fait partie des sept cat\u00e9gories de personnes qui seront \u00e0 l&apos;ombre du Tr\u00f4ne d&apos;Allah le Jour du Jugement.",
  },
];

export default function DouaMosqueeIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-mosquee-islam/#article",
        headline:
          "Doua d\u2019entr\u00e9e \u00e0 la mosqu\u00e9e en islam : invocations authentiques en arabe",
        description:
          "D\u00e9couvrez la doua d\u2019entr\u00e9e et de sortie de la mosqu\u00e9e en islam : invocations authentiques en arabe, phon\u00e9tique, traduction et hadiths proph\u00e9tiques.",
        image: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        datePublished: "2026-03-25",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-mosquee-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-mosquee-islam/#breadcrumb",
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
            name: "Doua d\u2019entr\u00e9e \u00e0 la mosqu\u00e9e",
            item: "https://www.islamreligion.fr/doua-mosquee-islam",
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
          title="Doua d&apos;entr\u00e9e \u00e0 la mosqu\u00e9e en islam : invocations authentiques"
          subtitle="Les invocations proph\u00e9tiques pour entrer et sortir de la mosqu\u00e9e, avec textes en arabe, phon\u00e9tique et traduction fran\u00e7aise. Adab, tahiyyat al-masjid et m\u00e9rites."
          imageSrc="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
          imageAlt="Int\u00e9rieur d&apos;une mosqu\u00e9e avec arches, tapis et lumi\u00e8re naturelle illustrant les douas d&apos;entr\u00e9e"
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
                aria-label="Fil d&apos;Ariane"
              >
                <Link href="/" className="hover:text-primary">
                  Accueil
                </Link>
                <span className="mx-2">/</span>
                <Link href="/doua-islam" className="hover:text-primary">
                  Doua en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Doua d&apos;entr\u00e9e \u00e0 la mosqu\u00e9e</span>
              </nav>

              {/* R\u00e9sum\u00e9 rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En r\u00e9sum\u00e9
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La mosqu\u00e9e est la maison d&apos;Allah sur terre, et le
                  musulman est invit\u00e9 \u00e0 y entrer avec respect et
                  recueillement. Le Proph\u00e8te (paix et salut sur lui) a
                  enseign\u00e9 des douas sp\u00e9cifiques pour l&apos;entr\u00e9e et
                  la sortie de la mosqu\u00e9e, ainsi que des r\u00e8gles de
                  biens\u00e9ance (adab) comme entrer par le pied droit et accomplir
                  deux rak&apos;at de salutation (tahiyyat al-masjid). Ces
                  invocations permettent au croyant de solliciter la mis\u00e9ricorde
                  et la gr\u00e2ce d&apos;Allah \u00e0 chaque visite de Son lieu sacr\u00e9.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Doua d'entr\u00e9e \u00e0 la mosqu\u00e9e */}
              {/* ============================================ */}
              <section id="doua-entree-mosquee" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua d&apos;entr\u00e9e \u00e0 la mosqu\u00e9e en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Lorsque le musulman s&apos;appr\u00eate \u00e0 franchir le seuil
                  de la mosqu\u00e9e, il est recommand\u00e9 (mustahabb) de
                  prononcer une invocation sp\u00e9cifique rapport\u00e9e dans la
                  Sunna authentique. Cette doua mosqu\u00e9e constitue un acte
                  d&apos;adoration \u00e0 part enti\u00e8re qui permet au croyant
                  de solliciter la mis\u00e9ricorde divine d\u00e8s son arriv\u00e9e
                  dans la maison d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph\u00e8te (paix et salut sur lui) ne manquait jamais
                  de r\u00e9citer cette invocation, montrant ainsi l&apos;importance
                  qu&apos;il accordait \u00e0 ce rituel. La doua d&apos;entr\u00e9e
                  \u00e0 la mosqu\u00e9e est une mani\u00e8re de se pr\u00e9parer
                  spirituellement \u00e0 l&apos;adoration, de purifier son
                  intention et de se placer sous la protection et la
                  mis\u00e9ricorde d&apos;Allah avant m\u00eame de commencer la
                  pri\u00e8re. L&apos;imam an-Nawawi souligne que cette pratique
                  fait partie des sunan al-mu&apos;akkada (traditions fortement
                  recommand\u00e9es) que le musulman doit s&apos;efforcer de
                  pr\u00e9server.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0627\u0641\u0652\u062a\u064e\u062d\u0652 \u0644\u064a \u0623\u064e\u0628\u0652\u0648\u064e\u0627\u0628\u064e \u0631\u064e\u062d\u0652\u0645\u064e\u062a\u0650\u0643\u064e
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma iftah li abwaba rahmatik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, ouvre-moi les portes de Ta mis\u00e9ricorde&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Muslim (713)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est d&apos;une profondeur remarquable. En
                  demandant \u00e0 Allah d&apos;ouvrir les portes de Sa
                  mis\u00e9ricorde, le croyant reconna\u00eet que l&apos;acc\u00e8s
                  \u00e0 la mis\u00e9ricorde divine n&apos;est pas automatique :
                  c&apos;est un don d&apos;Allah qui n\u00e9cessite une demande
                  humble et sinc\u00e8re. La mosqu\u00e9e \u00e9tant le lieu par
                  excellence o\u00f9 descend la mis\u00e9ricorde, il est logique
                  de la solliciter d\u00e8s l&apos;entr\u00e9e.
                </p>

                <HadithCard
                  arabic="\u0625\u0650\u0630\u064e\u0627 \u062f\u064e\u062e\u064e\u0644\u064e \u0623\u064e\u062d\u064e\u062f\u064f\u0643\u064f\u0645\u064f \u0627\u0644\u0652\u0645\u064e\u0633\u0652\u062c\u0650\u062f\u064e \u0641\u064e\u0644\u0652\u064a\u064f\u0633\u064e\u0644\u0651\u0650\u0645\u0652 \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u0646\u0651\u064e\u0628\u0650\u064a\u0651\u0650 \u0635\u064e\u0644\u0651\u064e\u0649 \u0627\u0644\u0644\u0647\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0648\u064e\u0633\u064e\u0644\u0651\u064e\u0645\u064e \u062b\u064f\u0645\u0651\u064e \u0644\u0652\u064a\u064e\u0642\u064f\u0644\u0652: \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0627\u0641\u0652\u062a\u064e\u062d\u0652 \u0644\u064a \u0623\u064e\u0628\u0652\u0648\u064e\u0627\u0628\u064e \u0631\u064e\u062d\u0652\u0645\u064e\u062a\u0650\u0643\u064e"
                  text="Lorsque l&apos;un d&apos;entre vous entre dans la mosqu\u00e9e, qu&apos;il envoie la pri\u00e8re sur le Proph\u00e8te (paix et salut sur lui), puis qu&apos;il dise : \u00ab Seigneur, ouvre-moi les portes de Ta mis\u00e9ricorde \u00bb."
                  source="Rapport\u00e9 par Abu Dawud (465), authentifi\u00e9 par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith pr\u00e9cise un \u00e9l\u00e9ment important : avant
                  m\u00eame de r\u00e9citer la doua d&apos;entr\u00e9e, le musulman
                  doit envoyer la salutation sur le Proph\u00e8te (paix et salut
                  sur lui) en disant &laquo;&nbsp;Allahumma salli &apos;ala
                  Muhammad&nbsp;&raquo;. Cette combinaison de la salat &apos;ala
                  an-Nabi et de la doua d&apos;entr\u00e9e constitue le rituel
                  complet enseign\u00e9 par le Messager d&apos;Allah.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/salle-priere-mosquee-arches-lumiere-soleil.jpg"
                    alt="Salle de pri\u00e8re d&apos;une mosqu\u00e9e avec arches et lumi\u00e8re du soleil illustrant le recueillement"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua de sortie de la mosqu\u00e9e */}
              {/* ============================================ */}
              <section id="doua-sortie-mosquee" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de sortie de la mosqu\u00e9e
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  De m\u00eame que l&apos;entr\u00e9e dans la mosqu\u00e9e est
                  accompagn\u00e9e d&apos;une invocation sp\u00e9cifique, la sortie
                  poss\u00e8de \u00e9galement sa doua propre. Le Proph\u00e8te (paix
                  et salut sur lui) a enseign\u00e9 aux musulmans de demander la
                  gr\u00e2ce d&apos;Allah (fadl) en quittant Sa maison, car le
                  croyant qui sort de la mosqu\u00e9e retourne dans le monde et a
                  besoin de la g\u00e9n\u00e9rosit\u00e9 divine pour affronter les
                  d\u00e9fis du quotidien.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0625\u0650\u0646\u0651\u064a \u0623\u064e\u0633\u0652\u0623\u064e\u0644\u064f\u0643\u064e \u0645\u0650\u0646\u0652 \u0641\u064e\u0636\u0652\u0644\u0650\u0643\u064e
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma inni as&apos;aluka min fadlik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande de Ta gr\u00e2ce&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Muslim (713)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sagesse de cette diff\u00e9rence entre les deux invocations
                  est profonde. En entrant dans la mosqu\u00e9e, le musulman
                  demande la <strong>mis\u00e9ricorde</strong> (rahma), car
                  c&apos;est dans ce lieu sacr\u00e9 qu&apos;il va adorer Allah,
                  prier et se rapprocher de Lui. En sortant, il demande la
                  <strong> gr\u00e2ce</strong> (fadl), car il retourne dans la vie
                  mondaine o\u00f9 il a besoin de la subsistance, de la
                  protection et des bienfaits d&apos;Allah pour mener une vie
                  conforme \u00e0 Sa volont\u00e9.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent \u00e9galement que la mosqu\u00e9e est
                  le lieu de la mis\u00e9ricorde par excellence, tandis que le
                  march\u00e9 et le monde ext\u00e9rieur sont les lieux o\u00f9
                  l&apos;on cherche la subsistance et la gr\u00e2ce d&apos;Allah.
                  Ainsi, chaque invocation correspond parfaitement au contexte
                  dans lequel le croyant se trouve. Ibn al-Qayyim rappelle que
                  cette distinction montre la sagesse infinie de la
                  l\u00e9gislation islamique qui tient compte de chaque situation
                  du musulman dans sa journ\u00e9e.
                </p>

                <HadithCard
                  arabic="\u0648\u064e\u0625\u0650\u0630\u064e\u0627 \u062e\u064e\u0631\u064e\u062c\u064e \u0641\u064e\u0644\u0652\u064a\u064f\u0633\u064e\u0644\u0651\u0650\u0645\u0652 \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u0646\u0651\u064e\u0628\u0650\u064a\u0651\u0650 \u0635\u064e\u0644\u0651\u064e\u0649 \u0627\u0644\u0644\u0647\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0648\u064e\u0633\u064e\u0644\u0651\u064e\u0645\u064e \u062b\u064f\u0645\u0651\u064e \u0644\u0652\u064a\u064e\u0642\u064f\u0644\u0652: \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0625\u0650\u0646\u0651\u064a \u0623\u064e\u0633\u0652\u0623\u064e\u0644\u064f\u0643\u064e \u0645\u0650\u0646\u0652 \u0641\u064e\u0636\u0652\u0644\u0650\u0643\u064e"
                  text="Et lorsqu&apos;il sort, qu&apos;il envoie la pri\u00e8re sur le Proph\u00e8te (paix et salut sur lui), puis qu&apos;il dise : \u00ab Seigneur, je Te demande de Ta gr\u00e2ce \u00bb."
                  source="Rapport\u00e9 par Abu Dawud (465), authentifi\u00e9 par al-Albani"
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations proph\u00e9tiques dans leur langue originale. D\u00e9couvrez des formations adapt\u00e9es aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommand\u00e9es"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Adab d'entr\u00e9e avec le pied droit */}
              {/* ============================================ */}
              <section id="adab-entree-mosquee" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;adab d&apos;entr\u00e9e \u00e0 la mosqu\u00e9e : le pied droit et les r\u00e8gles de biens\u00e9ance
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam accorde une importance consid\u00e9rable aux r\u00e8gles
                  de biens\u00e9ance (adab) qui entourent chaque acte du musulman.
                  L&apos;entr\u00e9e dans la mosqu\u00e9e ne fait pas exception :
                  le Proph\u00e8te (paix et salut sur lui) a enseign\u00e9 un
                  ensemble de bonnes mani\u00e8res que le croyant doit observer
                  pour honorer la maison d&apos;Allah.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Entrer avec le pied droit
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Proph\u00e8te (paix et salut sur lui) aimait commencer
                        par la droite en toute chose noble. Anas ibn Malik
                        rapporte : &laquo;&nbsp;Le Proph\u00e8te aimait commencer
                        par la droite pour se chausser, se peigner, se purifier
                        et dans toutes ses affaires&nbsp;&raquo; (al-Bukhari et
                        Muslim). La mosqu\u00e9e \u00e9tant un lieu noble et b\u00e9ni,
                        on y entre par le pied droit en signe de respect.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Sortir avec le pied gauche
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        \u00c0 l&apos;inverse, en quittant la mosqu\u00e9e, le
                        musulman avance le pied gauche en premier. Cette
                        r\u00e8gle suit le principe g\u00e9n\u00e9ral de la Sunna :
                        la droite est r\u00e9serv\u00e9e aux choses nobles (manger,
                        saluer, entrer dans la mosqu\u00e9e) et la gauche aux
                        choses ordinaires ou moins nobles (entrer aux
                        toilettes, retirer ses chaussures, sortir de la mosqu\u00e9e).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        \u00catre en \u00e9tat de puret\u00e9 rituelle (wudu)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Bien que l&apos;entr\u00e9e dans la mosqu\u00e9e sans ablutions
                        soit permise, il est fortement recommand\u00e9 d&apos;\u00eatre
                        en \u00e9tat de wudu, en particulier si l&apos;on souhaite
                        accomplir tahiyyat al-masjid. Le Proph\u00e8te (paix et
                        salut sur lui) a enseign\u00e9 que les ablutions sont la
                        cl\u00e9 de la pri\u00e8re et la lumi\u00e8re du croyant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Soigner son apparence et \u00e9viter les mauvaises odeurs
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Proph\u00e8te (paix et salut sur lui) a interdit \u00e0
                        celui qui a mang\u00e9 de l&apos;ail ou de l&apos;oignon cru
                        de se rendre \u00e0 la mosqu\u00e9e (al-Bukhari et Muslim).
                        La mosqu\u00e9e est un lieu de rassemblement o\u00f9 le
                        respect des autres passe aussi par une bonne hygi\u00e8ne.
                        Le Coran enjoint : &laquo;&nbsp;Portez vos plus beaux
                        v\u00eatements dans chaque mosqu\u00e9e&nbsp;&raquo; (Coran,
                        7:31).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Dire le salam en entrant
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il est recommand\u00e9 de saluer les personnes pr\u00e9sentes
                        dans la mosqu\u00e9e par le salam. Certains savants
                        ajoutent que si la mosqu\u00e9e est vide, le croyant dit
                        &laquo;&nbsp;As-salamu &apos;alayna wa &apos;ala &apos;ibadillahis-salihin&nbsp;&raquo;
                        (Que la paix soit sur nous et sur les serviteurs pieux
                        d&apos;Allah).
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble de ces r\u00e8gles de biens\u00e9ance t\u00e9moigne
                  de la place centrale que la mosqu\u00e9e occupe dans la vie du
                  musulman. Chaque geste, du franchissement du seuil jusqu&apos;\u00e0
                  l&apos;installation pour la pri\u00e8re, est codifi\u00e9 par la
                  Sunna pour que le croyant vive cette exp\u00e9rience dans un \u00e9tat
                  de conscience spirituelle maximale. Ces adab ne sont pas de
                  simples formalit\u00e9s : ils pr\u00e9parent le c\u0153ur \u00e0
                  la rencontre avec Allah dans la pri\u00e8re.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Tahiyyat al-masjid */}
              {/* ============================================ */}
              <section id="tahiyyat-al-masjid" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Tahiyyat al-masjid : la pri\u00e8re de salutation de la mosqu\u00e9e
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les sunnan les plus importantes li\u00e9es \u00e0 la
                  fr\u00e9quentation de la mosqu\u00e9e figure tahiyyat al-masjid
                  (\u062a\u062d\u064a\u0629 \u0627\u0644\u0645\u0633\u062c\u062f), litt\u00e9ralement
                  &laquo;&nbsp;la salutation de la mosqu\u00e9e&nbsp;&raquo;. Il
                  s&apos;agit d&apos;une pri\u00e8re de deux rak&apos;at que le
                  musulman accomplit d\u00e8s son entr\u00e9e dans la mosqu\u00e9e,
                  avant de s&apos;asseoir.
                </p>

                <HadithCard
                  arabic="\u0625\u0650\u0630\u064e\u0627 \u062f\u064e\u062e\u064e\u0644\u064e \u0623\u064e\u062d\u064e\u062f\u064f\u0643\u064f\u0645\u064f \u0627\u0644\u0652\u0645\u064e\u0633\u0652\u062c\u0650\u062f\u064e \u0641\u064e\u0644\u0627 \u064a\u064e\u062c\u0652\u0644\u0650\u0633\u0652 \u062d\u064e\u062a\u0651\u064e\u0649 \u064a\u064f\u0635\u064e\u0644\u0651\u0650\u064a\u064e \u0631\u064e\u0643\u0652\u0639\u064e\u062a\u064e\u064a\u0652\u0646\u0650"
                  text="Lorsque l&apos;un d&apos;entre vous entre dans la mosqu\u00e9e, qu&apos;il ne s&apos;assoie pas avant d&apos;avoir pri\u00e9 deux rak&apos;at."
                  source="Rapport\u00e9 par al-Bukhari (1167) et Muslim (714)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants ont diverg\u00e9 quant au statut juridique de
                  tahiyyat al-masjid. La majorit\u00e9 des savants (jumhur),
                  dont les hanafites, les mal\u00e9kites et les hanbalites, la
                  consid\u00e8rent comme une sunna mu&apos;akkada (fortement
                  recommand\u00e9e). L&apos;imam ach-Chafi&apos;i et certains
                  savants dhahirites estiment qu&apos;elle est obligatoire (wajib),
                  s&apos;appuyant sur l&apos;ordre explicite contenu dans le hadith.
                  Quoi qu&apos;il en soit, tous s&apos;accordent sur le fait que
                  le musulman ne devrait pas la n\u00e9gliger.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Tahiyyat al-masjid se prie comme n&apos;importe quelle
                  pri\u00e8re surr\u00e9rogatoire : deux rak&apos;at avec
                  l&apos;intention de saluer la mosqu\u00e9e. Si le musulman
                  arrive au moment d&apos;une pri\u00e8re obligatoire, celle-ci
                  remplace tahiyyat al-masjid selon l&apos;avis de la majorit\u00e9
                  des savants. De m\u00eame, si l&apos;on entre dans la mosqu\u00e9e
                  pour la{" "}
                  <Link href="/doua-apres-priere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">pri\u00e8re et ses invocations</Link>,
                  la salat obligatoire englobe la salutation de la mosqu\u00e9e.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/arches-mosquee-moucharabieh-lumiere-doree.jpg"
                    alt="Arches de mosqu\u00e9e avec moucharabieh et lumi\u00e8re dor\u00e9e illustrant la pri\u00e8re tahiyyat al-masjid"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Quand la prier :</strong> d\u00e8s l&apos;entr\u00e9e
                      dans la mosqu\u00e9e, avant de s&apos;asseoir, m\u00eame si
                      l&apos;imam prononce le sermon du vendredi.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pendant les heures d\u00e9conseill\u00e9es :</strong>{" "}
                      les savants hanbalites et chafi&apos;ites autorisent
                      tahiyyat al-masjid m\u00eame pendant les heures o\u00f9 la
                      pri\u00e8re surr\u00e9rogatoire est habituellement
                      d\u00e9conseill\u00e9e, car elle a une cause pr\u00e9cise.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Intention :</strong> l&apos;intention dans le c\u0153ur
                      suffit, il n&apos;est pas n\u00e9cessaire de prononcer une
                      formule verbale d&apos;intention sp\u00e9cifique pour tahiyyat
                      al-masjid.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas compl\u00e8tes en arabe */}
              {/* ============================================ */}
              <section id="douas-mosquee-completes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas compl\u00e8tes li\u00e9es \u00e0 la mosqu\u00e9e en arabe, phon\u00e9tique et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voici l&apos;ensemble des invocations authentiques li\u00e9es \u00e0
                  la fr\u00e9quentation de la mosqu\u00e9e, regroup\u00e9es pour
                  faciliter leur m\u00e9morisation et leur r\u00e9citation
                  quotidienne. Chaque doua est pr\u00e9sent\u00e9e avec son texte
                  arabe, sa phon\u00e9tique et sa traduction en fran\u00e7ais.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua d&apos;entr\u00e9e (version compl\u00e8te)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La version compl\u00e8te de la doua d&apos;entr\u00e9e inclut
                  la formule &laquo;&nbsp;Bismillah&nbsp;&raquo;, la salat sur le
                  Proph\u00e8te et la demande de mis\u00e9ricorde. C&apos;est la
                  formulation la plus compl\u00e8te enseign\u00e9e par les savants.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0648\u064e\u0627\u0644\u0635\u0651\u064e\u0644\u0627\u064e\u0629\u064f \u0648\u064e\u0627\u0644\u0633\u0651\u064e\u0644\u0627\u064e\u0645\u064f \u0639\u064e\u0644\u064e\u0649 \u0631\u064e\u0633\u064f\u0648\u0644\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650\u060c \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0627\u0641\u0652\u062a\u064e\u062d\u0652 \u0644\u064a \u0623\u064e\u0628\u0652\u0648\u064e\u0627\u0628\u064e \u0631\u064e\u062d\u0652\u0645\u064e\u062a\u0650\u0643\u064e
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Bismillah, was-salatu was-salamu &apos;ala Rasulillah, Allahumma iftah li abwaba rahmatik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, que la pri\u00e8re et le salut soient sur le Messager d&apos;Allah. Seigneur, ouvre-moi les portes de Ta mis\u00e9ricorde&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Muslim (713) et Abu Dawud (465)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de sortie (version compl\u00e8te)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  En sortant de la mosqu\u00e9e, le musulman r\u00e9cite cette
                  invocation compl\u00e8te qui combine le nom d&apos;Allah, la
                  salat sur le Proph\u00e8te et la demande de gr\u00e2ce divine.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0648\u064e\u0627\u0644\u0635\u0651\u064e\u0644\u0627\u064e\u0629\u064f \u0648\u064e\u0627\u0644\u0633\u0651\u064e\u0644\u0627\u064e\u0645\u064f \u0639\u064e\u0644\u064e\u0649 \u0631\u064e\u0633\u064f\u0648\u0644\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650\u060c \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0625\u0650\u0646\u0651\u064a \u0623\u064e\u0633\u0652\u0623\u064e\u0644\u064f\u0643\u064e \u0645\u0650\u0646\u0652 \u0641\u064e\u0636\u0652\u0644\u0650\u0643\u064e
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Bismillah, was-salatu was-salamu &apos;ala Rasulillah, Allahumma inni as&apos;aluka min fadlik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, que la pri\u00e8re et le salut soient sur le Messager d&apos;Allah. Seigneur, je Te demande de Ta gr\u00e2ce&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Muslim (713) et Abu Dawud (465)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua de protection contre Shaytan
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Proph\u00e8te (paix et salut sur lui) a \u00e9galement
                  enseign\u00e9 une invocation pour demander la protection contre
                  le diable maudit en entrant dans la mosqu\u00e9e. Cette doua
                  permet au croyant de pr\u00e9server son c\u0153ur de toute
                  distraction durant l&apos;adoration.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0623\u064e\u0639\u064f\u0648\u0630\u064f \u0628\u0650\u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0652\u0639\u064e\u0638\u0650\u064a\u0645\u0650 \u0648\u064e\u0628\u0650\u0648\u064e\u062c\u0652\u0647\u0650\u0647\u0650 \u0627\u0644\u0652\u0643\u064e\u0631\u0650\u064a\u0645\u0650 \u0648\u064e\u0633\u064f\u0644\u0652\u0637\u064e\u0627\u0646\u0650\u0647\u0650 \u0627\u0644\u0652\u0642\u064e\u062f\u0650\u064a\u0645\u0650 \u0645\u0650\u0646\u064e \u0627\u0644\u0634\u0651\u064e\u064a\u0652\u0637\u064e\u0627\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062c\u0650\u064a\u0645\u0650
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> A&apos;udhu billahil-&apos;adhim, wa bi wajhihil-karim, wa sultanihil-qadim, minash-shaytanir-rajim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge aupr\u00e8s d&apos;Allah le Tout-Puissant, par Sa noble Face et Son autorit\u00e9 \u00e9ternelle, contre le diable maudit&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Abu Dawud (466), authentifi\u00e9 par al-Albani
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua pour demander la lumi\u00e8re
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Ibn &apos;Abbas rapporte que le Proph\u00e8te (paix et salut
                  sur lui) r\u00e9citait cette invocation en se rendant \u00e0
                  la mosqu\u00e9e pour la pri\u00e8re de la nuit (qiyam al-layl).
                  Elle peut \u00e9galement \u00eatre r\u00e9cit\u00e9e en marchant
                  vers la mosqu\u00e9e.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0627\u062c\u0652\u0639\u064e\u0644\u0652 \u0641\u0650\u064a \u0642\u064e\u0644\u0652\u0628\u0650\u064a \u0646\u064f\u0648\u0631\u064b\u0627 \u0648\u064e\u0641\u0650\u064a \u0644\u0650\u0633\u064e\u0627\u0646\u0650\u064a \u0646\u064f\u0648\u0631\u064b\u0627 \u0648\u064e\u0641\u0650\u064a \u0628\u064e\u0635\u064e\u0631\u0650\u064a \u0646\u064f\u0648\u0631\u064b\u0627
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahummaj&apos;al fi qalbi nuran, wa fi lisani nuran, wa fi basari nuran
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, mets dans mon c\u0153ur une lumi\u00e8re, dans ma langue une lumi\u00e8re et dans ma vue une lumi\u00e8re&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par al-Bukhari (6316) et Muslim (763)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  5. Doua entre l&apos;adhan et l&apos;iqama
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Une fois dans la mosqu\u00e9e, le moment entre l&apos;adhan
                  (appel \u00e0 la pri\u00e8re) et l&apos;iqama (annonce du d\u00e9but
                  de la pri\u00e8re) est un moment b\u00e9ni o\u00f9 la doua
                  n&apos;est pas refus\u00e9e. Le Proph\u00e8te (paix et salut
                  sur lui) encourageait ses compagnons \u00e0 profiter de cet
                  instant pr\u00e9cieux.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u062f\u0651\u064f\u0639\u064e\u0627\u0621\u064f \u0644\u064e\u0627 \u064a\u064f\u0631\u064e\u062f\u0651\u064f \u0628\u064e\u064a\u0652\u0646\u064e \u0627\u0644\u0623\u064e\u0630\u064e\u0627\u0646\u0650 \u0648\u064e\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629\u0650
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Ad-du&apos;a&apos;u la yuraddu baynal-adhani wal-iqamah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;L&apos;invocation n&apos;est pas refus\u00e9e entre l&apos;adhan et l&apos;iqama&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par at-Tirmidhi (212), Abu Dawud (521)
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : M\u00e9rites de la mosqu\u00e9e */}
              {/* ============================================ */}
              <section id="merite-mosquee-islam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les m\u00e9rites de la mosqu\u00e9e en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La mosqu\u00e9e occupe une place fondamentale dans la vie du
                  musulman. Le Proph\u00e8te (paix et salut sur lui) a enseign\u00e9
                  que les mosqu\u00e9es sont les lieux les plus aim\u00e9s
                  d&apos;Allah sur terre, et que la fr\u00e9quentation assidue de
                  ces lieux sacr\u00e9s apporte des r\u00e9compenses immenses dans
                  cette vie et dans l&apos;au-del\u00e0.
                </p>

                <HadithCard
                  arabic="\u0623\u064e\u062d\u064e\u0628\u0651\u064f \u0627\u0644\u0652\u0628\u0650\u0644\u064e\u0627\u062f\u0650 \u0625\u0650\u0644\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0645\u064e\u0633\u064e\u0627\u062c\u0650\u062f\u064f\u0647\u064e\u0627\u060c \u0648\u064e\u0623\u064e\u0628\u0652\u063a\u064e\u0636\u064f \u0627\u0644\u0652\u0628\u0650\u0644\u064e\u0627\u062f\u0650 \u0625\u0650\u0644\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0623\u064e\u0633\u0652\u0648\u064e\u0627\u0642\u064f\u0647\u064e\u0627"
                  text="Les endroits les plus aim\u00e9s d&apos;Allah sont les mosqu\u00e9es, et les endroits les plus d\u00e9test\u00e9s d&apos;Allah sont les march\u00e9s."
                  source="Rapport\u00e9 par Muslim (671)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith \u00e9tablit une hi\u00e9rarchie claire des lieux :
                  la mosqu\u00e9e est le lieu le plus noble et le plus b\u00e9ni
                  sur terre. C&apos;est l\u00e0 que les anges se rassemblent, que
                  la mis\u00e9ricorde divine descend et que le croyant se
                  rapproche le plus de son Seigneur. Le Proph\u00e8te (paix et
                  salut sur lui) a \u00e9galement enseign\u00e9 que chaque pas
                  vers la mosqu\u00e9e \u00e9l\u00e8ve le croyant d&apos;un degr\u00e9
                  et efface un p\u00e9ch\u00e9.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      \u00c0 l&apos;ombre du Tr\u00f4ne d&apos;Allah
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Parmi les sept cat\u00e9gories de personnes qui seront \u00e0
                      l&apos;ombre du Tr\u00f4ne d&apos;Allah le Jour du Jugement
                      figure &laquo;&nbsp;un homme dont le c\u0153ur est attach\u00e9
                      aux mosqu\u00e9es&nbsp;&raquo; (al-Bukhari et Muslim). Cette
                      r\u00e9compense immense montre l&apos;importance de
                      l&apos;attachement du croyant \u00e0 la mosqu\u00e9e.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      R\u00e9compense de chaque pas
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Proph\u00e8te (paix et salut sur lui) a dit que celui
                      qui se rend \u00e0 la mosqu\u00e9e, \u00e0 chaque pas
                      qu&apos;il fait, Allah lui \u00e9l\u00e8ve un degr\u00e9 et lui
                      efface un p\u00e9ch\u00e9 (al-Bukhari et Muslim). Plus la
                      mosqu\u00e9e est \u00e9loign\u00e9e, plus la r\u00e9compense
                      est grande.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La pri\u00e8re en groupe (jama&apos;a)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La pri\u00e8re accomplie en congr\u00e9gation \u00e0 la
                      mosqu\u00e9e est multipli\u00e9e par vingt-sept degr\u00e9s
                      par rapport \u00e0 la pri\u00e8re accomplie seul
                      (al-Bukhari et Muslim). C&apos;est un encouragement fort
                      \u00e0 fr\u00e9quenter r\u00e9guli\u00e8rement la mosqu\u00e9e
                      pour les cinq pri\u00e8res quotidiennes.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Annonce du Paradis
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Proph\u00e8te (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Celui qui se rend \u00e0 la mosqu\u00e9e le matin
                      ou le soir, Allah lui pr\u00e9pare une hospitalit\u00e9 au
                      Paradis chaque fois qu&apos;il s&apos;y rend le matin ou
                      le soir&nbsp;&raquo; (al-Bukhari et Muslim). Le{" "}
                      <Link href="/doua-vendredi-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">vendredi \u00e0 la mosqu\u00e9e</Link>{" "}
                      rev\u00eat une importance particuli\u00e8re.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces m\u00e9rites consid\u00e9rables doivent motiver le musulman
                  \u00e0 fr\u00e9quenter la mosqu\u00e9e le plus souvent possible
                  et \u00e0 ne jamais n\u00e9gliger les invocations d&apos;entr\u00e9e
                  et de sortie. Chaque visite \u00e0 la mosqu\u00e9e est une
                  occasion de gagner des r\u00e9compenses immenses, de se
                  rapprocher d&apos;Allah et de renforcer sa foi. Le musulman
                  qui conna\u00eet ces m\u00e9rites et les met en pratique
                  transforme chaque d\u00e9placement vers la mosqu\u00e9e en un
                  acte d&apos;adoration complet et r\u00e9compens\u00e9.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua apr\u00e8s la pri\u00e8re en islam"
                  description="D\u00e9couvrez les invocations authentiques \u00e0 r\u00e9citer apr\u00e8s chaque pri\u00e8re obligatoire pour compl\u00e9ter votre adoration."
                  href="/doua-apres-priere-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Ma\u00eetrisez la langue du Coran pour r\u00e9citer les douas avec compr\u00e9hension et profondeur spirituelle. D\u00e9couvrez nos formations en ligne adapt\u00e9es \u00e0 tous les niveaux."
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
                    href="/doua-apres-priere-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua apr\u00e8s la pri\u00e8re
                  </Link>
                  <Link
                    href="/doua-vendredi-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du vendredi
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages m\u00e8res */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le m\u00eame sujet
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
