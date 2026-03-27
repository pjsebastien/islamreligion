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
    "Doua en sortant de la maison en islam : invocation authentique",
  description:
    "Découvrez la doua en sortant de la maison en islam : invocations authentiques en arabe avec phonétique et traduction, hadiths du Prophète, doua en entrant chez soi, protection en déplacement et lien avec le tawakkul.",
  openGraph: {
    title:
      "Doua en sortant de la maison en islam : invocation authentique",
    description:
      "Les invocations authentiques à réciter en sortant de la maison en islam : textes en arabe, phonétique, traduction et hadiths. Protection divine à chaque sortie.",
    url: "https://www.islamreligion.fr/doua-sortir-maison-islam",
    images: [
      {
        url: "/images/doua-mains-levees-illustration-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-sortir-maison-islam",
  },
};

const tocItems = [
  { id: "importance-doua-sortie", label: "Importance de la doua en sortant" },
  { id: "doua-principale-sortie", label: "Doua principale en sortant de la maison" },
  { id: "hadith-prophete-sortie", label: "Hadiths du Prophète sur la sortie" },
  { id: "doua-entrer-maison", label: "Doua en entrant dans la maison" },
  { id: "doua-protection-deplacement", label: "Doua de protection en déplacement" },
  { id: "tawakkul-sortie", label: "Le tawakkul : confiance en Allah à chaque sortie" },
  { id: "sunnas-sorties", label: "Sunnas liées aux sorties du foyer" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua à dire en sortant de la maison en islam ?",
    answer:
      "La doua principale à réciter en sortant de la maison est : « Bismillahi, tawakkaltu &apos;alAllah, wa la hawla wa la quwwata illa billah » (Au nom d&apos;Allah, je place ma confiance en Allah. Il n&apos;y a de force ni de puissance qu&apos;en Allah). Cette invocation est rapportée par Abu Dawud et at-Tirmidhi, et elle assure au croyant guidance, protection et défense contre le diable.",
  },
  {
    question: "Que se passe-t-il quand on dit la doua en sortant de chez soi ?",
    answer:
      "Selon le hadith rapporté par Abu Dawud, lorsqu&apos;une personne récite cette doua en sortant, il lui est dit : « Tu es guidé, tu es défendu et tu es protégé. » Les démons s&apos;éloignent alors de lui, et un autre diable dit aux autres : « Comment atteindre un homme qui a été guidé, défendu et protégé ? » C&apos;est une triple protection accordée par Allah.",
  },
  {
    question: "Peut-on dire la doua de sortie de la maison en français ?",
    answer:
      "Il est préférable de réciter la doua en arabe, car c&apos;est la formulation enseignée par le Prophète (paix et salut sur lui). Cependant, si une personne ne maîtrise pas encore l&apos;arabe, elle peut la dire en français en attendant de l&apos;apprendre. L&apos;essentiel est de ne pas sortir sans invoquer Allah et de chercher Sa protection.",
  },
  {
    question: "Quelle est la doua en entrant dans la maison en islam ?",
    answer:
      "En entrant dans la maison, le musulman dit : « Bismillahi walajnâ, wa bismillahi kharajnâ, wa &apos;alAllahi Rabbinâ tawakkalnâ » (Au nom d&apos;Allah nous entrons, au nom d&apos;Allah nous sortons, et en Allah notre Seigneur nous plaçons notre confiance), puis il salue les occupants de la maison. Ce hadith est rapporté par Abu Dawud.",
  },
  {
    question: "Faut-il dire la doua à chaque sortie de la maison ?",
    answer:
      "Oui, la Sunna recommande de réciter la doua à chaque sortie, que ce soit pour aller au travail, faire des courses, se rendre à la mosquée ou voyager. Cette invocation est un rappel constant de la dépendance du croyant envers Allah et une source de protection renouvelée à chaque déplacement.",
  },
  {
    question: "Quel est le lien entre la doua de sortie et le tawakkul ?",
    answer:
      "Le tawakkul (confiance en Allah) est au coeur de la doua de sortie. L&apos;expression « tawakkaltu &apos;alAllah » (je place ma confiance en Allah) est le pivot de cette invocation. En la récitant, le croyant reconnaît que sa sécurité, sa réussite et sa protection ne dépendent pas de ses propres forces, mais de la volonté d&apos;Allah.",
  },
  {
    question: "Y a-t-il une doua spécifique pour sortir la nuit ?",
    answer:
      "Il n&apos;existe pas de doua spécifique réservée aux sorties nocturnes. Cependant, le Prophète (paix et salut sur lui) a recommandé de retenir les enfants au coucher du soleil car les diables se dispersent à ce moment. La doua de sortie habituelle s&apos;applique de jour comme de nuit, et le croyant peut y ajouter les invocations de protection (mu&apos;awwidhat).",
  },
  {
    question: "Le Prophète disait-il autre chose en sortant de chez lui ?",
    answer:
      "En plus de la doua principale, le Prophète (paix et salut sur lui) récitait parfois : « Allahumma inni a&apos;udhu bika an adilla aw udalla, aw azilla aw uzalla, aw adhlima aw udhlama, aw ajhala aw yujhala &apos;alayya » (Seigneur, je cherche refuge auprès de Toi contre le fait d&apos;égarer ou d&apos;être égaré, de trébucher ou d&apos;être fait trébucher, d&apos;opprimer ou d&apos;être opprimé, d&apos;agir avec ignorance ou qu&apos;on agisse avec ignorance envers moi). Ce hadith est rapporté par les auteurs des Sunan.",
  },
];

export default function DouaSortirMaisonIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-sortir-maison-islam/#article",
        headline:
          "Doua en sortant de la maison en islam : invocation authentique",
        description:
          "Découvrez la doua en sortant de la maison en islam : invocations authentiques en arabe, hadiths du Prophète, doua en entrant chez soi, protection en déplacement et tawakkul.",
        image: "/images/doua-mains-levees-illustration-lumiere.jpg",
        datePublished: "2026-03-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-sortir-maison-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-sortir-maison-islam/#breadcrumb",
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
            name: "Doua en sortant de la maison",
            item: "https://www.islamreligion.fr/doua-sortir-maison-islam",
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
          title="Doua en sortant de la maison en islam : invocation authentique"
          subtitle="Les invocations prophétiques à réciter en sortant de chez soi, tirées de la Sunna authentique. Textes en arabe, phonétique et traduction française pour une protection divine à chaque sortie."
          imageSrc="/images/doua-mains-levees-illustration-lumiere.jpg"
          imageAlt="Mains levées en invocation doua en sortant de la maison avec lumière divine symbolisant la protection en islam"
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
                <span className="text-foreground">Doua en sortant de la maison</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En resume
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La <strong>doua en sortant de la maison</strong> est une
                  sunna quotidienne essentielle que le Prophete Muhammad (paix
                  et salut sur lui) pratiquait a chaque sortie de chez lui.
                  En prononcant &laquo;&nbsp;Bismillahi, tawakkaltu
                  &apos;alAllah&nbsp;&raquo;, le croyant place sa confiance
                  en Allah et obtient une triple protection : il est guide,
                  defendu et protege contre les ruses du diable. Cette
                  invocation simple mais puissante transforme chaque sortie
                  en un acte d&apos;adoration et rappelle que rien ne se
                  fait sans la volonte d&apos;Allah.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance de la doua en sortant */}
              {/* ============================================ */}
              <section id="importance-doua-sortie" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance de la doua en sortant de la maison
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Chaque jour, le musulman quitte son foyer pour vaquer a
                  ses occupations : travail, etudes, courses, visite de
                  proches ou priere a la mosquee. Ce geste banal en
                  apparence represente en realite un moment de transition
                  spirituelle. En franchissant le seuil de sa porte, le
                  croyant quitte un espace de securite et de tranquillite
                  pour affronter le monde exterieur avec ses tentations, ses
                  dangers et ses epreuves. C&apos;est pourquoi l&apos;islam
                  a institue une <strong>doua specifique pour la sortie de
                  la maison</strong>, afin d&apos;envelopper le croyant
                  d&apos;une protection divine des le premier pas.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix et salut sur lui) n&apos;a jamais
                  neglige cette invocation. Pour lui, chaque sortie etait
                  une occasion de renouveler son lien avec Allah et de
                  manifester son tawakkul (confiance absolue en Dieu).
                  Cette pratique prophetique nous enseigne que la vie du
                  musulman est ponctuee d&apos;invocations qui sacralisent
                  les moments les plus ordinaires. La{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en islam</Link>{" "}
                  n&apos;est pas reservee aux grandes occasions : elle
                  accompagne chaque geste du quotidien.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de l&apos;islam soulignent que cette doua
                  remplit plusieurs fonctions spirituelles essentielles.
                  Premierement, elle rappelle au croyant qu&apos;il est
                  constamment dependant d&apos;Allah, que ce soit pour sa
                  securite physique ou sa preservation morale.
                  Deuxiemement, elle constitue un bouclier contre le
                  Shaytan, qui guette le croyant a chaque instant pour le
                  detourner du droit chemin. Troisiemement, elle ancre le
                  musulman dans une conscience permanente d&apos;Allah
                  (muraqaba), transformant chaque deplacement en un acte
                  d&apos;adoration recompense.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Protection contre le Shaytan :</strong>{" "}
                      le diable se tient a la porte de la maison du croyant,
                      attendant sa sortie pour l&apos;egarer. La doua
                      l&apos;eloigne et le rend impuissant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Guidance divine :</strong>{" "}
                      celui qui invoque Allah en sortant est guide dans ses
                      choix, ses rencontres et ses decisions tout au long de
                      la journee.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Recompense continue :</strong>{" "}
                      chaque sortie accompagnee de cette doua est
                      comptabilisee comme un acte d&apos;obeissance, meme si
                      le motif de la sortie est purement mondain.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
                    alt="Interieur de mosquee avec arches et tapis baigne de lumiere symbolisant la protection divine en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua principale */}
              {/* ============================================ */}
              <section id="doua-principale-sortie" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua principale en sortant de la maison
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;invocation la plus connue et la plus authentique a
                  reciter en sortant de chez soi est celle rapportee par Anas
                  ibn Malik (qu&apos;Allah l&apos;agree). Le Prophete (paix
                  et salut sur lui) a enseigne cette doua a ses compagnons
                  en leur expliquant ses effets remarquables : celui qui la
                  prononce est immediatement place sous la protection divine.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Bismillahi, tawakkaltu &apos;alAllah, wa la hawla wa la quwwata illa billah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, je place ma confiance en Allah. Il n&apos;y a de force ni de puissance qu&apos;en Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par Abu Dawud (5095) et at-Tirmidhi (3426)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation se compose de trois elements
                  fondamentaux qui forment un bouclier spirituel complet.
                  Le premier element, &laquo;&nbsp;Bismillah&nbsp;&raquo;
                  (au nom d&apos;Allah), place l&apos;action sous la
                  benediction divine. Le deuxieme, &laquo;&nbsp;tawakkaltu
                  &apos;alAllah&nbsp;&raquo; (je place ma confiance en
                  Allah), exprime le tawakkul, c&apos;est-a-dire la remise
                  totale de son sort entre les mains du Createur. Le
                  troisieme, &laquo;&nbsp;la hawla wa la quwwata illa
                  billah&nbsp;&raquo; (il n&apos;y a de force ni de
                  puissance qu&apos;en Allah), reconnait que toute capacite
                  d&apos;action vient exclusivement d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que cette formule rassemble les
                  trois piliers de la relation du croyant avec son
                  Seigneur lors de toute action : commencer par le nom
                  d&apos;Allah, s&apos;en remettre a Lui pour le resultat,
                  et reconnatre que rien ne se fait sans Sa permission.
                  Celui qui interiorise ces trois dimensions a chaque
                  sortie de chez lui vit dans un etat constant de
                  conscience divine qui le protege des pieges du Shaytan
                  et des dangers du monde.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La doua complementaire de protection
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  En plus de l&apos;invocation principale, le Prophete
                  (paix et salut sur lui) recitait egalement cette doua
                  rapportee par Umm Salama (qu&apos;Allah l&apos;agree),
                  demandant a Allah une protection complete contre toutes
                  les formes de deviation.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ أَوْ أُضَلَّ أَوْ أَزِلَّ أَوْ أُزَلَّ أَوْ أَظْلِمَ أَوْ أُظْلَمَ أَوْ أَجْهَلَ أَوْ يُجْهَلَ عَلَيَّ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Allahumma inni a&apos;udhu bika an adilla aw udalla, aw azilla aw uzalla, aw adhlima aw udhlama, aw ajhala aw yujhala &apos;alayya
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge aupres de Toi contre le fait d&apos;egarer ou d&apos;etre egare, de trebucher ou d&apos;etre fait trebucher, d&apos;opprimer ou d&apos;etre opprime, d&apos;agir avec ignorance ou qu&apos;on agisse avec ignorance envers moi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par Abu Dawud (5094), at-Tirmidhi (3427), an-Nasa&apos;i (5486), Ibn Majah (3884)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua est remarquable par sa structure en paires
                  opposees : elle demande protection contre le fait de
                  commettre le mal ET de le subir. Le croyant ne demande
                  pas seulement a etre protege des autres, mais aussi de
                  lui-meme, de ses propres erreurs et de ses propres
                  injustices. Cette conscience de la faillibilite humaine
                  est au coeur de la spiritualite islamique.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophetiques dans leur langue originale. Decouvrez des formations adaptees aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandees"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Hadiths du Prophete */}
              {/* ============================================ */}
              <section id="hadith-prophete-sortie" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les hadiths du Prophete sur l&apos;invocation en sortant
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Plusieurs hadiths authentiques detaillent les merites de
                  la doua de sortie et expliquent ses effets concrets sur
                  le croyant. Ces traditions prophetiques constituent le
                  fondement de cette pratique quotidienne et montrent
                  l&apos;importance que le Prophete (paix et salut sur lui)
                  accordait a cette invocation.
                </p>

                <HadithCard
                  arabic="إذا خرج الرجل من بابه قال: بسم الله توكلت على الله لا حول ولا قوة إلا بالله، يقال له: هديت وكفيت ووقيت، وتنحى عنه الشيطان"
                  text="Lorsqu'un homme sort de chez lui et dit : Au nom d'Allah, je place ma confiance en Allah, il n'y a de force ni de puissance qu'en Allah, il lui est dit : Tu es guide, tu es defendu et tu es protege. Et le Shaytan s'eloigne de lui."
                  source="Rapporte par Abu Dawud (5095), authentifie par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est fondamental car il revele les trois
                  bienfaits accordes a celui qui recite la doua en sortant :
                  la guidance (hudita), la defense (kufita) et la
                  protection (wuqita). Ces trois termes couvrent
                  l&apos;ensemble des besoins du croyant a l&apos;exterieur
                  de chez lui. La guidance le preserve des erreurs de
                  jugement et des mauvais choix. La defense le protege
                  contre les maux physiques et les dangers. La protection
                  l&apos;immunise contre les attaques spirituelles du
                  Shaytan.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La suite du hadith est tout aussi remarquable : le
                  Shaytan lui-meme reconnait son impuissance face a celui
                  qui a prononce cette invocation. Le diable demande aux
                  autres demons : &laquo;&nbsp;Comment atteindre un homme
                  qui a ete guide, defendu et protege&nbsp;?&nbsp;&raquo;
                  Cette scene, rapportee par le Prophete (paix et salut sur
                  lui), montre que la doua de sortie est un veritable
                  bouclier invisible qui accompagne le croyant tout au long
                  de son deplacement.
                </p>

                <HadithCard
                  arabic="ما من مسلم يخرج من بيته فيقول: بسم الله توكلت على الله ولا حول ولا قوة إلا بالله إلا قيل له: حسبك قد هديت وكفيت ووقيت"
                  text="Il n'est aucun musulman qui sort de sa maison en disant : Au nom d'Allah, je place ma confiance en Allah, il n'y a de force ni de puissance qu'en Allah, sans qu'il lui soit dit : Tu es suffisamment pourvu, tu es guide, tu es defendu et tu es protege."
                  source="Rapporte par at-Tirmidhi (3426), classe hasan sahih"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette variante du hadith ajoute le terme
                  &laquo;&nbsp;hasbuka&nbsp;&raquo; (tu es suffisamment
                  pourvu), ce qui signifie qu&apos;Allah accorde au croyant
                  tout ce dont il a besoin pour sa journee. Cette
                  promesse de suffisance divine rejoint le verset
                  coranique : &laquo;&nbsp;Et quiconque place sa confiance
                  en Allah, Il lui suffit&nbsp;&raquo; (Coran, 65:3). Le
                  croyant qui sort avec cette doua part avec la certitude
                  qu&apos;Allah subviendra a tous ses besoins, quels
                  qu&apos;ils soient.
                </p>

                <HadithCard
                  arabic="إذا خرج الرجل من بيته فقال: بسم الله توكلت على الله لا حول ولا قوة إلا بالله، قال: يقال حينئذ: هديت وكفيت ووقيت، فتتنحى له الشياطين، فيقول له شيطان آخر: كيف لك برجل قد هدي وكفي ووقي"
                  text="Lorsqu'un homme sort de sa maison et dit cette invocation, il lui est dit : Tu es guide, tu es defendu et tu es protege. Les demons s'ecartent de lui, et un autre diable dit : Que peux-tu faire contre un homme qui a ete guide, defendu et protege ?"
                  source="Rapporte par Abu Dawud (5095)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;ensemble de ces hadiths converge vers un meme
                  message : la doua de sortie n&apos;est pas une simple
                  formule rituelle, mais une veritable arme spirituelle.
                  Elle etablit un lien direct entre le croyant et la
                  protection divine, un lien que le Shaytan lui-meme ne
                  peut rompre. Le musulman qui comprend cette realite ne
                  sortira jamais de chez lui sans prononcer ces mots benis.
                  Pour decouvrir d&apos;autres invocations prophetiques,
                  consultez notre guide complet sur la{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua en entrant dans la maison */}
              {/* ============================================ */}
              <section id="doua-entrer-maison" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua en entrant dans la maison
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Tout comme la sortie, l&apos;entree dans la maison est
                  un moment important dans la journee du musulman. Le
                  Prophete (paix et salut sur lui) a enseigne des
                  invocations specifiques pour ce moment, creant ainsi un
                  encadrement spirituel complet du deplacement : une doua
                  au depart et une doua au retour. Cette symetrie
                  temoigne de la coherence de l&apos;enseignement
                  prophetique. Pour en savoir plus, consultez notre
                  article dedie a la{" "}
                  <Link href="/doua-entrer-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en entrant dans la maison</Link>.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Bismillahi walajna, wa bismillahi kharajna, wa &apos;alAllahi Rabbina tawakkalna
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah nous entrons, au nom d&apos;Allah nous sortons, et en Allah notre Seigneur nous placons notre confiance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par Abu Dawud (5096)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophete (paix et salut sur lui) a egalement
                  recommande de saluer les occupants de la maison en
                  entrant, meme si personne n&apos;est present. Le salam
                  prononce en entrant repousse le Shaytan et attire la
                  baraka (benediction) dans le foyer. Un hadith rapporte
                  par Muslim mentionne que lorsqu&apos;une personne entre
                  chez elle en mentionnant le nom d&apos;Allah et en
                  mangeant en mentionnant Son nom, le Shaytan dit a ses
                  compagnons : &laquo;&nbsp;Vous n&apos;avez ni gite ni
                  diner ici&nbsp;&raquo;.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Allahumma inni as&apos;aluka khayral-mawlaji wa khayral-makhraji, bismillahi walajna wa bismillahi kharajna, wa &apos;alAllahi Rabbina tawakkalna
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande le bien de l&apos;entree et le bien de la sortie. Au nom d&apos;Allah nous entrons et au nom d&apos;Allah nous sortons, et en Allah notre Seigneur nous placons notre confiance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par Abu Dawud (5096)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette version etendue de la doua est particulierement
                  complete car elle demande a Allah le bien de l&apos;entree
                  (mawlaj) et le bien de la sortie (makhraj). Elle
                  englobe ainsi toutes les activites realisees a
                  l&apos;interieur et a l&apos;exterieur du foyer. Les
                  savants expliquent que le &laquo;&nbsp;bien de
                  l&apos;entree&nbsp;&raquo; inclut la paix familiale, la
                  baraka dans la nourriture et le repos, tandis que le
                  &laquo;&nbsp;bien de la sortie&nbsp;&raquo; englobe la
                  securite, la reussite et la protection contre tout mal.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
                    alt="Mains en invocation avec trait fin et lumiere subtile symbolisant la doua de sortie et d entree de la maison"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua de protection en deplacement */}
              {/* ============================================ */}
              <section id="doua-protection-deplacement" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de protection en deplacement
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-dela de la doua de sortie du foyer, l&apos;islam a
                  prevu des invocations pour chaque etape du deplacement.
                  Que l&apos;on se deplace a pied, en voiture ou en
                  transport, le croyant dispose d&apos;un arsenal
                  d&apos;invocations pour se placer sous la protection
                  d&apos;Allah tout au long de son trajet. Pour les
                  longs voyages, consultez notre article complet sur la{" "}
                  <Link href="/doua-voyageur-safar-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du voyageur</Link>.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua en montant dans un moyen de transport
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsque le croyant monte dans un vehicule ou tout moyen
                  de transport, il est recommande de reciter cette
                  invocation coranique qui place le voyage sous la
                  seigneurie d&apos;Allah.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> SubhanAlladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire a Celui qui a mis ceci a notre service, alors que nous n&apos;etions pas capables de le dominer. Et c&apos;est vers notre Seigneur que nous retournerons&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Az-Zukhruf (43:13-14)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de protection generale en deplacement
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Pour une protection globale durant le deplacement, le
                  Prophete (paix et salut sur lui) recommandait de reciter
                  les invocations de protection, dont le verset du Trone
                  (Ayat al-Kursi) et les sourates protectrices. La{" "}
                  <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de protection en islam</Link>{" "}
                  offre un panorama complet de ces invocations.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> A&apos;udhu bi kalimatillahit-tammati min sharri ma khalaq
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge dans les paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a cree&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par Muslim (2708)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est particulierement recommandee lors
                  des deplacements car le Prophete (paix et salut sur lui)
                  a dit que celui qui la recite ne sera atteint par aucun
                  mal jusqu&apos;a ce qu&apos;il quitte l&apos;endroit ou
                  il se trouve. Elle constitue un complement ideal a la
                  doua de sortie de la maison, formant ainsi une double
                  couche de protection divine pour le croyant en
                  deplacement.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Le tawakkul */}
              {/* ============================================ */}
              <section id="tawakkul-sortie" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tawakkul : la confiance en Allah a chaque sortie
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mot &laquo;&nbsp;tawakkul&nbsp;&raquo; (توكل) est au
                  coeur meme de la doua de sortie. Il designe la confiance
                  totale et la remise de soi a Allah, tout en prenant les
                  causes materielles necessaires. Ce concept fondamental de
                  l&apos;islam est l&apos;essence meme de l&apos;invocation
                  &laquo;&nbsp;tawakkaltu &apos;alAllah&nbsp;&raquo; que le
                  croyant prononce en franchissant sa porte.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le tawakkul ne signifie pas l&apos;abandon des causes ni
                  la passivite. Le Prophete (paix et salut sur lui) a
                  illustre ce principe par un hadith celebre lorsqu&apos;un
                  homme lui demanda s&apos;il devait attacher son chameau
                  ou s&apos;en remettre a Allah. Le Prophete repondit :
                  &laquo;&nbsp;Attache-le et place ta confiance en
                  Allah&nbsp;&raquo; (at-Tirmidhi). Ainsi, le croyant qui
                  sort de chez lui prend toutes les precautions necessaires
                  (verrouiller sa porte, planifier son trajet, se preparer
                  adequatement) tout en placant sa confiance ultime en
                  Allah.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Tawakkul et prise des causes
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le vrai tawakkul consiste a prendre tous les moyens
                        a sa disposition tout en sachant que le resultat
                        depend uniquement d&apos;Allah. Sortir de chez soi
                        en ayant prepare son trajet, verifie la meteo et
                        pris ses affaires, puis dire la doua, c&apos;est
                        l&apos;equilibre parfait entre effort humain et
                        confiance divine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le tawakkul eloigne l&apos;anxiete
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        De nombreuses personnes eprouvent de l&apos;anxiete
                        en sortant de chez elles, que ce soit par peur des
                        dangers, du regard des autres ou de l&apos;echec.
                        Le tawakkul, en remettant son sort a Allah, apaise
                        le coeur et libere l&apos;esprit. Allah dit :
                        &laquo;&nbsp;Et quiconque place sa confiance en
                        Allah, Il lui suffit&nbsp;&raquo; (Coran, 65:3).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;exemple des oiseaux
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophete (paix et salut sur lui) a dit :
                        &laquo;&nbsp;Si vous placiez votre confiance en
                        Allah comme il se doit, Il vous accorderait votre
                        subsistance comme Il l&apos;accorde aux oiseaux :
                        ils partent le matin le ventre vide et reviennent
                        le soir rassasies&nbsp;&raquo; (at-Tirmidhi, Ahmad).
                        Ce hadith illustre parfaitement le lien entre la
                        sortie quotidienne et le tawakkul.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le tawakkul comme etat permanent
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La doua de sortie n&apos;est pas un acte isole :
                        elle s&apos;inscrit dans un etat permanent de
                        confiance en Allah qui doit impregner toute la vie
                        du croyant. En la repetant chaque jour, le musulman
                        renforce progressivement ce lien de dependance
                        volontaire envers son Createur, jusqu&apos;a ce que
                        le tawakkul devienne une seconde nature.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Sunnas liees aux sorties */}
              {/* ============================================ */}
              <section id="sunnas-sorties" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les sunnas liees aux sorties du foyer
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua de sortie ne constitue qu&apos;un element d&apos;un
                  ensemble plus large d&apos;adab (bonnes manieres) et de
                  sunnas que le Prophete (paix et salut sur lui) observait
                  en quittant son foyer. Ces pratiques complementaires
                  completent la protection spirituelle et renforcent la
                  conscience du croyant envers son Seigneur.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Sortir du pied gauche
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La sunna est de sortir de la maison du pied gauche,
                      contrairement a l&apos;entree dans la mosquee qui se
                      fait du pied droit. Cette distinction reflete
                      l&apos;attention que l&apos;islam porte aux moindres
                      details de la vie quotidienne, sacralisant chaque
                      geste par une intention consciente.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Mentionner le nom d&apos;Allah (Bismillah)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Prononcer &laquo;&nbsp;Bismillah&nbsp;&raquo; avant
                      toute action est une sunna generale, mais elle
                      prend une importance particuliere en sortant de chez
                      soi. C&apos;est le premier mot de la doua de sortie
                      et il place immediatement l&apos;action sous la
                      benediction divine.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Se parfumer avant de sortir
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophete (paix et salut sur lui) aimait le
                      parfum et encourageait les musulmans a se parfumer,
                      notamment avant de se rendre a la mosquee ou dans
                      les assemblees. Cette sunna reflete la proprete et
                      l&apos;elegance que l&apos;islam preconise dans la
                      vie sociale du croyant.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Avoir une intention pieuse
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les savants recommandent de formuler une intention
                      avant chaque sortie : chercher la subsistance licite,
                      rendre visite a un malade, se rendre a la mosquee ou
                      aider un proche. Cette intention transforme un acte
                      ordinaire en ibada (adoration) recompensee par Allah.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En combinant ces sunnas avec la recitation de la doua de
                  sortie, le croyant transforme chaque deplacement en un
                  acte d&apos;adoration complet. Il sort de chez lui avec
                  une intention consciente, une invocation sur les levres
                  et une confiance absolue en Allah. Cette approche
                  globale illustre la richesse de l&apos;enseignement
                  prophetique qui ne neglige aucun aspect de la vie du
                  musulman.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Saluer en sortant :</strong>{" "}
                      dire &laquo;&nbsp;As-salamu alaykum&nbsp;&raquo; aux
                      membres de la famille avant de partir est une sunna
                      qui repand la paix et la baraka dans le foyer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prier deux raka&apos;at avant de sortir :</strong>{" "}
                      certains savants recommandent de prier deux unites de
                      priere avant un deplacement important, en demandant a
                      Allah de faciliter le trajet et de le benir.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se rappeler le retour a Allah :</strong>{" "}
                      chaque sortie est un rappel que nous quitterons un
                      jour definitivement notre demeure terrestre. Cette
                      conscience de la mort (dhikr al-mawt) renforce la
                      piete et l&apos;attention du croyant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Enseigner la doua aux enfants :</strong>{" "}
                      inculquer cette habitude des le plus jeune age permet
                      aux enfants de grandir avec une conscience naturelle
                      d&apos;Allah et de la protection divine. L&apos;{" "}
                      <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">apprentissage de l&apos;arabe</Link>{" "}
                      facilite la comprehension de ces invocations.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua de protection en islam"
                  description="Decouvrez toutes les invocations authentiques de protection enseignees par le Prophete pour vous proteger au quotidien."
                  href="/doua-protection-islam"
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
                    href="/doua-entrer-maison-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en entrant dans la maison
                  </Link>
                  <Link
                    href="/doua-protection-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de protection
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