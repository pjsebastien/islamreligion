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
    "Rever de pigeon ou d'oiseau en islam : signification et interpretation",
  description:
    "Que signifie rever de pigeon ou d'oiseau en islam ? Interpretation selon Ibn Sirin et An-Nabulsi, symbolisme coranique, couleurs et contextes du reve.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-pigeon-oiseau-islam",
  },
};

const tocItems = [
  { id: "essentiel", label: "L'essentiel a retenir" },
  { id: "symbolisme-coranique", label: "Les oiseaux dans le Coran" },
  { id: "ibn-sirin-nabulsi", label: "Ibn Sirin et An-Nabulsi" },
  { id: "couleurs-pigeon", label: "Pigeon blanc, gris et autres couleurs" },
  { id: "oiseau-vol-cage", label: "Oiseau en vol, en cage ou qui chante" },
  { id: "nourrir-attraper", label: "Nourrir ou attraper un oiseau" },
  { id: "selon-reveur", label: "Selon la situation du reveur" },
  { id: "conseils", label: "Conseils apres le reve" },
  { id: "faq", label: "Questions frequentes" },
];

const faqItems = [
  {
    question: "Que signifie rever de pigeon en islam ?",
    answer:
      "Rever de pigeon en islam est generalement un signe positif. Le pigeon symbolise la paix, la fidelite et les bonnes nouvelles. Selon Ibn Sirin, un pigeon blanc annonce une nouvelle heureuse ou un rapprochement spirituel. Un pigeon qui se pose sur le reveur indique la protection divine. La couleur, le comportement et le contexte du reve nuancent profondement l'interpretation.",
  },
  {
    question: "Rever d'oiseau qui vole en islam : quelle interpretation ?",
    answer:
      "Un oiseau qui vole librement dans un reve islamique symbolise l'elevation spirituelle, la liberte et l'atteinte d'objectifs. Si l'envol est lumineux et paisible, c'est un signe d'evolution positive. Si l'oiseau s'eloigne rapidement, cela peut indiquer la fin d'une opportunite. Les savants recommandent d'observer la direction et la hauteur du vol pour affiner l'interpretation.",
  },
  {
    question: "Rever d'oiseau en cage en islam : est-ce un mauvais signe ?",
    answer:
      "Rever d'un oiseau en cage peut refleter un sentiment d'enfermement, une restriction dans la vie du reveur ou des aspirations non realisees. Cependant, An-Nabulsi precise que si le reveur ouvre la cage et libere l'oiseau, cela annonce une liberation prochaine, la resolution d'un probleme ou le soulagement d'une angoisse. Le contexte emotionnel du reve est determinant.",
  },
  {
    question:
      "Quelle difference entre rever de pigeon blanc et pigeon gris en islam ?",
    answer:
      "Le pigeon blanc est associe a la purete spirituelle, aux bonnes actions et a la proximite avec Allah. Il evoque souvent une nouvelle positive ou un messager celeste. Le pigeon gris, quant a lui, symbolise la subsistance abondante et les benedictions materielles. Les deux sont des signes favorables, mais le blanc porte une dimension plus spirituelle tandis que le gris est davantage lie a la vie quotidienne.",
  },
  {
    question: "Que signifie nourrir un oiseau dans un reve en islam ?",
    answer:
      "Nourrir un oiseau dans un reve islamique est un signe tres positif. Cela symbolise la generosite du reveur, la sadaqa (aumone) et le soin envers les creatures d'Allah. Ibn Sirin associe ce geste a la benediction dans la subsistance. An-Nabulsi ajoute que nourrir un oiseau peut annoncer un bienfait qui reviendra vers le reveur, conformement au principe coranique selon lequel toute bonne action est retribuee.",
  },
  {
    question: "Rever d'attraper un oiseau en islam : bonne ou mauvaise chose ?",
    answer:
      "Attraper un oiseau dans un reve est generalement un signe positif en islam. Cela peut annoncer un gain, une reussite ou l'obtention d'un objectif longtemps desire. Si l'oiseau est beau et colore, l'interpretation est d'autant plus favorable. Cependant, si l'oiseau s'echappe apres la capture, cela peut signaler une opportunite manquee. Les savants recommandent de noter les details pour une interpretation precise.",
  },
];

export default function ReverPigeonOiseauIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-pigeon-oiseau-islam/#article",
        headline:
          "Rever de pigeon ou d'oiseau en islam : signification et interpretation",
        description:
          "Que signifie rever de pigeon ou d'oiseau en islam ? Interpretation selon Ibn Sirin et An-Nabulsi, symbolisme coranique, couleurs et contextes.",
        image:
          "/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-pigeon-oiseau-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-pigeon-oiseau-islam/#breadcrumb",
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
            name: "Reves en islam",
            item: "https://www.islamreligion.fr/reves-islam",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Rever de pigeon ou d'oiseau",
            item: "https://www.islamreligion.fr/rever-pigeon-oiseau-islam",
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
          title="Rever de pigeon ou d'oiseau en islam : signification et interpretation"
          subtitle="Symbolisme coranique, interpretation selon Ibn Sirin et An-Nabulsi, et messages caches dans vos songes."
          imageSrc="/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg"
          imageAlt="Rever de pigeon ou d'oiseau en islam, signification et interpretation spirituelle"
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
                  Reves en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Rever de pigeon ou d&apos;oiseau</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En resume
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rever de pigeon ou d&apos;oiseau en islam porte une symbolique
                  riche et profonde. Les oiseaux occupent une place particuliere
                  dans le Coran, depuis la huppe de Sulayman jusqu&apos;aux
                  oiseaux d&apos;Ibrahim (paix sur eux). Selon Ibn Sirin et
                  An-Nabulsi, la couleur du pigeon, le comportement de
                  l&apos;oiseau (en vol, en cage, chantant) et la situation du
                  reveur orientent l&apos;interpretation vers la paix
                  interieure, la subsistance abondante ou un avertissement
                  a mediter.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : L'essentiel a retenir */}
              {/* ============================================ */}
              <section id="essentiel" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;essentiel a retenir sur le reve de pigeon et d&apos;oiseau en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans la tradition islamique, les oiseaux sont bien plus que de
                  simples creatures ailees. Ils traversent les recits coraniques,
                  les hadiths et les ouvrages des grands interpretes comme des
                  messagers charges de sens. Tout comme pour{" "}
                  <Link href="/rever-chat-islam-symbolisme" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">le chat dans les songes</Link>,
                  {" "}comprendre la presence d&apos;un pigeon ou d&apos;un oiseau dans
                  un reve demande d&apos;analyser plusieurs dimensions : l&apos;espece,
                  la couleur, le comportement et l&apos;etat emotionnel du reveur.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Symbolisme coranique :</strong> les oiseaux
                      apparaissent dans le Coran comme signes divins, messagers
                      et preuves de la puissance d&apos;Allah
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pigeon :</strong> symbole de paix, de fidelite
                      conjugale, de bonnes nouvelles et de lien spirituel
                      avec le Createur
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Oiseau en vol :</strong> elevation spirituelle,
                      liberte, atteinte d&apos;objectifs et aspirations
                      realisees
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Contexte du reveur :</strong> la situation
                      personnelle (femme mariee, celibataire, homme)
                      influence profondement le sens du reve
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Symbolisme coranique */}
              {/* ============================================ */}
              <section id="symbolisme-coranique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les oiseaux dans le Coran : la huppe de Sulayman et les
                  oiseaux d&apos;Ibrahim
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Coran accorde une place remarquable aux oiseaux, les
                  presentant comme des creatures qui glorifient Allah et
                  portent des messages divins. Comprendre cette dimension
                  coranique enrichit considerablement l&apos;interpretation
                  des reves.
                </p>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">
                    La huppe (Al-Hudhud) et le prophete Sulayman
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Dans la sourate An-Naml (Les Fourmis, verset 20-28),
                    la huppe occupe un role de messagere entre Sulayman (paix
                    sur lui) et la reine de Saba. Cet oiseau rapporte a
                    Sulayman l&apos;existence d&apos;un peuple qui adore le
                    soleil au lieu d&apos;Allah. Ce recit montre que
                    l&apos;oiseau, dans la vision coranique, peut etre
                    porteur de nouvelles importantes, d&apos;informations
                    cachees et d&apos;une mission divine. Rever d&apos;un
                    oiseau messager peut ainsi refleter un appel a la
                    vigilance spirituelle ou l&apos;annonce d&apos;une
                    revelation inattendue.
                  </p>
                </div>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">
                    Les oiseaux d&apos;Ibrahim et la resurrection
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Dans la sourate Al-Baqara (verset 260), Ibrahim (paix sur
                    lui) demande a Allah comment Il ressuscite les morts. Allah
                    lui ordonne de prendre quatre oiseaux, de les couper en
                    morceaux, de les repartir sur differentes montagnes, puis
                    de les appeler. Les oiseaux reviennent a Ibrahim en vie.
                    Ce recit illustre la puissance d&apos;Allah sur la vie et
                    la mort. Rever d&apos;oiseaux qui reviennent vers le reveur
                    peut symboliser un renouveau, une guerison ou le retour
                    d&apos;une chose que l&apos;on croyait perdue.
                  </p>
                </div>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">
                    Les oiseaux Ababil et la sourate Al-Fil
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    La sourate Al-Fil (L&apos;Elephant) rapporte comment Allah
                    envoya des oiseaux Ababil lancer des pierres d&apos;argile
                    sur l&apos;armee d&apos;Abraha qui cherchait a detruire
                    la Kaaba. Ces oiseaux representent la protection divine et
                    la victoire face a l&apos;oppression. Voir des oiseaux
                    protecteurs dans un reve peut annoncer le soutien d&apos;Allah
                    face a une epreuve. Ce recit rappelle que la protection
                    vient d&apos;Allah seul, quelle que soit la force de
                    l&apos;adversite.
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Coran mentionne egalement que tous les oiseaux glorifient
                  Allah (sourate An-Nur, verset 41) et que Dawud (paix sur lui)
                  avait recu le don de comprendre le langage des oiseaux. Cette
                  dimension spirituelle profonde donne aux reves d&apos;oiseaux
                  une gravite particuliere dans l&apos;interpretation islamique.
                  Pour ceux qui souhaitent approfondir leur connaissance du
                  Coran,{" "}
                  <Link
                    href="/apprendre-le-coran"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    apprendre le Coran
                  </Link>{" "}
                  permet de mieux saisir ces references.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Ibn Sirin et An-Nabulsi */}
              {/* ============================================ */}
              <section id="ibn-sirin-nabulsi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interpretation selon Ibn Sirin et An-Nabulsi
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les deux plus grands interpretes des reves en islam,
                  Muhammad ibn Sirin (mort en 729) et Abd al-Ghani
                  an-Nabulsi (mort en 1731), ont consacre des chapitres
                  entiers aux oiseaux dans leurs ouvrages de reference.
                  Leurs analyses se completent et offrent un cadre solide
                  pour comprendre ces songes. On retrouve cette meme
                  rigueur d&apos;interpretation dans d&apos;autres reves
                  animaliers, comme{" "}
                  <Link href="/rever-mort-islam-messages" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les reves lies a la mort en islam</Link>.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">
                      Ibn Sirin : l&apos;oiseau comme reflet de la subsistance
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Pour Ibn Sirin, voir des oiseaux de differents types et
                      formes dans un reve indique un large moyen de subsistance
                      (rizq), des jours heureux et de bonnes nouvelles a venir.
                      Le pigeon, en particulier, represente une femme vertueuse
                      et fidele. Un pigeon qui roucoule symbolise les paroles
                      douces et sinceres. Si le reveur tient un pigeon dans ses
                      mains, cela annonce une joie imminente ou un bien-etre
                      durable. Ibn Sirin insiste sur le fait que la beaute de
                      l&apos;oiseau dans le reve est proportionnelle a la qualite
                      de la nouvelle qu&apos;il porte.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">
                      An-Nabulsi : l&apos;oiseau comme symbole de l&apos;ame
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      An-Nabulsi enrichit l&apos;interpretation en associant
                      l&apos;oiseau a l&apos;ame (ruh) du reveur. Un oiseau
                      qui s&apos;envole haut represente une ame qui s&apos;eleve
                      vers Allah. Un oiseau qui descend ou se pose a terre
                      invite a la reflexion et a l&apos;humilite. Pour An-Nabulsi,
                      le pigeon blanc symbolise specifiquement la piete, la
                      sincerite de l&apos;intention et la proximite avec le Createur.
                      Il precise aussi que l&apos;oiseau inconnu, jamais vu par
                      le reveur, peut representer l&apos;ange de la mort si
                      le reve est sombre, ou un ange protecteur si le reve
                      est lumineux.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">
                      Points de convergence entre les deux savants
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ibn Sirin et An-Nabulsi s&apos;accordent sur plusieurs
                      points fondamentaux : un oiseau beau et colore est un
                      signe de bonheur ; un oiseau noir ou sombre appelle a
                      la vigilance ; un oiseau mort signale la fin d&apos;une
                      periode ou la perte d&apos;un bien. Les deux savants
                      rappellent que l&apos;interpretation depend du contexte
                      global du reve, des emotions ressenties et de la
                      situation spirituelle du reveur.
                    </p>
                  </div>
                </div>

                {/* Tableau comparatif */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Scenario
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Ibn Sirin
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          An-Nabulsi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Pigeon blanc
                        </td>
                        <td className="py-3 pr-4">
                          Bonne nouvelle, femme pieuse
                        </td>
                        <td className="py-3">
                          Purete de l&apos;ame, proximite divine
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Oiseau en vol
                        </td>
                        <td className="py-3 pr-4">
                          Subsistance abondante, voyage
                        </td>
                        <td className="py-3">
                          Elevation de l&apos;ame, aspiration spirituelle
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Oiseau mort
                        </td>
                        <td className="py-3 pr-4">
                          Perte, fin d&apos;une esperance
                        </td>
                        <td className="py-3">
                          Fin d&apos;un cycle, invitation au repentir
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tenir un oiseau
                        </td>
                        <td className="py-3 pr-4">
                          Gain, joie imminente
                        </td>
                        <td className="py-3">
                          Maitrise de soi, responsabilite
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/grande-mosquee-blanche-minarets-islam-architecture.jpg"
                    alt="Grande mosquee blanche aux minarets, architecture islamique liee a la symbolique du pigeon en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Couleurs du pigeon */}
              {/* ============================================ */}
              <section id="couleurs-pigeon" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Pigeon blanc, gris, noir : la signification des couleurs
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La couleur du pigeon dans un reve est un element
                  determinant de l&apos;interpretation. Chaque nuance porte
                  un message particulier que les savants musulmans ont
                  soigneusement catalogue au fil des siecles. Comme pour{" "}
                  <Link href="/rever-voyage-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les reves de voyage en islam</Link>,
                  {" "}le contexte visuel oriente profondement le sens du songe.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le pigeon blanc
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le pigeon blanc est le plus porteur de sens positif.
                      Ibn Sirin le lie aux bonnes actions du reveur, a son
                      amour pour l&apos;adoration et a sa proximite avec
                      Allah. Il peut annoncer une nouvelle heureuse : un
                      mariage, une naissance, une reconciliation ou une
                      guerison. An-Nabulsi ajoute que le pigeon blanc
                      represente la sincerite du coeur et la purete de
                      l&apos;intention dans les actes d&apos;adoration.
                      Si le pigeon blanc se pose sur la main du reveur,
                      c&apos;est un signe particulierement favorable.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le pigeon gris
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le pigeon gris symbolise la subsistance abondante et
                      les benedictions materielles. Voir des pigeons gris
                      en nombre dans un reve annonce des moyens de subsistance
                      genereux et une stabilite financiere. Les savants
                      associent aussi le gris a la sagesse et a la temperance.
                      C&apos;est l&apos;oiseau du quotidien, celui qui
                      accompagne le reveur dans ses efforts pour subvenir
                      aux besoins de sa famille et honorer ses responsabilites.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le pigeon noir
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Un pigeon noir ou tres sombre dans un reve peut signaler
                      une angoisse, une mauvaise nouvelle ou une trahison
                      dissimulee. Cependant, l&apos;interpretation n&apos;est
                      pas systematiquement negative. Si le pigeon noir est
                      paisible et calme, il peut representer un mystere qui
                      sera bientot eclairci. Les savants recommandent de ne
                      pas tirer de conclusion hative et de considerer
                      l&apos;ensemble du reve avant de s&apos;inquieter.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le pigeon colore ou bigarri
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Un pigeon aux couleurs variees (vert, dore, irise)
                      est un signe de richesse interieure et de diversite
                      dans les bienfaits. An-Nabulsi y voit un reflet de
                      la beaute de la creation divine. Un oiseau aux
                      plumes eclatantes peut aussi symboliser un talent
                      particulier ou une qualite que le reveur doit
                      developper. Plus les couleurs sont vives, plus le
                      message est porteur d&apos;espoir et de joie.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg"
                    alt="Signification des reves de pigeon et d'oiseau en islam selon le Coran et les savants"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Oiseau en vol, en cage, qui chante */}
              {/* ============================================ */}
              <section id="oiseau-vol-cage" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Oiseau en vol, en cage ou qui chante : les comportements cles
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-dela de la couleur, le comportement de l&apos;oiseau dans
                  le reve apporte des nuances considerables. Les interpretes
                  musulmans accordent une attention particuliere a ce que
                  fait l&apos;oiseau, car c&apos;est souvent dans le mouvement
                  ou l&apos;immobilite que reside le veritable message.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;oiseau en plein vol
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un oiseau qui vole librement dans le ciel est l&apos;un
                        des songes les plus positifs. Il symbolise la liberte,
                        l&apos;elevation spirituelle, l&apos;atteinte
                        d&apos;objectifs et la realisation de projets. Si
                        l&apos;envol est lumineux et paisible, le reveur peut
                        s&apos;attendre a une periode de grace et de reussite.
                        Ibn Sirin precise que voler avec les oiseaux dans un
                        reve annonce un voyage ou une frequentation de personnes
                        etrangeres. An-Nabulsi ajoute que la hauteur du vol
                        reflete l&apos;ambition et la portee des aspirations
                        spirituelles du reveur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;oiseau en cage
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un oiseau enferme dans une cage peut refleter un
                        sentiment d&apos;enfermement dans la vie du reveur :
                        une situation professionnelle bloquee, une relation
                        oppressante ou des aspirations etouffees. Cependant,
                        si le reveur ouvre la cage et libere l&apos;oiseau,
                        c&apos;est un signe de liberation prochaine et de
                        soulagement. An-Nabulsi precise que la cage peut
                        aussi representer la maison du reveur, et l&apos;oiseau
                        a l&apos;interieur, sa famille. Un oiseau heureux en
                        cage symbolise alors un foyer harmonieux et protege.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;oiseau qui chante
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Entendre un oiseau chanter dans un reve est un signe
                        de joie et de serenite. Ibn Sirin associe le chant
                        des oiseaux aux paroles agreables, aux bonnes
                        nouvelles et a l&apos;harmonie dans les relations
                        humaines. Si le chant est melodieux et doux, il
                        annonce la paix interieure et la satisfaction
                        spirituelle. Si le chant est strident ou
                        desagreable, il peut signaler une parole blessante
                        ou une discorde dans l&apos;entourage. Le chant
                        du pigeon (le roucoulement) est particulierement
                        positif : il evoque la tendresse conjugale et
                        l&apos;amour sincere.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;oiseau qui se pose sur le reveur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lorsqu&apos;un oiseau se pose sur la tete,
                        l&apos;epaule ou la main du reveur, les savants y
                        voient un signe de la relation intime entre
                        l&apos;individu et son Createur. Ce contact direct
                        symbolise la confiance, la protection divine et
                        une benediction particuliere. Un pigeon qui se
                        pose sur l&apos;epaule annonce un honneur ou une
                        responsabilite qui sera confiee au reveur. Un
                        oiseau qui se pose sur la tete peut annoncer
                        l&apos;accession a une position de leadership
                        ou de sagesse reconnue.
                      </p>
                    </div>
                  </div>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rever de corbeau en islam : signification et symbolisme"
                  description="Le corbeau occupe une place particuliere dans les recits coraniques. Decouvrez son interpretation dans les songes."
                  href="/rever-corbeau-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Nourrir ou attraper un oiseau */}
              {/* ============================================ */}
              <section id="nourrir-attraper" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Nourrir un oiseau ou l&apos;attraper : que disent les savants ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;interaction entre le reveur et l&apos;oiseau est un
                  element determinant de l&apos;interpretation. Que l&apos;on
                  nourrisse l&apos;oiseau, qu&apos;on l&apos;attrape ou
                  qu&apos;on le laisse partir, chaque geste porte un sens
                  particulier dans la tradition onirique islamique.
                </p>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">
                    Nourrir un oiseau dans un reve
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Nourrir un oiseau est un geste hautement symbolique en
                    islam. Il represente la generosite, la sadaqa (aumone)
                    et le soin envers les creatures d&apos;Allah. Ibn Sirin
                    considere que ce geste annonce une benediction dans
                    la subsistance du reveur. Celui qui nourrit les oiseaux
                    dans son reve verra ses propres ressources augmenter.
                    An-Nabulsi ajoute une dimension spirituelle : nourrir
                    un oiseau, c&apos;est nourrir son ame de bonnes actions.
                    Ce reve invite le reveur a multiplier les actes de
                    bienfaisance dans sa vie eveille. C&apos;est un
                    rappel du verset coranique : &quot;Quiconque fait un
                    bien du poids d&apos;un atome le verra&quot; (sourate
                    Az-Zalzalah, verset 7).
                  </p>
                </div>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">
                    Attraper un oiseau dans un reve
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Attraper un oiseau dans un reve est generalement
                    interprete comme un signe de gain, de reussite ou
                    d&apos;obtention d&apos;un objectif longtemps poursuivi.
                    Si l&apos;oiseau est beau et de couleur vive,
                    l&apos;interpretation est d&apos;autant plus favorable.
                    Cependant, les savants mettent en garde : si l&apos;oiseau
                    s&apos;echappe apres la capture, cela signale une
                    opportunite manquee ou un bien qui ne perdurera pas.
                    Ibn Sirin precise que la facilite avec laquelle
                    l&apos;oiseau est attrape reflete la facilite avec
                    laquelle le bien arrivera au reveur.
                  </p>
                </div>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">
                    Relacher un oiseau volontairement
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Relacher volontairement un oiseau que l&apos;on tenait
                    dans un reve peut symboliser un acte de generosite
                    supreme, un renoncement a un bien pour plaire a Allah
                    ou la liberation d&apos;une personne que l&apos;on
                    controlait. An-Nabulsi interprete ce geste comme un
                    signe de tawakkul (confiance en Allah) : le reveur
                    laisse partir ce qu&apos;il possede, confiant que
                    Dieu lui donnera mieux en retour. C&apos;est aussi
                    un symbole de pardon et de detachement des biens
                    materiels.
                  </p>
                </div>

                {/* Tableau nourrir/attraper */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action dans le reve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseil
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Nourrir un oiseau
                        </td>
                        <td className="py-3 pr-4">
                          Generosite, benediction, sadaqa
                        </td>
                        <td className="py-3">
                          Multiplier les aumones
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Attraper un oiseau
                        </td>
                        <td className="py-3 pr-4">
                          Gain, reussite, objectif atteint
                        </td>
                        <td className="py-3">
                          Remercier Allah, perseverer
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Oiseau qui s&apos;echappe
                        </td>
                        <td className="py-3 pr-4">
                          Opportunite manquee, perte temporaire
                        </td>
                        <td className="py-3">
                          Patience et confiance en Allah
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Relacher un oiseau
                        </td>
                        <td className="py-3 pr-4">
                          Tawakkul, detachement, pardon
                        </td>
                        <td className="py-3">
                          Cultiver la confiance en Dieu
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Selon le reveur */}
              {/* ============================================ */}
              <section id="selon-reveur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du reveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un meme reve d&apos;oiseau ou de pigeon ne porte pas la meme
                  signification selon la personne qui le fait. Les interpretes
                  musulmans tiennent compte de la situation personnelle, de
                  l&apos;age et du contexte de vie du reveur pour affiner
                  leur analyse.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariee
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le pigeon dans un reve de femme mariee symbolise souvent
                      la fidelite conjugale et l&apos;harmonie au foyer. Un
                      pigeon qui roucoule pres d&apos;elle annonce la
                      tendresse et la stabilite dans son couple. Un oiseau
                      qui s&apos;envole de sa maison peut refleter une
                      inquietude pour un enfant qui grandit ou un changement
                      familial. Si l&apos;oiseau revient, la situation
                      se resolura positivement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme celibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Un pigeon blanc qui se pose pres d&apos;une femme
                      celibataire peut annoncer une demande en mariage
                      sincere ou la rencontre d&apos;une personne pieuse.
                      Un oiseau qui chante melodieusement evoque la joie
                      d&apos;un evenement heureux a venir. Si l&apos;oiseau
                      fuit ou refuse de se poser, cela invite a la patience
                      et a la confiance en le qadar (destin) d&apos;Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les savants considerent le reve d&apos;oiseau chez la
                      femme enceinte comme un signe rassurant. Un oiseau
                      calme et beau annonce un accouchement serein et un
                      bebe en bonne sante. Un pigeon blanc peut symboliser
                      la purete du nouveau-ne a venir. Les invocations de
                      protection sont recommandees pour accompagner ce
                      songe positif. Le reve rejoint alors la symbolique
                      de{" "}
                      <Link href="/rever-chat-islam-symbolisme" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la douceur du chat en islam</Link>.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Pour un homme, le pigeon represente souvent la fidele
                      compagne ou un commerce prospere. Attraper un oiseau
                      dans un reve masculin peut annoncer un gain financier
                      ou une promotion. Un oiseau qui s&apos;envole de ses
                      mains invite a redoubler d&apos;efforts pour conserver
                      ses acquis. L&apos;oiseau en cage, pour un homme,
                      peut aussi representer sa responsabilite familiale
                      et sa capacite a proteger les siens.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/calligraphie-allah-islam-coeur-bois.jpg"
                    alt="Calligraphie du nom d'Allah sur coeur en bois, symbole de foi et de spiritualite lie au reve d'oiseau en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 8 : Conseils apres le reve */}
              {/* ============================================ */}
              <section id="conseils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques apres un reve de pigeon ou d&apos;oiseau
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La tradition prophetique offre des recommandations claires
                  pour accueillir et interpreter les reves. Que le songe soit
                  agreable ou perturbant, voici les attitudes recommandees
                  par les savants.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Si le reve etait agreable et lumineux
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Remercier Allah pour cette vision positive. Le Prophete
                        ﷺ a enseigne que le bon reve (ru&apos;ya saliha) vient
                        d&apos;Allah. On peut le partager avec une personne
                        de confiance et de sagesse, en prenant soin de ne pas
                        le raconter a quelqu&apos;un qui pourrait l&apos;interpreter
                        de maniere negative ou envieuse.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Si le reve etait sombre ou perturbant
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Cracher legerement trois fois a gauche, chercher
                        refuge aupres d&apos;Allah contre le Shaytan et
                        changer de cote dans le lit. Ne pas raconter ce
                        reve a autrui. Reciter les sourates protectrices
                        (Al-Ikhlas, Al-Falaq, An-Nas) et le verset du
                        Trone (Ayat al-Kursi) pour se placer sous la
                        protection divine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Faire ses ablutions et prier
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le reve laisse une impression forte, qu&apos;elle
                        soit positive ou negative, se lever pour faire ses
                        ablutions et accomplir deux unites de priere
                        (raka&apos;at) aide a apaiser le coeur et a
                        clarifier l&apos;esprit. La priere est le meilleur
                        refuge du croyant dans toutes les circonstances.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Consulter une personne competente
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le reve revient frequemment ou suscite une
                        interrogation profonde, consulter un imam ou un
                        savant competent en interpretation des reves
                        (ta&apos;bir ar-ru&apos;ya) apporte un eclairage
                        precieux. Les savants rappellent qu&apos;un meme
                        reve peut prendre un sens different selon le
                        moment de vie du reveur. Ne jamais fonder une
                        decision importante sur un seul songe.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Noter le reve au reveil
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les details s&apos;effacent vite apres le reveil.
                        Les interpretes recommandent de noter les elements
                        cles du reve (couleur de l&apos;oiseau, comportement,
                        lieu, emotions) des que possible. Ces details sont
                        precieux pour une interpretation rigoureuse et
                        nuancee. Un journal de reves peut aider a identifier
                        des motifs recurrents et a mieux comprendre les
                        messages de ses songes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-xl border border-border bg-white p-5">
                  <h3 className="font-semibold text-primary">
                    Rappel sur la nature des reves en islam
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                    Le Prophete Muhammad ﷺ a enseigne que les reves se
                    divisent en trois categories : le reve veridique
                    (ru&apos;ya saliha) qui vient d&apos;Allah, le reve
                    perturbant qui vient du Shaytan, et le reve qui provient
                    des pensees de l&apos;ame (hadith an-nafs). Seul un
                    savant competent peut aider a distinguer ces categories.
                    Le croyant doit garder l&apos;humilite et la confiance
                    en Allah, quelle que soit la nature de son reve.
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* AffiliateForm + FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Comprenez les symboles coraniques de vos reves"
                description="La comprehension des reves en islam passe par la connaissance du Coran et de la langue arabe. Choisissez votre formation pour approfondir vos connaissances."
                preselect="coran"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne - silo */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Interpretations de reves similaires
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les reves en islam
                  </Link>
                  <Link
                    href="/rever-corbeau-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rever de corbeau en islam
                  </Link>
                  <Link
                    href="/rever-chat-islam-symbolisme"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rever de chat en islam
                  </Link>
                  <Link
                    href="/rever-voyage-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rever de voyage en islam
                  </Link>
                  <Link
                    href="/rever-mort-islam-messages"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rever de mort en islam
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages meres */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le meme sujet
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
                    Remedes et medecine prophetique
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
