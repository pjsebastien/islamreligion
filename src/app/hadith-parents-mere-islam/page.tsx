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
    "Hadiths sur les parents et la mère en islam : piété filiale et respect",
  description:
    "Découvrez les hadiths authentiques sur les parents et la mère en islam : le paradis sous les pieds de la mère, la piété filiale (birr al-walidayn), la désobéissance aux parents et les douas pour les défunts. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur les parents et la mère en islam : piété filiale et respect",
    description:
      "Les hadiths authentiques sur les parents et la mère en islam : le rang de la mère, la piété filiale, la désobéissance aux parents et les invocations pour les parents décédés.",
    url: "https://www.islamreligion.fr/hadith-parents-mere-islam",
    images: [
      {
        url: "/images/famille-musulmane-islam-croissant-lune-valeurs.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-parents-mere-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "rang-mere", label: "Le rang de la mère en islam" },
  { id: "piete-filiale", label: "La piété filiale (birr al-walidayn)" },
  { id: "desobeissance", label: "La désobéissance aux parents" },
  { id: "doua-parents-decedes", label: "Doua pour les parents décédés" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Est-il vrai que le paradis se trouve sous les pieds de la mère en islam ?",
    answer:
      "Oui, un hadith rapporté par Mu\u2019awiya ibn Jahima dans le Sunan An-Nasa\u2019i (n\u00b03104) et authentifié par de nombreux savants affirme que le Prophète \uFDFA a dit : \u00ab Le paradis est sous les pieds des m\u00e8res \u00bb. Cette parole souligne que la satisfaction de la m\u00e8re et le bon comportement envers elle sont un chemin direct vers le Paradis. Les savants expliquent qu\u2019il ne s\u2019agit pas d\u2019un sens litt\u00e9ral, mais d\u2019une m\u00e9taphore puissante sur l\u2019importance de la pi\u00e9t\u00e9 filiale.",
  },
  {
    question:
      "Pourquoi la mère a-t-elle trois fois plus de droit que le père en islam ?",
    answer:
      "Dans le c\u00e9l\u00e8bre hadith rapport\u00e9 par Abu Hurayra (Bukhari 5971, Muslim 2548), un homme demanda au Proph\u00e8te \uFDFA qui m\u00e9ritait le plus sa bonne compagnie. Le Proph\u00e8te r\u00e9pondit trois fois \u00ab Ta m\u00e8re \u00bb avant de mentionner le p\u00e8re. Les savants, dont l\u2019imam Al-Qurtubi, expliquent que cette triple mention refl\u00e8te les trois \u00e9preuves propres \u00e0 la m\u00e8re : la grossesse, l\u2019accouchement et l\u2019allaitement, en plus de l\u2019\u00e9ducation qu\u2019elle partage avec le p\u00e8re.",
  },
  {
    question:
      "Quels sont les principaux hadiths sur la piété filiale en islam ?",
    answer:
      "Les hadiths les plus importants incluent celui d\u2019Abu Hurayra sur la priorit\u00e9 de la m\u00e8re (Bukhari 5971), celui d\u2019Abdullah ibn Mas\u2019ud classant la pi\u00e9t\u00e9 filiale juste apr\u00e8s la pri\u00e8re (Bukhari 527, Muslim 85), et celui d\u2019Abdullah ibn \u2019Amr o\u00f9 le Proph\u00e8te \uFDFA affirme que la satisfaction d\u2019Allah r\u00e9side dans la satisfaction des parents (Tirmidhi 1899). Ces hadiths montrent que le birr al-walidayn (pi\u00e9t\u00e9 filiale) est l\u2019un des actes les plus m\u00e9ritoires en islam.",
  },
  {
    question:
      "La désobéissance aux parents est-elle un péché majeur en islam ?",
    answer:
      "Oui, la d\u00e9sob\u00e9issance aux parents (al-\u2019uquq) est explicitement class\u00e9e parmi les plus grands p\u00e9ch\u00e9s. Le Proph\u00e8te \uFDFA l\u2019a mentionn\u00e9e juste apr\u00e8s l\u2019association \u00e0 Allah (shirk) dans le hadith d\u2019Abu Bakra (Bukhari 2654, Muslim 87). Il l\u2019a \u00e9galement cit\u00e9e parmi les trois p\u00e9ch\u00e9s majeurs aux c\u00f4t\u00e9s du shirk et du faux t\u00e9moignage.",
  },
  {
    question:
      "Peut-on encore honorer ses parents après leur décès en islam ?",
    answer:
      "Oui, le Proph\u00e8te \uFDFA a enseign\u00e9 que la pi\u00e9t\u00e9 filiale ne s\u2019arr\u00eate pas \u00e0 la mort des parents. Dans le hadith d\u2019Abu Usayd As-Sa\u2019idi (Abu Dawud 5142), il a mentionn\u00e9 que l\u2019on peut prier pour eux, demander pardon pour eux, honorer leurs amis, maintenir les liens de parent\u00e9 qu\u2019ils entretenaient et accomplir leurs engagements. L\u2019invocation coranique \u00ab Seigneur, fais-leur mis\u00e9ricorde comme ils m\u2019ont \u00e9lev\u00e9 tout petit \u00bb (sourate Al-Isra, 17:24) est \u00e9galement recommand\u00e9e.",
  },
  {
    question:
      "Comment concilier obéissance aux parents et obéissance à Allah ?",
    answer:
      "Les savants sont unanimes : l\u2019ob\u00e9issance aux parents est obligatoire sauf si elle contredit un commandement d\u2019Allah. Le Proph\u00e8te \uFDFA a dit : \u00ab Pas d\u2019ob\u00e9issance \u00e0 la cr\u00e9ature dans la d\u00e9sob\u00e9issance au Cr\u00e9ateur \u00bb (Musnad Ahmad 1098). Toutefois, m\u00eame en cas de d\u00e9saccord, le musulman doit rester bienveillant, respectueux et ne jamais manquer de politesse envers ses parents, conform\u00e9ment au verset d\u2019Al-Isra (17:23).",
  },
];

export default function HadithParentsMereIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-parents-mere-islam/#article",
        headline:
          "Hadiths sur les parents et la mère en islam : piété filiale et respect",
        description:
          "Découvrez les hadiths authentiques sur les parents et la mère en islam : le paradis sous les pieds de la mère, la piété filiale, la désobéissance aux parents et les douas pour les défunts.",
        image: "/images/famille-musulmane-islam-croissant-lune-valeurs.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-parents-mere-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-parents-mere-islam/#breadcrumb",
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
            name: "Parents et mère",
            item: "https://www.islamreligion.fr/hadith-parents-mere-islam",
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
          title="Hadiths sur les parents et la mère en islam"
          subtitle="Les enseignements prophétiques sur la piété filiale, le rang de la mère, le respect des parents et les invocations pour les défunts selon la Sunna authentique."
          imageSrc="/images/famille-musulmane-islam-croissant-lune-valeurs.jpg"
          imageAlt="Hadiths sur les parents et la mère en islam, piété filiale et respect"
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
                  Parents et mère
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
                    Le Prophète ﷺ a répété trois fois &laquo;&nbsp;ta mère&nbsp;&raquo; avant de mentionner le père, soulignant le rang éminent de la mère en islam.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le paradis se trouve sous les pieds des mères : cette parole prophétique illustre que la satisfaction de la mère est un chemin vers le Paradis.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La piété filiale (<em>birr al-walidayn</em>) est classée juste après la prière parmi les actes les plus aimés d&apos;Allah.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La désobéissance aux parents (<em>al-&apos;uquq</em>) est un péché majeur, mentionné juste après l&apos;association à Allah.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique : ce que le Coran dit des parents
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths sur les parents et la mère, il est essentiel de comprendre le cadre coranique. Allah a mentionné le respect des parents immédiatement après le commandement de l&apos;adorer Lui seul, soulignant ainsi l&apos;importance capitale de la piété filiale dans la hiérarchie des obligations islamiques. Le Coran revient sur ce thème dans de nombreuses sourates, associant systématiquement le droit des parents au droit d&apos;Allah.
                </p>

                <HadithCard
                  arabic="وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا إِمَّا يَبْلُغَنَّ عِندَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلًا كَرِيمًا وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُل رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا"
                  text="Et ton Seigneur a décrété que vous n&apos;adoriez que Lui et que vous soyez bienfaisants envers vos parents. Si l&apos;un d&apos;eux ou tous deux atteignent la vieillesse auprès de toi, alors ne leur dis pas &laquo;&nbsp;ouf&nbsp;&raquo; et ne les repousse pas, mais adresse-leur des paroles respectueuses. Et par miséricorde, abaisse pour eux l&apos;aile de l&apos;humilité et dis : &laquo;&nbsp;Seigneur, fais-leur miséricorde comme ils m&apos;ont élevé tout petit.&nbsp;&raquo;"
                  source="Coran, sourate Al-Isra (17:23-24)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces deux versets constituent le fondement coranique de la piété filiale. Allah emploie le terme &laquo;&nbsp;qada&nbsp;&raquo; (décréter), le même verbe utilisé pour les commandements absolus. L&apos;interdiction de dire &laquo;&nbsp;ouf&nbsp;&raquo; — la plus petite marque d&apos;agacement — indique que toute forme d&apos;irrespect, même minime, est proscrite. La métaphore de l&apos;aile abaissée exprime la soumission volontaire et aimante du fils envers ses parents âgés, un renversement des rôles : celui qui était porté porte désormais.
                </p>

                <HadithCard
                  arabic="وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ حَمَلَتْهُ أُمُّهُ وَهْنًا عَلَىٰ وَهْنٍ وَفِصَالُهُ فِي عَامَيْنِ أَنِ اشْكُرْ لِي وَلِوَالِدَيْكَ إِلَيَّ الْمَصِيرُ"
                  text="Nous avons commandé à l&apos;homme [la bienfaisance envers] ses père et mère. Sa mère l&apos;a porté faiblesse sur faiblesse, et son sevrage a lieu à deux ans. Sois reconnaissant envers Moi ainsi qu&apos;envers tes parents. Vers Moi est la destination."
                  source="Coran, sourate Luqman (31:14)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset de la sourate Luqman met en lumière la raison pour laquelle la mère occupe un rang supérieur : la grossesse (&laquo;&nbsp;faiblesse sur faiblesse&nbsp;&raquo;), l&apos;accouchement et l&apos;allaitement pendant deux ans sont des épreuves que seule la mère endure. Allah associe la gratitude envers les parents à la gratitude envers Lui-même, établissant un lien indissociable entre la reconnaissance divine et la piété filiale. C&apos;est sur cette base coranique que le Prophète ﷺ a construit ses enseignements détaillés sur le droit des parents.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Le rang de la mère   */}
              {/* ============================== */}
              <section id="rang-mere" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le rang de la mère en islam : le paradis sous ses pieds
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi toutes les relations humaines, l&apos;islam accorde à la mère une place exceptionnelle. Le Prophète ﷺ a souligné dans plusieurs hadiths que la mère mérite la priorité dans le bon traitement, et que sa satisfaction est un chemin direct vers le Paradis. La célèbre parole &laquo;&nbsp;le paradis est sous les pieds des mères&nbsp;&raquo; résume à elle seule la théologie islamique de la maternité.
                </p>

                <HadithBlock
                  number={1}
                  title="Ta mère, ta mère, ta mère, puis ton père"
                  narrator="Abu Hurayra"
                  arabic="جَاءَ رَجُلٌ إِلَى رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ يَا رَسُولَ اللَّهِ مَنْ أَحَقُّ النَّاسِ بِحُسْنِ صَحَابَتِي قَالَ أُمُّكَ قَالَ ثُمَّ مَنْ قَالَ ثُمَّ أُمُّكَ قَالَ ثُمَّ مَنْ قَالَ ثُمَّ أُمُّكَ قَالَ ثُمَّ مَنْ قَالَ ثُمَّ أَبُوكَ"
                  translation="Un homme vint au Messager d&apos;Allah ﷺ et dit : &laquo;&nbsp;Ô Messager d&apos;Allah, qui mérite le plus ma bonne compagnie ?&nbsp;&raquo; Il répondit : &laquo;&nbsp;Ta mère.&nbsp;&raquo; Il dit : &laquo;&nbsp;Puis qui ?&nbsp;&raquo; Il répondit : &laquo;&nbsp;Ta mère.&nbsp;&raquo; Il dit : &laquo;&nbsp;Puis qui ?&nbsp;&raquo; Il répondit : &laquo;&nbsp;Ta mère.&nbsp;&raquo; Il dit : &laquo;&nbsp;Puis qui ?&nbsp;&raquo; Il répondit : &laquo;&nbsp;Ton père.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°5971 — Sahih Muslim, n°2548"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus célèbres de la Sunna. La triple répétition de &laquo;&nbsp;ta mère&nbsp;&raquo; n&apos;est pas fortuite : les savants, dont l&apos;imam Al-Qurtubi, y voient une correspondance avec les trois épreuves exclusives de la mère — la grossesse, l&apos;accouchement et l&apos;allaitement — auxquelles s&apos;ajoute l&apos;éducation, partagée avec le père. Cette répartition 3/4 pour la mère et 1/4 pour le père ne diminue en rien le droit du père, mais souligne l&apos;ampleur des sacrifices maternels."
                />

                <HadithBlock
                  number={2}
                  title="Le paradis est sous les pieds des mères"
                  narrator="Mu&apos;awiya ibn Jahima"
                  arabic="جَاءَ رَجُلٌ إِلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ يَا رَسُولَ اللَّهِ أَرَدْتُ أَنْ أَغْزُوَ وَقَدْ جِئْتُ أَسْتَشِيرُكَ فَقَالَ هَلْ لَكَ أُمٌّ قَالَ نَعَمْ قَالَ فَالْزَمْهَا فَإِنَّ الْجَنَّةَ تَحْتَ رِجْلَيْهَا"
                  translation="Un homme vint au Prophète ﷺ et dit : &laquo;&nbsp;Ô Messager d&apos;Allah, je veux partir au combat et je suis venu te consulter.&nbsp;&raquo; Il dit : &laquo;&nbsp;As-tu une mère ?&nbsp;&raquo; Il dit : &laquo;&nbsp;Oui.&nbsp;&raquo; Il dit : &laquo;&nbsp;Reste auprès d&apos;elle, car le paradis est sous ses pieds.&nbsp;&raquo;"
                  source="Sunan An-Nasa&apos;i, n°3104 — Musnad Ahmad"
                  grade="sahih"
                  explanation="Ce hadith est la source de la célèbre expression &laquo;&nbsp;le paradis est sous les pieds des mères&nbsp;&raquo;. Le contexte est éloquent : un homme souhaite accomplir le jihad, l&apos;un des actes les plus méritoires en islam, et le Prophète ﷺ lui ordonne de rester auprès de sa mère. Cela montre que le service de la mère peut surpasser en récompense le combat dans le sentier d&apos;Allah lorsque la présence du fils est nécessaire. L&apos;expression &laquo;&nbsp;sous ses pieds&nbsp;&raquo; est une métaphore arabe signifiant que la clé du Paradis réside dans la satisfaction et le service de la mère."
                />

                <HadithBlock
                  number={3}
                  title="Malheur à celui qui n&apos;entre pas au Paradis à cause de ses parents"
                  narrator="Abu Hurayra"
                  arabic="رَغِمَ أَنْفُهُ ثُمَّ رَغِمَ أَنْفُهُ ثُمَّ رَغِمَ أَنْفُهُ قِيلَ مَنْ يَا رَسُولَ اللَّهِ قَالَ مَنْ أَدْرَكَ وَالِدَيْهِ عِنْدَ الْكِبَرِ أَحَدَهُمَا أَوْ كِلَيْهِمَا ثُمَّ لَمْ يَدْخُلِ الْجَنَّةَ"
                  translation="Qu&apos;il soit humilié ! Qu&apos;il soit humilié ! Qu&apos;il soit humilié ! On demanda : &laquo;&nbsp;Qui donc, ô Messager d&apos;Allah ?&nbsp;&raquo; Il dit : &laquo;&nbsp;Celui qui trouve ses parents, l&apos;un d&apos;eux ou les deux, âgés, et n&apos;entre pas au Paradis (à cause d&apos;eux).&nbsp;&raquo;"
                  source="Sahih Muslim, n°2551"
                  grade="sahih"
                  explanation="L&apos;expression &laquo;&nbsp;raghima anfuhu&nbsp;&raquo; (que son nez soit frotté dans la poussière) est une formule d&apos;humiliation en arabe. Le Prophète ﷺ la répète trois fois pour exprimer son indignation. Le sens est clair : celui qui a la chance d&apos;avoir ses parents âgés auprès de lui et qui ne saisit pas cette occasion pour gagner le Paradis par leur service est le plus grand des perdants. Ce hadith fait des parents âgés une &laquo;&nbsp;porte du Paradis&nbsp;&raquo; que le croyant ne doit jamais négliger."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths établissent sans ambiguïté le rang éminent de la mère en islam et, plus largement, le statut des parents comme voie d&apos;accès au Paradis. Le musulman qui comprend ces enseignements voit dans le service de ses parents non une corvée, mais une adoration (<em>ibada</em>) récompensée par la plus haute des récompenses. Pour approfondir le thème de la famille, consultez notre article sur les{" "}
                  <Link href="/hadith-famille-liens-parente-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la famille et les liens de parenté
                  </Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : Piété filiale (birr al-walidayn)   */}
              {/* ============================================ */}
              <section id="piete-filiale" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La piété filiale (<em>birr al-walidayn</em>) dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le concept de <em>birr al-walidayn</em> (piété filiale) englobe tout ce qui apporte satisfaction aux parents : l&apos;obéissance, le service, la dépense, la douceur dans la parole et même le regard bienveillant. Le Prophète ﷺ a placé cette vertu parmi les actes les plus aimés d&apos;Allah, juste après la prière accomplie à l&apos;heure. Les hadiths suivants détaillent différentes facettes de cette obligation fondamentale.
                </p>

                <HadithBlock
                  number={4}
                  title="L&apos;acte le plus aimé d&apos;Allah après la prière"
                  narrator="Abdullah ibn Mas&apos;ud"
                  arabic="سَأَلْتُ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَيُّ الْعَمَلِ أَحَبُّ إِلَى اللَّهِ قَالَ الصَّلَاةُ عَلَى وَقْتِهَا قُلْتُ ثُمَّ أَيٌّ قَالَ بِرُّ الْوَالِدَيْنِ قُلْتُ ثُمَّ أَيٌّ قَالَ الْجِهَادُ فِي سَبِيلِ اللَّهِ"
                  translation="J&apos;ai demandé au Prophète ﷺ : &laquo;&nbsp;Quel est l&apos;acte le plus aimé d&apos;Allah ?&nbsp;&raquo; Il dit : &laquo;&nbsp;La prière accomplie à l&apos;heure.&nbsp;&raquo; Je dis : &laquo;&nbsp;Puis lequel ?&nbsp;&raquo; Il dit : &laquo;&nbsp;La piété filiale.&nbsp;&raquo; Je dis : &laquo;&nbsp;Puis lequel ?&nbsp;&raquo; Il dit : &laquo;&nbsp;Le jihad dans le sentier d&apos;Allah.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°527 — Sahih Muslim, n°85"
                  grade="sahih"
                  explanation="Ce hadith établit une hiérarchie claire des actes les plus méritoires : la prière, la piété filiale, puis le jihad. Que la piété filiale précède le jihad montre son importance colossale dans la balance des bonnes actions. Les savants en déduisent que le service des parents est une obligation individuelle (<em>fard &apos;ayn</em>) qui prime sur le jihad offensif, lequel est une obligation collective (<em>fard kifaya</em>) tant que d&apos;autres musulmans s&apos;en acquittent."
                />

                <HadithBlock
                  number={5}
                  title="La satisfaction d&apos;Allah réside dans la satisfaction des parents"
                  narrator="Abdullah ibn &apos;Amr ibn al-&apos;As"
                  arabic="رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ وَسَخَطُ الرَّبِّ فِي سَخَطِ الْوَالِدِ"
                  translation="La satisfaction du Seigneur réside dans la satisfaction du père, et la colère du Seigneur réside dans la colère du père."
                  source="Jami&apos; at-Tirmidhi, n°1899 — Sahih Ibn Hibban"
                  grade="sahih"
                  explanation="Ce hadith établit un lien direct entre la satisfaction des parents et celle d&apos;Allah. Celui qui contente ses parents est sur le chemin de contenter son Seigneur, et celui qui provoque leur colère s&apos;expose à la colère divine. Bien que le texte mentionne &laquo;&nbsp;le père&nbsp;&raquo;, les savants comme Ibn Hajar précisent que le terme &laquo;&nbsp;walid&nbsp;&raquo; englobe ici les deux parents. Ce hadith est l&apos;un des piliers du <em>birr al-walidayn</em> dans le fiqh islamique."
                />

                <HadithBlock
                  number={6}
                  title="Les yeux qui ne pleureront pas le Jour du Jugement"
                  narrator="Ibn &apos;Abbas"
                  arabic="عَيْنَانِ لَا تَمَسُّهُمَا النَّارُ عَيْنٌ بَكَتْ مِنْ خَشْيَةِ اللَّهِ وَعَيْنٌ بَاتَتْ تَحْرُسُ فِي سَبِيلِ اللَّهِ"
                  translation="Deux yeux ne seront pas touchés par le Feu : un œil qui a pleuré par crainte d&apos;Allah et un œil qui a veillé en montant la garde dans le sentier d&apos;Allah."
                  source="Jami&apos; at-Tirmidhi, n°1639"
                  grade="hasan"
                  explanation="Bien que ce hadith ne mentionne pas explicitement les parents, les savants le relient à la piété filiale en expliquant que celui qui pleure par crainte d&apos;Allah inclut celui qui pleure de remords pour avoir manqué au droit de ses parents. De plus, dans une version rapportée par At-Tabarani, le Prophète ﷺ ajoute &laquo;&nbsp;un œil qui a pleuré en regardant ses parents avec miséricorde&nbsp;&raquo;. Le regard bienveillant envers les parents est en soi un acte de piété récompensé."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La piété filiale en islam ne se limite pas à l&apos;obéissance passive : elle englobe l&apos;affection, le service actif, la dépense matérielle et même le regard tendre. Le Prophète ﷺ a fait du <em>birr al-walidayn</em> un critère de mesure de la foi elle-même. Pour découvrir d&apos;autres enseignements prophétiques, consultez notre{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    guide complet sur les hadiths du Prophète ﷺ
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh de la famille, les droits des parents et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================================ */}
              {/* SECTION : Désobéissance aux parents          */}
              {/* ============================================ */}
              <section id="desobeissance" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La désobéissance aux parents (<em>al-&apos;uquq</em>) : un péché majeur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si le Coran et la Sunna valorisent la piété filiale, ils mettent également en garde avec la plus grande sévérité contre son contraire : la désobéissance aux parents (<em>al-&apos;uquq</em>). Le Prophète ﷺ a classé ce péché parmi les plus graves, le plaçant immédiatement après l&apos;association à Allah (<em>shirk</em>). Les hadiths suivants montrent la gravité de cette transgression.
                </p>

                <HadithBlock
                  number={7}
                  title="Les plus grands péchés : le shirk et la désobéissance aux parents"
                  narrator="Abu Bakra"
                  arabic="أَلَا أُنَبِّئُكُمْ بِأَكْبَرِ الْكَبَائِرِ ثَلَاثًا قَالُوا بَلَى يَا رَسُولَ اللَّهِ قَالَ الْإِشْرَاكُ بِاللَّهِ وَعُقُوقُ الْوَالِدَيْنِ وَكَانَ مُتَّكِئًا فَجَلَسَ فَقَالَ أَلَا وَقَوْلُ الزُّورِ وَشَهَادَةُ الزُّورِ أَلَا وَقَوْلُ الزُّورِ وَشَهَادَةُ الزُّورِ فَمَا زَالَ يَقُولُهَا حَتَّى قُلْتُ لَا يَسْكُتُ"
                  translation="Ne vous informerai-je pas des plus grands péchés ? — Il le répéta trois fois. — Ils dirent : Certes, ô Messager d&apos;Allah. Il dit : L&apos;association à Allah et la désobéissance aux parents. — Et il était accoudé, puis il s&apos;assit et dit : — Et aussi le faux témoignage et la parole mensongère. Et il ne cessa de le répéter au point que je me dis : il ne va pas s&apos;arrêter."
                  source="Sahih Al-Bukhari, n°2654 — Sahih Muslim, n°87"
                  grade="sahih"
                  explanation="Ce hadith est fondamental dans la classification des péchés majeurs en islam. Le Prophète ﷺ cite la désobéissance aux parents en deuxième position, immédiatement après le shirk. Le fait qu&apos;il se soit redressé de sa position accoudée pour parler du faux témoignage montre sa gravité, mais le fait que la désobéissance aux parents le précède dans l&apos;énumération est encore plus significatif. Les quatre écoles juridiques considèrent unanimement l&apos;al-&apos;uquq comme un péché majeur (<em>kabira</em>) qui expose à un châtiment sévère."
                />

                <HadithBlock
                  number={8}
                  title="Allah retarde tout sauf la désobéissance aux parents"
                  narrator="Abu Bakra"
                  arabic="كُلُّ الذُّنُوبِ يُؤَخِّرُ اللَّهُ مِنْهَا مَا شَاءَ إِلَى يَوْمِ الْقِيَامَةِ إِلَّا عُقُوقَ الْوَالِدَيْنِ فَإِنَّ اللَّهَ يُعَجِّلُهُ لِصَاحِبِهِ فِي الْحَيَاةِ قَبْلَ الْمَمَاتِ"
                  translation="Allah retarde le châtiment de tout péché selon Sa volonté jusqu&apos;au Jour de la Résurrection, sauf la désobéissance aux parents : Allah en hâte le châtiment pour son auteur dans la vie d&apos;ici-bas avant la mort."
                  source="Al-Mustadrak, Al-Hakim, n°7350 — Al-Adab al-Mufrad, Al-Bukhari"
                  grade="sahih"
                  explanation="Ce hadith ajoute une dimension supplémentaire à la gravité de la désobéissance aux parents : non seulement elle est un péché majeur, mais son châtiment peut être anticipé en ce bas monde, contrairement aux autres péchés dont la sanction peut être reportée à l&apos;au-delà. Les savants y voient une loi divine (<em>sunna ilahiyya</em>) : celui qui rompt le lien avec ses parents verra ses propres liens se rompre, ses affaires se compliquer et sa baraka diminuer dans cette vie même."
                />

                <HadithBlock
                  number={9}
                  title="Trois personnes à qui Allah interdit le Paradis"
                  narrator="Abdullah ibn &apos;Amr"
                  arabic="ثَلَاثَةٌ لَا يَنْظُرُ اللَّهُ إِلَيْهِمْ يَوْمَ الْقِيَامَةِ الْعَاقُّ لِوَالِدَيْهِ وَالْمَرْأَةُ الْمُتَرَجِّلَةُ وَالدَّيُّوثُ"
                  translation="Trois personnes, Allah ne les regardera pas le Jour de la Résurrection : celui qui désobéit à ses parents, la femme qui imite les hommes, et le dayouth (celui qui tolère l&apos;indécence dans sa famille)."
                  source="Musnad Ahmad, n°6180 — Sunan An-Nasa&apos;i, n°2562"
                  grade="sahih"
                  explanation="Le fait qu&apos;Allah &laquo;&nbsp;ne regarde pas&nbsp;&raquo; une personne le Jour de la Résurrection est l&apos;une des menaces les plus graves dans les textes islamiques : cela signifie l&apos;absence de miséricorde et de pardon. Que la désobéissance aux parents figure dans cette catégorie confirme qu&apos;il s&apos;agit d&apos;un péché d&apos;une extrême gravité. Ce hadith incite le musulman à un examen de conscience permanent sur sa relation avec ses parents."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths dressent un tableau sans équivoque : la désobéissance aux parents n&apos;est pas un simple manquement moral, c&apos;est une transgression qui met en péril la vie spirituelle du musulman dans ce monde et dans l&apos;au-delà. Le repentir sincère et la réconciliation avec les parents sont la voie de retour pour celui qui a failli.
                </p>
              </section>

              {/* ================================================ */}
              {/* SECTION : Doua et bienfaisance parents décédés    */}
              {/* ================================================ */}
              <section id="doua-parents-decedes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua et bienfaisance envers les parents décédés
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La piété filiale ne s&apos;arrête pas à la mort des parents. Le Prophète ﷺ a enseigné que le musulman peut continuer à honorer ses parents après leur décès par la doua (invocation), la sadaqa (aumône), le maintien des liens qu&apos;ils entretenaient et l&apos;accomplissement de leurs engagements. Ces hadiths offrent un réconfort aux orphelins et un rappel à tous.
                </p>

                <HadithBlock
                  number={10}
                  title="Comment honorer ses parents après leur mort"
                  narrator="Abu Usayd As-Sa&apos;idi"
                  arabic="قَالَ رَجُلٌ يَا رَسُولَ اللَّهِ هَلْ بَقِيَ مِنْ بِرِّ أَبَوَيَّ شَيْءٌ أَبَرُّهُمَا بِهِ بَعْدَ مَوْتِهِمَا قَالَ نَعَمْ الصَّلَاةُ عَلَيْهِمَا وَالِاسْتِغْفَارُ لَهُمَا وَإِنْفَاذُ عَهْدِهِمَا مِنْ بَعْدِهِمَا وَصِلَةُ الرَّحِمِ الَّتِي لَا تُوصَلُ إِلَّا بِهِمَا وَإِكْرَامُ صَدِيقِهِمَا"
                  translation="Un homme dit : &laquo;&nbsp;Ô Messager d&apos;Allah, reste-t-il quelque chose de la piété filiale que je puisse faire pour mes parents après leur mort ?&nbsp;&raquo; Il dit : &laquo;&nbsp;Oui : prier pour eux, implorer le pardon pour eux, accomplir leurs engagements après eux, maintenir les liens de parenté qui ne se maintiennent que par eux, et honorer leurs amis.&nbsp;&raquo;"
                  source="Sunan Abu Dawud, n°5142 — Sunan Ibn Majah, n°3664"
                  grade="hasan"
                  explanation="Ce hadith est une source de consolation pour ceux dont les parents sont décédés. Il détaille cinq formes de piété filiale post-mortem : la prière (doua), la demande de pardon (istighfar), l&apos;accomplissement de leurs promesses et dettes, le maintien des liens de parenté et le respect de leurs amis. Les savants ajoutent à cette liste le pèlerinage (hajj) et la sadaqa en leur nom, sur la base d&apos;autres hadiths. La piété filiale est ainsi un acte qui transcende la mort elle-même."
                />

                <HadithBlock
                  number={11}
                  title="Quand l&apos;homme meurt, ses actes s&apos;interrompent sauf trois"
                  narrator="Abu Hurayra"
                  arabic="إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ أَوْ عِلْمٍ يُنْتَفَعُ بِهِ أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ"
                  translation="Quand l&apos;homme meurt, ses actes s&apos;interrompent sauf trois : une aumône continue (sadaqa jariya), un savoir dont on tire profit, ou un enfant pieux qui invoque pour lui."
                  source="Sahih Muslim, n°1631"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en montrant la réciprocité : les parents qui ont élevé un enfant pieux continuent de recevoir des récompenses après leur mort grâce à ses invocations. L&apos;expression &laquo;&nbsp;walad salih&nbsp;&raquo; (enfant pieux) est le fruit d&apos;une éducation réussie, ce qui renvoie à la responsabilité parentale. Les savants y voient un encouragement à investir dans l&apos;éducation islamique des enfants, car c&apos;est un investissement qui profite aux parents même après leur trépas."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La relation parents-enfants en islam est un cercle vertueux qui ne connaît pas de fin : les parents élèvent l&apos;enfant dans la piété, et l&apos;enfant pieux invoque pour ses parents après leur mort. Cette vision transcendante de la famille est au cœur de l&apos;éthique islamique. Pour les invocations à réciter pour les parents, consultez notre article sur les{" "}
                  <Link href="/hadith-du-jour" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths du jour et paroles authentiques
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur les parents et la piété filiale
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont longuement commenté les hadiths sur les parents et la mère. Leurs analyses éclairent la dimension juridique, spirituelle et éducative de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La triple mention de la mère dans le hadith de Bukhari indique que la mère mérite trois parts de bienfaisance contre une pour le père. Cela correspond aux trois épreuves que la mère endure seule : la difficulté de la grossesse, la douleur de l&apos;accouchement et la peine de l&apos;allaitement. L&apos;éducation, quant à elle, est partagée entre les deux parents.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Al-Qurtubi, <em>Al-Jami&apos; li Ahkam al-Qur&apos;an</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le birr al-walidayn (piété filiale) est une obligation qui ne souffre aucune exception, sauf si les parents ordonnent la désobéissance à Allah. Même dans ce cas, le musulman doit leur désobéir avec respect, sans les insulter ni les abandonner. Le verset d&apos;Al-Isra &laquo;&nbsp;ne leur dis pas ouf&nbsp;&raquo; interdit la moindre marque d&apos;impatience, même face à des parents injustes.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith &laquo;&nbsp;le paradis est sous les pieds des mères&nbsp;&raquo; ne signifie pas que la mère est une divinité à adorer, mais que son service et sa satisfaction sont parmi les moyens les plus efficaces pour atteindre le Paradis. C&apos;est une métaphore arabe pour exprimer que la clé du bonheur éternel se trouve dans la bienfaisance envers la mère.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Tuhfat al-Mawdud</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires des grands savants confirment que la piété filiale n&apos;est pas une simple recommandation morale, mais un pilier de l&apos;éthique islamique. Le <em>birr al-walidayn</em> fait l&apos;objet de chapitres entiers dans les recueils de hadiths (Bukhari, Muslim, Abu Dawud, Tirmidhi) et dans les ouvrages de fiqh des quatre écoles juridiques.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des enseignements concrets pour la vie quotidienne du croyant :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Accorder la priorité à la mère dans le bon traitement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La triple mention de la mère par le Prophète ﷺ n&apos;est pas symbolique : elle oblige le musulman à redoubler d&apos;efforts envers sa mère. Le service, la douceur, la patience et la dépense envers elle sont des actes d&apos;adoration de premier ordre.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Voir les parents âgés comme une porte du Paradis
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hadith de Muslim (2551) est clair : celui qui a la chance d&apos;avoir ses parents âgés et ne gagne pas le Paradis par leur service est le plus grand des perdants. Chaque instant passé à les servir est un investissement pour l&apos;au-delà.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Bannir toute forme d&apos;irrespect, même le soupir
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Coran interdit même de dire &laquo;&nbsp;ouf&nbsp;&raquo; aux parents. Les savants en déduisent, par analogie (<em>qiyas</em>), que toute parole blessante, tout regard méprisant et tout geste d&apos;agacement sont proscrits à plus forte raison.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Continuer la piété filiale après la mort des parents
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le musulman peut invoquer Allah pour ses parents décédés, donner la sadaqa en leur nom, maintenir les liens de parenté qu&apos;ils entretenaient et honorer leurs amis. La piété filiale est un acte sans fin temporelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se repentir immédiatement si l&apos;on a désobéi à ses parents
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La désobéissance aux parents est un péché dont le châtiment peut être anticipé dans ce monde. Le musulman qui prend conscience de sa faute doit se repentir, s&apos;excuser auprès de ses parents et rectifier son comportement sans délai.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Élever ses enfants dans la piété pour perpétuer le cycle
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hadith de Muslim (1631) montre que l&apos;enfant pieux est une source de récompense continue pour ses parents, même après leur mort. Investir dans l&apos;éducation islamique des enfants est donc un investissement pour l&apos;au-delà des parents eux-mêmes.
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
                  description="Comprenez les hadiths sur les parents dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la famille et les liens de parenté en islam"
                  description="Les enseignements prophétiques sur la silat ar-rahim, les droits des proches et la préservation des liens familiaux."
                  href="/hadith-famille-liens-parente-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la femme en islam : droits, dignité et piété"
                  description="Les hadiths authentiques sur le statut de la femme, ses droits et son rôle spirituel dans la Sunna."
                  href="/hadith-femme-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
