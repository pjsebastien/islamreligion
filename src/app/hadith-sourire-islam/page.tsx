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
    "Hadiths sur le sourire en islam : les enseignements prophétiques sur la joie",
  description:
    "Découvrez les hadiths authentiques sur le sourire en islam : le sourire comme sadaqa, le visage souriant du Prophète ﷺ, la douceur et la joie dans la Sunna. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur le sourire en islam : les enseignements prophétiques sur la joie",
    description:
      "Les hadiths authentiques sur le sourire en islam : la charité du sourire, le caractère souriant du Prophète ﷺ et la douceur dans les relations selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-sourire-islam",
    images: [
      {
        url: "/images/coran-calligraphie-illustration-vintage.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-sourire-islam",
  },
};

const tocItems = [
  { id: "sourire-sadaqa", label: "Le sourire est une sadaqa" },
  { id: "sourire-prophete", label: "Le sourire du Prophète ﷺ" },
  { id: "visage-souriant", label: "Accueillir son frère avec un visage souriant" },
  { id: "douceur-gentillesse", label: "La douceur et la gentillesse" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Le sourire est-il vraiment considéré comme une aumône en islam ?",
    answer:
      "Oui, le Prophète \u2018alayhi salatu wa salam a explicitement déclaré que sourire à son frère est une sadaqa (aumône). Ce hadith est rapporté par at-Tirmidhi (n\u00B01956) et authentifié. Le sourire est ainsi une forme de charité accessible à tous, sans condition de richesse. Les savants expliquent que cette sadaqa profite à la fois à celui qui sourit (récompense divine) et à celui qui reçoit le sourire (réconfort et joie).",
  },
  {
    question:
      "Comment le Prophète Muhammad ﷺ souriait-il au quotidien ?",
    answer:
      "Les compagnons décrivent le Prophète ﷺ comme la personne la plus souriante. Abdallah ibn al-Harith rapporte qu\u2019il n\u2019a jamais vu quelqu\u2019un sourire plus que le Messager d\u2019Allah (Tirmidhi 3641). Jarir ibn Abdillah affirme que le Prophète ﷺ ne l\u2019a jamais vu sans lui sourire (Bukhari 3035, Muslim 2475). Son sourire était une expression de douceur, de bienveillance et d\u2019accueil envers tous.",
  },
  {
    question:
      "Quelle est la différence entre le sourire et le rire dans la Sunna ?",
    answer:
      "Le Prophète ﷺ souriait fréquemment mais riait rarement aux éclats. Son rire consistait le plus souvent en un sourire large (tabassum). Aisha rapporte que le Prophète ﷺ ne riait pas de manière exagérée, au point qu\u2019on voyait sa luette. Les savants distinguent le sourire (tabassum), qui est une sunna recommandée, du rire excessif, qui est déconseillé car il durcit le c\u0153ur.",
  },
  {
    question:
      "Sourire à un inconnu est-il récompensé en islam ?",
    answer:
      "Oui, les hadiths sur le sourire ne se limitent pas aux proches. Le hadith \u00AB ton sourire à ton frère est une sadaqa \u00BB englobe tout musulman. De plus, le hadith \u00AB ne méprise aucune bonne action, ne serait-ce que de rencontrer ton frère avec un visage souriant \u00BB (Muslim 2626) encourage la bienveillance envers tous, y compris les personnes que l\u2019on croise pour la première fois.",
  },
  {
    question:
      "Quels sont les bienfaits spirituels du sourire en islam ?",
    answer:
      "Le sourire en islam cumule plusieurs bienfaits spirituels : il est compté comme une sadaqa et inscrit parmi les bonnes actions, il renforce les liens de fraternité entre musulmans, il adoucit les c\u0153urs et dissipe les rancunes, et il est une imitation de la Sunna du Prophète ﷺ qui était constamment souriant. Les savants ajoutent que le sourire sincère reflète un c\u0153ur apaisé et reconnaissant envers Allah.",
  },
  {
    question:
      "Le sourire fait-il partie du bon comportement (husn al-khuluq) en islam ?",
    answer:
      "Absolument. Le bon comportement (husn al-khuluq) est l\u2019un des piliers de la foi selon les hadiths, et le sourire en est une manifestation directe. Le Prophète ﷺ a dit que la douceur embellit toute chose (Muslim 2594). Les savants comme l\u2019imam al-Ghazali classent le visage souriant parmi les signes extérieurs du bon caractère, aux c\u00F4tés de la parole douce et de la générosité.",
  },
  {
    question:
      "Peut-on sourire pendant la prière en islam ?",
    answer:
      "Les savants distinguent le sourire du rire pendant la prière. Un léger sourire n\u2019invalide pas la prière selon la majorité des juristes (malikites, shafiites, hanbalites). En revanche, le rire à voix haute invalide la prière selon le consensus des savants. Toutefois, il est recommandé de maintenir le recueillement (khushu\u2019) pendant la prière et d\u2019éviter ce qui pourrait en distraire.",
  },
  {
    question:
      "Pourquoi le Prophète ﷺ accordait-il autant d&apos;importance au sourire ?",
    answer:
      "Le Prophète ﷺ voyait dans le sourire un moyen simple et universel de faire le bien. Dans un hadith, il enseigne que chaque bonne action est une sadaqa (Bukhari 6021), et le sourire en fait partie. Il comprenait que la joie et la bienveillance renforcent la communauté musulmane et facilitent la da\u2019wa (invitation à l\u2019islam). Son propre sourire permanent était un moyen d\u2019attirer les c\u0153urs vers le message divin.",
  },
];

export default function HadithSourireIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-sourire-islam/#article",
        headline:
          "Hadiths sur le sourire en islam : les enseignements prophétiques sur la joie",
        description:
          "Découvrez les hadiths authentiques sur le sourire en islam : le sourire comme sadaqa, le visage souriant du Prophète ﷺ et la douceur dans les relations.",
        image: "/images/coran-calligraphie-illustration-vintage.jpg",
        datePublished: "2026-05-13",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-sourire-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-sourire-islam/#breadcrumb",
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
            name: "Hadiths sur le sourire",
            item: "https://www.islamreligion.fr/hadith-sourire-islam",
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
          title="Hadiths sur le sourire en islam"
          subtitle="Les enseignements prophétiques sur le sourire comme acte de charité, la douceur du Prophète ﷺ et la joie comme expression de la foi selon la Sunna authentique."
          imageSrc="/images/coran-calligraphie-illustration-vintage.jpg"
          imageAlt="Hadiths sur le sourire en islam, enseignements prophétiques"
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
                  Hadiths sur le sourire
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
                    Le sourire est une sadaqa (aumône) accessible à tous : sourire à son frère est un acte de charité récompensé par Allah.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ était la personne la plus souriante : ses compagnons témoignent qu&apos;il ne les rencontrait jamais sans un sourire.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Accueillir les gens avec un visage radieux est une bonne action que le musulman ne doit jamais mépriser, aussi simple soit-elle.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La douceur embellit toute chose : le Prophète ﷺ enseigne que la gentillesse dans les affaires est toujours préférable à la rudesse.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Le sourire sadaqa    */}
              {/* ============================== */}
              <section id="sourire-sadaqa" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le sourire est une sadaqa (aumône) en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;un des enseignements les plus remarquables de l&apos;islam est que la charité ne se limite pas aux dons matériels. Le Prophète ﷺ a élargi la notion de sadaqa à des gestes simples du quotidien, et le sourire en est l&apos;exemple le plus éloquent. Ces hadiths montrent que chaque musulman, quelle que soit sa condition, peut accomplir des actes de charité.
                </p>

                <HadithBlock
                  number={1}
                  title="Ton sourire à ton frère est une sadaqa"
                  narrator="Abu Dharr"
                  arabic="تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ"
                  translation="Ton sourire à ton frère est pour toi une aumône (sadaqa)."
                  source="Jami&apos; at-Tirmidhi, n°1956"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus célèbres sur le sourire en islam. Le Prophète ﷺ y enseigne que le simple fait de sourire à un frère musulman est comptabilisé comme une aumône auprès d&apos;Allah. Ce hadith fait partie d&apos;un ensemble plus long dans lequel le Prophète ﷺ énumère plusieurs formes de sadaqa non matérielles : ordonner le bien, interdire le mal, guider un égaré, enlever un obstacle du chemin. Le sourire est cité en premier, soulignant son importance et son accessibilité."
                />

                <HadithBlock
                  number={2}
                  title="Toute bonne action est une sadaqa"
                  narrator="Jabir ibn Abdillah"
                  arabic="كُلُّ مَعْرُوفٍ صَدَقَةٌ"
                  translation="Toute bonne action est une aumône (sadaqa)."
                  source="Sahih Al-Bukhari, n°6021"
                  grade="sahih"
                  explanation="Ce hadith pose un principe général dont le sourire est une application directe. Le terme &laquo; ma&apos;ruf &raquo; désigne tout ce qui est reconnu comme bon et convenable. Les savants expliquent que ce hadith englobe toute forme de bienfaisance, de la parole douce au sourire, en passant par l&apos;aide physique. Il enseigne que la sadaqa ne se réduit pas à l&apos;argent : chaque geste de bonté, aussi modeste soit-il, est inscrit comme une aumône dans la balance des bonnes actions."
                />

                <HadithBlock
                  number={3}
                  title="Ne méprise aucune bonne action"
                  narrator="Abu Dharr"
                  arabic="لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا وَلَوْ أَنْ تَلْقَى أَخَاكَ بِوَجْهٍ طَلْقٍ"
                  translation="Ne méprise aucune bonne action, ne serait-ce que de rencontrer ton frère avec un visage souriant."
                  source="Sahih Muslim, n°2626"
                  grade="sahih"
                  explanation="Ce hadith est fondamental car il interdit de sous-estimer la valeur des petits gestes. Le Prophète ﷺ cite le visage souriant comme l&apos;exemple même de l&apos;action que l&apos;on pourrait juger insignifiante mais qui a une grande valeur auprès d&apos;Allah. L&apos;expression &laquo; wajh talq &raquo; (visage souriant, ouvert) désigne une attitude globale d&apos;accueil et de bienveillance. Les savants soulignent que ce hadith réfute la mentalité du &laquo; ce n&apos;est rien &raquo; : en islam, aucun bien n&apos;est négligeable."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths établissent clairement que le sourire est un acte d&apos;adoration en islam. Il ne s&apos;agit pas d&apos;une simple politesse sociale, mais d&apos;un geste dont la récompense est inscrite auprès d&apos;Allah. Pour approfondir le thème de la charité dans la Sunna, consultez notre article sur les{" "}
                  <Link href="/hadith-sadaqa-charite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la sadaqa et la charité en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Sourire du Prophète  */}
              {/* ============================== */}
              <section id="sourire-prophete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le sourire du Prophète ﷺ : témoignages des compagnons
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les compagnons du Prophète ﷺ ont transmis de nombreux témoignages sur son caractère souriant. Loin de l&apos;image austère que certains pourraient imaginer, le Messager d&apos;Allah ﷺ était décrit comme la personne la plus souriante et la plus accueillante. Ces descriptions constituent un modèle pour tout musulman.
                </p>

                <HadithBlock
                  number={4}
                  title="Je n&apos;ai jamais vu quelqu&apos;un sourire plus que le Prophète ﷺ"
                  narrator="Abdallah ibn al-Harith"
                  arabic="مَا رَأَيْتُ أَحَدًا أَكْثَرَ تَبَسُّمًا مِنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ"
                  translation="Je n&apos;ai jamais vu quelqu&apos;un sourire plus que le Messager d&apos;Allah ﷺ."
                  source="Jami&apos; at-Tirmidhi, n°3641"
                  grade="sahih"
                  explanation="Ce témoignage d&apos;Abdallah ibn al-Harith est une description directe du caractère prophétique. Le compagnon utilise une formule superlative absolue : il n&apos;a jamais vu, parmi tous les gens qu&apos;il a côtoyés, quelqu&apos;un qui souriait davantage que le Prophète ﷺ. Cette description réfute l&apos;idée que la piété impliquerait la sévérité ou la morosité. Au contraire, le sourire permanent du Prophète ﷺ était l&apos;expression d&apos;un c&oelig;ur serein et d&apos;une confiance absolue en Allah."
                />

                <HadithBlock
                  number={5}
                  title="Le Prophète ﷺ ne m&apos;a jamais vu sans me sourire"
                  narrator="Jarir ibn Abdillah"
                  arabic="مَا حَجَبَنِي رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مُنْذُ أَسْلَمْتُ، وَلَا رَآنِي إِلَّا تَبَسَّمَ فِي وَجْهِي"
                  translation="Le Messager d&apos;Allah ﷺ ne m&apos;a jamais refusé l&apos;accès depuis que j&apos;ai embrassé l&apos;islam, et il ne m&apos;a jamais vu sans sourire à mon visage."
                  source="Sahih Al-Bukhari, n°3035 — Sahih Muslim, n°2475"
                  grade="sahih"
                  explanation="Ce hadith de Jarir ibn Abdillah révèle deux qualités prophétiques : l&apos;accessibilité et le sourire. Le Prophète ﷺ ne refusait pas de recevoir ses compagnons et les accueillait toujours avec un sourire. Jarir insiste sur le caractère systématique de ce sourire (&laquo; jamais vu sans sourire &raquo;), ce qui montre que le sourire du Prophète ﷺ n&apos;était pas occasionnel mais une habitude constante. Ce hadith est rapporté dans les deux Sahih, soulignant sa solidité."
                />

                <HadithBlock
                  number={6}
                  title="La description du sourire du Prophète ﷺ"
                  narrator="Aisha"
                  arabic="مَا رَأَيْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مُسْتَجْمِعًا ضَاحِكًا حَتَّى أَرَى مِنْهُ لَهَوَاتِهِ، إِنَّمَا كَانَ يَتَبَسَّمُ"
                  translation="Je n&apos;ai jamais vu le Messager d&apos;Allah ﷺ rire aux éclats au point que l&apos;on voie sa luette. Il se contentait de sourire (tabassum)."
                  source="Sahih Al-Bukhari, n°6092 — Sahih Muslim, n°899"
                  grade="sahih"
                  explanation="Ce hadith d&apos;Aisha précise la nature du sourire prophétique. Le Prophète ﷺ ne riait pas de manière exagérée ou bruyante : son expression de joie était le tabassum, un sourire doux et mesuré. Les savants y voient un modèle d&apos;équilibre : la joie et la bonne humeur sont encouragées, mais la mesure et la dignité sont préservées. Ce hadith n&apos;interdit pas le rire, mais montre que le Prophète ﷺ privilégiait la retenue et la sérénité."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces témoignages des compagnons dressent le portrait d&apos;un Prophète ﷺ profondément humain, accessible et joyeux. Son sourire était un outil de da&apos;wa (invitation à l&apos;islam) qui attirait les c&oelig;urs avant même les paroles. Ce comportement s&apos;inscrit dans le cadre plus large du bon caractère prophétique, que nous détaillons dans notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Visage souriant              */}
              {/* ====================================== */}
              <section id="visage-souriant" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Accueillir son frère avec un visage souriant
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le sourire en islam n&apos;est pas un acte isolé : il s&apos;inscrit dans une éthique globale d&apos;accueil et de bienveillance envers autrui. Le Prophète ﷺ a enseigné que le visage souriant est un moyen de renforcer les liens de fraternité et de répandre la joie au sein de la communauté musulmane.
                </p>

                <HadithBlock
                  number={7}
                  title="Répands le salam et offre la nourriture"
                  narrator="Abdallah ibn Amr"
                  arabic="أَطْعِمُوا الطَّعَامَ وَأَفْشُوا السَّلَامَ وَصِلُوا الْأَرْحَامَ وَصَلُّوا بِاللَّيْلِ وَالنَّاسُ نِيَامٌ تَدْخُلُوا الْجَنَّةَ بِسَلَامٍ"
                  translation="Nourrissez les gens, répandez le salam, maintenez les liens de parenté et priez la nuit pendant que les gens dorment, vous entrerez au Paradis en paix."
                  source="Jami&apos; at-Tirmidhi, n°1855"
                  grade="sahih"
                  explanation="Ce hadith rassemble les actes de bienveillance sociale qui incluent le sourire. Répandre le salam, c&apos;est saluer les gens avec un visage avenant et une parole de paix. Nourrir les gens et maintenir les liens de parenté sont des expressions de générosité qui s&apos;accompagnent naturellement du sourire. Les savants soulignent que ces actes, combinés à la prière nocturne, ouvrent les portes du Paradis, montrant que la dimension sociale de l&apos;islam est indissociable de la dimension spirituelle."
                />

                <HadithBlock
                  number={8}
                  title="La parole douce est une sadaqa"
                  narrator="Abu Hurayra"
                  arabic="وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ"
                  translation="Et la bonne parole est une aumône (sadaqa)."
                  source="Sahih Al-Bukhari, n°2989 — Sahih Muslim, n°1009"
                  grade="sahih"
                  explanation="Ce hadith complète celui du sourire : si le sourire est une sadaqa, la parole douce en est une aussi. Le Prophète ﷺ associe le sourire et la bonne parole comme deux expressions complémentaires de la bienveillance. Un visage souriant accompagné d&apos;une parole aimable constitue l&apos;accueil idéal en islam. Les savants expliquent que la &laquo; kalima tayyiba &raquo; inclut le salam, les paroles de réconfort, les conseils bienveillants et même le dhikr (évocation d&apos;Allah)."
                />

                <HadithBlock
                  number={9}
                  title="Celui qui croit en Allah et au Jour dernier, qu&apos;il dise du bien"
                  narrator="Abu Hurayra"
                  arabic="مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ"
                  translation="Que celui qui croit en Allah et au Jour dernier dise du bien ou qu&apos;il se taise."
                  source="Sahih Al-Bukhari, n°6018 — Sahih Muslim, n°47"
                  grade="sahih"
                  explanation="Ce hadith fondamental lie la foi à la qualité de la parole. Le silence est préférable à la parole nuisible, mais la bonne parole accompagnée d&apos;un sourire est encore meilleure. Les savants associent ce hadith à ceux sur le sourire pour montrer un ensemble cohérent : le musulman doit avoir un visage avenant (sourire), une parole bienveillante (kalima tayyiba) et, s&apos;il ne peut dire du bien, le silence. Ce triptyque constitue l&apos;éthique relationnelle du croyant."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Le sourire s&apos;accompagne donc du salam, de la bonne parole et de la générosité. Ces actes forment un tout indissociable dans la Sunna. Pour approfondir le sujet de la salutation en islam, consultez notre article sur les{" "}
                  <Link href="/hadith-salam-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le salam en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le hadith, le bon comportement et la spiritualité islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Douceur gentillesse  */}
              {/* ============================== */}
              <section id="douceur-gentillesse" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La douceur et la gentillesse dans la Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le sourire est une manifestation de la douceur (<em>rifq</em>) que le Prophète ﷺ a élevée au rang de vertu essentielle. Les hadiths suivants montrent que la gentillesse n&apos;est pas une faiblesse, mais une force qui embellit les actions et les relations du musulman.
                </p>

                <HadithBlock
                  number={10}
                  title="La douceur embellit toute chose"
                  narrator="Aisha"
                  arabic="إِنَّ الرِّفْقَ لَا يَكُونُ فِي شَيْءٍ إِلَّا زَانَهُ وَلَا يُنْزَعُ مِنْ شَيْءٍ إِلَّا شَانَهُ"
                  translation="La douceur n&apos;est présente dans une chose sans l&apos;embellir, et elle n&apos;est retirée d&apos;une chose sans l&apos;enlaidir."
                  source="Sahih Muslim, n°2594"
                  grade="sahih"
                  explanation="Ce hadith établit un principe universel : la douceur (rifq) est un facteur d&apos;embellissement dans tous les domaines de la vie. Que ce soit dans la parole, dans l&apos;éducation des enfants, dans les transactions commerciales ou dans les relations conjugales, la douceur améliore toute chose. À l&apos;inverse, la rudesse et la dureté enlaidissent et détériorent. Le sourire est l&apos;une des expressions les plus visibles de cette douceur. Les savants citent ce hadith pour montrer que la gentillesse est une stratégie efficace, pas seulement une valeur morale."
                />

                <HadithBlock
                  number={11}
                  title="Allah aime la douceur en toute chose"
                  narrator="Aisha"
                  arabic="إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الْأَمْرِ كُلِّهِ"
                  translation="Certes, Allah est Doux et Il aime la douceur en toute chose."
                  source="Sahih Al-Bukhari, n°6927 — Sahih Muslim, n°2593"
                  grade="sahih"
                  explanation="Ce hadith révèle que la douceur est un attribut divin (ar-Rafiq) et qu&apos;Allah aime retrouver cette qualité chez Ses serviteurs. Le Prophète ﷺ a prononcé ces paroles dans un contexte où Aisha avait réagi avec fermeté envers des personnes impolies. Il lui a enseigné que la réponse douce est toujours préférable. Ce hadith est l&apos;un des fondements du bon comportement en islam : être doux, c&apos;est imiter un attribut d&apos;Allah et obtenir Son amour."
                />

                <HadithBlock
                  number={12}
                  title="Allah accorde à la douceur ce qu&apos;Il n&apos;accorde pas à la violence"
                  narrator="Aisha"
                  arabic="إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ وَيُعْطِي عَلَى الرِّفْقِ مَا لَا يُعْطِي عَلَى الْعُنْفِ وَمَا لَا يُعْطِي عَلَى مَا سِوَاهُ"
                  translation="Certes, Allah est Doux, Il aime la douceur et Il accorde à la douceur ce qu&apos;Il n&apos;accorde pas à la violence, et ce qu&apos;Il n&apos;accorde à rien d&apos;autre."
                  source="Sahih Muslim, n°2593"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en ajoutant une dimension pratique : la douceur produit des résultats que la violence ne peut atteindre. Le Prophète ﷺ enseigne que la gentillesse est non seulement une vertu morale, mais aussi la méthode la plus efficace pour obtenir ce que l&apos;on souhaite, qu&apos;il s&apos;agisse de convaincre, d&apos;éduquer ou de résoudre un conflit. Le sourire, en tant qu&apos;expression première de la douceur, ouvre des portes que la rudesse ferme définitivement."
                />

                <HadithBlock
                  number={13}
                  title="Introduire la joie dans le c&oelig;ur d&apos;un musulman"
                  narrator="Ibn Umar"
                  arabic="أَحَبُّ النَّاسِ إِلَى اللَّهِ أَنْفَعُهُمْ لِلنَّاسِ وَأَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ سُرُورٌ تُدْخِلُهُ عَلَى مُسْلِمٍ"
                  translation="Les gens les plus aimés d&apos;Allah sont les plus utiles aux gens, et les actions les plus aimées d&apos;Allah sont la joie que tu introduis dans le c&oelig;ur d&apos;un musulman."
                  source="Al-Mu&apos;jam al-Kabir de Tabarani, n°13646"
                  grade="hasan"
                  explanation="Ce hadith place la joie procurée à autrui parmi les actes les plus aimés d&apos;Allah. Le sourire est le moyen le plus immédiat d&apos;introduire cette joie (surur) dans le c&oelig;ur d&apos;un frère ou d&apos;une s&oelig;ur en islam. Les savants soulignent que ce hadith valorise l&apos;utilité sociale du croyant : celui qui réjouit les c&oelig;urs, qui soulage les peines et qui aide les gens est parmi les plus aimés d&apos;Allah. Le sourire, la bonne parole et le service sont les instruments de cette joie."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le sourire et la douceur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont commenté les hadiths sur le sourire et la douceur, en soulignant leur portée spirituelle et sociale. Leurs paroles éclairent la sagesse profonde de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le sourire est le signe extérieur d&apos;un c&oelig;ur apaisé. Celui qui sourit sincèrement témoigne de sa gratitude envers Allah et de sa bienveillance envers Ses créatures. C&apos;est pourquoi le Prophète ﷺ en a fait une sadaqa : il purifie le c&oelig;ur de celui qui le donne et réchauffe le c&oelig;ur de celui qui le reçoit.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam al-Ghazali, <em>Ihya Ulum ad-Din</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith &laquo; ne méprise aucune bonne action &raquo; est un principe fondamental. Le sourire et le visage avenant sont des formes de ma&apos;ruf (bien) que chacun peut offrir. Celui qui méprise ces petits actes risque de se priver de montagnes de récompenses auprès d&apos;Allah.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La douceur est la clé de tout bien. Le Prophète ﷺ a réuni dans sa personne le sourire permanent, la parole douce et la patience face aux offenses. Celui qui veut suivre la Sunna doit commencer par adoucir son visage et sa langue, car ce sont les premières choses que les gens perçoivent.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Madarij as-Salikin</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que le sourire, loin d&apos;être un sujet secondaire, est au c&oelig;ur de l&apos;éthique islamique du comportement. Les savants le rattachent à la purification du c&oelig;ur, à la da&apos;wa et à l&apos;imitation du modèle prophétique.
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
                        Faire du sourire une habitude quotidienne
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le sourire est la sadaqa la plus accessible. En faire une habitude, c&apos;est multiplier ses bonnes actions sans effort ni dépense. Le Prophète ﷺ souriait en permanence : suivre son exemple, c&apos;est transformer chaque rencontre en acte d&apos;adoration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais mépriser les petits gestes de bonté
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Un sourire, une parole douce, un salam chaleureux : ces gestes semblent modestes mais pèsent lourd dans la balance des bonnes actions. Le Prophète ﷺ a interdit de les sous-estimer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Privilégier la douceur dans toutes les situations
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Allah accorde à la douceur ce qu&apos;Il n&apos;accorde pas à la violence. Face à un conflit, une difficulté ou une provocation, la réponse douce et souriante est toujours plus efficace et plus récompensée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Répandre la joie autour de soi
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Introduire la joie dans le c&oelig;ur d&apos;un musulman est parmi les actes les plus aimés d&apos;Allah. Le sourire, la bonne parole et le service désintéressé sont les moyens les plus simples d&apos;y parvenir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Associer le sourire au salam et à la bonne parole
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le sourire seul est une sadaqa, mais associé au salam et à la parole bienveillante, il devient un accueil complet qui renforce les liens de fraternité et attire les c&oelig;urs vers le bien.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Voir le sourire comme un acte de da&apos;wa
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le sourire du Prophète ﷺ attirait les c&oelig;urs vers l&apos;islam. Un musulman souriant donne une image positive de sa religion et invite les gens à s&apos;intéresser à la foi par son seul comportement.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le sourire et la douceur dans leur langue originale et approfondissez votre connaissance de la Sunna."
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
                  description="Découvrez les enseignements prophétiques sur le caractère, la patience et les bonnes manières selon la Sunna."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths sur la sadaqa et la charité en islam"
                  description="Toutes les formes de charité en islam : le don matériel, le sourire, la bonne parole et le service selon les hadiths."
                  href="/hadith-sadaqa-charite-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths sur le salam en islam"
                  description="L&apos;importance de la salutation de paix, ses règles et ses mérites selon la Sunna du Prophète ﷺ."
                  href="/hadith-salam-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
