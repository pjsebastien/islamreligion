import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import ArticleCTA from "@/components/ArticleCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Hadiths sur l'amiti\u00e9 et la fr\u00e9quentation en islam : guide complet des enseignements proph\u00e9tiques",
  description:
    "D\u00e9couvrez les hadiths authentiques sur l\u2019amiti\u00e9 et la fr\u00e9quentation en islam : choix des compagnons, droits de l\u2019ami, amour en Allah, mauvaises fr\u00e9quentations. Texte arabe, traduction et explication d\u00e9taill\u00e9e.",
  openGraph: {
    title:
      "Hadiths sur l'amiti\u00e9 et la fr\u00e9quentation en islam : guide complet des enseignements proph\u00e9tiques",
    description:
      "Les hadiths authentiques sur l\u2019amiti\u00e9 en islam : choisir ses compagnons, droits de l\u2019ami, amour en Allah et mise en garde contre les mauvaises fr\u00e9quentations selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-amitie-frequentation-islam",
    images: [
      {
        url: "/images/famille-musulmane-islam-croissant-lune-valeurs.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-amitie-frequentation-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de l\u2019amiti\u00e9" },
  { id: "choix-compagnons", label: "Choisis tes compagnons" },
  { id: "droits-ami", label: "Les droits de l\u2019ami en islam" },
  { id: "amour-en-allah", label: "L\u2019amour en Allah" },
  { id: "mauvaises-frequentations", label: "Les mauvaises fr\u00e9quentations" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Le\u00e7ons pratiques" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur l\u2019amiti\u00e9 en islam ?",
    answer:
      "Les hadiths les plus importants sur l\u2019amiti\u00e9 incluent celui du parfumeur et du forgeron (Bukhari 5534, Muslim 2628), celui sur les sept cat\u00e9gories de personnes ombrag\u00e9es par Allah dont \u00ab deux hommes qui s\u2019aiment en Allah \u00bb (Bukhari 660, Muslim 1031), et celui sur le droit du musulman sur son fr\u00e8re (Bukhari 1240, Muslim 2162). Ces hadiths couvrent le choix des compagnons, la fraternit\u00e9 spirituelle et les droits mutuels.",
  },
  {
    question:
      "Que dit le Proph\u00e8te Muhammad sur le choix des amis ?",
    answer:
      "Le Proph\u00e8te \u2018alayhi salatu wa salam a enseign\u00e9 que l\u2019homme suit la religion de son ami intime et qu\u2019il faut donc choisir avec soin celui que l\u2019on fr\u00e9quente (Abu Dawud 4833, Tirmidhi 2378). Il a \u00e9galement compar\u00e9 le bon et le mauvais compagnon au parfumeur et au forgeron (Bukhari 5534), montrant que la compagnie influence in\u00e9vitablement la personne.",
  },
  {
    question:
      "Quels sont les droits de l\u2019ami en islam selon les hadiths ?",
    answer:
      "Les hadiths \u00e9tablissent plusieurs droits de l\u2019ami : r\u00e9pondre au salam, visiter le malade, suivre le cort\u00e8ge fun\u00e8bre, accepter l\u2019invitation, souhaiter ses v\u0153ux \u00e0 celui qui \u00e9ternue et le conseiller sinc\u00e8rement (Bukhari 1240, Muslim 2162). Le Proph\u00e8te a aussi interdit de boycotter son fr\u00e8re plus de trois jours (Bukhari 6077, Muslim 2560).",
  },
  {
    question:
      "L\u2019amiti\u00e9 entre hommes et femmes est-elle permise en islam ?",
    answer:
      "Les savants distinguent la fr\u00e9quentation n\u00e9cessaire (cadre professionnel, familial) de la fr\u00e9quentation superflue. L\u2019amiti\u00e9 mixte intime est d\u00e9conseill\u00e9e par la majorit\u00e9 des savants en raison des hadiths sur la pr\u00e9servation de la pudeur et la pr\u00e9vention des situations de tentation (khalwa). Les relations de respect et de coop\u00e9ration dans un cadre l\u00e9gitime restent permises.",
  },
  {
    question:
      "Que signifie \u00ab s\u2019aimer en Allah \u00bb dans les hadiths ?",
    answer:
      "S\u2019aimer en Allah signifie que le lien d\u2019amiti\u00e9 est fond\u00e9 sur la foi commune et la recherche de l\u2019agr\u00e9ment d\u2019Allah, et non sur un int\u00e9r\u00eat mat\u00e9riel ou mondain. Le Proph\u00e8te a enseign\u00e9 que ceux qui s\u2019aiment en Allah seront ombrag\u00e9s par Son Tr\u00f4ne le Jour du Jugement (Bukhari 660) et qu\u2019Allah les aimera en retour (Muslim 2567).",
  },
  {
    question:
      "Les hadiths sur l\u2019amiti\u00e9 s\u2019appliquent-ils aux musulmans d\u2019aujourd\u2019hui ?",
    answer:
      "Oui, les enseignements proph\u00e9tiques sur l\u2019amiti\u00e9 sont intemporels et particuli\u00e8rement pertinents \u00e0 notre \u00e9poque de r\u00e9seaux sociaux. Le principe de choisir ses compagnons selon leur pi\u00e9t\u00e9, de pr\u00e9server les droits de l\u2019ami et de fuir les fr\u00e9quentations n\u00e9fastes s\u2019applique aussi bien en ligne qu\u2019en pr\u00e9sentiel.",
  },
];

export default function HadithAmitieFrequentationIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-amitie-frequentation-islam/#article",
        headline:
          "Hadiths sur l\u2019amiti\u00e9 et la fr\u00e9quentation en islam : guide complet des enseignements proph\u00e9tiques",
        description:
          "D\u00e9couvrez les hadiths authentiques sur l\u2019amiti\u00e9 et la fr\u00e9quentation en islam : choix des compagnons, droits de l\u2019ami, amour en Allah, mauvaises fr\u00e9quentations.",
        image: "/images/famille-musulmane-islam-croissant-lune-valeurs.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-amitie-frequentation-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-amitie-frequentation-islam/#breadcrumb",
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
            name: "Hadith du jour",
            item: "https://www.islamreligion.fr/hadith-du-jour",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Amiti\u00e9 et fr\u00e9quentation",
            item: "https://www.islamreligion.fr/hadith-amitie-frequentation-islam",
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
          title="Hadiths sur l&apos;amiti&eacute; et la fr&eacute;quentation en islam"
          subtitle="Les enseignements proph&eacute;tiques sur le choix des compagnons, les droits de l&apos;ami, l&apos;amour en Allah et la mise en garde contre les mauvaises fr&eacute;quentations selon la Sunna authentique."
          imageSrc="/images/famille-musulmane-islam-croissant-lune-valeurs.jpg"
          imageAlt="Hadiths sur l&apos;amiti&eacute; et la fr&eacute;quentation en islam, enseignements proph&eacute;tiques"
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
                <Link href="/hadith-du-jour" className="hover:text-primary">
                  Hadith du jour
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">
                  Amiti&eacute; et fr&eacute;quentation
                </span>
              </nav>

              {/* A retenir */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  &Agrave; retenir
                </p>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Proph&egrave;te &#xFE0E; a compar&eacute; le bon compagnon au parfumeur : sa pr&eacute;sence seule vous embellit et vous &eacute;l&egrave;ve spirituellement.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;homme suit la religion de son ami intime : le choix des fr&eacute;quentations d&eacute;termine la qualit&eacute; de la foi.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Ceux qui s&apos;aiment en Allah b&eacute;n&eacute;ficieront de l&apos;ombre du Tr&ocirc;ne divin le Jour du Jugement, une r&eacute;compense immense.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;islam &eacute;tablit des droits pr&eacute;cis entre amis : le salam, la visite du malade, le conseil sinc&egrave;re et l&apos;interdiction du boycott prolong&eacute;.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de l&apos;amiti&eacute; en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il convient de rappeler que le Coran accorde une importance consid&eacute;rable &agrave; la question de la fr&eacute;quentation et du choix des compagnons. Allah met en garde contre les mauvais amis qui d&eacute;tournent du droit chemin, tout en valorisant la fraternit&eacute; entre croyants. Plusieurs versets posent les fondements sur lesquels s&apos;appuient ensuite les hadiths du Proph&egrave;te &#xFE0E;.
                </p>

                <HadithCard
                  arabic="&#x0627;&#x0644;&#x0623;&#x062E;&#x0650;&#x0644;&#x0627;&#x0621;&#x064F; &#x064A;&#x064E;&#x0648;&#x0645;&#x064E;&#x0626;&#x0650;&#x0630;&#x064D; &#x0628;&#x064E;&#x0639;&#x0652;&#x0636;&#x064F;&#x0647;&#x064F;&#x0645;&#x0652; &#x0644;&#x0650;&#x0628;&#x064E;&#x0639;&#x0652;&#x0636;&#x064D; &#x0639;&#x064E;&#x062F;&#x064F;&#x0648;&#x0651;&#x064C; &#x0625;&#x0650;&#x0644;&#x0627; &#x0627;&#x0644;&#x0645;&#x064F;&#x062A;&#x0651;&#x064E;&#x0642;&#x0650;&#x064A;&#x0646;&#x064E;"
                  text="Les amis, ce jour-l&agrave;, seront ennemis les uns des autres, sauf les pieux."
                  source="Coran, sourate Az-Zukhruf (43:67)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est l&apos;un des plus puissants du Coran sur l&apos;amiti&eacute;. Il r&eacute;v&egrave;le que toute amiti&eacute; qui n&apos;est pas fond&eacute;e sur la pi&eacute;t&eacute; (<em>taqwa</em>) se transformera en hostilit&eacute; le Jour du Jugement. Seule l&apos;amiti&eacute; enracin&eacute;e dans la crainte d&apos;Allah survivra &agrave; l&apos;&eacute;preuve de l&apos;au-del&agrave;. Les savants expliquent que ce verset est un avertissement adress&eacute; &agrave; quiconque choisit ses amis sur des crit&egrave;res purement mondains.
                </p>

                <HadithCard
                  arabic="&#x064A;&#x0627; &#x0648;&#x064E;&#x064A;&#x0652;&#x0644;&#x064E;&#x062A;&#x064E;&#x0649; &#x0644;&#x064E;&#x064A;&#x0652;&#x062A;&#x064E;&#x0646;&#x0650;&#x064A; &#x0644;&#x064E;&#x0645;&#x0652; &#x0623;&#x064E;&#x062A;&#x0651;&#x064E;&#x062E;&#x0650;&#x0630;&#x0652; &#x0641;&#x064F;&#x0644;&#x0627;&#x0646;&#x064B;&#x0627; &#x062E;&#x064E;&#x0644;&#x0650;&#x064A;&#x0644;&#x064B;&#x0627; &#x00B7; &#x0644;&#x064E;&#x0642;&#x064E;&#x062F;&#x0652; &#x0623;&#x064E;&#x0636;&#x064E;&#x0644;&#x0651;&#x064E;&#x0646;&#x0650;&#x064A; &#x0639;&#x064E;&#x0646;&#x0650; &#x0627;&#x0644;&#x0630;&#x0651;&#x0650;&#x0643;&#x0652;&#x0631;&#x0650; &#x0628;&#x064E;&#x0639;&#x0652;&#x062F;&#x064E; &#x0625;&#x0650;&#x0630;&#x0652; &#x062C;&#x0627;&#x0621;&#x064E;&#x0646;&#x0650;&#x064A;"
                  text="Malheur &agrave; moi ! H&eacute;las ! Si seulement je n&apos;avais pas pris untel pour ami intime ! Il m&apos;a &eacute;gar&eacute; du Rappel apr&egrave;s qu&apos;il me soit parvenu."
                  source="Coran, sourate Al-Furqan (25:28-29)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces versets d&eacute;crivent le regret d&eacute;chirant de celui qui a suivi de mauvais compagnons dans la vie d&apos;ici-bas. Le terme <em>khalil</em> (ami intime) d&eacute;signe le compagnon le plus proche, celui dont l&apos;influence est la plus profonde. Le Coran avertit que cette influence peut conduire &agrave; l&apos;&eacute;garement, m&ecirc;me apr&egrave;s avoir re&ccedil;u la guidance. C&apos;est sur cette base coranique que le Proph&egrave;te &#xFE0E; a &eacute;tabli ses enseignements d&eacute;taill&eacute;s sur le choix des amis et la fr&eacute;quentation.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Choix des compagnons */}
              {/* ============================== */}
              <section id="choix-compagnons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Choisis tes compagnons : le parfumeur et le forgeron
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Proph&egrave;te &#xFE0E; a utilis&eacute; des m&eacute;taphores saisissantes pour illustrer l&apos;impact de la fr&eacute;quentation sur la foi et le comportement du musulman. Les hadiths suivants constituent le fondement de la doctrine islamique sur le choix des compagnons. Le d&eacute;nominateur commun est clair : la compagnie fa&ccedil;onne l&apos;individu, pour le meilleur ou pour le pire.
                </p>

                <HadithBlock
                  number={1}
                  title="Le bon et le mauvais compagnon : le parfumeur et le forgeron"
                  narrator="Abu Musa Al-Ash&apos;ari"
                  arabic="&#x0645;&#x064E;&#x062B;&#x064E;&#x0644;&#x064F; &#x0627;&#x0644;&#x0652;&#x062C;&#x064E;&#x0644;&#x0650;&#x064A;&#x0633;&#x0650; &#x0627;&#x0644;&#x0635;&#x0651;&#x064E;&#x0627;&#x0644;&#x0650;&#x062D;&#x0650; &#x0648;&#x064E;&#x0627;&#x0644;&#x0652;&#x062C;&#x064E;&#x0644;&#x0650;&#x064A;&#x0633;&#x0650; &#x0627;&#x0644;&#x0633;&#x0651;&#x064E;&#x0648;&#x0652;&#x0621;&#x0650; &#x0643;&#x064E;&#x062D;&#x064E;&#x0627;&#x0645;&#x0650;&#x0644;&#x0650; &#x0627;&#x0644;&#x0652;&#x0645;&#x0650;&#x0633;&#x0652;&#x0643;&#x0650; &#x0648;&#x064E;&#x0646;&#x064E;&#x0627;&#x0641;&#x0650;&#x062E;&#x0650; &#x0627;&#x0644;&#x0652;&#x0643;&#x0650;&#x064A;&#x0631;&#x0650;&#x060C; &#x0641;&#x064E;&#x062D;&#x064E;&#x0627;&#x0645;&#x0650;&#x0644;&#x064F; &#x0627;&#x0644;&#x0652;&#x0645;&#x0650;&#x0633;&#x0652;&#x0643;&#x0650; &#x0625;&#x0650;&#x0645;&#x0651;&#x064E;&#x0627; &#x0623;&#x064E;&#x0646;&#x0652; &#x064A;&#x064F;&#x062D;&#x0652;&#x0630;&#x0650;&#x064A;&#x064E;&#x0643;&#x064E; &#x0648;&#x064E;&#x0625;&#x0650;&#x0645;&#x0651;&#x064E;&#x0627; &#x0623;&#x064E;&#x0646;&#x0652; &#x062A;&#x064E;&#x0628;&#x0652;&#x062A;&#x064E;&#x0627;&#x0639;&#x064E; &#x0645;&#x0650;&#x0646;&#x0652;&#x0647;&#x064F; &#x0648;&#x064E;&#x0625;&#x0650;&#x0645;&#x0651;&#x064E;&#x0627; &#x0623;&#x064E;&#x0646;&#x0652; &#x062A;&#x064E;&#x062C;&#x0650;&#x062F;&#x064E; &#x0645;&#x0650;&#x0646;&#x0652;&#x0647;&#x064F; &#x0631;&#x0650;&#x064A;&#x062D;&#x064B;&#x0627; &#x0637;&#x064E;&#x064A;&#x0651;&#x0650;&#x0628;&#x064E;&#x0629;&#x064B;&#x060C; &#x0648;&#x064E;&#x0646;&#x064E;&#x0627;&#x0641;&#x0650;&#x062E;&#x064F; &#x0627;&#x0644;&#x0652;&#x0643;&#x0650;&#x064A;&#x0631;&#x0650; &#x0625;&#x0650;&#x0645;&#x0651;&#x064E;&#x0627; &#x0623;&#x064E;&#x0646;&#x0652; &#x064A;&#x064E;&#x062D;&#x0652;&#x0631;&#x0650;&#x0642;&#x064E; &#x062B;&#x0650;&#x064A;&#x064E;&#x0627;&#x0628;&#x064E;&#x0643;&#x064E; &#x0648;&#x064E;&#x0625;&#x0650;&#x0645;&#x0651;&#x064E;&#x0627; &#x0623;&#x064E;&#x0646;&#x0652; &#x062A;&#x064E;&#x062C;&#x0650;&#x062F;&#x064E; &#x0631;&#x0650;&#x064A;&#x062D;&#x064B;&#x0627; &#x062E;&#x064E;&#x0628;&#x0650;&#x064A;&#x062B;&#x064E;&#x0629;&#x064B;"
                  translation="L&apos;exemple du bon compagnon et du mauvais compagnon est celui du porteur de musc (parfumeur) et du souffleur de forge. Le porteur de musc, soit il t&apos;en offre, soit tu lui en ach&egrave;tes, soit tu trouves aupr&egrave;s de lui une bonne odeur. Quant au souffleur de forge, soit il br&ucirc;le tes v&ecirc;tements, soit tu trouves aupr&egrave;s de lui une odeur nauseabonde."
                  source="Sahih Al-Bukhari, n&deg;5534 &mdash; Sahih Muslim, n&deg;2628"
                  grade="sahih"
                  explanation="Ce hadith est la r&eacute;f&eacute;rence absolue sur l&apos;amiti&eacute; en islam. Le Proph&egrave;te &#xFE0E; utilise une m&eacute;taphore concr&egrave;te pour montrer que la compagnie produit des effets in&eacute;vitables. Le parfumeur repr&eacute;sente l&apos;ami pieux : m&ecirc;me sans effort particulier, sa pr&eacute;sence vous parfume de bien. Le forgeron repr&eacute;sente le mauvais compagnon : m&ecirc;me sans intention de nuire, sa proximit&eacute; vous atteint n&eacute;gativement. Les savants en d&eacute;duisent que la fr&eacute;quentation des gens pieux est une cause de guidance, et celle des d&eacute;vi&eacute;s une cause d&apos;&eacute;garement."
                />

                <HadithBlock
                  number={2}
                  title="L&apos;homme suit la religion de son ami intime"
                  narrator="Abu Hurayra"
                  arabic="&#x0627;&#x0644;&#x0631;&#x0651;&#x064E;&#x062C;&#x064F;&#x0644;&#x064F; &#x0639;&#x064E;&#x0644;&#x064E;&#x0649; &#x062F;&#x0650;&#x064A;&#x0646;&#x0650; &#x062E;&#x064E;&#x0644;&#x0650;&#x064A;&#x0644;&#x0650;&#x0647;&#x0650;&#x060C; &#x0641;&#x064E;&#x0644;&#x0652;&#x064A;&#x064E;&#x0646;&#x0652;&#x0638;&#x064F;&#x0631;&#x0652; &#x0623;&#x064E;&#x062D;&#x064E;&#x062F;&#x064F;&#x0643;&#x064F;&#x0645;&#x0652; &#x0645;&#x064E;&#x0646;&#x0652; &#x064A;&#x064F;&#x062E;&#x064E;&#x0627;&#x0644;&#x0650;&#x0644;&#x0652;"
                  translation="L&apos;homme suit la religion de son ami intime. Que chacun d&apos;entre vous regarde donc qui il prend pour ami intime."
                  source="Sunan Abu Dawud, n&deg;4833 &mdash; Jami&apos; at-Tirmidhi, n&deg;2378"
                  grade="hasan"
                  explanation="Ce hadith est d&apos;une concision remarquable et d&apos;une port&eacute;e immense. Le terme <em>khalil</em> d&eacute;signe l&apos;ami le plus proche, celui avec qui l&apos;on partage ses pens&eacute;es et ses d&eacute;cisions. Le Proph&egrave;te &#xFE0E; affirme que l&apos;on finit par adopter la religion, les valeurs et le mode de vie de cet ami. L&apos;injonction &laquo; que chacun regarde &raquo; implique un examen conscient et r&eacute;gulier de son entourage. Les savants utilisent ce hadith pour encourager la fr&eacute;quentation des cercles de science et de pi&eacute;t&eacute;."
                />

                <HadithBlock
                  number={3}
                  title="Ne fr&eacute;quente que le croyant"
                  narrator="Abu Sa&apos;id Al-Khudri"
                  arabic="&#x0644;&#x0627; &#x062A;&#x064F;&#x0635;&#x064E;&#x0627;&#x062D;&#x0650;&#x0628;&#x0652; &#x0625;&#x0650;&#x0644;&#x0651;&#x064E;&#x0627; &#x0645;&#x064F;&#x0624;&#x0652;&#x0645;&#x0650;&#x0646;&#x064B;&#x0627;&#x060C; &#x0648;&#x064E;&#x0644;&#x0627; &#x064A;&#x064E;&#x0623;&#x0652;&#x0643;&#x064F;&#x0644;&#x0652; &#x0637;&#x064E;&#x0639;&#x064E;&#x0627;&#x0645;&#x064E;&#x0643;&#x064E; &#x0625;&#x0650;&#x0644;&#x0651;&#x064E;&#x0627; &#x062A;&#x064E;&#x0642;&#x0650;&#x064A;&#x0651;&#x064C;"
                  translation="Ne fr&eacute;quente que le croyant, et que ne mange ta nourriture qu&apos;une personne pieuse."
                  source="Sunan Abu Dawud, n&deg;4832 &mdash; Jami&apos; at-Tirmidhi, n&deg;2395"
                  grade="hasan"
                  explanation="Ce hadith &eacute;tablit deux recommandations li&eacute;es : le choix des amis et le choix des convives. Le fait de partager un repas est un acte de proximit&eacute; et de confiance en islam. Le Proph&egrave;te &#xFE0E; enseigne que cette proximit&eacute; doit &ecirc;tre r&eacute;serv&eacute;e aux personnes pieuses, non par exclusion, mais par souci de protection spirituelle. Les savants pr&eacute;cisent que cela ne signifie pas qu&apos;il est interdit de c&ocirc;toyer les non-musulmans, mais que l&apos;amiti&eacute; intime et la fr&eacute;quentation assidue doivent privil&eacute;gier les croyants."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths forment le socle de l&apos;enseignement proph&eacute;tique sur le choix des compagnons. Ils montrent que la fr&eacute;quentation n&apos;est pas un sujet anodin en islam : elle est li&eacute;e directement &agrave; la pr&eacute;servation de la foi. Pour approfondir la question du bon comportement avec autrui, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Droits de l'ami en islam     */}
              {/* ====================================== */}
              <section id="droits-ami" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les droits de l&apos;ami en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne se contente pas de recommander la bonne compagnie : il &eacute;tablit des droits concrets entre amis et fr&egrave;res en religion. Le Proph&egrave;te &#xFE0E; a d&eacute;taill&eacute; ces droits dans plusieurs hadiths, transformant l&apos;amiti&eacute; en un cadre de devoirs mutuels qui renforcent le tissu social de la communaut&eacute;.
                </p>

                <HadithBlock
                  number={4}
                  title="Les six droits du musulman sur son fr&egrave;re"
                  narrator="Abu Hurayra"
                  arabic="&#x062D;&#x064E;&#x0642;&#x0651;&#x064F; &#x0627;&#x0644;&#x0652;&#x0645;&#x064F;&#x0633;&#x0652;&#x0644;&#x0650;&#x0645;&#x0650; &#x0639;&#x064E;&#x0644;&#x064E;&#x0649; &#x0627;&#x0644;&#x0652;&#x0645;&#x064F;&#x0633;&#x0652;&#x0644;&#x0650;&#x0645;&#x0650; &#x0633;&#x0650;&#x062A;&#x0651;&#x064C;: &#x0625;&#x0650;&#x0630;&#x064E;&#x0627; &#x0644;&#x064E;&#x0642;&#x0650;&#x064A;&#x062A;&#x064E;&#x0647;&#x064F; &#x0641;&#x064E;&#x0633;&#x064E;&#x0644;&#x0651;&#x0650;&#x0645;&#x0652; &#x0639;&#x064E;&#x0644;&#x064E;&#x064A;&#x0652;&#x0647;&#x0650;&#x060C; &#x0648;&#x064E;&#x0625;&#x0650;&#x0630;&#x064E;&#x0627; &#x062F;&#x064E;&#x0639;&#x064E;&#x0627;&#x0643;&#x064E; &#x0641;&#x064E;&#x0623;&#x064E;&#x062C;&#x0650;&#x0628;&#x0652;&#x0647;&#x064F;&#x060C; &#x0648;&#x064E;&#x0625;&#x0650;&#x0630;&#x064E;&#x0627; &#x0627;&#x0633;&#x0652;&#x062A;&#x064E;&#x0646;&#x0652;&#x0635;&#x064E;&#x062D;&#x064E;&#x0643;&#x064E; &#x0641;&#x064E;&#x0627;&#x0646;&#x0652;&#x0635;&#x064E;&#x062D;&#x0652;&#x0647;&#x064F;&#x060C; &#x0648;&#x064E;&#x0625;&#x0650;&#x0630;&#x064E;&#x0627; &#x0639;&#x064E;&#x0637;&#x064E;&#x0633;&#x064E; &#x0641;&#x064E;&#x062D;&#x064E;&#x0645;&#x0650;&#x062F;&#x064E; &#x0627;&#x0644;&#x0644;&#x0651;&#x064E;&#x0647;&#x064E; &#x0641;&#x064E;&#x0634;&#x064E;&#x0645;&#x0651;&#x0650;&#x062A;&#x0652;&#x0647;&#x064F;&#x060C; &#x0648;&#x064E;&#x0625;&#x0650;&#x0630;&#x064E;&#x0627; &#x0645;&#x064E;&#x0631;&#x0650;&#x0636;&#x064E; &#x0641;&#x064E;&#x0639;&#x064F;&#x062F;&#x0652;&#x0647;&#x064F;&#x060C; &#x0648;&#x064E;&#x0625;&#x0650;&#x0630;&#x064E;&#x0627; &#x0645;&#x064E;&#x0627;&#x062A;&#x064E; &#x0641;&#x064E;&#x0627;&#x062A;&#x0651;&#x064E;&#x0628;&#x0650;&#x0639;&#x0652;&#x0647;&#x064F;"
                  translation="Le droit du musulman sur le musulman comporte six choses : quand tu le rencontres, salue-le ; quand il t&apos;invite, accepte son invitation ; quand il te demande conseil, conseille-le sinc&egrave;rement ; quand il &eacute;ternue et loue Allah, souhaite-lui la mis&eacute;ricorde ; quand il est malade, rends-lui visite ; et quand il meurt, suis son cort&egrave;ge fun&egrave;bre."
                  source="Sahih Al-Bukhari, n&deg;1240 &mdash; Sahih Muslim, n&deg;2162"
                  grade="sahih"
                  explanation="Ce hadith &eacute;tablit un cadre de droits concrets qui structurent la vie sociale du musulman. Le salam ouvre la relation, l&apos;invitation la renforce, le conseil sinc&egrave;re (<em>nasiha</em>) la purifie, le souhait apr&egrave;s l&apos;&eacute;ternuement l&apos;ancre dans le dhikr, la visite du malade la met &agrave; l&apos;&eacute;preuve et l&apos;accompagnement fun&eacute;raire la cl&ocirc;t dans la dignit&eacute;. Les savants soulignent que ces droits ne sont pas optionnels : certains sont des obligations collectives (<em>fard kifaya</em>), comme la visite du malade et le suivi du cort&egrave;ge."
                />

                <HadithBlock
                  number={5}
                  title="L&apos;interdiction de boycotter son fr&egrave;re plus de trois jours"
                  narrator="Abu Ayyub Al-Ansari"
                  arabic="&#x0644;&#x0627; &#x064A;&#x064E;&#x062D;&#x0650;&#x0644;&#x0651;&#x064F; &#x0644;&#x0650;&#x0645;&#x064F;&#x0633;&#x0652;&#x0644;&#x0650;&#x0645;&#x064D; &#x0623;&#x064E;&#x0646;&#x0652; &#x064A;&#x064E;&#x0647;&#x0652;&#x062C;&#x064F;&#x0631;&#x064E; &#x0623;&#x064E;&#x062E;&#x064E;&#x0627;&#x0647;&#x064F; &#x0641;&#x064E;&#x0648;&#x0652;&#x0642;&#x064E; &#x062B;&#x064E;&#x0644;&#x0627;&#x062B;&#x0650; &#x0644;&#x064E;&#x064A;&#x064E;&#x0627;&#x0644;&#x064D;&#x060C; &#x064A;&#x064E;&#x0644;&#x0652;&#x062A;&#x064E;&#x0642;&#x0650;&#x064A;&#x064E;&#x0627;&#x0646;&#x0650; &#x0641;&#x064E;&#x064A;&#x064F;&#x0639;&#x0652;&#x0631;&#x0650;&#x0636;&#x064F; &#x0647;&#x064E;&#x0630;&#x064E;&#x0627; &#x0648;&#x064E;&#x064A;&#x064F;&#x0639;&#x0652;&#x0631;&#x0650;&#x0636;&#x064F; &#x0647;&#x064E;&#x0630;&#x064E;&#x0627;&#x060C; &#x0648;&#x064E;&#x062E;&#x064E;&#x064A;&#x0652;&#x0631;&#x064F;&#x0647;&#x064F;&#x0645;&#x064E;&#x0627; &#x0627;&#x0644;&#x0651;&#x064E;&#x0630;&#x0650;&#x064A; &#x064A;&#x064E;&#x0628;&#x0652;&#x062F;&#x064E;&#x0623;&#x064F; &#x0628;&#x0650;&#x0627;&#x0644;&#x0633;&#x0651;&#x064E;&#x0644;&#x0627;&#x0645;&#x0650;"
                  translation="Il n&apos;est pas permis &agrave; un musulman de boycotter son fr&egrave;re plus de trois nuits. Ils se rencontrent et chacun se d&eacute;tourne de l&apos;autre. Le meilleur des deux est celui qui commence par le salut."
                  source="Sahih Al-Bukhari, n&deg;6077 &mdash; Sahih Muslim, n&deg;2560"
                  grade="sahih"
                  explanation="Ce hadith fixe une limite temporelle au boycott entre musulmans : trois jours maximum. Ce d&eacute;lai permet de calmer la col&egrave;re sans laisser la rancune s&apos;installer. Le Proph&egrave;te &#xFE0E; pr&eacute;cise que le meilleur des deux est celui qui fait le premier pas vers la r&eacute;conciliation par le salam. Les savants expliquent que ce hadith concerne les disputes personnelles, et non le boycott l&eacute;gitime pour une raison religieuse (comme l&apos;abandon d&apos;un p&eacute;ch&eacute; public), qui ob&eacute;it &agrave; d&apos;autres r&egrave;gles."
                />

                <HadithBlock
                  number={6}
                  title="Le conseil sinc&egrave;re : fondement de l&apos;amiti&eacute;"
                  narrator="Tamim Ad-Dari"
                  arabic="&#x0627;&#x0644;&#x062F;&#x0651;&#x0650;&#x064A;&#x0646;&#x064F; &#x0627;&#x0644;&#x0646;&#x0651;&#x064E;&#x0635;&#x0650;&#x064A;&#x062D;&#x064E;&#x0629;&#x064F;&#x060C; &#x0642;&#x064F;&#x0644;&#x0652;&#x0646;&#x064E;&#x0627;: &#x0644;&#x0650;&#x0645;&#x064E;&#x0646;&#x0652;&#x061F; &#x0642;&#x064E;&#x0627;&#x0644;&#x064E;: &#x0644;&#x0650;&#x0644;&#x0651;&#x064E;&#x0647;&#x0650; &#x0648;&#x064E;&#x0644;&#x0650;&#x0643;&#x0650;&#x062A;&#x064E;&#x0627;&#x0628;&#x0650;&#x0647;&#x0650; &#x0648;&#x064E;&#x0644;&#x0650;&#x0631;&#x064E;&#x0633;&#x064F;&#x0648;&#x0644;&#x0650;&#x0647;&#x0650; &#x0648;&#x064E;&#x0644;&#x0650;&#x0623;&#x064E;&#x0626;&#x0650;&#x0645;&#x0651;&#x064E;&#x0629;&#x0650; &#x0627;&#x0644;&#x0652;&#x0645;&#x064F;&#x0633;&#x0652;&#x0644;&#x0650;&#x0645;&#x0650;&#x064A;&#x0646;&#x064E; &#x0648;&#x064E;&#x0639;&#x064E;&#x0627;&#x0645;&#x0651;&#x064E;&#x062A;&#x0650;&#x0647;&#x0650;&#x0645;&#x0652;"
                  translation="La religion, c&apos;est le conseil sinc&egrave;re (nasiha). Nous avons dit : envers qui ? Il a r&eacute;pondu : envers Allah, envers Son Livre, envers Son Messager, envers les dirigeants des musulmans et envers l&apos;ensemble des musulmans."
                  source="Sahih Muslim, n&deg;55"
                  grade="sahih"
                  explanation="Ce hadith est consid&eacute;r&eacute; par les savants comme l&apos;un des piliers de l&apos;islam. L&apos;imam An-Nawawi l&apos;a class&eacute; parmi les hadiths fondamentaux. La <em>nasiha</em> envers les musulmans en g&eacute;n&eacute;ral signifie leur vouloir du bien, les guider vers ce qui les profite, les avertir de ce qui leur nuit et les aider dans leurs affaires. Appliqu&eacute; &agrave; l&apos;amiti&eacute;, ce hadith signifie que le v&eacute;ritable ami est celui qui conseille sinc&egrave;rement, m&ecirc;me lorsque la v&eacute;rit&eacute; d&eacute;range."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="&Eacute;tudiez les hadiths sur la fraternit&eacute;, le bon comportement et les relations sociales en islam avec des professeurs qualifi&eacute;s."
                href="/apprendre-science-religieuse-islam"
                linkText="D&eacute;couvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : L'amour en Allah     */}
              {/* ============================== */}
              <section id="amour-en-allah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;amour en Allah : le sommet de l&apos;amiti&eacute; en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam &eacute;l&egrave;ve l&apos;amiti&eacute; au rang d&apos;un acte d&apos;adoration lorsqu&apos;elle est fond&eacute;e sur l&apos;amour en Allah. Ce lien spirituel entre croyants d&eacute;passe les int&eacute;r&ecirc;ts mondains et constitue l&apos;une des causes de la r&eacute;compense divine le Jour du Jugement. Les hadiths suivants d&eacute;crivent la grandeur de cette fraternit&eacute; spirituelle.
                </p>

                <HadithBlock
                  number={7}
                  title="Les sept ombrag&eacute;s par Allah : ceux qui s&apos;aiment en Lui"
                  narrator="Abu Hurayra"
                  arabic="&#x0633;&#x064E;&#x0628;&#x0652;&#x0639;&#x064E;&#x0629;&#x064C; &#x064A;&#x064F;&#x0638;&#x0650;&#x0644;&#x0651;&#x064F;&#x0647;&#x064F;&#x0645;&#x064F; &#x0627;&#x0644;&#x0644;&#x0651;&#x064E;&#x0647;&#x064F; &#x0641;&#x0650;&#x064A; &#x0638;&#x0650;&#x0644;&#x0651;&#x0650;&#x0647;&#x0650; &#x064A;&#x064E;&#x0648;&#x0652;&#x0645;&#x064E; &#x0644;&#x0627; &#x0638;&#x0650;&#x0644;&#x0651;&#x064E; &#x0625;&#x0650;&#x0644;&#x0651;&#x064E;&#x0627; &#x0638;&#x0650;&#x0644;&#x0651;&#x064F;&#x0647;&#x064F;... &#x0648;&#x064E;&#x0631;&#x064E;&#x062C;&#x064F;&#x0644;&#x064E;&#x0627;&#x0646;&#x0650; &#x062A;&#x064E;&#x062D;&#x064E;&#x0627;&#x0628;&#x0651;&#x064E;&#x0627; &#x0641;&#x0650;&#x064A; &#x0627;&#x0644;&#x0644;&#x0651;&#x064E;&#x0647;&#x0650; &#x0627;&#x062C;&#x0652;&#x062A;&#x064E;&#x0645;&#x064E;&#x0639;&#x064E;&#x0627; &#x0639;&#x064E;&#x0644;&#x064E;&#x064A;&#x0652;&#x0647;&#x0650; &#x0648;&#x064E;&#x062A;&#x064E;&#x0641;&#x064E;&#x0631;&#x0651;&#x064E;&#x0642;&#x064E;&#x0627; &#x0639;&#x064E;&#x0644;&#x064E;&#x064A;&#x0652;&#x0647;&#x0650;"
                  translation="Sept personnes seront ombrag&eacute;es par Allah sous Son ombre le Jour o&ugrave; il n&apos;y aura d&apos;ombre que la Sienne... et deux hommes qui se sont aim&eacute;s en Allah, se sont r&eacute;unis pour Lui et se sont s&eacute;par&eacute;s sur cela."
                  source="Sahih Al-Bukhari, n&deg;660 &mdash; Sahih Muslim, n&deg;1031"
                  grade="sahih"
                  explanation="Ce hadith c&eacute;l&egrave;bre mentionne sept cat&eacute;gories de personnes qui b&eacute;n&eacute;ficieront de l&apos;ombre divine le Jour du Jugement, lorsque le soleil sera &agrave; un mile des cr&eacute;atures. Parmi elles, &laquo; deux hommes qui se sont aim&eacute;s en Allah &raquo;. La condition est double : ils se r&eacute;unissent pour Allah (leur amiti&eacute; est fond&eacute;e sur la foi) et se s&eacute;parent sur cela (leur amiti&eacute; reste pure jusqu&apos;&agrave; la fin). Ce hadith montre que l&apos;amiti&eacute; sinc&egrave;re en Allah est l&apos;une des meilleures &oelig;uvres que le croyant puisse accomplir."
                />

                <HadithBlock
                  number={8}
                  title="Allah aime ceux qui s&apos;aiment en Lui"
                  narrator="Abu Hurayra"
                  arabic="&#x0625;&#x0650;&#x0646;&#x0651;&#x064E; &#x0627;&#x0644;&#x0644;&#x0651;&#x064E;&#x0647;&#x064E; &#x064A;&#x064E;&#x0642;&#x064F;&#x0648;&#x0644;&#x064F; &#x064A;&#x064E;&#x0648;&#x0652;&#x0645;&#x064E; &#x0627;&#x0644;&#x0652;&#x0642;&#x0650;&#x064A;&#x064E;&#x0627;&#x0645;&#x064E;&#x0629;&#x0650;: &#x0623;&#x064E;&#x064A;&#x0652;&#x0646;&#x064E; &#x0627;&#x0644;&#x0652;&#x0645;&#x064F;&#x062A;&#x064E;&#x062D;&#x064E;&#x0627;&#x0628;&#x0651;&#x064F;&#x0648;&#x0646;&#x064E; &#x0628;&#x0650;&#x062C;&#x064E;&#x0644;&#x0627;&#x0644;&#x0650;&#x064A;&#x060C; &#x0627;&#x0644;&#x0652;&#x064A;&#x064E;&#x0648;&#x0652;&#x0645;&#x064E; &#x0623;&#x064F;&#x0638;&#x0650;&#x0644;&#x0651;&#x064F;&#x0647;&#x064F;&#x0645;&#x0652; &#x0641;&#x0650;&#x064A; &#x0638;&#x0650;&#x0644;&#x0651;&#x0650;&#x064A; &#x064A;&#x064E;&#x0648;&#x0652;&#x0645;&#x064E; &#x0644;&#x0627; &#x0638;&#x0650;&#x0644;&#x0651;&#x064E; &#x0625;&#x0650;&#x0644;&#x0651;&#x064E;&#x0627; &#x0638;&#x0650;&#x0644;&#x0651;&#x0650;&#x064A;"
                  translation="Allah dira le Jour de la R&eacute;surrection : O&ugrave; sont ceux qui s&apos;aimaient pour Ma majest&eacute; ? Aujourd&apos;hui, Je les ombrage sous Mon ombre, le Jour o&ugrave; il n&apos;y a d&apos;ombre que Mon ombre."
                  source="Sahih Muslim, n&deg;2566"
                  grade="sahih"
                  explanation="Ce hadith qudsi (parole divine rapport&eacute;e par le Proph&egrave;te &#xFE0E;) confirme la r&eacute;compense de ceux qui s&apos;aiment en Allah. L&apos;expression &laquo; pour Ma majest&eacute; &raquo; (<em>bi jalali</em>) souligne que cet amour est motiv&eacute; par la grandeur d&apos;Allah, non par un int&eacute;r&ecirc;t personnel. Le fait qu&apos;Allah Lui-m&ecirc;me les appellera et les honorera montre le rang &eacute;lev&eacute; de cette forme d&apos;amiti&eacute;. Les savants y voient la preuve que l&apos;amour en Allah fait partie des plus grandes causes de rapprochement avec le Cr&eacute;ateur."
                />

                <HadithBlock
                  number={9}
                  title="Informe ton fr&egrave;re que tu l&apos;aimes en Allah"
                  narrator="Al-Miqdam ibn Ma&apos;dikarib"
                  arabic="&#x0625;&#x0650;&#x0630;&#x064E;&#x0627; &#x0623;&#x064E;&#x062D;&#x064E;&#x0628;&#x0651;&#x064E; &#x0623;&#x064E;&#x062D;&#x064E;&#x062F;&#x064F;&#x0643;&#x064F;&#x0645;&#x0652; &#x0623;&#x064E;&#x062E;&#x064E;&#x0627;&#x0647;&#x064F; &#x0641;&#x064E;&#x0644;&#x0652;&#x064A;&#x064F;&#x0639;&#x0652;&#x0644;&#x0650;&#x0645;&#x0652;&#x0647;&#x064F; &#x0623;&#x064E;&#x0646;&#x0651;&#x064E;&#x0647;&#x064F; &#x064A;&#x064F;&#x062D;&#x0650;&#x0628;&#x0651;&#x064F;&#x0647;&#x064F;"
                  translation="Lorsque l&apos;un d&apos;entre vous aime son fr&egrave;re, qu&apos;il l&apos;informe qu&apos;il l&apos;aime."
                  source="Sunan Abu Dawud, n&deg;5124 &mdash; Jami&apos; at-Tirmidhi, n&deg;2392"
                  grade="sahih"
                  explanation="Ce hadith encourage l&apos;expression verbale de l&apos;amour fraternel en islam. Le Proph&egrave;te &#xFE0E; enseigne que l&apos;amour ne doit pas rester un sentiment int&eacute;rieur : il doit &ecirc;tre communiqu&eacute; pour renforcer le lien et r&eacute;pandre l&apos;affection. La formule consacr&eacute;e est : &laquo; <em>Uhibbuka fillah</em> &raquo; (Je t&apos;aime en Allah), &agrave; laquelle on r&eacute;pond : &laquo; <em>Ahabbaka-llahi-lladhi ahbabtani fihi</em> &raquo; (Qu&apos;Allah, pour qui tu m&apos;aimes, t&apos;aime &eacute;galement). Ce hadith t&eacute;moigne de la richesse &eacute;motionnelle de la Sunna."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Mauvaises freq.      */}
              {/* ============================== */}
              <section id="mauvaises-frequentations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les mauvaises fr&eacute;quentations : mises en garde proph&eacute;tiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si le Proph&egrave;te &#xFE0E; a valoris&eacute; la bonne compagnie, il a &eacute;galement averti avec force contre les fr&eacute;quentations n&eacute;fastes. Les hadiths suivants mettent en lumi&egrave;re les dangers de la mauvaise compagnie et ses cons&eacute;quences sur la foi, le comportement et le destin du musulman dans l&apos;au-del&agrave;.
                </p>

                <HadithBlock
                  number={10}
                  title="Le musulman ne doit pas nuire &agrave; son fr&egrave;re"
                  narrator="Abu Hurayra"
                  arabic="&#x0627;&#x0644;&#x0652;&#x0645;&#x064F;&#x0633;&#x0652;&#x0644;&#x0650;&#x0645;&#x064F; &#x0623;&#x064E;&#x062E;&#x064F;&#x0648; &#x0627;&#x0644;&#x0652;&#x0645;&#x064F;&#x0633;&#x0652;&#x0644;&#x0650;&#x0645;&#x0650;&#x060C; &#x0644;&#x0627; &#x064A;&#x064E;&#x0638;&#x0652;&#x0644;&#x0650;&#x0645;&#x064F;&#x0647;&#x064F; &#x0648;&#x064E;&#x0644;&#x0627; &#x064A;&#x064E;&#x062E;&#x0652;&#x0630;&#x064F;&#x0644;&#x064F;&#x0647;&#x064F; &#x0648;&#x064E;&#x0644;&#x0627; &#x064A;&#x064E;&#x062D;&#x0652;&#x0642;&#x0650;&#x0631;&#x064F;&#x0647;&#x064F;&#x060C; &#x0628;&#x0650;&#x062D;&#x064E;&#x0633;&#x0652;&#x0628;&#x0650; &#x0627;&#x0645;&#x0652;&#x0631;&#x0650;&#x0626;&#x064D; &#x0645;&#x0650;&#x0646;&#x064E; &#x0627;&#x0644;&#x0634;&#x0651;&#x064E;&#x0631;&#x0651;&#x0650; &#x0623;&#x064E;&#x0646;&#x0652; &#x064A;&#x064E;&#x062D;&#x0652;&#x0642;&#x0650;&#x0631;&#x064E; &#x0623;&#x064E;&#x062E;&#x064E;&#x0627;&#x0647;&#x064F; &#x0627;&#x0644;&#x0652;&#x0645;&#x064F;&#x0633;&#x0652;&#x0644;&#x0650;&#x0645;&#x064E;&#x060C; &#x0643;&#x064F;&#x0644;&#x0651;&#x064F; &#x0627;&#x0644;&#x0652;&#x0645;&#x064F;&#x0633;&#x0652;&#x0644;&#x0650;&#x0645;&#x0650; &#x0639;&#x064E;&#x0644;&#x064E;&#x0649; &#x0627;&#x0644;&#x0652;&#x0645;&#x064F;&#x0633;&#x0652;&#x0644;&#x0650;&#x0645;&#x0650; &#x062D;&#x064E;&#x0631;&#x064E;&#x0627;&#x0645;&#x064C;: &#x062F;&#x064E;&#x0645;&#x064F;&#x0647;&#x064F; &#x0648;&#x064E;&#x0645;&#x064E;&#x0627;&#x0644;&#x064F;&#x0647;&#x064F; &#x0648;&#x064E;&#x0639;&#x0650;&#x0631;&#x0652;&#x0636;&#x064F;&#x0647;&#x064F;"
                  translation="Le musulman est le fr&egrave;re du musulman : il ne l&apos;opprime pas, ne le trahit pas et ne le m&eacute;prise pas. Il suffit &agrave; un homme comme mal de m&eacute;priser son fr&egrave;re musulman. Tout musulman est sacr&eacute; pour l&apos;autre musulman : son sang, ses biens et son honneur."
                  source="Sahih Muslim, n&deg;2564"
                  grade="sahih"
                  explanation="Ce hadith d&eacute;finit les limites que la fr&eacute;quentation ne doit jamais franchir. Le mauvais compagnon est celui qui opprime, trahit ou m&eacute;prise. Le Proph&egrave;te &#xFE0E; avertit que le simple m&eacute;pris suffit comme p&eacute;ch&eacute; grave. Il rappelle ensuite les trois sacralit&eacute;s du musulman : le sang (la vie), les biens et l&apos;honneur. Ce hadith est le fondement de l&apos;&eacute;thique relationnelle en islam et permet de distinguer la bonne fr&eacute;quentation de la mauvaise."
                />

                <HadithBlock
                  number={11}
                  title="Chacun sera ressuscit&eacute; avec celui qu&apos;il aime"
                  narrator="Anas ibn Malik"
                  arabic="&#x0627;&#x0644;&#x0652;&#x0645;&#x064E;&#x0631;&#x0652;&#x0621;&#x064F; &#x0645;&#x064E;&#x0639;&#x064E; &#x0645;&#x064E;&#x0646;&#x0652; &#x0623;&#x064E;&#x062D;&#x064E;&#x0628;&#x0651;&#x064E;"
                  translation="L&apos;homme sera avec celui qu&apos;il aime."
                  source="Sahih Al-Bukhari, n&deg;6168 &mdash; Sahih Muslim, n&deg;2640"
                  grade="sahih"
                  explanation="Ce hadith, d&apos;une bri&egrave;vet&eacute; saisissante, &eacute;tablit un principe eschatologique majeur : au Jour du Jugement, chaque personne sera rassembl&eacute;e avec ceux qu&apos;elle a aim&eacute;s. Anas rapporte que les Compagnons n&apos;ont jamais &eacute;t&eacute; aussi joyeux qu&apos;en entendant ce hadith. S&apos;il est source d&apos;espoir pour celui qui aime les pieux et les Proph&egrave;tes, il est aussi un avertissement : celui qui aime et fr&eacute;quente les d&eacute;vi&eacute;s sera rassembl&eacute; avec eux. Ce hadith est ainsi un argument puissant pour choisir ses amis parmi les gens de bien."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent que les mauvaises fr&eacute;quentations ne se limitent pas &agrave; un mauvais exemple : elles peuvent affecter le destin &eacute;ternel du musulman. Pour approfondir les mises en garde proph&eacute;tiques sur les p&eacute;ch&eacute;s de la langue entre amis, consultez notre article sur les{" "}
                  <Link href="/hadith-medisance-calomnie-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la m&eacute;disance et la calomnie en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur l&apos;amiti&eacute; et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment comment&eacute; les hadiths sur l&apos;amiti&eacute; et la fr&eacute;quentation. Leurs explications permettent de mieux saisir la port&eacute;e spirituelle, &eacute;ducative et juridique de ces enseignements proph&eacute;tiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith du parfumeur et du forgeron est l&apos;un des fondements de l&apos;&eacute;ducation islamique. Il enseigne que l&apos;influence de la compagnie est in&eacute;vitable, comme l&apos;odeur qui impr&egrave;gne celui qui s&apos;approche du parfumeur. Le savant doit donc choisir ses &eacute;l&egrave;ves, et l&apos;&eacute;l&egrave;ve doit choisir son ma&icirc;tre.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      &mdash; Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La parole du Proph&egrave;te &laquo; l&apos;homme suit la religion de son ami intime &raquo; signifie que le c&oelig;ur s&apos;habitue &agrave; ce qu&apos;il voit fr&eacute;quemment. Si ton ami est pieux, tu trouveras la pi&eacute;t&eacute; l&eacute;g&egrave;re. S&apos;il est d&eacute;vi&eacute;, tu trouveras la d&eacute;viance normale. C&apos;est pourquoi les salaf &eacute;taient si attentifs au choix de leurs compagnons.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      &mdash; Ibn al-Qayyim, <em>Madarij as-Salikin</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;amour en Allah est l&apos;une des plus solides anses de la foi. Celui qui aime en Allah et d&eacute;teste en Allah, donne pour Allah et refuse pour Allah, a compl&eacute;t&eacute; sa foi. L&apos;amiti&eacute; bas&eacute;e sur la foi est la seule qui perdure dans l&apos;au-del&agrave;, comme l&apos;atteste le verset d&apos;Az-Zukhruf.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      &mdash; Ibn Taymiyya, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur l&apos;amiti&eacute; ne sont pas de simples recommandations morales : ils constituent un pilier de la <em>tarbiya</em> (&eacute;ducation) islamique et de la pr&eacute;servation de la foi. Les quatre &eacute;coles de jurisprudence s&apos;appuient sur ces m&ecirc;mes hadiths pour &eacute;tablir les r&egrave;gles du boycott l&eacute;gitime, de la nasiha et des droits du voisinage et de la fraternit&eacute;.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Le&ccedil;ons pratiques      */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le&ccedil;ons pratiques sur l&apos;amiti&eacute; en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths pr&eacute;sent&eacute;s dans cet article permet de d&eacute;gager des le&ccedil;ons concr&egrave;tes pour la vie relationnelle du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Choisis tes amis comme tu choisis ton parfum
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le bon compagnon t&apos;embellit par sa pr&eacute;sence seule, comme le parfumeur. Recherche la compagnie des gens de science, de pi&eacute;t&eacute; et de bon caract&egrave;re.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        &Eacute;value r&eacute;guli&egrave;rement ton entourage
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hadith &laquo; que chacun regarde qui il prend pour ami intime &raquo; implique un examen conscient. Tes fr&eacute;quentations te rapprochent-elles d&apos;Allah ou t&apos;en &eacute;loignent-elles ?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Respecte les droits de tes amis
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le salam, la visite du malade, le conseil sinc&egrave;re, l&apos;acceptation des invitations : ces droits ne sont pas optionnels. Ils sont le ciment de la fraternit&eacute; islamique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Exprime l&apos;amour fraternel en Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Proph&egrave;te &#xFE0E; a enseign&eacute; de dire &agrave; son fr&egrave;re qu&apos;on l&apos;aime en Allah. Cette expression verbale renforce le lien et r&eacute;pand l&apos;affection au sein de la communaut&eacute;.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        R&eacute;concilie-toi avant trois jours
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le boycott prolong&eacute; est interdit entre musulmans. Le meilleur des deux est celui qui fait le premier pas en saluant l&apos;autre. Ne laisse pas l&apos;orgueil d&eacute;truire une amiti&eacute;.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Rappelle-toi que tu seras avec celui que tu aimes
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Jour du Jugement, chaque personne sera rassembl&eacute;e avec ceux qu&apos;elle a aim&eacute;s. Fais en sorte que tes amis soient des gens que tu souhaites retrouver dans l&apos;au-del&agrave;.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur l&apos;amiti&eacute; et la fraternit&eacute; dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
                  preselect="arabe"
                />
              </div>

              {/* FAQ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>

              {/* Maillage interne */}
              <div className="mt-12 space-y-4">
                <ArticleCTA
                  variant="page-mere"
                  title="Retrouvez tous nos hadiths par th&egrave;me"
                  href="/hadith-du-jour"
                  linkText="Hadith du jour : paroles authentiques"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths du Proph&egrave;te Muhammad &#xFE0E; : fondements et collections"
                  description="D&eacute;couvrez l&apos;histoire des grandes collections de hadiths et les crit&egrave;res d&apos;authenticit&eacute;."
                  href="/hadith-prophete-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le bon comportement en islam"
                  description="Les enseignements proph&eacute;tiques sur les bonnes mani&egrave;res, la douceur et le respect d&apos;autrui."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la m&eacute;disance et la calomnie en islam"
                  description="Les mises en garde proph&eacute;tiques contre les p&eacute;ch&eacute;s de la langue et leurs cons&eacute;quences."
                  href="/hadith-medisance-calomnie-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
