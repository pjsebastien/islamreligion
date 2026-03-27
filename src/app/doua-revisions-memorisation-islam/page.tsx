import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua pour la mémorisation et les révisions en islam : invocations authentiques",
  description:
    "Découvrez les douas pour la mémorisation et les révisions en islam : rabbi zidni ilma, doua de Moussa (rabbi ishrah li sadri), invocations pour mémoriser le Coran en arabe avec phonétique et traduction.",
  openGraph: {
    title:
      "Doua pour la mémorisation et les révisions en islam : invocations authentiques",
    description:
      "Les invocations authentiques pour la mémorisation et les révisions : rabbi zidni ilma, rabbi ishrah li sadri, douas pour le Coran en arabe, phonétique et traduction.",
    url: "https://www.islamreligion.fr/doua-revisions-memorisation-islam",
    images: [
      {
        url: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-revisions-memorisation-islam",
  },
};

const tocItems = [
  { id: "savoir-islam", label: "L\u2019importance du savoir en islam" },
  { id: "doua-rabbi-zidni-ilma", label: "Doua rabbi zidni ilma" },
  { id: "doua-moussa-rabbi-ishrah", label: "Doua de Moussa : rabbi ishrah li sadri" },
  { id: "douas-memorisation-coran", label: "Douas pour mémoriser le Coran" },
  { id: "conseils-memorisation", label: "Conseils pratiques pour la mémorisation" },
  { id: "douas-revision-examen", label: "Douas pour les révisions et examens" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua pour la mémorisation en islam ?",
    answer:
      "La doua la plus connue pour la mémorisation est « Rabbi zidni ilma » (Seigneur, augmente ma science), tirée du Coran (sourate Ta-Ha, 20:114). Le Prophète (paix et salut sur lui) récitait également la doua de Moussa « Rabbi ishrah li sadri wa yassir li amri » pour demander la facilité dans l&apos;apprentissage. Ces deux invocations sont complémentaires et recommandées avant toute séance d&apos;étude ou de mémorisation.",
  },
  {
    question: "Comment faire la doua avant de réviser ou de mémoriser le Coran ?",
    answer:
      "Avant de commencer vos révisions ou votre mémorisation du Coran, faites vos ablutions, asseyez-vous dans un endroit calme et récitez « Bismillah » suivi de « Rabbi zidni ilma ». Vous pouvez également ajouter « Allahumma inni as&apos;aluka fahmal-nabiyyine wa hifzhal-mursaline ». L&apos;essentiel est d&apos;invoquer avec sincérité et présence du coeur, en demandant à Allah de faciliter la compréhension et la rétention.",
  },
  {
    question: "Existe-t-il une doua spécifique pour ne pas oublier ce qu'on a mémorisé ?",
    answer:
      "Oui, le Prophète (paix et salut sur lui) a enseigné des invocations pour préserver la mémoire. Parmi elles : « Allahumma inni a&apos;udhu bika min &apos;ilmin la yanfa&apos; » (Seigneur, je cherche refuge auprès de Toi contre une science inutile). La révision régulière du Coran est aussi une sunna essentielle, car le Prophète a comparé le Coran mémorisé à un chameau attaché : si on le néglige, il s&apos;échappe.",
  },
  {
    question: "La doua de Moussa (rabbi ishrah li sadri) est-elle réservée à la mémorisation ?",
    answer:
      "Non, la doua de Moussa « Rabbi ishrah li sadri wa yassir li amri » (Seigneur, ouvre-moi ma poitrine et facilite-moi ma tâche) est une invocation universelle. Moussa l&apos;a prononcée avant de se présenter devant Pharaon. Elle peut être récitée avant toute situation nécessitant courage, clarté d&apos;esprit et facilité : examen, entretien, cours, mémorisation ou toute mission importante.",
  },
  {
    question: "Peut-on faire la doua pour la mémorisation en français ?",
    answer:
      "Oui, la doua peut être faite dans toute langue, car Allah comprend toutes les langues. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe pour bénéficier de leur puissance spirituelle originale. Pour les supplications personnelles (demander la facilité dans les études, la compréhension, etc.), le français est parfaitement valide et accepté.",
  },
  {
    question: "Quel est le meilleur moment pour faire la doua de mémorisation ?",
    answer:
      "Les meilleurs moments pour invoquer Allah pour la mémorisation sont : après la prière du Fajr (le matin tôt, quand l&apos;esprit est reposé), le dernier tiers de la nuit, lors de la prosternation (sujud), et entre l&apos;adhan et l&apos;iqama. Les savants recommandent particulièrement le matin pour la mémorisation du Coran, car la mémoire est plus vive et la baraka y est plus présente.",
  },
  {
    question: "Comment le Prophète mémorisait-il le Coran ?",
    answer:
      "Le Prophète (paix et salut sur lui) recevait la révélation par l&apos;ange Jibril et la mémorisait directement. Jibril révisait l&apos;intégralité du Coran avec le Prophète chaque année durant le Ramadan, et deux fois lors de sa dernière année. Le Prophète enseignait ensuite les versets à ses compagnons, qui les mémorisaient et les révisaient entre eux. Cette méthode de répétition et de révision mutuelle reste le fondement du hifzh (mémorisation du Coran).",
  },
  {
    question: "La doua rabbi zidni ilma concerne-t-elle uniquement le savoir religieux ?",
    answer:
      "Non, la doua « Rabbi zidni ilma » englobe toute forme de science bénéfique. Les savants de l&apos;islam considèrent que le savoir utile inclut les sciences religieuses (Coran, hadith, fiqh) mais aussi les sciences profanes bénéfiques (médecine, mathématiques, ingénierie, etc.). Toute connaissance qui profite à l&apos;humanité et ne contredit pas les principes islamiques est considérée comme une science louable en islam.",
  },
];

export default function DouaRevisionsMemorisationIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-revisions-memorisation-islam/#article",
        headline:
          "Doua pour la mémorisation et les révisions en islam : invocations authentiques",
        description:
          "Découvrez les douas pour la mémorisation et les révisions en islam : rabbi zidni ilma, doua de Moussa, invocations pour mémoriser le Coran en arabe avec phonétique et traduction.",
        image: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        datePublished: "2026-03-30",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-revisions-memorisation-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-revisions-memorisation-islam/#breadcrumb",
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
            name: "Doua en islam",
            item: "https://www.islamreligion.fr/doua-islam",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Doua pour la mémorisation",
            item: "https://www.islamreligion.fr/doua-revisions-memorisation-islam",
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
          title="Doua pour la mémorisation et les révisions en islam"
          subtitle="Les invocations authentiques du Coran et de la Sunna pour demander la science, faciliter la mémorisation du Coran et réussir vos révisions. Textes en arabe, phonétique et traduction."
          imageSrc="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
          imageAlt="Coran ouvert avec calligraphie dorée et lumière symbolisant la mémorisation et le savoir en islam"
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
                <Link href="/doua-islam" className="hover:text-primary">
                  Doua en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Doua pour la mémorisation</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;islam accorde une place centrale au savoir et à la
                  mémorisation, en particulier celle du Coran. Le Prophète (paix
                  et salut sur lui) et le Coran lui-même nous enseignent des
                  invocations puissantes pour demander à Allah d&apos;augmenter
                  notre science, de faciliter notre compréhension et de
                  préserver notre mémoire. De &laquo;&nbsp;Rabbi zidni
                  ilma&nbsp;&raquo; à la doua de Moussa &laquo;&nbsp;Rabbi
                  ishrah li sadri&nbsp;&raquo;, découvrez les invocations
                  authentiques pour accompagner vos révisions et votre parcours
                  de mémorisation.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : L'importance du savoir en islam */}
              {/* ============================================ */}
              <section id="savoir-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance du savoir et de la mémorisation en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le premier mot révélé du Coran est
                  &laquo;&nbsp;Iqra&nbsp;&raquo; (Lis), adressé au Prophète
                  Muhammad (paix et salut sur lui) par l&apos;ange Jibril dans
                  la grotte de Hira. Ce choix divin n&apos;est pas anodin : il
                  place la quête du savoir au sommet des priorités de la vie
                  musulmane. L&apos;islam est une religion qui valorise
                  l&apos;apprentissage, la réflexion et la transmission du
                  savoir comme des actes d&apos;adoration à part entière.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;Dis : sont-ils égaux,
                  ceux qui savent et ceux qui ne savent pas ?&nbsp;&raquo;
                  (Az-Zumar, 39:9). Ce verset établit une distinction
                  fondamentale entre celui qui recherche la science et celui qui
                  s&apos;en détourne. Le savoir en islam n&apos;est pas un
                  luxe ou un privilège réservé à une élite : c&apos;est une
                  obligation pour tout musulman et toute musulmane, comme
                  l&apos;a enseigné le Prophète (paix et salut sur lui) dans le
                  célèbre hadith : &laquo;&nbsp;La recherche du savoir est une
                  obligation pour chaque musulman&nbsp;&raquo; (Ibn Majah).
                </p>

                <HadithCard
                  arabic="من سلك طريقاً يلتمس فيه علماً سهّل الله له به طريقاً إلى الجنة"
                  text="Celui qui emprunte un chemin à la recherche de la science, Allah lui facilite un chemin vers le Paradis."
                  source="Rapporté par Muslim (2699)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre que la quête du savoir est en elle-même un
                  acte méritoire qui mène au Paradis. Que l&apos;on étudie le
                  Coran, le hadith, la langue arabe, les sciences religieuses
                  ou toute science utile, chaque pas sur ce chemin est compté
                  comme une bonne action auprès d&apos;Allah. La mémorisation
                  du Coran (hifzh) occupe une place particulièrement honorée
                  dans cette quête, car le Prophète (paix et salut sur lui) a
                  dit que le porteur du Coran sera parmi les gens nobles et
                  pieux au Jour du Jugement.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La mémorisation ne se limite toutefois pas au Coran seul.
                  Elle concerne aussi les hadiths prophétiques, les invocations
                  quotidiennes (adhkar), les règles du fiqh et tout savoir
                  bénéfique. C&apos;est pourquoi les savants musulmans ont
                  toujours accordé une attention particulière aux invocations
                  qui accompagnent l&apos;apprentissage : elles transforment un
                  effort intellectuel en un acte d&apos;adoration complet,
                  reliant le serviteur à son Créateur à chaque instant de son
                  parcours éducatif.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée symbolisant l'importance du savoir et de la mémorisation en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua rabbi zidni ilma */}
              {/* ============================================ */}
              <section id="doua-rabbi-zidni-ilma" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua &laquo;&nbsp;Rabbi zidni ilma&nbsp;&raquo; : Seigneur, augmente ma science
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi toutes les invocations liées au savoir, la doua
                  &laquo;&nbsp;Rabbi zidni ilma&nbsp;&raquo; tient une place
                  exceptionnelle. C&apos;est la seule invocation dans laquelle
                  Allah ordonne directement à Son Prophète (paix et salut sur
                  lui) de demander davantage de science. Cette injonction divine
                  souligne que même le meilleur des hommes, celui qui recevait
                  la révélation, avait besoin de demander constamment plus de
                  savoir à son Seigneur.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ زِدْنِي عِلْمًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi zidni ilma
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, augmente ma science&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ta-Ha (20:114)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;imam al-Qurtubi commente ce verset en expliquant que
                  le fait qu&apos;Allah ordonne à Son Prophète de demander
                  davantage de science, et non davantage de richesse, de pouvoir
                  ou de santé, montre la valeur incomparable du savoir dans la
                  hiérarchie des biens. La science est le seul domaine dans
                  lequel Allah a ordonné à Son messager de demander
                  l&apos;augmentation, ce qui en fait le bien le plus précieux
                  qu&apos;un serviteur puisse posséder.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter cette doua avant chaque
                  séance d&apos;étude, de mémorisation ou de révision. Que
                  l&apos;on étudie le Coran, que l&apos;on prépare un examen
                  ou que l&apos;on apprenne une nouvelle compétence, cette
                  invocation courte mais puissante rappelle au croyant que
                  toute science vient d&apos;Allah et que c&apos;est à Lui
                  qu&apos;il faut demander la bénédiction dans
                  l&apos;apprentissage. Sa brièveté en fait une doua facile à
                  mémoriser et à intégrer dans sa routine quotidienne.
                </p>

                <HadithCard
                  arabic="اللهم انفعني بما علمتني وعلمني ما ينفعني وزدني علماً"
                  text="Seigneur, fais-moi profiter de ce que Tu m'as enseigné, enseigne-moi ce qui m'est utile et augmente ma science."
                  source="Rapporté par at-Tirmidhi (3599) et Ibn Majah (251)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation prophétique complète la doua coranique en
                  ajoutant deux dimensions essentielles : demander que la
                  science acquise soit bénéfique (et non simplement
                  accumulée sans profit) et demander un savoir supplémentaire
                  véritablement utile. Le Prophète (paix et salut sur lui)
                  cherchait refuge auprès d&apos;Allah contre une science qui
                  ne profite pas, car un savoir sans mise en pratique ni
                  bénéfice est une charge plutôt qu&apos;une bénédiction. Pour
                  approfondir les invocations liées à la réussite, consultez
                  notre guide sur la{" "}
                  <Link href="/doua-reussite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua pour la réussite en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Apprenez l'arabe pour comprendre le Coran"
                description="Maîtriser l&apos;arabe vous permet de comprendre les invocations et le Coran dans leur langue originale. Découvrez des formations adaptées aux francophones pour progresser dans votre mémorisation."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Doua de Moussa */}
              {/* ============================================ */}
              <section id="doua-moussa-rabbi-ishrah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de Moussa : &laquo;&nbsp;Rabbi ishrah li sadri&nbsp;&raquo;
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua de Moussa (paix sur lui) est l&apos;une des
                  invocations les plus récitées par les étudiants, les
                  enseignants et les mémorisateurs du Coran à travers le monde
                  musulman. Moussa l&apos;a prononcée lorsqu&apos;Allah lui a
                  ordonné d&apos;aller affronter Pharaon, le tyran le plus
                  puissant de son époque. Face à cette mission colossale, Moussa
                  n&apos;a pas demandé une armée ni des richesses : il a demandé
                  l&apos;ouverture de sa poitrine, la facilité dans sa tâche et
                  l&apos;éloquence dans sa parole.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi ishrah li sadri, wa yassir li amri, wahlul &apos;uqdatan min lisani, yafqahu qawli
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, ouvre-moi ma poitrine, facilite-moi ma tâche, et dénoue un noeud de ma langue, afin qu&apos;ils comprennent ma parole&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ta-Ha (20:25-28)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation contient quatre demandes complémentaires,
                  chacune essentielle pour l&apos;apprentissage et la
                  mémorisation. &laquo;&nbsp;Ishrah li sadri&nbsp;&raquo;
                  (ouvre-moi ma poitrine) signifie demander la sérénité, la
                  confiance et l&apos;ouverture d&apos;esprit nécessaires pour
                  recevoir la science. &laquo;&nbsp;Yassir li amri&nbsp;&raquo;
                  (facilite-moi ma tâche) est une demande de baraka et de
                  facilité dans le processus d&apos;apprentissage. Les deux
                  dernières parties concernent l&apos;éloquence et la clarté
                  d&apos;expression, indispensables pour transmettre le savoir
                  acquis.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les étudiants en sciences islamiques et les hafizh
                  (mémorisateurs du Coran) récitent fréquemment cette
                  invocation avant leurs séances d&apos;étude. Elle est
                  particulièrement recommandée avant de prendre la parole en
                  public, de donner un cours, de passer un examen oral ou de
                  réciter le Coran devant un professeur. La doua de Moussa
                  constitue un modèle d&apos;humilité : même un prophète
                  d&apos;Allah reconnaît qu&apos;il a besoin de
                  l&apos;assistance divine pour accomplir sa mission. Si vous
                  préparez un examen, consultez aussi notre guide sur la{" "}
                  <Link href="/doua-examen-reussite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua pour réussir un examen en islam
                  </Link>.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ishrah li sadri :</strong> ouvrir la poitrine
                      signifie accueillir le savoir avec sérénité et éliminer
                      l&apos;anxiété qui bloque l&apos;apprentissage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Yassir li amri :</strong> demander la facilité
                      dans la tâche, car Allah seul peut rendre aisé ce qui
                      paraît difficile au serviteur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Wahlul &apos;uqdatan min lisani :</strong>{" "}
                      dénouer le noeud de la langue est essentiel pour la
                      récitation correcte du Coran et la transmission du savoir.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas pour mémoriser le Coran */}
              {/* ============================================ */}
              <section id="douas-memorisation-coran" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas pour mémoriser le Coran
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La mémorisation du Coran (hifzh) est considérée comme l&apos;un
                  des actes les plus méritoires en islam. Le Prophète (paix et
                  salut sur lui) a dit que le porteur du Coran sera accompagné
                  par des anges nobles et pieux. Cependant, cette entreprise
                  demande un effort considérable et une aide divine constante.
                  Voici les invocations authentiques recommandées pour
                  accompagner ce parcours béni.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour demander la compréhension et la mémorisation
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation regroupe les demandes essentielles de
                  l&apos;étudiant en sciences : la compréhension des prophètes,
                  la mémoire des envoyés et la protection des anges rapprochés.
                  Elle est recommandée avant chaque séance de hifzh.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ فَهْمَ النَّبِيِّينَ وَحِفْظَ الْمُرْسَلِينَ وَالْمَلَائِكَةِ الْمُقَرَّبِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka fahman-nabiyyina wa hifzhal-mursalina wal-mala&apos;ikatil-muqarrabine
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande la compréhension des prophètes, la mémoire des envoyés et la protection des anges rapprochés&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Invocation rapportée par les savants
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour ne pas oublier le Coran
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a averti que l&apos;oubli
                  du Coran après sa mémorisation est un péché grave. Il a comparé
                  le Coran mémorisé à des chameaux attachés : si on néglige de
                  les surveiller, ils s&apos;échappent. Cette invocation
                  demande à Allah de protéger ce que l&apos;on a mémorisé.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلَاءَ حُزْنِي وَذَهَابَ هَمِّي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma-j&apos;alil-Qur&apos;ana rabi&apos;a qalbi wa nura sadri wa jala&apos;a huzni wa dhahaba hammi
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais du Coran le printemps de mon coeur, la lumière de ma poitrine, la dissipation de ma tristesse et la disparition de mon souci&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ahmad (3712), authentifié par al-Albani
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua de protection contre l&apos;oubli et la science inutile
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) cherchait régulièrement
                  refuge auprès d&apos;Allah contre quatre choses, dont la
                  science inutile. Cette invocation est essentielle pour
                  s&apos;assurer que le savoir acquis soit béni et profitable.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ وَمِنْ قَلْبٍ لَا يَخْشَعُ وَمِنْ نَفْسٍ لَا تَشْبَعُ وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu bika min &apos;ilmin la yanfa&apos;u wa min qalbin la yakhsha&apos;u wa min nafsin la tashba&apos;u wa min da&apos;watin la yustajab laha
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge auprès de Toi contre une science qui ne profite pas, un coeur qui ne craint pas, une âme qui n&apos;est jamais rassasiée et une invocation qui n&apos;est pas exaucée&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2722)
                  </p>
                </div>

                <HadithCard
                  arabic="تعاهدوا هذا القرآن فوالذي نفس محمد بيده لهو أشد تفلتاً من الإبل في عقلها"
                  text="Révisez régulièrement le Coran, car par Celui qui détient l'âme de Muhammad dans Sa main, il s'échappe plus vite que les chameaux de leurs liens."
                  source="Rapporté par al-Bukhari (5033) et Muslim (791)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est un rappel puissant de l&apos;importance de la
                  révision constante. La mémorisation du Coran n&apos;est pas
                  un effort ponctuel mais un engagement à vie. Les savants
                  recommandent de réviser chaque jour une portion du Coran
                  mémorisé, en complément de la nouvelle mémorisation. La doua
                  seule ne suffit pas : elle doit être accompagnée d&apos;un
                  effort régulier et discipliné, car Allah ne change la
                  situation d&apos;un peuple que lorsqu&apos;il fait l&apos;effort
                  de changer ce qui est en lui-même.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-memorisation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour la mémorisation du Coran
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua est le point de départ de tout effort de mémorisation,
                  mais elle doit être accompagnée de méthodes concrètes et
                  éprouvées. Les grands huffazh (mémorisateurs du Coran) de
                  l&apos;histoire islamique ont développé des techniques qui
                  ont fait leurs preuves au fil des siècles. Voici les conseils
                  les plus importants pour réussir votre parcours de hifzh.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Choisir le bon moment : après Fajr
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le meilleur moment pour mémoriser est le matin, juste
                        après la prière de Fajr. L&apos;esprit est reposé, la
                        mémoire est fraîche et la baraka du matin est
                        mentionnée dans plusieurs hadiths. Le Prophète (paix et
                        salut sur lui) a invoqué la bénédiction pour sa
                        communauté dans ses débuts de journée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Répéter chaque verset au minimum 20 fois
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La répétition est la clé de la mémorisation. Les savants
                        recommandent de répéter chaque nouveau verset un minimum
                        de 20 fois en le regardant dans le mushaf, puis de le
                        réciter 20 fois de mémoire. Cette méthode ancre le
                        texte dans la mémoire à long terme et renforce la
                        connexion entre la vue et l&apos;audition.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Utiliser un seul mushaf (exemplaire du Coran)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La mémoire visuelle joue un rôle crucial dans le hifzh.
                        Utiliser toujours le même exemplaire du Coran permet au
                        cerveau d&apos;associer chaque verset à sa position sur
                        la page. Beaucoup de huffazh sont capables de
                        &laquo;&nbsp;voir&nbsp;&raquo; mentalement la page
                        qu&apos;ils récitent, grâce à cette habitude.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réviser plus que mémoriser
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La règle d&apos;or du hifzh est de consacrer plus de
                        temps à la révision qu&apos;à la nouvelle mémorisation.
                        Les savants recommandent un ratio de 3 pour 1 : pour
                        chaque page nouvellement mémorisée, réviser trois pages
                        déjà acquises. Sans révision régulière, même les versets
                        les mieux mémorisés finissent par s&apos;effacer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter dans la prière ce que l&apos;on a mémorisé
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La meilleure révision est celle qui se fait dans la
                        prière (salat). Réciter les sourates et versets
                        mémorisés pendant les prières obligatoires et
                        surérogatoires (nawafil) permet de consolider la
                        mémorisation tout en accomplissant un acte
                        d&apos;adoration. Le qiyam al-layl (prière nocturne)
                        est particulièrement propice à cette pratique.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée illustrant la mémorisation du Coran et les révisions en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas pour les révisions et examens */}
              {/* ============================================ */}
              <section id="douas-revision-examen" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas pour les révisions et les examens
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà de la mémorisation du Coran, de nombreux musulmans
                  cherchent des invocations pour accompagner leurs révisions
                  scolaires, universitaires ou professionnelles. L&apos;islam
                  encourage l&apos;excellence dans tous les domaines du savoir
                  et offre des invocations adaptées à chaque étape du parcours
                  éducatif. Voici les douas recommandées pour les périodes de
                  révision et d&apos;examen.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua avant de commencer à réviser
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma la sahla illa ma ja&apos;altahu sahla, wa Anta taj&apos;alul-hazna idha shi&apos;ta sahla
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, rien n&apos;est facile sauf ce que Tu as rendu facile, et Tu rends le difficile facile si Tu le veux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Hibban (2427), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est particulièrement adaptée aux périodes
                  de révision intense, car elle reconnaît que toute facilité
                  vient d&apos;Allah. Lorsqu&apos;une matière semble
                  difficile ou qu&apos;un sujet paraît impossible à retenir,
                  cette doua rappelle au croyant qu&apos;Allah peut transformer
                  la difficulté en facilité par Sa seule volonté. Elle est
                  également recommandée avant un examen pour demander la
                  clarté d&apos;esprit et la facilité dans les réponses.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les étudiants musulmans sont encouragés à combiner ces
                  invocations avec un effort soutenu et rigoureux. La doua ne
                  remplace pas le travail, mais elle le complète en apportant
                  la bénédiction divine (baraka) qui transforme un effort
                  ordinaire en une réussite extraordinaire. Le Prophète (paix
                  et salut sur lui) attachait sa chamelle avant de placer sa
                  confiance en Allah, enseignant ainsi que la confiance en
                  Dieu et l&apos;effort personnel vont de pair. Pour des
                  invocations spécifiques aux{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    douas en islam
                  </Link>{" "}
                  en général, consultez notre guide complet.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Avant l&apos;étude :</strong> réciter
                      &laquo;&nbsp;Bismillah&nbsp;&raquo; et
                      &laquo;&nbsp;Rabbi zidni ilma&nbsp;&raquo; pour placer
                      sa séance sous la protection et la bénédiction d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pendant la difficulté :</strong> réciter la doua
                      de Moussa &laquo;&nbsp;Rabbi ishrah li sadri&nbsp;&raquo;
                      pour demander l&apos;ouverture d&apos;esprit et la
                      facilité face aux sujets complexes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Après la séance :</strong> remercier Allah par
                      &laquo;&nbsp;Al-hamdulillah&nbsp;&raquo; et demander que
                      le savoir acquis soit bénéfique et durable dans la
                      mémoire.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* Affiliate Form */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm title="Apprenez l&apos;arabe pour comprendre vos douas" description="Maîtrisez la langue du Coran et comprenez enfin le sens profond de chaque invocation que vous récitez au quotidien." preselect="arabe" />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
