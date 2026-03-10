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
    "Hadiths sur le chat et les animaux en islam : bienveillance et respect",
  description:
    "Découvrez les hadiths authentiques sur le chat et les animaux en islam : pureté du chat, bienveillance envers les bêtes, interdiction de la cruauté. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur le chat et les animaux en islam : bienveillance et respect",
    description:
      "Les hadiths authentiques sur le chat, le chien et les animaux en islam : pureté, miséricorde, interdiction de la maltraitance et leçons prophétiques.",
    url: "https://www.islamreligion.fr/hadith-chat-animaux-islam",
    images: [
      {
        url: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-chat-animaux-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique sur les animaux" },
  { id: "chat-purete", label: "Le chat en islam : pureté et respect" },
  { id: "bienveillance-animaux", label: "La bienveillance envers les animaux" },
  { id: "interdiction-cruaute", label: "L&apos;interdiction de la cruauté animale" },
  { id: "animaux-prophete", label: "Les animaux dans la vie du Prophète ﷺ" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Le chat est-il un animal pur en islam ?",
    answer:
      "Oui, le chat est considéré comme un animal pur (tahir) en islam. Le Prophète \u2018alayhi salatu wa salam a confirmé que le chat n\u2019est pas impur et que l\u2019eau dont il a bu reste utilisable pour les ablutions. Le hadith rapporté par Kabsha bint Ka\u2019b, dans lequel le Prophète ﷺ dit que le chat \u00ab fait partie de ceux qui tournent autour de vous \u00bb (at-tawwafin), est la base juridique de cette règle (Abu Dawud 75, Tirmidhi 92).",
  },
  {
    question:
      "Peut-on avoir un chat chez soi en islam ?",
    answer:
      "Oui, il est tout à fait permis d\u2019avoir un chat chez soi. Le Prophète ﷺ lui-même laissait les chats circuler librement dans sa maison. Abu Qatada rapporte que le Prophète ﷺ inclinait le récipient d\u2019eau pour que le chat puisse boire. Les savants sont unanimes sur la licéité de garder un chat, à condition de le nourrir correctement et de ne pas le maltraiter.",
  },
  {
    question:
      "Quel est le hadith sur la femme qui a enfermé un chat ?",
    answer:
      "Le hadith rapporté par Ibn \u2018Umar et Abdallah ibn \u2018Umar dans Sahih Al-Bukhari (n\u00b03318) et Sahih Muslim (n\u00b02619) relate qu\u2019une femme est entrée en Enfer pour avoir enfermé un chat sans le nourrir ni le laisser se nourrir seul. Ce hadith montre la gravité de la maltraitance animale en islam et le fait qu\u2019elle peut entraîner le châtiment divin.",
  },
  {
    question:
      "La miséricorde envers les animaux est-elle récompensée en islam ?",
    answer:
      "Oui, la miséricorde envers les animaux est récompensée. Le Prophète ﷺ a raconté l\u2019histoire d\u2019une femme de mauvaise vie qui a été pardonnée pour avoir donné à boire à un chien assoiffé (Bukhari 3321, Muslim 2245). Il a également dit : \u00ab En tout foie humide (être vivant), il y a une récompense \u00bb (Bukhari 2466). La bienveillance envers toute créature est une forme de sadaqa.",
  },
  {
    question:
      "L&apos;islam interdit-il la cruauté envers les animaux ?",
    answer:
      "L\u2019islam interdit formellement la cruauté envers les animaux. Le Prophète ﷺ a maudit quiconque prend un être vivant comme cible (Muslim 1958), a interdit de mutiler les animaux (Bukhari 5515), et a ordonné d\u2019aiguiser la lame lors de l\u2019abattage pour minimiser la souffrance. Le hadith de la femme et du chat (Bukhari 3318) montre que la maltraitance animale peut mener à l\u2019Enfer.",
  },
  {
    question:
      "Quels animaux le Prophète Muhammad possédait-il ?",
    answer:
      "Le Prophète ﷺ possédait plusieurs animaux : des chameaux, des chevaux, des moutons et des mules. Sa mule blanche s\u2019appelait Duldul et son cheval Al-Lahif. Il entretenait un lien particulier avec ses montures et insistait sur leur bon traitement. Les chats circulaient librement dans sa maison, et Abu Hurayra, l\u2019un de ses compagnons les plus célèbres, doit son surnom (\u00ab le père du chaton \u00bb) à un petit chat qu\u2019il portait toujours.",
  },
];

export default function HadithChatAnimauxIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-chat-animaux-islam/#article",
        headline:
          "Hadiths sur le chat et les animaux en islam : bienveillance et respect",
        description:
          "Découvrez les hadiths authentiques sur le chat et les animaux en islam : pureté du chat, bienveillance envers les bêtes, interdiction de la cruauté.",
        image: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-chat-animaux-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-chat-animaux-islam/#breadcrumb",
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
            name: "Chat et animaux",
            item: "https://www.islamreligion.fr/hadith-chat-animaux-islam",
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
          title="Hadiths sur le chat et les animaux en islam"
          subtitle="Les enseignements prophétiques sur la pureté du chat, la bienveillance envers les animaux, l&apos;interdiction de la cruauté et la miséricorde envers toute créature vivante selon la Sunna authentique."
          imageSrc="/images/coran-ouvert-nature-coucher-soleil-islam.jpg"
          imageAlt="Hadiths sur le chat et les animaux en islam, bienveillance et respect"
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
                  Chat et animaux
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
                    Le chat est un animal pur (<em>tahir</em>) en islam : son eau et son contact ne souillent pas les ablutions.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La bienveillance envers les animaux est une forme de sadaqa récompensée par Allah, pouvant même conduire au Paradis.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La maltraitance animale est un péché grave : une femme est entrée en Enfer pour avoir laissé mourir un chat de faim.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ était lui-même un modèle de douceur envers les animaux, interdisant toute forme de mutilation et de souffrance inutile.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique sur les animaux en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths sur le chat et les animaux, il convient de rappeler que le Coran lui-même accorde une place considérable aux créatures vivantes. Allah les présente comme des communautés à part entière, dotées d&apos;une forme de conscience et soumises à Sa volonté. Plusieurs sourates portent d&apos;ailleurs le nom d&apos;animaux : Al-Baqara (la vache), An-Nahl (les abeilles), An-Naml (les fourmis), Al-Fil (l&apos;éléphant), Al-&apos;Ankabut (l&apos;araignée). Cette présence témoigne de l&apos;importance que l&apos;islam accorde au monde animal.
                </p>

                <HadithCard
                  arabic="وَمَا مِن دَابَّةٍ فِي الْأَرْضِ وَلَا طَائِرٍ يَطِيرُ بِجَنَاحَيْهِ إِلَّا أُمَمٌ أَمْثَالُكُم مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ ثُمَّ إِلَىٰ رَبِّهِمْ يُحْشَرُونَ"
                  text="Nulle bête marchant sur terre, nul oiseau volant de ses ailes, qui ne soit comme vous en communauté. Nous n&apos;avons rien omis d&apos;écrire dans le Livre. Puis, c&apos;est vers leur Seigneur qu&apos;ils seront ramenés."
                  source="Coran, sourate Al-An&apos;am (6:38)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est fondamental : il établit que les animaux forment des &laquo;&nbsp;communautés&nbsp;&raquo; (<em>umam</em>) comparables aux communautés humaines. Ils ont leurs propres modes de vie, leurs hiérarchies et leur manière de glorifier Allah. Les savants y voient la base coranique du respect dû aux animaux : puisqu&apos;ils sont des communautés créées par Allah, les maltraiter revient à porter atteinte à Sa création. Le verset précise aussi qu&apos;ils seront &laquo;&nbsp;ramenés&nbsp;&raquo; vers leur Seigneur, ce qui souligne leur dignité intrinsèque.
                </p>

                <HadithCard
                  arabic="وَالْأَنْعَامَ خَلَقَهَا لَكُمْ فِيهَا دِفْءٌ وَمَنَافِعُ وَمِنْهَا تَأْكُلُونَ ○ وَلَكُمْ فِيهَا جَمَالٌ حِينَ تُرِيحُونَ وَحِينَ تَسْرَحُونَ ○ وَتَحْمِلُ أَثْقَالَكُمْ إِلَىٰ بَلَدٍ لَّمْ تَكُونُوا بَالِغِيهِ إِلَّا بِشِقِّ الْأَنفُسِ إِنَّ رَبَّكُمْ لَرَءُوفٌ رَّحِيمٌ"
                  text="Et les bestiaux, Il les a créés pour vous ; vous en retirez des vêtements chauds ainsi que d&apos;autres profits, et vous en mangez aussi. Ils vous sont une parure quand vous les ramenez, le soir, et quand vous les lâchez, le matin. Et ils portent vos fardeaux vers des pays que vous n&apos;atteindriez qu&apos;au prix de pénibles efforts. Votre Seigneur est Compatissant et Miséricordieux."
                  source="Coran, sourate An-Nahl (16:5-8)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces versets de la sourate An-Nahl, dite &laquo;&nbsp;les abeilles&nbsp;&raquo;, soulignent que les animaux sont un bienfait d&apos;Allah envers les hommes. Ils fournissent nourriture, vêtement, transport et même beauté. Mais ce bienfait implique une responsabilité : l&apos;homme est un intendant (<em>khalifa</em>) sur terre, et non un tyran. Le fait qu&apos;Allah termine par Ses noms &laquo;&nbsp;Compatissant et Miséricordieux&nbsp;&raquo; rappelle que la relation avec les animaux doit être empreinte de cette même miséricorde.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Le chat en islam             */}
              {/* ====================================== */}
              <section id="chat-purete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le chat en islam : pureté et respect
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le chat occupe une place particulière parmi les animaux en islam. Contrairement à d&apos;autres créatures dont le statut juridique fait débat, le chat bénéficie d&apos;un consensus des savants sur sa pureté rituelle. Le Prophète ﷺ lui-même vivait en compagnie de chats, et son compagnon Abu Hurayra doit son surnom (&laquo;&nbsp;le père du chaton&nbsp;&raquo;) au petit chat qu&apos;il portait constamment. Les hadiths suivants établissent le cadre juridique et éthique du rapport au chat en islam.
                </p>

                <HadithBlock
                  number={1}
                  title="Le chat n&apos;est pas impur"
                  narrator="Kabsha bint Ka&apos;b ibn Malik"
                  arabic="إِنَّهَا لَيْسَتْ بِنَجَسٍ، إِنَّهَا مِنَ الطَّوَّافِينَ عَلَيْكُمْ وَالطَّوَّافَاتِ"
                  translation="Le chat n&apos;est pas impur. Il fait partie de ceux et celles qui circulent parmi vous."
                  source="Sunan Abu Dawud, n°75 — Jami&apos; at-Tirmidhi, n°92"
                  grade="sahih"
                  explanation="Ce hadith est la base juridique principale sur le statut du chat en islam. Abu Qatada al-Ansari avait incliné un récipient d&apos;eau pour qu&apos;un chat puisse boire, et lorsque Kabsha en fut surprise, il rapporta cette parole du Prophète ﷺ. Le terme &laquo; at-tawwafin &raquo; (ceux qui circulent) compare implicitement les chats aux anges qui circulent parmi les croyants, soulignant leur caractère familier et inoffensif. Les quatre écoles de jurisprudence s&apos;appuient sur ce hadith pour déclarer le chat pur et son eau licite pour les ablutions."
                />

                <HadithBlock
                  number={2}
                  title="Le Prophète ﷺ inclinait le récipient pour le chat"
                  narrator="Abu Qatada al-Ansari"
                  arabic="أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ كَانَ يُصْغِي لَهَا الْإِنَاءَ حَتَّى تَشْرَبَ ثُمَّ يَتَوَضَّأُ بِفَضْلِهَا"
                  translation="Le Messager d&apos;Allah ﷺ inclinait le récipient pour la chatte afin qu&apos;elle boive, puis il faisait ses ablutions avec le reste de cette eau."
                  source="Sunan ad-Daraqutni, n°130 — Al-Bayhaqi, as-Sunan al-Kubra"
                  grade="hasan"
                  explanation="Ce hadith complète le précédent en montrant le comportement concret du Prophète ﷺ envers les chats. Non seulement il ne chassait pas le chat du récipient, mais il inclinait lui-même le récipient pour faciliter l&apos;accès de l&apos;animal à l&apos;eau. Ce geste témoigne d&apos;une attention délicate envers une créature souvent considérée comme insignifiante. Le fait qu&apos;il utilisait ensuite la même eau pour ses ablutions confirme de manière pratique la pureté du chat et de sa salive."
                />

                <HadithBlock
                  number={3}
                  title="L&apos;eau laissée par le chat est pure"
                  narrator="Abu Hurayra"
                  arabic="الْهِرَّةُ لَا تَقْطَعُ الصَّلَاةَ، إِنَّهَا مِنْ مَتَاعِ الْبَيْتِ"
                  translation="Le chat n&apos;annule pas la prière. Il fait partie des objets du foyer."
                  source="Sunan Ibn Majah, n°369"
                  grade="hasan"
                  explanation="Ce hadith élargit le statut du chat au-delà de la question de l&apos;eau : le passage d&apos;un chat devant une personne en prière n&apos;invalide pas sa salat. L&apos;expression &laquo; mata&apos; al-bayt &raquo; (objets du foyer) indique que le chat est considéré comme un élément naturel de la maison musulmane. Les fuqaha en déduisent que le chat domestique ne constitue pas un obstacle rituel, contrairement à certains autres animaux dont le passage devant le prieur fait l&apos;objet de discussions."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths dessinent un portrait cohérent du statut du chat en islam : un animal pur, familier, bienvenu au foyer et traité avec douceur par le Prophète ﷺ lui-même. Pour approfondir les hadiths sur le bon comportement envers toutes les créatures d&apos;Allah, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Bienveillance envers animaux */}
              {/* ====================================== */}
              <section id="bienveillance-animaux" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La bienveillance envers les animaux dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne se contente pas de tolérer les animaux : il fait de la bienveillance envers eux un acte d&apos;adoration récompensé par Allah. Plusieurs hadiths montrent que la miséricorde envers une créature, aussi petite soit-elle, peut changer le destin éternel d&apos;une personne. À l&apos;inverse, la cruauté envers un animal peut conduire au châtiment divin.
                </p>

                <HadithBlock
                  number={4}
                  title="La femme pardonnée pour avoir donné à boire à un chien"
                  narrator="Abu Hurayra"
                  arabic="بَيْنَمَا امْرَأَةٌ بَغِيٌّ مِنْ بَغَايَا بَنِي إِسْرَائِيلَ رَأَتْ كَلْبًا يُطِيفُ بِرَكِيَّةٍ كَادَ يَقْتُلُهُ الْعَطَشُ فَنَزَعَتْ مُوقَهَا فَسَقَتْهُ فَغُفِرَ لَهَا بِهِ"
                  translation="Une femme de mauvaise vie parmi les Bani Isra&apos;il vit un chien qui tournait autour d&apos;un puits, presque mort de soif. Elle retira sa chaussure, la remplit d&apos;eau et le fit boire. Il lui fut pardonné pour cela."
                  source="Sahih Al-Bukhari, n°3321 — Sahih Muslim, n°2245"
                  grade="sahih"
                  explanation="Ce hadith est d&apos;une puissance spirituelle considérable. Une femme dont le métier était un péché majeur reçoit le pardon divin pour un seul geste de miséricorde envers un animal. Le Prophète ﷺ montre ici que la rahma (miséricorde) transcende les catégories sociales et morales : un acte sincère de compassion peut effacer des années de transgression. Les savants en déduisent que la bienveillance envers les animaux n&apos;est pas un simple acte de gentillesse, mais un acte spirituel aux conséquences éternelles."
                />

                <HadithBlock
                  number={5}
                  title="La femme châtiée pour avoir enfermé un chat"
                  narrator="Ibn &apos;Umar"
                  arabic="عُذِّبَتِ امْرَأَةٌ فِي هِرَّةٍ حَبَسَتْهَا حَتَّى مَاتَتْ جُوعًا فَدَخَلَتْ فِيهَا النَّارَ، لَا هِيَ أَطْعَمَتْهَا وَسَقَتْهَا إِذْ هِيَ حَبَسَتْهَا، وَلَا هِيَ تَرَكَتْهَا تَأْكُلُ مِنْ خَشَاشِ الْأَرْضِ"
                  translation="Une femme fut châtiée à cause d&apos;un chat qu&apos;elle avait enfermé jusqu&apos;à ce qu&apos;il meure de faim, et elle entra en Enfer à cause de lui. Elle ne l&apos;avait ni nourri ni abreuvé alors qu&apos;elle l&apos;avait enfermé, et elle ne l&apos;avait pas laissé manger des petites bêtes de la terre."
                  source="Sahih Al-Bukhari, n°3318 — Sahih Muslim, n°2619"
                  grade="sahih"
                  explanation="Ce hadith est le pendant négatif du précédent : autant la miséricorde envers un animal peut mener au Paradis, autant la cruauté peut mener en Enfer. La femme n&apos;a pas nécessairement battu le chat — elle l&apos;a simplement enfermé et négligé. Le Prophète ﷺ souligne la double faute : ni nourrir l&apos;animal, ni le libérer pour qu&apos;il se nourrisse seul. Les savants y voient la preuve que la responsabilité envers un animal dont on a la garde est une obligation religieuse, dont la violation est un péché majeur."
                />

                <HadithBlock
                  number={6}
                  title="En tout être vivant, il y a une récompense"
                  narrator="Abu Hurayra"
                  arabic="فِي كُلِّ ذَاتِ كَبِدٍ رَطْبَةٍ أَجْرٌ"
                  translation="En tout foie humide (être vivant), il y a une récompense."
                  source="Sahih Al-Bukhari, n°2466 — Sahih Muslim, n°2244"
                  grade="sahih"
                  explanation="Cette parole prophétique est d&apos;une concision remarquable. L&apos;expression &laquo; foie humide &raquo; (<em>kabd ratba</em>) désigne tout être vivant, car le foie sec est celui d&apos;un cadavre. Le Prophète ﷺ universalise ainsi la récompense : tout acte de bonté envers n&apos;importe quelle créature vivante — qu&apos;il s&apos;agisse d&apos;un chat, d&apos;un oiseau, d&apos;un insecte ou d&apos;un animal sauvage — est rétribué par Allah. Ce hadith est la base juridique sur laquelle les savants fondent le devoir général de bienveillance envers le monde animal."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent que la relation à l&apos;animal en islam n&apos;est pas une question secondaire, mais un indicateur de la foi et de la piété. La miséricorde envers les créatures est un prolongement de la miséricorde envers les hommes. Pour découvrir d&apos;autres formes de bienfaisance récompensées par Allah, consultez notre article sur les{" "}
                  <Link href="/hadith-sadaqa-charite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la sadaqa et la charité en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez les hadiths prophétiques, le fiqh et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ====================================== */}
              {/* SECTION : Interdiction de la cruauté   */}
              {/* ====================================== */}
              <section id="interdiction-cruaute" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;interdiction de la cruauté animale dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam a posé, dès le VIIe siècle, des règles précises contre la maltraitance animale. Le Prophète ﷺ a interdit la torture, la mutilation, le fait de prendre des animaux comme cibles et toute souffrance inutile. Ces interdictions couvrent aussi bien les animaux domestiques que les animaux d&apos;élevage ou sauvages. Elles témoignent d&apos;une éthique animale d&apos;une modernité frappante.
                </p>

                <HadithBlock
                  number={7}
                  title="La malédiction sur celui qui prend un être vivant comme cible"
                  narrator="Ibn &apos;Abbas"
                  arabic="لَعَنَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَنِ اتَّخَذَ شَيْئًا فِيهِ الرُّوحُ غَرَضًا"
                  translation="Le Messager d&apos;Allah ﷺ a maudit celui qui prend un être doté d&apos;une âme comme cible."
                  source="Sahih Muslim, n°1958"
                  grade="sahih"
                  explanation="Ce hadith interdit formellement de tirer sur des animaux vivants pour le sport ou l&apos;entraînement. Le terme &laquo; gharad &raquo; (cible) englobe toute pratique consistant à blesser ou tuer un animal sans nécessité alimentaire ou de défense. La &laquo; malédiction &raquo; (la&apos;na) est la sanction verbale la plus sévère dans le vocabulaire prophétique, réservée aux actes les plus graves. Les savants en déduisent que les combats d&apos;animaux, la chasse pour le divertissement pur et toute forme de cruauté gratuite sont formellement interdits (haram)."
                />

                <HadithBlock
                  number={8}
                  title="L&apos;interdiction de mutiler les animaux"
                  narrator="Ibn &apos;Abbas"
                  arabic="نَهَى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنِ التَّحْرِيشِ بَيْنَ الْبَهَائِمِ"
                  translation="Le Messager d&apos;Allah ﷺ a interdit d&apos;exciter les animaux les uns contre les autres."
                  source="Sunan Abu Dawud, n°2562 — Jami&apos; at-Tirmidhi, n°1708"
                  grade="sahih"
                  explanation="Ce hadith interdit les combats d&apos;animaux sous toutes leurs formes : combats de coqs, de chiens, de taureaux ou de tout autre animal. Le terme &laquo; tahrish &raquo; désigne le fait d&apos;inciter un animal à attaquer un autre. Cette pratique, courante dans de nombreuses cultures à l&apos;époque et encore aujourd&apos;hui, est considérée par les juristes comme un acte de cruauté injustifiable. L&apos;animal souffre pour le divertissement de l&apos;homme, ce qui contredit le principe coranique selon lequel les animaux sont des communautés dignes de respect."
                />

                <HadithBlock
                  number={9}
                  title="Aiguiser la lame et traiter l&apos;animal avec bonté"
                  narrator="Shaddad ibn Aws"
                  arabic="إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ، فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ، وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذِّبْحَةَ، وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ وَلْيُرِحْ ذَبِيحَتَهُ"
                  translation="Allah a prescrit l&apos;excellence (<em>ihsan</em>) en toute chose. Lorsque vous tuez, tuez de la meilleure façon. Lorsque vous égorgez, égorgez de la meilleure façon. Que l&apos;un de vous aiguise sa lame et soulage sa bête."
                  source="Sahih Muslim, n°1955"
                  grade="sahih"
                  explanation="Ce hadith est considéré par les savants comme l&apos;un des fondements de l&apos;éthique animale en islam. Le Prophète ﷺ pose un principe universel — l&apos;ihsan (excellence) en toute chose — puis l&apos;applique au cas spécifique de l&apos;abattage. Même lorsque tuer un animal est licite (pour se nourrir), il faut le faire avec le maximum de douceur : aiguiser la lame pour que la coupure soit rapide, ne pas montrer la lame à l&apos;animal, ne pas égorger un animal devant un autre. Les fuqaha en tirent des règles détaillées sur les conditions de l&apos;abattage rituel (<em>dhabh</em>)."
                />
              </section>

              {/* ====================================== */}
              {/* SECTION : Animaux et le Prophète       */}
              {/* ====================================== */}
              <section id="animaux-prophete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les animaux dans la vie du Prophète ﷺ
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ ne se contentait pas d&apos;édicter des règles sur le traitement des animaux : il incarnait ces principes dans sa vie quotidienne. Les compagnons ont rapporté de nombreuses situations où le Messager d&apos;Allah ﷺ faisait preuve d&apos;une attention remarquable envers les animaux, qu&apos;il s&apos;agisse de ses montures, des oiseaux ou des insectes.
                </p>

                <HadithBlock
                  number={10}
                  title="Le chameau qui s&apos;est plaint au Prophète ﷺ"
                  narrator="Abdallah ibn Ja&apos;far"
                  arabic="دَخَلَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ حَائِطًا لِرَجُلٍ مِنَ الْأَنْصَارِ فَإِذَا جَمَلٌ، فَلَمَّا رَأَى النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ حَنَّ وَذَرَفَتْ عَيْنَاهُ، فَأَتَاهُ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَمَسَحَ ذِفْرَاهُ فَسَكَتَ، فَقَالَ: مَنْ رَبُّ هَذَا الْجَمَلِ؟ فَجَاءَ فَتًى مِنَ الْأَنْصَارِ فَقَالَ: لِي يَا رَسُولَ اللَّهِ. فَقَالَ: أَفَلَا تَتَّقِي اللَّهَ فِي هَذِهِ الْبَهِيمَةِ الَّتِي مَلَّكَكَ اللَّهُ إِيَّاهَا؟ فَإِنَّهُ شَكَا إِلَيَّ أَنَّكَ تُجِيعُهُ وَتُدْئِبُهُ"
                  translation="Le Messager d&apos;Allah ﷺ entra dans le jardin d&apos;un homme des Ansar et y trouva un chameau. Lorsque le chameau vit le Prophète ﷺ, il gémit et ses yeux versèrent des larmes. Le Prophète ﷺ s&apos;approcha et lui caressa le haut de la tête, et le chameau se calma. Il demanda : &laquo; Qui est le propriétaire de ce chameau ? &raquo; Un jeune Ansari vint et dit : &laquo; Il est à moi, ô Messager d&apos;Allah. &raquo; Le Prophète ﷺ dit : &laquo; Ne crains-tu pas Allah au sujet de cette bête qu&apos;Allah t&apos;a confiée ? Car il s&apos;est plaint à moi que tu le fais souffrir de faim et que tu l&apos;épuises de travail. &raquo;"
                  source="Sunan Abu Dawud, n°2549"
                  grade="sahih"
                  explanation="Ce hadith est riche d&apos;enseignements. Le chameau, incapable de parler, exprime sa souffrance par des gémissements et des larmes en présence du Prophète ﷺ, qui comprend sa plainte. Le Prophète ﷺ ne se contente pas de consoler l&apos;animal : il interpelle son propriétaire en lui rappelant sa responsabilité devant Allah. L&apos;expression &laquo; Allah t&apos;a confié &raquo; (mallakaka) indique que la propriété d&apos;un animal est un dépôt (amana), et non un droit absolu de disposer de la créature à sa guise."
                />

                <HadithBlock
                  number={11}
                  title="Le Prophète ﷺ et la mère oiseau"
                  narrator="Ibn Mas&apos;ud"
                  arabic="كُنَّا مَعَ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي سَفَرٍ فَانْطَلَقَ لِحَاجَتِهِ فَرَأَيْنَا حُمَّرَةً مَعَهَا فَرْخَانِ فَأَخَذْنَا فَرْخَيْهَا فَجَاءَتِ الْحُمَّرَةُ فَجَعَلَتْ تُفَرِّشُ فَجَاءَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: مَنْ فَجَعَ هَذِهِ بِوَلَدِهَا؟ رُدُّوا وَلَدَهَا إِلَيْهَا"
                  translation="Nous étions en voyage avec le Messager d&apos;Allah ﷺ. Il s&apos;absenta pour un besoin, et nous vîmes un oiseau (hummara) avec ses deux petits. Nous prîmes ses petits. La mère oiseau vint et se mit à battre des ailes (de détresse). Le Prophète ﷺ revint et dit : &laquo; Qui a affligé cette mère en lui prenant ses petits ? Rendez-lui ses petits ! &raquo;"
                  source="Sunan Abu Dawud, n°2675"
                  grade="sahih"
                  explanation="Ce hadith illustre la sensibilité du Prophète ﷺ envers les animaux sauvages. Il ne s&apos;agit pas ici d&apos;un animal domestique, mais d&apos;un oiseau en pleine nature. Le Prophète ﷺ perçoit immédiatement la détresse de la mère et ordonne la restitution de ses petits. Le verbe &laquo; faja&apos;a &raquo; (affliger, causer une douleur vive) montre que le Prophète ﷺ reconnaît aux animaux une capacité de souffrance émotionnelle. Les savants citent ce hadith pour interdire de séparer une mère animale de ses petits, que ce soit dans l&apos;élevage ou le commerce."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces récits montrent que la miséricorde du Prophète ﷺ ne connaissait pas de limites de genre ou d&apos;espèce. Sa compassion s&apos;étendait aux chameaux épuisés, aux oiseaux séparés de leurs petits et aux chats du quotidien. Cette attitude prophétique est un modèle pour chaque musulman, quel que soit son rapport aux animaux. Pour découvrir d&apos;autres facettes de la personnalité du Prophète ﷺ, consultez notre article sur les{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths du Prophète Muhammad ﷺ
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur les animaux en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont développé une réflexion approfondie sur le statut des animaux, en s&apos;appuyant sur les hadiths et les versets coraniques. Leurs commentaires permettent de comprendre la portée juridique et éthique de ces enseignements.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith du chat prouve que les restes d&apos;eau du chat sont purs, ainsi que sa salive et son corps. C&apos;est l&apos;avis de la majorité des savants parmi les compagnons, les tabi&apos;in et ceux qui les ont suivis. C&apos;est l&apos;avis d&apos;Abu Hanifa, de Malik, de Ash-Shafi&apos;i et de la plupart des gens de science.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith de la femme et du chat prouve que la maltraitance des animaux fait partie des grands péchés (<em>kaba&apos;ir</em>), car elle a entraîné le châtiment du Feu. Quiconque possède un animal est tenu de le nourrir, de l&apos;abreuver et de ne pas le charger au-delà de sa capacité. S&apos;il ne peut pas, il doit le libérer ou le confier à quelqu&apos;un qui en prendra soin.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith &laquo; Allah a prescrit l&apos;ihsan en toute chose &raquo; est l&apos;un des hadiths qui rassemblent les principes de l&apos;islam. L&apos;ihsan s&apos;applique même envers l&apos;animal que l&apos;on abat : aiguiser la lame, ne pas le faire souffrir, ne pas lui montrer le couteau. Si l&apos;islam prescrit l&apos;ihsan dans la mise à mort, que dire alors du traitement de l&apos;animal vivant ?&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh al-Arba&apos;in an-Nawawiyya</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur les animaux ont donné naissance à un corpus juridique et éthique détaillé. Les juristes musulmans ont déduit de ces textes des obligations concrètes : nourrir et abreuver l&apos;animal dont on a la charge, ne pas le surcharger de travail, ne pas le mutiler, ne pas le tuer sans raison licite et minimiser sa souffrance lors de l&apos;abattage. Cette éthique animale islamique précède de plusieurs siècles les législations modernes sur la protection des animaux.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques pour le musulman
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés permet de dégager des enseignements concrets sur la relation du musulman avec le monde animal :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Le chat est un animal pur et bienvenu au foyer
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Avoir un chat chez soi est parfaitement licite. Son eau ne souille pas les ablutions, son passage n&apos;invalide pas la prière, et le Prophète ﷺ lui-même vivait en compagnie de chats.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La bienveillance envers les animaux est un acte d&apos;adoration
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Donner à boire à un animal assoiffé, nourrir un chat errant ou soigner un oiseau blessé sont des formes de sadaqa récompensées par Allah. La miséricorde envers les créatures peut même effacer des péchés majeurs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La maltraitance animale est un péché grave
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Enfermer un animal sans le nourrir, le prendre comme cible, organiser des combats d&apos;animaux ou le mutiler sont des actes formellement interdits. La femme qui a enfermé le chat est un avertissement pour tous.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La propriété d&apos;un animal est une responsabilité (amana)
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Posséder un animal implique de le nourrir, de l&apos;abreuver, de ne pas le surcharger et de ne pas le faire souffrir. Si l&apos;on ne peut assumer cette responsabilité, il faut libérer l&apos;animal ou le confier à quelqu&apos;un de capable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        L&apos;ihsan s&apos;applique même lors de l&apos;abattage
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Lorsque l&apos;abattage est licite, il doit être fait avec le maximum de douceur : lame aiguisée, geste rapide, pas de souffrance inutile. Si l&apos;islam prescrit l&apos;excellence dans la mise à mort, la bienveillance envers l&apos;animal vivant s&apos;impose à plus forte raison.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La sensibilité animale est reconnue par le Prophète ﷺ
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le chameau qui pleure, la mère oiseau qui bat des ailes de détresse : le Prophète ﷺ reconnaît aux animaux une capacité de souffrance émotionnelle. Cette reconnaissance fonde l&apos;interdiction de les séparer de leurs petits ou de les faire souffrir psychologiquement.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur les animaux dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur le bon comportement en islam"
                  description="Les enseignements prophétiques sur les bonnes manières, la douceur et la bienveillance envers autrui."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la sadaqa et la charité en islam"
                  description="Les formes de bienfaisance récompensées par Allah, de l&apos;aumône matérielle au sourire."
                  href="/hadith-sadaqa-charite-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
