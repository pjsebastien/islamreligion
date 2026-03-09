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
    "Doua de la nuit du destin (Laylat al-Qadr) : invocations et mérites",
  description:
    "Découvrez la doua de la nuit du destin en islam : l'invocation enseignée par le Prophète à Aisha (Allahumma innaka 'afuwwun), sourate al-Qadr, signes de Laylat al-Qadr, douas en arabe avec phonétique et traduction.",
  openGraph: {
    title:
      "Doua de la nuit du destin (Laylat al-Qadr) : invocations et mérites",
    description:
      "Les invocations authentiques de la nuit du destin : la doua d'Aisha, sourate al-Qadr, signes de Laylat al-Qadr et guide d'adoration des 10 dernières nuits du Ramadan.",
    url: "https://www.islamreligion.fr/doua-nuit-destin-islam",
    images: [
      {
        url: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-nuit-destin-islam",
  },
};

const tocItems = [
  { id: "laylat-al-qadr", label: "Qu'est-ce que Laylat al-Qadr" },
  { id: "sourate-al-qadr", label: "Sourate al-Qadr et ses enseignements" },
  { id: "doua-aisha", label: "La doua enseignée à Aisha" },
  { id: "douas-nuit-destin", label: "Douas recommandées pour cette nuit" },
  { id: "signes-laylat-al-qadr", label: "Signes de Laylat al-Qadr" },
  { id: "adoration-10-dernieres-nuits", label: "L'adoration des 10 dernières nuits" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua de la nuit du destin en islam ?",
    answer:
      "La doua principale de la nuit du destin est celle que le Prophète (paix et salut sur lui) a enseignée à Aisha (qu&apos;Allah soit satisfait d&apos;elle) : « Allahumma innaka &apos;afuwwun tuhibbul &apos;afwa fa&apos;fu &apos;anni » qui signifie « Ô Allah, Tu es Celui qui pardonne, Tu aimes le pardon, alors pardonne-moi. » Ce hadith est rapporté par at-Tirmidhi et authentifié par al-Albani.",
  },
  {
    question: "Quand tombe la nuit du destin (Laylat al-Qadr) ?",
    answer:
      "Laylat al-Qadr se situe dans les dix dernières nuits du mois de Ramadan, plus particulièrement les nuits impaires (21e, 23e, 25e, 27e et 29e). Le Prophète (paix et salut sur lui) a encouragé les musulmans à la rechercher dans ces nuits impaires. Bien que la 27e nuit soit souvent évoquée, la sagesse divine a voulu que sa date exacte reste cachée afin d&apos;encourager l&apos;adoration continue.",
  },
  {
    question: "Pourquoi la nuit du destin vaut-elle mieux que mille mois ?",
    answer:
      "Allah affirme dans sourate al-Qadr (97:3) que « la nuit du destin est meilleure que mille mois ». Cela signifie que les actes d&apos;adoration accomplis durant cette nuit — prière, doua, lecture du Coran, dhikr — ont une récompense supérieure à celle de mille mois d&apos;adoration continue, soit plus de 83 ans. C&apos;est une immense miséricorde d&apos;Allah envers cette communauté.",
  },
  {
    question: "Peut-on faire la doua de la nuit du destin en français ?",
    answer:
      "Oui, les invocations personnelles peuvent être formulées dans toute langue, y compris le français. Cependant, il est recommandé d&apos;apprendre la doua prophétique en arabe (Allahumma innaka &apos;afuwwun tuhibbul &apos;afwa fa&apos;fu &apos;anni) car elle a été spécifiquement enseignée par le Prophète pour cette nuit bénie. Les supplications personnelles en français sont parfaitement valides en complément.",
  },
  {
    question: "Quels sont les signes de Laylat al-Qadr ?",
    answer:
      "Plusieurs hadiths décrivent les signes de Laylat al-Qadr : la nuit est calme, ni trop chaude ni trop froide, avec une luminosité particulière. Le matin qui suit, le soleil se lève sans rayons vifs, comme un disque pâle. Le Prophète (paix et salut sur lui) a aussi mentionné qu&apos;il n&apos;y a pas de pluie ni de vent fort cette nuit-là. Ces signes sont confirmés dans des hadiths rapportés par Muslim et Ahmad.",
  },
  {
    question: "Comment maximiser ses chances d'atteindre Laylat al-Qadr ?",
    answer:
      "Le Prophète (paix et salut sur lui) pratiquait l&apos;itikaf (retraite spirituelle) pendant les dix dernières nuits du Ramadan. Pour maximiser ses chances : prier les nuits impaires avec dévotion, multiplier les douas après chaque prière, lire le Coran abondamment, faire beaucoup de dhikr et d&apos;istighfar, et donner l&apos;aumône chacune de ces nuits. La régularité sur les dix nuits est la meilleure stratégie.",
  },
  {
    question: "Quelle sourate réciter la nuit du destin ?",
    answer:
      "Il est recommandé de réciter sourate al-Qadr (sourate 97) qui décrit les mérites de cette nuit bénie. En complément, les sourates al-Mulk (67), Ya-Sin (36), ad-Dukhan (44) et les dernières sourates du Coran sont également recommandées. La lecture du Coran en général est un acte d&apos;adoration majeur durant cette nuit, quelle que soit la sourate choisie.",
  },
  {
    question: "L'itikaf est-il obligatoire pour atteindre Laylat al-Qadr ?",
    answer:
      "Non, l&apos;itikaf n&apos;est pas obligatoire mais fortement recommandé (sunna mu&apos;akkada). Le Prophète (paix et salut sur lui) le pratiquait chaque année. Celui qui ne peut pas faire l&apos;itikaf peut néanmoins atteindre Laylat al-Qadr en priant chez lui, en multipliant les invocations et en veillant les nuits impaires des dix derniers jours du Ramadan avec dévotion et sincérité.",
  },
];

export default function DouaNuitDestinIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-nuit-destin-islam/#article",
        headline:
          "Doua de la nuit du destin (Laylat al-Qadr) : invocations et mérites",
        description:
          "Découvrez la doua de la nuit du destin en islam : l'invocation enseignée par le Prophète à Aisha, sourate al-Qadr, signes de Laylat al-Qadr et guide d'adoration.",
        image: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg",
        datePublished: "2026-03-23",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-nuit-destin-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-nuit-destin-islam/#breadcrumb",
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
            name: "Doua de la nuit du destin",
            item: "https://www.islamreligion.fr/doua-nuit-destin-islam",
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
          title="Doua de la nuit du destin (Laylat al-Qadr) : invocations et mérites"
          subtitle="Découvrez les invocations authentiques de la nuit du destin, la doua enseignée à Aisha, les mérites de Laylat al-Qadr et comment adorer Allah durant les 10 dernières nuits du Ramadan."
          imageSrc="/images/croissant-lune-dore-lanternes-islam-ramadan.jpg"
          imageAlt="Croissant de lune doré et lanternes illuminées symbolisant la nuit du destin Laylat al-Qadr en islam durant le Ramadan"
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
                <span className="text-foreground">Doua de la nuit du destin</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La nuit du destin (Laylat al-Qadr) est la nuit la plus bénie
                  de l&apos;année en islam : elle vaut mieux que mille mois
                  d&apos;adoration. Le Prophète (paix et salut sur lui) a
                  enseigné à Aisha (qu&apos;Allah soit satisfait d&apos;elle)
                  une doua spécifique pour cette nuit :
                  &laquo;&nbsp;Allahumma innaka &apos;afuwwun tuhibbul
                  &apos;afwa fa&apos;fu &apos;anni&nbsp;&raquo; (Ô Allah, Tu es
                  Celui qui pardonne, Tu aimes le pardon, alors pardonne-moi).
                  Cette nuit se situe dans les dix dernières nuits impaires du
                  Ramadan, et le croyant est invité à la rechercher avec
                  dévotion, prière et invocations abondantes.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Qu'est-ce que Laylat al-Qadr */}
              {/* ============================================ */}
              <section id="laylat-al-qadr" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce que Laylat al-Qadr (la nuit du destin) ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  <strong>Laylat al-Qadr</strong>, littéralement &laquo;&nbsp;la
                  nuit de la destinée&nbsp;&raquo; ou &laquo;&nbsp;la nuit du
                  décret&nbsp;&raquo;, est la nuit au cours de laquelle Allah a
                  révélé le Coran au Prophète Muhammad (paix et salut sur lui)
                  par l&apos;intermédiaire de l&apos;ange Jibril (Gabriel). Cette
                  nuit bénie se situe dans les dix dernières nuits du mois de
                  Ramadan et constitue le sommet spirituel de l&apos;année pour
                  tout musulman. Allah lui a accordé un statut incomparable en
                  déclarant qu&apos;elle est &laquo;&nbsp;meilleure que mille
                  mois&nbsp;&raquo; (Coran, 97:3).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le mot <strong>Qadr</strong> porte plusieurs significations en
                  arabe. Il peut désigner le &laquo;&nbsp;destin&nbsp;&raquo;, car
                  c&apos;est durant cette nuit que les décrets divins pour
                  l&apos;année à venir sont fixés. Il peut également signifier
                  &laquo;&nbsp;la valeur&nbsp;&raquo; et &laquo;&nbsp;la
                  grandeur&nbsp;&raquo;, en référence à l&apos;immense rang que
                  cette nuit occupe auprès d&apos;Allah. Les savants affirment
                  que durant Laylat al-Qadr, les anges descendent en nombre
                  considérable sur terre, apportant miséricorde, bénédiction et
                  paix jusqu&apos;à l&apos;aube.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) accordait une importance
                  capitale à cette nuit. Chaque année, il intensifiait son
                  adoration durant les dix dernières nuits du Ramadan, pratiquant
                  l&apos;itikaf (retraite spirituelle) dans la mosquée et
                  réveillant sa famille pour la prière nocturne. Aisha
                  (qu&apos;Allah soit satisfait d&apos;elle) rapporte
                  qu&apos;il &laquo;&nbsp;serrait son izâr (se privait de
                  relations conjugales), veillait la nuit entière et réveillait
                  les siens&nbsp;&raquo; (al-Bukhari et Muslim).
                </p>

                <HadithCard
                  arabic="من قام ليلة القدر إيمانا واحتسابا غفر له ما تقدم من ذنبه"
                  text="Quiconque passe la nuit du destin en prière, avec foi et en espérant la récompense d'Allah, ses péchés antérieurs lui seront pardonnés."
                  source="Rapporté par al-Bukhari (1901) et Muslim (760)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental établit la promesse divine associée à
                  cette nuit : le pardon complet des péchés passés pour celui
                  qui la passe en adoration sincère. Les deux conditions
                  mentionnées — &laquo;&nbsp;avec foi&nbsp;&raquo; (imanan) et
                  &laquo;&nbsp;en espérant la récompense&nbsp;&raquo;
                  (ihtisaban) — soulignent que l&apos;adoration doit être
                  motivée par la conviction et la recherche de l&apos;agrément
                  d&apos;Allah, et non par l&apos;habitude ou la pression
                  sociale. C&apos;est une occasion unique de repartir avec une
                  ardoise vierge, une miséricorde que tout croyant devrait
                  s&apos;efforcer de saisir.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/croissant-lune-dore-lanternes-islam-ramadan.jpg"
                    alt="Lanternes illuminées et croissant de lune doré symbolisant Laylat al-Qadr la nuit du destin en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Sourate al-Qadr */}
              {/* ============================================ */}
              <section id="sourate-al-qadr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Sourate al-Qadr : les enseignements sur la nuit du destin
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Allah a consacré une sourate entière du Coran à cette nuit
                  bénie : la sourate al-Qadr (sourate 97). Composée de cinq
                  versets seulement, elle condense pourtant l&apos;essentiel de
                  ce que le croyant doit savoir sur Laylat al-Qadr. Chaque
                  verset apporte un enseignement fondamental sur la valeur, le
                  contenu et les caractéristiques de cette nuit unique.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۞ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۞ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ ۞ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ ۞ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Inna anzalnahu fi laylatil qadr. Wa ma adraka ma laylatil qadr. Laylatul qadri khayrun min alfi shahr. Tanazzalul mala&apos;ikatu war-ruhu fiha bi idhni rabbihim min kulli amr. Salamun hiya hatta matla&apos;il fajr.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Nous l&apos;avons certes fait descendre durant la nuit du destin. Et qui te dira ce qu&apos;est la nuit du destin ? La nuit du destin est meilleure que mille mois. Durant celle-ci descendent les anges ainsi que l&apos;Esprit, par la permission de leur Seigneur pour tout ordre. Elle est paix et salut jusqu&apos;à l&apos;apparition de l&apos;aube.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Qadr (97:1-5)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les exégètes du Coran ont tiré de cette sourate plusieurs
                  enseignements majeurs. Premièrement, Allah utilise le pronom
                  de majesté &laquo;&nbsp;Nous&nbsp;&raquo; (inna) pour souligner
                  la grandeur de l&apos;acte de révélation. Deuxièmement, la
                  question rhétorique &laquo;&nbsp;Et qui te dira ce qu&apos;est
                  la nuit du destin ?&nbsp;&raquo; indique que sa valeur
                  dépasse l&apos;entendement humain. Troisièmement,
                  l&apos;expression &laquo;&nbsp;meilleure que mille
                  mois&nbsp;&raquo; équivaut à plus de 83 ans d&apos;adoration
                  continue, une bénédiction sans équivalent dans l&apos;histoire
                  des communautés religieuses.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La mention de la descente des anges et de l&apos;Esprit
                  (ar-Ruh, identifié par les savants comme l&apos;ange Jibril)
                  indique que la terre est envahie de créatures célestes qui
                  apportent la miséricorde et la bénédiction d&apos;Allah. Le
                  dernier verset — &laquo;&nbsp;Elle est paix et salut
                  jusqu&apos;à l&apos;apparition de l&apos;aube&nbsp;&raquo; —
                  signifie que cette nuit est entièrement dédiée à la paix
                  spirituelle, à la sérénité et à la protection divine. C&apos;est
                  un moment où le croyant est enveloppé de la grâce d&apos;Allah,
                  du coucher du soleil jusqu&apos;à l&apos;aube.
                </p>

                <HadithCard
                  arabic="التمسوها في العشر الأواخر من رمضان، في الوتر"
                  text="Cherchez-la (Laylat al-Qadr) dans les dix dernières nuits du Ramadan, durant les nuits impaires."
                  source="Rapporté par al-Bukhari (2017) et Muslim (1169)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La sagesse derrière le fait qu&apos;Allah ait gardé la date
                  exacte de Laylat al-Qadr cachée est immense : elle pousse les
                  croyants à intensifier leur adoration sur l&apos;ensemble des
                  dix dernières nuits, plutôt que de se limiter à une seule nuit.
                  Cette recherche active constitue en elle-même un acte
                  d&apos;adoration qui rapproche le serviteur de son Seigneur.
                  Le Prophète (paix et salut sur lui) a cependant orienté la
                  recherche vers les nuits impaires : la 21e, la 23e, la 25e, la
                  27e et la 29e nuit du Ramadan.
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
              {/* SECTION 3 : La doua enseignée à Aisha */}
              {/* ============================================ */}
              <section id="doua-aisha" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de la nuit du destin enseignée à Aisha
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le hadith le plus célèbre concernant la doua spécifique de
                  Laylat al-Qadr est celui rapporté par Aisha
                  (qu&apos;Allah soit satisfait d&apos;elle). Elle demanda au
                  Prophète (paix et salut sur lui) : &laquo;&nbsp;Ô Messager
                  d&apos;Allah, si je sais quelle nuit est la nuit du destin,
                  que dois-je dire ?&nbsp;&raquo; Le Prophète lui enseigna alors
                  cette invocation d&apos;une puissance et d&apos;une beauté
                  remarquables.
                </p>

                <HadithCard
                  arabic="اللهم إنك عفو تحب العفو فاعف عني"
                  text="Ô Allah, Tu es Celui qui pardonne (al-'Afuww), Tu aimes le pardon, alors pardonne-moi."
                  source="Rapporté par at-Tirmidhi (3513), authentifié par al-Albani"
                />

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma innaka &apos;afuwwun tuhibbul &apos;afwa fa&apos;fu &apos;anni
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, Tu es Celui qui pardonne, Tu aimes le pardon, alors pardonne-moi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3513), Ibn Majah (3850)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua est d&apos;une profondeur théologique remarquable.
                  Le nom divin <strong>al-&apos;Afuww</strong> (العفو) désigne
                  Celui qui efface complètement les péchés, au point de les faire
                  disparaître comme s&apos;ils n&apos;avaient jamais existé.
                  C&apos;est un degré supérieur au simple pardon (maghfira) :
                  alors que le pardon couvre le péché, le &apos;afw l&apos;efface
                  totalement. Le fait que le Prophète ait choisi cette invocation
                  spécifiquement pour la nuit du destin montre que le croyant
                  devrait prioritairement demander l&apos;effacement complet de
                  ses fautes en cette nuit bénie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La structure de la doua est également instructive : elle
                  commence par invoquer Allah par Son nom al-&apos;Afuww, puis
                  affirme qu&apos;Il aime le pardon (tuhibbul &apos;afwa), et
                  enfin formule la demande (fa&apos;fu &apos;anni — pardonne-moi).
                  Cette construction suit un principe prophétique fondamental :
                  commencer par glorifier Allah, mentionner un de Ses attributs
                  en lien avec la demande, puis formuler l&apos;invocation.
                  C&apos;est un modèle que le croyant peut appliquer à toutes
                  ses douas.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de répéter cette doua abondamment
                  durant les dix dernières nuits du Ramadan, et particulièrement
                  les nuits impaires. Elle peut être récitée après chaque prière
                  de tarawih, durant le dernier tiers de la nuit, en
                  prosternation (sujud), ou à tout moment de la nuit. Sa
                  brièveté en fait une invocation facile à mémoriser et à répéter
                  avec concentration et humilité, même pour les enfants et les
                  nouveaux musulmans.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas recommandées */}
              {/* ============================================ */}
              <section id="douas-nuit-destin" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas recommandées pour la nuit du destin
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus de la doua principale enseignée à Aisha, plusieurs
                  invocations coraniques et prophétiques sont particulièrement
                  appropriées pour Laylat al-Qadr. Voici les douas les plus
                  recommandées par les savants, avec leur texte arabe,
                  phonétique et traduction en français.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua de demande de pardon (istighfar)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le sayyidul istighfar (maître de la demande de pardon) est
                  l&apos;une des invocations les plus complètes pour solliciter
                  le pardon d&apos;Allah. Elle est particulièrement adaptée à la
                  nuit du destin, dont le thème central est l&apos;effacement
                  des péchés.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma anta rabbi la ilaha illa anta, khalaqtani wa ana &apos;abduk, wa ana &apos;ala &apos;ahdika wa wa&apos;dika mastata&apos;t, a&apos;udhu bika min sharri ma sana&apos;t, abu&apos;u laka bi ni&apos;matika &apos;alayya wa abu&apos;u bi dhanbi, faghfir li fa innahu la yaghfirudh-dhunuba illa ant
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, Tu es mon Seigneur, il n&apos;y a de divinité que Toi. Tu m&apos;as créé et je suis Ton serviteur. Je m&apos;en tiens à Ton pacte et à Ta promesse autant que je le peux. Je cherche refuge auprès de Toi contre le mal que j&apos;ai commis. Je reconnais Tes bienfaits envers moi et je reconnais mes péchés. Pardonne-moi, car nul ne pardonne les péchés si ce n&apos;est Toi.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6306)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour la guidée et la piété
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation prophétique rassemble les demandes
                  essentielles que le croyant peut formuler en cette nuit bénie :
                  la guidée, la piété, la chasteté et la richesse spirituelle.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;alukal huda wat-tuqa wal &apos;afafa wal ghina
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, je Te demande la guidée, la piété, la chasteté et la suffisance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2721)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour le bien ici-bas et dans l&apos;au-delà
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette doua coranique, que le Prophète (paix et salut sur lui)
                  récitait fréquemment, est l&apos;une des plus complètes car
                  elle englobe le bien de ce monde et celui de l&apos;au-delà.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana atina fid-dunya hasanatan wa fil akhirati hasanatan wa qina &apos;adhaban-nar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-nous une belle part ici-bas, et une belle part dans l&apos;au-delà, et protège-nous du châtiment du Feu&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Baqara (2:201)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua pour la fermeté du cœur
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) multipliait cette
                  invocation, reconnaissant que les cœurs sont entre les doigts
                  d&apos;Allah qui les retourne comme Il le souhaite. En cette
                  nuit bénie, demander la fermeté sur la foi est essentiel.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ya muqallibal qulub, thabbit qalbi &apos;ala dinik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Celui qui retourne les cœurs, affermis mon cœur sur Ta religion&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (2140), authentifié par al-Albani
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière nocturne dans une mosquée illustrant l'adoration durant la nuit du destin Laylat al-Qadr"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Signes de Laylat al-Qadr */}
              {/* ============================================ */}
              <section id="signes-laylat-al-qadr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les signes de Laylat al-Qadr d&apos;après la Sunna
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Bien que la date exacte de Laylat al-Qadr soit cachée, le
                  Prophète (paix et salut sur lui) a décrit plusieurs signes
                  permettant de la reconnaître. Ces indices, rapportés dans des
                  hadiths authentiques, concernent principalement les conditions
                  climatiques de la nuit et l&apos;apparence du soleil le
                  lendemain matin.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une nuit calme et sereine :</strong> la nuit du
                      destin n&apos;est ni excessivement chaude ni excessivement
                      froide. Elle est caractérisée par une douceur
                      climatique particulière et une tranquillité inhabituelle
                      (Ahmad, 22765).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le soleil se lève sans rayons vifs :</strong> le
                      matin qui suit Laylat al-Qadr, le soleil se lève comme un
                      disque pâle, sans éclat ni rayons intenses, semblable à
                      la lune une nuit de pleine lune (Muslim, 762).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une luminosité particulière :</strong> certains
                      compagnons ont décrit une clarté spéciale dans le ciel
                      cette nuit-là, une lumière qui ne ressemble pas à celle
                      des autres nuits.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Absence de pluie et de vent fort :</strong> la
                      nuit est paisible, sans intempéries ni perturbations
                      météorologiques majeures, reflétant la paix mentionnée
                      dans sourate al-Qadr.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un sentiment de paix intérieure :</strong> de
                      nombreux savants et adorateurs rapportent ressentir une
                      sérénité et une douceur spirituelle particulières durant
                      cette nuit, un apaisement du cœur qui facilite
                      l&apos;adoration et les invocations.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il est important de noter que ces signes sont des indices et
                  non des certitudes absolues. Les savants soulignent que le
                  croyant ne doit pas se baser uniquement sur ces signes pour
                  déterminer s&apos;il a atteint Laylat al-Qadr. La meilleure
                  approche reste de s&apos;efforcer d&apos;adorer Allah avec la
                  même intensité durant toutes les nuits impaires des dix
                  dernières nuits du Ramadan, conformément à la recommandation
                  prophétique. Le fait de ne pas reconnaître les signes ne
                  diminue en rien la récompense de celui qui a veillé avec foi
                  et sincérité.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Adoration des 10 dernières nuits */}
              {/* ============================================ */}
              <section id="adoration-10-dernieres-nuits" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment adorer Allah durant les 10 dernières nuits du Ramadan
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les dix dernières nuits du Ramadan constituent le cœur
                  spirituel de ce mois béni. Le Prophète (paix et salut sur lui)
                  redoublait d&apos;efforts durant cette période, passant de
                  l&apos;adoration habituelle à un engagement total. Voici un
                  guide pratique pour maximiser l&apos;adoration durant ces
                  nuits, en espérant atteindre Laylat al-Qadr.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La prière de nuit (qiyam al-layl) :</strong>{" "}
                      accomplir les prières de tarawih et tahajjud avec
                      concentration et humilité. Allonger les prosternations
                      pour y multiplier les douas, car la prosternation est le
                      moment où le serviteur est le plus proche de son Seigneur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La lecture du Coran :</strong> consacrer une
                      partie significative de la nuit à la lecture et à la
                      méditation du Coran. Les dix dernières nuits sont
                      l&apos;occasion de compléter la lecture intégrale du Coran
                      (khatm) commencée au début du Ramadan.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les invocations abondantes :</strong> réciter la
                      doua d&apos;Aisha (&laquo;&nbsp;Allahumma innaka
                      &apos;afuwwun...&nbsp;&raquo;) de manière répétée, et y
                      ajouter des supplications personnelles dans sa langue pour
                      demander le pardon, la guidée et les besoins de ce monde
                      et de l&apos;au-delà.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le dhikr et l&apos;istighfar :</strong> multiplier
                      le rappel d&apos;Allah (subhanAllah, alhamdulillah, Allahu
                      akbar, la ilaha illAllah) et la demande de pardon
                      (astaghfirullah) tout au long de la nuit.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;aumône quotidienne :</strong> donner une
                      aumône chaque nuit des dix dernières nuits garantit
                      qu&apos;une partie de cette aumône coïncidera avec Laylat
                      al-Qadr, multipliant ainsi sa récompense par plus de mille
                      mois.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;itikaf :</strong> pour ceux qui le peuvent,
                      la retraite spirituelle dans la mosquée durant les dix
                      dernières nuits est la sunna la plus complète. Elle permet
                      de se consacrer entièrement à l&apos;adoration, loin des
                      distractions du quotidien.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il est essentiel de rappeler que la qualité de l&apos;adoration
                  prime sur la quantité. Une courte prière accomplie avec
                  présence du cœur (khushu&apos;) vaut mieux que de longues
                  heures d&apos;adoration machinale. Le croyant doit viser la
                  sincérité (ikhlas) dans chaque acte, en se rappelant que
                  l&apos;objectif ultime n&apos;est pas simplement
                  d&apos;accumuler des récompenses, mais de se rapprocher
                  véritablement d&apos;Allah et d&apos;obtenir Son agrément.
                  La <Link href="/doua-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua durant le Ramadan</Link> est
                  un pilier de cette démarche spirituelle, et les{" "}
                  <Link href="/doua-10-derniers-jours-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas des 10 derniers jours du Ramadan</Link>{" "}
                  méritent une attention toute particulière.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour enrichir vos nuits d&apos;adoration, pensez également à
                  réciter les{" "}
                  <Link href="/doua-tarawih-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas de tarawih</Link>{" "}
                  entre les unités de prière, et à consulter notre guide complet
                  des{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas en islam</Link>{" "}
                  pour varier vos invocations et approfondir votre relation avec
                  Allah tout au long de l&apos;année.
                </p>
              </section>

              <AffiliateForm title="Apprenez l&apos;arabe pour comprendre vos douas" description="Maîtrisez la langue du Coran et comprenez enfin le sens profond de chaque invocation que vous récitez au quotidien." preselect="arabe" />

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
