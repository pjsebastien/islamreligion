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
    "Doua pour le mourant (fin de vie) en islam : invocations et talqin",
  description:
    "Doua fin de vie et mourant en islam : talqin (La ilaha illAllah), sourate Yasin, inna lillahi wa inna ilayhi raji'un, doua au moment de la mort et apr\u00e8s le d\u00e9c\u00e8s. Textes en arabe, phon\u00e9tique et traduction.",
  openGraph: {
    title:
      "Doua pour le mourant (fin de vie) en islam : invocations et talqin",
    description:
      "Les invocations authentiques pour le mourant en islam : talqin, sourate Yasin, doua au moment de la mort et apr\u00e8s le d\u00e9c\u00e8s. Arabe, phon\u00e9tique et traduction.",
    url: "https://www.islamreligion.fr/doua-fin-vie-mourant-islam",
    images: [
      {
        url: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-fin-vie-mourant-islam",
  },
};

const tocItems = [
  { id: "talqin-shahada", label: "Le talqin : souffler la shahada au mourant" },
  { id: "douas-mourant", label: "Douas pour le mourant en fin de vie" },
  { id: "sourate-yasin", label: "La lecture de sourate Yasin" },
  { id: "moment-mort", label: "Que dire au moment de la mort" },
  { id: "doua-apres-deces", label: "Doua apr\u00e8s le d\u00e9c\u00e8s" },
  { id: "adab-accompagnement", label: "Adab de l\u2019accompagnement du mourant" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question: "Quelle doua dire pour un mourant en islam ?",
    answer:
      "Parmi les principales douas pour un mourant : le talqin (lui souffler \u00ab La ilaha illAllah \u00bb), r\u00e9citer sourate Yasin \u00e0 son chevet, et invoquer : \u00ab Allahumma ighfir lahu warhamhu wa &apos;afihi wa &apos;fu &apos;anhu \u00bb (Seigneur, pardonne-lui, fais-lui mis\u00e9ricorde, accorde-lui la sant\u00e9 et le pardon). Le Proph\u00e8te (paix et salut sur lui) a enseign\u00e9 ces invocations pour accompagner le croyant dans ses derniers instants.",
  },
  {
    question: "Qu\u2019est-ce que le talqin en islam ?",
    answer:
      "Le talqin est le fait de souffler ou rappeler au mourant la formule \u00ab La ilaha illAllah \u00bb (il n&apos;y a de divinit\u00e9 qu&apos;Allah) afin que ces mots soient les derniers qu&apos;il prononce. Le Proph\u00e8te (paix et salut sur lui) a dit : \u00ab Soufflez \u00e0 vos mourants La ilaha illAllah \u00bb (Muslim). C&apos;est une sunna fortement recommand\u00e9e.",
  },
  {
    question: "Faut-il lire sourate Yasin au mourant ?",
    answer:
      "De nombreux savants recommandent la lecture de sourate Yasin aupr\u00e8s du mourant, en s&apos;appuyant sur le hadith : \u00ab Lisez Yasin \u00e0 vos morts \u00bb (Abu Dawud, Ibn Majah). Certains savants consid\u00e8rent ce hadith comme faible, mais la pratique reste tr\u00e8s r\u00e9pandue et accept\u00e9e dans les diff\u00e9rentes \u00e9coles juridiques comme un acte m\u00e9ritoire.",
  },
  {
    question: "Que dire quand quelqu\u2019un meurt en islam ?",
    answer:
      "Lorsqu&apos;on apprend le d\u00e9c\u00e8s d&apos;une personne, on prononce : \u00ab Inna lillahi wa inna ilayhi raji&apos;un \u00bb (\u00c0 Allah nous appartenons et \u00e0 Lui nous retournons). On peut y ajouter : \u00ab Allahumma ajirni fi musibati wa akhlif li khayran minha \u00bb (Seigneur, r\u00e9compense-moi dans mon \u00e9preuve et accorde-moi quelque chose de meilleur en \u00e9change).",
  },
  {
    question: "Quelle doua faire apr\u00e8s la mort d\u2019un proche ?",
    answer:
      "Apr\u00e8s le d\u00e9c\u00e8s, on invoque : \u00ab Allahumma ighfir lahu warhamhu wa &apos;afihi wa &apos;fu &apos;anhu, wa akrim nuzulahu wa wassi&apos; mudkhalahu \u00bb (Seigneur, pardonne-lui, fais-lui mis\u00e9ricorde, accorde-lui la sant\u00e9, le pardon, un noble accueil et \u00e9largis sa tombe). Cette doua est authentique et rapport\u00e9e par Muslim dans le cadre de la pri\u00e8re mortuaire.",
  },
  {
    question: "Peut-on faire la doua pour un mourant non musulman ?",
    answer:
      "Il n&apos;est pas permis d&apos;invoquer le pardon d&apos;Allah pour un non-musulman d\u00e9c\u00e9d\u00e9 dans la m\u00e9cr\u00e9ance, conform\u00e9ment au verset : \u00ab Il n&apos;appartient pas au Proph\u00e8te ni aux croyants de demander pardon pour les associateurs \u00bb (Coran, 9:113). En revanche, on peut invoquer pour sa guidance tant qu&apos;il est vivant, et on peut lui prodiguer des soins et de la compassion.",
  },
  {
    question: "Quelles sont les \u00e9tapes de l\u2019accompagnement du mourant en islam ?",
    answer:
      "Les \u00e9tapes sont : 1) Tourner le mourant vers la qibla si possible, 2) Pratiquer le talqin en lui soufflant La ilaha illAllah, 3) R\u00e9citer sourate Yasin et d&apos;autres invocations, 4) Faire preuve de douceur et ne pas pleurer bruyamment, 5) Apr\u00e8s le d\u00e9c\u00e8s, fermer ses yeux et invoquer pour lui, 6) Proc\u00e9der rapidement au lavage mortuaire (ghusl), \u00e0 la pri\u00e8re fun\u00e9raire et \u00e0 l&apos;enterrement.",
  },
  {
    question: "Peut-on faire la doua pour le mourant en fran\u00e7ais ?",
    answer:
      "Oui, la doua pour le mourant peut \u00eatre faite en fran\u00e7ais ou dans toute autre langue. Allah comprend toutes les langues et accepte l&apos;invocation sinc\u00e8re quelle qu&apos;en soit la forme. Cependant, il est recommand\u00e9 de conna\u00eetre les formulations arabes authentiques (talqin, doua de la pri\u00e8re mortuaire) car elles ont \u00e9t\u00e9 enseign\u00e9es par le Proph\u00e8te (paix et salut sur lui).",
  },
];

export default function DouaFinVieMourantIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-fin-vie-mourant-islam/#article",
        headline:
          "Doua pour le mourant (fin de vie) en islam : invocations et talqin",
        description:
          "Doua fin de vie et mourant en islam : talqin, sourate Yasin, inna lillahi wa inna ilayhi raji'un, doua au moment de la mort et apr\u00e8s le d\u00e9c\u00e8s.",
        image: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        datePublished: "2026-04-14",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-fin-vie-mourant-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-fin-vie-mourant-islam/#breadcrumb",
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
            name: "Doua pour le mourant (fin de vie)",
            item: "https://www.islamreligion.fr/doua-fin-vie-mourant-islam",
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
          title="Doua pour le mourant (fin de vie) en islam : invocations et talqin"
          subtitle="Les invocations authentiques pour accompagner le mourant en islam : talqin, sourate Yasin, doua au moment de la mort et apr\u00e8s le d\u00e9c\u00e8s. Textes en arabe, phon\u00e9tique et traduction."
          imageSrc="/images/doua-mains-rayons-motifs-islamiques.jpg"
          imageAlt="Mains lev\u00e9es en invocation doua pour le mourant en fin de vie avec motifs islamiques et rayons de lumi\u00e8re"
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
                <span className="text-foreground">Doua pour le mourant (fin de vie)</span>
              </nav>

              {/* R\u00e9sum\u00e9 rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En r\u00e9sum\u00e9
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;islam accorde une importance capitale aux derniers instants
                  de la vie. Le Proph\u00e8te (paix et salut sur lui) a enseign\u00e9
                  des invocations sp\u00e9cifiques pour accompagner le mourant :
                  le talqin (souffler La ilaha illAllah), la r\u00e9citation de
                  sourate Yasin, et des douas pour demander \u00e0 Allah le pardon
                  et la mis\u00e9ricorde. Apr\u00e8s le d\u00e9c\u00e8s, la formule
                  &laquo;&nbsp;Inna lillahi wa inna ilayhi raji&apos;un&nbsp;&raquo;
                  et la doua &laquo;&nbsp;Allahumma ighfir lahu warhamhu&nbsp;&raquo;
                  sont les paroles proph\u00e9tiques \u00e0 conna\u00eetre
                  imp\u00e9rativement.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le talqin */}
              {/* ============================================ */}
              <section id="talqin-shahada" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le talqin : souffler La ilaha illAllah au mourant
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>talqin</strong> est l&apos;une des pratiques les plus
                  importantes de l&apos;accompagnement du mourant en islam. Il
                  consiste \u00e0 rappeler doucement au mourant la profession de
                  foi &laquo;&nbsp;La ilaha illAllah&nbsp;&raquo; (il n&apos;y a
                  de divinit\u00e9 qu&apos;Allah), afin que ces mots b\u00e9nis
                  soient les derniers \u00e0 \u00eatre prononc\u00e9s avant la
                  rencontre avec le Cr\u00e9ateur.
                </p>

                <HadithCard
                  arabic="\u0644\u0642\u0651\u0650\u0646\u0648\u0627 \u0645\u0648\u062a\u0627\u0643\u0645 \u0644\u0627 \u0625\u0644\u0647 \u0625\u0644\u0627 \u0627\u0644\u0644\u0647"
                  text="Soufflez \u00e0 vos mourants La ilaha illAllah."
                  source="Rapport\u00e9 par Muslim (916)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith authentique \u00e9tablit le fondement du talqin. Le
                  verbe &laquo;&nbsp;laqqinu&nbsp;&raquo; signifie
                  &laquo;&nbsp;soufflez&nbsp;&raquo; ou
                  &laquo;&nbsp;inspirez&nbsp;&raquo;, ce qui implique une d\u00e9marche
                  douce et bienveillante. Il ne s&apos;agit pas de forcer le
                  mourant \u00e0 prononcer la shahada, mais de la lui rappeler
                  avec tendresse afin qu&apos;il la r\u00e9p\u00e8te de lui-m\u00eame
                  s&apos;il en est capable. Les savants soulignent qu&apos;il ne
                  faut pas insister au point de g\u00eaner ou brusquer la personne
                  en fin de vie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;importance de cette pratique est confirm\u00e9e par un
                  autre hadith du Proph\u00e8te (paix et salut sur lui) qui
                  \u00e9nonce :
                </p>

                <HadithCard
                  arabic="\u0645\u0646 \u0643\u0627\u0646 \u0622\u062e\u0631 \u0643\u0644\u0627\u0645\u0647 \u0644\u0627 \u0625\u0644\u0647 \u0625\u0644\u0627 \u0627\u0644\u0644\u0647 \u062f\u062e\u0644 \u0627\u0644\u062c\u0646\u0629"
                  text="Celui dont les derni\u00e8res paroles sont La ilaha illAllah entrera au Paradis."
                  source="Rapport\u00e9 par Abu Dawud (3116), authentifi\u00e9 par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette promesse proph\u00e9tique illustre l&apos;\u00e9norme
                  enjeu du talqin : aider le mourant \u00e0 sceller sa vie
                  terrestre par l&apos;attestation de l&apos;unicit\u00e9 divine,
                  ce qui constitue la clef du Paradis. Les savants de toutes les
                  \u00e9coles juridiques (hanafite, malikite, shafi&apos;ite et
                  hanbalite) s&apos;accordent sur le caract\u00e8re fortement
                  recommand\u00e9 (mustahabb) de cette pratique. Le talqin se
                  fait en s&apos;asseyant pr\u00e8s du mourant, en r\u00e9citant
                  doucement la formule, sans lui demander directement de la
                  r\u00e9p\u00e9ter pour ne pas l&apos;oppresser dans un moment
                  aussi d\u00e9licat.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Douceur obligatoire :</strong> le talqin doit \u00eatre
                      r\u00e9alis\u00e9 avec bienveillance, sans crier ni forcer
                      le mourant \u00e0 parler.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Responsabilit\u00e9 collective :</strong> c&apos;est
                      un devoir communautaire (fard kifaya) de veiller \u00e0 ce
                      que le mourant soit accompagn\u00e9 spirituellement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Orientation vers la qibla :</strong> les savants
                      recommandent \u00e9galement de tourner le mourant vers la
                      direction de la Mecque, couch\u00e9 sur le c\u00f4t\u00e9
                      droit si possible.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en pri\u00e8re dans une mosqu\u00e9e illustrant le recueillement et l\u2019invocation pour le mourant en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Douas pour le mourant */}
              {/* ============================================ */}
              <section id="douas-mourant" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas authentiques pour le mourant en fin de vie
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Outre le talqin, l&apos;islam enseigne plusieurs invocations
                  \u00e0 r\u00e9citer au chevet du mourant pour lui apporter
                  r\u00e9confort et b\u00e9n\u00e9diction. Ces douas, tir\u00e9es
                  de la Sunna proph\u00e9tique, visent \u00e0 demander \u00e0 Allah
                  la facilit\u00e9, le pardon et la mis\u00e9ricorde pour celui
                  qui s&apos;appr\u00eate \u00e0 quitter ce monde.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour demander la facilit\u00e9 au mourant
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Proph\u00e8te (paix et salut sur lui) enseignait de demander
                  \u00e0 Allah de faciliter l&apos;agonie du mourant et de lui
                  accorder une sortie douce de ce monde. Cette invocation est
                  particuli\u00e8rement importante car l&apos;agonie (sakarat
                  al-mawt) est un moment d&apos;\u00e9preuve intense.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u0647\u0645\u0651 \u0623\u0639\u0650\u0646\u0652\u0647 \u0639\u0644\u0649 \u0633\u0643\u0631\u0627\u062a\u0650 \u0627\u0644\u0645\u0648\u062a
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma a&apos;inhu &apos;ala sakaratil-mawt
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, aide-le \u00e0 traverser les affres de la mort&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Invocation des pieux pr\u00e9d\u00e9cesseurs (salaf)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour le pardon et la mis\u00e9ricorde
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation compl\u00e8te est recommand\u00e9e lorsqu&apos;on
                  se tient au chevet du mourant. Elle englobe toutes les formes
                  de bien que l&apos;on peut souhaiter \u00e0 une personne en fin
                  de vie.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u0647\u0645\u0651 \u0627\u063a\u0641\u0631 \u0644\u0647 \u0648\u0627\u0631\u062d\u0645\u0647 \u0648\u0639\u0627\u0641\u0647 \u0648\u0627\u0639\u0641 \u0639\u0646\u0647
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma ighfir lahu warhamhu wa &apos;afihi wa &apos;fu &apos;anhu
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, pardonne-lui, fais-lui mis\u00e9ricorde, accorde-lui la sant\u00e9 et le pardon&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Muslim (963)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua d&apos;Umm Salama au moment de la mort de son \u00e9poux
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsque Abu Salama (qu&apos;Allah l&apos;agr\u00e9e) rendit
                  l&apos;\u00e2me, le Proph\u00e8te (paix et salut sur lui) ferma
                  ses yeux et prononc\u00e7a une invocation qui nous enseigne
                  l&apos;attitude \u00e0 adopter en pr\u00e9sence du d\u00e9funt.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u0647\u0645\u0651 \u0627\u063a\u0641\u0631 \u0644\u0623\u0628\u064a \u0633\u0644\u0645\u0629 \u0648\u0627\u0631\u0641\u0639 \u062f\u0631\u062c\u062a\u0647 \u0641\u064a \u0627\u0644\u0645\u0647\u062f\u064a\u0651\u064a\u0646 \u0648\u0627\u062e\u0644\u0641\u0647 \u0641\u064a \u0639\u0642\u0628\u0647 \u0641\u064a \u0627\u0644\u063a\u0627\u0628\u0631\u064a\u0646 \u0648\u0627\u063a\u0641\u0631 \u0644\u0646\u0627 \u0648\u0644\u0647 \u064a\u0627 \u0631\u0628\u0651 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0646 \u0648\u0627\u0641\u0633\u062d \u0644\u0647 \u0641\u064a \u0642\u0628\u0631\u0647 \u0648\u0646\u0648\u0651\u0631 \u0644\u0647 \u0641\u064a\u0647
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma ighfir li Abi Salama warfa&apos; darajatahu fil-mahdiyyina wakhlufhu fi &apos;aqibihi fil-ghabirina waghfir lana wa lahu ya Rabbal-&apos;alamin wafsah lahu fi qabrihi wa nawwir lahu fihi
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, pardonne \u00e0 Abu Salama, \u00e9l\u00e8ve son rang parmi les bien-guid\u00e9s, sois son successeur aupr\u00e8s de ceux qu&apos;il laisse, pardonne-nous ainsi qu&apos;\u00e0 lui, Seigneur des mondes, \u00e9largis-lui sa tombe et illumine-la pour lui&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Muslim (920)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce hadith est d&apos;une richesse consid\u00e9rable car il
                  enseigne \u00e0 la fois le geste physique (fermer les yeux du
                  d\u00e9funt) et la parole spirituelle (\u00e9lever le rang,
                  \u00e9largir la tombe, illuminer). Il montre que le Proph\u00e8te
                  (paix et salut sur lui) ne se contentait pas de formules
                  g\u00e9n\u00e9rales, mais personnalisait ses invocations en
                  nommant le d\u00e9funt, ce qui est recommand\u00e9 pour tout
                  croyant qui accompagne un proche en fin de vie. Pour
                  d\u00e9couvrir l&apos;ensemble des{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations fun\u00e9raires dans leur langue originale. D\u00e9couvrez des formations adapt\u00e9es aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommand\u00e9es"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Sourate Yasin */}
              {/* ============================================ */}
              <section id="sourate-yasin" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La lecture de sourate Yasin aupr\u00e8s du mourant
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La r\u00e9citation de <strong>sourate Yasin</strong> au chevet
                  du mourant est une pratique tr\u00e8s r\u00e9pandue dans le
                  monde musulman. Consid\u00e9r\u00e9e comme le &laquo;&nbsp;coeur
                  du Coran&nbsp;&raquo;, cette sourate aborde les th\u00e8mes de
                  la r\u00e9surrection, de la toute-puissance divine et de la
                  r\u00e9tribution, offrant ainsi un r\u00e9confort spirituel
                  profond au mourant et \u00e0 ses proches.
                </p>

                <HadithCard
                  arabic="\u0627\u0642\u0631\u0623\u0648\u0627 \u064a\u0633 \u0639\u0644\u0649 \u0645\u0648\u062a\u0627\u0643\u0645"
                  text="Lisez Yasin \u00e0 vos morts (mourants)."
                  source="Rapport\u00e9 par Abu Dawud (3121) et Ibn Majah (1448)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants ont discut\u00e9 de l&apos;authenticit\u00e9 de ce
                  hadith. Certains, comme l&apos;imam an-Nawawi, le consid\u00e8rent
                  comme acceptable, tandis que d&apos;autres l&apos;estiment faible.
                  N\u00e9anmoins, la majorit\u00e9 des savants des quatre \u00e9coles
                  recommandent cette pratique, en s&apos;appuyant sur le principe
                  que les hadiths faibles peuvent \u00eatre utilis\u00e9s dans le
                  domaine des actes m\u00e9ritoires (fada&apos;il al-a&apos;mal)
                  sous certaines conditions.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;expression &laquo;&nbsp;vos morts&nbsp;&raquo; (mawtakum)
                  a fait l&apos;objet d&apos;une divergence d&apos;interpr\u00e9tation.
                  Pour la majorit\u00e9 des savants, elle d\u00e9signe ceux qui sont
                  en train de mourir (al-muhtadar), c&apos;est-\u00e0-dire les
                  personnes en agonie, et non les personnes d\u00e9j\u00e0
                  d\u00e9c\u00e9d\u00e9es. La sagesse derri\u00e8re cette lecture
                  est de rappeler au mourant les v\u00e9rit\u00e9s de la foi,
                  d&apos;apaiser son \u00e2me et de l&apos;aider \u00e0 quitter
                  ce monde en \u00e9tat de s\u00e9r\u00e9nit\u00e9.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les vertus de sourate Yasin sont consid\u00e9rables. Elle contient
                  l&apos;affirmation de l&apos;unicit\u00e9 divine, la mention
                  de la r\u00e9surrection, le r\u00e9cit des messagers et la
                  description du Paradis promis aux croyants. Autant de th\u00e8mes
                  qui renforcent la foi du mourant et lui rappellent la beaut\u00e9
                  de ce qui l&apos;attend aupr\u00e8s d&apos;Allah si sa vie fut
                  marqu\u00e9e par la pi\u00e9t\u00e9 et l&apos;ob\u00e9issance.
                  Pour approfondir la{" "}
                  <Link href="/doua-mort-defunt-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour le d\u00e9funt en islam</Link>,
                  d\u00e9couvrez notre article d\u00e9di\u00e9.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Que dire au moment de la mort */}
              {/* ============================================ */}
              <section id="moment-mort" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Que dire au moment de la mort : inna lillahi wa inna ilayhi raji&apos;un
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Lorsque la mort survient, l&apos;islam prescrit des paroles
                  pr\u00e9cises que le croyant doit prononcer. La formule la plus
                  connue est l&apos;istirja&apos; :
                  &laquo;&nbsp;<strong>Inna lillahi wa inna ilayhi
                  raji&apos;un</strong>&nbsp;&raquo;. Cette parole coranique exprime
                  la soumission totale \u00e0 la volont\u00e9 d&apos;Allah et la
                  certitude du retour vers Lui.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0625\u0650\u0646\u0651\u064e\u0627 \u0644\u0650\u0644\u0651\u064e\u0647\u0650 \u0648\u064e\u0625\u0650\u0646\u0651\u064e\u0627 \u0625\u0650\u0644\u064e\u064a\u0652\u0647\u0650 \u0631\u064e\u0627\u062c\u0650\u0639\u064f\u0648\u0646\u064e
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Inna lillahi wa inna ilayhi raji&apos;un
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;\u00c0 Allah nous appartenons et \u00e0 Lui nous retournons&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:156)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Allah a associ\u00e9 \u00e0 cette formule une promesse immense
                  dans le Coran : &laquo;&nbsp;Ceux-l\u00e0 re\u00e7oivent des
                  b\u00e9n\u00e9dictions de leur Seigneur ainsi que la
                  mis\u00e9ricorde, et ceux-l\u00e0 sont les bien-guid\u00e9s&nbsp;&raquo;
                  (Coran, 2:157). Le fait de prononcer cette formule avec
                  sinc\u00e9rit\u00e9 et soumission est donc un moyen d&apos;attirer
                  sur soi la b\u00e9n\u00e9diction et la mis\u00e9ricorde divines
                  au moment le plus \u00e9prouvant de la vie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph\u00e8te (paix et salut sur lui) a \u00e9galement
                  enseign\u00e9 une doua compl\u00e9mentaire \u00e0 r\u00e9citer
                  lors de l&apos;\u00e9preuve de la perte d&apos;un proche :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u0647\u0645\u0651 \u0623\u062c\u0631\u0646\u064a \u0641\u064a \u0645\u0635\u064a\u0628\u062a\u064a \u0648\u0623\u062e\u0644\u0641 \u0644\u064a \u062e\u064a\u0631\u0627\u064b \u0645\u0646\u0647\u0627
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma ajirni fi musibati wa akhlif li khayran minha
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, r\u00e9compense-moi dans mon \u00e9preuve et accorde-moi quelque chose de meilleur en \u00e9change&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Muslim (918)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  C&apos;est pr\u00e9cis\u00e9ment cette invocation que
                  prononc\u00e7a Umm Salama (qu&apos;Allah l&apos;agr\u00e9e)
                  lorsqu&apos;elle perdit son \u00e9poux Abu Salama. Elle se
                  demandait quel bien pourrait remplacer la perte de son mari
                  bien-aim\u00e9, et Allah lui accorda en \u00e9change le meilleur
                  des hommes : le Proph\u00e8te Muhammad (paix et salut sur lui)
                  lui-m\u00eame, qui l&apos;\u00e9pousa par la suite. Cet
                  \u00e9pisode extraordinaire montre la puissance de cette doua
                  et la g\u00e9n\u00e9rosit\u00e9 infinie d&apos;Allah envers
                  ceux qui se soumettent \u00e0 Son d\u00e9cret avec patience.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dor\u00e9e \u00e9voquant les versets sur la mort et le retour \u00e0 Allah"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua apr\u00e8s le d\u00e9c\u00e8s */}
              {/* ============================================ */}
              <section id="doua-apres-deces" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua apr\u00e8s le d\u00e9c\u00e8s : Allahumma ighfir lahu warhamhu
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Apr\u00e8s le d\u00e9c\u00e8s d&apos;un musulman, l&apos;invocation
                  en sa faveur est l&apos;un des actes les plus b\u00e9n\u00e9fiques
                  que l&apos;on puisse accomplir pour lui. Le d\u00e9funt ne peut
                  plus accomplir d&apos;oeuvres par lui-m\u00eame, mais la doua
                  des vivants continue de lui parvenir et de l&apos;\u00e9lever
                  aupr\u00e8s d&apos;Allah. La doua la plus compl\u00e8te est
                  celle enseign\u00e9e par le Proph\u00e8te (paix et salut sur
                  lui) dans le cadre de la pri\u00e8re mortuaire (salat al-janaza).
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0627\u063a\u0652\u0641\u0650\u0631\u0652 \u0644\u064e\u0647\u064f \u0648\u064e\u0627\u0631\u0652\u062d\u064e\u0645\u0652\u0647\u064f \u0648\u064e\u0639\u064e\u0627\u0641\u0650\u0647\u0650 \u0648\u064e\u0627\u0639\u0652\u0641\u064f \u0639\u064e\u0646\u0652\u0647\u064f \u0648\u064e\u0623\u064e\u0643\u0652\u0631\u0650\u0645\u0652 \u0646\u064f\u0632\u064f\u0644\u064e\u0647\u064f \u0648\u064e\u0648\u064e\u0633\u0651\u0650\u0639\u0652 \u0645\u064f\u062f\u0652\u062e\u064e\u0644\u064e\u0647\u064f \u0648\u064e\u0627\u063a\u0652\u0633\u0650\u0644\u0652\u0647\u064f \u0628\u0650\u0627\u0644\u0652\u0645\u064e\u0627\u0621\u0650 \u0648\u064e\u0627\u0644\u062b\u0651\u064e\u0644\u0652\u062c\u0650 \u0648\u064e\u0627\u0644\u0652\u0628\u064e\u0631\u064e\u062f\u0650
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma ighfir lahu warhamhu wa &apos;afihi wa &apos;fu &apos;anhu wa akrim nuzulahu wa wassi&apos; mudkhalahu waghsilhu bil-ma&apos;i wath-thalji wal-barad
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, pardonne-lui, fais-lui mis\u00e9ricorde, accorde-lui la sant\u00e9 et le pardon, honore son accueil, \u00e9largis l&apos;entr\u00e9e de sa tombe et lave-le avec l&apos;eau, la neige et la gr\u00eale&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Muslim (963)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua est la plus compl\u00e8te et la plus authentique
                  parmi les invocations fun\u00e9raires. Elle demande \u00e0 Allah
                  successivement le pardon (maghfira), la mis\u00e9ricorde (rahma),
                  la sant\u00e9 (&apos;afiya), le pardon (&apos;afw), un accueil
                  noble (ikram an-nuzul), un \u00e9largissement de la tombe (tawsi&apos;
                  al-mudkhal) et une purification symbolique par l&apos;eau, la
                  neige et la gr\u00eale. Chaque \u00e9l\u00e9ment de cette
                  invocation a une signification profonde et couvre un aspect
                  diff\u00e9rent du bien que l&apos;on souhaite au d\u00e9funt.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph\u00e8te (paix et salut sur lui) a \u00e9galement
                  enseign\u00e9 que trois \u0153uvres continuent de profiter au
                  d\u00e9funt apr\u00e8s sa mort : une aum\u00f4ne continue
                  (sadaqa jariya), une science utile dont les gens profitent, et
                  un enfant pieux qui invoque pour lui. La doua du fils ou de la
                  fille pour ses{" "}
                  <Link href="/doua-parents-decedes-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">parents d\u00e9c\u00e9d\u00e9s</Link>{" "}
                  est donc l&apos;un des actes les plus m\u00e9ritoires et les
                  plus b\u00e9n\u00e9fiques pour le d\u00e9funt.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Lors de la pri\u00e8re mortuaire :</strong> cette doua
                      est r\u00e9cit\u00e9e apr\u00e8s le troisi\u00e8me takbir de
                      la salat al-janaza.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Au cimeti\u00e8re :</strong> invoquer pour le d\u00e9funt
                      lors de la visite de sa tombe est une sunna recommand\u00e9e.
                      D\u00e9couvrez notre guide complet sur la{" "}
                      <Link href="/doua-cimetiere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua au cimeti\u00e8re en islam</Link>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>\u00c0 tout moment :</strong> la doua pour le d\u00e9funt
                      n&apos;est pas limit\u00e9e \u00e0 un temps ou un lieu
                      pr\u00e9cis. Le croyant peut invoquer pour ses proches
                      d\u00e9c\u00e9d\u00e9s \u00e0 tout moment de la journ\u00e9e
                      ou de la nuit.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Adab de l'accompagnement */}
              {/* ============================================ */}
              <section id="adab-accompagnement" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Adab de l&apos;accompagnement du mourant en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam ne se limite pas aux invocations verbales : il
                  enseigne un ensemble de bonnes mani\u00e8res (adab) et de
                  comportements \u00e0 adopter aupr\u00e8s du mourant et apr\u00e8s
                  son d\u00e9c\u00e8s. Ces adab t\u00e9moignent du respect que
                  l&apos;islam accorde \u00e0 l&apos;\u00eatre humain \u00e0 chaque
                  \u00e9tape de sa vie, y compris dans ses derniers instants.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Tourner le mourant vers la qibla
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les savants recommandent de coucher le mourant sur son
                        c\u00f4t\u00e9 droit, le visage orient\u00e9 vers la qibla
                        (direction de la Mecque). Si ce n&apos;est pas possible, on
                        peut le placer sur le dos avec les pieds en direction de la
                        qibla, de sorte que son visage y soit orient\u00e9 s&apos;il
                        l\u00e8ve la t\u00eate.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Faire preuve de patience et ne pas se lamenter
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Proph\u00e8te (paix et salut sur lui) a interdit les
                        lamentations bruyantes (niyaha) et les gestes excessifs
                        de d\u00e9sespoir comme se frapper le visage ou d\u00e9chirer
                        ses v\u00eatements. Les pleurs silencieux sont permis et
                        naturels, mais les cris de d\u00e9solation causent du tort
                        au d\u00e9funt selon plusieurs hadiths.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Fermer les yeux du d\u00e9funt
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Imm\u00e9diatement apr\u00e8s le d\u00e9c\u00e8s, il est
                        sunna de fermer les yeux du d\u00e9funt, comme l&apos;a
                        fait le Proph\u00e8te (paix et salut sur lui) avec Abu
                        Salama. On prononce alors l&apos;invocation :
                        &laquo;&nbsp;Bismillah, wa &apos;ala millati
                        RasulAllah&nbsp;&raquo; (Au nom d&apos;Allah, selon la
                        voie du Messager d&apos;Allah).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        S&apos;empresser de pr\u00e9parer le d\u00e9funt
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;islam recommande de proc\u00e9der rapidement au
                        lavage mortuaire (ghusl), \u00e0 l&apos;enveloppement dans
                        le linceul (kafan), \u00e0 la pri\u00e8re fun\u00e9raire
                        (salat al-janaza) et \u00e0 l&apos;enterrement. Le
                        Proph\u00e8te (paix et salut sur lui) a dit :
                        &laquo;&nbsp;H\u00e2tez-vous de pr\u00e9parer le
                        d\u00e9funt&nbsp;&raquo; (al-Bukhari et Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Dire du bien du d\u00e9funt
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Proph\u00e8te (paix et salut sur lui) a enseign\u00e9
                        que lorsque les gens font l&apos;\u00e9loge d&apos;un
                        d\u00e9funt, cela contribue \u00e0 lui obtenir le Paradis.
                        Il est donc recommand\u00e9 de mentionner ses qualit\u00e9s
                        et d&apos;\u00e9viter de parler de ses d\u00e9fauts, car
                        &laquo;&nbsp;ne dites de vos morts que du
                        bien&nbsp;&raquo; (an-Nasa&apos;i).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pr\u00e9parer de la nourriture pour la famille
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Proph\u00e8te (paix et salut sur lui) a ordonn\u00e9 de
                      pr\u00e9parer de la nourriture pour la famille du d\u00e9funt :
                      &laquo;&nbsp;Pr\u00e9parez de la nourriture pour la famille
                      de Ja&apos;far, car il leur est arriv\u00e9 ce qui les
                      occupe&nbsp;&raquo; (at-Tirmidhi). C&apos;est un acte de
                      solidarit\u00e9 tr\u00e8s m\u00e9ritoire.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pr\u00e9senter ses condol\u00e9ances
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les condol\u00e9ances (ta&apos;ziya) sont une sunna
                      recommand\u00e9e pendant trois jours. On y prononce des
                      paroles de r\u00e9confort et on invoque pour le d\u00e9funt
                      et sa famille. La formule classique est :
                      &laquo;&nbsp;Qu&apos;Allah agrandisse ta r\u00e9compense et
                      t&apos;accorde une belle patience&nbsp;&raquo;.
                    </p>
                  </div>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour la visite du cimeti\u00e8re en islam"
                  description="D\u00e9couvrez les invocations authentiques \u00e0 r\u00e9citer lors de la visite des tombes et les adab du cimeti\u00e8re."
                  href="/doua-cimetiere-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations fun\u00e9raires dans leur langue originale"
                description="Ma\u00eetrisez la langue du Coran pour r\u00e9citer les douas pour le mourant et le d\u00e9funt avec compr\u00e9hension et profondeur spirituelle. D\u00e9couvrez nos formations en ligne adapt\u00e9es \u00e0 tous les niveaux."
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
                    Doua pour le d\u00e9funt
                  </Link>
                  <Link
                    href="/doua-cimetiere-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua au cimeti\u00e8re
                  </Link>
                  <Link
                    href="/doua-parents-decedes-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour les parents d\u00e9c\u00e9d\u00e9s
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
