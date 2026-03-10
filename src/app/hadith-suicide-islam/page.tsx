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
    "Hadiths sur le suicide en islam : ce que disent les textes avec compassion",
  description:
    "Découvrez les hadiths authentiques sur le suicide en islam : sacralité de la vie, interdiction, patience dans les épreuves, espoir en la miséricorde divine. Approche bienveillante et nuancée.",
  openGraph: {
    title:
      "Hadiths sur le suicide en islam : ce que disent les textes avec compassion",
    description:
      "Les hadiths authentiques sur le suicide en islam : sacralité de la vie, patience, espoir en Allah, invocations contre la détresse. Une lecture bienveillante et nuancée.",
    url: "https://www.islamreligion.fr/hadith-suicide-islam",
    images: [
      {
        url: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-suicide-islam",
  },
};

const tocItems = [
  { id: "note-importante", label: "Note importante" },
  { id: "sacralite-vie", label: "La sacralité de la vie" },
  { id: "interdiction-suicide", label: "L\u2019interdiction du suicide" },
  { id: "patience-epreuves", label: "Patience dans les épreuves" },
  { id: "espoir-misericorde", label: "Espoir en la miséricorde divine" },
  { id: "doua-detresse", label: "Invocations contre la détresse" },
  { id: "soin-islam", label: "Se soigner fait partie de l\u2019islam" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Que dit l\u2019islam sur le suicide ?",
    answer:
      "L\u2019islam considère la vie comme un dépôt sacré (amana) confié par Allah. Le suicide est interdit car seul Allah a le droit de reprendre la vie qu\u2019Il a donnée. Cependant, les savants soulignent que la personne en détresse psychologique extrême peut voir sa responsabilité atténuée, car Allah ne juge que selon la capacité de chacun. L\u2019islam appelle à la compassion envers ceux qui souffrent et encourage à chercher de l\u2019aide.",
  },
  {
    question:
      "Une personne qui se suicide ira-t-elle en enfer pour l\u2019éternité ?",
    answer:
      "La position de la majorité des savants sunnites (Ahl as-Sunna wal-Jama\u2019a) est qu\u2019un musulman qui commet un péché majeur, y compris le suicide, ne sort pas de l\u2019islam et n\u2019est pas condamné à l\u2019enfer éternel. Son sort relève de la volonté d\u2019Allah : Il peut lui pardonner par Sa miséricorde ou le châtier temporairement. Les hadiths d\u2019avertissement visent à dissuader, non à porter un jugement définitif sur les individus.",
  },
  {
    question:
      "Peut-on faire la prière funéraire (salat al-janaza) pour une personne qui s\u2019est suicidée ?",
    answer:
      "La majorité des savants, dont les quatre écoles de jurisprudence (hanafite, malikite, shafi\u2019ite et hanbalite), permettent la prière funéraire pour une personne qui s\u2019est suicidée, car elle reste musulmane. Certains récits indiquent que le Prophète s\u2019est abstenu de prier sur un cas particulier à titre d\u2019avertissement, mais il n\u2019a pas interdit aux Compagnons de le faire.",
  },
  {
    question:
      "Comment l\u2019islam aborde-t-il la santé mentale ?",
    answer:
      "L\u2019islam encourage la recherche de soins pour toute maladie, y compris les maladies mentales. Le Prophète a dit : \u00ab Serviteurs d\u2019Allah, soignez-vous, car Allah n\u2019a pas créé de maladie sans en créer aussi le remède \u00bb (Abu Dawud 3855). Se soigner est un acte de confiance en Allah, non un manque de foi. Les troubles psychologiques sont reconnus comme de véritables maladies qui nécessitent un accompagnement professionnel.",
  },
  {
    question:
      "Quelles invocations le Prophète recommandait-il contre l\u2019angoisse ?",
    answer:
      "Le Prophète a enseigné plusieurs invocations contre l\u2019angoisse et la tristesse. Parmi les plus connues : \u00ab Allahumma inni a\u2019udhu bika min al-hammi wal-hazan \u00bb (Ô Allah, je cherche refuge auprès de Toi contre le souci et la tristesse). Il a également recommandé la sourate Al-Fatiha, les dernières sourates du Coran, et le dhikr régulier comme moyens d\u2019apaiser le c\u0153ur.",
  },
  {
    question:
      "Comment aider un proche musulman en détresse psychologique ?",
    answer:
      "L\u2019islam encourage fortement l\u2019entraide et le soutien communautaire. Il faut écouter sans juger, rappeler la miséricorde d\u2019Allah, accompagner la personne vers un professionnel de santé mentale et maintenir un lien régulier. Le Prophète a dit que soulager la détresse d\u2019un croyant fait partie des meilleures actions. Ne jamais minimiser la souffrance de l\u2019autre ni lui dire simplement de \u00ab prier davantage \u00bb.",
  },
  {
    question:
      "Le verset \u00ab Allah ne charge aucune âme au-delà de sa capacité \u00bb signifie-t-il que la dépression est un manque de foi ?",
    answer:
      "Absolument pas. Ce verset (Coran 2:286) concerne les obligations religieuses, non les épreuves de la vie. La dépression est une maladie qui peut toucher n\u2019importe qui, y compris les plus pieux. Les prophètes eux-mêmes ont connu une tristesse intense : Ya\u2019qub (Jacob) a pleuré jusqu\u2019à perdre la vue par chagrin pour son fils Yusuf (Joseph). La souffrance psychologique n\u2019est en aucun cas un signe de faiblesse de foi.",
  },
  {
    question:
      "Où trouver de l\u2019aide en cas de pensées suicidaires ?",
    answer:
      "En France, vous pouvez contacter le 3114 (numéro national de prévention du suicide, disponible 24h/24). Vous pouvez également appeler SOS Amitié au 09 72 39 40 50. Ces lignes sont gratuites, confidentielles et accessibles à tous. N\u2019hésitez jamais à demander de l\u2019aide : c\u2019est un acte de courage, pas de faiblesse.",
  },
];

export default function HadithSuicideIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-suicide-islam/#article",
        headline:
          "Hadiths sur le suicide en islam : ce que disent les textes avec compassion",
        description:
          "Découvrez les hadiths authentiques sur le suicide en islam : sacralité de la vie, interdiction, patience dans les épreuves, espoir en la miséricorde divine.",
        image: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        datePublished: "2026-05-12",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-suicide-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-suicide-islam/#breadcrumb",
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
            name: "Hadiths sur le suicide",
            item: "https://www.islamreligion.fr/hadith-suicide-islam",
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
          title="Hadiths sur le suicide en islam"
          subtitle="Une approche bienveillante des enseignements prophétiques sur la sacralité de la vie, la patience dans les épreuves et l&apos;espoir en la miséricorde d&apos;Allah."
          imageSrc="/images/doua-mains-rayons-motifs-islamiques.jpg"
          imageAlt="Mains levées en invocation avec motifs islamiques et rayons de lumière"
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
                  Hadiths sur le suicide
                </span>
              </nav>

              {/* Note importante - Numéro d'aide */}
              <section id="note-importante" className="scroll-mt-24">
                <div className="mb-10 rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
                  <p className="text-base font-bold text-primary">
                    Si vous ou un proche traversez une crise
                  </p>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Cet article aborde un sujet sensible. Si vous avez des pensées suicidaires ou si vous connaissez quelqu&apos;un en détresse, veuillez contacter immédiatement le <strong>3114</strong> (numéro national de prévention du suicide, gratuit et disponible 24h/24) ou <strong>SOS Amitié au 09 72 39 40 50</strong>. Demander de l&apos;aide est un acte de courage et de sagesse, parfaitement compatible avec la foi.
                  </p>
                </div>
              </section>

              {/* A retenir */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  À retenir
                </p>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La vie est un dépôt sacré (<em>amana</em>) confié par Allah : la préserver est une obligation religieuse.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;islam interdit le suicide, mais les savants rappellent que la miséricorde d&apos;Allah dépasse tout péché et que le jugement final appartient à Lui seul.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Se soigner, y compris pour les troubles psychologiques, est un acte encouragé par le Prophète ﷺ et conforme à la Sunna.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La souffrance psychologique n&apos;est pas un signe de faiblesse de foi : les prophètes eux-mêmes ont connu la tristesse et l&apos;angoisse.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Sacralité de la vie  */}
              {/* ============================== */}
              <section id="sacralite-vie" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La sacralité de la vie en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths sur le suicide, il est essentiel de comprendre le principe fondamental qui les sous-tend : la vie humaine est sacrée en islam. Allah a créé l&apos;être humain avec honneur (<em>karama</em>) et lui a confié sa vie comme un dépôt (<em>amana</em>). Plusieurs versets coraniques posent ce cadre avec une clarté absolue.
                </p>

                <HadithCard
                  arabic="وَلَا تَقْتُلُوا أَنفُسَكُمْ إِنَّ اللَّهَ كَانَ بِكُمْ رَحِيمًا"
                  text="Et ne vous tuez pas vous-mêmes. Allah, en vérité, est Miséricordieux envers vous."
                  source="Coran, sourate An-Nisa (4:29)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est remarquable par sa structure : l&apos;interdiction est immédiatement suivie d&apos;un rappel de la miséricorde divine. Allah ne prononce pas cette interdiction par dureté, mais par amour et protection. Les exégètes soulignent que l&apos;expression &laquo;&nbsp;ne vous tuez pas vous-mêmes&nbsp;&raquo; englobe à la fois le suicide et le fait de se mettre en danger. Le verset s&apos;adresse à la communauté entière : protéger la vie de chacun est une responsabilité collective.
                </p>

                <HadithCard
                  arabic="مِنْ أَجْلِ ذَٰلِكَ كَتَبْنَا عَلَىٰ بَنِي إِسْرَائِيلَ أَنَّهُ مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا"
                  text="C&apos;est pourquoi Nous avons prescrit aux enfants d&apos;Israël que quiconque tuerait une personne non coupable d&apos;un meurtre ou d&apos;une corruption sur terre, c&apos;est comme s&apos;il avait tué tous les hommes. Et quiconque lui fait don de la vie, c&apos;est comme s&apos;il faisait don de la vie à tous les hommes."
                  source="Coran, sourate Al-Ma&apos;ida (5:32)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset place la vie humaine au sommet des valeurs protégées par la loi divine. Les savants en déduisent que sauver une vie &mdash; y compris la sienne propre &mdash; est un acte d&apos;une immense valeur auprès d&apos;Allah. Inversement, mettre fin à une vie est l&apos;un des plus grands péchés. C&apos;est dans ce cadre coranique que s&apos;inscrivent les hadiths suivants.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Interdiction          */}
              {/* ============================== */}
              <section id="interdiction-suicide" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;interdiction du suicide dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a clairement interdit le suicide dans plusieurs hadiths authentiques. Ces textes visent à dissuader fermement, mais il convient de les lire à la lumière de l&apos;ensemble des enseignements islamiques sur la miséricorde divine, le pardon et la compassion envers ceux qui souffrent. Les savants rappellent que ces avertissements ne constituent pas un jugement définitif sur les individus : le sort de chaque âme appartient à Allah seul.
                </p>

                <HadithBlock
                  number={1}
                  title="Celui qui se tue avec un objet en sera châtié"
                  narrator="Abu Hurayra"
                  arabic="مَنْ تَرَدَّى مِنْ جَبَلٍ فَقَتَلَ نَفْسَهُ فَهُوَ فِي نَارِ جَهَنَّمَ يَتَرَدَّى فِيهِ خَالِدًا مُخَلَّدًا فِيهَا أَبَدًا، وَمَنْ تَحَسَّى سَمًّا فَقَتَلَ نَفْسَهُ فَسَمُّهُ فِي يَدِهِ يَتَحَسَّاهُ فِي نَارِ جَهَنَّمَ خَالِدًا مُخَلَّدًا فِيهَا أَبَدًا، وَمَنْ قَتَلَ نَفْسَهُ بِحَدِيدَةٍ فَحَدِيدَتُهُ فِي يَدِهِ يَجَأُ بِهَا فِي بَطْنِهِ فِي نَارِ جَهَنَّمَ خَالِدًا مُخَلَّدًا فِيهَا أَبَدًا"
                  translation="Celui qui se jette d&apos;une montagne et se tue sera dans le Feu de l&apos;Enfer, s&apos;y précipitant éternellement. Celui qui boit du poison et se tue aura son poison dans la main, le buvant dans le Feu de l&apos;Enfer éternellement. Et celui qui se tue avec un objet en fer aura cet objet dans la main, s&apos;en frappant le ventre dans le Feu de l&apos;Enfer éternellement."
                  source="Sahih Al-Bukhari, n°5778 &mdash; Sahih Muslim, n°109"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus sévères sur le sujet. Les savants de la Sunna, dont l&apos;imam An-Nawawi, expliquent que le terme &laquo; éternellement &raquo; (khalidan) est utilisé ici dans un sens d&apos;avertissement maximal (wa&apos;id) et non au sens littéral pour un musulman. Selon la croyance sunnite, aucun musulman monothéiste ne restera éternellement en Enfer. Ce hadith vise à dissuader par la gravité de la menace, non à condamner définitivement les âmes en souffrance."
                />

                <HadithBlock
                  number={2}
                  title="Le Prophète ﷺ et le combattant qui se donna la mort"
                  narrator="Sahl ibn Sa&apos;d As-Sa&apos;idi"
                  arabic="إِنَّ الرَّجُلَ لَيَعْمَلُ عَمَلَ أَهْلِ الْجَنَّةِ فِيمَا يَبْدُو لِلنَّاسِ وَهُوَ مِنْ أَهْلِ النَّارِ، وَإِنَّ الرَّجُلَ لَيَعْمَلُ عَمَلَ أَهْلِ النَّارِ فِيمَا يَبْدُو لِلنَّاسِ وَهُوَ مِنْ أَهْلِ الْجَنَّةِ"
                  translation="En vérité, un homme peut accomplir les actions des gens du Paradis, selon ce que voient les gens, alors qu&apos;il est parmi les gens de l&apos;Enfer. Et un homme peut accomplir les actions des gens de l&apos;Enfer, selon ce que voient les gens, alors qu&apos;il est parmi les gens du Paradis."
                  source="Sahih Al-Bukhari, n°2898 &mdash; Sahih Muslim, n°112"
                  grade="sahih"
                  explanation="Ce hadith a été prononcé à l&apos;occasion d&apos;un combattant courageux que les Compagnons louaient, mais dont le Prophète ﷺ annonça qu&apos;il serait parmi les gens de l&apos;Enfer. L&apos;homme, gravement blessé, mit fin à ses jours pour abréger sa souffrance. Ce récit enseigne que les apparences sont trompeuses et que le jugement final appartient à Allah. Cependant, les savants soulignent que ce cas ne permet pas de juger toute personne qui se suicide : les circonstances, l&apos;état mental et la sincérité de la foi sont des facteurs que seul Allah connaît."
                />

                <HadithBlock
                  number={3}
                  title="L&apos;interdiction de souhaiter la mort"
                  narrator="Anas ibn Malik"
                  arabic="لَا يَتَمَنَّيَنَّ أَحَدُكُمُ الْمَوْتَ لِضُرٍّ أَصَابَهُ، فَإِنْ كَانَ لَا بُدَّ فَاعِلًا فَلْيَقُلِ: اللَّهُمَّ أَحْيِنِي مَا كَانَتِ الْحَيَاةُ خَيْرًا لِي، وَتَوَفَّنِي إِذَا كَانَتِ الْوَفَاةُ خَيْرًا لِي"
                  translation="Qu&apos;aucun d&apos;entre vous ne souhaite la mort à cause d&apos;un malheur qui l&apos;a frappé. S&apos;il ne peut s&apos;en empêcher, qu&apos;il dise : Ô Allah, fais-moi vivre tant que la vie est meilleure pour moi, et fais-moi mourir si la mort est meilleure pour moi."
                  source="Sahih Al-Bukhari, n°5671 &mdash; Sahih Muslim, n°2680"
                  grade="sahih"
                  explanation="Ce hadith montre la finesse pédagogique du Prophète ﷺ. Il ne nie pas la souffrance ni le désespoir : il reconnaît que certains peuvent être tellement éprouvés qu&apos;ils souhaitent la mort. Mais au lieu de laisser le croyant dans ce désespoir, il lui offre une alternative : remettre son sort entre les mains d&apos;Allah par une invocation. Cette du&apos;a transforme un sentiment destructeur en un acte de confiance envers le Créateur. C&apos;est un modèle de compassion prophétique."
                />

                <HadithBlock
                  number={4}
                  title="Le croyant ne sort pas de l&apos;islam par un péché majeur"
                  narrator="Abu Dharr"
                  arabic="مَا مِنْ عَبْدٍ قَالَ لَا إِلَهَ إِلَّا اللَّهُ ثُمَّ مَاتَ عَلَى ذَلِكَ إِلَّا دَخَلَ الْجَنَّةَ. قُلْتُ: وَإِنْ زَنَى وَإِنْ سَرَقَ؟ قَالَ: وَإِنْ زَنَى وَإِنْ سَرَقَ"
                  translation="Tout serviteur qui dit &laquo; La ilaha illa Allah &raquo; (il n&apos;y a de divinité qu&apos;Allah) puis meurt sur cela entrera au Paradis. J&apos;ai dit : même s&apos;il a commis la fornication et le vol ? Il a dit : même s&apos;il a commis la fornication et le vol."
                  source="Sahih Al-Bukhari, n°5827 &mdash; Sahih Muslim, n°94"
                  grade="sahih"
                  explanation="Ce hadith fondamental établit le principe de la foi sunnite : le monothéiste sincère finira par entrer au Paradis, même s&apos;il a commis des péchés majeurs. Les savants l&apos;utilisent pour nuancer les hadiths d&apos;avertissement sur le suicide. La miséricorde d&apos;Allah est plus vaste que tout péché. Ce hadith ne doit jamais être utilisé pour minimiser la gravité du suicide, mais il offre un espoir essentiel aux familles endeuillées et rappelle que le jugement des c&oelig;urs appartient à Allah seul."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la croyance islamique, la patience et la confiance en Allah avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Patience              */}
              {/* ============================== */}
              <section id="patience-epreuves" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La patience dans les épreuves : un chemin vers la récompense
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne nie pas la souffrance. Au contraire, il la reconnaît comme une réalité de la vie terrestre et offre un cadre spirituel pour la traverser. Les hadiths suivants montrent que l&apos;épreuve, aussi douloureuse soit-elle, peut devenir une source de purification et de rapprochement avec Allah. Cette perspective n&apos;invalide en rien la nécessité de chercher de l&apos;aide concrète : elle s&apos;y ajoute.
                </p>

                <HadithBlock
                  number={5}
                  title="Toute épreuve du croyant est une expiation"
                  narrator="Abu Hurayra et Abu Sa&apos;id Al-Khudri"
                  arabic="مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ وَلَا هَمٍّ وَلَا حُزْنٍ وَلَا أَذًى وَلَا غَمٍّ حَتَّى الشَّوْكَةِ يُشَاكُهَا إِلَّا كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ"
                  translation="Aucune fatigue, maladie, souci, tristesse, mal ou affliction ne touche le musulman, même une épine qui le pique, sans qu&apos;Allah ne lui efface par cela une partie de ses péchés."
                  source="Sahih Al-Bukhari, n°5641 &mdash; Sahih Muslim, n°2573"
                  grade="sahih"
                  explanation="Ce hadith est d&apos;un réconfort immense pour celui qui souffre. Le Prophète ﷺ énumère toutes les formes de souffrance &mdash; physique (fatigue, maladie), psychologique (souci, tristesse, affliction) &mdash; et affirme que chacune est une occasion d&apos;expiation des péchés. Ce hadith signifie que la douleur n&apos;est jamais vaine aux yeux d&apos;Allah. Pour la personne en détresse psychologique, ce texte rappelle que sa souffrance a une valeur spirituelle, même quand elle semble insupportable. Cela n&apos;exclut pas la recherche de soins : au contraire, patienter inclut aussi chercher les moyens de guérir."
                />

                <HadithBlock
                  number={6}
                  title="Allah n&apos;impose à personne ce qu&apos;il ne peut supporter"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ الدِّينَ يُسْرٌ وَلَنْ يُشَادَّ الدِّينَ أَحَدٌ إِلَّا غَلَبَهُ فَسَدِّدُوا وَقَارِبُوا وَأَبْشِرُوا"
                  translation="La religion est facilité. Quiconque cherche à la rendre difficile sera vaincu par elle. Visez la rectitude, rapprochez-vous de la perfection et réjouissez-vous."
                  source="Sahih Al-Bukhari, n°39"
                  grade="sahih"
                  explanation="Ce hadith rappelle un principe fondamental : l&apos;islam est une religion de facilité et non de surcharge. Le Prophète ﷺ utilise trois verbes d&apos;espoir : &laquo; visez &raquo; (saddidu), &laquo; rapprochez-vous &raquo; (qaribu) et &laquo; réjouissez-vous &raquo; (abshiru). Pour la personne en souffrance, ce hadith enseigne qu&apos;Allah ne demande pas la perfection : Il demande l&apos;effort sincère, même minime. Se lever, chercher de l&apos;aide, prononcer une invocation, tout cela est un acte de foi accepté par Allah."
                />

                <HadithBlock
                  number={7}
                  title="Après la difficulté vient la facilité"
                  narrator="Abu Hurayra"
                  arabic="وَاعْلَمْ أَنَّ النَّصْرَ مَعَ الصَّبْرِ وَأَنَّ الْفَرَجَ مَعَ الْكَرْبِ وَأَنَّ مَعَ الْعُسْرِ يُسْرًا"
                  translation="Sache que la victoire accompagne la patience, que le soulagement accompagne l&apos;affliction, et qu&apos;avec la difficulté vient la facilité."
                  source="Jami&apos; at-Tirmidhi, n°2516 &mdash; authentifié par An-Nawawi"
                  grade="sahih"
                  explanation="Ce hadith est un extrait d&apos;un long conseil du Prophète ﷺ à Ibn Abbas. Il condense une vérité spirituelle fondamentale : aucune épreuve n&apos;est permanente. Le soulagement (<em>faraj</em>) est lié à l&apos;affliction (<em>karb</em>) comme une promesse divine. Pour la personne qui traverse une crise, ce hadith est un rappel que l&apos;obscurité actuelle n&apos;est pas l&apos;état final. Le Coran confirme cette promesse : &laquo; Car avec la difficulté, il y a certes une facilité &raquo; (94:5-6), verset répété deux fois pour en souligner la certitude."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Espoir et miséricorde */}
              {/* ============================== */}
              <section id="espoir-misericorde" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;espoir en la miséricorde divine
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des plus grands dangers pour la personne en détresse est le désespoir de la miséricorde d&apos;Allah. Or, le Coran interdit explicitement ce désespoir : &laquo;&nbsp;Ne désespérez pas de la miséricorde d&apos;Allah. Allah pardonne tous les péchés. C&apos;est Lui le Pardonneur, le Miséricordieux&nbsp;&raquo; (39:53). Les hadiths suivants renforcent ce message d&apos;espoir.
                </p>

                <HadithBlock
                  number={8}
                  title="La miséricorde d&apos;Allah dépasse Sa colère"
                  narrator="Abu Hurayra"
                  arabic="لَمَّا قَضَى اللَّهُ الْخَلْقَ كَتَبَ فِي كِتَابِهِ فَهُوَ عِنْدَهُ فَوْقَ الْعَرْشِ: إِنَّ رَحْمَتِي غَلَبَتْ غَضَبِي"
                  translation="Lorsqu&apos;Allah acheva la création, Il écrivit dans Son Livre qui se trouve auprès de Lui au-dessus du Trône : Ma miséricorde l&apos;emporte sur Ma colère."
                  source="Sahih Al-Bukhari, n°3194 &mdash; Sahih Muslim, n°2751"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus porteurs d&apos;espoir dans toute la tradition prophétique. Allah Lui-même a décrété que Sa miséricorde prévaut sur Sa colère. Ce principe s&apos;applique à toute situation, y compris les péchés les plus graves. Pour la personne en souffrance, ce hadith rappelle qu&apos;Allah n&apos;est pas un Dieu de punition mais de miséricorde. Les savants insistent : même si le suicide est un péché majeur, la miséricorde d&apos;Allah reste plus grande. Il ne faut jamais désespérer de Son pardon."
                />

                <HadithBlock
                  number={9}
                  title="Allah est auprès de celui qui a le c&oelig;ur brisé"
                  narrator="Abu Hurayra"
                  arabic="يَقُولُ اللَّهُ تَعَالَى: أَنَا عِنْدَ ظَنِّ عَبْدِي بِي وَأَنَا مَعَهُ إِذَا ذَكَرَنِي"
                  translation="Allah le Très-Haut dit : Je suis tel que Mon serviteur Me pense. Et Je suis avec lui lorsqu&apos;il M&apos;invoque."
                  source="Sahih Al-Bukhari, n°7405 &mdash; Sahih Muslim, n°2675"
                  grade="sahih"
                  explanation="Ce hadith qudsi (parole divine transmise par le Prophète ﷺ) enseigne que la relation du croyant avec Allah dépend de la manière dont il perçoit son Seigneur. Celui qui pense du bien d&apos;Allah trouvera du bien. Celui qui espère en Sa miséricorde la trouvera. Pour la personne en crise, cultiver une bonne opinion d&apos;Allah &mdash; même dans l&apos;obscurité &mdash; est en soi un acte de foi d&apos;une immense valeur. Le dhikr (rappel d&apos;Allah), même murmure, est une corde qui relie le c&oelig;ur brisé à son Créateur."
                />

                <HadithBlock
                  number={10}
                  title="Soulager la détresse d&apos;un croyant"
                  narrator="Abu Hurayra"
                  arabic="مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ"
                  translation="Celui qui soulage un croyant d&apos;une détresse parmi les détresses de ce monde, Allah le soulagera d&apos;une détresse parmi les détresses du Jour de la Résurrection."
                  source="Sahih Muslim, n°2699"
                  grade="sahih"
                  explanation="Ce hadith s&apos;adresse à la communauté entière : soulager la souffrance d&apos;autrui est un acte récompensé au Jour du Jugement. Il responsabilise chaque musulman face à la détresse de son prochain. Si vous voyez un frère ou une s&oelig;ur en souffrance, l&apos;aider n&apos;est pas seulement un devoir moral, c&apos;est un acte d&apos;adoration. Écouter, accompagner, orienter vers un professionnel de santé : tout cela entre dans le cadre de ce hadith."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Doua contre détresse */}
              {/* ============================== */}
              <section id="doua-detresse" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations prophétiques contre la détresse et l&apos;angoisse
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ n&apos;a pas seulement interdit le désespoir : il a donné des outils concrets pour le combattre. Les invocations (du&apos;a) suivantes sont spécifiquement recommandées pour les moments de tristesse, d&apos;angoisse et de détresse. Elles ne remplacent pas un suivi médical ou psychologique, mais elles accompagnent le croyant dans son épreuve.
                </p>

                <HadithBlock
                  number={11}
                  title="L&apos;invocation contre le souci et la tristesse"
                  narrator="Anas ibn Malik"
                  arabic="اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ"
                  translation="Ô Allah, je cherche refuge auprès de Toi contre le souci et la tristesse, contre l&apos;incapacité et la paresse, contre l&apos;avarice et la lâcheté, contre le poids des dettes et la domination des hommes."
                  source="Sahih Al-Bukhari, n°6369"
                  grade="sahih"
                  explanation="Le Prophète ﷺ récitait fréquemment cette invocation. Elle couvre un large spectre de souffrances : le souci (<em>hamm</em>) concerne l&apos;avenir, la tristesse (<em>huzn</em>) le passé, l&apos;incapacité (<em>&apos;ajz</em>) et la paresse (<em>kasal</em>) le présent. Cette du&apos;a enseigne que chercher refuge en Allah contre la détresse psychologique est un acte prophétique. Le fait que le Prophète ﷺ lui-même demandait protection contre ces états montre qu&apos;ils sont des réalités humaines, non des signes de faiblesse de foi."
                />

                <HadithBlock
                  number={12}
                  title="L&apos;invocation du serviteur en détresse"
                  narrator="Ibn Mas&apos;ud"
                  arabic="مَا أَصَابَ أَحَدًا قَطُّ هَمٌّ وَلَا حَزَنٌ فَقَالَ: اللَّهُمَّ إِنِّي عَبْدُكَ ابْنُ عَبْدِكَ ابْنُ أَمَتِكَ نَاصِيَتِي بِيَدِكَ مَاضٍ فِيَّ حُكْمُكَ عَدْلٌ فِيَّ قَضَاؤُكَ أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجِلَاءَ حُزْنِي وَذَهَابَ هَمِّي، إِلَّا أَذْهَبَ اللَّهُ هَمَّهُ وَحَزَنَهُ وَأَبْدَلَهُ مَكَانَهُ فَرَحًا"
                  translation="Aucune personne n&apos;est frappée de souci ou de tristesse puis dit : &laquo; Ô Allah, je suis Ton serviteur, fils de Ton serviteur, fils de Ta servante, mon front est dans Ta main, Ton jugement s&apos;accomplit en moi, Ton décret à mon égard est juste. Je Te demande par chaque nom qui T&apos;appartient, par lequel Tu T&apos;es nommé, que Tu as révélé dans Ton Livre, que Tu as enseigné à l&apos;une de Tes créatures ou que Tu as gardé dans la science de l&apos;Invisible auprès de Toi, de faire du Coran le printemps de mon c&oelig;ur, la lumière de ma poitrine, la dissipation de ma tristesse et la fin de mon souci &raquo;, sans qu&apos;Allah ne dissipe son souci et sa tristesse et ne les remplace par de la joie."
                  source="Musnad Ahmad, n°3712 &mdash; authentifié par Al-Albani"
                  grade="sahih"
                  explanation="Cette invocation est considérée par les savants comme l&apos;une des plus puissantes contre la tristesse et l&apos;angoisse. Elle commence par la reconnaissance de sa condition de serviteur, ce qui ancre l&apos;humilité et la confiance. Puis elle invoque Allah par tous Ses noms, y compris ceux qui sont cachés dans la science de l&apos;Invisible, ce qui élargit l&apos;appel à la totalité de la puissance divine. La promesse finale est remarquable : Allah remplacera la tristesse par la joie. Les savants recommandent de la mémoriser et de la réciter régulièrement."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Se soigner en islam  */}
              {/* ============================== */}
              <section id="soin-islam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Se soigner fait partie de l&apos;islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Certaines personnes pensent à tort que consulter un psychologue ou un psychiatre serait incompatible avec la foi musulmane. Les hadiths suivants montrent au contraire que chercher un traitement est une démarche encouragée par le Prophète ﷺ, qu&apos;il s&apos;agisse d&apos;un mal physique ou psychologique.
                </p>

                <HadithBlock
                  number={13}
                  title="Soignez-vous, car Allah a créé le remède"
                  narrator="Usama ibn Sharik"
                  arabic="تَدَاوَوْا عِبَادَ اللَّهِ فَإِنَّ اللَّهَ لَمْ يَضَعْ دَاءً إِلَّا وَضَعَ لَهُ شِفَاءً إِلَّا دَاءً وَاحِدًا: الْهَرَمَ"
                  translation="Soignez-vous, ô serviteurs d&apos;Allah, car Allah n&apos;a pas créé de maladie sans en créer aussi le remède, sauf une seule : la vieillesse."
                  source="Sunan Abu Dawud, n°3855 &mdash; Jami&apos; at-Tirmidhi, n°2038"
                  grade="sahih"
                  explanation="Ce hadith est un argument décisif en faveur du soin en islam. Le Prophète ﷺ utilise l&apos;impératif &laquo; soignez-vous &raquo; (tadawaw), ce qui en fait au minimum une forte recommandation. Le terme &laquo; maladie &raquo; (da&apos;) est général et inclut les maladies psychologiques. Consulter un professionnel de santé mentale est donc parfaitement conforme à la Sunna. La foi en Allah et le recours aux moyens (asbab) ne s&apos;opposent pas : ils se complètent."
                />

                <HadithBlock
                  number={14}
                  title="Le Prophète ﷺ a lui-même recouru aux soins"
                  narrator="Jabir ibn Abdillah"
                  arabic="لِكُلِّ دَاءٍ دَوَاءٌ فَإِذَا أُصِيبَ دَوَاءُ الدَّاءِ بَرَأَ بِإِذْنِ اللَّهِ عَزَّ وَجَلَّ"
                  translation="Pour chaque maladie il y a un remède. Lorsque le remède atteint la maladie, elle guérit par la permission d&apos;Allah."
                  source="Sahih Muslim, n°2204"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en ajoutant une nuance essentielle : la guérison se fait &laquo; par la permission d&apos;Allah &raquo;. Le croyant cherche le remède tout en sachant que la guérison vient d&apos;Allah. Cette approche évite deux extrêmes : celui qui refuse de se soigner en prétextant la foi, et celui qui oublie Allah en ne comptant que sur la médecine. Les deux démarches &mdash; spirituelle et médicale &mdash; sont complémentaires et recommandées."
                />

                <div className="mt-8 rounded-xl border border-border bg-accent p-5">
                  <p className="text-base italic leading-relaxed text-foreground">
                    &laquo;&nbsp;La consultation d&apos;un médecin, d&apos;un psychologue ou d&apos;un psychiatre fait partie des moyens (<em>asbab</em>) qu&apos;Allah a mis à la disposition de Ses serviteurs. Y recourir n&apos;est pas un manque de confiance en Allah, c&apos;est au contraire suivre l&apos;exemple du Prophète ﷺ qui se soignait et recommandait de se soigner.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm font-semibold text-primary">
                    — Shaykh Yusuf Al-Qaradawi, <em>Al-Halal wal-Haram fil-Islam</em>
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-border bg-accent p-5">
                  <p className="text-base italic leading-relaxed text-foreground">
                    &laquo;&nbsp;Les maladies de l&apos;âme sont aussi réelles que les maladies du corps. Le croyant doit traiter son c&oelig;ur et son esprit avec le même soin qu&apos;il traite son corps. Le Coran lui-même est décrit comme un &laquo; remède pour ce qui est dans les poitrines &raquo; (10:57), ce qui montre que la santé psychologique est une préoccupation coranique.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm font-semibold text-primary">
                    — Ibn Al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                  </p>
                </div>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour le musulman face à la souffrance et à la détresse :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La vie est un dépôt sacré à préserver
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Allah a confié la vie à chaque être humain comme un dépôt (<em>amana</em>). La protéger est un devoir envers soi-même et envers le Créateur. Cette sacralité fonde l&apos;interdiction du suicide dans les textes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais désespérer de la miséricorde d&apos;Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La miséricorde d&apos;Allah l&apos;emporte sur Sa colère. Même pour les péchés les plus graves, la porte du repentir et de l&apos;espoir reste ouverte. Le désespoir lui-même est un péché que le Coran interdit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se soigner est conforme à la Sunna
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a ordonné de se soigner. Consulter un psychologue, un psychiatre ou tout professionnel de santé mentale est un acte de foi, pas un aveu de faiblesse. Les moyens et la confiance en Allah vont de pair.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La souffrance psychologique est reconnue par l&apos;islam
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ cherchait lui-même refuge contre le souci et la tristesse. Les prophètes ont connu le chagrin. La détresse psychologique n&apos;est pas un signe de faiblesse de foi, c&apos;est une épreuve que tout être humain peut traverser.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Soutenir les personnes en souffrance est un devoir communautaire
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Soulager la détresse d&apos;un croyant est récompensé au Jour du Jugement. Écouter sans juger, accompagner vers l&apos;aide professionnelle et maintenir le lien social sont des actes d&apos;adoration concrets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Les invocations sont un soutien spirituel, pas un substitut au traitement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les du&apos;a prophétiques contre la tristesse et l&apos;angoisse sont des outils spirituels puissants. Elles accompagnent la démarche de soin sans la remplacer. Combiner la prière, le dhikr et le suivi professionnel est l&apos;approche la plus complète.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rappel numéro d'aide */}
              <div className="mt-12 rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
                <p className="text-base font-bold text-primary">
                  Vous n&apos;êtes pas seul(e)
                </p>
                <p className="mt-3 leading-relaxed text-foreground">
                  Si vous traversez une période difficile, parlez-en. Le <strong>3114</strong> (numéro national de prévention du suicide) est disponible 24h/24, 7j/7, gratuitement et en toute confidentialité. Vous pouvez aussi contacter <strong>SOS Amitié au 09 72 39 40 50</strong>. Demander de l&apos;aide est un signe de force, pas de faiblesse. Le Prophète ﷺ lui-même cherchait refuge auprès d&apos;Allah contre la tristesse et encourageait ses Compagnons à prendre soin les uns des autres.
                </p>
              </div>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths et les invocations dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la patience et les épreuves en islam"
                  description="Découvrez les enseignements prophétiques sur l&apos;endurance face aux épreuves et la récompense de la patience."
                  href="/hadith-patience-epreuves-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la tristesse en islam"
                  description="Les paroles du Prophète ﷺ sur la tristesse, le chagrin et les moyens de retrouver la sérénité."
                  href="/hadith-tristesse-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le pardon et le repentir en islam"
                  description="La miséricorde d&apos;Allah, la porte du repentir et l&apos;espoir pour tout croyant, même en cas de péché majeur."
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
