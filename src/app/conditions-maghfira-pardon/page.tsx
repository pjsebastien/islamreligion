import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Pardon d'Allah : conditions pour obtenir le maghfira",
  description:
    "Découvrez les conditions du pardon divin (maghfira) en islam : repentir sincère, regret, abandon du péché, invocations et actions vertueuses pour obtenir la miséricorde d'Allah.",
  alternates: {
    canonical: "https://www.islamreligion.fr/conditions-maghfira-pardon",
  },
};

const tocItems = [
  { id: "maghfira", label: "Le maghfira et le pardon divin" },
  { id: "conditions", label: "Les quatre conditions du repentir" },
  { id: "invocations", label: "Les invocations du pardon" },
  { id: "actions", label: "Les actions vertueuses" },
  { id: "obstacles", label: "Surmonter les obstacles au repentir" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelles sont les conditions du pardon en islam ?",
    answer:
      "Le pardon en islam repose sur quatre conditions principales : la sincérité (ikhlas) dans la démarche, le regret authentique (nadam) du péché commis, l\u2019abandon immédiat du comportement fautif, et la ferme résolution de ne pas y revenir. Ces conditions doivent être réunies avant l\u2019heure de la mort et avant les signes majeurs de la fin des temps.",
  },
  {
    question: "Quelle est la différence entre maghfira et afw ?",
    answer:
      "Le maghfira désigne le fait qu\u2019Allah recouvre le péché et en annule le châtiment, tout en conservant la trace dans la science divine. Le afw, quant à lui, va plus loin : il s\u2019agit d\u2019un effacement complet du péché, comme s\u2019il n\u2019avait jamais existé. Al-Ghazali explique que le afw est un degré supérieur au maghfira, car il inclut la suppression totale de la faute.",
  },
  {
    question: "Le repentir est-il accepté pour tous les péchés ?",
    answer:
      "Allah affirme dans le Coran (sourate Az-Zumar, 39:53) : « Dis : O Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d\u2019Allah. Car Allah pardonne tous les péchés. » Cette promesse englobe tous les péchés sans exception, à condition que le repentir soit sincère et accompli avant l\u2019agonie.",
  },
  {
    question: "Quelle est la meilleure invocation pour le pardon ?",
    answer:
      "La meilleure invocation pour le pardon est le Sayyid al-Istighfar (le maître de la demande de pardon), rapporté par al-Bukhari. Le Prophète (paix et bénédictions sur lui) a dit que quiconque la récite avec conviction le matin et meurt dans la journée sera parmi les gens du Paradis, et de même pour celui qui la récite le soir.",
  },
  {
    question: "Peut-on se repentir d\u2019un péché qu\u2019on a commis plusieurs fois ?",
    answer:
      "Oui, le repentir est accepté à chaque fois que le croyant revient sincèrement vers Allah, même s\u2019il a commis le même péché à plusieurs reprises. Le Prophète (paix et bénédictions sur lui) a dit : « Tout fils d\u2019Adam commet des péchés, et les meilleurs des pécheurs sont ceux qui se repentent constamment » (rapporté par at-Tirmidhi). L\u2019important est la sincérité de la démarche à chaque retour.",
  },
  {
    question: "Le pardon nécessite-t-il de réparer ses torts envers autrui ?",
    answer:
      "Oui, lorsque le péché implique un tort causé à autrui (vol, médisance, atteinte physique), une cinquième condition s\u2019ajoute : la réparation des droits de la personne lésée. Il faut restituer les biens volés, demander pardon à la personne offensée ou, si cela est impossible, implorer Allah en sa faveur et multiplier les bonnes actions.",
  },
  {
    question: "Comment savoir si Allah a pardonné ?",
    answer:
      "Les savants mentionnent plusieurs signes indirects : le croyant ressent une tranquillité du coeur après le repentir, il éprouve une aversion pour le péché commis, il se tourne naturellement vers les bonnes actions, et il ressent un amour accru pour la prière et les invocations. Cependant, la certitude absolue n\u2019appartient qu\u2019à Allah, et le croyant doit maintenir un équilibre entre espoir et humilité.",
  },
  {
    question: "L\u2019istighfar quotidien est-il suffisant pour obtenir le pardon ?",
    answer:
      "L\u2019istighfar quotidien est une pratique prophétique recommandée. Le Prophète (paix et bénédictions sur lui) demandait pardon à Allah plus de soixante-dix fois par jour (rapporté par al-Bukhari). Toutefois, la simple répétition verbale ne suffit pas : elle doit être accompagnée de sincérité, de regret et d\u2019une volonté réelle de changement pour que le pardon soit complet.",
  },
];

export default function ConditionsMaghfira() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/conditions-maghfira-pardon/#article",
        headline:
          "Pardon d'Allah : conditions pour obtenir le maghfira",
        description:
          "Découvrez les conditions du pardon divin (maghfira) en islam : repentir sincère, regret, abandon du péché, invocations et actions vertueuses.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Pardon-dAllah-conditions-pour-obtenir-le-maghfira-1.jpg",
        datePublished: "2025-08-21",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/conditions-maghfira-pardon/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/conditions-maghfira-pardon/#breadcrumb",
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
            name: "Conditions du pardon",
            item: "https://www.islamreligion.fr/conditions-maghfira-pardon",
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
          title="Pardon d&apos;Allah : conditions pour obtenir le maghfira"
          subtitle="Les conditions du repentir accepté, les invocations du pardon et les actions vertueuses qui rapprochent de la miséricorde divine."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Pardon-dAllah-conditions-pour-obtenir-le-maghfira-1.jpg"
          imageAlt="Pardon d'Allah, conditions pour obtenir le maghfira en islam"
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
                <span className="text-foreground">Conditions du pardon en islam</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le maghfira, ou pardon divin, occupe une place centrale dans la
                  spiritualité islamique. Allah invite chaque croyant à revenir
                  vers Lui, peu importe la gravité des fautes commises. Ce
                  pardon repose sur des conditions précises : la sincérité du
                  repentir, le regret du coeur, l&apos;abandon du péché et la
                  ferme résolution de ne pas y revenir. Accompagné
                  d&apos;invocations et d&apos;actions vertueuses, le chemin
                  vers la miséricorde divine reste ouvert à tous.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le maghfira et le pardon divin */}
              {/* ============================================ */}
              <section id="maghfira" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le maghfira et le pardon divin en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme arabe maghfira provient de la racine
                  « ghafara » qui signifie recouvrir, voiler, protéger.
                  Dans le contexte coranique, le maghfira ne se limite pas
                  à une simple absolution : il englobe le recouvrement du
                  péché, l&apos;annulation du châtiment qui lui est associé
                  et l&apos;accès à la miséricorde d&apos;Allah. Ce concept
                  reflète la profondeur de la relation entre le Créateur et
                  Sa créature, une relation fondée sur l&apos;amour, la
                  compassion et l&apos;espérance.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran regorge de versets qui témoignent de
                  l&apos;immensité de la miséricorde divine. Allah dit :
                  « Dis : O Mes serviteurs qui avez commis des excès à
                  votre propre détriment, ne désespérez pas de la
                  miséricorde d&apos;Allah. Car Allah pardonne tous les
                  péchés. Oui, c&apos;est Lui le Pardonneur, le
                  Miséricordieux » (Coran, 39:53). Ce verset, parmi les
                  plus porteurs d&apos;espoir de tout le Coran, rappelle
                  que la porte du repentir ne se ferme jamais tant que le
                  souffle de vie demeure.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit également : « Et ceux qui, lorsqu&apos;ils
                  commettent une turpitude ou se font du tort à
                  eux-mêmes, se souviennent d&apos;Allah et demandent
                  pardon pour leurs péchés. Et qui pardonne les péchés
                  sinon Allah ? Et qui ne persistent pas sciemment dans
                  ce qu&apos;ils ont fait » (Coran, 3:135). Ce verset
                  souligne que le pardon est intimement lié à la prise de
                  conscience et à la volonté de changement.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un autre verset vient renforcer cette promesse :
                  « Quiconque fait un mal ou se fait du tort à lui-même,
                  puis demande pardon à Allah, trouvera Allah Pardonneur
                  et Miséricordieux » (Coran, 4:110). La répétition de
                  cette invitation au repentir dans le Coran montre
                  combien Allah désire que Ses serviteurs reviennent vers
                  Lui.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Différence entre maghfira et afw
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants distinguent deux niveaux de pardon divin :
                  le maghfira et le afw. Le maghfira consiste à voiler le
                  péché et à en annuler la punition. Le croyant pardonné
                  par le maghfira est protégé des conséquences de sa
                  faute, mais la trace de celle-ci demeure dans la science
                  divine.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le afw, en revanche, représente un degré supérieur.
                  Al-Ghazali, dans son ouvrage Ihya Ulum al-Din, explique
                  que le afw signifie l&apos;effacement complet du péché,
                  comme si celui-ci n&apos;avait jamais été commis. C&apos;est
                  pour cette raison que le Coran emploie parfois les deux
                  termes ensemble, car ils se complètent dans
                  l&apos;expression de la générosité divine. Lorsque le
                  croyant invoque Allah en disant « Allahumma innaka
                  afuwwun tuhibbul afwa fa&apos;fu anni » (O Allah, Tu es
                  Celui qui efface les péchés, Tu aimes effacer, alors
                  efface mes péchés), il demande le degré le plus élevé
                  du pardon.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Maghfira :</strong> recouvrement du péché,
                      annulation du châtiment, protection contre la honte
                      au Jour du Jugement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Afw :</strong> effacement total du péché,
                      comme s&apos;il n&apos;avait jamais existé, degré
                      supérieur de la miséricorde.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tawba :</strong> <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">le repentir sincère</Link> du
                      serviteur qui constitue la démarche active vers le
                      pardon divin.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rahma :</strong> la miséricorde englobante
                      d&apos;Allah qui précède Sa colère et embrasse
                      toute chose.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Pardon-dAllah-conditions-pour-obtenir-le-maghfira-1.jpg"
                    alt="Le maghfira et le pardon divin en islam, miséricorde d'Allah"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Les quatre conditions du repentir */}
              {/* ============================================ */}
              <section id="conditions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les quatre conditions du repentir accepté
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants de l&apos;islam ont identifié quatre
                  conditions fondamentales pour que le repentir (tawba) soit
                  accepté par Allah. Ces conditions, tirées du Coran et de
                  la Sunna, forment un cadre clair et accessible à tout
                  croyant qui souhaite revenir vers son Seigneur. An-Nawawi,
                  dans son Riyad as-Salihin, les a rassemblées de manière
                  concise pour en faciliter la compréhension.
                </p>

                {/* Tableau des 4 conditions */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Condition
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Description
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Preuve textuelle
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Sincérité (ikhlas)
                        </td>
                        <td className="py-3 pr-4">
                          Le repentir doit être motivé par la crainte et
                          l&apos;amour d&apos;Allah, non par la peur du
                          jugement des gens ou un intérêt personnel
                        </td>
                        <td className="py-3">
                          « Revenez à Allah d&apos;un repentir sincère »
                          (Coran, 66:8)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Regret authentique (nadam)
                        </td>
                        <td className="py-3 pr-4">
                          Ressentir une peine profonde pour la faute commise,
                          un remords qui touche le coeur et pas seulement
                          les lèvres
                        </td>
                        <td className="py-3">
                          « Le regret est un repentir » (hadith rapporté
                          par Ibn Majah et Ahmad)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Abandon du péché
                        </td>
                        <td className="py-3 pr-4">
                          Cesser immédiatement le comportement fautif, car
                          le repentir verbal sans changement concret reste
                          incomplet
                        </td>
                        <td className="py-3">
                          « Et qui ne persistent pas sciemment dans ce
                          qu&apos;ils ont fait » (Coran, 3:135)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Ferme résolution
                        </td>
                        <td className="py-3 pr-4">
                          S&apos;engager devant Allah à ne pas revenir au
                          péché, avec une intention ferme et une volonté
                          réelle de transformation
                        </td>
                        <td className="py-3">
                          « O vous qui croyez, repentez-vous à Allah
                          d&apos;un repentir sincère » (Coran, 66:8)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La sincérité du coeur : fondement du repentir
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sincérité (ikhlas) constitue le pilier sur lequel
                  repose tout l&apos;édifice du repentir. Sans elle, les
                  mots deviennent vides et les gestes perdent leur sens.
                  Le croyant qui se repent doit diriger son intention
                  uniquement vers Allah, sans chercher à paraître pieux
                  devant les autres ni à éviter simplement une conséquence
                  mondaine. Le Prophète (paix et bénédictions sur lui) a
                  rappelé : « Les actions ne valent que par les intentions,
                  et chaque personne n&apos;obtient que ce qu&apos;elle a
                  eu l&apos;intention de faire » (rapporté par al-Bukhari
                  et Muslim).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le regret qui transforme
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le nadam, ou regret sincère, n&apos;est pas un sentiment
                  de désespoir qui paralyse. C&apos;est une prise de
                  conscience lucide qui pousse le croyant vers
                  l&apos;avant. Le Prophète (paix et bénédictions sur lui)
                  a dit : « Le regret est un repentir » (rapporté par Ibn
                  Majah et Ahmad). Ce hadith montre que le regret
                  authentique constitue déjà une forme de repentir, car il
                  traduit la reconnaissance de la faute et la volonté de
                  s&apos;en détourner.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les conditions temporelles du repentir
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants précisent que le repentir doit être accompli
                  avant deux échéances : la mort individuelle (lorsque
                  l&apos;âme atteint la gorge, le repentir n&apos;est plus
                  accepté) et les <Link href="/signes-fin-monde-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">signes majeurs de la fin des temps</Link>
                  (comme le lever du soleil depuis l&apos;occident). Le
                  Prophète (paix et bénédictions sur lui) a dit : « Allah
                  accepte le repentir du serviteur tant que son âme
                  n&apos;a pas atteint la gorge » (rapporté par
                  at-Tirmidhi). Cette limite temporelle souligne
                  l&apos;urgence de ne pas reporter le retour vers Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La réparation des droits d&apos;autrui
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsque le péché concerne les droits d&apos;une autre
                  personne, une cinquième condition s&apos;ajoute aux
                  quatre précédentes : la restitution des droits ou la
                  demande de pardon auprès de la personne lésée. Si le
                  croyant a volé un bien, il doit le restituer. S&apos;il
                  a médit sur quelqu&apos;un, il doit demander pardon à
                  cette personne. Et si la réparation directe est
                  impossible (la personne est décédée ou introuvable),
                  il doit multiplier les invocations en sa faveur et les
                  aumônes à son intention.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Identifier la faute avec honnêteté
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La première étape consiste à reconnaître le péché
                        sans le minimiser ni le justifier. Cette honnêteté
                        envers soi-même ouvre la porte du repentir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se tourner vers Allah avec humilité
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le croyant doit se présenter devant Allah avec un
                        coeur brisé par le regret, conscient de sa propre
                        faiblesse et de la grandeur de la miséricorde divine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Agir concrètement pour changer
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le repentir n&apos;est pas seulement un état
                        intérieur : il se traduit par des actes concrets.
                        S&apos;éloigner des situations de tentation, changer
                        de fréquentations si nécessaire, et remplacer les
                        mauvaises habitudes par des pratiques vertueuses.
                      </p>
                    </div>
                  </div>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le repentir sincère en islam (tawba) : comment revenir vers Allah"
                  description="Approfondissez les étapes du repentir sincère et découvrez comment la tawba transforme la vie du croyant."
                  href="/repentir-sincere-islam-tawba"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Les invocations du pardon */}
              {/* ============================================ */}
              <section id="invocations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les invocations du pardon (istighfar)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;istighfar, la demande de pardon à Allah, est
                  l&apos;une des pratiques les plus recommandées en islam.
                  Le Prophète (paix et bénédictions sur lui) la pratiquait
                  avec constance, demandant pardon à Allah plus de
                  soixante-dix fois par jour (rapporté par al-Bukhari),
                  alors même qu&apos;il était exempt de tout péché. Cela
                  montre que l&apos;istighfar n&apos;est pas seulement un
                  remède pour les fautes, mais aussi un moyen de se
                  rapprocher d&apos;Allah et d&apos;élever son rang
                  spirituel.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le Sayyid al-Istighfar : le maître de la demande de pardon
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et bénédictions sur lui) a enseigné
                  cette invocation et l&apos;a qualifiée de « maître de
                  la demande de pardon ». Il a dit : « Quiconque la
                  récite avec conviction durant le jour et meurt ce
                  jour-là avant le soir sera parmi les gens du Paradis.
                  Et quiconque la récite avec conviction durant la nuit
                  et meurt avant le matin sera parmi les gens du
                  Paradis » (rapporté par al-Bukhari).
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                    Sayyid al-Istighfar (traduction)
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foreground italic">
                    « O Allah, Tu es mon Seigneur, il n&apos;y a de
                    divinité que Toi. Tu m&apos;as créé et je suis Ton
                    serviteur. Je suis fidèle à Ton pacte et à Ta promesse
                    autant que je le peux. Je cherche refuge auprès de Toi
                    contre le mal de ce que j&apos;ai commis. Je reconnais
                    devant Toi Tes bienfaits à mon égard et je reconnais
                    mon péché. Pardonne-moi donc, car nul ne pardonne les
                    péchés si ce n&apos;est Toi. »
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation contient tous les éléments du repentir
                  sincère : la reconnaissance de la seigneurie d&apos;Allah,
                  l&apos;aveu de la servitude, l&apos;engagement envers le
                  pacte divin, la demande de protection contre les
                  conséquences des péchés, la gratitude pour les bienfaits,
                  et l&apos;aveu des fautes. Sa richesse spirituelle en
                  fait une invocation d&apos;une profondeur remarquable.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les formules quotidiennes d&apos;istighfar
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Au-delà du Sayyid al-Istighfar, plusieurs formules
                  courtes permettent au croyant de maintenir un lien
                  constant avec la demande de pardon tout au long de la
                  journée.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Astaghfirullah :</strong> « Je demande pardon
                      à Allah. » La formule la plus simple et la plus
                      fréquente, que le croyant peut répéter à tout moment
                      de la journée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Astaghfirullah al-Azim :</strong> « Je demande
                      pardon à Allah, l&apos;Immense. » Une formule qui
                      ajoute la reconnaissance de la grandeur divine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Après la prière :</strong> le Prophète (paix
                      et bénédictions sur lui) disait « Astaghfirullah »
                      trois fois après chaque prière obligatoire (rapporté
                      par Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le matin et le soir :</strong> intégrer
                      l&apos;istighfar dans les invocations du matin
                      (adhkar as-sabah) et du soir (adhkar al-massa)
                      renforce la protection spirituelle quotidienne.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les bienfaits de l&apos;istighfar selon le Coran et la Sunna
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;istighfar ne se limite pas au pardon des péchés :
                  il ouvre la porte à de nombreux bienfaits. Allah dit,
                  rapportant les paroles du prophète Nuh (Noé) : « Demandez
                  pardon à votre Seigneur, car Il est Pardonneur. Il vous
                  enverra du ciel des pluies abondantes, Il vous donnera
                  davantage de biens et d&apos;enfants, et vous donnera
                  des jardins et des rivières » (Coran, 71:10-12). Les
                  savants ont déduit de ce verset que l&apos;istighfar
                  apporte la subsistance, la descendance, la sérénité du
                  coeur et la résolution des difficultés.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et bénédictions sur lui) a également
                  dit : « Quiconque fait de l&apos;istighfar une habitude,
                  Allah lui trouvera une issue à chaque difficulté, un
                  soulagement à chaque angoisse, et lui accordera sa
                  subsistance de là où il ne s&apos;y attend pas »
                  (rapporté par Abu Dawud). Cette promesse prophétique
                  montre que l&apos;istighfar est à la fois un acte de
                  purification et une source de bénédictions concrètes. Retrouvez également les <Link href="/invocations-reussite-facilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations authentiques pour la réussite et la facilité</Link>.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Pardon-dAllah-conditions-pour-obtenir-le-maghfira-1.jpg"
                    alt="Les invocations du pardon en islam, istighfar et Sayyid al-Istighfar"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Les actions vertueuses */}
              {/* ============================================ */}
              <section id="actions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les actions vertueuses qui renforcent le pardon
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Coran établit un lien direct entre les bonnes actions
                  et l&apos;effacement des péchés. Allah dit : « Accomplis
                  la prière aux deux extrémités du jour et à certaines
                  heures de la nuit. Les bonnes actions dissipent les
                  mauvaises. Cela est un rappel pour ceux qui réfléchissent »
                  (Coran, 11:114). Ce verset pose un principe fondamental :
                  les bonnes oeuvres ne sont pas seulement des actes de
                  dévotion, elles sont aussi des instruments de purification
                  qui contribuent activement au pardon divin.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et bénédictions sur lui) a confirmé ce
                  principe en disant : « Crains Allah où que tu sois,
                  fais suivre la mauvaise action par une bonne action qui
                  l&apos;effacera, et comporte-toi avec les gens de la
                  meilleure manière » (rapporté par at-Tirmidhi). Ce
                  hadith trace une voie pratique vers le pardon : ne pas
                  se contenter du repentir verbal, mais l&apos;accompagner
                  d&apos;actions vertueuses concrètes.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La prière, pilier de la purification
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les cinq prières quotidiennes sont comparées par le
                        Prophète (paix et bénédictions sur lui) à une
                        rivière qui coule devant la porte de chacun et dans
                        laquelle il se lave cinq fois par jour (rapporté
                        par al-Bukhari et Muslim). Les prières
                        surérogatoires (rawatib, tahajjud, duha) ajoutent
                        une couche supplémentaire de purification et
                        rapprochent le serviteur de son Seigneur. Découvrez aussi les <Link href="/abandon-priere-islam-consequences" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">conséquences de l&apos;abandon de la prière</Link> et l&apos;importance de maintenir ce pilier.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La charité (sadaqah) : un remède pour l&apos;âme
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et bénédictions sur lui) a dit :
                        « La charité éteint le péché comme l&apos;eau
                        éteint le feu » (rapporté par at-Tirmidhi). La
                        sadaqah, qu&apos;elle soit matérielle (don
                        d&apos;argent, de nourriture) ou immatérielle
                        (sourire, parole bienveillante, aide à autrui),
                        purifie le coeur et les biens du croyant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La récitation du Coran : lumière et guérison
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Coran est décrit comme une guérison pour les
                        coeurs (Coran, 10:57). Sa récitation régulière
                        apaise l&apos;âme tourmentée par le remords,
                        renforce la foi et rappelle au croyant les
                        promesses de miséricorde divine. Chaque lettre lue
                        est récompensée et contribue à l&apos;élévation
                        spirituelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le jeûne : purification du corps et de l&apos;esprit
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et bénédictions sur lui) a dit :
                        « Quiconque jeûne le mois de Ramadan avec foi et
                        en espérant la récompense, ses péchés passés lui
                        seront pardonnés » (rapporté par al-Bukhari et
                        Muslim). Le jeûne surérogatoire (lundi et jeudi,
                        trois jours par mois, jour de Arafat, jour de
                        Achoura) offre des occasions régulières de
                        purification tout au long de l&apos;année.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le service à la communauté
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et bénédictions sur lui) a dit :
                        « Allah aide le serviteur tant que le serviteur aide
                        son frère » (rapporté par Muslim). L&apos;engagement
                        communautaire, l&apos;aide aux personnes dans le
                        besoin et le bénévolat sont autant de moyens de se
                        rapprocher d&apos;Allah et de multiplier les bonnes
                        actions qui effacent les mauvaises.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les ablutions (wudu) sont elles-mêmes une forme de
                      purification : chaque goutte d&apos;eau qui tombe
                      emporte un péché (rapporté par Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le dhikr (rappel d&apos;Allah) régulier maintient le
                      coeur dans un état de vigilance et éloigne les
                      tentations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La prière de la nuit (tahajjud) est décrite par les
                      savants comme le moment le plus propice au repentir
                      et à l&apos;acceptation des invocations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le pèlerinage (Hajj) accompli avec sincérité efface
                      tous les péchés antérieurs, comme l&apos;a dit le
                      Prophète (paix et bénédictions sur lui) : « Celui qui
                      accomplit le Hajj sans commettre de relations
                      interdites ni de péchés en revient comme le jour où
                      sa mère l&apos;a mis au monde » (rapporté par
                      al-Bukhari et Muslim).
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Prier en islam : atteindre l'excellence spirituelle"
                  description="Découvrez comment la prière quotidienne renforce le lien avec Allah et purifie le coeur du croyant."
                  href="/prier-islam-excellence-spirituelle"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Surmonter les obstacles */}
              {/* ============================================ */}
              <section id="obstacles" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Surmonter les obstacles au repentir
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le chemin du repentir n&apos;est pas toujours linéaire.
                  De nombreux croyants font face à des obstacles intérieurs
                  qui freinent leur retour vers Allah. Reconnaître ces
                  difficultés est la première étape pour les surmonter. La
                  miséricorde divine est suffisamment vaste pour accueillir
                  chaque croyant, quel que soit son état, à condition
                  qu&apos;il fasse un pas sincère dans la bonne direction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La culpabilité excessive qui paralyse
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Certains croyants sont si accablés par le poids de leurs
                  péchés qu&apos;ils finissent par croire qu&apos;Allah ne
                  pourra jamais leur pardonner. Cette culpabilité
                  excessive, loin d&apos;être un signe de piété, est en
                  réalité un piège qui éloigne de la miséricorde divine.
                  Allah avertit : « Ne désespérez pas de la miséricorde
                  d&apos;Allah » (Coran, 39:53). Le désespoir vis-à-vis
                  du pardon est lui-même considéré comme un péché, car il
                  revient à sous-estimer la capacité d&apos;Allah à
                  pardonner.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn al-Qayyim rappelle que la miséricorde d&apos;Allah
                  précède Sa colère et que Sa générosité dépasse toute
                  mesure humaine. Le croyant doit maintenir un équilibre
                  sain entre la crainte (khawf) et l&apos;espoir (raja),
                  en sachant que la porte du repentir reste toujours
                  ouverte.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La procrastination et le report du repentir
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  « Je me repentirai plus tard » est l&apos;une des ruses
                  les plus subtiles de Shaytan (le diable). Le report du
                  repentir est dangereux car nul ne connaît le moment de
                  sa mort. Les savants insistent sur l&apos;urgence de se
                  repentir immédiatement, car chaque instant passé dans le
                  péché aggrave la distance entre le serviteur et son
                  Seigneur. Al-Hasan al-Basri disait : « Prends garde à
                  la procrastination, car tu vis dans le présent et non
                  dans le futur. »
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La rechute dans le péché
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La rechute est l&apos;un des obstacles les plus
                  décourageants pour le croyant qui tente de se repentir,
                  notamment dans le domaine des <Link href="/peches-sexualite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">péchés liés à la sexualité</Link>.
                  Pourtant, les savants sont unanimes : la rechute
                  n&apos;invalide pas les repentirs précédents, et le
                  croyant doit se repentir à nouveau à chaque fois
                  qu&apos;il tombe. Le Prophète (paix et bénédictions sur
                  lui) a enseigné qu&apos;Allah est plus heureux du
                  repentir de Son serviteur qu&apos;un homme qui retrouve
                  son chameau perdu dans le désert (rapporté par
                  al-Bukhari et Muslim).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans un hadith qudsi : « O fils d&apos;Adam,
                  tant que tu M&apos;invoques et que tu espères en Moi,
                  Je te pardonne quoi que tu aies fait, et cela ne
                  M&apos;importe guère. O fils d&apos;Adam, si tes
                  péchés atteignaient les nuages du ciel puis que tu
                  Me demandes pardon, Je te pardonnerais » (rapporté
                  par at-Tirmidhi). Ce hadith transmet un message
                  d&apos;espérance immense pour chaque croyant qui
                  lutte contre ses faiblesses.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Maintenir l&apos;espoir et la persévérance
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le maintien de l&apos;espoir est une composante
                  fondamentale de la foi. Le croyant ne doit jamais perdre
                  de vue que la miséricorde d&apos;Allah englobe toute
                  chose. Parmi les conseils pratiques pour maintenir
                  l&apos;élan du repentir, les savants recommandent de
                  s&apos;entourer de compagnons vertueux, de fréquenter
                  les cercles de savoir, de maintenir une routine
                  d&apos;adoration régulière, de ne jamais cesser
                  l&apos;istighfar et de <Link href="/remede-angoisse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">retrouver la sérénité par les remèdes spirituels de l&apos;islam</Link>.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Choisir des compagnons vertueux :</strong> la
                      bonne compagnie renforce la motivation et éloigne des
                      tentations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Fréquenter les cercles de savoir :</strong> la
                      connaissance religieuse nourrit la foi et rappelle les
                      conséquences des péchés.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Maintenir une routine d&apos;adoration :</strong> la
                      régularité dans les actes de dévotion protège le coeur
                      de la négligence.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se rappeler la grandeur d&apos;Allah :</strong> la
                      méditation sur les noms et attributs d&apos;Allah
                      (Al-Ghafur, Al-Afuw, At-Tawwab, Ar-Rahman) nourrit
                      l&apos;espoir et la confiance.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Pardon-dAllah-conditions-pour-obtenir-le-maghfira-1.jpg"
                    alt="Surmonter les obstacles au repentir et maintenir l'espoir en la miséricorde d'Allah"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* Profils */}
              {/* ============================================ */}
              <section className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le pardon selon la situation du croyant
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le chemin vers le pardon divin prend une coloration
                  différente selon la situation personnelle de chacun. Les
                  savants adaptent leurs conseils en fonction du profil du
                  croyant, car Allah connaît chaque coeur et accueille
                  chaque repentir avec une miséricorde proportionnée à la
                  sincérité de la démarche.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le pécheur repentant
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Celui qui revient vers Allah après un péché grave doit
                      savoir que la porte de la miséricorde est grande
                      ouverte. Le regret sincère, accompagné de
                      l&apos;abandon immédiat du péché et d&apos;une
                      multiplication des bonnes actions, suffit à obtenir le
                      pardon divin. Il ne doit jamais désespérer ni croire
                      que son péché dépasse la miséricorde d&apos;Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le musulman régulier
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le croyant qui pratique régulièrement sa religion mais
                      commet des péchés mineurs au quotidien peut compter
                      sur les cinq prières, le jeûne, l&apos;istighfar
                      quotidien et les aumônes pour effacer ses fautes. Le
                      Prophète (paix et bénédictions sur lui) a dit : « Les
                      cinq prières et le vendredi au vendredi sont des
                      expiations pour les péchés commis entre eux, tant
                      qu&apos;on évite les péchés majeurs » (rapporté par
                      Muslim).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6 sm:col-span-2">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le nouveau converti
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le nouveau musulman bénéficie d&apos;une promesse
                      particulière : le Prophète (paix et bénédictions sur
                      lui) a dit : « L&apos;islam efface ce qui l&apos;a
                      précédé » (rapporté par Muslim). L&apos;entrée en
                      islam constitue un renouveau complet, un effacement
                      de tous les péchés antérieurs. Le converti commence
                      une page blanche et peut construire sa relation avec
                      Allah sur des bases pures, en s&apos;appuyant sur
                      l&apos;istighfar et l&apos;apprentissage progressif
                      des pratiques islamiques.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* ArticleCTA avant FAQ */}
              {/* ============================================ */}
              <ArticleCTA
                variant="lire-aussi"
                title="L'abandon de la prière en islam : conséquences et voie de retour"
                description="Comprenez les conséquences de l'abandon de la prière et les étapes pour retrouver une pratique régulière."
                href="/abandon-priere-islam-consequences"
              />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Approfondir la spiritualité en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/repentir-sincere-islam-tawba"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Le repentir sincère (tawba)
                  </Link>
                  <Link
                    href="/prier-islam-excellence-spirituelle"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prier en islam
                  </Link>
                  <Link
                    href="/abandon-priere-islam-consequences"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Abandon de la prière
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
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Protection spirituelle en islam
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
