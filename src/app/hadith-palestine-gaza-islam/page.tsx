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
    "Hadiths sur la Palestine, Gaza et le Sham en islam : terre bénie et prophéties",
  description:
    "Découvrez les hadiths authentiques sur la Palestine, Gaza et la terre du Sham en islam. Mérites d&apos;Al-Quds, mosquée Al-Aqsa, groupe victorieux et prophéties eschatologiques.",
  openGraph: {
    title:
      "Hadiths sur la Palestine, Gaza et le Sham en islam : terre bénie et prophéties",
    description:
      "Les hadiths authentiques sur la Palestine, Gaza, Al-Quds et le Sham : mérites, prophéties et enseignements des savants de l&apos;islam.",
    url: "https://www.islamreligion.fr/hadith-palestine-gaza-islam",
    images: [
      {
        url: "/images/mosquee-prophete-medine-islam-dome-vert.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-palestine-gaza-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de la terre bénie" },
  { id: "merite-sham", label: "Le mérite de la terre du Sham" },
  { id: "quds-aqsa", label: "Al-Quds et la mosquée Al-Aqsa" },
  { id: "groupe-victorieux", label: "Le groupe victorieux au Sham" },
  { id: "eschatologie", label: "Eschatologie et le Sham" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur la Palestine et le Sham en islam ?",
    answer:
      "Les hadiths les plus importants incluent celui rapporté par Abu Darda sur la terre du Sham comme meilleure terre d\u2019Allah (Ahmad 21733), celui d\u2019Abu Hurayra sur les trois mosquées vers lesquelles on entreprend un voyage (Bukhari 1189), et celui de Mu\u2019adh ibn Jabal sur le groupe victorieux établi au Sham (Sahih Muslim 1920). Ces hadiths couvrent les mérites de la terre, le statut d\u2019Al-Aqsa et les prophéties eschatologiques.",
  },
  {
    question:
      "Que dit le Prophète Muhammad sur la mosquée Al-Aqsa ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a enseigné que la mosquée Al-Aqsa est l\u2019une des trois mosquées vers lesquelles on peut entreprendre un voyage de dévotion (Bukhari 1189). Il a également indiqué qu\u2019une prière accomplie à la mosquée Al-Aqsa équivaut à 250 prières accomplies ailleurs (Tabarani, hasan). Le voyage nocturne (Al-Isra) du Prophète depuis la mosquée Al-Haram jusqu\u2019à la mosquée Al-Aqsa confirme son rang sacré.",
  },
  {
    question:
      "Qu\u2019est-ce que le Sham dans les hadiths et que désigne-t-il géographiquement ?",
    answer:
      "Le terme \u00ab Sham \u00bb (ou Bilad al-Sham) désigne dans les hadiths la région historique du Levant, englobant la Palestine, la Syrie, le Liban, la Jordanie et une partie de l\u2019Irak. Les savants sont unanimes sur le fait que la Palestine, et en particulier Al-Quds et ses environs, constitue le c\u0153ur de cette terre bénie mentionnée dans le Coran et la Sunna.",
  },
  {
    question:
      "Qui est le groupe victorieux (at-ta\u2019ifa al-mansura) mentionné dans les hadiths ?",
    answer:
      "Le groupe victorieux est une communauté de croyants qui, selon plusieurs hadiths authentiques, restera fermement attachée à la vérité et ne sera pas affectée par ceux qui les trahissent ou les abandonnent. Le Prophète a précisé qu\u2019ils se trouveraient au Sham, et plus spécifiquement à Bayt al-Maqdis (Jérusalem) et ses alentours. Les savants y voient les musulmans qui défendent la vérité dans cette région jusqu\u2019à la fin des temps.",
  },
  {
    question:
      "Quel est le lien entre le Sham et la fin des temps dans les hadiths ?",
    answer:
      "Plusieurs hadiths authentiques placent le Sham au c\u0153ur des événements eschatologiques. Le Prophète a mentionné que le rassemblement (al-hashr) des croyants se fera vers le Sham, que \u2019Isa (Jésus) descendra au minaret blanc à l\u2019est de Damas, et que cette terre restera un bastion de la foi jusqu\u2019à l\u2019Heure. Ces prophéties soulignent le rôle central du Sham dans la vision islamique de la fin des temps.",
  },
  {
    question:
      "Que peut faire un musulman pour la Palestine selon l\u2019islam ?",
    answer:
      "Les savants recommandent de multiplier les invocations (douas) pour les musulmans de Palestine, de se renseigner sur la situation à travers des sources fiables, de soutenir les causes humanitaires conformes à la charia, et de rappeler les mérites de cette terre bénie. L\u2019attachement à la mosquée Al-Aqsa fait partie de la foi du musulman, et la solidarité envers les éprouvés est une obligation morale et religieuse.",
  },
];

export default function HadithPalestineGazaIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-palestine-gaza-islam/#article",
        headline:
          "Hadiths sur la Palestine, Gaza et le Sham en islam : terre bénie et prophéties",
        description:
          "Les hadiths authentiques sur la Palestine, Gaza, Al-Quds et le Sham : mérites, prophéties et enseignements des savants.",
        image: "/images/mosquee-prophete-medine-islam-dome-vert.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-palestine-gaza-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-palestine-gaza-islam/#breadcrumb",
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
            name: "Palestine et Sham",
            item: "https://www.islamreligion.fr/hadith-palestine-gaza-islam",
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
          title="Hadiths sur la Palestine, Gaza et le Sham en islam"
          subtitle="Les enseignements prophétiques sur la terre bénie du Sham, les mérites d&apos;Al-Quds, la mosquée Al-Aqsa, le groupe victorieux et les prophéties eschatologiques selon la Sunna authentique."
          imageSrc="/images/mosquee-prophete-medine-islam-dome-vert.jpg"
          imageAlt="Hadiths sur la Palestine, Gaza et le Sham en islam, terre bénie"
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
                  Palestine et Sham
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
                    Le Coran qualifie la terre du Sham (Palestine, Syrie, Jordanie) de &laquo;&nbsp;terre bénie&nbsp;&raquo; à plusieurs reprises, notamment dans la sourate Al-Isra et la sourate Al-Anbiya.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ a accompli le voyage nocturne (Al-Isra) vers la mosquée Al-Aqsa, confirmant son rang de troisième lieu saint de l&apos;islam.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Plusieurs hadiths authentiques désignent le Sham comme la terre du groupe victorieux (<em>at-ta&apos;ifa al-mansura</em>) qui restera ferme sur la vérité.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les prophéties eschatologiques placent le Sham au centre des événements de la fin des temps, notamment la descente de &apos;Isa ibn Maryam (Jésus).
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de la terre bénie
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il convient de rappeler que le statut sacré de la Palestine et du Sham est d&apos;abord coranique. Allah a qualifié cette terre de &laquo;&nbsp;bénie&nbsp;&raquo; (<em>mubaraka</em>) à plusieurs reprises, y a situé le voyage nocturne du Prophète ﷺ et y a fait résider nombre de Ses prophètes. Ces versets posent le fondement sur lequel s&apos;appuient ensuite les hadiths prophétiques.
                </p>

                <HadithCard
                  arabic="سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا"
                  text="Gloire à Celui qui a fait voyager Son serviteur de nuit, de la Mosquée sacrée à la Mosquée la plus éloignée dont Nous avons béni les alentours, afin de lui montrer certains de Nos signes."
                  source="Coran, sourate Al-Isra (17:1)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondateur établit deux réalités majeures. D&apos;une part, il confirme le rang sacré de la mosquée Al-Aqsa en la nommant explicitement. D&apos;autre part, l&apos;expression &laquo;&nbsp;dont Nous avons béni les alentours&nbsp;&raquo; (<em>barakna hawlahu</em>) étend la bénédiction à toute la région environnante, que les exégètes identifient unanimement comme la terre du Sham. L&apos;imam At-Tabari rapporte que cette bénédiction englobe la fertilité de la terre, l&apos;abondance des rivières et la présence des prophètes qui y ont vécu.
                </p>

                <HadithCard
                  arabic="وَنَجَّيْنَاهُ وَلُوطًا إِلَى الْأَرْضِ الَّتِي بَارَكْنَا فِيهَا لِلْعَالَمِينَ"
                  text="Et Nous le sauvâmes, ainsi que Lot, vers la terre que Nous avons bénie pour les mondes."
                  source="Coran, sourate Al-Anbiya (21:71)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fait référence à la migration du prophète Ibrahim (Abraham) vers la terre du Sham. L&apos;expression &laquo;&nbsp;bénie pour les mondes&nbsp;&raquo; (<em>barakna fiha lil-&apos;alamin</em>) indique que cette bénédiction n&apos;est pas limitée à un peuple ou une époque, mais qu&apos;elle est universelle et permanente. Les savants du tafsir, dont Ibn Kathir et Al-Qurtubi, identifient cette terre comme la Palestine et le Sham au sens large. C&apos;est là que se sont succédé de nombreux prophètes : Ibrahim, Ishaq, Ya&apos;qub, Yusuf, Dawud, Sulayman, Zakariyya, Yahya et &apos;Isa, paix sur eux tous.
                </p>

                <HadithCard
                  arabic="وَأَوْرَثْنَا الْقَوْمَ الَّذِينَ كَانُوا يُسْتَضْعَفُونَ مَشَارِقَ الْأَرْضِ وَمَغَارِبَهَا الَّتِي بَارَكْنَا فِيهَا"
                  text="Et Nous avons fait hériter les gens qui étaient opprimés des contrées orientales et occidentales de la terre que Nous avons bénie."
                  source="Coran, sourate Al-A&apos;raf (7:137)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset, relatif à la délivrance des enfants d&apos;Israël de l&apos;oppression de Pharaon, mentionne une nouvelle fois la terre bénie comme héritage divin accordé aux opprimés. Les exégètes y voient un principe coranique récurrent : Allah accorde cette terre à ceux qui Le craignent et qui endurent l&apos;épreuve avec patience. Cette notion de baraka attachée à une terre spécifique est unique dans le Coran et confère au Sham un statut sans équivalent.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Mérite du Sham       */}
              {/* ============================== */}
              <section id="merite-sham" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le mérite de la terre du Sham selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les hadiths prophétiques confirment et précisent ce que le Coran établit de manière générale sur la terre du Sham. Le Prophète ﷺ a mentionné cette région à de nombreuses reprises, invitant les musulmans à y porter une attention particulière et à reconnaître sa place singulière dans la géographie sacrée de l&apos;islam.
                </p>

                <HadithBlock
                  number={1}
                  title="La terre du Sham, meilleure terre d&apos;Allah"
                  narrator="Abu Darda"
                  arabic="إِنَّ فُسْطَاطَ الْمُسْلِمِينَ يَوْمَ الْمَلْحَمَةِ بِالْغُوطَةِ إِلَى جَانِبِ مَدِينَةٍ يُقَالُ لَهَا دِمَشْقُ مِنْ خَيْرِ مَدَائِنِ الشَّامِ"
                  translation="Le campement des musulmans le jour de la grande bataille se trouvera dans la Ghouta, à côté d&apos;une ville appelée Damas, parmi les meilleures villes du Sham."
                  source="Sunan Abu Dawud, n°4298"
                  grade="sahih"
                  explanation="Ce hadith situe le Sham au centre des événements futurs de la communauté musulmane. La mention de Damas et de la Ghouta comme lieu de rassemblement des croyants lors des grandes épreuves souligne l&apos;importance stratégique et spirituelle de cette région. Les savants y voient la confirmation que le Sham restera une terre de foi et de résistance face aux épreuves, quel que soit le contexte historique."
                />

                <HadithBlock
                  number={2}
                  title="Allah garantit la protection du Sham et de son peuple"
                  narrator="Zayd ibn Thabit"
                  arabic="طُوبَى لِلشَّامِ، طُوبَى لِلشَّامِ، طُوبَى لِلشَّامِ، قَالُوا: يَا رَسُولَ اللَّهِ وَبِمَ ذَلِكَ؟ قَالَ: تِلْكَ مَلَائِكَةُ اللَّهِ بَاسِطُو أَجْنِحَتِهَا عَلَى الشَّامِ"
                  translation="Touba (bonheur) pour le Sham ! Touba pour le Sham ! Touba pour le Sham ! Ils dirent : Ô Messager d&apos;Allah, pourquoi cela ? Il dit : Ce sont les anges d&apos;Allah qui étendent leurs ailes sur le Sham."
                  source="Jami&apos; at-Tirmidhi, n°3954 — Musnad Ahmad, n°21606"
                  grade="sahih"
                  explanation="La triple répétition de &laquo;&nbsp;Touba pour le Sham&nbsp;&raquo; marque l&apos;insistance du Prophète ﷺ sur le mérite de cette terre. Le terme &laquo;&nbsp;touba&nbsp;&raquo; désigne un bonheur immense et durable. L&apos;image des anges déployant leurs ailes sur le Sham symbolise la protection divine permanente. Les savants, dont l&apos;imam Ahmad et Ibn Taymiyya, ont interprété ce hadith comme une preuve que la terre du Sham bénéficie d&apos;une sollicitude divine particulière, perceptible à travers la présence continue de savants, de pieux et de moudjahidine au fil des siècles."
                />

                <HadithBlock
                  number={3}
                  title="La foi se réfugiera au Sham"
                  narrator="Abdullah ibn &apos;Amr ibn al-&apos;As"
                  arabic="سَتَكُونُ هِجْرَةٌ بَعْدَ هِجْرَةٍ، فَخِيَارُ أَهْلِ الْأَرْضِ أَلْزَمُهُمْ مُهَاجَرَ إِبْرَاهِيمَ"
                  translation="Il y aura une hijra après la hijra, et les meilleurs habitants de la terre seront ceux qui s&apos;attacheront au lieu d&apos;émigration d&apos;Ibrahim."
                  source="Sunan Abu Dawud, n°2482"
                  grade="sahih"
                  explanation="Le &laquo;&nbsp;lieu d&apos;émigration d&apos;Ibrahim&nbsp;&raquo; désigne le Sham, où le prophète Ibrahim a émigré en quittant l&apos;Irak. Ce hadith établit un lien entre la hijra du Prophète ﷺ vers Médine et la migration spirituelle permanente des croyants vers la terre bénie. Les savants y voient l&apos;indication que le Sham continuera d&apos;attirer les gens de bien et de foi, même dans les périodes de fitna (épreuves). C&apos;est une invitation à ne pas abandonner cette terre et à y maintenir la présence musulmane."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths dessinent un portrait cohérent de la terre du Sham : une région protégée par les anges, bénie par la présence prophétique et destinée à demeurer un refuge de la foi. Pour approfondir les paroles du Prophète ﷺ et leur transmission, consultez notre article sur{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths du Prophète Muhammad ﷺ et les collections authentiques
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Al-Quds et Al-Aqsa   */}
              {/* ============================== */}
              <section id="quds-aqsa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Al-Quds (Jérusalem) et la mosquée Al-Aqsa
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au sein de la terre bénie du Sham, Al-Quds (Jérusalem) occupe une place à part. Première qibla des musulmans avant la Mecque, lieu du voyage nocturne et de l&apos;ascension céleste du Prophète ﷺ, la ville sainte abrite la mosquée Al-Aqsa, troisième lieu saint de l&apos;islam. Les hadiths suivants précisent les mérites spirituels rattachés à ce lieu.
                </p>

                <HadithBlock
                  number={4}
                  title="Les trois mosquées vers lesquelles on voyage"
                  narrator="Abu Hurayra"
                  arabic="لَا تُشَدُّ الرِّحَالُ إِلَّا إِلَى ثَلَاثَةِ مَسَاجِدَ: مَسْجِدِي هَذَا، وَالْمَسْجِدِ الْحَرَامِ، وَالْمَسْجِدِ الْأَقْصَى"
                  translation="On n&apos;entreprend le voyage (de dévotion) que vers trois mosquées : ma mosquée que voici (Médine), la Mosquée sacrée (La Mecque) et la Mosquée Al-Aqsa (Jérusalem)."
                  source="Sahih Al-Bukhari, n°1189 — Sahih Muslim, n°1397"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus célèbres sur le statut de la mosquée Al-Aqsa. En la plaçant aux côtés de la mosquée Al-Haram à La Mecque et de sa propre mosquée à Médine, le Prophète ﷺ établit un trio sacré indissociable. Les savants en déduisent que la visite de la mosquée Al-Aqsa est une sunna de grande valeur, et que son entretien et sa protection relèvent de la responsabilité collective de la communauté musulmane. Ce hadith est rapporté dans les deux recueils les plus authentiques (Bukhari et Muslim), ce qui en fait un texte d&apos;une autorité incontestée."
                />

                <HadithBlock
                  number={5}
                  title="La deuxième mosquée bâtie sur terre"
                  narrator="Abu Dharr"
                  arabic="قُلْتُ: يَا رَسُولَ اللَّهِ، أَيُّ مَسْجِدٍ وُضِعَ فِي الْأَرْضِ أَوَّلَ؟ قَالَ: الْمَسْجِدُ الْحَرَامُ. قُلْتُ: ثُمَّ أَيٌّ؟ قَالَ: الْمَسْجِدُ الْأَقْصَى. قُلْتُ: كَمْ بَيْنَهُمَا؟ قَالَ: أَرْبَعُونَ سَنَةً"
                  translation="J&apos;ai demandé : Ô Messager d&apos;Allah, quelle mosquée a été édifiée en premier sur terre ? Il dit : La Mosquée sacrée (La Mecque). J&apos;ai dit : Et ensuite ? Il dit : La Mosquée Al-Aqsa. J&apos;ai dit : Combien de temps entre les deux ? Il dit : Quarante ans."
                  source="Sahih Al-Bukhari, n°3366 — Sahih Muslim, n°520"
                  grade="sahih"
                  explanation="Ce hadith établit l&apos;ancienneté de la mosquée Al-Aqsa, qui est la deuxième mosquée construite sur terre après la Mosquée sacrée de La Mecque. L&apos;écart de quarante ans entre les deux fondations place Al-Aqsa dans les origines mêmes de l&apos;adoration d&apos;Allah sur terre. Les savants, dont Ibn Hajar al-Asqalani, expliquent que cette fondation remonte à l&apos;époque des premiers prophètes, bien avant Sulayman (Salomon) qui l&apos;a reconstruite et embellie. Ce hadith renforce la sacralité immémoriale de ce lieu."
                />

                <HadithBlock
                  number={6}
                  title="La valeur de la prière à la mosquée Al-Aqsa"
                  narrator="Abu Darda"
                  arabic="الصَّلَاةُ فِي الْمَسْجِدِ الْحَرَامِ بِمِائَةِ أَلْفِ صَلَاةٍ، وَالصَّلَاةُ فِي مَسْجِدِي بِأَلْفِ صَلَاةٍ، وَالصَّلَاةُ فِي بَيْتِ الْمَقْدِسِ بِخَمْسِمِائَةِ صَلَاةٍ"
                  translation="La prière dans la Mosquée sacrée (La Mecque) équivaut à cent mille prières, la prière dans ma mosquée (Médine) à mille prières, et la prière à Bayt al-Maqdis (Jérusalem) à cinq cents prières."
                  source="Rapporté par At-Tabarani dans Al-Mu&apos;jam al-Kabir — Al-Bazzar"
                  grade="hasan"
                  explanation="Ce hadith quantifie la récompense de la prière dans les trois lieux saints, plaçant Bayt al-Maqdis (la mosquée Al-Aqsa) au troisième rang. Bien que le degré de multiplication varie selon les versions, toutes convergent sur le fait que la prière à Al-Aqsa a une valeur multipliée. Les savants qui ont authentifié ce hadith, dont Al-Mundhiri et Al-Haythami, soulignent que cette multiplication reflète le rang spirituel du lieu auprès d&apos;Allah. C&apos;est un encouragement pour les musulmans à visiter et à prier dans cette mosquée bénie."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La mosquée Al-Aqsa occupe donc une place unique dans la conscience musulmane : première qibla, deuxième mosquée construite sur terre, destination du voyage nocturne et lieu de prière à la récompense multipliée. Pour découvrir les invocations liées à la Palestine et à ses épreuves, consultez notre article sur{" "}
                  <Link href="/doua-palestine-gaza-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les douas pour la Palestine et Gaza
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le hadith, le tafsir et l&apos;histoire islamique avec des professeurs qualifiés pour mieux comprendre les textes sur la terre bénie du Sham."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ========================================= */}
              {/* SECTION : Le groupe victorieux au Sham    */}
              {/* ========================================= */}
              <section id="groupe-victorieux" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le groupe victorieux au Sham
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi les hadiths les plus significatifs sur le Sham figurent ceux qui mentionnent la &laquo;&nbsp;ta&apos;ifa mansura&nbsp;&raquo; (le groupe victorieux), une communauté de croyants qui restera fermement attachée à la vérité dans cette région. Ces hadiths ont été commentés par tous les grands muhaddithun et constituent un pilier de la compréhension islamique du rôle du Sham.
                </p>

                <HadithBlock
                  number={7}
                  title="Un groupe de ma communauté ne cessera d&apos;être victorieux"
                  narrator="Mu&apos;awiya ibn Abi Sufyan"
                  arabic="لَا تَزَالُ طَائِفَةٌ مِنْ أُمَّتِي قَائِمَةً بِأَمْرِ اللَّهِ لَا يَضُرُّهُمْ مَنْ خَذَلَهُمْ أَوْ خَالَفَهُمْ حَتَّى يَأْتِيَ أَمْرُ اللَّهِ وَهُمْ ظَاهِرُونَ عَلَى النَّاسِ"
                  translation="Un groupe de ma communauté ne cessera de s&apos;acquitter du commandement d&apos;Allah. Ne leur nuiront ni ceux qui les abandonneront ni ceux qui s&apos;opposeront à eux, jusqu&apos;à ce que vienne le commandement d&apos;Allah, et ils seront toujours victorieux parmi les gens."
                  source="Sahih Muslim, n°1037 — Sahih Al-Bukhari, n°7311"
                  grade="sahih"
                  explanation="Ce hadith décrit un groupe qui traversera les épreuves sans fléchir. Le Prophète ﷺ précise que ni la trahison des alliés ni l&apos;hostilité des ennemis ne les affaiblira. L&apos;imam Ahmad et d&apos;autres savants ont identifié ce groupe comme étant les gens du Sham, en s&apos;appuyant sur d&apos;autres narrations qui le localisent explicitement. L&apos;expression &laquo;&nbsp;jusqu&apos;à ce que vienne le commandement d&apos;Allah&nbsp;&raquo; indique que cette présence victorieuse perdurera jusqu&apos;à la fin des temps."
                />

                <HadithBlock
                  number={8}
                  title="Le groupe victorieux est au Sham"
                  narrator="Mu&apos;adh ibn Jabal"
                  arabic="لَا تَزَالُ طَائِفَةٌ مِنْ أُمَّتِي ظَاهِرِينَ عَلَى الْحَقِّ، لَا يَضُرُّهُمْ مَنْ خَذَلَهُمْ حَتَّى يَأْتِيَ أَمْرُ اللَّهِ وَهُمْ كَذَلِكَ، قَالَ: وَهُمْ بِالشَّامِ"
                  translation="Un groupe de ma communauté ne cessera d&apos;être victorieux sur la vérité. Ne leur nuira pas celui qui les abandonnera, jusqu&apos;à ce que vienne le commandement d&apos;Allah et ils seront dans cet état. Et ils sont au Sham."
                  source="Sahih Muslim, n°1920"
                  grade="sahih"
                  explanation="Ce hadith est la version la plus explicite sur la localisation du groupe victorieux. La précision &laquo;&nbsp;et ils sont au Sham&nbsp;&raquo; ne laisse aucune ambiguïté. L&apos;imam An-Nawawi, dans son commentaire de Sahih Muslim, confirme que cette localisation est celle de plusieurs compagnons et tabi&apos;in. Ibn Taymiyya a longuement commenté ce hadith, affirmant que le Sham — et particulièrement Bayt al-Maqdis et ses alentours — restera le lieu de ce groupe jusqu&apos;à la descente de &apos;Isa ibn Maryam."
                />

                <HadithBlock
                  number={9}
                  title="Ils sont à Bayt al-Maqdis et aux alentours"
                  narrator="Abu Umama al-Bahili"
                  arabic="لَا تَزَالُ طَائِفَةٌ مِنْ أُمَّتِي عَلَى الْحَقِّ ظَاهِرِينَ، لَعَدُوِّهِمْ قَاهِرِينَ... وَهُمْ بِبَيْتِ الْمَقْدِسِ وَأَكْنَافِ بَيْتِ الْمَقْدِسِ"
                  translation="Un groupe de ma communauté ne cessera d&apos;être sur la vérité, victorieux, dominant leurs ennemis... Et ils sont à Bayt al-Maqdis (Jérusalem) et aux alentours de Bayt al-Maqdis."
                  source="Musnad Ahmad, n°22320 — At-Tabarani"
                  grade="hasan"
                  explanation="Ce hadith précise encore davantage la localisation : non seulement le Sham, mais spécifiquement Bayt al-Maqdis (Jérusalem) et ses environs, ce qui inclut la Palestine et Gaza. Les savants y voient la preuve que la présence musulmane à Jérusalem et dans les territoires palestiniens est une réalité prophétisée et voulue par Allah. L&apos;expression &laquo;&nbsp;dominant leurs ennemis&nbsp;&raquo; (<em>li-&apos;aduwwihim qahirin</em>) indique une victoire qui n&apos;est pas seulement spirituelle mais aussi concrète, même si elle peut prendre du temps à se manifester."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths sur le groupe victorieux sont parmi les plus commentés de la littérature islamique. Ils offrent aux croyants une perspective d&apos;espoir fondée sur la parole prophétique, selon laquelle la terre du Sham ne sera jamais dépourvue de gens attachés à la vérité.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Eschatologie         */}
              {/* ============================== */}
              <section id="eschatologie" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Eschatologie et le Sham dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Sham occupe une place centrale dans les prophéties eschatologiques de l&apos;islam. Plusieurs hadiths authentiques décrivent les événements de la fin des temps en lien direct avec cette terre bénie. La descente de &apos;Isa ibn Maryam (Jésus), le rassemblement des croyants et les grandes épreuves sont situés dans cette géographie sacrée.
                </p>

                <HadithBlock
                  number={10}
                  title="La descente de &apos;Isa ibn Maryam à Damas"
                  narrator="An-Nawwas ibn Sam&apos;an"
                  arabic="فَيَنْزِلُ عِيسَى ابْنُ مَرْيَمَ عِنْدَ الْمَنَارَةِ الْبَيْضَاءِ شَرْقِيَّ دِمَشْقَ"
                  translation="Alors &apos;Isa fils de Maryam descendra près du minaret blanc, à l&apos;est de Damas."
                  source="Sahih Muslim, n°2937"
                  grade="sahih"
                  explanation="Ce hadith, extrait du long récit sur le Dajjal (l&apos;Antéchrist), situe la descente de &apos;Isa ibn Maryam à Damas, au Sham. Le &laquo; minaret blanc &raquo; est un repère géographique précis que les savants ont identifié dans la mosquée omeyyade de Damas ou à proximité. Cette prophétie lie de manière indissociable le Sham à la résolution finale de l&apos;épreuve du Dajjal. Les savants y voient la confirmation que le Sham sera le théâtre de la victoire finale de la vérité sur le mensonge."
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour approfondir les hadiths sur l&apos;épreuve du Dajjal et les signes de la fin des temps, consultez notre article sur{" "}
                  <Link href="/hadith-dajjal-fin-des-temps-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    le Dajjal et la fin des temps en islam
                  </Link>.
                </p>

                <HadithBlock
                  number={11}
                  title="Le rassemblement des croyants vers le Sham"
                  narrator="Abu Dharr"
                  arabic="الشَّامُ أَرْضُ الْمَحْشَرِ وَالْمَنْشَرِ"
                  translation="Le Sham est la terre du rassemblement et de la résurrection."
                  source="Musnad Ahmad, n°21574 — rapporté également par Ibn &apos;Asakir"
                  grade="hasan"
                  explanation="Ce hadith concis mais puissant attribue au Sham le statut de terre où se dérouleront le rassemblement (<em>mahshar</em>) et la résurrection (<em>manshar</em>). Les savants divergent sur le sens exact : certains y voient le rassemblement qui précédera la fin des temps, d&apos;autres le rassemblement du Jour du Jugement. Dans les deux cas, cette prophétie confère au Sham une dimension eschatologique unique qui transcende les considérations géopolitiques temporaires. C&apos;est un rappel que la valeur de cette terre est inscrite dans le décret divin."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Les prophéties eschatologiques sur le Sham ne sont pas de simples récits du futur : elles structurent la vision musulmane du monde et confèrent à cette terre une dimension qui dépasse les conflits humains. Le Prophète ﷺ a voulu que sa communauté sache que le Sham restera au centre de l&apos;histoire jusqu&apos;à la fin des temps.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la Palestine et le Sham
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont consacré des chapitres entiers à la question du Sham et de ses mérites. Leurs commentaires éclairent la portée des hadiths et aident à les situer dans un cadre théologique et historique cohérent.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le Sham est la terre des prophètes, des saints et des combattants sur le sentier d&apos;Allah. C&apos;est là que descendra &apos;Isa fils de Maryam, là que se rassembleront les croyants, et là que le groupe victorieux demeurera sur la vérité. Quiconque quitte le Sham par aversion pour cette terre s&apos;éloigne d&apos;un bien immense.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Taymiyya, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La mention de la ta&apos;ifa mansura au Sham est rapportée par plusieurs compagnons, dont Mu&apos;adh ibn Jabal, et sa chaîne de transmission est authentique. Ce hadith indique que le Sham — et en particulier Bayt al-Maqdis — ne sera jamais privé de gens de vérité, même si les épreuves se multiplient autour d&apos;eux.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La mosquée Al-Aqsa est la deuxième mosquée construite sur terre, et sa fondation précède celle de Sulayman, paix sur lui. Son mérite est attesté par le Coran et la Sunna de manière convergente. Celui qui nie son importance nie un consensus de la communauté.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Les hadiths sur les mérites du Sham sont si nombreux et si solides qu&apos;ils atteignent le degré de tawatur ma&apos;nawi (transmission massive par le sens). Aucun savant sérieux ne peut les ignorer ni minimiser leur portée.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn &apos;Asakir, <em>Tarikh Dimashq</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces paroles de savants montrent que l&apos;attachement au Sham et à Al-Quds n&apos;est pas une position politique mais un fondement théologique enraciné dans les textes. Les muhaddithun, les fuqaha et les historiens convergent sur le statut unique de cette terre dans la vision islamique du monde.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques pour le musulman
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths et versets présentés permettent de dégager des enseignements concrets pour le croyant :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Connaître le statut sacré de la Palestine et du Sham
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La sacralité de cette terre n&apos;est pas une opinion mais un fait textuel établi par le Coran et la Sunna. Chaque musulman devrait connaître les versets et hadiths qui fondent ce statut.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Maintenir le lien avec la mosquée Al-Aqsa
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a encouragé la visite et la prière à la mosquée Al-Aqsa. L&apos;attachement à ce lieu saint fait partie de la foi du musulman, au même titre que l&apos;attachement à La Mecque et à Médine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Invoquer Allah pour les éprouvés de Palestine
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La doua est l&apos;arme du croyant. Multiplier les invocations pour les musulmans de Palestine, de Gaza et du Sham est un acte d&apos;adoration et de solidarité conforme à la Sunna.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Garder espoir à la lumière des prophéties
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les hadiths sur le groupe victorieux et la descente de &apos;Isa ibn Maryam sont des promesses prophétiques. Ils enseignent que les épreuves, aussi longues soient-elles, ne changeront pas le décret divin concernant cette terre.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Étudier les textes avec rigueur scientifique
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le sujet de la Palestine suscite beaucoup d&apos;émotion. Il convient de s&apos;appuyer exclusivement sur des hadiths authentiques et sur les commentaires des savants reconnus, en évitant les récits faibles ou inventés qui circulent sur les réseaux sociaux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Transmettre ces connaissances aux générations futures
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;éducation des enfants sur le statut de la Palestine, d&apos;Al-Quds et de la mosquée Al-Aqsa est une responsabilité. Ces connaissances doivent être transmises de manière apaisée, fondée sur les textes et dénuée de haine.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur la Palestine et le Sham dans leur langue originale et approfondissez votre connaissance des textes prophétiques."
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
                  title="Les hadiths sur le Dajjal et la fin des temps"
                  description="Les prophéties du Prophète ﷺ sur l&apos;Antéchrist, les signes de l&apos;Heure et les événements eschatologiques."
                  href="/hadith-dajjal-fin-des-temps-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Douas pour la Palestine et Gaza"
                  description="Les invocations authentiques pour les éprouvés de Palestine, les opprimés et la terre bénie du Sham."
                  href="/doua-palestine-gaza-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
