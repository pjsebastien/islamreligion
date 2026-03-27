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
    "Doua de l'eternuement en islam : invocation, reponse et adab complets",
  description:
    "Decouvrez la doua de l'eternuement en islam : Al-hamdulillah, Yarhamuk Allah, Yahdikumul-lah. Textes en arabe, phonetique, traduction, hadiths authentiques (Bukhari) et regles de bienseance (adab).",
  openGraph: {
    title:
      "Doua de l'eternuement en islam : invocation, reponse et adab complets",
    description:
      "Les invocations authentiques liees a l'eternuement en islam : textes en arabe, phonetique, traduction et hadiths de Bukhari. Regles et adab du musulman qui eternue.",
    url: "https://www.islamreligion.fr/doua-eternuement-islam",
    images: [
      {
        url: "/images/doua-mains-levees-illustration-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-eternuement-islam",
  },
};

const tocItems = [
  { id: "eternuement-sunna", label: "L'eternuement : une benediction en islam" },
  { id: "doua-celui-qui-eternue", label: "La doua de celui qui eternue" },
  { id: "reponse-yarhamukallah", label: "La reponse : Yarhamuk Allah" },
  { id: "replique-yahdikumullah", label: "La replique : Yahdikumul-lah" },
  { id: "adab-eternuement", label: "Les adab (bienseances) de l'eternuement" },
  { id: "plus-de-trois-fois", label: "Eternuer plus de trois fois" },
  { id: "situations-particulieres", label: "Situations particulieres" },
  { id: "faq", label: "Questions frequentes" },
];

const faqItems = [
  {
    question: "Que dit-on quand on eternue en islam ?",
    answer:
      "Lorsqu&apos;un musulman eternue, il doit dire « Al-hamdulillah » (الحمد لله), ce qui signifie « Louange a Allah ». Cette formule est une obligation pour celui qui eternue, car l&apos;eternuement est considere comme une benediction d&apos;Allah qui merite d&apos;etre remerciee. Le Prophete (paix et salut sur lui) a enseigne cette pratique dans un hadith rapporte par al-Bukhari.",
  },
  {
    question: "Que repond-on a quelqu'un qui eternue en islam ?",
    answer:
      "Lorsqu&apos;une personne eternue et dit « Al-hamdulillah », ceux qui l&apos;entendent doivent repondre « Yarhamuk Allah » (يرحمك الله), ce qui signifie « Qu&apos;Allah te fasse misericorde ». En retour, celui qui a eternue replique « Yahdikumul-lahu wa yuslihu balakum » (يهديكم الله ويصلح بالكم), soit « Qu&apos;Allah vous guide et ameliore votre condition ». C&apos;est un echange de bienfaits codifie par la Sunna.",
  },
  {
    question: "Faut-il repondre Yarhamuk Allah a chaque eternuement ?",
    answer:
      "Selon les hadiths authentiques, on repond « Yarhamuk Allah » pour les trois premiers eternuements. Au-dela de trois, le Prophete (paix et salut sur lui) a indique que la personne est enrhumee. On ne repete plus la formule, mais on peut invoquer la guerison pour elle. Ce jugement est base sur le hadith rapporte par Abu Dawud et at-Tirmidhi.",
  },
  {
    question: "Doit-on repondre a un non-musulman qui eternue ?",
    answer:
      "Oui, selon certains savants, lorsqu&apos;un non-musulman eternue, on peut lui dire « Yahdikumul-lah » (Qu&apos;Allah vous guide) ou invoquer pour lui la guidee. Le Prophete (paix et salut sur lui) repondait aux non-musulmans qui eternuaient en disant « Yahdikumul-lahu wa yuslihu balakum » selon le hadith rapporte par Abu Dawud. C&apos;est un acte de courtoisie et de da&apos;wa.",
  },
  {
    question: "Pourquoi dit-on Al-hamdulillah apres un eternuement ?",
    answer:
      "L&apos;eternuement est considere en islam comme un bienfait d&apos;Allah, car il libere le corps de ce qui le gene et procure un soulagement. Le Prophete (paix et salut sur lui) a dit : « Allah aime l&apos;eternuement et deteste le baillement » (al-Bukhari). Dire Al-hamdulillah est donc un acte de gratitude envers Allah pour cette benediction corporelle.",
  },
  {
    question: "Que faire si on eternue pendant la priere (salat) ?",
    answer:
      "Si un musulman eternue pendant la priere, il dit « Al-hamdulillah » en lui-meme (dans son coeur ou a voix basse) sans que cela n&apos;invalide sa priere. En revanche, les personnes autour ne doivent pas lui repondre « Yarhamuk Allah » pendant la salat. Si quelqu&apos;un repond « Yarhamuk Allah » a haute voix pendant la priere, cela peut invalider sa priere selon la majorite des savants.",
  },
  {
    question: "Est-il obligatoire de couvrir sa bouche en eternuant ?",
    answer:
      "Oui, il fait partie de la Sunna et de l&apos;adab islamique de couvrir sa bouche et son nez en eternuant. Le Prophete (paix et salut sur lui) couvrait son visage avec sa main ou son vetement lorsqu&apos;il eternuait, et il attenuait le son. Ce geste releve de la bienseance islamique et protege les autres, conformement au hadith rapporte par Abu Dawud et at-Tirmidhi.",
  },
  {
    question: "L'eternuement interrompt-il le jeune (sawm) ?",
    answer:
      "Non, l&apos;eternuement n&apos;invalide en aucun cas le jeune. C&apos;est un acte involontaire qui echappe au controle de la personne. Le jeune n&apos;est rompu que par l&apos;ingestion volontaire de nourriture, de boisson ou de rapports intimes. Le musulman qui eternue pendant le Ramadan continue son jeune normalement et dit « Al-hamdulillah » comme d&apos;habitude.",
  },
];

export default function DouaEternuementIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-eternuement-islam/#article",
        headline:
          "Doua de l'eternuement en islam : invocation, reponse et adab complets",
        description:
          "Decouvrez la doua de l'eternuement en islam : Al-hamdulillah, Yarhamuk Allah, Yahdikumul-lah. Textes en arabe, phonetique, traduction et hadiths authentiques.",
        image: "/images/doua-mains-levees-illustration-lumiere.jpg",
        datePublished: "2026-04-18",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-eternuement-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-eternuement-islam/#breadcrumb",
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
            name: "Doua de l'eternuement",
            item: "https://www.islamreligion.fr/doua-eternuement-islam",
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
          title="Doua de l'eternuement en islam : invocation, reponse et adab"
          subtitle="Que dire quand on eternue, comment repondre et quelle est la replique ? Decouvrez les invocations authentiques en arabe avec phonetique, traduction et hadiths de Bukhari."
          imageSrc="/images/doua-mains-levees-illustration-lumiere.jpg"
          imageAlt="Mains levees en invocation doua eternuement islam avec lumiere symbolisant la misericorde divine"
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
                <span className="text-foreground">Doua de l&apos;eternuement</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En resume
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;eternuement en islam est un bienfait d&apos;Allah qui
                  s&apos;accompagne d&apos;un echange d&apos;invocations entre le
                  musulman et son entourage. Celui qui eternue dit{" "}
                  <strong>Al-hamdulillah</strong> (Louange a Allah), on lui
                  repond <strong>Yarhamuk Allah</strong> (Qu&apos;Allah te fasse
                  misericorde), et il replique{" "}
                  <strong>Yahdikumul-lahu wa yuslihu balakum</strong>{" "}
                  (Qu&apos;Allah vous guide et ameliore votre condition). Cet
                  echange est un droit du musulman sur son frere, fonde sur des
                  hadiths authentiques de Bukhari et Muslim.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : L'eternuement en islam */}
              {/* ============================================ */}
              <section id="eternuement-sunna" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;eternuement : une benediction en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Contrairement a ce que l&apos;on pourrait penser,
                  l&apos;eternuement n&apos;est pas un simple reflexe physique
                  sans importance dans la tradition islamique. Le Prophete
                  Muhammad (paix et salut sur lui) a enseigne que{" "}
                  <strong>l&apos;eternuement est aime d&apos;Allah</strong>,
                  car il temoigne d&apos;une grace divine : le corps se libere
                  de ce qui le gene, procurant au croyant un soulagement
                  physique et un renouveau de vitalite. C&apos;est pourquoi
                  l&apos;islam a codifie des invocations specifiques pour
                  accompagner ce moment.
                </p>

                <HadithCard
                  arabic="إن الله يحب العطاس ويكره التثاؤب"
                  text="Allah aime l'eternuement et deteste le baillement."
                  source="Rapporte par al-Bukhari (6223)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith etablit une distinction claire entre
                  l&apos;eternuement et le baillement. L&apos;eternuement est
                  aime car il resulte d&apos;une energie et d&apos;une vivacite
                  du corps, tandis que le baillement est lie a la paresse et a
                  la lourdeur. Les savants expliquent que l&apos;eternuement
                  peut etre le signe d&apos;une legerete de l&apos;ame et
                  d&apos;une disposition a l&apos;adoration, d&apos;ou le fait
                  qu&apos;Allah l&apos;aime.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam a fait de l&apos;eternuement une occasion
                  d&apos;invoquer Allah et de renforcer les liens fraternels
                  entre musulmans. Le Prophete (paix et salut sur lui) a
                  integre la <strong>doua de l&apos;eternuement</strong> parmi
                  les droits du musulman sur son frere, elevant ainsi un acte
                  corporel quotidien au rang d&apos;acte d&apos;adoration et de
                  fraternite. Cette dimension spirituelle transforme chaque
                  eternuement en une opportunite de dhikr (rappel d&apos;Allah)
                  et de du&apos;a (invocation).
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;eternuement est un bienfait :</strong>{" "}
                      il permet au corps d&apos;expulser les impuretes et
                      procure un soulagement physique immediat. C&apos;est une
                      grace d&apos;Allah qui merite la gratitude.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un acte de dhikr :</strong> dire Al-hamdulillah
                      apres l&apos;eternuement transforme un reflexe corporel
                      en un moment de rappel et de gratitude envers Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un droit du musulman :</strong> repondre
                      &laquo;&nbsp;Yarhamuk Allah&nbsp;&raquo; a celui qui
                      eternue fait partie des six droits du musulman sur son
                      frere, comme le rapporte le hadith de Muslim.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
                    alt="Pelerins en invocation devant la Kaaba illustrant les douas et invocations en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : La doua de celui qui eternue */}
              {/* ============================================ */}
              <section id="doua-celui-qui-eternue" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de celui qui eternue : Al-hamdulillah
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La premiere etape de l&apos;echange d&apos;invocations lie a
                  l&apos;eternuement incombe a celui qui eternue lui-meme. Des
                  qu&apos;il eternue, le musulman doit prononcer la formule de
                  louange a Allah. C&apos;est un acte de reconnaissance envers
                  le Createur pour le bienfait de l&apos;eternuement et pour la
                  sante en general.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Al-hamdulillah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Louange a Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    A prononcer immediatement apres l&apos;eternuement
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Certains savants rapportent qu&apos;il est egalement permis
                  de dire une forme plus complete de cette louange :
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Al-hamdulillahi Rabbil-&apos;alamin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Louange a Allah, Seigneur des mondes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Forme complete rapportee dans certaines versions
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix et salut sur lui) a clairement enseigne
                  que celui qui eternue et ne loue pas Allah ne merite pas
                  qu&apos;on invoque la misericorde pour lui. C&apos;est la
                  condition prealable pour beneficier de la reponse
                  &laquo;&nbsp;Yarhamuk Allah&nbsp;&raquo;. Le hadith rapporte
                  par Abu Hurayra (qu&apos;Allah l&apos;agree) dans Sahih
                  al-Bukhari etablit cette regle de maniere explicite.
                </p>

                <HadithCard
                  arabic="إذا عطس أحدكم فليقل الحمد لله، وليقل له أخوه أو صاحبه يرحمك الله، فإذا قال له يرحمك الله فليقل يهديكم الله ويصلح بالكم"
                  text="Lorsque l'un d'entre vous eternue, qu'il dise : Al-hamdulillah. Et que son frere ou compagnon lui dise : Yarhamuk Allah. Et lorsqu'il lui dit Yarhamuk Allah, qu'il reponde : Yahdikumul-lahu wa yuslihu balakum."
                  source="Rapporte par al-Bukhari (6224)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondateur detaille les trois etapes de
                  l&apos;echange complet lie a l&apos;eternuement. Il montre
                  comment l&apos;islam a transforme un acte physiologique en
                  un veritable rituel de fraternite et d&apos;invocations
                  mutuelles. Chaque participant dans cet echange invoque le
                  bien pour l&apos;autre : la louange, la misericorde, la
                  guidee et l&apos;amelioration de la condition.
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
              {/* SECTION 3 : La reponse Yarhamuk Allah */}
              {/* ============================================ */}
              <section id="reponse-yarhamukallah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La reponse a celui qui eternue : Yarhamuk Allah
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Lorsqu&apos;un musulman eternue et prononce
                  &laquo;&nbsp;Al-hamdulillah&nbsp;&raquo;, toute personne qui
                  l&apos;entend a le devoir de lui repondre par une invocation
                  de misericorde. Cette reponse fait partie des{" "}
                  <strong>droits du musulman sur son frere</strong> et constitue
                  selon la majorite des savants une obligation communautaire
                  (fard kifaya) : si une personne repond, les autres en sont
                  dispensees ; mais si personne ne repond, tous sont fautifs.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    يَرْحَمُكَ اللَّهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Yarhamuk Allah (a un homme) / Yarhamuki Allah (a une femme)
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Qu&apos;Allah te fasse misericorde&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    A dire a celui qui eternue et prononce Al-hamdulillah
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix et salut sur lui) a insiste sur
                  l&apos;importance de cette reponse en l&apos;incluant parmi
                  les six droits fondamentaux du musulman. Dans un hadith
                  celebre rapporte par Muslim, il enumere ces droits dont le
                  tashmit (le fait de souhaiter la misericorde a celui qui
                  eternue).
                </p>

                <HadithCard
                  arabic="حق المسلم على المسلم ست: إذا لقيته فسلم عليه، وإذا دعاك فأجبه، وإذا استنصحك فانصح له، وإذا عطس فحمد الله فسمته، وإذا مرض فعده، وإذا مات فاتبعه"
                  text="Les droits du musulman sur le musulman sont au nombre de six : lorsque tu le rencontres, salue-le ; lorsqu'il t'invite, reponds a son invitation ; lorsqu'il te demande conseil, conseille-le ; lorsqu'il eternue et loue Allah, invoque la misericorde pour lui ; lorsqu'il est malade, rends-lui visite ; et lorsqu'il meurt, suis son cortege funebre."
                  source="Rapporte par Muslim (2162)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Un point essentiel a souligner : la reponse
                  &laquo;&nbsp;Yarhamuk Allah&nbsp;&raquo; n&apos;est due que
                  si la personne qui eternue a dit
                  &laquo;&nbsp;Al-hamdulillah&nbsp;&raquo;. Si elle eternue
                  sans louer Allah, on ne lui repond pas par la formule de
                  misericorde. Les savants expliquent que c&apos;est la louange
                  a Allah qui declenche le droit a la reponse. C&apos;est un
                  encouragement a toujours se souvenir d&apos;Allah et a Le
                  louer en toute circonstance.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-sourate-invocations-doua-islam.jpg"
                    alt="Coran ouvert sur une sourate illustrant les invocations et douas en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : La replique Yahdikumullah */}
              {/* ============================================ */}
              <section id="replique-yahdikumullah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La replique finale : Yahdikumul-lahu wa yuslihu balakum
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;echange ne s&apos;arrete pas a la reponse
                  &laquo;&nbsp;Yarhamuk Allah&nbsp;&raquo;. Celui qui a eternue,
                  apres avoir recu cette invocation de misericorde, complete le
                  cycle en adressant a son tour une doua pour ceux qui lui ont
                  souhaite la misericorde. C&apos;est la beaute de
                  l&apos;islam : chaque bienfait est rendu par un bienfait, et
                  chaque invocation appelle une invocation en retour.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Yahdikumul-lahu wa yuslihu balakum
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Qu&apos;Allah vous guide et ameliore votre
                    condition&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Replique de celui qui a eternue apres avoir recu
                    &laquo;&nbsp;Yarhamuk Allah&nbsp;&raquo;
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette troisieme formule complete admirablement le cycle des
                  invocations. La personne qui a eternue commence par louer
                  Allah (Al-hamdulillah), son frere lui souhaite la misericorde
                  (Yarhamuk Allah), et en retour, elle lui souhaite la guidee
                  et l&apos;amelioration de sa condition (Yahdikumul-lahu wa
                  yuslihu balakum). Ainsi, les trois grandes benedictions sont
                  echangees : la louange, la misericorde et la guidee.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de l&apos;islam soulignent la sagesse de cet
                  echange. La personne qui eternue remercie Allah pour le
                  bienfait de l&apos;eternuement. Son frere, en la voyant
                  reconnaissante envers Allah, invoque la misericorde pour elle.
                  Et en retour, celui qui a eternue recompense cette gentillesse
                  par une invocation pour la guidee, qui est le plus grand des
                  bienfaits. Cet enchainement cree un cercle vertueux de{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua en islam
                  </Link>{" "}
                  et de bienveillance mutuelle.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Etape 1 :</strong> celui qui eternue dit
                      &laquo;&nbsp;Al-hamdulillah&nbsp;&raquo; (louange et
                      gratitude).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Etape 2 :</strong> l&apos;entourage repond
                      &laquo;&nbsp;Yarhamuk Allah&nbsp;&raquo; (invocation de
                      misericorde).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Etape 3 :</strong> celui qui a eternue replique
                      &laquo;&nbsp;Yahdikumul-lahu wa yuslihu
                      balakum&nbsp;&raquo; (invocation de guidee).
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Les adab de l'eternuement */}
              {/* ============================================ */}
              <section id="adab-eternuement" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les adab (bienseances) de l&apos;eternuement en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam ne se limite pas a prescrire des invocations
                  pour l&apos;eternuement. Il enseigne egalement un ensemble de
                  regles de bienseance (adab) qui entourent cet acte. Ces adab
                  temoignent de la globalite de l&apos;islam, qui encadre
                  chaque aspect de la vie du croyant, y compris les gestes les
                  plus quotidiens.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Couvrir sa bouche et son nez
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophete (paix et salut sur lui) enseignait qu&apos;il
                  faut couvrir son visage lors de l&apos;eternuement. Abu
                  Hurayra rapporte que le Prophete couvrait son visage avec sa
                  main ou son vetement quand il eternuait. Ce geste releve de
                  la consideration pour les autres et de l&apos;hygiene, un
                  principe que la medecine moderne a confirme des siecles plus
                  tard.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا عَطَسَ وَضَعَ يَدَهُ أَوْ ثَوْبَهُ عَلَى فِيهِ وَخَفَضَ بِهَا صَوْتَهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Kana Rasulullahi sallAllahu
                    &apos;alayhi wa sallam idha &apos;atasa wada&apos;a yadahu
                    aw thawbahu &apos;ala fihi wa khafada biha sawtah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Le Messager d&apos;Allah (paix et salut sur
                    lui), lorsqu&apos;il eternuait, placait sa main ou son
                    vetement sur sa bouche et attenuait le son&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par Abu Dawud (5029) et at-Tirmidhi (2745)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Attenuer le son de l&apos;eternuement
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le meme hadith mentionne que le Prophete (paix et salut sur
                  lui) attenuait le son de son eternuement. Eternuer de maniere
                  bruyante et exageree est contraire a la bienseance islamique.
                  Le musulman cherche a ne pas deranger les personnes autour de
                  lui et a faire preuve de discretion. Cette retenue n&apos;est
                  pas une suppression de l&apos;eternuement (ce qui serait
                  nocif pour la sante), mais un effort pour en maitriser le
                  volume.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Ne pas retenir l&apos;eternuement
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Si l&apos;islam recommande d&apos;attenuer le son, il ne
                  demande en aucun cas de retenir l&apos;eternuement. Les
                  medecins modernes confirment que retenir un eternuement peut
                  etre dangereux (risque de lesion des tympans, des vaisseaux
                  sanguins ou meme des cotes). L&apos;eternuement etant aime
                  d&apos;Allah, il convient de le laisser se produire
                  naturellement tout en observant les bienseances.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Louer Allah immediatement
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La louange a Allah (Al-hamdulillah) doit etre prononcee des
                  la fin de l&apos;eternuement, sans delai. Retarder la
                  louange peut faire perdre le droit a la reponse
                  &laquo;&nbsp;Yarhamuk Allah&nbsp;&raquo;. Le musulman
                  s&apos;habitue ainsi a etre constamment dans le rappel
                  d&apos;Allah, meme dans les actes les plus banals de la vie
                  quotidienne, comme le recommandent egalement la{" "}
                  <Link href="/doua-avant-manger-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua avant de manger
                  </Link>{" "}
                  ou la{" "}
                  <Link href="/doua-sortir-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua en sortant de la maison
                  </Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Eternuer plus de 3 fois */}
              {/* ============================================ */}
              <section id="plus-de-trois-fois" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Eternuer plus de trois fois : quelle est la regle ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La question de l&apos;eternuement repete est un point de
                  jurisprudence islamique que le Prophete (paix et salut sur
                  lui) a aborde avec precision. Que faire lorsqu&apos;une
                  personne eternue de nombreuses fois de suite ? La reponse est
                  clairement etablie par la Sunna.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix et salut sur lui) a enseigne que
                  l&apos;on repond <strong>&laquo;&nbsp;Yarhamuk
                  Allah&nbsp;&raquo; pour les trois premiers
                  eternuements</strong>. Au-dela de trois, la personne est
                  consideree comme enrhumee (mazkum) et on ne repete plus la
                  formule de tashmit. A la place, on peut invoquer la guerison
                  et la sante pour elle.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    إِذَا عَطَسَ أَحَدُكُمْ فَلْيُشَمِّتْهُ جَلِيسُهُ فَإِذَا زَادَ عَلَى ثَلاَثٍ فَهُوَ مَزْكُومٌ وَلاَ يُشَمَّتُ بَعْدَ ثَلاَثٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonetique :</strong> Idha &apos;atasa ahadukum
                    falyushamithu jalisuhu, fa idha zada &apos;ala thalathin
                    fa huwa mazkumun wa la yushammatu ba&apos;da thalath
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Lorsque l&apos;un d&apos;entre vous eternue,
                    que son compagnon lui dise &laquo;&nbsp;Yarhamuk
                    Allah&nbsp;&raquo;. Mais s&apos;il eternue plus de trois
                    fois, c&apos;est qu&apos;il est enrhume, et on ne lui dit
                    plus apres la troisieme fois&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporte par Abu Dawud (5034), authentifie par al-Albani
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent la sagesse derriere cette regle.
                  Les trois premiers eternuements peuvent etre de nature
                  normale et benefique, mais au-dela, ils indiquent
                  generalement un etat de maladie (rhume, allergie, etc.).
                  Dans ce cas, plutot que de repeter mecaniquement
                  &laquo;&nbsp;Yarhamuk Allah&nbsp;&raquo;, il est plus
                  pertinent d&apos;invoquer la guerison pour la personne
                  en disant par exemple &laquo;&nbsp;Qu&apos;Allah te
                  guerisse&nbsp;&raquo; ou &laquo;&nbsp;Qu&apos;Allah te
                  accorde la sante&nbsp;&raquo;.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>1er, 2e et 3e eternuement :</strong> on repond
                      normalement &laquo;&nbsp;Yarhamuk Allah&nbsp;&raquo; a
                      chaque fois.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>A partir du 4e eternuement :</strong> on ne dit
                      plus &laquo;&nbsp;Yarhamuk Allah&nbsp;&raquo; mais on
                      peut invoquer la guerison pour la personne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Celui qui eternue :</strong> il continue de dire
                      &laquo;&nbsp;Al-hamdulillah&nbsp;&raquo; apres chaque
                      eternuement, meme au-dela de trois.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Situations particulieres */}
              {/* ============================================ */}
              <section id="situations-particulieres" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Situations particulieres liees a l&apos;eternuement
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La jurisprudence islamique aborde de nombreuses situations
                  specifiques concernant l&apos;eternuement. Les savants ont
                  detaille les regles applicables dans differents contextes
                  pour que le musulman sache comment reagir en toute
                  circonstance.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Eternuer pendant la priere (salat)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Si un musulman eternue pendant la priere, il dit
                  &laquo;&nbsp;Al-hamdulillah&nbsp;&raquo; en lui-meme ou a
                  voix basse, sans que cela n&apos;invalide sa priere. Les
                  personnes priant autour de lui ne doivent pas repondre
                  &laquo;&nbsp;Yarhamuk Allah&nbsp;&raquo; pendant la salat.
                  La majorite des savants considerent que repondre a voix
                  haute pendant la priere invalide celle-ci, car cette parole
                  est adressee a un etre humain et non a Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Eternuer pendant le khutba (sermon du vendredi)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  L&apos;avis predominant parmi les savants est que l&apos;on
                  peut repondre &laquo;&nbsp;Yarhamuk Allah&nbsp;&raquo;
                  pendant le sermon du vendredi. Cependant, certains savants
                  hanafites et shafi&apos;ites recommandent de s&apos;en
                  abstenir pour ne pas troubler l&apos;ecoute du sermon.
                  L&apos;imam an-Nawawi a rapporte que la reponse est permise,
                  car il s&apos;agit d&apos;un acte de Sunna qui ne releve
                  pas de la parole vaine interdite pendant le khutba.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Repondre a un non-musulman qui eternue
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophete (paix et salut sur lui) repondait aux
                  non-musulmans qui eternuaient en leur souhaitant la guidee.
                  Abu Dawud rapporte dans son Sunan que le Prophete disait aux
                  non-musulmans qui eternuaient :
                  &laquo;&nbsp;Yahdikumul-lahu wa yuslihu balakum&nbsp;&raquo;
                  (Qu&apos;Allah vous guide et ameliore votre condition).
                  C&apos;est un acte de courtoisie et une occasion de
                  da&apos;wa (invitation a l&apos;islam) par le bon
                  comportement.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Eternuer en etant seul
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Meme en l&apos;absence d&apos;autres personnes, le musulman
                  qui eternue doit dire
                  &laquo;&nbsp;Al-hamdulillah&nbsp;&raquo;. C&apos;est un
                  acte de gratitude envers Allah qui ne depend pas de la
                  presence d&apos;un auditoire. La louange a Allah est un
                  droit du Createur, que l&apos;on soit seul ou en compagnie.
                  Il s&apos;agit d&apos;un rappel constant de la presence
                  divine et de la reconnaissance du bienfait accorde.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Eternuer aux toilettes
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Les savants ont discute du cas de l&apos;eternuement aux
                  toilettes. L&apos;avis le plus repandu est que la personne
                  loue Allah dans son coeur sans prononcer la formule a voix
                  haute, car les lieux d&apos;aisance ne sont pas propices a
                  la mention du nom d&apos;Allah. Cette regle s&apos;apparente
                  a celle de la{" "}
                  <Link href="/doua-toilettes-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua en entrant aux toilettes
                  </Link>
                  , qui se prononce avant d&apos;y entrer.
                </p>
              </section>

              {/* Affiliate Form avant FAQ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre vos douas"
                description="Maitrisez la langue du Coran et comprenez les invocations prophetiques dans leur langue originale. Des formations en ligne adaptees a votre niveau."
                preselect="arabe"
              />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>

              {/* ============================================ */}
              {/* Maillage interne */}
              {/* ============================================ */}
              <section className="mt-16">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Decouvrez d&apos;autres douas du quotidien
                </h2>
                <p className="mt-4 leading-relaxed text-foreground">
                  La doua de l&apos;eternuement fait partie des nombreuses
                  invocations que le musulman prononce au quotidien.
                  L&apos;islam encadre chaque moment de la journee par une
                  doua specifique, transformant les actes les plus banals en
                  occasions de se rapprocher d&apos;Allah. Decouvrez notre
                  guide complet sur la{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua en islam
                  </Link>{" "}
                  ainsi que les articles suivants :
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <Link href="/doua-avant-manger-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                      Doua avant de manger en islam
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <Link href="/doua-sortir-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                      Doua en sortant de la maison en islam
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <Link href="/doua-miroir-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                      Doua du miroir en islam
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <Link href="/doua-toilettes-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                      Doua des toilettes en islam
                    </Link>
                  </li>
                </ul>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
