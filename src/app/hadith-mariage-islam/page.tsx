import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import ArticleCTA from "@/components/ArticleCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Hadiths sur le mariage en islam : guide complet des enseignements prophétiques",
  description:
    "Découvrez les hadiths authentiques sur le mariage en islam : choix du conjoint, droits des époux, bienveillance conjugale, walima. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur le mariage en islam : guide complet des enseignements prophétiques",
    description:
      "Les hadiths authentiques sur le mariage en islam : choix du conjoint, droits et devoirs des époux, bienveillance et célébration du mariage selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-mariage-islam",
    images: [
      {
        url: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-mariage-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique du mariage" },
  { id: "choisir-conjoint", label: "Choisir son conjoint" },
  { id: "droits-devoirs", label: "Droits et devoirs des époux" },
  { id: "bienveillance", label: "La bienveillance conjugale" },
  { id: "walima", label: "Le repas de noces (walima)" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur le mariage en islam ?",
    answer:
      "Les hadiths les plus importants sur le mariage incluent celui rapporté par Abu Hurayra sur les quatre critères du choix de l\u2019épouse (Bukhari 5090), celui d\u2019Aisha sur le meilleur des hommes étant celui qui traite le mieux sa famille (Tirmidhi 3895), et celui d\u2019Anas sur l\u2019obligation du repas de noces (Bukhari 5167). Ces hadiths couvrent les fondements du mariage : le choix du conjoint, les droits mutuels et la célébration.",
  },
  {
    question:
      "Que dit le Prophète Muhammad sur le choix du conjoint ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a enseigné que l\u2019on épouse une femme pour quatre raisons : sa richesse, sa lignée, sa beauté et sa religion, et qu\u2019il faut privilégier la religion (Bukhari 5090). Il a également dit que si un homme dont la religion et le caractère sont agréables demande en mariage, il faut accepter, sous peine de semer la corruption sur terre (Tirmidhi 1084).",
  },
  {
    question:
      "Quels sont les droits de la femme dans le mariage selon les hadiths ?",
    answer:
      "Les hadiths confèrent à la femme le droit à la nafaqa (entretien matériel), au bon traitement, au respect de sa dignité et à la consultation dans les affaires du foyer. Le Prophète a ordonné de traiter les femmes avec bonté (Bukhari 3331), a affirmé que le meilleur musulman est celui qui traite le mieux son épouse (Tirmidhi 3895), et a lui-même donné l\u2019exemple en aidant sa famille dans les tâches domestiques (Bukhari 6039).",
  },
  {
    question: "Le repas de noces (walima) est-il obligatoire en islam ?",
    answer:
      "La majorité des savants considèrent la walima comme une sunna fortement recommandée (sunna mu\u2019akkada), voire obligatoire selon certains juristes comme les zahirites. Le Prophète a dit à Abdurrahman ibn Awf : \u00ab Fais un repas de noces, ne serait-ce qu\u2019avec une brebis \u00bb (Bukhari 5167). La walima est un moyen d\u2019annoncer le mariage et de partager la joie avec la communauté.",
  },
  {
    question:
      "Comment le Prophète traitait-il ses épouses au quotidien ?",
    answer:
      "Le Prophète était l\u2019exemple même de la bienveillance conjugale. Aisha rapporte qu\u2019il aidait sa famille dans les tâches ménagères et qu\u2019il ne frappait jamais personne de sa main (Bukhari 6039). Il faisait preuve de douceur, de patience et d\u2019humour avec ses épouses. Il disait : \u00ab Le meilleur d\u2019entre vous est le meilleur envers sa famille, et je suis le meilleur d\u2019entre vous envers ma famille \u00bb (Tirmidhi 3895).",
  },
  {
    question:
      "Les hadiths sur le mariage s\u2019appliquent-ils aux musulmans d\u2019aujourd\u2019hui ?",
    answer:
      "Oui, les enseignements prophétiques sur le mariage sont intemporels. Les principes de choix du conjoint basé sur la piété, de bienveillance mutuelle, de respect des droits et de célébration du mariage restent parfaitement applicables. Les savants contemporains s\u2019appuient sur ces mêmes hadiths pour émettre leurs avis juridiques (fatawa) sur les questions conjugales modernes.",
  },
];

export default function HadithMariageIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-mariage-islam/#article",
        headline:
          "Hadiths sur le mariage en islam : guide complet des enseignements prophétiques",
        description:
          "Découvrez les hadiths authentiques sur le mariage en islam : choix du conjoint, droits des époux, bienveillance conjugale, walima.",
        image: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-mariage-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-mariage-islam/#breadcrumb",
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
            name: "Hadiths sur le mariage",
            item: "https://www.islamreligion.fr/hadith-mariage-islam",
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
          title="Hadiths sur le mariage en islam"
          subtitle="Les enseignements prophétiques sur le choix du conjoint, les droits des époux, la bienveillance conjugale et la célébration du mariage selon la Sunna authentique."
          imageSrc="/images/croissant-lune-dore-lanternes-islam-ramadan.jpg"
          imageAlt="Hadiths sur le mariage en islam, enseignements prophétiques"
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
                  Hadiths sur le mariage
                </span>
              </nav>

              {/* A retenir */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  À retenir
                </p>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ a placé la piété comme premier critère dans le choix du conjoint, avant la beauté, la richesse ou la lignée.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les hadiths établissent des droits et devoirs réciproques entre époux, fondés sur la bienveillance, la consultation et le respect mutuel.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ était lui-même un modèle de douceur et d&apos;aide au sein de son foyer, participant aux tâches domestiques.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La walima (repas de noces) et l&apos;annonce publique du mariage sont des sunnas fortement recommandées.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique du mariage en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il convient de rappeler que le mariage est d&apos;abord une institution coranique. Allah a fait du lien conjugal un signe parmi Ses signes, un lieu de sérénité (<em>sakina</em>), d&apos;amour (<em>mawadda</em>) et de miséricorde (<em>rahma</em>). Plusieurs versets posent les fondements sur lesquels s&apos;appuient ensuite les hadiths du Prophète ﷺ.
                </p>

                <HadithCard
                  arabic="وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
                  text="Et parmi Ses signes, Il a créé de vous, pour vous, des épouses pour que vous viviez en tranquillité avec elles et Il a mis entre vous de l&apos;affection et de la bonté. Il y a en cela des preuves pour des gens qui réfléchissent."
                  source="Coran, sourate Ar-Rum (30:21)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondateur présente le mariage comme un acte d&apos;adoration en soi. La <em>sakina</em> désigne cette paix intérieure que chaque conjoint trouve auprès de l&apos;autre, tandis que la <em>mawadda</em> et la <em>rahma</em> représentent les deux piliers émotionnels du couple. Les savants soulignent qu&apos;Allah a attribué ces sentiments au couple comme un don, et non comme un acquis garanti : il revient aux époux de les cultiver.
                </p>

                <HadithCard
                  arabic="وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ فَإِن كَرِهْتُمُوهُنَّ فَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَيَجْعَلَ اللَّهُ فِيهِ خَيْرًا كَثِيرًا"
                  text="Et comportez-vous convenablement envers elles. Si vous avez de l&apos;aversion envers elles, il se peut que vous ayez de l&apos;aversion pour une chose où Allah a mis un grand bien."
                  source="Coran, sourate An-Nisa (4:19)"
                />

                <HadithCard
                  arabic="هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ"
                  text="Elles sont un vêtement pour vous et vous êtes un vêtement pour elles."
                  source="Coran, sourate Al-Baqara (2:187)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La métaphore du vêtement (<em>libas</em>) est parmi les plus expressives du Coran au sujet du couple. Le vêtement couvre, protège, embellit et se trouve au plus près du corps. Chaque époux remplit ces fonctions pour l&apos;autre : protection de l&apos;honneur, couverture des défauts, proximité et intimité. C&apos;est sur cette base coranique que le Prophète ﷺ a construit ses enseignements pratiques sur la vie conjugale.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Choisir son conjoint */}
              {/* ============================== */}
              <section id="choisir-conjoint" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Choisir son conjoint selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le choix du conjoint est la première étape du mariage, et le Prophète ﷺ y a accordé une attention particulière. Les hadiths suivants établissent des critères clairs qui orientent le musulman dans cette décision majeure. Le dénominateur commun de ces enseignements est la primauté de la piété et du bon caractère sur les considérations matérielles.
                </p>

                <HadithBlock
                  number={1}
                  title="On épouse une femme pour quatre raisons"
                  narrator="Abu Hurayra"
                  arabic="تُنْكَحُ الْمَرْأَةُ لِأَرْبَعٍ: لِمَالِهَا وَلِحَسَبِهَا وَجَمَالِهَا وَلِدِينِهَا، فَاظْفَرْ بِذَاتِ الدِّينِ تَرِبَتْ يَدَاكَ"
                  translation="On épouse une femme pour quatre raisons : pour sa richesse, pour sa lignée, pour sa beauté et pour sa religion. Choisis celle qui a la religion, puissent tes mains se couvrir de poussière (si tu ne le fais pas)."
                  source="Sahih Al-Bukhari, n°5090 — Sahih Muslim, n°1466"
                  grade="sahih"
                  explanation="Ce hadith ne condamne pas le fait de prendre en compte la beauté, la richesse ou la lignée : il constate une réalité humaine. Toutefois, le Prophète ﷺ oriente fermement vers la piété comme critère décisif. L&apos;expression &laquo; puissent tes mains se couvrir de poussière &raquo; est une formule arabe d&apos;exhortation forte, signifiant : ne te prive pas de ce choix. Les savants expliquent que la religion garantit la stabilité du foyer, car une personne pieuse respectera les droits de son conjoint même dans les moments difficiles."
                />

                <HadithBlock
                  number={2}
                  title="Si vient à vous celui dont la religion et le caractère vous agréent"
                  narrator="Abu Hurayra"
                  arabic="إِذَا خَطَبَ إِلَيْكُمْ مَنْ تَرْضَوْنَ دِينَهُ وَخُلُقَهُ فَزَوِّجُوهُ، إِلَّا تَفْعَلُوا تَكُنْ فِتْنَةٌ فِي الْأَرْضِ وَفَسَادٌ عَرِيضٌ"
                  translation="Si vient à vous (demander en mariage) celui dont la religion et le caractère vous agréent, alors mariez-le. Si vous ne le faites pas, il y aura une fitna (épreuve) sur terre et une corruption répandue."
                  source="Jami&apos; at-Tirmidhi, n°1084"
                  grade="hasan"
                  explanation="Ce hadith s&apos;adresse aux tuteurs (wali) et aux familles. Il met en garde contre le refus de prétendants pieux pour des raisons matérielles ou sociales. Le Prophète ﷺ avertit que bloquer les mariages pour des motifs superficiels conduit à la fitna : prolifération des relations hors mariage, frustration et désordre social. Les deux critères mentionnés — la religion et le caractère — sont complémentaires : la religion sans bon caractère engendre la dureté, et le bon caractère sans religion manque de fondement."
                />

                <HadithBlock
                  number={3}
                  title="Le croyant ne doit pas détester la croyante"
                  narrator="Abu Hurayra"
                  arabic="لَا يَفْرَكْ مُؤْمِنٌ مُؤْمِنَةً، إِنْ كَرِهَ مِنْهَا خُلُقًا رَضِيَ مِنْهَا آخَرَ"
                  translation="Qu&apos;un croyant ne déteste pas une croyante. S&apos;il déteste en elle un trait de caractère, il en agréera un autre."
                  source="Sahih Muslim, n°1469"
                  grade="sahih"
                  explanation="Ce hadith enseigne l&apos;équilibre dans le regard porté sur le conjoint. Il est naturel de percevoir des défauts chez l&apos;autre, mais le croyant doit également voir les qualités. Cette vision équilibrée préserve le couple de la rancœur et du mépris. Les savants y voient un principe de justice : juger une personne dans sa globalité plutôt que de se focaliser sur un seul aspect négatif. Ce hadith est aussi applicable au moment du choix du conjoint : aucun être humain n&apos;est parfait."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths forment un ensemble cohérent sur la question du choix du conjoint. Ils invitent à privilégier les qualités intérieures, à ne pas poser d&apos;obstacles injustifiés au mariage et à garder une vision juste et équilibrée de l&apos;autre. Pour approfondir les aspects juridiques de l&apos;union, consultez notre article sur le{" "}
                  <Link href="/mariage-islamique-contrat" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    contrat de mariage islamique et ses conditions
                  </Link>.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Droits et devoirs des epoux  */}
              {/* ====================================== */}
              <section id="droits-devoirs" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Droits et devoirs des époux selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le mariage en islam n&apos;est pas seulement un lien affectif : c&apos;est un cadre de droits et d&apos;obligations mutuelles. Le Prophète ﷺ a précisé ces droits dans de nombreux hadiths, toujours dans un esprit de complémentarité et de respect. L&apos;homme et la femme sont tous deux des bergers responsables de leurs rôles respectifs.
                </p>

                <HadithBlock
                  number={4}
                  title="Le meilleur d&apos;entre vous est le meilleur envers sa famille"
                  narrator="Aisha"
                  arabic="خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ وَأَنَا خَيْرُكُمْ لِأَهْلِي"
                  translation="Le meilleur d&apos;entre vous est le meilleur envers sa famille, et je suis le meilleur d&apos;entre vous envers ma famille."
                  source="Jami&apos; at-Tirmidhi, n°3895"
                  grade="sahih"
                  explanation="Ce hadith établit un critère de valeur parmi les musulmans : la qualité du comportement au foyer. Il est facile de paraître vertueux en public ; la vraie épreuve est le quotidien familial. Le Prophète ﷺ se donne en exemple, non par orgueil, mais pour montrer que l&apos;excellence envers la famille est un sommet de la pratique religieuse. Ce hadith réfute toute interprétation de l&apos;islam qui justifierait la dureté envers les proches."
                />

                <HadithBlock
                  number={5}
                  title="Recommandez-vous le bien envers les femmes"
                  narrator="Abu Hurayra"
                  arabic="اسْتَوْصُوا بِالنِّسَاءِ خَيْرًا فَإِنَّ الْمَرْأَةَ خُلِقَتْ مِنْ ضِلَعٍ، وَإِنَّ أَعْوَجَ شَيْءٍ فِي الضِّلَعِ أَعْلَاهُ، فَإِنْ ذَهَبْتَ تُقِيمُهُ كَسَرْتَهُ، وَإِنْ تَرَكْتَهُ لَمْ يَزَلْ أَعْوَجَ، فَاسْتَوْصُوا بِالنِّسَاءِ"
                  translation="Recommandez-vous mutuellement le bien envers les femmes, car la femme a été créée d&apos;une côte, et la partie la plus courbée de la côte est sa partie supérieure. Si tu cherches à la redresser, tu la casseras, et si tu la laisses, elle restera courbée. Recommandez-vous donc le bien envers les femmes."
                  source="Sahih Al-Bukhari, n°3331 — Sahih Muslim, n°1468"
                  grade="sahih"
                  explanation="Ce hadith commence et se termine par la même injonction : le bon traitement des femmes. La métaphore de la côte invite à la patience et à l&apos;acceptation des différences de tempérament. &laquo; La casser &raquo; signifie divorcer ; &laquo; la laisser &raquo; signifie accepter ses imperfections avec sagesse. Les savants, dont l&apos;imam An-Nawawi, expliquent que ce hadith est un appel à la douceur, pas une description péjorative de la femme. Il enseigne que vouloir changer l&apos;autre par la force détruit la relation."
                />

                <HadithBlock
                  number={6}
                  title="Chacun de vous est un berger"
                  narrator="Ibn &apos;Umar"
                  arabic="كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ، فَالْإِمَامُ رَاعٍ وَمَسْئُولٌ عَنْ رَعِيَّتِهِ، وَالرَّجُلُ رَاعٍ فِي أَهْلِهِ وَمَسْئُولٌ عَنْ رَعِيَّتِهِ، وَالْمَرْأَةُ رَاعِيَةٌ فِي بَيْتِ زَوْجِهَا وَمَسْئُولَةٌ عَنْ رَعِيَّتِهَا"
                  translation="Chacun de vous est un berger et chacun de vous est responsable de son troupeau. Le dirigeant est un berger et est responsable de ses sujets. L&apos;homme est un berger dans sa famille et est responsable de son troupeau. La femme est une bergere dans le foyer de son mari et est responsable de son troupeau."
                  source="Sahih Al-Bukhari, n°893 — Sahih Muslim, n°1829"
                  grade="sahih"
                  explanation="Ce hadith célèbre définit le principe de responsabilité partagée dans le couple. Le terme &laquo; berger &raquo; (ra&apos;in) implique la protection, la guidance et la bienveillance, non la domination. Chaque époux a un domaine de responsabilité et sera interrogé par Allah à ce sujet. L&apos;homme répond de la subsistance et de la protection du foyer, la femme de la gestion et de l&apos;éducation au sein du foyer. Cette répartition n&apos;exclut pas l&apos;entraide, comme le montrent d&apos;autres hadiths."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh du mariage, les droits des époux et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Bienveillance        */}
              {/* ============================== */}
              <section id="bienveillance" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La bienveillance conjugale dans la Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà des obligations juridiques, le Prophète ﷺ a enseigné par l&apos;exemple une éthique de douceur, de générosité et de service au sein du foyer. Les hadiths suivants illustrent cette dimension affective et spirituelle du mariage, souvent négligée dans les débats juridiques.
                </p>

                <HadithBlock
                  number={7}
                  title="Le Prophète ﷺ au service de sa famille"
                  narrator="Al-Aswad"
                  arabic="سَأَلْتُ عَائِشَةَ مَا كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَصْنَعُ فِي بَيْتِهِ؟ قَالَتْ: كَانَ يَكُونُ فِي مِهْنَةِ أَهْلِهِ، فَإِذَا حَضَرَتِ الصَّلَاةُ خَرَجَ إِلَى الصَّلَاةِ"
                  translation="J&apos;ai demandé à Aisha : que faisait le Prophète ﷺ chez lui ? Elle a répondu : il était au service de sa famille, et lorsque l&apos;heure de la prière arrivait, il sortait pour la prière."
                  source="Sahih Al-Bukhari, n°6039"
                  grade="sahih"
                  explanation="Ce hadith est un témoignage direct d&apos;Aisha, l&apos;épouse du Prophète ﷺ. Il montre que le Messager d&apos;Allah n&apos;était pas au-dessus des tâches domestiques : il cousait ses vêtements, réparait ses sandales et aidait dans les corvées ménagères. Ce comportement réfute toute attitude de supériorité du mari au foyer. Le service à la famille est présenté ici comme un acte naturel, interrompu uniquement par l&apos;obligation de la prière."
                />

                <HadithBlock
                  number={8}
                  title="Les meilleurs musulmans par leur caractère"
                  narrator="Abu Hurayra"
                  arabic="أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا، وَخِيَارُكُمْ خِيَارُكُمْ لِنِسَائِهِمْ"
                  translation="Les croyants dont la foi est la plus complète sont ceux qui ont le meilleur caractère, et les meilleurs d&apos;entre vous sont les meilleurs envers leurs femmes."
                  source="Sunan Abu Dawud, n°4682"
                  grade="sahih"
                  explanation="Ce hadith lie directement la foi au caractère, puis le caractère au traitement de l&apos;épouse. La hiérarchie est significative : la complétude de la foi se mesure d&apos;abord au comportement général, puis spécifiquement à la conduite envers les femmes. Les savants y voient la preuve que la maltraitance conjugale est un signe de faiblesse de foi. Ce hadith est souvent cité aux côtés du hadith d&apos;Aisha (Tirmidhi 3895) pour souligner la cohérence du message prophétique."
                />

                <HadithBlock
                  number={9}
                  title="La sadaqa envers son epouse"
                  narrator="Sa&apos;d ibn Abi Waqqas"
                  arabic="إِنَّكَ لَنْ تُنْفِقَ نَفَقَةً تَبْتَغِي بِهَا وَجْهَ اللَّهِ إِلَّا أُجِرْتَ عَلَيْهَا، حَتَّى مَا تَجْعَلُ فِي فِي امْرَأَتِكَ"
                  translation="Tu ne dépenseras aucune dépense en recherchant par elle le Visage d&apos;Allah sans en être récompensé, même la bouchée de nourriture que tu mets dans la bouche de ton épouse."
                  source="Sahih Muslim, n°1006"
                  grade="sahih"
                  explanation="Ce hadith transforme les gestes les plus simples du quotidien conjugal en actes d&apos;adoration. Nourrir son épouse, lui offrir un cadeau, subvenir à ses besoins : tout cela devient une sadaqa (aumône) récompensée par Allah, à condition que l&apos;intention soit sincère. Le Prophète ﷺ mentionne spécifiquement le geste intime de &laquo; mettre une bouchée dans la bouche de son épouse &raquo;, illustrant que la tendresse quotidienne a une valeur spirituelle. Ce hadith encourage les époux à voir dans chaque dépense familiale une source de récompense divine."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths sur la bienveillance conjugale s&apos;inscrivent dans la continuité des droits et devoirs. Ils montrent que le mariage en islam est un espace où la spiritualité se vit au quotidien. La relation conjugale peut être, en cas de difficulté, encadrée par des procédures spécifiques : pour en savoir plus, consultez notre article sur{" "}
                  <Link href="/divorce-islam-talaq-khula" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    le divorce en islam (talaq et khula)
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Walima               */}
              {/* ============================== */}
              <section id="walima" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le repas de noces (walima) et la célébration du mariage
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a insisté sur la célébration publique du mariage. La walima et l&apos;annonce du mariage ne sont pas de simples traditions culturelles : elles ont une fonction religieuse et sociale. Elles distinguent le mariage licite de la relation cachée, renforcent les liens communautaires et expriment la gratitude envers Allah.
                </p>

                <HadithBlock
                  number={10}
                  title="Fais un repas de noces, même avec une brebis"
                  narrator="Anas ibn Malik"
                  arabic="أَوْلِمْ وَلَوْ بِشَاةٍ"
                  translation="Fais un repas de noces, ne serait-ce qu&apos;avec une brebis."
                  source="Sahih Al-Bukhari, n°5167"
                  grade="sahih"
                  explanation="Le Prophète ﷺ a adressé ces paroles à Abdurrahman ibn Awf après son mariage. L&apos;injonction est claire : la walima est une sunna à accomplir, quelle que soit la modestie des moyens. L&apos;expression &laquo; ne serait-ce qu&apos;avec une brebis &raquo; fixe un seuil accessible, montrant que l&apos;islam refuse l&apos;ostentation tout en valorisant le partage. Les savants divergent sur le caractère obligatoire ou recommandé de la walima, mais tous s&apos;accordent sur son importance dans la Sunna."
                />

                <HadithBlock
                  number={11}
                  title="Annoncez le mariage"
                  narrator="Aisha"
                  arabic="أَعْلِنُوا هَذَا النِّكَاحَ وَاجْعَلُوهُ فِي الْمَسَاجِدِ وَاضْرِبُوا عَلَيْهِ بِالدُّفُوفِ"
                  translation="Annoncez le mariage, célébrez-le dans les mosquées et jouez-y du duff (tambourin)."
                  source="Jami&apos; at-Tirmidhi, n°1089"
                  grade="hasan"
                  explanation="Ce hadith souligne trois dimensions de la célébration : l&apos;annonce publique, le cadre sacré de la mosquée et la joie exprimée par le duff. L&apos;annonce du mariage le distingue des unions secrètes, qui sont blâmées en islam. La mention du duff (tambourin à une face) indique que la célébration joyeuse est permise et même encouragée, dans les limites de la décence. Les savants précisent que le duff est le seul instrument explicitement mentionné dans les hadiths pour les célébrations de mariage."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le mariage et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur le mariage. Leurs explications permettent de mieux saisir la portée juridique et spirituelle de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith &laquo; choisis celle qui a la religion &raquo; ne signifie pas que les autres critères soient interdits. Il signifie que la religion doit être le critère déterminant lorsque les autres qualités sont équivalentes. Un mariage fondé sur la piété est plus durable qu&apos;un mariage fondé sur la beauté seule.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La walima est une sunna confirmée et certains savants l&apos;ont rendue obligatoire. Elle est un droit de la communauté sur les mariés, car elle permet de témoigner du mariage et de partager la joie. Le Prophète ﷺ n&apos;a jamais négligé la walima pour aucun de ses mariages.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le mariage est l&apos;institution la plus noble après la prophétie et le message. Il réunit les bienfaits de la religion et de la vie d&apos;ici-bas : la préservation de la chasteté, la procréation, l&apos;entraide et la quête de la récompense divine à travers la dépense pour sa famille.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qudama, <em>Al-Mughni</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur le mariage ne sont pas de simples recommandations morales : ils constituent le fondement d&apos;un corpus juridique (<em>fiqh al-munakahat</em>) élaboré par les quatre écoles de jurisprudence. Chaque hadith cité dans cet article est utilisé par les fuqaha pour déduire des règles pratiques sur la validité du mariage, les droits des époux et les conditions de la walima.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour la vie conjugale du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Privilégier la piété dans le choix du conjoint
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La beauté s&apos;estompe, la richesse fluctue, mais la piété est un socle durable. Un conjoint pieux craindra Allah dans ses droits et sera patient dans les épreuves.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas poser d&apos;obstacles injustifiés au mariage
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les familles doivent faciliter le mariage des jeunes lorsque le prétendant est pieux et de bon caractère. Refuser pour des raisons de statut social ou d&apos;origine est contraire à l&apos;enseignement prophétique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Cultiver la bienveillance au quotidien
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le meilleur musulman est celui qui traite le mieux sa famille. Les petits gestes de tendresse, de service et de générosité sont des actes d&apos;adoration récompensés par Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Assumer la responsabilité partagée du foyer
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Chaque époux est un &laquo; berger &raquo; responsable de son domaine. Cette complémentarité n&apos;est pas synonyme de hiérarchie rigide, mais d&apos;une répartition fonctionnelle nourrie par l&apos;entraide.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Célébrer le mariage publiquement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La walima et l&apos;annonce publique du mariage sont des sunnas qui protègent l&apos;honneur des époux et renforcent le tissu social de la communauté.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Voir les qualités avant les défauts
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ enseigne de ne pas se focaliser sur un défaut du conjoint en oubliant ses qualités. Cette vision équilibrée est la clé de la longévité du couple.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le mariage dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Retrouvez tous nos hadiths par thème"
                  href="/hadith-du-jour"
                  linkText="Hadith du jour : paroles authentiques"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths du Prophète Muhammad ﷺ : fondements et collections"
                  description="Découvrez l&apos;histoire des grandes collections de hadiths et les critères d&apos;authenticité."
                  href="/hadith-prophete-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le contrat de mariage islamique : conditions et obligations"
                  description="Tout savoir sur le Nikah, le mahr, le wali et les clauses du contrat de mariage."
                  href="/mariage-islamique-contrat"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le divorce en islam : talaq, khula et procédures"
                  description="Les règles du divorce en islam, les droits de chaque époux et les procédures juridiques."
                  href="/divorce-islam-talaq-khula"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les douas en islam : invocations authentiques"
                  description="Retrouvez les invocations prophétiques pour toutes les occasions, y compris le mariage."
                  href="/doua-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
