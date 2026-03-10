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
    "Hadiths sur le salam en islam : guide complet des enseignements prophétiques",
  description:
    "Découvrez les hadiths authentiques sur le salam en islam : propager la salutation, formule complète, saluer les inconnus, salam en entrant et en sortant. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur le salam en islam : guide complet des enseignements prophétiques",
    description:
      "Les hadiths authentiques sur le salam en islam : répandre la salutation de paix, ses mérites, ses règles et son impact sur la fraternité musulmane.",
    url: "https://www.islamreligion.fr/hadith-salam-islam",
    images: [
      {
        url: "/images/salle-priere-mosquee-arches-lumiere-soleil.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-salam-islam",
  },
};

const tocItems = [
  { id: "merites-salam", label: "Les mérites du salam" },
  { id: "formule-complete", label: "La formule complète du salam" },
  { id: "regles-salam", label: "Les règles du salam" },
  { id: "salam-entrer-sortir", label: "Le salam en entrant et en sortant" },
  { id: "salam-non-musulmans", label: "Répondre au salam des non-musulmans" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur le salam en islam ?",
    answer:
      "Les hadiths les plus importants sur le salam incluent celui rapporté par Abu Hurayra sur la propagation du salam comme moyen de s\u2019aimer les uns les autres (Muslim 54), celui d\u2019Imran ibn Husayn sur la formule complète et ses récompenses graduelles (Tirmidhi 2689), et celui d\u2019Abdullah ibn \u2018Amr sur le fait de saluer ceux que l\u2019on connaît et ceux que l\u2019on ne connaît pas (Bukhari 12). Ces hadiths couvrent les fondements du salam : ses mérites, sa formule et son universalité.",
  },
  {
    question:
      "Est-il obligatoire de répondre au salam en islam ?",
    answer:
      "Oui, répondre au salam est une obligation (fard \u2018ayn) lorsque le salam est adressé à une seule personne, et une obligation collective (fard kifaya) lorsqu\u2019il est adressé à un groupe : si l\u2019un des membres du groupe répond, l\u2019obligation est levée pour les autres. Cela est fondé sur le verset coranique : \u00ab Quand on vous salue d\u2019un salut, saluez d\u2019un meilleur salut ou rendez-le \u00bb (Coran 4:86) et sur les hadiths du Prophète \u2018alayhi salatu wa salam.",
  },
  {
    question:
      "Quelle est la meilleure formule de salam selon les hadiths ?",
    answer:
      "La formule la plus complète et la plus récompensée est \u00ab as-salamu alaykum wa rahmatullahi wa barakatuh \u00bb (que la paix, la miséricorde et les bénédictions d\u2019Allah soient sur vous). Selon le hadith d\u2019Imran ibn Husayn (Tirmidhi 2689), cette formule rapporte trente hassanat (bonnes actions), contre vingt pour la formule avec \u00ab wa rahmatullahi \u00bb et dix pour \u00ab as-salamu alaykum \u00bb seul.",
  },
  {
    question:
      "Faut-il saluer les personnes que l\u2019on ne connaît pas en islam ?",
    answer:
      "Oui, le Prophète \u2018alayhi salatu wa salam a explicitement recommandé de saluer ceux que l\u2019on connaît et ceux que l\u2019on ne connaît pas (Bukhari 12). Ce comportement fait partie des meilleures actions de l\u2019islam et contribue à renforcer les liens de fraternité au sein de la communauté. Limiter le salam aux connaissances est considéré comme un signe de la fin des temps.",
  },
  {
    question:
      "Quel est le lien entre le salam et l\u2019amour fraternel en islam ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a établi un lien direct entre le salam et l\u2019amour fraternel. Dans un hadith rapporté par Muslim (54), il a dit : \u00ab Vous n\u2019entrerez pas au Paradis tant que vous ne croirez pas, et vous ne croirez pas tant que vous ne vous aimerez pas. Voulez-vous que je vous indique une chose qui, si vous la faites, vous vous aimerez ? Répandez le salam entre vous. \u00bb Le salam est donc un moyen concret d\u2019atteindre la foi véritable.",
  },
  {
    question:
      "Doit-on dire le salam avant de commencer à parler ?",
    answer:
      "Oui, le Prophète \u2018alayhi salatu wa salam a enseigné que le salam précède la parole. Dans un hadith rapporté par Tirmidhi (2699), il a dit : \u00ab Le salam précède la parole. \u00bb Cela signifie qu\u2019il convient de saluer avant d\u2019entamer une conversation ou de formuler une demande. Ce hadith instaure une étiquette islamique qui place le respect et la bienveillance au début de toute interaction.",
  },
  {
    question:
      "Comment le Prophète Adam a-t-il appris le salam ?",
    answer:
      "Selon un hadith rapporté par Abu Hurayra (Bukhari 3326, Muslim 2841), Allah a dit à Adam d\u2019aller saluer un groupe d\u2019anges en disant \u00ab as-salamu alaykum \u00bb, et de retenir leur réponse car ce serait sa salutation et celle de sa descendance. Les anges ont répondu \u00ab wa alaykum as-salam wa rahmatullah \u00bb. Le salam est donc la première parole enseignée à l\u2019humanité.",
  },
  {
    question:
      "Les hadiths sur le salam s\u2019appliquent-ils aux musulmans d\u2019aujourd\u2019hui ?",
    answer:
      "Oui, les enseignements prophétiques sur le salam sont intemporels et parfaitement applicables à notre époque. Que ce soit en personne, par téléphone ou par message, le principe reste le même : initier le contact par une salutation de paix, répondre avec bienveillance et propager le salam pour renforcer les liens de fraternité. Les savants contemporains insistent sur l\u2019importance de raviver cette sunna dans les sociétés modernes.",
  },
];

export default function HadithSalamIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-salam-islam/#article",
        headline:
          "Hadiths sur le salam en islam : guide complet des enseignements prophétiques",
        description:
          "Découvrez les hadiths authentiques sur le salam en islam : propager la salutation, formule complète, saluer les inconnus, salam en entrant et en sortant.",
        image: "/images/salle-priere-mosquee-arches-lumiere-soleil.jpg",
        datePublished: "2026-05-07",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-salam-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-salam-islam/#breadcrumb",
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
            name: "Hadiths sur le salam",
            item: "https://www.islamreligion.fr/hadith-salam-islam",
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
          title="Hadiths sur le salam en islam"
          subtitle="Les enseignements prophétiques sur la salutation de paix : ses mérites, sa formule complète, ses règles et son rôle dans la fraternité musulmane selon la Sunna authentique."
          imageSrc="/images/salle-priere-mosquee-arches-lumiere-soleil.jpg"
          imageAlt="Hadiths sur le salam en islam, enseignements prophétiques sur la salutation de paix"
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
                  Hadiths sur le salam
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
                    Le Prophète ﷺ a fait du salam un pilier de la fraternité musulmane : le répandre est un moyen d&apos;accéder au Paradis et de s&apos;aimer les uns les autres.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La formule complète &laquo;&nbsp;as-salamu alaykum wa rahmatullahi wa barakatuh&nbsp;&raquo; rapporte trente hassanat, soit le triple de la formule courte.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le salam est la première parole enseignée à Adam &apos;alayhi salam, et donc la première salutation de l&apos;humanité.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Répondre au salam est une obligation religieuse (fard), et le Prophète ﷺ a encouragé à saluer ceux que l&apos;on connaît comme ceux que l&apos;on ne connaît pas.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Mérites du salam     */}
              {/* ============================== */}
              <section id="merites-salam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les mérites du salam en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le salam n&apos;est pas une simple formule de politesse : c&apos;est un acte d&apos;adoration à part entière. Le Coran et la Sunna lui accordent une place centrale dans les relations entre musulmans. Allah Lui-même salue les croyants dans le Coran, et le Prophète ﷺ a fait du salam la clé de la fraternité et l&apos;un des chemins vers le Paradis.
                </p>

                <HadithCard
                  arabic="وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا"
                  text="Quand on vous salue d&apos;un salut, saluez d&apos;un salut meilleur ou rendez-le."
                  source="Coran, sourate An-Nisa (4:86)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset établit deux obligations : soit rendre un salut au moins équivalent, soit répondre par un salut meilleur. Les savants en déduisent que répondre au salam est un devoir (<em>fard</em>), tandis que l&apos;initier est une sunna fortement recommandée. Ce cadre coranique est précisé et enrichi par les hadiths du Prophète ﷺ.
                </p>

                <HadithBlock
                  number={1}
                  title="Répandez le salam et vous vous aimerez"
                  narrator="Abu Hurayra"
                  arabic="وَالَّذِي نَفْسِي بِيَدِهِ لَا تَدْخُلُونَ الْجَنَّةَ حَتَّى تُؤْمِنُوا وَلَا تُؤْمِنُوا حَتَّى تَحَابُّوا أَوَلَا أَدُلُّكُمْ عَلَى شَيْءٍ إِذَا فَعَلْتُمُوهُ تَحَابَبْتُمْ أَفْشُوا السَّلَامَ بَيْنَكُمْ"
                  translation="Par Celui qui détient mon âme dans Sa main, vous n&apos;entrerez pas au Paradis tant que vous ne croirez pas, et vous ne croirez pas tant que vous ne vous aimerez pas. Voulez-vous que je vous indique une chose qui, si vous la faites, vous vous aimerez ? Répandez le salam entre vous."
                  source="Sahih Muslim, n°54"
                  grade="sahih"
                  explanation="Ce hadith établit une chaîne causale remarquable : le salam engendre l&apos;amour, l&apos;amour engendre la foi, et la foi ouvre les portes du Paradis. Le Prophète ﷺ place le salam comme le premier maillon de cette chaîne. Le verbe &laquo; afshu &raquo; (répandez) indique qu&apos;il ne s&apos;agit pas de saluer occasionnellement, mais de faire du salam une habitude constante et universelle. Les savants soulignent que ce hadith lie la foi individuelle à la cohésion communautaire."
                />

                <HadithBlock
                  number={2}
                  title="Le meilleur islam : nourrir et saluer"
                  narrator="Abdullah ibn &apos;Amr"
                  arabic="أَيُّ الْإِسْلَامِ خَيْرٌ قَالَ تُطْعِمُ الطَّعَامَ وَتَقْرَأُ السَّلَامَ عَلَى مَنْ عَرَفْتَ وَمَنْ لَمْ تَعْرِفْ"
                  translation="Un homme demanda au Prophète ﷺ : &laquo; Quel est le meilleur islam ? &raquo; Il répondit : &laquo; Que tu nourrisses (les gens) et que tu salues ceux que tu connais et ceux que tu ne connais pas. &raquo;"
                  source="Sahih Al-Bukhari, n°12 — Sahih Muslim, n°39"
                  grade="sahih"
                  explanation="Ce hadith associe deux actes de générosité : la nourriture pour le corps et le salam pour le cœur. Le Prophète ﷺ insiste sur le fait de saluer &laquo; ceux que tu ne connais pas &raquo;, brisant ainsi les barrières sociales et les cloisonnements communautaires. Le salam n&apos;est pas réservé aux proches ou aux amis : il est un droit de tout musulman que l&apos;on croise. Les savants y voient l&apos;un des fondements de la sociabilité islamique."
                />

                <HadithBlock
                  number={3}
                  title="Les droits du musulman sur le musulman"
                  narrator="Abu Hurayra"
                  arabic="حَقُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ سِتٌّ: إِذَا لَقِيتَهُ فَسَلِّمْ عَلَيْهِ وَإِذَا دَعَاكَ فَأَجِبْهُ وَإِذَا اسْتَنْصَحَكَ فَانْصَحْهُ وَإِذَا عَطَسَ فَحَمِدَ اللَّهَ فَشَمِّتْهُ وَإِذَا مَرِضَ فَعُدْهُ وَإِذَا مَاتَ فَاتَّبِعْهُ"
                  translation="Les droits du musulman sur le musulman sont au nombre de six : quand tu le rencontres, salue-le ; quand il t&apos;invite, accepte son invitation ; quand il te demande conseil, conseille-le ; quand il éternue et loue Allah, invoque la miséricorde pour lui ; quand il est malade, rends-lui visite ; et quand il meurt, suis son cortège funèbre."
                  source="Sahih Muslim, n°2162"
                  grade="sahih"
                  explanation="Ce hadith place le salam en tête des six droits du musulman sur son frère. Ce n&apos;est pas un hasard : la salutation est le premier contact, la porte d&apos;entrée de toute relation. En le citant en premier, le Prophète ﷺ montre que le salam est le socle sur lequel se construisent tous les autres droits fraternels. Négliger le salam, c&apos;est fragiliser l&apos;ensemble du tissu social de la communauté."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths révèlent la dimension spirituelle du salam. Loin d&apos;être un simple rituel de politesse, il est un acte de foi qui renforce les liens entre les croyants. Pour approfondir les enseignements sur les relations fraternelles, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ======================================= */}
              {/* SECTION : La formule complète du salam  */}
              {/* ======================================= */}
              <section id="formule-complete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La formule complète du salam et ses récompenses
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a enseigné que la salutation islamique comporte trois niveaux, chacun apportant une récompense croissante. La formule la plus complète est la plus méritoire, et les hadiths suivants détaillent ces degrés avec précision.
                </p>

                <HadithBlock
                  number={4}
                  title="Dix, vingt, trente hassanat selon la formule"
                  narrator="Imran ibn Husayn"
                  arabic="جَاءَ رَجُلٌ إِلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ السَّلَامُ عَلَيْكُمْ فَرَدَّ عَلَيْهِ ثُمَّ جَلَسَ فَقَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَشْرٌ ثُمَّ جَاءَ آخَرُ فَقَالَ السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ فَرَدَّ عَلَيْهِ فَجَلَسَ فَقَالَ عِشْرُونَ ثُمَّ جَاءَ آخَرُ فَقَالَ السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ فَرَدَّ عَلَيْهِ فَجَلَسَ فَقَالَ ثَلَاثُونَ"
                  translation="Un homme vint au Prophète ﷺ et dit : &laquo; As-salamu alaykum. &raquo; Le Prophète répondit, puis l&apos;homme s&apos;assit. Le Prophète ﷺ dit : &laquo; Dix. &raquo; Puis un autre vint et dit : &laquo; As-salamu alaykum wa rahmatullah. &raquo; Le Prophète répondit, puis l&apos;homme s&apos;assit. Le Prophète ﷺ dit : &laquo; Vingt. &raquo; Puis un troisième vint et dit : &laquo; As-salamu alaykum wa rahmatullahi wa barakatuh. &raquo; Le Prophète répondit, puis l&apos;homme s&apos;assit. Le Prophète ﷺ dit : &laquo; Trente. &raquo;"
                  source="Jami&apos; at-Tirmidhi, n°2689"
                  grade="sahih"
                  explanation="Ce hadith illustre de manière pédagogique la gradation des récompenses. Le Prophète ﷺ comptabilise publiquement les hassanat (bonnes actions) pour chaque formule, encourageant les Compagnons à utiliser la version la plus complète. Chaque ajout — la miséricorde (rahma) puis les bénédictions (barakat) — multiplie la récompense par dix. Les savants recommandent d&apos;utiliser systématiquement la formule complète pour maximiser le mérite."
                />

                <HadithBlock
                  number={5}
                  title="Le salam d&apos;Adam aux anges"
                  narrator="Abu Hurayra"
                  arabic="خَلَقَ اللَّهُ آدَمَ عَلَى صُورَتِهِ طُولُهُ سِتُّونَ ذِرَاعًا فَلَمَّا خَلَقَهُ قَالَ اذْهَبْ فَسَلِّمْ عَلَى أُولَئِكَ النَّفَرِ مِنَ الْمَلَائِكَةِ فَاسْتَمِعْ مَا يُحَيُّونَكَ فَإِنَّهَا تَحِيَّتُكَ وَتَحِيَّةُ ذُرِّيَّتِكَ فَقَالَ السَّلَامُ عَلَيْكُمْ فَقَالُوا السَّلَامُ عَلَيْكَ وَرَحْمَةُ اللَّهِ"
                  translation="Allah créa Adam, puis lui dit : &laquo; Va saluer ce groupe d&apos;anges et écoute comment ils te répondront, car ce sera ta salutation et celle de ta descendance. &raquo; Adam dit : &laquo; As-salamu alaykum. &raquo; Les anges répondirent : &laquo; As-salamu alayka wa rahmatullah. &raquo;"
                  source="Sahih Al-Bukhari, n°3326 — Sahih Muslim, n°2841"
                  grade="sahih"
                  explanation="Ce hadith confère au salam une dimension cosmique et originelle. Il n&apos;a pas été inventé par une culture ou une civilisation : il a été enseigné par Allah Lui-même au premier être humain. Les anges ont répondu en ajoutant &laquo; wa rahmatullah &raquo;, conformément au principe coranique de répondre par un salut meilleur. Ce hadith montre que le salam est inscrit dans la nature humaine (fitra) depuis la création d&apos;Adam &apos;alayhi salam."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez les hadiths, le bon comportement et les règles de bienséance islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Règles du salam      */}
              {/* ============================== */}
              <section id="regles-salam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les règles du salam selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a établi des règles précises concernant le salam : qui salue en premier, le salam avant toute parole, et l&apos;importance de saluer les inconnus. Ces règles structurent les interactions sociales et créent un climat de respect mutuel au sein de la communauté.
                </p>

                <HadithBlock
                  number={6}
                  title="Le salam précède la parole"
                  narrator="Jabir ibn Abdullah"
                  arabic="السَّلَامُ قَبْلَ الْكَلَامِ"
                  translation="Le salam précède la parole."
                  source="Jami&apos; at-Tirmidhi, n°2699"
                  grade="hasan"
                  explanation="Ce hadith concis établit une règle d&apos;étiquette fondamentale : avant toute conversation, demande ou échange, il convient de saluer. Le salam crée un climat de bienveillance qui prépare l&apos;interlocuteur à recevoir la parole. Les savants soulignent que cette règle s&apos;applique aussi bien aux rencontres en personne qu&apos;aux communications à distance. Le Prophète ﷺ désapprouvait que l&apos;on commence par formuler une requête sans avoir d&apos;abord salué."
                />

                <HadithBlock
                  number={7}
                  title="Qui doit saluer en premier"
                  narrator="Abu Hurayra"
                  arabic="يُسَلِّمُ الرَّاكِبُ عَلَى الْمَاشِي وَالْمَاشِي عَلَى الْقَاعِدِ وَالْقَلِيلُ عَلَى الْكَثِيرِ"
                  translation="Le cavalier salue le piéton, le piéton salue celui qui est assis, et le petit groupe salue le grand groupe."
                  source="Sahih Al-Bukhari, n°6231 — Sahih Muslim, n°2160"
                  grade="sahih"
                  explanation="Ce hadith organise la priorité dans l&apos;initiative du salam selon trois critères : la mobilité, la position et le nombre. Celui qui est en mouvement salue celui qui est stationnaire, et le groupe minoritaire salue le groupe majoritaire. Les savants expliquent que cette organisation vise à rassurer : celui qui arrive est en position de surprendre, et son salam dissipe toute appréhension. Toutefois, si l&apos;ordre n&apos;est pas respecté, l&apos;autre partie doit tout de même initier le salam plutôt que de s&apos;en priver."
                />

                <HadithBlock
                  number={8}
                  title="Le plus méritoire est celui qui salue en premier"
                  narrator="Abu Umama al-Bahili"
                  arabic="إِنَّ أَوْلَى النَّاسِ بِاللَّهِ مَنْ بَدَأَهُمْ بِالسَّلَامِ"
                  translation="Les gens les plus proches d&apos;Allah sont ceux qui les saluent en premier."
                  source="Sunan Abu Dawud, n°5197"
                  grade="hasan"
                  explanation="Ce hadith ajoute une dimension spirituelle à l&apos;initiative du salam. Celui qui prend l&apos;initiative de saluer n&apos;est pas en position de faiblesse ou de soumission : il est, au contraire, le plus proche d&apos;Allah. Ce hadith encourage les musulmans à ne pas attendre que l&apos;autre salue, mais à devancer par le salam. Les savants y voient un remède contre l&apos;orgueil, car celui qui refuse de saluer en premier le fait souvent par fierté."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces règles montrent que le salam n&apos;est pas laissé au hasard : le Prophète ﷺ a structuré cette pratique pour qu&apos;elle soit source d&apos;ordre, de respect et de proximité avec Allah. Pour découvrir d&apos;autres enseignements sur les relations sociales, consultez notre article sur les{" "}
                  <Link href="/hadith-amitie-frequentation-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur l&apos;amitié et la fréquentation en islam
                  </Link>.
                </p>
              </section>

              {/* ======================================== */}
              {/* SECTION : Salam en entrant et en sortant */}
              {/* ======================================== */}
              <section id="salam-entrer-sortir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le salam en entrant et en sortant
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a enseigné que le salam accompagne chaque entrée et chaque sortie. Que l&apos;on entre chez soi, dans une assemblée ou dans une mosquée, le salam est la première parole à prononcer. De même, lorsqu&apos;on quitte un lieu, le salam clôt la rencontre avec bienveillance.
                </p>

                <HadithBlock
                  number={9}
                  title="Saluer en entrant chez soi"
                  narrator="Anas ibn Malik"
                  arabic="يَا بُنَيَّ إِذَا دَخَلْتَ عَلَى أَهْلِكَ فَسَلِّمْ يَكُنْ بَرَكَةً عَلَيْكَ وَعَلَى أَهْلِ بَيْتِكَ"
                  translation="Ô mon fils, lorsque tu entres chez ta famille, salue-les : ce sera une bénédiction pour toi et pour les gens de ta maison."
                  source="Jami&apos; at-Tirmidhi, n°2698"
                  grade="hasan"
                  explanation="Le Prophète ﷺ s&apos;adresse ici à Anas avec tendresse (&laquo; mon fils &raquo;) pour lui enseigner une sunna du quotidien. Le salam en entrant chez soi apporte la baraka (bénédiction) dans le foyer. Les savants expliquent que cette pratique chasse les shayatin et répand la sérénité dans la maison. Même si le foyer est vide, certains savants recommandent de dire &laquo; as-salamu alayna wa &apos;ala &apos;ibadillahi as-salihin &raquo; (que la paix soit sur nous et sur les serviteurs pieux d&apos;Allah)."
                />

                <HadithBlock
                  number={10}
                  title="Saluer en arrivant et en partant"
                  narrator="Abu Hurayra"
                  arabic="إِذَا انْتَهَى أَحَدُكُمْ إِلَى الْمَجْلِسِ فَلْيُسَلِّمْ فَإِذَا أَرَادَ أَنْ يَقُومَ فَلْيُسَلِّمْ فَلَيْسَتِ الْأُولَى بِأَحَقَّ مِنَ الْآخِرَةِ"
                  translation="Lorsque l&apos;un de vous arrive dans une assemblée, qu&apos;il salue. Et lorsqu&apos;il veut partir, qu&apos;il salue. Le premier salam n&apos;est pas plus méritoire que le dernier."
                  source="Sunan Abu Dawud, n°5208 — Jami&apos; at-Tirmidhi, n°2706"
                  grade="hasan"
                  explanation="Ce hadith enseigne que le salam encadre toute rencontre : il l&apos;ouvre et la clôt. La plupart des gens saluent en arrivant mais oublient de saluer en partant. Le Prophète ﷺ précise que les deux salams ont la même valeur. Les savants en déduisent que quitter une assemblée sans saluer est un manquement à la sunna. Ce double salam crée un cercle de bienveillance autour de chaque interaction sociale."
                />
              </section>

              {/* ============================================ */}
              {/* SECTION : Répondre au salam des non-musulmans */}
              {/* ============================================ */}
              <section id="salam-non-musulmans" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Répondre au salam des non-musulmans
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a également donné des directives sur la manière de répondre au salam des non-musulmans, dans un souci de justice et de bienséance, tout en préservant la spécificité de la salutation islamique.
                </p>

                <HadithBlock
                  number={11}
                  title="Répondre par &laquo; wa alaykum &raquo;"
                  narrator="Anas ibn Malik"
                  arabic="إِذَا سَلَّمَ عَلَيْكُمْ أَهْلُ الْكِتَابِ فَقُولُوا وَعَلَيْكُمْ"
                  translation="Lorsque les Gens du Livre vous saluent, répondez : &laquo; Wa alaykum &raquo; (et sur vous de même)."
                  source="Sahih Al-Bukhari, n°6258 — Sahih Muslim, n°2163"
                  grade="sahih"
                  explanation="Ce hadith a été prononcé dans un contexte historique précis où certains non-musulmans de Médine déformaient la salutation en disant &laquo; as-samu alaykum &raquo; (que la mort soit sur vous) au lieu de &laquo; as-salamu alaykum &raquo;. Le Prophète ﷺ a prescrit une réponse neutre — &laquo; wa alaykum &raquo; (et sur vous de même) — qui ne cause pas de tort et préserve la dignité de l&apos;échange. Les savants contemporains, dont le cheikh Ibn Baz et le cheikh al-Qaradawi, précisent que si un non-musulman salue clairement par &laquo; as-salamu alaykum &raquo;, il est permis de répondre de la même manière."
                />

                <HadithBlock
                  number={12}
                  title="Ne commencez pas par le salam envers les Gens du Livre"
                  narrator="Abu Hurayra"
                  arabic="لَا تَبْدَءُوا الْيَهُودَ وَلَا النَّصَارَى بِالسَّلَامِ فَإِذَا لَقِيتُمْ أَحَدَهُمْ فِي طَرِيقٍ فَاضْطَرُّوهُ إِلَى أَضْيَقِهِ"
                  translation="Ne commencez pas par le salam envers les juifs et les chrétiens. Et si vous rencontrez l&apos;un d&apos;eux sur un chemin, contraignez-le à sa partie la plus étroite."
                  source="Sahih Muslim, n°2167"
                  grade="sahih"
                  explanation="Ce hadith a fait l&apos;objet de nombreux commentaires savants. La majorité des érudits le replacent dans son contexte historique : il a été prononcé lors de la campagne de Banu Qurayza, en période de conflit armé. L&apos;imam An-Nawawi et d&apos;autres savants expliquent que cette interdiction concerne un contexte de guerre ou de tensions, et non les relations de voisinage et de cohabitation pacifique. De nombreux savants contemporains permettent d&apos;initier un salam général ou une salutation de courtoisie envers les non-musulmans dans un cadre de bonne convivialité."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le salam et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur le salam. Leurs explications permettent de mieux saisir la portée juridique et spirituelle de cette salutation unique.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le salam est la clé de la bienveillance. Lorsque l&apos;on salue, on annonce la paix et la sécurité, et l&apos;interlocuteur se sent rassuré. C&apos;est pourquoi le Prophète ﷺ a ordonné de le répandre, car une communauté qui se salue est une communauté qui s&apos;aime.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Répondre au salam est une obligation par consensus des savants. Quant à l&apos;initier, c&apos;est une sunna mu&apos;akkada (fortement recommandée). Celui qui délaisse le salam volontairement s&apos;expose à un blâme, car il prive son frère d&apos;un droit que l&apos;islam lui a garanti.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le fait que le salam soit la première chose qu&apos;Allah a enseignée à Adam montre qu&apos;il est inscrit dans la nature première (fitra) de l&apos;être humain. Délaisser le salam, c&apos;est s&apos;éloigner de cette fitra originelle.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que le salam n&apos;est pas un simple geste social : il est un acte juridiquement encadré, spirituellement récompensé et profondément ancré dans la tradition prophétique. Les quatre écoles de jurisprudence s&apos;accordent sur l&apos;obligation de répondre au salam et sur le mérite de l&apos;initier.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour la pratique quotidienne du salam :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Répandre le salam sans distinction
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Saluez ceux que vous connaissez et ceux que vous ne connaissez pas. Le salam n&apos;est pas réservé aux proches : il est un droit de tout musulman que vous croisez.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Utiliser la formule complète
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Dites &laquo;&nbsp;as-salamu alaykum wa rahmatullahi wa barakatuh&nbsp;&raquo; pour obtenir trente hassanat au lieu de dix. Chaque mot ajouté triple la récompense.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Toujours saluer avant de parler
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le salam précède toute conversation, toute demande et tout échange. C&apos;est la porte d&apos;entrée de la communication en islam.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Prendre l&apos;initiative de saluer
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les gens les plus proches d&apos;Allah sont ceux qui saluent en premier. Ne laissez pas l&apos;orgueil vous empêcher d&apos;initier le salam.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Saluer en entrant et en sortant
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le salam accompagne chaque entrée et chaque sortie, que ce soit chez soi, dans une mosquée ou dans une assemblée. Le dernier salam a autant de valeur que le premier.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Répondre au salam est une obligation
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Ne pas répondre au salam est un péché selon le consensus des savants. Répondez toujours, même si vous êtes occupé, par un salam au moins équivalent.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      7
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Le salam renforce la fraternité
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a lié le salam à l&apos;amour fraternel, la foi et le Paradis. Chaque salam donné est un investissement dans la cohésion de la communauté.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le salam dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Les hadiths sur le bon comportement en islam"
                  description="Découvrez les enseignements prophétiques sur les bonnes manières, la bienveillance et le caractère noble."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths sur l&apos;amitié et la fréquentation en islam"
                  description="Les enseignements du Prophète ﷺ sur le choix des compagnons et l&apos;importance de la bonne fréquentation."
                  href="/hadith-amitie-frequentation-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths sur le voisin en islam"
                  description="Les droits du voisin et les obligations de bon voisinage selon la Sunna authentique."
                  href="/hadith-voisin-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
