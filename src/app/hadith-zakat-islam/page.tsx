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
    "Hadiths sur la zakat en islam : obligation, bienfaits et conditions",
  description:
    "Découvrez les hadiths authentiques sur la zakat en islam : obligation du troisième pilier, catégories de bénéficiaires, zakat al-fitr, châtiment de celui qui refuse. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur la zakat en islam : obligation, bienfaits et conditions",
    description:
      "Les hadiths authentiques sur la zakat en islam : troisième pilier, bénéficiaires, zakat al-fitr et conditions selon la Sunna du Prophète Muhammad ﷺ.",
    url: "https://www.islamreligion.fr/hadith-zakat-islam",
    images: [
      {
        url: "/images/kaaba-mecque-islam-lieu-saint.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-zakat-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de la zakat" },
  { id: "zakat-pilier", label: "La zakat, pilier de l\u2019islam" },
  { id: "beneficiaires", label: "Les catégories de bénéficiaires" },
  { id: "chatiment-refus", label: "Le châtiment de celui qui refuse" },
  { id: "zakat-al-fitr", label: "La zakat al-fitr" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quelle est la différence entre la zakat et la sadaqa en islam ?",
    answer:
      "La zakat est un pilier obligatoire de l\u2019islam, calculée sur la richesse selon des seuils précis (nisab), tandis que la sadaqa est une aumône volontaire sans montant fixe. La zakat est due une fois par an sur les biens éligibles (or, argent, marchandises, bétail, récoltes), alors que la sadaqa peut être donnée à tout moment et sous toute forme. Le refus de payer la zakat est un péché majeur, alors que la sadaqa est une vertu recommandée.",
  },
  {
    question:
      "Quels sont les hadiths les plus importants sur la zakat en islam ?",
    answer:
      "Parmi les hadiths les plus importants sur la zakat, on trouve celui de Jibril qui définit les cinq piliers de l\u2019islam dont la zakat (Muslim 8), celui de Mu\u2019adh ibn Jabal envoyé au Yémen pour enseigner la zakat (Bukhari 1496), et celui sur le châtiment de celui qui thésaurise sans payer la zakat (Muslim 987). Le hadith sur la zakat al-fitr (Bukhari 1503) est également fondamental pour le mois de Ramadan.",
  },
  {
    question: "Qui sont les bénéficiaires de la zakat selon les hadiths ?",
    answer:
      "Le Coran (At-Tawba 9:60) et les hadiths définissent huit catégories de bénéficiaires : les pauvres (fuqara\u2019), les nécessiteux (masakin), les collecteurs de zakat (\u2019amilin), ceux dont les c\u0153urs sont à gagner (mu\u2019allafa qulubuhum), les esclaves à affranchir (riqab), les endettés (gharimin), ceux qui sont dans le sentier d\u2019Allah (fi sabilillah) et le voyageur en difficulté (ibn as-sabil).",
  },
  {
    question: "Qu\u2019est-ce que la zakat al-fitr et quand doit-on la payer ?",
    answer:
      "La zakat al-fitr est une aumône obligatoire due à la fin du mois de Ramadan, avant la prière de l\u2019Aïd al-Fitr. Le Prophète \ufeff\ufe0e l\u2019a fixée à un sa\u2019 (environ 2,5 kg) de nourriture de base (dattes, orge, blé ou raisins secs) par personne. Elle est due par tout musulman, libre ou esclave, homme ou femme, petit ou grand, selon le hadith d\u2019Ibn \u2019Umar (Bukhari 1503). Elle purifie le jeûneur et nourrit les pauvres le jour de l\u2019Aïd.",
  },
  {
    question: "Quel est le châtiment de celui qui refuse de payer la zakat ?",
    answer:
      "Les hadiths décrivent un châtiment sévère pour celui qui refuse la zakat. Selon Abu Hurayra, le Prophète \ufeff\ufe0e a dit que celui qui possède de l\u2019or et de l\u2019argent sans en acquitter la zakat verra ses biens transformés en plaques de feu au Jour du Jugement, dont on lui brûlera les flancs, le front et le dos (Muslim 987). Abu Bakr a combattu ceux qui refusaient de payer la zakat après la mort du Prophète, considérant ce refus comme une apostasie.",
  },
  {
    question: "Comment calculer le nisab de la zakat ?",
    answer:
      "Le nisab est le seuil minimum de richesse à partir duquel la zakat devient obligatoire. Pour l\u2019or, il est de 85 grammes ; pour l\u2019argent, de 595 grammes. Pour les marchandises commerciales, on se base sur la valeur en or ou en argent. Le taux de la zakat est de 2,5 % (un quarantième) sur la richesse possédée pendant une année lunaire complète (hawl). Les savants recommandent d\u2019utiliser le nisab de l\u2019argent car il est plus favorable aux pauvres.",
  },
];

export default function HadithZakatIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-zakat-islam/#article",
        headline:
          "Hadiths sur la zakat en islam : obligation, bienfaits et conditions",
        description:
          "Découvrez les hadiths authentiques sur la zakat en islam : obligation du troisième pilier, catégories de bénéficiaires, zakat al-fitr et châtiment de celui qui refuse.",
        image: "/images/kaaba-mecque-islam-lieu-saint.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-zakat-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-zakat-islam/#breadcrumb",
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
            name: "Zakat en islam",
            item: "https://www.islamreligion.fr/hadith-zakat-islam",
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
          title="Hadiths sur la zakat en islam"
          subtitle="Les enseignements prophétiques sur le troisième pilier de l&apos;islam : obligation, bénéficiaires, zakat al-fitr et conditions de la zakat selon la Sunna authentique."
          imageSrc="/images/kaaba-mecque-islam-lieu-saint.jpg"
          imageAlt="Hadiths sur la zakat en islam, la Kaaba à La Mecque"
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
                  Zakat en islam
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
                    La zakat est le troisième pilier de l&apos;islam, une obligation pour tout musulman dont la richesse atteint le nisab (seuil minimum).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Coran et les hadiths définissent huit catégories de bénéficiaires de la zakat, garantissant une redistribution juste des richesses.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ a averti d&apos;un châtiment sévère au Jour du Jugement pour celui qui refuse de s&apos;acquitter de la zakat.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La zakat al-fitr est une aumône obligatoire à la fin du Ramadan, due par chaque musulman avant la prière de l&apos;Aïd.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de la zakat en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths sur la zakat, il convient de rappeler que cette obligation est d&apos;abord coranique. Allah a mentionné la zakat aux côtés de la prière (<em>salat</em>) dans plus de trente versets du Coran, soulignant le lien indissociable entre l&apos;adoration spirituelle et la solidarité financière. La zakat n&apos;est pas un impôt ordinaire : c&apos;est un acte de purification des biens et de l&apos;âme.
                </p>

                <HadithCard
                  arabic="خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا وَصَلِّ عَلَيْهِمْ إِنَّ صَلَاتَكَ سَكَنٌ لَّهُمْ"
                  text="Prélève de leurs biens une aumône par laquelle tu les purifies et tu les bénis, et prie pour eux. Ta prière est une quiétude pour eux. Et Allah est Audient et Omniscient."
                  source="Coran, sourate At-Tawba (9:103)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est le fondement coranique de la zakat. Le verbe <em>tuzakkihim</em> (tu les purifies) donne son nom même à la zakat, dérivé de la racine <em>z-k-w</em> qui signifie purification et croissance. La zakat purifie les biens du donneur de toute souillure liée à l&apos;avarice, et elle purifie son âme de l&apos;attachement excessif aux richesses. Les savants soulignent qu&apos;Allah a ordonné au Prophète ﷺ de &laquo;&nbsp;prélever&nbsp;&raquo; la zakat, ce qui implique une autorité de collecte, et non une simple incitation.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا أَنفِقُوا مِن طَيِّبَاتِ مَا كَسَبْتُمْ وَمِمَّا أَخْرَجْنَا لَكُم مِّنَ الْأَرْضِ وَلَا تَيَمَّمُوا الْخَبِيثَ مِنْهُ تُنفِقُونَ"
                  text="Ô les croyants ! Dépensez des meilleures choses que vous avez gagnées et des récoltes que Nous avons fait sortir de la terre pour vous. Et ne vous tournez pas vers ce qui est vil pour en faire dépense."
                  source="Coran, sourate Al-Baqara (2:267)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset, qui concerne à la fois la zakat et la sadaqa volontaire, pose un principe de qualité dans le don. Allah interdit au croyant de donner en zakat ce qu&apos;il refuserait lui-même de recevoir. Les juristes en ont déduit que la zakat doit être prélevée sur les biens de valeur moyenne, ni les meilleurs ni les pires, afin de préserver un équilibre entre le droit du pauvre et la protection du riche.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Zakat pilier         */}
              {/* ============================== */}
              <section id="zakat-pilier" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La zakat, troisième pilier de l&apos;islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La zakat n&apos;est pas une simple recommandation : elle fait partie des cinq fondements de l&apos;islam. Le Prophète ﷺ l&apos;a mentionnée dans les hadiths les plus célèbres sur les piliers de la foi, la plaçant au même rang que la shahada, la prière, le jeûne et le pèlerinage. Refuser de la payer revient à nier un pilier fondamental de la religion.
                </p>

                <HadithBlock
                  number={1}
                  title="L&apos;islam est bâti sur cinq piliers"
                  narrator="Ibn &apos;Umar"
                  arabic="بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ"
                  translation="L&apos;islam est bâti sur cinq piliers : l&apos;attestation qu&apos;il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah et que Muhammad est le Messager d&apos;Allah, l&apos;accomplissement de la prière, l&apos;acquittement de la zakat, le pèlerinage à la Maison sacrée et le jeûne du mois de Ramadan."
                  source="Sahih Al-Bukhari, n°8 — Sahih Muslim, n°16"
                  grade="sahih"
                  explanation="Ce hadith est le fondement même de la pratique islamique. La zakat y occupe la troisième position, immédiatement après la shahada et la prière. Les savants y voient la preuve que la zakat est indissociable de la foi et de la prière : celui qui prie sans s&apos;acquitter de la zakat laisse un pilier vacant dans son édifice religieux. L&apos;expression &laquo;&nbsp;itâ&apos; az-zakat&nbsp;&raquo; (acquittement de la zakat) implique un transfert effectif de propriété au bénéficiaire, et non une simple intention."
                />

                <HadithBlock
                  number={2}
                  title="Le hadith de Jibril sur l&apos;islam, la foi et l&apos;excellence"
                  narrator="&apos;Umar ibn al-Khattab"
                  arabic="أَنَّ رَجُلًا أَتَى النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: يَا رَسُولَ اللَّهِ مَا الْإِسْلَامُ؟ قَالَ: أَنْ تَشْهَدَ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَتُقِيمَ الصَّلَاةَ وَتُؤْتِيَ الزَّكَاةَ وَتَصُومَ رَمَضَانَ وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيلًا"
                  translation="Un homme vint au Prophète ﷺ et dit : Ô Messager d&apos;Allah, qu&apos;est-ce que l&apos;islam ? Il répondit : Que tu attestes qu&apos;il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah et que Muhammad est le Messager d&apos;Allah, que tu accomplisses la prière, que tu t&apos;acquittes de la zakat, que tu jeûnes le Ramadan et que tu accomplisses le pèlerinage si tu en as la capacité."
                  source="Sahih Muslim, n°8"
                  grade="sahih"
                  explanation="Ce hadith, connu sous le nom de &laquo;&nbsp;hadith de Jibril&nbsp;&raquo;, est l&apos;un des plus importants de la Sunna. L&apos;ange Jibril est venu enseigner la religion aux compagnons en posant des questions au Prophète ﷺ. La mention de la zakat parmi les définitions même de l&apos;islam montre qu&apos;elle n&apos;est pas un acte surérogatoire : c&apos;est une condition de la validité de l&apos;islam pratiqué. Les savants s&apos;appuient sur ce hadith pour affirmer que celui qui nie l&apos;obligation de la zakat sort de l&apos;islam."
                />

                <HadithBlock
                  number={3}
                  title="L&apos;envoi de Mu&apos;adh au Yémen : enseigner la zakat"
                  narrator="Ibn &apos;Abbas"
                  arabic="أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بَعَثَ مُعَاذًا إِلَى الْيَمَنِ فَقَالَ: ادْعُهُمْ إِلَى شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنِّي رَسُولُ اللَّهِ، فَإِنْ هُمْ أَطَاعُوا لِذَلِكَ فَأَعْلِمْهُمْ أَنَّ اللَّهَ افْتَرَضَ عَلَيْهِمْ خَمْسَ صَلَوَاتٍ فِي كُلِّ يَوْمٍ وَلَيْلَةٍ، فَإِنْ هُمْ أَطَاعُوا لِذَلِكَ فَأَعْلِمْهُمْ أَنَّ اللَّهَ افْتَرَضَ عَلَيْهِمْ صَدَقَةً تُؤْخَذُ مِنْ أَغْنِيَائِهِمْ فَتُرَدُّ عَلَى فُقَرَائِهِمْ"
                  translation="Le Prophète ﷺ envoya Mu&apos;adh au Yémen et lui dit : Appelle-les à attester qu&apos;il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah et que je suis le Messager d&apos;Allah. S&apos;ils obéissent à cela, informe-les qu&apos;Allah leur a prescrit cinq prières par jour et par nuit. S&apos;ils obéissent à cela, informe-les qu&apos;Allah leur a prescrit une aumône (zakat) prélevée sur leurs riches et redistribuée à leurs pauvres."
                  source="Sahih Al-Bukhari, n°1496 — Sahih Muslim, n°19"
                  grade="sahih"
                  explanation="Ce hadith est capital pour comprendre la méthodologie prophétique d&apos;enseignement de la zakat. Le Prophète ﷺ établit une progression : d&apos;abord le tawhid, puis la prière, puis la zakat. Cette gradation montre que la zakat vient naturellement après l&apos;affermissement de la foi et de la prière. La formule &laquo;&nbsp;prélevée sur leurs riches et redistribuée à leurs pauvres&nbsp;&raquo; définit le mécanisme fondamental de la zakat : un transfert de richesse des nantis vers les démunis au sein de la communauté. Ce hadith est aussi utilisé par les juristes pour justifier l&apos;existence d&apos;un collecteur officiel de zakat."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths établissent sans ambiguïté le caractère obligatoire de la zakat. Elle n&apos;est ni optionnelle ni simplement recommandée : c&apos;est un pilier de l&apos;islam, au même titre que la prière et le jeûne. Pour approfondir les enseignements prophétiques sur les fondements de la foi, consultez notre article sur{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths du Prophète Muhammad ﷺ
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Bénéficiaires        */}
              {/* ============================== */}
              <section id="beneficiaires" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les catégories de bénéficiaires de la zakat
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Coran définit huit catégories de bénéficiaires de la zakat dans le verset 60 de la sourate At-Tawba. Les hadiths du Prophète ﷺ précisent les conditions d&apos;éligibilité et les priorités dans la distribution. La zakat ne peut être versée à n&apos;importe qui : elle est destinée à des catégories spécifiques, et le donneur doit veiller à respecter ces critères.
                </p>

                <HadithBlock
                  number={4}
                  title="La zakat n&apos;est pas licite pour le riche"
                  narrator="Abu Hurayra"
                  arabic="لَا تَحِلُّ الصَّدَقَةُ لِغَنِيٍّ وَلَا لِذِي مِرَّةٍ سَوِيٍّ"
                  translation="L&apos;aumône obligatoire (zakat) n&apos;est pas licite pour le riche, ni pour celui qui est vigoureux et en bonne santé."
                  source="Sunan Abu Dawud, n°1634 — Jami&apos; at-Tirmidhi, n°652"
                  grade="sahih"
                  explanation="Ce hadith pose deux interdictions claires. Premièrement, la zakat ne peut être donnée à une personne riche qui possède le nisab. Deuxièmement, une personne physiquement apte à travailler ne devrait pas bénéficier de la zakat si elle est capable de subvenir à ses besoins. Les juristes précisent toutefois que la notion de &laquo;&nbsp;richesse&nbsp;&raquo; dépend du contexte : un homme qui possède le nisab mais a de lourdes charges familiales peut être considéré comme nécessiteux. Ce hadith protège le système de zakat contre les abus et oriente les fonds vers ceux qui en ont véritablement besoin."
                />

                <HadithBlock
                  number={5}
                  title="Celui qui demande la zakat alors qu&apos;il n&apos;en a pas besoin"
                  narrator="&apos;Abdullah ibn Mas&apos;ud"
                  arabic="مَنْ سَأَلَ النَّاسَ وَلَهُ مَا يُغْنِيهِ جَاءَ يَوْمَ الْقِيَامَةِ وَمَسْأَلَتُهُ فِي وَجْهِهِ خُمُوشٌ أَوْ خُدُوشٌ أَوْ كُدُوحٌ"
                  translation="Celui qui mendie auprès des gens alors qu&apos;il possède de quoi se suffire viendra au Jour du Jugement avec son visage couvert d&apos;égratignures, de griffures et de blessures."
                  source="Sunan an-Nasa&apos;i, n°2592 — Jami&apos; at-Tirmidhi, n°650"
                  grade="sahih"
                  explanation="Ce hadith met en garde ceux qui demandent la zakat ou l&apos;aumône alors qu&apos;ils n&apos;en ont pas besoin. Le châtiment décrit — des marques de honte sur le visage au Jour du Jugement — illustre la gravité de cet acte. Le Prophète ﷺ protège ainsi le fonds de zakat en dissuadant les fraudeurs. Les savants précisent que la limite de suffisance est définie par ce qui couvre les besoins fondamentaux de la personne et de sa famille : nourriture, vêtement, logement et dettes."
                />

                <HadithBlock
                  number={6}
                  title="La zakat ne revient pas à la famille du Prophète ﷺ"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ الصَّدَقَةَ لَا تَنْبَغِي لِآلِ مُحَمَّدٍ إِنَّمَا هِيَ أَوْسَاخُ النَّاسِ"
                  translation="La zakat ne convient pas à la famille de Muhammad. Elle n&apos;est que la souillure (la purification) des biens des gens."
                  source="Sahih Muslim, n°1072"
                  grade="sahih"
                  explanation="Ce hadith révèle une règle spécifique : les descendants du Prophète ﷺ (Banu Hashim et Banu al-Muttalib) ne sont pas éligibles à la zakat. Le Prophète ﷺ qualifie la zakat de &laquo;&nbsp;souillure des biens&nbsp;&raquo; dans le sens où elle représente la purification que le donneur retire de sa richesse. Par noblesse, la famille prophétique ne reçoit pas cette purification des autres. Les savants diffèrent sur la portée exacte de cette interdiction, certains l&apos;étendant à tous les Banu Hashim, d&apos;autres la limitant à ceux qui reçoivent leur part du cinquième (khumus)."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh de la zakat, les règles de la purification des biens et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Châtiment du refus   */}
              {/* ============================== */}
              <section id="chatiment-refus" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le châtiment de celui qui refuse la zakat
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le refus de s&apos;acquitter de la zakat est un péché majeur en islam. Le Prophète ﷺ a décrit des châtiments terrifiants pour celui qui thésaurise ses richesses sans en extraire le droit d&apos;Allah. Ces avertissements visent à dissuader l&apos;avarice et à rappeler que la richesse est un dépôt (<em>amana</em>) dont le croyant sera interrogé.
                </p>

                <HadithBlock
                  number={7}
                  title="Les plaques de feu de celui qui refuse la zakat"
                  narrator="Abu Hurayra"
                  arabic="مَا مِنْ صَاحِبِ ذَهَبٍ وَلَا فِضَّةٍ لَا يُؤَدِّي مِنْهَا حَقَّهَا إِلَّا إِذَا كَانَ يَوْمُ الْقِيَامَةِ صُفِّحَتْ لَهُ صَفَائِحُ مِنْ نَارٍ فَأُحْمِيَ عَلَيْهَا فِي نَارِ جَهَنَّمَ فَيُكْوَى بِهَا جَنْبُهُ وَجَبِينُهُ وَظَهْرُهُ كُلَّمَا بَرَدَتْ أُعِيدَتْ لَهُ فِي يَوْمٍ كَانَ مِقْدَارُهُ خَمْسِينَ أَلْفَ سَنَةٍ حَتَّى يُقْضَى بَيْنَ الْعِبَادِ"
                  translation="Il n&apos;est pas un possesseur d&apos;or ou d&apos;argent qui ne s&apos;acquitte pas de son droit (la zakat) sans que, au Jour de la Résurrection, on ne lui forge des plaques de feu chauffées dans le feu de la Géhenne, dont on lui brûlera les flancs, le front et le dos. Chaque fois qu&apos;elles refroidiront, on les lui remettra, en un jour dont la durée sera de cinquante mille ans, jusqu&apos;à ce que le jugement soit prononcé entre les serviteurs."
                  source="Sahih Muslim, n°987"
                  grade="sahih"
                  explanation="Ce hadith est le plus détaillé sur le châtiment de celui qui refuse la zakat. La description des plaques de feu appliquées sur les flancs, le front et le dos illustre la sévérité divine envers celui qui prive les pauvres de leur droit. Le hadith mentionne aussi les propriétaires de chameaux, de bovins et de moutons qui ne paient pas la zakat : leurs animaux les piétineront au Jour du Jugement. La durée de cinquante mille ans montre l&apos;intensité et la longueur du châtiment. Les savants utilisent ce hadith pour classer le refus de la zakat parmi les grands péchés (<em>kaba&apos;ir</em>)."
                />

                <HadithBlock
                  number={8}
                  title="Abu Bakr combat ceux qui refusent la zakat"
                  narrator="Abu Hurayra"
                  arabic="لَمَّا تُوُفِّيَ رَسُولُ اللَّهِ وَاسْتُخْلِفَ أَبُو بَكْرٍ وَكَفَرَ مَنْ كَفَرَ مِنَ الْعَرَبِ قَالَ عُمَرُ: كَيْفَ تُقَاتِلُ النَّاسَ؟ فَقَالَ أَبُو بَكْرٍ: وَاللَّهِ لَأُقَاتِلَنَّ مَنْ فَرَّقَ بَيْنَ الصَّلَاةِ وَالزَّكَاةِ فَإِنَّ الزَّكَاةَ حَقُّ الْمَالِ وَاللَّهِ لَوْ مَنَعُونِي عِقَالًا كَانُوا يُؤَدُّونَهُ إِلَى رَسُولِ اللَّهِ لَقَاتَلْتُهُمْ عَلَى مَنْعِهِ"
                  translation="Lorsque le Messager d&apos;Allah mourut et qu&apos;Abu Bakr fut désigné calife, certains Arabes apostasièrent. &apos;Umar lui dit : Comment combattras-tu les gens ? Abu Bakr répondit : Par Allah, je combattrai quiconque sépare la prière de la zakat, car la zakat est le droit dû sur les biens. Par Allah, s&apos;ils me refusaient ne serait-ce qu&apos;une bride de chameau qu&apos;ils versaient au Messager d&apos;Allah, je les combattrais pour ce refus."
                  source="Sahih Al-Bukhari, n°1400 — Sahih Muslim, n°20"
                  grade="sahih"
                  explanation="Ce hadith historique montre la position d&apos;Abu Bakr as-Siddiq face aux tribus qui refusèrent de payer la zakat après la mort du Prophète ﷺ. Sa déclaration &laquo;&nbsp;je combattrai quiconque sépare la prière de la zakat&nbsp;&raquo; est devenue un principe de jurisprudence : la zakat et la prière sont indissociables. Si un groupe refuse collectivement de payer la zakat tout en reconnaissant son obligation, l&apos;État islamique est en droit de les y contraindre. Ce récit illustre l&apos;importance systémique de la zakat pour la cohésion de la communauté musulmane."
                />

                <HadithBlock
                  number={9}
                  title="La richesse qui n&apos;est pas purifiée détruit son possesseur"
                  narrator="Abu Dharr"
                  arabic="وَالَّذِي نَفْسِي بِيَدِهِ مَا مِنْ رَجُلٍ تَكُونُ لَهُ إِبِلٌ أَوْ بَقَرٌ أَوْ غَنَمٌ لَا يُؤَدِّي حَقَّهَا إِلَّا أُتِيَ بِهَا يَوْمَ الْقِيَامَةِ أَعْظَمَ مَا تَكُونُ وَأَسْمَنَهُ تَطَؤُهُ بِأَخْفَافِهَا وَتَنْطِحُهُ بِقُرُونِهَا كُلَّمَا جَازَتْ أُخْرَاهَا رُدَّتْ عَلَيْهِ أُولَاهَا حَتَّى يُقْضَى بَيْنَ النَّاسِ"
                  translation="Par Celui qui tient mon âme dans Sa main, il n&apos;est pas un homme qui possède des chameaux, des bovins ou des moutons sans s&apos;acquitter de leur droit (la zakat) sans qu&apos;on ne les amène au Jour de la Résurrection, plus grands et plus gras que jamais. Ils le piétineront de leurs sabots et le frapperont de leurs cornes. Chaque fois que la dernière bête sera passée, la première reviendra, et ainsi de suite jusqu&apos;à ce que le jugement soit prononcé entre les gens."
                  source="Sahih Al-Bukhari, n°1460 — Sahih Muslim, n°987"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en décrivant le châtiment spécifique des propriétaires de bétail. Les animaux mêmes dont le propriétaire a refusé de payer la zakat deviennent les instruments de son châtiment. L&apos;image des bêtes qui piétinent et frappent leur ancien propriétaire est saisissante : la richesse mal gérée se retourne contre celui qui l&apos;a thésaurisée. Le Prophète ﷺ utilise ces descriptions pour marquer les esprits et inciter à l&apos;obéissance. Les savants rappellent que la zakat sur le bétail suit des barèmes précis fixés par la Sunna."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent la gravité du refus de la zakat aux yeux d&apos;Allah et de Son Messager ﷺ. La zakat n&apos;est pas un acte de générosité facultatif : c&apos;est un droit des pauvres sur la richesse des riches. Celui qui s&apos;en acquitte purifie ses biens et sa personne ; celui qui la refuse s&apos;expose à un châtiment terrible.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Zakat al-fitr        */}
              {/* ============================== */}
              <section id="zakat-al-fitr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La zakat al-fitr selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La zakat al-fitr est une aumône obligatoire liée au mois de Ramadan. Contrairement à la zakat annuelle sur les biens, elle est due par chaque musulman, quelle que soit sa richesse, et doit être versée avant la prière de l&apos;Aïd al-Fitr. Son objectif est double : purifier le jeûneur des paroles vaines et nourrir les pauvres le jour de la fête.
                </p>

                <HadithBlock
                  number={10}
                  title="La zakat al-fitr : un sa&apos; de nourriture par personne"
                  narrator="Ibn &apos;Umar"
                  arabic="فَرَضَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ زَكَاةَ الْفِطْرِ مِنْ رَمَضَانَ صَاعًا مِنْ تَمْرٍ أَوْ صَاعًا مِنْ شَعِيرٍ عَلَى الْعَبْدِ وَالْحُرِّ وَالذَّكَرِ وَالْأُنْثَى وَالصَّغِيرِ وَالْكَبِيرِ مِنَ الْمُسْلِمِينَ"
                  translation="Le Messager d&apos;Allah ﷺ a prescrit la zakat al-fitr du Ramadan : un sa&apos; de dattes ou un sa&apos; d&apos;orge, dû par l&apos;esclave et l&apos;homme libre, l&apos;homme et la femme, le petit et le grand parmi les musulmans."
                  source="Sahih Al-Bukhari, n°1503 — Sahih Muslim, n°984"
                  grade="sahih"
                  explanation="Ce hadith est le texte fondateur de la zakat al-fitr. Plusieurs points sont à relever. Premièrement, le verbe &laquo;&nbsp;farada&nbsp;&raquo; (a prescrit) indique une obligation, non une recommandation. Deuxièmement, elle est due par toute catégorie de musulmans : homme, femme, enfant, libre, esclave. Le chef de famille la verse pour ceux qui sont à sa charge. Troisièmement, la quantité est fixée à un sa&apos; (environ 2,5 kg) de nourriture de base. Les savants débattent sur la possibilité de verser la zakat al-fitr en argent : la majorité des hanafites l&apos;autorisent, tandis que les autres écoles préfèrent la nourriture."
                />

                <HadithBlock
                  number={11}
                  title="La zakat al-fitr purifie le jeûneur"
                  narrator="Ibn &apos;Abbas"
                  arabic="فَرَضَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ زَكَاةَ الْفِطْرِ طُهْرَةً لِلصَّائِمِ مِنَ اللَّغْوِ وَالرَّفَثِ وَطُعْمَةً لِلْمَسَاكِينِ"
                  translation="Le Messager d&apos;Allah ﷺ a prescrit la zakat al-fitr comme purification pour le jeûneur des paroles vaines et obscènes, et comme nourriture pour les pauvres."
                  source="Sunan Abu Dawud, n°1609 — Sunan Ibn Majah, n°1827"
                  grade="hasan"
                  explanation="Ce hadith explicite les deux sagesses de la zakat al-fitr. D&apos;une part, elle purifie le jeûne du croyant des imperfections commises durant le Ramadan : paroles inutiles, disputes, propos inconvenants. D&apos;autre part, elle assure aux pauvres un repas le jour de l&apos;Aïd, afin que toute la communauté puisse se réjouir ensemble. Le hadith ajoute que celle versée avant la prière de l&apos;Aïd est une zakat acceptée, tandis que celle versée après n&apos;est qu&apos;une sadaqa ordinaire. Ce détail montre l&apos;importance du respect du calendrier dans l&apos;acquittement de cette obligation."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La zakat al-fitr est indissociable du mois de Ramadan. Elle clôture le jeûne en le purifiant et en étendant la joie de l&apos;Aïd à tous les membres de la communauté, y compris les plus démunis. Pour approfondir les hadiths liés au mois béni, consultez notre article sur{" "}
                  <Link href="/hadith-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths sur le Ramadan en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la zakat
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur la zakat. Leurs explications permettent de mieux saisir la portée juridique, spirituelle et sociale de ce pilier fondamental.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La zakat est un acte d&apos;adoration financier qui allie la purification de l&apos;âme à la justice sociale. Elle empêche la concentration des richesses entre les mains d&apos;une minorité et garantit un minimum vital aux plus démunis. C&apos;est le pilier qui fait de l&apos;islam une religion à la fois spirituelle et sociale.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La décision d&apos;Abu Bakr de combattre ceux qui refusaient la zakat est l&apos;un des consensus les plus importants des compagnons. Elle montre que la zakat n&apos;est pas une oeuvre de bienfaisance laissée au bon vouloir de chacun, mais un droit que l&apos;État doit collecter et distribuer. Quiconque refuse ce droit se rebelle contre l&apos;ordre d&apos;Allah.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La sagesse de la zakat est triple : elle purifie le riche de l&apos;avarice et de l&apos;orgueil de la richesse ; elle soulage le pauvre de l&apos;envie et de l&apos;amertume de la pauvreté ; et elle crée un lien de solidarité et de fraternité entre les deux, renforçant le tissu social de la Oumma.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que la zakat dépasse la simple dimension financière. Elle est à la fois un acte de purification spirituelle, un mécanisme de justice sociale et un ciment communautaire. Les quatre écoles de jurisprudence ont élaboré des règles détaillées sur le calcul du nisab, les catégories de biens imposables et les conditions de distribution, toutes fondées sur les hadiths présentés ici.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques sur la zakat
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés permet de dégager des leçons concrètes pour la pratique de la zakat :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Calculer sa zakat avec rigueur
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le nisab (seuil minimum) est de 85 g d&apos;or ou 595 g d&apos;argent. Le taux est de 2,5 % sur les biens possédés pendant une année lunaire complète. Il est recommandé de tenir un registre de ses biens pour ne rien omettre.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Verser la zakat aux bons bénéficiaires
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Coran définit huit catégories précises. Donner la zakat à une personne non éligible ne libère pas le donneur de son obligation. Il convient de vérifier la situation du bénéficiaire avant de verser.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas retarder le paiement de la zakat
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Dès que le nisab est atteint et qu&apos;une année lunaire s&apos;est écoulée, la zakat devient exigible. La retarder sans motif valable est un péché. Certains savants autorisent le versement anticipé.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        S&apos;acquitter de la zakat al-fitr avant la prière de l&apos;Aïd
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La zakat al-fitr est due par chaque musulman à la fin du Ramadan. Elle doit être versée avant la prière de l&apos;Aïd pour être considérée comme une zakat ; après, elle n&apos;est qu&apos;une sadaqa ordinaire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Compléter la zakat par la sadaqa volontaire
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La zakat est le minimum obligatoire, mais la sadaqa volontaire complète et enrichit la pratique de la générosité. Les deux sont complémentaires et répondent à des besoins différents de la communauté.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Purifier l&apos;intention avant de donner
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La zakat est un acte d&apos;adoration qui nécessite une intention sincère (niyya). Le donneur doit viser la satisfaction d&apos;Allah, non la reconnaissance des hommes ou un avantage social.
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
                  description="Comprenez les hadiths sur la zakat dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la sadaqa et la charité en islam"
                  description="Les enseignements prophétiques sur l&apos;aumône volontaire, ses formes variées et la sadaqa jariya."
                  href="/hadith-sadaqa-charite-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le Ramadan en islam"
                  description="Les enseignements du Prophète ﷺ sur le jeûne, les nuits de Ramadan et la zakat al-fitr."
                  href="/hadith-ramadan-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
