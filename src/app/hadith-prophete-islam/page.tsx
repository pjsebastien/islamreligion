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
  title: "Hadiths du Prophète Muhammad ﷺ : paroles et enseignements essentiels",
  description:
    "Découvrez les hadiths les plus importants du Prophète Muhammad ﷺ classés par thème : foi, comportement, science, charité et famille. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title: "Hadiths du Prophète Muhammad ﷺ : paroles et enseignements essentiels",
    description:
      "Les 15 hadiths essentiels du Prophète ﷺ avec texte arabe, traduction française, source vérifiée et explication. Un guide complet pour comprendre la Sunna.",
    url: "https://www.islamreligion.fr/hadith-prophete-islam",
    images: [
      {
        url: "/images/priere-islam-doua-mosquee-silhouette.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-prophete-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "definition-hadith", label: "Qu&apos;est-ce qu&apos;un hadith ?" },
  { id: "hadiths-foi", label: "Hadiths sur la foi" },
  { id: "hadiths-comportement", label: "Hadiths sur le comportement" },
  { id: "hadiths-science", label: "Hadiths sur la science" },
  { id: "hadiths-solidarite", label: "Hadiths sur la solidarité" },
  { id: "hadiths-famille", label: "Hadiths sur la famille" },
  { id: "enseignements", label: "Enseignements pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Qu&apos;est-ce qu&apos;un hadith et pourquoi est-il important ?",
    answer:
      "Un hadith est une parole, un acte ou une approbation tacite du Prophète Muhammad ﷺ, transmis par ses Compagnons. Les hadiths constituent la Sunna, deuxième source de législation islamique après le Coran. Ils expliquent, précisent et complètent les enseignements coraniques dans tous les domaines de la vie.",
  },
  {
    question: "Quelle est la différence entre un hadith Sahih et un hadith Da\u2019if ?",
    answer:
      "Un hadith Sahih (authentique) possède une chaîne de transmission continue, dont chaque rapporteur est reconnu pour sa probité et sa précision. Un hadith Da\u2019if (faible) présente un défaut dans sa chaîne ou dans son texte. Les savants classent aussi les hadiths Hasan (bons), un niveau intermédiaire. On ne fonde pas de règles juridiques sur un hadith Da\u2019if seul.",
  },
  {
    question: "Combien de hadiths authentiques existent-ils ?",
    answer:
      "Le Sahih Al-Bukhari contient environ 7 275 hadiths (dont 2 602 sans répétition) et le Sahih Muslim environ 3 033 sans répétition. L\u2019ensemble des six grandes collections (Kutub as-Sittah) rassemble des dizaines de milliers de hadiths couvrant tous les aspects de la vie du musulman.",
  },
  {
    question: "Qui a compilé les hadiths et comment ont-ils été vérifiés ?",
    answer:
      "Les grands compilateurs comme Al-Bukhari, Muslim, Abu Dawud, At-Tirmidhi, An-Nasa\u2019i et Ibn Majah ont voyagé à travers le monde musulman pour recueillir les hadiths. Ils ont développé la science du jarh wa ta\u2019dil (critique des rapporteurs) pour vérifier la fiabilité de chaque maillon de la chaîne de transmission (isnad).",
  },
  {
    question: "Peut-on pratiquer l\u2019islam uniquement avec le Coran, sans les hadiths ?",
    answer:
      "Non, les hadiths sont indispensables pour comprendre et appliquer le Coran. Par exemple, le Coran ordonne la prière mais ne précise pas le nombre de rak\u2019at ni les gestes. C\u2019est la Sunna du Prophète ﷺ qui détaille la pratique. Allah dit dans le Coran : \u00ab Prenez ce que le Messager vous donne \u00bb (59:7).",
  },
  {
    question: "Quel est le hadith le plus célèbre en islam ?",
    answer:
      "Le hadith le plus célèbre est celui des intentions, rapporté par \u2019Umar ibn al-Khattab : \u00ab Les actes ne valent que par les intentions \u00bb (Sahih Al-Bukhari, n°1). Les savants comme l\u2019imam An-Nawawi, Al-Bukhari et Ash-Shafi\u2019i considèrent ce hadith comme un tiers ou même la moitié de la science islamique.",
  },
];

export default function HadithPropheteIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.islamreligion.fr/hadith-prophete-islam/#article",
        url: "https://www.islamreligion.fr/hadith-prophete-islam",
        name: "Hadiths du Prophète Muhammad ﷺ : paroles et enseignements essentiels",
        headline: "Hadiths du Prophète Muhammad ﷺ : paroles et enseignements essentiels",
        description:
          "Découvrez les hadiths les plus importants du Prophète Muhammad ﷺ classés par thème : foi, comportement, science, charité et famille.",
        image: "/images/priere-islam-doua-mosquee-silhouette.jpg",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        author: {
          "@type": "Organization",
          name: "Islam Religion",
          url: "https://www.islamreligion.fr",
        },
        datePublished: "2025-06-01",
        dateModified: "2025-06-01",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.islamreligion.fr/hadith-prophete-islam/#breadcrumb",
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
            name: "Hadiths du Prophète",
            item: "https://www.islamreligion.fr/hadith-prophete-islam",
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
          title="Hadiths du Prophète Muhammad ﷺ : les paroles essentielles"
          subtitle="Découvrez les hadiths les plus importants du Prophète Muhammad ﷺ classés par thème. Texte arabe original, traduction française, source vérifiée et explication détaillée de chaque hadith."
          imageSrc="/images/priere-islam-doua-mosquee-silhouette.jpg"
          imageAlt="Silhouette de musulman en prière dans une mosquée, symbolisant les enseignements du Prophète Muhammad ﷺ"
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

              {/* Breadcrumb */}
              <nav aria-label="Fil d'Ariane" className="mb-8 mt-4 lg:mt-0">
                <ol className="flex flex-wrap items-center gap-1.5 text-sm text-foreground-secondary">
                  <li>
                    <Link href="/" className="transition-colors hover:text-primary">
                      Accueil
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link href="/hadith-du-jour" className="transition-colors hover:text-primary">
                      Hadith du jour
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="font-medium text-foreground">Hadiths du Prophète</li>
                </ol>
              </nav>

              {/* A retenir */}
              <div className="mb-10 rounded-xl border border-secondary/30 bg-secondary/5 p-5 lg:p-6">
                <h2 className="mb-3 text-lg font-semibold text-primary">À retenir</h2>
                <ul className="space-y-2 text-base leading-relaxed text-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1 text-secondary">✦</span>
                    <span>Les hadiths sont la deuxième source de législation islamique après le Coran et expliquent la pratique religieuse dans ses moindres détails.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 text-secondary">✦</span>
                    <span>Le Coran lui-même ordonne d&apos;obéir au Prophète ﷺ et de suivre son exemple dans plusieurs versets explicites.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 text-secondary">✦</span>
                    <span>Les hadiths couvrent tous les aspects de la vie : foi, comportement, science, solidarite, famille et relations sociales.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 text-secondary">✦</span>
                    <span>Chaque hadith a été vérifié par des savants spécialisés à travers la science du isnad (chaîne de transmission) et du jarh wa ta&apos;dil (critique des rapporteurs).</span>
                  </li>
                </ul>
              </div>

              {/* ─── Section : Contexte coranique ─── */}
              <section id="contexte-coranique" className="scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                  Contexte coranique : l&apos;obligation de suivre le Prophète ﷺ
                </h2>
                <p className="mb-4 text-base leading-relaxed text-foreground">
                  Avant d&apos;explorer les hadiths du Prophète Muhammad ﷺ, il est essentiel de comprendre que le Coran lui-même établit l&apos;autorité prophétique. Obéir au Prophète ﷺ n&apos;est pas une option mais un commandement divin répété dans plusieurs sourates. Le Coran et la Sunna forment un ensemble indissociable : le premier pose les principes, la seconde les détaille et les illustre par l&apos;exemple prophétique.
                </p>
                <p className="mb-6 text-base leading-relaxed text-foreground">
                  Allah a choisi Muhammad ﷺ comme &laquo;&nbsp;bel exemple&nbsp;&raquo; (uswatun hasana) pour l&apos;humanité. Ses paroles, ses actes et ses approbations tacites constituent une source de guidance que tout musulman doit connaître et appliquer. Voici trois versets fondamentaux qui attestent de cette autorité.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ"
                  text="Ô les croyants ! Obéissez à Allah, obéissez au Messager et à ceux d&apos;entre vous qui détiennent l&apos;autorité."
                  source="Sourate An-Nisa, 4:59"
                />

                <HadithCard
                  arabic="وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا"
                  text="Prenez ce que le Messager vous donne, et ce qu&apos;il vous interdit, abstenez-vous-en."
                  source="Sourate Al-Hashr, 59:7"
                />

                <HadithCard
                  arabic="لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ"
                  text="En vérité, vous avez dans le Messager d&apos;Allah un excellent modèle pour quiconque espère en Allah et au Jour dernier."
                  source="Sourate Al-Ahzab, 33:21"
                />

                <p className="mb-6 text-base leading-relaxed text-foreground">
                  Ces versets établissent sans ambiguïté que l&apos;obéissance au Prophète ﷺ est une obéissance à Allah. C&apos;est la raison pour laquelle les savants musulmans ont consacré leur vie à collecter, vérifier et préserver les hadiths prophétiques avec une rigueur scientifique sans précédent dans l&apos;histoire humaine.
                </p>
              </section>

              {/* ─── Section : Definition et sciences du hadith ─── */}
              <section id="definition-hadith" className="mt-14 scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                  Qu&apos;est-ce qu&apos;un hadith ? Définition et sciences
                </h2>
                <p className="mb-4 text-base leading-relaxed text-foreground">
                  Le mot &laquo;&nbsp;hadith&nbsp;&raquo; (حديث) signifie littéralement &laquo;&nbsp;propos&nbsp;&raquo; ou &laquo;&nbsp;récit&nbsp;&raquo; en arabe. Dans la terminologie islamique, il désigne toute parole, tout acte, toute approbation tacite ou toute description physique et morale du Prophète Muhammad ﷺ. L&apos;ensemble de ces hadiths constitue la Sunna prophétique, la deuxième source de législation islamique après le Coran.
                </p>
                <p className="mb-4 text-base leading-relaxed text-foreground">
                  Chaque hadith se compose de deux parties essentielles. Le <strong>isnad</strong> (chaîne de transmission) énumère les personnes qui se sont transmis le hadith, du dernier rapporteur jusqu&apos;au Prophète ﷺ. Le <strong>matn</strong> (texte) contient le contenu même du propos prophétique. Les savants du hadith ont développé une science rigoureuse pour évaluer la fiabilité de chaque maillon de la chaîne : c&apos;est la science du <strong>jarh wa ta&apos;dil</strong> (critique et authentification des rapporteurs).
                </p>
                <p className="mb-4 text-base leading-relaxed text-foreground">
                  Les Compagnons du Prophète ﷺ (Sahaba) jouent un rôle central dans la transmission des hadiths. Des figures comme Abu Hurayra (5 374 hadiths rapportés), Aisha (2 210 hadiths), Abdallah ibn &apos;Umar (2 630 hadiths) et Anas ibn Malik (2 286 hadiths) ont consacré leur vie à mémoriser et transmettre les paroles prophétiques. La génération suivante, les Tabi&apos;in, a poursuivi ce travail de préservation jusqu&apos;à ce que les grands compilateurs comme Al-Bukhari et Muslim les consignent par écrit.
                </p>
                <p className="mb-6 text-base leading-relaxed text-foreground">
                  Le Prophète ﷺ lui-même a souligné l&apos;importance de préserver et transmettre la Sunna. Il a laissé à sa communauté deux références indissociables pour ne jamais s&apos;égarer, comme en témoigne ce hadith fondamental :
                </p>

                <HadithBlock
                  title="Les deux références de la guidance"
                  narrator="Malik ibn Anas, d&apos;après des Compagnons"
                  arabic="تَرَكْتُ فِيكُمْ أَمْرَيْنِ لَنْ تَضِلُّوا مَا تَمَسَّكْتُمْ بِهِمَا: كِتَابَ اللَّهِ وَسُنَّةَ نَبِيِّهِ"
                  translation="Je vous ai laissé deux choses : vous ne vous égarerez jamais tant que vous vous y accrocherez : le Livre d&apos;Allah et la Sunna de Son Prophète."
                  source="Al-Muwatta de l&apos;imam Malik"
                  grade="hasan"
                  explanation="Ce hadith capital établit le couple Coran-Sunna comme boussole de la communauté musulmane. Le Prophète ﷺ le prononça lors de son sermon d&apos;adieu, devant plus de cent mille pèlerins. Il signifie que le Coran et la Sunna sont complémentaires et indissociables : l&apos;un ne se comprend pas sans l&apos;autre. Les savants ont unanimement reconnu ce principe comme fondement de la méthodologie islamique."
                />
              </section>

              {/* ─── Section : Hadiths sur la foi ─── */}
              <section id="hadiths-foi" className="mt-14 scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                  Hadiths sur la foi et les fondements
                </h2>
                <p className="mb-6 text-base leading-relaxed text-foreground">
                  La foi (iman) constitue le socle de la vie du musulman. Le Prophète ﷺ a consacré de nombreux hadiths à définir la foi, ses piliers et ses ramifications. Ces hadiths sont placés en tête des grands recueils comme le Sahih Al-Bukhari, soulignant leur importance fondamentale. Ils guident le croyant dans sa relation avec Allah et dans la compréhension de sa religion.
                </p>

                <HadithBlock
                  number={1}
                  title="Les actes ne valent que par les intentions"
                  narrator="&apos;Umar ibn al-Khattab"
                  arabic="إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ"
                  translation="Les actes ne valent que par les intentions, et chacun n&apos;aura que ce qu&apos;il a eu comme intention. Celui dont l&apos;émigration a été pour Allah et Son Messager, son émigration est pour Allah et Son Messager. Et celui dont l&apos;émigration a été pour obtenir un bien de ce monde ou pour épouser une femme, son émigration sera pour ce vers quoi il a émigré."
                  source="Sahih Al-Bukhari, n°1 — Sahih Muslim, n°1907"
                  grade="sahih"
                  explanation="Ce hadith est unanimement considéré comme l&apos;un des fondements de l&apos;islam. L&apos;imam Ash-Shafi&apos;i estimait qu&apos;il représentait un tiers de la science islamique. Il enseigne que la valeur spirituelle d&apos;un acte dépend entièrement de l&apos;intention (niya) qui le motive. Une même action extérieure — comme une donation ou un voyage — peut être un acte d&apos;adoration récompensé par Allah ou un simple acte mondain, selon la sincérité du cœur. Al-Bukhari a placé ce hadith en ouverture de son Sahih pour rappeler à tout lecteur de purifier son intention avant d&apos;étudier."
                />

                <HadithBlock
                  number={2}
                  title="L&apos;islam est bati sur cinq piliers"
                  narrator="Ibn &apos;Umar"
                  arabic="بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ"
                  translation="L&apos;islam est bâti sur cinq (piliers) : l&apos;attestation qu&apos;il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah et que Muhammad est le Messager d&apos;Allah, l&apos;accomplissement de la prière, l&apos;acquittement de la zakat, le pèlerinage à la Maison (sacrée) et le jeûne du Ramadan."
                  source="Sahih Al-Bukhari, n°8 — Sahih Muslim, n°16"
                  grade="sahih"
                  explanation="Ce hadith synthétise la structure de l&apos;islam en cinq obligations fondamentales. Chaque pilier engage une dimension différente du croyant : la parole (shahada), le corps (prière cinq fois par jour), les biens (zakat annuelle), l&apos;endurance physique et spirituelle (jeûne du Ramadan) et le voyage (pèlerinage à La Mecque une fois dans la vie). Ces piliers ne sont pas de simples rituels : ils forment un système cohérent qui purifie le croyant, renforce la communauté et témoigne de la soumission à Allah."
                />

                <HadithBlock
                  number={3}
                  title="La foi comporte soixante et quelques branches"
                  narrator="Abu Hurayra"
                  arabic="الْإِيمَانُ بِضْعٌ وَسِتُّونَ شُعْبَةً، فَأَفْضَلُهَا قَوْلُ لَا إِلَٰهَ إِلَّا اللَّهُ، وَأَدْنَاهَا إِمَاطَةُ الْأَذَىٰ عَنِ الطَّرِيقِ، وَالْحَيَاءُ شُعْبَةٌ مِنَ الْإِيمَانِ"
                  translation="La foi comporte soixante et quelques branches. La plus élevée est la parole 'il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah', la plus basse est le fait d&apos;écarter un obstacle du chemin, et la pudeur est une branche de la foi."
                  source="Sahih Al-Bukhari, n°9 — Sahih Muslim, n°35"
                  grade="sahih"
                  explanation="Ce hadith révèle que la foi n&apos;est pas un concept monolithique mais un ensemble de branches qui touchent le cœur, la langue et les membres. De la plus haute (le tawhid, l&apos;unicité d&apos;Allah) à la plus humble (retirer un danger du chemin), chaque acte de bonté participe à la foi. La mention de la pudeur (haya&apos;) comme branche de la foi souligne son rôle protecteur : elle empêche le croyant de commettre ce qui déplaît à Allah et préserve sa dignité."
                />
              </section>

              {/* ─── Section : Hadiths sur le bon comportement ─── */}
              <section id="hadiths-comportement" className="mt-14 scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                  Hadiths sur le bon comportement
                </h2>
                <p className="mb-6 text-base leading-relaxed text-foreground">
                  Le bon caractère (husn al-khuluq) occupe une place centrale dans l&apos;enseignement prophétique. Le Prophète ﷺ a lui-même déclaré : &laquo;&nbsp;J&apos;ai été envoyé pour parfaire les nobles caractères.&nbsp;&raquo; Les hadiths suivants montrent que l&apos;excellence morale est indissociable de la foi et que le comportement du musulman témoigne de sa relation avec Allah.
                </p>

                <HadithBlock
                  number={4}
                  title="Le meilleur d&apos;entre vous en caractère"
                  narrator="Abu Hurayra"
                  arabic="أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا، وَخِيَارُكُمْ خِيَارُكُمْ لِنِسَائِهِمْ خُلُقًا"
                  translation="Les croyants dont la foi est la plus complète sont ceux qui ont le meilleur caractère. Et les meilleurs d&apos;entre vous sont les meilleurs envers leurs femmes."
                  source="Jami&apos; at-Tirmidhi, n°1162"
                  grade="sahih"
                  explanation="Ce hadith établit un lien direct entre la foi et le caractère. La foi n&apos;est pas seulement une croyance intérieure : elle se manifeste par un comportement exemplaire. Le Prophète ﷺ précise que la bienveillance envers son épouse est un critère de mérite, ce qui réfute l&apos;idée que la piété serait limitée aux actes rituels. Les savants en déduisent que le perfectionnement du caractère est une adoration à part entière."
                />

                <HadithBlock
                  number={5}
                  title="Sourire à son frère est une charité"
                  narrator="Abu Dharr"
                  arabic="تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ، وَأَمْرُكَ بِالْمَعْرُوفِ وَنَهْيُكَ عَنِ الْمُنْكَرِ صَدَقَةٌ"
                  translation="Ton sourire adressé à ton frère est une charité. Ordonner le bien et interdire le mal est une charité."
                  source="Jami&apos; at-Tirmidhi, n°1956"
                  grade="sahih"
                  explanation="Ce hadith élargit remarquablement la notion de charité (sadaqa) en islam. La charité n&apos;est pas réservée aux riches : un simple sourire, une parole bienveillante, un conseil sincère sont des actes de charité accessibles à tous. Le Prophète ﷺ vivait ce principe au quotidien. Ses Compagnons rapportent qu&apos;il ne cessait de sourire et qu&apos;il était le plus agréable des hommes à côtoyer. Ce hadith encourage la bienveillance comme mode de vie."
                />

                <HadithBlock
                  number={6}
                  title="Le fort est celui qui se domine en colère"
                  narrator="Abu Hurayra"
                  arabic="لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ"
                  translation="Le fort n&apos;est pas celui qui terrasse les gens dans la lutte, mais le fort est celui qui se domine au moment de la colère."
                  source="Sahih Al-Bukhari, n°6114 — Sahih Muslim, n°2609"
                  grade="sahih"
                  explanation="Ce hadith redéfinit la force véritable. Dans la société arabe de l&apos;époque, la force physique était un critère de virilité. Le Prophète ﷺ renverse cette vision : la vraie force est intérieure, c&apos;est la maîtrise de soi face à la colère. La colère est un piège de Shaytan qui pousse l&apos;homme à des actes qu&apos;il regrettera. Le Prophète ﷺ a conseillé à celui qui est en colère de s&apos;asseoir, de faire ses ablutions et de chercher refuge auprès d&apos;Allah."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondissez votre connaissance des hadiths"
                description="Apprenez l&apos;arabe classique pour lire les hadiths dans leur langue originale et comprendre les subtilités des paroles prophétiques."
                href="/apprendre-larabe"
                linkText="Découvrir la formation"
              />

              {/* ─── Section : Hadiths sur la science ─── */}
              <section id="hadiths-science" className="mt-14 scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                  Hadiths sur la science et l&apos;apprentissage
                </h2>
                <p className="mb-6 text-base leading-relaxed text-foreground">
                  L&apos;islam accorde une importance capitale au savoir (&apos;ilm). Le premier mot révélé du Coran fut &laquo;&nbsp;Lis !&nbsp;&raquo; (Iqra&apos;), et le Prophète ﷺ a multiplié les encouragements à rechercher la science. Les hadiths suivants témoignent de la valeur immense que l&apos;islam attribue à l&apos;apprentissage, à l&apos;enseignement et à la transmission du savoir.
                </p>

                <HadithBlock
                  number={7}
                  title="Celui qui emprunte un chemin pour le savoir"
                  narrator="Abu Hurayra"
                  arabic="مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ"
                  translation="Celui qui emprunte un chemin a la recherche du savoir, Allah lui facilite par ce chemin une voie vers le Paradis."
                  source="Sahih Muslim, n°2699"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus puissants encouragements à la quête du savoir en islam. Le &laquo;&nbsp;chemin&nbsp;&raquo; désigne aussi bien le déplacement physique (voyager pour étudier) que l&apos;effort intellectuel (lire, mémoriser, réfléchir). La récompense est proportionnelle à l&apos;effort : Allah facilite non seulement l&apos;apprentissage mais aussi la voie vers le Paradis. Les savants musulmans ont parcouru des milliers de kilomètres pour recueillir un seul hadith, incarnant ainsi ce hadith."
                />

                <HadithBlock
                  number={8}
                  title="Les meilleurs sont ceux qui apprennent le Coran"
                  narrator="&apos;Uthman ibn &apos;Affan"
                  arabic="خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"
                  translation="Les meilleurs d&apos;entre vous sont ceux qui apprennent le Coran et l&apos;enseignent."
                  source="Sahih Al-Bukhari, n°5027"
                  grade="sahih"
                  explanation="Ce hadith place l&apos;apprentissage et l&apos;enseignement du Coran au sommet des actes méritoires. Le Prophète ﷺ ne dit pas simplement &laquo;&nbsp;ceux qui lisent le Coran&nbsp;&raquo; mais &laquo;&nbsp;ceux qui l&apos;apprennent et l&apos;enseignent&nbsp;&raquo;, soulignant la double dimension de réception et de transmission. La chaîne de transmission du savoir coranique est ininterrompue depuis le Prophète ﷺ jusqu&apos;à nos jours, constituant un patrimoine unique dans l&apos;histoire de l&apos;humanité."
                />

                <HadithBlock
                  number={9}
                  title="La recherche du savoir est une obligation"
                  narrator="Anas ibn Malik"
                  arabic="طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ"
                  translation="La recherche du savoir est une obligation pour tout musulman."
                  source="Sunan Ibn Majah, n°224"
                  grade="hasan"
                  explanation="Ce hadith célèbre élève la quête du savoir au rang d&apos;obligation religieuse (farida), au même titre que la prière ou le jeûne. Les savants précisent que l&apos;obligation porte sur le savoir nécessaire à la pratique correcte de la religion : connaître les piliers de la foi, les règles de la prière, les bases du licite et de l&apos;illicite. Au-delà de ce minimum, la recherche du savoir supplémentaire est une adoration hautement méritoire."
                />
              </section>

              {/* ─── Section : Hadiths sur la solidarite ─── */}
              <section id="hadiths-solidarite" className="mt-14 scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                  Hadiths sur la solidarité et la charité
                </h2>
                <p className="mb-6 text-base leading-relaxed text-foreground">
                  La solidarité entre les croyants est un pilier de la communauté musulmane (Umma). Le Prophète ﷺ a instauré un modèle de fraternité où chaque membre est responsable du bien-être des autres. Les hadiths suivants illustrent cette vision d&apos;entraide qui dépasse la simple générosité matérielle pour englober toute forme de soutien moral, spirituel et social.
                </p>

                <HadithBlock
                  number={10}
                  title="Les croyants sont comme un seul corps"
                  narrator="An-Nu&apos;man ibn Bashir"
                  arabic="مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ إِذَا اشْتَكَىٰ مِنْهُ عُضْوٌ تَدَاعَىٰ لَهُ سَائِرُ الْجَسَدِ بِالسَّهَرِ وَالْحُمَّىٰ"
                  translation="L&apos;exemple des croyants dans leur amour mutuel, leur miséricorde et leur compassion est celui d&apos;un seul corps : lorsqu&apos;un membre souffre, tout le corps réagit par l&apos;insomnie et la fièvre."
                  source="Sahih Al-Bukhari, n°6011 — Sahih Muslim, n°2586"
                  grade="sahih"
                  explanation="Cette métaphore puissante du corps humain illustre l&apos;idéal de la fraternité islamique. La douleur d&apos;un seul membre affecte l&apos;ensemble : de même, la souffrance d&apos;un croyant doit susciter l&apos;empathie et l&apos;action de toute la communauté. Ce hadith fonde le principe de solidarité collective (takaful) en islam et rappelle que l&apos;individualisme est incompatible avec la foi véritable."
                />

                <HadithBlock
                  number={11}
                  title="Celui qui soulage un croyant d&apos;une difficulte"
                  narrator="Abu Hurayra"
                  arabic="مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ"
                  translation="Celui qui soulage un croyant d&apos;une difficulté de ce monde, Allah le soulagera d&apos;une difficulté parmi les difficultés du Jour de la Résurrection."
                  source="Sahih Muslim, n°2699"
                  grade="sahih"
                  explanation="Ce hadith établit une correspondance directe entre les actes de ce monde et la récompense dans l&apos;au-delà. Soulager une détresse — qu&apos;elle soit financière, émotionnelle ou sociale — est un investissement pour le Jour du Jugement. Le hadith complet ajoute d&apos;autres promesses : celui qui facilite les choses à un endetté, Allah lui facilitera dans ce monde et dans l&apos;au-delà. C&apos;est un encouragement puissant à l&apos;entraide active."
                />

                <HadithBlock
                  number={12}
                  title="Toute bonne action est une sadaqa"
                  narrator="Jabir ibn Abdallah"
                  arabic="كُلُّ مَعْرُوفٍ صَدَقَةٌ"
                  translation="Toute bonne action est une charité (sadaqa)."
                  source="Sahih Al-Bukhari, n°6021 — Sahih Muslim, n°1005"
                  grade="sahih"
                  explanation="Ce hadith concis mais profond démocratise la notion de charité. On n&apos;a pas besoin d&apos;être riche pour faire la charité : un sourire, une bonne parole, un conseil, le fait d&apos;écarter un obstacle du chemin, tout cela est une sadaqa. Le Prophète ﷺ a mentionné dans d&apos;autres hadiths que même l&apos;acte intime entre époux peut être une sadaqa si l&apos;intention est bonne. Ce principe encourage le croyant à multiplier les bonnes actions dans toutes les circonstances."
                />
              </section>

              {/* ─── Section : Hadiths sur la famille ─── */}
              <section id="hadiths-famille" className="mt-14 scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                  Hadiths sur la famille et les relations
                </h2>
                <p className="mb-6 text-base leading-relaxed text-foreground">
                  La famille est le noyau de la société islamique. Le Prophète ﷺ a été un modèle de douceur, de bienveillance et de justice au sein de son foyer. Ses enseignements sur la famille couvrent les relations conjugales, le respect des parents, l&apos;éducation des enfants et la gratitude envers autrui. Ces hadiths rappellent que la piété du musulman se mesure d&apos;abord à la maison.
                </p>

                <HadithBlock
                  number={13}
                  title="Le meilleur d&apos;entre vous envers sa famille"
                  narrator="Aisha"
                  arabic="خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ، وَأَنَا خَيْرُكُمْ لِأَهْلِي"
                  translation="Le meilleur d&apos;entre vous est celui qui est le meilleur envers sa famille. Et je suis le meilleur d&apos;entre vous envers ma famille."
                  source="Jami&apos; at-Tirmidhi, n°3895 — Sunan Ibn Majah, n°1977"
                  grade="sahih"
                  explanation="Ce hadith fait de la bienveillance familiale le critère de supériorité entre les croyants. Le Prophète ﷺ ne se contentait pas de prêcher : il montrait l&apos;exemple. Aisha rapporte qu&apos;il aidait aux tâches ménagères, raccommodait ses vêtements et jouait avec ses petits-enfants. Ce hadith réfute la fausse piété de celui qui est doux en public mais dur chez lui. La grandeur d&apos;un homme se mesure d&apos;abord à la maison."
                />

                <HadithBlock
                  number={14}
                  title="Ta mère, ta mère, ta mère"
                  narrator="Abu Hurayra"
                  arabic="جَاءَ رَجُلٌ فَقَالَ: يَا رَسُولَ اللَّهِ، مَنْ أَحَقُّ النَّاسِ بِحُسْنِ صَحَابَتِي؟ قَالَ: أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: ثُمَّ أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: ثُمَّ أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: ثُمَّ أَبُوكَ"
                  translation="Un homme vint au Prophète ﷺ et demanda : &laquo;&nbsp;Ô Messager d&apos;Allah, qui mérite le plus ma bonne compagnie ?&nbsp;&raquo; Il répondit : &laquo;&nbsp;Ta mère.&nbsp;&raquo; Il dit : &laquo;&nbsp;Puis qui ?&nbsp;&raquo; Il répondit : &laquo;&nbsp;Ta mère.&nbsp;&raquo; Il dit : &laquo;&nbsp;Puis qui ?&nbsp;&raquo; Il répondit : &laquo;&nbsp;Ta mère.&nbsp;&raquo; Il dit : &laquo;&nbsp;Puis qui ?&nbsp;&raquo; Il répondit : &laquo;&nbsp;Puis ton père.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°5971 — Sahih Muslim, n°2548"
                  grade="sahih"
                  explanation="La répétition triple de &laquo;&nbsp;ta mère&nbsp;&raquo; avant &laquo;&nbsp;ton père&nbsp;&raquo; souligne la place éminente de la mère en islam. Ce statut s&apos;explique par les épreuves de la grossesse, de l&apos;accouchement et de l&apos;allaitement. Le Coran confirme : &laquo;&nbsp;Sa mère l&apos;a porté en endurant peine sur peine&nbsp;&raquo; (31:14). Le respect des parents est le deuxième commandement après l&apos;adoration d&apos;Allah dans le Coran. Le père n&apos;est pas négligé : il vient en quatrième position, ce qui reste un rang très élevé."
                />

                <HadithBlock
                  number={15}
                  title="Celui qui ne remercie pas les gens"
                  narrator="Abu Hurayra"
                  arabic="لَا يَشْكُرُ اللَّهَ مَنْ لَا يَشْكُرُ النَّاسَ"
                  translation="Ne remercie pas Allah celui qui ne remercie pas les gens."
                  source="Sunan Abu Dawud, n°4811 — Jami&apos; at-Tirmidhi, n°1954"
                  grade="sahih"
                  explanation="Ce hadith concis établit un lien fondamental entre la gratitude envers les créatures et la gratitude envers le Créateur. Celui qui ne sait pas reconnaître les bienfaits reçus de la part des gens — un service, un conseil, un soutien — est incapable de reconnaître les bienfaits immenses d&apos;Allah. La gratitude (shukr) est une vertu islamique majeure qui renforce les liens sociaux et purifie le cœur de l&apos;orgueil et de l&apos;égoïsme."
                />
              </section>

              {/* ─── Section : Enseignements pratiques ─── */}
              <section id="enseignements" className="mt-14 scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>
                <p className="mb-6 text-base leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article dessine un portrait complet du musulman accompli. Voici les leçons pratiques que nous pouvons en tirer pour notre vie quotidienne :
                </p>

                <div className="space-y-6">
                  <div className="rounded-lg border border-border bg-accent p-5">
                    <h3 className="mb-2 text-lg font-semibold text-primary">1. Purifier son intention avant chaque acte</h3>
                    <p className="text-base leading-relaxed text-foreground">
                      Le hadith des intentions nous enseigne que la valeur d&apos;un acte réside dans la sincérité du cœur. Avant de commencer une adoration, un travail ou un projet, le musulman doit se demander : &laquo;&nbsp;Pour qui et pourquoi fais-je cela ?&nbsp;&raquo; Cette introspection transforme les actes ordinaires en adoration.
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-accent p-5">
                    <h3 className="mb-2 text-lg font-semibold text-primary">2. Investir dans le savoir religieux</h3>
                    <p className="text-base leading-relaxed text-foreground">
                      La recherche du savoir est une obligation, pas un luxe. Apprendre le Coran, étudier les hadiths, comprendre les bases du fiqh : chaque effort sur ce chemin est récompensé par Allah et facilite la voie vers le Paradis. Le savoir protège contre l&apos;ignorance et les innovations blâmables.
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-accent p-5">
                    <h3 className="mb-2 text-lg font-semibold text-primary">3. Perfectionner son caractere au quotidien</h3>
                    <p className="text-base leading-relaxed text-foreground">
                      Le bon caractère est le signe d&apos;une foi complète. Sourire, maîtriser sa colère, parler avec douceur, éviter la médisance : ces gestes simples sont des actes de charité et rapprochent le croyant d&apos;Allah. Le Prophète ﷺ est le modèle à suivre dans l&apos;excellence du comportement.
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-accent p-5">
                    <h3 className="mb-2 text-lg font-semibold text-primary">4. S&apos;entraider et soulager les difficultes</h3>
                    <p className="text-base leading-relaxed text-foreground">
                      Les croyants forment un seul corps. Aider un frère en difficulté, c&apos;est investir pour le Jour du Jugement. La solidarité en islam dépasse la simple aumône : écouter, conseiller, accompagner, prier pour les autres sont autant de formes d&apos;entraide récompensées.
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-accent p-5">
                    <h3 className="mb-2 text-lg font-semibold text-primary">5. Honorer sa famille, en commençant par sa mère</h3>
                    <p className="text-base leading-relaxed text-foreground">
                      La piété envers les parents — et particulièrement la mère — est un commandement divin qui vient juste après l&apos;adoration d&apos;Allah. Le meilleur des croyants est celui qui est le meilleur chez lui. La douceur, la patience et le service envers sa famille sont des actes d&apos;adoration à part entière.
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-accent p-5">
                    <h3 className="mb-2 text-lg font-semibold text-primary">6. Pratiquer la gratitude envers Allah et les gens</h3>
                    <p className="text-base leading-relaxed text-foreground">
                      La gratitude (shukr) envers les créatures est la porte de la gratitude envers le Créateur. Remercier ceux qui nous aident, reconnaître les bienfaits reçus et exprimer sa reconnaissance sont des habitudes que tout musulman doit cultiver pour purifier son cœur.
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-accent p-5">
                    <h3 className="mb-2 text-lg font-semibold text-primary">7. Suivre le Coran et la Sunna comme boussole</h3>
                    <p className="text-base leading-relaxed text-foreground">
                      Le Prophète ﷺ nous a laissé deux références pour ne jamais nous égarer : le Livre d&apos;Allah et sa Sunna. Toute question, toute difficulté, toute décision doit être éclairée par ces deux sources. S&apos;en détourner, c&apos;est risquer l&apos;égarement.
                    </p>
                  </div>
                </div>
              </section>

              {/* ─── AffiliateForm ─── */}
              <div className="mt-14">
                <SocialBanner />

              <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths du Prophète ﷺ dans leur langue originale."
                  preselect="arabe"
                />
              </div>

              {/* ─── FAQ ─── */}
              <section id="faq" className="mt-14 scroll-mt-28">
                <FaqSection items={faqItems} />
              </section>

              {/* ─── Maillage interne ─── */}
              <section className="mt-14">
                <h2 className="mb-6 text-2xl font-bold text-foreground lg:text-3xl">
                  Poursuivez votre lecture
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <ArticleCTA
                    variant="page-mere"
                    title="Hadith du jour"
                    description="Découvrez chaque jour un nouveau hadith authentique avec texte arabe, traduction et explication."
                    href="/hadith-du-jour"
                    linkText="Voir le hadith du jour"
                  />
                  <ArticleCTA
                    variant="lire-aussi"
                    title="Les 40 hadiths d&apos;An-Nawawi"
                    description="Explorez la collection essentielle des quarante hadiths compilés par l&apos;imam An-Nawawi."
                    href="/hadith-40-nawawi-islam"
                    linkText="Lire les 40 hadiths"
                  />
                  <ArticleCTA
                    variant="lire-aussi"
                    title="Hadiths sur le mariage"
                    description="Les enseignements prophétiques sur le couple, le choix du conjoint et la vie conjugale."
                    href="/hadith-mariage-islam"
                    linkText="Découvrir les hadiths"
                  />
                  <ArticleCTA
                    variant="lire-aussi"
                    title="Douas essentielles en islam"
                    description="Les invocations authentiques du Prophète ﷺ pour chaque moment de la vie."
                    href="/doua-islam"
                    linkText="Voir les douas"
                  />
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
