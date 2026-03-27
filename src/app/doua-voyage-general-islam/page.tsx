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
    "Doua du voyage en islam : invocations complètes en arabe, phonétique et traduction",
  description:
    "Découvrez la doua du voyage en islam : invocations authentiques du safar en arabe avec phonétique et traduction française, hadiths sur le voyageur, doua en montant dans le véhicule, au retour et pour la protection en voyage.",
  openGraph: {
    title:
      "Doua du voyage en islam : invocations complètes en arabe, phonétique et traduction",
    description:
      "Toutes les douas du voyage en islam : invocations prophétiques du safar, textes en arabe, phonétique et traduction. Protégez-vous durant vos déplacements grâce aux invocations authentiques.",
    url: "https://www.islamreligion.fr/doua-voyage-general-islam",
    images: [
      {
        url: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-voyage-general-islam",
  },
};

const tocItems = [
  { id: "importance-doua-voyage", label: "Importance de la doua du voyage" },
  { id: "doua-principale-safar", label: "La doua principale du voyage (safar)" },
  { id: "doua-monter-vehicule", label: "Doua en montant dans le véhicule" },
  { id: "douas-protection-voyage", label: "Douas de protection en voyage" },
  { id: "doua-retour-voyage", label: "Doua au retour du voyage" },
  { id: "adab-voyage-islam", label: "Les adab (bienséances) du voyage" },
  { id: "moments-exaucement-voyage", label: "Moments d'exaucement du voyageur" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua du voyage en islam ?",
    answer:
      "La doua principale du voyage en islam est l&apos;invocation du safar rapportée par Muslim : « Allahu Akbar, Allahu Akbar, Allahu Akbar. Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun. Allahumma inna nas&apos;aluka fi safarina hadha al-birra wat-taqwa, wa minal-&apos;amali ma tarda. Allahumma hawwin &apos;alayna safarana hadha watwi &apos;anna bu&apos;dah... ». Cette invocation comprend la glorification d&apos;Allah, la demande de piété et de facilité durant le voyage.",
  },
  {
    question: "Quand faut-il réciter la doua du voyage ?",
    answer:
      "La doua du voyage se récite au moment de monter dans le moyen de transport (voiture, avion, bateau, train). Le Prophète (paix et salut sur lui) la prononçait en s&apos;installant sur sa monture. Il est recommandé de commencer par le takbir (Allahu Akbar) trois fois, puis de réciter l&apos;invocation complète du safar.",
  },
  {
    question: "La doua du voyageur est-elle toujours exaucée ?",
    answer:
      "Oui, selon un hadith rapporté par Abou Daoud et at-Tirmidhi, la doua du voyageur fait partie des trois invocations qui ne sont pas rejetées par Allah, avec celle du jeûneur et celle du parent pour son enfant. Le voyageur bénéficie d&apos;un statut privilégié car il est dans une situation de vulnérabilité et de soumission à Allah.",
  },
  {
    question: "Peut-on faire la doua du voyage en français ?",
    answer:
      "Les savants autorisent de faire des invocations en français ou dans sa langue maternelle en dehors de la prière rituelle. Toutefois, il est fortement recommandé d&apos;apprendre les formulations en arabe, car ce sont les paroles exactes du Prophète (paix et salut sur lui) et elles portent une bénédiction particulière. On peut combiner les deux : réciter en arabe puis invoquer en français pour ses besoins personnels.",
  },
  {
    question: "Quelle doua dire en montant dans une voiture ou un avion ?",
    answer:
      "En montant dans tout moyen de transport, on dit : « Bismillah. Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun » (Gloire à Celui qui a mis ceci à notre service alors que nous n&apos;étions pas capables de le dominer, et c&apos;est vers notre Seigneur que nous retournerons). Cette invocation est tirée du Coran (sourate Az-Zukhruf, 43:13-14).",
  },
  {
    question: "Que dit-on au retour d'un voyage en islam ?",
    answer:
      "Au retour du voyage, le Prophète (paix et salut sur lui) disait : « Ayibuna, ta&apos;ibuna, &apos;abiduna, li Rabbina hamidun » (Nous revenons repentants, adorateurs de notre Seigneur et Le louant). Il répétait cette formule à chaque montée lors du retour, ajoutant ainsi la gratitude et le repentir à son retour.",
  },
  {
    question: "Existe-t-il une doua pour confier sa famille avant un voyage ?",
    answer:
      "Oui, le Prophète (paix et salut sur lui) disait à celui qui partait en voyage : « Astawdi&apos;ullah dinaka wa amanataka wa khawatima &apos;amalik » (Je confie à Allah ta religion, ce qui t&apos;est confié et tes dernières actions). On peut aussi invoquer Allah pour la protection de sa famille restée au foyer en disant : « Astawdi&apos;ukumullah alladhi la tadi&apos;u wada&apos;i&apos;uh ».",
  },
  {
    question: "Combien de douas différentes existe-t-il pour le voyage ?",
    answer:
      "La Sunna rapporte plusieurs invocations liées au voyage : la doua principale du safar, la doua en montant dans le véhicule, la doua à la halte, la doua au retour, la doua pour confier ses proches, et la doua lorsqu&apos;on arrive dans une nouvelle ville. Au total, les recueils de hadiths comptent une dizaine d&apos;invocations spécifiques au voyage, couvrant chaque étape du déplacement.",
  },
];

export default function DouaVoyageGeneralIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-voyage-general-islam/#article",
        headline:
          "Doua du voyage en islam : invocations complètes en arabe, phonétique et traduction",
        description:
          "Découvrez la doua du voyage en islam : invocations authentiques du safar en arabe avec phonétique et traduction française, hadiths sur le voyageur et conseils pratiques.",
        image: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        datePublished: "2026-03-16",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-voyage-general-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-voyage-general-islam/#breadcrumb",
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
            name: "Doua du voyage",
            item: "https://www.islamreligion.fr/doua-voyage-general-islam",
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
          title="Doua du voyage en islam : les invocations authentiques pour chaque déplacement"
          subtitle="Toutes les invocations prophétiques du voyage (safar) en arabe, phonétique et traduction française. Protégez-vous et vos proches à chaque déplacement."
          imageSrc="/images/doua-mains-rayons-motifs-islamiques.jpg"
          imageAlt="Mains levées en invocation doua du voyage avec rayons de lumière et motifs islamiques"
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
                <span className="text-foreground">Doua du voyage</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La doua du voyage (safar) est l&apos;une des invocations les
                  plus importantes en islam. Le Prophète (paix et salut sur lui)
                  ne partait jamais en déplacement sans réciter les invocations
                  du voyageur. Mieux encore, la doua du voyageur fait partie des
                  trois invocations qui ne sont jamais rejetées par Allah. Cet
                  article rassemble toutes les douas authentiques liées au
                  voyage : en montant dans le véhicule, durant le trajet, pour
                  la protection et au retour.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance de la doua du voyage */}
              {/* ============================================ */}
              <section id="importance-doua-voyage" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Pourquoi la doua du voyage est-elle si importante en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le voyage occupe une place particulière dans la spiritualité
                  islamique. Lorsqu&apos;un musulman quitte son foyer et
                  s&apos;éloigne de sa famille, il se trouve dans un état de
                  vulnérabilité qui le rapproche naturellement d&apos;Allah. Ce
                  contexte singulier confère au voyageur un statut privilégié
                  dans l&apos;exaucement des invocations. Le Prophète (paix et
                  salut sur lui) a souligné ce privilège dans plusieurs hadiths
                  authentiques.
                </p>

                <HadithCard
                  arabic="ثلاث دعوات مستجابات لا شك فيهن: دعوة المظلوم، ودعوة المسافر، ودعوة الوالد على ولده"
                  text="Trois invocations sont exaucées sans aucun doute : l'invocation de l'opprimé, l'invocation du voyageur et l'invocation du parent pour son enfant."
                  source="Rapporté par Abou Daoud (1536) et at-Tirmidhi (1905)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith place la doua du voyageur au même rang que celle de
                  l&apos;opprimé, dont la puissance est unanimement reconnue par
                  les savants de l&apos;islam. Le voyageur, en quittant le
                  confort de son foyer et en s&apos;exposant aux aléas du
                  déplacement, manifeste une forme de tawakkul (confiance en
                  Allah) qui ouvre les portes de l&apos;exaucement. C&apos;est
                  pourquoi les compagnons du Prophète (paix et salut sur lui)
                  demandaient souvent aux voyageurs d&apos;invoquer Allah en
                  leur faveur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En islam, le voyage n&apos;est jamais un acte anodin. Que ce
                  soit pour le pèlerinage (hajj ou &apos;umra), la quête de
                  science, le commerce licite ou simplement rendre visite à ses
                  proches, chaque déplacement est une occasion de se rapprocher
                  d&apos;Allah. Le Prophète (paix et salut sur lui) a codifié un
                  ensemble d&apos;invocations couvrant chaque étape du voyage :
                  le départ, le trajet, les haltes et le retour. Ces douas
                  constituent un véritable bouclier spirituel pour le voyageur
                  musulman.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un statut privilégié :</strong> la doua du voyageur
                      est garantie d&apos;être exaucée selon le hadith
                      prophétique, ce qui en fait l&apos;un des moments les plus
                      précieux pour invoquer Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une protection spirituelle :</strong> les
                      invocations du voyage protègent le voyageur des dangers
                      physiques et spirituels, le plaçant sous la sauvegarde
                      d&apos;Allah tout au long de son déplacement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une Sunna constante :</strong> le Prophète (paix et
                      salut sur lui) n&apos;a jamais négligé ces invocations lors
                      de ses déplacements, en faisant une pratique régulière et
                      recommandée pour chaque musulman.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/grande-mosquee-blanche-minarets-islam-architecture.jpg"
                    alt="Grande mosquée blanche avec minarets illustrant la spiritualité du voyage en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua principale du safar */}
              {/* ============================================ */}
              <section id="doua-principale-safar" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua principale du voyage (doua du safar)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua du safar est l&apos;invocation centrale que le
                  Prophète (paix et salut sur lui) récitait systématiquement au
                  début de chaque voyage. Rapportée par Muslim dans son Sahih,
                  cette invocation complète couvre tous les aspects du
                  déplacement : la glorification d&apos;Allah, la demande de
                  piété, la facilitation du trajet et la protection divine.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le compagnon Abdallah ibn Omar (qu&apos;Allah l&apos;agrée)
                  rapporte que le Prophète (paix et salut sur lui), lorsqu&apos;il
                  s&apos;installait sur sa monture pour un voyage, prononçait
                  trois fois le takbir, puis récitait l&apos;invocation
                  suivante :
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ، اللَّهُمَّ إنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا البِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الأَهْلِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالأَهْلِ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun. Allahumma inna nas&apos;aluka fi safarina hadha al-birra wat-taqwa, wa minal-&apos;amali ma tarda. Allahumma hawwin &apos;alayna safarana hadha watwi &apos;anna bu&apos;dah. Allahumma Antas-sahibu fis-safar, wal-khalifatu fil-ahl. Allahumma inni a&apos;udhu bika min wa&apos;tha&apos;is-safar, wa ka&apos;abatil-mandhar, wa su&apos;il-munqalabi fil-mali wal-ahl.
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Gloire à Celui qui a mis ceci à notre service alors que nous n&apos;étions pas capables de le dominer, et c&apos;est vers notre Seigneur que nous retournerons. Ô Allah, nous Te demandons dans ce voyage la piété et la crainte révérencielle, et parmi les oeuvres celles dont Tu es satisfait. Ô Allah, facilite-nous ce voyage et raccourcis-en la distance. Ô Allah, Tu es le Compagnon de voyage et le Remplaçant auprès de la famille. Ô Allah, je cherche refuge auprès de Toi contre les difficultés du voyage, contre un spectacle affligeant et contre un mauvais retour concernant mes biens et ma famille&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (1342)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est remarquable par sa complétude. Elle
                  commence par un verset du Coran (sourate Az-Zukhruf, 43:13-14)
                  qui rappelle que tout moyen de transport est une grâce
                  d&apos;Allah que l&apos;homme ne saurait dominer par sa propre
                  force. Puis elle enchaîne avec quatre demandes essentielles :
                  la piété durant le voyage, la facilitation du trajet,
                  la protection de la famille restée au foyer et le refuge
                  contre les épreuves du déplacement.
                </p>

                <HadithCard
                  arabic="كان رسول الله صلى الله عليه وسلم إذا استوى على بعيره خارجًا إلى سفر كبّر ثلاثًا"
                  text="Lorsque le Messager d'Allah (paix et salut sur lui) s'installait sur sa monture pour partir en voyage, il prononçait trois fois le takbir (Allahu Akbar)."
                  source="Rapporté par Muslim (1342)"
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Doua en montant dans le véhicule */}
              {/* ============================================ */}
              <section id="doua-monter-vehicule" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua en montant dans le véhicule
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant même de réciter la doua complète du safar, le musulman
                  prononce des invocations spécifiques au moment de monter dans
                  son moyen de transport. Cette pratique s&apos;applique à tout
                  véhicule : voiture, avion, bateau, train ou tout autre moyen
                  de déplacement. Le Coran lui-même enseigne cette invocation
                  dans la sourate Az-Zukhruf.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ، الْحَمْدُ لِلَّهِ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Bismillah, al-hamdulillah. Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun.
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Au nom d&apos;Allah, louange à Allah. Gloire à Celui qui a mis ceci à notre service alors que nous n&apos;étions pas capables de le dominer, et c&apos;est vers notre Seigneur que nous retournerons&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Az-Zukhruf (43:13-14) ; rapporté par at-Tirmidhi (3446)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ali ibn Rabi&apos;a rapporte qu&apos;il vit Ali ibn Abi Talib
                  (qu&apos;Allah l&apos;agrée) monter sur sa monture. Lorsqu&apos;il
                  mit le pied à l&apos;étrier, il dit &laquo;&nbsp;Bismillah&nbsp;&raquo;
                  (Au nom d&apos;Allah). Puis, une fois installé, il dit
                  &laquo;&nbsp;Al-hamdulillah&nbsp;&raquo; (Louange à Allah), puis
                  récita le verset de la sourate Az-Zukhruf. Ce comportement
                  illustre la gradation dans l&apos;invocation : on commence par
                  le nom d&apos;Allah, on Le remercie, puis on reconnaît Sa
                  puissance sur toute chose.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ، الْحَمْدُ لِلَّهِ، الْحَمْدُ لِلَّهِ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَكَ اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Al-hamdulillah, al-hamdulillah, al-hamdulillah. Allahu Akbar, Allahu Akbar, Allahu Akbar. Subhanaka Allahumma inni dhalamtu nafsi faghfir li fa innahu la yaghfirudh-dhunuba illa Ant.
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Louange à Allah (3 fois). Allah est le Plus Grand (3 fois). Gloire à Toi, ô Allah, je me suis fait du tort à moi-même, pardonne-moi car nul ne pardonne les péchés si ce n&apos;est Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abou Daoud (2602) et at-Tirmidhi (3446)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que cette invocation combine trois
                  dimensions essentielles : la gratitude envers Allah par la
                  répétition de &laquo;&nbsp;al-hamdulillah&nbsp;&raquo;, la
                  glorification par le takbir, et la demande de pardon. Le
                  voyageur commence ainsi son déplacement en purifiant son coeur,
                  ce qui est la meilleure préparation spirituelle pour tout
                  voyage.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas de protection en voyage */}
              {/* ============================================ */}
              <section id="douas-protection-voyage" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas de protection durant le voyage
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le voyage expose le musulman à des risques variés : accidents
                  de la route, intempéries, fatigue, solitude ou encore
                  tentations. Le Prophète (paix et salut sur lui) a enseigné
                  plusieurs invocations de protection spécifiques au contexte du
                  déplacement. Ces douas constituent un véritable bouclier pour
                  le voyageur croyant.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq.
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Je cherche refuge dans les paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2708)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui qui
                  récite cette invocation en arrivant à une halte ou un lieu
                  d&apos;hébergement sera protégé jusqu&apos;à son départ de cet
                  endroit. Cette doua courte mais puissante est particulièrement
                  recommandée pour le voyageur qui fait escale dans un lieu
                  inconnu.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ الْقَرْيَةِ وَخَيْرَ أَهْلِهَا وَخَيْرَ مَا فِيهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ أَهْلِهَا وَشَرِّ مَا فِيهَا
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Allahumma inni as&apos;aluka khayra hadhihil-qaryah wa khayra ahlihaa wa khayra ma fiha, wa a&apos;udhu bika min sharrihaa wa sharri ahlihaa wa sharri ma fiha.
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Ô Allah, je Te demande le bien de cette ville et le bien de ses habitants et le bien de ce qu&apos;elle contient, et je cherche refuge auprès de Toi contre son mal, le mal de ses habitants et le mal de ce qu&apos;elle contient&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par an-Nasa&apos;i dans &apos;Amal al-Yawm wal-Laylah (543), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est récitée lorsque le voyageur aperçoit une
                  ville ou un village dans lequel il souhaite entrer. Elle
                  englobe une demande de bien dans tous les aspects du lieu
                  visité et une protection contre tout mal potentiel. Les
                  compagnons récitaient cette doua régulièrement lors de leurs
                  déplacements, que ce soit pour le commerce, la da&apos;wa
                  ou les expéditions.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
                    alt="Intérieur de mosquée avec arches et lumière symbolisant la protection divine durant le voyage"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <HadithCard
                  arabic="إذا نزل أحدكم منزلاً فليقل: أعوذ بكلمات الله التامات من شر ما خلق، فإنه لا يضره شيء حتى يرتحل منه"
                  text="Lorsque l'un de vous descend à un endroit (fait halte), qu'il dise : 'Je cherche refuge dans les paroles parfaites d'Allah contre le mal de ce qu'Il a créé', rien ne lui nuira alors jusqu'à ce qu'il quitte cet endroit."
                  source="Rapporté par Muslim (2708)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua au retour du voyage */}
              {/* ============================================ */}
              <section id="doua-retour-voyage" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua au retour du voyage
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le retour de voyage est aussi un moment béni qui mérite ses
                  propres invocations. Le Prophète (paix et salut sur lui) ne
                  rentrait jamais d&apos;un déplacement sans invoquer Allah et
                  exprimer sa gratitude pour le voyage accompli en sécurité. La
                  Sunna nous enseigne une formule spécifique pour clôturer
                  spirituellement tout déplacement.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Ayibuna, ta&apos;ibuna, &apos;abiduna, li Rabbina hamidun.
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Nous revenons repentants, adorateurs de notre Seigneur et Le louant&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (1342)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) ajoutait cette formule à
                  la doua du safar lors du retour. À chaque montée (colline ou
                  relief), il prononçait le takbir et récitait cette invocation.
                  Elle exprime quatre réalités spirituelles : le retour
                  physique au foyer, le repentir envers Allah pour les
                  manquements commis durant le voyage, la confirmation de
                  l&apos;adoration exclusive d&apos;Allah et la louange pour
                  Sa protection tout au long du déplacement.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est également recommandé au voyageur de prier deux
                  rak&apos;at à la mosquée avant de rentrer chez lui, suivant
                  la pratique du Prophète (paix et salut sur lui) rapportée par
                  Ka&apos;b ibn Malik (qu&apos;Allah l&apos;agrée). Cette prière
                  de retour symbolise la gratitude envers Allah pour un voyage
                  accompli en sécurité et marque la transition entre le statut
                  de voyageur et la reprise de la vie quotidienne.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le takbir au retour :</strong> le Prophète
                      prononçait &laquo;&nbsp;Allahu Akbar&nbsp;&raquo; à chaque
                      montée lors du retour, manifestant la grandeur d&apos;Allah
                      qui l&apos;a protégé.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La prière à la mosquée :</strong> deux rak&apos;at
                      à la mosquée avant de rentrer au foyer est une Sunna
                      confirmée du Prophète (paix et salut sur lui).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le partage des cadeaux :</strong> offrir des
                      souvenirs ou des présents à ses proches au retour est une
                      pratique louable qui renforce les liens familiaux et
                      communautaires. Pour approfondir les{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                      consultez notre guide complet.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Adab du voyage */}
              {/* ============================================ */}
              <section id="adab-voyage-islam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les adab (bienséances) du voyage en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des invocations, l&apos;islam enseigne un ensemble de
                  bienséances (adab) qui accompagnent le voyageur tout au long
                  de son déplacement. Ces règles de conduite visent à garantir
                  la sécurité, la spiritualité et le bien-être du voyageur et de
                  ceux qu&apos;il laisse derrière lui.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Consulter Allah avant le départ (istikhara)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Avant tout voyage important, il est recommandé
                        d&apos;accomplir la{" "}
                        <Link href="/doua-istikhara-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">prière de consultation (istikhara)</Link>{" "}
                        pour demander à Allah de guider vers le meilleur choix.
                        Cette pratique ancre le voyage dans la soumission à la
                        volonté divine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Voyager en groupe plutôt que seul
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a déconseillé de
                        voyager seul et recommandé d&apos;être au moins trois
                        personnes, en désignant un responsable du groupe (amir).
                        Cette recommandation vise la sécurité et l&apos;entraide
                        durant le déplacement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Faire ses adieux et demander des douas
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il est Sunna de saluer ses proches avant le départ et de
                        leur demander d&apos;invoquer en sa faveur. De même, on
                        confie sa famille à Allah en récitant les invocations
                        appropriées. Ce rituel renforce les liens et place le
                        voyage sous la protection divine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Profiter du voyage pour multiplier les douas
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Puisque la doua du voyageur est exaucée, il est sage de
                        profiter de ce statut privilégié pour invoquer
                        abondamment, non seulement pour soi-même mais aussi pour
                        ses proches, la communauté musulmane et l&apos;humanité
                        tout entière.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas oublier les prières en voyage
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;islam accorde des facilités au voyageur concernant
                        la prière : le raccourcissement (qasr) des prières de
                        quatre rak&apos;at à deux et le regroupement (jam&apos;)
                        de certaines prières. Ces concessions montrent la
                        miséricorde d&apos;Allah envers le voyageur tout en
                        maintenant le lien spirituel.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Moments d'exaucement */}
              {/* ============================================ */}
              <section id="moments-exaucement-voyage" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Moments propices pour l&apos;exaucement de la doua du voyageur
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le voyageur bénéficie déjà d&apos;un statut privilégié pour
                  l&apos;exaucement de ses invocations. Cependant, combiner ce
                  statut avec d&apos;autres moments favorables multiplie encore
                  davantage les chances de voir ses douas acceptées. Les savants
                  recommandent de profiter de ces instants bénis durant le
                  voyage.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le dernier tiers de la nuit
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Allah descend au ciel le plus proche durant le dernier
                      tiers de la nuit et dit : &laquo;&nbsp;Qui M&apos;invoque
                      pour que Je lui réponde&nbsp;?&nbsp;&raquo; Le voyageur qui
                      se réveille à cette heure pour invoquer combine deux
                      privilèges d&apos;exaucement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Durant la prosternation
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Le moment où le serviteur est le plus proche
                      de son Seigneur est lorsqu&apos;il est prosterné.
                      Multipliez-y les invocations&nbsp;&raquo; (Muslim).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le jour du vendredi
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le vendredi contient une heure durant laquelle toute doua
                      est exaucée. Si le voyageur se trouve en déplacement un
                      vendredi, il cumule le privilège du jour béni et celui du
                      voyage.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Lors de la pluie
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a enseigné que la doua
                      est exaucée au moment de la pluie. Le voyageur surpris par
                      la pluie dispose d&apos;un moment précieux pour invoquer.
                      Découvrez la{" "}
                      <Link href="/doua-pluie-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de la pluie</Link>.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En combinant ces moments propices avec le statut de voyageur,
                  le musulman maximise les chances d&apos;exaucement de ses
                  invocations. Il est recommandé de préparer une liste de douas
                  personnelles avant le voyage : demandes pour soi-même, pour
                  sa famille, pour la communauté et pour toute personne qui
                  a sollicité une invocation. Le voyage devient ainsi un moment
                  de connexion intense avec Allah, loin des distractions
                  quotidiennes. Pour découvrir d&apos;autres{" "}
                  <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas de protection en islam</Link>,
                  consultez notre article dédié.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua du voyageur : les invocations du safar"
                  description="Retrouvez le guide détaillé des invocations spécifiques au voyageur avec les formules prophétiques pour chaque étape du déplacement."
                  href="/doua-voyageur-safar-islam"
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
                    href="/doua-voyageur-safar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du voyageur (safar)
                  </Link>
                  <Link
                    href="/doua-protection-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de protection
                  </Link>
                  <Link
                    href="/doua-sortir-maison-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en sortant de la maison
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
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
