import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua face à l\u2019injustice des autorités en islam : invocations authentiques",
  description:
    "Découvrez les douas face à l\u2019injustice et contre les autorités oppressives en islam : invocations en arabe avec phonétique et traduction, hadiths sur la patience, HasbunAllahu wa ni\u2019mal wakil et conseils pratiques.",
  openGraph: {
    title:
      "Doua face à l\u2019injustice des autorités en islam : invocations authentiques",
    description:
      "Les invocations authentiques face à l\u2019injustice des autorités en islam : textes en arabe, phonétique, traduction et hadiths sur la patience et l\u2019action.",
    url: "https://www.islamreligion.fr/doua-injustice-autorites-islam",
    images: [
      {
        url: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-injustice-autorites-islam",
  },
};

const tocItems = [
  { id: "injustice-islam", label: "L\u2019injustice dans le Coran et la Sunna" },
  { id: "doua-opprime", label: "La doua de l\u2019opprimé : HasbunAllahu wa ni\u2019mal wakil" },
  { id: "douas-autorites", label: "Douas contre les autorités injustes" },
  { id: "invocations-authentiques", label: "Invocations en arabe, phonétique et traduction" },
  { id: "patience-action", label: "Patience et action face à l\u2019injustice" },
  { id: "hadith-oppression", label: "Hadiths sur l\u2019oppression et la justice" },
  { id: "conseils-pratiques", label: "Conseils pratiques pour l\u2019opprimé" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua faire face à l\u2019injustice des autorités en islam ?",
    answer:
      "Parmi les douas les plus recommandées face à l&apos;injustice des autorités : « HasbunAllahu wa ni&apos;mal wakil » (Allah nous suffit, Il est le meilleur Garant), la doua de Younous « La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin » et l&apos;invocation « Allahumma inni mazlumun fantasir » (Seigneur, je suis opprimé, accorde-moi la victoire). Ces douas sont tirées du Coran et de la Sunna authentique.",
  },
  {
    question: "Est-il permis d\u2019invoquer contre un dirigeant injuste en islam ?",
    answer:
      "Oui, il est permis d&apos;invoquer Allah contre un dirigeant injuste, à condition de ne pas dépasser la mesure de l&apos;injustice subie. Cependant, les savants recommandent de demander à Allah de guider le dirigeant plutôt que de l&apos;anéantir, car sa guidée profite à toute la communauté. L&apos;invocation de l&apos;opprimé monte directement à Allah sans aucun voile, comme l&apos;a enseigné le Prophète (paix et salut sur lui).",
  },
  {
    question: "Que dit le Coran sur l\u2019injustice des gouvernants ?",
    answer:
      "Le Coran condamne fermement toute forme d&apos;injustice, y compris celle des gouvernants. Allah dit : « Et ne penchez pas vers les injustes, sinon le Feu vous touchera » (Hud, 11:113). L&apos;histoire de Pharaon, tyran par excellence, est rappelée à de multiples reprises comme avertissement. Le Coran affirme également qu&apos;Allah n&apos;aime pas les injustes (Al-Imran, 3:57).",
  },
  {
    question: "Comment rester patient face à l\u2019injustice selon l\u2019islam ?",
    answer:
      "La patience (sabr) face à l&apos;injustice en islam repose sur plusieurs piliers : la certitude que toute épreuve est temporaire, la confiance en la justice divine, la multiplication des invocations, et le rappel des récompenses promises aux endurants. Le Coran dit : « Les endurants auront leur pleine récompense sans aucun compte » (Az-Zumar, 39:10). La patience n&apos;exclut pas l&apos;action concrète pour défendre ses droits.",
  },
  {
    question: "La doua de l\u2019opprimé est-elle exaucée même contre un musulman au pouvoir ?",
    answer:
      "Oui, absolument. La doua de l&apos;opprimé est exaucée quel que soit le statut de l&apos;oppresseur, qu&apos;il soit musulman ou non, au pouvoir ou non. Le Prophète (paix et salut sur lui) a dit : « Crains la doua de l&apos;opprimé, car il n&apos;y a entre elle et Allah aucun voile » (al-Bukhari et Muslim). L&apos;islam ne tolère aucune forme d&apos;injustice, y compris celle commise par des musulmans en position d&apos;autorité.",
  },
  {
    question: "Quelle est la signification de HasbunAllahu wa ni\u2019mal wakil ?",
    answer:
      "« HasbunAllahu wa ni&apos;mal wakil » signifie « Allah nous suffit, Il est le meilleur Garant ». Cette invocation a été prononcée par Ibrahim (paix sur lui) lorsqu&apos;il fut jeté dans le feu, et par les compagnons lors de la bataille de Uhud. Elle exprime une confiance absolue en Allah comme protecteur face à toute injustice et oppression. C&apos;est l&apos;une des formules les plus puissantes du Coran (Al-Imran, 3:173).",
  },
  {
    question: "Peut-on faire la doua contre l\u2019injustice en français ?",
    answer:
      "Oui, la doua peut être faite dans toute langue, y compris le français. Allah comprend toutes les langues et entend la plainte de chaque opprimé. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe pour bénéficier de leur puissance spirituelle particulière. Les supplications personnelles en français sont parfaitement valides et acceptées.",
  },
  {
    question: "L\u2019islam autorise-t-il la désobéissance aux autorités injustes ?",
    answer:
      "L&apos;islam distingue entre l&apos;obéissance dans le bien et la désobéissance dans le mal. Le Prophète (paix et salut sur lui) a dit : « Pas d&apos;obéissance à la créature dans la désobéissance au Créateur » (Ahmad). Si une autorité ordonne quelque chose de contraire à la loi d&apos;Allah, le musulman n&apos;est pas tenu d&apos;obéir. Cependant, cela ne signifie pas la rébellion armée, mais le refus pacifique et le recours à la doua et aux moyens légitimes.",
  },
];

export default function DouaInjusticeAutoritesIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-injustice-autorites-islam/#article",
        headline:
          "Doua face à l\u2019injustice des autorités en islam : invocations authentiques",
        description:
          "Découvrez les douas face à l\u2019injustice et contre les autorités oppressives en islam : invocations en arabe avec phonétique et traduction, hadiths sur la patience et l\u2019action.",
        image: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        datePublished: "2026-03-31",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-injustice-autorites-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-injustice-autorites-islam/#breadcrumb",
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
            name: "Doua face à l\u2019injustice",
            item: "https://www.islamreligion.fr/doua-injustice-autorites-islam",
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
          title="Doua face à l&#x27;injustice des autorités en islam"
          subtitle="Les invocations authentiques du Coran et de la Sunna pour faire face à l&#x27;oppression des dirigeants. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-rayons-motifs-islamiques.jpg"
          imageAlt="Mains levées en doua avec rayons de lumière et motifs islamiques symbolisant l'invocation face à l'injustice"
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
                <span className="text-foreground">Doua face à l&apos;injustice</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Face à l&apos;injustice des autorités, l&apos;islam offre au
                  croyant un arsenal spirituel puissant : des invocations
                  authentiques tirées du Coran et de la Sunna dont le Prophète
                  (paix et salut sur lui) a garanti l&apos;exaucement. La doua de
                  l&apos;opprimé monte directement au Trône d&apos;Allah sans
                  aucun voile, qu&apos;elle soit dirigée contre un simple
                  individu ou contre un dirigeant tyrannique. Cet article
                  détaille les invocations à réciter, les hadiths fondateurs et
                  l&apos;équilibre islamique entre patience et action.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : L'injustice dans le Coran et la Sunna */}
              {/* ============================================ */}
              <section id="injustice-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;injustice dans le Coran et la Sunna : une condamnation absolue
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;injustice (dhulm) occupe une place centrale dans les
                  mises en garde du Coran et de la Sunna. Allah a interdit
                  l&apos;oppression à Lui-même et l&apos;a rendue illicite entre
                  Ses serviteurs, faisant de la justice un pilier fondamental de
                  l&apos;ordre divin. Qu&apos;elle provienne d&apos;un individu
                  ou d&apos;une autorité en place, toute forme d&apos;injustice
                  est condamnée avec la même fermeté dans les sources islamiques.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran multiplie les avertissements à l&apos;encontre des
                  oppresseurs et de ceux qui abusent de leur pouvoir. Allah dit :
                  &laquo;&nbsp;Et ne penchez pas vers les injustes, sinon le Feu
                  vous touchera&nbsp;&raquo; (Hud, 11:113). Ce verset est
                  remarquable car il ne vise pas seulement les oppresseurs
                  eux-mêmes, mais également ceux qui penchent vers eux ou les
                  soutiennent passivement. L&apos;injustice des autorités est
                  d&apos;autant plus grave qu&apos;elle touche des communautés
                  entières et que le pouvoir confié aux dirigeants est un dépôt
                  (amana) dont ils seront interrogés au Jour du Jugement.
                </p>

                <HadithCard
                  arabic="يا عبادي إني حرمت الظلم على نفسي وجعلته بينكم محرما فلا تظالموا"
                  text="Ô Mes serviteurs, Je Me suis interdit l'injustice et Je l'ai rendue interdite entre vous. Ne soyez donc pas injustes les uns envers les autres."
                  source="Hadith Qudsi, rapporté par Muslim (2577)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith qudsi établit un principe fondamental : l&apos;injustice
                  est si grave qu&apos;Allah Lui-même l&apos;a interdite à Sa propre
                  personne, alors qu&apos;Il est le Tout-Puissant à qui rien
                  n&apos;est impossible. Si le Créateur des cieux et de la terre
                  refuse de commettre l&apos;injustice, comment un être humain,
                  fût-il roi ou président, pourrait-il se permettre d&apos;opprimer
                  les serviteurs d&apos;Allah ? Cette réalité confère à
                  l&apos;opprimé une force immense : il sait que le Maître de
                  l&apos;univers est de son côté.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;injustice sera des ténèbres :</strong>{" "}
                      le Prophète (paix et salut sur lui) a averti que
                      l&apos;oppression sera des ténèbres (dhulumat) au Jour de
                      la Résurrection (al-Bukhari et Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le pouvoir est un dépôt :</strong>{" "}
                      les dirigeants seront les premiers interrogés sur la
                      manière dont ils ont exercé leur autorité. Celui qui abuse
                      de ce dépôt trahit la confiance d&apos;Allah et de la
                      communauté.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La responsabilité collective :</strong>{" "}
                      le silence face à l&apos;injustice des autorités est
                      lui-même blâmable en islam. Le Prophète (paix et salut sur
                      lui) a enseigné que la meilleure forme de djihad est une
                      parole de vérité face à un dirigeant injuste (Abu Dawud,
                      at-Tirmidhi).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-rayons-motifs-islamiques.jpg"
                    alt="Mains en invocation avec motifs islamiques géométriques et rayons de lumière symbolisant la doua face à l'injustice"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : HasbunAllahu wa ni'mal wakil */}
              {/* ============================================ */}
              <section id="doua-opprime" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  HasbunAllahu wa ni&apos;mal wakil : la doua de l&apos;opprimé face aux puissants
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les invocations les plus puissantes face à l&apos;injustice
                  figure la formule &laquo;&nbsp;HasbunAllahu wa ni&apos;mal
                  wakil&nbsp;&raquo;, prononcée par Ibrahim (paix sur lui)
                  lorsqu&apos;il fut jeté dans le feu par le tyran Namrud, et par
                  les compagnons du Prophète lorsqu&apos;on leur annonça que les
                  armées ennemies se rassemblaient contre eux. Cette invocation est
                  un cri de confiance absolue en Allah face à toute forme de pouvoir
                  oppressif.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> HasbunAllahu wa ni&apos;mal wakil
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah nous suffit, Il est le meilleur Garant&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Imran (3:173)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le contexte coranique de cette invocation est éclairant. Après la
                  bataille de Uhud, alors que les musulmans étaient blessés et
                  affaiblis, on leur rapporta que les Quraysh rassemblaient une
                  armée immense pour les anéantir. Loin de céder à la peur, les
                  compagnons répondirent par cette formule magnifique. Le Coran
                  rapporte le résultat : &laquo;&nbsp;Ils revinrent donc avec un
                  bienfait de la part d&apos;Allah et une grâce. Nul mal ne les
                  toucha&nbsp;&raquo; (Al-Imran, 3:174).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Abbas (qu&apos;Allah l&apos;agrée) rapporte que cette même
                  formule fut la parole d&apos;Ibrahim lorsqu&apos;il fut jeté dans
                  le feu : &laquo;&nbsp;HasbiyAllahu wa ni&apos;mal wakil&nbsp;&raquo;.
                  Allah ordonna alors au feu d&apos;être fraîcheur et paix pour
                  Ibrahim (al-Bukhari). Que ce soit face au feu de Namrud ou face aux
                  armées des Quraysh, cette invocation a toujours été la réponse des
                  croyants face aux pouvoirs tyranniques. Elle enseigne que lorsque
                  toutes les forces terrestres semblent s&apos;allier contre le
                  croyant, Allah seul suffit comme protecteur et garant.
                </p>

                <HadithCard
                  arabic="واتقِ دعوة المظلوم فإنه ليس بينها وبين الله حجاب"
                  text="Crains la doua de l'opprimé, car il n'y a entre elle et Allah aucun voile."
                  source="Rapporté par al-Bukhari (1496) et Muslim (19)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondateur rappelle que la doua de l&apos;opprimé jouit
                  d&apos;un statut unique : elle s&apos;élève directement au Trône
                  d&apos;Allah sans aucun obstacle. Cette garantie est valable
                  quels que soient le rang et le pouvoir de l&apos;oppresseur. Un
                  dirigeant tyrannique, malgré ses armées, sa police et ses
                  richesses, ne possède aucun moyen d&apos;empêcher la plainte de
                  l&apos;opprimé d&apos;atteindre le Créateur des cieux et de la
                  terre. C&apos;est pourquoi les{" "}
                  <Link href="/doua-opprime-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas de l&apos;opprimé</Link>{" "}
                  sont considérées comme les plus redoutables de l&apos;islam.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Douas contre les autorités injustes */}
              {/* ============================================ */}
              <section id="douas-autorites" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas contre les autorités injustes : les invocations des prophètes
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran nous rapporte les invocations que les prophètes ont
                  adressées à Allah face aux dirigeants tyranniques de leur
                  époque. Ces douas constituent un modèle pour tout croyant
                  confronté à l&apos;injustice institutionnelle. Elles
                  enseignent que la réponse première face à l&apos;oppression
                  des puissants est de se tourner vers Celui qui détient tout
                  pouvoir : Allah, le Souverain des souverains.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La doua de Moussa contre Pharaon
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Pharaon incarne dans le Coran l&apos;archétype du dirigeant
                  tyrannique. Il asservit les Bani Isra&apos;il pendant des
                  décennies, massacrant leurs enfants et humiliant leur peuple.
                  Après avoir épuisé tous les appels au dialogue, Moussa (paix
                  sur lui) adressa cette invocation décisive à Allah :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا اطْمِسْ عَلَىٰ أَمْوَالِهِمْ وَاشْدُدْ عَلَىٰ قُلُوبِهِمْ فَلَا يُؤْمِنُوا حَتَّىٰ يَرَوُا الْعَذَابَ الْأَلِيمَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana-tmis &apos;ala amwalihim washudud &apos;ala qulubihim fala yu&apos;minu hatta yarawul-&apos;adhabal-alim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, anéantis leurs biens et endurcis leurs coeurs, afin qu&apos;ils ne croient que lorsqu&apos;ils verront le châtiment douloureux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Younous (10:88)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La réponse d&apos;Allah fut immédiate :
                  &laquo;&nbsp;Votre invocation est exaucée&nbsp;&raquo;
                  (Coran, 10:89). Pharaon et ses armées furent noyés dans la mer
                  Rouge. Cette histoire rappelle un principe universel : aucun
                  tyran, aussi puissant soit-il, ne peut échapper à la justice
                  divine lorsque les opprimés invoquent leur Seigneur avec
                  sincérité.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La doua de Nuh contre son peuple
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le prophète Nuh (paix sur lui), après 950 ans de prêche et
                  de patience face à la moquerie et à la persécution de son
                  peuple et de ses dirigeants, finit par adresser cette
                  invocation à Allah :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ إِنِّي مَغْلُوبٌ فَانتَصِرْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi inni maghlubun fantasir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je suis vaincu, accorde-moi le secours&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Qamar (54:10)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua est un modèle de concision et de puissance. En
                  quelques mots, Nuh (paix sur lui) expose sa situation de
                  faiblesse devant Allah et Lui demande d&apos;intervenir.
                  La réponse divine fut le Déluge qui engloutit les oppresseurs.
                  Les leçons tirées de ces récits prophétiques convergent : la
                  doua n&apos;est pas un aveu de faiblesse, mais la plus grande
                  force dont dispose le croyant face aux pouvoirs terrestres.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Invocations en arabe, phonétique et traduction */}
              {/* ============================================ */}
              <section id="invocations-authentiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations authentiques face à l&apos;injustice : arabe, phonétique et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voici un recueil d&apos;invocations authentiques que tout
                  musulman peut réciter lorsqu&apos;il fait face à
                  l&apos;injustice des autorités ou de toute personne en
                  position de pouvoir. Chaque doua est présentée en arabe, avec
                  sa phonétique et sa traduction en français pour faciliter la
                  mémorisation et la récitation.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. L&apos;invocation de l&apos;opprimé qui demande justice
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation directe et concise est rapportée dans la Sunna.
                  L&apos;opprimé expose sa situation devant Allah et Lui demande
                  de prendre sa défense.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي مَظْلُومٌ فَانْتَصِرْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni mazlumun fantasir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je suis opprimé, accorde-moi la victoire&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (4563)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. La doua de Younous dans les ténèbres
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Considérée comme l&apos;une des invocations les plus
                  puissantes, la doua de Younous (paix sur lui) combine le
                  tawhid, la glorification d&apos;Allah et la reconnaissance de
                  ses propres fautes. Le Prophète (paix et salut sur lui) a
                  affirmé qu&apos;aucun musulman ne la récite sans être exaucé.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité que Toi, gloire à Toi, j&apos;étais certes parmi les injustes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Anbiya (21:87)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Remise de l&apos;affaire à Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation coranique exprime la confiance totale du
                  croyant en Allah lorsqu&apos;il se trouve dans une situation
                  d&apos;impuissance face aux autorités oppressives. C&apos;est
                  la parole du croyant mentionné dans la sourate Ghafir.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Wa ufawwidu amri ilAllahi innAllaha basirun bil-&apos;ibad
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Et je remets mon sort à Allah. Allah est certes Clairvoyant sur Ses serviteurs&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ghafir (40:44)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua de protection contre le mal des oppresseurs
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) enseignait cette formule
                  pour se protéger contre le mal de tout oppresseur et de toute
                  personne malfaisante, y compris les dirigeants injustes.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنَّا نَجْعَلُكَ فِي نُحُورِهِمْ وَنَعُوذُ بِكَ مِنْ شُرُورِهِمْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inna naj&apos;aluka fi nuhurihim wa na&apos;udhu bika min shururihim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, nous Te plaçons face à eux et nous cherchons refuge auprès de Toi contre leur mal&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (1537) et Ahmad
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée et lumière symbolisant les versets coraniques sur la justice et l'invocation"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Patience et action */}
              {/* ============================================ */}
              <section id="patience-action" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Patience et action : l&apos;équilibre islamique face à l&apos;injustice
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam enseigne un équilibre subtil entre la patience
                  (sabr) et l&apos;action concrète face à l&apos;injustice.
                  Contrairement à une idée reçue, la patience islamique n&apos;est
                  pas synonyme de passivité ou de résignation. Elle est une force
                  intérieure qui permet au croyant de garder sa lucidité, de
                  planifier ses actions avec sagesse et de ne jamais perdre espoir
                  en la justice divine, même lorsque les circonstances semblent
                  désespérées.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a lui-même combiné la doua
                  et l&apos;action tout au long de sa mission. Lors de la bataille
                  de Badr, il invoqua intensément Allah tout en déployant ses
                  troupes stratégiquement. Lorsqu&apos;il subit l&apos;oppression
                  des Quraysh à La Mecque, il organisa l&apos;émigration vers
                  Médine tout en multipliant les invocations. Cette approche
                  équilibrée est le modèle que tout musulman doit suivre face à
                  l&apos;injustice des autorités.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La patience active (sabr)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La patience en islam n&apos;est pas l&apos;acceptation
                      passive de l&apos;injustice. C&apos;est la maîtrise de soi
                      qui permet de ne pas répondre à l&apos;oppression par une
                      oppression semblable. Le Coran promet aux patients une
                      récompense sans compte (Az-Zumar, 39:10) et affirme
                      qu&apos;Allah est avec les endurants (Al-Baqara, 2:153).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La parole de vérité
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit que la meilleure
                      forme de djihad est une parole de vérité face à un
                      dirigeant injuste (Abu Dawud, at-Tirmidhi). Dire la vérité
                      face au pouvoir oppressif est un acte d&apos;adoration
                      majeur en islam.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le recours aux moyens légaux
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;islam encourage l&apos;opprimé à défendre ses
                      droits par tous les moyens légitimes : dialogue, médiation,
                      arbitrage et recours juridique. La doua n&apos;exclut pas
                      l&apos;action, elle l&apos;accompagne et la renforce
                      spirituellement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;entraide communautaire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Secours ton frère qu&apos;il soit oppresseur
                      ou opprimé&nbsp;&raquo; (al-Bukhari). Aider
                      l&apos;oppresseur signifie l&apos;empêcher de commettre
                      l&apos;injustice. La solidarité face à l&apos;oppression
                      est un devoir collectif.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;histoire islamique offre des exemples remarquables de
                  cet équilibre. Le calife Omar ibn al-Khattab (qu&apos;Allah
                  l&apos;agrée) disait : &laquo;&nbsp;Si une mule trébuchait en
                  Irak, je craindrais qu&apos;Allah me demande pourquoi je
                  n&apos;ai pas aplani le chemin pour elle.&nbsp;&raquo; Cette
                  conscience de la responsabilité illustre la vision islamique du
                  pouvoir : un service et non un privilège, un dépôt et non un
                  droit. Lorsque les dirigeants s&apos;éloignent de cet idéal,
                  l&apos;opprimé possède dans la doua son arme la plus redoutable.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Hadiths sur l'oppression */}
              {/* ============================================ */}
              <section id="hadith-oppression" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Hadiths sur l&apos;oppression et la justice divine
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La Sunna du Prophète (paix et salut sur lui) regorge
                  d&apos;enseignements sur les conséquences de l&apos;oppression
                  et la promesse de justice divine. Ces hadiths offrent à
                  l&apos;opprimé un réconfort immense et rappellent aux
                  oppresseurs la gravité de leurs actes devant Allah.
                </p>

                <HadithCard
                  arabic="إن الله ليملي للظالم حتى إذا أخذه لم يفلته"
                  text="Allah laisse un répit à l'oppresseur, mais lorsqu'Il le saisit, Il ne le laisse plus échapper."
                  source="Rapporté par al-Bukhari (4686) et Muslim (2583)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est d&apos;un grand réconfort pour l&apos;opprimé qui
                  peut s&apos;interroger sur la raison pour laquelle Allah laisse
                  l&apos;injustice perdurer. Le répit accordé à l&apos;oppresseur
                  n&apos;est pas un signe de négligence divine. Au contraire,
                  c&apos;est un temps de test pour toutes les parties :
                  l&apos;opprimé est éprouvé dans sa patience et sa confiance en
                  Allah, tandis que l&apos;oppresseur accumule les conséquences de
                  ses actes. Lorsque le châtiment divin arrive, il est implacable
                  et sans appel.
                </p>

                <HadithCard
                  arabic="ثلاث دعوات مستجابات لا شك فيهن: دعوة المظلوم، ودعوة المسافر، ودعوة الوالد على ولده"
                  text="Trois invocations sont exaucées sans aucun doute : la doua de l'opprimé, la doua du voyageur, et la doua du parent pour son enfant."
                  source="Rapporté par at-Tirmidhi (1905), Abu Dawud (1536)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La classification de la doua de l&apos;opprimé parmi les
                  invocations garanties d&apos;être exaucées est un message
                  puissant. Cela signifie que même si le monde entier se ligue
                  contre le croyant opprimé, sa connexion avec Allah reste
                  intacte et sa plainte sera entendue. Cette réalité devrait
                  effrayer tout dirigeant tenté d&apos;abuser de son pouvoir :
                  les larmes de l&apos;opprimé, même versées dans le silence le
                  plus total, s&apos;élèvent directement au Trône du Roi des rois.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de l&apos;islam soulignent que ces hadiths
                  s&apos;appliquent à toute forme d&apos;oppression : celle des
                  individus comme celle des institutions, celle des proches comme
                  celle des étrangers, celle des musulmans comme celle des
                  non-musulmans. La justice divine ne connaît ni frontière ni
                  favoritisme. Pour approfondir les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet sur les douas.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour l&apos;opprimé face aux autorités
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des invocations, l&apos;islam propose une démarche
                  complète pour celui qui subit l&apos;injustice des autorités.
                  Ces conseils, tirés du Coran, de la Sunna et de la sagesse des
                  savants, allient la dimension spirituelle à l&apos;action
                  concrète pour aider l&apos;opprimé à traverser cette épreuve
                  avec dignité et foi.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Multiplier les douas aux moments propices
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le dernier tiers de la nuit, lors de la prosternation
                        (sujud), entre l&apos;adhan et l&apos;iqama, et le
                        vendredi après l&apos;Asr sont des moments où la doua
                        est particulièrement exaucée. Combiner le statut
                        privilégié de l&apos;opprimé avec ces instants bénis
                        multiplie les chances d&apos;une réponse rapide.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Documenter l&apos;injustice avec rigueur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Garder des preuves écrites, des témoignages et des traces
                        de toute injustice subie est une démarche de sagesse.
                        Cela facilite le recours légal si nécessaire et permet
                        de présenter des faits objectifs plutôt que des émotions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas dépasser la mesure dans l&apos;invocation
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si l&apos;opprimé invoque contre son oppresseur, il doit
                        se limiter à demander justice sans souhaiter un mal
                        disproportionné. Dépasser cette mesure transformerait
                        l&apos;opprimé en oppresseur à son tour, et sa doua
                        pourrait se retourner contre lui.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Chercher le soutien de la communauté
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        S&apos;entourer de personnes de confiance, consulter un
                        imam ou un conseiller, et demander à d&apos;autres
                        croyants de faire doua pour soi sont des démarches
                        encouragées. L&apos;union face à l&apos;injustice est une
                        force que l&apos;islam valorise.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Privilégier le pardon quand c&apos;est possible
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lorsque les circonstances le permettent, le pardon est
                        une vertu supérieure en islam. Allah dit :
                        &laquo;&nbsp;Celui qui pardonne et se réconcilie, sa
                        récompense incombe à Allah&nbsp;&raquo; (Coran, 42:40).
                        Le pardon n&apos;est cependant jamais obligatoire face à
                        l&apos;injustice systémique, et la quête de justice reste
                        un droit légitime.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En toute circonstance, le musulman face à l&apos;injustice
                  des autorités combine la confiance absolue en Allah, la patience
                  intérieure, l&apos;invocation constante et l&apos;action
                  concrète pour défendre ses droits. Cette approche équilibrée
                  reflète la sagesse de l&apos;enseignement islamique qui allie
                  la spiritualité profonde à l&apos;engagement dans le monde
                  réel. Pour les situations de détresse extrême, découvrez
                  également les{" "}
                  <Link href="/doua-palestine-gaza-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas pour la Palestine et Gaza</Link>,
                  un exemple contemporain de la doua face à l&apos;oppression
                  des autorités.
                </p>
              </section>

              {/* ============================================ */}
              {/* AffiliateForm + FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter les douas avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne - maillage */}
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
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/doua-palestine-gaza-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour la Palestine et Gaza
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages mères */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le même sujet
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Comprendre l&apos;islam
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
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
