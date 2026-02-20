import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Invocations authentiques pour la réussite et la facilité en islam",
  description:
    "Découvrez les invocations authentiques pour la réussite et la facilité en islam : du&apos;as coraniques, moments propices, témoignages et conseils pour allier effort et confiance en Allah.",
  alternates: {
    canonical: "https://www.islamreligion.fr/invocations-reussite-facilite",
  },
};

const tocItems = [
  { id: "fondement-coranique", label: "Le fondement coranique de la demande de facilité" },
  { id: "invocations-authentiques", label: "Invocations authentiques pour la réussite" },
  { id: "quand-comment", label: "Quand et comment faire ces invocations" },
  { id: "temoignages", label: "Témoignages et exemples concrets" },
  { id: "effort-confiance", label: "Allier effort personnel et confiance en Allah" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelles sont les meilleures invocations pour la réussite en islam ?",
    answer:
      "Parmi les invocations les plus recommandées pour la réussite figurent la prière de Moussa (Coran 20:25-28) demandant l&apos;ouverture du c\u0153ur et la facilitation de la tâche, ainsi que les du&apos;as prophétiques pour la facilitation et la subsistance. Les adhkar du matin et du soir constituent également un socle solide pour attirer la bénédiction d&apos;Allah dans ses projets.",
  },
  {
    question: "Peut-on faire des invocations en français ?",
    answer:
      "Oui, il est tout à fait permis de faire des invocations en français ou dans toute autre langue en dehors de la prière rituelle (salat). Allah connaît toutes les langues et entend chaque supplication sincère. Toutefois, apprendre les formulations arabes originales reste recommandé pour se rapprocher du texte sacré et de la tradition prophétique.",
  },
  {
    question: "Quel est le meilleur moment pour faire des invocations ?",
    answer:
      "Plusieurs moments sont particulièrement propices selon la tradition prophétique : le dernier tiers de la nuit, entre l&apos;adhan et l&apos;iqama, après les prières obligatoires, le vendredi après-midi, et lors de la prosternation (sujud). Le Prophète (paix et salut sur lui) a indiqué que le serviteur est le plus proche de son Seigneur lorsqu&apos;il est prosterné.",
  },
  {
    question: "Combien de fois faut-il répéter une invocation ?",
    answer:
      "Il n&apos;y a pas de nombre obligatoire pour la plupart des invocations libres. Cependant, la tradition prophétique recommande souvent de répéter trois fois certaines du&apos;as. L&apos;important réside dans la sincérité, la concentration du c\u0153ur et la persévérance. Répéter régulièrement ses invocations, jour après jour, témoigne d&apos;une confiance profonde en Allah.",
  },
  {
    question: "L&apos;invocation peut-elle remplacer l&apos;effort personnel ?",
    answer:
      "Non, l&apos;invocation ne remplace pas l&apos;effort personnel. Le Prophète (paix et salut sur lui) a dit : \"Attache ta chamelle, puis place ta confiance en Allah\" (Tirmidhi). L&apos;islam enseigne que la du&apos;a et le travail sont complémentaires. Invoquer Allah tout en fournissant les efforts nécessaires constitue l&apos;équilibre recherché par le croyant.",
  },
  {
    question: "Quelle sourate réciter pour la facilité ?",
    answer:
      "La sourate Taha, notamment les versets 25 à 28, contient l&apos;invocation de Moussa (paix sur lui) pour l&apos;ouverture du c\u0153ur et la facilitation. La sourate Ash-Sharh (94) rappelle qu&apos;avec chaque difficulté vient une facilité. La sourate Al-Baqarah (verset 286) rassure que Dieu ne charge aucune âme au-delà de sa capacité.",
  },
  {
    question: "Peut-on faire des invocations pour quelqu&apos;un d&apos;autre ?",
    answer:
      "Absolument. Invoquer Allah en faveur d&apos;un frère ou d&apos;une s\u0153ur en son absence est un acte très méritoire en islam. Le Prophète (paix et salut sur lui) a enseigné que lorsqu&apos;un musulman invoque pour son frère en son absence, un ange dit : \"Amine, et à toi la même chose\" (Muslim). Cette pratique renforce les liens communautaires et la solidarité.",
  },
  {
    question: "Comment rester patient quand l&apos;invocation ne semble pas exaucée ?",
    answer:
      "La patience (sabr) fait partie intégrante de l&apos;invocation. Le Prophète (paix et salut sur lui) a rappelé que toute du&apos;a est exaucée de trois manières : soit la demande est accordée, soit un mal équivalent est écarté, soit la récompense est gardée pour l&apos;au-delà. Persévérer dans la supplication sans se décourager est lui-même un acte d&apos;adoration qui rapproche d&apos;Allah.",
  },
];

export default function InvocationsReussite() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/invocations-reussite-facilite/#article",
        headline:
          "Invocations authentiques pour la réussite et la facilité en islam",
        description:
          "Découvrez les invocations authentiques pour la réussite et la facilité en islam : du'as coraniques, moments propices, témoignages et conseils.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Invocations-authentiques-pour-la-reussite-et-la-facilite-1.jpg",
        datePublished: "2025-08-23",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/invocations-reussite-facilite/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/invocations-reussite-facilite/#breadcrumb",
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
            name: "Invocations pour la réussite",
            item: "https://www.islamreligion.fr/invocations-reussite-facilite",
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
          title="Invocations authentiques pour la réussite et la facilité"
          subtitle="Du&apos;as coraniques, moments propices et témoignages pour allier effort et confiance en Allah."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Invocations-authentiques-pour-la-reussite-et-la-facilite-1.jpg"
          imageAlt="Invocations authentiques pour la réussite et la facilité en islam"
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
                <span className="text-foreground">Invocations pour la réussite</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;islam accorde une place fondamentale à l&apos;invocation
                  (du&apos;a) comme moyen de se rapprocher d&apos;Allah et de
                  solliciter Son aide dans tous les aspects de la vie. Du verset
                  de Moussa demandant l&apos;ouverture du c&oelig;ur aux du&apos;as
                  prophétiques pour la subsistance, la tradition islamique offre
                  un riche répertoire d&apos;invocations pour la réussite et la
                  facilité. La clé réside dans la sincérité, la persévérance et
                  l&apos;alliance entre l&apos;effort personnel et la confiance
                  totale en Allah.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le fondement coranique */}
              {/* ============================================ */}
              <section id="fondement-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le fondement coranique de la demande de facilité
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant même de détailler les invocations spécifiques, il est
                  important de comprendre que la demande d&apos;aide et de
                  facilité fait partie intégrante de la foi musulmane. Le Coran
                  regorge de passages où les prophètes eux-mêmes implorent Allah
                  pour être soutenus dans leurs missions. Loin d&apos;être un
                  signe de faiblesse, cette démarche est au contraire la marque
                  d&apos;une soumission sincère à la volonté divine.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;un des exemples les plus marquants se trouve dans la
                  sourate Taha, aux versets 25 à 28. Moussa (paix sur lui),
                  confronté à la mission redoutable de s&apos;adresser à Pharaon,
                  adressa cette prière à Allah : &laquo; Seigneur, ouvre-moi ma
                  poitrine, facilite-moi ma tâche, et dénoue un n&oelig;ud de
                  ma langue, afin qu&apos;ils comprennent ma parole &raquo;
                  (Coran, 20:25-28). Ce passage illustre avec force que même les
                  messagers d&apos;Allah reconnaissaient leur besoin d&apos;aide
                  divine face aux difficultés.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sourate Ash-Sharh (94:5-6) apporte une promesse
                  réconfortante, qui trouve un écho dans <Link href="/conditions-maghfira-pardon" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les conditions du pardon divin</Link> : &laquo; Certes, avec la difficulté il y a une
                  facilité. Certes, avec la difficulté il y a une facilité &raquo;.
                  La répétition de cette affirmation souligne sa certitude. Quelle
                  que soit l&apos;épreuve traversée, la facilité l&apos;accompagne
                  et la suit. Cette conviction nourrit la sérénité du croyant et
                  l&apos;encourage à ne jamais perdre espoir.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le verset 286 de la sourate Al-Baqarah complète cette vision :
                  &laquo; Allah n&apos;impose à aucune âme une charge supérieure
                  à sa capacité &raquo;. Ce principe fondamental rappelle que
                  chaque épreuve est à la mesure de nos forces, et que la
                  supplication sincère suffit pour obtenir le soutien divin face
                  aux défis qui se présentent.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le tawakkul (confiance en Allah) :</strong> socle
                      de toute invocation sincère, il consiste à fournir
                      l&apos;effort puis à s&apos;en remettre pleinement à
                      Allah pour le résultat. Cette confiance se renforce par <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">un repentir sincère (tawba)</Link> qui purifie le coeur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La certitude dans la réponse :</strong> le Prophète
                      (paix et salut sur lui) a enseigné d&apos;invoquer avec la
                      certitude d&apos;être exaucé, sans hésitation ni doute.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La soumission au décret divin :</strong> accepter
                      que la réponse d&apos;Allah peut prendre une forme
                      différente de ce que l&apos;on attendait, car Sa sagesse
                      dépasse notre compréhension.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La sourate At-Talaq (65:2-3) :</strong> &laquo;
                      Quiconque craint Allah, Il lui donnera une issue favorable
                      et lui accordera ses dons par des moyens insoupçonnés &raquo;.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Invocations-authentiques-pour-la-reussite-et-la-facilite-1.jpg"
                    alt="Fondement coranique de la demande de facilité en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Invocations authentiques */}
              {/* ============================================ */}
              <section id="invocations-authentiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations authentiques pour la réussite
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La tradition prophétique regorge d&apos;invocations transmises
                  de manière authentique pour solliciter l&apos;aide d&apos;Allah
                  dans les moments de difficulté, les examens, les projets
                  professionnels et toutes les situations qui nécessitent un
                  soutien particulier. Voici les principales du&apos;as recensées
                  dans les sources fiables, accompagnées de leurs contextes
                  d&apos;utilisation recommandés.
                </p>

                {/* Tableau des invocations */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Invocation
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Source
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Occasion recommandée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          &laquo; Rabbi-shrah li sadri, wa yassir li amri, wahlul
                          &apos;uqdatan min lisani, yafqahu qawli &raquo;
                        </td>
                        <td className="py-3 pr-4">
                          Coran 20:25-28
                        </td>
                        <td className="py-3">
                          Avant un examen, un entretien, une prise de parole
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          &laquo; Allahumma la sahla illa ma ja&apos;altahu sahla,
                          wa anta taj&apos;alu al-hazna idha shi&apos;ta sahla &raquo;
                        </td>
                        <td className="py-3 pr-4">
                          Ibn Hibban (sahih)
                        </td>
                        <td className="py-3">
                          Face à toute difficulté ou obstacle
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          &laquo; Allahumma-kfini bi halalika &apos;an haramika,
                          wa aghnini bi fadlika &apos;amman siwak &raquo;
                        </td>
                        <td className="py-3 pr-4">
                          Tirmidhi
                        </td>
                        <td className="py-3">
                          Pour la subsistance licite et l&apos;indépendance
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          &laquo; Hasbiya Allahu la ilaha illa huwa, &apos;alayhi
                          tawakkaltu wa huwa rabbu al-&apos;arshi al-&apos;azim &raquo;
                        </td>
                        <td className="py-3 pr-4">
                          Coran 9:129 / Abu Dawud
                        </td>
                        <td className="py-3">
                          Matin et soir (7 fois), confiance totale en Allah
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          &laquo; Allahumma inni as&apos;aluka &apos;ilman nafi&apos;an,
                          wa rizqan tayyiban, wa &apos;amalan mutaqabbalan &raquo;
                        </td>
                        <td className="py-3 pr-4">
                          Ibn Majah
                        </td>
                        <td className="py-3">
                          Après la prière du Fajr
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Adhkar du matin et du soir (ensemble complet)
                        </td>
                        <td className="py-3 pr-4">
                          Bukhari / Muslim
                        </td>
                        <td className="py-3">
                          Chaque matin après Fajr et chaque soir après Asr
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces invocations ne sont pas de simples formules à réciter
                  machinalement. Chacune porte en elle une intention profonde et
                  un lien direct avec la confiance en Allah. La du&apos;a de
                  Moussa (Coran 20:25-28) est particulièrement puissante pour
                  celui qui s&apos;apprête à affronter une situation
                  stressante, car elle demande à la fois la sérénité
                  intérieure (l&apos;ouverture de la poitrine), la facilitation
                  pratique (l&apos;aisance dans la tâche) et la clarté
                  d&apos;expression (le dénouement de la langue).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La du&apos;a pour la facilitation, rapportée par Ibn Hibban,
                  reconnaît qu&apos;aucune chose n&apos;est facile sauf si Allah
                  la rend telle. Cette reconnaissance de la toute-puissance
                  divine est au c&oelig;ur de la démarche spirituelle du
                  musulman. Elle nous rappelle que nos capacités, aussi grandes
                  soient-elles, restent toujours tributaires de la volonté
                  d&apos;Allah.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Invocations-authentiques-pour-la-reussite-et-la-facilite-1.jpg"
                    alt="Liste des invocations authentiques pour la réussite en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="La prière de consultation (istikhara) : demander la guidance d&apos;Allah"
                  description="Découvrez comment accomplir la prière de consultation pour confier vos choix importants à Allah."
                  href="/istikhara-priere-consultation"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Quand et comment */}
              {/* ============================================ */}
              <section id="quand-comment" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quand et comment faire ces invocations
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La sincérité du c&oelig;ur est la condition première de toute
                  invocation. Pour les décisions importantes, la <Link href="/istikhara-priere-consultation" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">prière de consultation (istikhara)</Link> constitue un complément essentiel. Par ailleurs, la tradition prophétique nous enseigne
                  que certains moments et certaines dispositions favorisent
                  l&apos;exaucement des du&apos;as. Connaître ces instants
                  privilégiés permet au croyant de maximiser l&apos;impact de
                  ses supplications.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le dernier tiers de la nuit
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné
                        qu&apos;Allah descend chaque nuit au ciel le plus
                        proche durant le dernier tiers et dit : &laquo; Qui
                        M&apos;invoque afin que Je lui réponde ? Qui Me demande
                        afin que Je lui donne ? &raquo; (Bukhari et Muslim). Ce
                        moment de calme absolu est idéal pour les supplications
                        les plus profondes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Après les prières obligatoires
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le moment qui suit le taslim (salutation finale de la
                        prière) est un instant de proximité avec Allah. Le
                        croyant vient d&apos;accomplir un acte d&apos;adoration
                        majeur et se trouve dans un état de recueillement
                        propice à l&apos;invocation. C&apos;est le moment de
                        formuler ses demandes avec confiance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Entre l&apos;adhan et l&apos;iqama
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a indiqué que
                        l&apos;invocation entre l&apos;appel à la prière et le
                        second appel n&apos;est pas rejetée (Abu Dawud,
                        Tirmidhi). Ce bref intervalle représente une fenêtre
                        précieuse que le croyant peut exploiter au quotidien.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le vendredi et ses heures bénies
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le vendredi comporte une heure durant laquelle toute
                        du&apos;a est exaucée (Bukhari et Muslim). Bien que les
                        savants divergent sur le moment exact, la période entre
                        l&apos;assise de l&apos;imam sur le minbar et la fin de
                        la prière, ainsi que la dernière heure avant le Maghrib,
                        sont les avis les plus retenus.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Avoir les ablutions (wudu) :</strong> bien que non
                      obligatoire pour l&apos;invocation, l&apos;état de pureté
                      rituelle renforce la concentration et le recueillement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se tourner vers la qibla :</strong> s&apos;orienter
                      vers la Mecque est recommandé pour les du&apos;as, à
                      l&apos;image du Prophète (paix et salut sur lui) qui
                      levait souvent les mains en direction de la qibla.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Commencer par la louange d&apos;Allah :</strong> louer
                      Allah et envoyer la prière sur le Prophète avant de
                      formuler sa demande est une sunna qui donne plus de
                      poids à l&apos;invocation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Persévérer et ne pas se précipiter :</strong> le
                      Prophète (paix et salut sur lui) a mis en garde contre
                      l&apos;impatience en disant : &laquo; L&apos;invocation
                      de l&apos;un d&apos;entre vous est exaucée tant qu&apos;il
                      ne se montre pas impatient &raquo; (Bukhari et Muslim).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Invocations-authentiques-pour-la-reussite-et-la-facilite-1.jpg"
                    alt="Moments propices pour faire des invocations en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Témoignages et exemples */}
              {/* ============================================ */}
              <section id="temoignages" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Témoignages et exemples concrets
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les invocations pour la réussite ne relèvent pas d&apos;une
                  théorie abstraite. Elles se vivent au quotidien, dans les
                  épreuves comme dans les victoires. Voici des parcours de
                  croyants qui ont intégré la du&apos;a dans leur cheminement
                  personnel et professionnel, alliant foi et action concrète.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Samira, étudiante en médecine
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Face à la charge de travail de ses études, Samira a pris
                      l&apos;habitude de réciter la du&apos;a de Moussa
                      (Coran 20:25-28) chaque matin avant de commencer ses
                      révisions. Elle raconte que cette pratique lui a apporté
                      une clarté d&apos;esprit et une sérénité qui ont
                      transformé son rapport aux examens. &laquo; Je ne demande
                      pas à Allah de réussir sans effort, mais de m&apos;accorder
                      la facilité dans mes efforts &raquo;, confie-t-elle.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Amine, entrepreneur
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Lorsqu&apos;Amine a lancé son activité, les premiers mois
                      furent marqués par les doutes et les difficultés
                      financières. Il a intégré la du&apos;a pour la
                      subsistance licite (rapportée par Tirmidhi) dans ses
                      adhkar quotidiens. Progressivement, des portes se sont
                      ouvertes de manière inattendue. &laquo; Le tawakkul ne
                      signifie pas rester les bras croisés. C&apos;est travailler
                      dur tout en sachant que le résultat appartient à Allah &raquo;,
                      explique-t-il.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Khadija, mère de famille
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Jonglant entre les responsabilités familiales et le désir
                      de reprendre une formation professionnelle, Khadija a
                      trouvé dans les invocations du matin et du soir un
                      ancrage spirituel. &laquo; La sourate Ash-Sharh (94:5-6)
                      me rappelle chaque jour que la facilité accompagne
                      toujours la difficulté. Cela m&apos;a donné le courage
                      de me lancer &raquo;, témoigne-t-elle.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Youssef, en recherche d&apos;emploi
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Après plusieurs mois de recherche infructueuse, Youssef a
                      renforcé ses invocations durant le dernier tiers de la
                      nuit tout en multipliant les candidatures. &laquo; Je
                      récitais la du&apos;a de facilitation chaque nuit avec
                      conviction. Quand l&apos;opportunité est arrivée,
                      j&apos;ai su que c&apos;était la réponse d&apos;Allah à
                      ma persévérance &raquo;, raconte-t-il.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un dernier témoignage mérite d&apos;être partagé. Lors de la
                  préparation de son concours, un étudiant en droit a adopté
                  une routine complète : révision intensive combinée à la
                  récitation de la du&apos;a de Moussa avant chaque session
                  d&apos;étude, les adhkar du matin pour commencer la journée
                  dans la sérénité, et la prière de la nuit pour confier ses
                  inquiétudes à Allah. Cette discipline spirituelle, loin de
                  le distraire de ses études, lui a permis de canaliser son
                  énergie et de maintenir un rythme soutenu sans céder à
                  l&apos;anxiété.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Chaque parcours confirme que la du&apos;a ne remplace pas
                      l&apos;effort, mais lui donne une dimension spirituelle
                      qui transforme l&apos;expérience.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les invocations aident à traverser les phases de doute
                      en rattachant le croyant à une source de force
                      inépuisable, tout comme les <Link href="/sorcellerie-islam-protection" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">moyens de protection spirituelle en islam</Link> renforcent la défense du croyant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La régularité prime sur la quantité : quelques du&apos;as
                      récitées avec c&oelig;ur chaque jour valent mieux
                      qu&apos;une longue séance occasionnelle sans concentration.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Prier en islam : l&apos;excellence spirituelle au quotidien"
                  description="Approfondissez votre pratique de la prière et découvrez comment atteindre l&apos;ihsan dans vos actes d&apos;adoration."
                  href="/prier-islam-excellence-spirituelle"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Effort et confiance */}
              {/* ============================================ */}
              <section id="effort-confiance" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Allier effort personnel et confiance en Allah
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des enseignements les plus profonds de l&apos;islam
                  réside dans l&apos;équilibre entre l&apos;action humaine et
                  la confiance en Allah. Le célèbre hadith rapporté par Tirmidhi
                  illustre parfaitement ce principe : un homme demanda au Prophète
                  (paix et salut sur lui) s&apos;il devait attacher sa chamelle
                  ou simplement placer sa confiance en Allah. La réponse fut
                  claire : &laquo; Attache-la, puis place ta confiance en Allah
                  &raquo;.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith résume à lui seul la philosophie islamique de
                  l&apos;effort. Il ne s&apos;agit ni de se reposer entièrement
                  sur les invocations en négligeant le travail, ni de compter
                  uniquement sur ses propres capacités en oubliant de solliciter
                  l&apos;aide d&apos;Allah. Les deux dimensions se complètent
                  harmonieusement et se renforcent mutuellement.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;effort comme forme d&apos;adoration
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        En islam, le travail accompli avec l&apos;intention de
                        subvenir aux besoins de sa famille et de contribuer à
                        la communauté est en lui-même un acte d&apos;adoration.
                        Le Prophète (paix et salut sur lui) a dit que la main
                        qui donne est meilleure que celle qui reçoit (Bukhari).
                        L&apos;effort sincère, accompagné de la du&apos;a,
                        attire la bénédiction d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La gratitude, moteur de la baraka
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Allah dit dans le Coran : &laquo; Si vous êtes
                        reconnaissants, très certainement J&apos;augmenterai
                        Mes bienfaits pour vous &raquo; (14:7). La gratitude
                        (shukr) n&apos;est pas seulement un sentiment
                        intérieur, c&apos;est une pratique active qui consiste
                        à remercier Allah pour les bienfaits reçus, à les
                        utiliser dans le bien et à les partager avec autrui.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La patience face aux épreuves
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La patience (sabr) est indissociable de la du&apos;a.
                        Parfois, la réponse d&apos;Allah prend du temps, ou
                        elle se manifeste sous une forme inattendue. Le croyant
                        patient sait que chaque épreuve est une purification et
                        que la persévérance dans l&apos;invocation témoigne
                        d&apos;une foi solide.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Éviter la passivité spirituelle
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Omar ibn Al-Khattab (qu&apos;Allah l&apos;agrée)
                        mettait en garde contre ceux qui restent assis à
                        invoquer Allah pour la subsistance sans fournir le
                        moindre effort. La terre ne fait pas pleuvoir de
                        l&apos;or et de l&apos;argent, disait-il. L&apos;invocation
                        est un complément à l&apos;action, jamais un substitut.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le croyant qui allie du&apos;a et effort agit conformément
                      à la sunna et attire la bénédiction d&apos;Allah dans ses
                      projets.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La réussite en islam n&apos;est pas mesurée uniquement par
                      les résultats matériels, mais aussi par la satisfaction
                      d&apos;Allah et la paix intérieure que procure le tawakkul. Même les <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêves en islam</Link> peuvent être le reflet de cette sérénité retrouvée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Maintenir un équilibre entre ambition et contentement
                      (rida) protège le c&oelig;ur de l&apos;envie et de la
                      frustration.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La piété (taqwa) est la condition première pour que les
                      portes de la facilité s&apos;ouvrent, comme le rappelle
                      la sourate At-Talaq (65:2-3).
                    </span>
                  </li>
                </ul>

                {/* Tableau effort et du'a */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Dimension
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Ce que l&apos;islam enseigne
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Application concrète
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Effort (sa&apos;y)
                        </td>
                        <td className="py-3 pr-4">
                          Travailler avec sérieux et compétence
                        </td>
                        <td className="py-3">
                          Étudier, se former, postuler, entreprendre
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Invocation (du&apos;a)
                        </td>
                        <td className="py-3 pr-4">
                          Solliciter l&apos;aide et la baraka d&apos;Allah
                        </td>
                        <td className="py-3">
                          Réciter les du&apos;as matin et soir, avant chaque projet
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Confiance (tawakkul)
                        </td>
                        <td className="py-3 pr-4">
                          S&apos;en remettre à Allah pour le résultat
                        </td>
                        <td className="py-3">
                          Accepter le décret divin avec sérénité
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Gratitude (shukr)
                        </td>
                        <td className="py-3 pr-4">
                          Remercier Allah pour chaque bienfait
                        </td>
                        <td className="py-3">
                          Dire al-hamdulillah, pratiquer l&apos;aumône
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Invocations-authentiques-pour-la-reussite-et-la-facilite-1.jpg"
                    alt="Allier effort personnel et confiance en Allah pour la réussite"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les conditions de la maghfira et du pardon en islam"
                  description="Comprenez les conditions du repentir sincère et comment obtenir le pardon d&apos;Allah."
                  href="/conditions-maghfira-pardon"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Profils */}
              {/* ============================================ */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations adaptées à chaque situation
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaque croyant traverse des épreuves et des défis propres à
                  sa situation. Les invocations pour la réussite peuvent être
                  personnalisées et adaptées selon le contexte de vie. Voici
                  quelques pistes selon le profil de chacun.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour l&apos;étudiant
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La du&apos;a de Moussa (Coran 20:25-28) est
                      particulièrement adaptée avant les examens et les
                      exposés. Compléter avec la du&apos;a pour le savoir
                      bénéfique (Ibn Majah) après le Fajr crée une routine
                      spirituelle qui soutient la concentration et la
                      mémorisation tout au long de la journée.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le professionnel
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;invocation pour la subsistance licite (Tirmidhi) et
                      les adhkar du matin constituent un socle solide pour
                      celui qui cherche la baraka dans son travail. Le tawakkul
                      permet d&apos;affronter les incertitudes professionnelles
                      avec sérénité, en sachant que la provision vient d&apos;Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le parent
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Invoquer Allah pour sa descendance fait partie des
                      plus belles du&apos;as. Les versets de la sourate
                      Al-Furqan (25:74) demandent à Allah de faire de nos
                      conjoints et de notre progéniture une fraîcheur pour
                      les yeux. Le parent peut réciter ces du&apos;as pour
                      la réussite de ses enfants dans leur parcours scolaire
                      et spirituel.
                    </p>
                  </div>
                </div>
              </div>

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
                    href="/istikhara-priere-consultation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prière de consultation (istikhara)
                  </Link>
                  <Link
                    href="/prier-islam-excellence-spirituelle"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prier en islam avec excellence
                  </Link>
                  <Link
                    href="/conditions-maghfira-pardon"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Conditions du pardon en islam
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Protection contre la sorcellerie
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
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
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
