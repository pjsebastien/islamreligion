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
    "Remède arabe pour arrêter de fumer : sevrage naturel, invocations et soutien spirituel",
  description:
    "Découvrez les remèdes arabes pour arrêter de fumer : nigelle, miel, siwak, hijama, invocations prophétiques et soutien spirituel pour un sevrage doux et durable en islam.",
  alternates: {
    canonical: "https://www.islamreligion.fr/remede-arabe-arreter-fumer",
  },
};

const tocItems = [
  { id: "tabac-islam", label: "Le tabac en islam : statut juridique" },
  { id: "remedes-prophetiques", label: "Remèdes prophétiques d'aide au sevrage" },
  { id: "hijama-sevrage", label: "Hijama et sevrage tabagique" },
  { id: "invocations-douas", label: "Invocations et douas pour la persévérance" },
  { id: "jeune-discipline", label: "Le jeûne comme outil de discipline" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Le tabac est-il haram ou makruh en islam ?",
    answer:
      "Les savants contemporains sont majoritairement d'accord pour dire que le tabac est haram (interdit) en raison des preuves scientifiques irréfutables de sa nocivité. La règle islamique \"ne vous tuez pas vous-mêmes\" (sourate An-Nisa, verset 29) et \"ne vous jetez pas dans la perdition\" (sourate Al-Baqara, verset 195) s'appliquent directement. Certains savants plus anciens le classaient comme makruh (détestable), car la nocivité n'était pas encore prouvée à leur époque.",
  },
  {
    question: "La graine de nigelle aide-t-elle vraiment à arrêter de fumer ?",
    answer:
      "La graine de nigelle (habba sawda) ne constitue pas un substitut direct à la nicotine, mais elle soutient le corps durant le sevrage. La thymoquinone, son principe actif, possède des propriétés anti-inflammatoires et antioxydantes qui aident à réparer les voies respiratoires irritées par le tabac. Associée au miel, elle favorise aussi la réduction du stress et de l'anxiété, deux facteurs majeurs de rechute.",
  },
  {
    question: "Le siwak peut-il remplacer le geste de fumer ?",
    answer:
      "Le siwak (miswak) est un excellent substitut au geste oral de la cigarette. Son utilisation permet de satisfaire le besoin de porter quelque chose à la bouche, tout en purifiant l'haleine et en renforçant la santé des gencives. Le Prophète Muhammad (paix sur lui) en recommandait l'usage régulier. Il ne contient aucune substance addictive et peut être utilisé à tout moment de la journée.",
  },
  {
    question: "La hijama peut-elle faciliter le sevrage tabagique ?",
    answer:
      "La hijama (ventouses) est une technique de médecine prophétique qui peut accompagner le sevrage. En stimulant la circulation sanguine et en favorisant l'élimination des toxines accumulées par le tabac, elle aide à réduire certains symptômes de manque comme les maux de tête et la fatigue. Elle doit être pratiquée par un professionnel formé, dans des conditions d'hygiène strictes, et ne remplace pas un suivi médical.",
  },
  {
    question: "Quelles invocations réciter pour avoir la force d'arrêter de fumer ?",
    answer:
      "Plusieurs invocations sont recommandées : \"Allahoumma inni as'aluka al-'afiya\" (Ô Allah, je Te demande la santé et le bien-être), \"HasbounAllah wa ni'mal wakeel\" (Allah nous suffit, Il est le meilleur garant) et les formules de dhikr comme SubhanAllah, Alhamdulillah, Allahu Akbar. Le Prophète (paix sur lui) invoquait aussi Allah pour la fermeté du cœur. Ces prières apportent sérénité et force intérieure face aux moments de tentation.",
  },
  {
    question: "Le jeûne du Ramadan aide-t-il à arrêter de fumer ?",
    answer:
      "Le Ramadan est une période privilégiée pour entamer un sevrage tabagique. Pendant les heures de jeûne, le corps s'habitue à fonctionner sans nicotine, et la dimension spirituelle du mois sacré renforce la motivation. De nombreux fumeurs constatent que l'abstinence diurne prolongée facilite la transition vers un arrêt complet. Le jeûne volontaire les lundis et jeudis peut prolonger cet élan après le Ramadan.",
  },
  {
    question: "Peut-on combiner remèdes prophétiques et substituts nicotiniques ?",
    answer:
      "Oui, les remèdes prophétiques (nigelle, miel, siwak, hijama) sont complémentaires des traitements médicaux. Ils ne remplacent pas les substituts nicotiniques (patchs, gommes) ni les consultations de tabacologie, mais les accompagnent en apportant un soutien naturel et spirituel. Informez toujours votre médecin des compléments que vous prenez pour éviter les interactions.",
  },
  {
    question: "Comment le soutien communautaire aide-t-il à arrêter de fumer ?",
    answer:
      "La oumma (communauté musulmane) joue un rôle majeur dans le sevrage. Le partage des efforts avec des proches ou au sein de la mosquée crée un environnement de soutien bienveillant. Les cercles de dhikr, les rencontres fraternelles après la salat et les groupes d'entraide permettent de briser l'isolement, première cause de rechute. Le Prophète (paix sur lui) a dit : \"Le croyant pour le croyant est comme une construction dont les parties se soutiennent mutuellement.\"",
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
          "Remède arabe pour arrêter de fumer : sevrage naturel, invocations et soutien spirituel",
        description:
          "Découvrez les remèdes arabes pour arrêter de fumer : nigelle, miel, siwak, hijama, invocations prophétiques et soutien spirituel pour un sevrage doux et durable en islam.",
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
            name: "Remèdes arabes",
            item: "https://www.islamreligion.fr/remede-arabe",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Arrêter de fumer",
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
          title="Remède arabe pour arrêter de fumer : sevrage naturel et invocations"
          subtitle="Nigelle, miel, siwak, hijama, douas et soutien communautaire pour accompagner le sevrage tabagique avec douceur et spiritualité."
          imageSrc="/images/remede-arabe-arreter-fumer-methodes-douces-invocations.jpg"
          imageAlt="Remèdes arabes naturels pour arrêter de fumer, plantes médicinales et invocations islamiques"
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
                  Rem&egrave;des arabes
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Arr&ecirc;ter de fumer</span>
              </nav>

              <MedicalDisclaimer />

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En r&eacute;sum&eacute;
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Arr&ecirc;ter de fumer est un acte de pr&eacute;servation de la sant&eacute;, un
                  devoir religieux en islam. Le corps est un d&eacute;p&ocirc;t confi&eacute; par
                  Allah (<em>amana</em>) qu&apos;il convient de prot&eacute;ger. La
                  tradition proph&eacute;tique offre des rem&egrave;des naturels (nigelle,
                  miel, siwak, talbina) et des outils spirituels (invocations,
                  je&ucirc;ne, soutien communautaire) pour accompagner ce cheminement
                  avec bienveillance et pers&eacute;v&eacute;rance.
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
                  a suscit&eacute; de nombreux d&eacute;bats parmi les savants musulmans. Si
                  les anciens juristes le classaient comme <em>makruh</em>{" "}
                  (d&eacute;testable), la majorit&eacute; des savants contemporains consid&egrave;re
                  d&eacute;sormais le tabac comme <em>haram</em> (interdit), en raison
                  des preuves scientifiques &eacute;tablissant de mani&egrave;re certaine sa
                  nocivit&eacute; mortelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Plusieurs principes coraniques fondent cette position. Allah
                  dit dans le Coran : &laquo;&nbsp;Ne vous jetez pas de vos
                  propres mains dans la perdition&nbsp;&raquo; (sourate
                  Al-Baqara, verset 195) et &laquo;&nbsp;Ne vous tuez pas
                  vous-m&ecirc;mes, certes Allah est mis&eacute;ricordieux envers
                  vous&nbsp;&raquo; (sourate An-Nisa, verset 29). Le tabac,
                  cause premi&egrave;re de cancers, de maladies cardiovasculaires et
                  respiratoires, entre directement dans le cadre de cette
                  interdiction.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph&egrave;te Muhammad (paix sur lui) a dit :
                  &laquo;&nbsp;Pas de pr&eacute;judice ni de tort r&eacute;ciproque&nbsp;&raquo;
                  (<em>la darar wa la dirar</em>, rapport&eacute; par Ahmad et Ibn
                  Majah). Le tabagisme passif nuit aussi &agrave; l&apos;entourage,
                  ajoutant une dimension suppl&eacute;mentaire &agrave; son interdiction.
                  Le fumeur ne se nuit pas seulement &agrave; lui-m&ecirc;me, mais aussi &agrave;
                  sa famille, &agrave; ses voisins et &agrave; la communaut&eacute;.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le corps comme d&eacute;p&ocirc;t sacr&eacute; (<em>amana</em>)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  En islam, le corps est un pr&ecirc;t divin dont le croyant devra
                  rendre compte au Jour du Jugement. Le Proph&egrave;te (paix sur lui)
                  a dit : &laquo;&nbsp;Il sera demand&eacute; &agrave; chaque gardien au sujet
                  de ce qui lui a &eacute;t&eacute; confi&eacute; : l&apos;a-t-il pr&eacute;serv&eacute; ou
                  l&apos;a-t-il perdu ?&nbsp;&raquo; (rapport&eacute; par an-Nasa&apos;i).
                  Fumer revient donc &agrave; d&eacute;t&eacute;riorer volontairement un d&eacute;p&ocirc;t sacr&eacute;,
                  ce qui constitue un manquement &agrave; la responsabilit&eacute; du croyant
                  envers son Cr&eacute;ateur.
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
                          Al-Azhar, Comit&eacute; permanent d&apos;Arabie Saoudite,
                          majorit&eacute; des savants contemporains
                        </td>
                        <td className="py-3">
                          Nocivit&eacute; prouv&eacute;e, gaspillage d&apos;argent, nuisance &agrave;
                          autrui
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Makruh (d&eacute;testable)
                        </td>
                        <td className="py-3 pr-4">
                          Certains savants anciens (avant les preuves
                          m&eacute;dicales)
                        </td>
                        <td className="py-3">
                          Mauvaise odeur, impuret&eacute;, caract&egrave;re r&eacute;pr&eacute;hensible
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mubah (permis)
                        </td>
                        <td className="py-3 pr-4">
                          Position tr&egrave;s minoritaire, abandonn&eacute;e
                        </td>
                        <td className="py-3">
                          Absence de texte explicite (argument rejet&eacute; par la
                          majorit&eacute;)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La d&eacute;pense financi&egrave;re li&eacute;e au tabac est &eacute;galement
                  probl&eacute;matique en islam. Pour approfondir{" "}
                  <Link
                    href="/halal-haram-criteres"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    les critères du halal et du haram
                  </Link>
                  , il faut comprendre que gaspiller son argent dans ce qui nuit
                  &agrave; la sant&eacute; rel&egrave;ve du <em>tabdhir</em> (gaspillage), condamn&eacute;
                  dans le Coran : &laquo;&nbsp;Les gaspilleurs sont les fr&egrave;res
                  des diables&nbsp;&raquo; (sourate Al-Isra, verset 27).
                  L&apos;argent d&eacute;pens&eacute; en cigarettes pourrait &ecirc;tre orient&eacute; vers
                  la sadaqa (charit&eacute;), le soutien familial ou des projets
                  b&eacute;n&eacute;fiques.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/remede-arabe-arreter-fumer-plantes-naturelles.jpg"
                    alt="Plantes médicinales arabes et remèdes naturels pour accompagner le sevrage tabagique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Découvrez tous les remèdes de la médecine prophétique"
                  href="/remede-arabe"
                  linkText="Voir la page remèdes arabes"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Remedes prophetiques */}
              {/* ============================================ */}
              <section id="remedes-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rem&egrave;des proph&eacute;tiques d&apos;aide au sevrage tabagique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    m&eacute;decine proph&eacute;tique
                  </Link>{" "}
                  offre des rem&egrave;des naturels qui, sans pr&eacute;tendre gu&eacute;rir
                  l&apos;addiction &agrave; eux seuls, soutiennent le corps et
                  l&apos;esprit durant le sevrage. Voici les principaux, avec
                  leurs bienfaits sp&eacute;cifiques dans le contexte de l&apos;arr&ecirc;t
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
                      contient un rem&egrave;de contre toute maladie, sauf la
                      mort.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapport&eacute; par al-Bukhari et Muslim.
                    </p>
                  </div>
                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    La thymoquinone, principal composant actif de la nigelle
                    (<em>Nigella sativa</em>), poss&egrave;de des propri&eacute;t&eacute;s
                    anti-inflammatoires et antioxydantes qui aident &agrave; r&eacute;parer
                    les voies respiratoires endommag&eacute;es par le tabac. Elle
                    soutient &eacute;galement le syst&egrave;me immunitaire, souvent
                    affaibli chez les fumeurs.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Usage recommand&eacute; :</strong> une cuill&egrave;re &agrave; caf&eacute; de
                    graines broy&eacute;es dans du miel, &agrave; jeun chaque matin. L&apos;huile
                    de nigelle (quelques gouttes sous la langue) est une
                    alternative pratique. La cure peut durer plusieurs semaines
                    pour un effet optimal.
                  </p>
                </div>

                {/* Miel */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le miel : alli&eacute; du sevrage
                  </h3>
                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    Le Coran pr&eacute;sente le miel comme porteur de gu&eacute;rison :
                    &laquo;&nbsp;De leur ventre sort une boisson aux couleurs
                    vari&eacute;es, dans laquelle il y a une gu&eacute;rison pour les
                    gens&nbsp;&raquo; (sourate An-Nahl, verset 69). Dans le
                    contexte du sevrage, le miel apporte une &eacute;nergie naturelle
                    qui compense la fatigue li&eacute;e au manque de nicotine. Ses
                    propri&eacute;t&eacute;s antibact&eacute;riennes et apaisantes soulagent
                    l&apos;irritation de la gorge fr&eacute;quente chez les anciens
                    fumeurs.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Usage recommand&eacute; :</strong> une cuill&egrave;re &agrave; soupe de
                    miel pur dilu&eacute;e dans de l&apos;eau ti&egrave;de le matin, ou
                    m&eacute;lang&eacute;e &agrave; la nigelle. Les vari&eacute;t&eacute;s les plus pris&eacute;es sont
                    le miel de jujubier (<em>sidr</em>), le miel de thym et le
                    miel de manuka. Lors d&apos;une envie de cigarette,
                    prendre une gorg&eacute;e d&apos;eau miell&eacute;e peut aider &agrave;
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
                      Rapport&eacute; par an-Nasa&apos;i et valid&eacute; par Ibn Khuzayma.
                    </p>
                  </div>
                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    Le siwak r&eacute;pond au besoin oral que ressent le fumeur en
                    sevrage : le r&eacute;flexe de porter quelque chose &agrave; la bouche.
                    Fabriqu&eacute; &agrave; partir de l&apos;arbre <em>Salvadora persica</em>,
                    il poss&egrave;de des propri&eacute;t&eacute;s antibact&eacute;riennes naturelles et
                    aide &agrave; nettoyer les dents jaunies par le tabac. Son usage
                    est recommand&eacute; par le Proph&egrave;te (paix sur lui) avant chaque
                    pri&egrave;re et au r&eacute;veil.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Astuce sevrage :</strong> garder un siwak dans sa
                    poche et le m&acirc;cher d&egrave;s qu&apos;une envie de cigarette
                    survient. Ce geste simple d&eacute;tourne l&apos;attention et
                    satisfait le r&eacute;flexe oral, tout en purifiant l&apos;haleine.
                  </p>
                </div>

                {/* Talbina */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    La talbina : r&eacute;confort et apaisement
                  </h3>
                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    La talbina est une bouillie d&apos;orge que le Proph&egrave;te
                    (paix sur lui) recommandait pour r&eacute;conforter le malade et
                    la personne en deuil. L&apos;orge contribue aussi &agrave;{" "}
                    <Link
                      href="/remede-arabe-constipation"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      réguler son transit digestif
                    </Link>
                    , souvent perturb&eacute; lors d&apos;un changement d&apos;habitudes alimentaires. Selon le hadith rapport&eacute; par
                    al-Bukhari, elle &laquo;&nbsp;r&eacute;conforte le c&oelig;ur du malade
                    et emporte une partie de son chagrin&nbsp;&raquo;. Riche
                    en tryptophane, un pr&eacute;curseur de la s&eacute;rotonine, elle aide
                    &agrave; r&eacute;guler l&apos;humeur et &agrave; lutter contre l&apos;irritabilit&eacute;
                    et le stress li&eacute;s au sevrage.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Pr&eacute;paration :</strong> m&eacute;langer deux cuill&egrave;res &agrave;
                    soupe de farine d&apos;orge dans de l&apos;eau ou du lait,
                    faire chauffer &agrave; feu doux, puis ajouter du miel selon le
                    go&ucirc;t. Consommer le soir pour favoriser un sommeil apais&eacute;,
                    souvent perturb&eacute; en p&eacute;riode de sevrage.
                  </p>
                </div>

                {/* Tableau recapitulatif des remedes */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Rem&egrave;de proph&eacute;tique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action sur le sevrage
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Forme conseill&eacute;e
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Moment id&eacute;al
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Graine de nigelle
                        </td>
                        <td className="py-3 pr-4">
                          R&eacute;paration respiratoire, anti-inflammatoire
                        </td>
                        <td className="py-3 pr-4">
                          Graines broy&eacute;es dans du miel ou huile
                        </td>
                        <td className="py-3">Le matin &agrave; jeun</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Miel pur
                        </td>
                        <td className="py-3 pr-4">
                          &Eacute;nergie naturelle, apaisement de la gorge
                        </td>
                        <td className="py-3 pr-4">
                          Dilu&eacute; dans de l&apos;eau ti&egrave;de
                        </td>
                        <td className="py-3">Matin et lors des envies</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Siwak (miswak)
                        </td>
                        <td className="py-3 pr-4">
                          Substitut oral, hygi&egrave;ne buccale
                        </td>
                        <td className="py-3 pr-4">
                          B&acirc;ton &agrave; m&acirc;cher
                        </td>
                        <td className="py-3">&Agrave; chaque envie de cigarette</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Talbina (orge)
                        </td>
                        <td className="py-3 pr-4">
                          R&eacute;gulation de l&apos;humeur, sommeil
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
                          &Agrave; froid dans l&apos;alimentation
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
                  En compl&eacute;ment des rem&egrave;des proph&eacute;tiques, certaines tisanes
                  issues de la tradition herboriste arabe peuvent accompagner
                  le sevrage. La menthe poivr&eacute;e aide &agrave; clarifier les voies
                  respiratoires, et les anciens fumeurs gagneront &agrave; d&eacute;couvrir
                  comment{" "}
                  <Link
                    href="/remede-arabe-toux-soins-naturels"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    soulager la toux naturellement
                  </Link>{" "}
                  gr&acirc;ce aux soins proph&eacute;tiques. La camomille apaise la nervosit&eacute;. La r&eacute;glisse
                  att&eacute;nue les irritations de la gorge (&agrave; &eacute;viter en cas
                  d&apos;hypertension). L&apos;infusion de thym, connue dans
                  la pharmacop&eacute;e traditionnelle arabe, poss&egrave;de des vertus
                  expectorantes qui facilitent l&apos;&eacute;limination du mucus
                  accumul&eacute; chez les fumeurs.
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Infusion menthe-miel :</strong> boire une tasse
                      apr&egrave;s chaque repas, moment o&ugrave; l&apos;envie de fumer est
                      souvent la plus forte.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>D&eacute;coction de thym :</strong> une tasse le matin
                      pour favoriser le nettoyage pulmonaire progressif.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Camomille du soir :</strong> une tasse avant le
                      coucher pour calmer l&apos;agitation li&eacute;e au manque.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/remede-arabe-arreter-fumer-invocations-spiritualite.jpg"
                    alt="Invocations et spiritualité islamique pour accompagner le sevrage tabagique"
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
                  La hijama (ventouses humides) est l&apos;un des rem&egrave;des les
                  plus recommand&eacute;s par le Proph&egrave;te Muhammad (paix sur lui) :
                  &laquo;&nbsp;Le meilleur de vos rem&egrave;des est la
                  hijama&nbsp;&raquo; (rapport&eacute; par al-Bukhari). Dans le
                  contexte du sevrage tabagique, cette pratique ancestrale
                  offre plusieurs b&eacute;n&eacute;fices compl&eacute;mentaires.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        &Eacute;limination des toxines
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le tabac accumule dans le sang des substances nocives
                        (goudrons, m&eacute;taux lourds, monoxyde de carbone). La
                        hijama favorise l&apos;&eacute;limination de certains de ces
                        r&eacute;sidus en stimulant la circulation sanguine et le
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
                        R&eacute;duction des sympt&ocirc;mes de manque
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les maux de t&ecirc;te, la fatigue et les tensions
                        musculaires sont des sympt&ocirc;mes fr&eacute;quents du sevrage.
                        La hijama peut soulager ces d&eacute;sagr&eacute;ments en favorisant
                        la d&eacute;tente corporelle et en am&eacute;liorant la micro-circulation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Soutien &agrave; la r&eacute;silience physique
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        En stimulant le syst&egrave;me immunitaire et la production
                        de globules blancs, la hijama aide le corps &agrave;
                        retrouver progressivement son &eacute;quilibre naturel apr&egrave;s
                        des ann&eacute;es de tabagisme. Les praticiens recommandent
                        des s&eacute;ances r&eacute;guli&egrave;res, espac&eacute;es de deux &agrave; quatre
                        semaines, durant la p&eacute;riode de sevrage.
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
                        Pr&eacute;caution
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-amber-700">
                        La hijama doit &ecirc;tre pratiqu&eacute;e par un professionnel
                        form&eacute;, avec du mat&eacute;riel st&eacute;rile &agrave; usage unique. Elle
                        est d&eacute;conseill&eacute;e pour les personnes sous
                        anticoagulants, les femmes enceintes et les personnes
                        souffrant de troubles de la coagulation. Consultez
                        votre m&eacute;decin avant toute s&eacute;ance, surtout en p&eacute;riode
                        de sevrage tabagique.
                      </p>
                    </div>
                  </div>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Remèdes arabes et médecine prophétique : soins naturels en islam"
                  description="Nigelle, miel, hijama, huile d'olive et les pratiques de guérison naturelle mentionnées dans le Coran et la Sunna."
                  href="/remede-arabe"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Invocations et douas */}
              {/* ============================================ */}
              <section id="invocations-douas" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations et douas pour la force et la pers&eacute;v&eacute;rance
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le sevrage tabagique n&apos;est pas seulement un combat
                  physique : c&apos;est aussi un cheminement spirituel.
                  L&apos;invocation (doua) est l&apos;arme du croyant. Le
                  Proph&egrave;te (paix sur lui) a dit : &laquo;&nbsp;L&apos;invocation
                  est l&apos;essence de l&apos;adoration&nbsp;&raquo; (rapport&eacute;
                  par at-Tirmidhi). Recourir aux douas dans les moments de
                  faiblesse renforce la d&eacute;termination et rappelle que la
                  gu&eacute;rison vient d&apos;Allah seul.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Douas recommand&eacute;es pour le sevrage
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
                      &laquo;&nbsp;&Ocirc; Allah, je Te demande le bien-&ecirc;tre en ce
                      monde et dans l&apos;au-del&agrave;.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapport&eacute; par Abu Dawud et at-Tirmidhi. &Agrave; r&eacute;citer le matin
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
                      &laquo;&nbsp;&Ocirc; Allah, Toi qui retournes les c&oelig;urs,
                      affermis mon c&oelig;ur sur Ta religion.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapport&eacute; par at-Tirmidhi. Particuli&egrave;rement adapt&eacute;e pour
                      demander la fermet&eacute; face &agrave; la tentation.
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
                      Sourate Al-Imran, verset 173. &Agrave; r&eacute;p&eacute;ter lors des moments
                      de tentation et de faiblesse.
                    </p>
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Le dhikr comme ancrage quotidien
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le dhikr (rappel d&apos;Allah) est un outil puissant pour{" "}
                  <Link
                    href="/remede-angoisse-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    gérer le stress du sevrage
                  </Link>
                  , deux d&eacute;clencheurs
                  majeurs de la rechute. Le Coran affirme : &laquo;&nbsp;N&apos;est-ce
                  pas par le rappel d&apos;Allah que les c&oelig;urs
                  s&apos;apaisent ?&nbsp;&raquo; (sourate Ar-Ra&apos;d, verset
                  28). R&eacute;p&eacute;ter <em>SubhanAllah</em>,{" "}
                  <em>Alhamdulillah</em>, <em>Allahu Akbar</em> permet de
                  recentrer l&apos;attention, de calmer le mental et de
                  remplacer le r&eacute;flexe de la cigarette par un acte
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
                          Moment conseill&eacute;
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Bienfait pour le sevrage
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Doua pour la sant&eacute; (<em>al-&apos;afiya</em>)
                        </td>
                        <td className="py-3 pr-4">
                          Matin et soir (adhkar)
                        </td>
                        <td className="py-3">
                          Intention de gu&eacute;rison, renouvellement de la
                          d&eacute;termination
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Doua pour la fermet&eacute; du c&oelig;ur
                        </td>
                        <td className="py-3 pr-4">
                          Avant les moments &agrave; risque (pauses, apr&egrave;s les repas)
                        </td>
                        <td className="py-3">
                          R&eacute;sistance &agrave; la tentation, ancrage spirituel
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          HasbounAllah wa ni&apos;mal wakeel
                        </td>
                        <td className="py-3 pr-4">
                          &Agrave; chaque envie de cigarette
                        </td>
                        <td className="py-3">
                          L&acirc;cher-prise, confiance en la protection divine
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
                          Apaisement de l&apos;anxi&eacute;t&eacute;, redirection de
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
                          Apr&egrave;s chaque pri&egrave;re obligatoire
                        </td>
                        <td className="py-3">
                          Paix int&eacute;rieure, renforcement de la foi
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Concr&egrave;tement, chaque fois que l&apos;envie de fumer survient,
                  le croyant peut effectuer ses ablutions, prier deux
                  raka&apos;at de pri&egrave;re sur&eacute;rogatoire et invoquer Allah pour
                  la force et la patience. Ce rituel spirituel prend la place
                  du geste machinal de la cigarette et transforme un moment de
                  faiblesse en un moment de rapprochement avec le Cr&eacute;ateur.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Le jeune comme outil de discipline */}
              {/* ============================================ */}
              <section id="jeune-discipline" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le je&ucirc;ne comme outil de discipline et de sevrage
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le je&ucirc;ne (<em>siyam</em>) est l&apos;un des cinq piliers de
                  l&apos;islam et l&apos;un des meilleurs outils pour
                  d&eacute;velopper la ma&icirc;trise de soi. Le Coran explique sa finalit&eacute;
                  profonde : &laquo;&nbsp;&Ocirc; vous qui avez cru, le je&ucirc;ne vous a
                  &eacute;t&eacute; prescrit comme il a &eacute;t&eacute; prescrit &agrave; ceux qui vous ont
                  pr&eacute;c&eacute;d&eacute;s, afin que vous atteigniez la pi&eacute;t&eacute;&nbsp;&raquo;
                  (sourate Al-Baqara, verset 183).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le Ramadan : une opportunit&eacute; de sevrage
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le mois de Ramadan offre un cadre id&eacute;al pour entamer ou
                  consolider l&apos;arr&ecirc;t du tabac. Pendant les heures de
                  je&ucirc;ne (de l&apos;aube au coucher du soleil), le fumeur
                  s&apos;abstient naturellement de fumer. Cette abstinence
                  prolong&eacute;e, r&eacute;p&eacute;t&eacute;e sur trente jours, habitue le corps et
                  l&apos;esprit &agrave; vivre sans nicotine. L&apos;atmosph&egrave;re
                  spirituelle du Ramadan, la pri&egrave;re de tarawih, la lecture du
                  Coran et la solidarit&eacute; communautaire renforcent la motivation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  De nombreux anciens fumeurs t&eacute;moignent que le Ramadan a &eacute;t&eacute;
                  le point de d&eacute;part de leur arr&ecirc;t d&eacute;finitif. La cl&eacute; consiste
                  &agrave; ne pas reprendre la cigarette apr&egrave;s l&apos;iftar (rupture
                  du je&ucirc;ne), ce qui constitue souvent le moment le plus
                  difficile. Remplacer cette habitude par un siwak, une
                  infusion de menthe ou une doua de gratitude facilite la
                  transition.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le je&ucirc;ne volontaire : prolonger l&apos;effort
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  En dehors du Ramadan, le je&ucirc;ne sur&eacute;rogatoire (les lundis et
                  jeudis, les jours blancs du mois, le je&ucirc;ne de Dawud un jour
                  sur deux) permet de maintenir la discipline acquise. Ces
                  jours de je&ucirc;ne offrent des pauses r&eacute;guli&egrave;res o&ugrave; le corps se
                  purifie et o&ugrave; la volont&eacute; se renforce. Le Proph&egrave;te (paix sur
                  lui) a dit : &laquo;&nbsp;Le je&ucirc;ne est un bouclier&nbsp;&raquo;
                  (rapport&eacute; par al-Bukhari et Muslim), et ce bouclier prot&egrave;ge
                  aussi contre les addictions.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Profil : le fumeur occasionnel
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Celui qui fume quelques cigarettes par jour peut
                      profiter du je&ucirc;ne du Ramadan pour arr&ecirc;ter
                      compl&egrave;tement. La d&eacute;pendance physique &eacute;tant mod&eacute;r&eacute;e,
                      le soutien spirituel et les rem&egrave;des proph&eacute;tiques
                      (nigelle, miel, siwak) suffisent souvent &agrave;
                      accompagner le sevrage avec succ&egrave;s.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Profil : le gros fumeur
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Pour celui qui consomme un paquet ou plus par jour, la
                      d&eacute;pendance physique est forte. Le je&ucirc;ne constitue un
                      tremplin, mais un accompagnement m&eacute;dical (substituts
                      nicotiniques, consultation de tabacologie) est fortement
                      recommand&eacute; en parall&egrave;le des rem&egrave;des naturels et du
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
                      rapprocher d&apos;Allah. Le je&ucirc;ne volontaire aide &agrave;
                      retrouver la discipline, et le soutien communautaire
                      et familial redonne espoir et force.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Profil : le jeune adulte fumeur
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les jeunes musulmans qui commencent &agrave; fumer peuvent
                      s&apos;appuyer sur la pression positive des pairs
                      pieux et sur les cercles de science islamique pour
                      trouver la motivation. Le je&ucirc;ne sur&eacute;rogatoire et le
                      sport (recommand&eacute; par la Sunna) sont des alli&eacute;s
                      pr&eacute;cieux pour canaliser l&apos;&eacute;nergie et remplacer
                      l&apos;habitude du tabac.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/remede-arabe-arreter-fumer-techniques-sevrage.jpg"
                    alt="Techniques douces de sevrage tabagique inspirées de la tradition arabe et islamique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Soutien communautaire et familial : la force de la oumma
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph&egrave;te (paix sur lui) a dit :
                  &laquo;&nbsp;Le croyant pour le croyant est comme une
                  construction dont les parties se soutiennent
                  mutuellement&nbsp;&raquo; (rapport&eacute; par al-Bukhari et
                  Muslim). L&apos;arr&ecirc;t du tabac n&apos;est pas un combat
                  solitaire. S&apos;entourer de proches bienveillants, partager
                  son intention d&apos;arr&ecirc;ter &agrave; la mosqu&eacute;e, rejoindre un
                  groupe de soutien ou simplement demander &agrave; un ami pieux de
                  faire des douas sont autant de moyens de b&eacute;n&eacute;ficier de la
                  force collective.
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>&Agrave; la mosqu&eacute;e :</strong> annoncer son intention
                      d&apos;arr&ecirc;ter apr&egrave;s la salat et demander aux fr&egrave;res ou
                      aux s&oelig;urs de faire des invocations en sa faveur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>En famille :</strong> instaurer des rituels
                      de soutien comme la pr&eacute;paration d&apos;une infusion
                      partag&eacute;e apr&egrave;s chaque repas, ou une s&eacute;ance de lecture
                      coranique commune le soir.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cercles de dhikr :</strong> participer &agrave; des
                      halaqat (cercles de science et de rappel) offre un
                      environnement sain et motivant, &eacute;loign&eacute; des contextes
                      o&ugrave; l&apos;on est tent&eacute; de fumer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>C&eacute;l&eacute;bration des &eacute;tapes :</strong> f&ecirc;ter chaque
                      semaine sans cigarette par un repas en famille, une
                      sadaqa (charit&eacute;) ou un cadeau symbolique renforce la
                      motivation et ancre les progr&egrave;s.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Quand consulter un m&eacute;decin
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les rem&egrave;des proph&eacute;tiques et le soutien spirituel sont de
                  pr&eacute;cieux alli&eacute;s, mais ils ne remplacent pas un suivi m&eacute;dical
                  professionnel. Il est recommand&eacute; de consulter un m&eacute;decin ou
                  un tabacologue dans les cas suivants :
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      D&eacute;pendance s&eacute;v&egrave;re (plus de 20 cigarettes par jour depuis
                      plusieurs ann&eacute;es).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      &Eacute;checs r&eacute;p&eacute;t&eacute;s malgr&eacute; les efforts (plusieurs tentatives
                      sans succ&egrave;s).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Sympt&ocirc;mes de sevrage intenses (insomnie s&eacute;v&egrave;re,
                      d&eacute;pression, prise de poids importante). Consultez nos
                      conseils pour{" "}
                      <Link
                        href="/remede-arabe-maigrir-islam"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        maintenir un poids sain
                      </Link>{" "}
                      apr&egrave;s l&apos;arr&ecirc;t du tabac.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Pr&eacute;sence de maladies associ&eacute;es (maladies respiratoires,
                      cardiovasculaires, diab&egrave;te).
                    </span>
                  </li>
                </ul>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les substituts nicotiniques (patchs, gommes, pastilles),
                  les m&eacute;dicaments de sevrage (sur prescription) et les
                  th&eacute;rapies comportementales et cognitives (TCC) sont des
                  outils m&eacute;dicaux efficaces qui se combinent parfaitement
                  avec les rem&egrave;des proph&eacute;tiques. Le Proph&egrave;te (paix sur lui) a
                  dit : &laquo;&nbsp;Soignez-vous, serviteurs de Dieu, car Dieu
                  n&apos;a pas cr&eacute;&eacute; de maladie sans avoir cr&eacute;&eacute; son
                  rem&egrave;de&nbsp;&raquo; (rapport&eacute; par Abu Dawud et at-Tirmidhi).
                  Se soigner par tous les moyens licites est une recommandation
                  proph&eacute;tique.
                </p>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  La foi comme moteur du changement
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Au c&oelig;ur du rem&egrave;de arabe pour arr&ecirc;ter de fumer se trouve une
                  conviction profonde : chaque effort sinc&egrave;re, aussi petit
                  soit-il, est vu et r&eacute;compens&eacute; par Allah. La repentance
                  (<em>tawba</em>) est toujours ouverte, et la mis&eacute;ricorde
                  divine accueille celui qui revient avec sinc&eacute;rit&eacute;. Le Proph&egrave;te
                  (paix sur lui) a dit : &laquo;&nbsp;La douceur n&apos;est dans
                  aucune chose sans qu&apos;elle ne l&apos;embellisse&nbsp;&raquo;
                  (rapport&eacute; par Muslim).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette sagesse invite &agrave; avancer sans brutalit&eacute; ni
                  culpabilit&eacute; excessive. Une rechute n&apos;est pas un &eacute;chec
                  d&eacute;finitif : c&apos;est une &eacute;tape du cheminement. Se relever,
                  renouveler son intention, multiplier les invocations et
                  reprendre les rem&egrave;des proph&eacute;tiques avec confiance constituent
                  la voie de la pers&eacute;v&eacute;rance. Chaque journ&eacute;e sans cigarette est
                  une victoire qui m&eacute;rite d&apos;&ecirc;tre reconnue et c&eacute;l&eacute;br&eacute;e.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en prière et invocation, symbole de la confiance en Allah pour arrêter de fumer"
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
                  Rem&egrave;des arabes et m&eacute;decine proph&eacute;tique
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les rem&egrave;des arabes
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
                    R&ecirc;ves en islam
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages meres */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le m&ecirc;me sujet
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
