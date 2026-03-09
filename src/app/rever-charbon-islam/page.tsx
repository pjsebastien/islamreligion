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
    "Rêver de charbon en islam : signification et interprétation complète",
  description:
    "Signification de rêver de charbon en islam selon Ibn Sirin et An-Nabulsi. Charbon ardent, éteint, braises, marcher sur le charbon : toutes les interprétations.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-charbon-islam",
  },
};

const tocItems = [
  { id: "symbolique", label: "Symbolique du charbon en islam" },
  { id: "savants", label: "Selon Ibn Sirin et An-Nabulsi" },
  { id: "charbon-ardent", label: "Charbon ardent et charbon éteint" },
  { id: "tenir-charbon", label: "Tenir du charbon dans la main" },
  { id: "marcher-braises", label: "Marcher sur des braises" },
  { id: "profils", label: "Selon le profil du rêveur" },
  { id: "conseils", label: "Conseils après ce rêve" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Que signifie rêver de charbon en islam ?",
    answer:
      "Rêver de charbon en islam possède plusieurs significations selon le contexte. Le charbon peut symboliser l\u2019argent acquis de manière douteuse, les épreuves liées au feu et à la purification, ou encore la richesse et la prospérité si le charbon est ardent et lumineux. Ibn Sirin enseigne que le charbon renvoie à la nature cachée des choses : ce qui semble noir et terne en apparence peut contenir un feu intérieur porteur de bien ou de mal.",
  },
  {
    question:
      "Rêver de charbon ardent est-il un bon ou un mauvais signe en islam ?",
    answer:
      "Le charbon ardent (braise) possède une double interprétation. S\u2019il éclaire sans brûler le rêveur, il annonce la prospérité, un bien abondant et la bénédiction divine. En revanche, si la braise provoque des brûlures ou de la souffrance, elle avertit d\u2019un danger moral, d\u2019une tentation ou d\u2019un argent illicite qui causera du tort au rêveur.",
  },
  {
    question:
      "Que signifie rêver de tenir du charbon dans la main en islam ?",
    answer:
      "Tenir du charbon dans la main en rêve symbolise un bien ou une responsabilité que le rêveur porte difficilement. Si le charbon est chaud et brûle la main, cela indique de l\u2019argent haram ou une situation périlleuse. Si le charbon est froid ou éteint, cela peut renvoyer à une perte financière, un espoir déçu ou un projet qui n\u2019a pas abouti.",
  },
  {
    question:
      "Rêver de marcher sur des braises en islam : quelle signification ?",
    answer:
      "Marcher sur des braises en rêve indique que le rêveur traverse une période difficile ou périlleuse. S\u2019il marche sans ressentir de douleur, c\u2019est un signe de protection divine et de force intérieure face aux épreuves. Si la marche est douloureuse, le rêve invite à la prudence et au repentir, car le rêveur s\u2019expose à des dangers spirituels.",
  },
  {
    question:
      "Rêver de charbon éteint en islam a-t-il une signification particulière ?",
    answer:
      "Oui, le charbon éteint en rêve symbolise la fin d\u2019une épreuve, la disparition d\u2019un ennemi ou la perte d\u2019une source de revenus. Selon An-Nabulsi, le charbon qui ne brûle plus représente un pouvoir affaibli, un projet abandonné ou une passion qui s\u2019est éteinte. Le rêveur est invité à évaluer ce qu\u2019il a perdu et à chercher de nouvelles voies.",
  },
  {
    question:
      "Que signifie rêver de manger du charbon en islam ?",
    answer:
      "Manger du charbon dans un rêve est un signe préoccupant. Selon les interprètes musulmans, cela renvoie à la consommation de biens illicites (haram) ou à des paroles blessantes que le rêveur profère ou subit. Ce rêve est un appel fort au repentir et à l\u2019examen de conscience sur la provenance de ses revenus et la qualité de ses paroles.",
  },
  {
    question:
      "Le charbon dans un rêve peut-il annoncer la richesse en islam ?",
    answer:
      "Oui, dans certains contextes. Le charbon de bois utilisé comme combustible, lorsqu\u2019il brûle avec une belle flamme dans le rêve, symbolise la richesse, la subsistance abondante et les bénédictions. Ibn Sirin associe le charbon en combustion à un bien qui profite au rêveur et à son entourage, à condition que le feu reste maîtrisé et ne cause pas de destruction.",
  },
  {
    question:
      "Comment distinguer un rêve de charbon positif d\u2019un rêve négatif en islam ?",
    answer:
      "Le critère principal est l\u2019état du charbon et le ressenti du rêveur. Un charbon ardent, lumineux, qui réchauffe sans brûler, est positif. Un charbon qui noircit, qui brûle la peau ou qui dégage une fumée épaisse est négatif. Les émotions du rêveur comptent aussi : la sérénité accompagne les rêves bénéfiques, tandis que l\u2019angoisse signale un avertissement.",
  },
];

export default function ReverCharbonIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-charbon-islam/#article",
        headline:
          "Rêver de charbon en islam : signification et interprétation complète",
        description:
          "Signification de rêver de charbon en islam selon Ibn Sirin et An-Nabulsi. Charbon ardent, éteint, braises, marcher sur le charbon : toutes les interprétations.",
        image:
          "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg",
        datePublished: "2026-03-06",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-charbon-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-charbon-islam/#breadcrumb",
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
            name: "Charbon en islam",
            item: "https://www.islamreligion.fr/rever-charbon-islam",
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
          title="Rêver de charbon en islam : signification et interprétation"
          subtitle="Charbon ardent, éteint, braises, marcher sur le feu : toutes les interprétations selon Ibn Sirin et An-Nabulsi."
          imageSrc="/images/croissant-lune-dore-lanternes-islam-ramadan.jpg"
          imageAlt="Rêver de charbon en islam, signification et interprétation selon les savants musulmans"
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
                <Link href="/reves-islam" className="hover:text-primary">
                  Rêves en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Charbon</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de charbon en islam est un symbole riche à double
                  lecture. Selon les savants musulmans, le charbon peut
                  représenter la richesse dissimulée, l&apos;argent acquis
                  de manière douteuse, les épreuves liées au feu ou encore
                  la purification par les difficultés. L&apos;état du
                  charbon — ardent, éteint, fumant — et les actions du
                  rêveur déterminent la signification précise de cette
                  vision nocturne.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Symbolique du charbon en islam */}
              {/* ============================================ */}
              <section id="symbolique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Symbolique du charbon dans les rêves en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le charbon occupe une place singulière dans la symbolique
                  onirique islamique. Matière noire en apparence inerte, il
                  recèle pourtant le potentiel du feu, de la chaleur et de
                  la lumière. Cette dualité entre l&apos;obscurité visible
                  et l&apos;énergie cachée en fait un symbole
                  particulièrement dense pour les interprètes des rêves.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En oniromancie islamique, le charbon renvoie à plusieurs
                  dimensions fondamentales de la vie du croyant. Il peut
                  évoquer les richesses, la subsistance et les biens
                  matériels, mais aussi les épreuves, les tentations et
                  les dangers moraux. Contrairement à d&apos;autres
                  symboles plus univoques, le charbon exige toujours une
                  lecture attentive du contexte pour livrer son message
                  véritable.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le charbon et le feu : un lien indissociable
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le charbon est avant tout le combustible du feu. Or, le
                  feu possède dans la tradition islamique une symbolique
                  très forte : il est à la fois la lumière qui guide et
                  la flamme qui détruit. Le charbon hérite de cette
                  ambivalence. Lorsqu&apos;il brûle avec une flamme vive
                  et claire, il symbolise l&apos;énergie, la force
                  intérieure et la prospérité. Lorsqu&apos;il noircit,
                  salit ou brûle le rêveur, il annonce des difficultés
                  liées aux biens de ce monde ou aux relations
                  interpersonnelles.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran mentionne le feu et ses dérivés dans de
                  nombreuses sourates, tantôt comme châtiment pour les
                  injustes, tantôt comme épreuve purificatrice. Le charbon,
                  en tant que matière première du feu, porte en lui cette
                  double dimension coranique. Voir du{" "}
                  <Link
                    href="/rever-feu-incendie-islam"
                    className="text-secondary underline decoration-secondary/30 underline-offset-2 hover:decoration-secondary"
                  >
                    charbon lié au feu dans un rêve
                  </Link>{" "}
                  invite le croyant à s&apos;interroger sur la nature de
                  ses actes et de ses acquisitions.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le charbon et la purification
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le charbon est aussi un agent de purification. On
                  l&apos;utilise traditionnellement pour filtrer l&apos;eau,
                  purifier l&apos;air et nettoyer les surfaces. Dans le
                  monde des rêves, cette propriété se traduit par une
                  dimension spirituelle : le charbon peut symboliser un
                  processus de purification intérieure, une épreuve
                  nécessaire qui débarrasse l&apos;âme de ses impuretés.
                  Le rêveur qui voit du charbon dans une optique de
                  nettoyage ou de purification peut y lire un appel à
                  l&apos;introspection et au repentir (tawba).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le charbon et l&apos;argent haram
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;une des interprétations les plus fréquentes du
                  charbon dans les rêves concerne l&apos;argent illicite.
                  Le charbon, noir et salissant, représente souvent des
                  biens acquis par des moyens contestables : usure,
                  tromperie, vol, corruption. Les interprètes musulmans
                  soulignent que toucher du charbon qui noircit les mains
                  dans un rêve est un avertissement fort. Le rêveur est
                  invité à examiner la provenance de ses revenus et à
                  s&apos;assurer qu&apos;ils sont conformes aux
                  prescriptions islamiques. La question de{" "}
                  <Link
                    href="/rever-argent-or-islam"
                    className="text-secondary underline decoration-secondary/30 underline-offset-2 hover:decoration-secondary"
                  >
                    l&apos;argent et de l&apos;or dans les rêves en islam
                  </Link>{" "}
                  rejoint cette problématique sous un angle complémentaire.
                </p>

                <div className="my-8 overflow-hidden rounded-xl border border-border">
                  <Image
                    src="/images/croissant-lune-dore-lanternes-islam-ramadan.jpg"
                    alt="Symbolique du charbon dans les rêves en islam, entre feu, purification et avertissement"
                    width={800}
                    height={450}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Ibn Sirin et An-Nabulsi */}
              {/* ============================================ */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interprétation selon Ibn Sirin et An-Nabulsi
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les deux grands maîtres de l&apos;oniromancie islamique,
                  Ibn Sirin (mort en 110 H) et le cheikh An-Nabulsi (mort
                  en 1143 H), ont chacun apporté un éclairage sur la
                  vision du charbon dans les rêves. Leurs analyses, bien
                  que complémentaires, reflètent des perspectives
                  différentes.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le charbon selon Ibn Sirin
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin considère le charbon dans un rêve comme un
                  symbole lié à la subsistance et à la richesse. Selon
                  lui, voir du charbon en combustion annonce un bien
                  abondant et une nourriture plentiful qui parviendra au
                  rêveur. Le charbon de bois allumé représente les
                  bénédictions qui arrivent, à condition que le feu soit
                  contenu et utile.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En revanche, Ibn Sirin met en garde contre le charbon
                  noirci que l&apos;on touche sans qu&apos;il ne brûle :
                  ce type de vision renvoie à une richesse acquise sans
                  clarté, un argent dont la provenance est trouble. Le
                  savant insiste sur la corrélation entre la couleur noire
                  du charbon et l&apos;opacité des transactions
                  financières du rêveur. Ramasser du charbon dans un rêve
                  est un signe avant-coureur de manque d&apos;argent ou
                  de difficultés financières à venir.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin enseigne aussi que brûler du charbon de bois
                  dans un rêve indique la bonté et les bénédictions
                  abondantes qui parviendront au rêveur. Ce scénario est
                  interprété positivement lorsque le feu sert un usage
                  bénéfique : cuisiner, chauffer, éclairer. La notion
                  d&apos;utilité du feu est centrale dans son analyse.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le charbon selon An-Nabulsi
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le cheikh An-Nabulsi apporte une lecture plus nuancée
                  et contextuelle. Pour lui, le charbon ardent dans un
                  rêve symbolise un homme qui a été victime d&apos;une
                  injustice de la part d&apos;un dirigeant ou d&apos;une
                  autorité, et qui a été dépouillé de ses biens. Le
                  charbon incandescent porte la mémoire d&apos;une
                  souffrance ou d&apos;un abus de pouvoir.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi distingue aussi le charbon selon sa taille.
                  Les gros morceaux de charbon utilisés dans un contexte
                  qui nécessite de petits charbons indiquent la
                  perturbation des affaires, les soucis et les
                  complications. Cette image traduit un déséquilibre :
                  les moyens ne sont pas adaptés aux fins, et le rêveur
                  s&apos;engage dans des voies qui ne correspondent pas
                  à ses capacités ou à ses besoins réels.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi insiste également sur la transformation du
                  charbon. Un charbon qui s&apos;éteint représente la fin
                  d&apos;un pouvoir, la disparition d&apos;un ennemi ou
                  la résolution d&apos;un conflit. Un charbon qui
                  s&apos;enflamme soudainement annonce le retour d&apos;un
                  danger que l&apos;on croyait passé. Cette dynamique de
                  transformation fait du charbon un symbole
                  particulièrement vivant dans l&apos;interprétation des
                  rêves.
                </p>

                {/* Tableau comparatif */}
                <div className="mt-8 overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-accent">
                        <th className="py-3 pl-4 text-left font-semibold text-primary">
                          Type de charbon
                        </th>
                        <th className="py-3 px-4 text-left font-semibold text-primary">
                          Ibn Sirin
                        </th>
                        <th className="py-3 pr-4 text-left font-semibold text-primary">
                          An-Nabulsi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pl-4 font-medium text-foreground">
                          Charbon ardent
                        </td>
                        <td className="py-3 px-4">
                          Richesse, bien abondant
                        </td>
                        <td className="py-3 pr-4">
                          Injustice subie, spoliation
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pl-4 font-medium text-foreground">
                          Charbon éteint
                        </td>
                        <td className="py-3 px-4">
                          Perte financière, espoir déçu
                        </td>
                        <td className="py-3 pr-4">
                          Fin d&apos;une épreuve, ennemi vaincu
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pl-4 font-medium text-foreground">
                          Brûler du charbon
                        </td>
                        <td className="py-3 px-4">
                          Bénédictions, bonté à venir
                        </td>
                        <td className="py-3 pr-4">
                          Transformation, renouveau
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pl-4 font-medium text-foreground">
                          Ramasser du charbon
                        </td>
                        <td className="py-3 px-4">
                          Manque d&apos;argent à venir
                        </td>
                        <td className="py-3 pr-4">
                          Effort sans récompense immédiate
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pl-4 font-medium text-foreground">
                          Manger du charbon
                        </td>
                        <td className="py-3 px-4">
                          Argent haram, péchés
                        </td>
                        <td className="py-3 pr-4">
                          Paroles blessantes, nuisance
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/calligraphie-allah-islam-coeur-bois.jpg"
                    alt="Calligraphie du nom d Allah sur bois, illustrant la symbolique spirituelle du charbon dans les reves en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Charbon ardent et charbon éteint */}
              {/* ============================================ */}
              <section id="charbon-ardent" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Charbon ardent et charbon éteint : deux messages opposés
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La distinction entre le charbon ardent (braise) et le
                  charbon éteint constitue la clé de voûte de
                  l&apos;interprétation. Ces deux états du charbon
                  portent des messages radicalement différents, et le
                  rêveur doit prêter attention à ce détail pour
                  comprendre le sens de sa vision.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le charbon ardent (braise incandescente)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La braise incandescente est un symbole de vie, de force
                  et de potentiel. Elle représente une énergie en action,
                  une situation en cours de développement. Voir des
                  braises rougeoyantes dans un rêve peut annoncer une
                  période de prospérité, un revenu qui arrive ou un
                  projet qui porte ses fruits. La chaleur du charbon
                  ardent évoque aussi la passion, l&apos;ardeur dans la
                  foi et la détermination.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cependant, la braise qui brûle de manière incontrôlée
                  porte un avertissement. Elle rappelle les tentations
                  de ce monde (dunya), les désirs qui consument
                  l&apos;âme et les passions qui éloignent du droit
                  chemin. Le Prophète Muhammad (paix et salut sur lui)
                  a comparé celui qui tient à sa religion dans les
                  temps de fitna à celui qui tient une braise dans sa
                  main : la douleur est réelle, mais la récompense est
                  immense. Ce hadith éclaire puissamment le sens du
                  charbon ardent dans les rêves.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si le rêveur voit des braises qui éclairent la nuit
                  ou réchauffent un foyer, c&apos;est un signe positif.
                  En revanche, des braises qui se répandent hors du
                  foyer, qui menacent de provoquer un incendie ou qui
                  brûlent des objets précieux, constituent un
                  avertissement sérieux. Le rêveur doit examiner ses
                  affaires, ses relations et sa pratique religieuse pour
                  identifier la source du danger.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le charbon éteint (charbon froid et noir)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le charbon éteint représente l&apos;absence de vie,
                  la fin d&apos;un cycle ou la perte d&apos;une
                  opportunité. Contrairement à la braise, il ne porte
                  plus de feu intérieur : son potentiel s&apos;est
                  épuisé. Dans l&apos;interprétation des rêves, le
                  charbon éteint peut signifier la fin d&apos;une
                  relation, la perte d&apos;un emploi, l&apos;échec
                  d&apos;un projet ou la disparition d&apos;un ennemi.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les interprètes musulmans voient aussi dans le charbon
                  éteint un symbole de tristesse et de mélancolie. Le
                  noir du charbon sans la chaleur du feu renvoie à un
                  état d&apos;âme sombre, une période de doute ou de
                  découragement. Mais cette lecture n&apos;est pas
                  exclusivement négative : le charbon éteint signifie
                  aussi que le danger est passé. Si le rêveur traversait
                  une épreuve liée au feu — querelle, tentation, conflit —
                  voir du charbon éteint indique que la crise est
                  résolue.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La{" "}
                  <Link
                    href="/rever-lune-islam"
                    className="text-secondary underline decoration-secondary/30 underline-offset-2 hover:decoration-secondary"
                  >
                    lune dans les rêves en islam
                  </Link>{" "}
                  offre un contraste intéressant avec le charbon éteint :
                  là où la lune symbolise la lumière dans l&apos;obscurité,
                  le charbon éteint incarne l&apos;obscurité sans lumière,
                  un rappel de la nécessité de raviver sa foi.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Tenir du charbon dans la main */}
              {/* ============================================ */}
              <section id="tenir-charbon" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Tenir du charbon dans la main en rêve
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le geste de tenir du charbon dans la main est
                  l&apos;un des scénarios les plus fréquemment rapportés
                  et les plus chargés de sens. La main, dans la
                  symbolique islamique, représente le pouvoir d&apos;agir,
                  la capacité de donner et de recevoir, et la
                  responsabilité du croyant face à ses actes.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Tenir du charbon ardent
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Tenir une braise dans la main est un acte douloureux
                  qui renvoie directement au hadith prophétique sur
                  la persévérance dans la foi. Le rêveur qui se voit
                  tenir du charbon ardent sans le lâcher fait preuve
                  d&apos;une détermination remarquable. Ce rêve peut
                  indiquer que le croyant traverse une épreuve
                  difficile — financière, familiale ou spirituelle —
                  mais qu&apos;il tient bon malgré la douleur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si le charbon brûle la main et laisse une marque,
                  les interprètes y voient un avertissement : le
                  rêveur s&apos;accroche à quelque chose qui lui nuit.
                  Cela peut être de l&apos;argent haram, une relation
                  toxique ou un emploi contraire à l&apos;éthique
                  islamique. La brûlure sur la main symbolise les
                  conséquences visibles d&apos;un choix malsain.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Tenir du charbon éteint ou froid
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Tenir du charbon froid ou éteint dans la main
                  indique que le rêveur possède quelque chose qui a
                  perdu sa valeur. Cela peut concerner un investissement
                  qui n&apos;a pas porté ses fruits, un projet
                  abandonné ou une relation qui s&apos;est refroidie.
                  Les mains noircies par le charbon éteint symbolisent
                  la trace laissée par cette perte : le rêveur en
                  garde les stigmates, même si le danger est passé.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin précise que si le rêveur se lave les mains
                  après avoir touché du charbon, c&apos;est un signe
                  favorable : il parviendra à se débarrasser des
                  conséquences négatives de ses actes passés. Le
                  nettoyage des mains symbolise le repentir et le
                  renouveau. C&apos;est un rappel que rien n&apos;est
                  définitif et que la tawba (repentance) efface les
                  traces du péché.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Recevoir du charbon de quelqu&apos;un
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si une personne connue donne du charbon au rêveur,
                  cela peut indiquer que cette personne lui transmet
                  un fardeau, une responsabilité difficile ou un bien
                  douteux. Le rêveur doit être vigilant dans ses
                  transactions avec cette personne. Si le charbon
                  donné est ardent, la situation est urgente et
                  potentiellement dangereuse. S&apos;il est éteint,
                  la personne transmet plutôt une déception ou un
                  projet avorté.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Marcher sur des braises */}
              {/* ============================================ */}
              <section id="marcher-braises" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Marcher sur des braises en rêve : traverser l&apos;épreuve
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Marcher sur des braises est une image forte qui
                  symbolise le passage à travers une épreuve intense.
                  Ce scénario onirique est riche de sens et varie
                  considérablement selon le ressenti du rêveur pendant
                  l&apos;expérience.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Marcher sans douleur sur les braises
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si le rêveur marche sur des braises sans ressentir
                  de douleur ni de brûlure, c&apos;est un signe
                  remarquable de protection divine. Ce rêve indique
                  que le croyant traverse ou traversera une période
                  difficile, mais qu&apos;une force supérieure le
                  protège. Il sortira renforcé de cette épreuve, avec
                  une foi plus solide et une confiance accrue en la
                  miséricorde d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants rapprochent cette image du récit coranique
                  du prophète Ibrahim (Abraham, paix sur lui), jeté
                  dans le feu par son peuple. Allah ordonna au feu
                  d&apos;être &laquo;&nbsp;fraîcheur et salut pour
                  Ibrahim&nbsp;&raquo; (sourate Al-Anbiya, verset 69).
                  Marcher sur des braises sans souffrir évoque cette
                  protection miraculeuse accordée aux serviteurs
                  sincères d&apos;Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Marcher avec douleur sur les braises
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si la marche sur les braises est accompagnée de
                  douleur, de cris ou de brûlures aux pieds, le rêve
                  porte un avertissement. Le rêveur s&apos;engage dans
                  une voie périlleuse : un projet risqué, une relation
                  interdite ou un chemin qui l&apos;éloigne de la
                  guidance divine. Les pieds brûlés symbolisent un
                  parcours de vie marqué par de mauvais choix.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi ajoute que marcher sur des braises peut
                  aussi indiquer que le rêveur manque de respect envers
                  son entourage ou qu&apos;il se comporte de manière
                  hautaine dans les assemblées. Les braises sous les
                  pieds rappellent que le sol sur lequel on marche
                  peut se dérober à tout moment si l&apos;on ne fait
                  pas preuve d&apos;humilité et de crainte d&apos;Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Traverser un chemin de braises
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voir un long chemin couvert de braises que l&apos;on
                  doit traverser symbolise une épreuve prolongée, un
                  processus de purification qui prend du temps. Ce
                  rêve annonce souvent une attente difficile liée à
                  un projet, un voyage ou une décision qui génère
                  beaucoup d&apos;anxiété. Le rêveur est invité à
                  faire preuve de patience (sabr) et à multiplier les
                  invocations. La thématique de l&apos;épreuve rejoint
                  celle de la{" "}
                  <Link
                    href="/rever-mort-islam-messages"
                    className="text-secondary underline decoration-secondary/30 underline-offset-2 hover:decoration-secondary"
                  >
                    mort dans les rêves en islam
                  </Link>
                  , qui symbolise aussi la fin d&apos;un cycle et le
                  passage vers un renouveau.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Selon le profil du rêveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon le profil du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;interprétation d&apos;un rêve de charbon varie
                  selon la situation personnelle, le sexe et le contexte
                  de vie du rêveur. Les interprètes musulmans prennent
                  en compte ces éléments pour affiner leur analyse et
                  proposer une lecture adaptée.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Rêver de charbon ardent peut symboliser une
                      passion amoureuse intense ou un prétendant dont
                      les intentions restent floues. Le charbon éteint
                      évoque une déception sentimentale ou un espoir
                      de mariage qui s&apos;éloigne. Si la jeune femme
                      se brûle avec le charbon, elle est avertie contre
                      une relation qui pourrait lui nuire.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le charbon dans le rêve d&apos;une femme mariée
                      renvoie souvent au foyer conjugal. Un charbon
                      qui brûle dans un fourneau symbolise la
                      prospérité du ménage et l&apos;harmonie
                      familiale. Du charbon éparpillé ou qui noircit
                      le sol de la maison avertit de tensions
                      conjugales ou de soucis financiers dans le couple.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les rêves de charbon pendant la grossesse
                      reflètent souvent les inquiétudes naturelles liées
                      à l&apos;accouchement. Un charbon chaud et
                      lumineux est un signe de vitalité pour le bébé.
                      Un charbon éteint peut refléter la peur de la
                      perte ou l&apos;anxiété face à l&apos;inconnu.
                      Le rêve invite à la confiance en Allah et à la
                      sérénité.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Pour un homme, le charbon est étroitement lié aux
                      questions de subsistance (rizq) et de travail. Du
                      charbon ardent annonce des revenus ou un projet
                      fructueux. Du charbon éteint signale un emploi
                      perdu ou un commerce en déclin. Tenir du charbon
                      brûlant évoque une responsabilité financière
                      lourde à porter.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un malade
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Si une personne malade rêve de charbon ardent,
                      cela peut indiquer la fièvre ou l&apos;intensité
                      de la maladie. Du charbon qui s&apos;éteint dans
                      le rêve d&apos;un malade est un signe positif :
                      il annonce la guérison et la fin de la souffrance.
                      Le rêveur est encouragé à persévérer dans ses
                      invocations de guérison.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un étudiant en sciences religieuses
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le charbon symbolise ici la connaissance brute
                      qui a besoin d&apos;être transformée par le feu
                      de l&apos;apprentissage. Un charbon qui
                      s&apos;enflamme annonce une compréhension
                      profonde et une illumination spirituelle. Du
                      charbon qui reste noir et froid invite à
                      redoubler d&apos;efforts dans l&apos;étude.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/prosternation-sujud-priere-islam-mosquee.jpg"
                    alt="Prosternation en priere dans une mosquee, symbolisant le repentir et la purification apres un reve de charbon"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils après ce rêve */}
              {/* ============================================ */}
              <section id="conseils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Que faire après un rêve de charbon en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a
                  enseigné des réflexes précis face aux rêves troublants
                  ou porteurs de sens. Voici les recommandations à
                  suivre après un rêve impliquant du charbon ou des
                  braises.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Chercher refuge auprès d&apos;Allah</strong> :
                      dire &laquo;&nbsp;A&apos;oudhou billahi mina
                      ash-shaytani ar-rajim&nbsp;&raquo; trois fois en se
                      réveillant, puis cracher légèrement sur sa gauche
                      trois fois. Ce geste prophétique protège contre
                      les effets négatifs du rêve.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Examiner la provenance de ses
                      revenus</strong> : le charbon étant souvent associé
                      à l&apos;argent douteux, le rêveur est invité à
                      faire un bilan honnête de ses finances. S&apos;il
                      soupçonne la présence de biens illicites, il doit
                      chercher à s&apos;en purifier par l&apos;aumône
                      (sadaqa) et le repentir sincère.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas raconter le rêve à tout le
                      monde</strong> : partager un rêve troublant avec
                      des personnes non qualifiées peut amplifier
                      l&apos;angoisse. Le Prophète recommande de ne le
                      confier qu&apos;à une personne de confiance ou un
                      savant compétent en oniromancie.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Changer de côté dans le lit</strong> : si
                      le rêve survient en pleine nuit, se retourner et
                      prier deux unités de prière (rak&apos;atayn) pour
                      apaiser le cœur et retrouver la sérénité.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Multiplier les bonnes actions</strong> :
                      l&apos;aumône, la lecture du Coran, le dhikr et
                      l&apos;istighfar (demande de pardon) sont des
                      protections recommandées après tout rêve
                      impliquant le feu ou ses dérivés.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Faire preuve de patience</strong> : si le
                      rêve de charbon annonce une épreuve, le croyant
                      doit accueillir cette épreuve avec sabr (patience)
                      et tawakkul (confiance en Allah). Les épreuves
                      sont des occasions d&apos;élévation spirituelle
                      pour celui qui les traverse avec foi.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il est fondamental de rappeler que les rêves ne
                  déterminent pas l&apos;avenir du croyant de manière
                  absolue. Ils sont des signes, des rappels ou des
                  avertissements, mais c&apos;est l&apos;action
                  consciente et la relation avec Allah qui orientent
                  le destin. Le rêve de charbon, qu&apos;il soit
                  positif ou négatif, est une occasion de se rapprocher
                  d&apos;Allah, de renforcer sa foi et d&apos;examiner
                  ses actes avec lucidité.
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
                    href="/rever-feu-incendie-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de feu en islam
                  </Link>
                  <Link
                    href="/rever-argent-or-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;argent et d&apos;or
                  </Link>
                  <Link
                    href="/rever-lune-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de la lune en islam
                  </Link>
                  <Link
                    href="/rever-mort-islam-messages"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de la mort en islam
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
