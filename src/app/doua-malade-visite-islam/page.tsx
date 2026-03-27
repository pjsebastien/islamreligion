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
    "Doua pour un malade en islam : invocations de la visite",
  description:
    "Découvrez les douas pour un malade en islam : invocations authentiques en arabe avec phonétique et traduction, mérites de la visite du malade, roqya, adab et hadiths prophétiques sur la guérison.",
  openGraph: {
    title:
      "Doua pour un malade en islam : invocations de la visite",
    description:
      "Les invocations authentiques pour un malade en islam : textes en arabe, phonétique, traduction, roqya et hadiths sur les mérites de la visite du malade.",
    url: "https://www.islamreligion.fr/doua-malade-visite-islam",
    images: [
      {
        url: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-malade-visite-islam",
  },
};

const tocItems = [
  { id: "merite-visite-malade", label: "Mérite de visiter le malade en islam" },
  { id: "doua-guerison", label: "Doua pour la guérison (As'alullaha al-'Adhim)" },
  { id: "invocations-prophetiques", label: "Invocations prophétiques pour le malade" },
  { id: "roqya-malade", label: "La roqya pour le malade" },
  { id: "adab-visite", label: "Adab (bienséances) de la visite du malade" },
  { id: "doua-malade-lui-meme", label: "Doua du malade pour lui-même" },
  { id: "espoir-patience", label: "Espoir et patience face à la maladie" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua pour un malade en islam ?",
    answer:
      "La doua la plus authentique pour un malade est celle rapportée par Muslim : « As&apos;alullaha al-&apos;Adhim, Rabbal-&apos;Arshil-&apos;Adhim, an yashfiyak » (Je demande à Allah le Magnifique, Seigneur du Trône magnifique, de te guérir), à répéter sept fois. Le Prophète (paix et salut sur lui) a affirmé que quiconque la récite sept fois pour un malade, celui-ci guérira si son terme n&apos;est pas encore arrivé.",
  },
  {
    question: "Comment visiter un malade en islam ?",
    answer:
      "La visite du malade en islam suit des bienséances précises : demander la permission avant de venir, ne pas prolonger la visite pour ne pas fatiguer le malade, invoquer Allah pour sa guérison, lui remonter le moral en lui rappelant les mérites de la patience, et lui demander de faire doua car l&apos;invocation du malade est exaucée. Il est aussi recommandé de poser sa main sur le front du malade et d&apos;invoquer pour lui.",
  },
  {
    question: "Peut-on réciter le Coran sur un malade ?",
    answer:
      "Oui, la récitation du Coran sur un malade (roqya) est une pratique prophétique authentique. Le Prophète (paix et salut sur lui) récitait sourate Al-Fatiha, les sourates Al-Falaq et An-Nas, ainsi que le verset du Trône (Ayat al-Kursi) sur les malades. Il est permis de réciter ces versets et de souffler légèrement sur le malade ou sur ses mains pour les passer ensuite sur le corps.",
  },
  {
    question: "Quelle est la récompense de celui qui visite un malade ?",
    answer:
      "Le Prophète (paix et salut sur lui) a dit : « Lorsqu&apos;un musulman rend visite à son frère malade, il ne cesse d&apos;être dans la kharfa du Paradis jusqu&apos;à ce qu&apos;il revienne. » La kharfa désigne la cueillette des fruits du Paradis. De plus, soixante-dix mille anges invoquent en faveur du visiteur. C&apos;est l&apos;un des droits du musulman sur son frère.",
  },
  {
    question: "Que dire quand on rend visite à un malade en islam ?",
    answer:
      "En rendant visite à un malade, on peut dire : « La ba&apos;s, tahurun in sha Allah » (Pas de mal, c&apos;est une purification si Allah le veut). On peut aussi réciter la doua : « As&apos;alullaha al-&apos;Adhim, Rabbal-&apos;Arshil-&apos;Adhim, an yashfiyak » sept fois. Il est recommandé d&apos;invoquer Allah pour la guérison du malade et de lui rappeler les mérites de la patience face à l&apos;épreuve.",
  },
  {
    question: "Le malade peut-il faire doua pour lui-même ?",
    answer:
      "Oui, le malade est fortement encouragé à invoquer Allah pour sa propre guérison. Sa doua est même considérée comme exaucée, car le malade est en état de faiblesse et de soumission devant Allah. Le Prophète (paix et salut sur lui) invoquait pour lui-même lorsqu&apos;il était malade en passant ses mains sur son corps après avoir récité les sourates protectrices (al-Mu&apos;awwidhat).",
  },
  {
    question: "Est-il permis de se soigner en islam ?",
    answer:
      "Oui, se soigner est non seulement permis mais recommandé en islam. Le Prophète (paix et salut sur lui) a dit : « Soignez-vous, car Allah n&apos;a pas créé de maladie sans lui créer un remède, sauf la vieillesse » (rapporté par Abu Dawud). Le musulman combine la recherche du traitement médical avec l&apos;invocation et la confiance en Allah (tawakkul).",
  },
  {
    question: "Peut-on faire la doua pour un malade en français ?",
    answer:
      "Oui, la doua pour un malade peut être faite dans toute langue, y compris le français. Allah comprend toutes les langues. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe car elles ont été enseignées directement par le Prophète (paix et salut sur lui). Les supplications personnelles en français restent parfaitement valides et acceptées.",
  },
];

export default function DouaMaladeVisiteIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-malade-visite-islam/#article",
        headline:
          "Doua pour un malade en islam : invocations de la visite",
        description:
          "Découvrez les douas pour un malade en islam : invocations authentiques en arabe, mérites de la visite, roqya, adab et hadiths prophétiques sur la guérison.",
        image: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        datePublished: "2026-03-11",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-malade-visite-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-malade-visite-islam/#breadcrumb",
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
            name: "Doua pour un malade",
            item: "https://www.islamreligion.fr/doua-malade-visite-islam",
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
          title="Doua pour un malade en islam : invocations de la visite"
          subtitle="Les invocations authentiques pour visiter et invoquer en faveur du malade, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-rayons-motifs-islamiques.jpg"
          imageAlt="Mains levées en invocation doua pour un malade avec rayons de lumière et motifs islamiques"
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
                <span className="text-foreground">Doua pour un malade</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Visiter un malade est l&apos;un des droits fondamentaux du
                  musulman sur son frère. Le Prophète (paix et salut sur lui) a
                  enseigné des invocations spécifiques pour la guérison, dont
                  la célèbre doua &laquo;&nbsp;As&apos;alullaha al-&apos;Adhim,
                  Rabbal-&apos;Arshil-&apos;Adhim, an yashfiyak&nbsp;&raquo;
                  à réciter sept fois. Entre mérites immenses de la visite,
                  roqya prophétique et bienséances à respecter, cet article
                  rassemble tout ce que le musulman doit savoir pour
                  accompagner un malade avec foi et compassion.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Mérite de visiter le malade */}
              {/* ============================================ */}
              <section id="merite-visite-malade" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le mérite de visiter le malade en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La visite du malade (<strong>iyada al-marid</strong>) occupe
                  une place centrale dans la fraternité islamique. Elle fait
                  partie des cinq droits fondamentaux du musulman sur son
                  frère, et son mérite est considérable auprès d&apos;Allah.
                  Le Prophète (paix et salut sur lui) a multiplié les
                  encouragements envers cet acte de bonté, le plaçant parmi
                  les oeuvres les plus aimées d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam considère la maladie comme une épreuve qui
                  purifie le croyant de ses péchés et élève son rang auprès
                  d&apos;Allah. En rendant visite au malade, le musulman
                  accomplit un devoir de solidarité, réconforte son frère
                  dans l&apos;épreuve et invoque Allah en sa faveur. Cette
                  démarche est tellement valorisée qu&apos;elle entraîne des
                  récompenses extraordinaires, comme le rapportent de
                  nombreux hadiths authentiques.
                </p>

                <HadithCard
                  arabic="من عاد مريضا لم يزل في خرفة الجنة حتى يرجع"
                  text="Celui qui rend visite à un malade ne cesse d'être dans la kharfa (cueillette des fruits) du Paradis jusqu'à ce qu'il revienne."
                  source="Rapporté par Muslim (2568)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith révèle l&apos;immensité de la récompense réservée
                  à celui qui visite un malade. Dès l&apos;instant où il se
                  met en route jusqu&apos;à son retour chez lui, il est
                  enveloppé par la miséricorde divine, comme s&apos;il
                  cueillait les fruits du Paradis. Cette image puissante
                  illustre à quel point cet acte est aimé d&apos;Allah et
                  combien il est négligé par beaucoup de musulmans
                  aujourd&apos;hui.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans un autre hadith, le Prophète (paix et salut sur lui)
                  mentionne que soixante-dix mille anges invoquent en faveur
                  de celui qui rend visite à un malade le matin, et ce
                  jusqu&apos;au soir. S&apos;il le visite le soir, les anges
                  invoquent pour lui jusqu&apos;au matin. C&apos;est un
                  privilège immense que le croyant ne devrait jamais négliger.
                  Pour approfondir les différentes{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un droit du musulman :</strong> le Prophète (paix
                      et salut sur lui) a dit que parmi les droits du musulman
                      sur son frère figure la visite lorsqu&apos;il est
                      malade (al-Bukhari et Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Récompense des anges :</strong> soixante-dix
                      mille anges prient pour le visiteur du malade, que la
                      visite ait lieu le matin ou le soir (at-Tirmidhi).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La satisfaction d&apos;Allah :</strong> dans le
                      hadith qudsi, Allah dira au Jour du Jugement :
                      &laquo;&nbsp;Mon serviteur était malade et tu ne
                      l&apos;as pas visité. Si tu l&apos;avais visité, tu
                      M&apos;aurais trouvé auprès de lui&nbsp;&raquo;
                      (Muslim).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
                    alt="Mains levées en doua pour un malade avec lumière subtile symbolisant l'espoir de guérison"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua pour la guérison */}
              {/* ============================================ */}
              <section id="doua-guerison" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour la guérison : As&apos;alullaha al-&apos;Adhim
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les invocations les plus puissantes pour un malade, la
                  doua &laquo;&nbsp;As&apos;alullaha al-&apos;Adhim&nbsp;&raquo;
                  occupe une place privilégiée. Le Prophète (paix et salut sur
                  lui) a enseigné cette invocation spécifique et a garanti son
                  efficacité pour la{" "}
                  <Link href="/doua-guerison-malade-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">guérison du malade</Link>,
                  à condition qu&apos;elle soit récitée avec sincérité et
                  conviction.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> As&apos;alullaha al-&apos;Adhim, Rabbal-&apos;Arshil-&apos;Adhim, an yashfiyak
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je demande à Allah le Magnifique, Seigneur du Trône magnifique, de te guérir&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (2083), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit à propos de cette
                  invocation : &laquo;&nbsp;Quiconque rend visite à un malade
                  dont le terme n&apos;est pas encore arrivé et dit sept fois
                  cette doua, Allah le guérira de cette maladie.&nbsp;&raquo;
                  La répétition sept fois n&apos;est pas anodine : elle
                  reflète l&apos;insistance et la persévérance dans
                  l&apos;invocation, qualités aimées d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua tire sa puissance de la mention des plus beaux
                  noms d&apos;Allah : Al-&apos;Adhim (le Magnifique) et Rabb
                  al-&apos;Arsh (le Seigneur du Trône). En invoquant Allah par
                  ces noms grandioses, le croyant reconnaît la toute-puissance
                  divine et sa capacité absolue à guérir toute maladie, quelle
                  qu&apos;en soit la gravité. La guérison est entre les mains
                  d&apos;Allah seul, et cette doua exprime cette croyance
                  fondamentale.
                </p>

                <HadithCard
                  arabic="ما من عبد مسلم يعود مريضا لم يحضر أجله فيقول سبع مرات: أسأل الله العظيم رب العرش العظيم أن يشفيك، إلا عوفي"
                  text="Tout serviteur musulman qui rend visite à un malade dont le terme n'est pas encore arrivé et dit sept fois : 'Je demande à Allah le Magnifique, Seigneur du Trône magnifique, de te guérir', celui-ci sera guéri."
                  source="Rapporté par at-Tirmidhi (2083), Abu Dawud (3106)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants précisent que cette garantie de guérison est liée
                  à la volonté d&apos;Allah : si le terme du malade n&apos;est
                  pas arrivé, la guérison surviendra par la permission
                  d&apos;Allah. Dans le cas contraire, la doua reste une source
                  de récompense immense pour celui qui la récite et pour le
                  malade lui-même. La sagesse divine dépasse notre
                  compréhension, et le croyant doit accepter le décret
                  d&apos;Allah avec confiance et soumission.
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
              {/* SECTION 3 : Invocations prophétiques */}
              {/* ============================================ */}
              <section id="invocations-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations prophétiques pour le malade
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné plusieurs
                  invocations à réciter lorsqu&apos;on rend visite à un malade
                  ou lorsqu&apos;on pose la main sur un endroit douloureux.
                  Ces douas sont issues de la Sunna authentique et constituent
                  un véritable trésor spirituel pour accompagner le malade
                  vers la guérison par la permission d&apos;Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. La doua en posant la main sur le malade
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) posait sa main droite
                  sur le malade et récitait cette invocation. C&apos;est une
                  pratique prophétique authentique qui allie le geste de
                  compassion à la parole d&apos;invocation.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ، اشْفِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Adh-hibil-ba&apos;s, Rabban-nas, ishfi wa Antash-Shafi, la shifa&apos;a illa shifa&apos;uk, shifa&apos;an la yughadiru saqaman
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ote le mal, Seigneur des hommes, guéris car Tu es le Guérisseur, il n&apos;y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (5675) et Muslim (2191)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua &laquo;&nbsp;La ba&apos;s&nbsp;&raquo; pour rassurer le malade
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsqu&apos;on visite un malade, il est recommandé de le
                  rassurer et de lui rappeler que la maladie est une
                  purification des péchés. Cette parole prophétique combine
                  l&apos;invocation et le réconfort moral.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ba&apos;s, tahurun in sha Allah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Pas de mal, c&apos;est une purification si Allah le veut&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (3616)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua de protection par le nom d&apos;Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) enseignait cette
                  invocation pour placer la main sur la partie douloureuse du
                  corps et demander la guérison par le nom d&apos;Allah. Elle
                  se récite trois fois en posant la main sur l&apos;endroit
                  atteint.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ أَرْقِيكَ مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ اللَّهُ يَشْفِيكَ بِسْمِ اللَّهِ أَرْقِيكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahi arqik, min kulli shay&apos;in yu&apos;dhik, min sharri kulli nafsin aw &apos;ayni hasidin, Allahu yashfik, bismillahi arqik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah je te fais la roqya, de toute chose qui te nuit, du mal de toute âme ou oeil envieux, Allah te guérit, au nom d&apos;Allah je te fais la roqya&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2186)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces invocations prophétiques sont un véritable programme de
                  guérison spirituelle que le visiteur peut réciter en faveur
                  du malade. La combinaison de ces douas avec la sincérité du
                  coeur, la confiance en Allah et la recherche des traitements
                  médicaux constitue l&apos;approche complète de l&apos;islam
                  face à la maladie. Pour découvrir d&apos;autres{" "}
                  <Link href="/remede-arabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">remèdes de la médecine prophétique</Link>,
                  consultez notre article dédié.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Roqya pour le malade */}
              {/* ============================================ */}
              <section id="roqya-malade" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La roqya pour le malade : guérison par le Coran
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La roqya (رقية) désigne la récitation de versets coraniques
                  et d&apos;invocations prophétiques sur le malade dans
                  l&apos;espoir de la guérison par la permission d&apos;Allah.
                  C&apos;est une pratique authentique et légitime en islam, à
                  condition qu&apos;elle soit basée sur le Coran, les
                  invocations prophétiques et la langue arabe compréhensible,
                  sans aucun recours au shirk ou à la sorcellerie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) pratiquait lui-même la
                  roqya sur les malades et encourageait ses compagnons à le
                  faire. Aïcha (qu&apos;Allah soit satisfait d&apos;elle)
                  rapporte que lorsque le Prophète était malade, il récitait
                  les sourates protectrices (al-Mu&apos;awwidhat : Al-Falaq
                  et An-Nas) et soufflait dans ses mains pour les passer
                  ensuite sur son corps. Lorsque sa maladie s&apos;aggrava,
                  c&apos;est Aïcha elle-même qui récitait et passait les
                  mains du Prophète sur son corps.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Wa nunazzilu minal-Qur&apos;ani ma huwa shifa&apos;un wa rahmatun lil-mu&apos;minin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Nous faisons descendre du Coran ce qui est guérison et miséricorde pour les croyants&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Isra (17:82)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les versets les plus recommandés pour la roqya du malade
                  sont : sourate Al-Fatiha (la plus grande sourate du Coran
                  pour la guérison), Ayat al-Kursi (le verset du Trône,
                  Al-Baqara 2:255), les derniers versets de sourate Al-Baqara
                  (2:285-286), et les trois dernières sourates du Coran
                  (Al-Ikhlas, Al-Falaq et An-Nas). La récitation doit être
                  faite avec présence du coeur, foi sincère et conviction que
                  la guérison vient d&apos;Allah seul.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sourate Al-Fatiha :</strong> appelée aussi
                      &laquo;&nbsp;Ar-Ruqya&nbsp;&raquo; (la guérison), elle
                      est la sourate la plus efficace pour la roqya selon
                      les savants.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ayat al-Kursi :</strong> le verset du Trône
                      est un bouclier contre le mal et une source de
                      guérison puissante.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les Mu&apos;awwidhat :</strong> Al-Falaq et
                      An-Nas sont les sourates de protection par excellence,
                      récitées trois fois chacune.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
                    alt="Intérieur de mosquée avec arches et lumière symbolisant la sérénité et la guérison spirituelle en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Adab de la visite */}
              {/* ============================================ */}
              <section id="adab-visite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Adab (bienséances) de la visite du malade
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam ne se contente pas d&apos;encourager la visite
                  du malade : il en définit les bienséances (adab) avec
                  précision. Ces règles visent à garantir que la visite soit
                  bénéfique pour le malade, qu&apos;elle le réconforte sans
                  le fatiguer, et qu&apos;elle soit l&apos;occasion
                  d&apos;invocations et de rappels spirituels constructifs.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Choisir le bon moment et demander la permission
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il convient de s&apos;informer sur l&apos;état du
                        malade avant de venir et de choisir un moment qui ne
                        le dérangera pas. Le visiteur doit demander la
                        permission d&apos;entrer et ne pas imposer sa
                        présence si le malade a besoin de repos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas prolonger la visite
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les savants recommandent de garder la visite courte
                        pour ne pas fatiguer le malade. Sauf si le malade
                        souhaite la compagnie de son visiteur, une visite
                        brève mais chaleureuse est préférable à une longue
                        présence épuisante.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Invoquer Allah pour le malade
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le visiteur doit impérativement invoquer Allah pour
                        la guérison du malade en utilisant les douas
                        prophétiques mentionnées dans cet article. Poser la
                        main sur le front ou la partie douloureuse du malade
                        est une sunna lors de l&apos;invocation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Remonter le moral du malade
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le visiteur doit réconforter le malade en lui
                        rappelant les mérites de la patience face à la
                        maladie, la purification des péchés qu&apos;elle
                        entraîne et l&apos;espoir en la guérison d&apos;Allah.
                        Il est interdit de dire des paroles décourageantes ou
                        de montrer un visage triste devant le malade.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Demander au malade de faire doua
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il est recommandé de demander au malade de faire
                        doua pour vous, car l&apos;invocation du malade est
                        exaucée. Le malade est dans un état de faiblesse et
                        de soumission devant Allah qui rend sa doua
                        particulièrement puissante. Pour{" "}
                        <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">apprendre l&apos;arabe</Link>{" "}
                        et comprendre ces invocations, explorez nos
                        ressources dédiées.
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="إذا حضرتم المريض فقولوا خيرا فإن الملائكة يؤمنون على ما تقولون"
                  text="Lorsque vous êtes en présence du malade, dites du bien, car les anges disent 'Amin' à ce que vous dites."
                  source="Rapporté par Muslim (919)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Doua du malade pour lui-même */}
              {/* ============================================ */}
              <section id="doua-malade-lui-meme" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua du malade pour lui-même
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le malade n&apos;est pas seulement passif dans le processus
                  de guérison : il est fortement encouragé à invoquer Allah
                  pour lui-même. Sa situation de faiblesse et de vulnérabilité
                  le rapproche d&apos;Allah, et son invocation est considérée
                  comme particulièrement exaucée. Le Prophète (paix et salut
                  sur lui) lui-même invoquait pour sa propre guérison
                  lorsqu&apos;il était malade.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua d&apos;Ayyub face à l&apos;épreuve de la maladie
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le prophète Ayyub (Job, paix sur lui) est le modèle par
                  excellence de la patience face à la maladie. Atteint d&apos;une
                  maladie grave pendant de longues années, il ne cessa jamais
                  d&apos;invoquer Allah avec humilité et soumission. Sa doua
                  rapportée dans le Coran est un refuge pour tout malade.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Anni massaniya ad-durru wa Anta arhamur-rahimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Le mal m&apos;a touché et Tu es le plus Miséricordieux des miséricordieux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Anbiya (21:83)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La réponse d&apos;Allah à la doua d&apos;Ayyub fut complète
                  et magnifique : &laquo;&nbsp;Nous l&apos;exauçâmes, lui
                  enlevâmes le mal qu&apos;il avait et lui rendîmes sa
                  famille, et autant qu&apos;eux avec eux, par miséricorde
                  de Notre part et comme rappel pour les adorateurs&nbsp;&raquo;
                  (Coran, 21:84). Cette histoire enseigne au malade que la
                  patience et l&apos;invocation constante finissent toujours
                  par porter leurs fruits.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua générale du malade
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le malade peut également réciter cette doua enseignée par
                  le Prophète (paix et salut sur lui) en plaçant sa main
                  sur la partie douloureuse de son corps :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ ثَلَاثًا وَقُلْ سَبْعَ مَرَّاتٍ أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah (trois fois), a&apos;udhu billahi wa qudratihi min sharri ma ajidu wa uhadhir (sept fois)
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah (trois fois). Je cherche refuge auprès d&apos;Allah et de Sa puissance contre le mal de ce que je ressens et que je crains (sept fois)&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2202)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces invocations rappellent au malade que la guérison vient
                  d&apos;Allah seul, et que la recherche des causes matérielles
                  (traitement médical) doit toujours s&apos;accompagner de la
                  dimension spirituelle. Le musulman malade combine la
                  consultation médicale, la prise de médicaments prescrits
                  et l&apos;invocation constante d&apos;Allah. Cette approche
                  globale reflète la sagesse de l&apos;islam qui ne sépare
                  jamais le corps de l&apos;âme. Pour approfondir les{" "}
                  <Link href="/doua-guerison-malade-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas pour la guérison</Link>,
                  consultez notre article complet.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Espoir et patience */}
              {/* ============================================ */}
              <section id="espoir-patience" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Espoir et patience face à la maladie en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam enseigne au malade une attitude équilibrée entre
                  l&apos;espoir en la miséricorde d&apos;Allah (raja&apos;) et
                  la patience face à l&apos;épreuve (sabr). La maladie
                  n&apos;est pas un châtiment mais une purification, une
                  élévation du rang et une occasion de se rapprocher
                  d&apos;Allah. Le croyant doit traverser cette épreuve avec
                  confiance et sérénité, sachant qu&apos;Allah ne charge
                  aucune âme au-delà de sa capacité.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La maladie efface les péchés
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Aucune fatigue, maladie, souci, tristesse,
                      gêne ou chagrin n&apos;atteint le musulman, même une
                      épine qui le pique, sans qu&apos;Allah ne lui efface
                      par cela une partie de ses péchés&nbsp;&raquo;
                      (al-Bukhari et Muslim). Chaque instant de souffrance
                      est une purification.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;élévation du rang
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La patience du malade ne se limite pas à l&apos;effacement
                      des péchés : elle élève son rang auprès d&apos;Allah.
                      Certains degrés du Paradis ne peuvent être atteints que
                      par l&apos;épreuve. La maladie peut ainsi être un moyen
                      d&apos;accéder à des niveaux de félicité que les oeuvres
                      seules ne permettraient pas d&apos;atteindre.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le bon soupçon envers Allah
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le malade doit garder un bon soupçon (husn adh-dhann)
                      envers Allah en toute circonstance. Allah dit dans un
                      hadith qudsi : &laquo;&nbsp;Je suis auprès du
                      soupçon que Mon serviteur a de Moi&nbsp;&raquo;
                      (al-Bukhari et Muslim). Penser qu&apos;Allah guérira,
                      qu&apos;Il allègera l&apos;épreuve et qu&apos;Il
                      récompensera la patience est un acte d&apos;adoration
                      en soi.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Se soigner est une obligation
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;espoir en Allah ne signifie pas abandonner les
                      causes matérielles. Le Prophète (paix et salut sur lui)
                      a ordonné de se soigner : &laquo;&nbsp;Soignez-vous,
                      car Allah n&apos;a pas créé de maladie sans lui créer
                      un remède&nbsp;&raquo; (Abu Dawud). Le tawakkul
                      véritable consiste à prendre les moyens tout en plaçant
                      sa confiance en Allah. Découvrez les{" "}
                      <Link href="/remede-arabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">remèdes de la tradition prophétique</Link>{" "}
                      pour compléter votre approche.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, le musulman face à la maladie combine quatre
                  piliers : la patience intérieure (sabr), l&apos;invocation
                  constante (doua), la recherche active du traitement médical
                  et le bon soupçon envers Allah. Cette approche équilibrée
                  reflète la sagesse de l&apos;enseignement islamique qui
                  considère la maladie non comme une punition, mais comme
                  une épreuve porteuse de bienfaits immenses pour celui qui
                  la traverse avec foi.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne jamais désespérer de la miséricorde d&apos;Allah :</strong>{" "}
                      le Coran interdit le désespoir et rappelle que
                      &laquo;&nbsp;seuls les mécréants désespèrent de la
                      miséricorde d&apos;Allah&nbsp;&raquo; (Coran, 12:87).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Multiplier le dhikr et l&apos;istighfar :</strong>{" "}
                      le rappel d&apos;Allah et la demande de pardon sont
                      des sources de sérénité et de guérison pour le coeur
                      et le corps.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>S&apos;entourer de personnes pieuses :</strong>{" "}
                      la compagnie de croyants sincères réconforte le malade,
                      lui rappelle Allah et multiplie les invocations en sa
                      faveur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Lire le Coran régulièrement :</strong> la
                      récitation du Coran est une guérison pour les coeurs
                      et les corps, et elle apporte une sérénité profonde
                      au malade. Pour mieux comprendre les textes sacrés,{" "}
                      <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">apprendre l&apos;arabe</Link>{" "}
                      est un investissement précieux.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour la guérison du malade en islam"
                  description="Découvrez toutes les invocations authentiques pour la guérison : douas prophétiques, versets coraniques et conseils pratiques."
                  href="/doua-guerison-malade-islam"
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
                    href="/doua-guerison-malade-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour la guérison
                  </Link>
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes de la médecine prophétique
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