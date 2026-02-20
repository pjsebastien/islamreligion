import Link from "next/link";
import Image from "next/image";

const silos = [
  {
    title: "Islam",
    links: [
      { href: "/", label: "La religion musulmane" },
      { href: "/apprendre-larabe", label: "Apprendre l'arabe" },
      { href: "/apprendre-le-coran", label: "Apprendre le Coran" },
      { href: "/apprendre-science-religieuse-islam", label: "Science religieuse" },
    ],
  },
  {
    title: "Pratique",
    links: [
      { href: "/prier-islam-excellence-spirituelle", label: "Prier avec excellence" },
      { href: "/halal-haram-criteres", label: "Halal et haram" },
      { href: "/istikhara-priere-consultation", label: "Prière de consultation" },
      { href: "/mariage-islamique-contrat", label: "Mariage islamique" },
      { href: "/repentir-sincere-islam-tawba", label: "Repentir sincère" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "/reves-islam", label: "Interprétation des rêves" },
      { href: "/remede-arabe", label: "Remèdes arabes" },
      { href: "/fin-monde-islam-preparation", label: "Fin des temps" },
      { href: "/sorcellerie-islam-protection", label: "Protection spirituelle" },
      { href: "/invocations-reussite-facilite", label: "Invocations" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/90">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/favicon-islam.ico"
                alt="Logo IslamReligion"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="text-xl font-bold text-white">
                Islam<span className="text-secondary">Religion</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Comprendre l&apos;Islam à travers ses enseignements authentiques,
              ses valeurs et sa spiritualité.
            </p>
          </div>

          {/* Silos de liens */}
          {silos.map((silo) => (
            <div key={silo.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                {silo.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {silo.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Séparateur + copyright */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/50">
            &copy; {new Date().getFullYear()} IslamReligion.fr — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
