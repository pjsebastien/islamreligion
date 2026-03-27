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
    "Hadith sur Aïcha et le Prophète ﷺ : sa vie, son savoir et son rôle en islam",
  description:
    "Découvrez les hadiths authentiques sur Aïcha (radiAllahu anha) : son rôle de savante, sa vie avec le Prophète ﷺ, l\u2019incident de la calomnie (al-ifk) et les leçons tirées de son exemple.",
  openGraph: {
    title:
      "Hadith sur Aïcha et le Prophète ﷺ : sa vie, son savoir et son rôle en islam",
    description:
      "Les hadiths authentiques sur Aïcha, épouse du Prophète ﷺ : sa science, la vie quotidienne du foyer prophétique, l\u2019amour conjugal et l\u2019innocence révélée par le Coran.",
    url: "https://www.islamreligion.fr/hadith-aicha-islam",
    images: [
      {
        url: "/images/coran-ouvert-chapelet-bois-islam-versets.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-aicha-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "savante-transmettrice", label: "Aïcha, savante et transmettrice" },
  { id: "vie-quotidienne", label: "La vie quotidienne du Prophète" },
  { id: "amour-prophete", label: "L\u2019amour du Prophète pour Aïcha" },
  { id: "incident-ifk", label: "L\u2019incident de la calomnie (al-ifk)" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Combien de hadiths Aïcha a-t-elle transmis ?",
    answer:
      "Aïcha (radiAllahu anha) a transmis environ 2 210 hadiths selon les recueils classiques, ce qui fait d\u2019elle l\u2019un des compagnons ayant rapporté le plus de traditions prophétiques. Parmi ceux-ci, de nombreux hadiths sont présents dans les recueils de Bukhari et Muslim, les deux collections les plus authentiques.",
  },
  {
    question:
      "Pourquoi Aïcha est-elle considérée comme une savante en islam ?",
    answer:
      "Aïcha maîtrisait le fiqh (jurisprudence), le tafsir (exégèse), la médecine prophétique et la poésie arabe. De grands compagnons comme Abu Hurayra et Ibn Abbas venaient la consulter pour vérifier leurs connaissances. Az-Zuhri a dit : \u00ab Si l\u2019on réunissait le savoir de toutes les femmes, le savoir d\u2019Aïcha les surpasserait toutes. \u00bb",
  },
  {
    question:
      "Qu\u2019est-ce que l\u2019incident de la calomnie (al-ifk) ?",
    answer:
      "L\u2019incident de la calomnie (hadith al-ifk) est un épisode où des hypocrites ont accusé faussement Aïcha d\u2019adultère. Après une période d\u2019épreuve intense, Allah a révélé les versets 11 à 20 de la sourate An-Nur pour innocenter Aïcha et condamner les calomniateurs. Cet événement est l\u2019un des plus documentés de la Sira.",
  },
  {
    question:
      "Comment le Prophète ﷺ montrait-il son amour pour Aïcha ?",
    answer:
      "Le Prophète ﷺ exprimait son amour pour Aïcha de façon ouverte : il buvait à l\u2019endroit même où elle avait posé ses lèvres, il se montrait joueur et complice avec elle, et lorsqu\u2019on lui demandait quelle personne il aimait le plus, il répondait \u00ab Aïcha \u00bb. Ces gestes sont rapportés dans les recueils authentiques de Muslim et Bukhari.",
  },
  {
    question:
      "Quel rôle Aïcha a-t-elle joué après la mort du Prophète ﷺ ?",
    answer:
      "Après la mort du Prophète ﷺ, Aïcha est devenue une référence incontournable pour les compagnons et les générations suivantes. Elle corrigeait les erreurs de transmission des hadiths, émettait des avis juridiques et enseignait la religion depuis sa demeure à Médine. Son rôle a été déterminant dans la préservation de la Sunna.",
  },
  {
    question:
      "Les hadiths d\u2019Aïcha sont-ils fiables ?",
    answer:
      "Oui, les hadiths d\u2019Aïcha sont parmi les plus fiables de la tradition islamique. Sa proximité avec le Prophète ﷺ, sa mémoire exceptionnelle et sa précision dans la transmission lui confèrent un rang élevé parmi les rapporteurs. Les spécialistes du hadith (muhaddithin) la classent parmi les sources les plus sûres.",
  },
];

export default function HadithAichaIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-aicha-islam/#article",
        headline:
          "Hadith sur Aïcha et le Prophète ﷺ : sa vie, son savoir et son rôle en islam",
        description:
          "Découvrez les hadiths authentiques sur Aïcha (radiAllahu anha) : son rôle de savante, sa vie avec le Prophète ﷺ, l\u2019incident de la calomnie et les leçons tirées de son exemple.",
        image: "/images/coran-ouvert-chapelet-bois-islam-versets.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-aicha-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-aicha-islam/#breadcrumb",
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
            name: "Aïcha et le Prophète ﷺ",
            item: "https://www.islamreligion.fr/hadith-aicha-islam",
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
          title="Hadith sur Aïcha et le Prophète ﷺ"
          subtitle="La vie, le savoir et le rôle d&apos;Aïcha (radiAllahu anha), épouse du Prophète ﷺ, à travers les hadiths authentiques : sa science, son quotidien, l&apos;amour conjugal et l&apos;innocence révélée par le Coran."
          imageSrc="/images/coran-ouvert-chapelet-bois-islam-versets.jpg"
          imageAlt="Hadith sur Aïcha et le Prophète en islam, Coran ouvert avec chapelet"
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
                  Aïcha et le Prophète ﷺ
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
                    Aïcha (radiAllahu anha) a transmis environ 2 210 hadiths, faisant d&apos;elle l&apos;une des plus grandes sources de la Sunna prophétique.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les compagnons du Prophète ﷺ la consultaient régulièrement sur les questions de fiqh, de tafsir et de pratique religieuse.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Coran a innocenté Aïcha de la calomnie (al-ifk) par des versets révélés dans la sourate An-Nur.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ exprimait ouvertement son amour et son respect pour Aïcha, donnant ainsi un modèle de tendresse conjugale.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique : Aïcha dans la révélation
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La place d&apos;Aïcha (radiAllahu anha) dans l&apos;islam ne se limite pas aux hadiths qu&apos;elle a transmis. Le Coran lui-même fait référence à des événements qui la concernent directement. Deux passages coraniques sont particulièrement liés à sa personne : les versets de l&apos;innocence dans la sourate An-Nur, révélés après l&apos;incident de la calomnie (al-ifk), et le verset de la sourate At-Tahrim où Allah s&apos;adresse aux épouses du Prophète ﷺ.
                </p>

                <HadithCard
                  arabic="إِنَّ الَّذِينَ جَاءُوا بِالْإِفْكِ عُصْبَةٌ مِّنكُمْ لَا تَحْسَبُوهُ شَرًّا لَّكُم بَلْ هُوَ خَيْرٌ لَّكُمْ لِكُلِّ امْرِئٍ مِّنْهُم مَّا اكْتَسَبَ مِنَ الْإِثْمِ وَالَّذِي تَوَلَّىٰ كِبْرَهُ مِنْهُمْ لَهُ عَذَابٌ عَظِيمٌ"
                  text="Ceux qui sont venus avec la calomnie (al-ifk) sont un groupe parmi vous. Ne pensez pas que c&apos;est un mal pour vous, c&apos;est plutôt un bien pour vous. À chacun d&apos;eux ce qu&apos;il s&apos;est acquis comme péché. Celui d&apos;entre eux qui s&apos;est chargé de la plus grande part aura un châtiment immense."
                  source="Coran, sourate An-Nur (24:11)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset inaugure un passage de dix versets (11-20) entièrement consacrés à l&apos;innocence d&apos;Aïcha. Les exégètes (<em>mufassirun</em>) s&apos;accordent pour dire que ce passage constitue la défense divine la plus directe d&apos;une personne dans le Coran. Allah qualifie la calomnie de &laquo;&nbsp;ifk&nbsp;&raquo; (mensonge grave) et annonce un châtiment pour ceux qui l&apos;ont propagée, tout en soulignant que cette épreuve a été, en définitive, un bien pour la communauté : elle a clarifié les règles relatives à la calomnie et à la protection de l&apos;honneur.
                </p>

                <HadithCard
                  arabic="وَإِذْ أَسَرَّ النَّبِيُّ إِلَىٰ بَعْضِ أَزْوَاجِهِ حَدِيثًا فَلَمَّا نَبَّأَتْ بِهِ وَأَظْهَرَهُ اللَّهُ عَلَيْهِ عَرَّفَ بَعْضَهُ وَأَعْرَضَ عَن بَعْضٍ"
                  text="Et lorsque le Prophète confia un secret à l&apos;une de ses épouses et qu&apos;elle l&apos;eut divulgué — et qu&apos;Allah l&apos;en eut informé — il en fit connaître une partie et laissa l&apos;autre. Puis, quand il l&apos;en eut informée, elle dit : Qui t&apos;a informé de cela ? Il dit : C&apos;est l&apos;Omniscient, le Parfaitement Connaisseur qui m&apos;en a informé."
                  source="Coran, sourate At-Tahrim (66:3)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fait référence à un épisode impliquant les épouses du Prophète ﷺ. Les exégètes rapportent qu&apos;il s&apos;agit d&apos;Aïcha et Hafsa (radiAllahu anhuma). Ce passage illustre la dimension humaine du foyer prophétique : même les meilleures femmes de la communauté pouvaient commettre des erreurs, et le Coran les rappelait à l&apos;ordre avec justice. Il montre aussi la patience du Prophète ﷺ, qui a pardonné une partie et passé sous silence une autre, par magnanimité.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : Aïcha, savante et transmettrice    */}
              {/* ============================================ */}
              <section id="savante-transmettrice" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Aïcha, savante et transmettrice de hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Aïcha (radiAllahu anha) occupe une place unique dans la transmission du savoir islamique. Avec environ 2 210 hadiths rapportés, elle se classe parmi les sept compagnons ayant transmis le plus de traditions prophétiques (<em>al-mukthirun</em>). Sa position au sein du foyer prophétique lui a permis d&apos;accéder à des connaissances que peu d&apos;autres compagnons possédaient, notamment sur la vie privée du Prophète ﷺ, ses adorations nocturnes et les détails du quotidien.
                </p>

                <HadithBlock
                  number={1}
                  title="Prenez une part de votre religion de cette rousse"
                  narrator="Abu Musa al-Ash&apos;ari"
                  arabic="مَا أَشْكَلَ عَلَيْنَا أَصْحَابَ رَسُولِ اللَّهِ صلى الله عليه وسلم حَدِيثٌ قَطُّ فَسَأَلْنَا عَائِشَةَ إِلاَّ وَجَدْنَا عِنْدَهَا مِنْهُ عِلْمًا"
                  translation="Jamais un hadith ne nous a posé problème, à nous les compagnons du Messager d&apos;Allah ﷺ, sans que nous n&apos;ayons trouvé chez Aïcha une science à ce sujet."
                  source="Jami&apos; at-Tirmidhi, n°3883"
                  grade="sahih"
                  explanation="Ce témoignage d&apos;Abu Musa al-Ash&apos;ari est remarquable par sa portée. Il ne dit pas &laquo; parfois &raquo; ou &laquo; souvent &raquo;, mais &laquo; jamais &raquo; et &laquo; toujours &raquo;. Chaque fois que les compagnons étaient dans l&apos;incertitude sur un hadith, ils se tournaient vers Aïcha et trouvaient chez elle la réponse. Ce hadith établit son statut de référence scientifique pour la génération même qui avait côtoyé le Prophète ﷺ."
                />

                <HadithBlock
                  number={2}
                  title="Aïcha corrige un hadith sur le châtiment du mort"
                  narrator="Aisha"
                  arabic="إِنَّمَا مَرَّ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَلَى يَهُودِيَّةٍ يُبْكَى عَلَيْهَا فَقَالَ إِنَّهُمْ لَيَبْكُونَ عَلَيْهَا وَإِنَّهَا لَتُعَذَّبُ فِي قَبْرِهَا"
                  translation="Le Messager d&apos;Allah ﷺ est passé devant une juive sur laquelle on pleurait, et il a dit : Ils pleurent sur elle, alors qu&apos;elle est certes châtiée dans sa tombe."
                  source="Sahih Al-Bukhari, n°1289 — Sahih Muslim, n°932"
                  grade="sahih"
                  explanation="Ce hadith illustre la méthode critique d&apos;Aïcha. Lorsque Ibn Umar rapporta que &laquo; le mort est châtié à cause des pleurs de sa famille &raquo;, Aïcha rectifia en précisant le contexte : le Prophète ﷺ parlait d&apos;une personne précise, pas d&apos;une règle générale. Elle argua qu&apos;Allah dit : &laquo; Nulle âme ne portera le fardeau d&apos;une autre &raquo; (Coran 35:18). Cette correction montre sa capacité à confronter les hadiths au Coran, une méthodologie que les savants postérieurs ont adoptée."
                />

                <HadithBlock
                  number={3}
                  title="La moitié de la religion prise d&apos;Aïcha"
                  narrator="Az-Zuhri"
                  arabic="لَوْ جُمِعَ عِلْمُ عَائِشَةَ إِلَى عِلْمِ جَمِيعِ النِّسَاءِ لَكَانَ عِلْمُ عَائِشَةَ أَفْضَلَ"
                  translation="Si l&apos;on réunissait le savoir d&apos;Aïcha et le savoir de toutes les femmes, le savoir d&apos;Aïcha serait supérieur."
                  source="Mustadrak al-Hakim, n°6734 — Tabaqat Ibn Sa&apos;d"
                  grade="sahih"
                  explanation="Az-Zuhri, l&apos;un des plus grands savants du hadith de la génération des tabi&apos;in, place ici le savoir d&apos;Aïcha au-dessus de celui de toutes les autres femmes réunies. Cette déclaration n&apos;est pas rhétorique : elle reflète le fait qu&apos;Aïcha maîtrisait le fiqh, le tafsir, la médecine, la généalogie et la poésie arabe. Les savants postérieurs ont confirmé ce jugement, et Ibn Hajar a consacré plusieurs pages de son <em>al-Isaba</em> à détailler ses domaines de compétence."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths et témoignages convergent vers une même réalité : Aïcha n&apos;était pas seulement une épouse du Prophète ﷺ, mais une véritable institution du savoir islamique. Pour mieux comprendre l&apos;ensemble des collections dans lesquelles ses hadiths sont préservés, consultez notre article sur{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths du Prophète Muhammad ﷺ et les grandes collections
                  </Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : Vie quotidienne du Prophète        */}
              {/* ============================================ */}
              <section id="vie-quotidienne" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La vie quotidienne du Prophète ﷺ racontée par Aïcha
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Grâce à sa proximité avec le Prophète ﷺ, Aïcha nous a laissé un témoignage unique sur sa vie privée. Ces récits permettent de connaître des aspects du quotidien prophétique que seule une épouse pouvait observer : les adorations nocturnes, les habitudes alimentaires, le comportement à la maison et les moments d&apos;intimité spirituelle.
                </p>

                <HadithBlock
                  number={4}
                  title="Le Prophète ﷺ priait la nuit jusqu&apos;à ce que ses pieds enflent"
                  narrator="Aisha"
                  arabic="كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُومُ مِنَ اللَّيْلِ حَتَّى تَتَفَطَّرَ قَدَمَاهُ فَقُلْتُ لَهُ لِمَ تَصْنَعُ هَذَا يَا رَسُولَ اللَّهِ وَقَدْ غُفِرَ لَكَ مَا تَقَدَّمَ مِنْ ذَنْبِكَ وَمَا تَأَخَّرَ قَالَ أَفَلَا أَكُونُ عَبْدًا شَكُورًا"
                  translation="Le Prophète ﷺ priait la nuit jusqu&apos;à ce que ses pieds enflent. Je lui ai dit : Pourquoi fais-tu cela, ô Messager d&apos;Allah, alors qu&apos;Allah t&apos;a pardonné tes péchés passés et futurs ? Il répondit : Ne devrais-je pas être un serviteur reconnaissant ?"
                  source="Sahih Al-Bukhari, n°4837 — Sahih Muslim, n°2820"
                  grade="sahih"
                  explanation="Ce hadith, rapporté par Aïcha, révèle l&apos;intensité de la dévotion du Prophète ﷺ. Sa question est empreinte de tendresse conjugale : elle s&apos;inquiète pour lui. La réponse du Prophète ﷺ — &laquo; Ne devrais-je pas être un serviteur reconnaissant ? &raquo; — enseigne que l&apos;adoration n&apos;est pas motivée par la peur du châtiment mais par la gratitude envers Allah. Seule une épouse pouvait témoigner de ces moments nocturnes, ce qui souligne l&apos;importance du rôle d&apos;Aïcha dans la préservation de la Sunna."
                />

                <HadithBlock
                  number={5}
                  title="Le caractère du Prophète ﷺ était le Coran"
                  narrator="Aisha"
                  arabic="كَانَ خُلُقُهُ الْقُرْآنَ"
                  translation="Son caractère était le Coran."
                  source="Sahih Muslim, n°746"
                  grade="sahih"
                  explanation="Lorsqu&apos;on interrogea Aïcha sur le caractère du Prophète ﷺ, elle donna cette réponse concise et profonde. Elle signifie que le Prophète ﷺ incarnait littéralement les enseignements du Coran : sa patience, sa générosité, sa justice et sa miséricorde étaient les vertus coraniques mises en pratique. Cette parole est devenue une référence pour les savants du <em>tasawwuf</em> et de l&apos;éthique islamique, montrant que le Coran est un programme de vie, pas seulement un texte récité."
                />

                <HadithBlock
                  number={6}
                  title="Le Prophète ﷺ n&apos;a jamais frappé personne de sa main"
                  narrator="Aisha"
                  arabic="مَا ضَرَبَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ شَيْئًا قَطُّ بِيَدِهِ وَلَا امْرَأَةً وَلَا خَادِمًا إِلَّا أَنْ يُجَاهِدَ فِي سَبِيلِ اللَّهِ"
                  translation="Jamais le Messager d&apos;Allah ﷺ n&apos;a frappé quoi que ce soit de sa main, ni une femme, ni un serviteur, sauf lorsqu&apos;il combattait dans le sentier d&apos;Allah."
                  source="Sahih Muslim, n°2328"
                  grade="sahih"
                  explanation="Ce hadith est un témoignage capital sur le comportement du Prophète ﷺ. Aïcha, qui vivait avec lui au quotidien, atteste qu&apos;il n&apos;a jamais levé la main sur une femme ni sur un serviteur. Ce témoignage a une valeur juridique et éthique considérable : il sert de référence aux savants pour condamner toute forme de violence domestique. Le mot &laquo; jamais &raquo; (<em>qatt</em>) en arabe est une négation absolue qui ne laisse aucune ambiguïté."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces témoignages d&apos;Aïcha offrent un portrait intime du Prophète ﷺ que les récits publics ne pouvaient pas fournir. Ils complètent les hadiths rapportés par d&apos;autres compagnons et permettent de saisir la globalité de la personnalité prophétique. Pour découvrir d&apos;autres hadiths sur le rôle de la femme en islam, consultez notre article dédié sur{" "}
                  <Link href="/hadith-femme-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths sur la femme en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la science du hadith, la Sira et le fiqh avec des professeurs qualifiés pour mieux comprendre la vie du Prophète ﷺ et de ses compagnons."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================================ */}
              {/* SECTION : L&apos;amour du Prophète pour Aïcha     */}
              {/* ============================================ */}
              <section id="amour-prophete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;amour du Prophète ﷺ pour Aïcha
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ n&apos;a jamais caché son amour pour Aïcha. Loin de toute pudibonderie, il exprimait ses sentiments ouvertement, offrant à sa communauté un modèle de tendresse conjugale. Les hadiths suivants montrent que l&apos;affection entre époux est non seulement permise en islam, mais encouragée et valorisée.
                </p>

                <HadithBlock
                  number={7}
                  title="La personne la plus aimée du Prophète ﷺ"
                  narrator="Amr ibn al-As"
                  arabic="قُلْتُ يَا رَسُولَ اللَّهِ أَيُّ النَّاسِ أَحَبُّ إِلَيْكَ قَالَ عَائِشَةُ قُلْتُ مِنَ الرِّجَالِ قَالَ أَبُوهَا"
                  translation="J&apos;ai demandé : Ô Messager d&apos;Allah, quelle est la personne que tu aimes le plus ? Il répondit : Aïcha. Je dis : Et parmi les hommes ? Il répondit : Son père (Abu Bakr)."
                  source="Sahih Al-Bukhari, n°3662 — Sahih Muslim, n°2384"
                  grade="sahih"
                  explanation="Ce hadith est rapporté par Amr ibn al-As, un compagnon connu pour son intelligence politique. Sa question visait probablement à connaître les personnes les plus proches du Prophète ﷺ. La réponse est sans ambiguïté : Aïcha est la personne la plus aimée du Prophète ﷺ, tous genres confondus. Le fait qu&apos;il le dise publiquement, sans gêne, montre que l&apos;expression de l&apos;amour conjugal est une sunna. Les savants notent également que la mention d&apos;Abu Bakr juste après Aïcha confirme le rang de ce compagnon."
                />

                <HadithBlock
                  number={8}
                  title="Le Prophète ﷺ buvait à l&apos;endroit où Aïcha avait posé ses lèvres"
                  narrator="Aisha"
                  arabic="كُنْتُ أَشْرَبُ وَأَنَا حَائِضٌ ثُمَّ أُنَاوِلُهُ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَيَضَعُ فَاهُ عَلَى مَوْضِعِ فِيَّ فَيَشْرَبُ"
                  translation="Je buvais alors que j&apos;étais en période de menstrues, puis je tendais le récipient au Prophète ﷺ qui posait sa bouche à l&apos;endroit où j&apos;avais posé la mienne, et il buvait."
                  source="Sahih Muslim, n°300"
                  grade="sahih"
                  explanation="Ce hadith révèle la tendresse et la proximité du Prophète ﷺ avec Aïcha. Dans une société où les menstrues étaient souvent perçues comme une source d&apos;impureté totale, le Prophète ﷺ montrait par ce geste que la femme en période de règles n&apos;est pas &laquo; impure &raquo; dans sa personne. Ce hadith a une double portée : il illustre l&apos;amour conjugal et il clarifie un point de fiqh sur la pureté rituelle."
                />

                <HadithBlock
                  number={9}
                  title="Le Prophète ﷺ faisait la course avec Aïcha"
                  narrator="Aisha"
                  arabic="سَابَقَنِي النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَسَبَقْتُهُ فَلَبِثْنَا حَتَّى إِذَا أَرْهَقَنِي اللَّحْمُ سَابَقَنِي فَسَبَقَنِي فَقَالَ هَذِهِ بِتِلْكَ"
                  translation="Le Prophète ﷺ a fait la course avec moi et je l&apos;ai devancé. Puis, après un certain temps, lorsque j&apos;eus pris du poids, il fit de nouveau la course avec moi et me devança. Il dit alors : Celle-ci pour celle-là."
                  source="Sunan Abu Dawud, n°2578 — Musnad Ahmad, n°24119"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus touchants de la Sunna. Il montre le Prophète ﷺ dans un moment de jeu et de complicité avec son épouse. La phrase &laquo; celle-ci pour celle-là &raquo; révèle son sens de l&apos;humour et sa capacité à créer des souvenirs joyeux dans la vie conjugale. Les savants en tirent que le divertissement licite entre époux fait partie de la Sunna et que le mariage ne doit pas être réduit à ses seules dimensions juridiques ou rituelles."
                />
              </section>

              {/* ============================================ */}
              {/* SECTION : L&apos;incident de la calomnie          */}
              {/* ============================================ */}
              <section id="incident-ifk" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;incident de la calomnie (al-ifk) et l&apos;innocence révélée
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;incident de la calomnie (<em>hadith al-ifk</em>) est l&apos;une des épreuves les plus douloureuses vécues par Aïcha et le Prophète ﷺ. Lors du retour d&apos;une expédition, Aïcha fut séparée du groupe et ramenée par Safwan ibn al-Mu&apos;attal. Les hypocrites, menés par Abdullah ibn Ubayy ibn Salul, profitèrent de cet incident pour répandre une calomnie d&apos;adultère. Pendant un mois, l&apos;épreuve fut immense pour le foyer prophétique, jusqu&apos;à ce qu&apos;Allah révèle les versets innocentant Aïcha.
                </p>

                <HadithBlock
                  number={10}
                  title="Le récit de la calomnie par Aïcha elle-même"
                  narrator="Aisha"
                  arabic="فَوَاللَّهِ مَا رَامَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَجْلِسَهُ وَلَا خَرَجَ أَحَدٌ مِنْ أَهْلِ الْبَيْتِ حَتَّى أُنْزِلَ عَلَيْهِ فَأَخَذَهُ مَا كَانَ يَأْخُذُهُ مِنَ الْبُرَحَاءِ حَتَّى إِنَّهُ لَيَتَحَدَّرُ مِنْهُ مِثْلُ الْجُمَانِ مِنَ الْعَرَقِ فِي يَوْمٍ شَاتٍ مِنْ ثِقَلِ الْقَوْلِ الَّذِي أُنْزِلَ عَلَيْهِ"
                  translation="Par Allah, le Messager d&apos;Allah ﷺ ne quitta pas sa place et personne ne sortit de la maison jusqu&apos;à ce que la révélation lui parvînt. Il fut alors saisi par ce qui le saisissait habituellement lors de la révélation, au point que des gouttes de sueur, semblables à des perles, coulaient de son front en un jour d&apos;hiver, en raison du poids de la parole qui lui était révélée."
                  source="Sahih Al-Bukhari, n°4141 — Sahih Muslim, n°2770"
                  grade="sahih"
                  explanation="Ce hadith, extrait du long récit de l&apos;ifk rapporté par Aïcha, décrit le moment précis de la révélation innocentant Aïcha. La description physique de la réception de la révélation — la sueur en plein hiver, l&apos;immobilité du Prophète ﷺ — est un témoignage unique sur la nature de la <em>wahy</em>. Aïcha rapporte que le Prophète ﷺ se releva en souriant et dit : &laquo; Ô Aïcha, Allah t&apos;a innocentée. &raquo; Ce moment marque la fin d&apos;une épreuve qui avait duré un mois entier."
                />

                <HadithBlock
                  number={11}
                  title="La réponse d&apos;Aïcha à la révélation de son innocence"
                  narrator="Aisha"
                  arabic="فَقَالَتْ أُمِّي قُومِي إِلَيْهِ فَقُلْتُ وَاللَّهِ لَا أَقُومُ إِلَيْهِ وَلَا أَحْمَدُ إِلَّا اللَّهَ عَزَّ وَجَلَّ هُوَ الَّذِي أَنْزَلَ بَرَاءَتِي"
                  translation="Ma mère me dit : Lève-toi vers lui (le Prophète ﷺ). Je répondis : Par Allah, je ne me lèverai pas vers lui et je ne louerai qu&apos;Allah — Exalté soit-Il — c&apos;est Lui qui a révélé mon innocence."
                  source="Sahih Al-Bukhari, n°4141 — Sahih Muslim, n°2770"
                  grade="sahih"
                  explanation="Cette réponse d&apos;Aïcha, prononcée au moment même où elle apprend son innocence divine, révèle la force de sa personnalité et la profondeur de sa foi. Elle ne remercie pas les hommes, mais Allah seul, reconnaissant que c&apos;est Lui qui a tranché la question. Les savants y voient un modèle de <em>tawakkul</em> (confiance en Allah) : face à l&apos;injustice humaine, Aïcha s&apos;en est remise à Allah et a été récompensée par une innocence gravée dans le Coran pour l&apos;éternité."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;incident de l&apos;ifk a eu des conséquences juridiques majeures : il a conduit à la révélation des règles sur la calomnie (<em>qadhf</em>), exigeant quatre témoins pour toute accusation d&apos;adultère et prescrivant quatre-vingts coups de fouet pour les calomniateurs. Ces règles protègent l&apos;honneur de chaque musulman et musulmane. Pour approfondir les enseignements sur le couple dans la Sunna, retrouvez notre article sur{" "}
                  <Link href="/hadith-mariage-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths sur le mariage en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur Aïcha
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants de l&apos;islam, à travers les siècles, ont unanimement reconnu le rang exceptionnel d&apos;Aïcha (radiAllahu anha). Leurs commentaires mettent en lumière son rôle irremplaçable dans la préservation et la transmission de la Sunna.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Aïcha était la plus savante de son époque, et de nombreux compagnons aînés la consultaient. Je ne connais aucune personne qui avait autant de savoir qu&apos;elle en matière de fiqh, de médecine et de poésie.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Az-Zuhri, cité dans <em>Siyar A&apos;lam an-Nubala</em> d&apos;Adh-Dhahabi
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Les versets de l&apos;innocence (sourate An-Nur) sont la plus grande preuve du rang d&apos;Aïcha. Allah l&apos;a défendue depuis le septième ciel, et quiconque la calomnie après cette révélation contredit le Coran lui-même.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Kathir, <em>Tafsir al-Qur&apos;an al-Azim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Parmi les spécificités d&apos;Aïcha : la révélation descendait sur le Prophète ﷺ alors qu&apos;il se trouvait dans sa couverture, ce qui n&apos;arrivait avec aucune autre de ses épouses. Et le Prophète ﷺ est mort dans sa maison, entre sa poitrine et son menton, et il a été enterré dans sa chambre.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces témoignages de savants de différentes époques montrent qu&apos;il existe un consensus (<em>ijma&apos;</em>) sur le rang éminent d&apos;Aïcha dans la science islamique. Son héritage ne se limite pas aux hadiths qu&apos;elle a rapportés : il englobe aussi sa méthodologie critique, ses corrections des erreurs de transmission et ses avis juridiques qui ont influencé le fiqh des quatre écoles.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques tirées de la vie d&apos;Aïcha
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;étude des hadiths d&apos;Aïcha (radiAllahu anha) permet de dégager des enseignements concrets, applicables dans la vie de chaque musulman et musulmane :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La quête du savoir est une obligation pour les femmes comme pour les hommes
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Aïcha incarne le modèle de la femme savante en islam. Son exemple montre que la recherche du savoir religieux n&apos;est pas un privilège masculin, mais un devoir partagé. Elle enseignait aux hommes et aux femmes sans distinction.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Vérifier et questionner avant de transmettre
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Aïcha ne se contentait pas de rapporter : elle vérifiait, corrigeait et confrontait les hadiths au Coran. Cette rigueur intellectuelle est un modèle pour quiconque transmet le savoir religieux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Exprimer l&apos;amour conjugal est une sunna
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ ne cachait pas son affection pour Aïcha. Les couples musulmans sont encouragés à exprimer leur amour, à jouer ensemble et à cultiver la complicité, loin de toute froideur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Placer sa confiance en Allah face à l&apos;injustice
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Face à la calomnie, Aïcha s&apos;en est remise à Allah plutôt qu&apos;aux hommes. Son <em>tawakkul</em> a été récompensé par une innocence éternelle gravée dans le Coran. Cette attitude est un modèle face aux épreuves de la vie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La douceur du Prophète ﷺ est le modèle à suivre
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Aïcha atteste que le Prophète ﷺ n&apos;a jamais frappé une femme ni un serviteur. Ce témoignage est une preuve irréfutable que la violence domestique n&apos;a aucune place dans la Sunna.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La gratitude envers Allah surpasse toute obligation
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ priait la nuit par gratitude, non par obligation. Cette leçon, rapportée par Aïcha, enseigne que la relation avec Allah ne se limite pas au strict minimum, mais s&apos;épanouit dans la reconnaissance et l&apos;amour.
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
                  description="Comprenez les hadiths d&apos;Aïcha dans leur langue originale et accédez directement aux sources de la Sunna prophétique."
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
                  title="Les hadiths sur la femme en islam"
                  description="Droits, devoirs et dignité de la femme à travers les paroles authentiques du Prophète ﷺ."
                  href="/hadith-femme-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths sur le mariage en islam"
                  description="Choix du conjoint, droits des époux, bienveillance conjugale et célébration du mariage selon la Sunna."
                  href="/hadith-mariage-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
