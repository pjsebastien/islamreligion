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
    "Doua contre les ennemis en islam : invocations de protection authentiques",
  description:
    "Découvrez les douas contre les ennemis en islam : invocations authentiques en arabe avec phonétique et traduction, Allahumma inna naj&apos;aluka fi nuhurihim, HasbunAllahu wa ni&apos;mal wakil, doua de Moussa contre Pharaon et versets coraniques de protection.",
  openGraph: {
    title:
      "Doua contre les ennemis en islam : invocations de protection authentiques",
    description:
      "Les invocations authentiques contre les ennemis en islam : textes en arabe, phonétique, traduction et hadiths. Protection divine par le Coran et la Sunna.",
    url: "https://www.islamreligion.fr/doua-contre-ennemis-islam",
    images: [
      {
        url: "/images/mains-priere-doua-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-contre-ennemis-islam",
  },
};

const tocItems = [
  { id: "protection-ennemis", label: "Chercher la protection d&apos;Allah contre les ennemis" },
  { id: "doua-nuhurihim", label: "Allahumma inna naj&apos;aluka fi nuhurihim" },
  { id: "hasbunallahu", label: "HasbunAllahu wa ni&apos;mal wakil" },
  { id: "doua-moussa-pharaon", label: "Doua de Moussa contre Pharaon" },
  { id: "protection-coranique", label: "La protection coranique contre les ennemis" },
  { id: "douas-authentiques", label: "Douas authentiques de protection" },
  { id: "conseils-pratiques", label: "Conseils pratiques face aux ennemis" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua contre les ennemis en islam ?",
    answer:
      "Parmi les douas les plus puissantes contre les ennemis figure « Allahumma inna naj&apos;aluka fi nuhurihim wa na&apos;udhu bika min shururihim » (Seigneur, nous Te plaçons face à eux et nous cherchons refuge auprès de Toi contre leur mal). Le Prophète (paix et salut sur lui) l&apos;a enseignée pour demander la protection divine contre tout ennemi. « HasbunAllahu wa ni&apos;mal wakil » est également une invocation majeure prononcée par Ibrahim et les compagnons du Prophète.",
  },
  {
    question: "Peut-on invoquer Allah contre ses ennemis en islam ?",
    answer:
      "Oui, il est permis d&apos;invoquer Allah contre ses ennemis en islam, à condition de ne pas dépasser la mesure et de se limiter à demander la protection ou la justice. Le Coran mentionne de nombreuses invocations de prophètes contre leurs ennemis oppresseurs. Cependant, les savants recommandent de privilégier la doua de protection plutôt que la doua de malédiction, et de pardonner lorsque c&apos;est possible.",
  },
  {
    question: "Que signifie HasbunAllahu wa ni'mal wakil ?",
    answer:
      "« HasbunAllahu wa ni&apos;mal wakil » signifie « Allah nous suffit, Il est le meilleur Garant ». Cette invocation est tirée du Coran (sourate Al-Imran, 3:173). Ibrahim (paix sur lui) l&apos;a prononcée lorsqu&apos;il fut jeté dans le feu, et les compagnons l&apos;ont récitée face à l&apos;armée ennemie. Elle exprime la confiance totale en Allah comme protecteur et défenseur contre toute menace.",
  },
  {
    question: "Quelle est la doua de Moussa contre Pharaon ?",
    answer:
      "Moussa (paix sur lui) a invoqué Allah contre Pharaon avec plusieurs douas mentionnées dans le Coran. Parmi elles : « Rabbana la taj&apos;alna fitnatan lil-qawmi dh-dhalimin, wa najjina birahmatika minal-qawmil-kafirin » (Seigneur, ne fais pas de nous un objet de tentation pour le peuple injuste, et sauve-nous par Ta miséricorde du peuple mécréant), sourate Younous (10:85-86).",
  },
  {
    question: "Quels versets coraniques réciter pour se protéger des ennemis ?",
    answer:
      "Plusieurs versets coraniques protègent contre les ennemis : Ayat al-Kursi (al-Baqara, 2:255) offre une protection complète, les deux dernières sourates (al-Falaq et an-Nas) protègent contre tout mal extérieur et intérieur, et le verset « HasbiyAllahu la ilaha illa Huwa, &apos;alayhi tawakkaltu » (at-Tawba, 9:129) renforce le tawakkul face aux adversités.",
  },
  {
    question: "Est-il permis de maudire ses ennemis en islam ?",
    answer:
      "L&apos;islam décourage fortement la malédiction (la&apos;na) contre des individus précis. Le Prophète (paix et salut sur lui) a dit : « Le croyant n&apos;est ni un calomniateur, ni un maudisseur, ni un obscène, ni un grossier » (at-Tirmidhi). Il est préférable de demander à Allah la protection et la guidance, même pour ses ennemis, car la meilleure victoire est celle qui transforme l&apos;ennemi en allié.",
  },
  {
    question: "Quand faire la doua contre les ennemis ?",
    answer:
      "Les moments propices pour faire la doua contre les ennemis sont les mêmes que pour toute invocation : le dernier tiers de la nuit, lors de la prosternation (sujud), entre l&apos;adhan et l&apos;iqama, le jour du vendredi, et lors du jeûne. Le Prophète (paix et salut sur lui) invoquait souvent Allah lors du qunut dans la prière du Fajr pour demander protection contre les ennemis de l&apos;islam.",
  },
  {
    question: "Quel est le rapport entre le tawakkul et la protection contre les ennemis ?",
    answer:
      "Le tawakkul (confiance en Allah) est le fondement de toute protection contre les ennemis. Allah dit : « Et quiconque place sa confiance en Allah, Il lui suffit » (Coran, 65:3). Le tawakkul ne signifie pas la passivité, mais la prise de moyens concrets tout en remettant le résultat à Allah. C&apos;est cette alliance entre l&apos;effort humain et la confiance divine qui constitue la véritable protection.",
  },
];

export default function DouaContreEnnemisIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-contre-ennemis-islam/#article",
        headline:
          "Doua contre les ennemis en islam : invocations de protection authentiques",
        description:
          "Découvrez les douas contre les ennemis en islam : invocations authentiques en arabe, Allahumma inna naj'aluka fi nuhurihim, HasbunAllahu wa ni'mal wakil, doua de Moussa contre Pharaon et protection coranique.",
        image: "/images/mains-priere-doua-islam-invocation.jpg",
        datePublished: "2026-04-01",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-contre-ennemis-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-contre-ennemis-islam/#breadcrumb",
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
            name: "Doua contre les ennemis",
            item: "https://www.islamreligion.fr/doua-contre-ennemis-islam",
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
          title="Doua contre les ennemis en islam : invocations de protection authentiques"
          subtitle="Les invocations prophétiques et coraniques pour se protéger de ses ennemis, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/mains-priere-doua-islam-invocation.jpg"
          imageAlt="Mains levées en prière doua contre les ennemis invocation de protection en islam"
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
                <span className="text-foreground">Doua contre les ennemis</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La doua contre les ennemis occupe une place importante dans
                  l&apos;arsenal spirituel du musulman. Le Coran et la Sunna
                  offrent de nombreuses invocations authentiques pour demander la
                  protection d&apos;Allah face à l&apos;adversité : de
                  l&apos;invocation &laquo;&nbsp;Allahumma inna
                  naj&apos;aluka fi nuhurihim&nbsp;&raquo; à la célèbre
                  &laquo;&nbsp;HasbunAllahu wa ni&apos;mal wakil&nbsp;&raquo;,
                  en passant par les douas des prophètes comme Moussa face à
                  Pharaon. Ces invocations constituent un bouclier divin pour
                  tout croyant confronté à l&apos;hostilité.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Chercher la protection d'Allah */}
              {/* ============================================ */}
              <section id="protection-ennemis" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Chercher la protection d&apos;Allah contre ses ennemis
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, la notion d&apos;ennemi ne se limite pas à celui qui
                  porte les armes. L&apos;ennemi peut être celui qui nuit par la
                  parole, la tromperie, la calomnie ou l&apos;oppression. Le
                  Coran mentionne à de nombreuses reprises la réalité de
                  l&apos;hostilité entre les êtres humains et enseigne au
                  croyant comment y faire face avec sagesse et confiance en
                  Allah. La <strong>doua contre les ennemis</strong> constitue
                  ainsi le premier recours du musulman face à toute forme
                  d&apos;adversité.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;Et si tu crains la
                  trahison d&apos;un peuple, rejette leur pacte de manière
                  équitable. Allah n&apos;aime pas les
                  traîtres&nbsp;&raquo; (al-Anfal, 8:58). Ce verset illustre un
                  principe fondamental : l&apos;islam ne prône ni la naïveté ni
                  la passivité face aux ennemis. Le croyant prend les moyens
                  concrets de se protéger tout en plaçant sa confiance ultime en
                  Allah. La doua est précisément cette arme spirituelle qui
                  complète les moyens matériels et qui fait la différence entre
                  la simple stratégie humaine et la protection divine.
                </p>

                <HadithCard
                  arabic="المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف وفي كل خير"
                  text="Le croyant fort est meilleur et plus aimé d'Allah que le croyant faible, et en chacun il y a du bien."
                  source="Rapporté par Muslim (2664)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith rappelle que la force en islam englobe la force
                  spirituelle, morale et physique. Face aux ennemis, le musulman
                  ne se contente pas de fuir ou de subir : il invoque Allah avec
                  certitude, prend les précautions nécessaires et fait confiance
                  au décret divin. Les prophètes eux-mêmes ont été confrontés
                  aux pires ennemis et ont enseigné à leur communauté les
                  invocations les plus puissantes pour obtenir la protection
                  d&apos;Allah.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;ennemi visible et invisible :</strong>{" "}
                      l&apos;islam reconnaît différents types d&apos;ennemis,
                      des êtres humains hostiles au Shaytan, l&apos;ennemi
                      éternel de l&apos;humanité. Chacun nécessite des
                      invocations spécifiques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La doua comme bouclier :</strong> le Prophète
                      (paix et salut sur lui) a comparé la doua à une arme du
                      croyant. Elle constitue un bouclier invisible qui protège
                      de ce que l&apos;on voit et de ce que l&apos;on ne voit
                      pas.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;équilibre islamique :</strong> prendre les
                      moyens concrets de se protéger (tawakkul bi al-asbab)
                      tout en remettant le résultat final à Allah (tawakkul
                      &apos;ala Allah) est la voie prophétique face aux
                      ennemis.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée illustrant la doua contre les ennemis en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Allahumma inna naj'aluka fi nuhurihim */}
              {/* ============================================ */}
              <section id="doua-nuhurihim" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Allahumma inna naj&apos;aluka fi nuhurihim : la doua face à l&apos;ennemi
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les invocations les plus authentiques contre les ennemis
                  figure cette doua enseignée par le Prophète (paix et salut
                  sur lui). Elle est d&apos;une concision remarquable mais
                  d&apos;une profondeur immense : elle place Allah Lui-même
                  comme barrière entre le croyant et ses adversaires, tout en
                  demandant refuge contre leur mal.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنَّا نَجْعَلُكَ فِي نُحُورِهِمْ وَنَعُوذُ بِكَ مِنْ شُرُورِهِمْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inna naj&apos;aluka fi nuhurihim wa na&apos;udhu bika min shururihim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, nous Te plaçons face à eux (dans leurs gorges) et nous cherchons refuge auprès de Toi contre leur mal&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (1537) et al-Hakim
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;expression &laquo;&nbsp;fi nuhurihim&nbsp;&raquo;
                  (dans leurs gorges) signifie que le croyant demande à Allah
                  de se placer entre lui et ses ennemis, de les empêcher
                  d&apos;agir et de neutraliser leur hostilité. C&apos;est une
                  image puissante qui montre que la protection divine est
                  directe et frontale : Allah Lui-même fait face à l&apos;ennemi
                  en lieu et place du croyant.
                </p>

                <HadithCard
                  arabic="الدعاء سلاح المؤمن وعماد الدين ونور السماوات والأرض"
                  text="La doua est l'arme du croyant, le pilier de la religion et la lumière des cieux et de la terre."
                  source="Rapporté par al-Hakim (1812), Abu Ya'la"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est particulièrement recommandée en période
                  de conflit, de menace ou lorsque le croyant craint
                  l&apos;agression d&apos;un ennemi déclaré. Les savants
                  précisent qu&apos;elle peut être récitée à tout moment, mais
                  qu&apos;elle est spécialement efficace lors du qunut de la
                  prière du Fajr, comme le pratiquait le Prophète (paix et
                  salut sur lui) lorsqu&apos;il faisait face aux tribus
                  hostiles. Pour approfondir la compréhension des invocations en
                  islam, consultez notre guide complet sur la{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en islam</Link>.
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
              {/* SECTION 3 : HasbunAllahu wa ni'mal wakil */}
              {/* ============================================ */}
              <section id="hasbunallahu" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  HasbunAllahu wa ni&apos;mal wakil : la doua de la confiance absolue
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La formule &laquo;&nbsp;HasbunAllahu wa ni&apos;mal
                  wakil&nbsp;&raquo; est l&apos;une des invocations les plus
                  puissantes du Coran. Elle a été prononcée dans les moments les
                  plus critiques de l&apos;histoire des prophètes et des
                  compagnons, face aux ennemis les plus redoutables. Sa force
                  réside dans sa signification profonde : elle exprime la
                  conviction que la protection d&apos;Allah est suffisante et
                  qu&apos;Il est le meilleur des garants.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> HasbunAllahu wa ni&apos;mal wakil
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah nous suffit, Il est le meilleur Garant&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Imran (3:173)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le contexte de révélation de ce verset est remarquable.
                  Après la bataille de Uhud, alors que les musulmans étaient
                  blessés et affaiblis, on leur annonça que les Quraysh
                  rassemblaient une armée pour les attaquer de nouveau. Plutôt
                  que de céder à la peur, les compagnons répondirent par cette
                  invocation sublime : &laquo;&nbsp;HasbunAllahu wa ni&apos;mal
                  wakil&nbsp;&raquo;. Allah les décrit alors en disant :
                  &laquo;&nbsp;Ils revinrent donc avec un bienfait de la part
                  d&apos;Allah et une grâce. Nul mal ne les toucha&nbsp;&raquo;
                  (Al-Imran, 3:174).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Abbas (qu&apos;Allah l&apos;agrée) a rapporté
                  qu&apos;Ibrahim (paix sur lui) prononça cette même invocation
                  lorsqu&apos;il fut jeté dans le feu par Nimrod. Le feu devint
                  alors fraîcheur et paix. Deux prophètes, deux situations
                  extrêmes, une même invocation et un même résultat : la
                  protection totale d&apos;Allah. Cette doua est donc
                  particulièrement recommandée pour celui qui fait face à des
                  ennemis puissants et qui semble dépourvu de moyens humains
                  pour se défendre. Découvrez également la{" "}
                  <Link href="/doua-opprime-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de l&apos;opprimé en islam</Link>,
                  étroitement liée à la protection contre les ennemis.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua de Moussa contre Pharaon */}
              {/* ============================================ */}
              <section id="doua-moussa-pharaon" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de Moussa contre Pharaon : l&apos;invocation du prophète face au tyran
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;histoire de Moussa (paix sur lui) face à Pharaon est le
                  récit coranique le plus détaillé sur la confrontation entre un
                  prophète et un ennemi tyrannique. Pharaon, qui se proclamait
                  divinité et asservissait les enfants d&apos;Israël, incarne
                  l&apos;ennemi le plus redoutable que puisse affronter un
                  croyant. Les invocations de Moussa dans cette épreuve
                  constituent un modèle pour tout musulman confronté à
                  l&apos;oppression d&apos;un ennemi puissant.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظَّالِمِينَ ۝ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana la taj&apos;alna fitnatan lil-qawmi dh-dhalimin, wa najjina birahmatika minal-qawmil-kafirin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, ne fais pas de nous un objet de tentation pour le peuple injuste, et sauve-nous par Ta miséricorde du peuple mécréant&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Younous (10:85-86)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation de Moussa contient deux demandes essentielles.
                  La première est de ne pas être une tentation (fitna) pour les
                  oppresseurs, c&apos;est-à-dire de ne pas leur donner
                  l&apos;occasion de penser que leur victoire sur les croyants
                  prouve la justesse de leur voie. La seconde est la demande
                  directe de délivrance par la miséricorde divine. Ce double
                  aspect fait de cette doua une invocation complète contre tout
                  ennemi.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا اطْمِسْ عَلَىٰ أَمْوَالِهِمْ وَاشْدُدْ عَلَىٰ قُلُوبِهِمْ فَلَا يُؤْمِنُوا حَتَّىٰ يَرَوُا الْعَذَابَ الْأَلِيمَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana-tmis &apos;ala amwalihim wa-shdud &apos;ala qulubihim fa la yu&apos;minu hatta yaraw al-&apos;adhab al-alim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, anéantis leurs biens et endurcis leurs coeurs, afin qu&apos;ils ne croient pas jusqu&apos;à ce qu&apos;ils voient le châtiment douloureux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Younous (10:88)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua de Moussa est l&apos;une des rares invocations
                  coraniques où un prophète demande explicitement le châtiment
                  de ses ennemis. Les savants précisent que Moussa (paix sur lui)
                  ne l&apos;a prononcée qu&apos;après avoir épuisé tous les
                  moyens de da&apos;wa et de patience, et après avoir constaté
                  l&apos;obstination irrémédiable de Pharaon dans la tyrannie.
                  Allah a répondu à cette invocation en engloutissant Pharaon
                  et son armée dans la mer. Pour approfondir la question de
                  la{" "}
                  <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de protection en islam</Link>,
                  consultez notre article dédié.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-levees-illustration-lumiere.jpg"
                    alt="Mains levées en invocation illustrant la doua de Moussa contre Pharaon et la protection divine"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Protection coranique */}
              {/* ============================================ */}
              <section id="protection-coranique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La protection coranique contre les ennemis
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran lui-même est décrit comme un remède (shifa) et une
                  protection (hifz) pour le croyant. Plusieurs versets et
                  sourates sont spécifiquement reconnus pour leur pouvoir
                  protecteur contre les ennemis, le mauvais oeil, la sorcellerie
                  et toute forme de mal extérieur. Le Prophète (paix et salut
                  sur lui) récitait régulièrement ces versets pour se protéger
                  et a enseigné leur récitation à ses compagnons.
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
                  arabic="من قال حين يصبح وحين يمسي حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم سبع مرات كفاه الله ما أهمه"
                  text="Celui qui dit le matin et le soir 'HasbiyAllahu la ilaha illa Huwa, 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Adhim' sept fois, Allah lui suffira contre ce qui le préoccupe."
                  source="Rapporté par Abu Dawud (5081), Ibn as-Sunni"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent également la récitation quotidienne
                  d&apos;Ayat al-Kursi (al-Baqara, 2:255) qui protège le
                  croyant jusqu&apos;au matin ou jusqu&apos;au soir, les trois
                  dernières sourates du Coran (al-Ikhlas, al-Falaq et an-Nas)
                  qui constituent un rempart contre le mal sous toutes ses
                  formes, et les deux derniers versets de sourate al-Baqara dont
                  le Prophète (paix et salut sur lui) a dit qu&apos;ils
                  suffisent à celui qui les récite la nuit. Ces versets
                  coraniques, combinés aux douas prophétiques, forment un
                  système de protection complet contre tout ennemi, visible
                  ou invisible.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn al-Qayyim (qu&apos;Allah lui fasse miséricorde) a
                  expliqué que la récitation du Coran avec foi et concentration
                  crée une forteresse spirituelle autour du croyant. Les
                  ennemis, qu&apos;ils soient des hommes ou des djinns, ne
                  peuvent pénétrer cette forteresse tant que le serviteur
                  maintient son lien avec le Livre d&apos;Allah. C&apos;est
                  pourquoi le Prophète (paix et salut sur lui) ne négligeait
                  jamais ses adhkar (invocations) du matin et du soir, même en
                  période de guerre et de confrontation avec les ennemis.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas authentiques de protection */}
              {/* ============================================ */}
              <section id="douas-authentiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas authentiques de protection contre les ennemis
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus des invocations déjà mentionnées, le Prophète (paix
                  et salut sur lui) a enseigné plusieurs douas spécifiques pour
                  la protection contre les ennemis et les adversités. Voici un
                  recueil d&apos;invocations authentiques, accompagnées de leur
                  texte arabe, phonétique et traduction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua de protection contre le mal des créatures
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation est particulièrement recommandée lorsque le
                  croyant craint le mal d&apos;un ennemi spécifique ou
                  d&apos;un groupe hostile. Elle place le serviteur sous la
                  protection directe d&apos;Allah, le Parfait, dont les paroles
                  ne peuvent être dépassées par aucune créature.
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

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua lorsqu&apos;on craint un peuple ou un dirigeant
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) enseignait cette
                  invocation à ses compagnons lorsqu&apos;ils craignaient un
                  peuple ou un dirigeant injuste. Elle demande à Allah de
                  détourner le mal de l&apos;ennemi et de protéger le croyant
                  contre sa tyrannie. Ceux qui font face à l&apos;injustice des
                  autorités peuvent également consulter notre article sur la{" "}
                  <Link href="/doua-injustice-autorites-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua contre l&apos;injustice des autorités</Link>.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ شُرُورِهِمْ وَنَدْرَأُ بِكَ فِي نُحُورِهِمْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inna na&apos;udhu bika min shururihim wa nadra&apos;u bika fi nuhurihim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, nous cherchons refuge auprès de Toi contre leur mal et nous Te plaçons comme rempart face à eux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (1537)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua du qunut an-Nazilah (en cas de calamité)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le qunut an-Nazilah est une invocation récitée dans la prière
                  en cas de calamité touchant la communauté musulmane. Le
                  Prophète (paix et salut sur lui) l&apos;a pratiqué lorsque
                  des tribus hostiles s&apos;en prenaient aux musulmans, et il
                  invoquait contre les ennemis de l&apos;islam pendant un mois
                  dans la prière du Fajr.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ وَتَوَلَّنَا فِيمَنْ تَوَلَّيْتَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma-hdina fiman hadayt, wa &apos;afina fiman &apos;afayt, wa tawallana fiman tawallayt
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, guide-nous parmi ceux que Tu as guidés, accorde-nous la santé parmi ceux à qui Tu l&apos;as accordée, et prends-nous en charge parmi ceux que Tu as pris en charge&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (464), Abu Dawud (1425)
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques face aux ennemis en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam propose une approche équilibrée face aux ennemis,
                  combinant la dimension spirituelle (doua et tawakkul) avec
                  l&apos;action concrète (prise de précautions et défense
                  légitime). Le musulman n&apos;est ni passif ni agressif : il
                  agit avec sagesse, confiance et mesure.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Maintenir les adhkar quotidiens
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les invocations du matin et du soir constituent le
                        premier bouclier contre tout mal. Le Prophète (paix et
                        salut sur lui) ne les négligeait jamais, même en temps
                        de guerre. Réciter Ayat al-Kursi, les trois dernières
                        sourates et les douas de protection chaque matin et
                        chaque soir crée une forteresse spirituelle permanente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Privilégier la réconciliation quand c&apos;est possible
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Allah dit : &laquo;&nbsp;Repousse le mal par ce qui est
                        meilleur, et voilà que celui avec qui tu avais une
                        inimitié devient tel un ami chaleureux&nbsp;&raquo;
                        (Fussilat, 41:34). Transformer un ennemi en allié par
                        la bonté et la sagesse est considéré comme la plus haute
                        forme de victoire en islam.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Prendre les moyens concrets de se protéger
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le tawakkul en islam ne signifie pas la passivité.
                        Le Prophète (paix et salut sur lui) portait une armure
                        au combat, envoyait des éclaireurs et établissait des
                        stratégies militaires tout en invoquant Allah. Prendre
                        les précautions nécessaires est un devoir islamique qui
                        ne contredit pas la confiance en Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne jamais dépasser les limites de la justice
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Même face à un ennemi déclaré, le musulman ne doit pas
                        transgresser les limites fixées par Allah. L&apos;islam
                        interdit la mutilation, le meurtre des innocents, la
                        trahison et l&apos;excès dans la vengeance. Allah dit :
                        &laquo;&nbsp;Et ne transgressez pas. Allah n&apos;aime
                        pas les transgresseurs&nbsp;&raquo; (al-Baqara, 2:190).
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En définitive, la voie islamique face aux ennemis repose sur
                  un équilibre entre la confiance en Allah et l&apos;action
                  concrète, entre la fermeté dans la défense des droits et la
                  préférence pour la paix lorsqu&apos;elle est possible. Le
                  musulman qui combine les douas de protection avec une conduite
                  exemplaire se trouve sous la garde d&apos;Allah, le meilleur
                  des protecteurs. Pour approfondir cette thématique, consultez
                  également notre article sur la{" "}
                  <Link href="/doua-injustice-autorites-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua contre l&apos;injustice des autorités en islam</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua de l'opprimé en islam"
                  description="Découvrez l'invocation qui n'est jamais rejetée par Allah : la doua de l'opprimé, ses conditions et ses hadiths."
                  href="/doua-opprime-islam"
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
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/doua-protection-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de protection
                  </Link>
                  <Link
                    href="/doua-injustice-autorites-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre l&apos;injustice des autorités
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
