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
    "Doua après l'adhan en islam : invocation complète et moment d'exaucement",
  description:
    "Découvrez la doua après l'adhan en islam : texte arabe complet (Allahumma rabba hadhihi ad-da'wati at-tammah), phonétique, traduction, hadiths sur l'intercession du Prophète et le moment béni entre adhan et iqamah.",
  openGraph: {
    title:
      "Doua après l'adhan en islam : invocation complète et moment d'exaucement",
    description:
      "La doua après l'adhan : texte arabe, phonétique, traduction et hadiths authentiques. Découvrez pourquoi ce moment est propice à l'exaucement des invocations.",
    url: "https://www.islamreligion.fr/doua-apres-adhan-islam",
    images: [
      {
        url: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-apres-adhan-islam",
  },
};

const tocItems = [
  { id: "repeter-apres-muezzin", label: "Répéter après le muezzin" },
  { id: "doua-apres-adhan", label: "La doua complète après l'adhan" },
  { id: "intercession-prophete", label: "L'intercession du Prophète" },
  { id: "moment-exaucement", label: "Le moment entre adhan et iqamah" },
  { id: "douas-complementaires", label: "Douas complémentaires à réciter" },
  { id: "conditions-adab", label: "Conditions et convenances (adab)" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua après l'adhan en islam ?",
    answer:
      "La doua principale après l&apos;adhan est : « Allahumma rabba hadhihi ad-da&apos;wati at-tammah, was-salati al-qa&apos;imah, ati Muhammadan al-wasilata wal-fadilah, wab&apos;athhu maqaman mahmudan alladhi wa&apos;adtah » (Seigneur de cet appel parfait et de la prière qui va être accomplie, accorde à Muhammad la wasila et le mérite, et ressuscite-le au rang louable que Tu lui as promis). Ce hadith est rapporté par al-Bukhari.",
  },
  {
    question: "Faut-il répéter les paroles du muezzin pendant l'adhan ?",
    answer:
      "Oui, il est recommandé (sunna) de répéter les paroles du muezzin mot à mot pendant l&apos;adhan. La seule exception concerne les deux « Hayya &apos;ala as-salah » et « Hayya &apos;ala al-falah » où l&apos;on dit à la place « La hawla wa la quwwata illa billah » (il n&apos;y a de force ni de puissance qu&apos;en Allah). Cela est rapporté par Muslim.",
  },
  {
    question: "Pourquoi le moment entre l'adhan et l'iqamah est-il béni ?",
    answer:
      "Le Prophète (paix et salut sur lui) a dit : « La doua entre l&apos;adhan et l&apos;iqamah n&apos;est pas rejetée » (rapporté par Abu Dawud et at-Tirmidhi). Ce moment est donc un temps privilégié d&apos;exaucement où le musulman devrait multiplier les invocations personnelles et les demandes à Allah.",
  },
  {
    question: "Qu'est-ce que la wasila mentionnée dans la doua après l'adhan ?",
    answer:
      "La wasila est un rang élevé au Paradis réservé exclusivement au Prophète Muhammad (paix et salut sur lui). Le Prophète a dit : « La wasila est un rang auprès d&apos;Allah qui ne convient qu&apos;à un seul serviteur, et j&apos;espère être celui-là. Quiconque demande pour moi la wasila, mon intercession lui sera acquise » (rapporté par Muslim). Demander la wasila pour le Prophète après l&apos;adhan est donc un moyen d&apos;obtenir son intercession.",
  },
  {
    question: "Peut-on faire la doua après l'adhan en français ?",
    answer:
      "La doua spécifique après l&apos;adhan (Allahumma rabba hadhihi ad-da&apos;wati at-tammah...) doit être récitée en arabe car c&apos;est un dhikr prescrit. En revanche, les invocations personnelles faites entre l&apos;adhan et l&apos;iqamah peuvent être formulées dans n&apos;importe quelle langue, y compris le français.",
  },
  {
    question: "La doua après l'adhan est-elle obligatoire ou recommandée ?",
    answer:
      "La doua après l&apos;adhan est une sunna fortement recommandée (sunna mu&apos;akkadah), et non une obligation (wajib). Le Prophète (paix et salut sur lui) l&apos;a enseignée et pratiquée régulièrement. La négliger revient à se priver d&apos;une récompense immense, notamment l&apos;intercession du Prophète au Jour du Jugement.",
  },
  {
    question: "Doit-on faire la doua après l'adhan du fajr différemment ?",
    answer:
      "Lors de l&apos;adhan du fajr, le muezzin ajoute « As-salatu khayrun min an-nawm » (la prière est meilleure que le sommeil). L&apos;auditeur répète cette phrase. Pour le reste, la doua après l&apos;adhan du fajr est identique à celle des autres prières. Cependant, le moment du fajr étant particulièrement béni, les savants encouragent à multiplier les invocations à ce moment.",
  },
  {
    question: "Peut-on faire des douas personnelles entre l'adhan et l'iqamah ?",
    answer:
      "Oui, absolument. Le moment entre l&apos;adhan et l&apos;iqamah est un temps d&apos;exaucement confirmé par le hadith authentique. Après avoir récité la doua prescrite après l&apos;adhan, le musulman est fortement encouragé à formuler toutes ses demandes personnelles à Allah : guérison, subsistance, guidée, pardon, etc.",
  },
];

export default function DouaApresAdhanIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-apres-adhan-islam/#article",
        headline:
          "Doua après l'adhan en islam : invocation complète et moment d'exaucement",
        description:
          "Découvrez la doua après l'adhan en islam : texte arabe complet, phonétique, traduction, hadiths sur l'intercession du Prophète et le moment béni entre adhan et iqamah.",
        image: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        datePublished: "2026-03-27",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-apres-adhan-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-apres-adhan-islam/#breadcrumb",
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
            name: "Doua après l'adhan",
            item: "https://www.islamreligion.fr/doua-apres-adhan-islam",
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
          title="Doua après l'adhan en islam : invocation complète et moment d'exaucement"
          subtitle="L'invocation authentique à réciter après l'appel à la prière, avec le texte arabe, la phonétique et la traduction. Un moment béni où la doua n'est pas rejetée."
          imageSrc="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
          imageAlt="Mains levées en doua après l'adhan avec lumière subtile symbolisant le moment d'exaucement en islam"
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
                <span className="text-foreground">Doua après l&apos;adhan</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Après chaque adhan, le musulman est invité à répéter les
                  paroles du muezzin puis à réciter une doua spécifique
                  enseignée par le Prophète (paix et salut sur lui). Cette
                  invocation demande à Allah d&apos;accorder au Prophète Muhammad
                  la wasila (rang élevé au Paradis) et l&apos;intercession
                  (shafa&apos;a). Le moment entre l&apos;adhan et l&apos;iqamah
                  est un temps privilégié où les douas ne sont pas rejetées,
                  ce qui en fait une occasion précieuse à ne pas manquer.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Répéter après le muezzin */}
              {/* ============================================ */}
              <section id="repeter-apres-muezzin" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Répéter les paroles du muezzin pendant l&apos;adhan
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant même de réciter la doua après l&apos;adhan, le musulman
                  doit suivre une sunna importante : répéter les paroles du
                  muezzin au fur et à mesure qu&apos;il les prononce.
                  Cette pratique est un acte d&apos;adoration à part entière,
                  confirmé par plusieurs hadiths authentiques du Prophète
                  (paix et salut sur lui).
                </p>

                <HadithCard
                  arabic="إذا سمعتم المؤذن فقولوا مثل ما يقول المؤذن"
                  text="Lorsque vous entendez le muezzin, répétez ce qu'il dit."
                  source="Rapporté par al-Bukhari (611) et Muslim (383)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le principe est simple : à chaque phrase prononcée par le
                  muezzin, l&apos;auditeur répète exactement les mêmes mots.
                  Cependant, il existe une exception importante. Lorsque le
                  muezzin dit &laquo;&nbsp;Hayya &apos;ala as-salah&nbsp;&raquo;
                  (venez à la prière) et &laquo;&nbsp;Hayya &apos;ala
                  al-falah&nbsp;&raquo; (venez au succès), l&apos;auditeur ne
                  répète pas ces phrases mais dit à la place :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La hawla wa la quwwata illa billah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de force ni de puissance qu&apos;en Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (385)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette formule, appelée <strong>hawqala</strong>, est
                  considérée par les savants comme un trésor parmi les trésors
                  du Paradis. En la prononçant à ce moment précis, le musulman
                  reconnaît que toute capacité d&apos;accomplir la prière et
                  toute force pour se lever vers l&apos;adoration ne viennent
                  que d&apos;Allah seul. C&apos;est une déclaration de
                  dépendance totale envers le Créateur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  De même, lors de l&apos;adhan du fajr, le muezzin ajoute
                  la phrase &laquo;&nbsp;As-salatu khayrun min
                  an-nawm&nbsp;&raquo; (la prière est meilleure que le sommeil).
                  L&apos;auditeur répète cette phrase telle quelle. Cette
                  particularité de l&apos;adhan du fajr rappelle au croyant que
                  quitter la chaleur de son lit pour se présenter devant Allah
                  est un acte d&apos;une valeur inestimable.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Répéter mot à mot :</strong> chaque phrase du
                      muezzin est répétée identiquement par l&apos;auditeur,
                      que l&apos;on soit chez soi, au travail ou en déplacement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Exception des Hayya :</strong> remplacer
                      &laquo;&nbsp;Hayya &apos;ala as-salah&nbsp;&raquo; et
                      &laquo;&nbsp;Hayya &apos;ala al-falah&nbsp;&raquo; par la
                      hawqala.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Récompense immense :</strong> le Prophète (paix
                      et salut sur lui) a promis le Paradis à celui qui répète
                      après le muezzin avec conviction du coeur. Pour
                      approfondir les{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                      consultez notre guide complet.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée après l'adhan illustrant le moment d'invocation en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : La doua complète après l'adhan */}
              {/* ============================================ */}
              <section id="doua-apres-adhan" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua complète après l&apos;adhan : texte arabe, phonétique et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Une fois que le muezzin a terminé l&apos;adhan et que
                  l&apos;auditeur a répété ses paroles, vient le moment de
                  réciter la doua spécifique enseignée par le Prophète (paix
                  et salut sur lui). Cette invocation est rapportée dans un
                  hadith authentique de Sahih al-Bukhari et constitue la sunna
                  la plus importante après l&apos;appel à la prière.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Avant de réciter cette doua, le musulman envoie la salat
                  (prière) sur le Prophète Muhammad (paix et salut sur lui).
                  Muslim rapporte que le Prophète a dit :
                  &laquo;&nbsp;Lorsque vous entendez le muezzin, répétez ce
                  qu&apos;il dit, puis priez sur moi, car quiconque prie sur
                  moi une fois, Allah prie sur lui dix fois&nbsp;&raquo;
                  (Muslim 384). La salat sur le Prophète avant la doua est donc
                  une étape essentielle.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. La doua principale après l&apos;adhan
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلاَةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma rabba hadhihi ad-da&apos;wati at-tammah, was-salati al-qa&apos;imah, ati Muhammadan al-wasilata wal-fadilah, wab&apos;athhu maqaman mahmudan alladhi wa&apos;adtah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur de cet appel parfait et de la prière qui va être accomplie, accorde à Muhammad la wasila et le mérite, et ressuscite-le au rang louable que Tu lui as promis&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (614)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaque mot de cette invocation porte un sens profond. La
                  &laquo;&nbsp;da&apos;wa tammah&nbsp;&raquo; (appel parfait)
                  désigne l&apos;adhan lui-même, qualifié de parfait car il
                  contient les fondements de la foi : le tawhid, la shahada
                  et l&apos;appel à la prière. La &laquo;&nbsp;salat
                  al-qa&apos;imah&nbsp;&raquo; (prière qui va être accomplie)
                  fait référence à la prière obligatoire qui suivra
                  l&apos;adhan.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. La salat ibrahimiyya (prière sur le Prophète)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Avant ou après la doua principale, il est recommandé de
                  réciter la salat sur le Prophète. La formule la plus
                  complète est la salat ibrahimiyya :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma salli &apos;ala Muhammadin wa &apos;ala ali Muhammadin kama sallayta &apos;ala Ibrahima wa &apos;ala ali Ibrahima innaka hamidun majid
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, prie sur Muhammad et sur la famille de Muhammad, comme Tu as prié sur Ibrahim et sur la famille d&apos;Ibrahim, Tu es certes Digne de louange et de gloire&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (3370) et Muslim (406)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. La demande de la wasila
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a également enseigné une
                  formule complémentaire à réciter après l&apos;adhan pour
                  demander la wasila :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ رَضِيتُ بِاللَّهِ رَبًّا وَبِمُحَمَّدٍ رَسُولًا وَبِالْإِسْلَامِ دِينًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ash-hadu an la ilaha illAllahu wahdahu la sharika lah, wa anna Muhammadan &apos;abduhu wa rasuluh, raditu billahi rabban wa bi Muhammadin rasulan wa bil-islami dinan
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;J&apos;atteste qu&apos;il n&apos;y a de divinité qu&apos;Allah, Seul sans associé, et que Muhammad est Son serviteur et Son messager. J&apos;agrée Allah comme Seigneur, Muhammad comme messager et l&apos;islam comme religion&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (386)
                  </p>
                </div>

                <HadithCard
                  arabic="من قال حين يسمع النداء: اللهم رب هذه الدعوة التامة والصلاة القائمة آت محمدا الوسيلة والفضيلة وابعثه مقاما محمودا الذي وعدته حلت له شفاعتي يوم القيامة"
                  text="Quiconque dit en entendant l'appel (à la prière) : 'Ô Allah, Seigneur de cet appel parfait et de la prière qui va être accomplie, accorde à Muhammad la wasila et le mérite, et ressuscite-le au rang louable que Tu lui as promis', mon intercession lui sera acquise le Jour du Jugement."
                  source="Rapporté par al-Bukhari (614)"
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
              {/* SECTION 3 : L'intercession du Prophète */}
              {/* ============================================ */}
              <section id="intercession-prophete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;intercession (shafa&apos;a) du Prophète et la doua après l&apos;adhan
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;un des mérites les plus extraordinaires de la doua
                  après l&apos;adhan est qu&apos;elle ouvre la porte à
                  l&apos;intercession du Prophète Muhammad (paix et salut sur
                  lui) au Jour du Jugement. Le hadith est explicite :
                  &laquo;&nbsp;Mon intercession lui sera acquise le Jour du
                  Jugement&nbsp;&raquo; (al-Bukhari). Cette promesse
                  prophétique confère à cette simple invocation une valeur
                  incommensurable.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La <strong>shafa&apos;a</strong> (intercession) du Prophète
                  est un concept fondamental en islam. Au Jour du Jugement,
                  lorsque les gens seront rassemblés dans une angoisse
                  indescriptible, le Prophète Muhammad (paix et salut sur lui)
                  sera le seul à pouvoir intercéder auprès d&apos;Allah pour
                  que le Jugement commence. C&apos;est le &laquo;&nbsp;maqam
                  mahmud&nbsp;&raquo; (rang louable) mentionné dans la doua
                  après l&apos;adhan et dans le Coran : &laquo;&nbsp;Il se
                  peut que ton Seigneur te ressuscite en un rang
                  louable&nbsp;&raquo; (Coran, 17:79).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En demandant la wasila et le maqam mahmud pour le Prophète
                  après chaque adhan, le musulman remplit une condition
                  essentielle pour bénéficier de cette intercession. Il
                  s&apos;agit d&apos;un acte simple qui ne prend que quelques
                  secondes, mais dont la récompense s&apos;étend jusqu&apos;au
                  Jour Dernier. Les savants insistent sur le fait que
                  négliger cette doua, c&apos;est se priver volontairement
                  d&apos;un bien immense alors que le coût en est infime.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La wasila, quant à elle, est décrite par le Prophète comme
                  un degré au Paradis qui ne sera accordé qu&apos;à un seul
                  serviteur d&apos;Allah. Le Prophète (paix et salut sur lui)
                  a exprimé l&apos;espoir d&apos;être ce serviteur et a
                  demandé à sa communauté de l&apos;aider en formulant cette
                  doua. Chaque fois qu&apos;un musulman récite cette
                  invocation après l&apos;adhan, il participe à cette
                  demande collective et mérite en retour l&apos;intercession
                  prophétique.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les versets sur la doua et l'intercession du Prophète"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Moment entre adhan et iqamah */}
              {/* ============================================ */}
              <section id="moment-exaucement" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le moment béni entre l&apos;adhan et l&apos;iqamah : un temps d&apos;exaucement
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà de la doua spécifique après l&apos;adhan, le
                  Prophète (paix et salut sur lui) a enseigné que tout
                  l&apos;intervalle entre l&apos;adhan et l&apos;iqamah est un
                  moment privilégié où les invocations sont exaucées. Ce
                  temps, souvent court, représente une fenêtre d&apos;or
                  spirituelle que le musulman averti ne devrait jamais laisser
                  passer.
                </p>

                <HadithCard
                  arabic="الدعاء لا يرد بين الأذان والإقامة"
                  text="La doua entre l'adhan et l'iqamah n'est pas rejetée."
                  source="Rapporté par Abu Dawud (521) et at-Tirmidhi (212), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est d&apos;une clarté remarquable. La formulation
                  &laquo;&nbsp;n&apos;est pas rejetée&nbsp;&raquo; (la yuraddu)
                  signifie qu&apos;Allah accepte et exauce les invocations
                  faites durant cet intervalle. Les compagnons du Prophète
                  (qu&apos;Allah les agrée) avaient parfaitement compris cette
                  réalité et s&apos;empressaient de formuler leurs demandes
                  entre l&apos;adhan et l&apos;iqamah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Concrètement, après avoir récité la doua prescrite après
                  l&apos;adhan, le musulman devrait profiter de chaque instant
                  restant avant l&apos;iqamah pour adresser à Allah ses
                  demandes personnelles. Qu&apos;il s&apos;agisse de demander
                  la guérison, la subsistance, la guidée pour soi ou pour ses
                  proches, le pardon des péchés ou la protection contre les
                  épreuves, ce moment est idéal. Cinq prières par jour
                  signifient cinq occasions quotidiennes de profiter de ce
                  temps béni.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de préparer mentalement ses
                  invocations avant l&apos;adhan afin de ne pas perdre de
                  temps à chercher quoi demander. Avoir une liste de douas
                  personnelles à formuler permet de tirer le maximum de
                  bénéfice de cet intervalle. Pour découvrir les invocations
                  à réciter après la prière elle-même, consultez notre article
                  sur la{" "}
                  <Link href="/doua-apres-priere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua après la prière en islam</Link>.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter la doua après l&apos;adhan
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Commencer par la doua prescrite (Allahumma rabba hadhihi
                        ad-da&apos;wati at-tammah...) et la salat sur le
                        Prophète.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Formuler ses demandes personnelles
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Profiter du temps restant pour adresser à Allah toutes
                        ses demandes : guérison, subsistance, guidée, pardon,
                        protection.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Invoquer avec présence du coeur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La qualité de la doua prime sur la quantité. Invoquer
                        avec humilité, certitude et concentration maximise les
                        chances d&apos;exaucement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas négliger ce moment cinq fois par jour
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Chaque prière offre cette opportunité. Cinq adhans
                        quotidiens représentent cinq fenêtres d&apos;exaucement
                        à ne pas manquer.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas complémentaires */}
              {/* ============================================ */}
              <section id="douas-complementaires" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas complémentaires à réciter après l&apos;adhan
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus de la doua principale après l&apos;adhan, le musulman
                  peut enrichir ce moment béni avec d&apos;autres invocations
                  authentiques tirées de la Sunna. Ces douas complémentaires
                  permettent de maximiser la récompense et de profiter
                  pleinement de cet intervalle d&apos;exaucement entre
                  l&apos;adhan et l&apos;iqamah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. La shahada après l&apos;adhan
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui qui
                  prononce la shahada avec sincérité après l&apos;adhan verra
                  ses péchés pardonnés :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ رَضِيتُ بِاللَّهِ رَبًّا وَبِمُحَمَّدٍ رَسُولًا وَبِالْإِسْلَامِ دِينًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ash-hadu an la ilaha illAllahu wahdahu la sharika lah, wa anna Muhammadan &apos;abduhu wa rasuluh, raditu billahi rabban wa bi Muhammadin rasulan wa bil-islami dinan
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;J&apos;atteste qu&apos;il n&apos;y a de divinité qu&apos;Allah, Seul sans associé, et que Muhammad est Son serviteur et Son messager. J&apos;agrée Allah comme Seigneur, Muhammad comme messager et l&apos;islam comme religion&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (386)
                  </p>
                </div>

                <HadithCard
                  arabic="من قال حين يسمع المؤذن: وأنا أشهد أن لا إله إلا الله وحده لا شريك له وأن محمدا عبده ورسوله رضيت بالله ربا وبمحمد رسولا وبالإسلام دينا غفر له ذنبه"
                  text="Quiconque dit en entendant le muezzin : 'Et moi aussi j'atteste qu'il n'y a de divinité qu'Allah, Seul sans associé, et que Muhammad est Son serviteur et Son messager. J'agrée Allah comme Seigneur, Muhammad comme messager et l'islam comme religion', ses péchés lui seront pardonnés."
                  source="Rapporté par Muslim (386)"
                />

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. La demande de pardon (istighfar)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le moment entre l&apos;adhan et l&apos;iqamah est propice
                  au repentir et à la demande de pardon. Le sayyid
                  al-istighfar est particulièrement recommandé :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Astaghfirullaha al-&apos;adhima alladhi la ilaha illa huwa al-hayyu al-qayyumu wa atubu ilayh
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je demande pardon à Allah, le Très Grand, Celui en dehors de Qui il n&apos;y a pas de divinité, le Vivant, l&apos;Immuable, et je me repens auprès de Lui&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (1517) et at-Tirmidhi (3577)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces invocations complémentaires, ajoutées à la doua
                  principale après l&apos;adhan, forment un ensemble complet
                  d&apos;adorations qui transforment chaque appel à la prière
                  en une véritable station spirituelle. Le musulman qui
                  pratique régulièrement ces sunnas cinq fois par jour
                  accumule une récompense considérable et renforce
                  constamment son lien avec Allah. Pour découvrir les
                  invocations spécifiques à la prière de l&apos;aube,
                  consultez notre article sur la{" "}
                  <Link href="/doua-fajr-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du fajr en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Conditions et convenances */}
              {/* ============================================ */}
              <section id="conditions-adab" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conditions et convenances (adab) de la doua après l&apos;adhan
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Pour tirer le maximum de bénéfice de la doua après
                  l&apos;adhan, le musulman doit respecter certaines
                  convenances (adab) qui encadrent cette pratique. Ces règles,
                  tirées du Coran et de la Sunna, permettent d&apos;optimiser
                  les conditions d&apos;exaucement et de vivre ce moment avec
                  la profondeur spirituelle qu&apos;il mérite.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Arrêter toute activité
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Lorsque l&apos;adhan retentit, il est recommandé
                      d&apos;interrompre ses occupations pour répéter après le
                      muezzin. Continuer à parler, travailler ou se divertir
                      pendant l&apos;adhan prive le musulman de cette
                      récompense.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La présence du coeur (khushu&apos;)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Réciter la doua machinalement, sans réfléchir à son sens,
                      diminue son impact spirituel. Le musulman doit méditer
                      chaque mot et ressentir la grandeur de ce qu&apos;il
                      demande à Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Se tourner vers la qibla
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Bien que cela ne soit pas une condition obligatoire, se
                      tourner vers la direction de la Mecque pendant
                      l&apos;invocation est une sunna recommandée qui
                      augmente la concentration et le recueillement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Lever les mains
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Lever les mains est une sunna lors de l&apos;invocation.
                      Le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Allah est pudique et généreux, Il a honte
                      de repousser les mains vides de Son serviteur qui les
                      lève vers Lui&nbsp;&raquo; (Abu Dawud).
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, la doua après l&apos;adhan n&apos;est pas une
                  simple formalité à expédier rapidement. C&apos;est un
                  rendez-vous quotidien entre le serviteur et son Seigneur,
                  un moment de connexion spirituelle profonde qui mérite
                  d&apos;être vécu avec conscience et dévotion. Le musulman
                  qui honore ce rendez-vous cinq fois par jour verra, bi
                  idhnillah, ses invocations exaucées et sa vie transformée
                  par la baraka de cette sunna prophétique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Régularité :</strong> la constance dans cette
                      pratique est plus aimée d&apos;Allah que des actes
                      occasionnels intenses. Cinq adhans, cinq douas, chaque
                      jour sans exception.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Enseigner aux enfants :</strong> transmettre cette
                      sunna aux plus jeunes leur permet de grandir avec cette
                      habitude et de récolter ses fruits tout au long de leur
                      vie.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Applications mobiles :</strong> utiliser les
                      notifications des horaires de prière pour se rappeler de
                      réciter la doua après l&apos;adhan, même lorsqu&apos;on
                      n&apos;entend pas le muezzin directement.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua après la prière en islam"
                  description="Découvrez les invocations authentiques à réciter après chaque prière obligatoire pour compléter votre adoration."
                  href="/doua-apres-priere-islam"
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
                    href="/doua-apres-priere-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua après la prière
                  </Link>
                  <Link
                    href="/doua-fajr-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du fajr
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
