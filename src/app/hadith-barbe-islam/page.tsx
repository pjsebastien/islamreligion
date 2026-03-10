import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import ArticleCTA from "@/components/ArticleCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Hadiths sur la barbe en islam : enseignements prophétiques et avis des savants",
  description:
    "Découvrez les hadiths authentiques sur la barbe en islam : laisser pousser la barbe, tailler la moustache, fitra, avis des 4 madhabs. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur la barbe en islam : enseignements prophétiques et avis des savants",
    description:
      "Les hadiths authentiques sur la barbe en islam : obligation, sunna, entretien, distinction des non-musulmans et avis des quatre écoles juridiques.",
    url: "https://www.islamreligion.fr/hadith-barbe-islam",
    images: [
      {
        url: "/images/musulman-tenant-coran-chapelet-islam-foi.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-barbe-islam",
  },
};

const tocItems = [
  { id: "laisser-pousser", label: "Laisser pousser la barbe" },
  { id: "tailler-moustache", label: "Tailler la moustache" },
  { id: "fitra-disposition", label: "La fitra et la disposition naturelle" },
  { id: "distinction-nations", label: "Se distinguer des autres nations" },
  { id: "entretien-barbe", label: "L\u2019entretien et le soin de la barbe" },
  { id: "savants", label: "Avis des savants et des 4 madhabs" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "La barbe est-elle obligatoire en islam ?",
    answer:
      "La majorité des savants, dont les quatre écoles juridiques (hanafite, malikite, shafi\u2019ite et hanbalite), considèrent que laisser pousser la barbe est obligatoire (wajib) en raison des ordres prophétiques explicites. Certains savants, notamment parmi les shafi\u2019ites tardifs, la considèrent comme une sunna fortement recommandée (sunna mu\u2019akkada). Dans tous les cas, la raser entièrement est unanimement blâmé.",
  },
  {
    question:
      "Peut-on tailler ou raccourcir sa barbe en islam ?",
    answer:
      "Les savants divergent sur la question de la taille. L\u2019imam Ahmad et l\u2019imam Malik autorisent de couper ce qui dépasse la poignée (qabda), en s\u2019appuyant sur la pratique d\u2019Ibn \u2019Umar. D\u2019autres, comme certains hanbalites, interdisent toute taille. L\u2019avis le plus répandu est qu\u2019il est permis de tailler ce qui dépasse une poignée et d\u2019égaliser la barbe pour un aspect soigné.",
  },
  {
    question:
      "Quelle est la longueur idéale de la barbe selon la Sunna ?",
    answer:
      "Il n\u2019existe pas de hadith fixant une longueur précise. La pratique rapportée d\u2019Ibn \u2019Umar est de prendre la barbe dans le poing et de couper ce qui dépasse. Cela correspond environ à une longueur d\u2019un poing. Les savants s\u2019accordent sur le fait que la barbe doit être visible et épaisse, sans excès ni négligence.",
  },
  {
    question:
      "Pourquoi le Prophète a-t-il ordonné de se distinguer des non-musulmans par la barbe ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a ordonné de se différencier des polythéistes et des gens du Livre dans l\u2019apparence. Ce commandement vise à préserver l\u2019identité musulmane et à ne pas imiter les pratiques religieuses ou culturelles spécifiques aux non-musulmans. Les savants précisent que cette distinction concerne les pratiques à connotation religieuse, pas les habitudes vestimentaires communes.",
  },
  {
    question:
      "Tailler la moustache est-il obligatoire en islam ?",
    answer:
      "La majorité des savants considèrent la taille de la moustache comme obligatoire (wajib), en raison des hadiths explicites sur le sujet. Les hanafites et les hanbalites recommandent de la raser entièrement, tandis que les malikites et les shafi\u2019ites préconisent de la raccourcir sans la raser complètement. Dans tous les cas, il est interdit de la laisser pendre sur la lèvre supérieure.",
  },
  {
    question:
      "Que faire si on ne peut pas faire pousser sa barbe pour des raisons médicales ?",
    answer:
      "En islam, l\u2019obligation est liée à la capacité. Si une personne ne peut pas faire pousser sa barbe pour des raisons génétiques ou médicales, elle n\u2019est pas blâmée. Allah n\u2019impose à personne au-delà de sa capacité (Coran, 2:286). L\u2019intention de suivre la Sunna est récompensée même si la réalisation physique n\u2019est pas possible.",
  },
  {
    question:
      "La barbe fait-elle partie de la fitra (disposition naturelle) ?",
    answer:
      "Oui, la barbe est liée à la fitra. Le hadith de Aisha dans Sahih Muslim (n\u00b0261) mentionne dix actes de la fitra, parmi lesquels la taille de la moustache et le fait de laisser pousser la barbe. La fitra désigne la disposition naturelle sur laquelle Allah a créé l\u2019être humain, et ces actes relèvent de l\u2019hygiène et de la dignité.",
  },
  {
    question:
      "Le Prophète prenait-il soin de sa barbe ?",
    answer:
      "Oui, plusieurs hadiths attestent que le Prophète \u2018alayhi salatu wa salam peignait sa barbe, y appliquait de l\u2019huile et la parfumait. Anas ibn Malik rapporte que le Prophète se parfumait la barbe avec du musc. L\u2019islam encourage le soin de l\u2019apparence et la propreté, y compris de la barbe.",
  },
];

export default function HadithBarbeIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-barbe-islam/#article",
        headline:
          "Hadiths sur la barbe en islam : enseignements prophétiques et avis des savants",
        description:
          "Découvrez les hadiths authentiques sur la barbe en islam : laisser pousser la barbe, tailler la moustache, fitra, avis des 4 madhabs.",
        image: "/images/musulman-tenant-coran-chapelet-islam-foi.jpg",
        datePublished: "2026-04-20",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-barbe-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-barbe-islam/#breadcrumb",
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
            name: "Hadith du jour",
            item: "https://www.islamreligion.fr/hadith-du-jour",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hadiths sur la barbe",
            item: "https://www.islamreligion.fr/hadith-barbe-islam",
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
          title="Hadiths sur la barbe en islam"
          subtitle="Les enseignements prophétiques sur la barbe, la taille de la moustache, la fitra et les avis des savants des quatre écoles juridiques."
          imageSrc="/images/musulman-tenant-coran-chapelet-islam-foi.jpg"
          imageAlt="Hadiths sur la barbe en islam, enseignements prophétiques"
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
                <Link href="/hadith-du-jour" className="hover:text-primary">
                  Hadith du jour
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">
                  Hadiths sur la barbe
                </span>
              </nav>

              {/* A retenir */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  À retenir
                </p>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ a ordonné de laisser pousser la barbe et de tailler la moustache dans plusieurs hadiths authentiques.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La barbe fait partie de la fitra (disposition naturelle) et constitue un signe distinctif du musulman.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les quatre écoles juridiques s&apos;accordent sur l&apos;importance de la barbe, bien qu&apos;elles divergent sur le caractère obligatoire ou fortement recommandé.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;islam encourage l&apos;entretien et le soin de la barbe : la propreté et l&apos;apparence soignée sont des valeurs prophétiques.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Laisser pousser      */}
              {/* ============================== */}
              <section id="laisser-pousser" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Laisser pousser la barbe : les hadiths authentiques
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète ﷺ a donné des ordres clairs concernant la barbe. Plusieurs hadiths rapportés dans les recueils les plus authentiques — Bukhari et Muslim — établissent le commandement de laisser pousser la barbe. Ces injonctions sont formulées à l&apos;impératif, ce qui a conduit la majorité des savants à en déduire une obligation.
                </p>

                <HadithBlock
                  number={1}
                  title="Laissez pousser les barbes et taillez les moustaches"
                  narrator="Ibn &apos;Umar"
                  arabic="خَالِفُوا الْمُشْرِكِينَ، وَفِّرُوا اللِّحَى، وَأَحْفُوا الشَّوَارِبَ"
                  translation="Différenciez-vous des polythéistes : laissez pousser les barbes et taillez les moustaches."
                  source="Sahih Al-Bukhari, n°5892 — Sahih Muslim, n°259"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus explicites sur la question de la barbe. Le Prophète ﷺ utilise l&apos;impératif &laquo; waffiru &raquo; (laissez pousser abondamment) et lie ce commandement à la distinction d&apos;avec les polythéistes. Le verbe &laquo; ahfu &raquo; signifie couper court ou raser la moustache. Les savants des quatre écoles se sont appuyés sur ce hadith pour établir le statut juridique de la barbe."
                />

                <HadithBlock
                  number={2}
                  title="Taillez les moustaches et laissez les barbes"
                  narrator="Abu Hurayra"
                  arabic="جُزُّوا الشَّوَارِبَ، وَأَرْخُوا اللِّحَى، خَالِفُوا الْمَجُوسَ"
                  translation="Taillez les moustaches et laissez pousser les barbes. Différenciez-vous des mages (zoroastriens)."
                  source="Sahih Muslim, n°260"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en mentionnant spécifiquement les mages (al-Majus), qui avaient pour habitude de raser la barbe et de laisser pousser la moustache. Le verbe &laquo; arkhu &raquo; signifie laisser pendre, laisser pousser librement. Le Prophète ﷺ ordonne de faire l&apos;inverse de cette pratique. Les savants soulignent que l&apos;ordre est répété dans plusieurs hadiths, ce qui renforce son caractère impératif."
                />

                <HadithBlock
                  number={3}
                  title="Dix choses font partie de la fitra"
                  narrator="Aisha"
                  arabic="عَشْرٌ مِنَ الْفِطْرَةِ: قَصُّ الشَّارِبِ، وَإِعْفَاءُ اللِّحْيَةِ، وَالسِّوَاكُ، وَاسْتِنْشَاقُ الْمَاءِ، وَقَصُّ الْأَظْفَارِ، وَغَسْلُ الْبَرَاجِمِ، وَنَتْفُ الْإِبِطِ، وَحَلْقُ الْعَانَةِ، وَانْتِقَاصُ الْمَاءِ"
                  translation="Dix choses font partie de la fitra (disposition naturelle) : tailler la moustache, laisser pousser la barbe, le siwak, aspirer l&apos;eau par le nez, couper les ongles, laver les articulations des doigts, épiler les aisselles, raser le pubis et se laver à l&apos;eau (après les besoins)."
                  source="Sahih Muslim, n°261"
                  grade="sahih"
                  explanation="Ce hadith place la barbe dans le cadre plus large de la fitra, cette disposition naturelle sur laquelle Allah a créé les êtres humains. Le terme &laquo; i&apos;fa &raquo; (laisser pousser) est utilisé pour la barbe, tandis que &laquo; qass &raquo; (tailler) est utilisé pour la moustache. En incluant la barbe parmi les actes de la fitra, le Prophète ﷺ montre qu&apos;elle n&apos;est pas une simple coutume culturelle, mais un élément de la nature humaine telle qu&apos;Allah l&apos;a voulue."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths constituent le socle textuel sur lequel les savants ont fondé leurs avis concernant la barbe. L&apos;utilisation de l&apos;impératif dans chacun d&apos;eux, associée à la mention de la fitra, indique clairement que la barbe occupe une place importante dans la Sunna prophétique.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Tailler la moustache */}
              {/* ============================== */}
              <section id="tailler-moustache" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Tailler la moustache selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le commandement de tailler la moustache accompagne systématiquement celui de laisser pousser la barbe dans les hadiths. Le Prophète ﷺ a insisté sur ce point à de nombreuses reprises, en faisant de la taille de la moustache un acte d&apos;hygiène, de fitra et de distinction religieuse.
                </p>

                <HadithBlock
                  number={4}
                  title="Cinq actes font partie de la fitra"
                  narrator="Abu Hurayra"
                  arabic="الْفِطْرَةُ خَمْسٌ: الْخِتَانُ، وَالِاسْتِحْدَادُ، وَقَصُّ الشَّارِبِ، وَتَقْلِيمُ الْأَظْفَارِ، وَنَتْفُ الْإِبِطِ"
                  translation="Cinq choses font partie de la fitra : la circoncision, le rasage du pubis, la taille de la moustache, la coupe des ongles et l&apos;épilation des aisselles."
                  source="Sahih Al-Bukhari, n°5889 — Sahih Muslim, n°257"
                  grade="sahih"
                  explanation="Ce hadith mentionne cinq actes de la fitra, dont la taille de la moustache (qass al-sharib). Il confirme que l&apos;entretien de la pilosité faciale est un acte religieux, pas une simple préférence esthétique. Le fait que la moustache soit mentionnée aux côtés de la circoncision — que la majorité des savants considèrent comme obligatoire — renforce le caractère impératif de cet acte d&apos;hygiène."
                />

                <HadithBlock
                  number={5}
                  title="Celui qui ne taille pas sa moustache n&apos;est pas des nôtres"
                  narrator="Zayd ibn Arqam"
                  arabic="مَنْ لَمْ يَأْخُذْ مِنْ شَارِبِهِ فَلَيْسَ مِنَّا"
                  translation="Celui qui ne taille pas sa moustache n&apos;est pas des nôtres."
                  source="Jami&apos; at-Tirmidhi, n°2761 — Sunan an-Nasa&apos;i, n°13"
                  grade="sahih"
                  explanation="L&apos;expression &laquo; n&apos;est pas des nôtres &raquo; (laysa minna) est une formule prophétique de désapprobation forte. Les savants expliquent qu&apos;elle ne signifie pas l&apos;exclusion de l&apos;islam, mais un blâme sévère pour celui qui néglige cette sunna. Ce hadith montre l&apos;insistance du Prophète ﷺ sur la taille de la moustache comme marqueur de l&apos;identité musulmane et de l&apos;hygiène corporelle."
                />

                <HadithBlock
                  number={6}
                  title="Taillez vos moustaches et épargnez vos barbes"
                  narrator="Ibn &apos;Umar"
                  arabic="أَنْهِكُوا الشَّوَارِبَ وَأَعْفُوا اللِّحَى"
                  translation="Taillez vos moustaches à ras et laissez pousser vos barbes."
                  source="Sahih Al-Bukhari, n°5893 — Sahih Muslim, n°259"
                  grade="sahih"
                  explanation="Le verbe &laquo; anhiku &raquo; signifie couper à ras, de manière prononcée. Associé à &laquo; a&apos;fu &raquo; (laisser pousser, épargner) pour la barbe, ce hadith établit un contraste clair : la moustache doit être raccourcie au maximum, tandis que la barbe doit être préservée et laissée libre de pousser. Les hanafites et les hanbalites se sont appuyés sur ce hadith pour recommander le rasage complet de la moustache, tandis que les malikites et les shafi&apos;ites préconisent de la raccourcir sans la raser entièrement."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Fitra                */}
              {/* ============================== */}
              <section id="fitra-disposition" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La fitra et la disposition naturelle
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le concept de fitra occupe une place centrale dans la question de la barbe. La fitra désigne la disposition naturelle sur laquelle Allah a créé l&apos;être humain. Elle englobe des actes d&apos;hygiène corporelle et des pratiques qui préservent la dignité et la beauté naturelle de l&apos;homme. La barbe, en tant qu&apos;élément de la fitra, n&apos;est pas une convention sociale mais un aspect de la nature humaine voulue par le Créateur.
                </p>

                <HadithBlock
                  number={7}
                  title="Ibrahim, l&apos;ami intime d&apos;Allah, fut le premier à tailler sa moustache"
                  narrator="Abu Hurayra"
                  arabic="اخْتَتَنَ إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ وَهُوَ ابْنُ ثَمَانِينَ سَنَةً بِالْقَدُّومِ"
                  translation="Ibrahim (que la paix soit sur lui) se fit circoncire à l&apos;âge de quatre-vingts ans avec une hache."
                  source="Sahih Al-Bukhari, n°3356 — Sahih Muslim, n°2370"
                  grade="sahih"
                  explanation="Ce hadith situe les pratiques de la fitra dans une continuité prophétique remontant à Ibrahim. Les savants, comme Ibn Hajar al-Asqalani, expliquent qu&apos;Ibrahim fut le premier à appliquer plusieurs actes de la fitra, dont la taille de la moustache. Cela montre que la barbe et l&apos;entretien de la pilosité faciale ne sont pas propres à la communauté de Muhammad ﷺ, mais s&apos;inscrivent dans la tradition de tous les prophètes."
                />

                <HadithBlock
                  number={8}
                  title="La Sunna prophétique dans l&apos;apparence"
                  narrator="Ibn &apos;Abbas"
                  arabic="كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يُحِبُّ مُوَافَقَةَ أَهْلِ الْكِتَابِ فِيمَا لَمْ يُؤْمَرْ فِيهِ"
                  translation="Le Prophète ﷺ aimait se conformer aux gens du Livre dans les domaines où il n&apos;avait pas reçu d&apos;ordre (divin), puis il reçut l&apos;ordre de se distinguer d&apos;eux."
                  source="Sahih Al-Bukhari, n°5917"
                  grade="sahih"
                  explanation="Ce hadith éclaire l&apos;évolution des prescriptions prophétiques en matière d&apos;apparence. Au début, le Prophète ﷺ suivait les pratiques des gens du Livre par affinité monothéiste. Par la suite, la révélation lui ordonna de s&apos;en distinguer, notamment dans la barbe et la moustache. Les savants en déduisent que la distinction dans l&apos;apparence est un commandement divin, pas une simple préférence culturelle."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh de l&apos;apparence, les règles de la fitra et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Distinction          */}
              {/* ============================== */}
              <section id="distinction-nations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Se distinguer des autres nations par la barbe
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des motifs récurrents dans les hadiths sur la barbe est la distinction (mukhalafa) d&apos;avec les non-musulmans. Le Prophète ﷺ a explicitement lié le port de la barbe à la nécessité de se démarquer des polythéistes, des mages et des gens du Livre dans leur apparence. Cette distinction n&apos;est pas motivée par le mépris, mais par la préservation de l&apos;identité religieuse.
                </p>

                <HadithBlock
                  number={9}
                  title="Faites le contraire des gens du Livre"
                  narrator="Abu Umama al-Bahili"
                  arabic="قَالُوا: يَا رَسُولَ اللَّهِ، إِنَّ أَهْلَ الْكِتَابِ يَقُصُّونَ عَثَانِينَهُمْ وَيُوَفِّرُونَ سِبَالَهُمْ. فَقَالَ: قُصُّوا سِبَالَكُمْ وَوَفِّرُوا عَثَانِينَكُمْ وَخَالِفُوا أَهْلَ الْكِتَابِ"
                  translation="Ils dirent : &laquo; Ô Messager d&apos;Allah, les gens du Livre taillent leurs barbes et laissent pousser leurs moustaches. &raquo; Il répondit : &laquo; Taillez vos moustaches, laissez pousser vos barbes et différenciez-vous des gens du Livre. &raquo;"
                  source="Musnad Ahmad, n°22283"
                  grade="sahih"
                  explanation="Ce hadith fournit le contexte historique du commandement : les gens du Livre de l&apos;époque rasaient leurs barbes et laissaient pousser leurs moustaches. Le Prophète ﷺ a ordonné l&apos;inverse. Les savants, dont Ibn Taymiyya dans son ouvrage Iqtida as-Sirat al-Mustaqim, expliquent que l&apos;interdiction d&apos;imiter les non-musulmans porte sur les pratiques à caractère religieux ou identitaire. La barbe, dans ce contexte, est un marqueur de l&apos;identité musulmane."
                />

                <HadithBlock
                  number={10}
                  title="Le Prophète ﷺ avait une barbe épaisse et fournie"
                  narrator="Jabir ibn Samura"
                  arabic="كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ كَثِيرَ شَعَرِ اللِّحْيَةِ"
                  translation="Le Messager d&apos;Allah ﷺ avait une barbe épaisse et fournie."
                  source="Sahih Muslim, n°2344"
                  grade="sahih"
                  explanation="Ce hadith descriptif nous renseigne sur l&apos;apparence du Prophète ﷺ. Sa barbe était abondante (kathir sha&apos;r al-lihya), ce qui montre qu&apos;il appliquait lui-même les commandements qu&apos;il donnait. Les compagnons prenaient le Prophète ﷺ comme modèle dans tous les aspects de la vie, y compris l&apos;apparence physique. Ce hadith sert de référence pour établir que la barbe pleine et visible était la norme prophétique."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Entretien            */}
              {/* ============================== */}
              <section id="entretien-barbe" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;entretien et le soin de la barbe
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Laisser pousser la barbe ne signifie pas la négliger. L&apos;islam accorde une grande importance à la propreté et à l&apos;apparence soignée. Le Prophète ﷺ prenait soin de sa barbe, la peignait et la parfumait. Les hadiths suivants montrent que l&apos;entretien de la barbe fait partie intégrante de la Sunna.
                </p>

                <HadithBlock
                  number={11}
                  title="Ibn &apos;Umar taillait ce qui dépassait la poignée"
                  narrator="Nafi&apos;"
                  arabic="كَانَ ابْنُ عُمَرَ إِذَا حَجَّ أَوِ اعْتَمَرَ قَبَضَ عَلَى لِحْيَتِهِ فَمَا فَضَلَ أَخَذَهُ"
                  translation="Ibn &apos;Umar, lorsqu&apos;il accomplissait le hajj ou la &apos;umra, prenait sa barbe dans son poing et coupait ce qui dépassait."
                  source="Sahih Al-Bukhari, n°5892"
                  grade="sahih"
                  explanation="Cette pratique d&apos;Ibn &apos;Umar — l&apos;un des compagnons les plus scrupuleux dans le suivi de la Sunna — est utilisée par de nombreux savants pour autoriser la taille de la barbe au-delà d&apos;une poignée. L&apos;imam Malik et l&apos;imam Ahmad s&apos;en sont servis comme preuve. Cette athar (tradition d&apos;un compagnon) montre que &laquo; laisser pousser la barbe &raquo; ne signifie pas la laisser sans aucune limite, mais la maintenir dans un aspect digne et soigné."
                />

                <HadithBlock
                  number={12}
                  title="Le Prophète ﷺ peignait sa barbe"
                  narrator="Aisha"
                  arabic="كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يُحِبُّ التَّيَمُّنَ فِي تَنَعُّلِهِ وَتَرَجُّلِهِ وَطُهُورِهِ وَفِي شَأْنِهِ كُلِّهِ"
                  translation="Le Prophète ﷺ aimait commencer par la droite pour se chausser, se peigner, faire ses ablutions et dans toutes ses affaires."
                  source="Sahih Al-Bukhari, n°168 — Sahih Muslim, n°268"
                  grade="sahih"
                  explanation="Ce hadith mentionne le peignage (tarajjul), qui inclut le soin des cheveux et de la barbe. Le Prophète ﷺ se peignait régulièrement, en commençant par le côté droit. Les savants en déduisent que le soin de la barbe — la peigner, l&apos;huiler, la parfumer — est une sunna. Négliger l&apos;entretien de la barbe au point qu&apos;elle devienne repoussante contredit l&apos;esprit de la Sunna, qui valorise la propreté et la beauté."
                />

                <HadithBlock
                  number={13}
                  title="Allah est beau et aime la beauté"
                  narrator="Ibn Mas&apos;ud"
                  arabic="لَا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ. قِيلَ: إِنَّ الرَّجُلَ يُحِبُّ أَنْ يَكُونَ ثَوْبُهُ حَسَنًا وَنَعْلُهُ حَسَنَةً. قَالَ: إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ، الْكِبْرُ بَطَرُ الْحَقِّ وَغَمْطُ النَّاسِ"
                  translation="N&apos;entrera pas au Paradis celui qui a dans son cœur le poids d&apos;un atome d&apos;orgueil. Quelqu&apos;un demanda : &laquo; Et si un homme aime porter de beaux vêtements et de belles chaussures ? &raquo; Il répondit : &laquo; Allah est beau et aime la beauté. L&apos;orgueil, c&apos;est rejeter la vérité et mépriser les gens. &raquo;"
                  source="Sahih Muslim, n°91"
                  grade="sahih"
                  explanation="Ce hadith fondamental établit que le soin de l&apos;apparence n&apos;est pas de l&apos;orgueil. Allah aime la beauté, et prendre soin de sa barbe — la peigner, la parfumer, la garder propre — est un acte conforme à cet enseignement. L&apos;orgueil, précise le Prophète ﷺ, est le rejet de la vérité et le mépris des gens, non le souci de son apparence. Ce hadith encourage le musulman à entretenir sa barbe avec dignité."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Avis des savants et des quatre madhabs
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les quatre grandes écoles de jurisprudence islamique (madhabs) ont abondamment commenté les hadiths sur la barbe. Si elles s&apos;accordent toutes sur l&apos;importance de la barbe, elles divergent sur certains détails pratiques, notamment la longueur minimale et le caractère obligatoire ou recommandé.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Raser la barbe est interdit (haram). C&apos;est l&apos;acte des mages et des zoroastriens. Les hadiths sont explicites sur l&apos;obligation de la laisser pousser. Quiconque la rase s&apos;oppose à la Sunna et à la fitra sur laquelle Allah a créé l&apos;homme.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn &apos;Abidin, <em>Radd al-Muhtar</em> (école hanafite)
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Il est interdit de raser la barbe, et il est également interdit de la couper de manière excessive. Quant à ce qui dépasse la poignée, il est permis de le couper, comme le faisait Ibn &apos;Umar et d&apos;autres compagnons.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam al-Qurtubi, <em>Al-Mufhim</em> (école malikite)
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;avis retenu dans notre école est que raser la barbe est makruh (détestable), et certains de nos savants ont dit que c&apos;est haram (interdit). L&apos;avis le plus fort est l&apos;interdiction, en raison de la clarté des hadiths prophétiques.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam an-Nawawi, <em>Sharh Sahih Muslim</em> (école shafi&apos;ite)
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Laisser pousser la barbe est obligatoire (wajib). La raser est interdit. Il est permis de prendre ce qui dépasse la poignée. Le Prophète ﷺ a ordonné de laisser pousser la barbe et l&apos;ordre implique l&apos;obligation tant qu&apos;il n&apos;y a pas d&apos;élément qui le détourne vers la recommandation.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qudama, <em>Al-Mughni</em> (école hanbalite)
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces citations montrent un consensus quasi unanime sur l&apos;interdiction de raser la barbe. La divergence porte principalement sur le degré de gravité (haram ou makruh tahrim) et sur la possibilité de tailler ce qui dépasse la poignée. Dans tous les cas, les savants des quatre écoles considèrent la barbe comme un élément fondamental de l&apos;apparence musulmane, en s&apos;appuyant sur les hadiths authentiques présentés dans cet article.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour le musulman soucieux de suivre la Sunna dans son apparence :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Laisser pousser la barbe est un commandement prophétique
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les hadiths utilisent l&apos;impératif pour ordonner de laisser pousser la barbe. La majorité des savants en déduisent une obligation religieuse (wajib) que le musulman doit s&apos;efforcer de respecter.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Tailler la moustache est une sunna confirmée
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a insisté sur la taille de la moustache au point de dire que celui qui ne la taille pas &laquo; n&apos;est pas des nôtres &raquo;. Cet acte fait partie de la fitra et de l&apos;hygiène corporelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La barbe fait partie de la fitra
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        En l&apos;incluant parmi les actes de la fitra, le Prophète ﷺ montre que la barbe relève de la nature humaine telle qu&apos;Allah l&apos;a créée. C&apos;est un acte d&apos;adoration qui honore la création divine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        L&apos;entretien de la barbe est essentiel
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ peignait et parfumait sa barbe. La négliger ou la laisser en désordre contredit l&apos;esprit de la Sunna. Allah est beau et aime la beauté.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se distinguer dans l&apos;apparence est un acte de foi
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a lié la barbe à la distinction d&apos;avec les polythéistes et les mages. Préserver son identité musulmane dans l&apos;apparence est un acte d&apos;obéissance à Allah et à Son Messager.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Tailler ce qui dépasse la poignée est permis
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La pratique d&apos;Ibn &apos;Umar, validée par plusieurs écoles juridiques, montre qu&apos;il est permis de tailler la barbe au-delà d&apos;une poignée. Cela concilie le commandement de laisser pousser et le soin de l&apos;apparence.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur la barbe dans leur langue originale et approfondissez votre connaissance de la Sunna prophétique."
                  preselect="arabe"
                />
              </div>

              {/* FAQ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>

              {/* Maillage interne */}
              <div className="mt-12 space-y-4">
                <ArticleCTA
                  variant="page-mere"
                  title="Retrouvez tous nos hadiths par thème"
                  href="/hadith-du-jour"
                  linkText="Hadith du jour : paroles authentiques"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le tatouage et l&apos;apparence en islam"
                  description="Découvrez les hadiths authentiques sur le tatouage, l&apos;épilation et les modifications corporelles en islam."
                  href="/hadith-tattoo-apparence-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le dégradé en islam : ce que disent les hadiths"
                  description="Les hadiths sur la coupe de cheveux, le qaza&apos; et le dégradé selon les savants musulmans."
                  href="/hadith-degrade-coiffure-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths du Prophète Muhammad ﷺ : fondements et collections"
                  description="Découvrez l&apos;histoire des grandes collections de hadiths et les critères d&apos;authenticité."
                  href="/hadith-prophete-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
