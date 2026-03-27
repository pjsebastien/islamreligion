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
    "Hadiths sur la dot (mahr) en islam : montant, règles et enseignements prophétiques",
  description:
    "Découvrez les hadiths authentiques sur la dot (mahr) en islam : montant idéal, dot du Prophète ﷺ, interdiction de l&apos;exagération, droit exclusif de l&apos;épouse. Texte arabe, traduction et explications.",
  openGraph: {
    title:
      "Hadiths sur la dot (mahr) en islam : montant, règles et enseignements prophétiques",
    description:
      "Les hadiths authentiques sur la dot en islam : le mahr est obligatoire, la meilleure dot est la plus légère, la dot appartient entièrement à l&apos;épouse.",
    url: "https://www.islamreligion.fr/hadith-dot-islam",
    images: [
      {
        url: "/images/decoration-ramadan-islam-lanternes-croissant-lune.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-dot-islam",
  },
};

const tocItems = [
  { id: "obligation-mahr", label: "Le mahr est une obligation" },
  { id: "meilleure-dot", label: "La meilleure dot est la plus légère" },
  { id: "dot-prophete", label: "La dot du Prophète ﷺ à ses épouses" },
  { id: "dot-quran", label: "Le Coran comme dot" },
  { id: "exageration", label: "Interdiction de l&apos;exagération" },
  { id: "droit-epouse", label: "La dot appartient à l&apos;épouse" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "La dot (mahr) est-elle obligatoire en islam ?",
    answer:
      "Oui, la dot est une obligation religieuse et juridique en islam. Le Coran ordonne explicitement de donner aux femmes leur dot de bon cœur (sourate An-Nisa, 4:4). Le mariage sans dot convenue est invalide selon la majorité des savants. Le mahr est un droit exclusif de l\u2019épouse que personne ne peut lui retirer.",
  },
  {
    question: "Quel est le montant idéal de la dot en islam ?",
    answer:
      "Le Prophète ﷺ a enseigné que la meilleure dot est la plus facile et la plus légère. Il a dit que les femmes de plus grande baraka (bénédiction) sont celles dont la dot est la plus légère (Ahmad 24595). Sa propre dot à ses épouses était de 500 dirhams, soit environ 1 500 grammes d\u2019argent. L\u2019islam encourage la modération et déconseille fortement l\u2019exagération.",
  },
  {
    question:
      "Peut-on donner le Coran (sa mémorisation) comme dot en islam ?",
    answer:
      "Oui, le Prophète ﷺ a autorisé un homme à épouser une femme en échange de ce qu\u2019il connaissait du Coran, lorsqu\u2019il n\u2019avait rien de matériel à offrir (Bukhari 5029). Les savants divergent sur la généralisation de ce cas : certains le considèrent comme une exception, d\u2019autres y voient la preuve que toute chose ayant une valeur peut servir de mahr.",
  },
  {
    question: "La dot appartient-elle à l\u2019épouse ou à sa famille ?",
    answer:
      "La dot appartient exclusivement à l\u2019épouse. Ni son père, ni son frère, ni aucun membre de sa famille n\u2019a le droit de la prendre sans son consentement. Le Coran est explicite : « Donnez aux femmes leur dot de bon cœur » (4:4). Si l\u2019épouse choisit librement d\u2019en céder une part, cela est permis, mais nul ne peut l\u2019y contraindre.",
  },
  {
    question:
      "Pourquoi le Prophète ﷺ a-t-il déconseillé les dots élevées ?",
    answer:
      "Le Prophète ﷺ a déconseillé les dots élevées car elles constituent un obstacle au mariage, alourdissent les charges du mari et peuvent engendrer de la rancœur. Omar ibn al-Khattab a lui aussi mis en garde contre l\u2019exagération des dots, rappelant que le Prophète ﷺ n\u2019a jamais versé plus de 500 dirhams. Les dots excessives retardent le mariage des jeunes et favorisent la fitna.",
  },
  {
    question:
      "Quelle est la différence entre la dot avancée et la dot reportée ?",
    answer:
      "La dot avancée (mahr mu\u2019ajjal) est versée au moment du mariage ou avant la consommation. La dot reportée (mahr mu\u2019ajjal) est une somme convenue que le mari s\u2019engage à verser ultérieurement, souvent en cas de divorce ou de décès. Les deux formes sont licites en islam et peuvent coexister dans un même contrat de mariage.",
  },
  {
    question:
      "Le mari peut-il récupérer la dot en cas de divorce ?",
    answer:
      "En principe, le mari ne peut pas récupérer la dot après le divorce. Le Coran interdit de reprendre ce qui a été donné à l\u2019épouse (sourate An-Nisa, 4:20). L\u2019exception est le khula, où la femme demande le divorce et peut restituer tout ou partie de la dot en contrepartie. Même dans ce cas, le Prophète ﷺ a limité le remboursement au montant de la dot initiale.",
  },
  {
    question:
      "Y a-t-il un montant minimum ou maximum pour la dot en islam ?",
    answer:
      "Il n\u2019y a pas de montant maximum fixé en islam, mais l\u2019exagération est blâmée. Quant au minimum, les savants divergent : les hanafites fixent un minimum de 10 dirhams, les malikites de 3 dirhams, tandis que les shafiites et les hanbalites considèrent que toute chose ayant une valeur, même minime, peut servir de dot. Le hadith de l\u2019anneau de fer (Bukhari 5029) est souvent cité comme preuve de l\u2019absence de minimum strict.",
  },
];

export default function HadithDotIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.islamreligion.fr/hadith-dot-islam/#article",
        headline:
          "Hadiths sur la dot (mahr) en islam : montant, règles et enseignements prophétiques",
        description:
          "Découvrez les hadiths authentiques sur la dot (mahr) en islam : montant idéal, dot du Prophète, interdiction de l\u2019exagération, droit exclusif de l\u2019épouse.",
        image:
          "/images/decoration-ramadan-islam-lanternes-croissant-lune.jpg",
        datePublished: "2026-05-10",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-dot-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-dot-islam/#breadcrumb",
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
            name: "Hadiths sur la dot (mahr)",
            item: "https://www.islamreligion.fr/hadith-dot-islam",
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
          title="Hadiths sur la dot (mahr) en islam"
          subtitle="Les enseignements prophétiques sur le montant de la dot, son caractère obligatoire, le droit exclusif de l&apos;épouse et la modération recommandée par la Sunna authentique."
          imageSrc="/images/decoration-ramadan-islam-lanternes-croissant-lune.jpg"
          imageAlt="Hadiths sur la dot mahr en islam, enseignements prophétiques"
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
                  Hadiths sur la dot (mahr)
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
                    La dot (mahr) est une obligation islamique que le mari doit verser à son épouse, et non à sa famille.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ a enseigné que la meilleure dot est la plus facile et la plus légère, et que les femmes de plus grande baraka sont celles dont le mahr est le plus modeste.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La dot du Prophète ﷺ à ses épouses était de 500 dirhams (environ 1 500 g d&apos;argent), un montant modéré pour l&apos;époque.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;exagération dans les dots est blâmée par la Sunna car elle constitue un obstacle au mariage et alourdit les charges du mari.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Obligation du mahr   */}
              {/* ============================== */}
              <section id="obligation-mahr" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le mahr est une obligation en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mahr (dot) est l&apos;un des piliers du contrat de mariage en islam. Contrairement à la dot occidentale historique (versée par la famille de la mariée), le mahr islamique est un don obligatoire du mari à son épouse. Il symbolise le respect, la considération et l&apos;engagement du mari envers sa future épouse. Le Coran et la Sunna sont unanimes sur son caractère obligatoire.
                </p>

                <HadithCard
                  arabic="وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً فَإِن طِبْنَ لَكُمْ عَن شَيْءٍ مِّنْهُ نَفْسًا فَكُلُوهُ هَنِيئًا مَّرِيئًا"
                  text="Et donnez aux épouses leur dot de bonne grâce. Si de bon gré elles vous en abandonnent quelque chose, consommez-le alors avec aisance et bon plaisir."
                  source="Coran, sourate An-Nisa (4:4)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset utilise le terme <em>nihlatan</em> (de bonne grâce, comme un don), soulignant que le mahr n&apos;est pas un prix d&apos;achat mais un cadeau obligatoire. Les savants insistent sur le fait que la dot est un droit de l&apos;épouse seule : elle en dispose librement. Si elle choisit d&apos;en céder une part à son mari ou à sa famille, cela doit être un acte volontaire, sans aucune pression.
                </p>

                <HadithBlock
                  number={1}
                  title="Cherche, ne serait-ce qu&apos;un anneau de fer"
                  narrator="Sahl ibn Sa&apos;d"
                  arabic="الْتَمِسْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ"
                  translation="Cherche (une dot), ne serait-ce qu&apos;un anneau de fer."
                  source="Sahih Al-Bukhari, n°5029 — Sahih Muslim, n°1425"
                  grade="sahih"
                  explanation="Un homme vint au Prophète ﷺ pour lui demander de le marier à une femme. Le Prophète ﷺ lui demanda ce qu&apos;il possédait comme dot. L&apos;homme répondit qu&apos;il n&apos;avait rien. Le Prophète ﷺ lui dit alors : &laquo; Cherche, ne serait-ce qu&apos;un anneau de fer. &raquo; Ce hadith prouve que le mahr est indispensable au mariage, même s&apos;il peut être d&apos;une valeur très modeste. Les savants en déduisent que le mahr n&apos;a pas de montant minimum strict, et que toute chose ayant une valeur peut servir de dot."
                />

                <HadithBlock
                  number={2}
                  title="Toute femme mariée sans l&apos;accord de son tuteur"
                  narrator="Aisha"
                  arabic="أَيُّمَا امْرَأَةٍ نُكِحَتْ بِغَيْرِ إِذْنِ وَلِيِّهَا فَنِكَاحُهَا بَاطِلٌ... فَإِنِ اشْتَجَرُوا فَالسُّلْطَانُ وَلِيُّ مَنْ لَا وَلِيَّ لَهُ... وَلَهَا الْمَهْرُ بِمَا اسْتَحَلَّ مِنْ فَرْجِهَا"
                  translation="Toute femme mariée sans l&apos;accord de son tuteur, son mariage est nul... S&apos;ils se disputent, le sultan est le tuteur de celle qui n&apos;a pas de tuteur... Et elle a droit au mahr en contrepartie de ce qui a été rendu licite d&apos;elle."
                  source="Sunan Abu Dawud, n°2083 — Jami&apos; at-Tirmidhi, n°1102"
                  grade="sahih"
                  explanation="Ce hadith confirme le caractère obligatoire du mahr en l&apos;associant directement à la validité du contrat de mariage. Même en cas de mariage irrégulier, la femme conserve son droit au mahr dès lors que l&apos;union a été consommée. Les savants y voient la preuve que le mahr est un droit inaliénable de l&apos;épouse, indépendant des circonstances du mariage."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Meilleure dot        */}
              {/* ============================== */}
              <section id="meilleure-dot" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La meilleure dot est la plus facile
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a clairement orienté les musulmans vers la modération dans le mahr. Loin d&apos;encourager les dots élevées, la Sunna valorise la facilité et la légèreté. Cette approche vise à faciliter le mariage, à préserver l&apos;harmonie du couple et à éviter que la dot ne devienne un obstacle.
                </p>

                <HadithBlock
                  number={3}
                  title="Les femmes de plus grande baraka sont celles dont la dot est la plus légère"
                  narrator="Aisha"
                  arabic="إِنَّ أَعْظَمَ النِّكَاحِ بَرَكَةً أَيْسَرُهُ مَؤُونَةً"
                  translation="Le mariage qui comporte le plus de baraka (bénédiction) est celui dont les charges sont les plus légères."
                  source="Musnad Ahmad, n°24595"
                  grade="sahih"
                  explanation="Ce hadith établit un lien direct entre la légèreté des charges du mariage — dont la dot fait partie — et la bénédiction divine. Le Prophète ﷺ enseigne que la simplicité attire la baraka, tandis que l&apos;excès dans les dépenses peut en priver le couple. Les savants y voient un encouragement à modérer non seulement la dot, mais l&apos;ensemble des frais liés au mariage : walima, cadeaux et célébrations."
                />

                <HadithBlock
                  number={4}
                  title="La meilleure dot est la plus facile"
                  narrator="&apos;Uqba ibn &apos;Amir"
                  arabic="خَيْرُ الصَّدَاقِ أَيْسَرُهُ"
                  translation="La meilleure dot est la plus facile (la plus légère)."
                  source="Sunan Abu Dawud, n°2117"
                  grade="sahih"
                  explanation="Ce hadith est d&apos;une concision éloquente. Le Prophète ﷺ ne fixe pas de montant précis, mais pose un principe : la facilité. La &laquo; meilleure &raquo; dot n&apos;est pas la plus élevée, mais celle qui n&apos;accable pas le mari et ne retarde pas le mariage. Les savants utilisent ce hadith pour réfuter les pratiques culturelles qui imposent des dots exorbitantes, rendant le mariage inaccessible pour de nombreux jeunes musulmans."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths convergent vers un même message : la valeur du mariage ne se mesure pas à la taille de la dot, mais à la piété et à la sincérité des époux. Pour approfondir les conditions du contrat de mariage, consultez notre article sur le{" "}
                  <Link href="/hadith-mariage-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    mariage en islam selon les hadiths
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Dot du Prophète      */}
              {/* ============================== */}
              <section id="dot-prophete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La dot du Prophète ﷺ à ses épouses
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ est le modèle par excellence pour les musulmans. Sa pratique en matière de dot constitue une référence incontournable. Les hadiths montrent qu&apos;il a toujours opté pour la modération, même lorsqu&apos;il avait les moyens de faire davantage.
                </p>

                <HadithBlock
                  number={5}
                  title="La dot du Prophète ﷺ à ses épouses était de 500 dirhams"
                  narrator="Abu Salama ibn Abdurrahman"
                  arabic="سَأَلْتُ عَائِشَةَ زَوْجَ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: كَمْ كَانَ صَدَاقُ رَسُولِ اللَّهِ؟ قَالَتْ: كَانَ صَدَاقُهُ لِأَزْوَاجِهِ ثِنْتَيْ عَشْرَةَ أُوقِيَّةً وَنَشًّا... وَذَلِكَ خَمْسُمِائَةِ دِرْهَمٍ"
                  translation="J&apos;ai demandé à Aisha, épouse du Prophète ﷺ : quel était le montant de la dot du Messager d&apos;Allah ? Elle a répondu : sa dot à ses épouses était de douze onces et un nashsh... ce qui équivaut à cinq cents dirhams."
                  source="Sahih Muslim, n°1426"
                  grade="sahih"
                  explanation="Ce hadith fixe un repère concret. Douze onces et un nashsh (une demi-once) font 500 dirhams d&apos;argent, soit environ 1 487,5 grammes d&apos;argent. Pour le Prophète ﷺ, chef de la communauté musulmane, ce montant était volontairement modéré. Omar ibn al-Khattab s&apos;est appuyé sur ce hadith pour exhorter les musulmans à ne pas dépasser ce montant. Les savants y voient la preuve que l&apos;excès dans la dot est contraire à la Sunna."
                />

                <HadithBlock
                  number={6}
                  title="La dot de Fatima, fille du Prophète ﷺ"
                  narrator="Ibn &apos;Abbas"
                  arabic="أَنَّ عَلِيًّا قَالَ: تَزَوَّجْتُ فَاطِمَةَ فَقُلْتُ: يَا رَسُولَ اللَّهِ ابْنِ بِي. قَالَ: أَعْطِهَا شَيْئًا. قُلْتُ: مَا عِنْدِي شَيْءٌ. قَالَ: أَيْنَ دِرْعُكَ الْحُطَمِيَّةُ؟"
                  translation="Ali a dit : j&apos;ai épousé Fatima et j&apos;ai dit : Ô Messager d&apos;Allah, laisse-moi consommer le mariage. Il a dit : donne-lui quelque chose. J&apos;ai dit : je n&apos;ai rien. Il a dit : où est ta cotte de mailles hutamiyya ?"
                  source="Sunan An-Nasa&apos;i, n°3375 — Sunan Abu Dawud, n°2125"
                  grade="sahih"
                  explanation="Ce hadith est particulièrement émouvant. Ali, le gendre du Prophète ﷺ, n&apos;avait rien à offrir comme dot à Fatima, la fille la plus chère au cœur du Prophète ﷺ. Celui-ci lui demanda alors de donner sa cotte de mailles, un objet utilitaire et non un bien de luxe. Ce récit montre que la modestie de la dot n&apos;est pas un signe de manque de considération, mais une conformité à la Sunna. Si le Prophète ﷺ a accepté une cotte de mailles pour sa propre fille, comment justifier des exigences excessives ?"
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Coran comme dot      */}
              {/* ============================== */}
              <section id="dot-quran" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le Coran comme dot : un cas prophétique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des hadiths les plus remarquables sur la dot concerne un homme démuni que le Prophète ﷺ a autorisé à se marier en échange de l&apos;enseignement du Coran. Ce récit illustre la flexibilité de l&apos;islam et la primauté de la valeur spirituelle sur la valeur matérielle.
                </p>

                <HadithBlock
                  number={7}
                  title="Je te marie pour ce que tu connais du Coran"
                  narrator="Sahl ibn Sa&apos;d"
                  arabic="جَاءَتِ امْرَأَةٌ إِلَى رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَتْ: يَا رَسُولَ اللَّهِ جِئْتُ أَهَبُ لَكَ نَفْسِي... فَقَالَ رَجُلٌ: زَوِّجْنِيهَا... قَالَ: مَا مَعَكَ مِنَ الْقُرْآنِ؟... قَالَ: قَدْ زَوَّجْتُكَهَا بِمَا مَعَكَ مِنَ الْقُرْآنِ"
                  translation="Une femme vint au Messager d&apos;Allah ﷺ et dit : Ô Messager d&apos;Allah, je suis venue m&apos;offrir à toi... Un homme dit : marie-la moi... Le Prophète demanda : que connais-tu du Coran ?... Puis il dit : je te la donne en mariage pour ce que tu connais du Coran."
                  source="Sahih Al-Bukhari, n°5029 — Sahih Muslim, n°1425"
                  grade="sahih"
                  explanation="Ce hadith est le même récit que celui de l&apos;anneau de fer, dans sa version complète. Après avoir constaté que l&apos;homme n&apos;avait ni argent, ni anneau, ni vêtement à offrir, le Prophète ﷺ lui permit de se marier en contrepartie de l&apos;enseignement du Coran à son épouse. Les savants ont longuement débattu de ce cas : les hanafites considèrent que la dot doit avoir une valeur matérielle, tandis que les shafiites et les hanbalites admettent que l&apos;enseignement du Coran peut servir de mahr. Ce hadith montre en tout cas que la pauvreté ne doit pas être un obstacle au mariage."
                />

                <HadithBlock
                  number={8}
                  title="Le mahr peut être l&apos;enseignement de la religion"
                  narrator="Anas ibn Malik"
                  arabic="أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ رَأَى عَلَى عَبْدِ الرَّحْمَنِ بْنِ عَوْفٍ أَثَرَ صُفْرَةٍ فَقَالَ: مَا هَذَا؟ قَالَ: تَزَوَّجْتُ امْرَأَةً عَلَى وَزْنِ نَوَاةٍ مِنْ ذَهَبٍ. قَالَ: بَارَكَ اللَّهُ لَكَ، أَوْلِمْ وَلَوْ بِشَاةٍ"
                  translation="Le Prophète ﷺ vit sur Abdurrahman ibn Awf une trace de safran et lui demanda : qu&apos;est-ce que cela ? Il répondit : j&apos;ai épousé une femme en échange d&apos;un poids de noyau d&apos;or. Le Prophète dit : qu&apos;Allah te bénisse ! Fais un repas de noces, ne serait-ce qu&apos;avec une brebis."
                  source="Sahih Al-Bukhari, n°5155 — Sahih Muslim, n°1427"
                  grade="sahih"
                  explanation="Abdurrahman ibn Awf, l&apos;un des compagnons les plus riches, s&apos;est marié avec une dot d&apos;un noyau d&apos;or (environ 5 grammes d&apos;or). Le Prophète ﷺ n&apos;a pas critiqué la modestie de cette dot, mais l&apos;a béni et lui a simplement recommandé de faire la walima. Ce hadith démontre que même les personnes aisées ne sont pas tenues de verser des dots excessives. La bénédiction du Prophète ﷺ valide cette pratique de modération."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh du mariage, les règles de la dot et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Exagération          */}
              {/* ============================== */}
              <section id="exageration" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;interdiction de l&apos;exagération dans la dot
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ et ses compagnons ont mis en garde contre l&apos;excès dans les dots. Cette mise en garde est d&apos;autant plus pertinente aujourd&apos;hui que les dots exorbitantes sont devenues un véritable fléau social dans de nombreuses communautés musulmanes, retardant le mariage de millions de jeunes.
                </p>

                <HadithBlock
                  number={9}
                  title="N&apos;exagérez pas dans les dots des femmes"
                  narrator="Abu Al-&apos;Ajfa as-Sulami"
                  arabic="قَالَ عُمَرُ: أَلَا لَا تُغَالُوا فِي صُدُقِ النِّسَاءِ، فَإِنَّهَا لَوْ كَانَتْ مَكْرُمَةً فِي الدُّنْيَا أَوْ تَقْوَى عِنْدَ اللَّهِ لَكَانَ أَوْلَاكُمْ بِهَا النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، مَا أَصْدَقَ رَسُولُ اللَّهِ امْرَأَةً مِنْ نِسَائِهِ وَلَا أُصْدِقَتِ امْرَأَةٌ مِنْ بَنَاتِهِ أَكْثَرَ مِنِ اثْنَتَيْ عَشْرَةَ أُوقِيَّةً"
                  translation="Omar a dit : n&apos;exagérez pas dans les dots des femmes ! Car si c&apos;était un honneur en ce monde ou une piété auprès d&apos;Allah, le Prophète ﷺ en aurait été le plus digne. Le Messager d&apos;Allah n&apos;a donné en dot à aucune de ses femmes, et aucune de ses filles n&apos;a reçu en dot, plus de douze onces."
                  source="Sunan Abu Dawud, n°2106 — Jami&apos; at-Tirmidhi, n°1114"
                  grade="sahih"
                  explanation="Ce discours d&apos;Omar ibn al-Khattab est un argument décisif contre les dots excessives. Le calife raisonne par l&apos;exemple prophétique : si la dot élevée était une vertu, le Prophète ﷺ — le meilleur des hommes — aurait versé les dots les plus élevées. Or il ne l&apos;a pas fait. Cet argument par l&apos;absurde est imparable. Omar rappelle que la dot n&apos;est ni un critère de noblesse mondaine ni un acte de piété : elle est un droit à honorer avec mesure."
                />

                <HadithBlock
                  number={10}
                  title="La femme dont la dot est la plus facile est celle de plus grande baraka"
                  narrator="Aisha"
                  arabic="إِنَّ مِنْ يُمْنِ الْمَرْأَةِ تَيْسِيرَ خِطْبَتِهَا وَتَيْسِيرَ صَدَاقِهَا وَتَيْسِيرَ رَحِمِهَا"
                  translation="Parmi les signes de bon augure (yumn) de la femme : la facilité de sa demande en mariage, la facilité de sa dot et la facilité de sa maternité."
                  source="Musnad Ahmad, n°24478"
                  grade="hasan"
                  explanation="Ce hadith associe la baraka d&apos;une femme à trois facilités : celle de la demande en mariage (pas d&apos;obstacles familiaux), celle de la dot (pas d&apos;exigences excessives) et celle de la maternité (grossesse et accouchement aisés). La facilité de la dot est donc présentée comme un signe positif, un bon présage pour le couple. À l&apos;inverse, les savants en déduisent que la difficulté et l&apos;excès dans la dot sont des signes de privation de baraka."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Droit de l'épouse    */}
              {/* ============================== */}
              <section id="droit-epouse" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La dot appartient entièrement à l&apos;épouse
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le mahr est un droit exclusif de l&apos;épouse. Ni son père, ni sa famille, ni son mari ne peuvent en disposer sans son consentement libre et éclairé. Ce principe est fermement établi par le Coran et confirmé par la pratique prophétique.
                </p>

                <HadithBlock
                  number={11}
                  title="Il n&apos;est pas permis de reprendre la dot"
                  narrator="Ibn &apos;Abbas"
                  arabic="وَلَا يَحِلُّ لَكُمْ أَنْ تَأْخُذُوا مِمَّا آتَيْتُمُوهُنَّ شَيْئًا إِلَّا أَنْ يَخَافَا أَلَّا يُقِيمَا حُدُودَ اللَّهِ فَإِنْ خِفْتُمْ أَلَّا يُقِيمَا حُدُودَ اللَّهِ فَلَا جُنَاحَ عَلَيْهِمَا فِيمَا افْتَدَتْ بِهِ"
                  translation="Il ne vous est pas permis de reprendre quoi que ce soit de ce que vous leur avez donné, à moins que tous deux ne craignent de ne pas observer les limites d&apos;Allah. Si vous craignez qu&apos;ils ne puissent observer les limites d&apos;Allah, alors il n&apos;y a pas de péché pour aucun d&apos;eux dans ce qu&apos;elle rachète (pour obtenir le divorce)."
                  source="Sahih Al-Bukhari, n°5273 — en commentaire de Coran 2:229"
                  grade="sahih"
                  explanation="Ce hadith d&apos;Ibn Abbas, rapporté dans le contexte de l&apos;exégèse du verset coranique, confirme que le mari ne peut reprendre la dot après l&apos;avoir versée. La seule exception est le khula, où la femme demande elle-même le divorce et peut restituer tout ou partie de la dot en contrepartie de sa liberté. Même dans ce cas, le Prophète ﷺ a limité la restitution au montant de la dot initiale, interdisant au mari d&apos;exiger davantage."
                />

                <HadithBlock
                  number={12}
                  title="La femme du Prophète ﷺ qui a renoncé à sa dot volontairement"
                  narrator="Aisha"
                  arabic="كَانَتْ سَوْدَةُ بِنْتُ زَمْعَةَ قَدْ أَسَنَّتْ فَجَعَلَتْ يَوْمَهَا مِنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لِعَائِشَةَ"
                  translation="Sawda bint Zam&apos;a avait pris de l&apos;âge et elle céda son jour (auprès du Prophète ﷺ) à Aisha."
                  source="Sahih Al-Bukhari, n°5212 — Sahih Muslim, n°1463"
                  grade="sahih"
                  explanation="Ce hadith, bien qu&apos;il concerne le partage des nuits et non directement la dot, illustre un principe fondamental : la femme dispose librement de ses droits. Si Sawda a pu céder son tour volontairement, c&apos;est que chaque droit de l&apos;épouse — y compris la dot — lui appartient en propre. Elle peut en faire don, le partager ou le garder intégralement. Ce qui est interdit, c&apos;est de la priver de ce droit par la contrainte."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Le droit de l&apos;épouse sur sa dot est inaliénable et s&apos;inscrit dans le cadre plus large des droits de la femme en islam. Pour approfondir ce sujet, consultez notre article sur les{" "}
                  <Link href="/hadith-femme-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la femme en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la dot en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont commenté les hadiths sur la dot et en ont tiré des règles juridiques précises. Leurs avis éclairent la portée de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le mahr est un droit de l&apos;épouse établi par le Coran, la Sunna et le consensus (ijma&apos;). Il est la contrepartie du lien conjugal et un signe de respect envers la femme. Aucun mariage n&apos;est valide sans dot convenue, qu&apos;elle soit mentionnée explicitement ou fixée ultérieurement par le juge (mahr al-mithl).&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;exagération dans les dots est l&apos;une des causes de la difficulté du mariage. Omar ibn al-Khattab a interdit aux gens de dépasser la dot du Prophète ﷺ, arguant que si la dot élevée était une vertu, le Prophète ﷺ en aurait été le premier à la pratiquer. La Sunna est claire : la modération dans la dot est une source de baraka.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qudama, <em>Al-Mughni</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le minimum de la dot est ce qui peut avoir une valeur légale : un quart de dinar d&apos;or ou trois dirhams d&apos;argent selon les malikites, dix dirhams selon les hanafites. Quant au maximum, il n&apos;y a pas de limite fixée par la loi, mais l&apos;excès est makruh (blâmable) car il contredit la recommandation prophétique de faciliter les mariages.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que la question de la dot est au cœur du fiqh du mariage (<em>fiqh al-munakahat</em>). Les savants des quatre écoles s&apos;accordent sur l&apos;obligation du mahr et la recommandation de la modération, même s&apos;ils divergent sur certains détails comme le montant minimum.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes sur la dot en islam :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La dot est un droit obligatoire, pas une option
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le mahr est un pilier du contrat de mariage. Aucun mariage n&apos;est valide sans dot convenue. C&apos;est un droit de l&apos;épouse établi par le Coran et la Sunna, et confirmé par le consensus des savants.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Privilégier la modération sur l&apos;ostentation
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a enseigné que la meilleure dot est la plus légère. L&apos;excès dans la dot prive le couple de baraka et constitue un obstacle au mariage des jeunes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Suivre l&apos;exemple du Prophète ﷺ, pas les coutumes
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La dot du Prophète ﷺ était de 500 dirhams, et celle de sa fille Fatima une cotte de mailles. Les pratiques culturelles excessives ne sont pas conformes à la Sunna.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La dot appartient à l&apos;épouse, pas à sa famille
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Coran est explicite : la dot est un don à l&apos;épouse. Ni son père, ni son frère, ni aucun proche n&apos;a le droit de la confisquer. L&apos;épouse en dispose comme elle l&apos;entend.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La pauvreté n&apos;est pas un obstacle au mariage
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a marié un homme sans rien en échange de l&apos;enseignement du Coran. La piété et la volonté de fonder un foyer valent plus que la richesse matérielle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La baraka du mariage est liée à la facilité de la dot
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les femmes de plus grande baraka sont celles dont la dot est la plus légère. Faciliter le mariage — y compris par une dot modérée — attire la bénédiction divine sur le couple.
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
                  description="Comprenez les hadiths sur la dot dans leur langue originale et approfondissez votre connaissance du fiqh islamique."
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
                  title="Hadiths sur le mariage en islam : guide complet"
                  description="Découvrez les hadiths authentiques sur le choix du conjoint, les droits des époux et la célébration du mariage."
                  href="/hadith-mariage-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le divorce en islam : talaq, khula et procédures"
                  description="Les enseignements prophétiques sur le divorce, les droits de chaque époux et les règles à respecter."
                  href="/hadith-divorce-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la femme en islam : droits et dignité"
                  description="Les hadiths authentiques sur les droits de la femme, sa place dans la famille et la société selon la Sunna."
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
