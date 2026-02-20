import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "La maternité dans l'islam, une responsabilité précieuse et spirituelle",
  description:
    "Découvrez le statut de la mère en islam, la maternité comme acte d'adoration, le rôle éducatif maternel et les droits de la mère selon le Coran et la Sunna.",
  alternates: {
    canonical: "https://www.islamreligion.fr/maternite-islam-responsabilite",
  },
};

const tocItems = [
  { id: "statut-mere", label: "Le statut de la mère dans le Coran et la Sunna" },
  { id: "maternite-adoration", label: "La maternité comme acte d'adoration" },
  { id: "role-educatif", label: "Le rôle éducatif de la mère en islam" },
  { id: "defis-contemporains", label: "Les défis contemporains de la maternité musulmane" },
  { id: "protection-valorisation", label: "La protection et la valorisation de la mère" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quel est le statut de la mère en islam ?",
    answer:
      "La mère occupe un rang parmi les plus élevés en islam. Le Prophète (paix et salut sur lui) a placé la mère trois fois avant le père lorsqu&apos;on l&apos;a interrogé sur la personne la plus digne de bienveillance. Le Coran ordonne la bonté envers les parents et souligne les sacrifices de la mère durant la grossesse et l&apos;allaitement (sourate Luqman, verset 14).",
  },
  {
    question: "Le paradis est-il vraiment sous les pieds des mères ?",
    answer:
      "Ce hadith, rapporté par An-Nasa&apos;i, exprime de manière imagée l&apos;immense valeur de la mère en islam. Il signifie que la satisfaction de la mère et le respect envers elle constituent une voie privilégiée vers le Paradis. Ce n&apos;est pas une formule littérale, mais un rappel puissant de la place de la mère dans la foi musulmane.",
  },
  {
    question: "La maternité est-elle considérée comme une adoration en islam ?",
    answer:
      "Oui, chaque étape de la maternité est valorisée spirituellement en islam. La grossesse, l&apos;accouchement, l&apos;allaitement et l&apos;éducation des enfants sont autant d&apos;actes qui rapprochent la mère d&apos;Allah. Les nuits blanches passées auprès de l&apos;enfant, la patience et les sacrifices quotidiens sont comptés comme des actes d&apos;adoration.",
  },
  {
    question: "Quels sont les droits de la mère sur ses enfants en islam ?",
    answer:
      "La mère a droit à la bonté (birr), à l&apos;entretien financier (nafaqa), à l&apos;obéissance dans le bien (ma&apos;ruf), au respect et à la douceur dans les paroles. Le Coran interdit de leur dire le moindre mot de mépris et ordonne de s&apos;adresser à eux avec noblesse (sourate Al-Isra, versets 23-24).",
  },
  {
    question: "Comment l'islam encourage-t-il l'allaitement maternel ?",
    answer:
      "Le Coran recommande l&apos;allaitement maternel pendant deux années complètes pour celle qui souhaite mener l&apos;allaitement à son terme (sourate Al-Baqarah, verset 233). Cette recommandation s&apos;accompagne de la responsabilité du père de subvenir aux besoins de la mère allaitante, soulignant la dimension familiale et spirituelle de cet acte.",
  },
  {
    question: "La mère a-t-elle la priorité sur le père dans l'éducation ?",
    answer:
      "En islam, les deux parents ont un rôle complémentaire. Toutefois, la mère bénéficie d&apos;une priorité dans la garde des jeunes enfants (hadana), reconnue par la majorité des savants. Le Prophète (paix et salut sur lui) a accordé la garde d&apos;un enfant à sa mère tant qu&apos;elle ne se remariait pas, ce qui montre l&apos;importance du lien maternel dans les premières années.",
  },
  {
    question: "Comment concilier maternité et vie professionnelle en islam ?",
    answer:
      "L&apos;islam n&apos;interdit pas à la femme de travailler. La conciliation entre maternité et vie professionnelle repose sur l&apos;équilibre, le soutien du conjoint et de la communauté, et la préservation du bien-être de l&apos;enfant. L&apos;organisation familiale, la répartition des tâches et l&apos;entraide entre proches sont autant de solutions conformes aux valeurs islamiques.",
  },
  {
    question: "Quelles invocations faire pour ses enfants en islam ?",
    answer:
      "Parmi les invocations les plus connues, on trouve celle d&apos;Ibrahim (paix sur lui) : \"Seigneur, fais de moi et de ma descendance des gens qui accomplissent la prière\" (Coran 14:40). Le Prophète (paix et salut sur lui) recommandait aussi de demander à Allah la protection de ses enfants contre le mal, en récitant les sourates protectrices et en invoquant la bénédiction divine sur eux chaque jour.",
  },
];

export default function MaterniteIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/maternite-islam-responsabilite/#article",
        headline:
          "La maternité dans l'islam, une responsabilité précieuse et spirituelle",
        description:
          "Découvrez le statut de la mère en islam, la maternité comme acte d'adoration, le rôle éducatif maternel et les droits de la mère selon le Coran et la Sunna.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2026/01/La-maternite-dans-lislam-une-responsabilite-precieuse-et-spirituelle.jpg",
        datePublished: "2026-01-14",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/maternite-islam-responsabilite/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/maternite-islam-responsabilite/#breadcrumb",
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
            name: "Maternité en islam",
            item: "https://www.islamreligion.fr/maternite-islam-responsabilite",
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
          title="La maternité dans l'islam, une responsabilité précieuse et spirituelle"
          subtitle="Statut de la mère dans le Coran et la Sunna, maternité comme adoration, rôle éducatif et droits de la mère en islam."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2026/01/La-maternite-dans-lislam-une-responsabilite-precieuse-et-spirituelle.jpg"
          imageAlt="La maternité dans l'islam, une responsabilité précieuse et spirituelle"
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
                <span className="text-foreground">Maternité en islam</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La maternité en islam dépasse le simple rôle biologique. Inscrite
                  dans le prolongement du{" "}
                  <Link href="/mariage-islamique-contrat" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">contrat de mariage islamique</Link>,
                  elle est reconnue comme une responsabilité sacrée, un acte
                  d&apos;adoration continu et une voie privilégiée vers le
                  Paradis. Du Coran à la Sunna, les textes fondateurs élèvent
                  la mère à un rang exceptionnel, rappelant ses sacrifices, ses
                  droits et son influence profonde dans la construction de la
                  famille et de la société musulmane.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le statut de la mère */}
              {/* ============================================ */}
              <section id="statut-mere" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le statut de la mère dans le Coran et la Sunna
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Peu de civilisations ont accordé à la mère un rang aussi
                  élevé que celui que l&apos;islam lui confère. Les sources
                  scripturaires, qu&apos;il s&apos;agisse du Coran ou des
                  hadiths du Prophète (paix et salut sur lui), convergent pour
                  placer la mère au sommet des relations humaines, juste après
                  le lien avec Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans la sourate Luqman (verset 14), Allah dit :
                  &laquo;&nbsp;Nous avons commandé à l&apos;homme la
                  bienfaisance envers ses père et mère. Sa mère l&apos;a porté
                  subissant peine sur peine, et son sevrage a lieu à deux
                  ans.&nbsp;&raquo; Ce verset souligne la double souffrance de
                  la grossesse et de l&apos;allaitement, rappelant que le lien
                  maternel est forgé dans le sacrifice bien avant la naissance.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sourate Al-Ahqaf (verset 15) renforce ce message :
                  &laquo;&nbsp;Sa mère l&apos;a porté avec peine et l&apos;a
                  mis au monde avec peine. Et sa gestation et son sevrage
                  durent trente mois.&nbsp;&raquo; Allah insiste sur la
                  dimension physique et temporelle du sacrifice maternel, en
                  faisant un argument en faveur de la bonté filiale.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Du côté de la Sunna, le hadith rapporté par Al-Bukhari et
                  Muslim est sans doute le plus éloquent. Un homme vint
                  demander au Prophète (paix et salut sur lui) :
                  &laquo;&nbsp;Qui mérite le plus ma bonne
                  compagnie ?&nbsp;&raquo; Il répondit :
                  &laquo;&nbsp;Ta mère.&nbsp;&raquo; L&apos;homme demanda :
                  &laquo;&nbsp;Puis qui ?&nbsp;&raquo; Il répondit :
                  &laquo;&nbsp;Ta mère.&nbsp;&raquo; L&apos;homme demanda
                  encore : &laquo;&nbsp;Puis qui ?&nbsp;&raquo; Il répondit :
                  &laquo;&nbsp;Ta mère.&nbsp;&raquo; L&apos;homme demanda une
                  quatrième fois, et le Prophète répondit enfin :
                  &laquo;&nbsp;Ton père.&nbsp;&raquo; Trois mentions contre
                  une : la proportion parle d&apos;elle-même.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nasa&apos;i rapporte également un hadith célèbre dans
                  lequel le Prophète (paix et salut sur lui) affirme que
                  &laquo;&nbsp;le Paradis se trouve sous les pieds des
                  mères&nbsp;&raquo;. Cette parole prophétique, souvent citée,
                  exprime de manière imagée que la satisfaction de la mère et
                  le respect envers elle ouvrent une voie privilégiée vers la
                  récompense divine.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Coran, sourate Luqman (31:14) :</strong> la mère
                      est honorée pour avoir porté l&apos;enfant avec peine et
                      l&apos;avoir allaité pendant deux ans.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Coran, sourate Al-Ahqaf (46:15) :</strong> trente
                      mois de gestation et de sevrage, un sacrifice que le
                      croyant doit reconnaître.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Hadith &laquo;&nbsp;Ta mère&nbsp;&raquo; (Bukhari/Muslim) :</strong>{" "}
                      la mère citée trois fois avant le père comme la personne
                      la plus digne de bienveillance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Hadith du Paradis (An-Nasa&apos;i) :</strong> le
                      Paradis se trouve sous les pieds des mères, un rappel
                      puissant de leur valeur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Statut unanime :</strong> les savants de toutes
                      les écoles juridiques s&apos;accordent sur le rang
                      exceptionnel de la mère en islam.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2026/01/La-maternite-dans-lislam-une-responsabilite-precieuse-et-spirituelle.jpg"
                    alt="Le statut de la mère dans le Coran et la Sunna en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : La maternité comme adoration */}
              {/* ============================================ */}
              <section id="maternite-adoration" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La maternité comme acte d&apos;adoration
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne sépare pas le quotidien du sacré. Chaque
                  geste accompli avec l&apos;intention de plaire à Allah
                  devient une ibada (adoration). La maternité, avec ses
                  épreuves physiques et ses sacrifices émotionnels, entre
                  pleinement dans cette logique spirituelle. Loin d&apos;être
                  réduite à une fonction biologique, elle est reconnue comme
                  un chemin de purification et de rapprochement avec le
                  Créateur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La grossesse elle-même est valorisée par les savants comme un
                  acte de patience récompensé. Les malaises, les douleurs et
                  les transformations du corps sont autant d&apos;épreuves que
                  la mère traverse pour donner la vie, un acte que les textes
                  comparent au djihad (effort dans le sentier d&apos;Allah).
                  Ce thème occupe une place si profonde dans l&apos;inconscient
                  des croyantes que{" "}
                  <Link href="/rever-enceinte-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêver d&apos;être enceinte en islam</Link>{" "}
                  est souvent interprété comme un signe de bénédiction.
                  L&apos;accouchement, moment de vulnérabilité intense, est
                  perçu comme un passage qui peut élever la mère au rang des
                  martyrs si elle y perdait la vie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;allaitement maternel est explicitement mentionné dans
                  le Coran. La sourate Al-Baqarah (verset 233) indique :
                  &laquo;&nbsp;Les mères allaitent leurs enfants deux années
                  complètes, pour celui qui veut mener l&apos;allaitement à
                  son terme.&nbsp;&raquo; Ce verset ne se contente pas de
                  donner une recommandation pratique : il inscrit
                  l&apos;allaitement dans un cadre de responsabilité partagée,
                  puisque le père doit subvenir aux besoins de la mère
                  allaitante.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les nuits blanches passées auprès d&apos;un nourrisson
                  malade, les moments de fatigue extrême, la patience face aux
                  pleurs incessants : tout cela est comptabilisé comme une
                  forme de sadaqah (aumône) spirituelle. La mère qui endure
                  ces épreuves avec patience et intention sincère voit ses
                  péchés effacés et son rang élevé auprès d&apos;Allah.
                </p>

                {/* Tableau des dimensions spirituelles */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Étape
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Dimension spirituelle
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Récompense
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Grossesse
                        </td>
                        <td className="py-3 pr-4">
                          Patience face aux épreuves physiques, confiance en
                          Allah
                        </td>
                        <td className="py-3">
                          Effacement des péchés, élévation du rang spirituel
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Accouchement
                        </td>
                        <td className="py-3 pr-4">
                          Sacrifice comparable au djihad, vulnérabilité
                          confiée à Allah
                        </td>
                        <td className="py-3">
                          Rang des martyrs en cas de décès, immense
                          récompense
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Allaitement
                        </td>
                        <td className="py-3 pr-4">
                          Acte recommandé par le Coran (2:233), lien
                          spirituel mère-enfant
                        </td>
                        <td className="py-3">
                          Bénédiction continue, renforcement du lien familial
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Nuits blanches
                        </td>
                        <td className="py-3 pr-4">
                          Veille au service d&apos;une âme confiée par Allah
                        </td>
                        <td className="py-3">
                          Comptées comme sadaqah, pardon des fautes
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Éducation quotidienne
                        </td>
                        <td className="py-3 pr-4">
                          Transmission de la foi, patience et persévérance
                        </td>
                        <td className="py-3">
                          Récompense continue (sadaqah jariya) tant que
                          l&apos;enfant pratique le bien
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La grossesse est un jihad de patience, récompensé par
                      l&apos;effacement des péchés.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;allaitement est un acte d&apos;adoration inscrit
                      dans le Coran pour deux années complètes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Chaque nuit blanche auprès de l&apos;enfant est une
                      forme de sadaqah auprès d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;intention sincère transforme chaque tâche
                      maternelle en acte de dévotion.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2026/01/La-maternite-dans-lislam-une-responsabilite-precieuse-et-spirituelle.jpg"
                    alt="La maternité comme acte d'adoration en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le mariage islamique : un contrat sacré et ses implications"
                  description="Découvrez les fondements du contrat de mariage en islam et les droits et devoirs des époux."
                  href="/mariage-islamique-contrat"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Le rôle éducatif de la mère */}
              {/* ============================================ */}
              <section id="role-educatif" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le rôle éducatif de la mère en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La mère est la première école de l&apos;enfant. Cette
                  expression, souvent attribuée au poète Hafiz Ibrahim, résume
                  une réalité profonde dans la culture islamique. Avant même
                  que l&apos;enfant ne prononce ses premiers mots, la mère
                  façonne son caractère, ses réflexes et sa perception du
                  monde. Son influence durant la petite enfance est reconnue
                  par les savants comme déterminante pour la suite du parcours
                  spirituel de l&apos;individu.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Transmettre la foi fait partie des premières responsabilités
                  de la mère musulmane. C&apos;est elle qui murmure les
                  premières invocations à l&apos;oreille du nouveau-né,
                  c&apos;est elle qui initie l&apos;enfant à{" "}
                  <Link href="/prier-islam-excellence-spirituelle" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la prière</Link>{" "}
                  par l&apos;exemple bien avant l&apos;âge de sept ans. Les
                  savants insistent sur le fait que l&apos;enfant apprend
                  davantage par l&apos;observation que par les discours : une
                  mère qui prie avec constance transmet la prière plus
                  sûrement que mille rappels verbaux.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Transmettre la foi et l&apos;amour d&apos;Allah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Par ses paroles, ses gestes et sa pratique quotidienne,
                        la mère est la première à ancrer dans le coeur de
                        l&apos;enfant l&apos;amour d&apos;Allah et de Son
                        Messager. Les récits des prophètes, les invocations du
                        matin et du soir, les premières sourates mémorisées :
                        tout commence par la mère.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Enseigner la prière et les valeurs morales
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a recommandé
                        d&apos;enseigner la prière aux enfants dès l&apos;âge
                        de sept ans. La mère joue un rôle central dans cette
                        initiation, en accompagnant l&apos;enfant avec douceur
                        et patience. Elle transmet aussi les valeurs de
                        générosité, d&apos;honnêteté, de respect et de
                        compassion qui forment le caractère du croyant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Être un modèle vivant de piété
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;enfant observe sa mère bien avant de comprendre
                        ses paroles. Une mère qui vit sa foi avec sincérité,
                        qui pardonne, qui fait preuve de patience dans
                        l&apos;adversité, qui aide son prochain, transmet un
                        héritage bien plus puissant que n&apos;importe quel
                        cours théorique. Ce rôle de modèle est valorisé par
                        les savants comme une sadaqah jariya dont les fruits
                        se perpétuent de génération en génération.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La formation du caractère de l&apos;enfant commence dès
                      les premiers mois de vie, sous l&apos;influence directe
                      de la mère.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La patience maternelle est une forme d&apos;enseignement
                      en soi : l&apos;enfant apprend à gérer ses émotions en
                      observant sa mère.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;éducation islamique de la mère se prolonge dans
                      la société : un enfant bien éduqué contribue au bien
                      commun.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les savants considèrent que la récompense de la mère
                      éducatrice se poursuit tant que ses enfants et
                      petits-enfants pratiquent le bien.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2026/01/La-maternite-dans-lislam-une-responsabilite-precieuse-et-spirituelle.jpg"
                    alt="Le rôle éducatif de la mère en islam et la transmission des valeurs"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Les défis contemporains */}
              {/* ============================================ */}
              <section id="defis-contemporains" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les défis contemporains de la maternité musulmane
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La maternité musulmane au XXIe siècle s&apos;inscrit dans un
                  contexte bien différent de celui des premières générations de
                  croyants. Les mères d&apos;aujourd&apos;hui font face à des
                  pressions multiples : concilier vie professionnelle et vie
                  familiale, résister aux injonctions sociales contradictoires,
                  préserver leur spiritualité dans un quotidien souvent
                  accéléré. Ces défis ne remettent pas en cause la noblesse de
                  la maternité en islam, mais ils appellent des réponses
                  adaptées et un soutien communautaire renforcé.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;équilibre entre le foyer et la vie professionnelle
                  est l&apos;un des sujets les plus discutés. L&apos;islam
                  n&apos;interdit pas à la femme de travailler, et de
                  nombreuses compagnes du Prophète (paix et salut sur lui)
                  exerçaient des activités économiques. Toutefois, les savants
                  rappellent que l&apos;intérêt de l&apos;enfant doit rester
                  au centre des choix familiaux, sans pour autant enfermer la
                  mère dans un rôle unique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Équilibre travail-famille :</strong> organiser
                      son temps avec sagesse, déléguer quand c&apos;est
                      possible, et ne pas culpabiliser face aux choix
                      personnels.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pression sociale :</strong> résister aux
                      comparaisons et aux jugements extérieurs, se recentrer
                      sur l&apos;intention (niyya) et la satisfaction
                      d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Soutien communautaire :</strong> les mosquées,
                      les associations et les cercles de femmes peuvent offrir
                      un espace d&apos;écoute et d&apos;entraide précieux pour
                      les mères.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Santé mentale :</strong> l&apos;islam valorise
                      la préservation de soi. La dépression post-partum, le
                      burn-out maternel et l&apos;anxiété ne sont pas des
                      faiblesses de foi, mais des réalités qui méritent un
                      accompagnement bienveillant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Outils modernes :</strong> les applications de
                      mémorisation du Coran, les cours en ligne et les
                      ressources éducatives numériques peuvent aider la mère
                      à poursuivre son apprentissage tout en gérant son foyer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Maintenir la spiritualité :</strong> même dans
                      la fatigue, quelques minutes de dhikr, une courte
                      lecture du Coran ou une invocation sincère suffisent à
                      nourrir le lien avec Allah.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le rôle du père est tout aussi déterminant dans cette
                  équation. Le Prophète (paix et salut sur lui) participait
                  aux tâches domestiques et s&apos;occupait de ses enfants
                  avec tendresse. Un foyer où les responsabilités sont
                  partagées permet à la mère de remplir son rôle éducatif et
                  spirituel dans les meilleures conditions. En cas de
                  séparation, la priorité maternelle dans la garde est
                  protégée par{" "}
                  <Link href="/droits-femme-divorce-islamique" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les droits de la femme dans le divorce islamique</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les droits de la femme en cas de divorce islamique"
                  description="Comprendre les droits et les protections de la femme dans la procédure de divorce en islam."
                  href="/droits-femme-divorce-islamique"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Protection et valorisation */}
              {/* ============================================ */}
              <section id="protection-valorisation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La protection et la valorisation de la mère
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si l&apos;islam élève la mère à un rang si noble, c&apos;est
                  aussi parce qu&apos;il lui accorde des droits concrets que
                  les enfants et la société doivent respecter. La valorisation
                  de la mère ne se limite pas à de belles paroles : elle se
                  traduit par des obligations précises inscrites dans le Coran
                  et la Sunna.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sourate Al-Isra (versets 23-24) est l&apos;un des
                  passages les plus poignants à ce sujet :
                  &laquo;&nbsp;Ton Seigneur a décrété que vous
                  n&apos;adoriez que Lui et que vous soyez bienfaisants envers
                  vos père et mère. Si l&apos;un d&apos;eux ou tous deux
                  atteignent la vieillesse auprès de toi, alors ne leur dis
                  point &quot;fi&quot; et ne les brusque pas, mais adresse-leur
                  des paroles respectueuses. Et par miséricorde, abaisse pour
                  eux l&apos;aile de l&apos;humilité et dis :
                  &quot;Seigneur, fais-leur miséricorde comme ils m&apos;ont
                  élevé tout petit.&quot;&nbsp;&raquo;
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset place la bonté envers les parents immédiatement
                  après l&apos;unicité d&apos;Allah (tawhid), ce qui souligne
                  son importance dans la hiérarchie des obligations islamiques.
                  Le mot &laquo;&nbsp;fi&nbsp;&raquo; (la plus petite
                  expression de mépris) est explicitement interdit, ce qui
                  montre à quel point la douceur envers la mère est exigée.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le droit à l&apos;entretien (nafaqa)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La mère a droit à l&apos;entretien financier de la
                        part de ses enfants lorsqu&apos;elle est dans le
                        besoin. Cette obligation est reconnue par l&apos;ensemble
                        des écoles juridiques islamiques. Subvenir aux besoins
                        de sa mère fait partie des actes les plus méritoires.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le devoir de bonté (birr al-walidayn)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La bonté envers les parents est l&apos;un des
                        commandements les plus répétés dans le Coran. Elle
                        englobe la douceur dans les paroles, la patience face
                        à leurs demandes, la présence régulière et
                        l&apos;attention portée à leur bien-être physique et
                        émotionnel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;accompagnement dans la vieillesse
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Coran insiste particulièrement sur le soin apporté
                        aux parents âgés. La mère qui a consacré sa jeunesse
                        à élever ses enfants mérite, en retour, un
                        accompagnement digne et affectueux. Le Prophète (paix
                        et salut sur lui) a prévenu que celui qui ne respecte
                        pas ses parents âgés s&apos;expose à un grand
                        préjudice spirituel.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Obéissance dans le bien (ma&apos;ruf) :</strong>{" "}
                      obéir à la mère dans tout ce qui ne contredit pas la
                      loi divine est un devoir reconnu.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invocations pour les parents :</strong> le Coran
                      enseigne de prier pour ses parents, vivants ou décédés,
                      et de demander à Allah de leur accorder Sa miséricorde.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Gratitude permanente :</strong> le remerciement
                      envers la mère est indissociable du remerciement envers
                      Allah. Le Prophète a dit : &laquo;&nbsp;Celui qui ne
                      remercie pas les gens ne remercie pas
                      Allah.&nbsp;&raquo;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Stabilité sociale :</strong> le respect de la
                      mère contribue à la cohésion familiale et, par
                      extension, à la stabilité de la société tout entière.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2026/01/La-maternite-dans-lislam-une-responsabilite-precieuse-et-spirituelle.jpg"
                    alt="La protection et la valorisation de la mère en islam selon le Coran"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION : Profils */}
              {/* ============================================ */}
              <section className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La maternité selon votre situation
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La maternité en islam se vit différemment selon l&apos;étape
                  de la vie. Que l&apos;on soit une future mère, une mère
                  active ou une grand-mère, les textes islamiques offrent des
                  repères et des encouragements adaptés à chaque réalité.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour la future mère
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La grossesse est une période bénie où chaque difficulté
                      endurée avec patience est récompensée. Les invocations
                      de protection pour le bébé, la lecture régulière du
                      Coran, le recours aux{" "}
                      <Link href="/remede-arabe-grossesse" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">remèdes naturels pour la grossesse</Link>{" "}
                      et le maintien d&apos;une alimentation saine
                      (conforme aux recommandations prophétiques) contribuent
                      à vivre cette étape avec sérénité et confiance en Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour la mère active
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Concilier travail, éducation et spiritualité est un défi
                      quotidien. L&apos;islam encourage l&apos;organisation, la
                      délégation et le soutien du conjoint. Chaque effort pour
                      subvenir aux besoins de sa famille tout en préservant
                      la foi de ses enfants est comptabilisé comme un acte
                      d&apos;adoration. La clé réside dans l&apos;intention
                      sincère et l&apos;équilibre.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour la grand-mère
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La grand-mère incarne la sagesse et la continuité de la
                      transmission. Son rôle dans le soutien de ses filles et
                      belles-filles, ses invocations pour la famille et son
                      expérience éducative sont des trésors inestimables. Le
                      Coran rappelle que le soin des parents âgés est un
                      devoir sacré, et la grand-mère mérite une place
                      d&apos;honneur au sein du foyer.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles sur la famille et la femme en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mariage-islamique-contrat"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Le mariage islamique
                  </Link>
                  <Link
                    href="/droits-femme-divorce-islamique"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Droits de la femme en cas de divorce
                  </Link>
                  <Link
                    href="/halal-haram-criteres"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Halal et haram : les critères en islam
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
