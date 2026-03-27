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
    "Doua après un cauchemar en islam : invocations et gestes prophétiques",
  description:
    "Découvrez la doua après un cauchemar en islam : les 3 types de rêves, les gestes prophétiques (cracher à gauche, changer de côté, prier), invocations en arabe avec phonétique et traduction, sourate al-Kursi et douas avant de dormir pour se protéger.",
  openGraph: {
    title:
      "Doua après un cauchemar en islam : invocations et gestes prophétiques",
    description:
      "Les invocations authentiques après un cauchemar en islam : gestes prophétiques, douas en arabe, phonétique, traduction et protection avant le sommeil.",
    url: "https://www.islamreligion.fr/doua-cauchemar-islam",
    images: [
      {
        url: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-cauchemar-islam",
  },
};

const tocItems = [
  { id: "trois-types-reves", label: "Les trois types de rêves en islam" },
  { id: "gestes-prophetiques", label: "Que faire après un cauchemar" },
  { id: "doua-refuge-shaytan", label: "A\u2019udhu billahi min ash-shaytanir-rajim" },
  { id: "douas-cauchemar", label: "Douas après un cauchemar (arabe et phonétique)" },
  { id: "doua-avant-dormir", label: "Doua avant de dormir pour se protéger" },
  { id: "sourate-al-kursi", label: "Sourate al-Kursi : protection nocturne" },
  { id: "conseils-sommeil", label: "Conseils prophétiques pour un sommeil serein" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua réciter après un cauchemar en islam ?",
    answer:
      "Après un cauchemar, le Prophète (paix et salut sur lui) a enseigné de réciter « A&apos;udhu billahi min ash-shaytanir-rajim » (Je cherche refuge auprès d&apos;Allah contre Satan le maudit) trois fois, de cracher légèrement à gauche trois fois, de changer de côté et de ne raconter le cauchemar à personne. On peut également réciter Ayat al-Kursi et les trois dernières sourates du Coran (al-Ikhlas, al-Falaq, an-Nas) pour se protéger.",
  },
  {
    question: "Quels sont les 3 types de rêves en islam ?",
    answer:
      "Le Prophète (paix et salut sur lui) a enseigné que les rêves sont de trois types : la vision véridique (ru&apos;ya sadiqah) qui vient d&apos;Allah, le rêve provenant de Shaytan qui cherche à attrister le croyant (cauchemar), et le rêve issu des pensées et préoccupations personnelles (hadith an-nafs). Seule la vision véridique mérite d&apos;être interprétée et partagée.",
  },
  {
    question: "Faut-il raconter un cauchemar en islam ?",
    answer:
      "Non, le Prophète (paix et salut sur lui) a formellement déconseillé de raconter un cauchemar à quiconque. Dans un hadith rapporté par Muslim, il a dit : « Le bon rêve vient d&apos;Allah et le mauvais rêve vient de Shaytan. Si l&apos;un de vous voit ce qu&apos;il déteste, qu&apos;il crache à sa gauche et cherche refuge auprès d&apos;Allah, et cela ne lui nuira pas. » Raconter le cauchemar peut lui donner une emprise psychologique.",
  },
  {
    question: "Sourate al-Kursi protège-t-elle contre les cauchemars ?",
    answer:
      "Oui, la récitation de sourate al-Kursi (Coran 2:255) avant de dormir est une protection puissante. Le Prophète (paix et salut sur lui) a enseigné que celui qui récite Ayat al-Kursi au moment de se coucher bénéficie d&apos;un protecteur d&apos;Allah toute la nuit, et Shaytan ne peut l&apos;approcher jusqu&apos;au matin (al-Bukhari).",
  },
  {
    question: "Pourquoi fait-on des cauchemars en islam ?",
    answer:
      "En islam, les cauchemars proviennent de Shaytan qui cherche à effrayer et attrister le croyant pendant son sommeil. Ils peuvent aussi être liés à un manque d&apos;adhkar (invocations) avant de dormir, au fait de dormir en état d&apos;impureté rituelle, ou à des préoccupations et angoisses. Les invocations prophétiques avant le coucher constituent la meilleure prévention.",
  },
  {
    question: "Quelle doua réciter avant de dormir pour éviter les cauchemars ?",
    answer:
      "Plusieurs invocations prophétiques protègent contre les cauchemars : Ayat al-Kursi, les trois dernières sourates du Coran (soufflées dans les mains et passées sur le corps), la doua « Bismika Allahumma amutu wa ahya » et « Allahumma qini &apos;adhabaka yawma tab&apos;athu &apos;ibadak ». L&apos;ensemble de ces adhkar forme un bouclier spirituel contre les rêves de Shaytan.",
  },
  {
    question: "Doit-on faire ses ablutions avant de dormir en islam ?",
    answer:
      "Le Prophète (paix et salut sur lui) recommandait de dormir en état de pureté rituelle (wudu). Al-Bara&apos; ibn &apos;Azib rapporte que le Prophète lui a dit : « Lorsque tu vas te coucher, fais tes ablutions comme pour la prière, puis allonge-toi sur ton côté droit. » (al-Bukhari et Muslim). Les ablutions avant le sommeil sont une cause de protection et de sérénité nocturne.",
  },
  {
    question: "Peut-on faire une prière après un cauchemar ?",
    answer:
      "Oui, le Prophète (paix et salut sur lui) a recommandé de se lever et de prier après un cauchemar si la personne le souhaite. La prière nocturne (qiyam al-layl) est un moyen puissant de chasser l&apos;angoisse causée par un mauvais rêve et de se rapprocher d&apos;Allah. Même deux unités de prière (rak&apos;atayn) suffisent pour retrouver la sérénité.",
  },
];

export default function DouaCauchemarIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-cauchemar-islam/#article",
        headline:
          "Doua après un cauchemar en islam : invocations et gestes prophétiques",
        description:
          "Découvrez la doua après un cauchemar en islam : les 3 types de rêves, gestes prophétiques, invocations en arabe avec phonétique et traduction, sourate al-Kursi et douas de protection avant le sommeil.",
        image: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        datePublished: "2026-04-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-cauchemar-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-cauchemar-islam/#breadcrumb",
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
            name: "Doua après un cauchemar",
            item: "https://www.islamreligion.fr/doua-cauchemar-islam",
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
          title="Doua après un cauchemar en islam : invocations et gestes prophétiques"
          subtitle="Les invocations authentiques et les gestes enseignés par le Prophète (paix et salut sur lui) pour se protéger des cauchemars et retrouver un sommeil serein."
          imageSrc="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
          imageAlt="Mains en invocation doua cauchemar islam avec lumière subtile symbolisant la protection divine pendant le sommeil"
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
                <span className="text-foreground">Doua après un cauchemar</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le cauchemar provient de Shaytan et non d&apos;Allah. Le
                  Prophète (paix et salut sur lui) a enseigné des gestes
                  précis à accomplir après un mauvais rêve : cracher
                  légèrement à gauche trois fois, chercher refuge auprès
                  d&apos;Allah contre Shaytan, changer de côté et ne pas
                  raconter le cauchemar. Pour prévenir les mauvais rêves, la
                  récitation d&apos;Ayat al-Kursi et des adhkar du soir avant
                  de dormir constitue la meilleure protection.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Les trois types de rêves */}
              {/* ============================================ */}
              <section id="trois-types-reves" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les trois types de rêves en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, le sommeil est considéré comme un état proche de
                  la mort, durant lequel l&apos;âme quitte partiellement le
                  corps. C&apos;est pourquoi les rêves occupent une place
                  importante dans la tradition prophétique. Le Prophète (paix
                  et salut sur lui) a clairement distingué trois catégories
                  de rêves, chacune ayant une origine et un statut différents.
                </p>

                <HadithCard
                  arabic="الرؤيا ثلاثة: فرؤيا حق، ورؤيا يحدث بها الرجل نفسه، ورؤيا تحزين من الشيطان"
                  text="Les rêves sont de trois sortes : une vision véridique, un rêve issu des pensées de la personne, et un rêve attristant provenant de Shaytan."
                  source="Rapporté par Muslim (2263)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La première catégorie est la <strong>vision véridique</strong>{" "}
                  (ru&apos;ya sadiqah), qui provient d&apos;Allah. Le Prophète
                  (paix et salut sur lui) a enseigné que la vision véridique
                  est une des quarante-six parties de la prophétie (al-Bukhari).
                  Ces rêves peuvent contenir des indications, des
                  avertissements ou des bonnes nouvelles. Lorsqu&apos;on voit
                  un bon rêve, il convient de remercier Allah, de le partager
                  uniquement avec une personne de confiance et de ne pas s&apos;en
                  vanter.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La deuxième catégorie est le <strong>rêve issu des
                  pensées personnelles</strong> (hadith an-nafs). Il s&apos;agit
                  de rêves produits par le subconscient, reflétant les
                  préoccupations, les désirs ou les peurs de la journée. Ces
                  rêves n&apos;ont pas de signification spirituelle
                  particulière et ne méritent pas d&apos;interprétation
                  religieuse.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La troisième catégorie, qui nous intéresse ici, est le{" "}
                  <strong>cauchemar provenant de Shaytan</strong> (hulm). Son
                  objectif est d&apos;effrayer le croyant, de le rendre
                  triste, anxieux ou de perturber son sommeil. C&apos;est
                  pourquoi le Prophète (paix et salut sur lui) a prescrit des
                  gestes et des invocations spécifiques pour s&apos;en
                  protéger et neutraliser son effet. Il est essentiel de
                  comprendre que le cauchemar n&apos;a aucune valeur
                  prémonitoire et ne doit en aucun cas être interprété comme
                  un signe divin.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Vision véridique (ru&apos;ya) :</strong>{" "}
                      vient d&apos;Allah, peut être partagée avec une personne
                      de confiance et interprétée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pensées personnelles (hadith an-nafs) :</strong>{" "}
                      reflet des préoccupations quotidiennes, sans
                      signification spirituelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cauchemar (hulm) :</strong>{" "}
                      provient de Shaytan, ne doit pas être raconté ni
                      interprété. Le croyant doit appliquer les gestes
                      prophétiques pour s&apos;en protéger.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
                    alt="Mains en invocation avec lumière subtile symbolisant la protection divine contre les cauchemars en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Que faire après un cauchemar */}
              {/* ============================================ */}
              <section id="gestes-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Que faire après un cauchemar : les gestes prophétiques
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) n&apos;a pas laissé le
                  croyant démuni face aux cauchemars. Il a prescrit une série
                  de gestes concrets et d&apos;invocations à accomplir
                  immédiatement après un mauvais rêve. Ces étapes, tirées de
                  hadiths authentiques, forment un protocole complet pour
                  neutraliser l&apos;effet du cauchemar et retrouver la
                  sérénité.
                </p>

                <HadithCard
                  arabic="إذا رأى أحدكم رؤيا يكرهها فليتفل عن يساره ثلاثا وليستعذ بالله من الشيطان ثلاثا وليتحول عن جنبه الذي كان عليه"
                  text="Si l'un de vous voit un rêve qu'il déteste, qu'il crache légèrement à sa gauche trois fois, qu'il cherche refuge auprès d'Allah contre Shaytan trois fois, et qu'il change de côté."
                  source="Rapporté par Muslim (2262)"
                />

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Cracher légèrement à gauche trois fois
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il s&apos;agit d&apos;un crachat léger (tafl), sans
                        projeter de salive. Ce geste symbolique exprime le
                        rejet du cauchemar et de l&apos;influence de Shaytan.
                        On le fait trois fois du côté gauche, car la gauche
                        est associée dans la Sunna à ce qui est indésirable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Chercher refuge auprès d&apos;Allah contre Shaytan
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réciter &laquo;&nbsp;A&apos;udhu billahi min
                        ash-shaytanir-rajim&nbsp;&raquo; (Je cherche refuge
                        auprès d&apos;Allah contre Satan le maudit) trois
                        fois. Cette formule est le bouclier spirituel par
                        excellence contre toute influence satanique, que ce
                        soit pendant le sommeil ou l&apos;éveil.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Changer de côté
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Se retourner et dormir sur l&apos;autre côté. Ce
                        changement de position physique accompagne le
                        changement d&apos;état spirituel. Il symbolise le
                        fait de tourner le dos au cauchemar et de repartir
                        sur une base nouvelle et purifiée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne raconter le cauchemar à personne
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a interdit de
                        raconter les cauchemars. En parler donne de
                        l&apos;importance au rêve et peut causer de
                        l&apos;anxiété. Le silence prive Shaytan de son
                        objectif qui est de troubler le croyant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se lever pour prier (recommandé)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Dans une autre narration, le Prophète (paix et salut
                        sur lui) a recommandé de se lever et de prier si le
                        cauchemar empêche de se rendormir. La prière nocturne
                        chasse l&apos;angoisse et rapproche le serviteur de
                        son Seigneur. Même deux unités de prière suffisent
                        pour retrouver la paix intérieure.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;application rigoureuse de ces gestes prophétiques
                  garantit, avec la permission d&apos;Allah, que le cauchemar
                  ne nuira pas au croyant. Le Prophète (paix et salut sur lui)
                  a assuré : &laquo;&nbsp;Cela ne lui nuira pas&nbsp;&raquo;
                  (Muslim). Cette promesse prophétique doit rassurer tout
                  musulman qui applique cette sunna avec conviction. Pour
                  découvrir d&apos;autres{" "}
                  <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations de protection en islam</Link>,
                  consultez notre guide dédié.
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
              {/* SECTION 3 : A'udhu billahi */}
              {/* ============================================ */}
              <section id="doua-refuge-shaytan" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  A&apos;udhu billahi min ash-shaytanir-rajim : la formule de refuge
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La formule &laquo;&nbsp;A&apos;udhu billahi min
                  ash-shaytanir-rajim&nbsp;&raquo; est l&apos;invocation
                  fondamentale de protection contre Shaytan dans toutes les
                  situations de la vie. Après un cauchemar, elle prend une
                  dimension particulière car le mauvais rêve est directement
                  attribué à l&apos;influence satanique. Comprendre la
                  profondeur de cette formule renforce son efficacité
                  spirituelle.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu billahi min ash-shaytanir-rajim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge auprès d&apos;Allah contre Satan le lapidé (maudit)&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate An-Nahl (16:98) et hadiths authentiques
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le mot &laquo;&nbsp;a&apos;udhu&nbsp;&raquo; signifie
                  &laquo;&nbsp;je cherche refuge, je me réfugie&nbsp;&raquo;.
                  C&apos;est un acte de reconnaissance de sa propre faiblesse
                  face à Shaytan et de confiance absolue en la puissance
                  protectrice d&apos;Allah. Le terme
                  &laquo;&nbsp;ar-rajim&nbsp;&raquo; (le lapidé) rappelle
                  que Shaytan est une créature chassée de la miséricorde
                  divine, humiliée et vaincue. Malgré ses ruses, il ne peut
                  rien face au croyant qui se réfugie sincèrement auprès
                  d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah Lui-même a ordonné cette pratique dans le Coran en
                  disant : &laquo;&nbsp;Et si une suggestion de Shaytan te
                  provoque, cherche refuge auprès d&apos;Allah. C&apos;est Lui
                  l&apos;Audient, l&apos;Omniscient&nbsp;&raquo; (Coran 41:36).
                  Cette injonction divine montre que la demande de refuge
                  n&apos;est pas un simple geste symbolique mais un acte
                  d&apos;adoration puissant qui active la protection divine.
                  Après un cauchemar, cette formule coupe le lien entre
                  Shaytan et le dormeur, et neutralise tout effet négatif du
                  mauvais rêve.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter cette formule trois fois
                  après le cauchemar, comme indiqué dans le hadith de Muslim.
                  On peut y ajouter la formule complète
                  &laquo;&nbsp;A&apos;udhu billahi min ash-shaytanir-rajim, min
                  hamzihi wa nafkhihi wa nafthihi&nbsp;&raquo; (Je cherche
                  refuge auprès d&apos;Allah contre Satan le maudit, contre
                  son souffle, son orgueil et sa poésie maléfique), rapportée
                  par Abu Dawud. Cette version étendue offre une protection
                  encore plus complète.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas après un cauchemar */}
              {/* ============================================ */}
              <section id="douas-cauchemar" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas à réciter après un cauchemar
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus de la formule de refuge (isti&apos;adha), le Prophète
                  (paix et salut sur lui) et le Coran nous enseignent
                  plusieurs invocations spécifiques à réciter après un mauvais
                  rêve ou pour se protéger de l&apos;influence de Shaytan
                  pendant la nuit. Voici les douas authentiques en arabe avec
                  leur phonétique et leur traduction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua de refuge contre le mal du rêve
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation combine la demande de refuge auprès
                  d&apos;Allah contre le mal de ce que l&apos;on a vu. Elle
                  est particulièrement adaptée après un cauchemar perturbant.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge dans les paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2708)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua avant de se rendormir
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Après avoir accompli les gestes prophétiques, cette
                  invocation est récitée pour confier son âme à Allah avant
                  de se rendormir. Elle rappelle que le sommeil est une
                  &laquo;&nbsp;petite mort&nbsp;&raquo; et que le réveil est
                  une résurrection quotidienne.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismika Allahumma amutu wa ahya
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;En Ton nom, Seigneur, je meurs et je vis&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6324)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua de protection globale avant le sommeil
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation complète demande à Allah une protection
                  contre Son châtiment au Jour de la Résurrection. Elle
                  est particulièrement recommandée au moment du coucher
                  et peut être récitée après un cauchemar pour renforcer
                  la protection spirituelle.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma qini &apos;adhabaka yawma tab&apos;athu &apos;ibadak
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, protège-moi de Ton châtiment le jour où Tu ressusciteras Tes serviteurs&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5045), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces invocations authentiques forment un arsenal spirituel
                  complet contre les cauchemars. Leur récitation régulière,
                  avec présence du coeur et compréhension du sens, renforce
                  la protection du croyant pendant son sommeil. Pour
                  approfondir les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les versets de protection contre les cauchemars"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua avant de dormir */}
              {/* ============================================ */}
              <section id="doua-avant-dormir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua avant de dormir pour se protéger des cauchemars
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La meilleure protection contre les cauchemars réside dans
                  les invocations récitées <em>avant</em> le sommeil. Le
                  Prophète (paix et salut sur lui) ne s&apos;endormait jamais
                  sans accomplir un ensemble d&apos;adhkar qui formaient un
                  bouclier spirituel pour toute la nuit. Adopter cette
                  routine prophétique est le moyen le plus efficace de
                  prévenir les mauvais rêves.
                </p>

                <HadithCard
                  arabic="كان النبي صلى الله عليه وسلم إذا أوى إلى فراشه كل ليلة جمع كفيه ثم نفث فيهما فقرأ فيهما: قل هو الله أحد وقل أعوذ برب الفلق وقل أعوذ برب الناس ثم يمسح بهما ما استطاع من جسده"
                  text="Chaque nuit, lorsque le Prophète se mettait au lit, il joignait ses paumes, soufflait dedans, récitait sourate al-Ikhlas, al-Falaq et an-Nas, puis passait ses mains sur tout son corps autant qu'il le pouvait."
                  source="Rapporté par al-Bukhari (5017)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette sunna est d&apos;une grande beauté et d&apos;une
                  simplicité remarquable. Le Prophète (paix et salut sur lui)
                  répétait ce geste trois fois chaque soir. Les trois
                  dernières sourates du Coran (al-Mu&apos;awwidhat) sont
                  appelées les &laquo;&nbsp;protectrices&nbsp;&raquo; car
                  elles demandent spécifiquement refuge à Allah contre tout
                  mal extérieur et intérieur, visible et invisible.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En complément, le Prophète (paix et salut sur lui) faisait
                  ses ablutions (wudu) avant de se coucher et s&apos;allongeait
                  sur le côté droit. Cette position est la sunna pour le
                  sommeil et contribue à un repos plus serein. Il récitait
                  également d&apos;autres invocations comme la doua de la
                  remise de l&apos;âme à Allah. Pour découvrir l&apos;ensemble
                  des{" "}
                  <Link href="/doua-avant-dormir-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas avant de dormir en islam</Link>,
                  consultez notre article détaillé.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismika Rabbi wada&apos;tu janbi wa bika arfa&apos;uhu, fa in amsakta nafsi farhamha, wa in arsaltaha fahfadhha bima tahfadhu bihi &apos;ibadakas-salihin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;En Ton nom, Seigneur, j&apos;ai posé mon flanc et c&apos;est par Toi que je le relèverai. Si Tu retiens mon âme, fais-lui miséricorde. Et si Tu la libères, protège-la comme Tu protèges Tes serviteurs pieux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6320) et Muslim (2714)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les personnes qui souffrent régulièrement de cauchemars ou
                  de troubles du sommeil trouveront un bénéfice immense dans
                  l&apos;adoption quotidienne de ces adhkar. La constance est
                  la clé : le Prophète (paix et salut sur lui) pratiquait ces
                  invocations chaque soir sans exception. Pour ceux qui
                  rencontrent des difficultés d&apos;endormissement,
                  consultez également notre article sur la{" "}
                  <Link href="/doua-insomnie-sommeil-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua contre l&apos;insomnie en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Sourate al-Kursi */}
              {/* ============================================ */}
              <section id="sourate-al-kursi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Sourate al-Kursi : la protection nocturne par excellence
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi toutes les invocations de protection avant le
                  sommeil, Ayat al-Kursi (le verset du Trône, Coran 2:255)
                  occupe une place à part. Le Prophète (paix et salut sur
                  lui) a spécifiquement mentionné sa récitation au coucher
                  comme une garantie de protection divine pendant toute la
                  nuit, empêchant Shaytan de s&apos;approcher du dormeur.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta&apos;khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhalladhi yashfa&apos;u &apos;indahu illa bi idhnih, ya&apos;lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bi shay&apos;in min &apos;ilmihi illa bima sha&apos;a, wasi&apos;a kursiyyuhus-samawati wal-ard, wa la ya&apos;uduhu hifdhuhuma, wa Huwal-&apos;Aliyyul-&apos;Adhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. A Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et de Sa science, ils n&apos;embrassent que ce qu&apos;Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqarah (2:255)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le hadith concernant la protection d&apos;Ayat al-Kursi
                  pendant le sommeil est rapporté dans un récit célèbre
                  impliquant Abu Hurayra (qu&apos;Allah l&apos;agrée). Un
                  djinn, venu voler la nourriture de la zakat, lui enseigna
                  malgré lui que celui qui récite Ayat al-Kursi au moment de
                  se coucher bénéficiera d&apos;un gardien d&apos;Allah toute
                  la nuit, et que Shaytan ne pourra pas l&apos;approcher
                  jusqu&apos;au matin. Le Prophète (paix et salut sur lui)
                  confirma cette information en disant :
                  &laquo;&nbsp;Il t&apos;a dit vrai bien qu&apos;il soit un
                  grand menteur&nbsp;&raquo; (al-Bukhari).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est considéré comme le plus grand verset du Coran,
                  comme l&apos;a confirmé le Prophète (paix et salut sur lui)
                  à Ubayy ibn Ka&apos;b (Muslim). Sa récitation avant le
                  sommeil est donc une priorité absolue pour quiconque
                  souhaite se prémunir contre les cauchemars et l&apos;influence
                  de Shaytan pendant la nuit. Les savants recommandent de le
                  mémoriser en priorité et de le réciter avec concentration et
                  compréhension pour en tirer le maximum de bénéfice
                  spirituel.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pour un sommeil serein */}
              {/* ============================================ */}
              <section id="conseils-sommeil" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils prophétiques pour un sommeil serein
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des invocations spécifiques, le Prophète (paix et
                  salut sur lui) a enseigné un ensemble de bonnes pratiques
                  qui favorisent un sommeil paisible et protégé. Ces conseils
                  allient la dimension spirituelle à des habitudes concrètes
                  qui préviennent efficacement les cauchemars.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Dormir en état de pureté
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Faire ses ablutions (wudu) avant de se coucher est une
                      sunna fortement recommandée. Le Prophète (paix et salut
                      sur lui) a dit à al-Bara&apos; ibn &apos;Azib :
                      &laquo;&nbsp;Lorsque tu vas te coucher, fais tes
                      ablutions comme pour la prière&nbsp;&raquo; (al-Bukhari
                      et Muslim). La pureté rituelle est une cause de
                      protection pendant le sommeil.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Dormir sur le côté droit
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) recommandait de
                      s&apos;allonger sur le côté droit et de placer la main
                      droite sous la joue. Cette position est la sunna du
                      sommeil et favorise un repos plus paisible.
                      S&apos;endormir sur le ventre est déconseillé car le
                      Prophète l&apos;a qualifiée de position détestée par
                      Allah (Abu Dawud).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Épousseter le lit trois fois
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a enseigné de
                      secouer son lit avec le pan de son vêtement (izaar)
                      trois fois avant de se coucher, car on ne sait pas ce
                      qui a pu s&apos;y installer en son absence (al-Bukhari
                      et Muslim). Ce geste simple fait partie de la routine
                      prophétique du coucher.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Éteindre les lumières et couvrir les récipients
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a recommandé de
                      fermer les portes, de couvrir les récipients et
                      d&apos;éteindre les lampes avant de dormir (al-Bukhari).
                      Ces habitudes contribuent à créer un environnement de
                      sommeil serein et protégé conformément à la Sunna.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;adoption de l&apos;ensemble de ces pratiques
                  prophétiques crée un environnement spirituel et physique
                  propice à un sommeil paisible et exempt de cauchemars.
                  La clé réside dans la régularité : faire de ces gestes et
                  invocations une habitude quotidienne transforme la nuit en
                  un moment de protection et de rapprochement avec Allah.
                  Pour approfondir votre pratique des invocations
                  quotidiennes, découvrez notre guide complet sur les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas en islam</Link>.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Réciter les adhkar chaque soir :</strong>{" "}
                      Ayat al-Kursi, les trois dernières sourates, et les
                      douas prophétiques du coucher forment un bouclier
                      complet.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Éviter les péchés avant le sommeil :</strong>{" "}
                      regarder du contenu illicite, médire ou commettre des
                      péchés avant de dormir affaiblit la protection
                      spirituelle et ouvre la porte aux cauchemars.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se rappeler Allah au coucher :</strong>{" "}
                      le dhikr et la réflexion spirituelle avant le sommeil
                      ancrent le coeur dans le souvenir d&apos;Allah et
                      favorisent les visions véridiques plutôt que les
                      cauchemars.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Consulter si les cauchemars persistent :</strong>{" "}
                      des cauchemars récurrents peuvent indiquer un besoin
                      de{" "}
                      <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">roqya (protection spirituelle)</Link>{" "}
                      ou une consultation médicale. L&apos;islam encourage de
                      prendre les moyens à la fois spirituels et matériels.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua avant de dormir en islam"
                  description="Découvrez toutes les invocations prophétiques du coucher pour une nuit protégée et un sommeil serein."
                  href="/doua-avant-dormir-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter les douas avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
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
                    href="/doua-avant-dormir-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua avant de dormir
                  </Link>
                  <Link
                    href="/doua-insomnie-sommeil-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre l&apos;insomnie
                  </Link>
                  <Link
                    href="/doua-protection-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de protection
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
