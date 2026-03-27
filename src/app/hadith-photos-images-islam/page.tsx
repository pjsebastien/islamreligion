import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";
import ArticleCTA from "@/components/ArticleCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Hadiths sur les photos, images et dessins en islam : ce que dit la Sunna",
  description:
    "Que disent les hadiths authentiques sur les photos, les images et les dessins en islam ? Texte arabe, traduction, grade et avis des savants sur la question des representations.",
  openGraph: {
    title:
      "Hadiths sur les photos, images et dessins en islam : ce que dit la Sunna",
    description:
      "Les hadiths authentiques sur l&apos;interdiction des images, les exceptions reconnues, la photographie et les avis des savants contemporains.",
    url: "https://www.islamreligion.fr/hadith-photos-images-islam",
    images: [
      {
        url: "/images/motif-arabesque-islamique-geometrie-dore.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-photos-images-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "interdiction-images", label: "Les hadiths sur l\u2019interdiction des images" },
  { id: "exceptions", label: "Les exceptions reconnues" },
  { id: "photographie", label: "La photographie : avis contemporains" },
  { id: "anges-images", label: "Les anges et les images" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Lecons pratiques" },
  { id: "faq", label: "Questions frequentes" },
];

const faqItems = [
  {
    question:
      "Les photos sont-elles interdites en islam ?",
    answer:
      "La question de la photographie divise les savants. Une partie des oulemas contemporains, comme le sheikh Ibn Baz, considerent que la photographie entre dans l\u2019interdiction generale des images (taswir). D\u2019autres, comme le sheikh Al-Qaradawi et de nombreux savants d\u2019Al-Azhar, distinguent la photographie (capture mecanique de la lumiere) du dessin manuel (taswir) vise par les hadiths. La majorite des savants contemporains autorisent la photographie en cas de necessite (pieces d\u2019identite, enseignement, medecine) et certains la permettent de maniere plus large.",
  },
  {
    question:
      "Quels hadiths parlent de l\u2019interdiction des images ?",
    answer:
      "Les hadiths les plus cites sont celui de Ibn Abbas ou le Prophete maudit les fabricants d\u2019images (Bukhari 5954), celui de Aisha sur les anges qui n\u2019entrent pas dans une maison ou se trouvent des images (Bukhari 3224), et celui de Ibn Mas\u2019ud sur les gens les plus durement chaties au Jour du Jugement etant les fabricants d\u2019images (Bukhari 5950). Ces hadiths visent principalement les representations faites dans un contexte d\u2019idolatrie ou de rivalite avec la creation divine.",
  },
  {
    question:
      "Peut-on dessiner des etres vivants en islam ?",
    answer:
      "La majorite des savants interdisent le dessin d\u2019etres dotes d\u2019une ame (humains, animaux) avec des traits complets, surtout en trois dimensions. Cependant, les dessins sans visage, les representations de paysages, de plantes et de geometrie sont autorises a l\u2019unanimite. Les jouets d\u2019enfants representant des etres vivants sont une exception reconnue, fondee sur le hadith de Aisha jouant avec ses poupees (Bukhari 6130).",
  },
  {
    question:
      "Pourquoi les anges n\u2019entrent-ils pas dans une maison ou il y a des images ?",
    answer:
      "Plusieurs hadiths authentiques rapportent que les anges de la misericorde ne penetrent pas dans les maisons contenant des images (tamathil ou suwar). Les savants expliquent que cela est lie au fait que les images etaient associees a l\u2019idolatrie dans le contexte pre-islamique. L\u2019islam a voulu couper toute voie menant au shirk (associationnisme). Les savants precisent que ce sont les anges de la misericorde qui sont concernes, pas les anges gardiens (hafaza) qui accompagnent chaque etre humain.",
  },
  {
    question:
      "Quelle est la difference entre taswir et photographie en islam ?",
    answer:
      "Le taswir designe dans les hadiths l\u2019acte de creer une image, de fabriquer une representation. Les savants debattent sur le fait de savoir si la photographie entre dans cette definition. Ceux qui l\u2019interdisent estiment que le resultat (une image) est identique. Ceux qui l\u2019autorisent argumentent que la photographie est une capture de la realite par un procede mecanique, et non une creation ex nihilo comme le dessin. Cette distinction est au coeur du debat contemporain.",
  },
  {
    question:
      "Les selfies et photos sur les reseaux sociaux sont-ils permis ?",
    answer:
      "Les savants qui autorisent la photographie en general ne l\u2019interdisent pas sur les reseaux sociaux en soi, mais rappellent les regles de pudeur (hijab, awra), de modestie et d\u2019intention. Les savants qui interdisent la photographie en general interdisent egalement les selfies et les photos sur les reseaux sociaux, sauf en cas de necessite. Dans tous les cas, l\u2019ostentation (riya) et la vanite sont blamees en islam, independamment du support.",
  },
];

export default function HadithPhotosImagesIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-photos-images-islam/#article",
        headline:
          "Hadiths sur les photos, images et dessins en islam : ce que dit la Sunna",
        description:
          "Que disent les hadiths authentiques sur les photos, les images et les dessins en islam ? Avis des savants, exceptions et regles pratiques.",
        image: "/images/motif-arabesque-islamique-geometrie-dore.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-photos-images-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-photos-images-islam/#breadcrumb",
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
            name: "Hadith du jour",
            item: "https://www.islamreligion.fr/hadith-du-jour",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Photos et images en islam",
            item: "https://www.islamreligion.fr/hadith-photos-images-islam",
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
          title="Hadiths sur les photos, images et dessins en islam"
          subtitle="Ce que disent les hadiths authentiques sur les representations visuelles, la photographie et le dessin : texte arabe, traduction, grade et avis des savants classiques et contemporains."
          imageSrc="/images/motif-arabesque-islamique-geometrie-dore.jpg"
          imageAlt="Hadiths sur les photos, images et dessins en islam"
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
                <Link href="/hadith-du-jour" className="hover:text-primary">
                  Hadith du jour
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">
                  Photos et images en islam
                </span>
              </nav>

              {/* A retenir */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  A retenir
                </p>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les hadiths interdisent clairement la fabrication d&apos;images dans un contexte d&apos;idolatrie ou de rivalite avec la creation divine.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Des exceptions sont reconnues par les savants : la necessite, les jouets d&apos;enfants et les images sans visage.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La photographie fait l&apos;objet d&apos;un debat entre les savants contemporains, avec des avis autorisant et d&apos;autres interdisant.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les anges de la misericorde n&apos;entrent pas dans une maison ou se trouvent des images (statues ou representations), selon plusieurs hadiths authentiques.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique sur les images et les representations
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;examiner les hadiths sur les photos et les images, il est essentiel de comprendre le cadre coranique. Le Coran ne contient pas d&apos;interdiction explicite de la representation figurative en tant que telle. Cependant, il condamne fermement l&apos;idolatrie et la fabrication d&apos;idoles, qui constituent le contexte historique dans lequel les hadiths sur le <em>taswir</em> (fabrication d&apos;images) ont ete prononces. Le Coran presente Allah comme le seul Createur (<em>Al-Musawwir</em>), Celui qui donne forme a toute chose.
                </p>

                <HadithCard
                  arabic="هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ"
                  text="C&apos;est Lui Allah, le Createur, Celui qui donne un commencement a toute chose, le Formateur. A Lui les plus beaux noms."
                  source="Coran, sourate Al-Hashr (59:24)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le nom divin <em>Al-Musawwir</em> (le Formateur, Celui qui donne forme) est central dans la comprehension de l&apos;interdiction des images. Les savants expliquent que les hadiths interdisant le <em>taswir</em> visent celui qui cherche a rivaliser avec cette prerogative divine. C&apos;est pourquoi, dans les hadiths, il est dit au fabricant d&apos;images : &laquo;&nbsp;Insuffle-leur une ame&nbsp;&raquo;, pour souligner l&apos;impossibilite de creer veritablement.
                </p>

                <HadithCard
                  arabic="أَتَعْبُدُونَ مَا تَنْحِتُونَ وَاللَّهُ خَلَقَكُمْ وَمَا تَعْمَلُونَ"
                  text="Adorez-vous ce que vous sculptez, alors que c&apos;est Allah qui vous a crees, vous et ce que vous fabriquez ?"
                  source="Coran, sourate As-Saffat (37:95-96)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset, prononce par le prophete Ibrahim (Abraham) contre son peuple idolatre, illustre le lien direct entre la fabrication d&apos;images sculptees et l&apos;idolatrie. C&apos;est dans ce contexte de lutte contre le <em>shirk</em> (associationnisme) que s&apos;inscrivent les hadiths prophetiques sur les images. Les savants soulignent que la <em>&apos;illa</em> (cause juridique) de l&apos;interdiction est la prevention de l&apos;idolatrie et la rivalite avec la creation divine, ce qui a des implications directes sur le debat contemporain autour de la photographie.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Interdiction des images      */}
              {/* ====================================== */}
              <section id="interdiction-images" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les hadiths sur l&apos;interdiction des images
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Plusieurs hadiths authentiques etablissent une interdiction claire de la fabrication d&apos;images representant des etres dotes d&apos;une ame. Ces hadiths utilisent le terme arabe <em>taswir</em>, qui englobe la sculpture, le dessin et toute forme de representation figurative. La severite du ton prophetique s&apos;explique par le contexte de l&apos;Arabie pre-islamique, ou les statues et les images etaient etroitement liees au culte des idoles.
                </p>

                <HadithBlock
                  number={1}
                  title="La malediction sur les fabricants d&apos;images"
                  narrator="Ibn &apos;Abbas"
                  arabic="كُلُّ مُصَوِّرٍ فِي النَّارِ، يُجْعَلُ لَهُ بِكُلِّ صُورَةٍ صَوَّرَهَا نَفْسٌ فَيُعَذِّبُهُ فِي جَهَنَّمَ"
                  translation="Tout fabricant d&apos;images sera dans le Feu. Pour chaque image qu&apos;il aura fabriquee, il lui sera donne une ame et il sera chatie en Enfer."
                  source="Sahih Al-Bukhari, n°2225 — Sahih Muslim, n°2110"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus severes sur la question des images. Ibn &apos;Abbas le rapporte du Prophete ﷺ pour mettre en garde contre la fabrication de representations d&apos;etres vivants. Les savants expliquent que la severite vise celui qui fabrique des images dans un esprit de rivalite avec Allah, le Createur. L&apos;expression &laquo;&nbsp;il lui sera donne une ame&nbsp;&raquo; est une forme de defi : le fabricant d&apos;images sera somme de donner vie a ses creations, ce qu&apos;il sera incapable de faire."
                />

                <HadithBlock
                  number={2}
                  title="Les gens les plus durement chaties au Jour du Jugement"
                  narrator="Ibn Mas&apos;ud"
                  arabic="إِنَّ أَشَدَّ النَّاسِ عَذَابًا عِنْدَ اللَّهِ يَوْمَ الْقِيَامَةِ الْمُصَوِّرُونَ"
                  translation="Les gens les plus durement chaties aupres d&apos;Allah le Jour du Jugement seront les fabricants d&apos;images."
                  source="Sahih Al-Bukhari, n°5950 — Sahih Muslim, n°2109"
                  grade="sahih"
                  explanation="Ce hadith confirme la gravite de la fabrication d&apos;images dans la hierarchie des peches. L&apos;imam An-Nawawi precise que ce chatiment concerne celui qui fabrique des images dans le but d&apos;etre adore ou pour rivaliser avec la creation d&apos;Allah. Les savants hanafites et chafiites nuancent en distinguant les images en trois dimensions (statues), qui font l&apos;unanimite dans l&apos;interdiction, des images en deux dimensions (dessins), sur lesquelles il y a divergence."
                />

                <HadithBlock
                  number={3}
                  title="Insuffle-leur une ame, si tu en es capable"
                  narrator="Ibn &apos;Abbas"
                  arabic="مَنْ صَوَّرَ صُورَةً فِي الدُّنْيَا كُلِّفَ أَنْ يَنْفُخَ فِيهَا الرُّوحَ يَوْمَ الْقِيَامَةِ، وَلَيْسَ بِنَافِخٍ"
                  translation="Celui qui fabrique une image dans ce bas monde sera charge d&apos;y insuffler une ame le Jour du Jugement, et il ne pourra pas le faire."
                  source="Sahih Al-Bukhari, n°5963 — Sahih Muslim, n°2110"
                  grade="sahih"
                  explanation="Ce hadith illustre le fondement theologique de l&apos;interdiction : la creation de la vie est une prerogative exclusivement divine. Le fabricant d&apos;images sera confronte a son impuissance totale face a la creation veritable. Ce hadith est utilise par les savants pour definir la &apos;illa (cause juridique) de l&apos;interdiction : il ne s&apos;agit pas de l&apos;image en soi, mais de l&apos;acte de pretendre creer a la maniere d&apos;Allah. Cette distinction est fondamentale dans le debat sur la photographie."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths etablissent la base de l&apos;interdiction du <em>taswir</em> en islam. Ils sont unanimement reconnus comme authentiques et figurent dans les deux recueils les plus fiables (Bukhari et Muslim). Toutefois, comme nous le verrons, les savants ont identifie des exceptions et des nuances importantes, en particulier sur la question de la photographie. Pour approfondir les enseignements prophetiques sur d&apos;autres sujets lies a l&apos;apparence, consultez notre article sur les{" "}
                  <Link href="/hadith-tattoo-apparence-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le tatouage et l&apos;apparence en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Les exceptions       */}
              {/* ============================== */}
              <section id="exceptions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les exceptions reconnues par les savants
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Malgre la severite des hadiths precedents, la Sunna elle-meme etablit des exceptions importantes. Ces exceptions montrent que l&apos;interdiction n&apos;est pas absolue et que le contexte, l&apos;intention et la forme de l&apos;image jouent un role determinant dans le jugement juridique. Les savants des quatre ecoles ont identifie ces exceptions a partir des hadiths suivants.
                </p>

                <HadithBlock
                  number={4}
                  title="Les poupees de Aisha"
                  narrator="Aisha"
                  arabic="كُنْتُ أَلْعَبُ بِالْبَنَاتِ عِنْدَ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَكَانَ لِي صَوَاحِبُ يَلْعَبْنَ مَعِي، فَكَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا دَخَلَ يَتَقَمَّعْنَ مِنْهُ فَيُسَرِّبُهُنَّ إِلَيَّ فَيَلْعَبْنَ مَعِي"
                  translation="Je jouais avec des poupees chez le Prophete ﷺ et j&apos;avais des amies qui jouaient avec moi. Lorsque le Messager d&apos;Allah ﷺ entrait, elles se cachaient de lui, alors il les faisait venir vers moi pour qu&apos;elles jouent avec moi."
                  source="Sahih Al-Bukhari, n°6130 — Sahih Muslim, n°2440"
                  grade="sahih"
                  explanation="Ce hadith est la preuve principale de l&apos;exception des jouets d&apos;enfants. Le Prophete ﷺ n&apos;a pas interdit a Aisha de jouer avec des poupees representant des formes humaines. Les savants en deduisent que les jouets destines aux enfants sont exemptes de l&apos;interdiction generale, car ils remplissent une fonction educative et ludique, et ne presentent aucun risque d&apos;idolatrie. Le qadi &apos;Iyad et l&apos;imam An-Nawawi ont confirme cette exception."
                />

                <HadithBlock
                  number={5}
                  title="Le rideau de Aisha et les images ecrasees"
                  narrator="Aisha"
                  arabic="دَخَلَ عَلَيَّ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَأَنَا مُتَسَتِّرَةٌ بِقِرَامٍ فِيهِ صُورَةٌ فَنَزَعَهُ ثُمَّ قَالَ إِنَّ مِنْ أَشَدِّ النَّاسِ عَذَابًا يَوْمَ الْقِيَامَةِ الَّذِينَ يُشَبِّهُونَ بِخَلْقِ اللَّهِ"
                  translation="Le Messager d&apos;Allah ﷺ entra chez moi alors que j&apos;avais un rideau orne d&apos;images. Il l&apos;arracha puis dit : &laquo;&nbsp;Parmi les gens les plus durement chaties le Jour du Jugement, il y a ceux qui imitent la creation d&apos;Allah.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°5954 — Sahih Muslim, n°2107"
                  grade="sahih"
                  explanation="Ce hadith montre que le Prophete ﷺ a retire le rideau contenant des images. Toutefois, dans une autre version rapportee par Muslim, Aisha a transforme ce tissu en coussins sur lesquels on s&apos;asseyait, et le Prophete ﷺ ne l&apos;a pas interdit. Les savants en deduisent que les images qui sont foulees, ecrasees ou degradees (sur des tapis, des coussins) sont tolerees, car elles ne sont plus dans une position d&apos;honneur ou de veneration. Cette nuance est importante dans le fiqh du taswir."
                />

                <HadithBlock
                  number={6}
                  title="L&apos;exception des images sans ame"
                  narrator="Ibn &apos;Abbas"
                  arabic="إِنْ كُنْتَ لَا بُدَّ فَاعِلًا فَاصْنَعِ الشَّجَرَ وَمَا لَا نَفْسَ لَهُ"
                  translation="Si tu dois absolument le faire, alors represente des arbres et ce qui n&apos;a pas d&apos;ame."
                  source="Sahih Muslim, n°2110"
                  grade="sahih"
                  explanation="Ce hadith est capital car il delimite clairement le champ de l&apos;interdiction. Le Prophete ﷺ a autorise explicitement la representation des vegetaux, des paysages et de tout ce qui n&apos;est pas dote d&apos;une ame (ruh). Cela explique pourquoi l&apos;art islamique s&apos;est developpe dans la calligraphie, les motifs geometriques et les arabesques florales. L&apos;interdiction ne porte donc pas sur l&apos;art en general, mais specifiquement sur la representation d&apos;etres vivants dotes d&apos;une ame."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces exceptions montrent que la position islamique sur les images est plus nuancee qu&apos;elle ne parait a premiere vue. Les savants distinguent selon la forme (2D ou 3D), la position (honoree ou degradee), le sujet (etre dote d&apos;une ame ou non) et la destination (jeu d&apos;enfant, necessite ou decoration). Pour decouvrir d&apos;autres enseignements prophetiques sur le bon comportement, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Etudiez le fiqh des representations, la jurisprudence islamique et les fondements de la croyance avec des professeurs qualifies."
                href="/apprendre-science-religieuse-islam"
                linkText="Decouvrir la formation"
              />

              {/* ====================================== */}
              {/* SECTION : Photographie                 */}
              {/* ====================================== */}
              <section id="photographie" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La photographie : avis contemporains
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La photographie est la question la plus debattue dans le fiqh contemporain du <em>taswir</em>. Elle n&apos;existait pas a l&apos;epoque du Prophete ﷺ, et les savants doivent donc appliquer les principes des hadiths a cette realite nouvelle. Deux grandes positions se degagent, chacune s&apos;appuyant sur des arguments solides.
                </p>

                <HadithBlock
                  number={7}
                  title="Le hadith sur l&apos;ombre et la forme"
                  narrator="Abu Hurayra"
                  arabic="قَالَ اللَّهُ عَزَّ وَجَلَّ وَمَنْ أَظْلَمُ مِمَّنْ ذَهَبَ يَخْلُقُ كَخَلْقِي فَلْيَخْلُقُوا ذَرَّةً أَوْ لِيَخْلُقُوا حَبَّةً أَوْ لِيَخْلُقُوا شَعِيرَةً"
                  translation="Allah Tout-Puissant a dit : &laquo;&nbsp;Qui est plus injuste que celui qui entreprend de creer comme Ma creation ? Qu&apos;ils creent donc un atome, ou qu&apos;ils creent un grain, ou qu&apos;ils creent un grain d&apos;orge.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°5953 — Sahih Muslim, n°2111"
                  grade="sahih"
                  explanation="Ce hadith qudsi (parole divine rapportee par le Prophete ﷺ) eclaire la &apos;illa de l&apos;interdiction : la rivalite avec la creation divine. Les savants qui autorisent la photographie s&apos;appuient sur ce hadith pour argumenter que le photographe ne &laquo;&nbsp;cree&nbsp;&raquo; rien : il capture une image existante par un procede mecanique. Les savants qui l&apos;interdisent repondent que le resultat final est bien une image (sura), quel que soit le procede utilise."
                />

                <HadithBlock
                  number={8}
                  title="Le hadith de Jibril et le rideau"
                  narrator="Abu Hurayra"
                  arabic="أَتَانِي جِبْرِيلُ فَقَالَ أَتَيْتُكَ الْبَارِحَةَ فَلَمْ يَمْنَعْنِي أَنْ أَكُونَ دَخَلْتُ إِلَّا أَنَّهُ كَانَ عَلَى الْبَابِ تَمَاثِيلُ وَكَانَ فِي الْبَيْتِ قِرَامُ سِتْرٍ فِيهِ تَمَاثِيلُ فَمُرْ بِرَأْسِ التِّمْثَالِ الَّذِي فِي الْبَيْتِ يُقْطَعْ فَيَصِيرُ كَهَيْئَةِ الشَّجَرَةِ"
                  translation="Jibril vint a moi et dit : &laquo;&nbsp;Je suis venu a toi hier soir, mais rien ne m&apos;a empeche d&apos;entrer si ce n&apos;est qu&apos;il y avait des statues a la porte et un rideau orne de representations dans la maison. Ordonne que la tete de la statue soit coupee afin qu&apos;elle devienne comme un arbre.&nbsp;&raquo;"
                  source="Sunan Abu Dawud, n°4158 — Jami&apos; at-Tirmidhi, n°2806"
                  grade="hasan"
                  explanation="Ce hadith est tres important pour le debat contemporain. Jibril (l&apos;ange Gabriel) indique que couper la tete de la statue la rend acceptable, car elle perd sa ressemblance avec un etre vivant. Les savants en deduisent que c&apos;est la ressemblance complete avec un etre dote d&apos;ame qui est problematique. Les savants qui autorisent la photographie argumentent que ce hadith montre l&apos;importance du contexte et de la forme, et que la photographie — etant un reflet, pas une creation — ne releve pas de la meme categorie."
                />

                <HadithBlock
                  number={9}
                  title="Le Prophete ﷺ et l&apos;utilisation du tissu a images"
                  narrator="Aisha"
                  arabic="فَجَعَلْتُهُ وِسَادَتَيْنِ فَكَانَ يَرْتَفِقُ عَلَيْهِمَا فِي الْبَيْتِ"
                  translation="J&apos;en fis deux coussins et il (le Prophete ﷺ) s&apos;accoudait dessus dans la maison."
                  source="Sahih Muslim, n°2107"
                  grade="sahih"
                  explanation="Apres que le Prophete ﷺ eut retire le rideau orne d&apos;images, Aisha decoupa le tissu pour en faire des coussins. Le Prophete ﷺ les a utilises sans objection. Ce hadith est utilise par les savants pour etablir que les images qui ne sont pas dans une position d&apos;honneur ou de veneration — comme sur un coussin, un tapis ou un sol — sont tolerees. Certains savants contemporains etendent ce raisonnement aux images numeriques qui apparaissent sur des ecrans et ne sont pas exposees dans un but de veneration."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Anges et images      */}
              {/* ============================== */}
              <section id="anges-images" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les anges et les images
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des aspects les plus marquants du rapport de l&apos;islam aux images est la relation entre les anges de la misericorde et les representations figuratives. Plusieurs hadiths authentiques etablissent que la presence d&apos;images dans un lieu empeche les anges d&apos;y entrer, ce qui donne une dimension spirituelle a la question des representations.
                </p>

                <HadithBlock
                  number={10}
                  title="Les anges n&apos;entrent pas dans une maison ou il y a des images"
                  narrator="Aisha"
                  arabic="قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِنَّ الْمَلَائِكَةَ لَا تَدْخُلُ بَيْتًا فِيهِ صُورَةٌ"
                  translation="Le Messager d&apos;Allah ﷺ a dit : &laquo;&nbsp;Les anges n&apos;entrent pas dans une maison ou il y a des images.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°3224 — Sahih Muslim, n°2106"
                  grade="sahih"
                  explanation="Ce hadith est rapporte dans de nombreuses versions par plusieurs compagnons. Les savants precisent que les anges concernes sont les anges de la misericorde et de la benediction, non les anges gardiens (hafaza) qui accompagnent chaque etre humain en permanence. L&apos;imam An-Nawawi explique que cette interdiction concerne les images d&apos;etres dotes d&apos;une ame exposees de maniere visible, et non les images degradees, foulees ou cachees. Ce hadith motive la prudence de nombreux musulmans dans la decoration de leur foyer."
                />

                <HadithBlock
                  number={11}
                  title="Les anges, les chiens et les images"
                  narrator="Abu Talha"
                  arabic="لَا تَدْخُلُ الْمَلَائِكَةُ بَيْتًا فِيهِ كَلْبٌ وَلَا صُورَةٌ"
                  translation="Les anges n&apos;entrent pas dans une maison ou il y a un chien ou des images."
                  source="Sahih Al-Bukhari, n°3225 — Sahih Muslim, n°2106"
                  grade="sahih"
                  explanation="Ce hadith associe la presence de chiens et d&apos;images comme deux facteurs empechant l&apos;entree des anges. Les savants ont longuement commente ce rapprochement. Certains expliquent que les deux elements etaient lies a des pratiques pre-islamiques : les idoles etaient gardees par des chiens dans les temples. D&apos;autres y voient deux interdictions distinctes, chacune ayant sa propre sagesse. Dans les deux cas, l&apos;objectif est de preserver la purete spirituelle du foyer musulman et d&apos;attirer la benediction divine."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur les images et la photographie
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La question des images et de la photographie en islam fait l&apos;objet d&apos;un debat riche et nuance entre les savants. Il est important de presenter equitablement les differents avis, car chacun s&apos;appuie sur des preuves textuelles et des raisonnements juridiques solides.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La photographie entre dans le sens general du taswir (fabrication d&apos;images) interdit par les hadiths. Le resultat est une image, et c&apos;est le resultat qui compte, non le procede. Il faut donc eviter de photographier les etres dotes d&apos;une ame, sauf en cas de necessite absolue comme les pieces d&apos;identite.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Sheikh Ibn Baz, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La photographie n&apos;est pas du taswir au sens des hadiths. Le taswir est un acte de creation manuelle, ou l&apos;on donne forme a quelque chose a partir de rien. La photographie est une capture de la realite par la lumiere, comme le reflet dans un miroir ou dans l&apos;eau. Elle ne constitue donc pas une rivalite avec la creation divine.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Sheikh Yusuf al-Qaradawi, <em>Al-Halal wal-Haram fil-Islam</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Les hadiths sur l&apos;interdiction des images doivent etre compris dans leur contexte historique. L&apos;interdiction visait a eradiquer l&apos;idolatrie et a proteger le tawhid. Lorsque le risque d&apos;idolatrie est absent, l&apos;interdiction est levee. Les images et photographies utilisees pour l&apos;enseignement, la medecine, l&apos;identification et d&apos;autres besoins legitimes sont autorisees.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Dar al-Ifta al-Misriyya (comite de fatwa d&apos;Egypte)
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;interdiction absolue concerne les statues et sculptures en trois dimensions representant des etres vivants complets. Pour les images en deux dimensions, l&apos;interdiction est allegee si elles ne sont pas dans une position de veneration. La photographie est un cas nouveau (nawazil) qui necessite un ijtihad fonde sur la comprehension de la &apos;illa (cause juridique) des hadiths.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em> (position reprise par les savants contemporains)
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces differents avis montrent que la question des images en islam n&apos;est pas tranchee de maniere monolithique. Le musulman doit connaitre les arguments de chaque position et suivre l&apos;avis du savant en qui il a confiance, tout en respectant ceux qui suivent un avis different. L&apos;essentiel est de preserver l&apos;intention pure et d&apos;eviter tout ce qui mene a l&apos;idolatrie, a la vanite ou a la transgression des limites d&apos;Allah.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Lecons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths et des avis presentes dans cet article permet de degager des principes concrets pour le musulman d&apos;aujourd&apos;hui :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Eviter les statues et les sculptures d&apos;etres vivants
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;interdiction des representations en trois dimensions d&apos;etres dotes d&apos;une ame fait l&apos;unanimite parmi les savants. Il convient de ne pas exposer de statues dans son foyer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Privilegier l&apos;art islamique non figuratif
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La calligraphie arabe, les motifs geometriques et les arabesques florales sont des formes d&apos;art explicitement autorisees et celebrees dans la tradition islamique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Connaitre le debat sur la photographie
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le musulman doit savoir que la question de la photographie est debattue entre les savants. Suivre un avis fonde sur la science est plus meritoire que suivre ses desirs sans connaissance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Veiller a la purete spirituelle du foyer
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les hadiths sur les anges rappellent l&apos;importance de preserver son foyer comme un lieu de benediction. Eviter les representations dans les lieux de priere et les espaces sacres est un consensus.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Respecter la diversite des avis
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La divergence d&apos;opinions entre les savants sur la photographie est une <em>rahma</em> (misericorde). Chacun suit l&apos;avis de son savant de confiance sans blamer celui qui suit un autre avis fonde.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Purifier son intention en toute circonstance
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Que l&apos;on autorise ou interdise la photographie, l&apos;ostentation, la vanite et la recherche de la celebrite sont blamees en islam. L&apos;intention doit toujours etre pure et orientee vers la satisfaction d&apos;Allah.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <SocialBanner />

              <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur les images dans leur langue originale et approfondissez votre connaissance de la jurisprudence islamique."
                  preselect="arabe"
                />
              </div>

              {/* FAQ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>

              {/* Maillage interne */}
              <div className="mt-12 space-y-4">
                <ArticleCTA
                  variant="page-mere"
                  title="Retrouvez tous nos hadiths par theme"
                  href="/hadith-du-jour"
                  linkText="Hadith du jour : paroles authentiques"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths du Prophete Muhammad ﷺ : fondements et collections"
                  description="Decouvrez l&apos;histoire des grandes collections de hadiths et les criteres d&apos;authenticite."
                  href="/hadith-prophete-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le bon comportement en islam : hadiths et enseignements"
                  description="Les hadiths authentiques sur le caractere, la bienveillance et les relations avec autrui."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Tatouage et apparence en islam : ce que disent les hadiths"
                  description="Les enseignements prophetiques sur le tatouage, la modification du corps et l&apos;apparence physique."
                  href="/hadith-tattoo-apparence-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
