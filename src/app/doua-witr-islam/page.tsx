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
    "Doua du witr en islam : qounout, invocations et guide complet",
  description:
    "Apprenez la doua du witr en islam : doua du qounout (Allahumma ihdini), comment prier le witr (1, 3 ou 5 rak'at), meilleur moment, doua apres witr (Subhanal-Malikil-Quddus) et invocations en arabe avec phonetique et traduction.",
  openGraph: {
    title:
      "Doua du witr en islam : qounout, invocations et guide complet",
    description:
      "Les invocations authentiques du witr en islam : doua du qounout en arabe, phonetique et traduction, guide pratique de la priere du witr et hadiths.",
    url: "https://www.islamreligion.fr/doua-witr-islam",
    images: [
      {
        url: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-witr-islam",
  },
};

const tocItems = [
  { id: "importance-witr", label: "Importance de la priere du witr" },
  { id: "doua-qounout", label: "Doua du qounout (Allahumma ihdini)" },
  { id: "comment-prier-witr", label: "Comment prier le witr (1, 3 ou 5 rak'at)" },
  { id: "meilleur-moment-witr", label: "Meilleur moment pour le witr" },
  { id: "doua-apres-witr", label: "Doua apres le witr (Subhanal-Malikil-Quddus)" },
  { id: "douas-witr-arabe", label: "Douas du witr en arabe avec traduction" },
  { id: "faq", label: "Questions frequentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua du witr en islam ?",
    answer:
      "La doua principale du witr est la doua du qounout : &laquo; Allahumma ihdini fiman hadayt, wa &apos;afini fiman &apos;afayt, wa tawallani fiman tawallayt &raquo; (Seigneur, guide-moi parmi ceux que Tu as guides, accorde-moi la sante parmi ceux a qui Tu l&apos;as accordee, prends-moi en charge parmi ceux dont Tu as pris la charge). Cette invocation est recitee dans la derniere rak&apos;at du witr, apres le ruku&apos; ou avant, selon les ecoles juridiques.",
  },
  {
    question: "Combien de rak'at fait-on pour le witr ?",
    answer:
      "Le witr peut se prier en 1, 3, 5, 7, 9 ou 11 rak&apos;at. Le minimum est une seule rak&apos;at, et la forme la plus courante est 3 rak&apos;at (soit en continu, soit 2 rak&apos;at suivies d&apos;un salam puis 1 rak&apos;at). Le Prophete (paix et salut sur lui) priait le plus souvent le witr en 3 rak&apos;at, mais il arrivait qu&apos;il en prie davantage, notamment lors du tahajjud.",
  },
  {
    question: "Quand doit-on prier le witr ?",
    answer:
      "Le witr se prie apres la priere de l&apos;Isha et avant le Fajr. Le meilleur moment est le dernier tiers de la nuit pour celui qui est capable de se reveiller. Sinon, il est recommande de le prier juste apres la salat de l&apos;Isha ou apres les rawatib (prieres surrerogatoires). Le Prophete (paix et salut sur lui) a dit : &laquo; Faites du witr votre derniere priere de la nuit &raquo; (al-Bukhari et Muslim).",
  },
  {
    question: "Le witr est-il obligatoire en islam ?",
    answer:
      "Selon la majorite des savants (malikites, shafi&apos;ites et hanbalites), le witr est une sunna mu&apos;akkada (fortement recommandee), pas une obligation. Cependant, l&apos;ecole hanafite considere le witr comme wajib (obligatoire). Dans tous les cas, le Prophete (paix et salut sur lui) ne le delaissait jamais, que ce soit en voyage ou en residence, ce qui montre son importance capitale.",
  },
  {
    question: "Que dit-on apres la priere du witr ?",
    answer:
      "Apres le salam du witr, il est sunna de dire trois fois : &laquo; Subhanal-Malikil-Quddus &raquo; (Gloire au Roi, le Tres-Saint) en elevant la voix a la troisieme fois. C&apos;est une pratique authentique rapportee par an-Nasa&apos;i et Abu Dawud. On peut egalement faire des douas personnelles, car c&apos;est un moment propice a l&apos;exaucement.",
  },
  {
    question: "Peut-on reciter le qounout en francais ?",
    answer:
      "Les savants recommandent de reciter le qounout en arabe dans la priere. Cependant, certains savants autorisent celui qui ne maitrise pas encore l&apos;arabe a invoquer dans sa langue le temps d&apos;apprendre. L&apos;ideal est d&apos;apprendre progressivement la doua du qounout en arabe tout en comprenant son sens pour une meilleure concentration (khushu&apos;).",
  },
  {
    question: "Quelle sourate recite-t-on dans le witr ?",
    answer:
      "Il est sunna de reciter sourate Al-A&apos;la (87) dans la premiere rak&apos;at, sourate Al-Kafirun (109) dans la deuxieme, et sourate Al-Ikhlas (112) dans la troisieme rak&apos;at. Cela est rapporte dans un hadith d&apos;an-Nasa&apos;i. On peut toutefois reciter d&apos;autres sourates si on le souhaite.",
  },
  {
    question: "Peut-on prier le witr apres le Fajr si on l'a oublie ?",
    answer:
      "Oui, selon la majorite des savants, celui qui a manque le witr peut le rattraper apres le lever du soleil en priant un nombre pair de rak&apos;at. Par exemple, s&apos;il priait habituellement 3 rak&apos;at de witr, il en prie 4 en rattrapage. C&apos;est la position rapportee d&apos;Aisha (qu&apos;Allah l&apos;agree) concernant la pratique du Prophete (paix et salut sur lui).",
  },
];

export default function DouaWitrIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-witr-islam/#article",
        headline:
          "Doua du witr en islam : qounout, invocations et guide complet",
        description:
          "Apprenez la doua du witr en islam : doua du qounout, comment prier le witr, meilleur moment, doua apres witr et invocations en arabe avec phonetique.",
        image: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        datePublished: "2026-04-16",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-witr-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-witr-islam/#breadcrumb",
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
            name: "Doua du witr",
            item: "https://www.islamreligion.fr/doua-witr-islam",
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
          title="Doua du witr en islam : qounout, invocations et guide complet"
          subtitle="Apprenez la doua du qounout, les invocations avant et apres le witr, et comment accomplir cette priere essentielle selon la Sunna. Textes en arabe, phonetique et traduction."
          imageSrc="/images/prosternation-sujud-priere-islam-mosquee.jpg"
          imageAlt="Prosternation sujud lors de la priere du witr dans une mosquee en islam"
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
                <span className="text-foreground">Doua du witr</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En resume
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le witr est l&apos;une des prieres les plus aimees du
                  Prophete (paix et salut sur lui), qui ne la delaissait
                  jamais. Elle se distingue par la doua du qounout
                  (&laquo;&nbsp;Allahumma ihdini fiman hadayt&nbsp;&raquo;),
                  une invocation d&apos;une beaute et d&apos;une profondeur
                  remarquables. Que vous priez 1, 3 ou 5 rak&apos;at, le
                  witr clot votre nuit de priere et constitue un moment
                  privilegie pour adresser vos demandes a Allah, en
                  particulier dans le dernier tiers de la nuit.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance de la priere du witr */}
              {/* ============================================ */}
              <section id="importance-witr" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance de la priere du witr en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mot <strong>witr</strong> signifie
                  &laquo;&nbsp;impair&nbsp;&raquo; en arabe. Cette priere
                  porte ce nom car elle se termine toujours par un nombre
                  impair de rak&apos;at, refletant un attribut divin :
                  Allah est Witr (Unique, Impair) et Il aime ce qui est
                  impair. La priere du witr occupe une place eminente
                  dans la pratique quotidienne du musulman, constituant la
                  derniere priere de la nuit et le sceau de toutes les
                  adorations nocturnes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix et salut sur lui) accordait une
                  importance capitale au witr. Il ne le delaissait jamais,
                  ni en voyage ni en residence, et il encourageait
                  vivement sa communaute a l&apos;accomplir. Cette
                  constance prophétique temoigne du rang eleve de cette
                  priere aupres d&apos;Allah. Parmi les prieres
                  surrerogatoires, le witr est celle qui fait l&apos;objet
                  du plus grand nombre de recommandations dans la Sunna.
                </p>

                <HadithCard
                  arabic="إن الله وتر يحب الوتر، فأوتروا يا أهل القرآن"
                  text="Allah est Witr (Impair) et Il aime le witr. Accomplissez donc le witr, o gens du Coran !"
                  source="Rapporte par Abu Dawud (1416), at-Tirmidhi (453), authentifie par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;appellation &laquo;&nbsp;gens du Coran&nbsp;&raquo;
                  dans ce hadith est significative : elle designe les
                  musulmans en les associant au Livre sacre, soulignant
                  que le witr est une marque distinctive de la communaute
                  musulmane. Les savants expliquent que cette priere est
                  un moyen de se rapprocher d&apos;Allah en imitant un de
                  Ses attributs dans notre adoration, car Il est l&apos;Unique
                  (al-Witr) et Il aime que Ses serviteurs concluent leur
                  nuit par un nombre impair de rak&apos;at.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sunna mu&apos;akkada :</strong> le witr est
                      fortement recommande selon la majorite des savants,
                      et considere comme obligatoire (wajib) chez les
                      hanafites.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Jamais delaisse :</strong> le Prophete (paix
                      et salut sur lui) ne manquait jamais le witr, meme
                      en voyage, ce qui demontre son rang superieur parmi
                      les prieres surrerogatoires.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sceau de la nuit :</strong> le witr clot les
                      prieres nocturnes et constitue un moment privilegie
                      d&apos;invocation, notamment durant le{" "}
                      <Link href="/doua-tahajjud-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">tahajjud</Link>.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/salle-priere-mosquee-arches-lumiere-soleil.jpg"
                    alt="Salle de priere dans une mosquee avec arches et lumiere du soleil illustrant la priere du witr"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua du qounout */}
              {/* ============================================ */}
              <section id="doua-qounout" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua du qounout : Allahumma ihdini fiman hadayt
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La <strong>doua du qounout</strong> est l&apos;invocation
                  centrale de la priere du witr. Le terme
                  &laquo;&nbsp;qounout&nbsp;&raquo; designe en arabe le
                  fait de se tenir debout en obeissance et en humilite
                  devant Allah. Cette doua est recitee dans la derniere
                  rak&apos;at du witr, soit avant le ruku&apos; (inclinaison)
                  selon l&apos;ecole hanafite, soit apres le ruku&apos;
                  selon les autres ecoles. Les deux positions sont valides
                  et fondees sur des preuves authentiques.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix et salut sur lui) a enseigne cette
                  invocation a son petit-fils al-Hasan ibn Ali (qu&apos;Allah
                  les agree), ce qui montre l&apos;importance de
                  transmettre cette doua aux jeunes generations. Elle
                  comprend des demandes essentielles : la guidance, la
                  sante, la prise en charge divine, la benediction dans
                  les bienfaits et la protection contre le mal du decret.
                  Pour approfondir cette invocation specifique, consultez
                  notre article dedie a la{" "}
                  <Link href="/doua-qounout-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du qounout en islam</Link>.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Allahumma ihdini fiman hadayt, wa &apos;afini fiman &apos;afayt, wa tawallani fiman tawallayt, wa barik li fima a&apos;tayt, wa qini sharra ma qadayt, fa innaka taqdi wa la yuqda &apos;alayk, wa innahu la yadhillu man walayt, wa la ya&apos;izzu man &apos;adayt, tabarakta Rabbana wa ta&apos;alayt
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, guide-moi parmi ceux que Tu as guides, accorde-moi la sante parmi ceux a qui Tu l&apos;as accordee, prends-moi en charge parmi ceux dont Tu as pris la charge, benis-moi dans ce que Tu m&apos;as donne, et protege-moi du mal de ce que Tu as decrete. Car c&apos;est Toi qui decrete et nul ne peut decreter contre Toi. Celui que Tu soutiens ne sera jamais humilie, et celui que Tu prends en ennemi ne sera jamais honore. Beni sois-Tu, notre Seigneur, et Eleve&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par Abu Dawud (1425), at-Tirmidhi (464), an-Nasa&apos;i (1745)
                  </p>
                </div>

                <HadithCard
                  arabic="علّمني رسول الله صلى الله عليه وسلم كلمات أقولهن في قنوت الوتر"
                  text="Le Messager d'Allah (paix et salut sur lui) m'a enseigne des paroles que je recite dans le qounout du witr."
                  source="Rapporte par al-Hasan ibn Ali, dans Abu Dawud (1425), at-Tirmidhi (464)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants soulignent la richesse de cette doua qui
                  couvre tous les aspects de la vie du croyant. La demande
                  de guidance (hidaya) vient en premier car elle est le
                  fondement de tout bien. Puis vient la sante
                  (&apos;afiya), la prise en charge divine (tawalli), la
                  benediction (baraka) et la protection contre les
                  epreuves. La conclusion reconnait la souverainete
                  absolue d&apos;Allah et Sa grandeur. Cette doua est un
                  modele complet d&apos;invocation que le musulman devrait
                  memoriser et comprendre en profondeur.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Decouvrez des formations adaptees aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandees"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Comment prier le witr */}
              {/* ============================================ */}
              <section id="comment-prier-witr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment prier le witr : 1, 3 ou 5 rak&apos;at
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La priere du witr offre une souplesse remarquable dans
                  sa forme. Le Prophete (paix et salut sur lui) l&apos;a
                  accomplie de differentes manieres, ce qui permet au
                  musulman de choisir la forme qui convient le mieux a sa
                  situation. L&apos;essentiel est que le witr se termine
                  toujours par un nombre impair de rak&apos;at.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le witr en 1 rak&apos;at
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        C&apos;est le minimum valide. Le Prophete (paix et
                        salut sur lui) a dit : &laquo;&nbsp;Le witr est
                        une rak&apos;at a la fin de la nuit&nbsp;&raquo;
                        (Muslim). On prononce le takbir, recite la Fatiha
                        et une sourate, puis on accomplit le ruku&apos; et
                        les deux sujud avant le salam final. La doua du
                        qounout peut y etre recitee.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le witr en 3 rak&apos;at (forme la plus courante)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        C&apos;est la forme la plus pratiquee. Il existe
                        deux manieres de l&apos;accomplir. La premiere :
                        prier 2 rak&apos;at avec tashahud et salam, puis
                        1 rak&apos;at separee (methode preferee par les
                        hanbalites et shafi&apos;ites). La seconde :
                        prier 3 rak&apos;at en continu avec un seul
                        tashahud a la fin (methode hanafite). Il est
                        recommande de reciter sourate Al-A&apos;la dans
                        la premiere rak&apos;at, Al-Kafirun dans la
                        deuxieme et Al-Ikhlas dans la troisieme.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le witr en 5 rak&apos;at ou plus
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Pour celui qui souhaite multiplier les prieres
                        nocturnes, le witr peut atteindre 5, 7, 9 ou
                        meme 11 rak&apos;at. Aisha (qu&apos;Allah
                        l&apos;agree) rapporte que le Prophete (paix et
                        salut sur lui) priait parfois 11 rak&apos;at de
                        nuit dont le witr etait la conclusion. En 5
                        rak&apos;at, on ne s&apos;assoit pour le tashahud
                        qu&apos;a la toute fin. Cette forme est
                        particulierement pratiquee durant le Ramadan avec
                        les prieres de{" "}
                        <Link href="/doua-tarawih-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">tarawih</Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Quelle que soit la forme choisie, la doua du qounout se
                  recite dans la derniere rak&apos;at. Apres la recitation
                  de la sourate, on leve les mains et on recite le qounout
                  debout. Certains savants recommandent de le faire avant
                  le ruku&apos;, d&apos;autres apres en se relevant de
                  l&apos;inclinaison. Les deux positions sont valides et
                  le musulman peut alterner entre les deux pour suivre
                  l&apos;ensemble de la Sunna.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Meilleur moment pour le witr */}
              {/* ============================================ */}
              <section id="meilleur-moment-witr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le meilleur moment pour prier le witr
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le temps du witr s&apos;etend de la priere de l&apos;Isha
                  jusqu&apos;a l&apos;aube (le Fajr). Durant cette
                  periode, le moment le plus meritoire est le dernier
                  tiers de la nuit, lorsqu&apos;Allah descend au ciel le
                  plus bas et demande : &laquo;&nbsp;Y a-t-il quelqu&apos;un
                  qui M&apos;invoque pour que Je l&apos;exauce ?&nbsp;&raquo;
                  (al-Bukhari et Muslim). Cet instant est celui ou la doua
                  du witr atteint son effet maximal.
                </p>

                <HadithCard
                  arabic="اجعلوا آخر صلاتكم بالليل وترًا"
                  text="Faites du witr votre derniere priere de la nuit."
                  source="Rapporte par al-Bukhari (998) et Muslim (751)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith etablit un principe clair : le witr doit
                  cloturer les prieres nocturnes. Celui qui espere se
                  lever pour le{" "}
                  <Link href="/doua-tahajjud-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">tahajjud</Link>{" "}
                  dans le dernier tiers de la nuit devrait retarder son
                  witr pour le prier apres le tahajjud. En revanche, celui
                  qui craint de ne pas se reveiller devrait prier le witr
                  juste apres l&apos;Isha pour ne pas le manquer.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Apres l&apos;Isha directement
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Recommande pour celui qui craint de ne pas se
                      reveiller la nuit. Le Prophete (paix et salut sur
                      lui) a conseille a Abu Hurayra de prier le witr
                      avant de dormir (Muslim). C&apos;est la voie de la
                      prudence et de la facilite.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Dernier tiers de la nuit
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le moment le plus meritoire. C&apos;est l&apos;heure
                      ou Allah descend au ciel le plus proche et ou les
                      portes de la misericorde sont grandes ouvertes. Le
                      witr prie a cette heure combine l&apos;excellence du
                      moment avec la puissance de la doua du qounout.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg"
                    alt="Mosquee sous un ciel etoile la nuit illustrant le meilleur moment pour la priere du witr"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua apres le witr */}
              {/* ============================================ */}
              <section id="doua-apres-witr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua apres le witr : Subhanal-Malikil-Quddus
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Apres avoir prononce le salam final du witr, la Sunna
                  enseigne une pratique specifique : repeter trois fois
                  &laquo;&nbsp;Subhanal-Malikil-Quddus&nbsp;&raquo;
                  (Gloire au Roi, le Tres-Saint). A la troisieme
                  repetition, il est recommande d&apos;elever la voix et
                  de prolonger les mots. Ce dhikr est un sceau lumineux
                  qui clot la priere du witr dans la glorification
                  d&apos;Allah.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ الْمَلِكِ الْقُدُّوسِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Subhanal-Malikil-Quddus
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire au Roi, le Tres-Saint&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par an-Nasa&apos;i (1699) et Abu Dawud (1430)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ubayy ibn Ka&apos;b (qu&apos;Allah l&apos;agree)
                  rapporte cette pratique du Prophete (paix et salut sur
                  lui) et precise qu&apos;a la troisieme fois, le
                  Prophete elevait la voix et prolongeait les paroles.
                  Cette elevation de la voix est un acte de glorification
                  puissant qui marque la fin de la priere nocturne par la
                  reconnaissance de la royaute et de la saintete
                  d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Apres ce dhikr, le moment est egalement propice pour
                  des invocations personnelles. Le musulman peut lever
                  ses mains et adresser a Allah toutes ses demandes, car
                  la fin de la priere du witr, particulierement lorsqu&apos;elle
                  est accomplie dans le dernier tiers de la nuit, est un
                  moment d&apos;exaucement par excellence. On peut
                  egalement reciter les invocations habituelles apres
                  chaque priere : le tasbih (SubhanAllah 33 fois), le
                  tahmid (Alhamdulillah 33 fois) et le takbir (Allahu
                  Akbar 34 fois).
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>3 fois Subhanal-Malikil-Quddus :</strong>{" "}
                      c&apos;est la sunna specifique apres le witr, avec
                      elevation de la voix a la troisieme repetition.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Douas personnelles :</strong> le moment
                      apres le witr est ideal pour les demandes
                      specifiques adressees a Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Adhkar habituels :</strong> les
                      glorifications apres la priere (tasbih, tahmid,
                      takbir) completent cette adoration nocturne.
                      Retrouvez l&apos;ensemble des{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>{" "}
                      dans notre guide complet.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas du witr en arabe */}
              {/* ============================================ */}
              <section id="douas-witr-arabe" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas du witr en arabe avec phonetique et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus de la doua du qounout detaillee ci-dessus, le
                  Prophete (paix et salut sur lui) recitait d&apos;autres
                  invocations en lien avec le witr et les prieres
                  nocturnes. Voici une selection d&apos;invocations
                  authentiques que vous pouvez integrer dans votre
                  pratique du witr.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua d&apos;ouverture du qounout (complement)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Certains savants, dont Omar ibn al-Khattab (qu&apos;Allah
                  l&apos;agree), ajoutaient cette invocation apres la
                  doua du qounout enseignee par le Prophete :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Allahumma inna nasta&apos;inuka wa nastaghfiruka wa nuthni &apos;alaykal-khayr, wa la nakfuruka wa nakhla&apos;u wa natruku man yafjuruk
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, nous implorons Ton aide et Ton pardon, nous faisons Ton eloge et ne Te renions pas, nous delaissons et abandonnons quiconque Te desobeit&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par al-Bayhaqi dans as-Sunan al-Kubra, attribue a Omar ibn al-Khattab
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de prosternation et d&apos;humilite
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Durant le witr, la prosternation (sujud) est un moment
                  privilegie pour invoquer Allah. Le Prophete (paix et
                  salut sur lui) enseignait cette doua que l&apos;on peut
                  reciter lors du sujud du witr :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ وَأَعُوذُ بِكَ مِنْكَ لَا أُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Allahumma inni a&apos;udhu biridaka min sakhatik, wa bimu&apos;afatika min &apos;uqubatik, wa a&apos;udhu bika mink, la uhsi thana&apos;an &apos;alayk, Anta kama athnayta &apos;ala nafsik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge dans Ta satisfaction contre Ta colere, dans Ton pardon contre Ton chatiment, et je cherche refuge aupres de Toi contre Toi. Je ne saurais Te louer suffisamment, Tu es tel que Tu T&apos;es loue Toi-meme&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par Muslim (486)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Salat &apos;ala an-Nabi a la fin du qounout
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Les savants recommandent de conclure le qounout par
                  la priere sur le Prophete (paix et salut sur lui). Cette
                  pratique embellit l&apos;invocation et en renforce
                  l&apos;acceptation, car la doua encadree par la salat
                  sur le Prophete est plus susceptible d&apos;etre
                  exaucee.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Allahumma salli &apos;ala Muhammad wa &apos;ala ali Muhammad, kama sallayta &apos;ala Ibrahim wa &apos;ala ali Ibrahim, innaka Hamidun Majid
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, prie sur Muhammad et sur la famille de Muhammad, comme Tu as prie sur Ibrahim et sur la famille d&apos;Ibrahim, Tu es certes Digne de louange et de gloire&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par al-Bukhari (3370) et Muslim (405)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble de ces invocations forme un corpus
                  riche et complet pour la priere du witr. Le musulman
                  peut les apprendre progressivement, en commencant par
                  la doua du qounout principale, puis en ajoutant les
                  invocations complementaires au fur et a mesure de sa
                  memorisation. L&apos;important est de comprendre le
                  sens de chaque parole pour atteindre la concentration
                  (khushu&apos;) dans la priere.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua du qounout : guide complet"
                  description="Approfondissez votre connaissance de la doua du qounout avec les variantes, les regles et les merites detailles."
                  href="/doua-qounout-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations du witr dans leur langue originale"
                description="Maitrisez la langue du Coran pour reciter la doua du qounout avec comprehension et profondeur spirituelle. Decouvrez nos formations en ligne adaptees a tous les niveaux."
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
                    href="/doua-qounout-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du qounout
                  </Link>
                  <Link
                    href="/doua-tarawih-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua des tarawih
                  </Link>
                  <Link
                    href="/doua-tahajjud-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du tahajjud
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
