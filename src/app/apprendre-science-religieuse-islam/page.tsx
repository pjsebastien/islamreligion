import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Importance d'apprendre la science religieuse en islam",
  description:
    "Pourquoi apprendre la science religieuse en islam est une obligation pour chaque musulman. Disciplines, bienfaits spirituels, méthodes et défis contemporains.",
  alternates: {
    canonical:
      "https://www.islamreligion.fr/apprendre-science-religieuse-islam",
  },
};

const tocItems = [
  { id: "obligation", label: "L'obligation d'apprendre" },
  { id: "disciplines", label: "Les disciplines fondamentales" },
  { id: "bienfaits", label: "Les bienfaits spirituels et sociaux" },
  { id: "methodes", label: "Méthodes et parcours" },
  { id: "defis", label: "Les défis contemporains" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Apprendre la science religieuse est-il obligatoire en islam ?",
    answer:
      "Oui, le Prophète (paix et bénédictions sur lui) a dit que la recherche du savoir est une obligation pour chaque musulman et chaque musulmane (rapporté par Ibn Majah). Certaines connaissances relèvent du fard ayn (obligation individuelle), comme les bases du tawhid, de la prière et du licite et de l'illicite dans la vie courante.",
  },
  {
    question:
      "Par quoi commencer l'apprentissage de la science islamique ?",
    answer:
      "Les savants recommandent de commencer par les fondements du tawhid (l'unicité d'Allah), les règles de la prière et des ablutions, puis la lecture correcte du Coran (tajwid). Ce socle de base permet ensuite d'aborder le fiqh, les sciences du hadith et la sira du Prophète (paix et bénédictions sur lui).",
  },
  {
    question:
      "Peut-on apprendre la science religieuse en ligne ?",
    answer:
      "L'apprentissage en ligne est devenu un complément précieux, surtout pour les personnes éloignées des centres de savoir. Toutefois, les savants insistent sur la nécessité de vérifier la qualification des enseignants et de privilégier les plateformes reconnues. Le contact direct avec un professeur reste recommandé pour corriger les erreurs de compréhension.",
  },
  {
    question:
      "Quelle est la différence entre fard ayn et fard kifaya dans le savoir ?",
    answer:
      "Le fard ayn désigne ce que chaque musulman doit connaître individuellement : les piliers de la foi, les règles de la prière, le jeûne, le licite et l'illicite dans son quotidien. Le fard kifaya concerne les sciences dont la communauté a besoin collectivement : si un groupe suffisant les maîtrise, l'obligation est levée pour les autres (sciences du hadith avancées, jurisprudence comparée, médecine, etc.).",
  },
  {
    question:
      "Faut-il un professeur pour apprendre l'islam ?",
    answer:
      "La tradition islamique insiste fortement sur la transmission orale (talaqqi) et l'apprentissage auprès d'un enseignant qualifié. Le Prophète (paix et bénédictions sur lui) a lui-même enseigné directement à ses compagnons. Un professeur aide à contextualiser les textes, à corriger les erreurs et à guider le parcours de l'étudiant.",
  },
  {
    question:
      "Les femmes ont-elles l'obligation d'apprendre la science religieuse ?",
    answer:
      "Absolument. Le hadith rapporté par Ibn Majah mentionne explicitement que la recherche du savoir est une obligation pour chaque musulman et chaque musulmane. L'histoire de l'islam est riche de savantes reconnues, comme Aisha (qu'Allah soit satisfait d'elle), qui a transmis un nombre considérable de hadiths et de règles juridiques.",
  },
  {
    question:
      "Comment distinguer un savant fiable en islam ?",
    answer:
      "Un savant fiable se reconnaît par sa formation auprès de maîtres reconnus (chaîne de transmission, ijaza), sa cohérence avec le Coran et la Sunna, sa piété apparente dans son comportement, et la reconnaissance de ses pairs. Il convient de se méfier de ceux qui prêchent sans formation attestée ou qui sèment la division.",
  },
  {
    question:
      "Quels sont les dangers d'apprendre l'islam sans encadrement ?",
    answer:
      "Apprendre sans encadrement expose à des risques sérieux : mauvaise compréhension des textes sortis de leur contexte, adoption de positions extrêmes ou déviantes, confusion entre opinions personnelles et avis juridiques fondés, et vulnérabilité face aux discours sectaires diffusés sur les réseaux sociaux.",
  },
];

export default function ApprendreScience() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/apprendre-science-religieuse-islam/#article",
        headline:
          "Importance d'apprendre la science religieuse en islam",
        description:
          "Pourquoi apprendre la science religieuse en islam est une obligation pour chaque musulman. Disciplines, bienfaits spirituels, méthodes et défis contemporains.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Importance-dapprendre-la-science-religieuse-en-islam-1.jpg",
        datePublished: "2025-08-20",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/apprendre-science-religieuse-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/apprendre-science-religieuse-islam/#breadcrumb",
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
            name: "Science religieuse en islam",
            item: "https://www.islamreligion.fr/apprendre-science-religieuse-islam",
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
          title="Importance d'apprendre la science religieuse en islam"
          subtitle="Obligation, disciplines fondamentales, bienfaits spirituels et parcours d'apprentissage selon le Coran et la Sunna."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Importance-dapprendre-la-science-religieuse-en-islam-1.jpg"
          imageAlt="Importance d'apprendre la science religieuse en islam"
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
                <span className="text-foreground">
                  Science religieuse en islam
                </span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La recherche du savoir religieux occupe une place
                  fondamentale en islam. Le Coran et la Sunna du Prophète
                  (paix et bénédictions sur lui) placent cette quête parmi
                  les obligations du croyant. Des sciences du tawhid au fiqh,
                  en passant par les sciences du hadith et la lecture du
                  Coran, chaque discipline contribue à élever la foi et à
                  structurer la vie du musulman dans sa dimension spirituelle
                  comme sociale.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : L'obligation d'apprendre */}
              {/* ============================================ */}
              <section id="obligation" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;obligation d&apos;apprendre la science religieuse
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et bénédictions sur lui) a
                  affirmé dans un hadith rapporté par Ibn Majah :
                  &laquo;&nbsp;La recherche du savoir est une obligation pour
                  chaque musulman.&nbsp;&raquo; Cette parole prophétique pose
                  un fondement clair : apprendre les bases de sa religion
                  n&apos;est pas un choix personnel, mais un devoir que
                  chaque croyant doit honorer au cours de sa vie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran lui-même distingue ceux qui savent de ceux qui
                  ignorent. Allah dit dans la sourate Az-Zumar (39:9) :
                  &laquo;&nbsp;Dis : &quot;Sont-ils égaux, ceux qui savent
                  et ceux qui ne savent pas ?&quot;&nbsp;&raquo; Ce verset
                  souligne la valeur du savoir et la différence que la
                  connaissance produit dans la qualité de la foi et des
                  actes d&apos;adoration.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans la sourate Al-Mujadala (58:11), Allah promet
                  d&apos;élever en degrés ceux qui ont reçu le savoir :
                  &laquo;&nbsp;Allah élèvera en degrés ceux d&apos;entre
                  vous qui croient et ceux qui ont reçu le
                  savoir.&nbsp;&raquo; Ce verset relie directement la
                  science religieuse à l&apos;élévation spirituelle et au
                  rapprochement d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants ont distingué deux catégories d&apos;obligation
                  en matière de savoir religieux, chacune répondant à un
                  besoin différent du croyant et de la communauté.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Fard ayn (obligation individuelle) :</strong>{" "}
                      chaque musulman doit connaître les fondements de la
                      foi (tawhid), les règles de la prière, du jeûne, de
                      la zakat, ainsi que le licite et l&apos;illicite dans
                      sa vie courante. Nul n&apos;est excusé de cette
                      ignorance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        Fard kifaya (obligation collective) :
                      </strong>{" "}
                      les sciences avancées (jurisprudence comparée,
                      sciences du hadith approfondies, exégèse coranique)
                      doivent être maîtrisées par un nombre suffisant de
                      membres dans la communauté. Si personne ne les
                      apprend, toute la communauté porte le péché.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  La première révélation descendue sur le Prophète (paix et
                  bénédictions sur lui) commence par le mot
                  &laquo;&nbsp;Lis&nbsp;&raquo; (sourate Al-Alaq, 96:1-5).
                  Ce choix divin n&apos;est pas anodin : il place la lecture
                  et la connaissance au sommet des priorités de la vie
                  spirituelle musulmane, avant même les obligations
                  rituelles détaillées par la suite.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Importance-dapprendre-la-science-religieuse-en-islam-1.jpg"
                    alt="L'obligation d'apprendre la science religieuse en islam selon le Coran et la Sunna"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Les disciplines fondamentales */}
              {/* ============================================ */}
              <section id="disciplines" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les disciplines fondamentales de la science islamique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La science religieuse en islam ne se limite pas à un seul
                  domaine. Elle forme un ensemble cohérent de disciplines
                  qui se complètent les unes les autres, chacune apportant
                  une dimension particulière à la compréhension de la foi et
                  à la pratique quotidienne du musulman.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants ont organisé ces disciplines selon un ordre
                  logique d&apos;apprentissage, en commençant par le
                  fondement de toute la religion (le tawhid) pour aller
                  progressivement vers les sciences spécialisées. Chaque
                  branche du savoir islamique a ses propres méthodes, ses
                  ouvrages de référence et ses chaînes de transmission.
                </p>

                {/* Tableau des disciplines */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Discipline
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Contenu
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Importance
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tawhid (unicité d&apos;Allah)
                        </td>
                        <td className="py-3 pr-4">
                          Les noms et attributs d&apos;Allah, les piliers
                          de la foi, le rejet du polythéisme
                        </td>
                        <td className="py-3">
                          Fondement absolu de la religion, première chose à
                          enseigner et à apprendre
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fiqh (jurisprudence)
                        </td>
                        <td className="py-3 pr-4">
                          Règles de la prière, du jeûne, de la zakat, du
                          pèlerinage, des transactions et du mariage
                        </td>
                        <td className="py-3">
                          Encadre la pratique quotidienne et les relations
                          sociales du musulman
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Sciences du Coran
                        </td>
                        <td className="py-3 pr-4">
                          Tajwid (récitation), tafsir (exégèse), asbab
                          an-nuzul (circonstances de la révélation)
                        </td>
                        <td className="py-3">
                          Permet de comprendre la parole d&apos;Allah dans
                          son contexte et de la réciter correctement
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Sciences du hadith
                        </td>
                        <td className="py-3 pr-4">
                          Classification des hadiths, étude des chaînes de
                          transmission (isnad), critique des narrateurs
                        </td>
                        <td className="py-3">
                          Protège la Sunna contre les falsifications et
                          garantit l&apos;authenticité des textes
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Sira (biographie prophétique)
                        </td>
                        <td className="py-3 pr-4">
                          Vie du Prophète (paix et bénédictions sur lui),
                          batailles, relations avec les compagnons et les
                          nations
                        </td>
                        <td className="py-3">
                          Offre un modèle de vie concret et contextualisé
                          pour le croyant
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tasawwuf (spiritualité)
                        </td>
                        <td className="py-3 pr-4">
                          Purification du cœur, lutte contre les maladies
                          de l&apos;âme, ihsan (excellence dans
                          l&apos;adoration)
                        </td>
                        <td className="py-3">
                          Donne une profondeur intérieure à la pratique et
                          renforce la sincérité
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces disciplines ne fonctionnent pas de manière isolée.
                  L&apos;étude du fiqh nécessite une connaissance du Coran
                  et du hadith. L&apos;exégèse coranique s&apos;appuie sur
                  la sira et les circonstances de la révélation. La
                  purification du cœur (tasawwuf) accompagne toutes les
                  autres sciences pour préserver l&apos;intention sincère de
                  l&apos;étudiant tout au long de son parcours.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Complémentarité des sciences :</strong> chaque
                      discipline éclaire les autres et forme un ensemble
                      cohérent.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Progression logique :</strong> le tawhid
                      d&apos;abord, puis les actes d&apos;adoration, puis
                      les sciences spécialisées.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Chaînes de transmission :</strong> chaque
                      discipline possède ses maîtres et ses ouvrages de
                      référence transmis de génération en génération.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Apprendre le Coran : méthodes et conseils pratiques"
                  description="Retrouvez les meilleures approches pour mémoriser et comprendre le Coran selon la tradition islamique."
                  href="/apprendre-le-coran"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Les bienfaits spirituels et sociaux */}
              {/* ============================================ */}
              <section id="bienfaits" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les bienfaits spirituels et sociaux du savoir
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La science religieuse n&apos;est pas une accumulation
                  théorique. Les savants de l&apos;islam ont toujours
                  insisté sur le fait que le savoir véritable transforme
                  celui qui le porte. Il se manifeste dans son comportement,
                  ses relations et sa manière d&apos;adorer Allah. Le
                  Prophète (paix et bénédictions sur lui) a dit, dans un
                  hadith rapporté par Al-Bukhari, que celui qui emprunte un
                  chemin à la recherche du savoir, Allah lui facilite un
                  chemin vers le Paradis.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La taqwa (crainte pieuse d&apos;Allah) constitue le
                  premier fruit du savoir religieux. Celui qui connaît les
                  attributs d&apos;Allah, Ses commandements et Ses
                  interdictions développe naturellement une conscience plus
                  profonde de Sa présence dans chaque aspect de la vie. La
                  prière de celui qui comprend ce qu&apos;il récite prend
                  une dimension tout autre que celle de celui qui répète des
                  mots sans en saisir le sens.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Renforcement de la taqwa
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La connaissance des textes sacrés et de leur
                        signification nourrit la conscience d&apos;Allah
                        dans les actes quotidiens. L&apos;étudiant en
                        science religieuse apprend à mesurer ses paroles,
                        à surveiller ses intentions et à purifier ses
                        actes d&apos;adoration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Protection contre l&apos;innovation blâmable
                        (bid&apos;ah)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;ignorance est le terreau le plus fertile
                        pour les pratiques non conformes à la Sunna. Celui
                        qui possède une base solide en science religieuse
                        sait distinguer ce qui relève de la tradition
                        prophétique authentique de ce qui a été inventé
                        par la suite.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Transmission familiale
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un parent qui maîtrise les fondements de sa
                        religion transmet naturellement ce savoir à ses
                        enfants. La famille devient un lieu
                        d&apos;apprentissage continu où la pratique
                        religieuse se vit de manière consciente et
                        cohérente.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cohésion communautaire :</strong> le savoir
                      partagé rassemble les croyants autour de références
                      communes et réduit les divisions causées par
                      l&apos;ignorance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Adoration éclairée :</strong> prier, jeûner
                      et donner la zakat en comprenant la sagesse derrière
                      chaque acte donne un sens profond à la pratique
                      religieuse.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Résilience face aux épreuves :</strong> la
                      connaissance du destin (qadar) et de la sagesse
                      divine aide le croyant à traverser les difficultés
                      avec patience et confiance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Responsabilité sociale :</strong> le savoir
                      religieux pousse le musulman à s&apos;engager pour
                      la justice, l&apos;entraide et le bien commun au
                      sein de sa communauté.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour approfondir les fondements juridiques de l'islam"
                  href="/jurisprudence-islamique-coran-sunna-ijma"
                  linkText="Voir les sources de la jurisprudence islamique"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Méthodes et parcours */}
              {/* ============================================ */}
              <section id="methodes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment apprendre : méthodes et parcours
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La tradition islamique a développé des méthodes
                  d&apos;enseignement éprouvées depuis plus de quatorze
                  siècles. La transmission orale (talaqqi) reste la
                  méthode privilégiée par les savants, car elle permet un
                  échange direct entre le maître et l&apos;élève, une
                  correction immédiate des erreurs et une transmission du
                  savoir qui va au-delà du texte écrit.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les cercles de savoir (halaqat) représentent le cadre
                  traditionnel de l&apos;enseignement islamique. Dans les
                  mosquées et les universités, des étudiants se
                  rassemblent autour d&apos;un professeur qualifié pour
                  étudier un ouvrage de manière méthodique, chapitre par
                  chapitre. Cette pratique remonte à l&apos;époque du
                  Prophète (paix et bénédictions sur lui), qui enseignait
                  ses compagnons dans la mosquée de Médine.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La transmission orale (talaqqi)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;étudiant reçoit le savoir directement de
                        la bouche du professeur, qui le tient lui-même de
                        ses propres maîtres. Cette chaîne ininterrompue
                        (sanad) remonte parfois jusqu&apos;au Prophète
                        (paix et bénédictions sur lui) lui-même, ce qui
                        confère une authenticité unique à la transmission.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les cercles traditionnels (halaqat)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Organisés dans les mosquées, les instituts ou les
                        universités islamiques, ces cercles permettent
                        l&apos;étude approfondie d&apos;ouvrages
                        classiques. L&apos;étudiant y apprend la
                        discipline, la patience et le respect de la
                        chaîne de transmission du savoir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les plateformes en ligne modernes
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Des académies islamiques en ligne proposent
                        désormais des cursus structurés avec des
                        professeurs qualifiés. Ces plateformes rendent le
                        savoir accessible aux musulmans éloignés des
                        centres traditionnels d&apos;enseignement, tout
                        en maintenant un cadre pédagogique sérieux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Choisir un enseignant qualifié
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les savants insistent sur le fait que la science
                        se prend auprès de personnes de confiance.
                        L&apos;enseignant doit posséder une ijaza
                        (autorisation de transmission), être reconnu par
                        ses pairs et se distinguer par sa piété et son
                        intégrité.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Commencer par les ouvrages de base adaptés aux
                      débutants avant de passer aux textes avancés.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Réviser régulièrement et mettre en pratique ce que
                      l&apos;on apprend pour ancrer le savoir dans le
                      quotidien.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Ne pas brûler les étapes : la patience dans
                      l&apos;apprentissage est une qualité que les savants
                      ont toujours valorisée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Accompagner l&apos;étude par les invocations et la
                      demande de bénédiction à Allah pour le savoir
                      acquis.
                    </span>
                  </li>
                </ul>

                {/* Tableau parcours progressif */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Niveau
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Disciplines à étudier
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Méthode recommandée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Débutant
                        </td>
                        <td className="py-3 pr-4">
                          Tawhid, règles de la prière, tajwid de base
                        </td>
                        <td className="py-3">
                          Cours en mosquée, plateforme en ligne avec suivi
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Intermédiaire
                        </td>
                        <td className="py-3 pr-4">
                          Fiqh, sira, sciences du hadith (introduction)
                        </td>
                        <td className="py-3">
                          Halaqat régulières, lecture d&apos;ouvrages
                          classiques commentés
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Avancé
                        </td>
                        <td className="py-3 pr-4">
                          Usul al-fiqh, mustalah al-hadith, tafsir
                          approfondi
                        </td>
                        <td className="py-3">
                          Talaqqi avec un savant, ijaza, séjour dans un
                          centre de savoir
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Importance-dapprendre-la-science-religieuse-en-islam-1.jpg"
                    alt="Méthodes d'apprentissage de la science religieuse en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Les défis contemporains */}
              {/* ============================================ */}
              <section id="defis" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les défis contemporains et l&apos;adaptation
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;accès au savoir religieux n&apos;a jamais été aussi
                  facile qu&apos;aujourd&apos;hui, et pourtant les défis
                  n&apos;ont jamais été aussi nombreux. La multiplication
                  des sources d&apos;information, les réseaux sociaux et
                  l&apos;absence de filtrage créent un environnement où le
                  vrai et le faux cohabitent sans distinction apparente.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La désinformation religieuse sur les réseaux sociaux
                  représente un défi majeur pour les musulmans
                  contemporains. Des vidéos courtes, des publications
                  virales et des avis non qualifiés circulent à grande
                  vitesse, souvent sans vérification ni contexte. Un
                  musulman dépourvu de bases solides en science religieuse
                  peut facilement adopter des positions erronées ou
                  extrêmes.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        Technologie et accès au savoir :
                      </strong>{" "}
                      les plateformes numériques offrent des opportunités
                      sans précédent, mais exigent un discernement accru
                      pour sélectionner les sources fiables.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        Désinformation sur les réseaux sociaux :
                      </strong>{" "}
                      les avis religieux non qualifiés se propagent
                      rapidement et peuvent induire en erreur ceux qui
                      manquent de repères.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Questions de bioéthique :</strong> les
                      avancées médicales et technologiques posent des
                      questions nouvelles (procréation assistée,
                      transplantation d&apos;organes, intelligence
                      artificielle) qui nécessitent l&apos;avis de savants
                      formés à la fois en jurisprudence et en sciences
                      modernes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        Besoin de savants qualifiés :
                      </strong>{" "}
                      face à ces défis, la formation de savants capables
                      de dialoguer avec la modernité tout en restant
                      fidèles aux fondements devient une priorité pour la
                      communauté.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        Esprit critique dans la tradition :
                      </strong>{" "}
                      les savants ont toujours pratiqué la critique
                      constructive (jarh wa ta&apos;dil dans les sciences
                      du hadith, par exemple). Cet esprit critique doit
                      être transmis aux nouvelles générations pour
                      qu&apos;elles sachent évaluer les sources et les
                      discours.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;adaptation ne signifie pas la compromission. Les
                  savants musulmans ont toujours su répondre aux questions
                  de leur époque en puisant dans les principes immuables
                  du Coran et de la Sunna. La science religieuse vivante
                  est celle qui dialogue avec son temps tout en préservant
                  l&apos;intégrité de ses sources.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Halal et haram : critères et fondements en islam"
                  description="Comprendre les critères qui déterminent le licite et l'illicite selon le Coran, la Sunna et le consensus des savants."
                  href="/halal-haram-criteres"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION : Profils */}
              {/* ============================================ */}
              <section className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Parcours selon votre situation
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le chemin vers la science religieuse varie selon le
                  niveau, les responsabilités et les objectifs de chacun.
                  Voici des orientations adaptées à trois profils courants.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le débutant
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Vous découvrez l&apos;islam ou souhaitez consolider
                      vos bases. Commencez par le tawhid et les règles de
                      la prière avec un enseignant patient. Inscrivez-vous
                      à un cours de tajwid pour apprendre à réciter le
                      Coran correctement. Privilégiez un rythme régulier,
                      même modeste, plutôt que des efforts intenses mais
                      éphémères.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;étudiant avancé
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Vous avez déjà des bases solides et souhaitez
                      approfondir. Rejoignez des halaqat d&apos;étude avec
                      un savant reconnu. Étudiez les ouvrages classiques de
                      fiqh et de sciences du hadith. Envisagez de voyager
                      pour étudier auprès de maîtres dans les centres
                      traditionnels de savoir (Médine, Le Caire, Fès,
                      Mauritanie).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le parent éducateur
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Votre priorité est de transmettre la religion à vos
                      enfants. Apprenez les bases pour pouvoir les
                      enseigner avec assurance. Instaurez des moments
                      d&apos;apprentissage en famille : lecture du Coran,
                      histoires des prophètes, rappels sur les valeurs
                      islamiques. Inscrivez vos enfants dans des
                      programmes adaptés à leur âge.
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
                  Approfondir la science islamique
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/jurisprudence-islamique-coran-sunna-ijma"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Jurisprudence islamique
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/halal-haram-criteres"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Halal et haram : les critères
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
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
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
