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
    "Doua du Tahajjud en islam : invocations de la priere de nuit",
  description:
    "Decouvrez les douas du tahajjud en islam : invocations authentiques en arabe avec phonetique et traduction, hadith d'Ibn Abbas (Bukhari), merites de la priere de nuit, dernier tiers de la nuit et moment d'exaucement.",
  openGraph: {
    title:
      "Doua du Tahajjud en islam : invocations de la priere de nuit",
    description:
      "Les invocations authentiques du tahajjud en islam : textes en arabe, phonetique, traduction et hadiths sur la priere de nuit volontaire.",
    url: "https://www.islamreligion.fr/doua-tahajjud-islam",
    images: [
      {
        url: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-tahajjud-islam",
  },
};

const tocItems = [
  { id: "definition-tahajjud", label: "Qu'est-ce que le tahajjud en islam" },
  { id: "doua-ouverture-tahajjud", label: "Doua d'ouverture du tahajjud" },
  { id: "merites-priere-nuit", label: "Merites de la priere de nuit" },
  { id: "dernier-tiers-nuit", label: "Le dernier tiers de la nuit" },
  { id: "douas-pendant-tahajjud", label: "Douas pendant le tahajjud" },
  { id: "comment-prier-tahajjud", label: "Comment prier le tahajjud" },
  { id: "conseils-pratiques", label: "Conseils pratiques pour se lever la nuit" },
  { id: "faq", label: "Questions frequentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua d'ouverture du tahajjud ?",
    answer:
      "La doua d&apos;ouverture du tahajjud la plus connue est celle rapportee par Ibn Abbas dans Sahih al-Bukhari : « Allahumma lakal-hamd, Anta nurus-samawati wal-ard wa man fihinna... » (Seigneur, a Toi la louange, Tu es la Lumiere des cieux et de la terre...). Le Prophete (paix et salut sur lui) recitait cette invocation lorsqu&apos;il se levait pour la priere de nuit.",
  },
  {
    question: "Quel est le meilleur moment pour prier le tahajjud ?",
    answer:
      "Le meilleur moment pour prier le tahajjud est le dernier tiers de la nuit, c&apos;est-a-dire le dernier tiers entre la priere d&apos;al-Isha et l&apos;aube (al-Fajr). C&apos;est a ce moment qu&apos;Allah descend au ciel le plus bas et dit : « Y a-t-il quelqu&apos;un qui M&apos;invoque pour que Je lui reponde ? » selon le hadith rapporte par al-Bukhari et Muslim.",
  },
  {
    question: "Combien de rak'at faut-il prier pour le tahajjud ?",
    answer:
      "Le tahajjud se prie deux rak&apos;at par deux rak&apos;at (unites de priere par paires). Il n&apos;y a pas de nombre fixe obligatoire, mais le Prophete (paix et salut sur lui) priait generalement 11 rak&apos;at au total (8 rak&apos;at de tahajjud + 3 de witr). On peut prier 2, 4, 6, 8 rak&apos;at ou plus, selon sa capacite. L&apos;essentiel est de conclure par le witr.",
  },
  {
    question: "Le tahajjud est-il obligatoire en islam ?",
    answer:
      "Non, le tahajjud est une priere surrerogatoire (nafilah), c&apos;est-a-dire volontaire et recommandee, mais pas obligatoire. Cependant, elle est consideree comme la meilleure priere apres les prieres obligatoires. Le Prophete (paix et salut sur lui) ne l&apos;a jamais abandonnee, meme en voyage. C&apos;est une priere tres meritoire qui rapproche le serviteur d&apos;Allah.",
  },
  {
    question: "Peut-on faire le tahajjud juste apres Isha ?",
    answer:
      "Oui, il est permis de prier le tahajjud apres la priere d&apos;al-Isha, meme sans dormir au prealable, bien que l&apos;ideal soit de dormir une partie de la nuit puis de se reveiller pour prier. Selon les savants, le tahajjud designe toute priere de nuit volontaire accomplie apres al-Isha. Toutefois, la recompense est plus grande lorsqu&apos;on se leve apres avoir dormi.",
  },
  {
    question: "Quelle sourate reciter pendant le tahajjud ?",
    answer:
      "Il n&apos;y a pas de sourate specifique obligatoire pour le tahajjud. Le Prophete (paix et salut sur lui) allongeait sa recitation et lisait parfois des passages entiers du Coran. On peut reciter n&apos;importe quelle sourate, mais les sourates longues comme Al-Baqara, Al-Imran ou les dernieres parties du Coran sont recommandees. L&apos;essentiel est de reciter avec concentration (khushu&apos;).",
  },
  {
    question: "Le tahajjud et le qiyam al-layl sont-ils la meme chose ?",
    answer:
      "Le qiyam al-layl (priere de la nuit) est un terme general qui englobe toute priere accomplie entre al-Isha et al-Fajr, y compris les tarawih du Ramadan. Le tahajjud designe plus specifiquement la priere de nuit accomplie apres un sommeil, meme bref. En pratique, les deux termes sont souvent utilises de maniere interchangeable par les savants.",
  },
  {
    question: "Les douas sont-elles plus exaucees pendant le tahajjud ?",
    answer:
      "Oui, les douas faites pendant le dernier tiers de la nuit sont particulierement exaucees. Le Prophete (paix et salut sur lui) a dit qu&apos;Allah descend au ciel le plus bas chaque nuit et demande : « Qui M&apos;invoque pour que Je lui reponde ? Qui Me demande pour que Je lui donne ? » (al-Bukhari et Muslim). C&apos;est l&apos;un des moments les plus propices pour l&apos;invocation.",
  },
];

export default function DouaTahajjudIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-tahajjud-islam/#article",
        headline:
          "Doua du Tahajjud en islam : invocations de la priere de nuit",
        description:
          "Decouvrez les douas du tahajjud en islam : invocations authentiques en arabe, hadiths sur la priere de nuit, dernier tiers de la nuit et moment d'exaucement.",
        image: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        datePublished: "2026-04-19",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-tahajjud-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-tahajjud-islam/#breadcrumb",
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
            name: "Doua du Tahajjud",
            item: "https://www.islamreligion.fr/doua-tahajjud-islam",
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
          title="Doua du Tahajjud en islam : invocations de la priere de nuit"
          subtitle="Les invocations authentiques de la priere nocturne volontaire, tirees du Coran et de la Sunna. Textes en arabe, phonetique et traduction francaise."
          imageSrc="/images/doua-mains-rayons-motifs-islamiques.jpg"
          imageAlt="Mains levees en invocation doua du tahajjud avec rayons de lumiere et motifs islamiques"
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
                <span className="text-foreground">Doua du Tahajjud</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En resume
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le tahajjud est la priere de nuit volontaire, consideree comme
                  la meilleure priere apres les prieres obligatoires. Le Prophete
                  (paix et salut sur lui) ne l&apos;a jamais delaissee et y
                  recitait des invocations specifiques, notamment la celebre doua
                  d&apos;ouverture rapportee par Ibn Abbas : &laquo;&nbsp;Allahumma
                  lakal-hamd, Anta nurus-samawati wal-ard&nbsp;&raquo;. Le dernier
                  tiers de la nuit est un moment privilegie ou Allah repond aux
                  invocations de Ses serviteurs.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Definition du tahajjud */}
              {/* ============================================ */}
              <section id="definition-tahajjud" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce que le tahajjud en islam ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>tahajjud</strong> (تهجد) designe en islam la priere
                  de nuit volontaire (nafilah) que le musulman accomplit apres
                  s&apos;etre endormi puis reveille durant la nuit. Ce terme vient
                  de la racine arabe &laquo;&nbsp;hajada&nbsp;&raquo; qui signifie
                  &laquo;&nbsp;veiller la nuit&nbsp;&raquo; ou &laquo;&nbsp;se
                  priver de sommeil pour prier&nbsp;&raquo;. C&apos;est l&apos;une
                  des pratiques les plus nobles de l&apos;islam, mentionnee dans le
                  Coran et abondamment pratiquee par le Prophete Muhammad (paix et
                  salut sur lui).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah a ordonne a Son Prophete de consacrer une partie de la nuit
                  a cette priere dans un verset explicite de la sourate Al-Isra :
                  &laquo;&nbsp;Et de la nuit, consacre une partie a la priere
                  surrerogatoire : c&apos;est pour toi une oeuvre surrerogatoire.
                  Il se peut que ton Seigneur te ressuscite en une station
                  louee&nbsp;&raquo; (Al-Isra, 17:79). Ce verset constitue le
                  fondement coranique de la priere de nuit et montre son lien
                  direct avec l&apos;obtention d&apos;une station elevee aupres
                  d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de l&apos;islam distinguent le tahajjud du qiyam
                  al-layl de maniere subtile. Le qiyam al-layl est un terme
                  general qui designe toute priere accomplie entre la priere
                  d&apos;al-Isha et l&apos;aube, tandis que le tahajjud implique
                  specifiquement de se reveiller apres avoir dormi. En pratique,
                  les deux termes sont souvent utilises de maniere
                  interchangeable. Ce qui distingue veritablement le tahajjud,
                  c&apos;est l&apos;effort de quitter son lit et le confort du
                  sommeil pour se tenir debout devant Allah dans le silence et
                  l&apos;obscurite de la nuit.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Statut juridique :</strong>{" "}
                      le tahajjud est une priere surrerogatoire fortement
                      recommandee (sunnah mu&apos;akkadah), pas une obligation.
                      Cependant, le Prophete (paix et salut sur lui) ne l&apos;a
                      jamais abandonnee, meme en voyage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Meilleure priere apres les obligations :</strong>{" "}
                      le Prophete (paix et salut sur lui) a affirme que la
                      meilleure priere apres les cinq prieres obligatoires est
                      la priere au milieu de la nuit (Muslim, 1163).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pratique des pieux predecesseurs :</strong>{" "}
                      les compagnons du Prophete et les generations suivantes
                      consideraient le tahajjud comme un signe distinctif du
                      croyant sincere. Allah les decrit dans le Coran :
                      &laquo;&nbsp;Ils s&apos;arrachaient de leurs lits pour
                      invoquer leur Seigneur&nbsp;&raquo; (As-Sajda, 32:16).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
                    alt="Musulman en invocation doua tahajjud priere de nuit en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua d'ouverture du tahajjud */}
              {/* ============================================ */}
              <section id="doua-ouverture-tahajjud" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua d&apos;ouverture du tahajjud rapportee par Ibn Abbas
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua d&apos;ouverture du tahajjud la plus celebre est celle
                  rapportee par Abdullah ibn Abbas (qu&apos;Allah l&apos;agree)
                  dans Sahih al-Bukhari. Ibn Abbas, qui etait encore jeune,
                  passa une nuit chez sa tante Maymuna, epouse du Prophete (paix
                  et salut sur lui). Il observa le Prophete se lever pour la
                  priere de nuit et entendit cette magnifique invocation
                  d&apos;ouverture. Ce hadith est l&apos;une des sources les
                  plus precieuses sur la maniere dont le Prophete priait le
                  tahajjud.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ وَلَكَ الْحَمْدُ أَنْتَ الْحَقُّ وَوَعْدُكَ حَقٌّ وَلِقَاؤُكَ حَقٌّ وَالْجَنَّةُ حَقٌّ وَالنَّارُ حَقٌّ وَالسَّاعَةُ حَقٌّ
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Allahumma lakal-hamd, Anta
                    nurus-samawati wal-ardi wa man fihinna, wa lakal-hamd Anta
                    qayyimus-samawati wal-ardi wa man fihinna, wa lakal-hamd
                    Anta-l-Haqqu, wa wa&apos;duka haqqun, wa liqa&apos;uka
                    haqqun, wal-jannatu haqqun, wan-naru haqqun, was-sa&apos;atu
                    haqqun.
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;Seigneur, a Toi la louange. Tu es la Lumiere des
                    cieux et de la terre et de ceux qui s&apos;y trouvent. A Toi
                    la louange, Tu es le Soutien des cieux et de la terre et de
                    ceux qui s&apos;y trouvent. A Toi la louange, Tu es la Verite,
                    Ta promesse est verite, Ta rencontre est verite, le Paradis est
                    verite, l&apos;Enfer est verite, et l&apos;Heure est
                    verite.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par al-Bukhari (1120) et Muslim (769)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est d&apos;une richesse spirituelle
                  exceptionnelle. Elle debute par la louange d&apos;Allah en
                  tant que Lumiere des cieux et de la terre, puis affirme Sa
                  qualite de Soutien de toute la creation. Ensuite, elle
                  enumere les verites fondamentales de la foi : la verite
                  d&apos;Allah Lui-meme, de Sa promesse, de la rencontre avec
                  Lui, du Paradis, de l&apos;Enfer et du Jour du Jugement.
                  C&apos;est un rappel puissant des piliers de la foi que le
                  croyant reaffirme dans le silence de la nuit.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le hadith d&apos;Ibn Abbas mentionne egalement la suite de
                  cette invocation, ou le Prophete (paix et salut sur lui) disait :
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ لَكَ أَسْلَمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَإِلَيْكَ أَنَبْتُ وَبِكَ خَاصَمْتُ وَإِلَيْكَ حَاكَمْتُ فَاغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ لَا إِلَهَ إِلَّا أَنْتَ
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Allahumma laka aslamtu, wa bika
                    amantu, wa &apos;alayka tawakkaltu, wa ilayka anabtu, wa bika
                    khasamtu, wa ilayka hakamtu. Faghfir li ma qaddamtu wa ma
                    akhkhartu, wa ma asrartu wa ma a&apos;lantu. Antal-muqaddimu
                    wa Antal-mu&apos;akhkhiru, la ilaha illa Anta.
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;Seigneur, c&apos;est a Toi que je me suis soumis,
                    en Toi que j&apos;ai cru, en Toi que j&apos;ai place ma
                    confiance, vers Toi que je me suis repenti, par Toi que
                    j&apos;ai argumente et a Toi que j&apos;ai soumis mon
                    jugement. Pardonne-moi ce que j&apos;ai commis et ce que
                    j&apos;ai retarde, ce que j&apos;ai cache et ce que j&apos;ai
                    rendu public. Tu es Celui qui avance et Celui qui retarde. Il
                    n&apos;y a de divinite que Toi.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par al-Bukhari (1120) et Muslim (769)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La deuxieme partie de cette doua illustre la soumission totale
                  du serviteur a Allah. Le Prophete (paix et salut sur lui)
                  exprimait son islam (soumission), son iman (foi), son tawakkul
                  (confiance), son inaba (retour a Allah), puis demandait le
                  pardon pour tous ses peches passes et futurs, caches et
                  apparents. Cette invocation complete est un modele parfait de
                  ce que le croyant devrait reciter lorsqu&apos;il se leve pour
                  le tahajjud.
                </p>

                <HadithCard
                  arabic="كان النبي صلى الله عليه وسلم إذا قام من الليل يتهجد قال: اللهم لك الحمد أنت نور السماوات والأرض"
                  text="Lorsque le Prophete (paix et salut sur lui) se levait la nuit pour le tahajjud, il disait : Seigneur, a Toi la louange, Tu es la Lumiere des cieux et de la terre..."
                  source="Rapporte par al-Bukhari (1120)"
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophetiques dans leur langue originale. Decouvrez des formations adaptees aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandees"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Merites de la priere de nuit */}
              {/* ============================================ */}
              <section id="merites-priere-nuit" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les merites immenses de la priere de nuit (tahajjud)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran et la Sunna regorgent de textes qui soulignent les
                  merites exceptionnels de la priere de nuit. Le tahajjud
                  n&apos;est pas une simple priere surrerogatoire parmi
                  d&apos;autres : c&apos;est l&apos;acte d&apos;adoration que le
                  Prophete (paix et salut sur lui) a place au sommet des oeuvres
                  volontaires. Comprendre ses merites motive le croyant a
                  surmonter la difficulte de quitter son lit pour se tenir devant
                  Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah decrit les priants de la nuit dans le Coran avec des
                  termes elogieux. Dans la sourate Adh-Dhariyat, Il dit :
                  &laquo;&nbsp;Ils dormaient peu la nuit, et aux dernieres
                  heures de la nuit, ils imploraient le pardon
                  d&apos;Allah&nbsp;&raquo; (51:17-18). Et dans la sourate
                  As-Sajda : &laquo;&nbsp;Ils s&apos;arrachaient de leurs lits
                  pour invoquer leur Seigneur par crainte et par
                  esperance&nbsp;&raquo; (32:16). Ces versets montrent que le
                  tahajjud est la marque distinctive des serviteurs les plus
                  proches d&apos;Allah.
                </p>

                <HadithCard
                  arabic="أفضل الصلاة بعد الفريضة صلاة الليل"
                  text="La meilleure priere apres les prieres obligatoires est la priere de la nuit."
                  source="Rapporte par Muslim (1163)"
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce hadith etablit clairement la hierarchie des prieres
                  volontaires. Parmi toutes les sunnan et nawafil, la priere de
                  nuit occupe le rang le plus eleve. Cette distinction
                  s&apos;explique par la difficulte inherente a cette pratique :
                  se lever dans l&apos;obscurite, quitter la chaleur de son lit
                  et sacrifier son sommeil pour se tenir debout devant Allah
                  requiert une sincerite et une determination que peu
                  d&apos;autres actes d&apos;adoration exigent.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Proximite avec Allah
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le tahajjud est un moment d&apos;intimite unique entre le
                      serviteur et son Seigneur. Quand le monde entier dort, le
                      croyant se tient debout devant Allah, loin des regards et
                      des distractions. Cette sincerite dans le secret de la nuit
                      est la plus pure expression de la foi.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Effacement des peches
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophete (paix et salut sur lui) a enseigne que la
                      priere de nuit efface les peches comme l&apos;eau eteint le
                      feu (at-Tirmidhi). Chaque rak&apos;ah accomplie dans le
                      silence de la nuit contribue a purifier le coeur et a
                      expier les fautes du serviteur.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Elevation des rangs au Paradis
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le tahajjud fait partie des causes qui elevent le rang du
                      croyant au Paradis. Le Prophete (paix et salut sur lui) a
                      dit : &laquo;&nbsp;Il y a au Paradis des chambres dont
                      l&apos;exterieur se voit de l&apos;interieur et
                      l&apos;interieur de l&apos;exterieur&nbsp;&raquo;, et elles
                      sont reservees a ceux qui prient la nuit (at-Tirmidhi).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Exaucement des invocations
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le dernier tiers de la nuit est un moment ou Allah repond
                      aux invocations. Combiner la priere du tahajjud avec des
                      douas sinceres multiplie les chances d&apos;etre exauce.
                      C&apos;est pourquoi les savants recommandent de faire ses
                      douas les plus importantes pendant le tahajjud.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-sourate-invocations-doua-islam.jpg"
                    alt="Coran ouvert avec sourate et invocations pour la priere de nuit tahajjud en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Le dernier tiers de la nuit */}
              {/* ============================================ */}
              <section id="dernier-tiers-nuit" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le dernier tiers de la nuit : moment supreme d&apos;exaucement
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les moments les plus sacres pour l&apos;invocation en
                  islam, le dernier tiers de la nuit occupe une place
                  incomparable. C&apos;est a ce moment precis qu&apos;Allah,
                  dans Sa misericorde infinie, descend au ciel le plus bas pour
                  repondre aux invocations de Ses serviteurs. Ce hadith
                  fondamental, rapporte dans les deux recueils authentiques,
                  constitue la motivation principale de tout priant du tahajjud.
                </p>

                <HadithCard
                  arabic="ينزل ربنا تبارك وتعالى كل ليلة إلى السماء الدنيا حين يبقى ثلث الليل الآخر يقول من يدعوني فأستجيب له من يسألني فأعطيه من يستغفرني فأغفر له"
                  text="Notre Seigneur descend chaque nuit au ciel le plus bas lorsqu'il reste le dernier tiers de la nuit, et Il dit : Qui M'invoque pour que Je lui reponde ? Qui Me demande pour que Je lui donne ? Qui implore Mon pardon pour que Je lui pardonne ?"
                  source="Rapporte par al-Bukhari (1145) et Muslim (758)"
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce hadith est l&apos;un des plus puissants de la Sunna
                  concernant les moments d&apos;exaucement. Allah Lui-meme
                  propose a Ses serviteurs de L&apos;invoquer, de Lui demander
                  et d&apos;implorer Son pardon. Trois offres divines repetees
                  chaque nuit sans exception, du debut a la fin des temps. Le
                  croyant qui se leve pour le tahajjud saisit cette occasion
                  unique de s&apos;adresser directement a Son Seigneur dans un
                  moment ou la plupart des gens dorment.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour calculer le dernier tiers de la nuit, il suffit de
                  diviser la duree entre la priere d&apos;al-Isha et l&apos;aube
                  (al-Fajr) en trois parties egales. Le dernier tiers correspond
                  approximativement aux deux dernieres heures avant l&apos;aube.
                  Par exemple, si al-Isha est a 21h et al-Fajr a 6h, la nuit
                  dure 9 heures. Le dernier tiers commence a 3h du matin.
                  C&apos;est a ce moment que le croyant devrait idealement prier
                  son tahajjud et multiplier ses invocations.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَّكَ عَسَىٰ أَن يَبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُودًا
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Wa minal-layli fatahajjad bihi
                    nafilatan laka &apos;asa an yab&apos;athaka Rabbuka maqaman
                    mahmudan.
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;Et de la nuit, consacre une partie a la priere
                    surrerogatoire : c&apos;est pour toi une oeuvre surrerogatoire.
                    Il se peut que ton Seigneur te ressuscite en une station
                    louee.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Coran, sourate Al-Isra (17:79)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le terme &laquo;&nbsp;maqaman mahmudan&nbsp;&raquo; (station
                  louee) designe, selon la majorite des exegetes, le rang
                  d&apos;intercession (shafa&apos;a) que le Prophete (paix et
                  salut sur lui) obtiendra le Jour du Jugement. Bien que ce
                  verset s&apos;adresse specifiquement au Prophete,
                  l&apos;ensemble de la communaute est encouragee a suivre son
                  exemple. La priere de nuit eleve le rang du croyant aupres
                  d&apos;Allah et lui ouvre des portes de misericorde que les
                  autres actes d&apos;adoration n&apos;ouvrent pas de la meme
                  maniere.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le moment ou Allah appelle :</strong>{" "}
                      chaque nuit, dans le dernier tiers, Allah invite Ses
                      serviteurs a L&apos;invoquer. Ne pas saisir cette
                      opportunite, c&apos;est passer a cote d&apos;un rendez-vous
                      divin quotidien.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;istighfar au petit matin :</strong>{" "}
                      Allah loue ceux qui implorent Son pardon a l&apos;aube
                      (Coran, 3:17). Le tahajjud suivi de l&apos;istighfar avant
                      al-Fajr est une combinaison spirituelle d&apos;une puissance
                      remarquable.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La tranquillite de la nuit :</strong>{" "}
                      l&apos;absence de distractions nocturnes favorise la
                      concentration (khushu&apos;) et permet une connexion plus
                      profonde avec Allah que les prieres de jour.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas pendant le tahajjud */}
              {/* ============================================ */}
              <section id="douas-pendant-tahajjud" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas authentiques a reciter pendant le tahajjud
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Outre la doua d&apos;ouverture d&apos;Ibn Abbas, le Prophete
                  (paix et salut sur lui) recitait plusieurs invocations pendant
                  et apres sa priere de nuit. Voici les douas les plus
                  authentiques que le croyant peut integrer dans son tahajjud
                  pour enrichir sa connexion spirituelle avec Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua du sujud (prosternation) pendant le tahajjud
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La prosternation est le moment ou le serviteur est le plus
                  proche de son Seigneur. Le Prophete (paix et salut sur lui)
                  allongeait considerablement ses prosternations pendant le
                  tahajjud et y multipliait les invocations. Voici l&apos;une
                  des douas qu&apos;il recitait dans le sujud :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ وَأَعُوذُ بِكَ مِنْكَ لَا أُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Allahumma inni a&apos;udhu
                    bi-ridaka min sakhatika, wa bi-mu&apos;afatika min
                    &apos;uqubatika, wa a&apos;udhu bika minka. La uhsi
                    thana&apos;an &apos;alayka, Anta kama athnayta &apos;ala
                    nafsika.
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge dans Ton agrement
                    contre Ton courroux, dans Ton pardon contre Ton chatiment, et
                    je cherche refuge aupres de Toi contre Toi. Je ne saurais
                    enumerer les louanges qui Te sont dues. Tu es tel que Tu T&apos;es
                    loue Toi-meme.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par Muslim (486)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua du qunut dans le witr apres le tahajjud
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le witr est la priere impaire qui conclut le tahajjud. Le
                  Prophete (paix et salut sur lui) y recitait parfois
                  l&apos;invocation du qunut, une doua particulierement
                  poignante dans le silence de la fin de nuit. Decouvrez
                  davantage sur cette priere dans notre article sur la{" "}
                  <Link href="/doua-witr-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du witr en islam</Link>.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ وَبَارِكْ لِي فِيمَا أَعْطَيْتَ وَقِنِي شَرَّ مَا قَضَيْتَ فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Allahumma-hdini fiman hadayta,
                    wa &apos;afini fiman &apos;afayta, wa tawallani fiman
                    tawallayta, wa barik li fima a&apos;tayta, wa qini sharra ma
                    qadayta, fa innaka taqdi wa la yuqda &apos;alayka.
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;Seigneur, guide-moi parmi ceux que Tu as guides,
                    accorde-moi le bien-etre parmi ceux a qui Tu l&apos;as accorde,
                    prends-moi en charge parmi ceux dont Tu T&apos;es charge, benis
                    pour moi ce que Tu m&apos;as donne, et protege-moi du mal de ce
                    que Tu as decrete. Car c&apos;est Toi qui decrete et nul ne
                    decrete sur Toi.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par Abu Dawud (1425) et at-Tirmidhi (464)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Istighfar et doua avant al-Fajr
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Apres avoir accompli le tahajjud et le witr, le moment qui
                  precede l&apos;aube est ideal pour multiplier l&apos;istighfar
                  (demande de pardon). Allah loue specifiquement ceux qui
                  implorent Son pardon a ce moment : &laquo;&nbsp;Et ceux qui
                  implorent le pardon avant l&apos;aube&nbsp;&raquo; (Al-Imran,
                  3:17). Decouvrez les douas specifiques de l&apos;aube dans
                  notre article sur la{" "}
                  <Link href="/doua-fajr-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du Fajr en islam</Link>.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Astaghfirullaha-lladhi la ilaha
                    illa Huwal-Hayyul-Qayyumu wa atubu ilayhi.
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;J&apos;implore le pardon d&apos;Allah, Celui en
                    dehors de qui il n&apos;y a pas de divinite, le Vivant, le
                    Subsistant par Lui-meme, et je me repens a Lui.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par Abu Dawud (1517) et at-Tirmidhi (3577)
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Comment prier le tahajjud */}
              {/* ============================================ */}
              <section id="comment-prier-tahajjud" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment prier le tahajjud etape par etape
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le tahajjud suit une methode simple enseignee par le Prophete
                  (paix et salut sur lui). Il se prie deux rak&apos;at par deux
                  rak&apos;at, avec une recitation longue et posee, et se
                  conclut par la priere du witr (nombre impair). Voici les
                  etapes detaillees pour accomplir cette priere benie.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se reveiller apres avoir dormi
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le tahajjud implique idealement de dormir une partie de
                        la nuit puis de se reveiller. Le Prophete (paix et salut
                        sur lui) dormait la premiere moitie de la nuit, priait
                        le tiers suivant, puis dormait le dernier sixieme (selon
                        le hadith de Abdullah ibn Amr, al-Bukhari). Cependant,
                        il est valide de prier a tout moment apres al-Isha.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Faire les ablutions et reciter la doua d&apos;ouverture
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Se purifier avec le wudu, puis commencer par la doua
                        d&apos;ouverture du tahajjud rapportee par Ibn Abbas
                        (voir section 2). Le Prophete (paix et salut sur lui)
                        commencait parfois par deux rak&apos;at courtes et
                        legeres pour &laquo;&nbsp;ouvrir&nbsp;&raquo; la priere
                        de nuit (Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Prier deux rak&apos;at par deux rak&apos;at
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophete (paix et salut sur lui) a dit :
                        &laquo;&nbsp;La priere de nuit se fait deux par
                        deux&nbsp;&raquo; (al-Bukhari, 990). On prie donc des
                        paires de rak&apos;at en faisant le taslim (salutation
                        finale) apres chaque paire. On allonge la recitation du
                        Coran, le ruku&apos; (inclinaison) et le sujud
                        (prosternation).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Multiplier les douas dans la prosternation
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La prosternation est le moment ou le serviteur est le plus
                        proche d&apos;Allah. Profitez-en pour faire vos douas les
                        plus personnelles et les plus intimes. Le Prophete (paix et
                        salut sur lui) a dit : &laquo;&nbsp;Le moment ou le
                        serviteur est le plus proche de son Seigneur, c&apos;est
                        lorsqu&apos;il est en prosternation. Multipliez-y donc les
                        invocations&nbsp;&raquo; (Muslim). Decouvrez les invocations
                        specifiques dans notre article sur la{" "}
                        <Link href="/doua-prosternation-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de la prosternation</Link>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Conclure par le witr
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Terminer le tahajjud par la priere du witr (1, 3, 5 ou
                        7 rak&apos;at en nombre impair). Le Prophete (paix et
                        salut sur lui) a dit : &laquo;&nbsp;Faites du witr la
                        derniere priere de votre nuit&nbsp;&raquo; (al-Bukhari
                        et Muslim). Le witr scelle la priere de nuit et peut
                        inclure l&apos;invocation du qunut.
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="صلاة الليل مثنى مثنى فإذا خشي أحدكم الصبح صلى ركعة واحدة توتر له ما قد صلى"
                  text="La priere de nuit se fait deux par deux. Si l'un d'entre vous craint l'arrivee de l'aube, qu'il prie une rak'ah qui rendra impaire (witr) ce qu'il a prie."
                  source="Rapporte par al-Bukhari (990) et Muslim (749)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour se lever au tahajjud
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Se lever au milieu de la nuit pour prier est un defi pour la
                  plupart des musulmans. Pourtant, avec une bonne methode et
                  une intention sincere, cette pratique peut devenir une
                  habitude quotidienne qui transforme la vie spirituelle du
                  croyant. Voici des conseils pratiques tires de la Sunna et de
                  l&apos;experience des savants.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Avoir une intention sincere avant de dormir :</strong>{" "}
                      le Prophete (paix et salut sur lui) a dit que celui qui a
                      l&apos;intention de se lever pour le tahajjud mais que le
                      sommeil l&apos;emporte, l&apos;intention lui sera comptee
                      comme un acte accompli (an-Nasa&apos;i et Ibn Majah).
                      L&apos;intention est la cle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dormir tot apres la priere d&apos;al-Isha :</strong>{" "}
                      le Prophete (paix et salut sur lui) detestait les
                      conversations inutiles apres al-Isha (al-Bukhari). Se
                      coucher tot facilite le reveil au dernier tiers de la nuit
                      et garantit un sommeil suffisant pour le corps.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Reciter les adhkar du coucher :</strong>{" "}
                      les invocations avant de dormir, comme Ayat al-Kursi et les
                      trois dernieres sourates du Coran, protegent le dormeur et
                      facilitent le reveil pour la priere de nuit.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Commencer progressivement :</strong>{" "}
                      les savants recommandent de ne pas s&apos;imposer un grand
                      nombre de rak&apos;at des le debut. Commencer par 2
                      rak&apos;at puis le witr suffit. Le Prophete (paix et salut
                      sur lui) a dit : &laquo;&nbsp;L&apos;oeuvre la plus aimee
                      d&apos;Allah est la plus constante, meme si elle est
                      peu&nbsp;&raquo; (al-Bukhari et Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Eviter les peches durant la journee :</strong>{" "}
                      un des predecesseurs pieux a dit : &laquo;&nbsp;Je suis
                      prive de la priere de nuit a cause d&apos;un peche que
                      j&apos;ai commis&nbsp;&raquo;. Les peches alourdissent le
                      coeur et empechent le reveil. La piete diurne facilite
                      l&apos;adoration nocturne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La Nuit du Destin (Laylat al-Qadr) :</strong>{" "}
                      le tahajjud prend une dimension extraordinaire pendant les
                      dix dernieres nuits du Ramadan, ou le croyant recherche la
                      Nuit du Destin. Decouvrez les invocations specifiques dans
                      notre article sur la{" "}
                      <Link href="/doua-nuit-destin-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de la Nuit du Destin</Link>.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le tahajjud est une porte ouverte vers la proximite d&apos;Allah
                  que chaque musulman peut franchir. Il ne s&apos;agit pas de
                  prier des heures entieres : meme deux rak&apos;at courtes
                  dans le dernier tiers de la nuit, accompagnees d&apos;une doua
                  sincere, suffisent pour beneficier de cette grace immense. Ce
                  qui compte, c&apos;est la regularite et la sincerite de
                  l&apos;intention, non la quantite.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua du Witr en islam"
                  description="Decouvrez les invocations authentiques du qunut et la maniere d'accomplir la priere du witr qui conclut le tahajjud."
                  href="/doua-witr-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre vos invocations nocturnes"
                description="Maitrisez la langue du Coran pour reciter les douas du tahajjud avec comprehension et profondeur spirituelle. Decouvrez nos formations en ligne adaptees a tous les niveaux."
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
                    href="/doua-nuit-destin-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de la Nuit du Destin
                  </Link>
                  <Link
                    href="/doua-fajr-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du Fajr
                  </Link>
                  <Link
                    href="/doua-prosternation-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de la prosternation
                  </Link>
                  <Link
                    href="/doua-witr-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du Witr
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
