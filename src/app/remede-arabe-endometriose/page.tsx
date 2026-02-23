import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import HadithCard from "@/components/HadithCard";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title:
    "Remède arabe endométriose : nigelle, hijama et soins prophétiques",
  description:
    "Découvrez les remèdes arabes et prophétiques pour accompagner l'endométriose : nigelle, miel, hijama, huile d'olive, invocations et alimentation anti-inflammatoire selon la Sunna.",
  alternates: {
    canonical: "https://www.islamreligion.fr/remede-arabe-endometriose",
  },
};

const tocItems = [
  { id: "comprendre-endometriose", label: "Comprendre l'endométriose" },
  { id: "remedes-prophetiques", label: "Les remèdes prophétiques applicables" },
  { id: "invocations-douas", label: "Invocations et douas pour la guérison" },
  { id: "alimentation-sunna", label: "Alimentation anti-inflammatoire selon la Sunna" },
  { id: "soutien-spirituel", label: "Soutien émotionnel et spirituel" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "La nigelle peut-elle réellement soulager les douleurs de l'endométriose ?",
    answer:
      "La nigelle (Nigella sativa) contient de la thymoquinone, un composé aux propriétés anti-inflammatoires documentées par la recherche scientifique. Plusieurs études préliminaires ont montré son potentiel pour réduire les marqueurs inflammatoires impliqués dans l'endométriose. Cependant, elle ne remplace pas un traitement médical gynécologique. Elle peut être envisagée en complément, après avis de votre médecin, notamment pour vérifier l'absence d'interaction avec un traitement hormonal en cours.",
  },
  {
    question:
      "La hijama est-elle recommandée pour l'endométriose en islam ?",
    answer:
      "La hijama (ventouses) est un remède prophétique recommandé de manière générale pour divers maux. Certaines femmes rapportent un soulagement des douleurs pelviennes après des séances de hijama pratiquées par un praticien formé. Toutefois, aucune étude clinique ne valide son efficacité spécifique sur l'endométriose. Elle doit être pratiquée dans des conditions d'hygiène strictes et ne doit jamais retarder une consultation gynécologique.",
  },
  {
    question:
      "Quelles douas réciter pour demander la guérison de l'endométriose ?",
    answer:
      "Les invocations de guérison enseignées par le Prophète Muhammad (paix et salut sur lui) s'appliquent à toute maladie. La plus connue est : 'Adhhibil-ba's, Rabb an-nas, washfi anta ash-Shafi, la shifa'a illa shifa'uk, shifa'an la yughadiru saqaman' (Ote le mal, Seigneur des hommes, guéris, Tu es Celui qui guérit, il n'y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie). Rapporté par al-Bukhari et Muslim. La récitation régulière de sourate Al-Fatiha et d'Ayat al-Kursi est également recommandée.",
  },
  {
    question:
      "L'alimentation selon la Sunna peut-elle aider en cas d'endométriose ?",
    answer:
      "L'alimentation prophétique privilégie des aliments naturels aux propriétés anti-inflammatoires : huile d'olive, dattes, miel, orge (talbina), figues et graines. Ces aliments, riches en antioxydants et en nutriments, peuvent contribuer à réduire l'inflammation chronique associée à l'endométriose. Un régime anti-inflammatoire, combiné au suivi médical, représente une approche complémentaire cohérente.",
  },
  {
    question:
      "L'endométriose est-elle une épreuve spirituelle selon l'islam ?",
    answer:
      "En islam, toute maladie peut être vécue comme une épreuve (ibtila') qui purifie les péchés et élève le rang du croyant auprès de Dieu. Le Prophète Muhammad (paix et salut sur lui) a dit : 'Aucune fatigue, maladie, souci, tristesse, dommage ou chagrin n'atteint le musulman, pas même une épine qui le pique, sans que Dieu ne lui efface par cela certains de ses péchés' (rapporté par al-Bukhari et Muslim). La patience (sabr) face à la maladie est hautement récompensée.",
  },
  {
    question:
      "Peut-on combiner traitement hormonal et remèdes prophétiques pour l'endométriose ?",
    answer:
      "Oui, les remèdes prophétiques (nigelle, miel, hijama, invocations) peuvent être utilisés en complément d'un traitement hormonal prescrit par un gynécologue. Il est impératif d'en informer votre médecin, car certains compléments naturels peuvent interagir avec les traitements hormonaux. La nigelle, par exemple, peut influencer certains paramètres hormonaux. Ne modifiez jamais un traitement médical sans avis professionnel.",
  },
  {
    question:
      "Le miel a-t-il des bienfaits prouvés sur l'inflammation liée à l'endométriose ?",
    answer:
      "Le miel, mentionné dans le Coran comme contenant 'une guérison pour les gens' (sourate An-Nahl, verset 69), possède des propriétés anti-inflammatoires et antioxydantes reconnues par la recherche. Le miel brut, non chauffé, contient des enzymes, des flavonoïdes et des composés phénoliques qui peuvent contribuer à moduler la réponse inflammatoire. Il est consommé à jeun, pur ou dilué dans de l'eau tiède, en complément du traitement médical.",
  },
  {
    question:
      "Quand faut-il absolument consulter un gynécologue pour l'endométriose ?",
    answer:
      "Une consultation gynécologique est indispensable dès l'apparition de douleurs pelviennes chroniques, de règles très douloureuses (dysménorrhée sévère), de douleurs pendant les rapports, de troubles digestifs ou urinaires cycliques, ou de difficultés à concevoir. L'endométriose est une maladie qui nécessite un diagnostic médical (échographie, IRM, cœlioscopie) et un suivi spécialisé. Les remèdes prophétiques sont un soutien complémentaire, jamais un substitut au parcours de soins.",
  },
];

export default function RemedeArabeEndometriose() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-endometriose/#article",
        headline:
          "Remède arabe endométriose : nigelle, hijama et soins prophétiques",
        description:
          "Découvrez les remèdes arabes et prophétiques pour accompagner l'endométriose : nigelle, miel, hijama, huile d'olive, invocations et alimentation anti-inflammatoire selon la Sunna.",
        image:
          "https://www.islamreligion.fr/images/mains-priere-doua-islam-invocation.jpg",
        datePublished: "2025-11-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/remede-arabe-endometriose/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-endometriose/#breadcrumb",
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
            name: "Endométriose",
            item: "https://www.islamreligion.fr/remede-arabe-endometriose",
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
          title="Remède arabe endométriose : nigelle, hijama et soins prophétiques"
          subtitle="Les remèdes naturels issus de la médecine prophétique pour accompagner les femmes atteintes d'endométriose, en complément d'un suivi gynécologique."
          imageSrc="/images/mains-priere-doua-islam-invocation.jpg"
          imageAlt="Mains levées en invocation (doua), prière de guérison en islam"
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
                  Remèdes arabes
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Endométriose</span>
              </nav>

              <MedicalDisclaimer />

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;endométriose touche environ 10 % des femmes en âge de
                  procréer. La médecine prophétique offre des remèdes
                  complémentaires reconnus pour leurs propriétés
                  anti-inflammatoires : nigelle, miel, hijama, huile
                  d&apos;olive. Associés aux invocations de guérison et à une
                  alimentation selon la Sunna, ils accompagnent la patiente
                  dans son parcours de soins. Ces remèdes ne remplacent
                  jamais un suivi gynécologique spécialisé.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Comprendre l'endométriose */}
              {/* ============================================ */}
              <section id="comprendre-endometriose" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comprendre l&apos;endométriose
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;endométriose est une maladie gynécologique chronique
                  dans laquelle un tissu semblable à l&apos;endomètre (la
                  muqueuse qui tapisse l&apos;intérieur de l&apos;utérus) se
                  développe en dehors de la cavité utérine. Ces implants
                  peuvent se localiser sur les ovaires, les trompes, le
                  péritoine, la vessie, les intestins ou d&apos;autres organes
                  pelviens.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Sous l&apos;influence des hormones du cycle menstruel, ce
                  tissu réagit comme l&apos;endomètre normal : il
                  s&apos;épaissit, se décompose et saigne. Mais contrairement
                  aux règles normales, ce sang n&apos;a pas de voie
                  d&apos;évacuation, ce qui provoque des inflammations
                  chroniques, des adhérences et des douleurs souvent
                  intenses.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les symptômes principaux
                </h3>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full border-collapse rounded-xl border border-border text-sm">
                    <thead>
                      <tr className="bg-accent">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Symptôme
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Description
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Fréquence
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Dysménorrhée sévère
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Douleurs menstruelles intenses, souvent invalidantes
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Très fréquent
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Douleurs pelviennes chroniques
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Douleurs permanentes ou récurrentes dans le bas-ventre
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Fréquent
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Dyspareunie
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Douleurs pendant les rapports intimes
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Fréquent
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Troubles digestifs
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Ballonnements, diarrhée, constipation (cycliques)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Courant
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Infertilité
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Difficulté ou impossibilité à concevoir
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          30 à 40 % des cas
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Fatigue chronique
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Épuisement persistant lié à l&apos;inflammation
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Très fréquent
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;endométriose est diagnostiquée en moyenne avec un
                  retard de 7 ans après l&apos;apparition des premiers
                  symptômes. Ce délai s&apos;explique par la banalisation des
                  douleurs menstruelles et la méconnaissance de la maladie.
                  Un diagnostic précoce par un gynécologue spécialisé permet
                  une prise en charge adaptée, notamment pour les femmes
                  souhaitant{" "}
                  <Link href="/remede-arabe-grossesse" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">accompagner une grossesse</Link>{" "}
                  dans les meilleures conditions.
                </p>

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
                        Consultation obligatoire
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-amber-700">
                        L&apos;endométriose est une maladie qui nécessite un
                        suivi médical gynécologique. Les remèdes prophétiques
                        présentés ici sont des compléments naturels, pas des
                        substituts au diagnostic et au traitement médical. En
                        cas de douleurs pelviennes chroniques ou de suspicion
                        d&apos;endométriose, consultez un gynécologue sans
                        tarder.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-nature-coucher-soleil-islam.jpg"
                    alt="Coran ouvert dans la nature, symbole de la recherche de guérison par la médecine prophétique"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              <ArticleCTA
                variant="page-mere"
                title="Retrouvez tous les remèdes prophétiques"
                href="/remede-arabe"
                linkText="Voir la page remèdes arabes"
              />

              {/* ============================================ */}
              {/* SECTION 2 : Remèdes prophétiques */}
              {/* ============================================ */}
              <section
                id="remedes-prophetiques"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les remèdes prophétiques applicables à l&apos;endométriose
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La médecine prophétique (<em>at-tibb an-nabawi</em>) offre
                  plusieurs remèdes dont les propriétés anti-inflammatoires
                  sont aujourd&apos;hui documentées par la recherche
                  scientifique. Voici les principaux remèdes pouvant
                  accompagner les femmes atteintes d&apos;endométriose.
                </p>

                <HadithCard
                  arabic="تَدَاوَوْا عِبَادَ اللَّهِ فَإِنَّ اللَّهَ لَمْ يَضَعْ دَاءً إِلَّا وَضَعَ لَهُ دَوَاءً"
                  text="Soignez-vous, serviteurs de Dieu, car Dieu n'a pas créé de maladie sans avoir créé son remède."
                  source="Hadith rapporté par Abu Dawud et at-Tirmidhi"
                />

                {/* Nigelle */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    La graine de nigelle (<em>habba sawda</em>) : un
                    anti-inflammatoire naturel
                  </h3>

                  <HadithCard
                    arabic="عَلَيْكُمْ بِهَذِهِ الْحَبَّةِ السَّوْدَاءِ فَإِنَّ فِيهَا شِفَاءً مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ"
                    text="Utilisez cette graine noire, car elle contient un remède contre toute maladie, sauf la mort."
                    source="Hadith rapporté par al-Bukhari et Muslim"
                  />

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    La{" "}
                    <Link
                      href="/remede-arabe"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      graine de nigelle
                    </Link>{" "}
                    (<em>Nigella sativa</em>) est le remède prophétique le
                    plus étudié par la recherche moderne. Son principe actif
                    principal, la thymoquinone, possède des propriétés
                    anti-inflammatoires, antioxydantes et
                    immunomodulatrices qui présentent un intérêt
                    particulier dans le contexte de l&apos;endométriose.
                  </p>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Des études précliniques ont montré que la thymoquinone
                    peut inhiber la production de certains médiateurs
                    inflammatoires (prostaglandines, cytokines
                    pro-inflammatoires) impliqués dans la progression de
                    l&apos;endométriose. La nigelle est aussi reconnue pour
                    ses bienfaits sur la santé capillaire et la prévention
                    de{" "}
                    <Link href="/alopecie-remede-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la chute de cheveux</Link>.{" "}
                    Elle contribuerait également à
                    réduire le stress oxydatif, un facteur aggravant de la
                    maladie.
                  </p>

                  <div className="mt-4 rounded-lg bg-accent p-4">
                    <p className="text-sm font-semibold text-primary">
                      Application pratique pour l&apos;endométriose
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-foreground-secondary">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Huile de nigelle : 1 cuillère à café par jour, à jeun
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Graines broyées mélangées à du miel : 1 cuillère à
                        café matin et soir
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        En cataplasme sur le bas-ventre (huile tiède) pour
                        apaiser les douleurs
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Miel */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le miel : guérison mentionnée dans le Coran
                  </h3>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Le Coran mentionne le miel comme porteur de guérison :
                    &laquo;&nbsp;De leur ventre sort une boisson aux couleurs
                    variées, dans laquelle il y a une guérison pour les
                    gens&nbsp;&raquo; (sourate An-Nahl, verset 69). Le miel
                    brut contient des enzymes, des flavonoïdes et des
                    composés phénoliques aux propriétés anti-inflammatoires
                    et antioxydantes.
                  </p>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Dans le contexte de l&apos;endométriose, le miel peut
                    contribuer à moduler la réponse inflammatoire et à
                    soutenir le système immunitaire. Les variétés les plus
                    riches en composés actifs sont le miel de jujubier
                    (<em>sidr</em>), le miel de manuka et le miel de thym.
                  </p>

                  <div className="mt-4 rounded-lg bg-accent p-4">
                    <p className="text-sm font-semibold text-primary">
                      Application pratique
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-foreground-secondary">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Une cuillère à soupe de miel pur à jeun, dilué dans
                        de l&apos;eau tiède
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Mélange miel + nigelle : synergie anti-inflammatoire
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Miel + curcuma : potentialise les effets
                        anti-inflammatoires
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Hijama */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    La hijama (ventouses) : soulagement des douleurs pelviennes
                  </h3>

                  <HadithCard
                    arabic="إِنَّ أَمْثَلَ مَا تَدَاوَيْتُمْ بِهِ الْحِجَامَةُ"
                    text="Le meilleur de vos remèdes est la hijama."
                    source="Hadith rapporté par al-Bukhari"
                  />

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    La hijama (<em>cupping therapy</em>) est une technique de
                    ventouses humides recommandée par le Prophète Muhammad
                    (paix et salut sur lui). Elle vise à stimuler la
                    circulation sanguine, à réduire les tensions musculaires
                    et à favoriser l&apos;élimination des toxines. Pour les
                    femmes souffrant d&apos;endométriose, la hijama peut
                    aider à soulager les douleurs pelviennes et lombaires.
                  </p>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Les points de ventouses les plus pertinents pour les
                    douleurs gynécologiques se situent dans la zone lombaire
                    basse, sur le bas-ventre et sur certains points
                    d&apos;acupuncture traditionnels. La séance doit
                    impérativement être réalisée par un praticien formé et
                    expérimenté, avec du matériel stérile à usage unique.
                  </p>

                  <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
                    <p className="text-sm font-semibold text-amber-800">
                      Précautions importantes
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-amber-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        Ne pas pratiquer la hijama pendant les règles
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        Contre-indiquée en cas de troubles de la coagulation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        Toujours informer le praticien de son diagnostic
                        d&apos;endométriose
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        Ne jamais remplacer un traitement médical par la hijama
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Huile d'olive */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    L&apos;huile d&apos;olive : un arbre béni aux vertus
                    anti-inflammatoires
                  </h3>

                  <HadithCard
                    arabic="كُلُوا الزَّيْتَ وَادَّهِنُوا بِهِ فَإِنَّهُ مِنْ شَجَرَةٍ مُبَارَكَةٍ"
                    text="Mangez de l'huile d'olive et enduisez-vous-en, car elle provient d'un arbre béni."
                    source="Hadith rapporté par at-Tirmidhi et Ibn Majah"
                  />

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    L&apos;huile d&apos;olive extra-vierge contient de
                    l&apos;oléocanthal, un composé dont l&apos;action
                    anti-inflammatoire est comparable à celle de
                    l&apos;ibuprofène selon les recherches. Elle est riche en
                    polyphénols, en acide oléique et en vitamine E, des
                    nutriments qui contribuent à réduire le stress oxydatif
                    et l&apos;inflammation chronique associés à
                    l&apos;endométriose.
                  </p>

                  <div className="mt-4 rounded-lg bg-accent p-4">
                    <p className="text-sm font-semibold text-primary">
                      Utilisation recommandée
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-foreground-secondary">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        2 à 3 cuillères à soupe par jour en assaisonnement (à
                        froid)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        En massage sur le bas-ventre (huile tiède) pour
                        détendre les muscles
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Privilégier l&apos;huile d&apos;olive extra-vierge
                        première pression à froid
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tableau récapitulatif */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Récapitulatif des remèdes prophétiques et leur action
                </h3>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full border-collapse rounded-xl border border-border text-sm">
                    <thead>
                      <tr className="bg-accent">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Remède
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Source prophétique
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Action sur l&apos;endométriose
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Posologie indicative
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Nigelle
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          al-Bukhari, Muslim
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Anti-inflammatoire, antioxydant, immunomodulateur
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          1 c. à café d&apos;huile/jour
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Miel
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Coran (An-Nahl, 69)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Anti-inflammatoire, antibactérien, antioxydant
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          1 c. à soupe à jeun
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Hijama
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          al-Bukhari
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Circulation sanguine, détoxification, douleur
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          1 séance/mois (praticien formé)
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Huile d&apos;olive
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          at-Tirmidhi, Ibn Majah
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Anti-inflammatoire (oléocanthal), antioxydant
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          2 à 3 c. à soupe/jour
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Talbina (orge)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          al-Bukhari
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Apaisement, fibres, soutien digestif
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          1 bol/jour
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Costus marin
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          al-Bukhari
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Anti-inflammatoire, antimicrobien
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          En infusion ou capsule
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Invocations et douas */}
              {/* ============================================ */}
              <section id="invocations-douas" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations et douas pour la guérison
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, la dimension spirituelle est indissociable de la
                  guérison physique. Le Coran est lui-même présenté comme un
                  remède :
                </p>

                <HadithCard
                  text="Nous faisons descendre du Coran ce qui est une guérison et une miséricorde pour les croyants."
                  source="Sourate Al-Isra, verset 82"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les invocations (<em>douas</em>) de guérison enseignées par
                  le Prophète Muhammad (paix et salut sur lui) s&apos;adressent
                  à Dieu, Celui qui détient la guérison. Associées à la{" "}
                  <Link href="/sorcellerie-islam-protection" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">protection spirituelle par la roqya</Link>,{" "}
                  elles apportent
                  apaisement, espoir et force intérieure aux femmes qui
                  vivent avec l&apos;endométriose au quotidien.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les principales douas de guérison
                </h3>

                <div className="mt-4 space-y-4">
                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ وَاشْفِ أَنْتَ
                      الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا
                      يُغَادِرُ سَقَمًا
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Ote le mal, Seigneur des hommes, et guéris.
                      Tu es Celui qui guérit, il n&apos;y a de guérison que Ta
                      guérison, une guérison qui ne laisse aucune
                      maladie.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par al-Bukhari et Muslim.
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      بِسْمِ اللَّهِ أَرْقِيكَ مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ
                      مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ اللَّهُ
                      يَشْفِيكَ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Au nom de Dieu, je te fais la roqya contre
                      tout ce qui te nuit, contre le mal de toute âme ou &oelig;il
                      envieux. Que Dieu te guérisse.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par Muslim.
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      اللَّهُمَّ رَبَّ النَّاسِ مُذْهِبَ الْبَأْسِ اشْفِ
                      أَنْتَ الشَّافِي لَا شَافِيَ إِلَّا أَنْتَ اشْفِ
                      شِفَاءً لَا يُغَادِرُ سَقَمًا
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Seigneur des hommes, Toi qui dissipes le
                      mal, guéris, car Tu es Celui qui guérit. Il n&apos;y a
                      de guérisseur que Toi. Accorde une guérison qui ne
                      laisse aucune maladie.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par al-Bukhari.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Sourates et versets à réciter régulièrement
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  La récitation du{" "}
                  <Link
                    href="/apprendre-le-coran"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    Coran
                  </Link>{" "}
                  est un acte de guérison en soi. Voici les sourates et
                  versets les plus recommandés dans le cadre de la roqya
                  légitime :
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sourate Al-Fatiha</strong> : la mère du Coran,
                      récitée pour toute forme de guérison
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ayat al-Kursi</strong> (al-Baqara, 255) :
                      protection et guérison
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les deux derniers versets de sourate
                      al-Baqara</strong> : protection complète
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les trois protectrices</strong> : sourates
                      Al-Ikhlas, Al-Falaq et An-Nas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sourate Ash-Sharh</strong> (94) : apaisement du
                      c&oelig;ur et soulagement de la difficulté
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  La roqya peut être pratiquée par la personne malade
                  elle-même, en posant la main sur la zone douloureuse et
                  en récitant les versets mentionnés. Découvrez aussi{" "}
                  <Link href="/invocations-reussite-facilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les invocations prophétiques</Link>{" "}
                  pour demander la facilité dans l&apos;épreuve. L&apos;eau sur
                  laquelle on a récité le Coran (<em>eau coranisée</em>)
                  peut également être bue ou utilisée en compresse sur le
                  bas-ventre.
                </p>
              </section>

              <ArticleCTA
                variant="lire-aussi"
                title="La guérison spirituelle en islam : roqya, invocations et remèdes"
                description="Retrouvez les détails complets sur la roqya légitime et les invocations de protection."
                href="/remede-arabe"
              />

              {/* ============================================ */}
              {/* SECTION 4 : Alimentation selon la Sunna */}
              {/* ============================================ */}
              <section id="alimentation-sunna" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Alimentation anti-inflammatoire selon la Sunna
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;alimentation joue un rôle majeur dans la gestion de
                  l&apos;inflammation chronique liée à l&apos;endométriose.
                  La Sunna offre un modèle alimentaire naturellement
                  anti-inflammatoire, riche en aliments complets et en
                  nutriments protecteurs.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les aliments prophétiques anti-inflammatoires
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Les dattes (<em>tamr</em>)
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Riches en fibres, potassium et magnésium. Le Prophète
                      (paix et salut sur lui) recommandait de consommer sept
                      dattes ajwa le matin. Les dattes contiennent des
                      composés phénoliques aux propriétés antioxydantes qui
                      aident à combattre le stress oxydatif.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      La talbina (bouillie d&apos;orge)
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) la recommandait
                      pour le malade : elle &laquo;&nbsp;réconforte le c&oelig;ur du
                      malade et emporte une partie de son chagrin&nbsp;&raquo;
                      (al-Bukhari). L&apos;orge est riche en bêta-glucanes
                      qui modulent la réponse immunitaire et réduisent
                      l&apos;inflammation.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Les figues et l&apos;olive
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Mentionnées ensemble dans le Coran (sourate At-Tin).
                      Les figues sont riches en fibres et en minéraux.
                      L&apos;olive et son huile apportent des acides gras
                      mono-insaturés et des polyphénols anti-inflammatoires.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Le vinaigre (<em>khall</em>)
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Le meilleur des condiments est le
                      vinaigre&nbsp;&raquo; (Muslim). Le vinaigre de cidre
                      contient de l&apos;acide acétique qui favorise la
                      digestion et aide à réguler la glycémie.
                    </p>
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Aliments à privilégier et à limiter
                </h3>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                    <p className="font-semibold text-green-800">
                      À privilégier
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-green-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-green-500">&#10003;</span>
                        Huile d&apos;olive extra-vierge (quotidien)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-green-500">&#10003;</span>
                        Nigelle en graines ou en huile
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-green-500">&#10003;</span>
                        Miel brut (sidr, manuka, thym)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-green-500">&#10003;</span>
                        Légumes verts, légumineuses, fruits frais
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-green-500">&#10003;</span>
                        Poissons gras (oméga-3 : saumon, sardines)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-green-500">&#10003;</span>
                        Curcuma, gingembre, cannelle
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-green-500">&#10003;</span>
                        Dattes, figues, talbina (orge)
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                    <p className="font-semibold text-red-800">À limiter</p>
                    <ul className="mt-3 space-y-2 text-sm text-red-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-red-500">&#10007;</span>
                        Viande rouge en excès (pro-inflammatoire)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-red-500">&#10007;</span>
                        Sucres raffinés et pâtisseries industrielles
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-red-500">&#10007;</span>
                        Produits laitiers en grande quantité
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-red-500">&#10007;</span>
                        Gluten (pour certaines patientes sensibles)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-red-500">&#10007;</span>
                        Caféine excessive
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-red-500">&#10007;</span>
                        Aliments ultra-transformés
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-red-500">&#10007;</span>
                        Huiles végétales raffinées (tournesol, soja)
                      </li>
                    </ul>
                  </div>
                </div>

                <HadithCard
                  text="Le fils d'Adam ne remplit pas de récipient pire que son estomac. Il suffit au fils d'Adam de quelques bouchées pour se maintenir. S'il ne peut s'en contenter, qu'il réserve un tiers pour la nourriture, un tiers pour la boisson et un tiers pour l'air."
                  source="Hadith rapporté par at-Tirmidhi et Ibn Majah"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette règle prophétique de modération alimentaire est
                  particulièrement pertinente pour les femmes atteintes
                  d&apos;endométriose. Les excès alimentaires aggravent
                  l&apos;inflammation et les troubles digestifs souvent
                  associés à la maladie. Pour celles qui souhaitent
                  retrouver un poids de forme, notre guide sur{" "}
                  <Link href="/remede-arabe-maigrir-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">l&apos;alimentation équilibrée en islam</Link>{" "}
                  détaille les principes de la Sunna appliqués à la nutrition. Une alimentation mesurée,
                  diversifiée et riche en nutriments anti-inflammatoires
                  contribue au bien-être global.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg"
                    alt="Dattes, chapelet et Coran, symboles des aliments prophétiques bénéfiques pour la santé"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Soutien émotionnel et spirituel */}
              {/* ============================================ */}
              <section id="soutien-spirituel" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Soutien émotionnel et spirituel face à l&apos;endométriose
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;endométriose n&apos;affecte pas seulement le corps.
                  Les douleurs chroniques, la fatigue, les difficultés de
                  fertilité et l&apos;incompréhension de l&apos;entourage
                  peuvent peser lourdement sur le moral. Apprendre à{" "}
                  <Link href="/remede-angoisse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">gérer l&apos;angoisse liée à la maladie</Link>{" "}
                  grâce aux enseignements prophétiques est essentiel. L&apos;islam offre
                  un cadre spirituel qui aide à traverser cette épreuve avec
                  patience et espérance.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La patience (sabr) face à l&apos;épreuve
                </h3>

                <HadithCard
                  text="Nul malheur n'atteint le musulman, que ce soit une fatigue, une maladie, un souci, une tristesse, un dommage ou un chagrin, pas même une épine qui le pique, sans que Dieu ne lui efface par cela certains de ses péchés."
                  source="Hadith rapporté par al-Bukhari et Muslim"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith rappelle que la maladie, en islam, n&apos;est
                  jamais vaine. Chaque douleur, chaque moment de fatigue,
                  chaque nuit difficile est une occasion de purification et
                  d&apos;élévation spirituelle. La patience (sabr) face à la
                  maladie est l&apos;une des vertus les plus récompensées
                  auprès de Dieu.
                </p>

                <HadithCard
                  text="Que l'affaire du croyant est étonnante ! Tout ce qui lui arrive est un bien. Si un bonheur l'atteint, il remercie Dieu, et c'est un bien pour lui. Si un malheur le frappe, il patiente, et c'est un bien pour lui."
                  source="Hadith rapporté par Muslim"
                />

                {/* Profils lecteurs */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  L&apos;endométriose selon votre situation
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Chaque femme vit l&apos;endométriose différemment. Voici
                  des conseils adaptés selon votre profil :
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {/* Profil 1 */}
                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold text-primary">
                      Jeune femme récemment diagnostiquée
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ne restez pas seule face au diagnostic. Suivez les
                      recommandations de votre gynécologue et intégrez
                      progressivement les remèdes prophétiques en
                      complément. La nigelle (1 cuillère à café d&apos;huile
                      par jour) et le miel à jeun sont un bon point de
                      départ. Les douas de guérison apportent un soutien
                      moral précieux dans cette période de questionnement.
                    </p>
                  </div>

                  {/* Profil 2 */}
                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold text-primary">
                      Femme en parcours de fertilité
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;endométriose peut compliquer la conception,
                      mais de nombreuses femmes atteintes deviennent mères.
                      Continuez votre suivi médical (PMA si nécessaire) et
                      renforcez vos invocations. La doua d&apos;Ibrahim et
                      de Zakariya (paix sur eux) pour demander une
                      descendance est particulièrement adaptée. La talbina,
                      le miel et la nigelle soutiennent la santé hormonale.
                    </p>
                  </div>

                  {/* Profil 3 */}
                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold text-primary">
                      Femme vivant avec des douleurs chroniques
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les douleurs quotidiennes sont une épreuve que Dieu
                      récompense. En plus de votre traitement antalgique,
                      essayez la hijama mensuelle (praticien formé),
                      l&apos;huile de nigelle en cataplasme tiède sur le
                      bas-ventre, et le massage à l&apos;huile d&apos;olive.
                      L&apos;alimentation anti-inflammatoire réduit
                      significativement la charge inflammatoire.
                    </p>
                  </div>

                  {/* Profil 4 */}
                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold text-primary">
                      Proche ou conjoint d&apos;une femme atteinte
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Votre soutien est précieux. Accompagnez-la dans ses
                      rendez-vous médicaux, préparez-lui de la talbina et
                      du miel, récitez les douas de guérison pour elle.
                      Le Prophète (paix et salut sur lui) passait la main
                      sur le front du malade en récitant l&apos;invocation
                      de guérison. La patience et la compréhension sont
                      des actes d&apos;adoration auprès de Dieu.
                    </p>
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Témoignages et cas pratiques
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  De nombreuses femmes musulmanes ont partagé leur
                  expérience de l&apos;endométriose accompagnée par la
                  médecine prophétique. Voici des retours d&apos;expérience
                  fréquemment rapportés :
                </p>

                <div className="mt-4 space-y-4">
                  <div className="rounded-xl border-l-4 border-secondary/50 bg-white p-5 shadow-sm">
                    <p className="text-sm leading-relaxed text-foreground-secondary italic">
                      &laquo;&nbsp;Après avoir intégré l&apos;huile de nigelle
                      et le miel de sidr à mon quotidien, en plus de mon
                      traitement hormonal, j&apos;ai ressenti une nette
                      amélioration de ma fatigue et de mes douleurs. Les
                      douas de guérison m&apos;apportent un réconfort que je
                      ne trouve nulle part ailleurs.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-xs font-medium text-foreground-secondary">
                      Retour d&apos;expérience courant parmi les patientes
                    </p>
                  </div>

                  <div className="rounded-xl border-l-4 border-secondary/50 bg-white p-5 shadow-sm">
                    <p className="text-sm leading-relaxed text-foreground-secondary italic">
                      &laquo;&nbsp;La hijama m&apos;a aidée à mieux gérer mes
                      douleurs pelviennes. Je la pratique une fois par mois
                      avec un praticien de confiance, toujours en parallèle
                      de mon suivi chez le gynécologue. La combinaison des
                      deux approches m&apos;a permis de retrouver une
                      meilleure qualité de vie.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-xs font-medium text-foreground-secondary">
                      Retour d&apos;expérience courant parmi les patientes
                    </p>
                  </div>

                  <div className="rounded-xl border-l-4 border-secondary/50 bg-white p-5 shadow-sm">
                    <p className="text-sm leading-relaxed text-foreground-secondary italic">
                      &laquo;&nbsp;Changer mon alimentation en suivant les
                      principes de la Sunna (huile d&apos;olive, dattes,
                      talbina, modération) a considérablement réduit mes
                      ballonnements et mes troubles digestifs liés à
                      l&apos;endométriose. Le Prophète avait raison sur la
                      règle des trois tiers.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-xs font-medium text-foreground-secondary">
                      Retour d&apos;expérience courant parmi les patientes
                    </p>
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Quand consulter un médecin : les signaux d&apos;alerte
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Les remèdes prophétiques ne remplacent jamais un suivi
                  médical gynécologique. Vous devez consulter un médecin
                  sans tarder dans les situations suivantes :
                </p>

                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-5">
                  <ul className="space-y-2 text-sm text-red-800">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">&#9888;</span>
                      Douleurs pelviennes intenses ne répondant pas aux
                      antalgiques habituels
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">&#9888;</span>
                      Saignements anormaux en dehors des règles
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">&#9888;</span>
                      Fièvre associée à des douleurs pelviennes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">&#9888;</span>
                      Difficultés à concevoir après un an de tentatives
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">&#9888;</span>
                      Troubles urinaires ou digestifs cycliques (sang dans
                      les selles ou les urines pendant les règles)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">&#9888;</span>
                      Aggravation soudaine des symptômes malgré le traitement
                    </li>
                  </ul>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam encourage la prise en charge médicale. Le
                  Prophète Muhammad (paix et salut sur lui) a dit :
                  &laquo;&nbsp;Soignez-vous, serviteurs de Dieu, car Dieu
                  n&apos;a pas créé de maladie sans avoir créé son
                  remède&nbsp;&raquo;. Se soigner par les moyens médicaux
                  modernes fait partie des causes (<em>asbab</em>) que le
                  croyant est tenu de prendre, tout en plaçant sa confiance
                  en Dieu (<em>tawakkul</em>).
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/calligraphie-allah-islam-coeur-bois.jpg"
                    alt="Calligraphie du nom d'Allah, symbole de la confiance en Dieu face à l'épreuve de la maladie"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              <ArticleCTA
                variant="lire-aussi"
                title="Remèdes arabes : les soins naturels issus de la Sunna"
                description="Nigelle, miel, hijama, huile d'olive et tous les remèdes prophétiques détaillés."
                href="/remede-arabe"
              />

              <MedicalDisclaimer />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Maîtrisez les invocations de guérison prophétiques"
                description="Les remèdes arabes s'accompagnent de douas et d'invocations en arabe. Apprenez à les réciter correctement grâce à une formation adaptée."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le même sujet
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes arabes et médecine prophétique
                  </Link>
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
                    Réciter le Coran
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Interprétation des rêves
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
