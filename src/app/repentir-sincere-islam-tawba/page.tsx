import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Comment se repentir sincèrement en islam : conditions du tawba",
  description:
    "Découvrez les cinq conditions du repentir sincère (tawba) en islam, les références coraniques et prophétiques, et les bienfaits spirituels d\u2019un retour à Allah.",
  alternates: {
    canonical: "https://www.islamreligion.fr/repentir-sincere-islam-tawba",
  },
};

const tocItems = [
  { id: "tawba-coran-sunna", label: "Le tawba dans le Coran et la Sunna" },
  { id: "conditions", label: "Les cinq conditions du repentir sincère" },
  { id: "droits-autrui", label: "Le repentir concernant les droits d\u2019autrui" },
  { id: "erreurs", label: "Les erreurs courantes dans le repentir" },
  { id: "fruits", label: "Les fruits du repentir sincère" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelles sont les conditions du repentir en islam ?",
    answer:
      "Le repentir sincère en islam repose sur cinq conditions : la sincérité envers Allah dans l\u2019intention, le regret profond du péché commis, l\u2019abandon immédiat de la faute, la résolution ferme de ne pas y revenir, et le respect du délai (avant la mort ou les signes majeurs de l\u2019Heure). Si le péché concerne une autre personne, il faut aussi restituer ses droits ou lui demander pardon.",
  },
  {
    question: "Le repentir est-il accepté si on retombe dans le péché ?",
    answer:
      "Oui, le repentir reste valide et accepté à chaque fois qu\u2019il est accompli avec sincérité. Retomber dans un péché n\u2019annule pas un repentir antérieur. Le croyant doit simplement renouveler son tawba avec un regret sincère et une volonté ferme de se corriger. Allah aime le serviteur qui revient constamment vers Lui.",
  },
  {
    question: "Peut-on se repentir de tous les péchés en islam ?",
    answer:
      "Allah pardonne tous les péchés à celui qui se repent sincèrement, comme l\u2019affirme le verset : \"Dis : O Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d\u2019Allah. Car Allah pardonne tous les péchés\" (sourate Az-Zumar, 39:53). Le seul péché impardonnable est le shirk (associationnisme) si la personne meurt sans s\u2019en être repentie.",
  },
  {
    question: "Quelle est la différence entre tawba et istighfar ?",
    answer:
      "L\u2019istighfar est la demande de pardon verbale (dire Astaghfirullah). Le tawba est un processus plus complet qui inclut l\u2019istighfar mais y ajoute le regret sincère, l\u2019abandon du péché et la résolution de ne pas recommencer. L\u2019istighfar peut être le premier pas vers un repentir complet.",
  },
  {
    question: "Jusqu\u2019à quand le repentir est-il accepté ?",
    answer:
      "Le repentir est accepté tant que l\u2019âme n\u2019a pas atteint la gorge (au moment de l\u2019agonie) et tant que le soleil ne s\u2019est pas levé de l\u2019ouest (signe majeur de la fin des temps). Le Prophète (paix et bénédictions sur lui) a dit : \"Allah accepte le repentir du serviteur tant que son âme n\u2019a pas atteint sa gorge\" (rapporté par At-Tirmidhi).",
  },
  {
    question: "Comment se repentir d\u2019un péché envers une autre personne ?",
    answer:
      "En plus des conditions habituelles du tawba, il faut restituer les droits de la personne lésée : rendre un bien volé, demander pardon pour une médisance, rétablir l\u2019honneur de la personne calomniée. Si la personne est décédée, on peut faire des invocations en sa faveur et donner l\u2019aumône en son nom.",
  },
  {
    question: "Le repentir efface-t-il complètement le péché ?",
    answer:
      "Oui, un repentir sincère efface le péché comme s\u2019il n\u2019avait jamais été commis. Mieux encore, Allah peut transformer les mauvaises actions en bonnes actions pour celui qui se repent et accomplit de bonnes oeuvres, comme l\u2019indique le verset 70 de la sourate Al-Furqan (25:70).",
  },
  {
    question: "Y a-t-il une invocation spécifique pour le repentir ?",
    answer:
      "Oui, le Prophète (paix et bénédictions sur lui) a enseigné la \"sayyid al-istighfar\" (maître de la demande de pardon) : \"O Allah, Tu es mon Seigneur, il n\u2019y a de divinité que Toi, Tu m\u2019as créé et je suis Ton serviteur...\" (rapporté par Al-Bukhari). La prière de deux rakaats suivie d\u2019une demande de pardon est également recommandée (hadith rapporté par Abu Dawud et At-Tirmidhi).",
  },
];

export default function RepentirTawba() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/repentir-sincere-islam-tawba/#article",
        headline:
          "Comment se repentir sincèrement en islam : conditions du tawba",
        description:
          "Découvrez les cinq conditions du repentir sincère (tawba) en islam, les références coraniques et prophétiques, et les bienfaits spirituels d\u2019un retour à Allah.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Comment-se-repentir-sincerement-en-islam-conditions-du-tawba-1.jpg",
        datePublished: "2025-08-22",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/repentir-sincere-islam-tawba/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/repentir-sincere-islam-tawba/#breadcrumb",
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
            name: "Repentir sincère",
            item: "https://www.islamreligion.fr/repentir-sincere-islam-tawba",
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
          title="Comment se repentir sincèrement en islam : conditions du tawba"
          subtitle="Le repentir (tawba) est une porte ouverte par Allah vers le pardon, la paix intérieure et le renouveau spirituel."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Comment-se-repentir-sincerement-en-islam-conditions-du-tawba-1.jpg"
          imageAlt="Comment se repentir sincèrement en islam, conditions du tawba"
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
                <span className="text-foreground">Repentir sincère en islam</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le tawba (repentir) occupe une place centrale dans la
                  spiritualité islamique. Allah invite chaque croyant à revenir
                  vers Lui avec sincérité, quel que soit le poids des péchés
                  passés. Ce retour repose sur cinq conditions précises, ancrées
                  dans le Coran et la Sunna, et ouvre la voie à la sérénité, au
                  renouvellement de la foi et à la transformation profonde de
                  l&apos;âme.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le tawba dans le Coran et la Sunna */}
              {/* ============================================ */}
              <section id="tawba-coran-sunna" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tawba dans le Coran et la Sunna
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mot tawba provient de la racine arabe &laquo; taba &raquo;
                  qui signifie &laquo; revenir &raquo;. En islam, se repentir,
                  c&apos;est littéralement revenir vers Allah, abandonner ce
                  qui L&apos;éloigne et se tourner pleinement vers Sa
                  miséricorde. Ce retour n&apos;est pas un aveu de faiblesse,
                  mais un acte de courage et de lucidité que le Très-Haut
                  valorise et récompense.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran regorge d&apos;appels au repentir. Allah dit :
                  &laquo; O vous qui avez cru, repentez-vous à Allah d&apos;un
                  repentir sincère &raquo; (sourate At-Tahrim, 66:8). Ce
                  verset souligne que le repentir n&apos;est pas réservé aux
                  pécheurs endurcis, mais s&apos;adresse à l&apos;ensemble de
                  la communauté des croyants. Ailleurs, Allah promet une
                  transformation remarquable : &laquo; Sauf celui qui se
                  repent, croit et accomplit une bonne oeuvre ; ceux-là, Allah
                  changera leurs mauvaises actions en bonnes actions &raquo;
                  (sourate Al-Furqan, 25:70-71).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le verset de la sourate Az-Zumar (39:53) résonne avec une
                  intensité particulière : &laquo; Dis : O Mes serviteurs qui
                  avez commis des excès à votre propre détriment, ne
                  désespérez pas de la miséricorde d&apos;Allah. Car Allah
                  pardonne tous les péchés. C&apos;est Lui le Pardonneur, le
                  Très Miséricordieux. &raquo; Ce verset brise toute barrière
                  de désespoir entre le serviteur et son Créateur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La Sunna confirme et amplifie ce message. Le Prophète (paix
                  et bénédictions sur lui) a dit : &laquo; Allah est plus
                  heureux du repentir de Son serviteur que l&apos;un de vous
                  ne le serait s&apos;il retrouvait son chameau égaré dans le
                  désert &raquo; (rapporté par Al-Bukhari et Muslim). Cette
                  image saisissante illustre la joie immense d&apos;Allah
                  lorsque l&apos;un de Ses serviteurs se tourne vers Lui avec
                  regret et humilité.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tawba :</strong> du verbe &laquo; taba &raquo;
                      (revenir), désigne le retour sincère du serviteur vers
                      Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tawba nasouha :</strong> le repentir sincère et
                      pur, mentionné en sourate At-Tahrim (66:8).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Allah At-Tawwab :</strong> un des noms divins
                      signifiant &laquo; Celui qui accepte sans cesse le
                      repentir &raquo;.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sourate At-Tawba :</strong> une sourate entière
                      du Coran porte le nom du repentir, soulignant son
                      importance dans la vie du croyant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le repentir collectif :</strong> le Prophète
                      (paix et bénédictions sur lui) demandait pardon à Allah
                      plus de cent fois par jour, montrant que le tawba
                      n&apos;est pas réservé aux grands pécheurs.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Allah a également dit : &laquo; Allah aime ceux qui se
                  repentent et Il aime ceux qui se purifient &raquo; (sourate
                  Al-Baqarah, 2:222). Le repentir n&apos;est donc pas
                  seulement toléré ou accepté par le Créateur : il est
                  véritablement aimé. Cette perspective transforme la relation
                  entre le croyant et son Seigneur, passant de la crainte
                  paralysante à l&apos;espoir vivifiant.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Comment-se-repentir-sincerement-en-islam-conditions-du-tawba-1.jpg"
                    alt="Le tawba dans le Coran et la Sunna, repentir sincère en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Les cinq conditions du repentir */}
              {/* ============================================ */}
              <section id="conditions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les cinq conditions du repentir sincère
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants musulmans, en s&apos;appuyant sur le Coran et la
                  Sunna, ont identifié cinq conditions indispensables pour
                  qu&apos;un repentir soit considéré comme sincère et valide
                  auprès d&apos;Allah. Chacune de ces conditions forme un
                  pilier sur lequel repose la solidité du tawba, et
                  l&apos;absence de l&apos;une d&apos;entre elles fragilise
                  l&apos;ensemble de la démarche.
                </p>

                {/* Tableau des 5 conditions */}
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
                          Exemple pratique
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Sincérité (ikhlas)
                        </td>
                        <td className="py-3 pr-4">
                          Se repentir uniquement pour Allah, sans chercher
                          l&apos;approbation des gens ni agir par peur du
                          regard social
                        </td>
                        <td className="py-3">
                          Faire son tawba dans l&apos;intimité de la prière
                          nocturne, en toute discrétion
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Regret sincère (nadam)
                        </td>
                        <td className="py-3 pr-4">
                          Ressentir un remords profond pour avoir désobéi à
                          Allah, reconnaître la gravité de la faute
                        </td>
                        <td className="py-3">
                          Le coeur se serre en repensant au péché, les yeux
                          versent des larmes de regret devant Allah
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Abandon du péché (tark)
                        </td>
                        <td className="py-3 pr-4">
                          Cesser immédiatement la faute, ne pas continuer à
                          pécher tout en demandant pardon
                        </td>
                        <td className="py-3">
                          Couper les liens avec un environnement qui pousse au
                          péché, changer ses habitudes concrètement
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Résolution ferme (azm)
                        </td>
                        <td className="py-3 pr-4">
                          Prendre la décision sincère de ne jamais retourner
                          vers ce péché, avec une volonté réelle de changement
                        </td>
                        <td className="py-3">
                          Mettre en place des moyens concrets pour éviter la
                          rechute (fréquenter la mosquée, choisir de bonnes
                          compagnies)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Respect du délai
                        </td>
                        <td className="py-3 pr-4">
                          Se repentir avant que l&apos;âme n&apos;atteigne la
                          gorge (agonie) et avant le lever du soleil de
                          l&apos;ouest
                        </td>
                        <td className="py-3">
                          Ne pas remettre le repentir à demain, saisir chaque
                          instant comme une opportunité de retour vers Allah
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et bénédictions sur lui) a affirmé :
                  &laquo; Le regret est repentir &raquo; (rapporté par Ahmad
                  et Ibn Majah). Cette parole prophétique place le regret au
                  coeur même du processus. Sans remords authentique, les mots
                  prononcés restent vides et le tawba n&apos;atteint pas sa
                  pleine valeur.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La sincérité comme fondement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le repentir doit être motivé par la conscience
                        d&apos;avoir désobéi au Créateur, non par la peur des
                        conséquences sociales ou juridiques. Allah scrute les
                        intentions et ne se contente pas des apparences. Un
                        tawba réalisé pour impressionner les autres perd toute
                        valeur auprès de Lui.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;abandon immédiat, sans délai
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il ne suffit pas de prononcer des paroles de repentir
                        tout en continuant à commettre le péché. Le croyant
                        sincère cesse la faute au moment même où il prend
                        conscience de sa gravité. Cette rupture nette est le
                        signe d&apos;un coeur véritablement touché.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La résolution ferme, moteur du changement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Prendre la décision de ne plus revenir au péché
                        n&apos;implique pas une garantie absolue de ne jamais
                        rechuter. L&apos;humain est faillible par nature. Ce
                        qui compte, c&apos;est la sincérité de la volonté au
                        moment du repentir, accompagnée d&apos;efforts
                        concrets pour éviter les situations à risque.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Allah dit dans la sourate An-Nisa (4:17-18) : &laquo; Allah
                  accueille le repentir de ceux qui font le mal par ignorance
                  et qui se repentent aussitôt après. Voilà ceux envers qui
                  Allah revient, et Allah est Omniscient et Sage. Mais
                  l&apos;absolution n&apos;est point pour ceux qui font de
                  mauvaises actions jusqu&apos;au moment où la mort se
                  présente à l&apos;un d&apos;eux, et qui s&apos;écrie : oui,
                  maintenant je me repens. &raquo; Ce verset rappelle
                  l&apos;urgence du repentir et le danger de le reporter sans
                  cesse.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Comment-se-repentir-sincerement-en-islam-conditions-du-tawba-1.jpg"
                    alt="Les cinq conditions du repentir sincère en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Le repentir concernant les droits d'autrui */}
              {/* ============================================ */}
              <section id="droits-autrui" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le repentir concernant les droits d&apos;autrui
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Lorsque le péché ne concerne que la relation entre le
                  serviteur et Allah, les cinq conditions mentionnées
                  précédemment suffisent. Mais lorsque la faute touche les
                  droits d&apos;une autre personne, une sixième condition
                  s&apos;impose : la restitution des droits ou la demande de
                  pardon auprès de la personne lésée.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette dimension relationnelle du repentir reflète
                  l&apos;importance qu&apos;Allah accorde à la justice entre
                  Ses serviteurs. Voler un bien, porter atteinte à la
                  réputation de quelqu&apos;un par la médisance ou la
                  calomnie, ou causer un préjudice physique ou moral ne peut
                  être effacé par une simple demande de pardon adressée à
                  Allah seul. Il faut aussi réparer le tort causé.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Restituer les biens matériels
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si un bien a été volé ou obtenu de manière illicite,
                        il doit être rendu à son propriétaire légitime. Si la
                        restitution directe est impossible, le croyant peut
                        donner l&apos;équivalent en aumône avec l&apos;intention
                        de compenser le droit de la personne.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Demander pardon à la personne offensée
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Pour la médisance, la calomnie ou toute parole
                        blessante, il convient de demander pardon directement
                        à la personne concernée. Si cela risque d&apos;aggraver
                        la situation, les savants recommandent de faire des
                        invocations en faveur de cette personne et de parler
                        d&apos;elle en bien.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le cas de la personne décédée
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si la personne lésée est décédée, le repentant doit
                        multiplier les invocations en sa faveur, donner
                        l&apos;aumône en son nom et demander sincèrement à
                        Allah de lui accorder le pardon de cette personne le
                        Jour du Jugement.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les droits des serviteurs d&apos;Allah sont pris très au
                      sérieux le Jour du Jugement : les bonnes actions du
                      fautif seront transférées à la victime si les droits
                      n&apos;ont pas été restitués.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le Prophète (paix et bénédictions sur lui) a mis en
                      garde contre le &laquo; banqueroutier &raquo; de
                      l&apos;au-delà : celui qui arrive avec de nombreuses
                      bonnes actions mais qui a lésé les gens (rapporté par
                      Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La réconciliation et le pardon mutuel sont parmi les
                      actes les plus aimés d&apos;Allah, source de bénédictions
                      pour les deux parties.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Rétablir l&apos;honneur d&apos;une personne calomniée
                      fait partie intégrante du repentir sincère.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les conditions de la maghfira et du pardon divin en islam"
                  description="Découvrez comment obtenir le pardon d&apos;Allah et les conditions de la maghfira selon le Coran et la Sunna."
                  href="/conditions-maghfira-pardon"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Les erreurs courantes */}
              {/* ============================================ */}
              <section id="erreurs" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les erreurs courantes dans le repentir
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Malgré la simplicité apparente du repentir, de nombreux
                  croyants tombent dans des pièges qui affaiblissent ou
                  annulent la portée de leur tawba. Reconnaître ces erreurs
                  permet de les éviter et de renforcer la qualité de son
                  retour vers Allah.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Reporter le repentir à plus tard
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La procrastination spirituelle est l&apos;une des
                        ruses les plus redoutables de Shaytan. Se dire
                        &laquo; je me repentirai quand je serai plus
                        âgé &raquo; ou &laquo; après le Ramadan &raquo;
                        revient à parier sur un avenir incertain. La mort
                        peut survenir à tout instant, et le verset de la
                        sourate An-Nisa (4:18) avertit contre cette
                        négligence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Désespérer de la miséricorde divine
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Certains croyants, submergés par la culpabilité,
                        pensent que leurs péchés sont trop nombreux ou trop
                        graves pour être pardonnés. Le Coran répond
                        directement à cette pensée dans le verset 39:53 :
                        Allah pardonne tous les péchés. Le désespoir
                        lui-même est considéré comme un péché, car il
                        revient à sous-estimer la miséricorde infinie du
                        Créateur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Un repentir superficiel, sans changement réel
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Prononcer &laquo; Astaghfirullah &raquo; du bout des
                        lèvres sans que le coeur soit affecté, sans modifier
                        ses habitudes ni s&apos;éloigner des causes du péché,
                        ne constitue pas un véritable tawba. Le repentir
                        sincère se manifeste par un changement visible dans
                        le comportement et les choix de vie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Compter sur un repentir futur pour continuer à pécher
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Se permettre de pécher en se disant &laquo; Allah
                        pardonnera de toute façon &raquo; est une forme de
                        tromperie envers soi-même. Ce raisonnement trahit un
                        manque de respect envers la majesté divine et
                        transforme la miséricorde d&apos;Allah en prétexte
                        pour la désobéissance. Les savants considèrent cette
                        attitude comme un péché en soi.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le vrai repentir s&apos;accompagne toujours d&apos;un
                      effort concret pour changer son environnement et ses
                      fréquentations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Se confier à un savant ou un imam de confiance peut
                      aider à structurer son repentir et à identifier les
                      obstacles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Multiplier les bonnes actions après le repentir
                      renforce la résolution et comble le vide laissé par
                      l&apos;abandon du péché.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La patience est une alliée du repentir : le changement
                      profond prend du temps, et chaque petit progrès compte
                      auprès d&apos;Allah.
                    </span>
                  </li>
                </ul>

                {/* Tableau erreurs */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Erreur courante
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Conséquence spirituelle
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Correction recommandée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Procrastination
                        </td>
                        <td className="py-3 pr-4">
                          Accumulation des péchés, endurcissement du coeur
                        </td>
                        <td className="py-3">
                          Se repentir dès la prise de conscience, sans attendre
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Désespoir
                        </td>
                        <td className="py-3 pr-4">
                          Éloignement d&apos;Allah, abandon de la pratique
                        </td>
                        <td className="py-3">
                          Méditer les versets sur la miséricorde (39:53)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Repentir verbal uniquement
                        </td>
                        <td className="py-3 pr-4">
                          Absence de changement, rechutes fréquentes
                        </td>
                        <td className="py-3">
                          Accompagner la parole d&apos;actes concrets de
                          changement
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Instrumentaliser la miséricorde
                        </td>
                        <td className="py-3 pr-4">
                          Manque de respect envers Allah, fausse sécurité
                        </td>
                        <td className="py-3">
                          Cultiver la crainte révérencielle (taqwa) aux côtés
                          de l&apos;espoir
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Comment-se-repentir-sincerement-en-islam-conditions-du-tawba-1.jpg"
                    alt="Les erreurs courantes dans le repentir en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="L&apos;abandon de la prière en islam : conséquences spirituelles"
                  description="Comprendre les conséquences de la négligence dans la prière et comment retrouver un lien fort avec Allah."
                  href="/abandon-priere-islam-consequences"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Les fruits du repentir sincère */}
              {/* ============================================ */}
              <section id="fruits" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les fruits du repentir sincère
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le repentir sincère ne se limite pas à l&apos;effacement du
                  péché. Il porte en lui des bienfaits considérables qui
                  transforment la vie du croyant en profondeur. Chaque tawba
                  accompli avec sincérité est une renaissance spirituelle,
                  une occasion de repartir sur des bases nouvelles et
                  purifiées.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La paix intérieure :</strong> le coeur libéré
                      du poids du péché retrouve sa sérénité. Le croyant
                      repenti ressent un apaisement profond qui se répercute
                      sur sa santé mentale, ses relations et sa productivité
                      quotidienne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le renouveau de la foi :</strong> le repentir
                      ravive l&apos;iman comme la pluie revivifie une terre
                      aride. Le croyant redécouvre la douceur de la prière,
                      la beauté du Coran et la proximité avec Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une relation renforcée avec Allah :</strong>
                      l&apos;acte de revenir vers son Seigneur crée un lien
                      d&apos;intimité et de confiance. Le serviteur repenti
                      connaît Allah d&apos;une manière plus profonde, à
                      travers Ses noms Al-Ghafour (le Pardonneur), At-Tawwab
                      (Celui qui accepte le repentir) et Ar-Rahim (le Très
                      Miséricordieux).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La transformation des péchés en bonnes
                      actions :</strong> l&apos;une des promesses les plus
                      extraordinaires du Coran se trouve dans le verset 70 de
                      la sourate Al-Furqan (25:70) : Allah change les
                      mauvaises actions en bonnes actions pour ceux qui se
                      repentent, croient et accomplissent de bonnes oeuvres.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un nouveau départ :</strong> le Prophète (paix
                      et bénédictions sur lui) a dit : &laquo; Celui qui se
                      repent du péché est comme celui qui n&apos;a pas de
                      péché &raquo; (rapporté par Ibn Majah). Cette parole
                      prophétique offre une vision d&apos;espoir total : le
                      repentir efface le passé et ouvre un chapitre vierge.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les fruits du repentir ne se limitent pas à la sphère
                  spirituelle. Ils se manifestent également dans la vie
                  concrète du croyant. Une personne qui se repent sincèrement
                  voit souvent ses relations s&apos;améliorer, sa situation
                  matérielle se stabiliser et ses difficultés s&apos;alléger.
                  Allah a promis que l&apos;istighfar attire les
                  bénédictions : &laquo; Demandez pardon à votre Seigneur,
                  car Il est grand Pardonneur, pour qu&apos;Il vous envoie du
                  ciel des pluies abondantes, qu&apos;Il vous accorde
                  davantage de biens et d&apos;enfants, et qu&apos;Il vous
                  fasse des jardins et des rivières &raquo; (sourate Nouh,
                  71:10-12).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le repentir est aussi un acte de gratitude envers Allah pour
                  la capacité même de se repentir. Le fait qu&apos;Allah
                  n&apos;ait pas saisi le croyant au moment du péché, mais
                  lui ait laissé le temps de revenir, est en soi une
                  miséricorde immense qui mérite reconnaissance et
                  louange.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Comment-se-repentir-sincerement-en-islam-conditions-du-tawba-1.jpg"
                    alt="Les fruits et bienfaits du repentir sincère en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION : Selon le profil du croyant */}
              {/* ============================================ */}
              <section className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le repentir selon la situation du croyant
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le tawba touche chaque croyant différemment selon sa
                  situation personnelle. Les savants insistent sur le fait
                  que le repentir n&apos;est pas une démarche uniforme, mais
                  un cheminement qui s&apos;adapte au vécu et aux besoins
                  de chacun.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le pécheur en quête de pardon
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Celui qui porte le poids d&apos;un péché récurrent
                      trouvera dans le tawba un soulagement immédiat. La
                      première étape est de briser le cycle de la honte
                      silencieuse en se tournant vers Allah avec
                      authenticité. Chaque retour sincère est accepté, quel
                      que soit le nombre de rechutes passées.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le musulman pratiquant
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le pratiquant régulier n&apos;est pas exempt du besoin
                      de repentir. Les manquements de la langue, les pensées
                      négatives, la négligence dans la qualité de la prière
                      sont autant de raisons de renouveler son tawba
                      quotidiennement, à l&apos;image du Prophète (paix et
                      bénédictions sur lui).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour la personne en crise spirituelle
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Celui qui traverse une période de doute, de
                      découragement ou de distance avec la pratique trouvera
                      dans le tawba la clé d&apos;un recommencement. Allah ne
                      ferme jamais la porte au serviteur sincère. Revenir
                      progressivement, avec humilité et patience, suffit pour
                      renouer le lien avec le Créateur.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* ArticleCTA avant la FAQ */}
              {/* ============================================ */}
              <ArticleCTA
                variant="page-mere"
                title="Pour approfondir votre pratique spirituelle quotidienne"
                href="/prier-islam-excellence-spirituelle"
                linkText="Découvrir la prière avec excellence en islam"
              />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles sur la spiritualité en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/conditions-maghfira-pardon"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Conditions de la maghfira
                  </Link>
                  <Link
                    href="/abandon-priere-islam-consequences"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Abandon de la prière en islam
                  </Link>
                  <Link
                    href="/prier-islam-excellence-spirituelle"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prier avec excellence en islam
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
