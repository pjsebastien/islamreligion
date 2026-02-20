import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export const metadata: Metadata = {
  title:
    "Remede arabe pour arreter de fumer : sevrage naturel, invocations et soutien spirituel",
  description:
    "Decouvrez les remedes arabes pour arreter de fumer : nigelle, miel, siwak, hijama, invocations prophetiques et soutien spirituel pour un sevrage doux et durable en islam.",
  alternates: {
    canonical: "https://www.islamreligion.fr/remede-arabe-arreter-fumer",
  },
};

const tocItems = [
  { id: "tabac-islam", label: "Le tabac en islam : statut juridique" },
  { id: "remedes-prophetiques", label: "Remedes prophetiques d'aide au sevrage" },
  { id: "hijama-sevrage", label: "Hijama et sevrage tabagique" },
  { id: "invocations-douas", label: "Invocations et douas pour la perseverance" },
  { id: "jeune-discipline", label: "Le jeune comme outil de discipline" },
  { id: "faq", label: "Questions frequentes" },
];

const faqItems = [
  {
    question: "Le tabac est-il haram ou makruh en islam ?",
    answer:
      "Les savants contemporains sont majoritairement d'accord pour dire que le tabac est haram (interdit) en raison des preuves scientifiques irrefutables de sa nocivite. La regle islamique \"ne vous tuez pas vous-memes\" (sourate An-Nisa, verset 29) et \"ne vous jetez pas dans la perdition\" (sourate Al-Baqara, verset 195) s'appliquent directement. Certains savants plus anciens le classaient comme makruh (detestable), car la nocivite n'etait pas encore prouvee a leur epoque.",
  },
  {
    question: "La graine de nigelle aide-t-elle vraiment a arreter de fumer ?",
    answer:
      "La graine de nigelle (habba sawda) ne constitue pas un substitut direct a la nicotine, mais elle soutient le corps durant le sevrage. La thymoquinone, son principe actif, possede des proprietes anti-inflammatoires et antioxydantes qui aident a reparer les voies respiratoires irritees par le tabac. Associee au miel, elle favorise aussi la reduction du stress et de l'anxiete, deux facteurs majeurs de rechute.",
  },
  {
    question: "Le siwak peut-il remplacer le geste de fumer ?",
    answer:
      "Le siwak (miswak) est un excellent substitut au geste oral de la cigarette. Son utilisation permet de satisfaire le besoin de porter quelque chose a la bouche, tout en purifiant l'haleine et en renforrant la sante des gencives. Le Prophete Muhammad (paix sur lui) en recommandait l'usage regulier. Il ne contient aucune substance addictive et peut etre utilise a tout moment de la journee.",
  },
  {
    question: "La hijama peut-elle faciliter le sevrage tabagique ?",
    answer:
      "La hijama (ventouses) est une technique de medecine prophetique qui peut accompagner le sevrage. En stimulant la circulation sanguine et en favorisant l'elimination des toxines accumulees par le tabac, elle aide a reduire certains symptomes de manque comme les maux de tete et la fatigue. Elle doit etre pratiquee par un professionnel forme, dans des conditions d'hygiene strictes, et ne remplace pas un suivi medical.",
  },
  {
    question: "Quelles invocations reciter pour avoir la force d'arreter de fumer ?",
    answer:
      "Plusieurs invocations sont recommandees : \"Allahoumma inni as'aluka al-'afiya\" (O Allah, je Te demande la sante et le bien-etre), \"HasbounAllah wa ni'mal wakeel\" (Allah nous suffit, Il est le meilleur garant) et les formules de dhikr comme SubhanAllah, Alhamdulillah, Allahu Akbar. Le Prophete (paix sur lui) invoquait aussi Allah pour la fermete du coeur. Ces prieres apportent serenite et force interieure face aux moments de tentation.",
  },
  {
    question: "Le jeune du Ramadan aide-t-il a arreter de fumer ?",
    answer:
      "Le Ramadan est une periode privilegiee pour entamer un sevrage tabagique. Pendant les heures de jeune, le corps s'habitue a fonctionner sans nicotine, et la dimension spirituelle du mois sacre renforce la motivation. De nombreux fumeurs constatent que l'abstinence diurne prolongee facilite la transition vers un arret complet. Le jeune volontaire les lundis et jeudis peut prolonger cet elan apres le Ramadan.",
  },
  {
    question: "Peut-on combiner remedes prophetiques et substituts nicotiniques ?",
    answer:
      "Oui, les remedes prophetiques (nigelle, miel, siwak, hijama) sont complementaires des traitements medicaux. Ils ne remplacent pas les substituts nicotiniques (patchs, gommes) ni les consultations de tabacologie, mais les accompagnent en apportant un soutien naturel et spirituel. Informez toujours votre medecin des complements que vous prenez pour eviter les interactions.",
  },
  {
    question: "Comment le soutien communautaire aide-t-il a arreter de fumer ?",
    answer:
      "La oumma (communaute musulmane) joue un role majeur dans le sevrage. Le partage des efforts avec des proches ou au sein de la mosquee cree un environnement de soutien bienveillant. Les cercles de dhikr, les rencontres fraternelles apres la salat et les groupes d'entraide permettent de briser l'isolement, premiere cause de rechute. Le Prophete (paix sur lui) a dit : \"Le croyant pour le croyant est comme une construction dont les parties se soutiennent mutuellement.\"",
  },
];

export default function RemedeArabeArreterFumer() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-arreter-fumer/#article",
        headline:
          "Remede arabe pour arreter de fumer : sevrage naturel, invocations et soutien spirituel",
        description:
          "Decouvrez les remedes arabes pour arreter de fumer : nigelle, miel, siwak, hijama, invocations prophetiques et soutien spirituel pour un sevrage doux et durable en islam.",
        image:
          "https://www.islamreligion.fr/images/remede-arabe-arreter-fumer-methodes-douces-invocations.jpg",
        datePublished: "2025-08-21",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/remede-arabe-arreter-fumer/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-arreter-fumer/#breadcrumb",
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
            name: "Remedes arabes",
            item: "https://www.islamreligion.fr/remede-arabe",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Arreter de fumer",
            item: "https://www.islamreligion.fr/remede-arabe-arreter-fumer",
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
          title="Remede arabe pour arreter de fumer : sevrage naturel et invocations"
          subtitle="Nigelle, miel, siwak, hijama, douas et soutien communautaire pour accompagner le sevrage tabagique avec douceur et spiritualite."
          imageSrc="/images/remede-arabe-arreter-fumer-methodes-douces-invocations.jpg"
          imageAlt="Remedes arabes naturels pour arreter de fumer, plantes medicinales et invocations islamiques"
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
                <Link href="/remede-arabe" className="hover:text-primary">
                  Remedes arabes
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Arreter de fumer</span>
              </nav>

              <MedicalDisclaimer />

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En resume
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Arreter de fumer est un acte de preservation de la sante, un
                  devoir religieux en islam. Le corps est un depot confie par
                  Allah (<em>amana</em>) qu&apos;il convient de proteger. La
                  tradition prophetique offre des remedes naturels (nigelle,
                  miel, siwak, talbina) et des outils spirituels (invocations,
                  jeune, soutien communautaire) pour accompagner ce cheminement
                  avec bienveillance et perseverance.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le tabac en islam */}
              {/* ============================================ */}
              <section id="tabac-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tabac en islam : statut juridique et arguments religieux
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La question du tabac en{" "}
                  <Link
                    href="/"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    islam
                  </Link>{" "}
                  a suscite de nombreux debats parmi les savants musulmans. Si
                  les anciens juristes le classaient comme <em>makruh</em>{" "}
                  (detestable), la majorite des savants contemporains considere
                  desormais le tabac comme <em>haram</em> (interdit), en raison
                  des preuves scientifiques etablissant de maniere certaine sa
                  nocivite mortelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Plusieurs principes coraniques fondent cette position. Allah
                  dit dans le Coran : &laquo;&nbsp;Ne vous jetez pas de vos
                  propres mains dans la perdition&nbsp;&raquo; (sourate
                  Al-Baqara, verset 195) et &laquo;&nbsp;Ne vous tuez pas
                  vous-memes, certes Allah est misericordieux envers
                  vous&nbsp;&raquo; (sourate An-Nisa, verset 29). Le tabac,
                  cause premiere de cancers, de maladies cardiovasculaires et
                  respiratoires, entre directement dans le cadre de cette
                  interdiction.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete Muhammad (paix sur lui) a dit :
                  &laquo;&nbsp;Pas de prejudice ni de tort reciproque&nbsp;&raquo;
                  (<em>la darar wa la dirar</em>, rapporte par Ahmad et Ibn
                  Majah). Le tabagisme passif nuit aussi a l&apos;entourage,
                  ajoutant une dimension supplementaire a son interdiction.
                  Le fumeur ne se nuit pas seulement a lui-meme, mais aussi a
                  sa famille, a ses voisins et a la communaute.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le corps comme depot sacre (<em>amana</em>)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  En islam, le corps est un pret divin dont le croyant devra
                  rendre compte au Jour du Jugement. Le Prophete (paix sur lui)
                  a dit : &laquo;&nbsp;Il sera demande a chaque gardien au sujet
                  de ce qui lui a ete confie : l&apos;a-t-il preserve ou
                  l&apos;a-t-il perdu ?&nbsp;&raquo; (rapporte par an-Nasa&apos;i).
                  Fumer revient donc a deteriorer volontairement un depot sacre,
                  ce qui constitue un manquement a la responsabilite du croyant
                  envers son Createur.
                </p>

                {/* Tableau statuts juridiques */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Position
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Savants / Institutions
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Argument principal
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Haram (interdit)
                        </td>
                        <td className="py-3 pr-4">
                          Al-Azhar, Comite permanent d&apos;Arabie Saoudite,
                          majorite des savants contemporains
                        </td>
                        <td className="py-3">
                          Nocivite prouvee, gaspillage d&apos;argent, nuisance a
                          autrui
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Makruh (detestable)
                        </td>
                        <td className="py-3 pr-4">
                          Certains savants anciens (avant les preuves
                          medicales)
                        </td>
                        <td className="py-3">
                          Mauvaise odeur, impurete, caractere reprehensible
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mubah (permis)
                        </td>
                        <td className="py-3 pr-4">
                          Position tres minoritaire, abandonnee
                        </td>
                        <td className="py-3">
                          Absence de texte explicite (argument rejete par la
                          majorite)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La depense financiere liee au tabac est egalement
                  problematique en islam. Gaspiller son argent dans ce qui nuit
                  a la sante releve du <em>tabdhir</em> (gaspillage), condamne
                  dans le Coran : &laquo;&nbsp;Les gaspilleurs sont les freres
                  des diables&nbsp;&raquo; (sourate Al-Isra, verset 27).
                  L&apos;argent depense en cigarettes pourrait etre oriente vers
                  la sadaqa (charite), le soutien familial ou des projets
                  benefiques.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/remede-arabe-arreter-fumer-plantes-naturelles.jpg"
                    alt="Plantes medicinales arabes et remedes naturels pour accompagner le sevrage tabagique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Decouvrez tous les remedes de la medecine prophetique"
                  href="/remede-arabe"
                  linkText="Voir la page remedes arabes"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Remedes prophetiques */}
              {/* ============================================ */}
              <section id="remedes-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Remedes prophetiques d&apos;aide au sevrage tabagique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    medecine prophetique
                  </Link>{" "}
                  offre des remedes naturels qui, sans pretendre guerir
                  l&apos;addiction a eux seuls, soutiennent le corps et
                  l&apos;esprit durant le sevrage. Voici les principaux, avec
                  leurs bienfaits specifiques dans le contexte de l&apos;arret
                  du tabac.
                </p>

                {/* Nigelle */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    La graine de nigelle (<em>habba sawda</em>)
                  </h3>
                  <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      عَلَيْكُمْ بِهَذِهِ الْحَبَّةِ السَّوْدَاءِ فَإِنَّ
                      فِيهَا شِفَاءً مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Utilisez cette graine noire, car elle
                      contient un remede contre toute maladie, sauf la
                      mort.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporte par al-Bukhari et Muslim.
                    </p>
                  </div>
                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    La thymoquinone, principal composant actif de la nigelle
                    (<em>Nigella sativa</em>), possede des proprietes
                    anti-inflammatoires et antioxydantes qui aident a reparer
                    les voies respiratoires endommagees par le tabac. Elle
                    soutient egalement le systeme immunitaire, souvent
                    affaibli chez les fumeurs.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Usage recommande :</strong> une cuillere a cafe de
                    graines broyees dans du miel, a jeun chaque matin. L&apos;huile
                    de nigelle (quelques gouttes sous la langue) est une
                    alternative pratique. La cure peut durer plusieurs semaines
                    pour un effet optimal.
                  </p>
                </div>

                {/* Miel */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le miel : allie du sevrage
                  </h3>
                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    Le Coran presente le miel comme porteur de guerison :
                    &laquo;&nbsp;De leur ventre sort une boisson aux couleurs
                    variees, dans laquelle il y a une guerison pour les
                    gens&nbsp;&raquo; (sourate An-Nahl, verset 69). Dans le
                    contexte du sevrage, le miel apporte une energie naturelle
                    qui compense la fatigue liee au manque de nicotine. Ses
                    proprietes antibacteriennes et apaisantes soulagent
                    l&apos;irritation de la gorge frequente chez les anciens
                    fumeurs.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Usage recommande :</strong> une cuillere a soupe de
                    miel pur diluee dans de l&apos;eau tiede le matin, ou
                    melangee a la nigelle. Les varietes les plus prisees sont
                    le miel de jujubier (<em>sidr</em>), le miel de thym et le
                    miel de manuka. Lors d&apos;une envie de cigarette,
                    prendre une gorgee d&apos;eau miellee peut aider a
                    calmer la pulsion.
                  </p>
                </div>

                {/* Siwak */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le siwak (miswak) : substitut oral naturel
                  </h3>
                  <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="text-foreground italic">
                      &laquo;&nbsp;Le siwak est une purification de la bouche
                      et une satisfaction pour le Seigneur.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporte par an-Nasa&apos;i et valide par Ibn Khuzayma.
                    </p>
                  </div>
                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    Le siwak repond au besoin oral que ressent le fumeur en
                    sevrage : le reflexe de porter quelque chose a la bouche.
                    Fabrique a partir de l&apos;arbre <em>Salvadora persica</em>,
                    il possede des proprietes antibacteriennes naturelles et
                    aide a nettoyer les dents jaunies par le tabac. Son usage
                    est recommande par le Prophete (paix sur lui) avant chaque
                    priere et au reveil.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Astuce sevrage :</strong> garder un siwak dans sa
                    poche et le macher des qu&apos;une envie de cigarette
                    survient. Ce geste simple detourne l&apos;attention et
                    satisfait le reflexe oral, tout en purifiant l&apos;haleine.
                  </p>
                </div>

                {/* Talbina */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    La talbina : reconfort et apaisement
                  </h3>
                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    La talbina est une bouillie d&apos;orge que le Prophete
                    (paix sur lui) recommandait pour reconforter le malade et
                    la personne en deuil. Selon le hadith rapporte par
                    al-Bukhari, elle &laquo;&nbsp;reconforte le coeur du malade
                    et emporte une partie de son chagrin&nbsp;&raquo;. Riche
                    en tryptophane, un precurseur de la serotonine, elle aide
                    a reguler l&apos;humeur et a lutter contre l&apos;irritabilite
                    et le stress liees au sevrage.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Preparation :</strong> melanger deux cuilleres a
                    soupe de farine d&apos;orge dans de l&apos;eau ou du lait,
                    faire chauffer a feu doux, puis ajouter du miel selon le
                    gout. Consommer le soir pour favoriser un sommeil apaise,
                    souvent perturbe en periode de sevrage.
                  </p>
                </div>

                {/* Tableau recapitulatif des remedes */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Remede prophetique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action sur le sevrage
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Forme conseillee
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Moment ideal
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Graine de nigelle
                        </td>
                        <td className="py-3 pr-4">
                          Reparation respiratoire, anti-inflammatoire
                        </td>
                        <td className="py-3 pr-4">
                          Graines broyees dans du miel ou huile
                        </td>
                        <td className="py-3">Le matin a jeun</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Miel pur
                        </td>
                        <td className="py-3 pr-4">
                          Energie naturelle, apaisement de la gorge
                        </td>
                        <td className="py-3 pr-4">
                          Dilue dans de l&apos;eau tiede
                        </td>
                        <td className="py-3">Matin et lors des envies</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Siwak (miswak)
                        </td>
                        <td className="py-3 pr-4">
                          Substitut oral, hygiene buccale
                        </td>
                        <td className="py-3 pr-4">
                          Baton a macher
                        </td>
                        <td className="py-3">A chaque envie de cigarette</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Talbina (orge)
                        </td>
                        <td className="py-3 pr-4">
                          Regulation de l&apos;humeur, sommeil
                        </td>
                        <td className="py-3 pr-4">
                          Bouillie avec miel
                        </td>
                        <td className="py-3">Le soir avant le coucher</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Huile d&apos;olive
                        </td>
                        <td className="py-3 pr-4">
                          Antioxydant, protection cardiovasculaire
                        </td>
                        <td className="py-3 pr-4">
                          A froid dans l&apos;alimentation
                        </td>
                        <td className="py-3">Quotidiennement aux repas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Tisanes et infusions de soutien
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  En complement des remedes prophetiques, certaines tisanes
                  issues de la tradition herboriste arabe peuvent accompagner
                  le sevrage. La menthe poivree aide a clarifier les voies
                  respiratoires. La camomille apaise la nervosite. La reglisse
                  attenuer les irritations de la gorge (a eviter en cas
                  d&apos;hypertension). L&apos;infusion de thym, connue dans
                  la pharmacopee traditionnelle arabe, possede des vertus
                  expectorantes qui facilitent l&apos;elimination du mucus
                  accumule chez les fumeurs.
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Infusion menthe-miel :</strong> boire une tasse
                      apres chaque repas, moment ou l&apos;envie de fumer est
                      souvent la plus forte.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Decoction de thym :</strong> une tasse le matin
                      pour favoriser le nettoyage pulmonaire progressif.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Camomille du soir :</strong> une tasse avant le
                      coucher pour calmer l&apos;agitation liee au manque.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/remede-arabe-arreter-fumer-invocations-spiritualite.jpg"
                    alt="Invocations et spiritualite islamique pour accompagner le sevrage tabagique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Hijama et sevrage */}
              {/* ============================================ */}
              <section id="hijama-sevrage" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Hijama et sevrage tabagique : purifier le corps
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La hijama (ventouses humides) est l&apos;un des remedes les
                  plus recommandes par le Prophete Muhammad (paix sur lui) :
                  &laquo;&nbsp;Le meilleur de vos remedes est la
                  hijama&nbsp;&raquo; (rapporte par al-Bukhari). Dans le
                  contexte du sevrage tabagique, cette pratique ancestrale
                  offre plusieurs benefices complementaires.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Elimination des toxines
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le tabac accumule dans le sang des substances nocives
                        (goudrons, metaux lourds, monoxyde de carbone). La
                        hijama favorise l&apos;elimination de certains de ces
                        residus en stimulant la circulation sanguine et le
                        renouvellement cellulaire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Reduction des symptomes de manque
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les maux de tete, la fatigue et les tensions
                        musculaires sont des symptomes frequents du sevrage.
                        La hijama peut soulager ces desagrements en favorisant
                        la detente corporelle et en ameliorant la micro-circulation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Soutien a la resilience physique
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        En stimulant le systeme immunitaire et la production
                        de globules blancs, la hijama aide le corps a
                        retrouver progressivement son equilibre naturel apres
                        des annees de tabagisme. Les praticiens recommandent
                        des seances regulieres, espacees de deux a quatre
                        semaines, durant la periode de sevrage.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-6 py-5">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-amber-800">
                        Precaution
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-amber-700">
                        La hijama doit etre pratiquee par un professionnel
                        forme, avec du materiel sterile a usage unique. Elle
                        est deconseillee pour les personnes sous
                        anticoagulants, les femmes enceintes et les personnes
                        souffrant de troubles de la coagulation. Consultez
                        votre medecin avant toute seance, surtout en periode
                        de sevrage tabagique.
                      </p>
                    </div>
                  </div>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Remedes arabes et medecine prophetique : soins naturels en islam"
                  description="Nigelle, miel, hijama, huile d'olive et les pratiques de guerison naturelle mentionnees dans le Coran et la Sunna."
                  href="/remede-arabe"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Invocations et douas */}
              {/* ============================================ */}
              <section id="invocations-douas" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations et douas pour la force et la perseverance
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le sevrage tabagique n&apos;est pas seulement un combat
                  physique : c&apos;est aussi un cheminement spirituel.
                  L&apos;invocation (doua) est l&apos;arme du croyant. Le
                  Prophete (paix sur lui) a dit : &laquo;&nbsp;L&apos;invocation
                  est l&apos;essence de l&apos;adoration&nbsp;&raquo; (rapporte
                  par at-Tirmidhi). Recourir aux douas dans les moments de
                  faiblesse renforce la determination et rappelle que la
                  guerison vient d&apos;Allah seul.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Douas recommandees pour le sevrage
                </h3>

                <div className="mt-4 space-y-4">
                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي
                      الدُّنْيَا وَالْآخِرَةِ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;O Allah, je Te demande le bien-etre en ce
                      monde et dans l&apos;au-dela.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporte par Abu Dawud et at-Tirmidhi. A reciter le matin
                      et le soir.
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      اللَّهُمَّ يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي
                      عَلَى دِينِكَ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;O Allah, Toi qui retournes les coeurs,
                      affermis mon coeur sur Ta religion.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporte par at-Tirmidhi. Particulierement adaptee pour
                      demander la fermete face a la tentation.
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Allah nous suffit, Il est le meilleur
                      garant.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Sourate Al-Imran, verset 173. A repeter lors des moments
                      de tentation et de faiblesse.
                    </p>
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Le dhikr comme ancrage quotidien
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le dhikr (rappel d&apos;Allah) est un outil puissant de
                  gestion de l&apos;anxiete et du stress, deux declencheurs
                  majeurs de la rechute. Le Coran affirme : &laquo;&nbsp;N&apos;est-ce
                  pas par le rappel d&apos;Allah que les coeurs
                  s&apos;apaisent ?&nbsp;&raquo; (sourate Ar-Ra&apos;d, verset
                  28). Repeter <em>SubhanAllah</em>,{" "}
                  <em>Alhamdulillah</em>, <em>Allahu Akbar</em> permet de
                  recentrer l&apos;attention, de calmer le mental et de
                  remplacer le reflexe de la cigarette par un acte
                  d&apos;adoration.
                </p>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Invocation
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Moment conseille
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Bienfait pour le sevrage
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Doua pour la sante (<em>al-&apos;afiya</em>)
                        </td>
                        <td className="py-3 pr-4">
                          Matin et soir (adhkar)
                        </td>
                        <td className="py-3">
                          Intention de guerison, renouvellement de la
                          determination
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Doua pour la fermete du coeur
                        </td>
                        <td className="py-3 pr-4">
                          Avant les moments a risque (pauses, apres les repas)
                        </td>
                        <td className="py-3">
                          Resistance a la tentation, ancrage spirituel
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          HasbounAllah wa ni&apos;mal wakeel
                        </td>
                        <td className="py-3 pr-4">
                          A chaque envie de cigarette
                        </td>
                        <td className="py-3">
                          Lacher-prise, confiance en la protection divine
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Dhikr (SubhanAllah, Alhamdulillah)
                        </td>
                        <td className="py-3 pr-4">
                          En marchant, dans les transports
                        </td>
                        <td className="py-3">
                          Apaisement de l&apos;anxiete, redirection de
                          l&apos;attention
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Lecture du{" "}
                          <Link
                            href="/apprendre-le-coran"
                            className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                          >
                            Coran
                          </Link>
                        </td>
                        <td className="py-3 pr-4">
                          Apres chaque priere obligatoire
                        </td>
                        <td className="py-3">
                          Paix interieure, renforcement de la foi
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Concretement, chaque fois que l&apos;envie de fumer survient,
                  le croyant peut effectuer ses ablutions, prier deux
                  raka&apos;at de priere surrerogatoire et invoquer Allah pour
                  la force et la patience. Ce rituel spirituel prend la place
                  du geste machinal de la cigarette et transforme un moment de
                  faiblesse en un moment de rapprochement avec le Createur.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Le jeune comme outil de discipline */}
              {/* ============================================ */}
              <section id="jeune-discipline" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le jeune comme outil de discipline et de sevrage
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le jeune (<em>siyam</em>) est l&apos;un des cinq piliers de
                  l&apos;islam et l&apos;un des meilleurs outils pour
                  developper la maitrise de soi. Le Coran explique sa finalite
                  profonde : &laquo;&nbsp;O vous qui avez cru, le jeune vous a
                  ete prescrit comme il a ete prescrit a ceux qui vous ont
                  precedes, afin que vous atteigniez la piete&nbsp;&raquo;
                  (sourate Al-Baqara, verset 183).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le Ramadan : une opportunite de sevrage
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le mois de Ramadan offre un cadre ideal pour entamer ou
                  consolider l&apos;arret du tabac. Pendant les heures de
                  jeune (de l&apos;aube au coucher du soleil), le fumeur
                  s&apos;abstient naturellement de fumer. Cette abstinence
                  prolongee, repetee sur trente jours, habitue le corps et
                  l&apos;esprit a vivre sans nicotine. L&apos;atmosphere
                  spirituelle du Ramadan, la priere de tarawih, la lecture du
                  Coran et la solidarite communautaire renforcent la motivation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  De nombreux anciens fumeurs temoignent que le Ramadan a ete
                  le point de depart de leur arret definitif. La cle consiste
                  a ne pas reprendre la cigarette apres l&apos;iftar (rupture
                  du jeune), ce qui constitue souvent le moment le plus
                  difficile. Remplacer cette habitude par un siwak, une
                  infusion de menthe ou une doua de gratitude facilite la
                  transition.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le jeune volontaire : prolonger l&apos;effort
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  En dehors du Ramadan, le jeune surrerogatoire (les lundis et
                  jeudis, les jours blancs du mois, le jeune de Dawud un jour
                  sur deux) permet de maintenir la discipline acquise. Ces
                  jours de jeune offrent des pauses regulieres ou le corps se
                  purifie et ou la volonte se renforce. Le Prophete (paix sur
                  lui) a dit : &laquo;&nbsp;Le jeune est un bouclier&nbsp;&raquo;
                  (rapporte par al-Bukhari et Muslim), et ce bouclier protege
                  aussi contre les addictions.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Profil : le fumeur occasionnel
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Celui qui fume quelques cigarettes par jour peut
                      profiter du jeune du Ramadan pour arreter
                      completement. La dependance physique etant moderee,
                      le soutien spirituel et les remedes prophetiques
                      (nigelle, miel, siwak) suffisent souvent a
                      accompagner le sevrage avec succes.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Profil : le gros fumeur
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Pour celui qui consomme un paquet ou plus par jour, la
                      dependance physique est forte. Le jeune constitue un
                      tremplin, mais un accompagnement medical (substituts
                      nicotiniques, consultation de tabacologie) est fortement
                      recommande en parallele des remedes naturels et du
                      soutien spirituel.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Profil : le fumeur en rechute
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les rechutes font partie du processus de sevrage. En
                      islam, la repentance (tawba) est toujours ouverte.
                      Chaque nouvelle tentative est une occasion de se
                      rapprocher d&apos;Allah. Le jeune volontaire aide a
                      retrouver la discipline, et le soutien communautaire
                      et familial redonne espoir et force.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Profil : le jeune adulte fumeur
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les jeunes musulmans qui commencent a fumer peuvent
                      s&apos;appuyer sur la pression positive des pairs
                      pieux et sur les cercles de science islamique pour
                      trouver la motivation. Le jeune surrerogatoire et le
                      sport (recommande par la Sunna) sont des allies
                      precieux pour canaliser l&apos;energie et remplacer
                      l&apos;habitude du tabac.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/remede-arabe-arreter-fumer-techniques-sevrage.jpg"
                    alt="Techniques douces de sevrage tabagique inspirees de la tradition arabe et islamique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Soutien communautaire et familial : la force de la oumma
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix sur lui) a dit :
                  &laquo;&nbsp;Le croyant pour le croyant est comme une
                  construction dont les parties se soutiennent
                  mutuellement&nbsp;&raquo; (rapporte par al-Bukhari et
                  Muslim). L&apos;arret du tabac n&apos;est pas un combat
                  solitaire. S&apos;entourer de proches bienveillants, partager
                  son intention d&apos;arreter a la mosquee, rejoindre un
                  groupe de soutien ou simplement demander a un ami pieux de
                  faire des douas sont autant de moyens de beneficier de la
                  force collective.
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>A la mosquee :</strong> annoncer son intention
                      d&apos;arreter apres la salat et demander aux freres ou
                      aux soeurs de faire des invocations en sa faveur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>En famille :</strong> instaurer des rituels
                      de soutien comme la preparation d&apos;une infusion
                      partagee apres chaque repas, ou une seance de lecture
                      coranique commune le soir.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cercles de dhikr :</strong> participer a des
                      halaqat (cercles de science et de rappel) offre un
                      environnement sain et motivant, eloigne des contextes
                      ou l&apos;on est tente de fumer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Celebration des etapes :</strong> feter chaque
                      semaine sans cigarette par un repas en famille, une
                      sadaqa (charite) ou un cadeau symbolique renforce la
                      motivation et ancre les progres.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Quand consulter un medecin
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les remedes prophetiques et le soutien spirituel sont de
                  precieux allies, mais ils ne remplacent pas un suivi medical
                  professionnel. Il est recommande de consulter un medecin ou
                  un tabacologue dans les cas suivants :
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Dependance severe (plus de 20 cigarettes par jour depuis
                      plusieurs annees).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Echecs repetes malgre les efforts (plusieurs tentatives
                      sans succes).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Symptomes de sevrage intenses (insomnie severe,
                      depression, prise de poids importante).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Presence de maladies associees (maladies respiratoires,
                      cardiovasculaires, diabete).
                    </span>
                  </li>
                </ul>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les substituts nicotiniques (patchs, gommes, pastilles),
                  les medicaments de sevrage (sur prescription) et les
                  therapies comportementales et cognitives (TCC) sont des
                  outils medicaux efficaces qui se combinent parfaitement
                  avec les remedes prophetiques. Le Prophete (paix sur lui) a
                  dit : &laquo;&nbsp;Soignez-vous, serviteurs de Dieu, car Dieu
                  n&apos;a pas cree de maladie sans avoir cree son
                  remede&nbsp;&raquo; (rapporte par Abu Dawud et at-Tirmidhi).
                  Se soigner par tous les moyens licites est une recommandation
                  prophetique.
                </p>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  La foi comme moteur du changement
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Au coeur du remede arabe pour arreter de fumer se trouve une
                  conviction profonde : chaque effort sincere, aussi petit
                  soit-il, est vu et recompense par Allah. La repentance
                  (<em>tawba</em>) est toujours ouverte, et la misericorde
                  divine accueille celui qui revient avec sincerite. Le Prophete
                  (paix sur lui) a dit : &laquo;&nbsp;La douceur n&apos;est dans
                  aucune chose sans qu&apos;elle ne l&apos;embellisse&nbsp;&raquo;
                  (rapporte par Muslim).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette sagesse invite a avancer sans brutalite ni
                  culpabilite excessive. Une rechute n&apos;est pas un echec
                  definitif : c&apos;est une etape du cheminement. Se relever,
                  renouveler son intention, multiplier les invocations et
                  reprendre les remedes prophetiques avec confiance constituent
                  la voie de la perseverance. Chaque journee sans cigarette est
                  une victoire qui merite d&apos;etre reconnue et celebree.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levees en priere et invocation, symbole de la confiance en Allah pour arreter de fumer"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              <MedicalDisclaimer />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation silo remede-arabe */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Remedes arabes et medecine prophetique
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les remedes arabes
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Protection contre la sorcellerie
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Reves en islam
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
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    La langue arabe
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
