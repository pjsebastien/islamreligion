import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title:
    "Doua pour le mort en islam : invocations pour le défunt et la famille endeuillée",
  description:
    "Découvrez les doua pour le mort en islam : invocations authentiques pour le défunt, prière funéraire (janaza), visite du cimetière, doua pour les parents décédés et consolation face au deuil.",
  openGraph: {
    title:
      "Doua pour le mort en islam : invocations pour le défunt et la famille endeuillée",
    description:
      "Découvrez les doua pour le mort en islam : invocations authentiques pour le défunt, prière funéraire (janaza), visite du cimetière, doua pour les parents décédés et consolation face au deuil.",
    url: "https://www.islamreligion.fr/doua-mort-defunt-islam",
    images: [
      {
        url: "/images/priere-islam-doua-mosquee-silhouette.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-mort-defunt-islam",
  },
};

const tocItems = [
  {
    id: "mort-islam-importance-doua",
    label: "La mort en islam et l\u2019importance de la doua",
  },
  {
    id: "doua-moment-deces",
    label: "Doua à dire au moment du décès",
  },
  {
    id: "doua-priere-funeraire",
    label: "Doua de la prière funéraire (janaza)",
  },
  {
    id: "doua-visite-cimetiere",
    label: "Doua en visitant le cimetière",
  },
  {
    id: "doua-parents-decedes",
    label: "Doua pour les parents décédés",
  },
  {
    id: "oeuvres-profitent-mort",
    label: "Les \u0153uvres qui profitent au mort",
  },
  {
    id: "consolation-patience-deuil",
    label: "Consolation et patience face au deuil",
  },
  {
    id: "faq",
    label: "Questions fréquentes",
  },
];

const faqItems = [
  {
    question:
      "Quelle est la doua à dire quand quelqu\u2019un meurt en islam ?",
    answer:
      "Lorsqu&apos;un musulman apprend la nouvelle d&apos;un décès, il doit prononcer : \u00ab Inna lillahi wa inna ilayhi raji&apos;un \u00bb (Certes, nous appartenons à Allah et c&apos;est vers Lui que nous retournerons). Cette formule, tirée du Coran (sourate Al-Baqarah, 2:156), est la première invocation recommandée. On peut y ajouter la doua prophétique demandant à Allah de récompenser l&apos;éprouvé et de lui accorder quelque chose de meilleur.",
  },
  {
    question:
      "Peut-on faire une doua pour le mort en français ?",
    answer:
      "Oui, en dehors de la prière rituelle (salat), il est permis d&apos;invoquer Allah dans n&apos;importe quelle langue, y compris le français. L&apos;essentiel est la sincérité du c\u0153ur et la concentration dans la supplication. Cependant, il est recommandé d&apos;apprendre les formulations arabes authentiques transmises par le Prophète (\u2e17) pour bénéficier pleinement de leur mérite.",
  },
  {
    question:
      "Comment faire la doua lors de la prière funéraire (salat al-janaza) ?",
    answer:
      "La prière funéraire comporte quatre takbirat (Allahu Akbar). Après le premier takbir, on récite la Fatiha. Après le deuxième, on fait la prière sur le Prophète (\u2e17). Après le troisième, on invoque Allah en faveur du défunt avec les doua authentiques rapportées dans la Sunna, notamment : \u00ab Allahumma ighfir lihayyina wa mayyitina... \u00bb. Après le quatrième takbir, on fait le salam.",
  },
  {
    question:
      "La doua pour le mort lui parvient-elle vraiment ?",
    answer:
      "Oui, selon le consensus des savants musulmans, les invocations des vivants parviennent aux morts et leur profitent. Le Prophète (\u2e17) a dit : \u00ab Lorsqu&apos;un homme meurt, ses \u0153uvres s&apos;interrompent sauf trois : une aumône continue (sadaqa jariya), une science dont on tire profit, ou un enfant pieux qui invoque pour lui \u00bb (Muslim). Cela confirme que la doua de l&apos;enfant, et plus largement des vivants, profite au défunt.",
  },
  {
    question:
      "Quelle sourate réciter pour les morts en islam ?",
    answer:
      "La sourate Al-Fatiha et la sourate Ya-Sin sont fréquemment récitées en faveur des défunts, bien que les savants aient des avis divergents sur la récitation du Coran pour les morts. Ce qui fait consensus, c&apos;est la valeur de la doua (invocation) pour le défunt, demandant à Allah Son pardon et Sa miséricorde. Il est aussi recommandé de multiplier les aumônes et les bonnes \u0153uvres en leur nom.",
  },
  {
    question:
      "Combien de temps dure le deuil en islam ?",
    answer:
      "Le deuil en islam dure trois jours pour les proches en général. Pendant cette période, il est recommandé de se montrer patient, de multiplier les invocations pour le défunt et d&apos;accepter les condoléances. Pour l&apos;épouse du défunt, la période de deuil (&apos;idda) est de quatre mois et dix jours, conformément au Coran (sourate Al-Baqarah, 2:234).",
  },
  {
    question:
      "Peut-on visiter les tombes et invoquer pour les morts ?",
    answer:
      "Oui, la visite des tombes est recommandée en islam. Le Prophète (\u2e17) a dit : \u00ab Visitez les tombes, car elles vous rappellent l&apos;au-delà \u00bb (Muslim). Lors de la visite, on prononce le salam aux habitants des tombes et on invoque Allah pour eux en demandant le pardon et la miséricorde. Il est interdit en revanche d&apos;invoquer les morts eux-mêmes ou de leur demander quoi que ce soit.",
  },
];

export default function DouaMortDefuntIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-mort-defunt-islam/#article",
        headline:
          "Doua pour le mort en islam : invocations pour le défunt et la famille endeuillée",
        description:
          "Découvrez les doua pour le mort en islam : invocations authentiques pour le défunt, prière funéraire, visite du cimetière et consolation face au deuil.",
        image: "/images/priere-islam-doua-mosquee-silhouette.jpg",
        datePublished: "2026-03-09",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-mort-defunt-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-mort-defunt-islam/#breadcrumb",
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
            name: "Doua pour le mort",
            item: "https://www.islamreligion.fr/doua-mort-defunt-islam",
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
          title="Doua pour le mort en islam : invocations pour le défunt"
          subtitle="Les invocations authentiques issues du Coran et de la Sunna pour accompagner le défunt, consoler la famille endeuillée et implorer le pardon d&apos;Allah."
          imageSrc="/images/priere-islam-doua-mosquee-silhouette.jpg"
          imageAlt="Silhouette de prière et doua dans une mosquée en islam"
          compact
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 xl:grid-cols-[300px_1fr]">
            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article className="prose prose-lg max-w-none">
              {/* ========== SECTION 1 ========== */}
              <section id="mort-islam-importance-doua" className="scroll-mt-24">
                <h2 className="mt-0 text-2xl font-bold text-primary sm:text-3xl">
                  La mort en islam et l&apos;importance de la doua pour le
                  défunt
                </h2>

                <p className="mt-4 leading-relaxed text-foreground">
                  La mort (<em>al-mawt</em>) occupe une place centrale dans la
                  spiritualité islamique. Loin d&apos;être une fin absolue, elle
                  constitue un passage vers la vie éternelle, une transition que
                  chaque âme est destinée à accomplir. Allah dit dans le Coran :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ۗ ثُمَّ إِلَيْنَا
                    تُرْجَعُونَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Kullu nafsin dha&apos;iqatu
                    al-mawt, thumma ilayna turja&apos;un
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Toute âme goûtera la mort, puis c&apos;est vers
                    Nous que vous serez ramenés.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate Al-Ankabut (29:57)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Face à cette réalité inéluctable, l&apos;islam enseigne au
                  croyant une attitude faite de <strong>patience</strong> (
                  <em>sabr</em>), de <strong>soumission à la volonté divine</strong>{" "}
                  et de <strong>doua pour le défunt</strong>. La{" "}
                  <Link href="/doua-islam" className="text-primary underline">
                    doua en islam
                  </Link>{" "}
                  est l&apos;un des actes d&apos;adoration les plus puissants,
                  et elle revêt une importance toute particulière lorsqu&apos;il
                  s&apos;agit d&apos;intercéder en faveur de ceux qui nous ont
                  quittés.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad ﷺ a encouragé les musulmans à invoquer
                  Allah en faveur des morts, car les défunts ne peuvent plus
                  accomplir de bonnes actions par eux-mêmes. Ils dépendent alors
                  des invocations de leurs proches, de leurs enfants et de la
                  communauté musulmane toute entière. Chaque{" "}
                  <strong>doua pour le mort</strong> est comme un cadeau
                  spirituel qui traverse les barrières du monde visible pour
                  atteindre l&apos;âme du défunt dans le Barzakh (la vie
                  intermédiaire entre la mort et la résurrection).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans cet article, nous vous présentons les{" "}
                  <strong>
                    invocations authentiques pour le mort en islam
                  </strong>
                  , tirées du Coran et de la Sunna prophétique. Que vous
                  souhaitiez accompagner un proche dans ses derniers instants,
                  accomplir la prière funéraire (salat al-janaza), visiter un
                  cimetière ou simplement invoquer Allah pour vos parents
                  décédés, vous trouverez ici les formules appropriées avec leur
                  texte arabe, leur phonétique et leur traduction.
                </p>

                <Image
                  src="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
                  alt="Mains levées en doua pour le mort avec une lumière subtile en islam"
                  width={800}
                  height={450}
                  className="mt-6 rounded-xl"
                />
              </section>

              {/* ========== SECTION 2 ========== */}
              <section id="doua-moment-deces" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                  Doua à dire au moment du décès
                </h2>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsqu&apos;un musulman apprend la nouvelle d&apos;un décès ou
                  se trouve auprès d&apos;un mourant, la première parole à
                  prononcer est la formule de l&apos;istirja&apos;, ordonnée par
                  Allah Lui-même dans le Coran :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Inna lillahi wa inna ilayhi
                    raji&apos;un
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Certes, nous appartenons à Allah et c&apos;est
                    vers Lui que nous retournerons.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate Al-Baqarah (2:156)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette formule exprime la soumission totale du croyant à la
                  volonté d&apos;Allah. Elle reconnaît que toute vie Lui
                  appartient et que tout retour se fait vers Lui. Le Prophète ﷺ
                  a enseigné qu&apos;il faut compléter cette formule par une
                  invocation spécifique :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي
                    خَيْرًا مِنْهَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma&apos;jurni fi
                    musibati wa akhlif li khayran minha
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, récompense-moi dans mon épreuve et
                    accorde-moi quelque chose de meilleur en
                    remplacement.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (918)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Umm Salama (qu&apos;Allah soit satisfait d&apos;elle) rapporte
                  que le Prophète ﷺ a dit :{" "}
                  <em>
                    &laquo;&nbsp;Il n&apos;y a pas un serviteur qui est touché
                    par une épreuve et qui dit : Inna lillahi wa inna ilayhi
                    raji&apos;un, Allahumma&apos;jurni fi musibati wa akhlif li
                    khayran minha, sans qu&apos;Allah ne le récompense dans son
                    épreuve et ne lui accorde quelque chose de
                    meilleur.&nbsp;&raquo;
                  </em>{" "}
                  (Muslim). Umm Salama elle-même, après le décès de son époux
                  Abu Salama, prononça cette invocation et Allah lui accorda par
                  la suite le mariage avec le Prophète ﷺ, le meilleur des
                  hommes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est également recommandé, lorsque l&apos;on se trouve au
                  chevet d&apos;un mourant, de lui souffler doucement la{" "}
                  <strong>shahada</strong> (attestation de foi) en disant :{" "}
                  <em>&laquo;&nbsp;La ilaha illa Allah&nbsp;&raquo;</em>. Le
                  Prophète ﷺ a dit :
                </p>

                <HadithCard
                  arabic="لَقِّنُوا مَوْتَاكُمْ لَا إِلَهَ إِلَّا اللَّهُ"
                  text="Soufflez à vos mourants (la parole) : La ilaha illa Allah (il n&apos;y a de divinité qu&apos;Allah)."
                  source="Rapporté par Muslim (916)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Celui dont les dernières paroles en ce monde sont{" "}
                  <em>&laquo;&nbsp;La ilaha illa Allah&nbsp;&raquo;</em> entrera
                  au Paradis, comme l&apos;a promis le Prophète ﷺ dans un hadith
                  rapporté par Abu Dawud. C&apos;est pourquoi il est essentiel
                  d&apos;accompagner le mourant avec douceur et de l&apos;aider
                  à prononcer cette attestation de foi.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ========== SECTION 3 ========== */}
              <section
                id="doua-priere-funeraire"
                className="mt-12 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                  Doua de la prière funéraire (salat al-janaza)
                </h2>

                <p className="mt-4 leading-relaxed text-foreground">
                  La <strong>prière funéraire</strong> (<em>salat al-janaza</em>)
                  est une obligation communautaire (<em>fard kifaya</em>) en
                  islam. Elle se distingue des autres prières par l&apos;absence
                  de rukû&apos; (inclinaison) et de sujûd (prosternation). Elle
                  se compose de quatre takbirat, après chacun desquels on récite
                  des invocations spécifiques. La doua la plus importante est
                  celle prononcée après le troisième takbir, où l&apos;on
                  invoque Allah en faveur du défunt.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voici la <strong>doua complète de la prière funéraire</strong>,
                  rapportée par Abu Hurayra (qu&apos;Allah soit satisfait de
                  lui) :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا
                    وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا
                    وَذَكَرِنَا وَأُنْثَانَا، اللَّهُمَّ مَنْ أَحْيَيْتَهُ
                    مِنَّا فَأَحْيِهِ عَلَى الْإِسْلَامِ وَمَنْ
                    تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الْإِيمَانِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ighfir lihayyina wa
                    mayyitina wa shahidina wa gha&apos;ibina wa saghirina wa
                    kabirina wa dhakarinaa wa unthana. Allahumma man ahyaytahu
                    minna fa ahyihi &apos;ala al-islam, wa man tawaffaytahu
                    minna fa tawaffahu &apos;ala al-iman
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, pardonne à nos vivants et à nos morts,
                    à ceux d&apos;entre nous qui sont présents et à ceux qui
                    sont absents, à nos jeunes et à nos vieux, à nos hommes et à
                    nos femmes. Ô Allah, celui d&apos;entre nous que Tu fais
                    vivre, fais-le vivre sur l&apos;islam, et celui d&apos;entre
                    nous que Tu fais mourir, fais-le mourir sur la
                    foi.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (3201), at-Tirmidhi (1024) et Ibn
                    Majah (1498)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Une autre doua authentique, rapportée par &apos;Awf ibn Malik
                  (qu&apos;Allah soit satisfait de lui), est particulièrement
                  complète et émouvante. Le Prophète ﷺ la prononça lors
                  d&apos;une prière funéraire :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ
                    وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ
                    مُدْخَلَهُ وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ
                    وَالْبَرَدِ وَنَقِّهِ مِنَ الْخَطَايَا كَمَا
                    يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ
                    وَأَبْدِلْهُ دَارًا خَيْرًا مِنْ دَارِهِ وَأَهْلًا
                    خَيْرًا مِنْ أَهْلِهِ وَزَوْجًا خَيْرًا مِنْ زَوْجِهِ
                    وَأَدْخِلْهُ الْجَنَّةَ وَأَعِذْهُ مِنْ عَذَابِ
                    الْقَبْرِ وَعَذَابِ النَّارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ighfir lahu
                    warhamhu wa &apos;afihi wa&apos;fu &apos;anhu wa akrim
                    nuzulahu wa wassi&apos; mudkhalahu waghsilhu bil-ma&apos;i
                    wa ath-thalji wal-barad, wa naqqihi minal-khataya kama
                    yunaqqath-thawbul-abyadhu minad-danas, wa abdilhu daran
                    khayran min darihi wa ahlan khayran min ahlihi wa zawjan
                    khayran min zawjihi, wa adkhilhul-jannata wa a&apos;idhhu
                    min &apos;adhabil-qabri wa &apos;adhabin-nar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, pardonne-lui et accorde-lui Ta
                    miséricorde. Accorde-lui le salut et le pardon.
                    Honore sa demeure et élargis son entrée. Lave-le
                    avec l&apos;eau, la neige et la grêle, et purifie-le de
                    ses péchés comme on purifie le vêtement blanc de la
                    souillure. Donne-lui une demeure meilleure que la sienne,
                    une famille meilleure que la sienne et une épouse meilleure
                    que la sienne. Fais-le entrer au Paradis et protège-le du
                    châtiment de la tombe et du châtiment du
                    Feu.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (963)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  &apos;Awf ibn Malik dit à propos de cette invocation :{" "}
                  <em>
                    &laquo;&nbsp;J&apos;ai tellement souhaité être ce mort
                    (tant l&apos;invocation était belle et
                    complète).&nbsp;&raquo;
                  </em>{" "}
                  Cette doua est l&apos;une des plus complètes et des plus
                  émouvantes que l&apos;on puisse adresser à Allah en faveur
                  d&apos;un défunt. Elle couvre le pardon, la miséricorde, la
                  purification, l&apos;amélioration de sa condition dans
                  l&apos;au-delà et la protection contre le châtiment.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est important de noter que pour la prière funéraire sur un{" "}
                  <strong>enfant décédé</strong>, on ajoute une invocation
                  spécifique demandant à Allah de le faire intercesseur pour ses
                  parents et de le placer sous la garde du prophète Ibrahim
                  (paix sur lui). La{" "}
                  <Link href="/doua-islam" className="text-primary underline">
                    doua en islam
                  </Link>{" "}
                  s&apos;adapte ainsi aux différentes situations que traverse le
                  croyant.
                </p>
              </section>

              {/* ========== SECTION 4 ========== */}
              <section
                id="doua-visite-cimetiere"
                className="mt-12 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                  Doua en visitant le cimetière
                </h2>

                <p className="mt-4 leading-relaxed text-foreground">
                  La visite des cimetières est un acte recommandé (
                  <em>mustahabb</em>) en islam. Le Prophète ﷺ a encouragé cette
                  pratique en disant :{" "}
                  <em>
                    &laquo;&nbsp;Je vous avais interdit de visiter les tombes,
                    mais visitez-les désormais, car elles rappellent
                    l&apos;au-delà.&nbsp;&raquo;
                  </em>{" "}
                  (Muslim). Cette visite est l&apos;occasion de méditer sur la
                  brièveté de la vie, de se rappeler sa propre fin et surtout
                  d&apos;invoquer Allah en faveur des défunts.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En entrant au cimetière, le musulman prononce le{" "}
                  <strong>salam aux habitants des tombes</strong> avec cette
                  invocation authentique :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    السَّلَامُ عَلَيْكُمْ يَا أَهْلَ الدِّيَارِ مِنَ
                    الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ
                    اللَّهُ بِكُمْ لَلَاحِقُونَ، نَسْأَلُ اللَّهَ لَنَا
                    وَلَكُمُ الْعَافِيَةَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Assalamu &apos;alaykum ya ahla
                    ad-diyar min al-mu&apos;minin wal-muslimin, wa inna in
                    sha&apos;a Allahu bikum lalahiqun, nas&apos;alu Allaha lana
                    wa lakumu al-&apos;afiyah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Que la paix soit sur vous, ô habitants de ces
                    demeures, parmi les croyants et les musulmans. Et nous, si
                    Allah le veut, nous vous rejoindrons. Nous demandons à Allah
                    le salut pour nous et pour vous.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (975)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Une autre version, rapportée par &apos;A&apos;isha
                  (qu&apos;Allah soit satisfait d&apos;elle), ajoute une demande
                  de pardon :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    السَّلَامُ عَلَيْكُمْ دَارَ قَوْمٍ مُؤْمِنِينَ
                    وَأَتَاكُمْ مَا تُوعَدُونَ غَدًا مُؤَجَّلُونَ
                    وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ،
                    اللَّهُمَّ اغْفِرْ لِأَهْلِ بَقِيعِ الْغَرْقَدِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Assalamu &apos;alaykum dara
                    qawmin mu&apos;minin, wa atakum ma tu&apos;adun, ghadan
                    mu&apos;ajjalun, wa inna in sha&apos;a Allahu bikum
                    lahiqun. Allahumma ighfir li ahli Baqi&apos;
                    al-Gharqad
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Que la paix soit sur vous, demeure d&apos;un
                    peuple croyant. Ce qui vous était promis vous est parvenu,
                    demain vous sera accordé un délai, et nous, si Allah le
                    veut, nous vous rejoindrons. Ô Allah, pardonne aux habitants
                    de Baqi&apos; al-Gharqad.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (974)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces invocations montrent l&apos;importance du lien entre les
                  vivants et les morts en islam. Le croyant salue les défunts
                  comme s&apos;ils étaient vivants, reconnaissant que la mort
                  n&apos;est qu&apos;une étape et que tous finiront par se
                  retrouver devant Allah. La visite des tombes est aussi
                  l&apos;occasion d&apos;un{" "}
                  <strong>rappel spirituel puissant</strong> qui pousse le
                  croyant à se préparer pour sa propre rencontre avec son
                  Seigneur.
                </p>

                <Image
                  src="/images/mains-priere-doua-islam-invocation.jpg"
                  alt="Mains en prière pour invoquer Allah en faveur du défunt"
                  width={800}
                  height={450}
                  className="mt-6 rounded-xl"
                />
              </section>

              {/* ========== SECTION 5 ========== */}
              <section
                id="doua-parents-decedes"
                className="mt-12 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                  Doua pour les parents décédés
                </h2>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parmi les invocations les plus importantes en islam figure
                  celle en faveur des <strong>parents décédés</strong>. Le lien
                  entre l&apos;enfant et ses parents ne s&apos;arrête pas à la
                  mort. Au contraire, l&apos;islam enseigne que l&apos;un des
                  plus grands devoirs de l&apos;enfant envers ses parents
                  après leur décès est de multiplier les{" "}
                  <strong>doua pour le mort</strong> en leur faveur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah a révélé dans le Coran une invocation que chaque enfant
                  devrait connaître et répéter régulièrement pour ses parents :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi irhamhuma kama
                    rabbayani saghiran
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais-leur miséricorde comme ils
                    m&apos;ont élevé tout petit.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate Al-Isra (17:24)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation coranique est d&apos;une beauté et d&apos;une
                  profondeur remarquables. Elle établit un parallèle entre la
                  miséricorde divine et la tendresse parentale : de même que les
                  parents ont pris soin de leur enfant dans sa faiblesse et sa
                  petitesse, l&apos;enfant demande à Allah d&apos;envelopper ses
                  parents de Sa miséricorde infinie. C&apos;est un acte de
                  reconnaissance (<em>birr al-walidayn</em>) qui se prolonge
                  au-delà de la vie terrestre.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète ﷺ a également mentionné d&apos;autres moyens de
                  faire du bien à ses parents après leur décès. Abu Usayd
                  as-Sa&apos;idi (qu&apos;Allah soit satisfait de lui) rapporte
                  qu&apos;un homme demanda au Prophète ﷺ :{" "}
                  <em>
                    &laquo;&nbsp;Reste-t-il un moyen de faire du bien à mes
                    parents après leur mort ?&nbsp;&raquo;
                  </em>{" "}
                  Le Prophète ﷺ répondit :
                </p>

                <HadithCard
                  arabic="نَعَمْ: الصَّلَاةُ عَلَيْهِمَا وَالْاسْتِغْفَارُ لَهُمَا وَإِنْفَاذُ عَهْدِهِمَا مِنْ بَعْدِهِمَا وَصِلَةُ الرَّحِمِ الَّتِي لَا تُوصَلُ إِلَّا بِهِمَا وَإِكْرَامُ صَدِيقِهِمَا"
                  text="Oui : prier pour eux, demander le pardon pour eux, exécuter leurs engagements après eux, maintenir les liens de parenté qui ne se maintiennent que par eux, et honorer leurs amis."
                  source="Rapporté par Abu Dawud (5142)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith montre que la piété filiale (<em>birr</em>) ne
                  s&apos;arrête pas à la mort des parents. Le musulman peut
                  continuer à honorer ses parents décédés en invoquant Allah pour
                  eux, en accomplissant des aumônes en leur nom, en maintenant
                  les liens familiaux et en honorant les amis de ses parents.
                  Chacun de ces actes constitue une forme de{" "}
                  <strong>doua pour le mort</strong> qui profite directement au
                  défunt.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  On peut également réciter cette invocation complète issue de la
                  Sunna pour ses parents :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ
                    يَوْمَ يَقُومُ الْحِسَابُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana ighfir li wa
                    liwalidayya wa lil-mu&apos;minin yawma yaqumu al-hisab
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô notre Seigneur, pardonne-moi, ainsi qu&apos;à
                    mes parents et aux croyants, le Jour où se dressera le
                    Compte.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate Ibrahim (14:41)
                  </p>
                </div>
              </section>

              {/* ========== SECTION 6 ========== */}
              <section
                id="oeuvres-profitent-mort"
                className="mt-12 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                  Les \u0153uvres qui profitent au mort
                </h2>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète ﷺ a enseigné que lorsqu&apos;un être humain meurt,
                  toutes ses actions s&apos;arrêtent, à l&apos;exception de
                  trois choses qui continuent de lui profiter dans sa tombe :
                </p>

                <HadithCard
                  arabic="إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ: إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ أَوْ عِلْمٍ يُنْتَفَعُ بِهِ أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ"
                  text="Lorsque le fils d&apos;Adam meurt, ses actions s&apos;interrompent sauf trois : une aumône continue (sadaqa jariya), une science dont on tire profit, ou un enfant pieux qui invoque pour lui."
                  source="Rapporté par Muslim (1631)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental, rapporté dans le Sahih Muslim, établit
                  les trois catégories d&apos;\u0153uvres qui traversent la
                  barrière de la mort pour continuer à bénéficier au défunt :
                </p>

                <ul className="mt-4 list-disc space-y-3 pl-6 text-foreground">
                  <li>
                    <strong>La sadaqa jariya (aumône continue)</strong> : il
                    s&apos;agit d&apos;une aumône dont les bénéfices perdurent
                    après la mort, comme la construction d&apos;un puits, la
                    plantation d&apos;un arbre, la construction d&apos;une
                    mosquée ou le financement d&apos;un projet éducatif. Les
                    proches du défunt peuvent également accomplir une sadaqa
                    jariya en son nom.
                  </li>
                  <li>
                    <strong>Une science dont on tire profit</strong> : tout
                    enseignement bénéfique que le défunt a transmis de son
                    vivant continue de lui rapporter des récompenses tant que les
                    gens en profitent. Cela inclut l&apos;enseignement du Coran,
                    la rédaction d&apos;ouvrages utiles ou la transmission de
                    connaissances religieuses. L&apos;
                    <Link
                      href="/apprendre-science-religieuse-islam"
                      className="text-primary underline"
                    >
                      apprentissage de la science religieuse
                    </Link>{" "}
                    est ainsi un investissement pour la vie éternelle.
                  </li>
                  <li>
                    <strong>Un enfant pieux qui invoque pour lui</strong> : la{" "}
                    <strong>doua de l&apos;enfant pour son parent
                    décédé</strong> est l&apos;un des plus grands bienfaits
                    qu&apos;un enfant puisse offrir à ses parents. C&apos;est
                    pourquoi l&apos;éducation islamique des enfants est un
                    investissement à long terme qui profite aux parents
                    eux-mêmes après leur mort.
                  </li>
                </ul>

                <p className="mt-4 leading-relaxed text-foreground">
                  En plus de ces trois catégories, les savants ont mentionné
                  d&apos;autres actes qui profitent au mort, notamment :
                </p>

                <ul className="mt-4 list-disc space-y-3 pl-6 text-foreground">
                  <li>
                    <strong>Le pèlerinage (hajj) en son nom</strong> : il est
                    permis d&apos;accomplir le hajj ou la &apos;umra au nom
                    d&apos;un parent décédé qui n&apos;a pas pu l&apos;accomplir
                    de son vivant, comme l&apos;a confirmé le Prophète ﷺ.
                  </li>
                  <li>
                    <strong>Le jeûne en son nom</strong> : si le défunt avait des
                    jours de jeûne à rattraper, ses héritiers peuvent jeûner en
                    son nom, selon le hadith rapporté par al-Bukhari et Muslim.
                  </li>
                  <li>
                    <strong>Le remboursement de ses dettes</strong> : s&apos;il
                    avait des dettes envers des personnes, il est du devoir des
                    héritiers de les rembourser, car la dette empêche l&apos;âme
                    de trouver la sérénité.
                  </li>
                  <li>
                    <strong>L&apos;aumône en son nom</strong> : donner en charité
                    au nom du défunt lui profite directement. Sa&apos;d ibn
                    &apos;Ubada demanda au Prophète ﷺ :{" "}
                    <em>
                      &laquo;&nbsp;Ma mère est décédée, quelle est la meilleure
                      aumône ?&nbsp;&raquo;
                    </em>{" "}
                    Le Prophète ﷺ répondit :{" "}
                    <em>&laquo;&nbsp;L&apos;eau.&nbsp;&raquo;</em> Sa&apos;d
                    creusa alors un puits et dit :{" "}
                    <em>
                      &laquo;&nbsp;Ceci est pour la mère de Sa&apos;d.&nbsp;&raquo;
                    </em>{" "}
                    (Abu Dawud).
                  </li>
                </ul>

                <p className="mt-4 leading-relaxed text-foreground">
                  Tous ces actes montrent que l&apos;islam offre de nombreuses
                  voies pour continuer à faire du bien à nos proches décédés.
                  La <strong>doua pour le mort</strong> reste cependant
                  l&apos;acte le plus accessible et le plus régulier que chaque
                  musulman peut accomplir, à tout moment et en tout lieu, sans
                  condition ni coût matériel.
                </p>
              </section>

              {/* ========== SECTION 7 ========== */}
              <section
                id="consolation-patience-deuil"
                className="mt-12 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                  Consolation et patience face au deuil
                </h2>

                <p className="mt-4 leading-relaxed text-foreground">
                  Perdre un être cher est l&apos;une des épreuves les plus
                  douloureuses de la vie. L&apos;islam reconnaît pleinement
                  cette souffrance et ne demande pas au croyant de réprimer sa
                  tristesse. Le Prophète ﷺ lui-même a pleuré la mort de son fils
                  Ibrahim et a dit :
                </p>

                <HadithCard
                  arabic="إِنَّ الْعَيْنَ تَدْمَعُ وَالْقَلْبَ يَحْزَنُ وَلَا نَقُولُ إِلَّا مَا يَرْضَى رَبُّنَا وَإِنَّا بِفِرَاقِكَ يَا إِبْرَاهِيمُ لَمَحْزُونُونَ"
                  text="L&apos;oeil verse des larmes, le coeur est triste, mais nous ne disons que ce qui satisfait notre Seigneur. Et nous sommes, par ta séparation ô Ibrahim, certes attristés."
                  source="Rapporté par al-Bukhari (1303) et Muslim (2315)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith nous enseigne un principe fondamental : pleurer et
                  ressentir de la tristesse face à la mort est parfaitement
                  naturel et permis en islam. Ce qui est interdit, c&apos;est
                  de se lamenter de manière excessive (<em>niyaha</em>), de
                  frapper ses joues, de déchirer ses vêtements ou de
                  prononcer des paroles de mécontentement envers le décret
                  divin. La distinction est entre la{" "}
                  <strong>tristesse naturelle</strong>, qui est humaine, et la{" "}
                  <strong>contestation du destin</strong>, qui est interdite.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour consoler une personne endeuillée, le musulman peut lui
                  adresser la formule de condoléances suivante :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    إِنَّ لِلَّهِ مَا أَخَذَ وَلَهُ مَا أَعْطَى وَكُلُّ
                    شَيْءٍ عِنْدَهُ بِأَجَلٍ مُسَمًّى فَلْتَصْبِرْ
                    وَلْتَحْتَسِبْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Inna lillahi ma akhadha wa
                    lahu ma a&apos;ta, wa kullu shay&apos;in &apos;indahu
                    bi ajalin musamman, faltasbir waltahtasib
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Certes, à Allah appartient ce qu&apos;Il a
                    repris et à Lui appartient ce qu&apos;Il a donné, et toute
                    chose auprès de Lui a un terme fixé. Qu&apos;elle patiente
                    et qu&apos;elle espère la récompense
                    d&apos;Allah.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (1284) et Muslim (923)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam offre également une consolation immense aux
                  parents qui perdent un enfant. Le Prophète ﷺ a annoncé une
                  récompense extraordinaire pour celui qui fait preuve de
                  patience dans cette épreuve :
                </p>

                <HadithCard
                  arabic="مَا مِنْ مُسْلِمَيْنِ يَمُوتُ لَهُمَا ثَلَاثَةٌ مِنَ الْوَلَدِ لَمْ يَبْلُغُوا الْحِنْثَ إِلَّا أَدْخَلَهُمَا اللَّهُ الْجَنَّةَ بِفَضْلِ رَحْمَتِهِ إِيَّاهُمْ"
                  text="Il n&apos;y a pas deux musulmans à qui meurent trois enfants n&apos;ayant pas atteint l&apos;âge de la puberté sans qu&apos;Allah ne les fasse entrer au Paradis par la grâce de Sa miséricorde envers eux."
                  source="Rapporté par al-Bukhari (1248) et Muslim (2632)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La patience (<em>sabr</em>) face au deuil ne signifie pas
                  l&apos;indifférence. Elle signifie accepter le décret
                  d&apos;Allah tout en ressentant la douleur, continuer à
                  invoquer Allah pour le défunt et transformer cette épreuve en
                  source de rapprochement avec le Créateur. Celui qui fait preuve
                  de patience face à la perte d&apos;un être cher recevra une
                  récompense immense, comme l&apos;indique ce verset :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    وَبَشِّرِ الصَّابِرِينَ ﴿١٥٥﴾ الَّذِينَ إِذَا
                    أَصَابَتْهُمْ مُصِيبَةٌ قَالُوا إِنَّا لِلَّهِ
                    وَإِنَّا إِلَيْهِ رَاجِعُونَ ﴿١٥٦﴾ أُولَٰئِكَ
                    عَلَيْهِمْ صَلَوَاتٌ مِنْ رَبِّهِمْ وَرَحْمَةٌ ۖ
                    وَأُولَٰئِكَ هُمُ الْمُهْتَدُونَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Wa bashshiri as-sabirin.
                    Alladhina idha asabathum musibatun qalu inna lillahi wa inna
                    ilayhi raji&apos;un. Ula&apos;ika &apos;alayhim salawatun
                    min Rabbihim wa rahma, wa ula&apos;ika humu al-muhtadun
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Et annonce la bonne nouvelle aux patients, ceux
                    qui, lorsqu&apos;un malheur les atteint, disent :
                    &apos;Certes, nous appartenons à Allah et c&apos;est vers
                    Lui que nous retournerons.&apos; Ceux-là reçoivent des
                    bénédictions de leur Seigneur ainsi que la miséricorde, et
                    ceux-là sont les bien-guidés.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate Al-Baqarah (2:155-157)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voici quelques conseils pratiques pour traverser le deuil en
                  tant que musulman :
                </p>

                <ul className="mt-4 list-disc space-y-3 pl-6 text-foreground">
                  <li>
                    <strong>Prononcer l&apos;istirja&apos;</strong> (inna lillahi
                    wa inna ilayhi raji&apos;un) dès l&apos;annonce du décès et
                    chaque fois que la douleur revient.
                  </li>
                  <li>
                    <strong>Multiplier les invocations</strong> pour le défunt :
                    demander à Allah Son pardon, Sa miséricorde et
                    l&apos;élargissement de sa tombe.
                  </li>
                  <li>
                    <strong>Accomplir des aumônes</strong> en son nom : offrir de
                    la nourriture, de l&apos;eau, ou financer des projets
                    bénéfiques.
                  </li>
                  <li>
                    <strong>Lire le Coran</strong> et demander à Allah de
                    reverser la récompense au défunt.
                  </li>
                  <li>
                    <strong>Se rappeler les paroles du Prophète ﷺ</strong> sur la
                    récompense de la patience et la promesse du Paradis pour les
                    patients.
                  </li>
                  <li>
                    <strong>Maintenir les liens familiaux</strong> et se soutenir
                    mutuellement dans l&apos;épreuve, car le deuil est plus
                    supportable lorsqu&apos;il est partagé.
                  </li>
                  <li>
                    <strong>Consulter les{" "}
                    <Link
                      href="/doua-islam"
                      className="text-primary underline"
                    >
                      invocations en islam
                    </Link>
                    </strong>{" "}
                    pour trouver les formules adaptées à chaque situation
                    d&apos;épreuve. Les{" "}
                    <Link
                      href="/invocations-reussite-facilite"
                      className="text-primary underline"
                    >
                      invocations pour la facilité
                    </Link>{" "}
                    et le{" "}
                    <Link
                      href="/remede-angoisse-islam"
                      className="text-primary underline"
                    >
                      remède contre l&apos;angoisse en islam
                    </Link>{" "}
                    peuvent également aider à traverser les moments de détresse
                    liés au deuil.
                  </li>
                </ul>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le deuil en islam est donc un processus qui allie{" "}
                  <strong>expression naturelle de la tristesse</strong>,{" "}
                  <strong>patience face au décret divin</strong> et{" "}
                  <strong>action positive</strong> en faveur du défunt par la
                  doua et les bonnes \u0153uvres. Chaque larme versée avec
                  patience, chaque invocation murmurée avec sincérité et chaque
                  aumône donnée en son nom constituent autant de lumières qui
                  éclairent la tombe du défunt et allègent les épreuves de
                  l&apos;au-delà.
                </p>
              </section>

              {/* ========== AFFILIATE FORM ========== */}
              <div className="mt-12">
                <AffiliateForm
                  title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                  description="Maîtrisez la langue du Coran pour réciter les douas avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
                  preselect="arabe"
                />
              </div>

              {/* ========== FAQ ========== */}
              <section id="faq" className="mt-12 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>

              {/* ========== INTERNAL LINKS ========== */}
              <nav className="mt-12 rounded-xl border border-secondary/20 bg-accent p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles connexes
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground">
                  <li>
                    <Link
                      href="/doua-islam"
                      className="text-primary underline"
                    >
                      Doua en islam : guide complet des invocations authentiques
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doua-opprime-islam"
                      className="text-primary underline"
                    >
                      Doua de l&apos;opprimé en islam
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/invocations-reussite-facilite"
                      className="text-primary underline"
                    >
                      Invocations pour la réussite et la facilité
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/repentir-sincere-islam-tawba"
                      className="text-primary underline"
                    >
                      Le repentir sincère en islam (tawba)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/prier-islam-excellence-spirituelle"
                      className="text-primary underline"
                    >
                      Prier en islam : l&apos;excellence spirituelle
                    </Link>
                  </li>
                </ul>
              </nav>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
