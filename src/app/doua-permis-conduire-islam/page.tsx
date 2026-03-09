import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua pour le permis de conduire en islam : invocations avant l\u2019examen",
  description:
    "Découvrez les douas authentiques pour le permis de conduire en islam : Rabbi ishrah li sadri, doua de facilité, invocation en sortant de la maison, istikhara et conseils pratiques pour réussir avec tawakkul.",
  openGraph: {
    title:
      "Doua pour le permis de conduire en islam : invocations avant l\u2019examen",
    description:
      "Les invocations authentiques du musulman avant le permis de conduire : textes en arabe, phonétique, traduction et hadiths sur le tawakkul et la facilité.",
    url: "https://www.islamreligion.fr/doua-permis-conduire-islam",
    images: [
      {
        url: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-permis-conduire-islam",
  },
};

const tocItems = [
  { id: "tawakkul-avant-examen", label: "Le tawakkul avant un examen" },
  { id: "doua-rabbi-ishrah-li-sadri", label: "Doua Rabbi ishrah li sadri" },
  { id: "doua-facilite", label: "Doua de facilité (Allahumma la sahla)" },
  { id: "doua-sortir-maison", label: "Doua en sortant de la maison" },
  { id: "istikhara-permis", label: "Istikhara avant le permis" },
  { id: "conseils-reussite", label: "Conseils pratiques pour réussir" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua faire avant de passer le permis de conduire ?",
    answer:
      "Plusieurs invocations authentiques sont recommandées avant de passer le permis de conduire. Parmi les plus connues : « Rabbi ishrah li sadri wa yassir li amri » (Seigneur, ouvre-moi ma poitrine et facilite-moi ma tâche), la doua de facilité « Allahumma la sahla illa ma ja&apos;altahu sahla » et la doua en sortant de la maison « Bismillah, tawakkaltu &apos;alAllah ». Ces invocations sont tirées du Coran et de la Sunna authentique.",
  },
  {
    question: "Peut-on faire la doua du permis de conduire en français ?",
    answer:
      "Oui, il est tout à fait permis de faire des invocations en français. Allah comprend toutes les langues et entend la supplication de chacun de Ses serviteurs. Cependant, il est recommandé d&apos;apprendre les formules prophétiques en arabe, car elles ont été enseignées par le Prophète (paix et salut sur lui) dans cette langue. Les supplications personnelles peuvent être formulées dans la langue que l&apos;on maîtrise le mieux.",
  },
  {
    question: "Est-il permis de faire l\u2019istikhara pour le permis de conduire ?",
    answer:
      "Oui, la prière de consultation (istikhara) peut être accomplie avant toute décision importante, y compris le choix de passer le permis de conduire, le moment de l&apos;examen ou le choix de l&apos;auto-école. L&apos;istikhara consiste à prier deux rak&apos;at puis à réciter la doua spécifique pour demander à Allah de faciliter ce qui est bon et d&apos;écarter ce qui est nuisible.",
  },
  {
    question: "Comment avoir confiance en Allah avant un examen de conduite ?",
    answer:
      "Le tawakkul (confiance en Allah) ne signifie pas rester passif, mais allier la préparation sérieuse à la remise de son sort entre les mains d&apos;Allah. Le Prophète (paix et salut sur lui) a dit : « Attache ta chamelle puis place ta confiance en Allah. » Il faut donc bien réviser le code, s&apos;entraîner à la conduite, puis invoquer Allah avec sincérité avant l&apos;examen.",
  },
  {
    question: "Quelle sourate réciter avant le permis de conduire ?",
    answer:
      "Aucune sourate spécifique n&apos;est prescrite pour le permis de conduire. Cependant, les savants recommandent de réciter sourate Al-Fatiha, les versets 25-28 de sourate Taha (Rabbi ishrah li sadri...) et ayat al-Kursi pour la protection. La récitation du Coran en général apaise le coeur et renforce la sérénité avant un examen.",
  },
  {
    question: "Faut-il faire une aumône avant de passer le permis ?",
    answer:
      "Donner une aumône (sadaqa) avant un examen est une pratique recommandée par les savants. Le Prophète (paix et salut sur lui) a dit : « La sadaqa éteint la colère du Seigneur et repousse la mauvaise mort. » Bien qu&apos;il n&apos;existe pas de texte liant spécifiquement la sadaqa au permis de conduire, l&apos;aumône est un moyen reconnu d&apos;attirer la bénédiction d&apos;Allah dans ses affaires.",
  },
  {
    question: "Que dire après avoir obtenu le permis de conduire ?",
    answer:
      "Après avoir obtenu le permis de conduire, il est recommandé de remercier Allah en disant « Alhamdulillah » (louange à Allah) et de prononcer la doua du nouveau véhicule lorsque l&apos;on conduit pour la première fois : « Subhana-lladhi sakhkhara lana hadha wa ma kunna lahu muqrinin » (Gloire à Celui qui nous a assujetti ceci alors que nous n&apos;étions pas capables de le maîtriser). Cette invocation est tirée du Coran (sourate Az-Zukhruf, 43:13).",
  },
  {
    question: "La doua peut-elle remplacer la préparation au permis de conduire ?",
    answer:
      "Non, la doua ne remplace jamais les causes matérielles. L&apos;islam enseigne de prendre les moyens concrets (réviser le code, s&apos;entraîner à la conduite, respecter les règles de circulation) tout en plaçant sa confiance en Allah. Négliger la préparation en se contentant d&apos;invoquer serait contraire au principe du tawakkul authentique enseigné par le Prophète (paix et salut sur lui).",
  },
];

export default function DouaPermisConduireIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-permis-conduire-islam/#article",
        headline:
          "Doua pour le permis de conduire en islam : invocations avant l\u2019examen",
        description:
          "Découvrez les douas authentiques pour le permis de conduire en islam : Rabbi ishrah li sadri, doua de facilité, invocation en sortant de la maison, istikhara et conseils pratiques.",
        image: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        datePublished: "2026-04-06",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-permis-conduire-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-permis-conduire-islam/#breadcrumb",
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
            name: "Doua pour le permis de conduire",
            item: "https://www.islamreligion.fr/doua-permis-conduire-islam",
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
          title="Doua pour le permis de conduire en islam"
          subtitle="Les invocations authentiques du musulman avant l&apos;examen du permis : textes en arabe, phonétique et traduction française pour aborder cette épreuve avec sérénité et tawakkul."
          imageSrc="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
          imageAlt="Intérieur de mosquée avec arches et lumière symbolisant la sérénité avant un examen de permis de conduire en islam"
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
                <span className="text-foreground">Doua pour le permis de conduire</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Passer le permis de conduire est une étape importante qui peut
                  générer du stress et de l&apos;appréhension. L&apos;islam
                  enseigne au musulman de combiner la préparation sérieuse avec
                  le tawakkul (confiance en Allah) et les invocations
                  prophétiques. Parmi les douas les plus adaptées à cette
                  situation : la doua de Moussa &laquo;&nbsp;Rabbi ishrah li
                  sadri&nbsp;&raquo;, la doua de facilité et l&apos;invocation
                  en sortant de la maison. Ces formules authentiques apaisent le
                  coeur et renforcent la confiance du candidat.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le tawakkul avant un examen */}
              {/* ============================================ */}
              <section id="tawakkul-avant-examen" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tawakkul : la confiance en Allah avant un examen
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>tawakkul</strong> est un pilier de la foi
                  musulmane qui consiste à placer sa confiance totale en Allah
                  après avoir pris toutes les causes matérielles nécessaires.
                  Avant de passer le permis de conduire, ce principe prend tout
                  son sens : le candidat doit réviser le code de la route,
                  multiplier les heures de conduite, puis remettre le résultat
                  entre les mains d&apos;Allah avec sérénité.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Trop souvent, le tawakkul est mal compris. Certains pensent
                  qu&apos;il suffit d&apos;invoquer Allah sans fournir
                  d&apos;efforts. Or, le Prophète (paix et salut sur lui) a
                  clairement enseigné l&apos;équilibre entre la confiance en
                  Allah et la prise des moyens concrets. Cette démarche
                  s&apos;applique à tout examen, y compris celui du permis de
                  conduire : la préparation est un devoir, et l&apos;invocation
                  est un complément spirituel qui apaise l&apos;âme et
                  renforce la détermination.
                </p>

                <HadithCard
                  arabic="اعقلها وتوكل"
                  text="Attache-la (ta chamelle) puis place ta confiance en Allah."
                  source="Rapporté par at-Tirmidhi (2517)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith célèbre résume parfaitement l&apos;attitude du
                  musulman face à un examen. &laquo;&nbsp;Attacher sa
                  chamelle&nbsp;&raquo; signifie prendre toutes les précautions
                  nécessaires : bien connaître les règles de priorité, maîtriser
                  les manoeuvres, s&apos;exercer dans des conditions réelles.
                  Ensuite, &laquo;&nbsp;placer sa confiance en Allah&nbsp;&raquo;
                  signifie accepter que le résultat final appartient à Allah
                  seul, ce qui libère du stress paralysant et permet
                  d&apos;aborder l&apos;épreuve avec calme et lucidité.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Préparation rigoureuse :</strong> le tawakkul
                      n&apos;exclut jamais l&apos;effort personnel. Réviser le
                      code, s&apos;entraîner à la conduite et respecter les
                      conseils du moniteur font partie des causes à prendre.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Acceptation du décret divin :</strong> si le
                      résultat n&apos;est pas celui espéré, le musulman
                      l&apos;accepte avec patience en sachant qu&apos;Allah a
                      décrété ce qui est meilleur pour lui.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sérénité intérieure :</strong> celui qui
                      s&apos;en remet à Allah se libère de l&apos;angoisse
                      excessive. Le Coran affirme : &laquo;&nbsp;Et quiconque
                      place sa confiance en Allah, Il lui suffit&nbsp;&raquo;
                      (At-Talaq, 65:3).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en invocation doua avant le permis de conduire en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua Rabbi ishrah li sadri */}
              {/* ============================================ */}
              <section id="doua-rabbi-ishrah-li-sadri" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua Rabbi ishrah li sadri : l&apos;invocation de Moussa
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Cette invocation est tirée de la sourate Taha (versets 25-28),
                  lorsque le prophète Moussa (paix sur lui) demanda à Allah de
                  lui ouvrir la poitrine, de lui faciliter sa mission et de
                  délier le noeud de sa langue avant d&apos;affronter Pharaon.
                  Elle est particulièrement adaptée avant toute épreuve où
                  l&apos;on a besoin de calme, de clarté d&apos;esprit et
                  d&apos;aisance dans l&apos;expression.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi ishrah li sadri, wa yassir li amri, wahlul &apos;uqdatan min lisani, yafqahu qawli
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, ouvre-moi ma poitrine, facilite-moi ma tâche, et dénoue le noeud de ma langue afin qu&apos;ils comprennent mes paroles&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Taha (20:25-28)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaque partie de cette invocation répond à un besoin concret
                  du candidat au permis de conduire. &laquo;&nbsp;Ouvre-moi ma
                  poitrine&nbsp;&raquo; correspond à la demande de sérénité
                  intérieure, indispensable pour gérer le stress de
                  l&apos;examen. &laquo;&nbsp;Facilite-moi ma
                  tâche&nbsp;&raquo; est une demande de facilitation qui
                  englobe l&apos;ensemble de l&apos;épreuve, des manoeuvres
                  de stationnement à la gestion des intersections.
                  &laquo;&nbsp;Dénoue le noeud de ma langue&nbsp;&raquo; aide à
                  communiquer clairement avec l&apos;examinateur et à
                  répondre calmement à ses éventuelles questions.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter cette doua avant tout
                  moment où l&apos;on ressent de l&apos;appréhension : avant
                  une leçon de conduite, en attendant dans la salle d&apos;examen
                  du code, ou juste avant de monter dans le véhicule pour
                  l&apos;épreuve pratique. Sa récitation régulière, avec
                  compréhension du sens, apaise le coeur et renforce la
                  confiance en soi par la confiance en Allah. Pour découvrir
                  d&apos;autres{" "}
                  <Link href="/doua-examen-reussite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas pour la réussite aux examens</Link>,
                  consultez notre article dédié.
                </p>

                <HadithCard
                  arabic="اللهم لا سهل إلا ما جعلته سهلا وأنت تجعل الحزن إذا شئت سهلا"
                  text="Ô Allah, rien n'est facile sauf ce que Tu rends facile. Et Tu rends le difficile facile si Tu le veux."
                  source="Rapporté par Ibn Hibban (974), authentifié par al-Albani"
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Doua de facilité */}
              {/* ============================================ */}
              <section id="doua-facilite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de facilité : Allahumma la sahla illa ma ja&apos;altahu sahla
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Cette invocation prophétique est l&apos;une des plus
                  puissantes formules de demande de facilité dans la Sunna. Le
                  Prophète (paix et salut sur lui) l&apos;a enseignée pour
                  toute situation où le croyant fait face à une difficulté.
                  Avant le permis de conduire, elle prend une dimension
                  particulièrement pertinente : le candidat reconnaît que rien
                  n&apos;est facile sans la permission d&apos;Allah, et que
                  Lui seul peut transformer la difficulté en aisance.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma la sahla illa ma ja&apos;altahu sahla, wa Anta taj&apos;alul-hazna idha shi&apos;ta sahla
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, rien n&apos;est facile sauf ce que Tu rends facile. Et Tu rends le difficile facile si Tu le veux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Hibban (974), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La beauté de cette doua réside dans sa structure. Elle
                  commence par une négation absolue : &laquo;&nbsp;rien
                  n&apos;est facile&nbsp;&raquo;, rappelant que toute facilité
                  provient exclusivement d&apos;Allah. Puis elle affirme que
                  même ce qui semble lourd et pénible peut devenir léger par
                  la volonté divine. Cette prise de conscience libère le
                  candidat de la pression qu&apos;il s&apos;impose : ce
                  n&apos;est pas uniquement par ses propres forces qu&apos;il
                  réussira, mais par la permission et l&apos;aide d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter cette invocation à
                  plusieurs reprises, en particulier le matin de l&apos;examen,
                  lors du trajet vers le centre d&apos;examen et juste avant
                  le début de l&apos;épreuve. Elle peut être complétée par la
                  récitation d&apos;ayat al-Kursi (Coran, 2:255) qui procure
                  une protection divine et une tranquillité du coeur.
                  L&apos;association de ces deux textes constitue une
                  préparation spirituelle solide avant toute épreuve.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana atina min ladunka rahmatan wa hayyi&apos; lana min amrina rashada
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-nous de Ta part une miséricorde et prépare-nous une bonne direction dans notre affaire&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Kahf (18:10)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua des gens de la caverne est également très adaptée
                  à la situation du candidat : elle demande à Allah Sa
                  miséricorde et une bonne direction, ce qui correspond
                  exactement au besoin de celui qui s&apos;apprête à conduire
                  un véhicule et à prendre des décisions rapides sur la route.
                  Les{" "}
                  <Link href="/doua-reussite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas pour la réussite en islam</Link>{" "}
                  offrent d&apos;autres formules complémentaires pour les
                  moments d&apos;épreuve.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua en sortant de la maison */}
              {/* ============================================ */}
              <section id="doua-sortir-maison" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua en sortant de la maison le jour du permis
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le matin de l&apos;examen du permis de conduire, le premier
                  geste spirituel recommandé est de prononcer l&apos;invocation
                  prophétique en franchissant le seuil de sa porte. Cette doua
                  place le croyant sous la protection d&apos;Allah dès le
                  début de sa journée et crée un état d&apos;esprit de
                  confiance et de sérénité qui accompagnera le candidat
                  jusqu&apos;à l&apos;épreuve.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah, tawakkaltu &apos;alAllah, wa la hawla wa la quwwata illa billah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, je place ma confiance en Allah. Il n&apos;y a de force ni de puissance qu&apos;en Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5095), at-Tirmidhi (3426)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui qui
                  prononce cette invocation en sortant de chez lui reçoit une
                  triple garantie : il est guidé, protégé et préservé. Les
                  démons s&apos;écartent de son chemin en disant :
                  &laquo;&nbsp;Que faire avec un homme qui a été guidé, protégé
                  et préservé ?&nbsp;&raquo; Cette protection divine est
                  particulièrement précieuse le jour du permis de conduire, où
                  le stress et les distractions peuvent altérer la
                  concentration.
                </p>

                <HadithCard
                  arabic="إذا خرج الرجل من بيته فقال: بسم الله، توكلت على الله، لا حول ولا قوة إلا بالله، يقال له: هديت وكفيت ووقيت"
                  text="Lorsqu'un homme sort de sa maison et dit : 'Au nom d'Allah, je m'en remets à Allah, il n'y a de force ni de puissance qu'en Allah', il lui est dit : tu as été guidé, protégé et préservé."
                  source="Rapporté par Abu Dawud (5095), at-Tirmidhi (3426)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Au-delà de cette invocation principale, il est également
                  recommandé de commencer sa journée par les adhkar du matin
                  (invocations matinales), qui constituent une armure
                  spirituelle pour l&apos;ensemble de la journée. Parmi eux,
                  la récitation de sourate Al-Ikhlas, Al-Falaq et An-Nas trois
                  fois chacune offre une protection complète. Le candidat qui
                  aura accompli ces invocations se sentira apaisé et confiant,
                  sachant qu&apos;il a placé sa journée sous la garde d&apos;Allah.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-chapelet-tasbih-islam-livre-sacre.jpg"
                    alt="Coran et chapelet tasbih symbolisant la préparation spirituelle avant le permis de conduire"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Istikhara avant le permis */}
              {/* ============================================ */}
              <section id="istikhara-permis" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La prière d&apos;istikhara avant le permis de conduire
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;istikhara (prière de consultation) est une sunna
                  confirmée que le Prophète (paix et salut sur lui) enseignait
                  à ses compagnons pour toute décision importante. Bien que le
                  permis de conduire puisse sembler une démarche courante,
                  l&apos;istikhara peut être accomplie pour choisir le bon
                  moment de l&apos;examen, sélectionner une auto-école ou
                  décider de reprendre les leçons après un échec.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni astakhiruka bi &apos;ilmika, wa astaqdiruka bi qudratika, wa as&apos;aluka min fadlikal-&apos;adhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, je Te consulte par Ta science, je Te demande la capacité par Ta puissance et je Te demande de Ton immense grâce&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (1162)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La prière d&apos;istikhara se compose de deux rak&apos;at
                  suivies de la doua spécifique dans laquelle le croyant
                  expose son besoin à Allah. Pour le permis de conduire, on
                  mentionne dans son coeur l&apos;objet de la consultation
                  (passer l&apos;examen à telle date, choisir telle auto-école,
                  etc.) et on demande à Allah de faciliter ce qui est bien et
                  d&apos;écarter ce qui est nuisible.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est important de préciser que l&apos;istikhara ne
                  fonctionne pas comme un signe miraculeux ou un rêve obligatoire.
                  Les savants expliquent que la réponse à l&apos;istikhara se
                  manifeste souvent par une facilitation ou une complication
                  des choses. Si les démarches pour le permis se déroulent
                  naturellement et que le coeur est apaisé, c&apos;est un bon
                  signe. Si au contraire tout se complique de manière
                  inhabituelle, il peut être sage de reporter et de réessayer
                  plus tard. Pour approfondir cette pratique, consultez notre
                  article sur{" "}
                  <Link href="/doua-istikhara-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la doua d&apos;istikhara en islam</Link>.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Quand la faire :</strong> avant de fixer la date
                      de l&apos;examen, lors du choix de l&apos;auto-école ou
                      après un échec pour décider de la suite.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pas de rêve obligatoire :</strong> la réponse
                      vient par la facilitation ou la complication des
                      événements, pas nécessairement par un songe.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Répéter si nécessaire :</strong> il est permis de
                      renouveler l&apos;istikhara plusieurs jours de suite si
                      le coeur n&apos;est pas encore apaisé.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-reussite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour réussir son permis avec la bénédiction d&apos;Allah
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam enseigne une approche holistique de la réussite
                  qui combine la spiritualité et l&apos;action concrète. Voici
                  les conseils que les savants et les personnes expérimentées
                  recommandent au candidat musulman qui souhaite passer son
                  permis de conduire en plaçant sa confiance en Allah.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Commencer par la prière du Fajr
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le jour de l&apos;examen, accomplir la prière du Fajr à
                        l&apos;heure place la journée sous la protection
                        d&apos;Allah. Le Prophète (paix et salut sur lui) a
                        dit que celui qui prie le Fajr est sous la garantie
                        (dhimma) d&apos;Allah. Cette baraka accompagnera le
                        candidat tout au long de sa journée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter les adhkar du matin
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les invocations matinales sont une armure spirituelle
                        pour la journée. Elles incluent la récitation des trois
                        dernières sourates, ayat al-Kursi, et les formules de
                        protection prophétiques. Le candidat qui les accomplit
                        bénéficie d&apos;une sérénité et d&apos;une protection
                        accrues.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Donner une sadaqa (aumône) avant l&apos;examen
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;aumône est un moyen reconnu d&apos;attirer la
                        bénédiction d&apos;Allah dans ses affaires. Même un
                        petit montant, donné avec sincérité, peut ouvrir les
                        portes de la facilité. Le Prophète (paix et salut sur
                        lui) a encouragé la sadaqa comme un moyen de repousser
                        les épreuves et les difficultés.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Multiplier les invocations le jour J
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le matin de l&apos;examen, réciter les douas mentionnées
                        dans cet article : Rabbi ishrah li sadri, la doua de
                        facilité, et l&apos;invocation en sortant de la maison.
                        Pendant l&apos;attente, occuper son temps par le dhikr
                        (rappel d&apos;Allah) plutôt que par l&apos;anxiété.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Accepter le résultat avec gratitude
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        En cas de réussite, dire &laquo;&nbsp;Alhamdulillah&nbsp;&raquo;
                        et remercier Allah. En cas d&apos;échec, garder patience
                        et dire &laquo;&nbsp;Inna lillahi wa inna ilayhi
                        raji&apos;un&nbsp;&raquo; (à Allah nous appartenons et
                        vers Lui nous retournons). Chaque épreuve est une
                        occasion de purification et d&apos;élévation spirituelle.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;attitude du musulman face au résultat reflète la
                  profondeur de son tawakkul. Le Prophète (paix et salut sur
                  lui) a dit : &laquo;&nbsp;L&apos;affaire du croyant est
                  étonnante : tout est un bien pour lui. S&apos;il lui arrive
                  un bonheur, il remercie et c&apos;est un bien. S&apos;il
                  lui arrive un malheur, il patiente et c&apos;est un
                  bien&nbsp;&raquo; (Muslim). Le permis de conduire, qu&apos;il
                  soit obtenu du premier coup ou après plusieurs tentatives,
                  fait partie du décret d&apos;Allah que le croyant accueille
                  avec sagesse. Pour retrouver d&apos;autres{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations authentiques en islam</Link>,
                  explorez notre recueil complet.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour la réussite en islam"
                  description="Découvrez les invocations prophétiques pour demander la réussite à Allah dans tous les domaines de la vie."
                  href="/doua-reussite-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
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
                    Doua en islam (recueil)
                  </Link>
                  <Link
                    href="/doua-examen-reussite-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour les examens
                  </Link>
                  <Link
                    href="/doua-reussite-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour la réussite
                  </Link>
                  <Link
                    href="/doua-sortir-maison-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en sortant de la maison
                  </Link>
                  <Link
                    href="/doua-nouvelle-voiture-achat-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour une nouvelle voiture
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
