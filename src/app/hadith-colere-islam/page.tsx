import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";
import ArticleCTA from "@/components/ArticleCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Hadiths sur la colère en islam : enseignements prophétiques pour maîtriser sa colère",
  description:
    "Découvrez les hadiths authentiques sur la colère en islam : ne te mets pas en colère, le vrai fort est celui qui se maîtrise, remèdes prophétiques (wudu, s&apos;asseoir, ta&apos;awwudh). Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur la colère en islam : enseignements prophétiques pour maîtriser sa colère",
    description:
      "Les hadiths authentiques sur la colère en islam : le fort est celui qui se maîtrise, remèdes prophétiques, réprimer sa colère mène au Paradis.",
    url: "https://www.islamreligion.fr/hadith-colere-islam",
    images: [
      {
        url: "/images/priere-islam-doua-mosquee-silhouette.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-colere-islam",
  },
};

const tocItems = [
  { id: "colere-coran", label: "La colère dans le Coran" },
  { id: "ne-te-mets-pas-en-colere", label: "Ne te mets pas en colère" },
  { id: "force-veritable", label: "La force véritable" },
  { id: "remedes-prophetiques", label: "Remèdes prophétiques" },
  { id: "colere-et-foi", label: "Colère et foi" },
  { id: "colere-prophete", label: "La colère du Prophète ﷺ" },
  { id: "reprimer-colere-paradis", label: "Réprimer sa colère et le Paradis" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur la colère en islam ?",
    answer:
      "Les hadiths les plus importants sur la colère incluent celui où le Prophète ﷺ répète trois fois \u00ab Ne te mets pas en colère \u00bb (Bukhari 6116), celui sur le vrai fort qui se maîtrise au moment de la colère (Bukhari 6114), et celui sur les remèdes prophétiques comme les ablutions et le changement de position. Ces hadiths couvrent la mise en garde, la définition de la vraie force et les solutions pratiques.",
  },
  {
    question:
      "Comment le Prophète Muhammad ﷺ gérait-il sa propre colère ?",
    answer:
      "Le Prophète ﷺ ne se mettait jamais en colère pour des raisons personnelles. Il ne se mettait en colère que lorsque les limites d\u2019Allah étaient transgressées, et dans ce cas il agissait avec justice sans excès. Aisha rapporte qu\u2019il n\u2019a jamais frappé personne de sa main, ni un serviteur ni une femme, sauf dans le combat pour la cause d\u2019Allah (Muslim 2328).",
  },
  {
    question:
      "Quels sont les remèdes contre la colère en islam ?",
    answer:
      "Les remèdes prophétiques contre la colère sont : dire \u00ab A\u2019udhu billahi min ash-shaytani r-rajim \u00bb (je cherche refuge auprès d\u2019Allah contre Satan le maudit), faire ses ablutions (wudu), s\u2019asseoir si l\u2019on est debout et se coucher si l\u2019on est assis, garder le silence, et se rappeler la récompense de celui qui réprime sa colère. Ces remèdes sont tirés de hadiths authentiques.",
  },
  {
    question:
      "La colère est-elle toujours interdite en islam ?",
    answer:
      "Non, la colère n\u2019est pas toujours blâmable en islam. La colère pour la cause d\u2019Allah, lorsque Ses limites sont transgressées, est une forme de jalousie légitime (ghayra). Le Prophète ﷺ lui-même se mettait en colère quand les interdits d\u2019Allah étaient violés. Ce qui est blâmé, c\u2019est la colère pour des raisons personnelles, égoïstes ou qui mène à l\u2019injustice.",
  },
  {
    question:
      "Que gagne le musulman qui réprime sa colère ?",
    answer:
      "Le Prophète ﷺ a promis que celui qui réprime sa colère alors qu\u2019il est capable de l\u2019exprimer sera appelé par Allah devant toutes les créatures le Jour de la Résurrection pour choisir parmi les houris du Paradis (Tirmidhi 2021). Réprimer sa colère est aussi un signe de taqwa (piété) mentionné dans le Coran (3:134).",
  },
  {
    question:
      "Pourquoi le Prophète ﷺ a-t-il dit que le fort n\u2019est pas le lutteur ?",
    answer:
      "Le Prophète ﷺ a redéfini la notion de force en islam. La vraie force n\u2019est pas physique mais intérieure : c\u2019est la capacité à maîtriser son âme (nafs) au moment de la colère. Cette maîtrise demande plus de courage et d\u2019effort que la lutte physique, car elle implique de vaincre ses pulsions et de choisir la raison et la crainte d\u2019Allah.",
  },
  {
    question:
      "Les ablutions (wudu) aident-elles vraiment contre la colère ?",
    answer:
      "Oui, le Prophète ﷺ a prescrit les ablutions comme remède contre la colère en expliquant que la colère vient de Satan et que Satan a été créé de feu, et que le feu s\u2019éteint avec l\u2019eau (Abu Dawud 4784). Les ablutions permettent de se calmer physiquement et spirituellement, en créant une pause dans l\u2019état émotionnel et en rappelant le serviteur à la conscience d\u2019Allah.",
  },
  {
    question:
      "Comment enseigner aux enfants à gérer leur colère selon l\u2019islam ?",
    answer:
      "On peut enseigner aux enfants les remèdes prophétiques de manière progressive : leur apprendre à dire la formule de protection contre Satan, les encourager à boire de l\u2019eau ou à faire leurs ablutions, leur expliquer que le vrai courage est de se maîtriser et non de frapper. L\u2019exemple des parents est essentiel : un foyer où les adultes maîtrisent leur colère forme naturellement des enfants équilibrés.",
  },
];

export default function HadithColereIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-colere-islam/#article",
        headline:
          "Hadiths sur la colère en islam : enseignements prophétiques pour maîtriser sa colère",
        description:
          "Découvrez les hadiths authentiques sur la colère en islam : ne te mets pas en colère, le vrai fort est celui qui se maîtrise, remèdes prophétiques.",
        image: "/images/priere-islam-doua-mosquee-silhouette.jpg",
        datePublished: "2026-04-28",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-colere-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-colere-islam/#breadcrumb",
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
            name: "Hadiths sur la colère",
            item: "https://www.islamreligion.fr/hadith-colere-islam",
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
          title="Hadiths sur la colère en islam"
          subtitle="Les enseignements prophétiques sur la maîtrise de la colère : le vrai fort est celui qui se contrôle, les remèdes de la Sunna et les récompenses promises à celui qui réprime sa colère."
          imageSrc="/images/priere-islam-doua-mosquee-silhouette.jpg"
          imageAlt="Hadiths sur la colère en islam, maîtrise de soi et enseignements prophétiques"
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
                  Hadiths sur la colère
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
                    Le Prophète ﷺ a répété trois fois &laquo;&nbsp;Ne te mets pas en colère&nbsp;&raquo; comme conseil suprême à un compagnon.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le vrai fort n&apos;est pas le lutteur, mais celui qui maîtrise son âme au moment de la colère.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La Sunna prescrit des remèdes concrets : ablutions, changement de position, recherche de refuge auprès d&apos;Allah et silence.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Réprimer sa colère est un acte d&apos;adoration récompensé par le Paradis.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="colere-coran" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La colère dans le Coran
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il est essentiel de comprendre le cadre coranique de la colère. Allah a mentionné la maîtrise de la colère parmi les qualités des gens pieux (<em>muttaqin</em>), ceux qui hériteront du Paradis. Le Coran ne condamne pas le sentiment de colère en lui-même — qui est naturel — mais enseigne à le canaliser et à le réprimer.
                </p>

                <div className="mt-6 rounded-xl border border-border bg-accent p-5">
                  <p className="text-right text-lg leading-loose text-foreground" dir="rtl">
                    الَّذِينَ يُنفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foreground">
                    &laquo;&nbsp;Ceux qui dépensent dans l&apos;aisance et dans l&apos;adversité, qui répriment leur colère et qui pardonnent aux gens. Et Allah aime les bienfaisants.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm font-semibold text-primary">
                    Coran, sourate Al-Imran (3:134)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondamental place la maîtrise de la colère (<em>kadhm al-ghaydh</em>) entre la générosité et le pardon, formant une trilogie du bon caractère. Les savants soulignent que réprimer sa colère est une étape, et que le pardon en est le sommet. Allah associe ces qualités à l&apos;amour divin : &laquo;&nbsp;Allah aime les bienfaisants&nbsp;&raquo;. C&apos;est sur cette base coranique que les hadiths du Prophète ﷺ développent des enseignements pratiques sur la gestion de la colère.
                </p>

                <div className="mt-6 rounded-xl border border-border bg-accent p-5">
                  <p className="text-right text-lg leading-loose text-foreground" dir="rtl">
                    وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foreground">
                    &laquo;&nbsp;Et lorsqu&apos;ils sont en colère, ils pardonnent.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm font-semibold text-primary">
                    Coran, sourate Ash-Shura (42:37)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset décrit les croyants qui, même en état de colère, choisissent le pardon. Il ne dit pas qu&apos;ils ne se mettent jamais en colère, mais qu&apos;ils la surmontent par le pardon. C&apos;est la différence entre la nature humaine et la réponse du croyant : la colère survient, mais la foi dicte la réaction.
                </p>
              </section>

              {/* ========================================= */}
              {/* SECTION : Ne te mets pas en colère        */}
              {/* ========================================= */}
              <section id="ne-te-mets-pas-en-colere" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  &laquo;&nbsp;Ne te mets pas en colère&nbsp;&raquo; : le conseil suprême
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi tous les conseils que le Prophète ﷺ pouvait donner, il a choisi de résumer son enseignement en une parole simple mais profonde : &laquo;&nbsp;Ne te mets pas en colère.&nbsp;&raquo; Cette recommandation, répétée trois fois, constitue l&apos;un des hadiths les plus célèbres sur le comportement du musulman.
                </p>

                <HadithBlock
                  number={1}
                  title="Ne te mets pas en colère (la taghdab)"
                  narrator="Abu Hurayra"
                  arabic="أَنَّ رَجُلًا قَالَ لِلنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَوْصِنِي. قَالَ: لَا تَغْضَبْ. فَرَدَّدَ مِرَارًا، قَالَ: لَا تَغْضَبْ"
                  translation="Un homme dit au Prophète ﷺ : &laquo;&nbsp;Conseille-moi.&nbsp;&raquo; Il répondit : &laquo;&nbsp;Ne te mets pas en colère.&nbsp;&raquo; L&apos;homme répéta sa demande plusieurs fois, et le Prophète ﷺ répondit à chaque fois : &laquo;&nbsp;Ne te mets pas en colère.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°6116"
                  grade="sahih"
                  explanation="Ce hadith est d&apos;une concision remarquable. Le compagnon espérait sans doute un long discours, mais le Prophète ﷺ a résumé l&apos;essentiel de la bonne conduite en une phrase. Les savants expliquent que ce conseil englobe tout : celui qui maîtrise sa colère évitera l&apos;injustice, la violence, les paroles blessantes et les actes irréfléchis. La répétition montre l&apos;insistance du Prophète ﷺ et l&apos;importance capitale de ce conseil."
                />

                <HadithBlock
                  number={2}
                  title="Le Prophète ﷺ conseille de ne pas se mettre en colère pour obtenir le Paradis"
                  narrator="Abu ad-Darda"
                  arabic="قَالَ رَجُلٌ لِلنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: دُلَّنِي عَلَى عَمَلٍ يُدْخِلُنِي الْجَنَّةَ. قَالَ: لَا تَغْضَبْ وَلَكَ الْجَنَّةُ"
                  translation="Un homme dit au Prophète ﷺ : &laquo;&nbsp;Indique-moi une œuvre qui me fasse entrer au Paradis.&nbsp;&raquo; Il répondit : &laquo;&nbsp;Ne te mets pas en colère, et le Paradis est à toi.&nbsp;&raquo;"
                  source="Musnad Ahmad, n°21348 — At-Tabarani, Al-Mu&apos;jam al-Kabir"
                  grade="sahih"
                  explanation="Ce hadith lie directement la maîtrise de la colère à l&apos;entrée au Paradis. Le Prophète ﷺ n&apos;a pas mentionné la prière, le jeûne ou la zakat — non qu&apos;ils soient moins importants — mais pour montrer que la maîtrise de la colère est une clé qui ouvre les portes de toutes les bonnes actions. En effet, celui qui ne se met pas en colère préserve ses liens de parenté, évite l&apos;injustice et maintient sa prière dans la sérénité."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces deux hadiths établissent un principe fondamental : la colère est la racine de nombreux péchés. En la maîtrisant, le musulman se protège d&apos;une multitude de fautes. Pour approfondir les vertus du bon caractère, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : La force véritable    */}
              {/* ============================== */}
              <section id="force-veritable" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La force véritable : celui qui se maîtrise
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a révolutionné la conception arabe de la force, qui était exclusivement liée à la prouesse physique. Il a redéfini la vraie force comme une force intérieure, une capacité à dominer son âme (<em>nafs</em>) au moment où la colère pousse à l&apos;excès.
                </p>

                <HadithBlock
                  number={3}
                  title="Le fort n&apos;est pas le lutteur"
                  narrator="Abu Hurayra"
                  arabic="لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ"
                  translation="Le fort n&apos;est pas celui qui terrasse les gens dans la lutte. Le fort est celui qui se maîtrise au moment de la colère."
                  source="Sahih Al-Bukhari, n°6114 — Sahih Muslim, n°2609"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus célèbres de la Sunna. Dans la société arabe de l&apos;époque, la force physique et la capacité à vaincre ses adversaires étaient des vertus suprêmes. Le Prophète ﷺ bouleverse cette hiérarchie : la vraie bataille est intérieure. Se maîtriser quand la colère bouillonne demande un courage supérieur à celui du combat physique, car l&apos;ennemi est en soi-même. Les savants y voient un fondement de la spiritualité islamique : le grand jihad est celui de l&apos;âme."
                />

                <HadithBlock
                  number={4}
                  title="Le lutteur vaincu par la colère"
                  narrator="Anas ibn Malik"
                  arabic="إِنَّ الْغَضَبَ جَمْرَةٌ تُوقَدُ فِي قَلْبِ ابْنِ آدَمَ، أَلَمْ تَرَوْا إِلَى حُمْرَةِ عَيْنَيْهِ وَانْتِفَاخِ أَوْدَاجِهِ"
                  translation="La colère est une braise qui s&apos;allume dans le cœur du fils d&apos;Adam. Ne voyez-vous pas la rougeur de ses yeux et le gonflement de ses veines jugulaires ?"
                  source="Jami&apos; at-Tirmidhi, n°2191"
                  grade="sahih"
                  explanation="Ce hadith décrit les effets physiques de la colère avec une précision étonnante. Le Prophète ﷺ compare la colère à une braise (<em>jamra</em>) qui embrase le cœur. Les signes extérieurs — rougeur des yeux, gonflement des veines — sont présentés comme des preuves visibles de ce feu intérieur. Cette description permet au musulman de reconnaître les signes de la colère chez lui-même et chez les autres, afin d&apos;appliquer immédiatement les remèdes prophétiques."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La redéfinition de la force par le Prophète ﷺ est un enseignement qui transcende les époques. Dans un monde où la réaction impulsive est souvent valorisée, l&apos;islam place la maîtrise de soi comme sommet du courage.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le bon caractère, la purification de l&apos;âme et les enseignements prophétiques avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Remèdes prophétiques */}
              {/* ============================== */}
              <section id="remedes-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les remèdes prophétiques contre la colère
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ n&apos;a pas seulement mis en garde contre la colère : il a prescrit des remèdes concrets, pratiques et immédiats. Ces remèdes combinent la dimension spirituelle (invocation, rappel d&apos;Allah) et la dimension physique (changement de position, ablutions), montrant la cohérence de l&apos;approche islamique.
                </p>

                <HadithBlock
                  number={5}
                  title="Chercher refuge auprès d&apos;Allah contre Satan"
                  narrator="Sulayman ibn Surad"
                  arabic="اسْتَبَّ رَجُلَانِ عِنْدَ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَأَحَدُهُمَا يَسُبُّ صَاحِبَهُ مُغْضَبًا قَدِ احْمَرَّ وَجْهُهُ، فَقَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنِّي لَأَعْلَمُ كَلِمَةً لَوْ قَالَهَا لَذَهَبَ عَنْهُ مَا يَجِدُ، لَوْ قَالَ: أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ"
                  translation="Deux hommes s&apos;insultèrent en présence du Prophète ﷺ. L&apos;un d&apos;eux insultait l&apos;autre, en colère, le visage rougi. Le Prophète ﷺ dit : &laquo;&nbsp;Je connais une parole qui, s&apos;il la prononçait, dissiperait ce qu&apos;il ressent. S&apos;il disait : je cherche refuge auprès d&apos;Allah contre Satan le maudit.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°6115 — Sahih Muslim, n°2610"
                  grade="sahih"
                  explanation="Ce hadith établit le lien entre la colère et l&apos;influence de Satan. Le Prophète ﷺ prescrit la formule de l&apos;isti&apos;adha (demande de refuge) comme premier remède. En prononçant cette parole, le croyant reconnaît que sa colère est attisée par Satan et fait appel à la protection divine. Le contexte du hadith — une dispute réelle devant le Prophète ﷺ — montre que ce remède est applicable dans les situations concrètes du quotidien."
                />

                <HadithBlock
                  number={6}
                  title="Les ablutions éteignent la colère"
                  narrator="Atiyya as-Sa&apos;di"
                  arabic="إِنَّ الْغَضَبَ مِنَ الشَّيْطَانِ، وَإِنَّ الشَّيْطَانَ خُلِقَ مِنَ النَّارِ، وَإِنَّمَا تُطْفَأُ النَّارُ بِالْمَاءِ، فَإِذَا غَضِبَ أَحَدُكُمْ فَلْيَتَوَضَّأْ"
                  translation="La colère vient de Satan, et Satan a été créé de feu. Le feu ne s&apos;éteint qu&apos;avec l&apos;eau. Lorsque l&apos;un de vous se met en colère, qu&apos;il fasse ses ablutions."
                  source="Sunan Abu Dawud, n°4784"
                  grade="hasan"
                  explanation="Ce hadith présente un raisonnement par analogie : la colère vient de Satan, Satan est de feu, le feu s&apos;éteint par l&apos;eau. Le remède est donc les ablutions (wudu). Au-delà de l&apos;analogie, les ablutions ont un effet concret : elles obligent la personne en colère à se déplacer, à effectuer des gestes rituels et à entrer en contact avec l&apos;eau fraîche, ce qui calme le corps et l&apos;esprit. C&apos;est un remède qui unit le physique et le spirituel."
                />

                <HadithBlock
                  number={7}
                  title="Changer de position pour calmer la colère"
                  narrator="Abu Dharr"
                  arabic="إِذَا غَضِبَ أَحَدُكُمْ وَهُوَ قَائِمٌ فَلْيَجْلِسْ، فَإِنْ ذَهَبَ عَنْهُ الْغَضَبُ وَإِلَّا فَلْيَضْطَجِعْ"
                  translation="Lorsque l&apos;un de vous se met en colère et qu&apos;il est debout, qu&apos;il s&apos;assoie. Si la colère ne le quitte pas, qu&apos;il se couche."
                  source="Sunan Abu Dawud, n°4782 — Musnad Ahmad, n°21348"
                  grade="sahih"
                  explanation="Ce hadith prescrit un remède progressif et physique. La position debout facilite l&apos;action impulsive : frapper, partir brusquement, crier. En s&apos;asseyant, la personne réduit sa capacité d&apos;action agressive. Si cela ne suffit pas, elle se couche, position qui rend pratiquement impossible tout acte de violence. Ce conseil prophétique anticipe les découvertes modernes sur le lien entre la posture corporelle et les émotions."
                />

                <HadithBlock
                  number={8}
                  title="Le silence comme protection contre la colère"
                  narrator="Ibn Abbas"
                  arabic="إِذَا غَضِبَ أَحَدُكُمْ فَلْيَسْكُتْ"
                  translation="Lorsque l&apos;un de vous se met en colère, qu&apos;il se taise."
                  source="Musnad Ahmad, n°2136 — As-Silsila as-Sahiha, n°1375"
                  grade="sahih"
                  explanation="Ce hadith prescrit le silence comme barrière contre les dégâts de la colère. La plupart des regrets liés à la colère proviennent des paroles prononcées sous son emprise : insultes, menaces, divorce prononcé à la hâte. En gardant le silence, le musulman préserve ses relations, son honneur et sa religion. Le Prophète ﷺ a répété ce conseil trois fois dans certaines versions du hadith, soulignant son importance."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Colère et foi         */}
              {/* ============================== */}
              <section id="colere-et-foi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La colère et ses effets sur la foi
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les hadiths enseignent que la colère non maîtrisée est un danger pour la foi elle-même. Elle peut pousser le musulman à commettre des actes qui annulent ses bonnes œuvres et détruisent ses relations avec Allah et avec les gens.
                </p>

                <HadithBlock
                  number={9}
                  title="La colère corrompt la foi comme l&apos;aloès corrompt le miel"
                  narrator="Abu ad-Darda"
                  arabic="إِنَّ الْغَضَبَ يُفْسِدُ الْإِيمَانَ كَمَا يُفْسِدُ الصَّبِرُ الْعَسَلَ"
                  translation="La colère corrompt la foi comme l&apos;aloès (la substance amère) corrompt le miel."
                  source="Shu&apos;ab al-Iman, Al-Bayhaqi, n°8296"
                  grade="hasan"
                  explanation="Ce hadith utilise une métaphore puissante : le miel représente la douceur de la foi, et l&apos;aloès (<em>sabir</em>), une substance extrêmement amère, représente la colère. Une seule goutte d&apos;aloès suffit à gâcher une grande quantité de miel. De même, un seul accès de colère peut détruire des années de bonnes actions, de bonnes relations et de réputation. Ce hadith invite à la vigilance permanente."
                />

                <HadithBlock
                  number={10}
                  title="Les portes que la colère ouvre vers le péché"
                  narrator="Abu Hurayra"
                  arabic="مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ"
                  translation="Celui qui croit en Allah et au Jour dernier, qu&apos;il dise du bien ou qu&apos;il se taise."
                  source="Sahih Al-Bukhari, n°6018 — Sahih Muslim, n°47"
                  grade="sahih"
                  explanation="Bien que ce hadith soit général, les savants le citent fréquemment dans le contexte de la colère. En effet, c&apos;est au moment de la colère que le croyant est le plus tenté de prononcer des paroles nuisibles. Ce hadith lie directement la foi (iman) à la maîtrise de la parole. Le croyant véritable est celui qui, même en colère, choisit le silence plutôt que la parole blessante. C&apos;est une manifestation concrète de la foi en Allah et au Jour du jugement."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Colère du Prophète    */}
              {/* ============================== */}
              <section id="colere-prophete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La colère du Prophète ﷺ : uniquement pour Allah
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ n&apos;était pas un être dépourvu d&apos;émotions. Il éprouvait la colère, mais uniquement lorsque les limites d&apos;Allah étaient transgressées. Cette distinction entre la colère personnelle et la colère pour Allah est fondamentale dans l&apos;éthique islamique.
                </p>

                <HadithBlock
                  number={11}
                  title="Le Prophète ﷺ ne se vengeait jamais pour lui-même"
                  narrator="Aisha"
                  arabic="مَا انْتَقَمَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لِنَفْسِهِ فِي شَيْءٍ قَطُّ، إِلَّا أَنْ تُنْتَهَكَ حُرْمَةُ اللَّهِ فَيَنْتَقِمَ لِلَّهِ بِهَا"
                  translation="Le Messager d&apos;Allah ﷺ ne s&apos;est jamais vengé pour lui-même en quoi que ce soit, sauf lorsque les limites sacrées d&apos;Allah étaient transgressées : il se vengeait alors pour Allah."
                  source="Sahih Al-Bukhari, n°3560 — Sahih Muslim, n°2327"
                  grade="sahih"
                  explanation="Ce hadith, rapporté par Aisha qui connaissait le Prophète ﷺ mieux que quiconque dans l&apos;intimité, établit un modèle de comportement. Le Prophète ﷺ distinguait clairement entre son ego et la cause d&apos;Allah. Quand on l&apos;insultait personnellement, il pardonnait. Quand les interdits d&apos;Allah étaient violés, il agissait avec fermeté mais justice. Cette distinction est la clé pour le musulman : la colère n&apos;est légitime que lorsqu&apos;elle est motivée par la défense de la religion, sans excès ni injustice."
                />

                <HadithBlock
                  number={12}
                  title="Le Prophète ﷺ n&apos;a jamais frappé personne"
                  narrator="Aisha"
                  arabic="مَا ضَرَبَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ شَيْئًا قَطُّ بِيَدِهِ، وَلَا امْرَأَةً وَلَا خَادِمًا، إِلَّا أَنْ يُجَاهِدَ فِي سَبِيلِ اللَّهِ"
                  translation="Le Messager d&apos;Allah ﷺ n&apos;a jamais frappé quoi que ce soit de sa main, ni une femme, ni un serviteur, sauf lorsqu&apos;il combattait dans le sentier d&apos;Allah."
                  source="Sahih Muslim, n°2328"
                  grade="sahih"
                  explanation="Ce hadith est un témoignage catégorique d&apos;Aisha sur le comportement du Prophète ﷺ. Jamais il n&apos;a levé la main sur une femme, un serviteur ou quiconque par colère personnelle. Ce hadith réfute toute justification de la violence domestique au nom de l&apos;islam. Le Prophète ﷺ, qui était le plus en droit de se mettre en colère, était aussi le plus maître de lui-même."
                />
              </section>

              {/* ============================================ */}
              {/* SECTION : Réprimer sa colère et le Paradis   */}
              {/* ============================================ */}
              <section id="reprimer-colere-paradis" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Réprimer sa colère mène au Paradis
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne se contente pas d&apos;interdire la colère excessive : il promet des récompenses immenses à celui qui la réprime. Le Prophète ﷺ a décrit des récompenses spécifiques pour celui qui maîtrise sa colère alors qu&apos;il aurait pu l&apos;exprimer.
                </p>

                <HadithBlock
                  number={13}
                  title="Celui qui réprime sa colère sera appelé devant les créatures"
                  narrator="Mu&apos;adh ibn Anas"
                  arabic="مَنْ كَظَمَ غَيْظًا وَهُوَ قَادِرٌ عَلَى أَنْ يُنْفِذَهُ دَعَاهُ اللَّهُ عَزَّ وَجَلَّ عَلَى رُؤُوسِ الْخَلَائِقِ يَوْمَ الْقِيَامَةِ حَتَّى يُخَيِّرَهُ اللَّهُ مِنَ الْحُورِ مَا شَاءَ"
                  translation="Celui qui réprime sa colère alors qu&apos;il est capable de l&apos;exprimer, Allah l&apos;appellera devant toutes les créatures le Jour de la Résurrection et le laissera choisir parmi les houris celle qu&apos;il veut."
                  source="Jami&apos; at-Tirmidhi, n°2021 — Sunan Abu Dawud, n°4777"
                  grade="hasan"
                  explanation="Ce hadith décrit une récompense extraordinaire. La condition est précise : réprimer sa colère &laquo;&nbsp;alors qu&apos;on est capable de l&apos;exprimer&nbsp;&raquo;. Il ne s&apos;agit pas de faiblesse ou d&apos;impuissance, mais d&apos;un choix délibéré de maîtrise. Celui qui a le pouvoir de se venger mais choisit la retenue sera honoré publiquement le Jour du Jugement. Cette récompense est à la mesure de l&apos;effort : vaincre son ego est le plus grand des combats."
                />

                <HadithBlock
                  number={14}
                  title="Les trois qualités qui mènent au Paradis"
                  narrator="Anas ibn Malik"
                  arabic="مَنْ كَفَّ غَضَبَهُ كَفَّ اللَّهُ عَنْهُ عَذَابَهُ، وَمَنْ حَفِظَ لِسَانَهُ سَتَرَ اللَّهُ عَوْرَتَهُ، وَمَنِ اعْتَذَرَ إِلَى اللَّهِ قَبِلَ اللَّهُ عُذْرَهُ"
                  translation="Celui qui retient sa colère, Allah écartera de lui Son châtiment. Celui qui préserve sa langue, Allah couvrira ses défauts. Et celui qui demande pardon à Allah, Allah acceptera ses excuses."
                  source="As-Silsila as-Sahiha, Al-Albani, n°1014"
                  grade="hasan"
                  explanation="Ce hadith présente trois actions et leurs récompenses divines correspondantes. La première — retenir sa colère — est récompensée par la protection contre le châtiment d&apos;Allah. Le lien est logique : celui qui épargne les gens de sa colère sera épargné de la colère divine. Ce principe de réciprocité est fréquent dans les hadiths : la miséricorde envers les créatures attire la miséricorde du Créateur."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent que la maîtrise de la colère n&apos;est pas une simple vertu morale : c&apos;est un acte d&apos;adoration majeur, récompensé comme tel. Pour découvrir d&apos;autres vertus récompensées par le Paradis, consultez notre article sur les{" "}
                  <Link href="/hadith-patience-epreuves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la patience face aux épreuves
                  </Link>.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour la vie quotidienne du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Reconnaître les signes de la colère
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a décrit les signes physiques de la colère : rougeur du visage, gonflement des veines. Apprendre à identifier ces signes chez soi est la première étape pour appliquer les remèdes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Appliquer les remèdes dans l&apos;ordre
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Dire &laquo;&nbsp;A&apos;udhu billahi min ash-shaytani r-rajim&nbsp;&raquo;, s&apos;asseoir si l&apos;on est debout, se coucher si la colère persiste, faire ses ablutions, et garder le silence jusqu&apos;à ce que la colère passe.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Redéfinir la force intérieure
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La vraie force n&apos;est pas de dominer les autres, mais de se dominer soi-même. Chaque victoire sur sa colère est une preuve de courage et de foi.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Distinguer colère personnelle et colère pour Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La colère motivée par l&apos;ego est blâmable. La colère face à la transgression des limites d&apos;Allah est légitime, à condition de rester dans les limites de la justice et de ne pas commettre d&apos;excès.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Protéger sa foi de la corruption de la colère
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La colère corrompt la foi comme l&apos;amertume corrompt le miel. Un seul accès de colère peut détruire des relations et des bonnes œuvres accumulées pendant des années.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Viser la récompense divine
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Celui qui réprime sa colère alors qu&apos;il peut l&apos;exprimer sera honoré le Jour du Jugement. Cette perspective transforme chaque épreuve de colère en opportunité de gagner le Paradis.
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
                  description="Comprenez les hadiths sur la colère dans leur langue originale et approfondissez votre connaissance de la Sunna."
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
                  title="Hadiths sur le bon comportement en islam"
                  description="Les enseignements prophétiques sur le bon caractère, la douceur et les relations avec autrui."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la patience face aux épreuves en islam"
                  description="Découvrez les paroles du Prophète ﷺ sur la patience, l&apos;endurance et la récompense de ceux qui persévèrent."
                  href="/hadith-patience-epreuves-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le pardon et le repentir en islam"
                  description="Les enseignements prophétiques sur le pardon, la miséricorde divine et le retour à Allah."
                  href="/hadith-pardon-repentir-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
