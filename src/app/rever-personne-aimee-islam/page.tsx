import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title:
    "Rêver de quelqu&apos;un qu&apos;on aime en islam : signification et interprétation",
  description:
    "Signification de rêver de quelqu&apos;un qu&apos;on aime en islam selon Ibn Sirin et An-Nabulsi. Conjoint, ex, ami proche, personne aimée qui sourit ou pleure.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-personne-aimee-islam",
  },
};

const tocItems = [
  { id: "symbolique", label: "Symbolique de la personne aimée" },
  { id: "ibn-sirin-nabulsi", label: "Ibn Sirin et An-Nabulsi" },
  { id: "conjoint", label: "Rêver de son conjoint" },
  { id: "ex", label: "Rêver d\u2019un ex" },
  { id: "ami-proche", label: "Rêver d\u2019un ami proche" },
  { id: "emotions", label: "Personne aimée qui sourit ou pleure" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "conseils", label: "Conseils et attitudes à adopter" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver de quelqu\u2019un qu\u2019on aime en islam ?",
    answer:
      "Rêver de quelqu\u2019un qu\u2019on aime en islam peut symboliser un lien spirituel fort, une bénédiction divine sur cette relation ou un besoin affectif profond. Selon Ibn Sirin, la personne aimée dans un rêve reflète souvent un aspect de la vie intérieure du rêveur. L\u2019interprétation varie selon le contexte du rêve, les émotions ressenties et la nature de la relation.",
  },
  {
    question:
      "Rêver de son conjoint en islam est-il un bon signe ?",
    answer:
      "Rêver de son conjoint en islam est généralement interprété comme un signe positif, traduisant l\u2019harmonie conjugale, la complicité ou la protection divine sur le couple. Si le conjoint apparaît souriant et serein, cela renforce ce sens favorable. Un conjoint distant ou en colère peut inviter à l\u2019introspection et au dialogue.",
  },
  {
    question: "Que signifie rêver d\u2019un ex en islam ?",
    answer:
      "Rêver d\u2019un ex en islam ne signifie pas nécessairement un désir de retour. Selon les interprètes musulmans, ce rêve peut refléter une leçon non assimilée, un pardon à accorder ou une étape de vie que le rêveur doit pleinement clore. Il est recommandé de faire des invocations et de demander la guidance d\u2019Allah.",
  },
  {
    question:
      "Pourquoi rêve-t-on d\u2019une personne aimée qui pleure ?",
    answer:
      "Voir une personne aimée pleurer dans un rêve en islam peut indiquer que cette personne traverse une épreuve, qu\u2019elle a besoin de soutien ou que le rêveur ressent une inquiétude profonde à son sujet. Ce rêve peut aussi être un rappel divin à multiplier les invocations pour cette personne et à prendre de ses nouvelles.",
  },
  {
    question: "Rêver d\u2019un ami proche décédé en islam, que signifie-t-il ?",
    answer:
      "Rêver d\u2019un ami proche décédé en islam est souvent perçu comme un message de l\u2019au-delà. Si la personne apparaît en paix et souriante, cela peut indiquer qu\u2019elle se trouve dans un état favorable auprès d\u2019Allah. Ce rêve invite aussi le rêveur à faire des invocations (douas) et de la charité (sadaqah) pour le défunt.",
  },
  {
    question:
      "Faut-il raconter un rêve sur une personne aimée en islam ?",
    answer:
      "Selon la tradition prophétique, un rêve agréable peut être partagé avec une personne de confiance, mais un rêve troublant ne doit pas être raconté à n\u2019importe qui. Le Prophète (paix et salut sur lui) a recommandé de ne partager un bon rêve qu\u2019avec quelqu\u2019un qu\u2019on aime et de chercher refuge auprès d\u2019Allah après un rêve perturbant.",
  },
  {
    question: "Que faire après avoir rêvé de quelqu\u2019un qu\u2019on aime en islam ?",
    answer:
      "Après un rêve impliquant une personne aimée, il est recommandé de noter les détails au réveil, de remercier Allah si le rêve était positif, et de réciter les invocations de protection (Ayat al-Kursiy, les trois Qul) si le rêve était troublant. Prendre des nouvelles de cette personne peut aussi être une bonne démarche.",
  },
  {
    question:
      "Un célibataire qui rêve d\u2019une personne aimée va-t-il se marier ?",
    answer:
      "Rêver d\u2019une personne aimée quand on est célibataire peut refléter un désir de mariage ou d\u2019engagement, mais ce n\u2019est pas une prédiction certaine. Selon An-Nabulsi, ce type de rêve traduit souvent un besoin d\u2019affection et de stabilité. Le rêveur est invité à placer sa confiance en Allah et à multiplier la prière de consultation (istikhara).",
  },
];

export default function ReverPersonneAimeeIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-personne-aimee-islam/#article",
        headline:
          "Rêver de quelqu\u2019un qu\u2019on aime en islam : signification et interprétation",
        description:
          "Signification de rêver de quelqu\u2019un qu\u2019on aime en islam selon Ibn Sirin et An-Nabulsi. Conjoint, ex, ami proche, personne aimée qui sourit ou pleure.",
        image:
          "https://www.islamreligion.fr/images/famille-musulmane-islam-croissant-lune-valeurs.jpg",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-personne-aimee-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-personne-aimee-islam/#breadcrumb",
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
            name: "Rêves en islam",
            item: "https://www.islamreligion.fr/reves-islam",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Rêver de quelqu\u2019un qu\u2019on aime",
            item: "https://www.islamreligion.fr/rever-personne-aimee-islam",
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
          title="Rêver de quelqu&apos;un qu&apos;on aime en islam : signification et interprétation"
          subtitle="Comprendre la symbolique de la personne aimée dans les rêves selon Ibn Sirin, An-Nabulsi et la tradition islamique."
          imageSrc="/images/famille-musulmane-islam-croissant-lune-valeurs.jpg"
          imageAlt="Rêver de quelqu&apos;un qu&apos;on aime en islam, signification et interprétation spirituelle"
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
                <Link href="/reves-islam" className="hover:text-primary">
                  Rêves en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">
                  Rêver de quelqu&apos;un qu&apos;on aime
                </span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de quelqu&apos;un qu&apos;on aime en islam est une
                  expérience onirique profondément marquante, porteuse de
                  messages spirituels et affectifs. Qu&apos;il s&apos;agisse
                  d&apos;un conjoint, d&apos;un parent, d&apos;un ami proche ou
                  d&apos;une personne disparue, la présence d&apos;un être cher
                  dans un rêve peut refléter un lien spirituel, une bénédiction
                  divine ou un besoin intérieur. Les grands interprètes Ibn Sirin
                  et An-Nabulsi offrent des clés de lecture précieuses pour
                  comprendre ces visions nocturnes.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Symbolique de la personne aimée */}
              {/* ============================================ */}
              <section id="symbolique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Symbolique de la personne aimée dans les rêves en islam
                </h2>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans la tradition onirique islamique, rêver d&apos;une personne
                  que l&apos;on aime dépasse le simple reflet des pensées
                  quotidiennes. L&apos;islam distingue trois catégories de rêves :
                  la vision véridique (<em>ru&apos;ya</em>) envoyée par Allah, le
                  rêve issu de l&apos;âme (<em>hadith an-nafs</em>) qui traduit
                  les préoccupations intérieures, et le rêve perturbateur
                  attribué à Shaytan. Une personne aimée qui apparaît dans un
                  songe peut appartenir à chacune de ces catégories, et
                  l&apos;interprétation dépendra du contexte, des émotions
                  ressenties et de la nature de la relation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a dit :
                  &laquo;&nbsp;Le rêve du croyant est une des quarante-six
                  parties de la prophétie&nbsp;&raquo; (rapporté par Al-Bukhari
                  et Muslim). Cette parole montre la place centrale des rêves
                  dans la spiritualité musulmane. Lorsqu&apos;un être cher
                  apparaît dans une vision nocturne, ce n&apos;est jamais anodin :
                  cela peut révéler un lien d&apos;âme, un besoin de
                  réconciliation, une annonce de bien ou un rappel à
                  l&apos;invocation.
                </p>

                <Image
                  src="/images/famille-musulmane-islam-croissant-lune-valeurs.jpg"
                  alt="Famille musulmane symbolisant les liens d&apos;amour et les valeurs islamiques"
                  width={800}
                  height={500}
                  className="mt-6 w-full rounded-xl"
                  loading="lazy"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La personne aimée dans un rêve peut symboliser plusieurs
                  réalités : la stabilité affective, la protection divine sur
                  une relation, un message à transmettre ou encore un miroir
                  de l&apos;état spirituel du rêveur. Selon la science de
                  l&apos;interprétation des rêves (<em>ta&apos;bir ar-ru&apos;ya</em>),
                  chaque détail compte : l&apos;expression du visage, le lieu de
                  la rencontre, les paroles échangées et l&apos;atmosphère
                  générale du songe orientent la signification.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est important de noter que l&apos;amour en islam revêt de
                  nombreuses formes : l&apos;amour conjugal (<em>mawadda</em>),
                  l&apos;amour fraternel, l&apos;amour filial et l&apos;amour
                  pour Allah et Son Prophète. Chacune de ces formes d&apos;amour
                  peut se manifester dans les rêves et porte une symbolique
                  différente. Rêver d&apos;un parent n&apos;a pas la même portée
                  que rêver d&apos;un conjoint ou d&apos;un ami proche, même si
                  toutes ces visions partagent la notion fondamentale
                  d&apos;attachement du coeur.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Ibn Sirin et An-Nabulsi */}
              {/* ============================================ */}
              <section id="ibn-sirin-nabulsi" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce qu&apos;en disent Ibn Sirin et An-Nabulsi
                </h2>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  L&apos;approche d&apos;Ibn Sirin
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin (mort en 110 de l&apos;hégire), considéré comme le
                  père de l&apos;interprétation des rêves en islam, accordait
                  une attention particulière à la relation entre le rêveur et la
                  personne vue en songe. Selon lui, voir une personne aimée dans
                  un rêve reflète avant tout l&apos;état du coeur du rêveur.
                  Si la rencontre est joyeuse, c&apos;est le signe d&apos;une
                  relation bénie et d&apos;un coeur apaisé. Si elle est tendue
                  ou douloureuse, cela peut indiquer un conflit intérieur non
                  résolu ou un besoin de pardon.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin soulignait également que la personne aimée dans un
                  rêve peut représenter une qualité que le rêveur admire ou
                  recherche. Par exemple, voir son père peut symboliser la
                  sagesse et l&apos;autorité, tandis que voir son épouse peut
                  évoquer la tendresse et la sérénité. Il recommandait de ne
                  jamais interpréter un rêve de manière isolée, mais de toujours
                  le replacer dans le contexte de la vie du rêveur, de sa
                  piété et de ses préoccupations du moment.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  L&apos;approche d&apos;An-Nabulsi
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi (mort en 1143 de l&apos;hégire), auteur de
                  l&apos;ouvrage de référence <em>Ta&apos;tir al-Anam fi
                  Tafsir al-Manam</em>, a développé une classification plus
                  détaillée. Pour lui, rêver d&apos;une personne aimée vivante
                  et en bonne santé annonce généralement une bonne nouvelle
                  (bashara) ou une période de stabilité émotionnelle. En
                  revanche, si la personne apparaît malade ou affaiblie, cela
                  peut refléter une inquiétude légitime ou un appel à
                  multiplier les invocations en sa faveur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi a aussi mis en lumière le lien entre les rêves
                  affectifs et la notion de <em>rahma</em> (miséricorde divine).
                  Selon lui, lorsque Allah place dans le coeur du dormeur la
                  vision d&apos;un être cher heureux et serein, c&apos;est
                  souvent un signe que cette relation est placée sous la
                  protection et la bénédiction du Très-Haut. Il insistait sur
                  l&apos;importance de la gratitude (<em>shukr</em>) après un
                  tel rêve et recommandait de faire une prière de deux
                  unités (<em>rak&apos;atayn</em>) pour remercier Allah.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Rêver de son conjoint */}
              {/* ============================================ */}
              <section id="conjoint" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de son conjoint en islam
                </h2>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le conjoint occupe une place particulière dans la symbolique
                  onirique islamique. Allah dit dans le Coran :
                  &laquo;&nbsp;Et parmi Ses signes, Il a créé pour vous, de
                  vous-mêmes, des épouses afin que vous trouviez en elles le
                  repos (<em>sakina</em>), et Il a mis entre vous affection
                  (<em>mawadda</em>) et miséricorde
                  (<em>rahma</em>)&nbsp;&raquo; (sourate Ar-Rum, 30:21). Ce
                  verset illustre la dimension sacrée du lien conjugal, qui se
                  prolonge jusque dans les rêves.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Conjoint souriant et heureux
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voir son époux ou son épouse souriant dans un rêve est
                  considéré comme un signe de bénédiction sur le foyer. Selon
                  Ibn Sirin, ce type de vision traduit une harmonie conjugale
                  authentique et une satisfaction mutuelle. Cela peut aussi
                  annoncer une bonne nouvelle liée à la vie de famille : une
                  naissance, une réconciliation ou une amélioration de la
                  situation matérielle du foyer.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Conjoint distant ou en conflit
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Rêver de son conjoint en colère, distant ou en pleurs peut
                  refléter des tensions non exprimées dans le couple. Ce type de
                  rêve n&apos;est pas nécessairement un mauvais présage, mais
                  plutôt une invitation à l&apos;introspection et au dialogue.
                  An-Nabulsi recommandait au rêveur de prendre ce songe comme
                  un rappel à renforcer la communication, à renouveler les
                  intentions et à demander à Allah de préserver l&apos;harmonie
                  du foyer. Si vous traversez une période difficile dans votre
                  couple, la{" "}
                  <Link
                    href="/rever-divorce-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    signification du divorce dans les rêves en islam
                  </Link>{" "}
                  peut vous apporter un éclairage complémentaire.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Conjoint décédé
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Rêver d&apos;un conjoint décédé est une expérience
                  particulièrement émouvante. Dans la tradition islamique, ce
                  rêve peut être un signe que l&apos;âme du défunt est en paix
                  auprès d&apos;Allah, surtout si la personne apparaît sereine
                  et lumineuse. Ce rêve invite également le rêveur à multiplier
                  les invocations, la charité et la récitation du Coran pour
                  le défunt. Pour approfondir ce sujet, consultez notre article
                  sur les{" "}
                  <Link
                    href="/rever-mort-islam-messages"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    messages des défunts dans les rêves en islam
                  </Link>
                  .
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Rêver d'un ex */}
              {/* ============================================ */}
              <section id="ex" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver d&apos;un ex en islam
                </h2>

                <p className="mt-4 leading-relaxed text-foreground">
                  Rêver d&apos;un ancien compagnon ou d&apos;une ancienne
                  compagne est un rêve fréquent qui suscite souvent de
                  l&apos;interrogation et parfois de l&apos;inquiétude. Il est
                  important de comprendre que ce type de rêve ne traduit pas
                  nécessairement un désir de retrouvailles. Selon les
                  interprètes musulmans, plusieurs significations sont
                  possibles.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Une leçon non assimilée
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin considérait que revoir un ex dans un rêve peut
                  signifier que le rêveur n&apos;a pas encore tiré tous les
                  enseignements de cette relation passée. Ce n&apos;est pas un
                  appel à revenir en arrière, mais une invitation à comprendre
                  les leçons qu&apos;Allah a placées dans cette expérience. Le
                  rêveur est encouragé à faire preuve de maturité spirituelle
                  et à remercier Allah pour le chemin parcouru depuis.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Un besoin de pardon
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi notait que la présence d&apos;un ex dans un rêve
                  peut aussi refléter un besoin de pardon, que ce soit envers
                  l&apos;autre ou envers soi-même. L&apos;islam accorde une
                  importance capitale au pardon (<em>afw</em>) et à la
                  purification du coeur. Si ce rêve se répète, il peut être
                  bénéfique de faire une invocation sincère pour demander à
                  Allah de purifier le coeur de toute rancune et de tout
                  attachement malsain.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Une comparaison inconsciente
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parfois, le rêve d&apos;un ex survient lorsque le rêveur
                  traverse une phase de questionnement dans sa vie actuelle.
                  L&apos;esprit peut naturellement comparer les situations
                  passées et présentes. Ce phénomène relève davantage du
                  <em> hadith an-nafs</em> (rêve issu de l&apos;âme) que de
                  la vision véridique. Dans ce cas, le rêveur est invité à
                  se recentrer sur le présent et à placer sa confiance en
                  le décret divin (<em>qadar</em>).
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Rêver d'un ami proche */}
              {/* ============================================ */}
              <section id="ami-proche" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver d&apos;un ami proche en islam
                </h2>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;amitié en islam est un lien précieux. Le Prophète
                  Muhammad (paix et salut sur lui) a dit :
                  &laquo;&nbsp;L&apos;homme suit la religion de son ami intime,
                  que chacun de vous regarde donc qui il prend pour ami
                  intime&nbsp;&raquo; (rapporté par Abu Dawud et At-Tirmidhi).
                  Rêver d&apos;un ami proche peut donc revêtir une dimension
                  spirituelle forte.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Selon Ibn Sirin, voir un ami dans un rêve peut symboliser un
                  aspect de sa propre personnalité que le rêveur reconnaît dans
                  cet ami. Si l&apos;ami est joyeux, cela peut annoncer une
                  période favorable pour le rêveur. Si l&apos;ami semble
                  préoccupé ou en difficulté, le rêve peut être un rappel à
                  prendre de ses nouvelles et à lui apporter du soutien, car
                  l&apos;entraide (<em>ta&apos;awun</em>) est un pilier de la
                  fraternité islamique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi ajoutait que rêver d&apos;un ami avec lequel on
                  a perdu contact peut être une invitation divine à renouer les
                  liens. L&apos;islam valorise le maintien des liens
                  (<em>silat ar-rahim</em>) et considère leur rupture comme un
                  acte blâmable. Ce rêve peut donc être un rappel bienveillant
                  à rétablir une relation fraternelle négligée. La notion de
                  lien familial est aussi abordée dans notre article sur{" "}
                  <Link
                    href="/rever-pere-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    rêver de son père en islam
                  </Link>
                  .
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Personne aimée qui sourit ou pleure */}
              {/* ============================================ */}
              <section id="emotions" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Personne aimée qui sourit ou qui pleure dans un rêve
                </h2>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Un sourire lumineux
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voir la personne aimée sourire dans un rêve est l&apos;un des
                  signes les plus positifs selon la tradition onirique islamique.
                  Ibn Sirin interprétait le sourire comme un reflet de la
                  satisfaction d&apos;Allah envers la relation entre le rêveur
                  et cette personne. Le sourire peut aussi indiquer que la
                  personne rêvée se trouve dans un état de bien-être, qu&apos;elle
                  soit vivante ou décédée. Dans le cas d&apos;un défunt, un
                  sourire est souvent considéré comme un signe rassurant sur son
                  état dans l&apos;au-delà.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Des larmes et de la tristesse
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voir une personne aimée pleurer dans un songe suscite
                  naturellement de l&apos;inquiétude. An-Nabulsi distinguait
                  cependant plusieurs types de pleurs dans les rêves. Les
                  larmes silencieuses et apaisées peuvent symboliser un
                  soulagement ou la libération d&apos;un poids émotionnel. Les
                  pleurs accompagnés de cris ou de détresse peuvent indiquer
                  que cette personne traverse une épreuve et a besoin de
                  soutien, de prières ou d&apos;attention.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans tous les cas, il est recommandé de ne pas paniquer
                  face à ce type de rêve. Le Prophète (paix et salut sur lui)
                  a enseigné que face à un rêve désagréable, le dormeur doit
                  souffler trois fois sur sa gauche, chercher refuge auprès
                  d&apos;Allah contre le mal de Shaytan et ne pas en parler.
                  Si le rêve concerne un proche vivant, prendre de ses nouvelles
                  et formuler des invocations en sa faveur est la meilleure
                  attitude à adopter.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Un regard silencieux
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il arrive que la personne aimée apparaisse dans le rêve sans
                  parler, se contentant de regarder le rêveur. Selon Ibn Sirin,
                  ce regard peut exprimer un message que les mots ne suffisent
                  pas à porter. C&apos;est un appel à l&apos;introspection : le
                  rêveur est invité à se demander ce que cette personne
                  représente pour lui et quel aspect de sa vie spirituelle ou
                  affective mérite son attention. Ce type de rêve rejoint la
                  symbolique de l&apos;arrivée d&apos;un{" "}
                  <Link
                    href="/rever-bebe-nouveau-ne-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    nouveau-né dans les rêves en islam
                  </Link>
                  , où la présence silencieuse porte un message de renouveau.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Selon la situation du rêveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interprétation selon la situation du rêveur
                </h2>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Pour une personne mariée
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Une personne mariée qui rêve de quelqu&apos;un qu&apos;elle
                  aime — que ce soit son conjoint ou un autre proche — vit
                  généralement un rêve lié à la stabilité affective. Si le
                  rêve est agréable et lumineux, il confirme souvent la solidité
                  du lien conjugal et la bénédiction divine sur le foyer. Si
                  le rêve met en scène une personne autre que le conjoint, cela
                  ne traduit pas nécessairement un sentiment interdit, mais peut
                  refléter un besoin de complémentarité émotionnelle ou un
                  souvenir affectif que l&apos;esprit revisite.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi recommandait aux personnes mariées de ne pas
                  s&apos;alarmer face à ce type de rêve, mais de le prendre
                  comme une occasion de renforcer le lien conjugal par la
                  communication, la tendresse et l&apos;invocation commune. Le
                  couple qui prie ensemble et se rappelle mutuellement Allah
                  bénéficie d&apos;une protection spirituelle particulière.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Pour une personne célibataire
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un célibataire qui rêve d&apos;une personne aimée peut vivre
                  l&apos;expression d&apos;un désir de mariage, de stabilité
                  ou de compagnie. Ce rêve n&apos;est pas une promesse ferme
                  de mariage, mais il peut refléter la maturité affective du
                  rêveur et sa disposition à construire une relation. Selon
                  Ibn Sirin, si la personne apparaît vêtue de blanc ou dans
                  un cadre lumineux, c&apos;est un signe encourageant.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le célibataire est invité à multiplier la prière de
                  consultation (<em>salat al-istikhara</em>) et à demander à
                  Allah de lui accorder un compagnon ou une compagne pieux(se).
                  Le rêve peut aussi être un rappel à travailler sur soi-même
                  et sa foi avant de s&apos;engager dans une relation.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Pour une personne en deuil
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Rêver d&apos;une personne aimée décédée est une expérience
                  fréquente et profondément touchante pour les personnes en
                  deuil. La tradition islamique offre un cadre apaisant pour
                  comprendre ces rêves. Si le défunt apparaît heureux, vêtu de
                  beau et dans un lieu agréable, c&apos;est souvent interprété
                  comme un signe de sa bonne position auprès d&apos;Allah. Ce
                  rêve apporte du réconfort au rêveur et l&apos;encourage à
                  poursuivre ses invocations pour le défunt.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si le défunt apparaît triste ou demande quelque chose, cela
                  peut indiquer un besoin de prières, de charité ou
                  d&apos;acquittement d&apos;une dette en son nom. Le rêveur
                  est alors invité à faire la sadaqah (aumône), réciter le
                  Coran et multiplier les douas pour le repos de l&apos;âme
                  du défunt. Notre article sur les{" "}
                  <Link
                    href="/rever-mort-islam-messages"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    rêves de mort et leurs messages en islam
                  </Link>{" "}
                  développe ces interprétations en profondeur.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 8 : Conseils et attitudes */}
              {/* ============================================ */}
              <section id="conseils" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils et attitudes à adopter après ce rêve
                </h2>

                <p className="mt-4 leading-relaxed text-foreground">
                  La tradition prophétique offre des recommandations claires
                  sur la manière de réagir après un rêve impliquant une
                  personne aimée. Voici les attitudes à privilégier.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Après un rêve agréable
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Remercier Allah</strong> : louer le Très-Haut pour
                      cette vision positive et la considérer comme une bonne
                      nouvelle (<em>bishara</em>).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Partager avec une personne de confiance</strong> :
                      le Prophète (paix et salut sur lui) a recommandé de ne
                      raconter un bon rêve qu&apos;à quelqu&apos;un
                      qu&apos;on aime.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prendre des nouvelles</strong> : si le rêve
                      concerne un proche vivant, profiter de l&apos;occasion
                      pour renforcer le lien et prendre de ses nouvelles.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Après un rêve troublant
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Souffler trois fois à gauche</strong> et chercher
                      refuge auprès d&apos;Allah contre le mal de Shaytan
                      (<em>a&apos;udhu billahi min ash-shaytani ar-rajim</em>).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas raconter le rêve</strong> : le Prophète
                      (paix et salut sur lui) a déconseillé de partager un
                      mauvais rêve, car cela peut lui donner de
                      l&apos;importance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Changer de position</strong> : se tourner de
                      l&apos;autre côté et réciter Ayat al-Kursiy et les trois
                      dernières sourates du Coran (Al-Ikhlas, Al-Falaq,
                      An-Nas).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Faire des invocations</strong> : prier pour la
                      personne vue dans le rêve et demander à Allah Sa
                      protection pour elle.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  Tenir un carnet de rêves
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Noter ses rêves au réveil permet de mieux comprendre les
                  messages récurrents et d&apos;identifier des schémas. Un
                  carnet de rêves aide à se souvenir des détails qui
                  s&apos;effacent rapidement et facilite une éventuelle
                  consultation auprès d&apos;une personne de science. Il est
                  cependant important de ne pas devenir obsédé par
                  l&apos;interprétation des rêves : la confiance en Allah et
                  l&apos;acceptation de Son décret restent les fondements de
                  la sérénité du croyant.
                </p>

                <AffiliateForm title="Approfondissez votre connaissance des rêves en islam" description="La compréhension des symboles oniriques passe par la connaissance du Coran et de la langue arabe. Choisissez votre formation." preselect="coran" />

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaque rêve porte un message unique, tout comme la
                  symbolique des{" "}
                  <Link
                    href="/reves-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    rêves en islam
                  </Link>{" "}
                  varie selon le contexte et la situation du rêveur. La clé
                  reste toujours l&apos;humilité face au savoir divin et la
                  confiance en la sagesse d&apos;Allah.
                </p>
              </section>

              {/* ============================================ */}
              {/* AffiliateForm + FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Comprenez les symboles coraniques de vos rêves"
                description="La compréhension des rêves en islam passe par la connaissance du Coran et de la langue arabe. Choisissez votre formation pour approfondir vos connaissances."
                preselect="coran"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Interprétations de rêves similaires
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les rêves en islam
                  </Link>
                  <Link
                    href="/rever-pere-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de son père
                  </Link>
                  <Link
                    href="/rever-mort-islam-messages"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de mort en islam
                  </Link>
                  <Link
                    href="/rever-divorce-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de divorce en islam
                  </Link>
                  <Link
                    href="/rever-bebe-nouveau-ne-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de bébé en islam
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages meres */}
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
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes et médecine prophétique
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
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
