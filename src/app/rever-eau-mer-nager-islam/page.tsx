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
    "Rêver d'eau, de mer ou de nager en islam : signification",
  description:
    "Que signifie rêver d'eau en islam ? Eau claire, mer, nager, pluie, se noyer : interprétation selon Ibn Sirin, An-Nabulsi et les sources islamiques.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-eau-mer-nager-islam",
  },
};

const tocItems = [
  { id: "symbolique-eau", label: "L'eau dans la tradition islamique" },
  { id: "eau-claire-trouble", label: "Eau claire vs eau trouble" },
  { id: "mer-ocean", label: "Rêver de la mer et de l'océan" },
  { id: "nager-piscine", label: "Nager, piscine et rivière" },
  { id: "boire-noyer", label: "Boire de l'eau et se noyer" },
  { id: "pluie-marcher", label: "Pluie et marcher sur l'eau" },
  { id: "purification", label: "Eau et purification spirituelle" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Rêver d'eau claire en islam est-il un bon signe ?",
    answer:
      "Oui, rêver d'eau claire et limpide est considéré comme un signe très favorable en islam. Selon Ibn Sirin, l'eau pure symbolise la science bénéfique, la subsistance licite (rizq halal) et la purification de l'âme. Une eau claire et calme annonce une période de sérénité, de prospérité et de rapprochement avec Allah. Plus l'eau est transparente, plus le bienfait annoncé est grand.",
  },
  {
    question: "Que signifie rêver de mer agitée en islam ?",
    answer:
      "Rêver d'une mer agitée ou déchaînée symbolise des épreuves, des turbulences émotionnelles ou des difficultés à venir. An-Nabulsi associe la mer agitée à une autorité injuste ou à des situations hors de contrôle. Si le rêveur se trouve en pleine tempête maritime, cela peut indiquer une période de confusion spirituelle. La clé est de chercher refuge auprès d'Allah et de multiplier les invocations.",
  },
  {
    question: "Rêver de nager dans une eau claire en islam : quelle signification ?",
    answer:
      "Nager dans une eau claire et calme est un signe de réussite et de maîtrise de sa vie. Selon les interprètes musulmans, ce rêve indique que le rêveur surmonte ses épreuves avec aisance et progresse sur le chemin de la foi. Nager sans effort annonce la prospérité et le bonheur. Si l'eau devient trouble en cours de nage, cela invite à la vigilance face à des tentations ou des obstacles imprévus.",
  },
  {
    question: "Que signifie rêver de se noyer en islam ?",
    answer:
      "Rêver de se noyer est un avertissement sérieux en islam. Ibn Sirin interprète la noyade comme un risque de succomber aux péchés, aux tentations de la dounia (vie mondaine) ou à un excès qui éloigne de la foi. Si le rêveur est sauvé de la noyade, c'est un signe de repentir accepté et de miséricorde divine. Se noyer dans une eau trouble aggrave la signification négative du rêve.",
  },
  {
    question: "Rêver de boire de l'eau en islam : est-ce positif ?",
    answer:
      "Boire de l'eau pure et fraîche en rêve est un signe très positif. Cela symbolise l'acquisition de la science religieuse, la guérison d'une maladie ou la satisfaction d'un besoin. Boire de l'eau de Zamzam est le meilleur des signes. En revanche, boire de l'eau salée ou trouble annonce des soucis, des chagrins ou une source de revenus douteuse. La qualité de l'eau reflète la qualité du bienfait reçu.",
  },
  {
    question: "Que signifie rêver de pluie en islam ?",
    answer:
      "La pluie dans un rêve islamique est généralement un symbole de rahma (miséricorde divine) et de baraka. Une pluie douce et bienfaisante annonce des bénédictions, une récolte abondante ou l'exaucement d'une invocation. Une pluie torrentielle ou destructrice peut symboliser une épreuve collective ou un châtiment. Le Coran associe la pluie à la résurrection de la terre morte, ce qui renforce sa dimension spirituelle.",
  },
  {
    question: "Rêver de marcher sur l'eau en islam : quelle interprétation ?",
    answer:
      "Marcher sur l'eau dans un rêve est un signe de foi solide et de confiance absolue en Allah. Ce rêve indique que le rêveur possède une certitude spirituelle qui le protège des épreuves. Selon An-Nabulsi, marcher sur l'eau peut aussi symboliser un voyage réussi ou la capacité à surmonter des situations que d'autres jugent impossibles. C'est un rêve rare et très valorisé dans la tradition onirique islamique.",
  },
  {
    question: "Rêver d'eau qui coule dans sa maison en islam : bon ou mauvais signe ?",
    answer:
      "La réponse dépend de la nature de l'eau. Si l'eau qui entre dans la maison est claire et pure, c'est un signe de baraka, de rizq abondant et de bonheur familial. Si l'eau est trouble, sale ou en inondation, cela peut annoncer des conflits familiaux, des pertes financières ou une fitna (épreuve). Les interprètes recommandent de considérer l'état émotionnel ressenti dans le rêve pour affiner la lecture.",
  },
];

export default function ReverEauMerNagerIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-eau-mer-nager-islam/#article",
        headline:
          "Rêver d'eau, de mer ou de nager en islam : signification",
        description:
          "Que signifie rêver d'eau en islam ? Eau claire, mer, nager, pluie, se noyer : interprétation selon Ibn Sirin, An-Nabulsi et les sources islamiques.",
        image:
          "/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg",
        datePublished: "2026-03-06",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-eau-mer-nager-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-eau-mer-nager-islam/#breadcrumb",
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
            name: "Rêver d'eau",
            item: "https://www.islamreligion.fr/rever-eau-mer-nager-islam",
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
          title="Rêver d'eau, de mer ou de nager en islam : signification"
          subtitle="Interprétation complète des rêves d'eau selon Ibn Sirin, An-Nabulsi et la tradition islamique."
          imageSrc="/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg"
          imageAlt="Rêver d'eau en islam, signification spirituelle de la mer, nager et purification"
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
                <span className="text-foreground">Rêver d&apos;eau</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver d&apos;eau en islam porte une signification profonde liée
                  à la vie, à la purification et à la foi. Selon Ibn Sirin,
                  l&apos;eau claire symbolise la science et la subsistance
                  licite, tandis que l&apos;eau trouble met en garde contre les
                  épreuves. La mer représente le monde et ses défis, nager
                  traduit la capacité à affronter la vie, et la pluie est un
                  signe de miséricorde divine. Chaque détail du rêve — couleur,
                  mouvement, action du rêveur — affine l&apos;interprétation.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : L'eau dans la tradition islamique */}
              {/* ============================================ */}
              <section id="symbolique-eau" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;eau dans la tradition islamique : un symbole de vie
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans le Coran, Allah dit : <em>&laquo; Et Nous avons fait de
                  l&apos;eau toute chose vivante &raquo;</em> (sourate
                  Al-Anbiya, 21:30). Cette parole résume la place centrale de
                  l&apos;eau dans la cosmologie islamique. Elle est à la fois
                  source de vie, instrument de purification et symbole de la
                  miséricorde divine. Naturellement, lorsque l&apos;eau apparaît
                  dans un{" "}
                  <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    rêve en islam
                  </Link>
                  , elle porte un message d&apos;une richesse particulière.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin, le plus célèbre des interprètes de rêves en islam,
                  considère l&apos;eau comme un reflet de l&apos;état spirituel
                  du rêveur. L&apos;eau pure et fraîche incarne la foi vivante,
                  la connaissance bénéfique et la subsistance bénie. À
                  l&apos;inverse, l&apos;eau sale, stagnante ou nauséabonde
                  révèle un éloignement de la voie droite, des gains illicites
                  ou un mal-être intérieur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi enrichit cette lecture en associant chaque forme
                  d&apos;eau à une dimension précise : la mer représente le
                  souverain ou le monde, la rivière est le chemin de la vie, la
                  pluie est la rahma (miséricorde) qui descend du ciel, et la
                  source est la science qui jaillit du coeur du savant. Cette
                  diversité fait du rêve d&apos;eau l&apos;un des plus riches et
                  des plus commentés dans la tradition onirique islamique.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg"
                    alt="Symbolique de l'eau en islam, mosquée et nuit étoilée représentant la spiritualité"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Eau claire vs eau trouble */}
              {/* ============================================ */}
              <section id="eau-claire-trouble" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Eau claire ou eau trouble : deux messages opposés
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La qualité de l&apos;eau dans le rêve détermine
                  fondamentalement son interprétation. Ibn Sirin insiste sur
                  cette distinction : l&apos;eau claire est porteuse de bien,
                  l&apos;eau trouble est porteuse d&apos;avertissement. Voici
                  les principales nuances selon la tradition.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Eau claire et limpide
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voir de l&apos;eau claire dans un rêve est un signe de
                  bénédiction. Elle symbolise la science religieuse utile, la
                  pureté de l&apos;intention et un rizq (subsistance) licite et
                  abondant. Si le rêveur boit cette eau, il acquiert un savoir
                  qui lui profitera. S&apos;il s&apos;y baigne, c&apos;est un
                  signe de repentir sincère et de renouveau spirituel.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Eau trouble, sale ou stagnante
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;eau trouble ou boueuse dans un rêve annonce des
                  difficultés : soucis financiers, relations toxiques ou
                  éloignement de la foi. L&apos;eau stagnante, qui ne coule pas,
                  peut indiquer une vie spirituelle figée, un manque de
                  progression ou un enfermement dans les habitudes néfastes.
                  An-Nabulsi ajoute que l&apos;eau sale peut aussi représenter
                  un argent acquis de manière douteuse.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Eau courante vs eau stagnante
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;eau qui coule — dans une rivière, un ruisseau ou une
                  source — symbolise le mouvement, la progression et la baraka
                  en circulation. Elle annonce des changements positifs, une
                  évolution dans la carrière ou un voyage bénéfique. L&apos;eau
                  stagnante, au contraire, invite le rêveur à se remettre en
                  question et à chercher le renouveau dans sa pratique
                  religieuse et sa vie quotidienne.
                </p>

                {/* Tableau eau claire vs trouble */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type d&apos;eau
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification positive
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Signification négative
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Eau claire et fraîche
                        </td>
                        <td className="py-3 pr-4">
                          Science, rizq halal, guérison
                        </td>
                        <td className="py-3">—</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Eau trouble ou boueuse
                        </td>
                        <td className="py-3 pr-4">—</td>
                        <td className="py-3">
                          Soucis, gains douteux, confusion
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Eau courante (rivière)
                        </td>
                        <td className="py-3 pr-4">
                          Progression, voyage, baraka
                        </td>
                        <td className="py-3">
                          Courant trop fort : épreuves
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Eau stagnante
                        </td>
                        <td className="py-3 pr-4">—</td>
                        <td className="py-3">
                          Vie figée, manque de renouveau
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Eau chaude ou bouillante
                        </td>
                        <td className="py-3 pr-4">—</td>
                        <td className="py-3">
                          Maladie, colère, châtiment
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Rêver de la mer et de l'océan */}
              {/* ============================================ */}
              <section id="mer-ocean" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de la mer en islam : le monde et ses profondeurs
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La mer occupe une place à part dans l&apos;interprétation des
                  rêves islamiques. Pour Ibn Sirin et An-Nabulsi, elle
                  représente le monde (dounia) dans toute sa vastitude : ses
                  richesses, ses dangers et ses mystères. La mer peut aussi
                  symboliser un souverain puissant, une autorité ou une épreuve
                  majeure à traverser.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Mer calme et paisible
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Contempler une mer calme et bleue dans un rêve est un signe de
                  paix intérieure, de stabilité et de protection divine. Ce rêve
                  peut annoncer une période favorable pour les projets, les
                  voyages ou les relations familiales. La sérénité de la mer
                  reflète la sérénité du coeur du croyant qui a confiance en son
                  Seigneur.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Mer agitée, vagues et tempêtes
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Une mer déchaînée, avec de hautes vagues et des tempêtes,
                  symbolise des épreuves importantes, des conflits ou une
                  instabilité émotionnelle. Les vagues représentent souvent les
                  émotions qui submergent le rêveur. Plus les vagues sont
                  hautes, plus l&apos;épreuve annoncée est intense. An-Nabulsi
                  associe la tempête en mer à une fitna (trouble) dans la
                  communauté ou dans la vie personnelle du rêveur.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Nager dans la mer
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Nager dans la mer en rêve symbolise le combat du croyant face
                  aux épreuves de la vie. Si le rêveur nage avec aisance dans
                  une mer claire, c&apos;est un signe qu&apos;il maîtrise les
                  défis de son existence et qu&apos;il progresse vers ses
                  objectifs. S&apos;il peine à nager ou s&apos;il est emporté
                  par les courants, cela indique un sentiment d&apos;impuissance
                  face aux circonstances. Ce rêve rejoint la thématique
                  d&apos;autres visions aquatiques, comme{" "}
                  <Link href="/reve-poisson-islam-richesse" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    rêver de poisson en islam
                  </Link>
                  , qui met en lumière le lien entre l&apos;eau et la
                  subsistance.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver de crocodile en islam : protection et avertissement"
                  description="Un autre animal aquatique chargé de symboles dans la tradition onirique islamique."
                  href="/rever-crocodile-islam-protection"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Nager, piscine et rivière */}
              {/* ============================================ */}
              <section id="nager-piscine" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Nager, piscine et rivière : le parcours du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le fait de nager dans un rêve islamique est une métaphore du
                  cheminement personnel. Chaque lieu aquatique — piscine,
                  rivière, lac — apporte une nuance distincte à
                  l&apos;interprétation.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Nager dans une eau claire et calme
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Signe de réussite imminente, de paix intérieure et de
                        maîtrise de ses affaires. Le rêveur avance avec
                        confiance dans sa vie spirituelle et matérielle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Nager dans une eau trouble ou agitée
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Avertissement de difficultés sur le chemin. Des conflits
                        familiaux, des obstacles professionnels ou des doutes
                        spirituels peuvent se manifester. Le rêveur est invité
                        à redoubler de patience et d&apos;invocations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Rêver de piscine en islam
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La piscine, espace contrôlé et délimité, symbolise un
                        cadre de vie maîtrisé. Nager dans une piscine claire
                        annonce la stabilité et le confort. Une piscine vide
                        peut indiquer un manque affectif ou une perte de
                        repères. Une piscine sale met en garde contre un
                        environnement malsain.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Rêver de rivière en islam
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La rivière représente le cours de la vie. Une rivière
                        au débit régulier et à l&apos;eau limpide symbolise un
                        parcours harmonieux et béni. Traverser une rivière
                        annonce le passage d&apos;une étape décisive. Les
                        fleuves du Paradis mentionnés dans le Coran renforcent
                        la dimension spirituelle de ce rêve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Nager avec difficulté ou contre le courant
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lutter dans l&apos;eau traduit une résistance aux
                        épreuves de la vie. Ce rêve n&apos;est pas
                        nécessairement négatif : il peut symboliser le jihad
                        an-nafs (combat intérieur) que mène le croyant pour
                        rester sur le droit chemin face aux tentations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau nager */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Lieu de la nage
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Symbolique
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Message pour le rêveur
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mer claire
                        </td>
                        <td className="py-3 pr-4">
                          Maîtrise face au monde
                        </td>
                        <td className="py-3">
                          Confiance et persévérance
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Rivière calme
                        </td>
                        <td className="py-3 pr-4">
                          Parcours de vie harmonieux
                        </td>
                        <td className="py-3">
                          Continuer sur cette voie
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Piscine claire
                        </td>
                        <td className="py-3 pr-4">
                          Stabilité et confort
                        </td>
                        <td className="py-3">
                          Profiter de la sérénité acquise
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Lac profond
                        </td>
                        <td className="py-3 pr-4">
                          Profondeur intérieure
                        </td>
                        <td className="py-3">
                          Explorer sa spiritualité
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Eau trouble
                        </td>
                        <td className="py-3 pr-4">
                          Confusion, épreuve
                        </td>
                        <td className="py-3">
                          Se purifier et demander pardon
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Boire de l'eau et se noyer */}
              {/* ============================================ */}
              <section id="boire-noyer" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Boire de l&apos;eau et se noyer en islam : entre bienfait et
                  avertissement
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;interaction du rêveur avec l&apos;eau — la boire, y
                  plonger ou s&apos;y noyer — constitue un indicateur précieux
                  pour l&apos;interprétation. Ces actions reflètent le rapport
                  du croyant à la connaissance, aux bienfaits et aux épreuves.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Boire de l&apos;eau en rêve
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Boire de l&apos;eau pure et fraîche symbolise
                  l&apos;acquisition de la science utile, la guérison ou la
                  satisfaction d&apos;un besoin profond. Le Prophète Muhammad
                  (paix et salut sur lui) a mentionné les vertus de l&apos;eau
                  de Zamzam, et en boire dans un rêve est considéré comme l&apos;un
                  des meilleurs signes. Boire de l&apos;eau salée ou amère, en
                  revanche, annonce des chagrins, des difficultés ou une source
                  de revenus problématique.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Se noyer dans un rêve
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La noyade dans un rêve islamique est un symbole fort
                  d&apos;avertissement. Ibn Sirin y voit le risque de succomber
                  aux péchés ou de se perdre dans les plaisirs éphémères de ce
                  monde. Se noyer dans la mer peut indiquer que le rêveur est
                  submergé par les épreuves ou qu&apos;il s&apos;égare de la
                  voie d&apos;Allah. Toutefois, si le rêveur est sauvé ou
                  parvient à remonter à la surface, c&apos;est un signe
                  d&apos;espoir : son repentir sera accepté et la miséricorde
                  divine le couvrira.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La noyade peut aussi, dans certains contextes, symboliser le
                  martyre (shahada) si le rêveur est une personne pieuse. Le
                  hadith rapporté par Muslim classe le noyé parmi les martyrs,
                  ce qui donne à ce rêve une dimension plus nuancée qu&apos;il
                  n&apos;y paraît. Comme pour{" "}
                  <Link href="/rever-mort-islam-messages" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    rêver de la mort en islam
                  </Link>
                  , le contexte et l&apos;état du rêveur sont déterminants pour
                  distinguer l&apos;avertissement de la bonne nouvelle.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Pluie et marcher sur l'eau */}
              {/* ============================================ */}
              <section id="pluie-marcher" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de pluie et de marcher sur l&apos;eau en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La pluie et la capacité de marcher sur l&apos;eau sont deux
                  manifestations oniriques chargées de sens dans la tradition
                  islamique. L&apos;une vient du ciel comme une bénédiction,
                  l&apos;autre défie les lois naturelles comme un signe de foi
                  extraordinaire.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Rêver de pluie
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La pluie dans le Coran est un signe de la miséricorde
                  d&apos;Allah : <em>&laquo; C&apos;est Lui qui envoie les
                  vents comme une annonce de Sa miséricorde &raquo;</em>
                  (sourate Al-A&apos;raf, 7:57). Rêver d&apos;une pluie douce
                  et bienfaisante annonce des bénédictions, l&apos;exaucement
                  d&apos;une invocation ou une amélioration des conditions de
                  vie. La pluie qui arrose une terre desséchée symbolise le
                  renouveau spirituel après une période de sécheresse
                  intérieure.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En revanche, une pluie torrentielle, destructrice ou
                  accompagnée de foudre peut annoncer une épreuve collective,
                  un châtiment ou un bouleversement. Les savants rappellent le
                  déluge du peuple de Nouh (Noé) comme archétype de la pluie
                  punitive. L&apos;interprétation dépend de l&apos;intensité
                  de la pluie et de l&apos;émotion ressentie par le rêveur.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Marcher sur l&apos;eau
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Marcher sur l&apos;eau dans un rêve est l&apos;un des signes
                  les plus forts de certitude spirituelle (yaqin). An-Nabulsi
                  y voit la manifestation d&apos;une foi inébranlable qui
                  permet au croyant de transcender les obstacles ordinaires.
                  Ce rêve peut aussi annoncer un voyage sans encombre, une
                  victoire inattendue ou la capacité à accomplir ce que les
                  autres pensent impossible.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cependant, si le rêveur trébuche ou s&apos;enfonce
                  progressivement, cela peut indiquer un excès de confiance ou
                  un manque de vigilance dans sa pratique religieuse. Comme
                  pour{" "}
                  <Link href="/pleurer-reve-islam-compassion" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    pleurer en rêve en islam
                  </Link>
                  , l&apos;émotion vécue pendant le songe apporte des nuances
                  déterminantes à la compréhension du message.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pluie douce et régulière
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Miséricorde divine, baraka, exaucement des
                      invocations, renouveau spirituel après une épreuve.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pluie violente ou inondation
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Épreuve, bouleversement, avertissement à prendre au
                      sérieux. Invitation au repentir et à la prudence.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Marcher sur l&apos;eau avec assurance
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Foi solide, certitude spirituelle, capacité à
                      surmonter l&apos;impossible par la grâce d&apos;Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      S&apos;enfoncer dans l&apos;eau
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Perte de repères, excès de confiance ou éloignement
                      progressif de la voie droite. Appel à l&apos;humilité.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Eau et purification spirituelle */}
              {/* ============================================ */}
              <section id="purification" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;eau et la purification spirituelle en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;eau est le vecteur premier de la purification en islam.
                  Les ablutions (wudu), le bain rituel (ghusl) et la
                  purification spirituelle passent tous par l&apos;eau. Cette
                  réalité juridique et spirituelle se prolonge naturellement
                  dans le monde des rêves, où l&apos;eau qui purifie le corps
                  symbolise la purification de l&apos;âme.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Rêver de faire ses ablutions avec une eau claire et abondante
                  est un signe de repentir sincère (tawba) accepté par Allah.
                  Le rêveur se libère de ses fautes passées et entame un
                  nouveau chapitre de sa vie spirituelle. Ce lien entre
                  l&apos;eau et la tawba est profondément ancré dans le Coran :
                  <em> &laquo; Et Il a fait descendre sur vous de l&apos;eau
                  du ciel pour vous en purifier &raquo;</em> (sourate
                  Al-Anfal, 8:11).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Prendre un bain ou se laver dans une eau pure en rêve
                  annonce la guérison d&apos;une maladie, la résolution
                  d&apos;un conflit ou la levée d&apos;une angoisse. Les
                  interprètes soulignent que la température de l&apos;eau
                  importe : une eau tiède et agréable est favorable, tandis
                  qu&apos;une eau glaciale ou brûlante peut annoncer un choc
                  ou une épreuve de santé.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Faire ses ablutions dans le rêve : repentir et retour
                      à la pratique religieuse avec sincérité.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Se baigner dans une source naturelle : renouveau
                      profond, purification complète du coeur et de
                      l&apos;esprit.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Être aspergé d&apos;eau par quelqu&apos;un : recevoir
                      une bénédiction ou un conseil venu d&apos;une personne
                      de bien.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Voir de l&apos;eau de Zamzam : l&apos;un des signes
                      les plus nobles, annonçant la guérison, la baraka et
                      la proximité avec Allah.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;eau dans les rêves islamiques, sous toutes ses formes,
                  rappelle au croyant que la purification est un processus
                  continu. Qu&apos;il s&apos;agisse d&apos;une mer immense,
                  d&apos;une pluie passagère ou d&apos;un simple verre
                  d&apos;eau fraîche, chaque goutte porte en elle un message
                  d&apos;Allah à celui qui sait observer ses rêves avec humilité
                  et discernement. L&apos;important est de ne jamais négliger
                  ces visions et de les accompagner d&apos;actes concrets :
                  prière, invocation, charité et recherche de la science
                  religieuse.
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
                    href="/reve-poisson-islam-richesse"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de poisson en islam
                  </Link>
                  <Link
                    href="/rever-crocodile-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de crocodile en islam
                  </Link>
                  <Link
                    href="/rever-mort-islam-messages"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de la mort en islam
                  </Link>
                  <Link
                    href="/pleurer-reve-islam-compassion"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Pleurer en rêve en islam
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
