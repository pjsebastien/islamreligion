import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Dajjal (Antéchrist) en islam : description et signes de son apparition",
  description:
    "Qui est le Dajjal en islam ? Description physique, pouvoirs, signes précurseurs de son apparition, moyens de protection et défaite par Issa (Jésus) selon les hadiths authentiques.",
  alternates: {
    canonical: "https://www.islamreligion.fr/dajjal-signes-islam",
  },
};

const tocItems = [
  { id: "qui-est-dajjal", label: "Qui est le Dajjal" },
  { id: "description-pouvoirs", label: "Description et pouvoirs" },
  { id: "signes-precurseurs", label: "Signes précurseurs" },
  { id: "protection", label: "Moyens de protection" },
  { id: "defaite-issa", label: "La défaite par Issa (Jésus)" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Qui est le Dajjal en islam ?",
    answer:
      "Le Dajjal, de son nom complet al-Masih ad-Dajjal (le faux messie), est une figure eschatologique majeure dans la tradition islamique. Il s'agit d'un homme qui apparaîtra à la fin des temps, prétendant d'abord être un prophète puis se proclamant divinité. Tous les prophètes, depuis Noé (Nuh) jusqu'à Muhammad (paix et salut sur lui), ont mis en garde leurs communautés contre son épreuve. Le Prophète (paix et salut sur lui) l'a décrit comme la plus grande tentation (fitna) depuis la création d'Adam (Muslim).",
  },
  {
    question: "Le Dajjal est-il mentionné dans le Coran ?",
    answer:
      "Le Dajjal n'est pas mentionné explicitement par son nom dans le Coran. En revanche, il est abondamment décrit dans les hadiths authentiques des recueils de Bukhari, Muslim, Ahmad et Tirmidhi. Certains savants, comme Ibn Kathir, considèrent que des versets coraniques y font allusion de manière indirecte, notamment ceux traitant des épreuves de la fin des temps. La sourate Al-Kahf, dont la récitation protège du Dajjal, contient des récits qui préparent le croyant à affronter les tentations du pouvoir et de la tromperie.",
  },
  {
    question: "Quelle est la description physique du Dajjal ?",
    answer:
      "Selon les hadiths authentiques, le Dajjal est un jeune homme aux cheveux crépus et au teint rougeâtre. Son signe distinctif le plus connu est qu'il sera borgne : son oeil droit sera éteint, comparé à un grain de raisin flottant (Bukhari). Entre ses yeux sera inscrit le mot 'kafir' (mécréant), que tout musulman, lettré ou non, pourra lire (Muslim). Il sera de corpulence forte et marchera d'un pas lourd.",
  },
  {
    question: "Combien de temps durera le règne du Dajjal ?",
    answer:
      "Le Dajjal séjournera sur terre pendant quarante jours, mais ces jours ne seront pas ordinaires. Le premier jour durera comme une année, le deuxième comme un mois, le troisième comme une semaine, puis les trente-sept jours restants s'écouleront à un rythme normal. Les compagnons ont demandé au Prophète (paix et salut sur lui) si la prière d'un seul jour suffirait pour le jour qui dure une année, et il répondit : 'Non, estimez sa durée' (Muslim), indiquant qu'il faudra prier selon les horaires habituels répartis sur cette durée.",
  },
  {
    question: "Comment se protéger du Dajjal selon les hadiths ?",
    answer:
      "Le Prophète (paix et salut sur lui) a transmis plusieurs moyens de protection contre le Dajjal. La mémorisation et la récitation des dix premiers versets de sourate Al-Kahf constituent un rempart reconnu (Muslim). L'invocation de refuge contre l'épreuve du Dajjal dans le tashahhud de chaque prière est aussi recommandée. Le renforcement de la foi, la connaissance des attributs d'Allah (le Dajjal est borgne, Allah ne l'est pas), l'éloignement physique du Dajjal et le maintien des liens communautaires sont autant de protections transmises par la Sunna.",
  },
  {
    question: "Pourquoi la sourate Al-Kahf protège-t-elle du Dajjal ?",
    answer:
      "La sourate Al-Kahf contient quatre récits qui, chacun, abordent une épreuve fondamentale à laquelle le Dajjal soumettra les gens : l'épreuve de la foi (les gens de la caverne), l'épreuve de la richesse (le propriétaire des deux jardins), l'épreuve du savoir (Musa et Al-Khidr) et l'épreuve du pouvoir (Dhul-Qarnayn). En méditant ces récits, le croyant se prépare spirituellement à résister aux tentations que le Dajjal déploiera. Le Prophète (paix et salut sur lui) a dit : 'Quiconque mémorise les dix premiers versets de sourate Al-Kahf sera protégé contre le Dajjal' (Muslim).",
  },
  {
    question: "Qui tuera le Dajjal selon l'islam ?",
    answer:
      "C'est Issa (Jésus) fils de Maryam qui tuera le Dajjal. Selon le hadith rapporté par Muslim, Issa descendra près du minaret blanc à l'est de Damas, puis poursuivra le Dajjal jusqu'à la porte de Ludd (en Palestine) où il le tuera. Le Dajjal fondra devant Issa comme le sel fond dans l'eau. Cette défaite marquera la fin de la plus grande épreuve de l'humanité et l'instauration d'une ère de paix et de justice sous la gouvernance de Issa.",
  },
  {
    question: "Les signes du Dajjal sont-ils déjà visibles ?",
    answer:
      "Plusieurs signes précurseurs mentionnés dans les hadiths sont observables selon les savants contemporains : la multiplication des conflits, la dégradation morale, la propagation de la désinformation et la facilité de communication à travers le monde. Cependant, ces observations ne permettent pas de fixer une date pour l'apparition du Dajjal, car la science du moment exact de l'Heure appartient à Allah seul. L'attitude recommandée est la vigilance spirituelle constante, sans céder à l'alarmisme ni à la spéculation.",
  },
];

export default function DajjalSignes() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/dajjal-signes-islam/#article",
        headline:
          "Dajjal (Antéchrist) en islam : description et signes de son apparition",
        description:
          "Qui est le Dajjal en islam ? Description physique, pouvoirs, signes précurseurs, moyens de protection et défaite par Issa (Jésus) selon les hadiths authentiques.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Dajjal-Antechrist-en-islam-description-et-signes-de-son-apparition-1.jpg",
        datePublished: "2025-08-19",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/dajjal-signes-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/dajjal-signes-islam/#breadcrumb",
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
            name: "Le Dajjal en islam",
            item: "https://www.islamreligion.fr/dajjal-signes-islam",
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
          title="Dajjal (Antéchrist) en islam : description et signes de son apparition"
          subtitle="Comprendre la figure du Dajjal à la lumière des hadiths authentiques, ses caractéristiques, les signes de son apparition et les protections spirituelles transmises par le Prophète (paix et salut sur lui)."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Dajjal-Antechrist-en-islam-description-et-signes-de-son-apparition-1.jpg"
          imageAlt="Dajjal Antéchrist en islam, description et signes de son apparition"
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
                <span className="text-foreground">Le Dajjal en islam</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le Dajjal (al-Masih ad-Dajjal) occupe une place centrale
                  dans l&apos;eschatologie islamique. Tous les prophètes ont
                  mis en garde leurs communautés contre son épreuve, la plus
                  grande fitna depuis la création d&apos;Adam. Borgne,
                  marqué du mot &quot;kafir&quot; entre les yeux, il
                  déploiera des pouvoirs trompeurs pour égarer les gens. La
                  Sunna transmet des moyens de protection précis, notamment
                  la récitation de sourate Al-Kahf, et annonce sa défaite
                  finale par Issa (Jésus) fils de Maryam.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Qui est le Dajjal */}
              {/* ============================================ */}
              <section id="qui-est-dajjal" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qui est le Dajjal dans la tradition islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme &quot;Dajjal&quot; dérive de la racine arabe
                  &quot;dajala&quot; qui signifie &quot;couvrir&quot; ou
                  &quot;tromper&quot;. Son appellation complète, al-Masih
                  ad-Dajjal, se traduit par &quot;le faux messie&quot; ou
                  &quot;le messie imposteur&quot;. Cette figure
                  eschatologique représente l&apos;incarnation suprême de la
                  tromperie et de la séduction dans la tradition islamique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Bien que le Dajjal ne soit pas mentionné explicitement
                  dans le Coran, les hadiths authentiques lui consacrent un
                  nombre considérable de descriptions. Le Prophète Muhammad
                  (paix et salut sur lui) a déclaré : &quot;Il n&apos;y a
                  pas de prophète entre Nuh (Noé) et moi qui n&apos;ait mis
                  en garde sa communauté contre le Dajjal&quot; (Bukhari et
                  Muslim). Cette mise en garde universelle, répétée par
                  chaque prophète à travers les âges, témoigne de la
                  gravité de l&apos;épreuve à venir.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a précisé que le
                  Dajjal constitue la plus grande épreuve (fitna) que
                  l&apos;humanité ait jamais connue depuis la création
                  d&apos;Adam. Il figure parmi{" "}
                  <Link href="/signes-fin-monde-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les grands signes de la fin du monde en islam</Link>. Dans un hadith rapporté par Muslim, il
                  affirme : &quot;Entre la création d&apos;Adam et
                  l&apos;avènement de l&apos;Heure, il n&apos;y a pas de
                  création plus imposante [en termes d&apos;épreuve] que le
                  Dajjal.&quot; Cette dimension exceptionnelle explique
                  pourquoi le Prophète (paix et salut sur lui) a consacré
                  tant d&apos;enseignements à cette figure.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Selon les hadiths, le Dajjal apparaîtra d&apos;abord en
                  prétendant être un prophète, puis il élèvera ses
                  prétentions jusqu&apos;à se proclamer divinité. Il
                  parcourra la terre entière en quarante jours, séduisant
                  les foules par des prodiges qui imiteront les miracles
                  divins. Seules deux villes lui seront interdites
                  d&apos;accès : La Mecque et Médine, gardées par les anges
                  sur ordre d&apos;Allah (Bukhari).
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Étymologie :</strong> &quot;Dajjal&quot;
                      vient de &quot;dajala&quot; (couvrir, tromper),
                      al-Masih ad-Dajjal signifie &quot;le faux
                      messie&quot;.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Avertissement universel :</strong> tous les
                      prophètes, de Nuh à Muhammad (paix et salut sur lui),
                      ont prévenu leurs communautés (Bukhari et Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Absence dans le Coran :</strong> non mentionné
                      par son nom dans le texte coranique, mais décrit en
                      détail dans les recueils de hadiths authentiques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prétentions progressives :</strong> il se
                      présentera d&apos;abord comme prophète, puis comme
                      divinité.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Villes protégées :</strong> La Mecque et
                      Médine lui seront interdites, gardées par les anges
                      (Bukhari).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Dajjal-Antechrist-en-islam-description-et-signes-de-son-apparition-1.jpg"
                    alt="Qui est le Dajjal dans la tradition islamique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Description physique et pouvoirs */}
              {/* ============================================ */}
              <section id="description-pouvoirs" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Description physique et pouvoirs du Dajjal
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a décrit le Dajjal
                  avec une précision remarquable, afin que les croyants
                  puissent le reconnaître sans ambiguïté. Dans un hadith
                  rapporté par Bukhari, il le décrit comme un jeune homme
                  aux cheveux crépus (ja&apos;d), au teint rougeâtre, de
                  corpulence forte. Son signe le plus distinctif est
                  qu&apos;il sera borgne de l&apos;oeil droit, comparé à un
                  grain de raisin flottant (&quot;ka-annaha inaba
                  tafiya&quot;).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a également précisé
                  qu&apos;entre les yeux du Dajjal sera inscrit le mot
                  &quot;kafir&quot; (mécréant), en trois lettres arabes :
                  kaf, fa, ra. Ce hadith, rapporté par Muslim, ajoute une
                  dimension surnaturelle : &quot;Tout musulman le lira,
                  qu&apos;il soit lettré ou illettré.&quot; Cette
                  inscription divine servira de preuve irréfutable pour les
                  croyants sincères.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les pouvoirs du Dajjal seront spectaculaires et
                  trompeurs. Selon les hadiths rapportés par Muslim, il
                  ordonnera au ciel de pleuvoir et la pluie tombera. Il
                  ordonnera à la terre de faire pousser ses cultures et
                  elles pousseront. Il disposera de ce qui ressemblera à un
                  paradis et un enfer, mais la réalité sera inversée : son
                  paradis sera en réalité un enfer, et son enfer sera un
                  paradis. Le Prophète (paix et salut sur lui) a conseillé
                  à celui qui sera confronté à cette épreuve de choisir ce
                  qui lui paraît être le feu, car ce sera en réalité le
                  paradis (Muslim).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parmi ses autres manifestations, le Dajjal tuera un
                  homme puis le fera revenir à la vie (en apparence).
                  Les savants expliquent que ce prodige sera accompli par
                  l&apos;intermédiaire d&apos;un djinn qui prendra
                  l&apos;apparence de la personne tuée, et non par une
                  véritable résurrection qui appartient à Allah seul. Il
                  enrichira ceux qui le suivront et appauvrira ceux qui le
                  rejetteront, testant ainsi la foi des gens par
                  l&apos;attrait des biens matériels.
                </p>

                {/* Tableau description physique */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Caractéristique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Description
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Source
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Oeil droit
                        </td>
                        <td className="py-3 pr-4">
                          Borgne, oeil éteint comparé à un grain de raisin
                          flottant
                        </td>
                        <td className="py-3">Bukhari</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Inscription frontale
                        </td>
                        <td className="py-3 pr-4">
                          Le mot &quot;kafir&quot; (kaf, fa, ra) entre les
                          yeux, lisible par tout musulman
                        </td>
                        <td className="py-3">Muslim</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Cheveux
                        </td>
                        <td className="py-3 pr-4">
                          Crépus et abondants (ja&apos;d)
                        </td>
                        <td className="py-3">Bukhari</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Teint
                        </td>
                        <td className="py-3 pr-4">
                          Rougeâtre (ahmar)
                        </td>
                        <td className="py-3">Bukhari</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Corpulence
                        </td>
                        <td className="py-3 pr-4">
                          Forte, de grande stature
                        </td>
                        <td className="py-3">Muslim</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Démarche
                        </td>
                        <td className="py-3 pr-4">
                          Pas lourd, balancement caractéristique
                        </td>
                        <td className="py-3">Ahmad</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a également établi
                  une distinction fondamentale pour que les croyants ne
                  soient pas trompés : &quot;Votre Seigneur n&apos;est pas
                  borgne, or le Dajjal est borgne de l&apos;oeil
                  droit&quot; (Bukhari et Muslim). Cette indication simple
                  mais puissante rappelle que les attributs d&apos;Allah
                  sont la perfection absolue, tandis que le Dajjal porte
                  en lui-même la preuve de son imposture.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Fausse pluie et fausse abondance
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Dajjal ordonnera au ciel de pleuvoir sur ceux
                        qui le suivent, et leurs troupeaux prospéreront.
                        Ceux qui le rejettent verront leurs biens diminuer
                        et la sécheresse s&apos;abattre sur eux. Ce pouvoir
                        testera la sincérité de la foi face à la pression
                        matérielle (Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Simulation de résurrection
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il tuera un homme puis le fera apparemment revivre.
                        Les savants expliquent qu&apos;un djinn prendra
                        l&apos;apparence de la victime, car la véritable
                        résurrection appartient à Allah seul. Ce prodige
                        séduira ceux dont la foi est fragile (Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Paradis et enfer inversés
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Dajjal disposera de deux fleuves : l&apos;un
                        apparaîtra comme une eau limpide (en réalité un
                        feu), l&apos;autre comme un feu brûlant (en
                        réalité une eau fraîche). Le Prophète (paix et
                        salut sur lui) a recommandé de choisir ce qui
                        ressemble au feu, car ce sera la véritable eau
                        (Muslim).
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Sa rapidité de déplacement est comparée à une pluie
                      poussée par le vent, il parcourra toute la terre en
                      40 jours (Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Il sera suivi par 70 000 juifs d&apos;Ispahan portant
                      des manteaux verts selon le hadith rapporté par Muslim.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La distinction claire entre Allah (qui n&apos;est pas
                      borgne) et le Dajjal (qui l&apos;est) est un critère
                      de discernement transmis par le Prophète (Bukhari et
                      Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Ses pouvoirs ne relèvent pas du miracle divin, mais
                      d&apos;une permission d&apos;Allah pour éprouver la
                      foi des serviteurs.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Dajjal-Antechrist-en-islam-description-et-signes-de-son-apparition-1.jpg"
                    alt="Description physique et pouvoirs du Dajjal selon les hadiths"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Signes précurseurs */}
              {/* ============================================ */}
              <section id="signes-precurseurs" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les signes précurseurs de son apparition
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;apparition du Dajjal ne surviendra pas de manière
                  soudaine. Les hadiths authentiques décrivent une série de
                  signes précurseurs et de conditions qui prépareront le
                  terrain à son émergence. Le Prophète (paix et salut sur
                  lui) a décrit ces signes pour que les croyants puissent
                  reconnaître l&apos;époque et renforcer leur préparation
                  spirituelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parmi les signes les plus marquants, le Prophète (paix et
                  salut sur lui) a annoncé trois années de famine qui
                  précéderont l&apos;apparition du Dajjal. Lors de la
                  première année, Allah ordonnera au ciel de retenir un
                  tiers de sa pluie et à la terre de retenir un tiers de
                  ses cultures. La deuxième année, les deux tiers seront
                  retenus. La troisième année, toute pluie cessera et
                  aucune végétation ne poussera. Les croyants survivront
                  alors par le tasbih (glorification d&apos;Allah), le
                  tahlil (attestation de l&apos;unicité d&apos;Allah) et le
                  takbir (proclamation de la grandeur d&apos;Allah), qui
                  tiendront lieu de nourriture pour eux (Ahmad).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La multiplication des conflits armés, la dégradation
                  morale, l&apos;abandon des valeurs religieuses et la
                  propagation du mensonge figurent parmi{" "}
                  <Link href="/signes-mineurs-actuels" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les signes précurseurs déjà observables</Link>{" "}
                  qui caractériseront cette époque. Le Prophète (paix et salut
                  sur lui) a dit : &quot;Le Dajjal sortira à un moment de
                  colère&quot; (Muslim), indiquant que son apparition
                  coïncidera avec une période de troubles généralisés et de
                  perte de repères.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La facilité de déplacement et de communication à travers
                  le monde, la séduction par les biens matériels et la
                  capacité de manipulation des masses sont autant de
                  conditions que les savants contemporains mettent en
                  relation avec les descriptions prophétiques. Sans tomber
                  dans la spéculation, ces éléments rappellent la nécessité
                  d&apos;une vigilance constante face aux formes modernes
                  de tromperie et de désinformation.
                </p>

                {/* Tableau signes précurseurs */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signe précurseur
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Description
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Source
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Trois années de famine
                        </td>
                        <td className="py-3 pr-4">
                          Réduction progressive de la pluie et des cultures
                          sur trois ans avant son apparition
                        </td>
                        <td className="py-3">Ahmad</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Multiplication des conflits
                        </td>
                        <td className="py-3 pr-4">
                          Guerres, chaos, perte de repères, période de
                          colère généralisée
                        </td>
                        <td className="py-3">Muslim</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Dégradation morale
                        </td>
                        <td className="py-3 pr-4">
                          Abandon des valeurs, propagation du mensonge,
                          trahison des dépôts de confiance
                        </td>
                        <td className="py-3">Bukhari</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Disparition du savoir religieux
                        </td>
                        <td className="py-3 pr-4">
                          Mort des savants, ignorance répandue, éloignement
                          des sources authentiques
                        </td>
                        <td className="py-3">Bukhari et Muslim</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Facilité des déplacements
                        </td>
                        <td className="py-3 pr-4">
                          Rapprochement des distances, le Dajjal parcourra
                          la terre comme une pluie poussée par le vent
                        </td>
                        <td className="py-3">Muslim</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Séduction matérielle
                        </td>
                        <td className="py-3 pr-4">
                          Abondance trompeuse pour ses partisans, pauvreté
                          pour ceux qui le rejettent
                        </td>
                        <td className="py-3">Muslim</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Lieu d&apos;apparition :</strong> selon les
                      hadiths, le Dajjal apparaîtra entre la Syrie et
                      l&apos;Irak, dans une voie de Khorassan (Tirmidhi).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Contexte de désespoir :</strong> la famine et
                      le chaos pousseront les gens à chercher un sauveur,
                      facilitant la tromperie du Dajjal.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rôle de la technologie :</strong> les savants
                      contemporains rappellent que les moyens de
                      communication modernes pourraient amplifier la
                      portée de la séduction du Dajjal.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Attitude recommandée :</strong> vigilance
                      spirituelle constante, sans alarmisme ni spéculation
                      sur les dates.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les 10 grands signes de la fin du monde en islam"
                  description="Replacer le Dajjal dans le contexte des signes majeurs de la fin des temps selon la Sunna authentique."
                  href="/signes-fin-monde-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Moyens de protection */}
              {/* ============================================ */}
              <section id="protection" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les moyens de protection contre le Dajjal
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) n&apos;a pas
                  seulement décrit le Dajjal et ses épreuves, il a
                  également transmis des moyens de protection concrets et
                  accessibles à tout croyant. Ces protections combinent la
                  récitation coranique, les invocations spécifiques, le
                  renforcement de la foi et des conseils pratiques de
                  comportement.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le premier rempart est la sourate Al-Kahf. Le Prophète
                  (paix et salut sur lui) a dit : &quot;Quiconque mémorise
                  les dix premiers versets de sourate Al-Kahf sera protégé
                  contre le Dajjal&quot; (Muslim). Dans une autre version,
                  ce sont les dix derniers versets qui sont mentionnés.
                  Certains savants recommandent la mémorisation des deux
                  passages pour une protection renforcée. La sagesse de
                  cette sourate réside dans les quatre grandes épreuves
                  qu&apos;elle traite : la foi, la richesse, le savoir et
                  le pouvoir, qui sont précisément les terrains
                  d&apos;action du Dajjal.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;invocation de refuge contre le Dajjal fait partie
                  intégrante du tashahhud dans la prière. Le Prophète (paix
                  et salut sur lui) enseignait : &quot;Lorsque l&apos;un de
                  vous termine le tashahhud, qu&apos;il demande la
                  protection d&apos;Allah contre quatre choses : le
                  châtiment de l&apos;enfer, le châtiment de la tombe,
                  l&apos;épreuve de la vie et de la mort, et l&apos;épreuve
                  du Masih ad-Dajjal&quot; (Muslim). Cette invocation
                  régulière, répétée à chaque prière, ancre la conscience
                  de cette épreuve dans la pratique quotidienne.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter sourate Al-Kahf (premiers et derniers
                        versets)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La mémorisation et la récitation régulière des dix
                        premiers versets (ou des dix derniers, selon les
                        versions du hadith) de sourate Al-Kahf constituent
                        la protection la plus explicite transmise par le
                        Prophète (paix et salut sur lui) contre le Dajjal
                        (Muslim). La lecture de cette sourate chaque
                        vendredi est également recommandée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Invoquer Allah dans le tashahhud
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La demande de refuge contre le Dajjal dans le
                        tashahhud de chaque prière (cinq fois par jour)
                        maintient la vigilance spirituelle. Le Prophète
                        (paix et salut sur lui) a recommandé de demander
                        protection contre quatre épreuves, dont celle du
                        Masih ad-Dajjal (Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Renforcer la foi et la connaissance d&apos;Allah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le croyant qui connaît les attributs d&apos;Allah
                        (la perfection absolue) ne sera pas trompé par un
                        être borgne et imparfait. L&apos;étude du tawhid
                        (unicité divine), la compréhension des noms et
                        attributs d&apos;Allah et l&apos;approfondissement
                        du savoir religieux constituent un bouclier
                        intellectuel et spirituel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        S&apos;éloigner physiquement du Dajjal
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a conseillé à
                        celui qui entend parler du Dajjal de s&apos;en
                        éloigner autant que possible. Car une personne
                        viendra vers lui en pensant être ferme dans sa foi,
                        puis se laissera séduire par ses prodiges
                        (Abu Dawud). La prudence est une forme de sagesse,
                        non de lâcheté.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Maintenir les liens communautaires
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;isolement fragilise le croyant face aux
                        épreuves. Le Prophète (paix et salut sur lui) a
                        recommandé de rester attaché au groupe des
                        musulmans et à leur imam. La solidarité
                        communautaire, la consultation des savants et le
                        soutien mutuel renforcent la résilience collective
                        face à la séduction du Dajjal (Tirmidhi).
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La constance dans{" "}
                      <Link href="/prier-islam-excellence-spirituelle" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la prière quotidienne</Link>{" "}
                      forge une
                      discipline spirituelle qui protège des tentations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le jeûne régulier purifie le coeur et renforce la
                      capacité de résistance face aux attraits matériels.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;aumône (sadaqa) détache le croyant de
                      l&apos;amour des biens, réduisant la prise du Dajjal
                      sur son coeur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;éducation religieuse des enfants prépare les
                      générations futures à reconnaître la tromperie.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La méditation des quatre récits de sourate Al-Kahf
                      (la caverne, les deux jardins, Musa et Al-Khidr,
                      Dhul-Qarnayn) prépare le croyant aux quatre épreuves
                      du Dajjal.
                    </span>
                  </li>
                </ul>

                {/* Tableau protections */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Moyen de protection
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Pratique concrète
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Source
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Sourate Al-Kahf
                        </td>
                        <td className="py-3 pr-4">
                          Mémoriser les 10 premiers versets, lire la sourate
                          chaque vendredi
                        </td>
                        <td className="py-3">Muslim</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Invocation du tashahhud
                        </td>
                        <td className="py-3 pr-4">
                          Demander refuge contre l&apos;épreuve du Dajjal
                          dans chaque prière
                        </td>
                        <td className="py-3">Muslim</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Connaissance du tawhid
                        </td>
                        <td className="py-3 pr-4">
                          Étudier les attributs d&apos;Allah pour ne pas
                          confondre le Créateur et l&apos;imposteur
                        </td>
                        <td className="py-3">Bukhari et Muslim</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Éloignement physique
                        </td>
                        <td className="py-3 pr-4">
                          Fuir le Dajjal, ne pas s&apos;approcher par
                          curiosité
                        </td>
                        <td className="py-3">Abu Dawud</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Solidarité communautaire
                        </td>
                        <td className="py-3 pr-4">
                          Rester dans le groupe des musulmans, consulter les
                          savants
                        </td>
                        <td className="py-3">Tirmidhi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Dajjal-Antechrist-en-islam-description-et-signes-de-son-apparition-1.jpg"
                    alt="Les moyens de protection contre le Dajjal selon les hadiths authentiques"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : La défaite du Dajjal par Issa */}
              {/* ============================================ */}
              <section id="defaite-issa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La défaite du Dajjal par Issa (Jésus)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;épreuve du Dajjal, aussi terrible soit-elle,
                  trouvera sa fin par l&apos;intervention divine à travers{" "}
                  <Link href="/retour-jesus-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la descente de Issa (Jésus) fils de Maryam</Link>. Le Prophète
                  (paix et salut sur lui) a décrit avec précision les
                  circonstances de cette descente et la confrontation
                  finale entre Issa et le Dajjal. Ce récit porte un message
                  de confiance : la tromperie ne triomphera pas, et la
                  vérité finira toujours par s&apos;imposer par la volonté
                  d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Selon le hadith rapporté par Muslim, Issa descendra près
                  du minaret blanc à l&apos;est de Damas, posant ses mains
                  sur les ailes de deux anges. Lorsqu&apos;il baissera la
                  tête, des gouttes en tomberont comme des perles, et
                  lorsqu&apos;il la relèvera, des perles en ruisselleront.
                  Tout mécréant qui percevra son souffle mourra, et son
                  souffle s&apos;étendra aussi loin que porte son regard.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Dajjal, en apprenant la descente de Issa, prendra la
                  fuite. Issa le poursuivra jusqu&apos;à la porte de Ludd
                  (Lydda, en Palestine actuelle) où il le rattrapera et le
                  tuera. Le Prophète (paix et salut sur lui) a dit que le
                  Dajjal fondra devant Issa &quot;comme le sel fond dans
                  l&apos;eau&quot; (Muslim). Même si Issa le laissait, le
                  Dajjal se dissoudrait de lui-même, mais Issa le tuera de
                  sa propre main, et il montrera son sang sur sa lance aux
                  croyants comme preuve de sa victoire.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Concernant la durée du séjour du Dajjal, le hadith
                  rapporté par Muslim précise quarante jours dont le premier
                  équivaut à une année, le deuxième à un mois et le
                  troisième à une semaine. Les compagnons ont interrogé le
                  Prophète (paix et salut sur lui) sur la prière durant le
                  jour qui dure une année. Il répondit : &quot;Estimez sa
                  durée&quot;, ordonnant ainsi de répartir les prières sur
                  la durée réelle de ce jour prolongé plutôt que de se
                  contenter des prières d&apos;un seul jour ordinaire.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Après la défaite du Dajjal, une ère de paix et de justice
                  s&apos;instaurera sous la gouvernance de Issa. Le
                  Prophète (paix et salut sur lui) a décrit cette période
                  comme un temps où les richesses abonderont au point que
                  personne n&apos;acceptera l&apos;aumône, où les inimitiés
                  et les jalousies disparaîtront, et où la paix régnera sur
                  toute la terre. Issa brisera la croix, abolira la jizyah
                  et gouvernera selon la loi islamique (Muslim).
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La descente de Issa près de Damas
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Issa descendra au minaret blanc, à l&apos;est de
                        Damas, vêtu de deux vêtements teints au safran,
                        posant ses mains sur les ailes de deux anges. Sa
                        descente surviendra au moment de la prière de
                        l&apos;aube (fajr), et il priera derrière
                        l&apos;imam des musulmans, confirmant ainsi son
                        rattachement à la communauté de Muhammad (paix et
                        salut sur lui) (Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La poursuite et la mise à mort du Dajjal
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Issa partira à la poursuite du Dajjal qui fuira en
                        direction de la Palestine. Il le rattrapera à la
                        porte de Ludd (Lydda) et le tuera avec sa lance. Le
                        Dajjal fondra comme le sel dans l&apos;eau. Issa
                        montrera le sang sur sa lance aux croyants comme
                        preuve de la victoire définitive de la vérité sur
                        l&apos;imposture (Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;ère de paix et de justice
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Après la défaite du Dajjal et l&apos;élimination
                        de la menace de{" "}
                        <Link href="/gog-magog-liberation-fin-des-temps" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Gog et Magog</Link>{" "}
                        (par l&apos;invocation
                        de Issa), une période de prospérité et de
                        tranquillité s&apos;installera. Les biens
                        abonderont, la justice régnera, et les coeurs
                        seront débarrassés de la rancune et de la jalousie.
                        Issa vivra sur terre pendant un temps décrété par
                        Allah, puis il mourra et les musulmans prieront sur
                        lui (Ahmad).
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Issa ne viendra pas en tant que nouveau prophète, mais
                      en tant que membre de la communauté de Muhammad (paix
                      et salut sur lui), gouvernant selon la loi islamique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La défaite du Dajjal confirme que la tromperie, aussi
                      puissante soit-elle en apparence, ne peut résister à
                      la vérité divine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;ère de paix après le Dajjal rappelle que la
                      miséricorde d&apos;Allah finit toujours par
                      prévaloir sur les épreuves.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Ce récit prophétique invite le croyant à la patience
                      et à la confiance en Allah, même dans les moments les
                      plus sombres.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le retour de Jésus (Issa) en islam"
                  description="Approfondir le rôle de Issa fils de Maryam dans l'eschatologie islamique et les détails de sa descente."
                  href="/retour-jesus-islam"
                />

                {/* Profils de lecteurs */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le jeune musulman
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Comprendre la figure du Dajjal renforce la conscience
                      de la foi face aux nombreuses formes de tromperie
                      modernes. La mémorisation de sourate Al-Kahf et la
                      régularité dans la prière sont des pratiques
                      accessibles qui construisent une forteresse
                      spirituelle dès le plus jeune âge. Le savoir
                      prophétique donne une vision claire et rassurante de
                      l&apos;avenir.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le parent éducateur
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Transmettre la connaissance du Dajjal aux enfants
                      demande mesure et sagesse. L&apos;accent doit porter
                      sur la confiance en Allah et les moyens de protection,
                      plutôt que sur la peur. Expliquer les attributs
                      d&apos;Allah par contraste avec les défauts du Dajjal
                      est un excellent moyen d&apos;enseigner le tawhid de
                      manière concrète.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le chercheur de vérité
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;eschatologie islamique offre un récit
                      structuré et détaillé de la fin des temps, fondé sur
                      des sources authentifiées par les savants du hadith.
                      La figure du Dajjal, loin d&apos;être un mythe, est
                      documentée par des chaînes de transmission rigoureuses
                      et un consensus des savants sur sa réalité à venir.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le pratiquant régulier
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La connaissance du Dajjal enrichit la pratique
                      quotidienne. L&apos;invocation dans le tashahhud
                      prend tout son sens, la lecture de sourate Al-Kahf
                      le vendredi devient un acte de protection conscient,
                      et la solidarité communautaire se révèle comme un
                      pilier face aux épreuves annoncées. Chaque acte
                      d&apos;adoration est un bouclier.
                    </p>
                  </div>
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour approfondir la préparation spirituelle face à la fin des temps"
                  href="/fin-monde-islam-preparation"
                  linkText="Voir le programme de préparation spirituelle"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sujets liés à l&apos;eschatologie islamique
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/signes-fin-monde-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Signes de la fin du monde en islam
                  </Link>
                  <Link
                    href="/retour-jesus-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Le retour de Jésus (Issa) en islam
                  </Link>
                  <Link
                    href="/fin-monde-islam-preparation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Préparation à la fin des temps
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
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Protection contre la sorcellerie
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
