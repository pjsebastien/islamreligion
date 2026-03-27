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
    "Doua des 10 derniers jours du Ramadan : invocations et Laylat al-Qadr",
  description:
    "Découvrez les douas des 10 derniers jours du Ramadan : invocations authentiques en arabe avec phonétique et traduction, recherche de Laylat al-Qadr, doua Allahumma innaka afuwwun, i'tikaf et adoration intense du Prophète (paix et salut sur lui).",
  openGraph: {
    title:
      "Doua des 10 derniers jours du Ramadan : invocations et Laylat al-Qadr",
    description:
      "Les invocations authentiques des 10 derniers jours du Ramadan : textes en arabe, phonétique, traduction et hadiths sur Laylat al-Qadr et l'adoration intense.",
    url: "https://www.islamreligion.fr/doua-10-derniers-jours-ramadan-islam",
    images: [
      {
        url: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-10-derniers-jours-ramadan-islam",
  },
};

const tocItems = [
  { id: "importance-10-derniers-jours", label: "L\u2019importance des 10 derniers jours" },
  { id: "itikaf-retraite-spirituelle", label: "L\u2019i\u2019tikaf : retraite spirituelle" },
  { id: "recherche-laylat-al-qadr", label: "La recherche de Laylat al-Qadr" },
  { id: "doua-allahumma-innaka-afuwwun", label: "Doua Allahumma innaka \u2019afuwwun" },
  { id: "adoration-prophete", label: "L\u2019adoration intense du Proph\u00e8te" },
  { id: "douas-10-derniers-jours", label: "Douas \u00e0 r\u00e9citer ces nuits b\u00e9nies" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua des 10 derniers jours du Ramadan ?",
    answer:
      "La doua la plus recommand\u00e9e pour les 10 derniers jours du Ramadan est celle enseign\u00e9e par le Proph\u00e8te (\u00e7) \u00e0 A\u00efcha : \u00ab Allahumma innaka &apos;afuwwun tuhibbul-&apos;afwa fa&apos;fu &apos;anni \u00bb, qui signifie \u00ab Seigneur, Tu es Celui qui pardonne, Tu aimes le pardon, alors pardonne-moi \u00bb. Cette invocation est particuli\u00e8rement li\u00e9e \u00e0 la recherche de Laylat al-Qadr.",
  },
  {
    question: "Quand commencent les 10 derniers jours du Ramadan ?",
    answer:
      "Les 10 derniers jours du Ramadan d\u00e9butent \u00e0 partir de la 21e nuit du mois de Ramadan. Le Proph\u00e8te (paix et salut sur lui) intensifiait son adoration d\u00e8s l&apos;entr\u00e9e de ces dix nuits, serrait son izar (v\u00eatement), veillait la nuit et r\u00e9veillait sa famille pour l&apos;adoration.",
  },
  {
    question: "Comment chercher Laylat al-Qadr durant les 10 derniers jours ?",
    answer:
      "Le Proph\u00e8te (paix et salut sur lui) a indiqu\u00e9 de chercher Laylat al-Qadr durant les nuits impaires des dix derni\u00e8res nuits du Ramadan : la 21e, 23e, 25e, 27e et 29e nuit. Il est recommand\u00e9 de multiplier les pri\u00e8res, les invocations, la lecture du Coran et le dhikr durant chacune de ces nuits.",
  },
  {
    question: "Qu&apos;est-ce que l&apos;i&apos;tikaf durant les 10 derniers jours ?",
    answer:
      "L&apos;i&apos;tikaf est une retraite spirituelle en mosqu\u00e9e durant les 10 derniers jours du Ramadan. Le Proph\u00e8te (paix et salut sur lui) le pratiquait chaque ann\u00e9e. Celui qui fait l&apos;i&apos;tikaf reste dans la mosqu\u00e9e, se consacre exclusivement \u00e0 l&apos;adoration d&apos;Allah, multiplie les pri\u00e8res, les douas et la lecture du Coran.",
  },
  {
    question: "Pourquoi le Proph\u00e8te intensifiait-il son adoration les 10 derniers jours ?",
    answer:
      "Le Proph\u00e8te (paix et salut sur lui) intensifiait son adoration car ces nuits abritent Laylat al-Qadr, la Nuit du Destin, qui vaut mieux que mille mois d&apos;adoration. Chaque acte accompli cette nuit-l\u00e0 est multipli\u00e9 en r\u00e9compense de mani\u00e8re consid\u00e9rable, ce qui en fait une opportunit\u00e9 unique dans l&apos;ann\u00e9e.",
  },
  {
    question: "Peut-on faire les douas des 10 derniers jours en fran\u00e7ais ?",
    answer:
      "Oui, les douas personnelles peuvent \u00eatre faites en fran\u00e7ais ou dans toute autre langue. Cependant, il est vivement recommand\u00e9 d&apos;apprendre les invocations proph\u00e9tiques en arabe, notamment la doua \u00ab Allahumma innaka &apos;afuwwun \u00bb, car la r\u00e9citer dans la langue originale renforce le lien avec la Sunna.",
  },
  {
    question: "Quelles sont les meilleures adorations des 10 derniers jours ?",
    answer:
      "Les meilleures adorations durant ces nuits sont : la pri\u00e8re nocturne (qiyam al-layl), la r\u00e9citation du Coran, les invocations (doua), le dhikr (rappel d&apos;Allah), l&apos;aum\u00f4ne (sadaqa), le repentir (tawba) et l&apos;i&apos;tikaf. Le Proph\u00e8te (paix et salut sur lui) combinait toutes ces formes d&apos;adoration durant cette p\u00e9riode.",
  },
  {
    question: "La doua Allahumma innaka &apos;afuwwun est-elle r\u00e9serv\u00e9e \u00e0 Laylat al-Qadr ?",
    answer:
      "Bien que cette doua ait \u00e9t\u00e9 enseign\u00e9e sp\u00e9cifiquement pour Laylat al-Qadr, elle peut \u00eatre r\u00e9cit\u00e9e \u00e0 tout moment de l&apos;ann\u00e9e. Demander le pardon d&apos;Allah est toujours louable. Toutefois, sa r\u00e9citation prend une dimension particuli\u00e8re durant les 10 derniers jours du Ramadan, o\u00f9 la mis\u00e9ricorde divine est \u00e0 son apog\u00e9e.",
  },
];

export default function Doua10DerniersJoursRamadanIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-10-derniers-jours-ramadan-islam/#article",
        headline:
          "Doua des 10 derniers jours du Ramadan : invocations et Laylat al-Qadr",
        description:
          "Découvrez les douas des 10 derniers jours du Ramadan : invocations authentiques en arabe, hadiths sur Laylat al-Qadr, i'tikaf et adoration intense.",
        image: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg",
        datePublished: "2026-04-10",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-10-derniers-jours-ramadan-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-10-derniers-jours-ramadan-islam/#breadcrumb",
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
            name: "Doua des 10 derniers jours du Ramadan",
            item: "https://www.islamreligion.fr/doua-10-derniers-jours-ramadan-islam",
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
          title="Doua des 10 derniers jours du Ramadan : invocations et Laylat al-Qadr"
          subtitle="Les invocations authentiques pour les nuits les plus bénies de l'année, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/croissant-lune-dore-lanternes-islam-ramadan.jpg"
          imageAlt="Croissant de lune doré et lanternes symbolisant les 10 derniers jours du Ramadan en islam"
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
                <span className="text-foreground">Doua des 10 derniers jours du Ramadan</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Les 10 derniers jours du Ramadan sont la période la plus
                  intense de l&apos;année pour le musulman. Le Prophète (paix et
                  salut sur lui) redoublait d&apos;efforts dans l&apos;adoration,
                  pratiquait l&apos;i&apos;tikaf et cherchait activement Laylat
                  al-Qadr, la Nuit du Destin, meilleure que mille mois. Il a
                  enseigné à Aïcha une doua spécifique pour cette nuit bénie :
                  &laquo;&nbsp;Allahumma innaka &apos;afuwwun tuhibbul-&apos;afwa
                  fa&apos;fu &apos;anni&nbsp;&raquo;. Découvrez les invocations
                  à réciter et les pratiques à adopter durant ces nuits
                  exceptionnelles.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance des 10 derniers jours */}
              {/* ============================================ */}
              <section id="importance-10-derniers-jours" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance des 10 derniers jours du Ramadan
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les dix derniers jours du Ramadan occupent une place à part
                  dans le calendrier islamique. Alors que le mois tout entier
                  est une période de miséricorde, de pardon et de libération du
                  Feu, ses derniers jours en constituent le sommet spirituel.
                  C&apos;est durant cette période que les portes du ciel sont
                  grandes ouvertes et que la récompense de chaque acte
                  d&apos;adoration atteint des proportions inimaginables.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah a choisi ces nuits pour y placer Laylat al-Qadr, la Nuit
                  du Destin, dont le Coran dit qu&apos;elle est
                  &laquo;&nbsp;meilleure que mille mois&nbsp;&raquo; (sourate
                  Al-Qadr, 97:3). Cette seule indication suffit à comprendre
                  pourquoi le Prophète (paix et salut sur lui) transformait
                  radicalement son rythme de vie à l&apos;approche de cette
                  période. Chaque nuit passée en adoration peut équivaloir à
                  plus de 83 années de dévotion continue, une miséricorde
                  divine sans pareille offerte à la communauté de Muhammad.
                </p>

                <HadithCard
                  arabic="كان رسول الله صلى الله عليه وسلم إذا دخل العشر شد مئزره وأحيا ليله وأيقظ أهله"
                  text="Lorsque les dix derniers jours commençaient, le Prophète serrait son izar, veillait la nuit et réveillait sa famille."
                  source="Rapporté par al-Bukhari (2024) et Muslim (1174)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;expression &laquo;&nbsp;serrait son izar&nbsp;&raquo;
                  est interprétée par les savants comme une métaphore de la
                  détermination et de l&apos;engagement total. Le Prophète
                  (paix et salut sur lui) se consacrait entièrement à
                  l&apos;adoration, réduisant le temps accordé aux affaires
                  mondaines au strict minimum. Il réveillait également les
                  membres de sa famille, soucieux qu&apos;eux aussi profitent
                  de ces nuits dont la valeur dépasse l&apos;entendement.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Miséricorde multipliée :</strong> chaque bonne
                      action accomplie durant Laylat al-Qadr vaut plus que
                      mille mois d&apos;adoration en dehors de cette nuit.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pardon des péchés :</strong> le Prophète (paix et
                      salut sur lui) a dit que celui qui veille Laylat al-Qadr
                      avec foi et espoir de récompense verra ses péchés
                      antérieurs pardonnés (al-Bukhari et Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Descente des anges :</strong> les anges et
                      l&apos;Esprit (Jibril) descendent durant cette nuit
                      avec la permission d&apos;Allah pour tout décret (Coran,
                      97:4). Pour en savoir plus, consultez notre article sur
                      la{" "}
                      <Link href="/doua-nuit-destin-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de la Nuit du Destin</Link>.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/ramadan-islam-lanternes-orientales-croissant-dattes.jpg"
                    alt="Lanternes orientales et croissant de lune symbolisant les nuits bénies des 10 derniers jours du Ramadan"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : I'tikaf */}
              {/* ============================================ */}
              <section id="itikaf-retraite-spirituelle" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;i&apos;tikaf : la retraite spirituelle des 10 derniers jours
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;i&apos;tikaf est une pratique prophétique qui consiste
                  à se retirer dans la mosquée durant les dix derniers jours
                  du Ramadan pour se consacrer exclusivement à
                  l&apos;adoration d&apos;Allah. Le Prophète (paix et salut
                  sur lui) l&apos;a pratiqué chaque année de sa vie à Médine,
                  et cette sunna a été maintenue par ses compagnons après lui.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Celui qui fait l&apos;i&apos;tikaf coupe avec les
                  préoccupations du quotidien, les distractions mondaines et
                  les sollicitations sociales. Il entre dans un état de
                  concentration spirituelle totale, où chaque instant est
                  dédié à la prière, à la lecture du Coran, au dhikr et aux
                  invocations. Cette retraite permet de vivre pleinement
                  chacune des nuits bénies et de maximiser les chances de
                  saisir Laylat al-Qadr.
                </p>

                <HadithCard
                  arabic="كان النبي صلى الله عليه وسلم يعتكف في العشر الأواخر من رمضان حتى توفاه الله"
                  text="Le Prophète pratiquait l'i'tikaf durant les dix derniers jours du Ramadan, et ce jusqu'à sa mort."
                  source="Rapporté par al-Bukhari (2026) et Muslim (1172)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La constance du Prophète (paix et salut sur lui) dans cette
                  pratique témoigne de son importance. Il ne l&apos;a jamais
                  délaissée, même lorsque ses responsabilités en tant que chef
                  de la communauté étaient considérables. Les savants
                  s&apos;accordent à dire que l&apos;i&apos;tikaf est une
                  sunna mu&apos;akkada (fortement recommandée) durant les
                  dix derniers jours. Celui qui ne peut pas le pratiquer en
                  intégralité peut néanmoins consacrer autant de temps que
                  possible à la mosquée et aux actes d&apos;adoration durant
                  cette période. Pour découvrir les{" "}
                  <Link href="/doua-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations du Ramadan</Link>,
                  consultez notre article dédié.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Entrer en i&apos;tikaf avant le coucher du soleil du 20e jour
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Selon la majorité des savants, l&apos;i&apos;tikaf
                        des dix derniers jours commence au coucher du soleil
                        de la 20e journée du Ramadan, pour coïncider avec
                        le début de la 21e nuit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se consacrer à l&apos;adoration
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Prière nocturne, lecture du Coran, dhikr, douas,
                        repentir et méditation spirituelle constituent le
                        programme quotidien du mu&apos;takif (celui qui fait
                        l&apos;i&apos;tikaf).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne sortir que pour une nécessité
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le mu&apos;takif ne quitte la mosquée que pour les
                        besoins naturels, la purification ou une nécessité
                        urgente. L&apos;objectif est de maintenir un état
                        de connexion permanente avec Allah.
                      </p>
                    </div>
                  </div>
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
              {/* SECTION 3 : Recherche de Laylat al-Qadr */}
              {/* ============================================ */}
              <section id="recherche-laylat-al-qadr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La recherche de Laylat al-Qadr durant les nuits impaires
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Laylat al-Qadr, la Nuit du Destin, est la nuit la plus
                  précieuse de l&apos;année islamique. Allah l&apos;a cachée
                  parmi les nuits impaires des dix derniers jours du Ramadan
                  afin que les croyants redoublent d&apos;efforts durant
                  chacune d&apos;entre elles. Cette sagesse divine pousse le
                  musulman à ne négliger aucune nuit et à traiter chacune
                  comme si elle pouvait être la Nuit du Destin.
                </p>

                <HadithCard
                  arabic="التمسوها في العشر الأواخر من رمضان، التمسوها في كل وتر"
                  text="Cherchez-la (Laylat al-Qadr) durant les dix derniers jours du Ramadan, cherchez-la durant chaque nuit impaire."
                  source="Rapporté par al-Bukhari (2017)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les nuits impaires correspondent aux 21e, 23e, 25e, 27e et
                  29e nuits du Ramadan. Bien que la 27e nuit soit souvent
                  citée comme la plus probable selon certaines traditions, le
                  Prophète (paix et salut sur lui) n&apos;a jamais désigné
                  une nuit unique de manière définitive. Les compagnons eux-mêmes
                  divergeaient sur la question, ce qui renforce l&apos;idée
                  qu&apos;Allah a voulu que cette nuit reste un mystère pour
                  stimuler l&apos;adoration sur l&apos;ensemble de la période.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parmi les signes de Laylat al-Qadr mentionnés dans les hadiths,
                  on retrouve une nuit calme, ni trop chaude ni trop froide, un
                  lever de soleil sans rayons le lendemain matin et un
                  sentiment de paix et de sérénité qui enveloppe le croyant.
                  Toutefois, les savants rappellent que l&apos;objectif
                  n&apos;est pas de deviner la nuit exacte, mais de
                  s&apos;adonner pleinement à l&apos;adoration durant
                  l&apos;ensemble des dix derniers jours. Celui qui veille
                  toutes ces nuits avec sincérité aura assurément atteint
                  Laylat al-Qadr.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Nuits impaires :</strong> 21e, 23e, 25e, 27e
                      et 29e nuits sont les plus susceptibles d&apos;abriter
                      Laylat al-Qadr selon les hadiths authentiques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas se limiter à la 27e nuit :</strong>{" "}
                      beaucoup de musulmans se focalisent uniquement sur
                      cette nuit, mais les hadiths encouragent à veiller
                      toutes les nuits impaires.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Adoration diversifiée :</strong> combiner la
                      prière nocturne (qiyam), la récitation du Coran, les
                      douas, le dhikr et l&apos;aumône pour tirer le
                      maximum de bénéfice de chaque nuit.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua Allahumma innaka 'afuwwun */}
              {/* ============================================ */}
              <section id="doua-allahumma-innaka-afuwwun" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua Allahumma innaka &apos;afuwwun : l&apos;invocation de Laylat al-Qadr
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi toutes les invocations que le musulman peut réciter
                  durant les dix derniers jours du Ramadan, celle que le
                  Prophète (paix et salut sur lui) a enseignée à Aïcha (qu&apos;Allah
                  soit satisfait d&apos;elle) pour Laylat al-Qadr occupe
                  une place à part. Sa concision, sa profondeur et la
                  circonstance de son enseignement en font la doua par
                  excellence de cette période bénie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Aïcha demanda au Prophète (paix et salut sur lui) :
                  &laquo;&nbsp;Si je sais quelle nuit est Laylat al-Qadr, que
                  dois-je dire ?&nbsp;&raquo; Il répondit en lui enseignant
                  cette invocation magnifique :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma innaka &apos;afuwwun tuhibbul-&apos;afwa fa&apos;fu &apos;anni
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Tu es Celui qui pardonne, Tu aimes le pardon, alors pardonne-moi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3513), Ibn Majah (3850), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua contient le Nom divin <strong>Al-&apos;Afuww</strong>{" "}
                  (العفو), qui désigne Celui qui efface les péchés
                  complètement, comme s&apos;ils n&apos;avaient jamais
                  existé. Ce Nom va au-delà du simple pardon (maghfira) : il
                  implique l&apos;effacement total de la faute, de sa trace
                  et de ses conséquences. C&apos;est pourquoi le Prophète
                  (paix et salut sur lui) a choisi cette invocation
                  spécifiquement pour la nuit la plus précieuse de
                  l&apos;année.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;expression &laquo;&nbsp;Tu aimes le pardon&nbsp;&raquo;
                  (tuhibbul-&apos;afwa) est une forme de tawassul (moyen de
                  rapprochement) par les attributs d&apos;Allah. Le croyant
                  rappelle à son Seigneur qu&apos;Il aime pardonner, et
                  c&apos;est précisément cette qualité divine qu&apos;il
                  sollicite. Les savants recommandent de répéter cette doua
                  abondamment durant chacune des dix dernières nuits, avec
                  humilité, les larmes aux yeux et la certitude que la
                  réponse viendra.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en doua illustrant l'invocation Allahumma innaka afuwwun durant les 10 derniers jours du Ramadan"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Adoration du Prophète */}
              {/* ============================================ */}
              <section id="adoration-prophete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;adoration intense du Prophète durant les 10 derniers jours
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le comportement du Prophète (paix et salut sur lui) durant
                  les dix derniers jours du Ramadan constitue un modèle pour
                  tout musulman qui aspire à tirer le meilleur de cette
                  période. Alors qu&apos;il était déjà le plus dévot des
                  hommes durant le reste de l&apos;année, il transformait
                  complètement son rythme à l&apos;approche de ces nuits
                  bénies.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Aïcha (qu&apos;Allah soit satisfait d&apos;elle) décrit
                  cette transformation avec des mots saisissants : il veillait
                  toute la nuit, réveillait les membres de sa famille et
                  &laquo;&nbsp;serrait son izar&nbsp;&raquo;, expression que
                  les savants interprètent comme un signe de détermination
                  absolue et d&apos;éloignement des plaisirs conjugaux pour se
                  consacrer entièrement à l&apos;adoration. Contrairement aux
                  vingt premiers jours où il alternait entre prière et repos,
                  les dix derniers jours étaient marqués par un engagement
                  sans relâche.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) ne se contentait pas
                  d&apos;adorer seul : il tenait à ce que sa famille participe
                  à ces nuits bénies. Il réveillait ses épouses pour qu&apos;elles
                  prient et invoquent Allah, soucieux qu&apos;elles ne
                  manquent pas cette opportunité unique. Cette attitude
                  témoigne d&apos;un sens de la responsabilité spirituelle
                  envers les proches, une leçon que tout musulman devrait
                  mettre en pratique. Les{" "}
                  <Link href="/doua-tarawih-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas de tarawih</Link>{" "}
                  s&apos;inscrivent également dans cette dynamique
                  d&apos;adoration nocturne.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Qiyam al-layl prolongé
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) priait de longues
                      unités de prière la nuit, récitant de longs passages
                      du Coran avec méditation et recueillement. Sa prière
                      nocturne pouvait durer des heures, au point que ses
                      pieds enflaient.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Douas abondantes
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les invocations se multipliaient durant ces nuits. Le
                      Prophète demandait le pardon, implorait la miséricorde
                      divine et priait pour sa communauté avec une ferveur
                      redoublée.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Lecture du Coran
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La récitation du Coran prenait une place encore plus
                      importante. Jibril révisait le Coran avec le Prophète
                      chaque Ramadan, et deux fois l&apos;année de sa mort,
                      signe de l&apos;importance de cette période.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Réveil de la famille
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Il réveillait ses épouses et les encourageait à prier
                      et à invoquer Allah, montrant que cette responsabilité
                      spirituelle ne se limite pas à l&apos;individu mais
                      s&apos;étend au foyer.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas à réciter */}
              {/* ============================================ */}
              <section id="douas-10-derniers-jours" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas à réciter durant les 10 derniers jours du Ramadan
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà de la doua Allahumma innaka &apos;afuwwun, le
                  musulman dispose d&apos;un riche répertoire d&apos;invocations
                  à réciter durant les dix dernières nuits du Ramadan. Voici
                  les principales douas authentiques, accompagnées de leur
                  texte arabe, de leur phonétique et de leur traduction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua de demande de pardon et de miséricorde
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation combine la demande de pardon avec la
                  sollicitation de la miséricorde divine, deux thèmes
                  fondamentaux des dix derniers jours du Ramadan.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana dhalamna anfusana wa in lam taghfir lana wa tarhamna lanakounanna minal-khasirin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, nous nous sommes fait du tort à nous-mêmes. Et si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons certes parmi les perdants&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-A&apos;raf (7:23)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour demander la guidée et la protection
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Les dix derniers jours sont une période propice pour demander
                  à Allah de nous maintenir sur le droit chemin et de nous
                  protéger de l&apos;égarement après la guidée.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana la tuzigh qulubana ba&apos;da idh hadaytana wa hab lana min ladunka rahmatan innaka antal-Wahhab
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, ne fais pas dévier nos cœurs après que Tu nous aies guidés, et accorde-nous de Ta part une miséricorde. C&apos;est Toi, certes, le Grand Donateur&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Imran (3:8)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour la réussite dans les deux mondes
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation coranique est parmi les plus complètes : elle
                  englobe le bien de ce monde et celui de l&apos;au-delà, tout
                  en demandant la protection contre le châtiment du Feu.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina &apos;adhaban-nar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-nous une belle part ici-bas et une belle part dans l&apos;au-delà, et protège-nous du châtiment du Feu&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:201)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Sayyid al-istighfar : la maîtresse des demandes de pardon
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que cette
                  formule est la meilleure manière de demander le pardon à
                  Allah. Elle prend une dimension encore plus forte durant
                  les dix derniers jours du Ramadan.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana &apos;abduk, wa ana &apos;ala &apos;ahdika wa wa&apos;dika mastata&apos;t, a&apos;udhu bika min sharri ma sana&apos;t, abu&apos;u laka bi ni&apos;matika &apos;alayya wa abu&apos;u bi dhanbi faghfir li fa innahu la yaghfirudh-dhunuba illa Ant
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Tu es mon Seigneur, il n&apos;y a de divinité que Toi. Tu m&apos;as créé et je suis Ton serviteur. Je m&apos;en tiens à Ton pacte et à Ta promesse autant que je le peux. Je cherche refuge auprès de Toi contre le mal de ce que j&apos;ai commis. Je reconnais Ton bienfait sur moi et je reconnais mon péché. Pardonne-moi, car nul ne pardonne les péchés si ce n&apos;est Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6306)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants recommandent de varier les invocations tout au
                  long de la nuit : commencer par la doua Allahumma innaka
                  &apos;afuwwun, alterner avec les douas coraniques et le
                  sayyid al-istighfar, et consacrer des moments aux
                  supplications personnelles dans sa propre langue. Cette
                  diversité maintient la concentration du cœur et empêche la
                  routine de s&apos;installer dans l&apos;adoration. Pour
                  approfondir le sujet des{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre page dédiée.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua de la Nuit du Destin (Laylat al-Qadr)"
                  description="Découvrez les invocations spécifiques à la Nuit du Destin et les signes pour la reconnaître."
                  href="/doua-nuit-destin-islam"
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
                    Doua en islam
                  </Link>
                  <Link
                    href="/doua-ramadan-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du Ramadan
                  </Link>
                  <Link
                    href="/doua-nuit-destin-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de la Nuit du Destin
                  </Link>
                  <Link
                    href="/doua-tarawih-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de tarawih
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
