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
    "Doua après la prière en islam : adhkar et invocations authentiques après la salat",
  description:
    "Découvrez les douas après la prière en islam : adhkar authentiques après la salat en arabe avec phonétique et traduction, astaghfirullah, tasbih, ayat al-kursi, hadiths et guide complet des invocations à réciter après chaque prière.",
  openGraph: {
    title:
      "Doua après la prière en islam : adhkar et invocations authentiques après la salat",
    description:
      "Les invocations authentiques à réciter après chaque prière obligatoire : adhkar en arabe, phonétique, traduction et hadiths sur les douas après la salat.",
    url: "https://www.islamreligion.fr/doua-apres-priere-islam",
    images: [
      {
        url: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-apres-priere-islam",
  },
};

const tocItems = [
  { id: "importance-adhkar", label: "L\u2019importance des adhkar après la prière" },
  { id: "istighfar-salam", label: "Istighfar et formules après le salam" },
  { id: "tasbih-fatimi", label: "Le tasbih de Fatima (33-33-34)" },
  { id: "ayat-al-kursi", label: "Ayat al-Kursi après chaque salat" },
  { id: "douas-prophetiques", label: "Douas prophétiques après la prière" },
  { id: "adab-invocation", label: "Adab et moments propices pour invoquer" },
  { id: "erreurs-courantes", label: "Erreurs courantes à éviter" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que dire après la prière en islam ?",
    answer:
      "Après chaque prière obligatoire, le musulman récite les adhkar authentiques : astaghfirullah 3 fois, Allahumma anta as-salam wa minka as-salam, puis le tasbih (subhanAllah 33 fois, al-hamdulillah 33 fois, Allahu akbar 34 fois), ayat al-kursi, et les sourates al-Ikhlas, al-Falaq et an-Nas. Ces invocations sont tirées de la Sunna authentique du Prophète (paix et salut sur lui).",
  },
  {
    question: "Quel est le tasbih de Fatima après la prière ?",
    answer:
      "Le tasbih de Fatima consiste à dire subhanAllah 33 fois, al-hamdulillah 33 fois et Allahu akbar 34 fois après chaque prière obligatoire. Le Prophète (paix et salut sur lui) l&apos;a enseigné à sa fille Fatima lorsqu&apos;elle lui demanda une servante. Il lui dit que ce dhikr était meilleur pour elle qu&apos;un serviteur (al-Bukhari et Muslim).",
  },
  {
    question: "Faut-il lever les mains pour faire doua après la prière ?",
    answer:
      "Les savants ont divergé sur cette question. Certains considèrent que lever les mains pour invoquer après la prière obligatoire de manière systématique n&apos;est pas établi dans la Sunna, car le Prophète (paix et salut sur lui) récitait les adhkar sans lever les mains de façon régulière après chaque salat. D&apos;autres autorisent cette pratique occasionnellement. L&apos;essentiel est de réciter les adhkar authentiques transmis par le Prophète.",
  },
  {
    question: "Peut-on faire doua en français après la prière ?",
    answer:
      "Oui, la doua personnelle (supplication libre) peut être faite dans toute langue, y compris le français. Cependant, les adhkar spécifiques après la prière (istighfar, tasbih, ayat al-kursi) doivent être récités en arabe car ce sont des formules prophétiques précises. Pour les demandes personnelles, le français est tout à fait valide car Allah comprend toutes les langues.",
  },
  {
    question: "Combien de temps durent les adhkar après la prière ?",
    answer:
      "Les adhkar complets après la prière prennent environ 5 à 10 minutes. Le minimum essentiel (istighfar 3 fois, formule du salam, tasbih de Fatima et ayat al-kursi) peut être récité en 3 à 5 minutes. Le Prophète (paix et salut sur lui) restait assis après le salam le temps de réciter ces invocations avant de se lever ou de se retourner vers les fidèles.",
  },
  {
    question: "Quelle est la récompense des adhkar après la prière ?",
    answer:
      "Les récompenses sont immenses. Le Prophète (paix et salut sur lui) a dit que celui qui récite le tasbih de Fatima après chaque prière voit ses péchés pardonnés même s&apos;ils sont aussi nombreux que l&apos;écume de la mer (Muslim). Celui qui récite ayat al-kursi après chaque prière obligatoire, seule la mort le sépare du Paradis (an-Nasa&apos;i). Ces adhkar sont parmi les causes les plus puissantes d&apos;obtenir la récompense divine.",
  },
  {
    question: "L'ordre des adhkar après la prière est-il obligatoire ?",
    answer:
      "L&apos;ordre traditionnel est recommandé mais n&apos;est pas strictement obligatoire. La Sunna indique de commencer par l&apos;istighfar (3 fois), puis la formule Allahumma anta as-salam, puis le tasbih, puis ayat al-kursi. Cependant, si le fidèle inverse l&apos;ordre, ses adhkar restent valides. L&apos;essentiel est de ne pas délaisser ces invocations après chaque prière obligatoire.",
  },
  {
    question: "Les adhkar après la prière remplacent-ils la sunna ratiba ?",
    answer:
      "Non, les adhkar après la prière et les prières surérogatoires (sunna ratiba) sont deux actes distincts et complémentaires. Les adhkar sont des invocations et des formules de dhikr, tandis que la sunna ratiba désigne les prières supplémentaires (comme les 2 raka&apos;at après le dhuhr ou le maghrib). Le fidèle doit d&apos;abord réciter les adhkar, puis accomplir les prières surérogatoires.",
  },
];

export default function DouaApresPrivreIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-apres-priere-islam/#article",
        headline:
          "Doua après la prière en islam : adhkar et invocations authentiques après la salat",
        description:
          "Découvrez les douas après la prière en islam : adhkar authentiques après la salat en arabe avec phonétique et traduction, hadiths et guide complet.",
        image: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        datePublished: "2026-03-17",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-apres-priere-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-apres-priere-islam/#breadcrumb",
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
            name: "Doua après la prière",
            item: "https://www.islamreligion.fr/doua-apres-priere-islam",
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
          title="Doua après la prière en islam : les adhkar authentiques après chaque salat"
          subtitle="Les invocations et formules de dhikr à réciter après chaque prière obligatoire, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/prosternation-sujud-priere-islam-mosquee.jpg"
          imageAlt="Prosternation sujud dans une mosquée illustrant la prière et les invocations après la salat en islam"
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
                <span className="text-foreground">Doua après la prière</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Après chaque prière obligatoire, le Prophète (paix et salut
                  sur lui) récitait des invocations et des formules de dhikr
                  spécifiques. Ces <strong>adhkar après la salat</strong>{" "}
                  comprennent l&apos;istighfar (demande de pardon) trois fois,
                  la formule &laquo;&nbsp;Allahumma anta as-salam&nbsp;&raquo;,
                  le tasbih de Fatima (subhanAllah 33 fois, al-hamdulillah 33
                  fois, Allahu akbar 34 fois), la récitation d&apos;ayat
                  al-kursi et des douas prophétiques. Ces invocations sont
                  parmi les causes les plus puissantes de pardon des péchés et
                  d&apos;accès au Paradis.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance des adhkar */}
              {/* ============================================ */}
              <section id="importance-adhkar" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance des adhkar après la prière en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La <strong>doua après la prière</strong> occupe une place
                  centrale dans la pratique quotidienne du musulman. Lorsque le
                  fidèle termine sa salat par le salam final, il entre dans un
                  moment particulièrement béni où les portes de l&apos;exaucement
                  sont grandes ouvertes. Le Prophète (paix et salut sur lui)
                  ne quittait jamais sa place de prière sans avoir récité les
                  adhkar prescrits, montrant ainsi l&apos;importance capitale de
                  ces invocations dans la vie spirituelle du croyant.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les <strong>adhkar après la salat</strong> ne sont pas de
                  simples formules répétitives : ce sont des actes
                  d&apos;adoration à part entière qui prolongent l&apos;état de
                  connexion spirituelle établi pendant la prière. Chaque formule
                  possède un sens profond et une récompense immense auprès
                  d&apos;Allah. Les négliger, c&apos;est se priver d&apos;un
                  trésor spirituel accessible en quelques minutes seulement.
                </p>

                <HadithCard
                  arabic="من سبح الله في دبر كل صلاة ثلاثا وثلاثين، وحمد الله ثلاثا وثلاثين، وكبر الله ثلاثا وثلاثين، فتلك تسعة وتسعون، وقال تمام المائة: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، غفرت خطاياه وإن كانت مثل زبد البحر"
                  text="Celui qui glorifie Allah 33 fois après chaque prière, Le loue 33 fois et proclame Sa grandeur 33 fois — cela fait 99 — puis dit pour compléter la centaine : 'Il n'y a de divinité qu'Allah, Seul, sans associé. À Lui la royauté, à Lui la louange, et Il est Capable de toute chose', ses péchés seront pardonnés même s'ils sont aussi nombreux que l'écume de la mer."
                  source="Rapporté par Muslim (597)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith à lui seul suffit à montrer la valeur inestimable
                  des adhkar après la prière. Une pratique qui ne prend que
                  quelques minutes peut effacer les péchés d&apos;une journée
                  entière. Les compagnons du Prophète (paix et salut sur lui)
                  étaient très assidus dans cette pratique, et les savants de
                  l&apos;islam n&apos;ont cessé de rappeler son importance à
                  travers les siècles.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cinq prières, cinq occasions quotidiennes :</strong>{" "}
                      les adhkar après chaque salat représentent cinq moments
                      privilégiés de dhikr et d&apos;invocation chaque jour.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prolongement de la prière :</strong> les adhkar
                      permettent de maintenir l&apos;état de recueillement
                      (khushu&apos;) et de ne pas quitter brutalement
                      l&apos;atmosphère spirituelle de la salat.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Protection spirituelle :</strong> ces invocations
                      constituent un bouclier contre le mal, les péchés et les
                      tentations qui guettent le croyant après sa prière. Pour
                      approfondir les{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                      consultez notre guide complet.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/prosternation-sujud-priere-islam-mosquee.jpg"
                    alt="Fidèle en prosternation dans une mosquée illustrant l'importance de la prière et des adhkar en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Istighfar et formules après le salam */}
              {/* ============================================ */}
              <section id="istighfar-salam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Istighfar et premières formules après le salam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dès que le musulman prononce le salam final de sa prière, la
                  première chose qu&apos;il doit dire est la demande de pardon
                  à Allah. Cette pratique prophétique montre l&apos;humilité du
                  croyant qui, même après avoir accompli un acte d&apos;adoration
                  aussi noble que la salat, reconnaît ses manquements et ses
                  imperfections dans l&apos;accomplissement de cette prière.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Astaghfirullah (3 fois)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La première invocation après le salam est la demande de
                  pardon, répétée trois fois. Le Prophète (paix et salut sur
                  lui) ne manquait jamais cette formule, car la prière, aussi
                  bien accomplie soit-elle, comporte toujours des imperfections
                  que seul le pardon d&apos;Allah peut compenser.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Astaghfirullah, Astaghfirullah, Astaghfirullah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je demande pardon à Allah, je demande pardon à Allah, je demande pardon à Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (591)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Allahumma anta as-salam
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Immédiatement après l&apos;istighfar, le Prophète (paix et
                  salut sur lui) prononçait cette magnifique formule qui
                  reconnaît Allah comme la source même de la paix (as-Salam).
                  Thawban rapporte que le Messager d&apos;Allah ne manquait
                  jamais cette invocation après chaque prière obligatoire.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma anta as-salam, wa minka as-salam, tabarakta ya dhal-jalali wal-ikram
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Tu es la Paix et de Toi vient la paix. Béni sois-Tu, Toi le Détenteur de la Majesté et de la Générosité&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (591)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. La ilaha illAllah wahdahu la sharika lah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette formule de tawhid est une invocation puissante que le
                  Prophète (paix et salut sur lui) récitait après le salam. Elle
                  constitue une affirmation solennelle de l&apos;unicité
                  d&apos;Allah et de Sa souveraineté absolue sur toute chose.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illAllahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa &apos;ala kulli shay&apos;in qadir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité qu&apos;Allah, Seul, sans associé. À Lui la royauté, à Lui la louange, et Il est Capable de toute chose&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6403) et Muslim (597)
                  </p>
                </div>

                <HadithCard
                  arabic="كان رسول الله صلى الله عليه وسلم إذا انصرف من صلاته استغفر ثلاثا وقال: اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والإكرام"
                  text="Lorsque le Messager d'Allah terminait sa prière, il demandait pardon trois fois puis disait : 'Seigneur, Tu es la Paix et de Toi vient la paix. Béni sois-Tu, Toi le Détenteur de la Majesté et de la Générosité.'"
                  source="Rapporté par Muslim (591), d'après Thawban"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces premières formules après le salam constituent le socle
                  des adhkar post-prière. Elles établissent un lien direct
                  entre la fin de la salat et le début du dhikr, créant une
                  transition fluide qui maintient le coeur du croyant dans
                  l&apos;état de recueillement. L&apos;imam an-Nawawi
                  soulignait que ces invocations sont parmi les sunna les plus
                  confirmées (mu&apos;akkada) et qu&apos;il est fortement
                  déconseillé de les délaisser.
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
              {/* SECTION 3 : Tasbih de Fatima */}
              {/* ============================================ */}
              <section id="tasbih-fatimi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tasbih de Fatima : subhanAllah, al-hamdulillah, Allahu akbar
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les adhkar les plus importants après la prière figure
                  le célèbre <strong>tasbih de Fatima</strong>, également
                  appelé &laquo;&nbsp;at-tasbihat&nbsp;&raquo;. Cette pratique
                  tire son nom du fait que le Prophète (paix et salut sur lui)
                  l&apos;a enseignée à sa fille Fatima (qu&apos;Allah soit
                  satisfait d&apos;elle) dans un contexte émouvant qui
                  illustre la valeur immense du dhikr aux yeux d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Fatima était venue demander au Prophète (paix et salut sur
                  lui) une servante pour l&apos;aider dans les tâches ménagères
                  qui l&apos;épuisaient. Au lieu de lui accorder un serviteur,
                  le Prophète lui enseigna ces formules de dhikr en lui disant
                  qu&apos;elles étaient meilleures pour elle qu&apos;un
                  serviteur. Ali ibn Abi Talib (qu&apos;Allah soit satisfait de
                  lui) rapporta qu&apos;il n&apos;abandonna jamais cette
                  pratique après l&apos;avoir apprise du Prophète.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ اللَّهِ (٣٣ مَرَّةً) - الْحَمْدُ لِلَّهِ (٣٣ مَرَّةً) - اللَّهُ أَكْبَرُ (٣٤ مَرَّةً)
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> SubhanAllah (33 fois) - Al-hamdulillah (33 fois) - Allahu akbar (34 fois)
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire à Allah (33 fois) - Louange à Allah (33 fois) - Allah est le Plus Grand (34 fois)&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (3705) et Muslim (2727)
                  </p>
                </div>

                <HadithCard
                  arabic="ألا أدلكما على ما هو خير لكما من خادم؟ إذا أويتما إلى فراشكما، أو أخذتما مضاجعكما، فكبرا أربعا وثلاثين، وسبحا ثلاثا وثلاثين، واحمدا ثلاثا وثلاثين، فهذا خير لكما من خادم"
                  text="Ne voulez-vous pas que je vous indique ce qui est meilleur pour vous qu'un serviteur ? Lorsque vous vous couchez, proclamez la grandeur d'Allah 34 fois, glorifiez-Le 33 fois et louez-Le 33 fois. Cela est meilleur pour vous qu'un serviteur."
                  source="Rapporté par al-Bukhari (3705) et Muslim (2727), d'après Ali ibn Abi Talib"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Bien que ce hadith mentionne le moment du coucher, les
                  savants ont unanimement rapporté que le tasbih de Fatima se
                  récite également après chaque prière obligatoire, comme
                  l&apos;attestent d&apos;autres narrations authentiques. La
                  combinaison de ces trois formules — glorification (tasbih),
                  louange (tahmid) et exaltation (takbir) — constitue un
                  ensemble complet d&apos;adoration qui englobe les principales
                  formes de dhikr.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>SubhanAllah (33 fois) :</strong> glorification
                      d&apos;Allah, affirmation qu&apos;Il est exempt de tout
                      défaut et de toute imperfection.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Al-hamdulillah (33 fois) :</strong> louange et
                      gratitude envers Allah pour tous Ses bienfaits visibles
                      et invisibles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Allahu akbar (34 fois) :</strong> proclamation de
                      la grandeur suprême d&apos;Allah au-dessus de toute chose,
                      pour compléter la centaine.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Ayat al-Kursi */}
              {/* ============================================ */}
              <section id="ayat-al-kursi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ayat al-Kursi après chaque prière : la clé du Paradis
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les adhkar les plus puissants après la salat figure la
                  récitation d&apos;<strong>ayat al-kursi</strong> (le verset
                  du Trône), le verset 255 de la sourate al-Baqara. Ce verset
                  est considéré comme le plus majestueux du Coran selon le
                  Prophète (paix et salut sur lui), et sa récitation après
                  chaque prière obligatoire est associée à une récompense
                  extraordinaire.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahu la ilaha illa huwal-hayyul-qayyum. La ta&apos;khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhalladhi yashfa&apos;u &apos;indahu illa bi-idhnih. Ya&apos;lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bishay&apos;in min &apos;ilmihi illa bima sha&apos;. Wasi&apos;a kursiyyuhus-samawati wal-ard. Wa la ya&apos;uduhu hifdhuhuma wa huwal-&apos;aliyyul-&apos;adhim.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. À Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et de Sa science, ils n&apos;embrassent que ce qu&apos;Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Baqara (2:255)
                  </p>
                </div>

                <HadithCard
                  arabic="من قرأ آية الكرسي دبر كل صلاة مكتوبة لم يمنعه من دخول الجنة إلا أن يموت"
                  text="Celui qui récite ayat al-kursi après chaque prière obligatoire, seule la mort le sépare du Paradis."
                  source="Rapporté par an-Nasa'i dans as-Sunan al-Kubra (9928), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La portée de ce hadith est considérable : il suffit de
                  réciter ce seul verset après chaque prière obligatoire pour
                  se voir garantir l&apos;entrée au Paradis. Les savants
                  expliquent que cette promesse s&apos;adresse à celui qui
                  récite ayat al-kursi avec régularité, compréhension et
                  conviction, dans le cadre d&apos;une pratique religieuse
                  sincère. Ce verset agit comme une protection spirituelle qui
                  enveloppe le croyant entre deux prières.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est également recommandé de réciter, après les prières du
                  fajr et du maghrib, les trois dernières sourates du Coran
                  (al-Ikhlas, al-Falaq et an-Nas) trois fois chacune, comme
                  l&apos;a rapporté &apos;Uqba ibn &apos;Amir
                  (qu&apos;Allah soit satisfait de lui). Après les autres
                  prières, elles sont récitées une seule fois. Ces sourates
                  constituent une protection supplémentaire contre le mal et
                  les tentations. Pour approfondir les invocations spécifiques
                  de l&apos;aube, consultez notre article sur la{" "}
                  <Link href="/doua-fajr-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du fajr en islam</Link>.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant ayat al-kursi récitée après chaque prière en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas prophétiques */}
              {/* ============================================ */}
              <section id="douas-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas prophétiques après la prière
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus des formules de dhikr mentionnées précédemment, le
                  Prophète (paix et salut sur lui) récitait plusieurs
                  invocations spécifiques après la salat. Ces{" "}
                  <strong>douas prophétiques</strong> touchent à différents
                  aspects de la vie du croyant : la protection contre la
                  lâcheté, l&apos;avarice, la faiblesse et la demande
                  d&apos;assistance dans l&apos;adoration d&apos;Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Protection contre la lâcheté et l&apos;avarice
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Mu&apos;adh ibn Jabal rapporte que le Prophète (paix et
                  salut sur lui) lui a pris la main et lui a dit de ne jamais
                  manquer cette invocation après chaque prière. Elle demande à
                  Allah la protection contre quatre fléaux qui affaiblissent
                  le croyant dans sa vie spirituelle et mondaine.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma a&apos;inni &apos;ala dhikrika wa shukrika wa husni &apos;ibadatik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, aide-moi à T&apos;invoquer, à Te remercier et à T&apos;adorer de la meilleure façon&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (1522) et an-Nasa&apos;i (1303), authentifié par al-Albani
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Refuge contre quatre maux
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) cherchait régulièrement
                  refuge auprès d&apos;Allah contre des maux qui menacent le
                  croyant dans sa foi et sa dignité. Cette doua est une
                  protection complète qui couvre les faiblesses du corps et de
                  l&apos;âme.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْجُبْنِ وَأَعُوذُ بِكَ مِنَ الْبُخْلِ وَأَعُوذُ بِكَ مِنْ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا وَعَذَابِ الْقَبْرِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu bika minal-jubni, wa a&apos;udhu bika minal-bukhli, wa a&apos;udhu bika min an uradda ila ardhalil-&apos;umuri, wa a&apos;udhu bika min fitnatid-dunya wa &apos;adhabil-qabr
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge auprès de Toi contre la lâcheté, contre l&apos;avarice, contre le fait d&apos;être ramené à l&apos;âge le plus vil, et contre les tentations de ce monde et le châtiment de la tombe&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (2822)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. La formule de non-empêchement et de non-profit
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation rappelle au croyant que rien ne se produit
                  sans la volonté d&apos;Allah et que seul Lui peut accorder
                  ou empêcher toute chose. Elle ancre le tawhid dans le coeur
                  du musulman après chaque prière.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَٰهَ إِلَّا اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La hawla wa la quwwata illa billah. La ilaha illAllahu wa la na&apos;budu illa iyyah. Lahun-ni&apos;matu wa lahul-fadlu wa lahuth-thana&apos;ul-hasan. La ilaha illAllahu mukhlisina lahud-dina wa law karihal-kafirun.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de force ni de puissance qu&apos;en Allah. Il n&apos;y a de divinité qu&apos;Allah et nous n&apos;adorons que Lui. À Lui le bienfait, à Lui la grâce, à Lui la belle louange. Il n&apos;y a de divinité qu&apos;Allah, Lui vouant un culte exclusif, même si les mécréants le détestent&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (594), d&apos;après &apos;Abdullah ibn az-Zubayr
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;ensemble de ces douas prophétiques forme un programme
                  spirituel complet qui protège le croyant, renforce sa foi et
                  l&apos;aide à maintenir une connexion constante avec Allah
                  entre les prières. Les savants recommandent de les apprendre
                  progressivement et de les intégrer à sa routine quotidienne
                  pour en tirer le maximum de bienfaits. Pour découvrir
                  d&apos;autres invocations liées au jour béni, consultez notre
                  article sur la{" "}
                  <Link href="/doua-vendredi-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du vendredi en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Adab et moments propices */}
              {/* ============================================ */}
              <section id="adab-invocation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Adab et moments propices pour invoquer après la salat
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La période qui suit immédiatement la prière est l&apos;un des
                  moments les plus propices pour l&apos;invocation. Le Prophète
                  (paix et salut sur lui) a été interrogé sur le moment où la
                  doua est le plus susceptible d&apos;être exaucée, et il a
                  mentionné notamment le &laquo;&nbsp;dubur as-salat&nbsp;&raquo;
                  (à la fin de la prière). Les savants ont toutefois débattu
                  sur la signification exacte de cette expression : s&apos;agit-il
                  de la fin de la prière avant le salam ou après le salam ?
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La position la plus équilibrée, adoptée par de nombreux
                  savants dont Ibn Taymiyya et Ibn al-Qayyim, est que les deux
                  moments sont propices. Le dhikr prescrit (adhkar fixes)
                  s&apos;effectue après le salam, tandis que les douas
                  personnelles (supplications libres) peuvent être faites avant
                  le salam, notamment pendant le dernier tashahud, ou après le
                  salam après avoir récité les adhkar prescrits.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Rester assis après le salam
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) ne se levait pas
                        immédiatement après le salam. Il restait assis face à
                        la qibla le temps de réciter l&apos;istighfar et la
                        formule &laquo;&nbsp;Allahumma anta as-salam&nbsp;&raquo;,
                        puis se tournait vers les fidèles pour les autres adhkar.
                        Se précipiter pour quitter sa place après le salam prive
                        le croyant de ce moment béni.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La présence du coeur (hudur al-qalb)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réciter les adhkar de manière mécanique, sans réfléchir
                        au sens des paroles, diminue considérablement leur
                        impact spirituel. Le croyant doit s&apos;efforcer de
                        comprendre ce qu&apos;il dit et de ressentir la
                        signification de chaque formule dans son coeur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Respecter l&apos;ordre prophétique
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Bien que l&apos;ordre ne soit pas strictement
                        obligatoire, il est recommandé de suivre la séquence
                        enseignée par le Prophète (paix et salut sur lui) :
                        d&apos;abord l&apos;istighfar, puis la formule du salam,
                        puis le tasbih, puis ayat al-kursi, puis les douas
                        personnelles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas négliger les prières surérogatoires
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Après avoir terminé les adhkar, le fidèle accomplit les
                        prières surérogatoires (sunna ratiba) s&apos;il y en a
                        (2 raka&apos;at après le dhuhr, le maghrib et
                        l&apos;isha). Les adhkar ne remplacent pas ces prières
                        et inversement : les deux pratiques sont complémentaires
                        et chacune a sa propre récompense.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Erreurs courantes */}
              {/* ============================================ */}
              <section id="erreurs-courantes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Erreurs courantes à éviter après la prière
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  De nombreux musulmans commettent des erreurs dans la pratique
                  des adhkar après la salat, soit par méconnaissance de la
                  Sunna, soit par habitude héritée de traditions locales non
                  fondées. Voici les erreurs les plus fréquentes à éviter pour
                  que cette pratique reste conforme à l&apos;enseignement
                  prophétique authentique.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Quitter sa place précipitamment
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Se lever immédiatement après le salam sans réciter les
                      adhkar est une erreur fréquente, surtout chez ceux qui
                      sont pressés. Le Prophète (paix et salut sur lui) restait
                      assis après chaque prière pour réciter les invocations
                      prescrites. Quitter sa place, c&apos;est renoncer à des
                      récompenses immenses.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Réciter les adhkar à voix très haute
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ibn &apos;Abbas rapporte que les compagnons savaient que
                      le Prophète avait terminé sa prière lorsqu&apos;ils
                      entendaient le takbir (al-Bukhari). Cependant, les adhkar
                      ne doivent pas être récités en criant de manière à
                      déranger les autres fidèles. Une voix modérée, audible
                      pour soi-même, est la pratique recommandée.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Inventer des douas non authentiques
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Certaines personnes récitent après la prière des
                      invocations qui n&apos;ont aucun fondement dans la Sunna
                      ou qui sont tirées de hadiths faibles (da&apos;if). Il
                      est essentiel de s&apos;en tenir aux adhkar authentiques
                      transmis par le Prophète (paix et salut sur lui) et de
                      vérifier les sources avant d&apos;adopter une nouvelle
                      pratique.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Faire le dhikr de manière mécanique
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Réciter les adhkar sans réfléchir à leur sens, en les
                      comptant rapidement pour &laquo;&nbsp;en finir&nbsp;&raquo;,
                      diminue considérablement leur valeur spirituelle. Le but
                      n&apos;est pas simplement de compléter un nombre, mais de
                      se rapprocher d&apos;Allah par le rappel conscient et la
                      méditation sur Ses noms et attributs.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En corrigeant ces erreurs et en s&apos;attachant à la
                  pratique authentique du Prophète (paix et salut sur lui),
                  le musulman transforme ces quelques minutes après la prière
                  en un moment de grande valeur spirituelle. Les adhkar après
                  la salat deviennent alors non pas une simple routine, mais
                  un véritable rendez-vous quotidien avec Allah, cinq fois
                  par jour. Pour approfondir votre pratique spirituelle,
                  découvrez notre article sur{" "}
                  <Link href="/prier-islam-excellence-spirituelle" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">prier en islam avec excellence</Link>.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La régularité prime sur la quantité :</strong>{" "}
                      mieux vaut réciter les adhkar essentiels avec présence
                      du coeur que de multiplier les formules de manière
                      distraite.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Apprendre progressivement :</strong> pour ceux
                      qui découvrent ces adhkar, commencer par l&apos;istighfar,
                      la formule du salam et le tasbih, puis ajouter
                      graduellement les autres invocations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Enseigner à ses proches :</strong> transmettre
                      ces adhkar à ses enfants et à son entourage est un acte
                      de sadaqa jariya (aumône continue) dont la récompense
                      perdure même après la mort.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua en islam : guide complet des invocations"
                  description="Découvrez toutes les invocations authentiques du musulman : douas quotidiennes, conditions d&apos;exaucement et formules prophétiques."
                  href="/doua-islam"
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
                    href="/doua-vendredi-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du vendredi
                  </Link>
                  <Link
                    href="/doua-fajr-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du fajr
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/invocations-reussite-facilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Invocations pour la réussite
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
