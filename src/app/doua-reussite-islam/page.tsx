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
    "Doua pour la réussite en islam : invocations authentiques",
  description:
    "Découvrez les douas pour la réussite en islam : invocations authentiques en arabe avec phonétique et traduction, doua de Moussa, doua pour la facilité, le rizq, les études, le travail et la baraka quotidienne.",
  openGraph: {
    title:
      "Doua pour la réussite en islam : invocations authentiques",
    description:
      "Les invocations authentiques pour la réussite en islam : textes en arabe, phonétique, traduction et hadiths. Douas pour le tawfiq, le rizq et la facilité.",
    url: "https://www.islamreligion.fr/doua-reussite-islam",
    images: [
      {
        url: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-reussite-islam",
  },
};

const tocItems = [
  { id: "reussite-tawfiq", label: "La réussite (tawfiq) en islam" },
  { id: "doua-moussa", label: "Doua de Moussa : Rabbi ishrah li sadri" },
  { id: "doua-facilite", label: "Doua pour la facilité" },
  { id: "doua-rizq", label: "Doua pour la subsistance (rizq)" },
  { id: "doua-etudes-travail", label: "Doua pour les études et le travail" },
  { id: "doua-matin-baraka", label: "Doua du matin pour la baraka" },
  { id: "effort-doua", label: "Allier effort et doua" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua pour la réussite en islam ?",
    answer:
      "Parmi les douas les plus recommandées pour la réussite figure la doua de Moussa (paix sur lui) : « Rabbi ishrah li sadri, wa yassir li amri » (Seigneur, ouvre-moi ma poitrine et facilite-moi ma tâche). Cette invocation coranique (sourate Ta-Ha, 20:25-26) est particulièrement puissante car elle associe l&apos;ouverture du coeur à la demande de facilitation. Le Prophète (paix et salut sur lui) enseignait également de dire « Allahumma la sahla illa ma ja&apos;altahu sahlan » pour demander la facilité à Allah.",
  },
  {
    question: "Comment faire une doua pour réussir un examen en islam ?",
    answer:
      "Pour réussir un examen, récitez la doua « Rabbi zidni &apos;ilman » (Seigneur, augmente-moi en savoir, Coran 20:114) et la doua de Moussa « Rabbi ishrah li sadri ». Avant l&apos;examen, faites vos prières à l&apos;heure, invoquez Allah avec sincérité et placez votre confiance en Lui (tawakkul) tout en ayant fourni l&apos;effort de révision nécessaire. La doua ne remplace pas le travail mais le complète.",
  },
  {
    question: "Peut-on faire la doua pour la réussite en français ?",
    answer:
      "Oui, la doua pour la réussite peut être faite dans toute langue, y compris le français. Allah comprend toutes les langues et répond à la sincérité du coeur. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe car elles possèdent une profondeur spirituelle particulière. Pour les supplications personnelles en dehors de la prière, le français est parfaitement valide.",
  },
  {
    question: "Qu'est-ce que le tawfiq en islam ?",
    answer:
      "Le tawfiq (توفيق) désigne la réussite accordée par Allah, l&apos;assistance divine qui guide le croyant vers le bien et le succès. Contrairement à la conception matérialiste de la réussite, le tawfiq englobe la réussite spirituelle, familiale, professionnelle et dans l&apos;au-delà. Le croyant recherche le tawfiq en combinant l&apos;effort personnel (asbab) et l&apos;invocation constante. Le prophète Shu&apos;ayb a dit : « Ma réussite ne dépend que d&apos;Allah » (Coran, 11:88).",
  },
  {
    question: "Quel est le meilleur moment pour faire une doua pour la réussite ?",
    answer:
      "Les meilleurs moments pour invoquer Allah pour la réussite sont : le dernier tiers de la nuit (tahajjud), lors de la prosternation (sujud), entre l&apos;adhan et l&apos;iqama, le vendredi après la prière du Asr, et le matin après la prière du Fajr. Le Prophète (paix et salut sur lui) demandait la baraka pour sa communauté dans les premières heures de la matinée.",
  },
  {
    question: "La doua pour le rizq (subsistance) est-elle authentique ?",
    answer:
      "Oui, plusieurs douas authentiques pour le rizq sont rapportées dans la Sunna. Parmi elles : « Allahumma inni as&apos;aluka &apos;ilman nafi&apos;an wa rizqan tayyiban wa &apos;amalan mutaqabbalan » (Seigneur, je Te demande un savoir utile, une subsistance bonne et des actes acceptés), rapportée par Ibn Majah. Le Prophète récitait cette invocation chaque matin après la prière du Fajr.",
  },
  {
    question: "Comment allier effort et doua pour réussir en islam ?",
    answer:
      "L&apos;islam enseigne de combiner l&apos;effort (akhdh bil-asbab) et la confiance en Allah (tawakkul). Le Prophète (paix et salut sur lui) a dit : « Attache ta chamelle puis place ta confiance en Allah » (at-Tirmidhi). Concrètement, cela signifie étudier sérieusement puis invoquer Allah, travailler avec excellence puis demander la baraka. La doua sans effort est de la négligence, et l&apos;effort sans doua est de l&apos;orgueil.",
  },
  {
    question: "Existe-t-il une doua spécifique pour la réussite professionnelle ?",
    answer:
      "Il n&apos;existe pas une doua unique réservée au travail, mais plusieurs invocations prophétiques s&apos;appliquent parfaitement à la vie professionnelle. La doua « Allahumma inni a&apos;udhu bika minal-hammi wal-hazan, wal-&apos;ajzi wal-kasal » (Seigneur, je cherche refuge auprès de Toi contre le souci, la tristesse, l&apos;incapacité et la paresse) couvre les obstacles professionnels. Combinée à la doua pour le rizq et la demande de baraka matinale, elle constitue un programme complet d&apos;invocation pour la carrière.",
  },
];

export default function DouaReussiteIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-reussite-islam/#article",
        headline:
          "Doua pour la réussite en islam : invocations authentiques",
        description:
          "Découvrez les douas pour la réussite en islam : invocations authentiques en arabe, doua de Moussa, doua pour la facilité, le rizq et la baraka.",
        image: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        datePublished: "2026-03-13",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-reussite-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-reussite-islam/#breadcrumb",
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
            name: "Doua pour la réussite",
            item: "https://www.islamreligion.fr/doua-reussite-islam",
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
          title="Doua pour la réussite en islam : invocations authentiques"
          subtitle="Les invocations prophétiques pour obtenir le tawfiq (réussite divine), la facilité et la baraka dans les études, le travail et la vie quotidienne. Textes en arabe, phonétique et traduction."
          imageSrc="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
          imageAlt="Coran ouvert avec calligraphie dorée et lumière symbolisant la réussite et la guidée divine en islam"
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
                <span className="text-foreground">Doua pour la réussite</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La réussite en islam ne se limite pas au succès matériel :
                  elle englobe le tawfiq, cette assistance divine qui guide le
                  croyant vers le bien dans tous les domaines de sa vie. Le
                  Coran et la Sunna regorgent d&apos;invocations authentiques
                  pour demander à Allah la facilité, la baraka dans la
                  subsistance, la réussite dans les études et le travail.
                  Parmi les plus puissantes : la doua de Moussa &laquo;&nbsp;Rabbi
                  ishrah li sadri&nbsp;&raquo; et la doua prophétique pour la
                  facilité. L&apos;islam enseigne d&apos;allier l&apos;effort
                  sincère à l&apos;invocation constante pour atteindre la
                  véritable réussite, ici-bas et dans l&apos;au-delà.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La réussite (tawfiq) en islam */}
              {/* ============================================ */}
              <section id="reussite-tawfiq" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La réussite (tawfiq) en islam : une vision globale
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le concept de réussite en islam dépasse largement la
                  notion occidentale de succès matériel ou professionnel. Le
                  terme arabe <strong>tawfiq</strong> (توفيق) désigne
                  l&apos;assistance divine qui conduit le croyant vers le bien
                  et la réussite dans toutes les dimensions de sa vie :
                  spirituelle, familiale, professionnelle et sociale.
                  Contrairement à une conception purement individualiste, le
                  tawfiq est un don d&apos;Allah qui se mérite par
                  l&apos;effort, la piété et l&apos;invocation sincère.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran pose le fondement de cette vision à travers la
                  parole du prophète Shu&apos;ayb (paix sur lui) qui
                  affirme : &laquo;&nbsp;Ma réussite ne dépend que
                  d&apos;Allah. En Lui je place ma confiance et c&apos;est
                  vers Lui que je reviens repentant&nbsp;&raquo; (Coran,
                  sourate Hud, 11:88). Ce verset établit un principe
                  fondamental : toute réussite véritable provient d&apos;Allah,
                  et le croyant doit en être conscient pour ne pas tomber
                  dans l&apos;orgueil ni dans le désespoir.
                </p>

                <HadithCard
                  arabic="إن الله يحب إذا عمل أحدكم عملا أن يتقنه"
                  text="Allah aime que lorsque l'un d'entre vous accomplit un travail, il le fasse avec excellence (itqan)."
                  source="Rapporté par al-Bayhaqi dans Shu'ab al-Iman (4929)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre un aspect essentiel de la réussite en
                  islam : l&apos;excellence dans le travail (itqan) est un
                  acte d&apos;adoration en soi. Le musulman ne travaille pas
                  uniquement pour obtenir un salaire ou un diplôme, mais pour
                  plaire à Allah par la qualité de son effort. Cette
                  mentalité transforme chaque tâche quotidienne en une forme
                  d&apos;ibadah (adoration) et ouvre les portes du tawfiq.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le tawfiq est un don divin :</strong>{" "}
                      il ne s&apos;obtient pas uniquement par l&apos;effort
                      humain, mais par la combinaison de l&apos;effort et de
                      la grâce d&apos;Allah. C&apos;est pourquoi la{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en islam</Link>{" "}
                      est indispensable pour quiconque recherche la réussite.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La réussite de l&apos;au-delà prime :</strong>{" "}
                      le Coran qualifie les gens du Paradis de
                      &laquo;&nbsp;muflihun&nbsp;&raquo; (ceux qui ont
                      réussi), montrant que la véritable réussite est
                      éternelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La piété comme clé :</strong> Allah dit
                      &laquo;&nbsp;Quiconque craint Allah, Il lui accordera
                      une issue favorable&nbsp;&raquo; (Coran, 65:2). La
                      taqwa (conscience d&apos;Allah) est la première
                      condition pour obtenir le tawfiq dans ses projets.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en invocation avec rayons dorés symbolisant la doua pour la réussite en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua de Moussa */}
              {/* ============================================ */}
              <section id="doua-moussa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de Moussa : &laquo;&nbsp;Rabbi ishrah li sadri&nbsp;&raquo;
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua de Moussa (paix sur lui) est l&apos;une des
                  invocations les plus récitées par les musulmans avant un
                  défi important. Lorsqu&apos;Allah lui ordonna d&apos;aller
                  confronter Pharaon, le tyran le plus puissant de son
                  époque, Moussa adressa à son Seigneur cette invocation
                  magnifique rapportée dans la sourate Ta-Ha. Elle exprime
                  le besoin humain fondamental d&apos;être soutenu par Allah
                  dans les moments décisifs.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi ishrah li sadri, wa yassir li amri, wahlul &apos;uqdatan min lisani, yafqahu qawli
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, ouvre-moi ma poitrine, facilite-moi ma tâche, et dénoue un noeud de ma langue afin qu&apos;ils comprennent mes paroles&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ta-Ha (20:25-28)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua est d&apos;une richesse remarquable car elle
                  couvre trois dimensions essentielles de la réussite. La
                  première, &laquo;&nbsp;ouvre-moi ma poitrine&nbsp;&raquo;
                  (ishrah li sadri), demande l&apos;ouverture du coeur,
                  c&apos;est-à-dire la sérénité intérieure, la confiance et
                  l&apos;absence d&apos;anxiété. Sans cette paix intérieure,
                  aucune réussite extérieure n&apos;est véritablement
                  possible.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La deuxième dimension, &laquo;&nbsp;facilite-moi ma
                  tâche&nbsp;&raquo; (yassir li amri), est une demande de
                  facilitation divine. Le croyant reconnaît que même avec
                  les meilleures compétences, il a besoin de l&apos;aide
                  d&apos;Allah pour que les choses se déroulent sans
                  obstacle. Enfin, la troisième dimension concerne
                  l&apos;éloquence et la clarté d&apos;expression, un atout
                  indispensable dans les études, le travail et toute
                  interaction sociale. Les étudiants, les professionnels et
                  les prédicateurs récitent cette doua avant chaque défi
                  pour obtenir l&apos;aide d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants soulignent que Moussa a prononcé cette
                  invocation alors qu&apos;il se préparait à accomplir
                  l&apos;une des missions les plus difficiles de
                  l&apos;histoire : affronter le plus grand tyran de son
                  époque. Si un prophète d&apos;Allah ressentait le besoin
                  d&apos;invoquer pour obtenir la facilité et la sérénité,
                  combien plus le simple croyant en a-t-il besoin dans ses
                  défis quotidiens. Cette doua est donc recommandée avant
                  tout examen, entretien d&apos;embauche, présentation
                  publique ou décision importante. Pour d&apos;autres
                  invocations liées aux examens, consultez notre article sur
                  la{" "}
                  <Link href="/doua-examen-reussite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour réussir un examen en islam</Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Doua pour la facilité */}
              {/* ============================================ */}
              <section id="doua-facilite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour la facilité : demander à Allah de rendre les choses aisées
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) enseignait
                  régulièrement à ses compagnons des invocations pour
                  demander la facilité dans leurs affaires. Cette catégorie
                  de douas est particulièrement précieuse car elle
                  s&apos;applique à toutes les situations de la vie :
                  difficultés professionnelles, obstacles administratifs,
                  épreuves personnelles ou défis académiques. Le principe
                  fondamental est que seul Allah peut véritablement rendre
                  facile ce qui paraît difficile.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma la sahla illa ma ja&apos;altahu sahlan, wa Anta taj&apos;alul-hazna idha shi&apos;ta sahlan
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, rien n&apos;est facile sauf ce que Tu as rendu facile, et Tu es Celui qui, si Tu le veux, rends la difficulté facile&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Hibban (974), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation prophétique est d&apos;une profondeur
                  théologique remarquable. Elle affirme deux vérités
                  fondamentales : premièrement, que rien dans ce monde
                  n&apos;est intrinsèquement facile ou difficile, car
                  c&apos;est Allah qui détermine la nature de chaque chose.
                  Deuxièmement, qu&apos;Allah a le pouvoir de transformer
                  instantanément la difficulté en facilité par Sa simple
                  volonté. Cette conviction libère le croyant de
                  l&apos;anxiété face aux obstacles, car il sait que celui
                  qui détient le pouvoir de faciliter est Celui à qui il
                  s&apos;adresse.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter cette doua dans de
                  nombreuses situations : avant un examen, au début
                  d&apos;un nouveau projet, face à un problème qui semble
                  insoluble, ou simplement chaque matin pour demander la
                  facilité dans la journée à venir. Le sheikh al-Albani
                  a authentifié ce hadith selon les conditions de Muslim, ce
                  qui confirme sa fiabilité et l&apos;importance de son
                  intégration dans les pratiques quotidiennes du musulman.
                </p>

                <HadithCard
                  arabic="يسروا ولا تعسروا وبشروا ولا تنفروا"
                  text="Facilitez et ne rendez pas les choses difficiles, annoncez de bonnes nouvelles et ne faites pas fuir les gens."
                  source="Rapporté par al-Bukhari (6125) et Muslim (1734)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith révèle que la facilité est un principe central
                  de l&apos;islam, non seulement dans la relation avec Allah
                  mais aussi dans les rapports humains. Le croyant qui
                  facilite la vie des autres voit sa propre vie facilitée
                  par Allah. C&apos;est un cercle vertueux : demander la
                  facilité à Allah par la doua et offrir la facilité aux
                  autres par le bon comportement. Pour approfondir les{" "}
                  <Link href="/invocations-reussite-facilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations pour la réussite et la facilité</Link>,
                  consultez notre guide dédié.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua pour la subsistance (rizq) */}
              {/* ============================================ */}
              <section id="doua-rizq" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour la subsistance (rizq) : demander à Allah une provision bénie
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>rizq</strong> (رزق) en islam désigne toute
                  forme de provision accordée par Allah : la nourriture,
                  l&apos;argent, la santé, les enfants, le savoir, et même
                  la foi elle-même. Le Coran affirme qu&apos;Allah est
                  ar-Razzaq (le Pourvoyeur suprême) et que la subsistance de
                  chaque créature est garantie par Lui. Cependant, le
                  croyant est invité à demander un rizq
                  &laquo;&nbsp;tayyib&nbsp;&raquo; (bon et licite) et
                  &laquo;&nbsp;halal&nbsp;&raquo; (permis), car la qualité
                  de la provision influence directement la vie spirituelle.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka &apos;ilman nafi&apos;an, wa rizqan tayyiban, wa &apos;amalan mutaqabbalan
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande un savoir utile, une subsistance bonne (et licite) et des actions acceptées&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Majah (925), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation prophétique est d&apos;une concision
                  admirable : en trois demandes, elle couvre les piliers de
                  la réussite complète. Le savoir utile (&apos;ilm nafi&apos;)
                  ouvre les portes de la compréhension et de la compétence.
                  La subsistance bonne (rizq tayyib) assure les moyens
                  matériels nécessaires à une vie digne. Et les actions
                  acceptées (&apos;amal mutaqabbal) garantissent que
                  l&apos;effort fourni sera récompensé par Allah dans
                  l&apos;au-delà. Le Prophète (paix et salut sur lui)
                  récitait cette doua chaque matin après la prière du Fajr,
                  ce qui montre son importance dans la routine spirituelle
                  quotidienne.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que le rizq est lié à plusieurs
                  facteurs spirituels. La piété (taqwa) élargit la
                  subsistance, comme l&apos;affirme le Coran :
                  &laquo;&nbsp;Quiconque craint Allah, Il lui accordera une
                  issue favorable et lui donnera sa subsistance d&apos;où il
                  ne s&apos;y attend pas&nbsp;&raquo; (Coran, 65:2-3). Le
                  maintien des liens de parenté (silat ar-rahim) est
                  également un moyen d&apos;augmenter le rizq, selon le
                  hadith authentique rapporté par al-Bukhari. De même,
                  l&apos;istighfar (demande de pardon) est un moyen
                  d&apos;attirer la provision, comme l&apos;enseignait le
                  prophète Nuh (paix sur lui) à son peuple.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/prosternation-sujud-priere-islam-mosquee.jpg"
                    alt="Prosternation sujud dans une mosquée illustrant la prière et la doua pour la subsistance en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La taqwa élargit le rizq :</strong> la
                      conscience d&apos;Allah et l&apos;obéissance à Ses
                      commandements ouvrent des portes de provision
                      insoupçonnées.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;istighfar attire la provision :</strong>{" "}
                      Nuh (paix sur lui) a dit à son peuple :
                      &laquo;&nbsp;Demandez pardon à votre Seigneur, Il vous
                      enverra du ciel des pluies abondantes&nbsp;&raquo;
                      (Coran, 71:10-11).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les liens de parenté :</strong> le Prophète
                      (paix et salut sur lui) a dit que celui qui veut voir
                      sa subsistance élargie et sa vie prolongée doit
                      maintenir les liens de parenté (al-Bukhari, 5986).
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua pour les études et le travail */}
              {/* ============================================ */}
              <section id="doua-etudes-travail" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour les études et le travail : invocations du quotidien
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La quête du savoir est une obligation en islam. Le
                  Prophète (paix et salut sur lui) a dit :
                  &laquo;&nbsp;La recherche du savoir est une obligation
                  pour tout musulman&nbsp;&raquo; (Ibn Majah). Cette
                  importance accordée à l&apos;apprentissage
                  s&apos;accompagne naturellement d&apos;invocations
                  spécifiques pour demander à Allah de bénir les études, de
                  faciliter la mémorisation et d&apos;accorder le succès
                  dans la vie professionnelle. Ces douas sont le complément
                  spirituel indispensable de l&apos;effort intellectuel.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour augmenter le savoir
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette courte invocation coranique est récitée par des
                  millions d&apos;étudiants musulmans à travers le monde.
                  Elle est la seule doua dans le Coran où Allah ordonne
                  explicitement au Prophète de demander davantage de quelque
                  chose, soulignant la valeur inestimable du savoir.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَّبِّ زِدْنِي عِلْمًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi zidni &apos;ilman
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, augmente-moi en savoir&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ta-Ha (20:114)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour un savoir profitable
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) ne se contentait pas
                  de demander plus de savoir : il demandait un savoir
                  profitable. Car un savoir qui ne profite pas à son
                  détenteur ni aux autres est une charge plutôt qu&apos;une
                  bénédiction. Cette distinction est essentielle pour
                  l&apos;étudiant musulman qui cherche non seulement à
                  accumuler des connaissances, mais à en tirer un bénéfice
                  concret dans sa vie et celle de sa communauté.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma infa&apos;ni bima &apos;allamtani, wa &apos;allimni ma yanfa&apos;uni, wa zidni &apos;ilman
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais-moi profiter de ce que Tu m&apos;as enseigné, enseigne-moi ce qui me sera utile et augmente-moi en savoir&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3599) et Ibn Majah (251)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En ce qui concerne le travail, l&apos;islam valorise
                  l&apos;activité professionnelle comme un moyen noble de
                  gagner sa vie. Le Prophète (paix et salut sur lui) a dit
                  que la meilleure nourriture est celle que l&apos;homme
                  gagne par le travail de ses mains (al-Bukhari). Pour le
                  musulman qui travaille, les invocations matinales et la
                  demande de baraka sont des pratiques essentielles pour
                  bénéficier de la bénédiction divine dans son activité.
                  L&apos;apprentissage de{" "}
                  <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la langue arabe</Link>{" "}
                  permet de réciter ces invocations avec une compréhension
                  profonde de leur sens.
                </p>

                <HadithCard
                  arabic="اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ"
                  text="Seigneur, je cherche refuge auprès de Toi contre le souci et la tristesse, l'incapacité et la paresse, l'avarice et la lâcheté, le poids des dettes et la domination des hommes."
                  source="Rapporté par al-Bukhari (6369)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation complète est un véritable programme de
                  protection contre tous les obstacles à la réussite
                  professionnelle et personnelle. Le souci (hamm) et la
                  tristesse (hazan) paralysent l&apos;énergie créative.
                  L&apos;incapacité (&apos;ajz) et la paresse (kasal)
                  empêchent l&apos;action. L&apos;avarice (bukhl) et la
                  lâcheté (jubn) freinent le développement. Les dettes
                  (dayn) et la domination d&apos;autrui (ghalabat ar-rijal)
                  privent de liberté. En demandant refuge contre ces huit
                  fléaux, le musulman demande à Allah de lever tous les
                  voiles qui pourraient entraver sa réussite.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Doua du matin pour la baraka */}
              {/* ============================================ */}
              <section id="doua-matin-baraka" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua du matin pour la baraka : commencer la journée avec la bénédiction divine
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) accordait une
                  importance considérable aux premières heures de la
                  matinée. Il a enseigné que la baraka (bénédiction divine)
                  se trouve dans le début de la journée et a invoqué Allah
                  pour que sa communauté soit bénie dans ses matinées.
                  Cette sunna prophétique est un trésor pour quiconque
                  recherche la réussite : commencer la journée tôt, avec
                  les adhkar (invocations) du matin, place le croyant sous
                  la protection et la bénédiction d&apos;Allah pour toute
                  la journée.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ بَارِكْ لِأُمَّتِي فِي بُكُورِهَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma barik li ummati fi bukuriha
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, bénis ma communauté dans ses matinées&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (1212), Abu Dawud (2606)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le compagnon Sakhr al-Ghamidi rapporte que le Prophète
                  (paix et salut sur lui) disait cette invocation et que
                  lorsqu&apos;il envoyait une armée ou un détachement, il
                  l&apos;envoyait au début de la journée. Sakhr était
                  lui-même un commerçant qui envoyait ses marchandises au
                  début de la journée, et il devint riche et prospère. Ce
                  témoignage illustre concrètement l&apos;effet de la baraka
                  matinale sur la réussite commerciale et professionnelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Au-delà de cette doua spécifique, les adhkar du matin
                  constituent un bouclier spirituel complet pour la
                  journée. Parmi les invocations matinales essentielles, on
                  trouve la récitation d&apos;Ayat al-Kursi, les trois
                  dernières sourates du Coran (al-Ikhlas, al-Falaq,
                  an-Nas), le tasbih (SubhanAllah), le tahmid
                  (Alhamdulillah) et le takbir (Allahu Akbar). Ces
                  pratiques créent un environnement spirituel propice à la
                  réussite et à la productivité.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Se lever tôt
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La prière du Fajr est le point de départ de la journée
                      bénie. Le musulman qui prie le Fajr à la mosquée est
                      sous la protection d&apos;Allah toute la journée. Se
                      lever tôt permet de profiter des heures les plus
                      productives et les plus bénies de la journée.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Réciter les adhkar du matin
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les invocations du matin protègent contre le mal,
                      attirent la baraka et placent le croyant dans un état
                      de conscience divine qui favorise la concentration et
                      la productivité. Elles se récitent idéalement entre la
                      prière du Fajr et le lever du soleil.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Planifier avec tawakkul
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Après les invocations, le croyant planifie sa journée
                      en plaçant sa confiance en Allah. Le tawakkul ne
                      signifie pas l&apos;absence de planification, mais la
                      certitude que le résultat final est entre les mains
                      d&apos;Allah, ce qui libère de l&apos;anxiété.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Demander la baraka
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La baraka est cette bénédiction divine qui fait que le
                      peu suffit et que le temps semble s&apos;étirer. En
                      demandant la baraka dans son temps, son travail et sa
                      subsistance, le croyant obtient des résultats
                      supérieurs à ce que l&apos;effort seul pourrait
                      produire.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Allier effort et doua */}
              {/* ============================================ */}
              <section id="effort-doua" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Allier effort et doua : la clé de la réussite en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;un des principes les plus importants de l&apos;islam
                  est l&apos;équilibre entre l&apos;effort humain (akhdh
                  bil-asbab, la prise des causes) et la confiance en Allah
                  (tawakkul). Le Prophète (paix et salut sur lui) a résumé
                  ce principe dans un hadith célèbre qui guide le musulman
                  dans sa quête de réussite : fournir l&apos;effort
                  maximal puis s&apos;en remettre à Allah pour le résultat.
                  Ni la doua seule ni l&apos;effort seul ne suffisent :
                  c&apos;est leur combinaison qui constitue la voie
                  prophétique vers la réussite.
                </p>

                <HadithCard
                  arabic="اعْقِلْهَا وَتَوَكَّلْ"
                  text="Attache-la (ta chamelle) puis place ta confiance en Allah."
                  source="Rapporté par at-Tirmidhi (2517)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith, dans sa concision magistrale, établit un
                  protocole de vie pour le musulman. &laquo;&nbsp;Attache ta
                  chamelle&nbsp;&raquo; signifie : prends toutes les
                  précautions nécessaires, travaille avec sérieux, étudie
                  avec assiduité, planifie avec soin.
                  &laquo;&nbsp;Puis place ta confiance en Allah&nbsp;&raquo;
                  signifie : après avoir fourni ton effort maximal,
                  accepte que le résultat est entre les mains d&apos;Allah
                  et ne te tourmente pas avec l&apos;anxiété du résultat.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants distinguent deux erreurs extrêmes que le
                  musulman doit éviter. La première est le
                  &laquo;&nbsp;tawakkul passif&nbsp;&raquo; : celui qui
                  invoque Allah sans fournir aucun effort, espérant que la
                  réussite tombera du ciel. Omar ibn al-Khattab (qu&apos;Allah
                  l&apos;agrée) a condamné cette attitude en disant :
                  &laquo;&nbsp;Le ciel ne fait pas pleuvoir de l&apos;or ni
                  de l&apos;argent.&nbsp;&raquo; La seconde erreur est
                  l&apos;autosuffisance : celui qui travaille dur mais
                  oublie d&apos;invoquer Allah, attribuant sa réussite
                  uniquement à ses propres capacités. Le Coran met en garde
                  contre cette attitude à travers l&apos;histoire de Qarun
                  qui dit : &laquo;&nbsp;C&apos;est par une science que je
                  possède que ceci m&apos;a été donné&nbsp;&raquo; (Coran,
                  28:78).
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Définir des objectifs clairs avec l&apos;intention (niyyah)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Avant tout projet, le musulman purifie son intention
                        pour Allah. Un objectif professionnel ou académique
                        devient un acte d&apos;adoration lorsqu&apos;il est
                        accompli pour plaire à Allah, subvenir aux besoins de
                        sa famille ou servir la communauté.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Fournir l&apos;effort maximal (itqan)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Étudier avec rigueur, travailler avec excellence,
                        se former continuellement. L&apos;islam condamne la
                        médiocrité et valorise l&apos;effort sincère. Le
                        Prophète a dit qu&apos;Allah aime l&apos;excellence
                        dans le travail.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Invoquer Allah à chaque étape
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Avant, pendant et après chaque effort, le croyant
                        invoque Allah. La doua de Moussa avant un défi, la
                        doua pour la facilité face à un obstacle, et le
                        remerciement (shukr) après la réussite forment un
                        cycle spirituel complet.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Accepter le qadar (décret divin)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le résultat ne correspond pas aux attentes, le
                        musulman accepte le décret d&apos;Allah avec
                        sérénité, sachant que ce qui l&apos;a manqué ne
                        l&apos;aurait jamais atteint et que ce qui
                        l&apos;a atteint ne l&apos;aurait jamais manqué.
                        Cette conviction libère du regret et ouvre la voie à
                        de nouvelles opportunités.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Maintenir la constance (istiqama)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La réussite durable ne vient pas d&apos;un effort
                        ponctuel mais d&apos;une constance dans le travail
                        et l&apos;invocation. Le Prophète (paix et salut sur
                        lui) a dit que les actes les plus aimés d&apos;Allah
                        sont les plus réguliers, même s&apos;ils sont peu
                        nombreux (al-Bukhari et Muslim).
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, la réussite en islam repose sur un triangle
                  vertueux : l&apos;effort sincère, l&apos;invocation
                  constante et la confiance en Allah. Ce modèle prophétique
                  a produit une civilisation qui a excellé dans les
                  sciences, les arts, le commerce et la spiritualité
                  pendant des siècles. Le musulman d&apos;aujourd&apos;hui
                  peut s&apos;inspirer de cet héritage en appliquant ces
                  principes dans sa vie quotidienne. Pour découvrir
                  d&apos;autres invocations liées à la facilité et à la
                  réussite, consultez notre page sur les{" "}
                  <Link href="/invocations-reussite-facilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations pour la réussite et la facilité</Link>.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La doua sans effort est négligence :</strong>{" "}
                      invoquer Allah pour réussir un examen sans avoir
                      révisé n&apos;est pas du tawakkul, c&apos;est de la
                      paresse déguisée en spiritualité.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;effort sans doua est orgueil :</strong>{" "}
                      travailler dur en oubliant qu&apos;Allah est la source
                      de toute réussite mène à l&apos;arrogance et prive le
                      croyant de la baraka divine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le shukr (gratitude) préserve la réussite :</strong>{" "}
                      remercier Allah après chaque succès est essentiel, car
                      le Coran affirme : &laquo;&nbsp;Si vous êtes
                      reconnaissants, Je vous ajouterai&nbsp;&raquo;
                      (Coran, 14:7). La gratitude multiplie les bienfaits.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour réussir un examen en islam"
                  description="Découvrez les invocations spécifiques pour les examens : douas avant, pendant et après l&apos;épreuve, avec les conseils prophétiques pour maximiser vos chances de réussite."
                  href="/doua-examen-reussite-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter les douas avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles sur les invocations en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/doua-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en islam (guide complet)
                  </Link>
                  <Link
                    href="/doua-examen-reussite-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour réussir un examen
                  </Link>
                  <Link
                    href="/invocations-reussite-facilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Invocations pour la réussite
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/istikhara-priere-consultation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prière de consultation (istikhara)
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
