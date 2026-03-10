import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import ArticleCTA from "@/components/ArticleCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Hadiths sur la famille et les liens de parenté en islam : guide complet",
  description:
    "Découvrez les hadiths authentiques sur la famille et les liens de parenté (silat ar-rahim) en islam : maintien des liens, droits des proches, dépense pour la famille. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur la famille et les liens de parenté en islam : guide complet",
    description:
      "Les hadiths authentiques sur la famille et silat ar-rahim : maintien des liens de parenté, droits des proches, réconciliation et dépense pour la famille selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-famille-liens-parente-islam",
    images: [
      {
        url: "/images/famille-musulmane-islam-croissant-lune-valeurs.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical:
      "https://www.islamreligion.fr/hadith-famille-liens-parente-islam",
  },
};

const tocItems = [
  { id: "importance-liens", label: "L\u2019importance des liens de parenté" },
  { id: "silat-ar-rahim", label: "Silat ar-rahim : maintenir les liens" },
  { id: "rupture-liens", label: "La rupture des liens : un péché majeur" },
  { id: "droits-proches", label: "Droits des proches et dépense" },
  { id: "reconciliation", label: "Réconciliation et pardon" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Que signifie silat ar-rahim en islam ?",
    answer:
      "Silat ar-rahim signifie littéralement \u00ab joindre le lien utérin \u00bb. C\u2019est le maintien actif des liens de parenté par les visites, les appels, l\u2019entraide financière, les invocations et la bienveillance envers les proches. Le Prophète \u2018alayhi salatu wa salam a enseigné que celui qui maintient ces liens verra sa subsistance (rizq) augmentée et sa vie prolongée (Bukhari 5986).",
  },
  {
    question:
      "Quels sont les hadiths les plus importants sur la famille en islam ?",
    answer:
      "Les hadiths les plus importants incluent celui rapporté par Abu Hurayra sur le lien de parenté (ar-rahim) attaché au Trône d\u2019Allah (Bukhari 5988), celui d\u2019Anas sur l\u2019augmentation de la subsistance par le maintien des liens (Bukhari 5986), et celui d\u2019Abdullah ibn Amr sur le fait que le vrai mainteneur des liens n\u2019est pas celui qui rend la pareille mais celui qui renoue quand on rompt avec lui (Bukhari 5991).",
  },
  {
    question:
      "Couper les liens de parenté est-il un péché majeur en islam ?",
    answer:
      "Oui, la rupture des liens de parenté (qat\u2019 ar-rahim) est considérée comme un péché majeur. Le Prophète \u2018alayhi salatu wa salam a averti que celui qui rompt les liens de parenté n\u2019entrera pas au Paradis (Bukhari 5984). Allah a également maudit ceux qui sèment la corruption sur terre et rompent les liens de parenté (Coran 47:22-23).",
  },
  {
    question:
      "Comment maintenir les liens de parenté avec des proches difficiles ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a enseigné que le vrai mainteneur des liens n\u2019est pas celui qui rend la pareille, mais celui qui renoue même quand l\u2019autre coupe (Bukhari 5991). Un homme a demandé conseil au Prophète au sujet de proches ingrats, et le Prophète lui a dit de continuer à les traiter avec bonté, car Allah serait son soutien tant qu\u2019il maintiendrait cette attitude (Muslim 2558).",
  },
  {
    question:
      "Quels sont les bienfaits du maintien des liens familiaux selon les hadiths ?",
    answer:
      "Les hadiths mentionnent deux bienfaits majeurs : l\u2019augmentation de la subsistance (rizq) et la prolongation de la vie (Bukhari 5986). Les savants expliquent que cette prolongation peut être littérale (plus d\u2019années de vie) ou qualitative (une vie bénie et riche en bonnes \u0153uvres). Le maintien des liens est aussi un moyen d\u2019accéder au Paradis et de gagner la satisfaction d\u2019Allah.",
  },
  {
    question:
      "La dépense pour la famille est-elle considérée comme une aumône en islam ?",
    answer:
      "Oui, le Prophète \u2018alayhi salatu wa salam a dit que la meilleure aumône est celle dépensée pour sa famille (Muslim 995). La dépense pour les proches cumule deux récompenses : celle de l\u2019aumône et celle du maintien des liens de parenté (Bukhari 1466). Chaque dinar dépensé pour sa famille avec une intention sincère est récompensé par Allah.",
  },
  {
    question:
      "Quels proches sont concernés par les liens de parenté en islam ?",
    answer:
      "Les liens de parenté englobent tous les proches par le sang (parents, enfants, frères, s\u0153urs, oncles, tantes, cousins) et par alliance. La priorité revient aux parents, puis aux plus proches. Le Prophète a particulièrement insisté sur les droits de la mère, mentionnée trois fois avant le père (Bukhari 5971). Les voisins proches qui sont aussi de la famille ont un double droit.",
  },
  {
    question:
      "Comment le Prophète traitait-il sa famille et ses proches ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam était un modèle de bonté familiale. Khadija a dit de lui, avant même la révélation, qu\u2019il maintenait les liens de parenté (Bukhari 3). Il visitait ses proches régulièrement, prenait soin des orphelins de sa famille, et a dit que le meilleur des hommes est celui qui traite le mieux sa famille (Tirmidhi 3895).",
  },
];

export default function HadithFamilleLiensParenteIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-famille-liens-parente-islam/#article",
        headline:
          "Hadiths sur la famille et les liens de parenté en islam : guide complet",
        description:
          "Découvrez les hadiths authentiques sur la famille et les liens de parenté (silat ar-rahim) en islam : maintien des liens, droits des proches, dépense pour la famille.",
        image:
          "/images/famille-musulmane-islam-croissant-lune-valeurs.jpg",
        datePublished: "2026-04-30",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-famille-liens-parente-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-famille-liens-parente-islam/#breadcrumb",
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
            name: "Hadiths sur la famille et les liens de parenté",
            item: "https://www.islamreligion.fr/hadith-famille-liens-parente-islam",
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
          title="Hadiths sur la famille et les liens de parenté en islam"
          subtitle="Les enseignements prophétiques sur silat ar-rahim, le maintien des liens familiaux, les droits des proches et la réconciliation selon la Sunna authentique."
          imageSrc="/images/famille-musulmane-islam-croissant-lune-valeurs.jpg"
          imageAlt="Hadiths sur la famille et les liens de parenté en islam"
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
                  Hadiths sur la famille et les liens de parenté
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
                    Le lien de parenté (ar-rahim) est attaché au Trône d&apos;Allah et celui qui le maintient, Allah maintient son lien avec lui.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Maintenir les liens de parenté augmente la subsistance (rizq) et prolonge la vie selon les hadiths authentiques.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le vrai mainteneur des liens n&apos;est pas celui qui rend la pareille, mais celui qui renoue quand on rompt avec lui.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La rupture des liens de parenté est un péché majeur qui peut priver le musulman de l&apos;entrée au Paradis.
                  </li>
                </ul>
              </div>

              {/* ================================================ */}
              {/* SECTION : Importance des liens de parenté         */}
              {/* ================================================ */}
              <section id="importance-liens" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance des liens de parenté en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les liens de parenté occupent une place centrale dans l&apos;islam. Le terme arabe <em>ar-rahim</em> (الرحم) désigne à la fois l&apos;utérus et les liens familiaux, et il dérive de la même racine que <em>ar-Rahman</em> (le Tout Miséricordieux), l&apos;un des plus beaux noms d&apos;Allah. Cette parenté linguistique révèle la sacralité que l&apos;islam confère aux liens familiaux. Le Coran et la Sunna regorgent d&apos;injonctions à maintenir ces liens et d&apos;avertissements sévères contre leur rupture.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;Craignez Allah au nom duquel vous vous implorez mutuellement, et respectez les liens de parenté. Certes, Allah vous observe parfaitement.&nbsp;&raquo; (Sourate An-Nisa, 4:1). Ce verset associe directement la crainte d&apos;Allah au respect des liens familiaux, montrant que ces deux obligations sont indissociables. Les hadiths du Prophète ﷺ viennent détailler et renforcer cet enseignement coranique.
                </p>

                <HadithBlock
                  number={1}
                  title="Le lien de parenté est attaché au Trône d&apos;Allah"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ الرَّحِمَ شَجْنَةٌ مِنَ الرَّحْمَنِ، فَقَالَ اللَّهُ: مَنْ وَصَلَكِ وَصَلْتُهُ، وَمَنْ قَطَعَكِ قَطَعْتُهُ"
                  translation="Le lien de parenté (ar-rahim) est une branche issue du Tout Miséricordieux (ar-Rahman). Allah a dit : Celui qui te maintient, Je maintiendrai Mon lien avec lui, et celui qui te rompt, Je romprai Mon lien avec lui."
                  source="Sahih Al-Bukhari, n°5988"
                  grade="sahih"
                  explanation="Ce hadith est fondamental car il personnifie le lien de parenté et lui donne une voix auprès d&apos;Allah. Le terme &laquo; shajnah &raquo; signifie une branche ou une ramification, illustrant que le lien familial émane directement de la miséricorde divine. Allah S&apos;engage personnellement : maintenir les liens familiaux, c&apos;est s&apos;assurer du lien avec Allah, et les rompre, c&apos;est risquer d&apos;être coupé de Sa miséricorde. Les savants considèrent ce hadith comme l&apos;un des plus forts avertissements en faveur du maintien des liens de parenté."
                />

                <HadithBlock
                  number={2}
                  title="Le maintien des liens augmente la subsistance et prolonge la vie"
                  narrator="Anas ibn Malik"
                  arabic="مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ"
                  translation="Celui qui aime que sa subsistance soit élargie et que sa vie soit prolongée, qu&apos;il maintienne ses liens de parenté."
                  source="Sahih Al-Bukhari, n°5986 — Sahih Muslim, n°2557"
                  grade="sahih"
                  explanation="Ce hadith mentionne deux récompenses concrètes et tangibles dans la vie d&apos;ici-bas. L&apos;expression &laquo; yubsata lahu fi rizqihi &raquo; signifie que la subsistance sera élargie, abondante et bénie. &laquo; Yuns&apos;a lahu fi atharihi &raquo; signifie que sa trace sur terre sera prolongée. Les savants divergent sur l&apos;interprétation de cette prolongation : certains y voient une augmentation littérale des années de vie, d&apos;autres une baraka (bénédiction) qui rend la vie plus fructueuse en bonnes œuvres. Dans les deux cas, le lien entre maintien des liens familiaux et bienfaits terrestres est clairement établi."
                />
              </section>

              {/* ================================================ */}
              {/* SECTION : Silat ar-rahim                          */}
              {/* ================================================ */}
              <section id="silat-ar-rahim" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Silat ar-rahim : maintenir les liens activement
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ ne s&apos;est pas contenté d&apos;ordonner le maintien des liens de parenté en termes généraux. Il a précisé la nature de ce maintien, distinguant le vrai mainteneur des liens de celui qui se contente de la réciprocité. Les hadiths suivants révèlent une exigence élevée : maintenir les liens même quand l&apos;autre les rompt.
                </p>

                <HadithBlock
                  number={3}
                  title="Le vrai mainteneur des liens n&apos;est pas celui qui rend la pareille"
                  narrator="Abdullah ibn Amr"
                  arabic="لَيْسَ الْوَاصِلُ بِالْمُكَافِئِ، وَلَكِنِ الْوَاصِلُ الَّذِي إِذَا قُطِعَتْ رَحِمُهُ وَصَلَهَا"
                  translation="Le vrai mainteneur des liens n&apos;est pas celui qui rend la pareille. Le vrai mainteneur est celui qui, lorsqu&apos;on rompt avec lui, renoue le lien."
                  source="Sahih Al-Bukhari, n°5991"
                  grade="sahih"
                  explanation="Ce hadith élève la barre de la silat ar-rahim. Rendre visite à celui qui nous rend visite est un simple échange social, accessible à tout le monde. Mais renouer le lien avec celui qui l&apos;a rompu est un acte de piété supérieur qui demande patience, humilité et force de caractère. Le Prophète ﷺ distingue ici entre la réciprocité (mukafa&apos;a) et la vraie connexion (wasla). Ce hadith est un appel à dépasser la logique du donnant-donnant dans les relations familiales."
                />

                <HadithBlock
                  number={4}
                  title="L&apos;homme qui maintient le lien malgré l&apos;ingratitude de ses proches"
                  narrator="Abu Hurayra"
                  arabic="قَالَ رَجُلٌ: يَا رَسُولَ اللَّهِ، إِنَّ لِي قَرَابَةً أَصِلُهُمْ وَيَقْطَعُونِي، وَأُحْسِنُ إِلَيْهِمْ وَيُسِيئُونَ إِلَيَّ، وَأَحْلُمُ عَنْهُمْ وَيَجْهَلُونَ عَلَيَّ. فَقَالَ: لَئِنْ كُنْتَ كَمَا قُلْتَ فَكَأَنَّمَا تُسِفُّهُمُ الْمَلَّ وَلَا يَزَالُ مَعَكَ مِنَ اللَّهِ ظَهِيرٌ عَلَيْهِمْ مَا دُمْتَ عَلَى ذَلِكَ"
                  translation="Un homme dit : &laquo; Ô Messager d&apos;Allah, j&apos;ai des proches que je visite mais qui me délaissent, envers qui je suis bon mais qui me maltraitent, envers qui je suis clément mais qui sont ignorants envers moi. &raquo; Le Prophète répondit : &laquo; Si tu es tel que tu le dis, c&apos;est comme si tu leur faisais avaler de la cendre brûlante. Et tu ne cesseras d&apos;avoir un soutien d&apos;Allah contre eux tant que tu resteras sur cette voie. &raquo;"
                  source="Sahih Muslim, n°2558"
                  grade="sahih"
                  explanation="Ce hadith illustre concrètement le cas du croyant qui maintient les liens malgré l&apos;injustice de ses proches. Le Prophète ﷺ le rassure avec deux réponses. D&apos;abord, la métaphore de la cendre brûlante (al-mall) signifie que ceux qui maltraitent un proche bienveillant accumulent un péché qui les brûle eux-mêmes. Ensuite, Allah sera le soutien (zahir) de celui qui persévère dans la bonté. Ce hadith encourage le croyant à ne pas rompre les liens par dépit, car sa récompense est garantie par Allah."
                />

                <HadithBlock
                  number={5}
                  title="Ar-rahim est suspendu au Trône et implore Allah"
                  narrator="Aisha"
                  arabic="الرَّحِمُ مُعَلَّقَةٌ بِالْعَرْشِ تَقُولُ: مَنْ وَصَلَنِي وَصَلَهُ اللَّهُ، وَمَنْ قَطَعَنِي قَطَعَهُ اللَّهُ"
                  translation="Le lien de parenté est suspendu au Trône (d&apos;Allah) et dit : Celui qui me maintient, qu&apos;Allah maintienne son lien avec lui, et celui qui me rompt, qu&apos;Allah rompe son lien avec lui."
                  source="Sahih Muslim, n°2555"
                  grade="sahih"
                  explanation="Ce hadith rapporté par Aisha complète celui d&apos;Abu Hurayra (Bukhari 5988) et confirme la personnification d&apos;ar-rahim. Le fait qu&apos;ar-rahim soit suspendu au Trône d&apos;Allah — le plus grand des créations — souligne la place éminente des liens familiaux dans la hiérarchie des valeurs islamiques. Les savants expliquent que cette invocation d&apos;ar-rahim est exaucée par Allah, car c&apos;est Allah Lui-même qui a établi cette promesse. Rompre les liens de parenté, c&apos;est donc s&apos;exposer à une rupture du lien avec le Créateur."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent que silat ar-rahim n&apos;est pas une simple courtoisie sociale, mais un acte d&apos;adoration à part entière, directement lié à la relation du croyant avec Allah. Pour approfondir les droits des parents en particulier, consultez notre article sur les{" "}
                  <Link href="/hadith-parents-mere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur les parents et la mère en islam
                  </Link>.
                </p>
              </section>

              {/* ================================================ */}
              {/* SECTION : Rupture des liens                       */}
              {/* ================================================ */}
              <section id="rupture-liens" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La rupture des liens de parenté : un péché majeur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si le maintien des liens de parenté est l&apos;un des actes les plus méritoires, leur rupture figure parmi les péchés les plus graves en islam. Le Prophète ﷺ a prononcé des avertissements sévères à l&apos;encontre de ceux qui coupent les liens familiaux, allant jusqu&apos;à les exclure de l&apos;entrée au Paradis.
                </p>

                <HadithBlock
                  number={6}
                  title="Celui qui rompt les liens de parenté n&apos;entrera pas au Paradis"
                  narrator="Jubayr ibn Mut&apos;im"
                  arabic="لَا يَدْخُلُ الْجَنَّةَ قَاطِعُ رَحِمٍ"
                  translation="N&apos;entrera pas au Paradis celui qui rompt les liens de parenté."
                  source="Sahih Al-Bukhari, n°5984 — Sahih Muslim, n°2556"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des avertissements les plus forts dans la Sunna. La formulation est catégorique : &laquo; n&apos;entrera pas au Paradis &raquo;. Les savants expliquent que cela peut signifier soit un retard dans l&apos;entrée au Paradis (le musulman pécheur y entrera après purification), soit — selon la gravité et la persistance dans le péché — un danger réel pour la foi elle-même. L&apos;imam An-Nawawi précise que ce hadith s&apos;adresse à celui qui rompt les liens en considérant cela comme permis, ou qui persiste sans repentir. Il doit être un motif de crainte pour tout musulman qui néglige ses proches."
                />

                <HadithBlock
                  number={7}
                  title="Le châtiment de la rupture des liens est anticipé dans ce monde"
                  narrator="Abu Bakra"
                  arabic="مَا مِنْ ذَنْبٍ أَجْدَرُ أَنْ يُعَجِّلَ اللَّهُ لِصَاحِبِهِ الْعُقُوبَةَ فِي الدُّنْيَا مَعَ مَا يَدَّخِرُ لَهُ فِي الْآخِرَةِ مِنَ الْبَغْيِ وَقَطِيعَةِ الرَّحِمِ"
                  translation="Il n&apos;y a pas de péché plus susceptible de voir Allah en hâter le châtiment dans ce monde, en plus de ce qu&apos;Il réserve dans l&apos;au-delà, que l&apos;injustice (al-baghy) et la rupture des liens de parenté."
                  source="Sunan Abu Dawud, n°4902 — Jami&apos; at-Tirmidhi, n°2511"
                  grade="sahih"
                  explanation="Ce hadith révèle que la rupture des liens de parenté fait partie des rares péchés dont le châtiment peut être anticipé dans la vie d&apos;ici-bas, avant même celui de l&apos;au-delà. Le Prophète ﷺ associe ce péché à l&apos;injustice (al-baghy), soulignant que rompre avec ses proches est une forme d&apos;oppression. Les savants en tirent que les difficultés inexpliquées dans la vie d&apos;une personne peuvent parfois être liées à la rupture de ses liens familiaux. Ce double châtiment — terrestre et eschatologique — montre la gravité de ce péché."
                />

                <HadithBlock
                  number={8}
                  title="La miséricorde ne descend pas sur un peuple qui rompt les liens"
                  narrator="Abdullah ibn Abi Awfa"
                  arabic="إِنَّ الرَّحْمَةَ لَا تَنْزِلُ عَلَى قَوْمٍ فِيهِمْ قَاطِعُ رَحِمٍ"
                  translation="La miséricorde ne descend pas sur un peuple parmi lequel se trouve quelqu&apos;un qui rompt les liens de parenté."
                  source="Musnad Ahmad, n°19415 — Shu&apos;ab al-Iman, al-Bayhaqi"
                  grade="hasan"
                  explanation="Ce hadith élargit la portée de la rupture des liens : elle n&apos;affecte pas seulement l&apos;individu, mais toute la communauté. La présence d&apos;un seul rompeur de liens peut priver un groupe entier de la miséricorde divine. Les savants y voient un appel à la responsabilité collective : il ne suffit pas de maintenir ses propres liens, il faut aussi encourager les autres à le faire et réconcilier les proches en conflit. Ce hadith est souvent cité pour motiver les efforts de réconciliation au sein des familles."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh de la famille, les droits des proches et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ================================================ */}
              {/* SECTION : Droits des proches et dépense           */}
              {/* ================================================ */}
              <section id="droits-proches" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Droits des proches et dépense pour la famille
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le maintien des liens de parenté ne se limite pas aux visites et aux bonnes paroles. Il comprend également une dimension matérielle : dépenser pour ses proches, les aider financièrement et subvenir à leurs besoins. Le Prophète ﷺ a enseigné que cette dépense est doublement récompensée et qu&apos;elle constitue la meilleure des aumônes.
                </p>

                <HadithBlock
                  number={9}
                  title="La meilleure aumône est celle dépensée pour la famille"
                  narrator="Abu Hurayra"
                  arabic="دِينَارٌ أَنْفَقْتَهُ فِي سَبِيلِ اللَّهِ، وَدِينَارٌ أَنْفَقْتَهُ فِي رَقَبَةٍ، وَدِينَارٌ تَصَدَّقْتَ بِهِ عَلَى مِسْكِينٍ، وَدِينَارٌ أَنْفَقْتَهُ عَلَى أَهْلِكَ، أَعْظَمُهَا أَجْرًا الَّذِي أَنْفَقْتَهُ عَلَى أَهْلِكَ"
                  translation="Un dinar dépensé dans le sentier d&apos;Allah, un dinar dépensé pour affranchir un esclave, un dinar donné en aumône à un pauvre, et un dinar dépensé pour ta famille : celui qui a la plus grande récompense est celui dépensé pour ta famille."
                  source="Sahih Muslim, n°995"
                  grade="sahih"
                  explanation="Ce hadith établit une hiérarchie surprenante : la dépense pour la famille surpasse même la dépense dans le sentier d&apos;Allah ou l&apos;aumône aux pauvres en termes de récompense. Les savants expliquent cela par le fait que la dépense familiale est une obligation (wajib) qui passe avant les actes surérogatoires. De plus, elle combine l&apos;intention d&apos;adoration avec le maintien des liens de parenté, ce qui multiplie la récompense. Ce hadith réfute l&apos;idée que la charité extérieure prime sur les obligations envers les siens."
                />

                <HadithBlock
                  number={10}
                  title="L&apos;aumône au proche cumule deux récompenses"
                  narrator="Salman ibn Amir"
                  arabic="الصَّدَقَةُ عَلَى الْمِسْكِينِ صَدَقَةٌ، وَهِيَ عَلَى ذِي الرَّحِمِ ثِنْتَانِ: صَدَقَةٌ وَصِلَةٌ"
                  translation="L&apos;aumône faite à un pauvre est une aumône, et celle faite à un proche parent est double : c&apos;est une aumône et un maintien du lien de parenté."
                  source="Sunan an-Nasa&apos;i, n°2582 — Jami&apos; at-Tirmidhi, n°658"
                  grade="sahih"
                  explanation="Ce hadith révèle un principe de jurisprudence important : l&apos;aumône versée à un proche dans le besoin cumule deux récompenses distinctes — celle de la sadaqa et celle de la silat ar-rahim. Le Prophète ﷺ encourage ainsi les musulmans à commencer leur charité par les proches avant de l&apos;étendre aux autres. Les savants en déduisent que le proche parent dans le besoin est plus en droit de recevoir la zakat et la sadaqa qu&apos;un étranger, à condition qu&apos;il ne soit pas parmi ceux dont l&apos;entretien est obligatoire (comme les parents ou les enfants directs)."
                />

                <HadithBlock
                  number={11}
                  title="Le meilleur compagnon est celui qui est le meilleur envers son compagnon"
                  narrator="Abdullah ibn Amr"
                  arabic="خَيْرُ الْأَصْحَابِ عِنْدَ اللَّهِ خَيْرُهُمْ لِصَاحِبِهِ، وَخَيْرُ الْجِيرَانِ عِنْدَ اللَّهِ خَيْرُهُمْ لِجَارِهِ"
                  translation="Le meilleur compagnon auprès d&apos;Allah est celui qui est le meilleur envers son compagnon, et le meilleur voisin auprès d&apos;Allah est celui qui est le meilleur envers son voisin."
                  source="Jami&apos; at-Tirmidhi, n°1944"
                  grade="sahih"
                  explanation="Bien que ce hadith mentionne les compagnons et les voisins, les savants l&apos;appliquent en priorité aux proches parents, qui sont souvent à la fois compagnons, voisins et membres de la famille. Le critère de valeur est clair : c&apos;est la qualité du traitement de l&apos;autre qui détermine le rang auprès d&apos;Allah. Ce hadith s&apos;inscrit dans la continuité des enseignements sur silat ar-rahim en élargissant le cercle de bienveillance au-delà du lien de sang."
                />
              </section>

              {/* ================================================ */}
              {/* SECTION : Réconciliation et pardon                */}
              {/* ================================================ */}
              <section id="reconciliation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Réconciliation entre proches et pardon
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les conflits familiaux sont inévitables, mais l&apos;islam insiste sur la réconciliation comme devoir religieux. Le Prophète ﷺ a encouragé les efforts de réconciliation entre les proches et a même permis certaines souplesses dans ce cadre, montrant l&apos;importance capitale de préserver l&apos;unité familiale.
                </p>

                <HadithBlock
                  number={12}
                  title="Réconcilier les gens est meilleur que la prière et le jeûne surérogatoires"
                  narrator="Abu al-Darda"
                  arabic="أَلَا أُخْبِرُكُمْ بِأَفْضَلَ مِنْ دَرَجَةِ الصِّيَامِ وَالصَّلَاةِ وَالصَّدَقَةِ؟ قَالُوا: بَلَى. قَالَ: إِصْلَاحُ ذَاتِ الْبَيْنِ، فَإِنَّ فَسَادَ ذَاتِ الْبَيْنِ هِيَ الْحَالِقَةُ"
                  translation="Ne vous informerai-je pas de ce qui est meilleur en degré que la prière, le jeûne et l&apos;aumône surérogatoires ? Ils dirent : Si, bien sûr. Il dit : C&apos;est la réconciliation entre les gens, car la corruption des relations est la &laquo; raseuse &raquo; (qui rase la religion)."
                  source="Sunan Abu Dawud, n°4919 — Jami&apos; at-Tirmidhi, n°2509"
                  grade="sahih"
                  explanation="Ce hadith place la réconciliation (islah dhat al-bayn) au-dessus de la prière, du jeûne et de l&apos;aumône surérogatoires. Le terme &laquo; al-haliqa &raquo; (la raseuse) est expliqué par le Prophète ﷺ lui-même : &laquo; Je ne dis pas qu&apos;elle rase les cheveux, mais qu&apos;elle rase la religion. &raquo; Les conflits familiaux non résolus peuvent détruire la foi et la pratique religieuse d&apos;un individu et d&apos;une communauté. Ce hadith est un appel pressant à faire de la réconciliation une priorité, en particulier au sein des familles."
                />

                <HadithBlock
                  number={13}
                  title="Il n&apos;est pas permis de boycotter son frère plus de trois jours"
                  narrator="Abu Ayyub al-Ansari"
                  arabic="لَا يَحِلُّ لِمُسْلِمٍ أَنْ يَهْجُرَ أَخَاهُ فَوْقَ ثَلَاثِ لَيَالٍ، يَلْتَقِيَانِ فَيُعْرِضُ هَذَا وَيُعْرِضُ هَذَا، وَخَيْرُهُمَا الَّذِي يَبْدَأُ بِالسَّلَامِ"
                  translation="Il n&apos;est pas permis au musulman de boycotter son frère plus de trois nuits. Ils se croisent et chacun se détourne de l&apos;autre. Le meilleur des deux est celui qui commence par le salut."
                  source="Sahih Al-Bukhari, n°6077 — Sahih Muslim, n°2560"
                  grade="sahih"
                  explanation="Ce hadith fixe une limite maximale au boycott entre musulmans : trois jours. Passé ce délai, le silence devient un péché. Le Prophète ﷺ donne ensuite la clé de la réconciliation : saluer l&apos;autre en premier. Celui qui fait le premier pas est déclaré le meilleur des deux, car il a vaincu son ego pour obéir à Allah. Les savants précisent que cette interdiction s&apos;applique d&apos;autant plus fortement aux proches parents, car le boycott familial combine deux péchés : la rupture des liens de fraternité et la rupture des liens de parenté."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths sur la réconciliation s&apos;inscrivent dans la vision islamique de la famille comme unité fondamentale de la société. Les liens familiaux ne sont pas un choix personnel que l&apos;on peut rompre à volonté : ce sont des droits divinement établis. Pour découvrir les enseignements du Prophète ﷺ sur le mariage, fondement de la famille, consultez notre article sur les{" "}
                  <Link href="/hadith-mariage-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le mariage en islam
                  </Link>.
                </p>
              </section>

              {/* ================================================ */}
              {/* SECTION : Paroles des savants                     */}
              {/* ================================================ */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la famille et les liens de parenté
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur les liens de parenté. Leurs explications éclairent la portée juridique et spirituelle de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le maintien des liens de parenté est obligatoire de manière générale, et sa rupture est un péché majeur. Les textes du Coran et de la Sunna sont explicites et concordants à ce sujet. La silat ar-rahim se réalise par la visite, l&apos;aide financière, la bonne parole, l&apos;invocation et la défense de l&apos;honneur du proche.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith &laquo; celui qui rompt les liens n&apos;entrera pas au Paradis &raquo; est porté sur la menace (wa&apos;id) et non sur le jugement définitif du musulman. Il montre cependant que ce péché est si grave qu&apos;il peut retarder l&apos;entrée au Paradis. Le croyant doit craindre ce hadith et s&apos;empresser de renouer tout lien rompu.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La prolongation de la vie par le maintien des liens peut être comprise de deux manières : soit Allah ajoute effectivement des années à la vie de celui qui maintient ses liens, car le décret divin comporte des aspects conditionnels ; soit la baraka est placée dans son temps, de sorte qu&apos;il accomplit en peu de temps ce que d&apos;autres n&apos;accomplissent pas en une vie entière.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur la famille ne sont pas de simples recommandations morales : ils constituent le fondement d&apos;un corpus juridique et éthique élaboré par les grandes écoles de jurisprudence, touchant aux droits des proches, à la nafaqa (dépense obligatoire) et aux règles de succession.
                </p>
              </section>

              {/* ================================================ */}
              {/* SECTION : Leçons pratiques                        */}
              {/* ================================================ */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour le musulman soucieux de maintenir ses liens familiaux :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Considérer les liens de parenté comme un acte d&apos;adoration
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La silat ar-rahim n&apos;est pas une simple convention sociale : c&apos;est un commandement divin lié directement à la miséricorde d&apos;Allah. Maintenir les liens, c&apos;est maintenir son lien avec le Créateur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Aller au-delà de la réciprocité
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le vrai mainteneur des liens est celui qui renoue quand l&apos;autre coupe. La logique du donnant-donnant ne suffit pas dans les relations familiales : l&apos;islam exige une générosité unilatérale quand nécessaire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Commencer la charité par les proches
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La dépense pour la famille est la plus récompensée. L&apos;aumône au proche parent dans le besoin cumule deux récompenses : la sadaqa et la silat ar-rahim.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais boycotter un proche plus de trois jours
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le boycott prolongé est interdit entre musulmans, et encore plus entre proches parents. Le meilleur est celui qui fait le premier pas vers la réconciliation en saluant l&apos;autre.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Faire de la réconciliation une priorité absolue
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La réconciliation entre les gens est supérieure en degré à la prière, au jeûne et à l&apos;aumône surérogatoires. Les conflits familiaux non résolus &laquo; rasent la religion &raquo;.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Craindre les conséquences de la rupture
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La rupture des liens de parenté est un péché dont le châtiment peut être hâté dans ce monde. Elle peut priver le croyant de l&apos;entrée au Paradis et la communauté entière de la miséricorde divine.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur la famille et les liens de parenté dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Les hadiths sur les parents et la mère en islam"
                  description="Découvrez les enseignements prophétiques sur les droits des parents, la place de la mère et la piété filiale."
                  href="/hadith-parents-mere-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths sur le mariage en islam"
                  description="Les enseignements prophétiques sur le choix du conjoint, les droits des époux et la bienveillance conjugale."
                  href="/hadith-mariage-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths sur l&apos;orphelin en islam"
                  description="Les paroles du Prophète ﷺ sur la prise en charge de l&apos;orphelin et la récompense de celui qui s&apos;en occupe."
                  href="/hadith-orphelin-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
