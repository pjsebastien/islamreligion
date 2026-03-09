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
    "Doua pour retrouver un objet perdu en islam : invocations et conseils",
  description:
    "Découvrez la doua pour retrouver un objet perdu en islam : invocations authentiques en arabe avec phonétique et traduction, inna lillahi wa inna ilayhi raji&apos;un, salat al-hajah, tawakkul et patience face à la perte.",
  openGraph: {
    title:
      "Doua pour retrouver un objet perdu en islam : invocations et conseils",
    description:
      "Les invocations authentiques pour retrouver un objet perdu en islam : textes en arabe, phonétique, traduction et hadiths. Tawakkul, patience et douas prophétiques.",
    url: "https://www.islamreligion.fr/doua-objet-perdu-islam",
    images: [
      {
        url: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-objet-perdu-islam",
  },
};

const tocItems = [
  { id: "inna-lillahi", label: "Inna lillahi wa inna ilayhi raji&apos;un face à la perte" },
  { id: "douas-objet-perdu", label: "Douas pour retrouver un objet perdu" },
  { id: "salat-hajah", label: "Salat al-hajah : la prière du besoin" },
  { id: "tawakkul-patience", label: "Tawakkul et patience face à la perte" },
  { id: "adab-recherche", label: "Comportement islamique lors de la recherche" },
  { id: "sagesse-perte", label: "La sagesse derrière la perte d&apos;un bien" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua pour retrouver un objet perdu en islam ?",
    answer:
      "Plusieurs douas authentiques peuvent être récitées pour retrouver un objet perdu. Parmi les plus connues : « Inna lillahi wa inna ilayhi raji&apos;un, Allahumma ajirni fi musibati wa akhlif li khayran minha » (À Allah nous appartenons et à Lui nous retournons, ô Allah récompense-moi dans mon épreuve et accorde-moi quelque chose de meilleur). On peut également invoquer Allah par Ses Noms : Al-Hadi (Le Guide), Al-Wajid (Celui qui trouve tout).",
  },
  {
    question: "Faut-il dire inna lillahi wa inna ilayhi raji&apos;un quand on perd un objet ?",
    answer:
      "Oui, cette formule coranique tirée de la sourate al-Baqara (2:156) est recommandée face à toute épreuve, y compris la perte d&apos;un bien matériel. Le Prophète (paix et salut sur lui) a enseigné que celui qui la prononce avec sincérité recevra une compensation d&apos;Allah et quelque chose de meilleur en retour. La perte d&apos;un objet, même minime, est considérée comme une musiba (épreuve) en islam.",
  },
  {
    question: "Qu&apos;est-ce que la salat al-hajah et quand la prier ?",
    answer:
      "La salat al-hajah est une prière surérogatoire de deux raka&apos;at accomplie lorsqu&apos;on a un besoin particulier à présenter à Allah. Elle peut être priée à tout moment (en dehors des horaires déconseillés) pour demander l&apos;aide d&apos;Allah dans la recherche d&apos;un objet perdu. Après la prière, on invoque Allah avec humilité et sincérité en Lui exposant son besoin.",
  },
  {
    question: "Peut-on faire la doua pour retrouver un objet perdu en français ?",
    answer:
      "Oui, la doua peut être faite dans toute langue. Allah comprend toutes les langues et entend la demande de chaque serviteur. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe, car elles ont une puissance spirituelle particulière. Pour les supplications personnelles en dehors de la prière, le français est parfaitement valide.",
  },
  {
    question: "Existe-t-il un verset du Coran pour retrouver un objet perdu ?",
    answer:
      "Il n&apos;existe pas de verset spécifiquement révélé pour retrouver un objet perdu. Cependant, le verset « Inna lillahi wa inna ilayhi raji&apos;un » (Coran 2:156) est la formule la plus appropriée face à toute perte. On peut également réciter la sourate al-Fatiha et invoquer Allah par Ses Noms sublimes comme Al-Hadi (Le Guide) et Al-Alim (L&apos;Omniscient).",
  },
  {
    question: "Combien de temps faut-il invoquer Allah pour retrouver un objet perdu ?",
    answer:
      "Il n&apos;y a pas de durée fixe. Le musulman doit persévérer dans la doua tout en fournissant les efforts concrets de recherche. Le Prophète (paix et salut sur lui) a enseigné que toute doua est exaucée de trois manières : soit la demande est accordée, soit un mal équivalent est écarté, soit la récompense est gardée pour l&apos;au-delà. La patience et la persévérance sont essentielles.",
  },
  {
    question: "Que faire si on ne retrouve pas l&apos;objet malgré les douas ?",
    answer:
      "Si l&apos;objet n&apos;est pas retrouvé malgré les invocations et les efforts, le musulman doit accepter le décret divin (qadar) avec patience. Cette acceptation est elle-même un acte d&apos;adoration récompensé par Allah. Le Prophète (paix et salut sur lui) a promis que celui qui dit « inna lillahi wa inna ilayhi raji&apos;un » face à une épreuve recevra quelque chose de meilleur en retour.",
  },
  {
    question: "Est-il permis de demander à quelqu&apos;un de faire doua pour retrouver notre objet ?",
    answer:
      "Oui, il est tout à fait permis de demander à un proche ou à une personne pieuse de faire doua pour nous. Le Prophète (paix et salut sur lui) encourageait les compagnons à invoquer les uns pour les autres. Cependant, il ne faut pas négliger sa propre doua, car l&apos;invocation personnelle du serviteur pour lui-même est la plus sincère et la plus proche d&apos;être exaucée.",
  },
];

export default function DouaObjetPerduIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-objet-perdu-islam/#article",
        headline:
          "Doua pour retrouver un objet perdu en islam : invocations et conseils",
        description:
          "Découvrez la doua pour retrouver un objet perdu en islam : invocations authentiques en arabe, inna lillahi wa inna ilayhi raji'un, salat al-hajah, tawakkul et patience.",
        image: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        datePublished: "2026-03-29",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-objet-perdu-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-objet-perdu-islam/#breadcrumb",
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
            name: "Doua objet perdu",
            item: "https://www.islamreligion.fr/doua-objet-perdu-islam",
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
          title="Doua pour retrouver un objet perdu en islam"
          subtitle="Invocations authentiques tirées du Coran et de la Sunna pour celui qui a perdu un bien. Textes en arabe, phonétique et traduction française, avec les enseignements sur le tawakkul et la patience."
          imageSrc="/images/arches-mosquee-moucharabieh-lumiere-doree.jpg"
          imageAlt="Arches de mosquée avec moucharabieh et lumière dorée symbolisant la guidance divine pour retrouver un objet perdu en islam"
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
                <span className="text-foreground">Doua objet perdu</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Perdre un objet de valeur peut être une source d&apos;angoisse
                  considérable. L&apos;islam enseigne au croyant une approche
                  complète face à cette épreuve : prononcer &laquo;&nbsp;inna
                  lillahi wa inna ilayhi raji&apos;un&nbsp;&raquo;, invoquer
                  Allah par des douas authentiques, accomplir la salat al-hajah
                  si nécessaire, et placer sa confiance (tawakkul) en Allah tout
                  en fournissant les efforts concrets de recherche. Que l&apos;objet
                  soit retrouvé ou non, le musulman sort grandi de cette épreuve
                  par sa patience et sa soumission au décret divin.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Inna lillahi wa inna ilayhi raji'un */}
              {/* ============================================ */}
              <section id="inna-lillahi" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Inna lillahi wa inna ilayhi raji&apos;un : la première réaction face à la perte
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Lorsqu&apos;un musulman perd un objet, la première parole qui
                  devrait sortir de sa bouche est la formule coranique
                  &laquo;&nbsp;<strong>Inna lillahi wa inna ilayhi
                  raji&apos;un</strong>&nbsp;&raquo; (إنا لله وإنا إليه راجعون),
                  qui signifie &laquo;&nbsp;Certes, nous appartenons à Allah et
                  c&apos;est vers Lui que nous retournons&nbsp;&raquo;. Cette
                  expression, tirée de la sourate al-Baqara (2:156), est la
                  réponse universelle du croyant face à toute épreuve, qu&apos;elle
                  soit majeure ou mineure.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette formule n&apos;est pas qu&apos;une simple parole de
                  circonstance. Elle incarne une vérité profonde de la foi
                  islamique : tout ce que nous possédons appartient
                  fondamentalement à Allah. Nos biens, nos proches et même nos
                  propres vies sont des dépôts (amana) confiés par le Créateur.
                  Lorsqu&apos;un bien disparaît, le croyant rappelle cette réalité
                  à son coeur et reconnaît la souveraineté absolue d&apos;Allah
                  sur toute chose. Ce rappel apaise l&apos;âme et empêche le
                  désespoir de s&apos;installer.
                </p>

                <HadithCard
                  arabic="ما من مسلم تصيبه مصيبة فيقول ما أمره الله: إنا لله وإنا إليه راجعون، اللهم أجرني في مصيبتي واخلف لي خيرا منها، إلا أخلف الله له خيرا منها"
                  text="Aucun musulman n'est frappé par une épreuve et ne dit ce qu'Allah lui a ordonné : « Certes nous appartenons à Allah et à Lui nous retournons, ô Allah récompense-moi dans mon épreuve et accorde-moi quelque chose de meilleur », sans qu'Allah ne lui accorde quelque chose de meilleur en retour."
                  source="Rapporté par Muslim (918)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est fondamental car il établit une promesse divine
                  claire : quiconque prononce cette invocation avec sincérité
                  recevra une compensation supérieure à ce qu&apos;il a perdu.
                  Cette promesse s&apos;applique à toute forme de perte, y
                  compris la perte d&apos;un objet matériel. Les savants
                  expliquent que la compensation peut prendre différentes
                  formes : retrouver l&apos;objet lui-même, recevoir un bien
                  meilleur, ou obtenir une récompense spirituelle dans
                  l&apos;au-delà.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prononcer la formule immédiatement :</strong>{" "}
                      dès que vous réalisez la perte, dites &laquo;&nbsp;inna
                      lillahi wa inna ilayhi raji&apos;un&nbsp;&raquo; avant
                      même de commencer la recherche.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ajouter la doua complète :</strong>{" "}
                      &laquo;&nbsp;Allahumma ajirni fi musibati wa akhlif li
                      khayran minha&nbsp;&raquo; (ô Allah, récompense-moi dans
                      mon épreuve et accorde-moi quelque chose de meilleur).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Garder son calme :</strong>{" "}
                      la panique et la colère ne font qu&apos;aggraver la
                      situation. Le rappel d&apos;Allah apaise le coeur et
                      permet de réfléchir avec lucidité pour retrouver
                      l&apos;objet égaré.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en prière et invocation doua pour retrouver un objet perdu en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Douas pour retrouver un objet perdu */}
              {/* ============================================ */}
              <section id="douas-objet-perdu" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas pour retrouver un objet perdu en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Bien qu&apos;il n&apos;existe pas de doua spécifiquement
                  rapportée du Prophète (paix et salut sur lui) exclusivement
                  pour les objets perdus, plusieurs invocations authentiques
                  sont parfaitement adaptées à cette situation. Elles
                  s&apos;appuient sur les Noms d&apos;Allah et sur les
                  principes généraux de la doua en islam. Voici les
                  principales invocations recommandées par les savants.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua par les Noms d&apos;Allah Al-Hadi et Al-Alim
                </h3>

                <div className="mt-4 rounded-xl border border-border bg-white p-6">
                  <p className="text-center text-2xl leading-loose text-primary" dir="rtl">
                    يا هادي الضالين، اهدني إلى ضالّتي بقدرتك وسلطانك، فإنها من فضلك وعطائك
                  </p>
                  <p className="mt-3 text-center text-sm italic text-foreground-secondary">
                    Ya Hadiya d-dallin, ihdini ila dallati bi qudratika wa sultanik, fa innaha min fadlika wa &apos;ata&apos;ik
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground">
                    &laquo;&nbsp;Ô Toi qui guides les égarés, guide-moi vers mon
                    objet perdu par Ta puissance et Ton autorité, car il fait
                    partie de Ta grâce et de Tes dons.&nbsp;&raquo;
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua générale du besoin
                </h3>

                <div className="mt-4 rounded-xl border border-border bg-white p-6">
                  <p className="text-center text-2xl leading-loose text-primary" dir="rtl">
                    اللهم رب الضالة، هادي الضالة، تهدي من الضلالة، رد علي ضالتي بقدرتك وسلطانك
                  </p>
                  <p className="mt-3 text-center text-sm italic text-foreground-secondary">
                    Allahumma Rabba d-dallah, Hadiya d-dallah, tahdi mina d-dalalah, rudda &apos;alayya dallati bi qudratika wa sultanik
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground">
                    &laquo;&nbsp;Ô Allah, Seigneur de ce qui est égaré, Guide de
                    ce qui est égaré, Toi qui guides hors de l&apos;égarement,
                    rends-moi mon objet perdu par Ta puissance et Ton
                    autorité.&nbsp;&raquo;
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua de Younous (alayhi salam)
                </h3>

                <div className="mt-4 rounded-xl border border-border bg-white p-6">
                  <p className="text-center text-2xl leading-loose text-primary" dir="rtl">
                    لا إله إلا أنت سبحانك إني كنت من الظالمين
                  </p>
                  <p className="mt-3 text-center text-sm italic text-foreground-secondary">
                    La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground">
                    &laquo;&nbsp;Il n&apos;y a de divinité que Toi, gloire à
                    Toi, j&apos;étais certes parmi les
                    injustes.&nbsp;&raquo; (Coran, 21:87)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua de Younous (Jonas) est l&apos;une des invocations
                  les plus puissantes en islam. Le Prophète (paix et salut sur
                  lui) a enseigné qu&apos;aucun musulman n&apos;invoque Allah
                  par cette formule pour quoi que ce soit sans qu&apos;Allah ne
                  lui réponde (at-Tirmidhi). Bien qu&apos;elle ait été
                  prononcée dans le ventre de la baleine, les savants
                  s&apos;accordent à dire qu&apos;elle est efficace pour toute
                  situation de détresse, y compris la perte d&apos;un bien.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. HasbiyAllahu la ilaha illa Hu
                </h3>

                <div className="mt-4 rounded-xl border border-border bg-white p-6">
                  <p className="text-center text-2xl leading-loose text-primary" dir="rtl">
                    حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم
                  </p>
                  <p className="mt-3 text-center text-sm italic text-foreground-secondary">
                    HasbiyAllahu la ilaha illa Hu, &apos;alayhi tawakkaltu wa Huwa Rabbu l-&apos;arshi l-&apos;adhim
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground">
                    &laquo;&nbsp;Allah me suffit, il n&apos;y a de divinité que
                    Lui, je place ma confiance en Lui et Il est le Seigneur du
                    Trône immense.&nbsp;&raquo; (Coran, 9:129)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui qui
                  récite cette invocation sept fois le matin et sept fois le
                  soir, Allah lui suffira pour toutes ses préoccupations
                  (Abu Dawud). Cette doua est particulièrement adaptée à la
                  situation de celui qui a perdu un objet, car elle exprime le
                  tawakkul total en Allah et la certitude que Lui seul peut
                  guider vers ce qui est perdu.
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
              {/* SECTION 3 : Salat al-hajah */}
              {/* ============================================ */}
              <section id="salat-hajah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Salat al-hajah : la prière du besoin pour retrouver un objet
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Lorsque la perte d&apos;un objet représente une préoccupation
                  importante, le musulman peut recourir à la <strong>salat
                  al-hajah</strong> (prière du besoin), une prière surérogatoire
                  de deux raka&apos;at destinée à présenter un besoin
                  particulier à Allah. Cette prière constitue un moyen spirituel
                  puissant pour solliciter l&apos;aide divine dans la recherche
                  d&apos;un bien égaré.
                </p>

                <HadithCard
                  arabic="من كانت له إلى الله حاجة أو إلى أحد من بني آدم فليتوضأ فليحسن الوضوء ثم ليصل ركعتين ثم ليثن على الله وليصل على النبي صلى الله عليه وسلم"
                  text="Celui qui a un besoin auprès d'Allah ou auprès de l'un des fils d'Adam, qu'il fasse ses ablutions en les perfectionnant, puis qu'il prie deux raka'at, puis qu'il fasse l'éloge d'Allah et qu'il prie sur le Prophète (paix et salut sur lui)."
                  source="Rapporté par at-Tirmidhi (479)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La démarche de la salat al-hajah pour retrouver un objet perdu
                  suit un protocole précis que les savants ont détaillé. Le
                  croyant commence par accomplir ses ablutions (wudu) avec soin,
                  car la purification extérieure prépare la purification
                  intérieure nécessaire à l&apos;invocation. Ensuite, il
                  accomplit deux raka&apos;at avec concentration (khushu&apos;),
                  en méditant les versets récités. Après le salam final, il
                  commence par louer Allah et Le glorifier, puis il envoie la
                  prière sur le Prophète (paix et salut sur lui), avant
                  d&apos;exposer son besoin avec humilité.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Faire les ablutions avec soin
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Perfectionner son wudu est la première étape. Le
                        Prophète (paix et salut sur lui) a insisté sur la
                        qualité des ablutions comme préparation à la prière et
                        à l&apos;invocation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Prier deux raka&apos;at avec concentration
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Accomplir la prière avec khushu&apos; (recueillement),
                        en méditant les versets et en ressentant la présence
                        divine. Il est recommandé de réciter la sourate
                        al-Kafirun dans la première raka&apos;at et la sourate
                        al-Ikhlas dans la seconde.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Louer Allah et prier sur le Prophète
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Après le salam, commencer par glorifier Allah (subhanAllah,
                        alhamdulillah, Allahu akbar), puis envoyer la prière
                        sur le Prophète (paix et salut sur lui). Ces deux
                        étapes sont les clés qui ouvrent les portes de
                        l&apos;exaucement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Exposer son besoin avec humilité
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Demander à Allah de guider vers l&apos;objet perdu, en
                        utilisant les douas mentionnées plus haut ou en
                        formulant sa demande dans ses propres mots avec
                        sincérité et soumission. Pour approfondir les{" "}
                        <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">conditions d&apos;exaucement de la doua</Link>,
                        consultez notre guide complet.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Tawakkul et patience */}
              {/* ============================================ */}
              <section id="tawakkul-patience" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Tawakkul et patience face à la perte d&apos;un bien
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>tawakkul</strong> (confiance en Allah) est un
                  pilier fondamental de la foi musulmane qui prend tout son sens
                  lorsqu&apos;on perd un objet de valeur. Il ne s&apos;agit pas
                  de rester passif en attendant un miracle, mais de combiner
                  les efforts concrets de recherche avec une confiance absolue
                  dans le décret divin. Le Prophète (paix et salut sur lui)
                  a illustré ce principe par un enseignement célèbre sur la
                  chamelle.
                </p>

                <HadithCard
                  arabic="اعقلها وتوكل"
                  text="Attache-la (ta chamelle) et place ta confiance en Allah."
                  source="Rapporté par at-Tirmidhi (2517)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith, bien que bref, contient un enseignement immense.
                  Lorsqu&apos;un homme demanda au Prophète (paix et salut sur
                  lui) s&apos;il devait attacher sa chamelle ou simplement
                  placer sa confiance en Allah, la réponse fut sans ambiguïté :
                  les deux à la fois. Appliqué à la recherche d&apos;un objet
                  perdu, cela signifie que le croyant doit fouiller
                  méthodiquement les endroits possibles, interroger les
                  personnes susceptibles d&apos;avoir vu l&apos;objet, revenir
                  sur ses pas, tout en invoquant Allah et en Lui faisant
                  confiance pour le résultat.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La <strong>patience</strong> (sabr) est l&apos;autre vertu
                  indispensable dans cette épreuve. Le Coran enseigne :
                  &laquo;&nbsp;Ô vous qui avez cru, cherchez secours dans la
                  patience et la prière. Certes, Allah est avec les
                  patients&nbsp;&raquo; (Coran, 2:153). La patience ne signifie
                  pas l&apos;indifférence face à la perte, mais la maîtrise de
                  soi et l&apos;acceptation du décret divin, même lorsque le
                  résultat ne correspond pas à nos espérances. Le croyant
                  patient sait que chaque épreuve, aussi minime soit-elle, est
                  une occasion de se rapprocher d&apos;Allah et d&apos;effacer
                  ses péchés. Pour aller plus loin, découvrez nos{" "}
                  <Link href="/doua-angoisse-stress-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas contre l&apos;angoisse et le stress</Link>{" "}
                  qui accompagnent le croyant dans les moments de préoccupation.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en doua avec rayons dorés symbolisant le tawakkul et la confiance en Allah pour retrouver un objet perdu"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Éviter la colère et les paroles interdites :</strong>{" "}
                      la frustration peut pousser à prononcer des paroles de
                      mécontentement envers le destin (qadar), ce qui est
                      interdit en islam. Rester maître de ses paroles est une
                      forme de sabr.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Voir l&apos;épreuve comme une expiation :</strong>{" "}
                      le Prophète (paix et salut sur lui) a dit qu&apos;aucune
                      fatigue, maladie, souci ou tristesse n&apos;atteint le
                      croyant, même une épine qui le pique, sans qu&apos;Allah
                      ne lui pardonne une partie de ses péchés (al-Bukhari et
                      Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Persévérer dans la doua :</strong>{" "}
                      ne pas abandonner l&apos;invocation après un ou deux jours.
                      La persévérance dans la doua est elle-même un acte
                      d&apos;adoration aimé d&apos;Allah.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Comportement islamique */}
              {/* ============================================ */}
              <section id="adab-recherche" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le comportement islamique lors de la recherche d&apos;un objet perdu
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam encadre le comportement du croyant dans toutes les
                  situations de la vie, y compris la recherche d&apos;un objet
                  égaré. La Sunna du Prophète (paix et salut sur lui) et les
                  enseignements des savants offrent des recommandations
                  pratiques qui allient la dimension spirituelle à l&apos;action
                  concrète. Ces adab (bonnes manières) permettent au musulman
                  de vivre cette épreuve comme un moment de rapprochement avec
                  Allah plutôt que comme une source de frustration.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Faire le dhikr pendant la recherche
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Occuper sa langue par le rappel d&apos;Allah (dhikr) tout
                      en cherchant l&apos;objet. Le subhanAllah, alhamdulillah
                      et Allahu akbar apaisent le coeur et maintiennent le lien
                      avec le Créateur. Le dhikr transforme un moment de stress
                      en un acte d&apos;adoration récompensé.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Faire l&apos;aumône (sadaqa)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Certains savants recommandent de donner une aumône avec
                      l&apos;intention de retrouver l&apos;objet perdu. La
                      sadaqa attire la baraka (bénédiction) d&apos;Allah et
                      peut être un moyen d&apos;obtenir Son aide. Le Prophète
                      (paix et salut sur lui) a dit que la sadaqa éteint la
                      colère du Seigneur (at-Tirmidhi).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Demander l&apos;aide des proches
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Solliciter l&apos;aide de la famille, des amis ou des
                      voisins est parfaitement conforme à l&apos;islam.
                      L&apos;entraide (ta&apos;awun) est une valeur cardinale de
                      la communauté musulmane. On peut également demander à des
                      personnes pieuses de faire doua pour nous.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Éviter les pratiques interdites
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Il est formellement interdit de recourir à la sorcellerie,
                      aux voyants, aux devins ou à toute pratique de shirk pour
                      retrouver un objet perdu. Le Prophète (paix et salut sur
                      lui) a averti que celui qui consulte un devin, sa prière
                      n&apos;est pas acceptée pendant quarante jours (Muslim).
                      Pour se protéger, découvrez les{" "}
                      <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas de protection en islam</Link>.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants insistent également sur l&apos;importance de la
                  prévention. L&apos;islam encourage le croyant à prendre soin
                  de ses biens et à les organiser de manière ordonnée. Le
                  Prophète (paix et salut sur lui) était connu pour son
                  organisation et son souci du détail dans la gestion de ses
                  affaires quotidiennes. Ranger ses objets de valeur dans des
                  endroits précis et dire le nom d&apos;Allah (bismillah) en
                  les posant sont des habitudes simples qui aident à les
                  retrouver en cas de besoin.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Douas de protection en islam"
                  description="Découvrez les invocations prophétiques pour vous protéger au quotidien : adhkar du matin et du soir, protection du foyer et des biens."
                  href="/doua-protection-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Sagesse derrière la perte */}
              {/* ============================================ */}
              <section id="sagesse-perte" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La sagesse derrière la perte d&apos;un bien en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam enseigne que rien n&apos;arrive sans la
                  permission d&apos;Allah et que derrière chaque épreuve se
                  cache une sagesse divine, même si elle n&apos;est pas
                  immédiatement perceptible. La perte d&apos;un objet, aussi
                  désagréable soit-elle, peut comporter de nombreux bienfaits
                  spirituels que le croyant clairvoyant saura reconnaître.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Premièrement, la perte d&apos;un bien rappelle au croyant la
                  nature éphémère de la vie d&apos;ici-bas (dunya). Tous les
                  biens matériels sont temporaires et périssables. Seules les
                  oeuvres accomplies pour Allah perdurent dans l&apos;au-delà.
                  Cette prise de conscience renforce le détachement spirituel
                  (zuhd) et recentre les priorités du croyant sur ce qui a une
                  valeur éternelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Deuxièmement, l&apos;épreuve de la perte est un moyen
                  d&apos;expiation des péchés. Le Prophète (paix et salut sur
                  lui) a enseigné que toute affliction qui touche le croyant,
                  fût-ce une épine qui le pique, est une cause de pardon de
                  ses péchés. Ainsi, la perte d&apos;un objet accompagnée de
                  patience devient une source de purification spirituelle et
                  un moyen d&apos;élévation dans les degrés du Paradis.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Troisièmement, cette épreuve est une occasion de renforcer
                  sa relation avec Allah à travers la doua. Beaucoup de
                  croyants ne se tournent vers l&apos;invocation que dans les
                  moments de difficulté. Si cette perte pousse le musulman à
                  développer une habitude régulière de doua et de dhikr, alors
                  elle aura été un immense bienfait déguisé. Chaque épreuve
                  est une porte ouverte vers un rapprochement plus profond
                  avec le Créateur.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rappel du détachement (zuhd) :</strong>{" "}
                      la perte nous enseigne à ne pas attacher notre coeur
                      excessivement aux biens matériels, car seul Allah est
                      permanent.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Expiation des péchés :</strong>{" "}
                      la patience face à la perte efface les fautes et élève
                      le croyant en degré auprès d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Retour à Allah :</strong>{" "}
                      l&apos;épreuve pousse le croyant à multiplier les
                      invocations et à renforcer sa connexion spirituelle avec
                      son Seigneur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Gratitude pour les bienfaits restants :</strong>{" "}
                      perdre un objet rappelle la valeur de tout ce que l&apos;on
                      possède encore et incite à la reconnaissance (shukr)
                      envers Allah pour Ses innombrables bienfaits.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
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
                    href="/doua-protection-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de protection
                  </Link>
                  <Link
                    href="/doua-angoisse-stress-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre l&apos;angoisse et le stress
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/istikhara-priere-consultation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prière de consultation (istikhara)
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
