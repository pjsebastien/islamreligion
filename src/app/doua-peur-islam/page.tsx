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
    "Doua contre la peur en islam : invocations authentiques pour vaincre al-khawf",
  description:
    "Découvrez les douas contre la peur en islam : invocations authentiques en arabe avec phonétique et traduction, hadiths sur al-khawf, doua a&apos;udhu bi kalimatillahi at-tammati, HasbiyAllahu la ilaha illa Huwa, tawakkul et versets coraniques sur la peur.",
  openGraph: {
    title:
      "Doua contre la peur en islam : invocations authentiques pour vaincre al-khawf",
    description:
      "Les invocations authentiques contre la peur en islam : textes en arabe, phonétique, traduction et hadiths. Douas prophétiques pour apaiser la crainte et renforcer le tawakkul.",
    url: "https://www.islamreligion.fr/doua-peur-islam",
    images: [
      {
        url: "/images/mains-priere-doua-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-peur-islam",
  },
};

const tocItems = [
  { id: "peur-islam", label: "La peur (al-khawf) en islam" },
  { id: "doua-refuge-paroles-allah", label: "Doua a'udhu bi kalimatillahi at-tammati" },
  { id: "hasbiyallahu", label: "HasbiyAllahu la ilaha illa Huwa" },
  { id: "douas-peur", label: "Douas authentiques contre la peur" },
  { id: "tawakkul", label: "Le tawakkul : la confiance en Allah" },
  { id: "versets-coraniques-peur", label: "Versets coraniques sur la peur" },
  { id: "conseils-pratiques", label: "Conseils pratiques pour vaincre la peur" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua contre la peur en islam ?",
    answer:
      "Parmi les meilleures douas contre la peur, on trouve l&apos;invocation « A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq » (Je cherche refuge dans les paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé), rapportée par Muslim. Le Prophète (paix et salut sur lui) la recommandait notamment lors des haltes de voyage et pour se protéger de tout mal. La doua « HasbiyAllahu la ilaha illa Huwa » est également très puissante pour dissiper la peur.",
  },
  {
    question: "Que dit le Coran sur la peur ?",
    answer:
      "Le Coran aborde la peur sous plusieurs angles. Allah rassure les croyants : « Certes, les alliés d&apos;Allah n&apos;auront aucune crainte et ne seront point affligés » (Younous, 10:62). Il mentionne aussi que la peur est une épreuve : « Nous vous éprouverons par un peu de peur, de faim et de diminution de biens » (Al-Baqara, 2:155). Le Coran enseigne que la peur d&apos;Allah (taqwa) est la seule crainte légitime, et que la confiance en Allah dissipe toutes les autres peurs.",
  },
  {
    question: "Comment vaincre la peur la nuit en islam ?",
    answer:
      "Pour vaincre la peur nocturne, le Prophète (paix et salut sur lui) recommandait de réciter les trois dernières sourates du Coran (al-Ikhlas, al-Falaq, an-Nas) en soufflant dans ses mains et en les passant sur son corps avant de dormir. Il enseignait aussi la doua « A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq » pour se protéger des frayeurs de la nuit. Réciter Ayat al-Kursi avant de dormir assure également la protection divine.",
  },
  {
    question: "Quelle sourate réciter quand on a peur ?",
    answer:
      "Plusieurs sourates sont recommandées en cas de peur : sourate al-Falaq (113) et sourate an-Nas (114) qui sont des protections contre tout mal, sourate al-Baqara dont le Prophète a dit que le diable fuit la maison où elle est récitée, et Ayat al-Kursi (al-Baqara, 2:255) qui est la plus grande protection. La sourate Younous (10:62) contient aussi le verset rassurant sur les alliés d&apos;Allah.",
  },
  {
    question: "Qu'est-ce que le tawakkul en islam ?",
    answer:
      "Le tawakkul est la confiance totale en Allah tout en prenant les moyens nécessaires. Ce n&apos;est pas la passivité, mais l&apos;acte de remettre son affaire à Allah après avoir fait les efforts requis. Le Prophète (paix et salut sur lui) a enseigné : « Attache ton chameau, puis place ta confiance en Allah » (at-Tirmidhi). Le tawakkul est le remède fondamental contre la peur, car celui qui sait qu&apos;Allah gère ses affaires n&apos;a plus rien à craindre des créatures.",
  },
  {
    question: "La peur est-elle un péché en islam ?",
    answer:
      "La peur naturelle n&apos;est pas un péché en islam. C&apos;est un sentiment humain normal qu&apos;Allah a placé dans l&apos;être humain pour sa protection. Ce qui est blâmé, c&apos;est la peur excessive qui empêche de pratiquer sa religion ou de faire le bien, ou la peur des créatures qui prend le dessus sur la crainte d&apos;Allah. Les prophètes eux-mêmes ont ressenti la peur, comme Moussa lorsqu&apos;il vit le bâton se transformer en serpent.",
  },
  {
    question: "Peut-on faire une doua contre la peur en français ?",
    answer:
      "Oui, il est tout à fait permis d&apos;invoquer Allah en français pour demander d&apos;être libéré de la peur. Allah comprend toutes les langues. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe car elles ont été enseignées directement par le Prophète (paix et salut sur lui) et possèdent une bénédiction particulière. Les douas personnelles peuvent être faites dans toute langue.",
  },
  {
    question: "Quelle est la différence entre la peur et la taqwa ?",
    answer:
      "La taqwa (crainte révérencielle d&apos;Allah) est une vertu spirituelle qui pousse le croyant à obéir à Allah et à éviter Ses interdits par amour et respect. La peur (khawf) des créatures ou des événements est un sentiment naturel qui peut devenir négatif s&apos;il paralyse ou éloigne d&apos;Allah. La taqwa est encouragée et recherchée, tandis que la peur excessive des créatures doit être combattue par le tawakkul et les invocations.",
  },
];

export default function DouaPeurIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-peur-islam/#article",
        headline:
          "Doua contre la peur en islam : invocations authentiques pour vaincre al-khawf",
        description:
          "Découvrez les douas contre la peur en islam : invocations authentiques en arabe, hadiths sur al-khawf, tawakkul et versets coraniques pour vaincre la crainte.",
        image: "/images/mains-priere-doua-islam-invocation.jpg",
        datePublished: "2026-04-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-peur-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-peur-islam/#breadcrumb",
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
            name: "Doua contre la peur",
            item: "https://www.islamreligion.fr/doua-peur-islam",
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
          title="Doua contre la peur en islam : invocations pour vaincre al-khawf"
          subtitle="Les invocations authentiques tirées du Coran et de la Sunna pour dissiper la peur, renforcer le tawakkul et trouver la sérénité auprès d'Allah."
          imageSrc="/images/mains-priere-doua-islam-invocation.jpg"
          imageAlt="Mains levées en invocation doua contre la peur en islam avec lumière apaisante"
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
                <span className="text-foreground">Doua contre la peur</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La peur (al-khawf) est un sentiment naturel que tout être humain
                  éprouve. L&apos;islam ne demande pas de supprimer la peur, mais
                  enseigne comment la transformer en force grâce au tawakkul
                  (confiance en Allah) et aux invocations prophétiques. Le Prophète
                  (paix et salut sur lui) a enseigné des douas puissantes pour
                  dissiper la crainte, parmi lesquelles &laquo;&nbsp;A&apos;udhu bi
                  kalimatillahi at-tammati&nbsp;&raquo; et &laquo;&nbsp;HasbiyAllahu
                  la ilaha illa Huwa&nbsp;&raquo;. Le Coran rassure les croyants :
                  les alliés d&apos;Allah n&apos;ont rien à craindre.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La peur en islam */}
              {/* ============================================ */}
              <section id="peur-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La peur (al-khawf) en islam : comprendre ce sentiment
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme arabe <strong>al-khawf</strong> (الخوف) désigne la
                  peur, la crainte ou l&apos;appréhension face à un danger réel
                  ou perçu. En islam, la peur est reconnue comme un sentiment
                  naturel qu&apos;Allah a placé dans l&apos;être humain. Les
                  prophètes eux-mêmes ont ressenti la peur : Moussa (paix sur lui)
                  eut peur lorsque son bâton se transforma en serpent, et Ibrahim
                  (paix sur lui) éprouva de la crainte en voyant les anges sous
                  forme humaine. La peur n&apos;est donc pas un signe de faiblesse
                  dans la foi.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cependant, l&apos;islam distingue clairement entre la peur
                  légitime et la peur excessive qui paralyse le croyant. La seule
                  crainte véritablement digne d&apos;être cultivée est la
                  <strong> taqwa</strong>, la crainte révérencielle d&apos;Allah qui
                  pousse à l&apos;obéissance et à la piété. Quant à la peur des
                  créatures, des événements ou de l&apos;avenir, elle doit être
                  combattue par le rappel d&apos;Allah (dhikr), les invocations
                  authentiques et le renforcement du tawakkul. Le Coran affirme avec
                  force que la peur excessive des créatures est incompatible avec
                  la foi sincère en Allah.
                </p>

                <HadithCard
                  arabic="لا تحزن إن الله معنا"
                  text="Ne sois pas triste, Allah est avec nous."
                  source="Coran, sourate at-Tawba (9:40) - Parole du Prophète (paix et salut sur lui) à Abu Bakr dans la grotte"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette parole prononcée par le Prophète (paix et salut sur lui) à
                  Abu Bakr as-Siddiq dans la grotte de Thawr, alors que les
                  Quraysh les poursuivaient, illustre parfaitement l&apos;attitude
                  islamique face à la peur. Malgré le danger imminent, le Prophète
                  maintint une sérénité absolue fondée sur sa certitude que rien ne
                  pouvait l&apos;atteindre sans la permission d&apos;Allah. Cette
                  confiance inébranlable est le modèle que tout musulman doit
                  chercher à atteindre.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La peur naturelle est reconnue :</strong>{" "}
                      l&apos;islam ne demande pas aux croyants de ne rien
                      ressentir, mais de maîtriser leurs émotions par la foi et
                      les invocations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La taqwa est la crainte louable :</strong> craindre
                      Allah pousse à la piété, tandis que craindre les créatures
                      peut affaiblir la foi.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La peur est une épreuve :</strong> Allah dit :
                      &laquo;&nbsp;Nous vous éprouverons par un peu de peur, de
                      faim et de diminution de biens, de personnes et de
                      fruits&nbsp;&raquo; (al-Baqara, 2:155). Le croyant qui
                      patiente est récompensé. Pour approfondir la gestion de
                      l&apos;angoisse, consultez notre article sur la{" "}
                      <Link href="/doua-angoisse-stress-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua contre l&apos;angoisse et le stress</Link>.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée illustrant la doua contre la peur en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : A'udhu bi kalimatillahi at-tammati */}
              {/* ============================================ */}
              <section id="doua-refuge-paroles-allah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua a&apos;udhu bi kalimatillahi at-tammati : se réfugier dans les paroles d&apos;Allah
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les invocations les plus puissantes contre la peur et tout
                  type de mal, le Prophète (paix et salut sur lui) a enseigné une
                  doua concise mais d&apos;une portée immense. Cette invocation
                  consiste à chercher refuge dans les paroles parfaites d&apos;Allah,
                  c&apos;est-à-dire le Coran et Ses attributs, contre tout mal
                  provenant de la création. Les savants expliquent que les
                  &laquo;&nbsp;paroles parfaites&nbsp;&raquo; (kalimat) d&apos;Allah
                  englobent tout ce qu&apos;Il a révélé et décrété, et que s&apos;y
                  réfugier constitue une protection absolue.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge dans les paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2708)
                  </p>
                </div>

                <HadithCard
                  arabic="من نزل منزلا ثم قال: أعوذ بكلمات الله التامات من شر ما خلق، لم يضره شيء حتى يرتحل من منزله ذلك"
                  text="Quiconque fait halte en un lieu et dit : 'Je cherche refuge dans les paroles parfaites d'Allah contre le mal de ce qu'Il a créé', rien ne lui nuira jusqu'à ce qu'il quitte ce lieu."
                  source="Rapporté par Muslim (2708)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith révèle l&apos;efficacité extraordinaire de cette
                  invocation : celui qui la prononce bénéficie d&apos;une protection
                  complète contre tout mal durant le temps qu&apos;il passe dans
                  le lieu où il l&apos;a récitée. Les savants recommandent de la
                  dire le soir avant de dormir, lors des voyages, en entrant dans
                  un nouveau lieu, et chaque fois que l&apos;on ressent la peur ou
                  l&apos;inquiétude. Sa simplicité en fait une invocation accessible
                  à tous, y compris aux enfants à qui on peut l&apos;enseigner très
                  tôt.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) enseignait également une
                  version étendue de cette doua pour la protection contre les
                  frayeurs nocturnes, les insectes nuisibles et le mauvais oeil.
                  Cette invocation élargie couvre tous les types de peurs
                  auxquels le croyant peut être confronté, qu&apos;elles soient
                  physiques, psychologiques ou spirituelles. La récitation régulière
                  de ces formules crée un véritable bouclier spirituel qui renforce
                  la sérénité et dissipe les angoisses.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimatillahi at-tammati min kulli shaytanin wa hammatin wa min kulli &apos;aynin lammah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge dans les paroles parfaites d&apos;Allah contre tout démon, tout animal nuisible et contre tout mauvais oeil&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (3371) - Ibrahim invoquait ainsi pour Isma&apos;il et Ishaq
                  </p>
                </div>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : HasbiyAllahu la ilaha illa Huwa */}
              {/* ============================================ */}
              <section id="hasbiyallahu" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  HasbiyAllahu la ilaha illa Huwa : la doua de la confiance absolue
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Cette invocation majestueuse est l&apos;une des plus complètes
                  du Coran pour combattre la peur et renforcer la confiance en
                  Allah. Elle affirme simultanément la suffisance d&apos;Allah,
                  Son unicité et Sa souveraineté sur toutes choses. Le croyant qui
                  la récite avec conviction déclare qu&apos;Allah lui suffit
                  pleinement et qu&apos;il n&apos;a besoin de rien ni de personne
                  d&apos;autre. C&apos;est une déclaration de tawakkul absolu
                  qui libère le coeur de toute crainte des créatures.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> HasbiyAllahu la ilaha illa Huwa, &apos;alayhi tawakkaltu wa Huwa Rabbul-&apos;Arshil-&apos;Adhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah me suffit, il n&apos;y a de divinité que Lui. En Lui je place ma confiance et Il est le Seigneur du Trône immense&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate at-Tawba (9:129)
                  </p>
                </div>

                <HadithCard
                  arabic="من قال حين يصبح وحين يمسي: حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم سبع مرات، كفاه الله ما أهمه"
                  text="Quiconque dit le matin et le soir : 'HasbiyAllahu la ilaha illa Huwa, 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Adhim' sept fois, Allah lui suffira contre ce qui le préoccupe."
                  source="Rapporté par Abu Dawud (5081), authentifié par Ibn Hibban"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith enseigne une pratique quotidienne concrète : réciter
                  cette invocation sept fois le matin et sept fois le soir
                  garantit la protection et le soutien d&apos;Allah contre tout
                  ce qui inquiète ou effraie le croyant. La formule
                  &laquo;&nbsp;kafahu Allahu ma ahammahu&nbsp;&raquo; (Allah lui
                  suffira contre ce qui le préoccupe) englobe toutes les formes de
                  peur, d&apos;angoisse et de souci. C&apos;est une prescription
                  prophétique simple mais d&apos;une efficacité spirituelle
                  remarquable.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que cette doua contient quatre piliers
                  spirituels qui en font un remède complet contre la peur.
                  Premièrement, l&apos;affirmation que seul Allah suffit
                  (HasbiyAllahu), ce qui libère de la dépendance envers les
                  créatures. Deuxièmement, le tawhid (la ilaha illa Huwa), qui
                  recentre le coeur sur l&apos;unicité divine. Troisièmement, le
                  tawakkul (&apos;alayhi tawakkaltu), qui est l&apos;acte de
                  remettre ses affaires à Allah. Quatrièmement, la reconnaissance
                  de la grandeur d&apos;Allah (Rabbul-&apos;Arshil-&apos;Adhim),
                  devant laquelle toute peur terrestre s&apos;efface.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Autres douas contre la peur */}
              {/* ============================================ */}
              <section id="douas-peur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas authentiques contre la peur et l&apos;anxiété
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus des deux grandes invocations détaillées précédemment,
                  la Sunna prophétique regorge de douas spécifiques pour combattre
                  la peur sous toutes ses formes. Voici les invocations
                  authentiques les plus recommandées par les savants, accompagnées
                  de leur texte en arabe, de leur phonétique et de leur traduction
                  en français.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua contre la peur et le souci
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) récitait fréquemment cette
                  invocation qui couvre à la fois la peur, l&apos;angoisse, la
                  paresse et toutes les formes de faiblesse qui empêchent
                  le croyant d&apos;avancer. C&apos;est l&apos;une des douas les
                  plus complètes de la Sunna.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu bika minal-hammi wal-hazan, wa a&apos;udhu bika minal-&apos;ajzi wal-kasal, wa a&apos;udhu bika minal-jubni wal-bukhl, wa a&apos;udhu bika min ghalabatid-dayni wa qahrir-rijal
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge auprès de Toi contre le souci et la tristesse, contre l&apos;incapacité et la paresse, contre la lâcheté et l&apos;avarice, contre le poids des dettes et la domination des hommes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6363)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua en cas de frayeur soudaine
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsque le croyant est saisi par une peur soudaine ou un
                  événement effrayant, le Prophète (paix et salut sur lui) a
                  enseigné de se tourner immédiatement vers Allah avec cette
                  invocation simple et directe.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَٰهَ إِلَّا اللَّهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illAllah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité qu&apos;Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Le dhikr le plus simple et le plus puissant pour dissiper la peur instantanément
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour la protection nocturne
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Les peurs nocturnes, les cauchemars et les angoisses du soir
                  sont des épreuves courantes. Le Prophète (paix et salut sur lui)
                  a enseigné plusieurs formules pour s&apos;en protéger, dont cette
                  invocation à réciter avant de dormir. Pour en savoir plus,
                  consultez notre article dédié à la{" "}
                  <Link href="/doua-cauchemar-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua contre les cauchemars</Link>.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ وَشَرِّ عِبَادِهِ وَمِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَنْ يَحْضُرُونِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimatillahi at-tammati min ghadabihi wa &apos;iqabihi wa sharri &apos;ibadihi wa min hamazatish-shayatini wa an yahdurun
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge dans les paroles parfaites d&apos;Allah contre Sa colère, Son châtiment, le mal de Ses serviteurs, les suggestions des démons et leur présence&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (3893), authentifié par al-Albani
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les versets de protection contre la peur"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Le tawakkul */}
              {/* ============================================ */}
              <section id="tawakkul" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tawakkul : la confiance en Allah, remède fondamental contre la peur
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>tawakkul</strong> (التوكل) est la confiance totale et
                  absolue en Allah, tout en prenant les moyens matériels nécessaires.
                  C&apos;est le remède le plus profond contre la peur, car il
                  s&apos;attaque à la racine même du problème : le manque de
                  certitude que tout est entre les mains d&apos;Allah et que rien
                  ne peut arriver sans Sa permission. Le tawakkul n&apos;est pas la
                  passivité ni le fatalisme : c&apos;est l&apos;acte de remettre
                  le résultat de ses efforts à Allah après avoir fait tout ce qui
                  est en son pouvoir.
                </p>

                <HadithCard
                  arabic="لو أنكم تتوكلون على الله حق توكله لرزقكم كما يرزق الطير، تغدو خماصا وتروح بطانا"
                  text="Si vous placiez votre confiance en Allah comme il se doit, Il vous nourrirait comme Il nourrit les oiseaux : ils partent le matin le ventre vide et reviennent le soir rassasiés."
                  source="Rapporté par at-Tirmidhi (2344), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre magnifiquement le tawakkul : l&apos;oiseau
                  ne reste pas dans son nid en attendant que la nourriture lui
                  tombe du ciel. Il sort, cherche, fait l&apos;effort nécessaire,
                  mais c&apos;est Allah qui lui accorde sa subsistance. De même,
                  le croyant qui place sa confiance en Allah agit, travaille et
                  prend les précautions nécessaires, mais il sait que le résultat
                  final appartient à Allah seul. Cette certitude dissipe la peur
                  de l&apos;avenir, la peur de l&apos;échec et la peur de
                  l&apos;inconnu.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Connaître Allah par Ses noms et attributs
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Plus le croyant connaît Allah (al-Hafidh, le Protecteur ;
                        al-Wakil, le Garant ; ar-Razzaq, le Pourvoyeur), plus sa
                        confiance en Lui grandit et sa peur des créatures diminue.
                        L&apos;étude des noms d&apos;Allah est un pilier du
                        tawakkul.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se rappeler que rien n&apos;arrive sans la permission d&apos;Allah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné à Ibn Abbas :
                        &laquo;&nbsp;Sache que si la communauté entière se
                        réunissait pour te nuire, elle ne pourrait te nuire que par
                        une chose qu&apos;Allah a déjà décrétée contre toi&nbsp;&raquo;
                        (at-Tirmidhi). Cette certitude est le fondement de la
                        sérénité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Multiplier les adhkar (rappels) quotidiens
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les invocations du matin et du soir constituent un bouclier
                        quotidien contre la peur. En les récitant régulièrement,
                        le croyant renforce sa connexion avec Allah et nourrit
                        son tawakkul. Découvrez toutes les{" "}
                        <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas en islam</Link>{" "}
                        dans notre guide complet.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Versets coraniques sur la peur */}
              {/* ============================================ */}
              <section id="versets-coraniques-peur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Versets coraniques sur la peur : &laquo;&nbsp;Ala inna awliya&apos;Allahi la khawfun &apos;alayhim&nbsp;&raquo;
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran contient de nombreux versets qui traitent de la peur
                  et qui rassurent les croyants. Le verset le plus emblématique
                  est celui de la sourate Younous où Allah déclare que Ses alliés
                  (awliya&apos;) n&apos;ont absolument rien à craindre. Ce verset
                  constitue une promesse divine directe qui devrait suffire à
                  dissiper toute peur du coeur de celui qui croit sincèrement.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ ۝ الَّذِينَ آمَنُوا وَكَانُوا يَتَّقُونَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ala inna awliya&apos;Allahi la khawfun &apos;alayhim wa la hum yahzanun. Alladhina amanu wa kanu yattaqun
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;En vérité, les alliés d&apos;Allah n&apos;auront aucune crainte et ne seront point affligés. Ceux qui ont cru et qui craignaient Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Younous (10:62-63)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce verset définit qui sont les alliés d&apos;Allah : ceux qui
                  combinent la foi (iman) et la piété (taqwa). Il ne s&apos;agit
                  pas de saints possédant des pouvoirs surnaturels, mais de tout
                  croyant sincère qui s&apos;efforce de vivre selon les
                  enseignements d&apos;Allah. La promesse est claire : pour eux,
                  il n&apos;y a ni peur de l&apos;avenir (la khawf) ni tristesse
                  du passé (la huzn). C&apos;est une libération complète des deux
                  sources principales de souffrance psychologique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  D&apos;autres versets coraniques viennent renforcer ce message
                  d&apos;apaisement. Allah dit dans la sourate al-Baqara :
                  &laquo;&nbsp;Ceux qui dépensent leurs biens dans le sentier
                  d&apos;Allah sans faire suivre leurs dons d&apos;un rappel ou
                  d&apos;un tort, auront leur récompense auprès de leur Seigneur.
                  Nulle crainte pour eux et ils ne seront point
                  affligés&nbsp;&raquo; (2:262). Et dans la sourate al-Ahqaf :
                  &laquo;&nbsp;Ceux qui disent : Notre Seigneur est Allah, puis
                  se tiennent droits, les anges descendent sur eux : N&apos;ayez
                  pas peur et ne soyez pas affligés&nbsp;&raquo; (46:13).
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Fadhkuruni adhkurkum washkuru li wa la takfurun
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Souvenez-vous de Moi, Je me souviendrai de vous. Remerciez-Moi et ne soyez pas ingrats envers Moi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Baqara (2:152)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset établit un lien direct entre le dhikr (rappel
                  d&apos;Allah) et l&apos;apaisement du coeur. Celui qui se
                  souvient d&apos;Allah est rappelé par Allah, c&apos;est-à-dire
                  qu&apos;il bénéficie de Sa protection, de Son soutien et de Sa
                  guidance. Le dhikr constant est donc le remède le plus efficace
                  contre la peur chronique et l&apos;anxiété. Pour approfondir
                  les moyens de{" "}
                  <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">protection en islam</Link>,
                  consultez notre guide dédié.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour vaincre la peur avec l&apos;islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des invocations et des versets coraniques, l&apos;islam
                  propose une approche globale pour combattre la peur. Cette
                  approche combine la dimension spirituelle (doua, dhikr,
                  tawakkul) avec des attitudes pratiques tirées de la Sunna
                  prophétique. Voici les principaux conseils des savants pour
                  transformer la peur en force et en sérénité.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Réciter les adhkar du matin et du soir
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les invocations quotidiennes constituent un bouclier
                      spirituel permanent. Le Prophète (paix et salut sur lui)
                      ne les délaissait jamais. Elles incluent les douas de
                      protection mentionnées dans cet article et créent une
                      barrière contre la peur et l&apos;anxiété.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Maintenir les cinq prières à l&apos;heure
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La salat est le pilier de la connexion avec Allah. Le Coran
                      affirme : &laquo;&nbsp;La prière préserve de la turpitude
                      et du blâmable&nbsp;&raquo; (al-&apos;Ankabut, 29:45).
                      Elle apporte également la sérénité et la tranquillité du
                      coeur face aux épreuves.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Lire le Coran quotidiennement
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Coran est une guérison pour les coeurs. Allah dit :
                      &laquo;&nbsp;N&apos;est-ce pas par le rappel d&apos;Allah
                      que les coeurs se tranquillisent&nbsp;?&nbsp;&raquo;
                      (ar-Ra&apos;d, 13:28). La lecture régulière, même de
                      quelques versets, nourrit la foi et dissipe la peur.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      S&apos;entourer de croyants sincères
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La compagnie des pieux renforce la foi et apaise les
                      coeurs. Le Prophète (paix et salut sur lui) a comparé le
                      bon compagnon au vendeur de musc : même si l&apos;on
                      n&apos;achète rien, on profite de son parfum. L&apos;entourage
                      influence directement le niveau de peur ou de sérénité.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il est important de souligner que l&apos;islam n&apos;interdit
                  pas de consulter un professionnel de santé en cas de peurs
                  pathologiques ou d&apos;anxiété chronique. Le Prophète (paix et
                  salut sur lui) a dit : &laquo;&nbsp;Serviteurs d&apos;Allah,
                  soignez-vous, car Allah n&apos;a pas créé de maladie sans
                  avoir créé son remède&nbsp;&raquo; (Abu Dawud). Les moyens
                  spirituels et les moyens médicaux ne s&apos;opposent pas :
                  ils se complètent dans la vision islamique de la guérison.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Identifier la source de la peur :</strong>{" "}
                      comprendre ce qui effraie permet de mieux cibler les
                      invocations et les actions à entreprendre.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se rappeler les épreuves passées surmontées :</strong>{" "}
                      chaque difficulté traversée est une preuve qu&apos;Allah ne
                      nous abandonne jamais et renforce la confiance pour
                      l&apos;avenir.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Faire la salat al-istikhara :</strong>{" "}
                      lorsque la peur est liée à une décision importante,
                      la prière de consultation apporte clarté et sérénité.
                      Consultez notre article sur les{" "}
                      <Link href="/doua-angoisse-stress-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas contre l&apos;angoisse</Link>{" "}
                      pour des invocations complémentaires.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua de protection en islam"
                  description="Découvrez les invocations prophétiques de protection contre tout mal, le mauvais oeil et les épreuves de la vie."
                  href="/doua-protection-islam"
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
                    Doua en islam (guide complet)
                  </Link>
                  <Link
                    href="/doua-angoisse-stress-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre l&apos;angoisse et le stress
                  </Link>
                  <Link
                    href="/doua-cauchemar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre les cauchemars
                  </Link>
                  <Link
                    href="/doua-protection-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de protection
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
