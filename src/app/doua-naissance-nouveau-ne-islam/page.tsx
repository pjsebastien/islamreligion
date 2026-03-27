import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua pour la naissance en islam : invocations pour le nouveau-ne",
  description:
    "Decouvrez les douas pour la naissance en islam : invocations authentiques en arabe avec phonetique et traduction, adhan dans l'oreille du bebe, tahnik, aqiqa, doua de felicitations et protection du nouveau-ne.",
  openGraph: {
    title:
      "Doua pour la naissance en islam : invocations pour le nouveau-ne",
    description:
      "Les invocations authentiques pour la naissance et le nouveau-ne en islam : textes en arabe, phonetique, traduction et hadiths sur les rites de la naissance.",
    url: "https://www.islamreligion.fr/doua-naissance-nouveau-ne-islam",
    images: [
      {
        url: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-naissance-nouveau-ne-islam",
  },
};

const tocItems = [
  { id: "naissance-islam", label: "La naissance en islam" },
  { id: "adhan-oreille", label: "L'adhan dans l'oreille du bebe" },
  { id: "tahnik-dattes", label: "Le tahnik : la datte dans la bouche" },
  { id: "aqiqa", label: "La aqiqa : le sacrifice du nouveau-ne" },
  { id: "doua-felicitations", label: "Doua de felicitations (Barakallahu laka)" },
  { id: "doua-protection", label: "Doua pour la protection du bebe" },
  { id: "choisir-nom", label: "Choisir un bon nom pour l'enfant" },
  { id: "faq", label: "Questions frequentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua pour feliciter une naissance en islam ?",
    answer:
      "La doua authentique pour feliciter une naissance est : \u00ab\u00a0Barakallahu laka fil-mawhubi laka, wa shakarta-l-wahiba, wa balagha ashuddahu, wa ruziqta birrahu\u00a0\u00bb, qui signifie : \u00ab\u00a0Qu&apos;Allah te benisse dans ce qu&apos;Il t&apos;a accorde, que tu remercies le Donateur, qu&apos;il atteigne sa pleine maturite et que tu sois gratifie de sa piete filiale\u00a0\u00bb.",
  },
  {
    question: "Faut-il faire l'adhan dans l'oreille du nouveau-ne ?",
    answer:
      "Oui, il est recommande (sunna) de prononcer l&apos;adhan (appel a la priere) dans l&apos;oreille droite du nouveau-ne des sa naissance. Cette pratique est rapportee dans un hadith d&apos;Abu Rafi&apos; (qu&apos;Allah l&apos;agree) qui a vu le Prophete (paix et salut sur lui) faire l&apos;adhan dans l&apos;oreille de Al-Hassan ibn Ali a sa naissance (at-Tirmidhi).",
  },
  {
    question: "Qu'est-ce que le tahnik en islam ?",
    answer:
      "Le tahnik est une sunna qui consiste a frotter le palais du nouveau-ne avec une datte ramollie ou du miel. Le Prophete (paix et salut sur lui) pratiquait lui-meme ce rite pour les bebes des compagnons. Aisha (qu&apos;Allah l&apos;agree) rapporte que les nouveau-nes etaient amenes au Prophete qui machait une datte et frottait le palais du bebe avec (al-Bukhari et Muslim).",
  },
  {
    question: "Quand faut-il faire la aqiqa pour un nouveau-ne ?",
    answer:
      "La aqiqa doit etre accomplie le septieme jour apres la naissance. Le Prophete (paix et salut sur lui) a dit : \u00ab\u00a0Tout enfant est lie a sa aqiqa : on sacrifie pour lui le septieme jour, on lui rase la tete et on lui donne un nom\u00a0\u00bb (at-Tirmidhi, Abu Dawud). On sacrifie deux moutons pour un garcon et un mouton pour une fille.",
  },
  {
    question: "Quelle doua reciter pour proteger un nouveau-ne ?",
    answer:
      "La doua de protection la plus authentique est celle qu&apos;Ibn Abbas rapporte du Prophete (paix et salut sur lui) : \u00ab\u00a0U&apos;idhukuma bi kalimatillahi-t-tammati min kulli shaytanin wa hammatin wa min kulli &apos;aynin lammah\u00a0\u00bb (Je vous place sous la protection des Paroles parfaites d&apos;Allah contre tout diable, tout animal venimeux et contre tout mauvais oeil). Le Prophete recitait cette invocation pour al-Hassan et al-Husayn.",
  },
  {
    question: "Comment choisir un bon prenom en islam ?",
    answer:
      "Le Prophete (paix et salut sur lui) a recommande de donner de beaux noms aux enfants. Les meilleurs prenoms sont &apos;Abdullah et &apos;Abdur-Rahman selon le hadith rapporte par Muslim. Les noms des prophetes (Muhammad, Ibrahim, Yusuf, Maryam) et les noms ayant un sens positif sont egalement recommandes. Il est interdit de donner un nom qui implique la servitude a autre qu&apos;Allah.",
  },
  {
    question: "Peut-on faire la doua de naissance en francais ?",
    answer:
      "Oui, les invocations personnelles pour le nouveau-ne peuvent etre faites dans toute langue, y compris le francais. Cependant, il est recommande d&apos;apprendre les douas prophetiques en arabe pour beneficier de leur formulation originale. Les douas specifiques comme celle de felicitations (Barakallahu laka) sont idealement recitees en arabe, mais invoquer pour le bien du bebe en francais est parfaitement valide.",
  },
  {
    question: "Quels sont les droits du nouveau-ne en islam ?",
    answer:
      "Le nouveau-ne en islam a plusieurs droits fondamentaux : recevoir l&apos;adhan dans son oreille, le tahnik (frotter le palais avec une datte), recevoir un bon nom le septieme jour, la aqiqa (sacrifice), le rasage de la tete avec l&apos;aumone en poids d&apos;argent, l&apos;allaitement maternel (recommande jusqu&apos;a deux ans) et la circoncision pour les garcons. Ces rites visent a accueillir l&apos;enfant dans la communaute musulmane avec benediction et protection.",
  },
];

export default function DouaNaissanceNouveauNeIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-naissance-nouveau-ne-islam/#article",
        headline:
          "Doua pour la naissance en islam : invocations pour le nouveau-ne",
        description:
          "Decouvrez les douas pour la naissance en islam : invocations authentiques en arabe, adhan, tahnik, aqiqa, doua de felicitations et protection du nouveau-ne.",
        image: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        datePublished: "2026-03-14",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-naissance-nouveau-ne-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-naissance-nouveau-ne-islam/#breadcrumb",
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
            name: "Doua en islam",
            item: "https://www.islamreligion.fr/doua-islam",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Doua pour la naissance",
            item: "https://www.islamreligion.fr/doua-naissance-nouveau-ne-islam",
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
          title="Doua pour la naissance en islam : invocations pour le nouveau-ne"
          subtitle="Les invocations authentiques pour accueillir un nouveau-ne en islam : adhan, tahnik, aqiqa, douas de felicitations et de protection, tirees du Coran et de la Sunna."
          imageSrc="/images/arches-mosquee-moucharabieh-lumiere-doree.jpg"
          imageAlt="Arches de mosquee avec moucharabieh et lumiere doree symbolisant la benediction de la naissance en islam"
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
                <Link href="/doua-islam" className="hover:text-primary">
                  Doua en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Doua pour la naissance</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En resume
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La naissance d&apos;un enfant est l&apos;un des plus grands
                  bienfaits d&apos;Allah. L&apos;islam a prevu un ensemble de
                  rites et d&apos;invocations pour accueillir le nouveau-ne dans
                  les meilleures conditions spirituelles : l&apos;adhan dans son
                  oreille, le tahnik avec une datte, la aqiqa le septieme jour,
                  le choix d&apos;un bon nom et des douas de felicitations et de
                  protection. Ces sunnas prophetiques enveloppent le bebe de
                  benediction des ses premiers instants de vie.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La naissance en islam */}
              {/* ============================================ */}
              <section id="naissance-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La naissance en islam : un evenement beni et sacre
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La <strong>doua naissance</strong> occupe une place
                  essentielle dans la tradition prophetique. En islam, la venue
                  au monde d&apos;un enfant est consideree comme une
                  <strong> ni&apos;ma</strong> (bienfait) d&apos;Allah qui
                  merite reconnaissance et gratitude. Le Coran mentionne a
                  plusieurs reprises la joie liee a la naissance, notamment
                  celle des prophetes Ibrahim, Zakariya et Maryam (paix sur
                  eux), illustrant ainsi le caractere sacre de cet evenement.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete Muhammad (paix et salut sur lui) a institue
                  plusieurs rites et invocations pour marquer la naissance
                  d&apos;un nouveau-ne. Ces sunnas ne sont pas de simples
                  traditions culturelles : elles constituent un cadre spirituel
                  complet visant a placer l&apos;enfant sous la protection
                  divine des les premiers instants de sa vie. Chaque geste,
                  chaque parole prononcee a la naissance porte une signification
                  profonde et une sagesse que les savants de l&apos;islam ont
                  longuement commentee.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran :
                  &laquo;&nbsp;L&apos;argent et les enfants sont la parure de
                  la vie d&apos;ici-bas&nbsp;&raquo; (Al-Kahf, 18:46). Cette
                  ayah souligne que les enfants sont un ornement et une source
                  de bonheur pour les parents, mais aussi une responsabilite
                  devant Allah. C&apos;est pourquoi l&apos;islam encadre la
                  naissance par des rites qui rappellent au croyant que cet
                  enfant est un depot (amana) confie par le Createur.
                </p>

                <HadithCard
                  arabic="ما من مسلم يموت له ثلاثة من الولد لم يبلغوا الحنث إلا أدخله الله الجنة بفضل رحمته إياهم"
                  text="Aucun musulman dont trois enfants meurent avant l'age de puberte ne sera prive du Paradis par la grace de la misericorde d'Allah envers eux."
                  source="Rapporte par al-Bukhari (1381) et Muslim (2632)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre la valeur immense que l&apos;islam accorde
                  aux enfants et la misericorde d&apos;Allah envers les parents.
                  La naissance est donc un moment de joie, de gratitude et
                  d&apos;invocation. Les parents sont invites a multiplier les
                  douas pour leur enfant, a le proteger par les invocations
                  prophetiques et a l&apos;accueillir selon les rites
                  etablis par la Sunna. Pour decouvrir l&apos;ensemble des
                  invocations en islam, consultez notre{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">guide complet sur la doua en islam</Link>.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en invocation avec rayons dores symbolisant la doua pour la naissance d'un enfant en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : L'adhan dans l'oreille */}
              {/* ============================================ */}
              <section id="adhan-oreille" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;adhan dans l&apos;oreille du nouveau-ne : premiere parole entendue
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;une des premieres sunnas a accomplir a la naissance
                  d&apos;un bebe est de prononcer l&apos;adhan (l&apos;appel a
                  la priere) dans son oreille droite. Ce geste prophetique fait
                  en sorte que les premieres paroles que l&apos;enfant entend
                  en ce monde soient les mots de l&apos;unicite d&apos;Allah et
                  de la grandeur divine. C&apos;est un acte profondement
                  symbolique qui inscrit le tawhid (monotheisme) dans les
                  premiers instants de la vie du nouveau-ne.
                </p>

                <HadithCard
                  arabic="رأيت رسول الله صلى الله عليه وسلم أذَّن في أُذُن الحسن بن علي حين ولدته فاطمة بالصلاة"
                  text="J'ai vu le Messager d'Allah (paix et salut sur lui) faire l'adhan dans l'oreille de al-Hassan ibn Ali lorsque Fatima le mit au monde."
                  source="Rapporte par at-Tirmidhi (1514) et Abu Dawud (5105)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent plusieurs sagesses derriere cet acte.
                  Premierement, l&apos;adhan contient la shahada (attestation
                  de foi), ce qui signifie que le premier message recu par
                  l&apos;enfant est celui de l&apos;islam. Deuxiemement, les
                  mots de l&apos;adhan chassent le Shaytan qui est present au
                  moment de la naissance, comme l&apos;attestent d&apos;autres
                  hadiths. Troisiemement, c&apos;est un appel symbolique a la
                  priere et a la soumission a Allah, qui accompagnera
                  l&apos;enfant tout au long de sa vie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;imam Ibn al-Qayyim (qu&apos;Allah lui fasse
                  misericorde) a souligne dans son ouvrage &laquo;&nbsp;Tuhfat
                  al-Mawdud&nbsp;&raquo; que l&apos;adhan est prononce dans
                  l&apos;oreille droite du bebe, car la droite est privilegiee
                  en islam pour les actes nobles. Le pere, le grand-pere ou
                  toute personne de confiance peut accomplir cet acte. Il est
                  recommande de le faire immediatement apres la naissance ou
                  dans les plus brefs delais.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;adhan dans l&apos;oreille droite :</strong>{" "}
                      cette sunna est rapportee par plusieurs compagnons et
                      constitue la pratique la plus authentifiee pour
                      l&apos;accueil du nouveau-ne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;iqama dans l&apos;oreille gauche :</strong>{" "}
                      certains savants recommandent egalement de prononcer
                      l&apos;iqama (l&apos;annonce de la priere) dans
                      l&apos;oreille gauche, bien que ce hadith soit considere
                      comme faible par certains muhaddithine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La voix douce et claire :</strong> l&apos;adhan
                      doit etre prononce a voix basse et douce, directement
                      dans l&apos;oreille du bebe, sans le brusquer ni lui
                      faire peur.
                    </span>
                  </li>
                </ul>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez les invocations en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophetiques dans leur langue originale. Decouvrez des formations adaptees aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandees"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Le tahnik */}
              {/* ============================================ */}
              <section id="tahnik-dattes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tahnik : frotter le palais du bebe avec une datte
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>tahnik</strong> est une sunna prophetique qui
                  consiste a macher une datte ou un morceau de datte jusqu&apos;a
                  ce qu&apos;elle devienne molle, puis a frotter delicatement
                  le palais du nouveau-ne avec. Ce rite simple mais profond
                  etait pratique par le Prophete (paix et salut sur lui)
                  lui-meme pour les enfants des compagnons. Il symbolise la
                  douceur avec laquelle l&apos;islam accueille l&apos;enfant
                  dans la vie.
                </p>

                <HadithCard
                  arabic="جئت بعبد الله بن الزبير إلى النبي صلى الله عليه وسلم يُحَنِّكُه فطلب تمرة فمضغها ثم أدخلها في فيه"
                  text="J'apportai Abdullah ibn az-Zubayr au Prophete (paix et salut sur lui) pour qu'il lui fasse le tahnik. Il demanda une datte, la macha puis la mit dans la bouche du bebe."
                  source="Rapporte par al-Bukhari (5467) et Muslim (2146)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La medecine moderne a confirme certaines sagesses derriere
                  cette pratique. Le sucre contenu dans la datte aide a
                  stabiliser le taux de glycemie du nouveau-ne, qui peut etre
                  bas dans les premieres heures de vie. De plus, le gout sucre
                  calme le bebe et stimule son reflexe de succion. Ce lien
                  entre la sunna prophetique et les decouvertes scientifiques
                  contemporaines illustre la profondeur de la guidance divine.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le tahnik peut etre realise par le pere, un savant ou toute
                  personne pieuse de la famille. Les savants recommandent
                  d&apos;utiliser une datte &apos;ajwa (de Medine) si possible,
                  en reference a la pratique prophetique. Si la datte n&apos;est
                  pas disponible, tout aliment sucre naturel peut convenir. Il
                  est important de le faire avec delicatesse, en frottant
                  legerement le palais de droite a gauche, et d&apos;invoquer
                  Allah pour la benediction de l&apos;enfant pendant ce geste.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                    Comment faire le tahnik
                  </p>
                  <ul className="mt-3 space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-secondary">1.</span>
                      <span>Prendre une datte molle (ou la macher legerement pour la ramollir)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-secondary">2.</span>
                      <span>Frotter delicatement le palais du bebe avec le doigt enduit de datte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-secondary">3.</span>
                      <span>Invoquer Allah pour la benediction et la protection de l&apos;enfant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-secondary">4.</span>
                      <span>Ce rite est idealement realise dans les premieres heures suivant la naissance</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : La aqiqa */}
              {/* ============================================ */}
              <section id="aqiqa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La aqiqa : le sacrifice pour le nouveau-ne
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La <strong>aqiqa</strong> est le sacrifice d&apos;un ou
                  deux animaux (moutons ou chevres) realise le septieme jour
                  apres la naissance pour remercier Allah de ce bienfait. Cette
                  sunna fortement recommandee constitue l&apos;un des rites
                  les plus importants lies a la naissance en islam. Elle
                  s&apos;accompagne du rasage de la tete du bebe et du choix
                  de son prenom.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    كُلُّ غُلَامٍ مُرْتَهَنٌ بِعَقِيقَتِهِ تُذْبَحُ عَنْهُ يَوْمَ سَابِعِهِ وَيُحْلَقُ وَيُسَمَّى
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Kullu ghulamin murtahanun bi &apos;aqiqatihi, tudhbahu &apos;anhu yawma sabi&apos;ihi, wa yuhlaqo wa yusamma
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Tout enfant est lie a sa aqiqa : on sacrifie pour lui le septieme jour, on lui rase la tete et on lui donne un nom&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par at-Tirmidhi (1522) et Abu Dawud (2838)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants ont detaille les regles de la aqiqa : deux
                  moutons pour un garcon et un mouton pour une fille, selon le
                  hadith de Aisha (qu&apos;Allah l&apos;agree). L&apos;animal
                  doit remplir les memes conditions que celui du sacrifice de
                  l&apos;Aid al-Adha (sans defaut majeur, ayant atteint
                  l&apos;age requis). La viande est distribuee aux proches,
                  aux voisins et aux pauvres, et une partie peut etre
                  consommee par la famille.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le septieme jour est egalement le moment de raser la tete
                  du nouveau-ne et de donner en aumone l&apos;equivalent du
                  poids de ses cheveux en argent. Ce rite de purification
                  symbolise le debut d&apos;une nouvelle vie sous la
                  protection et la benediction d&apos;Allah. Si la famille
                  n&apos;a pas les moyens de faire la aqiqa le septieme jour,
                  elle peut la reporter au quatorzieme ou au vingt-et-unieme
                  jour, voire plus tard selon les capacites financieres.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Deux moutons pour un garcon :</strong> c&apos;est
                      la sunna la plus authentique, bien que certains savants
                      considerent qu&apos;un seul mouton soit egalement
                      acceptable.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un mouton pour une fille :</strong> la difference
                      de nombre ne traduit aucune difference de valeur entre
                      les enfants, mais suit la guidance prophetique dans les
                      rites.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Distribution de la viande :</strong> la viande
                      est partagee entre la famille, les voisins et les
                      necessiteux, renforçant ainsi les liens communautaires
                      et la solidarite. Pour decouvrir les invocations liees
                      a la{" "}
                      <Link href="/doua-grossesse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">grossesse en islam</Link>,
                      consultez notre article dedie.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua de felicitations */}
              {/* ============================================ */}
              <section id="doua-felicitations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de felicitations : Barakallahu laka fil-mawhub
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Lorsqu&apos;un musulman apprend la naissance d&apos;un enfant
                  dans son entourage, il est recommande de feliciter les
                  parents avec une invocation specifique rapportee par les
                  savants. Cette <strong>doua de naissance</strong> est
                  l&apos;expression islamique de la joie partagee et de la
                  demande de benediction pour le nouveau-ne et ses parents.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua de felicitations pour les parents
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La doua la plus connue pour feliciter les parents d&apos;un
                  nouveau-ne est celle rapportee par al-Husayn ibn Ali et
                  transmise par les savants de la Sunna. Elle exprime a la
                  fois la gratitude envers Allah et le souhait que l&apos;enfant
                  grandisse dans la piete.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بَارَكَ اللَّهُ لَكَ فِي الْمَوْهُوبِ لَكَ وَشَكَرْتَ الْوَاهِبَ وَبَلَغَ أَشُدَّهُ وَرُزِقْتَ بِرَّهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Barakallahu laka fil-mawhubi laka, wa shakarta-l-wahiba, wa balagha ashuddahu, wa ruziqta birrahu
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Qu&apos;Allah te benisse dans ce qu&apos;Il t&apos;a accorde, que tu remercies le Donateur, qu&apos;il atteigne sa pleine maturite et que tu sois gratifie de sa piete filiale&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par an-Nawawi dans al-Adhkar
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Reponse des parents a la felicitation
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Les parents qui recoivent cette felicitation peuvent repondre
                  par une invocation reciproque, demandant a Allah de benir
                  egalement celui qui les felicite et de lui accorder un
                  bienfait similaire.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَزَاكَ اللَّهُ خَيْرًا وَرَزَقَكَ اللَّهُ مِثْلَهُ وَأَجْزَلَ ثَوَابَكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Barakallahu laka wa baraka &apos;alayka, wa jazakallahu khayran, wa razaqakallahu mithlahu, wa ajzala thawabaka
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Qu&apos;Allah te benisse, qu&apos;Il repande Ses benedictions sur toi, qu&apos;Allah te recompense en bien, qu&apos;Il t&apos;accorde un bienfait similaire et te donne une recompense abondante&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par an-Nawawi dans al-Adhkar
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces formules de felicitations et de reponse illustrent la
                  beaute des rapports sociaux en islam. Chaque occasion
                  heureuse est l&apos;opportunite d&apos;invoquer Allah et de
                  renforcer les liens fraternels. Le musulman ne se contente
                  pas de feliciter : il invoque activement la benediction
                  divine pour l&apos;enfant et sa famille. Pour d&apos;autres
                  invocations liees a la famille, decouvrez nos articles sur
                  la{" "}
                  <Link href="/doua-bebe-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour le bebe en islam</Link>.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-rayons-motifs-islamiques.jpg"
                    alt="Mains en invocation avec rayons et motifs islamiques symbolisant la doua de felicitations pour une naissance"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Doua de protection */}
              {/* ============================================ */}
              <section id="doua-protection" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas pour la protection du nouveau-ne
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Proteger le nouveau-ne par les invocations prophetiques est
                  un devoir fondamental des parents musulmans. Le Prophete
                  (paix et salut sur lui) recitait lui-meme des douas de
                  protection pour ses petits-fils al-Hassan et al-Husayn,
                  nous enseignant ainsi les formules les plus efficaces pour
                  mettre nos enfants sous la garde d&apos;Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. La doua de protection d&apos;Ibrahim (paix sur lui)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophete (paix et salut sur lui) utilisait cette invocation
                  pour proteger al-Hassan et al-Husayn, en mentionnant
                  qu&apos;Ibrahim (paix sur lui) l&apos;utilisait pour Isma&apos;il
                  et Ishaq.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> U&apos;idhukuma bi kalimatillahi-t-tammati min kulli shaytanin wa hammatin wa min kulli &apos;aynin lammah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je vous place sous la protection des Paroles parfaites d&apos;Allah contre tout diable, tout animal venimeux et contre tout mauvais oeil&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par al-Bukhari (3371)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour demander la protection divine
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation generale peut etre recitee quotidiennement
                  par les parents pour placer leur enfant sous la protection
                  d&apos;Allah contre tout mal visible et invisible.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> A&apos;udhu bi kalimatillahi-t-tammati min sharri ma khalaq
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge aupres des Paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a cree&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par Muslim (2708)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent egalement de reciter les trois
                  dernieres sourates du Coran (al-Ikhlas, al-Falaq et an-Nas)
                  sur le nouveau-ne, en soufflant legerement dans les mains
                  puis en les passant sur le corps du bebe. Cette pratique de
                  la ruqya prophetique est l&apos;un des meilleurs moyens de
                  proteger l&apos;enfant contre le mauvais oeil (&apos;ayn)
                  et toute nuisance. Le verset du Trone (Ayat al-Kursi) peut
                  egalement etre recite pour renforcer cette protection
                  spirituelle.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Reciter la doua d&apos;Ibrahim quotidiennement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophete (paix et salut sur lui) recitait cette
                        invocation pour ses petits-fils de maniere reguliere.
                        Les parents sont encourages a la reciter chaque soir
                        avant le coucher de l&apos;enfant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les mu&apos;awwidhat (sourates protectrices)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Souffler dans les mains apres avoir recite al-Falaq et
                        an-Nas, puis passer les mains sur le corps du bebe.
                        C&apos;est la methode de ruqya la plus authentique
                        enseignee par le Prophete.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ayat al-Kursi pour la protection nocturne
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La recitation du verset du Trone assure une protection
                        divine jusqu&apos;au matin. Les parents peuvent le
                        reciter pres du berceau de l&apos;enfant pour
                        l&apos;envelopper de la garde d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Invoquer a tout moment pour l&apos;enfant
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophete (paix et salut sur lui) a enseigne que la
                        doua du parent pour son enfant est parmi celles qui ne
                        sont jamais rejetees. Les parents doivent multiplier
                        les invocations de benediction et de guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Choisir un bon nom */}
              {/* ============================================ */}
              <section id="choisir-nom" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Choisir un bon nom pour l&apos;enfant en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le choix du prenom est un droit fondamental du nouveau-ne en
                  islam. Le Prophete (paix et salut sur lui) a accorde une
                  importance considerable au nom donne a l&apos;enfant, car
                  le nom influence l&apos;identite et accompagne la personne
                  toute sa vie. Il est recommande de choisir le nom le
                  septieme jour apres la naissance, en meme temps que la
                  aqiqa et le rasage de la tete.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    إِنَّ أَحَبَّ أَسْمَائِكُمْ إِلَى اللَّهِ عَبْدُ اللَّهِ وَعَبْدُ الرَّحْمَنِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Inna ahabba asma&apos;ikum ilAllahi &apos;Abdullah wa &apos;Abdur-Rahman
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Les noms les plus aimes d&apos;Allah sont &apos;Abdullah (serviteur d&apos;Allah) et &apos;Abdur-Rahman (serviteur du Tout Misericordieux)&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par Muslim (2132)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix et salut sur lui) changeait parfois les
                  noms de certains compagnons lorsqu&apos;ils avaient un sens
                  negatif ou inconvenant. Cela montre l&apos;importance du
                  sens du prenom en islam. Les parents sont donc encourages a
                  choisir un nom qui porte une signification positive, qui
                  honore la foi et qui n&apos;implique aucune forme de shirk
                  ou de servitude a autre qu&apos;Allah.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Noms recommandes
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les noms composes avec &apos;Abd (serviteur) suivis
                      d&apos;un Nom d&apos;Allah (&apos;Abdullah,
                      &apos;Abdur-Rahman, &apos;Abdul-Karim), les noms des
                      prophetes (Muhammad, Ibrahim, Yusuf, Issa, Musa), les
                      noms des compagnons et compagnonnes (Khadija, Aisha,
                      Fatima, Omar, Abu Bakr).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Noms a eviter
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les noms impliquant la servitude a autre qu&apos;Allah
                      (&apos;Abdun-Nabi, &apos;Abdul-Ka&apos;ba), les noms a
                      connotation negative (Harb = guerre, Murra = amertume),
                      les noms propres a Allah (Al-Khaliq, Ar-Razzaq sans
                      &apos;Abd) et les noms des ennemis de l&apos;islam.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Noms des prophetes
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Donner a son enfant le nom d&apos;un prophete est une
                      pratique louable. Le Prophete (paix et salut sur lui) a
                      dit : &laquo;&nbsp;Nommez-vous par les noms des
                      prophetes&nbsp;&raquo; (Abu Dawud). Muhammad, Ahmad,
                      Ibrahim, Isma&apos;il, Yusuf et Maryam sont parmi les
                      plus choisis.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Noms a sens positif
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les noms ayant un beau sens sont encourages : Nour
                      (lumiere), Iman (foi), Salim (sain), Amina (en securite),
                      Hasan (beau), Said (heureux). Le sens du nom est
                      important car le Prophete considerait qu&apos;il
                      influence la personne qui le porte.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le choix du nom est une responsabilite partagee entre les
                  deux parents. En cas de desaccord, les savants recommandent
                  que le pere ait la priorite, mais la consultation et le
                  consensus sont toujours preferes. L&apos;essentiel est que
                  le nom choisi plaise a Allah, ait un sens positif et
                  accompagne l&apos;enfant avec fierte tout au long de sa vie.
                  Pour approfondir vos connaissances en langue arabe et
                  comprendre la signification des noms, consultez notre
                  section{" "}
                  <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">apprendre l&apos;arabe</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour le bebe en islam"
                  description="Decouvrez toutes les invocations prophetiques pour proteger et benir votre enfant au quotidien."
                  href="/doua-bebe-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maitrisez la langue du Coran pour reciter les douas avec comprehension et profondeur spirituelle. Decouvrez nos formations en ligne adaptees a tous les niveaux."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles sur les invocations en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/doua-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en islam (guide complet)
                  </Link>
                  <Link
                    href="/doua-grossesse-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour la grossesse
                  </Link>
                  <Link
                    href="/doua-bebe-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour le bebe
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprime
                  </Link>
                  <Link
                    href="/doua-voyageur-safar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du voyageur
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages meres */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le meme sujet
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Comprendre l&apos;islam
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
                  </Link>
                  <Link
                    href="/doua-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en islam
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
