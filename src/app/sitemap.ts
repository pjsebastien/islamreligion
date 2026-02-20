import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.islamreligion.fr";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/apprendre-larabe`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/apprendre-le-coran`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reves-islam`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/remede-arabe`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Articles rêves - Tier 1
    {
      url: `${baseUrl}/rever-souris-islam`,
      lastModified: new Date("2025-09-05"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reve-poisson-islam-richesse`,
      lastModified: new Date("2025-09-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/signification-reve-tuer-islam`,
      lastModified: new Date("2025-09-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pleurer-reve-islam-compassion`,
      lastModified: new Date("2025-09-19"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reve-arachnide-islam`,
      lastModified: new Date("2025-09-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rever-tirer-dessus-islam`,
      lastModified: new Date("2025-09-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rever-mort-islam-messages`,
      lastModified: new Date("2025-09-03"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sorcellerie-islam-protection`,
      lastModified: new Date("2025-09-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rever-chien-islam-signification`,
      lastModified: new Date("2025-09-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Articles rêves - Tier 2
    {
      url: `${baseUrl}/reve-cheval-islam-bienfaits`,
      lastModified: new Date("2025-09-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rever-perdre-dents-islam`,
      lastModified: new Date("2025-08-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rever-rat-islam-purification`,
      lastModified: new Date("2025-10-03"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/symbolisme-fourmis-islam`,
      lastModified: new Date("2025-09-08"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reves-ex-islam`,
      lastModified: new Date("2025-08-29"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rever-poux-islam-protection`,
      lastModified: new Date("2025-09-11"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rever-enceinte-islam`,
      lastModified: new Date("2025-08-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rever-chat-islam-symbolisme`,
      lastModified: new Date("2025-08-21"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rever-crocodile-islam-protection`,
      lastModified: new Date("2025-09-18"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cafard-islam-signification`,
      lastModified: new Date("2025-09-04"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Articles rêves - Tier 3
    {
      url: `${baseUrl}/rever-accoucher-islam`,
      lastModified: new Date("2025-08-24"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/reve-erotique-islam-purification`,
      lastModified: new Date("2025-08-31"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/mariage-islam-presages-significations`,
      lastModified: new Date("2025-08-27"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Articles thématiques
    {
      url: `${baseUrl}/temoins-crime-islam-protection`,
      lastModified: new Date("2025-09-07"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/prier-islam-excellence-spirituelle`,
      lastModified: new Date("2025-09-19"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fin-monde-islam-preparation`,
      lastModified: new Date("2025-09-10"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/priere-voyageur-islam`,
      lastModified: new Date("2025-08-24"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/peches-sexualite-islam`,
      lastModified: new Date("2025-08-21"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/abandon-priere-islam-consequences`,
      lastModified: new Date("2025-08-23"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Eschatologie
    {
      url: `${baseUrl}/signes-fin-monde-islam`,
      lastModified: new Date("2025-08-19"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/dajjal-signes-islam`,
      lastModified: new Date("2025-08-19"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/retour-jesus-islam`,
      lastModified: new Date("2025-08-19"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/gog-magog-liberation-fin-des-temps`,
      lastModified: new Date("2025-08-19"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/signes-mineurs-actuels`,
      lastModified: new Date("2025-08-19"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Jurisprudence et pratique
    {
      url: `${baseUrl}/halal-haram-criteres`,
      lastModified: new Date("2025-08-19"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/jurisprudence-islamique-coran-sunna-ijma`,
      lastModified: new Date("2025-08-19"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/istikhara-priere-consultation`,
      lastModified: new Date("2025-08-24"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/invocations-reussite-facilite`,
      lastModified: new Date("2025-08-23"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Mariage et famille
    {
      url: `${baseUrl}/mariage-islamique-contrat`,
      lastModified: new Date("2025-08-26"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/divorce-islam-talaq-khula`,
      lastModified: new Date("2025-08-27"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/droits-femme-divorce-islamique`,
      lastModified: new Date("2025-08-27"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/maternite-islam-responsabilite`,
      lastModified: new Date("2026-01-14"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Spiritualité et repentir
    {
      url: `${baseUrl}/conditions-maghfira-pardon`,
      lastModified: new Date("2025-08-21"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/repentir-sincere-islam-tawba`,
      lastModified: new Date("2025-08-22"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Éducation
    {
      url: `${baseUrl}/apprendre-science-religieuse-islam`,
      lastModified: new Date("2025-08-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Remèdes arabes
    {
      url: `${baseUrl}/remede-yeux-islam-soins`,
      lastModified: new Date("2025-09-10"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/remede-arabe-endometriose`,
      lastModified: new Date("2025-11-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/alopecie-remede-islam`,
      lastModified: new Date("2025-09-12"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/remede-arabe-acouphene`,
      lastModified: new Date("2025-09-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/psoriasis-remede-arabe`,
      lastModified: new Date("2025-09-16"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/remede-arabe-arreter-fumer`,
      lastModified: new Date("2025-09-18"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/remede-arabe-constipation`,
      lastModified: new Date("2025-09-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/remede-arabe-hemorroides`,
      lastModified: new Date("2025-09-22"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/remede-arabe-toux-soins-naturels`,
      lastModified: new Date("2025-09-24"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/remede-angoisse-islam`,
      lastModified: new Date("2025-09-26"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/remede-arabe-grossesse`,
      lastModified: new Date("2025-09-28"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/remede-arabe-maigrir-islam`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Pages institutionnelles
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
