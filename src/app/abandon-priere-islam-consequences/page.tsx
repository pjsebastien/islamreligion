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
    "Abandonner la prière en islam : jugement et conséquences",
  description:
    "Que dit l'islam sur l'abandon de la prière ? Découvrez le jugement des quatre écoles, les conséquences spirituelles et le chemin du retour vers Allah.",
  alternates: {
    canonical: "https://www.islamreligion.fr/abandon-priere-islam-consequences",
  },
};

const tocItems = [
  { id: "place-priere", label: "La place de la prière parmi les obligations" },
  { id: "jugement", label: "Le jugement de celui qui abandonne la prière" },
  { id: "consequences-spirituelles", label: "Conséquences spirituelles et psychologiques" },
  { id: "consequences-sociales", label: "Conséquences sociales et juridiques" },
  { id: "retour-priere", label: "Le retour à la prière et la miséricorde divine" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Abandonner la prière est-il un péché majeur en islam ?",
    answer:
      "Oui, l\u2019abandon de la prière est considéré comme l\u2019un des péchés les plus graves en islam. Les quatre écoles juridiques s\u2019accordent sur la gravité de cet acte. Le Prophète (paix et salut sur lui) a dit : \u00ab Ce qui distingue le musulman du mécréant, c\u2019est l\u2019abandon de la prière \u00bb (rapporté par Muslim). Toutefois, la porte du repentir reste toujours ouverte pour celui qui souhaite revenir sincèrement vers Allah.",
  },
  {
    question: "Celui qui ne prie pas est-il encore musulman ?",
    answer:
      "Les savants divergent sur cette question. L\u2019école hanbalite considère que celui qui abandonne la prière par négligence sort de l\u2019islam. Les écoles malékite, chaféite et hanafite estiment qu\u2019il commet un péché majeur sans pour autant quitter l\u2019islam, à condition qu\u2019il ne nie pas l\u2019obligation de la prière. Celui qui nie l\u2019obligation de la prière sort de l\u2019islam par consensus des savants.",
  },
  {
    question: "Quelles sont les conséquences de ne pas prier en islam ?",
    answer:
      "Les conséquences sont multiples : éloignement spirituel d\u2019Allah, perte de la barakah dans la vie quotidienne, anxiété et mal-être psychologique, détérioration des liens familiaux et sociaux. Sur le plan juridique, certains savants estiment que cela affecte la validité du mariage, les rites funéraires et les droits successoraux.",
  },
  {
    question: "Peut-on rattraper les prières manquées en islam ?",
    answer:
      "La majorité des savants (hanafites, malékites et chaféites) recommandent de rattraper les prières manquées en les accomplissant dès que possible, même si elles sont nombreuses. Il est conseillé d\u2019ajouter une prière de rattrapage à chaque prière obligatoire du jour. L\u2019école hanbalite insiste davantage sur le repentir sincère et le retour immédiat à la prière régulière.",
  },
  {
    question: "Comment revenir à la prière après une longue absence ?",
    answer:
      "Le retour à la prière passe par plusieurs étapes : un repentir sincère (tawbah) avec la ferme intention de ne plus abandonner la prière, la reprise progressive en commençant par les cinq prières quotidiennes, la multiplication des invocations et du dhikr pour renforcer le lien avec Allah, et la recherche de compagnie pieuse pour se soutenir mutuellement.",
  },
  {
    question: "Le mariage avec quelqu\u2019un qui ne prie pas est-il valide ?",
    answer:
      "Les avis divergent selon les écoles. L\u2019école hanbalite considère le mariage avec une personne qui ne prie pas comme invalide, car elle la considère hors de l\u2019islam. Les autres écoles estiment que le mariage reste valide mais fortement déconseillé, car l\u2019absence de prière affaiblit les fondements spirituels du foyer. Il est recommandé d\u2019encourager son conjoint à revenir à la prière avec douceur et patience.",
  },
  {
    question: "Quelle est la position des quatre écoles sur l\u2019abandon de la prière ?",
    answer:
      "L\u2019école hanafite considère l\u2019abandon de la prière comme un péché majeur sanctionné par l\u2019emprisonnement jusqu\u2019au repentir. L\u2019école malékite y voit un péché majeur méritant une sanction sévère, avec possibilité de repentir. L\u2019école chaféite le classe comme péché majeur passible d\u2019une sanction si la personne persiste. L\u2019école hanbalite considère que celui qui abandonne la prière par négligence sort de l\u2019islam et est privé des rites funéraires musulmans.",
  },
  {
    question: "La miséricorde divine couvre-t-elle celui qui a abandonné la prière ?",
    answer:
      "Oui, la miséricorde d\u2019Allah est immense et couvre tout péché pour celui qui se repent sincèrement. Allah dit dans le Coran : \u00ab Dis : Ô Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d\u2019Allah. Car Allah pardonne tous les péchés. Oui, c\u2019est Lui le Pardonneur, le Très Miséricordieux \u00bb (sourate Az-Zumar, 39:53). Le retour à la prière avec sincérité est toujours accepté.",
  },
];

export default function AbandonPriere() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/abandon-priere-islam-consequences/#article",
        headline:
          "Abandonner la prière en islam : jugement et conséquences",
        description:
          "Que dit l'islam sur l'abandon de la prière ? Jugement des quatre écoles, conséquences spirituelles et chemin du retour vers Allah.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Abandoner-la-priere-en-islam-jugement-et-consequences-1.jpg",
        datePublished: "2025-08-23",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/abandon-priere-islam-consequences/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/abandon-priere-islam-consequences/#breadcrumb",
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
            name: "Abandonner la prière",
            item: "https://www.islamreligion.fr/abandon-priere-islam-consequences",
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
          title="Abandonner la prière en islam : jugement et conséquences"
          subtitle="Le statut de la prière selon les quatre écoles juridiques, ses conséquences et le chemin de la miséricorde divine."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Abandoner-la-priere-en-islam-jugement-et-consequences-1.jpg"
          imageAlt="Abandonner la prière en islam, jugement et conséquences"
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
                <span className="text-foreground">Abandonner la prière en islam</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La prière (salat) est le deuxième pilier de l&apos;islam et la
                  première obligation après l&apos;attestation de foi. Son abandon
                  est considéré par les savants comme l&apos;un des péchés les plus
                  graves, aux conséquences spirituelles, psychologiques et sociales
                  profondes. Pourtant, la miséricorde d&apos;Allah reste toujours
                  accessible à celui qui revient sincèrement vers Lui.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La place de la prière */}
              {/* ============================================ */}
              <section id="place-priere" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La place de la prière parmi les obligations islamiques
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Après la shahada (attestation de foi), la prière occupe la
                  première place parmi les actes d&apos;adoration en islam. Allah
                  l&apos;a prescrite comme un lien direct entre le serviteur et
                  son Seigneur, un rendez-vous quotidien répété cinq fois par jour
                  pour ancrer la conscience du divin dans chaque instant de la vie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a clairement averti
                  que la prière sera le premier acte sur lequel le serviteur sera
                  interrogé le Jour du Jugement : &laquo; La première chose sur
                  laquelle le serviteur sera jugé le Jour de la Résurrection est
                  la prière. Si elle est bonne, le reste de ses actes sera bon.
                  Si elle est corrompue, le reste de ses actes sera
                  corrompu &raquo; (rapporté par At-Tabarani).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran souligne à plusieurs reprises l&apos;importance capitale
                  de la prière. Allah dit : &laquo; Soyez assidus aux prières et
                  surtout la prière médiane, et tenez-vous debout devant
                  Allah, avec humilité &raquo; (sourate Al-Baqarah, 2:238). Ce
                  verset met en lumière la nécessité d&apos;une régularité absolue
                  dans l&apos;accomplissement de la salat.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans un autre passage, Allah décrit la prière comme le rempart
                  contre les actes répréhensibles : &laquo; La prière préserve de
                  la turpitude et du blâmable &raquo; (sourate Al-Ankabut, 29:45).
                  Cette fonction protectrice souligne que la prière n&apos;est pas
                  un simple rituel, mais un véritable bouclier spirituel qui
                  préserve le croyant des déviations. Même en déplacement, le croyant
                  est tenu de maintenir{" "}
                  <Link href="/priere-voyageur-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les règles de la prière du voyageur</Link>{" "}
                  pour ne pas rompre ce lien essentiel.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Deuxième pilier de l&apos;islam :</strong> la prière
                      vient immédiatement après la shahada dans l&apos;ordre des
                      obligations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cinq prières quotidiennes :</strong> Fajr, Dhuhr,
                      Asr, Maghrib et Isha structurent la journée du croyant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Premier acte jugé :</strong> la prière est le
                      premier élément examiné lors du Jugement dernier.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Bouclier spirituel :</strong> elle protège le
                      croyant de la turpitude et du blâmable (Coran, 29:45).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Lien direct avec Allah :</strong> la prosternation
                      est le moment où le serviteur est le plus proche de son
                      Seigneur (rapporté par Muslim).
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Allah mentionne également dans la sourate Maryam le sort de
                  ceux qui ont délaissé la prière : &laquo; Puis leur succédèrent
                  des générations qui délaissèrent la prière et suivirent leurs
                  passions. Ils se trouveront bientôt confrontés à leur
                  égarement &raquo; (sourate Maryam, 19:59). Ce verset lie
                  directement l&apos;abandon de la prière à la chute dans les
                  passions et l&apos;égarement. Les{" "}
                  <Link href="/signes-fin-monde-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">signes de la fin des temps en islam</Link>{" "}
                  comptent d&apos;ailleurs parmi eux la généralisation de
                  l&apos;abandon de la prière.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Abandoner-la-priere-en-islam-jugement-et-consequences-1.jpg"
                    alt="La place de la prière parmi les obligations islamiques"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Le jugement de celui qui abandonne */}
              {/* ============================================ */}
              <section id="jugement" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le jugement de celui qui abandonne la prière
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants musulmans ont longuement débattu du statut de celui
                  qui délaisse la prière. Il convient de distinguer deux cas de
                  figure : celui qui nie l&apos;obligation de la prière et celui
                  qui l&apos;abandonne par paresse ou négligence, tout en
                  reconnaissant son caractère obligatoire.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>Nier l&apos;obligation de la prière :</strong> les
                  quatre écoles juridiques sont unanimes sur ce point. Celui qui
                  nie que la prière est une obligation en islam commet un acte de
                  mécréance (kufr) et sort de l&apos;islam, car il rejette un
                  élément connu et établi de la religion par nécessité (ma&apos;lum
                  min ad-din bid-darurah).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>Abandonner la prière par négligence :</strong> c&apos;est
                  sur ce second cas que les avis divergent entre les écoles. Chaque
                  école apporte une lecture nuancée, reflétant la richesse de la
                  jurisprudence islamique et la volonté de concilier fermeté
                  doctrinale et miséricorde envers le pécheur. Pour{" "}
                  <Link href="/conditions-maghfira-pardon" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">obtenir le pardon divin (maghfira)</Link>,
                  la sincérité du retour vers Allah demeure la condition première.
                </p>

                {/* Tableau des positions des écoles */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          École juridique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Position sur l&apos;abandon par négligence
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conséquence retenue
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hanafite
                        </td>
                        <td className="py-3 pr-4">
                          Péché majeur, la personne reste musulmane
                        </td>
                        <td className="py-3">
                          Emprisonnement jusqu&apos;au repentir, accompagnement progressif
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Malékite
                        </td>
                        <td className="py-3 pr-4">
                          Péché grave, ne constitue pas une apostasie
                        </td>
                        <td className="py-3">
                          Sanction sévère, possibilité de repentir acceptée
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chaféite
                        </td>
                        <td className="py-3 pr-4">
                          Péché grave, la personne reste musulmane pécheresse
                        </td>
                        <td className="py-3">
                          Sanction si persistance, repentir toujours possible
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hanbalite
                        </td>
                        <td className="py-3 pr-4">
                          Sortie de l&apos;islam si abandon volontaire persistant
                        </td>
                        <td className="py-3">
                          Privation des rites funéraires musulmans, repentir possible
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le hadith rapporté par Muslim, où le Prophète (paix et salut
                  sur lui) déclare : &laquo; Entre le serviteur et la mécréance ou
                  le polythéisme, il y a l&apos;abandon de la prière &raquo;,
                  constitue l&apos;argument principal de l&apos;école hanbalite.
                  Les autres écoles interprètent ce hadith comme une mise en garde
                  sévère, sans en déduire une sortie effective de l&apos;islam pour
                  celui qui reconnaît l&apos;obligation tout en étant négligent.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;imam Ahmad ibn Hanbal (qu&apos;Allah lui fasse
                  miséricorde) rapporte également le hadith : &laquo; Le pacte
                  entre nous et eux est la prière. Celui qui l&apos;abandonne a
                  certes commis un acte de mécréance &raquo; (rapporté par
                  At-Tirmidhi et An-Nassaï). Cette position, bien que stricte,
                  vise à rappeler l&apos;importance suprême de la prière et non
                  à désespérer les pécheurs.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Consensus sur la négation :</strong> nier
                      l&apos;obligation de la prière fait sortir de l&apos;islam
                      selon toutes les écoles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Divergence sur la négligence :</strong> seule
                      l&apos;école hanbalite considère l&apos;abandon par paresse
                      comme une sortie de l&apos;islam.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Objectif commun :</strong> toutes les écoles
                      s&apos;accordent sur la nécessité d&apos;un retour rapide
                      à la prière.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Porte du repentir :</strong> même dans la position
                      la plus stricte, le repentir sincère et le retour à la
                      prière sont toujours acceptés.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Abandoner-la-priere-en-islam-jugement-et-consequences-1.jpg"
                    alt="Le jugement de celui qui abandonne la prière selon les quatre écoles"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Conséquences spirituelles et psychologiques */}
              {/* ============================================ */}
              <section id="consequences-spirituelles" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les conséquences spirituelles et psychologiques de
                  l&apos;abandon de la prière
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;abandon de la prière ne se limite pas à un acte
                  juridique : ses répercussions se font sentir dans toutes les
                  dimensions de la vie du croyant. Le lien avec Allah s&apos;affaiblit
                  progressivement, laissant place à un vide intérieur que rien
                  d&apos;autre ne peut combler.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Sur le plan spirituel, celui qui délaisse la prière ressent un
                  éloignement grandissant vis-à-vis de son Créateur. Le cœur
                  s&apos;assombrit, la poitrine se resserre, et les actes
                  d&apos;adoration deviennent de plus en plus difficiles à
                  accomplir. Des{" "}
                  <Link href="/remede-angoisse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">remèdes contre l&apos;angoisse en islam</Link>{" "}
                  existent, mais la prière en reste le fondement indispensable. Le Coran décrit cet état dans la sourate
                  Al-Muddaththir : &laquo; Qu&apos;est-ce qui vous a conduits en
                  Enfer ? Ils dirent : Nous n&apos;étions pas de ceux qui
                  priaient &raquo; (sourate Al-Muddaththir, 74:42-43).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les recherches contemporaines en psychologie confirment ce que
                  la tradition islamique enseigne depuis des siècles : la prière
                  régulière contribue à réduire le stress, à structurer les
                  journées et à offrir des moments de pause et de recueillement
                  qui apaisent l&apos;esprit. Son absence crée un déséquilibre
                  perceptible dans la vie quotidienne.
                </p>

                {/* Tableau conséquences */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Dimension
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Effet de l&apos;abandon
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Bienfait du retour à la prière
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Lien avec Allah
                        </td>
                        <td className="py-3 pr-4">
                          Éloignement spirituel, sentiment d&apos;abandon
                        </td>
                        <td className="py-3">
                          Proximité retrouvée, sérénité intérieure
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          État psychologique
                        </td>
                        <td className="py-3 pr-4">
                          Anxiété, angoisse, sentiment de vide
                        </td>
                        <td className="py-3">
                          Apaisement, structure quotidienne, stabilité émotionnelle
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Lumière du visage
                        </td>
                        <td className="py-3 pr-4">
                          Visage assombri, perte de rayonnement
                        </td>
                        <td className="py-3">
                          Visage éclairé par la prosternation et le dhikr
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Protection contre les péchés
                        </td>
                        <td className="py-3 pr-4">
                          Vulnérabilité accrue aux tentations
                        </td>
                        <td className="py-3">
                          Bouclier contre la turpitude (Coran, 29:45)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Barakah quotidienne
                        </td>
                        <td className="py-3 pr-4">
                          Perte de bénédiction dans les affaires et la subsistance
                        </td>
                        <td className="py-3">
                          Retour de la bénédiction et de l&apos;aisance
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Relations sociales
                        </td>
                        <td className="py-3 pr-4">
                          Isolement, irritabilité, tensions familiales
                        </td>
                        <td className="py-3">
                          Patience, compassion et harmonie retrouvées
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;assombrissement du cœur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné que les
                        péchés créent des taches noires sur le cœur. L&apos;abandon
                        de la prière, en tant que péché majeur, accélère cet
                        assombrissement et rend le retour vers Allah plus difficile
                        avec le temps, sans jamais le rendre impossible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;anxiété et le mal-être
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Sans les cinq rendez-vous quotidiens avec Allah, le
                        croyant perd un ancrage spirituel qui structurait ses
                        journées. Cette absence de rythme sacré peut générer de
                        l&apos;anxiété, un sentiment de déracinement et une
                        difficulté à trouver du sens dans les épreuves.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;isolement progressif
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Celui qui ne prie plus s&apos;éloigne naturellement de la
                        communauté. La prière en congrégation, les liens tissés à
                        la mosquée, le soutien mutuel entre frères et sœurs
                        s&apos;estompent. Cet isolement renforce le cercle vicieux
                        de l&apos;éloignement spirituel.
                      </p>
                    </div>
                  </div>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Prier en islam : les conditions de l'excellence spirituelle"
                  description="Découvrez les fondements de la prière en islam et comment atteindre le khushu dans votre salat."
                  href="/prier-islam-excellence-spirituelle"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Conséquences sociales et juridiques */}
              {/* ============================================ */}
              <section id="consequences-sociales" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les conséquences sociales et juridiques de l&apos;abandon de
                  la prière
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà de la sphère individuelle, l&apos;abandon de la prière
                  produit des effets concrets sur les relations sociales et le
                  statut juridique du musulman. Les savants ont abordé ces questions
                  avec soin, en s&apos;appuyant sur le Coran et la Sunna pour
                  définir les implications pratiques de cet abandon.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Validité du mariage :</strong> l&apos;école
                      hanbalite considère le mariage avec une personne qui ne prie
                      pas comme invalide. Les autres écoles le jugent valide mais
                      fortement déconseillé, car la prière constitue le fondement
                      de la vie spirituelle du couple.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rites funéraires :</strong> selon la position
                      hanbalite, celui qui meurt en ayant abandonné la prière
                      volontairement ne bénéficie pas de la prière mortuaire
                      musulmane et n&apos;est pas enterré dans un cimetière
                      musulman. Les autres écoles maintiennent les rites funéraires
                      tout en considérant l&apos;acte comme un péché majeur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Héritage et succession :</strong> dans la position
                      hanbalite, l&apos;abandon de la prière étant assimilé à
                      l&apos;apostasie, la personne perd ses droits
                      d&apos;héritage au sein de la famille musulmane. Les autres
                      écoles ne retirent pas ces droits.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Viande sacrifiée :</strong> certains savants
                      estiment que la viande sacrifiée par une personne qui ne prie
                      pas n&apos;est pas licite à la consommation, car les
                      conditions de la dhabiha (sacrifice rituel) exigent que
                      l&apos;animal soit abattu par un musulman pratiquant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Impact sur la famille :</strong> l&apos;absence de
                      prière dans un foyer affecte l&apos;éducation religieuse des
                      enfants, l&apos;harmonie conjugale et l&apos;atmosphère
                      générale du foyer. Les enfants prennent modèle sur leurs
                      parents, et un parent qui ne prie pas transmet
                      involontairement un message de négligence spirituelle.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il convient de rappeler que ces conséquences juridiques
                  s&apos;inscrivent dans un cadre visant à protéger la communauté
                  et à encourager le retour à la prière. Elles ne doivent jamais
                  servir à humilier ou à rejeter une personne en difficulté. Le
                  Prophète (paix et salut sur lui) a toujours privilégié la
                  douceur et l&apos;accompagnement pour ramener les gens vers
                  la pratique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;imam Abû Hanîfa (qu&apos;Allah lui fasse miséricorde)
                  préconisait un accompagnement progressif : commencer par le
                  rappel bienveillant, puis l&apos;exhortation, avant toute
                  mesure contraignante. Cette approche reflète la sagesse
                  prophétique qui place la miséricorde avant la sévérité.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a lui-même adopté une
                  démarche progressive avec les bédouins et les nouveaux
                  musulmans, leur enseignant la prière avec patience et
                  bienveillance. Lorsqu&apos;un bédouin urina dans la mosquée,
                  le Prophète interdit aux compagnons de le brusquer et lui
                  expliqua avec douceur la sacralité du lieu. Cette attitude
                  illustre la manière dont le retour à la prière doit être
                  encouragé : par la compassion, jamais par la violence.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Abandoner-la-priere-en-islam-jugement-et-consequences-1.jpg"
                    alt="Conséquences sociales et juridiques de l'abandon de la prière en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Le retour à la prière */}
              {/* ============================================ */}
              <section id="retour-priere" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le retour à la prière et la miséricorde divine
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Quelle que soit la durée de l&apos;absence, la porte du
                  repentir reste grande ouverte. Allah dit dans le Coran :
                  &laquo; Dis : Ô Mes serviteurs qui avez commis des excès à
                  votre propre détriment, ne désespérez pas de la miséricorde
                  d&apos;Allah. Car Allah pardonne tous les péchés. Oui,
                  c&apos;est Lui le Pardonneur, le Très
                  Miséricordieux &raquo; (sourate Az-Zumar, 39:53).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit : &laquo; Allah
                  étend Sa main la nuit pour accepter le repentir de celui qui a
                  péché le jour, et Il étend Sa main le jour pour accepter le
                  repentir de celui qui a péché la nuit, jusqu&apos;à ce que le
                  soleil se lève de l&apos;ouest &raquo; (rapporté par Muslim).
                  Ce hadith illustre l&apos;immensité de la miséricorde divine et
                  son accessibilité permanente.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah aime celui qui revient vers Lui. Le Prophète (paix et
                  salut sur lui) a enseigné que &laquo; Allah est plus joyeux du
                  repentir de Son serviteur que l&apos;un d&apos;entre vous qui
                  retrouve sa monture perdue dans le
                  désert &raquo; (rapporté par Al-Bukhari et Muslim). Cette
                  image saisissante montre à quel point le retour vers Allah,
                  même après un long éloignement, est accueilli avec amour.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le repentir sincère (tawbah)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le retour à la prière commence par un{" "}
                        <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">repentir sincère (tawbah)</Link>{" "}
                        comprenant trois conditions : le regret d&apos;avoir
                        abandonné la prière, l&apos;arrêt immédiat de cette
                        négligence et la ferme intention de ne plus y retomber.
                        Ce repentir doit être adressé à Allah seul, sans
                        intermédiaire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La reprise progressive
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Pour celui qui a longtemps délaissé la prière, il est
                        conseillé de reprendre avec les cinq prières obligatoires
                        sans se surcharger immédiatement de prières
                        surérogatoires. L&apos;objectif est d&apos;installer une
                        régularité avant d&apos;ajouter des actes
                        supplémentaires. Chaque prière accomplie est une victoire
                        à célébrer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le rattrapage des prières manquées
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La majorité des savants (hanafites, malékites, chaféites)
                        recommandent de rattraper les prières manquées
                        progressivement. Une méthode pratique consiste à accomplir
                        une prière de rattrapage après chaque prière obligatoire
                        du jour. Certains savants hanbalites privilégient le
                        repentir sincère sans rattrapage obligatoire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La compagnie pieuse et le soutien communautaire
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        S&apos;entourer de personnes pratiquantes facilite
                        énormément le retour à la prière. La prière en
                        congrégation à la mosquée, les cercles de science et les
                        rappels entre frères et sœurs constituent un soutien
                        précieux pour maintenir la régularité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La multiplication du dhikr et des invocations
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le rappel d&apos;Allah (dhikr) tout au long de la
                        journée adoucit le cœur et prépare l&apos;âme à la
                        prière. Les{" "}
                        <Link href="/invocations-reussite-facilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations pour la réussite et la facilité</Link>{" "}
                        renforcent le lien avec le Créateur et facilitent la
                        reprise de la salat.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Se fixer des rappels (alarmes) pour ne manquer aucune
                      prière au début du retour.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Aménager un espace de prière chez soi, propre et calme,
                      pour faciliter le recueillement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Apprendre ou réapprendre les gestes et les sourates de la
                      prière sans honte ni gêne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Ne pas se décourager après une rechute : chaque retour est
                      une preuve de sincérité aux yeux d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Consulter un imam ou un savant de confiance pour toute
                      question sur le rattrapage et les conditions du repentir.
                    </span>
                  </li>
                </ul>

                {/* Profils */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le musulman négligent
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Tu reconnais l&apos;importance de la prière mais la paresse
                      t&apos;a éloigné. Sache que chaque pas vers Allah est
                      récompensé. Commence par une seule prière, puis ajoute-en
                      une autre. Allah voit tes efforts, aussi petits
                      soient-ils. Le Prophète (paix et salut sur lui) a dit :
                      &laquo; Les actes les plus aimés d&apos;Allah sont les plus
                      réguliers, même s&apos;ils sont
                      peu &raquo; (rapporté par Al-Bukhari).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le nouveau converti
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;apprentissage de la prière peut sembler complexe au
                      début. Prends ton temps pour apprendre les mouvements et les
                      sourates. Allah ne charge aucune âme au-delà de sa capacité
                      (Coran, 2:286). Cherche un frère ou une sœur pour
                      t&apos;accompagner et n&apos;hésite pas à poser des
                      questions. Chaque effort d&apos;apprentissage est une
                      adoration en soi.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour la personne traversant une épreuve
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La maladie, le deuil ou les difficultés de la vie peuvent
                      rendre la prière lourde. Sache que la prière est justement
                      le refuge le plus précieux dans les moments difficiles.
                      Allah dit : &laquo; Cherchez secours dans la patience et
                      la prière &raquo; (Coran, 2:45). Même assis, même allongé,
                      la prière reste valide tant que l&apos;intention est
                      sincère.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* ArticleCTA entre dernière section et FAQ */}
              {/* ============================================ */}
              <ArticleCTA
                variant="page-mere"
                title="Pour approfondir votre connaissance de la prière en islam"
                href="/prier-islam-excellence-spirituelle"
                linkText="Prier en islam : les conditions de l'excellence spirituelle"
              />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Perfectionnez votre récitation pour sublimer votre prière"
                description="Une bonne récitation du Coran enrichit chaque prière. Apprenez le tajwid et la langue arabe pour vivre une expérience spirituelle plus profonde."
                preselect="coran"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles sur la prière en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/prier-islam-excellence-spirituelle"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prier en islam : excellence spirituelle
                  </Link>
                  <Link
                    href="/priere-voyageur-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    La prière du voyageur en islam
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages mères */}
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
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes et médecine prophétique
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
