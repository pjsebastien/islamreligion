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
    "Hadith des 73 sectes en islam : authenticité, sens et leçons",
  description:
    "Analyse complète du hadith des 73 sectes en islam : texte arabe, traduction, authenticité, sens du groupe sauvé (al-firqa an-najiya), paroles des savants et leçons pratiques pour la oumma.",
  openGraph: {
    title:
      "Hadith des 73 sectes en islam : authenticité, sens et leçons",
    description:
      "Le hadith des 73 sectes expliqué : versions authentiques, grade, interprétations des savants et enseignements sur l&apos;unité de la communauté musulmane.",
    url: "https://www.islamreligion.fr/hadith-sectes-73-islam",
    images: [
      {
        url: "/images/coupole-mosquee-art-islamique-calligraphie.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-sectes-73-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de l\u2019unit\u00e9" },
  { id: "hadith-73-sectes", label: "Le hadith des 73 sectes" },
  { id: "authenticite", label: "Authenticité et grade du hadith" },
  { id: "groupe-sauve", label: "Le groupe sauvé (al-firqa an-najiya)" },
  { id: "unite-oumma", label: "L\u2019unité de la oumma" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Le hadith des 73 sectes est-il authentique ?",
    answer:
      "Le hadith des 73 sectes est rapporté par plusieurs compagnons, dont Mu\u2019awiya, Abu Hurayra, Anas ibn Malik et Abdallah ibn Amr. La version de base mentionnant la division en 73 groupes est considérée comme sahih ou hasan par la majorité des savants du hadith, dont At-Tirmidhi, Al-Hakim et Ibn Hibban. En revanche, l\u2019ajout précisant « ce sur quoi je suis, moi et mes compagnons » fait l\u2019objet de discussions sur sa chaîne de transmission.",
  },
  {
    question:
      "Que signifie « le groupe sauvé » (al-firqa an-najiya) dans le hadith ?",
    answer:
      "Le groupe sauvé désigne, selon la majorité des savants, ceux qui suivent le Coran et la Sunna tels que les ont compris les compagnons du Prophète \u2018alayhi salatu wa salam. Il ne s\u2019agit pas d\u2019un groupe institutionnel ou d\u2019une organisation, mais de tous les musulmans qui adhèrent aux fondements de la foi sans déviation dans la croyance (\u2019aqida) et la pratique.",
  },
  {
    question:
      "Le hadith des 73 sectes signifie-t-il que seule une secte sera sauvée et les 72 autres en enfer pour l\u2019éternité ?",
    answer:
      "Non, les savants expliquent que les 72 groupes mentionnés ne sont pas nécessairement voués à l\u2019enfer éternel. La menace (wa\u2019id) dans le hadith concerne ceux qui dévient des fondements, mais cela n\u2019implique pas la sortie de l\u2019islam. Les savants sunnites affirment qu\u2019aucun musulman monothéiste ne restera éternellement en enfer. Le hadith est un avertissement, pas un jugement définitif sur des individus.",
  },
  {
    question:
      "Quelles sont les principales interprétations du hadith des 73 sectes ?",
    answer:
      "Les savants ont proposé plusieurs lectures : (1) le hadith est une prophétie descriptive de la réalité historique de la division ; (2) il est un avertissement pour inciter à l\u2019unité et à l\u2019attachement à la Sunna ; (3) le nombre 73 est symbolique, signifiant « beaucoup » en arabe ; (4) il concerne les groupes fondateurs de doctrines déviantes, non leurs adeptes individuels. Ces lectures ne sont pas contradictoires mais complémentaires.",
  },
  {
    question:
      "Comment éviter de tomber dans une secte selon les hadiths ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a indiqué la voie à suivre : s\u2019attacher au Coran et à la Sunna, suivre la voie des compagnons, rester uni à la jama\u2019a (communauté), et ne pas innover dans la religion. Les savants recommandent d\u2019étudier la \u2019aqida auprès de savants reconnus, d\u2019éviter le takfir (excommunication) des musulmans et de privilégier l\u2019unité sur les divergences secondaires.",
  },
  {
    question:
      "Le hadith des 73 sectes justifie-t-il de traiter les autres musulmans de mécréants ?",
    answer:
      "Absolument pas. Les savants sont unanimes pour dire que ce hadith ne peut servir de prétexte au takfir. Le Prophète \u2018alayhi salatu wa salam a lui-même averti que celui qui dit à son frère « mécréant » verra cette parole retomber sur l\u2019un des deux (Bukhari 6104). Le hadith des 73 sectes appelle à la vigilance doctrinale, non à l\u2019exclusion. La majorité des divergences entre musulmans relèvent du fiqh, non de la croyance fondamentale.",
  },
];

export default function HadithSectes73Islam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-sectes-73-islam/#article",
        headline:
          "Hadith des 73 sectes en islam : authenticité, sens et leçons",
        description:
          "Analyse complète du hadith des 73 sectes en islam : texte arabe, traduction, authenticité, sens du groupe sauvé et leçons pour la oumma.",
        image: "/images/coupole-mosquee-art-islamique-calligraphie.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-sectes-73-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-sectes-73-islam/#breadcrumb",
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
            name: "Hadith des 73 sectes",
            item: "https://www.islamreligion.fr/hadith-sectes-73-islam",
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
          title="Hadith des 73 sectes en islam"
          subtitle="Authenticité, signification et leçons du hadith sur la division de la communauté musulmane : texte arabe, traduction, grade et interprétations des grands savants."
          imageSrc="/images/coupole-mosquee-art-islamique-calligraphie.jpg"
          imageAlt="Hadith des 73 sectes en islam, authenticité et enseignements"
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
                  Hadith des 73 sectes
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
                    Le hadith des 73 sectes est rapporté par plusieurs compagnons et considéré comme authentique par la majorité des savants du hadith.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le &laquo; groupe sauvé &raquo; désigne ceux qui suivent le Coran, la Sunna et la voie des compagnons, sans se limiter à un courant institutionnel.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Ce hadith est un appel à l&apos;unité et à la vigilance doctrinale, non un prétexte pour exclure ou excommunier d&apos;autres musulmans.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les savants insistent sur le fait que les divergences de fiqh ne constituent pas des &laquo; sectes &raquo; au sens de ce hadith.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique : l&apos;unité et la mise en garde contre la division
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder le hadith des 73 sectes, il est essentiel de rappeler que le Coran pose les fondements de l&apos;unité de la communauté musulmane et met sévèrement en garde contre la division. Ces versets constituent le cadre dans lequel s&apos;inscrit l&apos;enseignement prophétique sur la fragmentation de la oumma. Comprendre le contexte coranique permet d&apos;éviter toute lecture réductrice ou sectaire de ce hadith.
                </p>

                <HadithCard
                  arabic="إِنَّ الَّذِينَ فَرَّقُوا دِينَهُمْ وَكَانُوا شِيَعًا لَّسْتَ مِنْهُمْ فِي شَيْءٍ ۚ إِنَّمَا أَمْرُهُمْ إِلَى اللَّهِ ثُمَّ يُنَبِّئُهُم بِمَا كَانُوا يَفْعَلُونَ"
                  text="Ceux qui ont divisé leur religion et sont devenus des sectes, tu n&apos;es responsable d&apos;eux en rien. Leur sort ne dépend que d&apos;Allah, puis Il les informera de ce qu&apos;ils faisaient."
                  source="Coran, sourate Al-An&apos;am (6:159)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est fondamental pour comprendre le hadith des 73 sectes. Allah désavoue explicitement ceux qui fragmentent leur religion en courants opposés. Le terme <em>shi&apos;an</em> (sectes, factions) désigne des groupes qui se séparent de la voie commune pour suivre des doctrines particulières. Les exégètes comme At-Tabari et Ibn Kathir expliquent que ce verset vise toute forme de sectarisme qui brise l&apos;unité fondamentale de l&apos;islam. Le Prophète est dégagé de toute responsabilité envers ces divisions, ce qui souligne leur gravité.
                </p>

                <HadithCard
                  arabic="وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا ۚ وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ إِذْ كُنتُمْ أَعْدَاءً فَأَلَّفَ بَيْنَ قُلُوبِكُمْ فَأَصْبَحْتُم بِنِعْمَتِهِ إِخْوَانًا"
                  text="Et cramponnez-vous tous ensemble au câble d&apos;Allah et ne soyez pas divisés. Et rappelez-vous le bienfait d&apos;Allah sur vous : lorsque vous étiez ennemis, c&apos;est Lui qui a réconcilié vos coeurs ; puis, par Son bienfait, vous êtes devenus frères."
                  source="Coran, sourate Al-Imran (3:103)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le &laquo; câble d&apos;Allah &raquo; (<em>habl Allah</em>) est interprété par les savants comme le Coran, la Sunna et la jama&apos;a (communauté unie). Ce verset établit un double commandement : s&apos;accrocher ensemble à la révélation et ne pas se diviser. Allah rappelle aux musulmans que leur fraternité est un bienfait divin qui a remplacé l&apos;hostilité préislamique. Toute division est donc une ingratitude envers ce bienfait. C&apos;est dans ce contexte coranique que le Prophète a prononcé le hadith des 73 sectes : comme un avertissement contre la répétition des erreurs des communautés passées.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Le hadith des 73 sectes */}
              {/* ============================== */}
              <section id="hadith-73-sectes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le hadith des 73 sectes : les différentes versions
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le hadith des 73 sectes nous est parvenu à travers plusieurs compagnons et dans différentes formulations. Cette multiplicité des voies de transmission renforce l&apos;authenticité du sens global, tout en créant des nuances importantes que les savants ont minutieusement étudiées. Voici les principales versions rapportées dans les recueils de hadith.
                </p>

                <HadithBlock
                  number={1}
                  title="La version de Mu&apos;awiya ibn Abi Sufyan"
                  narrator="Mu&apos;awiya ibn Abi Sufyan"
                  arabic="أَلَا إِنَّ مَنْ قَبْلَكُمْ مِنْ أَهْلِ الْكِتَابِ افْتَرَقُوا عَلَى ثِنْتَيْنِ وَسَبْعِينَ مِلَّةً، وَإِنَّ هَذِهِ الْمِلَّةَ سَتَفْتَرِقُ عَلَى ثَلَاثٍ وَسَبْعِينَ، ثِنْتَانِ وَسَبْعُونَ فِي النَّارِ وَوَاحِدَةٌ فِي الْجَنَّةِ وَهِيَ الْجَمَاعَةُ"
                  translation="Certes, ceux qui vous ont précédés parmi les gens du Livre se sont divisés en 72 groupes. Et cette communauté se divisera en 73 groupes : 72 en enfer et un seul au paradis, et c&apos;est la jama&apos;a (le groupe uni)."
                  source="Sunan Abu Dawud, n°4597"
                  grade="sahih"
                  explanation="Cette version est considérée comme l&apos;une des plus solides sur le plan de la chaîne de transmission. Elle identifie le groupe sauvé comme étant &laquo; la jama&apos;a &raquo;, c&apos;est-à-dire le corps principal de la communauté musulmane qui reste attaché à la voie du Prophète ﷺ et de ses compagnons. Le terme jama&apos;a ne désigne pas un parti ou une organisation, mais l&apos;ensemble des musulmans qui suivent les fondements du Coran et de la Sunna sans déviation majeure dans la croyance."
                />

                <HadithBlock
                  number={2}
                  title="La version d&apos;Abdallah ibn Amr"
                  narrator="Abdallah ibn Amr ibn al-&apos;As"
                  arabic="لَيَأْتِيَنَّ عَلَى أُمَّتِي مَا أَتَى عَلَى بَنِي إِسْرَائِيلَ حَذْوَ النَّعْلِ بِالنَّعْلِ، حَتَّى إِنْ كَانَ مِنْهُمْ مَنْ أَتَى أُمَّهُ عَلَانِيَةً لَكَانَ فِي أُمَّتِي مَنْ يَصْنَعُ ذَلِكَ، وَإِنَّ بَنِي إِسْرَائِيلَ تَفَرَّقَتْ عَلَى ثِنْتَيْنِ وَسَبْعِينَ مِلَّةً وَتَفْتَرِقُ أُمَّتِي عَلَى ثَلَاثٍ وَسَبْعِينَ مِلَّةً كُلُّهُمْ فِي النَّارِ إِلَّا مِلَّةً وَاحِدَةً قَالُوا وَمَنْ هِيَ يَا رَسُولَ اللَّهِ قَالَ مَا أَنَا عَلَيْهِ وَأَصْحَابِي"
                  translation="Il arrivera certes à ma communauté ce qui est arrivé aux fils d&apos;Israël, pas à pas. Au point que si l&apos;un d&apos;entre eux avait commis un acte publiquement, quelqu&apos;un de ma communauté le ferait aussi. Et les fils d&apos;Israël se sont divisés en 72 groupes, et ma communauté se divisera en 73 groupes, tous en enfer sauf un. Ils dirent : lequel, o Messager d&apos;Allah ? Il dit : ce sur quoi je suis, moi et mes compagnons."
                  source="Jami&apos; at-Tirmidhi, n°2641"
                  grade="hasan"
                  explanation="Cette version, rapportée par At-Tirmidhi, ajoute la précision &laquo; ce sur quoi je suis, moi et mes compagnons &raquo; comme critère d&apos;identification du groupe sauvé. At-Tirmidhi l&apos;a qualifié de hasan. Certains savants du hadith ont discuté la solidité de cet ajout précis, mais le sens est confirmé par d&apos;autres textes. La mention des compagnons est significative : elle établit leur compréhension de l&apos;islam comme référence normative, et non les interprétations tardives qui s&apos;éloignent de leur voie."
                />

                <HadithBlock
                  number={3}
                  title="La version d&apos;Anas ibn Malik"
                  narrator="Anas ibn Malik"
                  arabic="إِنَّ بَنِي إِسْرَائِيلَ افْتَرَقَتْ عَلَى إِحْدَى وَسَبْعِينَ فِرْقَةً، وَإِنَّ أُمَّتِي سَتَفْتَرِقُ عَلَى ثِنْتَيْنِ وَسَبْعِينَ فِرْقَةً كُلُّهُمْ فِي النَّارِ إِلَّا وَاحِدَةً وَهِيَ الْجَمَاعَةُ"
                  translation="Les fils d&apos;Israël se sont divisés en 71 groupes. Et ma communauté se divisera en 72 groupes, tous en enfer sauf un, et c&apos;est la jama&apos;a."
                  source="Sunan Ibn Majah, n°3993"
                  grade="hasan"
                  explanation="Cette version d&apos;Anas ibn Malik mentionne un nombre légèrement différent (71 et 72 au lieu de 72 et 73), ce qui a conduit certains savants à considérer que le nombre exact n&apos;est pas l&apos;objectif du hadith, mais plutôt l&apos;avertissement contre la division. D&apos;autres savants ont concilié les versions en expliquant que les différentes narrations comptent différemment les communautés précédentes. Le point essentiel reste identique : la majorité déviera, mais le groupe attaché à la jama&apos;a sera préservé."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La multiplicité de ces versions montre que le Prophète ﷺ a abordé ce sujet en plusieurs occasions et devant différents auditoires. Le message central est constant : la communauté se divisera, mais le salut réside dans l&apos;attachement à la voie originelle. Pour approfondir les fondements de la science du hadith, consultez notre article sur{" "}
                  <Link href="/hadith-definition-sciences-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    la définition du hadith et ses sciences
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Authenticité         */}
              {/* ============================== */}
              <section id="authenticite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Authenticité et grade du hadith des 73 sectes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le hadith des 73 sectes a fait l&apos;objet d&apos;études approfondies par les spécialistes de la science du hadith (<em>muhaddithin</em>). Il est rapporté par au moins sept compagnons différents, ce qui en fait un hadith à multiples voies de transmission. Les savants ont analysé chaque chaîne individuellement, puis collectivement, pour établir le grade de ce hadith.
                </p>

                <HadithBlock
                  number={4}
                  title="La version d&apos;Abu Hurayra sur la division des communautés"
                  narrator="Abu Hurayra"
                  arabic="تَفَرَّقَتِ الْيَهُودُ عَلَى إِحْدَى وَسَبْعِينَ أَوِ اثْنَتَيْنِ وَسَبْعِينَ فِرْقَةً، وَتَفَرَّقَتِ النَّصَارَى عَلَى إِحْدَى وَسَبْعِينَ أَوِ اثْنَتَيْنِ وَسَبْعِينَ فِرْقَةً، وَتَفْتَرِقُ أُمَّتِي عَلَى ثَلَاثٍ وَسَبْعِينَ فِرْقَةً"
                  translation="Les juifs se sont divisés en 71 ou 72 groupes, et les chrétiens se sont divisés en 71 ou 72 groupes, et ma communauté se divisera en 73 groupes."
                  source="Sunan Abu Dawud, n°4596 — Jami&apos; at-Tirmidhi, n°2640"
                  grade="sahih"
                  explanation="Cette version d&apos;Abu Hurayra est particulièrement intéressante car elle mentionne la division des juifs et des chrétiens séparément, là où d&apos;autres versions les regroupent. At-Tirmidhi a qualifié ce hadith de hasan sahih. L&apos;hésitation du rapporteur entre 71 et 72 montre la rigueur des transmetteurs, qui préfèrent exprimer leur doute plutôt que de trancher arbitrairement. Cette version ne mentionne pas le groupe sauvé, ce qui la rend plus courte mais plus solide sur le plan de la chaîne."
                />

                <HadithBlock
                  number={5}
                  title="Le Prophète ﷺ ordonne de suivre la Sunna et la voie des califes bien guidés"
                  narrator="Al-&apos;Irbad ibn Sariya"
                  arabic="عَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الْخُلَفَاءِ الرَّاشِدِينَ الْمَهْدِيِّينَ تَمَسَّكُوا بِهَا وَعَضُّوا عَلَيْهَا بِالنَّوَاجِذِ وَإِيَّاكُمْ وَمُحْدَثَاتِ الْأُمُورِ فَإِنَّ كُلَّ مُحْدَثَةٍ بِدْعَةٌ وَكُلَّ بِدْعَةٍ ضَلَالَةٌ"
                  translation="Attachez-vous à ma Sunna et à la sunna des califes bien guidés. Accrochez-vous-y fermement et mordez-y à pleines dents. Et prenez garde aux choses nouvellement inventées (dans la religion), car toute innovation est un égarement."
                  source="Sunan Abu Dawud, n°4607 — Jami&apos; at-Tirmidhi, n°2676"
                  grade="sahih"
                  explanation="Bien que ce hadith ne fasse pas directement partie des versions du hadith des 73 sectes, les savants le citent systématiquement dans ce chapitre car il précise le critère du groupe sauvé : l&apos;attachement à la Sunna prophétique et à la voie des quatre califes bien guidés (Abu Bakr, &apos;Umar, &apos;Uthman et &apos;Ali). L&apos;expression &laquo; mordez-y à pleines dents &raquo; traduit l&apos;urgence et la fermeté requises. Ce hadith est sahih par consensus des savants et constitue l&apos;un des textes fondateurs de la méthodologie sunnite."
                />

                <HadithBlock
                  number={6}
                  title="L&apos;interdiction de se diviser comme les communautés passées"
                  narrator="Abu Hurayra"
                  arabic="ذَرُونِي مَا تَرَكْتُكُمْ فَإِنَّمَا هَلَكَ مَنْ كَانَ قَبْلَكُمْ بِكَثْرَةِ سُؤَالِهِمْ وَاخْتِلَافِهِمْ عَلَى أَنْبِيَائِهِمْ فَإِذَا أَمَرْتُكُمْ بِشَيْءٍ فَأْتُوا مِنْهُ مَا اسْتَطَعْتُمْ وَإِذَا نَهَيْتُكُمْ عَنْ شَيْءٍ فَدَعُوهُ"
                  translation="Laissez-moi tant que je vous laisse. Ceux qui ont péri avant vous ont péri à cause de leurs questions excessives et de leurs divergences avec leurs prophètes. Lorsque je vous ordonne une chose, accomplissez-en ce que vous pouvez. Et lorsque je vous interdis une chose, abstenez-vous-en."
                  source="Sahih Al-Bukhari, n°7288 — Sahih Muslim, n°1337"
                  grade="sahih"
                  explanation="Ce hadith, rapporté dans les deux Sahih, éclaire le contexte du hadith des 73 sectes. La cause de la perdition des communautés passées est double : les questions excessives (qui mènent à la rigidité) et les divergences avec les prophètes (qui mènent à l&apos;égarement). Le Prophète ﷺ établit un principe de modération : obéir autant que possible et s&apos;abstenir de ce qui est interdit, sans compliquer la religion par des questions inutiles. Ce hadith est un antidote au sectarisme."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, les savants du hadith sont majoritairement d&apos;accord pour dire que le sens global du hadith des 73 sectes est authentique (<em>sahih bi majmu&apos; turuqih</em>, authentique par l&apos;ensemble de ses voies). La version de base mentionnant la division en 73 groupes est sahih. L&apos;ajout &laquo; ce sur quoi je suis, moi et mes compagnons &raquo; est hasan selon At-Tirmidhi. Al-Hakim et Ibn Hibban ont authentifié plusieurs de ses chaînes. Ash-Shatibi, Al-&apos;Iraqi et As-Suyuti l&apos;ont tous considéré comme un hadith établi.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la &apos;aqida, la science du hadith et les fondements de la croyance avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Le groupe sauvé      */}
              {/* ============================== */}
              <section id="groupe-sauve" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qui est le groupe sauvé (al-firqa an-najiya) ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;identification du &laquo; groupe sauvé &raquo; est la question centrale suscitée par le hadith des 73 sectes. Chaque courant de l&apos;islam a naturellement revendiqué ce titre pour lui-même, mais les textes prophétiques fournissent des critères objectifs qui dépassent les appartenances partisanes. Les hadiths suivants précisent les caractéristiques de ce groupe.
                </p>

                <HadithBlock
                  number={7}
                  title="Ne cessera d&apos;exister un groupe de ma communauté sur la vérité"
                  narrator="Mu&apos;awiya ibn Abi Sufyan"
                  arabic="لَا تَزَالُ طَائِفَةٌ مِنْ أُمَّتِي قَائِمَةً بِأَمْرِ اللَّهِ لَا يَضُرُّهُمْ مَنْ خَذَلَهُمْ أَوْ خَالَفَهُمْ حَتَّى يَأْتِيَ أَمْرُ اللَّهِ وَهُمْ ظَاهِرُونَ عَلَى النَّاسِ"
                  translation="Un groupe de ma communauté ne cessera de se dresser sur l&apos;ordre d&apos;Allah, sans être affecté par ceux qui les abandonnent ou s&apos;opposent à eux, jusqu&apos;à ce que vienne le commandement d&apos;Allah, et ils seront manifestes parmi les gens."
                  source="Sahih Al-Bukhari, n°7311 — Sahih Muslim, n°1037"
                  grade="sahih"
                  explanation="Ce hadith, connu sous le nom du hadith de la &laquo; ta&apos;ifa mansura &raquo; (le groupe victorieux), est directement lié au hadith des 73 sectes. Les savants comme Al-Bukhari, Ahmad et An-Nawawi considèrent que ce groupe victorieux correspond au groupe sauvé mentionné dans le hadith de la division. Ses caractéristiques sont : l&apos;attachement à l&apos;ordre d&apos;Allah, la résistance aux pressions et la permanence jusqu&apos;à la fin des temps. Ce hadith est une promesse divine qui garantit que la vérité ne s&apos;éteindra jamais complètement."
                />

                <HadithBlock
                  number={8}
                  title="Suivez le groupe le plus nombreux"
                  narrator="Ibn &apos;Umar"
                  arabic="إِنَّ اللَّهَ لَا يَجْمَعُ أُمَّتِي أَوْ قَالَ أُمَّةَ مُحَمَّدٍ عَلَى ضَلَالَةٍ وَيَدُ اللَّهِ مَعَ الْجَمَاعَةِ"
                  translation="Certes, Allah ne réunira pas ma communauté — ou il a dit : la communauté de Muhammad — sur un égarement. Et la main d&apos;Allah est avec le groupe (la jama&apos;a)."
                  source="Jami&apos; at-Tirmidhi, n°2167"
                  grade="hasan"
                  explanation="Ce hadith apporte un critère supplémentaire : le consensus de la communauté est une garantie contre l&apos;égarement. La &laquo; main d&apos;Allah avec le groupe &raquo; signifie Sa protection, Son aide et Sa guidance. Les savants en déduisent que le groupe sauvé n&apos;est pas une minorité marginale, mais le corps principal de la oumma qui s&apos;accorde sur les fondements de la foi. Ce hadith est aussi la base du principe d&apos;ijma&apos; (consensus) en jurisprudence islamique."
                />

                <HadithBlock
                  number={9}
                  title="Celui qui se sépare de la jama&apos;a d&apos;un empan"
                  narrator="Ibn &apos;Abbas"
                  arabic="مَنْ رَأَى مِنْ أَمِيرِهِ شَيْئًا يَكْرَهُهُ فَلْيَصْبِرْ عَلَيْهِ فَإِنَّهُ مَنْ فَارَقَ الْجَمَاعَةَ شِبْرًا فَمَاتَ إِلَّا مَاتَ مِيتَةً جَاهِلِيَّةً"
                  translation="Celui qui voit chez son dirigeant une chose qu&apos;il déteste, qu&apos;il patiente. Car celui qui se sépare de la jama&apos;a d&apos;un empan puis meurt, meurt d&apos;une mort de la jahiliyya (époque préislamique)."
                  source="Sahih Al-Bukhari, n°7054 — Sahih Muslim, n°1849"
                  grade="sahih"
                  explanation="Ce hadith souligne la gravité de la séparation d&apos;avec la communauté. L&apos;expression &laquo; mort de la jahiliyya &raquo; est l&apos;une des menaces les plus sévères dans le vocabulaire prophétique. Elle ne signifie pas que la personne meurt mécréante, mais qu&apos;elle meurt dans un état comparable à la confusion et à l&apos;absence de guidance qui caractérisaient l&apos;époque préislamique. Les savants précisent que ce hadith concerne la rupture avec la communauté dans ses fondements, non les divergences légitimes de fiqh."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths dessinent un portrait cohérent du groupe sauvé : il s&apos;agit de ceux qui suivent le Coran, la Sunna et la voie des compagnons, qui restent attachés à la jama&apos;a et qui s&apos;abstiennent des innovations dans la croyance. Ce n&apos;est pas un parti, une organisation ou un courant exclusif, mais l&apos;ensemble des musulmans qui maintiennent les fondements authentiques de la religion.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Unité de la oumma    */}
              {/* ============================== */}
              <section id="unite-oumma" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;unité de la oumma dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le hadith des 73 sectes ne peut être compris isolément. Il s&apos;inscrit dans un ensemble plus large d&apos;enseignements prophétiques qui appellent à l&apos;unité, à la fraternité et au rejet du sectarisme. Les hadiths suivants montrent que le Prophète ﷺ a autant insisté sur le remède (l&apos;unité) que sur le diagnostic (la division).
                </p>

                <HadithBlock
                  number={10}
                  title="Le croyant pour le croyant est comme un édifice"
                  narrator="Abu Musa al-Ash&apos;ari"
                  arabic="الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا وَشَبَّكَ بَيْنَ أَصَابِعِهِ"
                  translation="Le croyant pour le croyant est comme un édifice dont les parties se renforcent mutuellement. Et il entrecroisa ses doigts."
                  source="Sahih Al-Bukhari, n°6026 — Sahih Muslim, n°2585"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;antithèse du sectarisme. Le Prophète ﷺ compare la communauté à un bâtiment : chaque brique est essentielle et c&apos;est l&apos;interdépendance qui assure la solidité de l&apos;ensemble. En entrecroisant ses doigts, il donne une image concrète de cette cohésion. Ce hadith implique que la division affaiblit la oumma comme une fissure fragilise un mur. Les savants citent ce hadith pour rappeler que la solidarité entre musulmans est une obligation religieuse, au-delà des appartenances à des écoles ou des courants."
                />

                <HadithBlock
                  number={11}
                  title="Ne vous jalousez pas, ne vous haïssez pas, ne vous tournez pas le dos"
                  narrator="Anas ibn Malik"
                  arabic="لَا تَبَاغَضُوا وَلَا تَحَاسَدُوا وَلَا تَدَابَرُوا وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا وَلَا يَحِلُّ لِمُسْلِمٍ أَنْ يَهْجُرَ أَخَاهُ فَوْقَ ثَلَاثَةِ أَيَّامٍ"
                  translation="Ne vous haïssez pas, ne vous jalousez pas, ne vous tournez pas le dos les uns aux autres. Soyez, o serviteurs d&apos;Allah, des frères. Et il n&apos;est pas permis au musulman de boycotter son frère plus de trois jours."
                  source="Sahih Al-Bukhari, n°6065 — Sahih Muslim, n°2559"
                  grade="sahih"
                  explanation="Ce hadith condamne les comportements qui engendrent la division : la haine, la jalousie et la rupture. Le Prophète ﷺ rappelle que la fraternité en Allah est un statut qui impose des obligations. L&apos;interdiction de boycotter un frère musulman plus de trois jours montre que les conflits doivent être résolus rapidement. Ce hadith s&apos;applique directement à la problématique des sectes : les divergences doctrinales ne justifient ni la haine ni le boycott permanent entre musulmans."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths sur l&apos;unité complètent le hadith des 73 sectes en proposant un programme positif. La division n&apos;est pas une fatalité : elle se combat par la fraternité active, le dialogue respectueux et le retour aux sources communes. Pour approfondir les enseignements prophétiques sur le vivre-ensemble, consultez notre article sur{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le hadith des 73 sectes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont proposé différentes lectures de ce hadith. Loin d&apos;être contradictoires, ces interprétations se complètent et permettent de saisir la richesse de cet enseignement prophétique. Il est important de les présenter fidèlement, car le hadith des 73 sectes a souvent été instrumentalisé pour justifier l&apos;exclusion, alors que les savants en tirent avant tout un appel à l&apos;humilité et à l&apos;attachement aux fondements.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith des 73 sectes ne signifie pas que les 72 groupes sont des mécréants. Ils sont dans la menace (wa&apos;id), mais ils restent des musulmans. Ce qui les distingue du groupe sauvé, ce sont des innovations dans la croyance, non la sortie de l&apos;islam. Et Allah sait mieux qui mérite le pardon et qui mérite le châtiment.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le groupe sauvé est Ahl as-Sunna wa al-Jama&apos;a, c&apos;est-à-dire ceux qui suivent ce sur quoi étaient le Prophète ﷺ et ses compagnons dans la croyance, les actes d&apos;adoration et le comportement. Cela n&apos;exclut pas les divergences dans les branches du fiqh, car ces divergences sont une miséricorde et non une division blâmable.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Taymiyya, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le nombre 73 peut être compris comme une expression de la multitude, à la manière des Arabes qui utilisent des nombres pour signifier &laquo; beaucoup &raquo;. L&apos;objectif du hadith n&apos;est pas de fixer un décompte arithmétique, mais d&apos;avertir que la division sera considérable et que le salut réside dans l&apos;attachement à la voie originelle.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ash-Shatibi, <em>Al-I&apos;tisam</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Il ne convient à aucun musulman de prétendre que son groupe est le seul groupe sauvé et que tous les autres sont égarés. Car le Prophète ﷺ a donné des critères, non des noms. Quiconque remplit ces critères — attachement au Coran, à la Sunna et au consensus des compagnons — fait partie du groupe sauvé, quelle que soit l&apos;étiquette qu&apos;il porte.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Madarij as-Salikin</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces paroles des savants convergent sur plusieurs points essentiels. Premièrement, les 72 groupes ne sont pas nécessairement des mécréants. Deuxièmement, le groupe sauvé se définit par des critères doctrinaux et méthodologiques, non par une appartenance partisane. Troisièmement, les divergences légitimes de fiqh ne constituent pas des &laquo; sectes &raquo; au sens de ce hadith. Ces clarifications sont indispensables pour éviter les dérives sectaires que le hadith cherche précisément à prévenir.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques du hadith des 73 sectes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le hadith des 73 sectes, loin d&apos;être un simple texte eschatologique, contient des enseignements directement applicables dans la vie du musulman. Voici les leçons majeures que les savants en tirent :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        S&apos;attacher au Coran et à la Sunna authentique
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le critère du groupe sauvé est l&apos;attachement aux sources premières de l&apos;islam. Cela implique d&apos;étudier le Coran avec compréhension, d&apos;apprendre les hadiths authentiques et de fonder sa croyance sur des preuves, non sur des traditions héritées sans vérification.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Suivre la compréhension des compagnons
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a mentionné ses compagnons comme référence. Leur compréhension de l&apos;islam constitue le filtre à travers lequel interpréter les textes. Les savants des quatre écoles de jurisprudence s&apos;appuient tous sur l&apos;héritage des compagnons.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas utiliser ce hadith pour le takfir
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Ce hadith n&apos;autorise personne à déclarer tel ou tel groupe comme mécréant. Les savants sont unanimes : les divergences mentionnées dans le hadith relèvent de l&apos;innovation blâmable, pas nécessairement de la mécréance. Chaque individu sera jugé par Allah selon sa sincérité et ses actes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Distinguer les divergences légitimes de la déviation
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les différences entre les écoles de fiqh (hanafite, malikite, shafi&apos;ite, hanbalite) ne sont pas des &laquo; sectes &raquo;. La division blâmable concerne les fondements de la croyance (&apos;aqida), comme la négation des attributs divins, le rejet de la Sunna ou l&apos;excommunication des compagnons. Les divergences de jurisprudence sont une richesse.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Oeuvrer pour l&apos;unité de la oumma
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hadith est un avertissement, pas une fatalité. Le musulman doit activement travailler à l&apos;unité : dialoguer avec les autres musulmans, chercher les points communs avant les divergences, et résoudre les conflits par la science et la sagesse, non par l&apos;exclusion.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Étudier la &apos;aqida auprès de savants reconnus
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La meilleure protection contre les déviations est l&apos;apprentissage de la croyance authentique auprès de savants dont la chaîne de transmission remonte aux compagnons. L&apos;autodidaxie en matière de &apos;aqida est source d&apos;égarement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      7
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Faire preuve d&apos;humilité dans sa propre affiliation
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Aucun musulman ne peut prétendre avec certitude faire partie du groupe sauvé. L&apos;humilité est de mise : s&apos;efforcer de suivre les critères du hadith tout en implorant Allah de nous guider et de nous maintenir sur la voie droite.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths dans leur langue originale et approfondissez votre connaissance de la croyance islamique."
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
                  title="Les hadiths du Prophète Muhammad : fondements et collections"
                  description="Découvrez l&apos;histoire des grandes collections de hadiths et les critères d&apos;authenticité."
                  href="/hadith-prophete-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le hadith : définition et sciences"
                  description="Qu&apos;est-ce qu&apos;un hadith ? Les sciences du hadith, la classification et la méthodologie des muhaddithin."
                  href="/hadith-definition-sciences-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le bon comportement en islam"
                  description="Les enseignements prophétiques sur le caractère, la fraternité et le vivre-ensemble en islam."
                  href="/hadith-bon-comportement-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
