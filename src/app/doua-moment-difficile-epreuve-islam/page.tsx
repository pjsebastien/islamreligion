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
    "Doua pour les moments difficiles et les épreuves en islam : invocations authentiques",
  description:
    "Découvrez les douas pour les moments difficiles en islam : invocations authentiques en arabe avec phonétique et traduction, inna lillahi wa inna ilayhi raji&apos;un, doua de Younous, sabr et patience face aux épreuves.",
  openGraph: {
    title:
      "Doua pour les moments difficiles et les épreuves en islam : invocations authentiques",
    description:
      "Les invocations authentiques pour traverser les épreuves en islam : textes en arabe, phonétique, traduction et hadiths sur la patience et le sabr.",
    url: "https://www.islamreligion.fr/doua-moment-difficile-epreuve-islam",
    images: [
      {
        url: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-moment-difficile-epreuve-islam",
  },
};

const tocItems = [
  { id: "epreuves-islam", label: "Les épreuves en islam : une sagesse divine" },
  { id: "inna-lillahi", label: "Inna lillahi wa inna ilayhi raji'un" },
  { id: "doua-younous", label: "La doua de Younous dans l'épreuve" },
  { id: "patience-sabr", label: "La patience (sabr) face aux difficultés" },
  { id: "douas-epreuves", label: "Douas authentiques pour les moments difficiles" },
  { id: "conseils-pratiques", label: "Conseils pratiques face à l'adversité" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua réciter dans un moment difficile en islam ?",
    answer:
      "Parmi les douas les plus recommandées dans les moments difficiles : « Inna lillahi wa inna ilayhi raji&apos;un, Allahumma ajirni fi musibati wakhluf li khayran minha » (Certes nous appartenons à Allah et c&apos;est vers Lui que nous retournerons, Seigneur accorde-moi une récompense dans mon épreuve et remplace-la par quelque chose de meilleur), la doua de Younous « La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin », et « Allahumma la sahla illa ma ja&apos;altahu sahla » (Seigneur, rien n&apos;est facile sauf ce que Tu rends facile).",
  },
  {
    question: "Comment le Coran parle-t-il des épreuves ?",
    answer:
      "Le Coran mentionne les épreuves comme un moyen de test et de purification. Allah dit : « Nous vous éprouverons certes par un peu de peur, de faim, de diminution de biens, de personnes et de fruits. Et fais la bonne annonce aux endurants » (Coran, 2:155). Les épreuves ne sont pas un signe de punition mais un moyen d&apos;élévation spirituelle pour le croyant qui fait preuve de patience.",
  },
  {
    question: "Qu'est-ce que le sabr (patience) face aux épreuves en islam ?",
    answer:
      "Le sabr (صبر) en islam ne signifie pas la résignation passive mais une endurance active et consciente. Il s&apos;agit de maîtriser ses émotions, de ne pas se plaindre contre le décret divin, de continuer à adorer Allah et de chercher des solutions tout en faisant confiance à Sa sagesse. Le Prophète (paix et salut sur lui) a dit que la patience est une lumière (Muslim).",
  },
  {
    question: "La doua de Younous aide-t-elle dans les moments difficiles ?",
    answer:
      "Oui, la doua de Younous « La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin » est l&apos;une des invocations les plus puissantes pour les moments de détresse. Le Prophète (paix et salut sur lui) a garanti qu&apos;aucun musulman ne la récite sans qu&apos;Allah ne l&apos;exauce (at-Tirmidhi). Younous l&apos;a prononcée dans les ténèbres du ventre de la baleine, et Allah l&apos;a sauvé.",
  },
  {
    question: "Peut-on faire une doua en français dans un moment difficile ?",
    answer:
      "Oui, la doua peut être faite dans n&apos;importe quelle langue, y compris le français. Allah comprend toutes les langues et entend l&apos;appel de chaque serviteur. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe car elles possèdent une puissance spirituelle particulière. Les supplications personnelles en français restent parfaitement valides.",
  },
  {
    question: "Comment garder espoir dans les moments les plus sombres ?",
    answer:
      "L&apos;islam enseigne que l&apos;espoir en Allah (raja&apos;) est un acte d&apos;adoration. Le Prophète (paix et salut sur lui) a interdit au musulman de désespérer de la miséricorde d&apos;Allah. Le Coran rappelle : « Car après la difficulté, il y a certes une facilité » (94:5-6). Le croyant s&apos;appuie sur la prière, la doua, la lecture du Coran et le soutien de la communauté pour traverser les périodes sombres.",
  },
  {
    question: "Quels sont les bienfaits des épreuves pour le musulman ?",
    answer:
      "Les épreuves en islam comportent plusieurs bienfaits : elles effacent les péchés (le Prophète a dit que toute fatigue ou maladie expie les fautes, al-Bukhari), elles élèvent le rang du croyant auprès d&apos;Allah, elles renforcent la foi et le lien avec le Créateur, et elles purifient le coeur de l&apos;attachement excessif à ce monde. Les prophètes furent les plus éprouvés, ce qui montre que l&apos;épreuve est un signe d&apos;amour divin.",
  },
  {
    question: "Quand réciter 'inna lillahi wa inna ilayhi raji'un' ?",
    answer:
      "On récite « inna lillahi wa inna ilayhi raji&apos;un » à chaque épreuve, grande ou petite : décès d&apos;un proche, perte d&apos;un bien, maladie, difficulté professionnelle ou familiale. Le Prophète (paix et salut sur lui) a enseigné de la compléter par : « Allahumma ajirni fi musibati wakhluf li khayran minha » (Seigneur, récompense-moi dans mon épreuve et remplace-la par quelque chose de meilleur). Umm Salama l&apos;a récitée après la mort de son mari, et Allah lui a accordé mieux : le Prophète lui-même.",
  },
];

export default function DouaMomentDifficileEpreuveIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-moment-difficile-epreuve-islam/#article",
        headline:
          "Doua pour les moments difficiles et les épreuves en islam : invocations authentiques",
        description:
          "Découvrez les douas pour les moments difficiles en islam : invocations authentiques en arabe, hadiths sur la patience, doua de Younous et inna lillahi wa inna ilayhi raji'un.",
        image: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        datePublished: "2026-03-23",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-moment-difficile-epreuve-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-moment-difficile-epreuve-islam/#breadcrumb",
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
            name: "Doua pour les moments difficiles",
            item: "https://www.islamreligion.fr/doua-moment-difficile-epreuve-islam",
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
          title="Doua pour les moments difficiles et les épreuves en islam"
          subtitle="Les invocations authentiques du Coran et de la Sunna pour traverser les épreuves avec patience et confiance en Allah. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
          imageAlt="Mains levées en doua dans un moment difficile avec lumière subtile symbolisant l'espoir en islam"
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
                <span className="text-foreground">Doua pour les moments difficiles</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Les épreuves font partie de la vie du croyant et sont une
                  sagesse divine mentionnée à de nombreuses reprises dans le
                  Coran. L&apos;islam offre au musulman un arsenal spirituel
                  puissant pour traverser les moments difficiles : des douas
                  authentiques comme &laquo;&nbsp;inna lillahi wa inna ilayhi
                  raji&apos;un&nbsp;&raquo;, la doua de Younous, et des
                  invocations prophétiques pour demander la facilité. Combinées
                  à la patience (sabr) et à la confiance en Allah (tawakkul),
                  ces invocations transforment l&apos;épreuve en source
                  d&apos;élévation spirituelle et de rapprochement avec le
                  Créateur.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Les épreuves en islam */}
              {/* ============================================ */}
              <section id="epreuves-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les épreuves en islam : une sagesse divine
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, les épreuves (bala&apos;) ne sont pas le fruit du
                  hasard ni un signe d&apos;abandon divin. Elles constituent un
                  élément central de la vie terrestre, voulu par Allah dans Sa
                  sagesse infinie. Le Coran affirme avec clarté que chaque âme
                  sera testée, et que ces tests sont un moyen de purification,
                  d&apos;élévation et de rapprochement avec le Créateur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;Nous vous éprouverons
                  certes par un peu de peur, de faim et de diminution de biens,
                  de personnes et de fruits. Et fais la bonne annonce aux
                  endurants&nbsp;&raquo; (Al-Baqara, 2:155). Ce verset est
                  fondamental car il annonce l&apos;épreuve comme une certitude
                  tout en y associant immédiatement la bonne nouvelle pour ceux
                  qui font preuve de patience. L&apos;épreuve n&apos;est donc
                  pas une fin en soi mais un passage vers une récompense
                  supérieure.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de l&apos;islam distinguent plusieurs sagesses
                  derrière les épreuves. Elles permettent d&apos;expier les
                  péchés, d&apos;élever le rang du croyant auprès d&apos;Allah,
                  de renforcer la foi et de détacher le coeur de
                  l&apos;attachement excessif à ce monde éphémère. Le Prophète
                  (paix et salut sur lui) a enseigné que les plus éprouvés parmi
                  les gens sont les prophètes, puis ceux qui leur ressemblent le
                  plus, puis ceux qui viennent après. Chaque personne est
                  éprouvée selon la force de sa foi.
                </p>

                <HadithCard
                  arabic="أشد الناس بلاء الأنبياء ثم الأمثل فالأمثل، يبتلى الرجل على حسب دينه"
                  text="Les gens les plus éprouvés sont les prophètes, puis ceux qui leur ressemblent le plus. L'homme est éprouvé selon la force de sa foi."
                  source="Rapporté par at-Tirmidhi (2398), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith change radicalement la perspective du croyant face à
                  l&apos;épreuve. Loin d&apos;être un signe de colère divine,
                  l&apos;intensité de l&apos;épreuve peut être proportionnelle à
                  la valeur que le serviteur a auprès d&apos;Allah. Les prophètes
                  Ibrahim, Moussa, Ayyub et Muhammad (paix et salut sur eux
                  tous) ont traversé des épreuves considérables, et c&apos;est
                  précisément cette patience face à l&apos;adversité qui a
                  forgé leur grandeur spirituelle.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;épreuve expie les péchés :</strong>{" "}
                      le Prophète (paix et salut sur lui) a dit que toute
                      fatigue, maladie, souci ou tristesse qui touche le
                      musulman, même une épine qui le pique, est une expiation
                      de ses péchés (al-Bukhari, Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;épreuve élève le rang :</strong>{" "}
                      lorsque le croyant fait preuve de patience, son rang
                      auprès d&apos;Allah s&apos;élève à un degré qu&apos;il
                      n&apos;aurait jamais pu atteindre par ses seules bonnes
                      actions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;épreuve rapproche d&apos;Allah :</strong>{" "}
                      dans les moments de facilité, le coeur peut s&apos;égarer
                      et oublier son Créateur. L&apos;épreuve ramène le serviteur
                      vers Allah avec humilité et sincérité. Pour approfondir
                      les{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                      consultez notre guide complet.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée illustrant la doua dans les moments difficiles en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Inna lillahi wa inna ilayhi raji'un */}
              {/* ============================================ */}
              <section id="inna-lillahi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Inna lillahi wa inna ilayhi raji&apos;un : la doua face à l&apos;épreuve
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Cette formule coranique est la première invocation que le
                  musulman prononce lorsqu&apos;il est frappé par une épreuve.
                  Tirée directement du Coran (Al-Baqara, 2:156), elle exprime
                  une vérité profonde : nous appartenons entièrement à Allah, et
                  c&apos;est vers Lui que nous retournerons. Ce rappel remet
                  chaque événement dans sa juste perspective.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Inna lillahi wa inna ilayhi raji&apos;un
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Certes, nous appartenons à Allah et c&apos;est vers Lui que nous retournerons&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:156)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné à compléter
                  cette formule par une invocation spécifique qui transforme
                  l&apos;épreuve en opportunité. Umm Salama rapporte que le
                  Prophète (paix et salut sur lui) lui a dit :
                </p>

                <HadithCard
                  arabic="ما من مسلم تصيبه مصيبة فيقول ما أمره الله: إنا لله وإنا إليه راجعون، اللهم أجرني في مصيبتي واخلف لي خيرا منها، إلا أخلف الله له خيرا منها"
                  text="Il n'est pas un musulman qui est frappé par une épreuve et dit ce qu'Allah lui a ordonné : 'Inna lillahi wa inna ilayhi raji'un, Allahumma ajirni fi musibati wakhluf li khayran minha' (Seigneur, accorde-moi une récompense dans mon épreuve et remplace-la par quelque chose de meilleur), sans qu'Allah ne lui accorde quelque chose de meilleur en remplacement."
                  source="Rapporté par Muslim (918)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;histoire d&apos;Umm Salama illustre magnifiquement
                  cette promesse divine. Lorsque son mari Abu Salama mourut, elle
                  se demanda qui pourrait être meilleur que lui. Pourtant, elle
                  prononça l&apos;invocation enseignée par le Prophète (paix et
                  salut sur lui). Allah lui accorda alors en remplacement le
                  meilleur des hommes : le Prophète Muhammad (paix et salut sur
                  lui) lui-même, qui l&apos;épousa par la suite.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَاخْلُفْ لِي خَيْرًا مِنْهَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ajirni fi musibati wakhluf li khayran minha
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-moi une récompense dans mon épreuve et remplace-la par quelque chose de meilleur&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (918)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est applicable dans toute situation
                  d&apos;épreuve : la perte d&apos;un proche, une maladie, une
                  difficulté financière, un échec professionnel, une rupture
                  relationnelle ou toute autre adversité. Le croyant qui la
                  prononce avec sincérité et conviction reçoit la double
                  récompense d&apos;être rétribué pour son épreuve et de
                  recevoir quelque chose de meilleur en remplacement. Si vous
                  traversez une période de{" "}
                  <Link href="/doua-angoisse-stress-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">stress et d&apos;angoisse</Link>,
                  cette doua constitue un premier refuge essentiel.
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
              {/* SECTION 3 : La doua de Younous */}
              {/* ============================================ */}
              <section id="doua-younous" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de Younous : l&apos;invocation dans les ténèbres de l&apos;épreuve
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi toutes les invocations recommandées dans les moments
                  difficiles, la doua de Younous (Jonas, paix sur lui) occupe
                  une place exceptionnelle. Englouti par un poisson géant,
                  plongé dans trois couches de ténèbres (la nuit, la mer et le
                  ventre du poisson), Younous se retrouva dans la situation la
                  plus désespérée qu&apos;un être humain puisse imaginer. Et
                  c&apos;est précisément dans cet abîme qu&apos;il adressa à
                  Allah une invocation d&apos;une sincérité absolue.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité que Toi, gloire à Toi, j&apos;étais certes parmi les injustes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Anbiya (21:87)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a garanti la puissance
                  extraordinaire de cette invocation dans un hadith authentique
                  qui ne laisse aucune ambiguïté :
                </p>

                <HadithCard
                  arabic="دعوة ذي النون إذ دعا وهو في بطن الحوت: لا إله إلا أنت سبحانك إني كنت من الظالمين، فإنه لم يدع بها رجل مسلم في شيء قط إلا استجاب الله له"
                  text="L'invocation de Dhoun-Noun (Younous) lorsqu'il invoqua dans le ventre du poisson : 'Il n'y a de divinité que Toi, gloire à Toi, j'étais certes parmi les injustes.' Aucun musulman n'invoque par cette formule pour quoi que ce soit sans qu'Allah ne l'exauce."
                  source="Rapporté par at-Tirmidhi (3505), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce qui rend cette doua si puissante dans les moments
                  difficiles, c&apos;est qu&apos;elle combine trois éléments
                  fondamentaux. Le premier est le tawhid : &laquo;&nbsp;La ilaha
                  illa Anta&nbsp;&raquo; affirme l&apos;unicité absolue
                  d&apos;Allah et reconnaît qu&apos;Il est le seul recours
                  véritable. Le deuxième est la glorification :
                  &laquo;&nbsp;Subhanaka&nbsp;&raquo; déclare la perfection
                  d&apos;Allah et Sa transcendance au-dessus de toute
                  imperfection. Le troisième est l&apos;humilité :
                  &laquo;&nbsp;Inni kuntu min adh-dhalimin&nbsp;&raquo;
                  reconnaît ses propres manquements et implore le pardon.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter cette invocation
                  abondamment dans toute situation de détresse, de difficulté ou
                  d&apos;épreuve. Que l&apos;on traverse une crise personnelle,
                  une maladie, une difficulté financière ou une épreuve
                  émotionnelle, la doua de Younous constitue un refuge
                  spirituel dont l&apos;efficacité est garantie par le Prophète
                  (paix et salut sur lui) lui-même. Pour les moments de{" "}
                  <Link href="/doua-tristesse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">tristesse profonde</Link>,
                  cette invocation est particulièrement recommandée.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Patience et sabr */}
              {/* ============================================ */}
              <section id="patience-sabr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La patience (sabr) : la clé pour traverser les épreuves
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le sabr (صبر) est mentionné plus de 90 fois dans le Coran, ce
                  qui témoigne de son importance capitale dans la vie du
                  croyant. Loin d&apos;être une résignation passive, la patience
                  en islam est une force active qui combine la maîtrise de soi,
                  la confiance en Allah et la persévérance dans l&apos;obéissance
                  à Son commandement malgré l&apos;adversité.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants distinguent trois niveaux de sabr. Le premier est
                  la patience dans l&apos;obéissance à Allah : continuer à prier,
                  à jeûner et à accomplir les actes d&apos;adoration même
                  lorsque les circonstances sont difficiles. Le deuxième est la
                  patience face aux épreuves et aux malheurs : accepter le
                  décret divin sans se plaindre contre Allah tout en cherchant
                  les moyens de surmonter la difficulté. Le troisième est la
                  patience dans l&apos;abstention des péchés : résister aux
                  tentations, surtout lorsque l&apos;épreuve pousse vers la
                  transgression.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les versets sur la patience et le sabr dans les épreuves"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que la
                  véritable patience est celle qui se manifeste au premier choc
                  de l&apos;épreuve. C&apos;est au moment où le malheur frappe
                  que la réaction du croyant est la plus déterminante. Celui qui
                  prononce immédiatement &laquo;&nbsp;inna lillahi wa inna
                  ilayhi raji&apos;un&nbsp;&raquo; et qui contient sa langue et
                  son coeur de toute plainte contre Allah obtient la récompense
                  complète de la patience.
                </p>

                <HadithCard
                  arabic="إنما الصبر عند الصدمة الأولى"
                  text="La véritable patience est celle qui se manifeste au premier choc (de l'épreuve)."
                  source="Rapporté par al-Bukhari (1283) et Muslim (926)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah promet aux patients une récompense sans limite :
                  &laquo;&nbsp;Les endurants auront leur pleine récompense sans
                  aucun compte&nbsp;&raquo; (Az-Zumar, 39:10). Cette promesse
                  est unique dans le Coran : alors que toutes les autres bonnes
                  actions ont une récompense multipliée par dix, par cent ou par
                  sept cents, la patience est la seule vertu dont la récompense
                  est décrite comme illimitée. Cette distinction montre à quel
                  point Allah valorise la patience de Ses serviteurs dans les
                  moments difficiles.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Patience dans l&apos;adoration :</strong>{" "}
                      maintenir ses prières, ses invocations et sa lecture du
                      Coran même dans la difficulté renforce le lien avec Allah
                      et apporte la sérénité du coeur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Patience face au décret :</strong> accepter la
                      volonté d&apos;Allah ne signifie pas ne rien faire, mais
                      agir avec sagesse tout en sachant que le résultat final
                      est entre les mains d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Patience dans l&apos;abstention :</strong>{" "}
                      l&apos;épreuve ne doit jamais pousser le croyant vers le
                      haram. Le recours à des moyens interdits pour résoudre ses
                      problèmes aggrave la situation au lieu de l&apos;améliorer.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas authentiques pour les moments difficiles */}
              {/* ============================================ */}
              <section id="douas-epreuves" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas authentiques pour les moments difficiles
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné à sa communauté
                  de nombreuses invocations spécifiques pour les moments de
                  détresse et de difficulté. Ces douas, tirées du Coran et de la
                  Sunna authentique, sont des remèdes spirituels éprouvés que
                  tout musulman devrait connaître et mémoriser.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour demander la facilité
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation est particulièrement adaptée lorsque le
                  croyant fait face à une situation qui semble insurmontable.
                  Elle reconnaît que seul Allah a le pouvoir de rendre facile ce
                  qui paraît impossible, et que même la tristesse peut être
                  transformée en facilité par Sa volonté.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma la sahla illa ma ja&apos;altahu sahla, wa Anta taj&apos;alul-hazna idha shi&apos;ta sahla
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, rien n&apos;est facile sauf ce que Tu rends facile, et Tu rends la tristesse facile si Tu le veux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Hibban (974), authentifié
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua du Prophète dans la détresse
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation était récitée par le Prophète (paix et salut
                  sur lui) dans les moments d&apos;angoisse et de difficulté.
                  Elle affirme la grandeur et la douceur d&apos;Allah, Seigneur
                  du Trône immense, seul recours véritable dans la détresse.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illAllahul-&apos;Adhimul-Halim, la ilaha illAllahu Rabbul-&apos;Arshil-&apos;Adhim, la ilaha illAllahu Rabbus-samawati wa Rabbul-ardi wa Rabbul-&apos;Arshil-Karim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité qu&apos;Allah, l&apos;Immense, le Doux. Il n&apos;y a de divinité qu&apos;Allah, Seigneur du Trône immense. Il n&apos;y a de divinité qu&apos;Allah, Seigneur des cieux, Seigneur de la terre et Seigneur du noble Trône&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6346) et Muslim (2730)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour se remettre entièrement à Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsque le croyant se sent submergé par les difficultés et que
                  toutes les portes semblent fermées, il se tourne vers Allah
                  avec cette invocation qui exprime un abandon total et confiant
                  entre les mains du Tout-Puissant.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> HasbiyAllahu la ilaha illa Huwa, &apos;alayhi tawakkaltu wa Huwa Rabbul-&apos;Arshil-&apos;Adhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah me suffit, il n&apos;y a de divinité que Lui. C&apos;est en Lui que je place ma confiance, et Il est le Seigneur du Trône immense&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate At-Tawba (9:129)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui qui
                  récite cette invocation sept fois le matin et sept fois le
                  soir, Allah lui suffira contre tout ce qui le préoccupe
                  (Abu Dawud). Cette doua est un bouclier quotidien contre les
                  difficultés et les soucis. Elle nous rappelle que, quelles que
                  soient les circonstances, Allah est le meilleur des
                  protecteurs et le meilleur des soutiens. Si vous souffrez
                  d&apos;
                  <Link href="/doua-angoisse-stress-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">angoisse ou de stress</Link>,
                  cette invocation est un remède recommandé par la Sunna.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour traverser les moments difficiles
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam ne se contente pas d&apos;offrir des invocations :
                  il propose une approche globale qui allie la dimension
                  spirituelle à l&apos;action concrète. Le musulman face à
                  l&apos;épreuve n&apos;est ni passif ni désespéré : il agit
                  avec sagesse et détermination tout en plaçant sa confiance
                  absolue en Allah.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Multiplier les douas aux moments propices
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le dernier tiers de la nuit, lors de la prosternation
                        (sujud), entre l&apos;adhan et l&apos;iqama, et le
                        vendredi après l&apos;Asr sont des moments
                        particulièrement propices à l&apos;exaucement. Combiner
                        les douas mentionnées dans cet article avec ces moments
                        bénis maximise les chances d&apos;une réponse rapide.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se rapprocher du Coran
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La lecture régulière du Coran apaise le coeur et
                        renforce la patience. Allah dit : &laquo;&nbsp;N&apos;est-ce
                        pas par le rappel d&apos;Allah que les coeurs se
                        tranquillisent ?&nbsp;&raquo; (Ar-Ra&apos;d, 13:28). Les
                        sourates Al-Inshirah (94), Ad-Duha (93) et Al-Baqara
                        sont particulièrement recommandées dans les moments
                        difficiles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        S&apos;entourer de personnes de bien
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le soutien communautaire est essentiel dans les épreuves.
                        Le Prophète (paix et salut sur lui) a comparé le bon
                        compagnon au porteur de musc : sa présence apporte du
                        bien. S&apos;entourer de musulmans pieux qui rappellent
                        Allah et encouragent la patience est un moyen efficace
                        de traverser les difficultés.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Prendre les moyens concrets
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le tawakkul (confiance en Allah) n&apos;exclut pas la
                        prise de moyens. Le Prophète (paix et salut sur lui) a
                        dit : &laquo;&nbsp;Attache ta chamelle puis place ta
                        confiance en Allah&nbsp;&raquo; (at-Tirmidhi). Face à
                        une difficulté, il faut agir concrètement (consulter un
                        médecin, chercher des solutions, demander conseil) tout
                        en invoquant Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se rappeler que toute épreuve a une fin
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Allah a promis dans le Coran : &laquo;&nbsp;Car après la
                        difficulté, il y a certes une facilité. Après la
                        difficulté, il y a certes une facilité&nbsp;&raquo;
                        (Al-Inshirah, 94:5-6). La répétition de ce verset
                        souligne l&apos;insistance divine sur cette promesse.
                        Aucune épreuve n&apos;est éternelle, et la facilité
                        viendra inévitablement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Les adhkar quotidiens
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les invocations du matin et du soir constituent un
                      bouclier spirituel qui protège le croyant contre les
                      épreuves et les malheurs. Les maintenir régulièrement,
                      même dans les périodes de facilité, prépare le coeur à
                      affronter les moments difficiles avec sérénité.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La sadaqa dans l&apos;épreuve
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a enseigné que la
                      charité (sadaqa) éteint la colère du Seigneur et repousse
                      les malheurs. Donner en aumône dans les moments difficiles,
                      même un montant modeste, est un moyen puissant
                      d&apos;attirer la miséricorde d&apos;Allah et de hâter la
                      délivrance.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En définitive, le musulman face aux moments difficiles dispose
                  d&apos;un arsenal complet : les douas authentiques, la
                  patience active, la lecture du Coran, le soutien communautaire
                  et la prise de moyens concrets. Cette approche équilibrée
                  reflète la sagesse de l&apos;enseignement islamique qui ne
                  sépare jamais la spiritualité de l&apos;action. Pour celui qui
                  traverse une épreuve liée à l&apos;injustice, consultez
                  également notre article sur la{" "}
                  <Link href="/doua-opprime-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de l&apos;opprimé en islam</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua contre la tristesse en islam"
                  description="Découvrez les invocations prophétiques pour surmonter la tristesse et retrouver la sérénité du coeur."
                  href="/doua-tristesse-islam"
                />
              </section>

              {/* ============================================ */}
              {/* AffiliateForm + FAQ */}
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
                    href="/doua-angoisse-stress-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre l&apos;angoisse et le stress
                  </Link>
                  <Link
                    href="/doua-tristesse-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre la tristesse
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
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
