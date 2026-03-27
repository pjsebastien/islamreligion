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
    "Hadiths sur la science et la connaissance en islam : guide complet des enseignements prophétiques",
  description:
    "Découvrez les hadiths authentiques sur la science et la connaissance en islam : obligation de chercher le savoir, mérite des savants, chemin vers le Paradis. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur la science et la connaissance en islam : guide complet des enseignements prophétiques",
    description:
      "Les hadiths authentiques sur la science en islam : obligation du savoir, mérite des savants, héritiers des prophètes, chemin vers le Paradis selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-science-connaissance-islam",
    images: [
      {
        url: "/images/islam-science-savoir-connaissance-livre.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-science-connaissance-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de la science" },
  { id: "obligation-savoir", label: "L\u2019obligation de chercher le savoir" },
  { id: "merite-savants", label: "Le mérite des savants et des étudiants" },
  { id: "chemin-paradis", label: "La science, chemin vers le Paradis" },
  { id: "science-utile", label: "La science utile et la transmission" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur la science en islam ?",
    answer:
      "Les hadiths les plus importants incluent celui rapporté par Anas ibn Malik sur l\u2019obligation de chercher la science pour tout musulman (Ibn Majah 224), celui d\u2019Abu Darda sur les savants héritiers des prophètes (Abu Dawud 3641), et celui d\u2019Abu Hurayra sur le chemin vers le Paradis facilité par la quête du savoir (Muslim 2699). Ces hadiths couvrent les fondements du rapport à la connaissance en islam.",
  },
  {
    question:
      "La recherche de la science est-elle obligatoire en islam ?",
    answer:
      "Oui, le Prophète \u2018alayhi salatu wa salam a déclaré que la recherche de la science est une obligation pour tout musulman (Ibn Majah 224). Les savants distinguent la science obligatoire individuellement (fard \u2018ayn), comme les bases de la croyance et de la prière, et la science obligatoire collectivement (fard kifaya), comme la médecine ou le fiqh approfondi.",
  },
  {
    question:
      "Que signifie le hadith sur les savants héritiers des prophètes ?",
    answer:
      "Ce hadith (Abu Dawud 3641) signifie que les prophètes n\u2019ont pas laissé de richesses matérielles en héritage, mais la science religieuse. Les savants qui portent ce savoir occupent donc un rang élevé auprès d\u2019Allah, car ils perpétuent la mission prophétique d\u2019enseigner et de guider la communauté.",
  },
  {
    question:
      "Quelles sont les sciences considérées comme utiles en islam ?",
    answer:
      "Les sciences utiles englobent d\u2019abord les sciences religieuses (Coran, Sunna, fiqh, tawhid), puis toute science qui profite à la communauté : médecine, ingénierie, agriculture, etc. Le critère est le bénéfice pour les gens dans leur religion et leur vie. Le Prophète demandait à Allah de lui accorder une science utile (Nasa\u2019i 5477).",
  },
  {
    question:
      "Quel est le mérite de celui qui enseigne la science en islam ?",
    answer:
      "Celui qui enseigne une science bénéfique reçoit la récompense de tous ceux qui la mettent en pratique, sans que leur propre récompense ne diminue. Le Prophète a mentionné la science bénéfique parmi les trois \u0153uvres dont la récompense perdure après la mort (Muslim 1631). Enseigner est donc un investissement pour l\u2019au-delà.",
  },
  {
    question:
      "Est-il interdit de cacher la science en islam ?",
    answer:
      "Oui, le Prophète a averti sévèrement contre le fait de cacher une science que l\u2019on possède. Il a dit que celui à qui l\u2019on pose une question sur un savoir qu\u2019il détient et qui le cache sera bridé le Jour de la Résurrection avec une bride de feu (Abu Dawud 3658). Les savants en déduisent que transmettre le savoir religieux est une obligation.",
  },
  {
    question:
      "Les anges abaissent-ils vraiment leurs ailes pour le chercheur de science ?",
    answer:
      "Le hadith rapporté par Abu Darda (Abu Dawud 3641) mentionne effectivement que les anges abaissent leurs ailes pour le chercheur de science, en signe de satisfaction. Les savants divergent sur le sens : certains y voient un abaissement littéral, d\u2019autres une métaphore signifiant que les anges accompagnent et protègent celui qui est sur le chemin du savoir.",
  },
  {
    question:
      "Comment concilier la science religieuse et les sciences profanes en islam ?",
    answer:
      "L\u2019islam ne s\u2019oppose pas aux sciences profanes. Les savants classiques comme Al-Ghazali considèrent que les sciences utiles à la communauté (médecine, mathématiques, agriculture) relèvent du fard kifaya. L\u2019essentiel est que la science profane ne détourne pas du savoir religieux obligatoire et qu\u2019elle soit mise au service du bien commun.",
  },
];

export default function HadithScienceConnaissanceIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-science-connaissance-islam/#article",
        headline:
          "Hadiths sur la science et la connaissance en islam : guide complet des enseignements prophétiques",
        description:
          "Découvrez les hadiths authentiques sur la science et la connaissance en islam : obligation du savoir, mérite des savants, chemin vers le Paradis.",
        image: "/images/islam-science-savoir-connaissance-livre.jpg",
        datePublished: "2026-05-06",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-science-connaissance-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-science-connaissance-islam/#breadcrumb",
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
            name: "Hadiths sur la science et la connaissance",
            item: "https://www.islamreligion.fr/hadith-science-connaissance-islam",
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
          title="Hadiths sur la science et la connaissance en islam"
          subtitle="Les enseignements prophétiques sur l&apos;obligation de chercher le savoir, le mérite des savants, le chemin vers le Paradis et la transmission de la science selon la Sunna authentique."
          imageSrc="/images/islam-science-savoir-connaissance-livre.jpg"
          imageAlt="Hadiths sur la science et la connaissance en islam, enseignements prophétiques"
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
                  Hadiths sur la science et la connaissance
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
                    La recherche de la science est une obligation pour tout musulman et toute musulmane, selon le hadith du Prophète ﷺ.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les savants sont les héritiers des prophètes : ils n&apos;ont pas hérité de richesses, mais de la science.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Celui qui emprunte un chemin pour chercher la science, Allah lui facilite un chemin vers le Paradis.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La science bénéfique fait partie des trois œuvres dont la récompense perdure après la mort du croyant.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de la science en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il convient de rappeler que le Coran place la science et la connaissance au cœur de la foi. La première révélation adressée au Prophète ﷺ fut l&apos;injonction &laquo;&nbsp;Lis !&nbsp;&raquo; (<em>Iqra&apos;</em>), marquant le lien indissociable entre la guidance divine et le savoir. Plusieurs versets fondateurs établissent le statut élevé de la science en islam.
                </p>

                <HadithCard
                  arabic="اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ"
                  text="Lis, au nom de ton Seigneur qui a créé. Il a créé l&apos;homme d&apos;une adhérence. Lis ! Et ton Seigneur est le Très Noble, qui a enseigné par la plume, a enseigné à l&apos;homme ce qu&apos;il ne savait pas."
                  source="Coran, sourate Al-Alaq (96:1-5)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces cinq premiers versets révélés associent la création de l&apos;homme à l&apos;enseignement divin. Allah se présente comme Celui qui &laquo;&nbsp;a enseigné par la plume&nbsp;&raquo;, élevant l&apos;écriture et le savoir au rang de dons divins fondamentaux. Les savants soulignent que l&apos;islam a ainsi débuté par un appel à la lecture et à la connaissance, avant même les obligations rituelles.
                </p>

                <HadithCard
                  arabic="قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ"
                  text="Dis : sont-ils égaux, ceux qui savent et ceux qui ne savent pas ?"
                  source="Coran, sourate Az-Zumar (39:9)"
                />

                <HadithCard
                  arabic="يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ"
                  text="Allah élève en degrés ceux d&apos;entre vous qui ont cru et ceux qui ont reçu la science."
                  source="Coran, sourate Al-Mujadala (58:11)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran affirme sans ambiguïté l&apos;inégalité entre le savant et l&apos;ignorant, et promet l&apos;élévation à ceux qui combinent la foi et la science. C&apos;est sur cette base coranique que le Prophète ﷺ a construit ses enseignements détaillés sur la quête du savoir, la dignité des savants et la responsabilité de transmettre la connaissance.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Obligation de chercher le savoir */}
              {/* ====================================== */}
              <section id="obligation-savoir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;obligation de chercher le savoir selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a fait de la quête du savoir une obligation religieuse, au même titre que la prière ou le jeûne. Les hadiths suivants montrent que l&apos;islam ne conçoit pas la foi sans la connaissance, et que l&apos;ignorance n&apos;est jamais une excuse devant Allah.
                </p>

                <HadithBlock
                  number={1}
                  title="La recherche de la science est une obligation"
                  narrator="Anas ibn Malik"
                  arabic="طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ"
                  translation="La recherche de la science est une obligation pour tout musulman."
                  source="Sunan Ibn Majah, n°224"
                  grade="sahih"
                  explanation="Ce hadith, parmi les plus célèbres de l&apos;islam, établit le caractère obligatoire de la quête du savoir. Les savants précisent que le terme &laquo;&nbsp;musulman&nbsp;&raquo; inclut ici les hommes et les femmes. L&apos;obligation minimale (fard &apos;ayn) concerne la science nécessaire à la pratique religieuse correcte : les fondements de la croyance, les règles de la prière, du jeûne et des interactions. Au-delà, la science spécialisée relève du fard kifaya, une obligation collective."
                />

                <HadithBlock
                  number={2}
                  title="Celui qui sort en quête de science"
                  narrator="Anas ibn Malik"
                  arabic="مَنْ خَرَجَ فِي طَلَبِ الْعِلْمِ فَهُوَ فِي سَبِيلِ اللَّهِ حَتَّى يَرْجِعَ"
                  translation="Celui qui sort en quête de la science est dans le sentier d&apos;Allah jusqu&apos;à ce qu&apos;il revienne."
                  source="Jami&apos; at-Tirmidhi, n°2647"
                  grade="hasan"
                  explanation="Ce hadith assimile la quête du savoir au jihad dans le sentier d&apos;Allah. L&apos;expression &laquo;&nbsp;fi sabil Allah&nbsp;&raquo; confère au chercheur de science un statut spirituel élevé : celui qui se déplace pour apprendre est considéré comme un combattant pour la cause divine. Les savants y voient la preuve que le voyage pour la science est une adoration en soi, et que celui qui meurt en chemin vers le savoir meurt dans un état de mérite."
                />

                <HadithBlock
                  number={3}
                  title="Allah déteste l&apos;ignorance et les ignorants"
                  narrator="Mu&apos;awiya ibn Abi Sufyan"
                  arabic="مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ"
                  translation="Celui à qui Allah veut du bien, Il lui accorde la compréhension de la religion."
                  source="Sahih Al-Bukhari, n°71 — Sahih Muslim, n°1037"
                  grade="sahih"
                  explanation="Ce hadith établit un lien direct entre le bienfait divin et la compréhension religieuse. Le terme &laquo;&nbsp;fiqh&nbsp;&raquo; ici ne désigne pas seulement la jurisprudence, mais la compréhension profonde de la religion dans son ensemble. Les savants en déduisent, par le raisonnement inverse (mafhum al-mukhalafa), que celui à qui Allah ne donne pas la compréhension de la religion n&apos;est pas touché par ce bienfait. Ce hadith est un puissant encouragement à étudier les sciences religieuses."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths forment un ensemble cohérent : la science est une obligation, sa recherche est un acte d&apos;adoration dans le sentier d&apos;Allah, et la compréhension religieuse est un signe de la faveur divine. Pour découvrir les recueils qui rassemblent ces hadiths, consultez notre article sur les{" "}
                  <Link href="/hadith-livres-recueils-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    livres et recueils de hadiths en islam
                  </Link>.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Mérite des savants           */}
              {/* ====================================== */}
              <section id="merite-savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le mérite des savants et des étudiants en science
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a accordé aux savants et aux étudiants en science un rang exceptionnel. Les hadiths suivants montrent que ceux qui portent le savoir jouissent d&apos;un honneur particulier auprès d&apos;Allah, des anges et de l&apos;ensemble de la création.
                </p>

                <HadithBlock
                  number={4}
                  title="Les savants sont les héritiers des prophètes"
                  narrator="Abu Darda"
                  arabic="إِنَّ الْعُلَمَاءَ وَرَثَةُ الْأَنْبِيَاءِ، إِنَّ الْأَنْبِيَاءَ لَمْ يُوَرِّثُوا دِينَارًا وَلَا دِرْهَمًا، إِنَّمَا وَرَّثُوا الْعِلْمَ، فَمَنْ أَخَذَهُ أَخَذَ بِحَظٍّ وَافِرٍ"
                  translation="Les savants sont les héritiers des prophètes. Les prophètes n&apos;ont laissé en héritage ni dinar ni dirham, mais ils ont laissé la science. Celui qui la prend a pris une part abondante."
                  source="Sunan Abu Dawud, n°3641"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus nobles sur le statut des savants. Il établit une filiation spirituelle entre les prophètes et les savants : la mission des prophètes était d&apos;enseigner, et les savants perpétuent cette mission. L&apos;expression &laquo;&nbsp;part abondante&nbsp;&raquo; (hazz wafir) indique que la science est le bien le plus précieux qu&apos;un être humain puisse acquérir, supérieur à toute richesse matérielle. Ce hadith est la base de l&apos;immense respect accordé aux savants dans la civilisation islamique."
                />

                <HadithBlock
                  number={5}
                  title="Les anges abaissent leurs ailes pour le chercheur de science"
                  narrator="Abu Darda"
                  arabic="مَنْ سَلَكَ طَرِيقًا يَبْتَغِي فِيهِ عِلْمًا سَلَكَ اللَّهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ، وَإِنَّ الْمَلَائِكَةَ لَتَضَعُ أَجْنِحَتَهَا لِطَالِبِ الْعِلْمِ رِضًا بِمَا يَصْنَعُ"
                  translation="Celui qui emprunte un chemin à la recherche de la science, Allah lui facilite par cela un chemin vers le Paradis. Et les anges abaissent leurs ailes pour le chercheur de science, satisfaits de ce qu&apos;il fait."
                  source="Sunan Abu Dawud, n°3641 — Jami&apos; at-Tirmidhi, n°2682"
                  grade="sahih"
                  explanation="Ce hadith contient deux bienfaits immenses. Le premier est la promesse divine : Allah facilite le chemin du Paradis à celui qui cherche la science. Le second est l&apos;honneur angélique : les anges abaissent leurs ailes en signe de respect et de satisfaction. L&apos;imam Ibn Al-Qayyim explique que cet abaissement des ailes peut signifier que les anges accompagnent le chercheur de science, le protègent et invoquent Allah en sa faveur. Ce hadith montre que la quête du savoir est une activité aimée du Ciel."
                />

                <HadithBlock
                  number={6}
                  title="La supériorité du savant sur le dévot"
                  narrator="Abu Umama al-Bahili"
                  arabic="فَضْلُ الْعَالِمِ عَلَى الْعَابِدِ كَفَضْلِي عَلَى أَدْنَاكُمْ"
                  translation="La supériorité du savant sur le dévot est comme ma supériorité sur le plus modeste d&apos;entre vous."
                  source="Jami&apos; at-Tirmidhi, n°2685"
                  grade="sahih"
                  explanation="Ce hadith établit une hiérarchie claire entre la science et l&apos;adoration sans science. Le dévot (&apos;abid) adore Allah, mais le savant (&apos;alim) adore Allah et guide les autres vers Lui. La comparaison avec la différence entre le Prophète ﷺ et le plus modeste de ses compagnons illustre l&apos;ampleur de cet écart. Les savants expliquent que le dévot ignorant risque de tomber dans l&apos;innovation (bid&apos;a) tandis que le savant adore Allah conformément à la Sunna et enseigne la voie droite."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths révèlent le statut exceptionnel que l&apos;islam accorde aux savants et à ceux qui cherchent la science. Les prophètes ont légué le savoir comme leur plus précieux héritage, et les anges eux-mêmes honorent celui qui emprunte ce chemin. Pour approfondir le lien entre le Coran et les hadiths, consultez notre article sur les{" "}
                  <Link href="/hadith-coran-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths et le Coran en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le Coran, le hadith, le fiqh et les sciences religieuses avec des professeurs qualifiés dans un cursus structuré."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Chemin vers le Paradis */}
              {/* ============================== */}
              <section id="chemin-paradis" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La science, chemin vers le Paradis
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a lié la quête du savoir à la récompense suprême : le Paradis. Les hadiths suivants montrent que la science ne profite pas seulement dans cette vie, mais constitue un viatique pour l&apos;au-delà. Celui qui apprend pour Allah est sur un chemin de lumière.
                </p>

                <HadithBlock
                  number={7}
                  title="Allah facilite le chemin du Paradis"
                  narrator="Abu Hurayra"
                  arabic="مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ"
                  translation="Celui qui emprunte un chemin à la recherche d&apos;une science, Allah lui facilite par cela un chemin vers le Paradis."
                  source="Sahih Muslim, n°2699"
                  grade="sahih"
                  explanation="Ce hadith, rapporté dans Sahih Muslim, est l&apos;un des plus solides sur le mérite de la science. Le &laquo;&nbsp;chemin&nbsp;&raquo; (tariq) englobe toute démarche : se rendre à une assise de science, ouvrir un livre, voyager pour apprendre, ou même écouter un cours. Allah, en retour, facilite le chemin du Paradis, c&apos;est-à-dire qu&apos;Il guide le chercheur de science vers les bonnes actions, la compréhension correcte et la piété qui mènent à la félicité éternelle."
                />

                <HadithBlock
                  number={8}
                  title="Les assises de science sont des jardins du Paradis"
                  narrator="Anas ibn Malik"
                  arabic="إِذَا مَرَرْتُمْ بِرِيَاضِ الْجَنَّةِ فَارْتَعُوا. قَالُوا: وَمَا رِيَاضُ الْجَنَّةِ؟ قَالَ: حِلَقُ الذِّكْرِ"
                  translation="Lorsque vous passez par les jardins du Paradis, paissez-y. On demanda : que sont les jardins du Paradis ? Il répondit : les cercles de rappel (d&apos;Allah)."
                  source="Jami&apos; at-Tirmidhi, n°3510"
                  grade="hasan"
                  explanation="Ce hadith poétique compare les assises de science et de rappel d&apos;Allah à des jardins du Paradis sur terre. Le terme &laquo;&nbsp;paissez-y&nbsp;&raquo; (irta&apos;u) évoque un troupeau qui se nourrit dans un pâturage fertile. Les savants expliquent que les cercles de dhikr et de science sont des lieux où descendent la miséricorde, la sérénité et les anges. Participer à ces assises est donc un avant-goût du Paradis dans cette vie d&apos;ici-bas."
                />

                <HadithBlock
                  number={9}
                  title="Demander à Allah la science utile"
                  narrator="Umm Salama"
                  arabic="اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا"
                  translation="Ô Allah, je Te demande une science utile, une subsistance bonne et une œuvre acceptée."
                  source="Sunan Ibn Majah, n°925"
                  grade="sahih"
                  explanation="Le Prophète ﷺ faisait cette invocation chaque matin après la prière du fajr. Elle associe trois demandes fondamentales : la science utile (qui profite à soi et aux autres), la subsistance licite (rizq tayyib) et l&apos;œuvre acceptée par Allah. Les savants soulignent que le Prophète ﷺ qualifie la science de &laquo;&nbsp;utile&nbsp;&raquo; (nafi&apos;), ce qui exclut la science qui ne profite pas ou qui nuit. Cette invocation est recommandée quotidiennement pour tout musulman."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Science utile        */}
              {/* ============================== */}
              <section id="science-utile" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La science utile et la transmission du savoir
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ n&apos;a pas seulement encouragé l&apos;acquisition du savoir : il a insisté sur sa transmission et averti contre le fait de le cacher. La science en islam est un dépôt (amana) qui doit circuler et profiter à la communauté, y compris après la mort de celui qui l&apos;a portée.
                </p>

                <HadithBlock
                  number={10}
                  title="La science bénéfique perdure après la mort"
                  narrator="Abu Hurayra"
                  arabic="إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ: إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ"
                  translation="Lorsque l&apos;être humain meurt, ses œuvres s&apos;arrêtent sauf trois : une aumône continue, une science dont on tire profit, ou un enfant pieux qui invoque pour lui."
                  source="Sahih Muslim, n°1631"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus connus de l&apos;islam. Il place la science bénéfique parmi les trois investissements éternels du croyant. Tant que la science enseignée profite à quelqu&apos;un, la récompense continue d&apos;affluer vers celui qui l&apos;a transmise, même après sa mort. C&apos;est pourquoi les savants de l&apos;islam ont consacré leur vie à écrire des ouvrages et à former des élèves : chaque lecteur, chaque étudiant qui bénéficie de leur science leur vaut une récompense perpétuelle."
                />

                <HadithBlock
                  number={11}
                  title="Transmettez de ma part, ne serait-ce qu&apos;un verset"
                  narrator="Abdullah ibn &apos;Amr"
                  arabic="بَلِّغُوا عَنِّي وَلَوْ آيَةً"
                  translation="Transmettez de ma part, ne serait-ce qu&apos;un seul verset."
                  source="Sahih Al-Bukhari, n°3461"
                  grade="sahih"
                  explanation="Ce hadith est un appel universel à la transmission du savoir. Le Prophète ﷺ n&apos;a pas réservé l&apos;enseignement aux savants spécialisés : chaque musulman qui connaît ne serait-ce qu&apos;un verset du Coran ou un hadith doit le transmettre. L&apos;expression &laquo;&nbsp;ne serait-ce qu&apos;un verset&nbsp;&raquo; montre que la quantité n&apos;est pas un obstacle : ce qui compte est la sincérité et l&apos;exactitude de la transmission. Ce hadith fonde le principe de la da&apos;wa (invitation à l&apos;islam) comme responsabilité partagée."
                />

                <HadithBlock
                  number={12}
                  title="Celui qui cache la science sera bridé de feu"
                  narrator="Abu Hurayra"
                  arabic="مَنْ سُئِلَ عَنْ عِلْمٍ فَكَتَمَهُ أَلْجَمَهُ اللَّهُ بِلِجَامٍ مِنْ نَارٍ يَوْمَ الْقِيَامَةِ"
                  translation="Celui qui est interrogé sur une science qu&apos;il possède et qui la cache, Allah le bridera le Jour de la Résurrection avec une bride de feu."
                  source="Sunan Abu Dawud, n°3658 — Jami&apos; at-Tirmidhi, n°2649"
                  grade="hasan"
                  explanation="Ce hadith est un avertissement sévère contre la rétention du savoir religieux. La punition décrite — une bride de feu sur la bouche — est à la mesure du crime : cette bouche qui a refusé de parler sera punie par ce qu&apos;elle a retenu. Les savants précisent que cette menace concerne la science religieuse dont le questionneur a besoin pour sa pratique. Ce hadith a motivé les savants de l&apos;islam à enseigner gratuitement et à rendre le savoir accessible à tous."
                />

                <HadithBlock
                  number={13}
                  title="La protection contre la science inutile"
                  narrator="Zayd ibn Arqam"
                  arabic="اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ، وَمِنْ قَلْبٍ لَا يَخْشَعُ، وَمِنْ نَفْسٍ لَا تَشْبَعُ، وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا"
                  translation="Ô Allah, je cherche refuge auprès de Toi contre une science qui ne profite pas, un cœur qui ne craint pas, une âme qui n&apos;est pas rassasiée et une invocation qui n&apos;est pas exaucée."
                  source="Sahih Muslim, n°2722"
                  grade="sahih"
                  explanation="Le Prophète ﷺ cherchait lui-même refuge auprès d&apos;Allah contre la science inutile. Ce hadith enseigne que toute science n&apos;est pas bénéfique : une science qui n&apos;amène ni à la piété, ni à l&apos;action, ni au service des autres est une science stérile. Les savants y voient un critère pour orienter ses études : la science doit rapprocher d&apos;Allah, améliorer le comportement et profiter à la communauté. Ce hadith est aussi une invocation recommandée à réciter régulièrement."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths soulignent que la science en islam n&apos;est pas une fin en soi : elle doit être utile, transmise et mise en pratique. La rétention du savoir est un péché grave, tandis que sa diffusion est un investissement éternel. Pour comprendre la relation entre les hadiths et les textes fondateurs, consultez notre article sur les{" "}
                  <Link href="/hadith-coran-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths dans le Coran et leur complémentarité
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la science et la connaissance
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur la science. Leurs paroles illustrent l&apos;importance capitale du savoir dans la tradition islamique.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La science est la vie des cœurs face à l&apos;ignorance, la lumière des yeux face aux ténèbres. C&apos;est par la science que le serviteur atteint les degrés des vertueux et les rangs élevés dans cette vie et dans l&apos;au-delà.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Al-Bukhari, <em>Sahih Al-Bukhari, Kitab al-&apos;Ilm</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La science est de deux sortes : celle qui est dans le cœur, et c&apos;est la science utile ; et celle qui est sur la langue, et c&apos;est la preuve d&apos;Allah contre Ses serviteurs. La pire des situations est celle du savant qui ne met pas en pratique ce qu&apos;il sait.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Al-Qayyim, <em>Miftah Dar as-Sa&apos;ada</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le minimum obligatoire de science pour chaque musulman est ce dont il a besoin pour accomplir correctement ses obligations. Quant aux sciences spécialisées — le fiqh approfondi, le hadith, la médecine — elles relèvent de l&apos;obligation collective : si un groupe suffisant les maîtrise, le péché est levé du reste de la communauté.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Al-Ghazali, <em>Ihya &apos;Ulum ad-Din</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces paroles montrent que les savants n&apos;ont pas seulement transmis la science : ils ont réfléchi à sa nature, à ses catégories et à ses finalités. La science en islam n&apos;est pas un exercice intellectuel déconnecté de la pratique : elle doit transformer le cœur, guider l&apos;action et servir la communauté.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour le musulman en quête de savoir :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Apprendre les bases de sa religion est obligatoire
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Chaque musulman doit maîtriser les fondements de la croyance, les règles de la prière, du jeûne et des transactions. L&apos;ignorance dans ces domaines n&apos;est pas excusable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La science doit être accompagnée de la pratique
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a demandé protection contre la science inutile. Apprendre sans mettre en pratique est une preuve contre soi-même le Jour du Jugement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Transmettre le savoir est un devoir
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Cacher la science religieuse est un péché grave. Chaque musulman doit transmettre ce qu&apos;il sait, ne serait-ce qu&apos;un verset ou un hadith, avec exactitude et sincérité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Investir dans la science pour l&apos;au-delà
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La science bénéfique est l&apos;une des trois œuvres qui perdurent après la mort. Enseigner, écrire et former des élèves sont des investissements éternels.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Fréquenter les cercles de science
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les assises de science sont des &laquo;&nbsp;jardins du Paradis&nbsp;&raquo; sur terre. S&apos;y asseoir attire la miséricorde divine, la présence des anges et la sérénité du cœur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Respecter et honorer les savants
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les savants sont les héritiers des prophètes. Leur accorder le respect, écouter leurs enseignements et les consulter dans les affaires religieuses est un acte de foi.
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
                  description="Comprenez les hadiths sur la science dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths et Coran : complémentarité des sources"
                  description="Découvrez comment les hadiths éclairent et complètent les versets du Coran dans la compréhension de l&apos;islam."
                  href="/hadith-coran-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les livres et recueils de hadiths en islam"
                  description="Explorez les grandes collections de hadiths : Bukhari, Muslim, Tirmidhi, Abu Dawud et les critères d&apos;authenticité."
                  href="/hadith-livres-recueils-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Apprendre la science religieuse en islam"
                  description="Trouvez les meilleures formations pour étudier les sciences islamiques avec des professeurs qualifiés."
                  href="/apprendre-science-religieuse-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
