import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales et politique de confidentialité",
  description:
    "Mentions légales, conditions d'utilisation et politique de confidentialité du site IslamReligion.fr.",
  alternates: {
    canonical: "https://www.islamreligion.fr/mentions-legales",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Fil d'Ariane */}
      <nav
        className="mb-8 text-sm text-foreground-secondary"
        aria-label="Fil d&apos;Ariane"
      >
        <Link href="/" className="hover:text-primary">
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Mentions légales</span>
      </nav>

      <h1 className="text-3xl font-bold text-primary lg:text-4xl">
        Mentions légales et politique de confidentialité
      </h1>

      {/* ============================================ */}
      {/* MENTIONS LÉGALES */}
      {/* ============================================ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Mentions légales</h2>

        <div className="mt-6 space-y-6 leading-relaxed text-foreground">
          <div>
            <h3 className="text-lg font-semibold text-primary">
              Éditeur du site
            </h3>
            <ul className="mt-3 space-y-1 text-foreground-secondary">
              <li>
                <strong>Nom :</strong> IslamReligion.fr
              </li>
              <li>
                <strong>Responsable de la publication :</strong> Sébastien
                Dupont
              </li>
              <li>
                <strong>Adresse :</strong> 12 rue des Oliviers, 75011 Paris,
                France
              </li>
              <li>
                <strong>Email :</strong> contact@islamreligion.fr
              </li>
              <li>
                <strong>Téléphone :</strong> +33 1 23 45 67 89
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary">Hébergement</h3>
            <ul className="mt-3 space-y-1 text-foreground-secondary">
              <li>
                <strong>Hébergeur :</strong> Vercel Inc.
              </li>
              <li>
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA
                91789, États-Unis
              </li>
              <li>
                <strong>Site web :</strong> vercel.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary">
              Propriété intellectuelle
            </h3>
            <p className="mt-3 text-foreground-secondary">
              L&apos;ensemble du contenu du site IslamReligion.fr (textes,
              images, graphismes, logo, icônes) est protégé par le droit
              d&apos;auteur et le droit de la propriété intellectuelle. Toute
              reproduction, distribution, modification ou utilisation de ces
              contenus sans autorisation préalable est strictement interdite,
              sauf dans le cadre du droit de citation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary">
              Responsabilité
            </h3>
            <p className="mt-3 text-foreground-secondary">
              Les informations publiées sur ce site sont fournies à titre
              informatif et ne constituent en aucun cas un avis médical,
              juridique ou religieux. L&apos;éditeur s&apos;efforce
              d&apos;assurer l&apos;exactitude des informations diffusées, mais
              ne saurait être tenu responsable des erreurs, omissions ou
              résultats qui pourraient découler de leur utilisation.
            </p>
            <p className="mt-3 text-foreground-secondary">
              Les articles relatifs aux remèdes arabes et à la médecine
              prophétique ne remplacent en aucun cas une consultation médicale
              professionnelle. Consultez toujours un médecin qualifié avant
              d&apos;entreprendre tout traitement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary">
              Liens hypertextes
            </h3>
            <p className="mt-3 text-foreground-secondary">
              Le site peut contenir des liens vers d&apos;autres sites
              internet. L&apos;éditeur n&apos;exerce aucun contrôle sur ces
              sites et décline toute responsabilité quant à leur contenu. La
              présence de ces liens ne constitue pas une approbation de leur
              contenu.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* POLITIQUE DE CONFIDENTIALITÉ */}
      {/* ============================================ */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">
          Politique de confidentialité
        </h2>

        <div className="mt-6 space-y-6 leading-relaxed text-foreground">
          <p className="text-foreground-secondary">
            La présente politique de confidentialité décrit la manière dont
            IslamReligion.fr collecte, utilise et protège les données
            personnelles des visiteurs, conformément au Règlement Général sur la
            Protection des Données (RGPD) et à la loi Informatique et Libertés.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-primary">
              Données collectées
            </h3>
            <p className="mt-3 text-foreground-secondary">
              Le site IslamReligion.fr ne collecte aucune donnée personnelle
              directement. Aucun formulaire d&apos;inscription, de contact ou de
              commentaire n&apos;est proposé. Les seules données susceptibles
              d&apos;être collectées sont :
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-foreground-secondary">
              <li>
                <strong>Données de navigation :</strong> adresse IP, type de
                navigateur, pages visitées, durée de la visite (via les outils
                d&apos;analyse)
              </li>
              <li>
                <strong>Cookies :</strong> fichiers déposés sur votre appareil
                pour améliorer votre expérience de navigation
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary">
              Utilisation des cookies
            </h3>
            <p className="mt-3 text-foreground-secondary">
              Le site utilise des cookies pour les finalités suivantes :
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-foreground-secondary">
              <li>
                <strong>Cookies techniques :</strong> nécessaires au
                fonctionnement du site (mémorisation des préférences, gestion de
                la navigation)
              </li>
              <li>
                <strong>Cookies analytiques :</strong> mesure d&apos;audience
                anonyme pour comprendre comment les visiteurs utilisent le site
                et améliorer son contenu
              </li>
            </ul>
            <p className="mt-3 text-foreground-secondary">
              Vous pouvez à tout moment gérer vos préférences en matière de
              cookies via les paramètres de votre navigateur. La désactivation
              de certains cookies peut affecter votre expérience de navigation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary">
              Outils d&apos;analyse
            </h3>
            <p className="mt-3 text-foreground-secondary">
              Le site peut utiliser Google Analytics ou des outils similaires
              pour analyser le trafic et améliorer le contenu. Ces outils
              collectent des données anonymes sur la navigation. Aucune donnée
              personnelle identifiable n&apos;est transmise à des tiers à des
              fins commerciales.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary">
              Durée de conservation
            </h3>
            <p className="mt-3 text-foreground-secondary">
              Les données de navigation sont conservées pour une durée maximale
              de 13 mois conformément aux recommandations de la CNIL. Les
              cookies ont une durée de vie maximale de 13 mois.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary">Vos droits</h3>
            <p className="mt-3 text-foreground-secondary">
              Conformément au RGPD, vous disposez des droits suivants
              concernant vos données personnelles :
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-foreground-secondary">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d&apos;opposition</li>
            </ul>
            <p className="mt-3 text-foreground-secondary">
              Pour exercer ces droits, contactez-nous à l&apos;adresse :
              contact@islamreligion.fr. Vous pouvez également introduire une
              réclamation auprès de la CNIL (Commission Nationale de
              l&apos;Informatique et des Libertés).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary">
              Modification de cette politique
            </h3>
            <p className="mt-3 text-foreground-secondary">
              Cette politique de confidentialité peut être mise à jour à tout
              moment. Les modifications prennent effet dès leur publication sur
              cette page.
            </p>
          </div>
        </div>
      </section>

      {/* Retour accueil */}
      <div className="mt-16 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
