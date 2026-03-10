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
    "Hadiths sur la patience et les épreuves en islam : enseignements prophétiques",
  description:
    "Découvrez les hadiths authentiques sur la patience (sabr) et les épreuves en islam : texte arabe, traduction française et explication détaillée. La sagesse du Prophète ﷺ face aux difficultés.",
  openGraph: {
    title:
      "Hadiths sur la patience et les épreuves en islam : enseignements prophétiques",
    description:
      "Les hadiths authentiques sur la patience et les épreuves en islam : comment le Prophète ﷺ enseignait à endurer les difficultés avec foi et espérance.",
    url: "https://www.islamreligion.fr/hadith-patience-epreuves-islam",
    images: [
      {
        url: "/images/mains-priere-doua-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-patience-epreuves-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de la patience" },
  { id: "patience-epreuves", label: "La patience face aux épreuves" },
  { id: "expiation-peches", label: "Les épreuves comme expiation des péchés" },
  { id: "prophetes-eprouves", label: "Les plus éprouvés sont les prophètes" },
  { id: "recompense-patience", label: "La récompense de la patience" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Que signifie la patience (sabr) en islam ?",
    answer:
      "Le sabr en islam désigne la capacité à endurer les épreuves avec foi, à persévérer dans l\u2019obéissance à Allah et à s\u2019abstenir du péché. Les savants distinguent trois types de patience : la patience face aux malheurs (sabr \u2019ala al-bala\u2019), la patience dans l\u2019obéissance (sabr \u2019ala at-ta\u2019a) et la patience face aux tentations (sabr \u2019an al-ma\u2019siya). Le Prophète ﷺ a enseigné que la patience est une lumière (Muslim 223).",
  },
  {
    question:
      "Quels sont les hadiths les plus importants sur la patience ?",
    answer:
      "Parmi les hadiths les plus cités sur la patience, on trouve celui de Suhayb ar-Rumi : \u00ab L\u2019affaire du croyant est étonnante, tout est un bien pour lui \u00bb (Muslim 2999), celui d\u2019Abu Sa\u2019id al-Khudri sur l\u2019expiation des péchés par les épreuves (Bukhari 5641), et celui de Mus\u2019ab ibn Sa\u2019d sur les prophètes comme les plus éprouvés des hommes (Tirmidhi 2398). Ces hadiths couvrent les fondements de la patience islamique.",
  },
  {
    question:
      "Les épreuves effacent-elles les péchés en islam ?",
    answer:
      "Oui, selon plusieurs hadiths authentiques, les épreuves, maladies et soucis que subit le croyant avec patience sont une cause d\u2019expiation de ses péchés. Le Prophète ﷺ a dit : \u00ab Tout ce qui touche le musulman — fatigue, maladie, souci, tristesse, gêne, chagrin, même une épine qui le pique — Allah lui expie par cela une partie de ses péchés \u00bb (Bukhari 5641, Muslim 2573). Cela ne dispense pas du repentir, mais montre la miséricorde divine.",
  },
  {
    question:
      "Pourquoi les prophètes sont-ils les plus éprouvés selon les hadiths ?",
    answer:
      "Le Prophète ﷺ a expliqué que les personnes les plus éprouvées sont les prophètes, puis les meilleurs après eux, puis les meilleurs après eux (Tirmidhi 2398). L\u2019épreuve est proportionnelle à la foi : plus la foi est forte, plus l\u2019épreuve est grande. Cela montre que l\u2019épreuve n\u2019est pas un signe de châtiment divin, mais peut être un signe d\u2019élévation spirituelle et de proximité avec Allah.",
  },
  {
    question:
      "Comment pratiquer la patience au quotidien selon la Sunna ?",
    answer:
      "La Sunna enseigne plusieurs moyens de cultiver la patience : invoquer Allah dans l\u2019épreuve en disant \u00ab Inna lillahi wa inna ilayhi raji\u2019un \u00bb, se rappeler que toute épreuve a une fin, méditer les versets coraniques sur la patience, prendre exemple sur les prophètes, et se souvenir que la récompense de la patience est sans limite. Le Prophète ﷺ a également enseigné que la patience véritable se manifeste au premier choc de l\u2019épreuve (Bukhari 1283).",
  },
  {
    question:
      "Quelle est la différence entre patience et résignation en islam ?",
    answer:
      "La patience (sabr) en islam n\u2019est pas une résignation passive. Elle implique une acceptation active du décret divin, accompagnée d\u2019efforts pour améliorer sa situation dans les limites du licite. Le croyant patient accepte l\u2019épreuve tout en cherchant les moyens légitimes d\u2019y remédier. Les savants distinguent le sabr (patience), le rida (agrément) et le shukr (gratitude), ce dernier étant le degré le plus élevé : remercier Allah même dans l\u2019épreuve.",
  },
];

export default function HadithPatienceEpreuvesIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-patience-epreuves-islam/#article",
        headline:
          "Hadiths sur la patience et les épreuves en islam : enseignements prophétiques",
        description:
          "Découvrez les hadiths authentiques sur la patience (sabr) et les épreuves en islam : texte arabe, traduction française et explication détaillée.",
        image: "/images/mains-priere-doua-islam-invocation.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-patience-epreuves-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-patience-epreuves-islam/#breadcrumb",
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
            name: "Patience et épreuves",
            item: "https://www.islamreligion.fr/hadith-patience-epreuves-islam",
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
          title="Hadiths sur la patience et les épreuves en islam"
          subtitle="Les enseignements prophétiques sur la patience (sabr), les épreuves et la manière de les traverser avec foi, espérance et soumission au décret divin."
          imageSrc="/images/mains-priere-doua-islam-invocation.jpg"
          imageAlt="Hadiths sur la patience et les épreuves en islam, enseignements prophétiques"
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
                  Patience et épreuves
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
                    La patience (<em>sabr</em>) est l&apos;une des vertus les plus mentionnées dans le Coran et la Sunna, citée plus de 90 fois dans le Livre d&apos;Allah.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les épreuves ne sont pas un châtiment divin mais une purification : elles effacent les péchés du croyant patient.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les prophètes sont les plus éprouvés parmi les hommes, ce qui montre que l&apos;épreuve est proportionnelle à la foi.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La récompense des patients est illimitée : Allah dit qu&apos;Il rétribue les endurants &laquo;&nbsp;sans compter&nbsp;&raquo;.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de la patience et des épreuves
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths sur la patience, il est essentiel de rappeler le cadre coranique. Allah a annoncé que les croyants seraient éprouvés, et Il a promis une récompense immense à ceux qui endurent avec foi. Les versets de la sourate Al-Baqara constituent le fondement de la théologie islamique de l&apos;épreuve : celle-ci n&apos;est pas une punition, mais un test de la sincérité de la foi.
                </p>

                <HadithCard
                  arabic="وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ ۝ الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ ۝ أُولَٰئِكَ عَلَيْهِمْ صَلَوَاتٌ مِّن رَّبِّهِمْ وَرَحْمَةٌ ۖ وَأُولَٰئِكَ هُمُ الْمُهْتَدُونَ"
                  text="Très certainement, Nous vous éprouverons par un peu de peur, de faim et de diminution de biens, de personnes et de fruits. Et fais la bonne annonce aux endurants, ceux qui disent, quand un malheur les atteint : &laquo;&nbsp;Certes nous sommes à Allah, et c&apos;est à Lui que nous retournerons.&nbsp;&raquo; Ceux-là reçoivent des bénédictions de leur Seigneur, ainsi que la miséricorde ; et ceux-là sont les bien guidés."
                  source="Coran, sourate Al-Baqara (2:155-157)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces trois versets forment le socle coranique de la patience. Allah emploie le serment emphatique (&laquo;&nbsp;Très certainement, Nous vous éprouverons&nbsp;&raquo;) pour souligner l&apos;inévitabilité des épreuves. Elles touchent tous les aspects de la vie : la sécurité (peur), la subsistance (faim), les biens matériels, les proches et les récoltes. Puis Allah donne la réponse du croyant patient : <em>inna lillahi wa inna ilayhi raji&apos;un</em>. Cette parole exprime la soumission à la volonté divine et la certitude du retour vers Lui. Enfin, la triple récompense — bénédictions, miséricorde et guidée — montre que l&apos;épreuve traversée avec patience est un chemin de rapprochement avec Allah. C&apos;est sur cette base coranique que s&apos;appuient tous les hadiths qui suivent.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : La patience face aux épreuves      */}
              {/* ============================================ */}
              <section id="patience-epreuves" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La patience face aux épreuves selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a consacré de nombreux enseignements à la patience dans l&apos;épreuve. Ces hadiths définissent la nature du <em>sabr</em>, son moment décisif et sa place dans la vie du croyant. Ils montrent que toute l&apos;existence du musulman, dans ses joies comme dans ses peines, peut être une source de bien lorsqu&apos;elle est vécue avec foi.
                </p>

                <HadithBlock
                  number={1}
                  title="L&apos;affaire du croyant est tout entière un bien"
                  narrator="Suhayb ar-Rumi"
                  arabic="عَجَبًا لِأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ، وَلَيْسَ ذَاكَ لِأَحَدٍ إِلَّا لِلْمُؤْمِنِ، إِنْ أَصَابَتْهُ سَرَّاءُ شَكَرَ فَكَانَ خَيْرًا لَهُ، وَإِنْ أَصَابَتْهُ ضَرَّاءُ صَبَرَ فَكَانَ خَيْرًا لَهُ"
                  translation="Comme l&apos;affaire du croyant est étonnante ! Tout est un bien pour lui, et cela n&apos;est accordé à personne d&apos;autre que le croyant. S&apos;il lui arrive un bonheur, il remercie Allah et c&apos;est un bien pour lui. Et s&apos;il lui arrive un malheur, il patiente et c&apos;est un bien pour lui."
                  source="Sahih Muslim, n°2999"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des textes les plus fondamentaux sur la vision islamique de la vie. Le Prophète ﷺ y décrit un privilège exclusif du croyant : la capacité de transformer chaque situation en bien. Le bonheur devient gratitude (<em>shukr</em>), et le malheur devient patience (<em>sabr</em>). Dans les deux cas, le croyant est gagnant. Les savants soulignent que cette disposition n&apos;est pas automatique : elle suppose une foi active et une conscience permanente du décret divin (<em>qadar</em>)."
                />

                <HadithBlock
                  number={2}
                  title="La patience véritable se manifeste au premier choc"
                  narrator="Anas ibn Malik"
                  arabic="إِنَّمَا الصَّبْرُ عِنْدَ الصَّدْمَةِ الأُولَى"
                  translation="La patience véritable est celle qui se manifeste au premier choc (de l&apos;épreuve)."
                  source="Sahih Al-Bukhari, n°1283 — Sahih Muslim, n°926"
                  grade="sahih"
                  explanation="Le Prophète ﷺ a prononcé ces mots en passant devant une femme qui pleurait sur une tombe. Lorsqu&apos;elle le reconnut et voulut s&apos;excuser, il lui dit cette parole devenue proverbiale. Le sens est que la vraie épreuve de la patience est le moment immédiat de la nouvelle — quand la douleur est la plus vive et la réaction la plus spontanée. Après un certain temps, la peine s&apos;atténue naturellement et l&apos;endurance devient plus facile. Les savants en déduisent que la récompense de la patience est proportionnelle à sa difficulté, et que le premier instant est le plus méritoire."
                />

                <HadithBlock
                  number={3}
                  title="La patience est une lumière"
                  narrator="Abu Malik al-Ash&apos;ari"
                  arabic="الصَّبْرُ ضِيَاءٌ"
                  translation="La patience est une lumière (éclatante)."
                  source="Sahih Muslim, n°223"
                  grade="sahih"
                  explanation="Ce hadith fait partie d&apos;un récit plus long où le Prophète ﷺ décrit les différentes vertus par des métaphores lumineuses. Il distingue la patience (<em>diya&apos;</em>, lumière vive et chaude comme celle du soleil) de la prière (<em>nur</em>, lumière douce comme celle de la lune). La patience est comparée à la lumière du soleil car elle est brûlante et exigeante, mais elle illumine le chemin du croyant dans l&apos;obscurité des épreuves. Les savants y voient la preuve que la patience n&apos;est pas une simple résignation passive, mais une énergie spirituelle active qui éclaire et guide."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths posent les fondements de la patience islamique : une vertu qui transforme chaque épreuve en bien, qui se mesure dans l&apos;instant le plus difficile, et qui illumine la vie du croyant comme le soleil illumine le jour. Pour approfondir les invocations à prononcer dans les moments difficiles, consultez notre article sur les{" "}
                  <Link href="/hadith-du-jour" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths du jour et paroles authentiques
                  </Link>.
                </p>
              </section>

              {/* ================================================= */}
              {/* SECTION : Les épreuves comme expiation des péchés  */}
              {/* ================================================= */}
              <section id="expiation-peches" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les épreuves comme expiation des péchés
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des enseignements les plus consolants de la Sunna est que les épreuves subies avec patience purifient le croyant de ses péchés. Loin d&apos;être un signe d&apos;abandon divin, la maladie, la fatigue et les soucis sont autant d&apos;occasions d&apos;effacement des fautes. Le Prophète ﷺ a multiplié les paroles à ce sujet pour consoler les croyants éprouvés.
                </p>

                <HadithBlock
                  number={4}
                  title="Toute épreuve efface un péché"
                  narrator="Abu Sa&apos;id al-Khudri et Abu Hurayra"
                  arabic="مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ وَلَا هَمٍّ وَلَا حُزْنٍ وَلَا أَذًى وَلَا غَمٍّ حَتَّى الشَّوْكَةِ يُشَاكُهَا إِلَّا كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ"
                  translation="Tout ce qui touche le musulman — fatigue, maladie, souci, tristesse, gêne, chagrin, même une épine qui le pique — Allah lui expie par cela une partie de ses péchés."
                  source="Sahih Al-Bukhari, n°5641 — Sahih Muslim, n°2573"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus connus sur la miséricorde divine dans l&apos;épreuve. Le Prophète ﷺ énumère sept formes de souffrance, de la plus grave (la maladie chronique) à la plus légère (la piqûre d&apos;épine), pour montrer qu&apos;aucune douleur n&apos;est vaine aux yeux d&apos;Allah. Le terme <em>kaffara</em> (expiation) indique un effacement automatique des péchés, à condition que le croyant ne se révolte pas contre le décret divin. Les savants précisent que cela concerne les péchés mineurs ; les péchés majeurs nécessitent un repentir sincère (<em>tawba</em>)."
                />

                <HadithBlock
                  number={5}
                  title="Le croyant éprouvé jusqu&apos;à marcher sans péché"
                  narrator="Abu Hurayra"
                  arabic="مَا يَزَالُ الْبَلَاءُ بِالْمُؤْمِنِ وَالْمُؤْمِنَةِ فِي نَفْسِهِ وَوَلَدِهِ وَمَالِهِ حَتَّى يَلْقَى اللَّهَ وَمَا عَلَيْهِ خَطِيئَةٌ"
                  translation="L&apos;épreuve ne cesse d&apos;atteindre le croyant et la croyante dans sa personne, ses enfants et ses biens, jusqu&apos;à ce qu&apos;il rencontre Allah sans avoir aucun péché sur lui."
                  source="Jami&apos; at-Tirmidhi, n°2399"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en montrant l&apos;aboutissement du processus d&apos;expiation. Les épreuves successives — touchant le corps, la famille et les biens — finissent par purifier entièrement le croyant patient, au point qu&apos;il se présente devant Allah le Jour de la Résurrection totalement lavé de ses fautes. C&apos;est une promesse extraordinaire qui donne un sens profond à chaque difficulté traversée. L&apos;imam At-Tirmidhi classe ce hadith parmi les hadiths de l&apos;espérance (<em>ahadith ar-raja&apos;</em>)."
                />

                <HadithBlock
                  number={6}
                  title="La fièvre purifie comme le soufflet purifie le fer"
                  narrator="Jabir ibn &apos;Abdillah"
                  arabic="عَادَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَرِيضًا فَرَآهُ يَحْمَى فَقَالَ: أَبْشِرْ فَإِنَّ اللَّهَ يَقُولُ: هِيَ نَارِي أُسَلِّطُهَا عَلَى عَبْدِي الْمُؤْمِنِ فِي الدُّنْيَا لِتَكُونَ حَظَّهُ مِنَ النَّارِ يَوْمَ الْقِيَامَةِ"
                  translation="Le Messager d&apos;Allah ﷺ rendit visite à un malade et le vit fiévreux. Il dit : &laquo;&nbsp;Réjouis-toi ! Car Allah dit : elle (la fièvre) est Mon feu que J&apos;impose à Mon serviteur croyant dans ce bas monde pour qu&apos;elle soit sa part du Feu le Jour de la Résurrection.&nbsp;&raquo;"
                  source="Sunan Ibn Majah, n°3470"
                  grade="hasan"
                  explanation="Ce hadith qudsi, rapporté par le Prophète ﷺ de la part d&apos;Allah, offre une perspective bouleversante sur la maladie. La fièvre, avec sa chaleur et sa douleur, est présentée comme un substitut au feu de l&apos;Enfer. Le croyant qui endure la maladie avec patience voit sa part de châtiment diminuer dans l&apos;au-delà. Cette parole est un immense réconfort pour les malades, leur rappelant que chaque instant de souffrance est compté et récompensé. Les savants y voient aussi un encouragement à rendre visite aux malades et à les consoler par ce type de bonnes nouvelles."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la science du hadith, la croyance islamique et la spiritualité avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ================================================== */}
              {/* SECTION : Les plus éprouvés sont les prophètes      */}
              {/* ================================================== */}
              <section id="prophetes-eprouves" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les plus éprouvés sont les prophètes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a enseigné que l&apos;intensité des épreuves est proportionnelle au rang spirituel de la personne. Les prophètes, en tant qu&apos;êtres humains les plus proches d&apos;Allah, ont été les plus durement éprouvés. Ce principe fondamental permet au croyant de replacer ses propres souffrances dans une perspective plus large et de trouver en l&apos;exemple des prophètes un modèle de patience.
                </p>

                <HadithBlock
                  number={7}
                  title="Les gens les plus éprouvés sont les prophètes"
                  narrator="Mus&apos;ab ibn Sa&apos;d"
                  arabic="أَشَدُّ النَّاسِ بَلَاءً الْأَنْبِيَاءُ ثُمَّ الْأَمْثَلُ فَالْأَمْثَلُ، يُبْتَلَى الرَّجُلُ عَلَى حَسَبِ دِينِهِ، فَإِنْ كَانَ فِي دِينِهِ صُلْبًا اشْتَدَّ بَلَاؤُهُ، وَإِنْ كَانَ فِي دِينِهِ رِقَّةٌ ابْتُلِيَ عَلَى قَدْرِ دِينِهِ"
                  translation="Les gens les plus éprouvés sont les prophètes, puis les meilleurs après eux, puis les meilleurs après eux. L&apos;homme est éprouvé selon (la solidité de) sa religion : si sa religion est solide, son épreuve est plus intense ; et si sa religion est faible, il est éprouvé selon le degré de sa religion."
                  source="Jami&apos; at-Tirmidhi, n°2398 — Sunan Ibn Majah, n°4023"
                  grade="sahih"
                  explanation="Ce hadith établit une hiérarchie de l&apos;épreuve en fonction de la foi. Le croyant fort est davantage éprouvé car il est capable d&apos;endurer davantage, et parce que l&apos;épreuve l&apos;élève en degrés auprès d&apos;Allah. Ce principe explique pourquoi les prophètes — Nuh, Ibrahim, Musa, &apos;Isa et Muhammad ﷺ — ont tous traversé des épreuves immenses. Le croyant qui souffre peut donc se consoler en se disant que son épreuve est un signe de la valeur qu&apos;Allah lui accorde. L&apos;imam Ibn al-Qayyim commente : &laquo;&nbsp;l&apos;épreuve est un honneur déguisé en affliction&nbsp;&raquo;."
                />

                <HadithBlock
                  number={8}
                  title="Quand Allah veut du bien pour quelqu&apos;un, Il l&apos;éprouve"
                  narrator="Abu Hurayra"
                  arabic="مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُصِبْ مِنْهُ"
                  translation="Celui pour qui Allah veut du bien, Il l&apos;éprouve (par des afflictions)."
                  source="Sahih Al-Bukhari, n°5645"
                  grade="sahih"
                  explanation="Ce hadith concis mais puissant renverse la perception commune de l&apos;épreuve. La plupart des gens voient dans la souffrance un signe de malheur ou de colère divine. Or le Prophète ﷺ affirme le contraire : l&apos;épreuve peut être un signe de l&apos;amour d&apos;Allah pour Son serviteur. Il l&apos;éprouve pour le purifier, l&apos;élever et le rapprocher de Lui. Les savants précisent que ce hadith concerne le croyant qui réagit avec patience et acceptation, car l&apos;épreuve non accompagnée de patience peut être un châtiment."
                />

                <HadithBlock
                  number={9}
                  title="L&apos;épreuve ne quitte pas le croyant"
                  narrator="Abu Hurayra"
                  arabic="مَا يَزَالُ الْبَلَاءُ بِالْمُؤْمِنِ وَالْمُؤْمِنَةِ فِي جَسَدِهِ وَأَهْلِهِ وَمَالِهِ حَتَّى يَلْقَى اللَّهَ وَمَا عَلَيْهِ مِنْ خَطِيئَةٍ"
                  translation="L&apos;épreuve ne cesse d&apos;atteindre le croyant et la croyante — dans son corps, sa famille et ses biens — jusqu&apos;à ce qu&apos;il rencontre Allah sans aucun péché."
                  source="Jami&apos; at-Tirmidhi, n°2399"
                  grade="sahih"
                  explanation="Ce hadith, rapporté dans un contexte différent de celui cité plus haut (hadith n°5), est ici mentionné dans le cadre de la section sur les prophètes car il montre que le croyant sincère, à l&apos;image des prophètes, traverse des épreuves continues. La succession des épreuves dans le corps (maladie), la famille (perte, conflit) et les biens (appauvrissement) finit par effacer la totalité des péchés. Le croyant est ainsi purifié progressivement tout au long de sa vie, jusqu&apos;à se présenter devant Allah dans un état de pureté complète."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;exemple des prophètes dans l&apos;épreuve est un pilier de la spiritualité islamique. Pour découvrir d&apos;autres enseignements prophétiques sur les vertus du croyant, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : La récompense de la patience */}
              {/* ====================================== */}
              <section id="recompense-patience" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La récompense de la patience selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Allah a promis aux patients une récompense sans limites. Les hadiths suivants précisent les formes de cette rétribution : le Paradis, l&apos;agrément divin et une consolation qui dépasse toute imagination humaine. Ces promesses sont la motivation suprême du croyant dans les moments les plus sombres.
                </p>

                <HadithBlock
                  number={10}
                  title="Allah n&apos;a pas de récompense autre que le Paradis pour celui qui perd un proche"
                  narrator="Abu Hurayra"
                  arabic="يَقُولُ اللَّهُ تَعَالَى: مَا لِعَبْدِي الْمُؤْمِنِ عِنْدِي جَزَاءٌ إِذَا قَبَضْتُ صَفِيَّهُ مِنْ أَهْلِ الدُّنْيَا ثُمَّ احْتَسَبَهُ إِلَّا الْجَنَّةُ"
                  translation="Allah le Très Haut dit : &laquo;&nbsp;Je n&apos;ai d&apos;autre récompense pour Mon serviteur croyant, lorsque Je prends (la vie de) son être cher parmi les gens de ce monde et qu&apos;il patiente en espérant la récompense, que le Paradis.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°6424"
                  grade="sahih"
                  explanation="Ce hadith qudsi est l&apos;une des promesses divines les plus bouleversantes. Le terme <em>safiyyahu</em> (son être cher, son ami intime) désigne tout proche dont la perte est profondément ressentie : un enfant, un conjoint, un parent, un ami. La condition est double : la perte et la patience espérant la récompense divine (<em>ihtisab</em>). La récompense est le Paradis lui-même, sans intermédiaire ni calcul. Les savants y voient la preuve que la patience face à la mort d&apos;un proche est l&apos;une des plus hautes formes de sabr."
                />

                <HadithBlock
                  number={11}
                  title="La perte de deux enfants et le Paradis"
                  narrator="Abu Musa al-Ash&apos;ari"
                  arabic="إِذَا مَاتَ وَلَدُ الْعَبْدِ قَالَ اللَّهُ لِمَلَائِكَتِهِ: قَبَضْتُمْ وَلَدَ عَبْدِي؟ فَيَقُولُونَ: نَعَمْ. فَيَقُولُ: قَبَضْتُمْ ثَمَرَةَ فُؤَادِهِ؟ فَيَقُولُونَ: نَعَمْ. فَيَقُولُ: مَاذَا قَالَ عَبْدِي؟ فَيَقُولُونَ: حَمِدَكَ وَاسْتَرْجَعَ. فَيَقُولُ: ابْنُوا لِعَبْدِي بَيْتًا فِي الْجَنَّةِ وَسَمُّوهُ بَيْتَ الْحَمْدِ"
                  translation="Lorsque l&apos;enfant du serviteur meurt, Allah dit à Ses anges : &laquo;&nbsp;Avez-vous pris l&apos;enfant de Mon serviteur ?&nbsp;&raquo; Ils répondent : &laquo;&nbsp;Oui.&nbsp;&raquo; Il dit : &laquo;&nbsp;Avez-vous pris le fruit de son cœur ?&nbsp;&raquo; Ils répondent : &laquo;&nbsp;Oui.&nbsp;&raquo; Il dit : &laquo;&nbsp;Qu&apos;a dit Mon serviteur ?&nbsp;&raquo; Ils répondent : &laquo;&nbsp;Il T&apos;a loué et a dit : nous sommes à Allah et c&apos;est à Lui que nous retournons.&nbsp;&raquo; Allah dit alors : &laquo;&nbsp;Construisez pour Mon serviteur une maison au Paradis et appelez-la la maison de la louange.&nbsp;&raquo;"
                  source="Jami&apos; at-Tirmidhi, n°1021"
                  grade="hasan"
                  explanation="Ce hadith décrit un échange entre Allah et Ses anges d&apos;une tendresse immense. Allah, qui sait tout, interroge néanmoins Ses anges pour mettre en valeur la réaction du serviteur éprouvé. L&apos;expression &laquo;&nbsp;le fruit de son cœur&nbsp;&raquo; (<em>thamarat fu&apos;adihi</em>) désigne l&apos;enfant, ce qu&apos;il y a de plus cher au cœur d&apos;un parent. La récompense — une maison au Paradis nommée &laquo;&nbsp;la maison de la louange&nbsp;&raquo; — montre que la louange d&apos;Allah dans l&apos;épreuve est l&apos;acte le plus noble qui soit. Ce hadith est d&apos;un grand réconfort pour les parents endeuillés."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la patience et les épreuves
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur la patience. Leurs réflexions permettent de comprendre la profondeur spirituelle de cette vertu et son rôle central dans la vie du croyant.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La patience est de trois types : la patience face au malheur, la patience dans l&apos;obéissance à Allah et la patience face aux tentations du péché. Celui qui réunit les trois a atteint la perfection de la patience. Et le degré le plus élevé au-dessus de la patience est l&apos;agrément (<em>rida</em>) : être satisfait du décret d&apos;Allah, non pas par indifférence, mais par certitude en Sa sagesse.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>&apos;Uddat as-Sabirin</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le sabr (patience) dans la langue arabe signifie le fait de retenir. La patience religieuse consiste à retenir l&apos;âme de la plainte excessive, à retenir la langue des lamentations et à retenir les membres des actes interdits comme se frapper le visage ou déchirer ses vêtements. Quiconque parvient à ces trois choses a atteint la patience véritable.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Allah a mentionné la patience dans le Coran dans plus de quatre-vingt-dix endroits. Il l&apos;a rendue condition de la direction (<em>imama</em>) dans la religion et l&apos;a associée à la prière dans Son Livre. Cela montre que la patience est la moitié de la foi : l&apos;autre moitié étant la gratitude (<em>shukr</em>).&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Taymiyya, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires des savants mettent en lumière la richesse du concept de <em>sabr</em> en islam. Il ne s&apos;agit pas d&apos;une simple endurance passive, mais d&apos;une discipline spirituelle complète qui englobe le cœur, la langue et les actes. Les savants soulignent également que la patience et la gratitude sont les deux faces d&apos;une même pièce, et que le croyant accompli sait pratiquer les deux selon les circonstances.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques pour le croyant éprouvé
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths et commentaires présentés dans cet article permet de dégager des enseignements concrets pour traverser les épreuves de la vie :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Prononcer l&apos;istirja&apos; dès l&apos;épreuve
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Dire &laquo;&nbsp;<em>inna lillahi wa inna ilayhi raji&apos;un</em>&nbsp;&raquo; (nous sommes à Allah et c&apos;est à Lui que nous retournons) est la première réaction enseignée par le Coran et la Sunna. Cette parole ancre le croyant dans la réalité de l&apos;appartenance à Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se rappeler que l&apos;épreuve purifie
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Chaque douleur, chaque souci, chaque fatigue efface des péchés. Cette conviction transforme la souffrance en espérance et empêche le désespoir de s&apos;installer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Prendre exemple sur les prophètes
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les prophètes ont traversé des épreuves bien plus grandes que les nôtres. Méditer leur histoire — Ayyub dans la maladie, Yaqub dans la séparation, Muhammad ﷺ dans la persécution — relativise nos propres souffrances.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Éviter la plainte excessive et la révolte
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La patience islamique n&apos;interdit pas les larmes ni l&apos;expression de la douleur. Le Prophète ﷺ a pleuré la mort de son fils Ibrahim. Ce qui est interdit, c&apos;est la révolte contre le décret divin, les lamentations excessives et les actes de désespoir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Multiplier les invocations et la prière
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Allah a associé la patience à la prière dans le Coran : &laquo;&nbsp;Cherchez secours dans la patience et la prière&nbsp;&raquo; (Al-Baqara, 45). La prière est le refuge du croyant éprouvé et le moyen le plus direct de communiquer avec Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Voir l&apos;épreuve comme un signe d&apos;amour divin
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a enseigné que celui pour qui Allah veut du bien, Il l&apos;éprouve. Ce changement de perspective transforme radicalement le rapport à la souffrance : l&apos;épreuve devient un honneur, non une malédiction.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur la patience dans leur langue originale et approfondissez votre connaissance de la Sunna."
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
                  description="Les enseignements prophétiques sur les vertus du caractère, la douceur et la bienveillance."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la tristesse en islam"
                  description="Les paroles du Prophète ﷺ pour consoler le croyant dans la tristesse et l&apos;affliction."
                  href="/hadith-tristesse-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
