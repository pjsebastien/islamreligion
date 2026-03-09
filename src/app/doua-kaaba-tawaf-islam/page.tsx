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
    "Doua du tawaf et de la Kaaba : invocations authentiques pour la circumambulation",
  description:
    "Découvrez les douas du tawaf autour de la Kaaba en islam : invocations au Hajr al-Aswad, entre le Rukn Yamani et la Pierre Noire, au Multazam et lors du sa&apos;y entre Safa et Marwa. Textes en arabe, phonétique et traduction.",
  openGraph: {
    title:
      "Doua du tawaf et de la Kaaba : invocations authentiques pour la circumambulation",
    description:
      "Les invocations authentiques du tawaf autour de la Kaaba : douas en arabe avec phonétique et traduction, hadiths sur le pèlerinage et les rites sacrés de l&apos;islam.",
    url: "https://www.islamreligion.fr/doua-kaaba-tawaf-islam",
    images: [
      {
        url: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-kaaba-tawaf-islam",
  },
};

const tocItems = [
  { id: "tawaf-kaaba", label: "Le tawaf autour de la Kaaba" },
  { id: "doua-hajr-aswad", label: "Doua au Hajr al-Aswad" },
  { id: "doua-rukn-yamani", label: "Doua entre Rukn Yamani et Hajr al-Aswad" },
  { id: "doua-multazam", label: "Doua au Multazam" },
  { id: "say-safa-marwa", label: "Sa&apos;y entre Safa et Marwa" },
  { id: "douas-generales-tawaf", label: "Douas générales durant le tawaf" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua réciter pendant le tawaf autour de la Kaaba ?",
    answer:
      "Il n&apos;existe pas de doua spécifique obligatoire pour chaque tour du tawaf, hormis la doua entre le Rukn Yamani et le Hajr al-Aswad : « Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina &apos;adhab an-nar ». En dehors de cette invocation, le pèlerin est libre de faire toute doua personnelle, de réciter le Coran ou de faire du dhikr durant la circumambulation.",
  },
  {
    question: "Que dit-on en touchant la Pierre Noire (Hajr al-Aswad) ?",
    answer:
      "En touchant ou en pointant vers la Pierre Noire (Hajr al-Aswad) au début de chaque tour du tawaf, on prononce « Bismillah, Allahu Akbar » (Au nom d&apos;Allah, Allah est le Plus Grand). Si l&apos;on ne peut pas toucher la pierre en raison de la foule, on pointe vers elle de la main droite en prononçant cette même formule.",
  },
  {
    question: "Qu&apos;est-ce que le Multazam et quelle doua y réciter ?",
    answer:
      "Le Multazam est la partie du mur de la Kaaba située entre la Pierre Noire et la porte de la Kaaba. C&apos;est un lieu où les douas sont exaucées selon la tradition prophétique. Le pèlerin peut s&apos;y coller, poser sa joue, sa poitrine et ses mains, et faire toute invocation personnelle avec ferveur. Il n&apos;y a pas de doua fixe imposée au Multazam.",
  },
  {
    question: "Quelle doua faire sur le mont Safa et Marwa ?",
    answer:
      "En montant sur Safa, le pèlerin se tourne vers la Kaaba et dit : « Inna as-Safa wal-Marwata min sha&apos;a&apos;irillah » puis « Abda&apos;u bima bada&apos;a Allahu bihi » (Je commence par ce par quoi Allah a commencé). Ensuite, il prononce le takbir trois fois et fait la doua : « La ilaha illAllah wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa &apos;ala kulli shay&apos;in qadir ».",
  },
  {
    question: "Combien de tours fait-on lors du tawaf ?",
    answer:
      "Le tawaf comprend sept tours (ashwat) autour de la Kaaba, en commençant et en terminant au niveau de la Pierre Noire (Hajr al-Aswad). La circumambulation se fait dans le sens inverse des aiguilles d&apos;une montre, en gardant la Kaaba à sa gauche. Chaque tour complet est compté à partir du Hajr al-Aswad.",
  },
  {
    question: "Peut-on faire des douas en français pendant le tawaf ?",
    answer:
      "Oui, le pèlerin peut faire des douas dans n&apos;importe quelle langue pendant le tawaf, y compris en français. Allah comprend toutes les langues. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe, notamment la doua entre le Rukn Yamani et le Hajr al-Aswad, car elle est spécifiquement recommandée par le Prophète (paix et salut sur lui).",
  },
  {
    question: "Le tawaf est-il obligatoire pour le hajj et la omra ?",
    answer:
      "Oui, le tawaf est un pilier (rukn) indispensable aussi bien pour le hajj que pour la omra. Sans tawaf, ni le hajj ni la omra ne sont valides. Pour le hajj, il existe le tawaf al-ifada (tawaf du hajj) qui est obligatoire, le tawaf al-qudum (tawaf d&apos;arrivée) qui est sunna, et le tawaf al-wada&apos; (tawaf d&apos;adieu) qui est wajib selon la majorité des savants.",
  },
  {
    question: "Quelle est la différence entre le Rukn Yamani et le Hajr al-Aswad ?",
    answer:
      "Le Rukn Yamani est le coin de la Kaaba qui précède celui de la Pierre Noire dans le sens du tawaf. Il se situe du côté du Yémen, d&apos;où son nom. Le Hajr al-Aswad (Pierre Noire) est encastré dans le coin suivant et marque le point de départ et d&apos;arrivée de chaque tour. Le pèlerin touche le Rukn Yamani de la main sans l&apos;embrasser, tandis qu&apos;il embrasse la Pierre Noire si possible.",
  },
];

export default function DouaKaabaTawafIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-kaaba-tawaf-islam/#article",
        headline:
          "Doua du tawaf et de la Kaaba : invocations authentiques pour la circumambulation",
        description:
          "Découvrez les douas du tawaf autour de la Kaaba en islam : invocations au Hajr al-Aswad, entre le Rukn Yamani et la Pierre Noire, au Multazam et lors du sa'y entre Safa et Marwa.",
        image: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        datePublished: "2026-04-09",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-kaaba-tawaf-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-kaaba-tawaf-islam/#breadcrumb",
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
            name: "Doua du tawaf et de la Kaaba",
            item: "https://www.islamreligion.fr/doua-kaaba-tawaf-islam",
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
          title="Doua du tawaf et de la Kaaba : invocations authentiques en islam"
          subtitle="Les invocations prophétiques pour le tawaf, le Hajr al-Aswad, le Multazam et le sa&apos;y entre Safa et Marwa. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
          imageAlt="Pèlerins accomplissant le tawaf autour de la Kaaba lors du hajj avec invocations et douas en islam"
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
                <span className="text-foreground">Doua du tawaf et de la Kaaba</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le tawaf autour de la Kaaba est l&apos;un des rites les plus
                  sacrés de l&apos;islam. Chaque tour de circumambulation est une
                  occasion unique d&apos;invoquer Allah au plus près de Sa Maison
                  sacrée. Le Prophète (paix et salut sur lui) a enseigné des
                  invocations spécifiques pour le Hajr al-Aswad, le passage entre
                  le Rukn Yamani et la Pierre Noire, le Multazam, ainsi que pour
                  le sa&apos;y entre Safa et Marwa. Découvrez ces douas
                  authentiques en arabe avec phonétique et traduction.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le tawaf autour de la Kaaba */}
              {/* ============================================ */}
              <section id="tawaf-kaaba" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tawaf autour de la Kaaba : signification et règles
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>tawaf</strong> (طواف) désigne la circumambulation
                  rituelle autour de la <strong>Kaaba</strong>, la Maison sacrée
                  d&apos;Allah située à La Mecque. Ce rite constitue un pilier
                  fondamental du hajj et de la omra, et représente l&apos;un des
                  actes d&apos;adoration les plus anciens de l&apos;humanité.
                  Depuis l&apos;époque du prophète Ibrahim (paix sur lui) qui a
                  élevé les fondations de la Kaaba avec son fils Ismaïl, les
                  croyants tournent autour de cette demeure bénie en glorifiant
                  Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le tawaf comprend <strong>sept tours</strong> (ashwat) effectués
                  dans le sens inverse des aiguilles d&apos;une montre, en gardant
                  la Kaaba à sa gauche. Chaque tour commence et se termine au
                  niveau de la <strong>Pierre Noire</strong> (Hajr al-Aswad),
                  marquée par une ligne noire au sol. Le pèlerin doit être en
                  état de pureté rituelle (wudu), couvrir sa awra et avoir
                  l&apos;intention (niyya) sincère de s&apos;approcher d&apos;Allah
                  par cet acte d&apos;adoration.
                </p>

                <HadithCard
                  arabic="الطواف بالبيت صلاة إلا أن الله أباح فيه الكلام"
                  text="Le tawaf autour de la Maison est une prière, sauf qu&apos;Allah y a permis la parole."
                  source="Rapporté par at-Tirmidhi (960), an-Nasa&apos;i"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre la sacralité du tawaf : il est considéré
                  comme une forme de prière. C&apos;est pourquoi le pèlerin doit
                  l&apos;accomplir avec le même recueillement, la même humilité et
                  la même concentration que dans la salat. La différence est
                  qu&apos;il est permis de parler durant le tawaf, mais les savants
                  recommandent de limiter les paroles au dhikr, aux douas et à la
                  récitation du Coran pour tirer le maximum de bénéfice spirituel
                  de ces instants précieux passés autour de la Maison d&apos;Allah.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le raml :</strong> lors des trois premiers tours du
                      tawaf d&apos;arrivée (tawaf al-qudum), il est sunna pour les
                      hommes de marcher d&apos;un pas rapide en bombant les épaules.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;idtiba&apos; :</strong> les hommes découvrent
                      l&apos;épaule droite en passant l&apos;ihram sous l&apos;aisselle
                      droite durant le tawaf d&apos;arrivée uniquement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Après le tawaf :</strong> le pèlerin accomplit deux
                      rak&apos;at derrière le Maqam Ibrahim si possible, en récitant
                      sourate Al-Kafirun et sourate Al-Ikhlas.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
                    alt="Vue de la Kaaba entourée de pèlerins accomplissant le tawaf lors du hajj en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua au Hajr al-Aswad */}
              {/* ============================================ */}
              <section id="doua-hajr-aswad" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua au Hajr al-Aswad (Pierre Noire) : Bismillah Allahu Akbar
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>Hajr al-Aswad</strong> (الحجر الأسود), la Pierre
                  Noire, est encastré dans le coin est de la Kaaba. C&apos;est le
                  point de départ et d&apos;arrivée de chaque tour du tawaf.
                  Selon la tradition islamique, cette pierre provient du Paradis
                  et fut descendue avec Adam (paix sur lui). Le Prophète (paix et
                  salut sur lui) l&apos;embrassait lors de son tawaf, établissant
                  ainsi une sunna que les pèlerins s&apos;efforcent de suivre
                  depuis plus de quatorze siècles.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  À chaque passage devant la Pierre Noire, le pèlerin prononce
                  l&apos;invocation suivante, qu&apos;il puisse toucher ou
                  embrasser la pierre, ou qu&apos;il se contente de pointer vers
                  elle de la main droite en raison de la foule :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah, Allahu Akbar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, Allah est le Plus Grand&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Pratique rapportée dans plusieurs recueils de hadiths
                  </p>
                </div>

                <HadithCard
                  arabic="الحجر الأسود من الجنة وكان أشد بياضاً من الثلج حتى سودته خطايا أهل الشرك"
                  text="La Pierre Noire vient du Paradis. Elle était plus blanche que la neige, mais les péchés des idolâtres l&apos;ont noircie."
                  source="Rapporté par at-Tirmidhi (877), an-Nasa&apos;i (2935)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants précisent que toucher ou embrasser la Pierre Noire
                  n&apos;est pas une obligation du tawaf. Si la foule est dense,
                  il suffit de pointer vers elle avec la main droite en disant
                  &laquo;&nbsp;Bismillah, Allahu Akbar&nbsp;&raquo;. L&apos;essentiel
                  est d&apos;accomplir le geste avec foi et conviction, sans
                  bousculer ni gêner les autres pèlerins. Le Prophète (paix et
                  salut sur lui) a enseigné que la Pierre Noire témoignera le Jour
                  du Jugement en faveur de ceux qui l&apos;ont touchée avec
                  sincérité.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Au-delà de cette formule, le pèlerin peut ajouter des
                  invocations personnelles à chaque passage devant le Hajr
                  al-Aswad. C&apos;est un moment particulièrement propice pour
                  demander le pardon d&apos;Allah, la guidance et la miséricorde.
                  Certains savants recommandent également de dire &laquo;&nbsp;Allahumma
                  imanan bika wa tasdiqan bi kitabika wa wafa&apos;an bi
                  &apos;ahdika wa ittiba&apos;an li sunnati nabiyyika&nbsp;&raquo;
                  (Seigneur, par foi en Toi, en croyant en Ton Livre, en
                  respectant Ton pacte et en suivant la sunna de Ton
                  Prophète).
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
              {/* SECTION 3 : Doua entre Rukn Yamani et Hajr al-Aswad */}
              {/* ============================================ */}
              <section id="doua-rukn-yamani" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua entre le Rukn Yamani et le Hajr al-Aswad
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le passage entre le <strong>Rukn Yamani</strong> (le coin
                  yéménite de la Kaaba) et le <strong>Hajr al-Aswad</strong> est
                  le lieu d&apos;une invocation spécifiquement enseignée par le
                  Prophète (paix et salut sur lui). C&apos;est la seule doua du
                  tawaf qui fait l&apos;objet d&apos;un texte précis rapporté de
                  manière authentique dans la Sunna. Les compagnons du Prophète
                  la récitaient à chaque tour lors de ce passage.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina &apos;adhab an-nar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Notre Seigneur, accorde-nous une belle part dans ce monde, une belle part dans l&apos;au-delà, et protège-nous du châtiment du Feu&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:201) — Rapporté par Abu Dawud (1892)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation coranique est d&apos;une beauté et d&apos;une
                  complétude remarquables. En quelques mots, elle englobe tout ce
                  que le croyant peut désirer : le bien dans cette vie terrestre
                  (santé, subsistance licite, famille pieuse, connaissance
                  bénéfique), le bien dans l&apos;au-delà (le Paradis et
                  l&apos;agrément d&apos;Allah), et la protection contre le pire
                  des châtiments. Le Prophète (paix et salut sur lui) faisait
                  abondamment cette doua, pas seulement durant le tawaf mais en
                  de nombreuses occasions.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Rukn Yamani lui-même est un endroit béni. Le Prophète (paix
                  et salut sur lui) le touchait de la main droite à chaque
                  passage, sans l&apos;embrasser. Contrairement au Hajr al-Aswad,
                  on ne fait pas de takbir en touchant le Rukn Yamani, on le
                  touche simplement de la main droite en silence, puis on commence
                  à réciter la doua &laquo;&nbsp;Rabbana atina...&nbsp;&raquo;
                  jusqu&apos;au Hajr al-Aswad où l&apos;on prononce le takbir
                  pour entamer le tour suivant.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que cette portion du tawaf, entre les
                  deux coins de la Kaaba, est un moment de proximité intense avec
                  Allah. Le pèlerin qui récite cette doua avec présence de coeur
                  et certitude verra son invocation exaucée, car il combine
                  plusieurs facteurs d&apos;exaucement : un lieu sacré (la Kaaba),
                  un rite d&apos;adoration (le tawaf), une invocation prophétique
                  et un coeur tourné vers Allah. C&apos;est pourquoi les
                  compagnons ne négligeaient jamais cette doua lors de leur
                  pèlerinage.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
                    alt="Pèlerins en prière près de la Kaaba récitant la doua entre le Rukn Yamani et le Hajr al-Aswad"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua au Multazam */}
              {/* ============================================ */}
              <section id="doua-multazam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua au Multazam : le lieu où les invocations sont exaucées
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>Multazam</strong> (الملتزم) est la partie du mur de
                  la Kaaba située entre la Pierre Noire et la porte de la Kaaba,
                  sur une distance d&apos;environ deux mètres. Son nom vient du
                  verbe arabe &laquo;&nbsp;iltazama&nbsp;&raquo; qui signifie
                  &laquo;&nbsp;s&apos;accrocher&nbsp;&raquo; ou
                  &laquo;&nbsp;s&apos;attacher&nbsp;&raquo;, car les compagnons du
                  Prophète s&apos;y collaient le corps pour invoquer Allah. C&apos;est
                  un lieu où les douas sont particulièrement exaucées selon la
                  tradition prophétique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Abbas (qu&apos;Allah l&apos;agrée) avait l&apos;habitude
                  de se coller au Multazam, plaçant sa poitrine, son visage et ses
                  bras étendus contre le mur de la Kaaba, puis il invoquait Allah
                  avec ferveur. Il rapportait que c&apos;est entre la Pierre Noire
                  et la porte de la Kaaba que les douas sont le plus facilement
                  exaucées. Cette pratique des compagnons est rapportée par
                  al-Bayhaqi et d&apos;autres.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ يَا رَبَّ الْبَيْتِ الْعَتِيقِ أَعْتِقْ رِقَابَنَا وَرِقَابَ آبَائِنَا وَأُمَّهَاتِنَا وَأَبْنَائِنَا مِنَ النَّارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ya Rabbal-Baytil-&apos;Atiq, a&apos;tiq riqabana wa riqaba aba&apos;ina wa ummahatina wa abna&apos;ina min an-nar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Maître de la Maison Ancienne, affranchis nos cous, ceux de nos pères, de nos mères et de nos enfants du Feu&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Invocation rapportée dans la pratique des compagnons
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Au Multazam, le pèlerin n&apos;est pas limité à une doua
                  spécifique. Il peut adresser à Allah toutes ses demandes
                  personnelles : guérison d&apos;une maladie, résolution
                  d&apos;une difficulté, guidance pour un proche, pardon des
                  péchés, protection contre les épreuves. Les savants conseillent
                  de profiter de cet emplacement béni pour faire les douas les
                  plus importantes, celles qui touchent le coeur et que l&apos;on
                  porte depuis longtemps. C&apos;est un moment d&apos;intimité
                  rare avec le Créateur, au plus près de Sa Maison.
                </p>

                <HadithCard
                  arabic="ما بين الركن والباب ملتزم، ما دعا أحد فيه إلا استجيب له"
                  text="Ce qui est entre le coin (de la Pierre Noire) et la porte est le Multazam. Personne n&apos;y invoque sans que sa doua ne soit exaucée."
                  source="Rapporté par al-Bayhaqi et Ibn Abi Shayba"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Sa'y entre Safa et Marwa */}
              {/* ============================================ */}
              <section id="say-safa-marwa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua du sa&apos;y entre Safa et Marwa
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>sa&apos;y</strong> (السعي) entre les monts Safa et
                  Marwa est un rite obligatoire du hajj et de la omra. Il consiste
                  à effectuer sept allers-retours entre ces deux collines,
                  commémorant la course de <strong>Hajar</strong> (la mère du
                  prophète Ismaïl) à la recherche d&apos;eau pour son fils
                  nouveau-né dans le désert. Cette course éperdue, motivée par la
                  confiance en Allah et l&apos;amour maternel, fut récompensée par
                  le jaillissement miraculeux de la source de Zamzam.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En arrivant sur le mont Safa, le pèlerin se tourne vers la
                  Kaaba et récite le verset coranique suivant, puis prononce une
                  invocation spécifique trois fois :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Inna as-Safa wal-Marwata min sha&apos;a&apos;irillah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Certes, Safa et Marwa font partie des rites sacrés d&apos;Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:158)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Après avoir récité ce verset, le pèlerin dit :
                  &laquo;&nbsp;Abda&apos;u bima bada&apos;a Allahu bihi&nbsp;&raquo;
                  (Je commence par ce par quoi Allah a commencé), puis il
                  prononce le takbir et la doua suivante, qu&apos;il répète
                  trois fois en intercalant des invocations personnelles :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illAllah wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa &apos;ala kulli shay&apos;in qadir. La ilaha illAllah wahdahu, anjaza wa&apos;dahu, wa nasara &apos;abdahu, wa hazamal-ahzaba wahdahu
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah Seul, sans associé. À Lui la royauté, à Lui la louange, et Il est capable de toute chose. Il n&apos;y a de divinité qu&apos;Allah Seul, Il a tenu Sa promesse, secouru Son serviteur et défait les coalisés à Lui Seul&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (1218) dans le hadith de Jabir sur le pèlerinage du Prophète
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) prononçait cette invocation
                  trois fois sur Safa, en faisant des douas personnelles entre
                  chaque récitation. Il faisait de même sur Marwa. Entre les deux
                  monts, le pèlerin marche normalement, sauf dans la zone marquée
                  par des lumières vertes où les hommes accélèrent le pas
                  (harwala), commémorant ainsi la course de Hajar. Durant ce
                  parcours, le pèlerin est libre de faire toute invocation
                  personnelle, de réciter le Coran ou de multiplier le dhikr.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le sa&apos;y entre Safa et Marwa est un rappel puissant de la
                  confiance en Allah (tawakkul). Hajar, seule dans le désert avec
                  son enfant assoiffé, n&apos;a pas abandonné l&apos;espoir. Elle
                  a agi en cherchant de l&apos;eau tout en plaçant sa confiance en
                  Allah. Cette leçon spirituelle accompagne le pèlerin à chaque
                  aller-retour : combiner l&apos;effort personnel et la confiance
                  absolue en Allah est la voie du croyant.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas générales durant le tawaf */}
              {/* ============================================ */}
              <section id="douas-generales-tawaf" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas générales recommandées durant le tawaf
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En dehors des invocations spécifiques mentionnées précédemment,
                  le pèlerin dispose d&apos;une grande liberté dans ses douas
                  durant le tawaf. Les savants de l&apos;islam insistent sur le
                  fait qu&apos;il n&apos;existe <strong>pas de doua
                  spécifique pour chaque tour</strong> du tawaf, contrairement à
                  ce que certains livrets de pèlerinage non authentiques peuvent
                  suggérer. Le Prophète (paix et salut sur lui) n&apos;a pas
                  assigné une invocation particulière à chaque tour.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voici cependant des invocations prophétiques générales que le
                  pèlerin peut réciter durant son tawaf, tirées de la Sunna
                  authentique :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> SubhanAllah, wal-hamdulillah, wa la ilaha illAllah, wAllahu Akbar, wa la hawla wa la quwwata illa billahil-&apos;Aliyyil-&apos;Adhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire à Allah, louange à Allah, il n&apos;y a de divinité qu&apos;Allah, Allah est le Plus Grand, et il n&apos;y a de force ni de puissance qu&apos;en Allah, le Très-Haut, l&apos;Immense&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Les paroles les plus aimées d&apos;Allah — Rapporté par Muslim
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le tawaf est également un moment idéal pour le repentir
                  (istighfar). Le pèlerin peut multiplier la formule
                  &laquo;&nbsp;Astaghfirullah&nbsp;&raquo; et demander le pardon
                  d&apos;Allah pour ses péchés passés. Les larmes versées devant
                  la Kaaba par sincérité et humilité sont parmi les signes les
                  plus nobles de la foi. Le pèlerin peut aussi réciter le Coran
                  durant le tawaf, notamment les courtes sourates qu&apos;il
                  connaît par coeur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de varier les invocations durant les
                  sept tours pour maintenir la concentration et la présence de
                  coeur. Un tour peut être consacré à la demande de pardon, un
                  autre aux douas pour la famille, un autre pour la Oumma
                  musulmane, un autre pour les défunts, etc. L&apos;essentiel est
                  de ne pas réciter mécaniquement des formules sans en comprendre
                  le sens, mais de vivre chaque instant du tawaf comme un
                  dialogue intime avec Allah.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le dhikr :</strong> multiplier les formules de
                      rappel d&apos;Allah (tasbih, tahmid, takbir, tahlil) durant
                      tout le tawaf.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les douas personnelles :</strong> demander à Allah
                      en toute langue ce qui pèse sur le coeur, avec sincérité et
                      humilité.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La récitation du Coran :</strong> lire ou réciter
                      des versets du Coran durant les tours, en particulier les
                      versets relatifs au <Link href="/doua-hajj-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">hajj</Link> et au pèlerinage.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* Maillage interne */}
              {/* ============================================ */}
              <nav className="mt-16 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  Articles liés
                </p>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="/doua-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua en islam : guide complet des invocations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doua-hajj-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua du hajj : toutes les invocations du pèlerinage
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doua-omra-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua de la omra : invocations pour le petit pèlerinage
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doua-arafat-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua du jour de Arafat : la meilleure invocation
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* ============================================ */}
              {/* AffiliateForm */}
              {/* ============================================ */}
              <div className="mt-16">
                <AffiliateForm title="Apprenez l&apos;arabe pour comprendre vos douas" description="Maîtrisez la langue du Coran et comprenez enfin le sens profond de chaque invocation que vous récitez au quotidien." preselect="arabe" />
              </div>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
