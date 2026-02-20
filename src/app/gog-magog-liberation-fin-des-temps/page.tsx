import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Gog et Magog (Yajouj Majouj) : leur libération avant la fin des temps",
  description:
    "Découvrez qui sont Gog et Magog (Yajouj et Majouj) en islam, le mur de Dhul-Qarnayn, leur libération à la fin des temps et les enseignements spirituels pour le croyant.",
  alternates: {
    canonical:
      "https://www.islamreligion.fr/gog-magog-liberation-fin-des-temps",
  },
};

const tocItems = [
  { id: "qui-sont-gog-magog", label: "Qui sont Gog et Magog" },
  { id: "mur-dhul-qarnayn", label: "Le mur de Dhul-Qarnayn" },
  { id: "liberation-fin-des-temps", label: "La libération à la fin des temps" },
  { id: "destruction-intervention", label: "Destruction et intervention divine" },
  { id: "enseignements", label: "Enseignements spirituels" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Qui sont Gog et Magog (Yajouj et Majouj) en islam ?",
    answer:
      "Gog et Magog, appelés Yajouj et Majouj en arabe, sont deux tribus descendant de Yaafith (Japhet), fils du prophète Nouh (Noé). Le Coran les mentionne dans les sourates Al-Kahf (18:92-99) et Al-Anbiya (21:96). Ces peuples sont décrits comme des créatures puissantes, nombreuses et destructrices, emprisonnées derrière un mur construit par Dhul-Qarnayn.",
  },
  {
    question: "Où Gog et Magog sont-ils mentionnés dans le Coran ?",
    answer:
      "Gog et Magog sont mentionnés à deux reprises dans le Coran. La première mention se trouve dans la sourate Al-Kahf (18:92-99), où Allah relate le récit de Dhul-Qarnayn et la construction du mur. La seconde apparaît dans la sourate Al-Anbiya (21:96), qui évoque leur libération comme signe de la fin des temps.",
  },
  {
    question: "Où se trouve le mur de Dhul-Qarnayn ?",
    answer:
      "L&apos;emplacement exact du mur de Dhul-Qarnayn reste un sujet de débat parmi les savants musulmans. Le Coran décrit sa construction entre deux montagnes, à partir de fer et de cuivre fondu. Plusieurs hypothèses situent ce mur dans les régions du Caucase, de l&apos;Asie centrale ou de la Chine, mais aucune localisation définitive n&apos;a été établie de manière consensuelle.",
  },
  {
    question: "Quand Gog et Magog seront-ils libérés ?",
    answer:
      "Selon les hadiths authentiques rapportés par Muslim et Bukhari, Gog et Magog seront libérés après la descente de &apos;Issa (Jésus) sur terre et sa victoire sur le Dajjal (l&apos;Antéchrist). Leur libération fait partie des grands signes annonciateurs de l&apos;Heure.",
  },
  {
    question:
      "Comment les croyants peuvent-ils se protéger de Gog et Magog ?",
    answer:
      "Face à l&apos;invasion de Gog et Magog, le Prophète &apos;Issa (Jésus) recevra la révélation de se réfugier avec les croyants sur le mont Tour (Sinaï). La protection véritable vient d&apos;Allah par l&apos;invocation, la patience et la confiance absolue en Sa sagesse. Le croyant est invité à multiplier les prières et les invocations de protection.",
  },
  {
    question: "Quelle est la taille et le nombre de Gog et Magog ?",
    answer:
      "Les hadiths décrivent Gog et Magog comme des peuples extrêmement nombreux. Un hadith rapporté par Muslim indique que pour chaque être humain envoyé au Paradis, mille seront envoyés en Enfer, et la majorité d&apos;entre eux seront de Gog et Magog. Leur nombre dépasse toute capacité humaine de résistance.",
  },
  {
    question: "Quel est le rôle de &apos;Issa (Jésus) face à Gog et Magog ?",
    answer:
      "Après avoir vaincu le Dajjal, le Prophète &apos;Issa (Jésus) recevra la révélation divine l&apos;informant de la libération imminente de Gog et Magog. Il sera guidé par Allah pour se réfugier avec les croyants sur le mont Tour. Il invoquera ensuite Allah avec ferveur, et Allah répondra en envoyant un fléau (des insectes appelés naghaf) qui anéantira Gog et Magog.",
  },
  {
    question:
      "Quelle attitude le croyant doit-il adopter face aux signes de la fin des temps ?",
    answer:
      "Le croyant est appelé à renforcer sa foi, à multiplier les actes d&apos;adoration et à placer sa confiance totale en Allah. L&apos;étude des signes de la fin des temps ne doit pas susciter la peur, mais plutôt éveiller la vigilance spirituelle, encourager le repentir sincère et renforcer la solidarité communautaire.",
  },
];

export default function GogMagog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/gog-magog-liberation-fin-des-temps/#article",
        headline:
          "Gog et Magog (Yajouj Majouj) : leur libération avant la fin des temps",
        description:
          "Découvrez qui sont Gog et Magog (Yajouj et Majouj) en islam, le mur de Dhul-Qarnayn, leur libération à la fin des temps et les enseignements spirituels pour le croyant.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Gog-et-Magog-Yajouj-Majouj-leur-liberation-avant-la-fin-des-temps-1.jpg",
        datePublished: "2025-08-19",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/gog-magog-liberation-fin-des-temps/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/gog-magog-liberation-fin-des-temps/#breadcrumb",
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
            name: "Gog et Magog",
            item: "https://www.islamreligion.fr/gog-magog-liberation-fin-des-temps",
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
          title="Gog et Magog (Yajouj Majouj) : leur libération avant la fin des temps"
          subtitle="Qui sont Yajouj et Majouj, le mur de Dhul-Qarnayn, leur libération et la sagesse divine selon le Coran et la Sunna."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Gog-et-Magog-Yajouj-Majouj-leur-liberation-avant-la-fin-des-temps-1.jpg"
          imageAlt="Gog et Magog (Yajouj Majouj), leur libération avant la fin des temps"
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
                <span className="text-foreground">Gog et Magog</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Gog et Magog (Yajouj et Majouj) comptent parmi les signes
                  majeurs de la fin des temps en islam. Tribus descendant de
                  Yaafith, fils de Nouh, elles furent emprisonnées derrière un
                  mur de fer et de cuivre érigé par Dhul-Qarnayn. Leur
                  libération, qui surviendra après le retour de &apos;Issa
                  (Jésus) et sa victoire sur le Dajjal, plongera la terre dans
                  le chaos avant qu&apos;Allah ne les anéantisse par Sa volonté.
                  Ce récit porte des enseignements profonds sur la patience, la
                  confiance en Allah et la préparation spirituelle du croyant.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Qui sont Gog et Magog */}
              {/* ============================================ */}
              <section id="qui-sont-gog-magog" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qui sont Gog et Magog dans la tradition islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le nom arabe de Gog et Magog, Yajouj et Majouj, dérive de
                  racines évoquant le feu ardent ou l&apos;agitation violente.
                  Ces deux peuples occupent une place singulière dans
                  l&apos;eschatologie islamique. Descendant de Yaafith (Japhet),
                  fils du prophète Nouh (Noé), ils sont mentionnés dans le Coran
                  comme des créatures dont la puissance et le nombre dépassent
                  toute mesure humaine.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah les évoque à deux reprises dans Son Livre. La sourate
                  Al-Kahf (18:92-99) relate le périple de Dhul-Qarnayn, ce roi
                  juste qui découvrit un peuple opprimé par Gog et Magog et
                  construisit une barrière pour les contenir. La sourate
                  Al-Anbiya (21:96) annonce leur libération comme un signe
                  majeur précédant le Jour du Jugement : « Jusqu&apos;à ce que
                  soient relâchés les Yajouj et les Majouj et qu&apos;ils se
                  précipitent de chaque hauteur. »
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de la tradition islamique s&apos;accordent sur
                  plusieurs caractéristiques de ces peuples. Ils sont décrits
                  comme extrêmement nombreux, au point qu&apos;un hadith
                  rapporté par Muslim précise que pour chaque être humain envoyé
                  au Paradis, mille seront envoyés en Enfer, et la grande
                  majorité de ceux-ci seront de Gog et Magog. Leur force de
                  destruction est telle que nul ne pourra leur résister lorsque
                  le mur sera percé.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Origine :</strong> descendants de Yaafith
                      (Japhet), fils du prophète Nouh (Noé), selon la tradition.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Mentions coraniques :</strong> sourate Al-Kahf
                      (18:92-99) et sourate Al-Anbiya (21:96).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Nombre :</strong> si considérable qu&apos;il
                      dépasse toute estimation humaine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Nature :</strong> peuples puissants, destructeurs,
                      que nul ne peut combattre par la force.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rôle eschatologique :</strong> leur libération est
                      l&apos;un des grands signes de l&apos;approche de
                      l&apos;Heure.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Gog-et-Magog-Yajouj-Majouj-leur-liberation-avant-la-fin-des-temps-1.jpg"
                    alt="Gog et Magog dans la tradition islamique, Yajouj et Majouj dans le Coran"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Le mur de Dhul-Qarnayn */}
              {/* ============================================ */}
              <section id="mur-dhul-qarnayn" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le mur de Dhul-Qarnayn : une barrière de fer et de cuivre
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le récit de Dhul-Qarnayn figure parmi les passages les plus
                  saisissants de la sourate Al-Kahf. Ce roi pieux, dont
                  l&apos;identité exacte fait l&apos;objet de discussions
                  savantes, parcourut la terre d&apos;est en ouest. Lors de son
                  troisième voyage, il atteignit une vallée encaissée entre deux
                  montagnes, où il rencontra un peuple qui ne comprenait presque
                  aucun langage.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce peuple, accablé par les ravages de Gog et Magog, implora
                  Dhul-Qarnayn de construire une barrière pour les protéger. Le
                  Coran détaille avec précision la méthode de construction :
                  « Apportez-moi des blocs de fer. Puis, lorsqu&apos;il eut
                  comblé l&apos;espace entre les deux parois, il dit :
                  Soufflez ! Puis, lorsqu&apos;il l&apos;eut rendu comme du
                  feu, il dit : Apportez-moi du cuivre fondu, que je le
                  déverse dessus » (Coran 18:96).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette construction n&apos;est pas une simple prouesse
                  d&apos;ingénierie. Elle illustre la confiance de
                  Dhul-Qarnayn en Allah, car il déclara après avoir achevé le
                  mur : « C&apos;est une miséricorde de mon Seigneur. Mais
                  lorsque la promesse de mon Seigneur viendra, Il le nivellera,
                  et la promesse de mon Seigneur est vérité » (Coran 18:98).
                  Dhul-Qarnayn lui-même reconnaissait le caractère temporaire de
                  cette barrière, soumise à la volonté divine.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La demande du peuple opprimé
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un peuple vivant entre deux montagnes supplia
                        Dhul-Qarnayn de les protéger contre les incursions
                        destructrices de Gog et Magog. Ils proposèrent de
                        contribuer financièrement à la construction.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La construction du mur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Dhul-Qarnayn refusa leur argent et demanda uniquement
                        leur force physique. Il fit entasser des blocs de fer
                        entre les deux montagnes, les fit chauffer au rouge,
                        puis versa du cuivre fondu pour sceller le tout en une
                        barrière infranchissable (Coran 18:93-98).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le creusement quotidien et la condition divine
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un hadith rapporté par Ahmad et Ibn Majah décrit comment
                        Gog et Magog creusent le mur chaque jour, parvenant
                        presque à le percer. Leur chef dit alors : « Revenez
                        demain, vous finirez. » Mais le lendemain, Allah
                        restaure le mur comme avant. Lorsque viendra le moment
                        décrété, leur chef dira : « Revenez demain, in sha
                        Allah (si Dieu le veut), vous finirez. » Et cette
                        fois, le mur restera entamé.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le mur est composé de fer chauffé et recouvert de cuivre
                      fondu, le rendant impossible à escalader ou à percer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Dhul-Qarnayn attribua sa réussite à la miséricorde
                      d&apos;Allah, non à sa propre puissance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La condition « in sha Allah » dans le hadith souligne que
                      rien n&apos;advient sans la permission divine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;emplacement exact du mur reste inconnu et fait
                      l&apos;objet de nombreuses hypothèses parmi les savants.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Gog-et-Magog-Yajouj-Majouj-leur-liberation-avant-la-fin-des-temps-1.jpg"
                    alt="Le mur de Dhul-Qarnayn construit pour contenir Gog et Magog"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les signes de la fin du monde en islam"
                  description="Découvrez les signes majeurs et mineurs annonciateurs de l&apos;Heure selon le Coran et la Sunna."
                  href="/signes-fin-monde-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Libération à la fin des temps */}
              {/* ============================================ */}
              <section
                id="liberation-fin-des-temps"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La libération de Gog et Magog à la fin des temps
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La libération de Gog et Magog s&apos;inscrit dans une
                  séquence précise d&apos;évènements eschatologiques rapportés
                  par les hadiths authentiques. Elle intervient après le retour
                  de &apos;Issa (Jésus) sur terre et sa victoire contre le
                  Dajjal (l&apos;Antéchrist), à un moment où les croyants
                  pensent avoir trouvé la paix.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Selon un hadith rapporté par Muslim, Allah révèlera à
                  &apos;Issa : « J&apos;ai fait sortir des serviteurs à Moi
                  que nul ne pourra combattre. Mets Mes serviteurs à l&apos;abri
                  sur le mont Tour (Sinaï). » C&apos;est à ce moment que Gog
                  et Magog déferleront sur la terre, se répandant depuis chaque
                  hauteur, semant la désolation sur leur passage.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Leur invasion sera d&apos;une ampleur sans précédent. Ils
                  boiront les eaux des lacs et des rivières, au point que les
                  derniers d&apos;entre eux passeront par un cours d&apos;eau et
                  diront : « Il y avait de l&apos;eau ici autrefois. » Les
                  croyants, réfugiés avec &apos;Issa sur le mont Tour, seront
                  assiégés à tel point que la tête d&apos;un boeuf vaudra plus
                  pour eux que cent dinars d&apos;or.
                </p>

                {/* Tableau séquence de la libération */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Étape
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Évènement
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Source
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          1
                        </td>
                        <td className="py-3 pr-4">
                          Descente de &apos;Issa (Jésus) et victoire sur le
                          Dajjal
                        </td>
                        <td className="py-3">
                          Sahih Muslim
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          2
                        </td>
                        <td className="py-3 pr-4">
                          Révélation divine à &apos;Issa : « Mets Mes
                          serviteurs à l&apos;abri sur le mont Tour »
                        </td>
                        <td className="py-3">
                          Sahih Muslim
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          3
                        </td>
                        <td className="py-3 pr-4">
                          Percée du mur de Dhul-Qarnayn par Gog et Magog
                        </td>
                        <td className="py-3">
                          Coran 21:96
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          4
                        </td>
                        <td className="py-3 pr-4">
                          Invasion massive, dévastation des terres et
                          assèchement des eaux
                        </td>
                        <td className="py-3">
                          Sahih Muslim
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          5
                        </td>
                        <td className="py-3 pr-4">
                          Siège des croyants réfugiés avec &apos;Issa sur le
                          mont Tour
                        </td>
                        <td className="py-3">
                          Sahih Muslim
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          6
                        </td>
                        <td className="py-3 pr-4">
                          Invocation de &apos;Issa et intervention divine
                          anéantissant Gog et Magog
                        </td>
                        <td className="py-3">
                          Sahih Muslim
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Leur libération survient dans un contexte de paix
                      apparente, après la défaite du Dajjal.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La rapidité de leur invasion ne laisse aucune armée
                      humaine en mesure de résister.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;assèchement des eaux illustre l&apos;ampleur de
                      leur dévastation sur la terre entière.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le refuge sur le mont Tour symbolise la protection divine
                      accordée aux croyants sincères.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le Dajjal : ses signes et son apparition en islam"
                  description="Découvrez les signes de l&apos;apparition du Dajjal et comment le croyant peut s&apos;en prémunir."
                  href="/dajjal-signes-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Destruction et intervention divine */}
              {/* ============================================ */}
              <section
                id="destruction-intervention"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leur destruction et l&apos;intervention divine
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Face à l&apos;invasion imparable de Gog et Magog, aucune
                  force humaine ne pouvait intervenir. C&apos;est alors que le
                  Prophète &apos;Issa (Jésus), réfugié avec les croyants sur le
                  mont Tour, se tourna vers Allah dans une invocation fervente
                  et prolongée. La réponse divine ne tarda pas.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Selon le hadith rapporté par Muslim, Allah envoya sur Gog et
                  Magog des insectes appelés naghaf, qui s&apos;attaquèrent à
                  leur nuque. Ils périrent tous en une seule nuit, comme meurt
                  un seul homme. La terre fut alors jonchée de leurs dépouilles,
                  au point que nul espace ne restait libre de leur puanteur et
                  de leur décomposition.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète &apos;Issa invoqua à nouveau Allah, et celui-ci
                  envoya une pluie abondante qui nettoya la terre de toute
                  trace de leur passage. Les carcasses furent emportées et
                  jetées dans la mer. La terre recouvra sa pureté et sa
                  fertilité. Un hadith de Muslim décrit qu&apos;après cela, on
                  demanda à la terre de faire pousser ses fruits, et la
                  bénédiction fut telle qu&apos;un groupe entier pouvait se
                  nourrir d&apos;une seule grenade, et s&apos;abriter sous la
                  peau de celle-ci.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;invocation de &apos;Issa (Jésus)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Depuis le mont Tour, &apos;Issa implora Allah avec
                        ferveur alors que les croyants souffraient du siège
                        imposé par Gog et Magog. Cette invocation sincère fut la
                        clé de la délivrance divine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le fléau des insectes (naghaf)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Allah envoya de petits insectes qui pénétrèrent la nuque
                        de chaque individu de Gog et Magog. Ils périrent tous
                        d&apos;un seul coup, sans qu&apos;aucune armée humaine
                        n&apos;ait eu à combattre.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La purification de la terre par la pluie
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Après l&apos;anéantissement de Gog et Magog, Allah
                        envoya une pluie purificatrice qui nettoya la terre de
                        leurs dépouilles. La terre retrouva sa fertilité et ses
                        bénédictions, inaugurant une période de paix et
                        d&apos;abondance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau chronologie de l'intervention divine */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Phase
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Description
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conséquence
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Invocation
                        </td>
                        <td className="py-3 pr-4">
                          &apos;Issa implore Allah depuis le mont Tour
                        </td>
                        <td className="py-3">
                          Allah accepte et prépare la délivrance
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fléau
                        </td>
                        <td className="py-3 pr-4">
                          Envoi des insectes naghaf sur Gog et Magog
                        </td>
                        <td className="py-3">
                          Mort instantanée de tous sans exception
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Purification
                        </td>
                        <td className="py-3 pr-4">
                          Pluie abondante envoyée par Allah
                        </td>
                        <td className="py-3">
                          Nettoyage complet de la terre
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Bénédiction
                        </td>
                        <td className="py-3 pr-4">
                          Fertilité exceptionnelle de la terre
                        </td>
                        <td className="py-3">
                          Période de paix, d&apos;abondance et de sérénité
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Gog-et-Magog-Yajouj-Majouj-leur-liberation-avant-la-fin-des-temps-1.jpg"
                    alt="Intervention divine contre Gog et Magog, purification de la terre"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le retour de Jésus (&apos;Issa) en islam"
                  description="Découvrez les conditions et les évènements liés au retour de &apos;Issa (Jésus) selon les sources islamiques."
                  href="/retour-jesus-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Enseignements spirituels */}
              {/* ============================================ */}
              <section id="enseignements" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements spirituels pour le croyant
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le récit de Gog et Magog ne se limite pas à une narration
                  eschatologique. Il porte des enseignements spirituels profonds
                  que chaque croyant peut intégrer dans sa vie quotidienne. La
                  sagesse tirée de ce récit coranique et prophétique invite à la
                  réflexion sur la nature de la foi, de la patience et de la
                  confiance en Allah.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La confiance absolue en Allah (tawakkul)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Face à une menace que nulle armée ne peut repousser,
                      seule la confiance en Allah permet au croyant de garder
                      son calme et sa sérénité. Le récit enseigne que la
                      victoire ultime appartient toujours à Allah, quelle que
                      soit l&apos;ampleur de l&apos;épreuve.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La patience dans les épreuves (sabr)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les croyants assiégés sur le mont Tour avec &apos;Issa
                      ont enduré la faim et la détresse avec patience, sachant
                      que le secours d&apos;Allah viendrait. Cette patience
                      active, accompagnée d&apos;invocations, est un modèle
                      pour tout croyant face aux difficultés de la vie.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La force de l&apos;invocation (du&apos;a)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      C&apos;est par l&apos;invocation de &apos;Issa
                      qu&apos;Allah anéantit Gog et Magog. Ce récit rappelle
                      que le du&apos;a est l&apos;arme du croyant et que rien
                      n&apos;est impossible pour Allah lorsque Ses serviteurs
                      L&apos;implorent avec sincérité.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le repentir et la préparation spirituelle
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;approche des signes de la fin des temps rappelle
                      l&apos;importance du repentir sincère (tawbah) et de la
                      préparation spirituelle. Le croyant est invité à purifier
                      son coeur, à multiplier les bonnes actions et à
                      renforcer ses liens avec Allah avant que les épreuves ne
                      surviennent.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Solidarité communautaire :</strong> le refuge
                      collectif sur le mont Tour enseigne l&apos;importance de
                      la solidarité entre croyants face aux épreuves.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Humilité face à la puissance divine :</strong>{" "}
                      Dhul-Qarnayn, malgré sa force, reconnut que tout vient
                      d&apos;Allah et que le mur serait détruit au moment voulu.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Vigilance spirituelle :</strong> l&apos;étude des
                      signes de l&apos;Heure ne doit pas susciter la peur, mais
                      plutôt une prise de conscience qui pousse à
                      l&apos;amélioration personnelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Espoir après l&apos;épreuve :</strong> la
                      fertilité exceptionnelle de la terre après
                      l&apos;anéantissement de Gog et Magog rappelle que toute
                      épreuve est suivie d&apos;un soulagement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Importance de « in sha Allah » :</strong> le
                      hadith sur le creusement du mur enseigne que prononcer
                      « in sha Allah » n&apos;est pas une simple formule, mais
                      un acte de foi qui conditionne la réalisation des projets.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour approfondir les signes de la fin des temps"
                  href="/signes-fin-monde-islam"
                  linkText="Voir tous les signes de la fin du monde en islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sujets liés à la fin des temps
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/signes-fin-monde-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Les signes de la fin du monde
                  </Link>
                  <Link
                    href="/dajjal-signes-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Le Dajjal en islam
                  </Link>
                  <Link
                    href="/retour-jesus-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Le retour de Jésus en islam
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
                    Sorcellerie et protection en islam
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
