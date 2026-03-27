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
    "Hadiths sur la mort en islam : préparation, épreuves et au-delà",
  description:
    "Découvrez les hadiths authentiques sur la mort en islam : préparation spirituelle, épreuves de la tombe, rites funéraires, espérance en l&apos;au-delà. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur la mort en islam : préparation, épreuves et au-delà",
    description:
      "Les hadiths authentiques sur la mort en islam : se préparer à la mort, les épreuves de la tombe, les rites funéraires et l&apos;espérance en la miséricorde divine.",
    url: "https://www.islamreligion.fr/hadith-mort-islam",
    images: [
      {
        url: "/images/priere-islam-doua-mosquee-silhouette.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-mort-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de la mort" },
  { id: "preparation-mort", label: "Se préparer à la mort" },
  { id: "epreuves-tombe", label: "Les épreuves de la tombe" },
  { id: "rites-funeraires", label: "Les rites funéraires" },
  { id: "au-dela-esperance", label: "L&apos;au-delà et l&apos;espérance" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur la mort en islam ?",
    answer:
      "Les hadiths les plus importants sur la mort incluent celui rapporté par Ibn \u2019Umar sur le rappel fréquent de la mort (Tirmidhi 2307), celui d\u2019Anas sur l\u2019interrogatoire dans la tombe par les anges Munkar et Nakir (Bukhari 1338), et celui d\u2019Abu Hurayra sur les trois choses qui accompagnent le défunt (Bukhari 6514). Ces hadiths couvrent la préparation, les épreuves post-mortem et les \u0153uvres qui profitent au croyant après sa mort.",
  },
  {
    question:
      "Comment se préparer à la mort selon le Prophète Muhammad ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a enseigné de se rappeler fréquemment la mort (Tirmidhi 2307), de multiplier les bonnes \u0153uvres, de régler ses dettes et de maintenir de bonnes relations avec ses proches. Il a également recommandé de dire l\u2019invocation du mourant et de prononcer la shahada en dernière parole (Abu Dawud 3116). La préparation à la mort passe aussi par la sincérité dans l\u2019adoration et le repentir constant.",
  },
  {
    question:
      "Que se passe-t-il dans la tombe selon les hadiths ?",
    answer:
      "Selon les hadiths authentiques, le défunt est interrogé dans sa tombe par deux anges (Munkar et Nakir) qui lui posent trois questions : Qui est ton Seigneur ? Quelle est ta religion ? Qui est cet homme envoyé parmi vous ? Le croyant sincère répondra correctement et sa tombe sera élargie, tandis que l\u2019hypocrite échouera et sa tombe se resserrera sur lui (Bukhari 1338, Muslim 2870).",
  },
  {
    question:
      "Quels sont les rites funéraires obligatoires en islam ?",
    answer:
      "Les rites funéraires en islam comprennent le lavage rituel du défunt (ghusl), l\u2019enveloppement dans un linceul blanc (kafan), la prière funéraire (salat al-janaza) et l\u2019enterrement rapide. Le Prophète a ordonné de hâter les funérailles (Bukhari 1315) et a enseigné la prière funéraire avec quatre takbirat. Ces rites sont une obligation communautaire (fard kifaya) que la communauté doit accomplir.",
  },
  {
    question:
      "Les bonnes actions profitent-elles au mort en islam ?",
    answer:
      "Oui, le Prophète a enseigné que trois choses continuent de profiter au défunt après sa mort : une aumône continue (sadaqa jariya), une science dont les gens tirent profit et un enfant pieux qui invoque Allah en sa faveur (Muslim 1631). De plus, les invocations des vivants et l\u2019acquittement des dettes du défunt lui sont bénéfiques selon les hadiths authentiques.",
  },
  {
    question:
      "Qu&apos;est-ce que la bonne fin (husn al-khatima) en islam ?",
    answer:
      "La bonne fin désigne le fait de mourir dans un état de foi et d\u2019obéissance à Allah. Le Prophète a dit que celui dont la dernière parole est \u00ab La ilaha illa Allah \u00bb entrera au Paradis (Abu Dawud 3116). Les signes de la bonne fin incluent la mort un vendredi, la mort en état de jeûne, la mort sur le champ de bataille pour la cause d\u2019Allah, ou la mort en accomplissant une bonne \u0153uvre.",
  },
  {
    question:
      "Le musulman doit-il avoir peur de la mort ?",
    answer:
      "Le musulman ne doit ni désirer la mort par désespoir, ni la fuir par insouciance. Le Prophète a interdit de souhaiter la mort à cause d\u2019un malheur (Bukhari 5671). L\u2019attitude juste est un équilibre entre la crainte du châtiment d\u2019Allah et l\u2019espérance en Sa miséricorde. Le rappel de la mort doit motiver le croyant à multiplier les bonnes \u0153uvres, non à sombrer dans l\u2019angoisse.",
  },
  {
    question:
      "Comment faire la prière funéraire (salat al-janaza) ?",
    answer:
      "La prière funéraire se compose de quatre takbirat (Allahu Akbar). Après la première, on récite la Fatiha. Après la deuxième, on récite la prière sur le Prophète (salat ibrahimiyya). Après la troisième, on invoque Allah en faveur du défunt. Après la quatrième, on fait le taslim. Il n\u2019y a ni ruku\u2019 ni sujud dans cette prière. Le Prophète a enseigné des invocations spécifiques pour le défunt (Muslim 963).",
  },
];

export default function HadithMortIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-mort-islam/#article",
        headline:
          "Hadiths sur la mort en islam : préparation, épreuves et au-delà",
        description:
          "Découvrez les hadiths authentiques sur la mort en islam : préparation spirituelle, épreuves de la tombe, rites funéraires et espérance en l\u2019au-delà.",
        image: "/images/priere-islam-doua-mosquee-silhouette.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-mort-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-mort-islam/#breadcrumb",
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
            name: "Hadiths sur la mort",
            item: "https://www.islamreligion.fr/hadith-mort-islam",
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
          title="Hadiths sur la mort en islam"
          subtitle="Les enseignements prophétiques sur la préparation à la mort, les épreuves de la tombe, les rites funéraires et l&apos;espérance en l&apos;au-delà selon la Sunna authentique."
          imageSrc="/images/priere-islam-doua-mosquee-silhouette.jpg"
          imageAlt="Hadiths sur la mort en islam, préparation et au-delà"
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
                  Hadiths sur la mort
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
                    Le Prophète ﷺ a enseigné de se rappeler fréquemment la mort, car elle est le meilleur rappel pour détourner le croyant des tentations de ce bas monde.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les hadiths décrivent l&apos;interrogatoire dans la tombe par les anges Munkar et Nakir, épreuve à laquelle seul le croyant sincère peut répondre avec succès.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les rites funéraires (lavage, linceul, prière et enterrement) sont une obligation communautaire que le Prophète ﷺ a détaillée avec précision.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Trois oeuvres continuent de profiter au défunt : l&apos;aumône continue, la science bénéfique et l&apos;enfant pieux qui invoque en sa faveur.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de la mort en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il est essentiel de rappeler que la mort occupe une place centrale dans le Coran. Allah y rappelle à l&apos;humanité que chaque âme goûtera à la mort, que la vie d&apos;ici-bas est éphémère et que la véritable demeure est celle de l&apos;au-delà. Ces versets posent le cadre théologique sur lequel s&apos;appuient les enseignements prophétiques.
                </p>

                <HadithCard
                  arabic="كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ الْقِيَامَةِ فَمَن زُحْزِحَ عَنِ النَّارِ وَأُدْخِلَ الْجَنَّةَ فَقَدْ فَازَ وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ"
                  text="Toute âme goûtera la mort. Mais c&apos;est seulement au Jour de la Résurrection que vous recevrez votre entière rétribution. Quiconque est écarté du Feu et introduit au Paradis a certes réussi. Et la vie présente n&apos;est qu&apos;un objet de jouissance trompeuse."
                  source="Coran, sourate Al-Imran (3:185)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondamental établit trois vérités : l&apos;universalité de la mort, la rétribution au Jour dernier et la nature illusoire de la vie d&apos;ici-bas. Les savants soulignent que l&apos;expression &laquo;&nbsp;toute âme goûtera la mort&nbsp;&raquo; s&apos;adresse à chaque être humain sans exception, rappelant que ni la richesse, ni le pouvoir, ni la jeunesse ne peuvent repousser l&apos;échéance fixée par Allah. Ce verset invite le croyant à orienter ses efforts vers la vie éternelle.
                </p>

                <HadithCard
                  arabic="كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ثُمَّ إِلَيْنَا تُرْجَعُونَ"
                  text="Toute âme goûtera la mort. Puis c&apos;est vers Nous que vous serez ramenés."
                  source="Coran, sourate Al-Ankabut (29:57)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce second verset ajoute la notion du retour à Allah (<em>ruju&apos; ila Allah</em>). La mort n&apos;est pas une fin absolue, mais un passage vers la rencontre avec le Créateur. Cette perspective transforme la mort d&apos;un sujet d&apos;angoisse en un appel à la préparation. Le croyant sait qu&apos;il retournera à Allah et sera interrogé sur ses actes. C&apos;est sur cette base coranique que le Prophète ﷺ a construit ses enseignements pratiques sur la préparation à la mort, les rites funéraires et l&apos;espérance en la miséricorde divine.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Se préparer à la mort */}
              {/* ============================== */}
              <section id="preparation-mort" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Se préparer à la mort selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a accordé une importance capitale à la préparation à la mort. Loin d&apos;être un sujet morbide, le rappel de la mort est dans la Sunna un outil de purification spirituelle. Il détourne le croyant de l&apos;attachement excessif à ce monde et le pousse à multiplier les bonnes oeuvres avant qu&apos;il ne soit trop tard.
                </p>

                <HadithBlock
                  number={1}
                  title="Rappelez-vous fréquemment le destructeur des plaisirs"
                  narrator="Abu Hurayra"
                  arabic="أَكْثِرُوا ذِكْرَ هَاذِمِ اللَّذَّاتِ يَعْنِي الْمَوْتَ"
                  translation="Rappelez-vous fréquemment le destructeur des plaisirs, c&apos;est-à-dire la mort."
                  source="Jami&apos; at-Tirmidhi, n°2307 — Sunan an-Nasa&apos;i, n°1824"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus célèbres sur la mort en islam. Le Prophète ﷺ qualifie la mort de &laquo; destructeur des plaisirs &raquo; (hadhim al-ladhdhat), car son souvenir relativise les jouissances éphémères de ce monde. Les savants expliquent que se rappeler la mort ne signifie pas vivre dans la tristesse, mais dans la lucidité. Celui qui pense à la mort est plus enclin à se repentir, à régler ses dettes, à réconcilier ses relations et à multiplier les actes d&apos;adoration. L&apos;imam Al-Ghazali considère ce rappel comme un remède contre l&apos;attachement excessif au monde (dunya)."
                />

                <HadithBlock
                  number={2}
                  title="Le croyant intelligent est celui qui se demande des comptes"
                  narrator="Shaddad ibn Aws"
                  arabic="الْكَيِّسُ مَنْ دَانَ نَفْسَهُ وَعَمِلَ لِمَا بَعْدَ الْمَوْتِ وَالْعَاجِزُ مَنْ أَتْبَعَ نَفْسَهُ هَوَاهَا وَتَمَنَّى عَلَى اللَّهِ"
                  translation="Le clairvoyant est celui qui se demande des comptes à lui-même et oeuvre pour ce qui vient après la mort. Et l&apos;incapable est celui qui suit ses passions et nourrit de vains espoirs en Allah."
                  source="Jami&apos; at-Tirmidhi, n°2459"
                  grade="hasan"
                  explanation="Ce hadith oppose deux attitudes face à la mort. Le &laquo; clairvoyant &raquo; (kayyis) est celui qui anticipe sa rencontre avec Allah en se jugeant lui-même avant d&apos;être jugé. Il pratique la muhasaba (l&apos;auto-évaluation) quotidienne et agit en conséquence. À l&apos;opposé, l&apos;incapable (&apos;ajiz) est celui qui se laisse emporter par ses désirs tout en comptant sur la miséricorde d&apos;Allah sans fournir d&apos;effort. &apos;Umar ibn al-Khattab disait : &laquo; Demandez-vous des comptes avant qu&apos;on ne vous en demande. &raquo; Ce hadith est un appel à l&apos;action concrète, non à la simple espérance passive."
                />

                <HadithBlock
                  number={3}
                  title="Celui dont la dernière parole est La ilaha illa Allah"
                  narrator="Mu&apos;adh ibn Jabal"
                  arabic="مَنْ كَانَ آخِرُ كَلَامِهِ لَا إِلَهَ إِلَّا اللَّهُ دَخَلَ الْجَنَّةَ"
                  translation="Celui dont la dernière parole est &laquo; La ilaha illa Allah &raquo; (Il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah) entrera au Paradis."
                  source="Sunan Abu Dawud, n°3116"
                  grade="sahih"
                  explanation="Ce hadith souligne l&apos;importance capitale des derniers instants de la vie. La shahada (attestation de foi) prononcée au moment de la mort est un sceau sur la vie du croyant. Les savants recommandent de rappeler doucement la shahada au mourant (talqin), sans insister ni l&apos;oppresser. Ce hadith motive également le croyant à vivre dans le dhikr (rappel d&apos;Allah) au quotidien, afin que la shahada soit naturellement sur ses lèvres au moment de la mort. L&apos;imam An-Nawawi précise que ce hadith est une bonne nouvelle pour les croyants sincères, non une garantie pour ceux qui négligent leur religion."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths forment un ensemble cohérent sur la préparation à la mort. Le premier invite au rappel constant, le deuxième à l&apos;action concrète et le troisième à la vigilance spirituelle dans les derniers instants. Pour approfondir la notion de patience face aux épreuves de la vie et de la mort, consultez notre article sur les{" "}
                  <Link href="/hadith-patience-epreuves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la patience et les épreuves en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Épreuves de la tombe */}
              {/* ============================== */}
              <section id="epreuves-tombe" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les épreuves de la tombe selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La vie dans la tombe (barzakh) est une réalité du dogme islamique confirmée par de nombreux hadiths authentiques. Le Prophète ﷺ a décrit l&apos;interrogatoire que subit chaque défunt, le châtiment ou la récompense qui s&apos;ensuit, et l&apos;importance de se préparer à ces épreuves par la foi sincère et les bonnes oeuvres.
                </p>

                <HadithBlock
                  number={4}
                  title="L&apos;interrogatoire dans la tombe"
                  narrator="Anas ibn Malik"
                  arabic="إِنَّ الْعَبْدَ إِذَا وُضِعَ فِي قَبْرِهِ وَتَوَلَّى عَنْهُ أَصْحَابُهُ إِنَّهُ لَيَسْمَعُ قَرْعَ نِعَالِهِمْ أَتَاهُ مَلَكَانِ فَيُقْعِدَانِهِ فَيَقُولَانِ مَا كُنْتَ تَقُولُ فِي هَذَا الرَّجُلِ"
                  translation="Lorsque le serviteur est déposé dans sa tombe et que ses compagnons s&apos;en retournent — il entend encore le bruit de leurs pas — deux anges viennent à lui, le font asseoir et lui demandent : &laquo; Que disais-tu de cet homme (Muhammad) ? &raquo;"
                  source="Sahih Al-Bukhari, n°1338 — Sahih Muslim, n°2870"
                  grade="sahih"
                  explanation="Ce hadith décrit le début de l&apos;épreuve de la tombe (fitnat al-qabr). Les deux anges, nommés Munkar et Nakir dans d&apos;autres narrations, posent trois questions fondamentales : Qui est ton Seigneur ? Quelle est ta religion ? Qui est cet homme envoyé parmi vous ? Le croyant sincère répondra : &laquo; Mon Seigneur est Allah, ma religion est l&apos;islam, et cet homme est Muhammad, le Messager d&apos;Allah. &raquo; Sa tombe sera alors élargie et illuminée. L&apos;hypocrite, quant à lui, dira : &laquo; Je ne sais pas, j&apos;ai entendu les gens dire quelque chose et je le répétais. &raquo; Sa tombe se resserrera sur lui. Ce hadith souligne que la foi doit être vécue, non simplement imitée."
                />

                <HadithBlock
                  number={5}
                  title="Cherchez refuge auprès d&apos;Allah contre le châtiment de la tombe"
                  narrator="Abu Hurayra"
                  arabic="إِذَا فَرَغَ أَحَدُكُمْ مِنَ التَّشَهُّدِ الْأَخِيرِ فَلْيَتَعَوَّذْ بِاللَّهِ مِنْ أَرْبَعٍ مِنْ عَذَابِ جَهَنَّمَ وَمِنْ عَذَابِ الْقَبْرِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ"
                  translation="Lorsque l&apos;un de vous termine le dernier tashahhud, qu&apos;il cherche refuge auprès d&apos;Allah contre quatre choses : le châtiment de l&apos;Enfer, le châtiment de la tombe, l&apos;épreuve de la vie et de la mort, et le mal de l&apos;épreuve du Dajjal (l&apos;Antéchrist)."
                  source="Sahih Muslim, n°588"
                  grade="sahih"
                  explanation="Ce hadith enseigne une invocation à réciter dans chaque prière, ce qui montre l&apos;importance que le Prophète ﷺ accordait à la protection contre le châtiment de la tombe. Le fait de mentionner le châtiment de la tombe aux côtés de l&apos;Enfer, des épreuves de la vie et du Dajjal indique la gravité de cette épreuve. Les savants des quatre écoles s&apos;accordent sur le fait que cette invocation est au minimum fortement recommandée (mustahabb) dans la prière. Ce hadith confirme la croyance au châtiment de la tombe comme article de foi (&apos;aqida) en islam sunnite."
                />

                <HadithBlock
                  number={6}
                  title="La sourate Al-Mulk protège du châtiment de la tombe"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ سُورَةً مِنَ الْقُرْآنِ ثَلَاثُونَ آيَةً شَفَعَتْ لِرَجُلٍ حَتَّى غُفِرَ لَهُ وَهِيَ تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ"
                  translation="Une sourate du Coran comportant trente versets a intercédé en faveur d&apos;un homme jusqu&apos;à ce qu&apos;il lui soit pardonné. C&apos;est la sourate &laquo; Tabarak alladhi biyadihi al-Mulk &raquo; (La Royauté)."
                  source="Sunan Abu Dawud, n°1400 — Jami&apos; at-Tirmidhi, n°2891"
                  grade="hasan"
                  explanation="Ce hadith met en lumière le mérite de la sourate Al-Mulk (sourate 67), que les savants surnomment &laquo; al-Mani&apos;a &raquo; (la protectrice) ou &laquo; al-Munjiya &raquo; (la salvatrice). D&apos;après plusieurs narrations, le Prophète ﷺ la récitait chaque nuit avant de dormir. Les savants recommandent sa récitation quotidienne comme moyen de protection contre le châtiment de la tombe. Ibn &apos;Abbas rapporte que le Prophète ﷺ a dit : &laquo; C&apos;est la protectrice, la salvatrice, elle sauve du châtiment de la tombe. &raquo; Ce hadith encourage le croyant à intégrer cette sourate dans sa routine quotidienne de dhikr."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la croyance islamique (&apos;aqida), les rites funéraires et les enseignements sur l&apos;au-delà avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Rites funéraires     */}
              {/* ============================== */}
              <section id="rites-funeraires" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les rites funéraires selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a établi des rites funéraires précis qui accompagnent le musulman de son dernier souffle à sa mise en terre. Ces rites allient dignité du défunt, solidarité communautaire et rappel de l&apos;au-delà pour les vivants. Ils constituent une obligation communautaire (fard kifaya) que la communauté musulmane doit impérativement accomplir.
                </p>

                <HadithBlock
                  number={7}
                  title="Hâtez les funérailles"
                  narrator="Abu Hurayra"
                  arabic="أَسْرِعُوا بِالْجِنَازَةِ فَإِنْ تَكُ صَالِحَةً فَخَيْرٌ تُقَدِّمُونَهَا إِلَيْهِ وَإِنْ تَكُ سِوَى ذَلِكَ فَشَرٌّ تَضَعُونَهُ عَنْ رِقَابِكُمْ"
                  translation="Hâtez les funérailles. Si le défunt était vertueux, c&apos;est un bien vers lequel vous le faites avancer. Et s&apos;il en était autrement, c&apos;est un mal que vous déposez de vos épaules."
                  source="Sahih Al-Bukhari, n°1315 — Sahih Muslim, n°944"
                  grade="sahih"
                  explanation="Ce hadith établit le principe de la rapidité dans les funérailles islamiques. Le Prophète ﷺ donne deux raisons : pour le vertueux, c&apos;est un empressement vers la récompense d&apos;Allah ; pour l&apos;autre, c&apos;est une libération pour les porteurs. Les savants en déduisent que retarder les funérailles sans raison valable est blâmable (makruh). L&apos;islam interdit l&apos;embaumement et les longues veillées funéraires qui retardent l&apos;enterrement. Dès que le décès est constaté, le lavage, l&apos;enveloppement, la prière et l&apos;enterrement doivent s&apos;enchaîner rapidement."
                />

                <HadithBlock
                  number={8}
                  title="La prière funéraire et l&apos;invocation pour le défunt"
                  narrator="Awf ibn Malik"
                  arabic="صَلَّى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَلَى جِنَازَةٍ فَحَفِظْتُ مِنْ دُعَائِهِ: اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ"
                  translation="Le Messager d&apos;Allah ﷺ a prié sur un défunt et j&apos;ai retenu de son invocation : &laquo; Ô Allah, pardonne-lui, fais-lui miséricorde, accorde-lui le salut et le pardon, honore son accueil, élargis son entrée (dans la tombe), et lave-le avec l&apos;eau, la neige et la grêle. &raquo;"
                  source="Sahih Muslim, n°963"
                  grade="sahih"
                  explanation="Ce hadith enseigne l&apos;une des invocations les plus complètes pour le défunt lors de la prière funéraire (salat al-janaza). Chaque formule a un sens profond : le pardon efface les péchés, la miséricorde attire la bonté divine, le salut protège des épreuves, l&apos;élargissement de l&apos;entrée fait référence à la tombe qui s&apos;ouvre pour le croyant. La mention de l&apos;eau, la neige et la grêle symbolise la purification totale. Les savants recommandent de mémoriser cette invocation et de la réciter lors de chaque prière funéraire. C&apos;est un acte de bienfaisance envers le défunt et un droit du musulman sur ses frères."
                />

                <HadithBlock
                  number={9}
                  title="Quarante personnes prient sur le défunt"
                  narrator="Ibn &apos;Abbas"
                  arabic="مَا مِنْ رَجُلٍ مُسْلِمٍ يَمُوتُ فَيَقُومُ عَلَى جِنَازَتِهِ أَرْبَعُونَ رَجُلًا لَا يُشْرِكُونَ بِاللَّهِ شَيْئًا إِلَّا شَفَّعَهُمُ اللَّهُ فِيهِ"
                  translation="Il n&apos;est pas un musulman qui meurt et sur lequel prient quarante hommes qui n&apos;associent rien à Allah, sans qu&apos;Allah accepte leur intercession en sa faveur."
                  source="Sahih Muslim, n°948"
                  grade="sahih"
                  explanation="Ce hadith souligne la valeur de la prière funéraire en groupe. Le nombre quarante est mentionné comme seuil auquel l&apos;intercession des priants est acceptée par Allah. Les savants y voient un encouragement à mobiliser la communauté lors des funérailles et à ne pas négliger la prière sur le défunt. Chaque participant qui prie avec sincérité contribue à l&apos;intercession en faveur du mort. Ce hadith illustre la solidarité islamique qui ne s&apos;arrête pas à la mort : le croyant a besoin de ses frères même après avoir quitté ce monde."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths sur les rites funéraires révèlent une vision islamique de la mort empreinte de dignité, de rapidité et de solidarité communautaire. Le défunt musulman a des droits sur sa communauté : le lavage, le linceul, la prière et l&apos;enterrement. Ces rites sont aussi un rappel pour les vivants de leur propre mortalité.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Au-delà et espérance */}
              {/* ============================== */}
              <section id="au-dela-esperance" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;au-delà et l&apos;espérance selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si les hadiths décrivent les épreuves de la mort et de la tombe, ils sont aussi porteurs d&apos;un message profond d&apos;espérance. Le Prophète ﷺ a multiplié les bonnes nouvelles pour ceux qui meurent dans la foi, qui se sacrifient pour la cause d&apos;Allah ou dont les bonnes oeuvres continuent après leur mort. Cette espérance est un pilier de l&apos;équilibre spirituel du musulman face à la mort.
                </p>

                <HadithBlock
                  number={10}
                  title="Trois choses accompagnent le défunt"
                  narrator="Anas ibn Malik"
                  arabic="يَتْبَعُ الْمَيِّتَ ثَلَاثَةٌ فَيَرْجِعُ اثْنَانِ وَيَبْقَى مَعَهُ وَاحِدٌ يَتْبَعُهُ أَهْلُهُ وَمَالُهُ وَعَمَلُهُ فَيَرْجِعُ أَهْلُهُ وَمَالُهُ وَيَبْقَى عَمَلُهُ"
                  translation="Trois choses suivent le mort : sa famille, sa richesse et ses oeuvres. Deux s&apos;en retournent et une seule reste avec lui. Sa famille et sa richesse s&apos;en retournent, et ses oeuvres restent avec lui."
                  source="Sahih Al-Bukhari, n°6514 — Sahih Muslim, n°2960"
                  grade="sahih"
                  explanation="Ce hadith est d&apos;une puissance rhétorique remarquable. Il utilise l&apos;image du cortège funèbre pour illustrer une vérité fondamentale : seules les oeuvres accompagnent le croyant dans la tombe. La famille, aussi aimante soit-elle, retourne à ses occupations. La richesse, aussi abondante soit-elle, reste dans ce monde. Mais chaque prière, chaque aumône, chaque acte de bonté accompagne le défunt et plaide en sa faveur devant Allah. Ce hadith motive le croyant à investir dans les oeuvres pieuses plutôt que dans l&apos;accumulation matérielle."
                />

                <HadithBlock
                  number={11}
                  title="Les oeuvres qui profitent après la mort"
                  narrator="Abu Hurayra"
                  arabic="إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ أَوْ عِلْمٍ يُنْتَفَعُ بِهِ أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ"
                  translation="Lorsque le fils d&apos;Adam meurt, ses oeuvres cessent sauf trois : une aumône continue (sadaqa jariya), une science dont les gens tirent profit, et un enfant pieux qui invoque Allah en sa faveur."
                  source="Sahih Muslim, n°1631"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus cités en islam sur la question de la continuité des oeuvres après la mort. Il définit trois catégories d&apos;actes dont la récompense ne s&apos;arrête pas avec le décès : la sadaqa jariya (construire une mosquée, creuser un puits, fonder un waqf), la science bénéfique (enseigner, écrire, transmettre), et l&apos;enfant pieux dont les invocations profitent à ses parents. Ce hadith encourage le croyant à investir dans ces trois domaines de son vivant. Les savants soulignent que l&apos;éducation pieuse des enfants est elle-même un investissement pour l&apos;au-delà."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths sur l&apos;au-delà rappellent que la mort n&apos;est pas la fin de l&apos;histoire pour le croyant. Les oeuvres sincères continuent de fructifier après la mort, et la miséricorde d&apos;Allah est plus vaste que les péchés des hommes. Pour approfondir les enseignements sur les signes de la fin des temps, consultez notre article sur les{" "}
                  <Link href="/hadith-dajjal-fin-des-temps-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le Dajjal et la fin des temps en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la mort et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur la mort. Leurs réflexions permettent de mieux saisir la portée spirituelle, juridique et éthique de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le rappel de la mort est la plus efficace des exhortations. Si l&apos;homme se rappelait la mort dans l&apos;abondance, il ne se réjouirait pas de ce monde. Et s&apos;il s&apos;en rappelait dans l&apos;adversité, il ne s&apos;en plaindrait pas. Le croyant doit se préparer à la mort comme le voyageur prépare ses provisions.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Al-Ghazali, <em>Ihya &apos;Ulum ad-Din</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le châtiment de la tombe est une réalité confirmée par le Coran, la Sunna et le consensus des savants. Le croyant doit y croire fermement et chercher refuge auprès d&apos;Allah contre cette épreuve dans chaque prière, comme l&apos;a enseigné le Prophète ﷺ. Nier le châtiment de la tombe, c&apos;est contredire les textes explicites.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La mort est une porte, et chacun y entrera. Le sage n&apos;est pas celui qui craint la mort, mais celui qui s&apos;y prépare. Les oeuvres sont les provisions du voyage, et la tombe est la première étape de l&apos;au-delà. Celui qui la réussit, ce qui suit sera plus aisé. Et celui qui y échoue, ce qui suit sera plus terrible encore.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>At-Tibyan fi Aqsam al-Quran</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur la mort ne sont pas de simples récits : ils fondent une discipline théologique complète (&apos;aqida al-akhira) qui touche à la foi, au droit funéraire (<em>fiqh al-jana&apos;iz</em>) et à la spiritualité. Chaque hadith cité dans cet article est utilisé par les fuqaha et les théologiens pour déduire des règles pratiques et des enseignements de foi.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour la vie spirituelle du musulman face à la réalité de la mort :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se rappeler la mort quotidiennement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le rappel de la mort n&apos;est pas morbide : c&apos;est un outil de lucidité spirituelle qui pousse le croyant à se détacher des illusions de ce monde et à se concentrer sur l&apos;essentiel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pratiquer la muhasaba (auto-évaluation)
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le croyant intelligent est celui qui se demande des comptes avant d&apos;être interrogé. Chaque soir, faire le bilan de sa journée et se repentir de ses manquements prépare à la rencontre avec Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Chercher refuge contre le châtiment de la tombe
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a enseigné de chercher refuge auprès d&apos;Allah contre le châtiment de la tombe dans chaque prière. Cette invocation doit devenir un réflexe quotidien pour le croyant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Investir dans les oeuvres pérennes
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La sadaqa jariya, la science bénéfique et l&apos;éducation pieuse des enfants sont les trois investissements qui continuent de fructifier après la mort. Le croyant sage y consacre une part de ses ressources.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Participer aux rites funéraires
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Assister aux funérailles, prier sur le défunt et accompagner la famille sont des actes de solidarité récompensés. Le Prophète ﷺ a encouragé la participation massive aux prières funéraires pour l&apos;intercession en faveur du mort.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Réciter la sourate Al-Mulk chaque nuit
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les hadiths attribuent à la sourate Al-Mulk un pouvoir d&apos;intercession et de protection contre le châtiment de la tombe. Sa récitation quotidienne est une pratique prophétique à intégrer dans sa routine spirituelle.
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
                  description="Comprenez les hadiths sur la mort et l&apos;au-delà dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la patience et les épreuves en islam"
                  description="Les enseignements prophétiques sur la patience face aux difficultés et la récompense promise aux endurants."
                  href="/hadith-patience-epreuves-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le Dajjal et la fin des temps en islam"
                  description="Les signes majeurs de la fin des temps et les épreuves du Dajjal selon les hadiths authentiques."
                  href="/hadith-dajjal-fin-des-temps-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
