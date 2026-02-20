import Image from "next/image";
import Link from "next/link";

interface HeroStat {
  value: string;
  label: string;
}

interface HeroCta {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  stats?: HeroStat[];
  ctas?: HeroCta[];
  compact?: boolean;
}

function IslamicPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.04]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="islamic-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          {/* Octogone central */}
          <polygon
            points="40,4 56,12 64,28 64,52 56,68 40,76 24,68 16,52 16,28 24,12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Étoile intérieure à 8 branches */}
          <polygon
            points="40,14 46,28 60,28 50,38 54,52 40,44 26,52 30,38 20,28 34,28"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          {/* Losanges de connexion */}
          <line x1="0" y1="0" x2="16" y2="28" stroke="currentColor" strokeWidth="0.5" />
          <line x1="80" y1="0" x2="64" y2="28" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="80" x2="16" y2="52" stroke="currentColor" strokeWidth="0.5" />
          <line x1="80" y1="80" x2="64" y2="52" stroke="currentColor" strokeWidth="0.5" />
          {/* Petit cercle central */}
          <circle cx="40" cy="40" r="4" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-geo)" />
    </svg>
  );
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  stats,
  ctas,
  compact = false,
}: HeroProps) {
  if (compact) {
    return (
      <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden lg:min-h-[380px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary/70 to-primary-dark/90" />
        <IslamicPattern />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-primary-dark">
      {/* Motif géométrique islamique en fond */}
      <IslamicPattern />

      {/* Accent doré subtil en haut */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[560px] items-center gap-8 py-16 lg:min-h-[620px] lg:grid-cols-2 lg:gap-12 lg:py-20">
          {/* Colonne gauche : texte */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-secondary">
                Ressource francophone sur l&apos;islam
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
                {subtitle}
              </p>
            )}

            {/* CTAs */}
            {ctas && ctas.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {ctas.map((cta) => (
                  <Link
                    key={cta.href}
                    href={cta.href}
                    className={
                      cta.variant === "secondary"
                        ? "inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
                        : "inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-secondary/25 transition-all hover:bg-secondary-light hover:shadow-secondary/40"
                    }
                  >
                    {cta.label}
                    {cta.variant !== "secondary" && (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Colonne droite : image */}
          <div className="relative order-1 lg:order-2">
            {/* Cadre décoratif doré */}
            <div className="absolute -inset-3 rounded-2xl border border-secondary/20 lg:-inset-4 lg:rounded-3xl" />
            <div className="absolute -inset-6 rounded-3xl border border-secondary/10 hidden lg:block lg:-inset-8" />

            {/* Image principale */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:rounded-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
            </div>

            {/* Élément décoratif coin */}
            <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-xl border border-secondary/30 bg-primary-dark lg:-bottom-5 lg:-right-5 lg:h-20 lg:w-20 lg:rounded-2xl">
              <svg className="h-full w-full p-3 text-secondary lg:p-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.09 8.26L20.18 8.26L15.54 12.14L17.63 18.4L12 14.52L6.37 18.4L8.46 12.14L3.82 8.26L9.91 8.26L12 2Z" fill="currentColor" opacity="0.3" />
                <path d="M12 6L13.18 9.65L16.94 9.65L13.88 11.97L15.06 15.62L12 13.3L8.94 15.62L10.12 11.97L7.06 9.65L10.82 9.65L12 6Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de stats */}
      {stats && stats.length > 0 && (
        <div className="relative z-10 border-t border-white/10 bg-primary-dark/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-3 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="px-4 py-6 text-center lg:px-8 lg:py-8">
                  <p className="text-2xl font-bold text-secondary lg:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-white/60 lg:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
