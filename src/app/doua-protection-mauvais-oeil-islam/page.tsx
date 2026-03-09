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
    "Doua protection mauvais oeil en islam : invocations authentiques en arabe",
  description:
    "Découvrez les douas de protection contre le mauvais oeil (al-ayn) en islam : invocations authentiques en arabe avec phonétique et traduction, sourates protectrices, hadiths sur le mauvais oeil et conseils pratiques pour se protéger.",
  openGraph: {
    title:
      "Doua protection mauvais oeil en islam : invocations authentiques en arabe",
    description:
      "Les invocations prophétiques de protection contre le mauvais oeil en islam : textes en arabe, phonétique, traduction et hadiths authentiques.",
    url: "https://www.islamreligion.fr/doua-protection-mauvais-oeil-islam",
    images: [
      {
        url: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-protection-mauvais-oeil-islam",
  },
};

const tocItems = [
  { id: "definition-mauvais-oeil", label: "Qu&apos;est-ce que le mauvais oeil en islam" },
  { id: "hadith-mauvais-oeil", label: "Hadiths sur la réalité du mauvais oeil" },
  { id: "douas-protection", label: "Douas de protection contre al-ayn" },
  { id: "sourates-protectrices", label: "Sourates protectrices (al-Mu&apos;awwidhat)" },
  { id: "roqya-guerison", label: "Roqya et guérison du mauvais oeil" },
  { id: "moyens-prevention", label: "Moyens de prévention au quotidien" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua contre le mauvais oeil ?",
    answer:
      "La doua la plus authentique contre le mauvais oeil est celle rapportée par al-Bukhari : « A&apos;udhu bi kalimatillahit-tammati min kulli shaytanin wa hammatin wa min kulli &apos;aynin lammah » (Je cherche refuge dans les paroles parfaites d&apos;Allah contre tout diable, tout être nuisible et tout mauvais oeil). Le Prophète (paix et salut sur lui) récitait cette invocation pour protéger al-Hassan et al-Husayn.",
  },
  {
    question: "Le mauvais oeil existe-t-il vraiment en islam ?",
    answer:
      "Oui, le mauvais oeil (al-&apos;ayn) est une réalité confirmée par le Prophète (paix et salut sur lui) qui a dit : « Le mauvais oeil est une réalité. S&apos;il y avait quelque chose qui pouvait devancer le destin, ce serait le mauvais oeil » (rapporté par Muslim). C&apos;est une influence négative qui peut toucher une personne, ses biens ou sa santé par le biais d&apos;un regard envieux ou admiratif sans mention d&apos;Allah.",
  },
  {
    question: "Comment savoir si on est atteint du mauvais oeil ?",
    answer:
      "Les savants mentionnent certains signes possibles comme une fatigue inhabituelle, des maux de tête fréquents, un changement soudain de situation, une maladie inexpliquée ou un sentiment d&apos;oppression. Cependant, ces symptômes peuvent avoir des causes médicales. Il est recommandé de consulter un médecin et de pratiquer la roqya (récitation coranique) en parallèle, sans tomber dans les suppositions excessives.",
  },
  {
    question: "Peut-on faire la doua de protection en français ?",
    answer:
      "Oui, les invocations de protection peuvent être faites dans toute langue, car Allah comprend toutes les langues. Cependant, il est fortement recommandé d&apos;apprendre les formules prophétiques en arabe, car elles ont une puissance spirituelle particulière et c&apos;est la langue dans laquelle le Prophète (paix et salut sur lui) les a enseignées.",
  },
  {
    question: "Comment protéger ses enfants du mauvais oeil ?",
    answer:
      "Le Prophète (paix et salut sur lui) protégeait al-Hassan et al-Husayn en récitant : « U&apos;idhukuma bi kalimatillahit-tammati min kulli shaytanin wa hammatin wa min kulli &apos;aynin lammah » (Je vous place sous la protection des paroles parfaites d&apos;Allah contre tout diable, tout être nuisible et tout mauvais oeil). Il est aussi recommandé de réciter les sourates al-Falaq et an-Nas sur les enfants et de dire « MashaAllah » lorsqu&apos;on les admire.",
  },
  {
    question: "Quelles sourates réciter contre le mauvais oeil ?",
    answer:
      "Les sourates les plus efficaces contre le mauvais oeil sont sourate al-Fatiha, sourate al-Ikhlas (112), sourate al-Falaq (113) et sourate an-Nas (114). Le verset du Trône (Ayat al-Kursi, al-Baqara 2:255) est également une puissante protection. Le Prophète (paix et salut sur lui) recommandait de réciter les trois dernières sourates (al-Mu&apos;awwidhat) matin et soir trois fois chacune.",
  },
  {
    question: "Doit-on dire MashaAllah pour éviter le mauvais oeil ?",
    answer:
      "Oui, dire « MashaAllah » (ce qu&apos;Allah a voulu) ou « Allahumma barik » (qu&apos;Allah bénisse) lorsqu&apos;on voit quelque chose qui nous plaît est une sunna prophétique qui protège contre le mauvais oeil. Cette pratique rappelle que toute chose provient d&apos;Allah et empêche le sentiment d&apos;envie de se transformer en mauvais oeil. Le Prophète (paix et salut sur lui) a encouragé cette habitude pour préserver la fraternité.",
  },
  {
    question: "La roqya est-elle efficace contre le mauvais oeil ?",
    answer:
      "Oui, la roqya shar&apos;iyya (récitation coranique conforme à la Sunna) est le remède par excellence contre le mauvais oeil en islam. Elle consiste à réciter le Coran, les invocations prophétiques et à souffler sur la personne atteinte. Le Prophète (paix et salut sur lui) a dit : « Il n&apos;y a pas de mal à pratiquer la roqya tant qu&apos;elle ne contient pas de shirk (associationnisme) » (rapporté par Muslim).",
  },
];

export default function DouaProtectionMauvaisOeilIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-protection-mauvais-oeil-islam/#article",
        headline:
          "Doua protection mauvais oeil en islam : invocations authentiques en arabe",
        description:
          "Découvrez les douas de protection contre le mauvais oeil (al-ayn) en islam : invocations authentiques en arabe, sourates protectrices et hadiths.",
        image: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        datePublished: "2026-03-17",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-protection-mauvais-oeil-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-protection-mauvais-oeil-islam/#breadcrumb",
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
            name: "Doua contre le mauvais oeil",
            item: "https://www.islamreligion.fr/doua-protection-mauvais-oeil-islam",
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
          title="Doua protection mauvais oeil en islam : les invocations authentiques"
          subtitle="Protégez-vous du mauvais oeil (al-ayn) grâce aux invocations prophétiques authentiques. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
          imageAlt="Pèlerin en invocation doua devant la Kaaba symbolisant la protection divine contre le mauvais oeil en islam"
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
                <span className="text-foreground">Doua contre le mauvais oeil</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le mauvais oeil (<strong>al-&apos;ayn</strong>) est une réalité
                  confirmée par le Prophète (paix et salut sur lui) dans de
                  nombreux hadiths authentiques. L&apos;islam offre des moyens
                  de protection puissants contre ce mal : les invocations
                  prophétiques, la récitation des sourates protectrices
                  (al-Mu&apos;awwidhat), la roqya et les adhkar quotidiens.
                  Découvrez dans cet article les douas authentiques en arabe
                  avec leur phonétique et leur traduction pour vous protéger
                  efficacement.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Définition du mauvais oeil */}
              {/* ============================================ */}
              <section id="definition-mauvais-oeil" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce que le mauvais oeil (al-&apos;ayn) en islam ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mauvais oeil, appelé <strong>al-&apos;ayn</strong> (العين)
                  en arabe, est un phénomène reconnu en islam comme une réalité
                  spirituelle pouvant affecter les personnes, les biens et la
                  santé. Il se produit lorsqu&apos;une personne regarde quelque
                  chose ou quelqu&apos;un avec envie, admiration excessive ou
                  jalousie, sans mentionner le nom d&apos;Allah. Ce regard
                  chargé d&apos;une énergie négative peut causer un préjudice
                  réel à la personne visée.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est important de comprendre que le mauvais oeil ne relève
                  ni de la superstition ni de la magie. C&apos;est un décret
                  d&apos;Allah qui agit par Sa permission. Le Prophète (paix et
                  salut sur lui) a clairement établi sa réalité, et les savants
                  de l&apos;islam ont unanimement reconnu son existence. Le
                  mauvais oeil peut provenir de n&apos;importe qui, y compris
                  d&apos;un proche, d&apos;un ami ou même de soi-même lorsque
                  l&apos;on admire quelque chose sans dire
                  &laquo;&nbsp;MashaAllah&nbsp;&raquo; ou
                  &laquo;&nbsp;Allahumma barik&nbsp;&raquo;.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les effets du mauvais oeil peuvent être variés : maladie
                  soudaine sans cause médicale apparente, perte de biens,
                  échec inexpliqué, fatigue chronique, troubles du sommeil ou
                  changement brusque de situation. L&apos;islam, dans sa sagesse,
                  ne se contente pas de décrire ce phénomène : il fournit des
                  moyens de protection et de guérison complets, basés sur le
                  Coran et la Sunna authentique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Al-&apos;ayn (العين) :</strong> terme arabe
                      désignant le mauvais oeil, littéralement
                      &laquo;&nbsp;l&apos;oeil&nbsp;&raquo;, utilisé dans le
                      Coran et la Sunna pour décrire cette réalité spirituelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Al-hasad (الحسد) :</strong> l&apos;envie, qui est
                      souvent à l&apos;origine du mauvais oeil. Le Coran ordonne
                      de chercher refuge contre &laquo;&nbsp;le mal de
                      l&apos;envieux lorsqu&apos;il envie&nbsp;&raquo; (sourate
                      al-Falaq, 113:5).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La protection divine :</strong> Allah a révélé
                      dans le Coran des sourates et des versets spécifiquement
                      destinés à protéger le croyant contre le mauvais oeil et
                      l&apos;envie. Le{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">guide complet des douas en islam</Link>{" "}
                      détaille les différentes catégories d&apos;invocations.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-chapelet-tasbih-islam-livre-sacre.jpg"
                    alt="Coran ouvert avec chapelet tasbih illustrant la récitation des invocations de protection contre le mauvais oeil"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Hadiths sur le mauvais oeil */}
              {/* ============================================ */}
              <section id="hadith-mauvais-oeil" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Hadiths authentiques sur la réalité du mauvais oeil
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a confirmé la
                  réalité du mauvais oeil dans de nombreux hadiths authentiques.
                  Ces narrations établissent non seulement l&apos;existence de
                  ce phénomène, mais fournissent également les moyens de s&apos;en
                  protéger et de s&apos;en guérir.
                </p>

                <HadithCard
                  arabic="العين حق ولو كان شيء سابق القدر سبقته العين وإذا استغسلتم فاغسلوا"
                  text="Le mauvais oeil est une réalité. S'il y avait quelque chose qui pouvait devancer le destin, ce serait le mauvais oeil. Et lorsqu'on vous demande de vous laver (pour guérir quelqu'un du mauvais oeil), lavez-vous."
                  source="Rapporté par Muslim (2188)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est fondamental car il établit deux vérités
                  essentielles. Premièrement, le mauvais oeil est une réalité
                  incontestable (&laquo;&nbsp;al-&apos;aynu haqq&nbsp;&raquo;),
                  ce qui élimine tout doute à son sujet. Deuxièmement, sa
                  puissance est telle que le Prophète (paix et salut sur lui)
                  affirme que si quelque chose pouvait surpasser le qadar
                  (destin), ce serait le mauvais oeil. Cette formulation
                  hyperbolique souligne la gravité de ce phénomène et la
                  nécessité de s&apos;en protéger.
                </p>

                <HadithCard
                  arabic="إن العين لتدخل الرجل القبر وتدخل الجمل القدر"
                  text="Le mauvais oeil peut conduire un homme à la tombe et un chameau à la marmite."
                  source="Rapporté par Abu Nu'aym, authentifié par al-Albani dans Sahih al-Jami' (4023)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre de manière saisissante les conséquences
                  possibles du mauvais oeil : il peut mener à la mort d&apos;un
                  être humain et à la perte des biens les plus précieux.
                  C&apos;est pourquoi les savants de l&apos;islam insistent
                  sur l&apos;importance de la protection quotidienne par les
                  adhkar (invocations) du matin et du soir.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a également enseigné que
                  celui qui admire quelque chose chez autrui doit invoquer la
                  bénédiction d&apos;Allah en disant
                  &laquo;&nbsp;MashaAllah&nbsp;&raquo; ou
                  &laquo;&nbsp;Allahumma barik&nbsp;&raquo;. Cette pratique
                  simple mais essentielle protège à la fois l&apos;admirateur
                  du péché d&apos;envie et la personne admirée du mauvais
                  oeil. La prévention est ainsi au coeur de l&apos;approche
                  islamique face à ce phénomène.
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
              {/* SECTION 3 : Douas de protection */}
              {/* ============================================ */}
              <section id="douas-protection" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas de protection contre le mauvais oeil (al-&apos;ayn)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné plusieurs
                  invocations spécifiques pour se protéger du mauvais oeil.
                  Ces douas authentiques, tirées de la Sunna, constituent un
                  bouclier spirituel efficace contre al-&apos;ayn. Voici les
                  principales invocations avec leur texte arabe, leur
                  phonétique et leur traduction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua du Prophète pour protéger al-Hassan et al-Husayn
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est l&apos;invocation que le Prophète Ibrahim (paix
                  sur lui) utilisait et que le Prophète Muhammad (paix et salut
                  sur lui) récitait pour protéger ses petits-fils al-Hassan et
                  al-Husayn. Elle est considérée comme l&apos;une des plus
                  puissantes protections contre le mauvais oeil.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> U&apos;idhukuma bi kalimatillahit-tammati min kulli shaytanin wa hammatin wa min kulli &apos;aynin lammah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je vous place sous la protection des paroles parfaites d&apos;Allah, contre tout diable, tout être nuisible et tout mauvais oeil&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (3371)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Refuge dans les paroles parfaites d&apos;Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation complète offre une protection globale contre
                  tout mal, y compris le mauvais oeil. Le Prophète (paix et
                  salut sur lui) l&apos;enseignait à ses compagnons comme
                  formule de protection quotidienne.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimatillahit-tammati min sharri ma khalaq
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge dans les paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2708)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Invocation de protection au nom d&apos;Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette doua est une formule de protection générale que le
                  Prophète (paix et salut sur lui) recommandait de réciter
                  trois fois le matin et trois fois le soir. Elle crée un
                  bouclier spirituel contre toute nuisance, y compris le
                  mauvais oeil.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahilladhi la yadurru ma&apos;asmihi shay&apos;un fil-ardi wa la fis-sama&apos;i wa huwas-Sami&apos;ul-&apos;Alim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, avec le nom duquel rien sur terre ni dans le ciel ne peut nuire, et Il est l&apos;Audient, l&apos;Omniscient&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5088), at-Tirmidhi (3388)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua pour invoquer la bénédiction et éviter le mauvais oeil
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsqu&apos;on admire quelque chose chez quelqu&apos;un ou
                  chez soi-même, le Prophète (paix et salut sur lui) a
                  enseigné de dire cette invocation pour demander la
                  bénédiction d&apos;Allah et empêcher le mauvais oeil.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ ، اللَّهُمَّ بَارِكْ فِيهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ma sha&apos;Allahu la quwwata illa billah, Allahumma barik fih
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ce qu&apos;Allah a voulu, il n&apos;y a de force qu&apos;en Allah. Seigneur, bénis-le&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Inspiré de sourate al-Kahf (18:39) et des recommandations prophétiques
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Sourates protectrices */}
              {/* ============================================ */}
              <section id="sourates-protectrices" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les sourates protectrices contre le mauvais oeil (al-Mu&apos;awwidhat)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Allah a révélé dans le Coran des sourates spécifiquement
                  destinées à protéger le croyant contre tout mal, y compris le
                  mauvais oeil et l&apos;envie. Les sourates al-Falaq (113) et
                  an-Nas (114), appelées <strong>al-Mu&apos;awwidhatain</strong>
                  {" "}(les deux protectrices), occupent une place centrale dans la
                  protection islamique. Avec sourate al-Ikhlas (112), elles
                  forment <strong>al-Mu&apos;awwidhat</strong> (les trois
                  protectrices).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Sourate al-Falaq (113) : la protection contre l&apos;envieux
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette sourate mentionne explicitement la protection contre
                  &laquo;&nbsp;le mal de l&apos;envieux lorsqu&apos;il
                  envie&nbsp;&raquo;, ce qui inclut directement le mauvais
                  oeil. Le Prophète (paix et salut sur lui) récitait cette
                  sourate chaque matin et chaque soir pour se protéger.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ، مِنْ شَرِّ مَا خَلَقَ ، وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ، وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ، وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Qul a&apos;udhu bi Rabbil-falaq, min sharri ma khalaq, wa min sharri ghasiqin idha waqab, wa min sharrin-naffathati fil-&apos;uqad, wa min sharri hasidin idha hasad
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Dis : Je cherche refuge auprès du Seigneur de l&apos;aube naissante, contre le mal de ce qu&apos;Il a créé, contre le mal de l&apos;obscurité quand elle s&apos;approfondit, contre le mal de celles qui soufflent dans les noeuds, et contre le mal de l&apos;envieux lorsqu&apos;il envie&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Falaq (113:1-5)
                  </p>
                </div>

                <HadithCard
                  arabic="ما تعوذ متعوذ بمثلهما يعني المعوذتين"
                  text="Personne ne cherche refuge (auprès d'Allah) par quelque chose de meilleur que ces deux sourates (al-Falaq et an-Nas)."
                  source="Rapporté par an-Nasa'i (5432), authentifié par al-Albani"
                />

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Ayat al-Kursi : le verset du Trône
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le verset du Trône (al-Baqara, 2:255) est considéré comme le
                  plus grand verset du Coran. Sa récitation offre une protection
                  complète contre tout mal. Le Prophète (paix et salut sur lui)
                  a enseigné que celui qui le récite le soir est protégé par
                  Allah jusqu&apos;au matin, et qu&apos;aucun diable ne peut
                  s&apos;approcher de lui.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta&apos;khudhuhU sinatun wa la nawm, lahU ma fis-samawati wa ma fil-ard
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. A Lui appartient tout ce qui est dans les cieux et sur la terre&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Baqara (2:255)
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains en prière illustrant les invocations de protection contre le mauvais oeil en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Roqya et guérison */}
              {/* ============================================ */}
              <section id="roqya-guerison" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Roqya et guérison du mauvais oeil en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Lorsqu&apos;une personne est atteinte du mauvais oeil,
                  l&apos;islam prescrit la <strong>roqya shar&apos;iyya</strong>
                  {" "}(récitation coranique légitime) comme principal moyen de
                  guérison. Le Prophète (paix et salut sur lui) a lui-même
                  pratiqué et autorisé la roqya, à condition qu&apos;elle soit
                  conforme à la Sunna et exempte de tout shirk
                  (associationnisme).
                </p>

                <HadithCard
                  arabic="استرقوا لها فإن بها النظرة"
                  text="Pratiquez la roqya pour elle, car elle est atteinte du mauvais oeil (an-nadhra)."
                  source="Rapporté par al-Bukhari (5739) et Muslim (2197)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La roqya contre le mauvais oeil consiste à réciter sur la
                  personne atteinte les versets du Coran (sourate al-Fatiha,
                  Ayat al-Kursi, les trois dernières sourates) et les
                  invocations prophétiques de protection. Le raqui (celui qui
                  pratique la roqya) récite en plaçant sa main sur la zone
                  douloureuse ou en soufflant légèrement sur le malade.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné une méthode
                  spécifique de guérison lorsque l&apos;auteur du mauvais oeil
                  est identifié. Dans ce cas, il est demandé à cette personne
                  de faire ses ablutions (wudu) et de verser l&apos;eau sur la
                  personne atteinte. Ce remède prophétique est rapporté dans
                  plusieurs hadiths authentiques et montre que l&apos;islam
                  fournit des solutions concrètes face à ce phénomène.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter sourate al-Fatiha
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Al-Fatiha est la sourate la plus guérisseuse du Coran.
                        Le Prophète (paix et salut sur lui) l&apos;a appelée
                        &laquo;&nbsp;ar-Ruqya&nbsp;&raquo; (la guérison). Elle
                        est récitée sur le malade avec l&apos;intention de
                        guérison par la permission d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter les sourates protectrices
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réciter sourate al-Ikhlas, al-Falaq et an-Nas trois
                        fois chacune en soufflant dans les mains et en les
                        passant sur tout le corps, comme le faisait le Prophète
                        (paix et salut sur lui) chaque soir avant de dormir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter Ayat al-Kursi et les douas prophétiques
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le verset du Trône et les invocations de protection
                        mentionnées dans cet article sont récités sur la
                        personne atteinte. La régularité et la sincérité dans
                        la récitation sont essentielles pour obtenir la
                        guérison par la permission d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le lavage (al-ightissal) si l&apos;auteur est identifié
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si la personne responsable du mauvais oeil est connue,
                        on lui demande de faire ses ablutions et de verser
                        l&apos;eau restante sur la personne atteinte. Ce
                        remède prophétique est rapporté par Muslim et constitue
                        un traitement efficace par la permission d&apos;Allah.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Moyens de prévention */}
              {/* ============================================ */}
              <section id="moyens-prevention" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les moyens de prévention au quotidien
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam encourage une approche préventive face au
                  mauvais oeil. Plutôt que d&apos;attendre d&apos;être atteint
                  pour chercher la guérison, le musulman est invité à adopter
                  des habitudes quotidiennes qui le protègent en permanence.
                  Voici les principaux moyens de prévention enseignés par le
                  Prophète (paix et salut sur lui) et recommandés par les
                  savants.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Les adhkar du matin et du soir
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La récitation quotidienne des invocations du matin et du
                      soir constitue le premier bouclier contre le mauvais oeil.
                      Elles comprennent Ayat al-Kursi, les trois dernières
                      sourates (3 fois chacune) et les douas de protection
                      mentionnées dans cet article.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Dire MashaAllah et Allahumma barik
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Lorsqu&apos;on admire quelque chose chez soi ou chez
                      autrui, dire &laquo;&nbsp;MashaAllah&nbsp;&raquo; ou
                      &laquo;&nbsp;Allahumma barik&nbsp;&raquo; est une sunna
                      qui prévient le mauvais oeil. Cette habitude reconnaît
                      que tout bienfait vient d&apos;Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le tawakkul (confiance en Allah)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Placer sa confiance totale en Allah est la meilleure
                      protection. Le croyant qui sait que rien ne peut
                      l&apos;atteindre sans la permission d&apos;Allah vit
                      dans la sérénité. Le Coran affirme :
                      &laquo;&nbsp;Et quiconque s&apos;en remet à Allah, Il
                      lui suffit&nbsp;&raquo; (at-Talaq, 65:3).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La discrétion sur ses bienfaits
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a recommandé la
                      discrétion sur les bienfaits d&apos;Allah pour éviter
                      l&apos;envie. Il a dit :
                      &laquo;&nbsp;Aidez-vous à accomplir vos besoins par la
                      discrétion, car tout détenteur de bienfait est
                      envié&nbsp;&raquo; (rapporté par at-Tabarani).
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, la protection contre le mauvais oeil en islam
                  repose sur trois piliers : la récitation régulière des
                  adhkar et des douas prophétiques, l&apos;adoption de bonnes
                  habitudes (dire MashaAllah, être discret sur ses bienfaits)
                  et le tawakkul sincère en Allah. Cette approche équilibrée
                  entre les causes spirituelles et le comportement quotidien
                  reflète la sagesse de l&apos;enseignement islamique. Pour
                  approfondir les{" "}
                  <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas de protection en islam</Link>,
                  consultez notre article dédié.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas négliger les adhkar :</strong> les
                      invocations du matin et du soir sont le premier rempart
                      contre le mauvais oeil. Leur abandon expose le croyant
                      aux influences négatives.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Éviter les amulettes et talismans :</strong>{" "}
                      l&apos;islam interdit le port d&apos;amulettes, de
                      &laquo;&nbsp;main de Fatma&nbsp;&raquo; ou de tout objet
                      censé protéger du mauvais oeil. Seules les invocations
                      coraniques et prophétiques constituent une protection
                      légitime.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Consulter un médecin en parallèle :</strong>{" "}
                      l&apos;islam encourage de prendre les causes matérielles
                      en même temps que les causes spirituelles. Si des
                      symptômes persistent, il est sage de consulter un
                      professionnel de santé tout en pratiquant la roqya. Pour
                      en savoir plus sur les{" "}
                      <Link href="/invocations-reussite-facilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations pour la réussite</Link>,
                      consultez notre guide.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Douas de protection en islam"
                  description="Découvrez l&apos;ensemble des invocations de protection enseignées par le Prophète (paix et salut sur lui) pour vous protéger au quotidien."
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
                    href="/doua-protection-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Douas de protection en islam
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/doua-voyageur-safar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du voyageur
                  </Link>
                  <Link
                    href="/remede-angoisse-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remède contre l&apos;angoisse
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
