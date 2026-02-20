import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Interprétation des rêves en islam : significations et symboles",
  description:
    "Comprendre les rêves en islam : les 3 types de rêves selon le Prophète ﷺ, les règles d'interprétation, les invocations et un dictionnaire des symboles par thème.",
  alternates: {
    canonical: "https://www.islamreligion.fr/reves-islam",
  },
};

const tocItems = [
  { id: "types-de-reves", label: "Les 3 types de rêves en islam" },
  { id: "regles", label: "Les règles d'interprétation" },
  { id: "invocations", label: "Invocations liées au sommeil" },
  { id: "dictionnaire", label: "Dictionnaire des rêves par thème" },
  { id: "index", label: "Index alphabétique" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Peut-on interpréter ses propres rêves en islam ?",
    answer:
      "Il est possible de réfléchir à la signification de ses rêves, surtout si l'on connaît les symboles mentionnés dans le Coran et la Sunna. Cependant, les savants recommandent de consulter une personne de confiance ayant une connaissance religieuse solide pour les rêves importants. L'interprétation demande sagesse, connaissance et discernement — elle ne se résume pas à un dictionnaire de symboles.",
  },
  {
    question: "Que faire après un mauvais rêve (cauchemar) ?",
    answer:
      "Le Prophète ﷺ a enseigné quatre choses à faire après un cauchemar : cracher légèrement trois fois sur sa gauche (sans salive), demander protection à Dieu contre le diable et contre le mal du rêve, changer de côté dans le lit, et ne raconter ce rêve à personne. Si la personne le souhaite, elle peut aussi se lever pour prier.",
  },
  {
    question: "Les rêves ont-ils une valeur prophétique en islam ?",
    answer:
      "Le Prophète ﷺ a dit que le rêve véridique (ru'ya) est une partie de la prophétie — il représente une des quarante-six parties de la prophétie selon un hadith rapporté par al-Bukhari. Cependant, cela ne signifie pas que tout rêve est une révélation. Seuls les rêves véridiques, faits par une personne sincère, peuvent contenir un message ou un signe.",
  },
  {
    question: "À qui raconter un bon rêve ?",
    answer:
      "Le Prophète ﷺ a recommandé de ne raconter un bon rêve qu'à une personne que l'on aime et en qui l'on a confiance. L'idée est d'éviter l'envie et les interprétations malveillantes. Le rêve peut se réaliser selon la première interprétation donnée, d'où l'importance de le confier à quelqu'un de bienveillant et de savant.",
  },
  {
    question: "Les rêves en couleur ont-ils un sens particulier ?",
    answer:
      "Les textes islamiques ne distinguent pas les rêves en couleur de ceux en noir et blanc. L'interprétation se base sur les symboles, les situations et le contexte du rêveur, pas sur les couleurs en elles-mêmes. Certains interprètes considèrent que le vert, le blanc et la lumière sont des signes positifs, mais cela relève de l'analyse symbolique, pas d'une règle fixe.",
  },
  {
    question: "Un rêve peut-il annoncer l'avenir ?",
    answer:
      "Le rêve véridique peut contenir des indications sur l'avenir, comme ce fut le cas pour le Prophète Yusuf (Joseph) dans le Coran. Toutefois, seul Dieu connaît l'invisible (al-ghayb). Un rêve ne constitue jamais une certitude sur l'avenir, et aucune décision importante ne devrait reposer uniquement sur un rêve.",
  },
  {
    question: "Les animaux dans les rêves ont-ils une signification ?",
    answer:
      "Dans la tradition d'interprétation islamique, les animaux portent des significations symboliques. Le serpent peut représenter un ennemi, le cheval la noblesse, le lion l'autorité. Mais chaque rêve doit être interprété dans son contexte : la situation du rêveur, les autres éléments du rêve et l'état d'esprit de la personne jouent un rôle dans la signification.",
  },
  {
    question: "Quelle est la différence entre ru'ya et hulm ?",
    answer:
      "En arabe, « ru'ya » désigne le rêve véridique, qui vient de Dieu et qui peut contenir un message, une bonne nouvelle ou un avertissement. « Hulm » désigne le rêve confus qui vient du diable ou de l'âme (pensées, désirs, peurs). Le Prophète ﷺ a clairement distingué les deux et a donné des conduites différentes pour chaque type.",
  },
];


const alphabetIndex = [
  { letter: "A", items: ["Accouchement", "Aigle", "Araignée", "Arbre", "Argent", "Avion"] },
  { letter: "B", items: ["Bébé", "Bijoux", "Blessure", "Bois", "Bougie"] },
  { letter: "C", items: ["Chameau", "Chat", "Chaussures", "Cheval", "Chien", "Cimetière", "Clé", "Coran", "Couteau"] },
  { letter: "D", items: ["Dattes", "Défunt", "Dent (chute)", "Désert", "Diamant", "Dieu (entendre)"] },
  { letter: "E", items: ["Eau claire", "Eau trouble", "Éléphant", "Enfant", "Épée", "Étoiles"] },
  { letter: "F", items: ["Feu", "Fleurs", "Forêt", "Fruits", "Funérailles"] },
  { letter: "G", items: ["Grossesse", "Grotte", "Guerre"] },
  { letter: "H", items: ["Hajj", "Hijab", "Huile d'olive"] },
  { letter: "I", items: ["Imam", "Inondation"] },
  { letter: "J", items: ["Jardin", "Jeûne", "Joie"] },
  { letter: "K", items: ["Kaaba"] },
  { letter: "L", items: ["Lait", "Lion", "Lune", "Lumière"] },
  { letter: "M", items: ["Maison", "Mariage", "Mer", "Miel", "Montagne", "Mort", "Mosquée"] },
  { letter: "N", items: ["Neige", "Nourriture", "Nuit", "Nuage"] },
  { letter: "O", items: ["Oiseau", "Or", "Orage"] },
  { letter: "P", items: ["Pain", "Parfum", "Pierre précieuse", "Pluie", "Poisson", "Prière", "Prophète ﷺ"] },
  { letter: "R", items: ["Rivière", "Robe blanche", "Route", "Roi"] },
  { letter: "S", items: ["Sang", "Serpent", "Soleil", "Souris"] },
  { letter: "T", items: ["Terre", "Tombe", "Tremblement de terre"] },
  { letter: "V", items: ["Vent", "Vêtements", "Voler (dans les airs)", "Voyage"] },
];

export default function RevesIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.islamreligion.fr/reves-islam/#webpage",
        url: "https://www.islamreligion.fr/reves-islam",
        name: "Interprétation des rêves en islam : significations et symboles",
        description:
          "Comprendre les rêves en islam : les 3 types de rêves, les règles d'interprétation, les invocations et un dictionnaire des symboles.",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        inLanguage: "fr-FR",
        breadcrumb: { "@id": "https://www.islamreligion.fr/reves-islam/#breadcrumb" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.islamreligion.fr/reves-islam/#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.islamreligion.fr" },
          { "@type": "ListItem", position: 2, name: "Rêves en islam", item: "https://www.islamreligion.fr/reves-islam" },
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
          title="Interprétation des rêves en islam : significations et symboles"
          subtitle="Les trois types de rêves selon le Prophète ﷺ, les règles d'interprétation et un dictionnaire complet des symboles oniriques."
          imageSrc="/images/croissant-lune-dore-etoiles-symbole-islam.jpg"
          imageAlt="Croissant de lune doré et étoiles, symboles de l'islam et du monde onirique"
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

              <nav className="mb-8 text-sm text-foreground-secondary" aria-label="Fil d'Ariane">
                <Link href="/" className="hover:text-primary">Accueil</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Rêves en islam</span>
              </nav>

              {/* ============================================ */}
              {/* INTRODUCTION */}
              {/* ============================================ */}
              <p className="text-lg leading-relaxed text-foreground">
                Les rêves occupent une place importante dans la tradition islamique. Le Coran
                relate plusieurs rêves prophétiques — celui de Yusuf (Joseph) qui voit onze
                étoiles se prosterner devant lui, celui d&apos;Ibrahim (Abraham) recevant
                l&apos;ordre de sacrifier son fils, ou encore celui du Prophète Muhammad ﷺ
                avant la bataille de Badr. La Sunna accorde elle aussi une attention
                particulière aux rêves, en distinguant leurs types et en enseignant la
                conduite à adopter face à chacun d&apos;eux.
              </p>

              <p className="mt-4 leading-relaxed text-foreground">
                Cette page rassemble les fondements de l&apos;interprétation des rêves
                en{" "}
                <Link href="/" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                  islam
                </Link>
                , à partir des sources authentiques (Coran et hadiths), ainsi qu&apos;un
                dictionnaire thématique des symboles les plus fréquents.
              </p>

              {/* ============================================ */}
              {/* SECTION 1 : Les 3 types de rêves */}
              {/* ============================================ */}
              <section id="types-de-reves" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les 3 types de rêves en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète Muhammad ﷺ a classé les rêves en trois catégories distinctes.
                  Cette classification est rapportée dans un hadith authentique et constitue
                  la base de toute réflexion sur les rêves dans la tradition musulmane.
                </p>

                <HadithCard
                  arabic="الرُّؤْيَا ثَلَاثٌ: فَرُؤْيَا حَقٌّ، وَرُؤْيَا يُحَدِّثُ بِهَا الرَّجُلُ نَفْسَهُ، وَرُؤْيَا تَحْزِينٌ مِنَ الشَّيْطَانِ"
                  text="Les rêves sont de trois sortes : le rêve véridique, le rêve où l'homme se parle à lui-même, et le rêve perturbant venant du diable."
                  source="Hadith rapporté par Muslim"
                />

                <div className="mt-8 space-y-6">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-lg font-bold text-secondary">1</span>
                      <h3 className="text-lg font-semibold text-primary">Le rêve véridique (al-ru&apos;ya al-sadiqa)</h3>
                    </div>
                    <p className="mt-3 leading-relaxed text-foreground-secondary">
                      C&apos;est le rêve qui vient de Dieu. Il est clair, lumineux et laisse
                      une impression forte au réveil. Le dormeur peut y voir un événement
                      futur, recevoir un avertissement ou une bonne nouvelle. Le Prophète ﷺ
                      a enseigné que ce type de rêve est &laquo;&nbsp;une des quarante-six parties
                      de la prophétie&nbsp;&raquo; (al-Bukhari). Les rêves des prophètes étaient
                      tous de cette nature — une forme de révélation (<em>wahy</em>).
                    </p>
                    <p className="mt-3 leading-relaxed text-foreground-secondary">
                      Le rêve véridique touche davantage les personnes sincères dans leur
                      parole et leur foi. Plus une personne est véridique dans sa vie éveillée,
                      plus ses rêves ont de chances d&apos;être véridiques.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-lg font-bold text-secondary">2</span>
                      <h3 className="text-lg font-semibold text-primary">Le rêve de l&apos;âme (hadith al-nafs)</h3>
                    </div>
                    <p className="mt-3 leading-relaxed text-foreground-secondary">
                      Ce sont les rêves qui reflètent nos pensées quotidiennes, nos
                      préoccupations, nos désirs ou nos craintes. Si vous pensez intensément
                      à quelque chose pendant la journée, il est fréquent d&apos;en rêver
                      la nuit. Ces rêves n&apos;ont pas de signification spirituelle
                      particulière — ils sont le simple écho de l&apos;activité mentale.
                    </p>
                    <p className="mt-3 leading-relaxed text-foreground-secondary">
                      Les savants recommandent de ne pas chercher à interpréter ces rêves,
                      car ils ne contiennent ni message ni avertissement. Ils se reconnaissent
                      souvent par leur caractère banal, confus ou en lien direct avec les
                      événements récents de la journée.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-lg font-bold text-secondary">3</span>
                      <h3 className="text-lg font-semibold text-primary">Le rêve du diable (hulm min al-shaytan)</h3>
                    </div>
                    <p className="mt-3 leading-relaxed text-foreground-secondary">
                      Le troisième type est le cauchemar ou le rêve perturbant envoyé par
                      le diable (<em>shaytan</em>) pour effrayer le croyant, le rendre
                      triste ou semer le doute dans son cœur. Ces rêves sont souvent
                      effrayants, violents ou étranges. Ils peuvent aussi pousser une
                      personne à commettre un péché en lui montrant des images tentantes.
                    </p>
                    <p className="mt-3 leading-relaxed text-foreground-secondary">
                      Le Prophète ﷺ a donné des instructions claires pour se protéger de
                      ce type de rêve : cracher légèrement trois fois à gauche, chercher
                      refuge auprès de Dieu contre le diable, changer de côté dans le lit,
                      et surtout ne raconter ce rêve à personne.
                    </p>
                  </div>
                </div>

                <HadithCard
                  arabic="إِذَا رَأَى أَحَدُكُمْ رُؤْيَا يُحِبُّهَا فَإِنَّمَا هِيَ مِنَ اللَّهِ فَلْيَحْمَدِ اللَّهَ عَلَيْهَا وَلْيُحَدِّثْ بِهَا"
                  text="Si l'un d'entre vous voit un rêve qu'il aime, c'est de la part de Dieu. Qu'il en remercie Dieu et qu'il le raconte."
                  source="Hadith rapporté par al-Bukhari"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Règles d'interprétation */}
              {/* ============================================ */}
              <section id="regles" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les règles de l&apos;interprétation des rêves
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;interprétation des rêves (<em>ta&apos;bir al-ru&apos;ya</em>) est
                  une science à part entière dans la tradition islamique. Elle a été pratiquée
                  par les prophètes — Yusuf (Joseph) étant le plus célèbre interprète
                  mentionné dans le Coran — et transmise de génération en génération par
                  les savants. Parmi les plus grands interprètes de la tradition musulmane,
                  on retrouve Ibn Sirin (mort en 729), dont les ouvrages restent des
                  références.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voici les principes qui encadrent cette pratique selon les savants.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">1</span>
                    <div>
                      <h3 className="font-semibold text-primary">Seuls les rêves véridiques méritent une interprétation</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les rêves confus, incohérents ou directement liés aux événements
                        de la journée ne doivent pas être interprétés. L&apos;interprétation
                        ne concerne que les rêves clairs, marquants et qui restent en mémoire
                        au réveil. Les cauchemars ne doivent pas être analysés mais repoussés
                        par les invocations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">2</span>
                    <div>
                      <h3 className="font-semibold text-primary">Le contexte du rêveur compte</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un même symbole peut avoir des significations différentes selon la
                        personne. L&apos;interprète doit connaître la situation du rêveur :
                        son état spirituel, sa profession, ses préoccupations, son âge et
                        son environnement. Le serpent dans le rêve d&apos;un agriculteur
                        n&apos;a pas la même portée que dans celui d&apos;un commerçant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">3</span>
                    <div>
                      <h3 className="font-semibold text-primary">Se baser sur le Coran et la Sunna</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les interprètes s&apos;appuient d&apos;abord sur les symboles
                        mentionnés dans le{" "}
                        <Link href="/apprendre-le-coran" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                          Coran
                        </Link>{" "}
                        et les hadiths. Par exemple, la corde dans le Coran symbolise souvent
                        le lien avec Dieu, la lumière représente la foi, et la noirceur
                        l&apos;égarement. Ces références textuelles servent de socle à
                        l&apos;interprétation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">4</span>
                    <div>
                      <h3 className="font-semibold text-primary">Ne pas interpréter de manière hâtive</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un hadith rapporte que le rêve &laquo;&nbsp;est suspendu à une patte
                        d&apos;oiseau tant qu&apos;il n&apos;est pas interprété, et quand
                        il est interprété, il se réalise&nbsp;&raquo; (rapporté par Abu Dawud
                        et at-Tirmidhi). Les savants déduisent de ce hadith qu&apos;il faut
                        être prudent dans l&apos;interprétation et ne la confier qu&apos;à
                        une personne compétente et bienveillante.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">5</span>
                    <div>
                      <h3 className="font-semibold text-primary">Ne pas raconter ses rêves à n&apos;importe qui</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a recommandé de ne partager un bon rêve qu&apos;avec
                        une personne de confiance, aimée et savante. Et de ne pas raconter
                        les cauchemars du tout. Cette prudence protège le rêveur des
                        interprétations malveillantes ou erronées.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 overflow-hidden rounded-xl">
                  <Image
                    src="/images/croissant-lune-lanterne-islam-decoration-pastel.jpg"
                    alt="Croissant de lune et lanterne islamique, ambiance nocturne et paisible"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Invocations */}
              {/* ============================================ */}
              <section id="invocations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations liées au sommeil et aux rêves
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La Sunna nous enseigne des invocations (<em>du&apos;a</em>) à réciter
                  avant de dormir et après le réveil. Ces invocations placent le croyant
                  sous la protection divine pendant le sommeil, qui est un état de
                  vulnérabilité. Elles font partie de la{" "}
                  <Link href="/" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    pratique quotidienne du musulman
                  </Link>.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Avant de dormir
                </h3>

                <div className="mt-4 space-y-4">
                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                      بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;En Ton nom, ô Seigneur, je meurs et je vis.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par al-Bukhari — Le sommeil est comparé à une petite mort.
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                      اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Ô Seigneur, protège-moi de Ton châtiment le jour où
                      Tu ressusciteras Tes serviteurs.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par Abu Dawud et at-Tirmidhi.
                    </p>
                  </div>

                  <p className="leading-relaxed text-foreground">
                    Le Prophète ﷺ recommandait aussi de réciter le verset du Trône
                    (<em>Ayat al-Kursi</em>, sourate al-Baqara, verset 255) et les
                    trois dernières sourates du Coran (al-Ikhlas, al-Falaq, an-Nas)
                    avant de s&apos;endormir. Selon un hadith, celui qui récite le
                    verset du Trône avant de dormir est protégé jusqu&apos;au matin.
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Au réveil
                </h3>

                <div className="mt-4 space-y-4">
                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                      الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Louange à Dieu qui nous a rendu la vie après nous avoir
                      fait mourir, et c&apos;est vers Lui la résurrection.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par al-Bukhari.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Après un cauchemar
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète ﷺ a enseigné la conduite suivante après un mauvais rêve :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">1</span>
                    <span>Cracher légèrement (<em>nafth</em>) trois fois sur sa gauche, sans salive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">2</span>
                    <span>Dire &laquo;&nbsp;<em>A&apos;udhu billahi min ash-shaytani ar-rajim</em>&nbsp;&raquo; (je cherche refuge auprès de Dieu contre le diable banni)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">3</span>
                    <span>Changer de côté dans le lit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">4</span>
                    <span>Ne raconter ce rêve à personne</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">5</span>
                    <span>Se lever pour prier si l&apos;inquiétude persiste</span>
                  </li>
                </ul>

                <HadithCard
                  arabic="فَإِذَا رَأَى أَحَدُكُمْ مَا يَكْرَهُ فَلْيَنْفُثْ عَنْ يَسَارِهِ ثَلَاثًا وَلْيَتَعَوَّذْ بِاللَّهِ مِنَ الشَّيْطَانِ ثَلَاثًا وَلْيَتَحَوَّلْ عَنْ جَنْبِهِ الَّذِي كَانَ عَلَيْهِ"
                  text="Si l'un d'entre vous voit ce qu'il déteste (en rêve), qu'il souffle trois fois sur sa gauche, qu'il cherche refuge auprès de Dieu contre le diable trois fois, et qu'il change le côté sur lequel il dormait."
                  source="Hadith rapporté par Muslim"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Dictionnaire par thème */}
              {/* ============================================ */}
              <section id="dictionnaire" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Dictionnaire des rêves par thème
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les symboles oniriques les plus courants sont classés ci-dessous par
                  catégorie. Chaque thème regroupe les éléments de rêve les plus recherchés,
                  avec leurs significations tirées de la tradition islamique et des ouvrages
                  des grands interprètes comme Ibn Sirin.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">Rêves d&apos;animaux et d&apos;insectes</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { href: "/rever-souris-islam", label: "Rêver de souris" },
                    { href: "/reve-poisson-islam-richesse", label: "Rêver de poisson" },
                    { href: "/reve-arachnide-islam", label: "Rêver d'araignée" },
                    { href: "/rever-chien-islam-signification", label: "Rêver de chien" },
                    { href: "/reve-cheval-islam-bienfaits", label: "Rêver de cheval" },
                    { href: "/rever-rat-islam-purification", label: "Rêver de rat" },
                    { href: "/symbolisme-fourmis-islam", label: "Rêver de fourmis" },
                    { href: "/rever-poux-islam-protection", label: "Rêver de poux" },
                    { href: "/rever-chat-islam-symbolisme", label: "Rêver de chat" },
                    { href: "/rever-crocodile-islam-protection", label: "Rêver de crocodile" },
                    { href: "/cafard-islam-signification", label: "Rêver de cafard" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary">{link.label}</span>
                    </Link>
                  ))}
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">Rêves d&apos;actions et de situations</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { href: "/signification-reve-tuer-islam", label: "Rêver de tuer" },
                    { href: "/pleurer-reve-islam-compassion", label: "Pleurer en rêve" },
                    { href: "/rever-tirer-dessus-islam", label: "Se faire tirer dessus" },
                    { href: "/rever-mort-islam-messages", label: "Rêver de la mort" },
                    { href: "/rever-perdre-dents-islam", label: "Perdre ses dents en rêve" },
                    { href: "/reves-ex-islam", label: "Rêver de son ex" },
                    { href: "/rever-enceinte-islam", label: "Rêver d'être enceinte" },
                    { href: "/rever-accoucher-islam", label: "Rêver d'accoucher" },
                    { href: "/reve-erotique-islam-purification", label: "Rêve érotique en islam" },
                    { href: "/mariage-islam-presages-significations", label: "Rêver de mariage" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary">{link.label}</span>
                    </Link>
                  ))}
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">Protection spirituelle</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                    </span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary">Sorcellerie en islam</span>
                  </Link>
                </div>

                <p className="mt-8 text-sm leading-relaxed text-foreground-secondary">
                  Rappel : l&apos;interprétation d&apos;un rêve ne peut jamais se réduire
                  à un simple symbole isolé. Le contexte du rêveur, les autres éléments du
                  rêve et la situation personnelle jouent un rôle déterminant dans la
                  signification.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Index alphabétique */}
              {/* ============================================ */}
              <section id="index" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Index alphabétique des rêves
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Retrouvez ci-dessous les symboles de rêves classés par ordre alphabétique.
                  Cet index sera enrichi au fur et à mesure avec des articles détaillant
                  chaque symbole.
                </p>

                <div className="mt-8 space-y-4">
                  {alphabetIndex.map((group) => (
                    <div key={group.letter} className="rounded-xl border border-border bg-white p-4">
                      <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-white text-lg">
                          {group.letter}
                        </span>
                        <div className="flex flex-wrap gap-2 pt-1.5">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-lg border border-border bg-accent px-3 py-1 text-sm text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm text-foreground-secondary">
                  Certains symboles ont une signification reconnue dans la tradition
                  islamique (eau, serpent, or, dent...), d&apos;autres relèvent davantage
                  de l&apos;interprétation personnelle. Dans tous les cas, seul un
                  interprète compétent peut donner un avis éclairé.
                </p>
              </section>

              {/* ============================================ */}
              {/* Les grands interprètes */}
              {/* ============================================ */}
              <section className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les grands interprètes dans la tradition islamique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;histoire islamique a connu plusieurs figures reconnues pour leur
                  capacité à interpréter les rêves. Leur savoir repose sur une connaissance
                  approfondie du Coran, de la Sunna et de la langue arabe.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="font-semibold text-primary">Le prophète Yusuf (Joseph)</h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Le Coran consacre une sourate entière (sourate Yusuf, 12e sourate) à
                      son histoire, dans laquelle l&apos;interprétation des rêves occupe
                      une place centrale. Enfant, il voit en rêve onze étoiles, le soleil
                      et la lune se prosterner devant lui. Plus tard, en prison, il interprète
                      les rêves de ses compagnons de cellule, puis celui du roi d&apos;Égypte
                      annonçant sept années d&apos;abondance suivies de sept années de famine.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="font-semibold text-primary">Muhammad ibn Sirin (653-729)</h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Savant de Bassora (Irak), contemporain des compagnons du Prophète ﷺ,
                      Ibn Sirin est la référence la plus citée en matière d&apos;interprétation
                      des rêves en islam. Son approche reposait sur la connaissance du Coran,
                      des hadiths et du contexte personnel du rêveur. L&apos;ouvrage qui lui
                      est attribué (<em>Muntakhab al-Kalam fi Tafsir al-Ahlam</em>) est l&apos;un
                      des plus diffusés dans le monde musulman, bien que les spécialistes
                      débattent de son attribution exacte.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="font-semibold text-primary">Ibn Qutayba (828-889)</h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Savant encyclopédiste, Ibn Qutayba a rédigé un traité sur
                      l&apos;interprétation des rêves (<em>Ta&apos;bir al-Ru&apos;ya</em>)
                      qui détaille les principes méthodologiques de cette science. Il y
                      explique comment l&apos;interprète doit procéder, en se basant sur
                      les analogies coraniques, les métaphores linguistiques et le contexte
                      culturel.
                    </p>
                  </div>
                </div>

                <div className="mt-8 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-chapelet-tasbih-islam-livre-sacre.jpg"
                    alt="Coran et chapelet tasbih, les sources de l'interprétation des rêves en islam"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    Le Coran et la Sunna sont les fondements de l&apos;interprétation des rêves en islam
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* Lien avec la guérison spirituelle */}
              {/* ============================================ */}
              <section className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêves et guérison spirituelle
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Dans la tradition islamique, les rêves et la guérison spirituelle sont
                  étroitement liés. Certains rêves peuvent révéler la source d&apos;un mal
                  (œil, envie, sorcellerie) ou orienter vers un remède. La récitation du
                  Coran avant de dormir — en particulier le verset du Trône et les sourates
                  protectrices — est à la fois un acte de prévention et de protection.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les{" "}
                  <Link href="/remede-arabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    remèdes issus de la médecine prophétique
                  </Link>{" "}
                  incluent des pratiques liées au sommeil : dormir en état de pureté
                  rituelle (<em>wudu</em>), réciter les invocations du coucher, et dormir
                  sur le côté droit. Ces pratiques, en plus de leurs bienfaits spirituels,
                  favorisent un sommeil de meilleure qualité et des rêves plus sereins.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour approfondir la compréhension des versets récités avant le sommeil,
                  il est bénéfique d&apos;{" "}
                  <Link href="/apprendre-le-coran" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    apprendre à réciter le Coran correctement
                  </Link>{" "}
                  et de comprendre le sens des sourates protectrices. La maîtrise de la{" "}
                  <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    langue arabe
                  </Link>{" "}
                  permet aussi d&apos;accéder directement aux ouvrages classiques
                  d&apos;interprétation des rêves.
                </p>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">Sur le même sujet</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    La religion musulmane
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes et médecine prophétique
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
