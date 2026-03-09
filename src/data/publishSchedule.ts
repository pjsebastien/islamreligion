export interface ScheduledArticle {
  slug: string;
  label: string;
  publishDate: string;
  category:
    | "animaux"
    | "actions"
    | "objets"
    | "nourriture"
    | "lieux"
    | "personnes"
    | "nature"
    | "spirituel";
  image: string;
}

export const publishSchedule: ScheduledArticle[] = [
  // ARTICLES EXISTANTS (déjà publiés)
  { slug: "rever-chat-islam-symbolisme", label: "Rêver de chat en islam", publishDate: "2025-08-01", category: "animaux", image: "/images/croissant-lune-lanterne-islam-decoration-pastel.jpg" },
  { slug: "rever-perdre-dents-islam", label: "Rêver de perdre ses dents en islam", publishDate: "2025-08-05", category: "actions", image: "/images/motifs-geometriques-islam-croissant-etoile.jpg" },
  { slug: "rever-enceinte-islam", label: "Rêver d'être enceinte en islam", publishDate: "2025-08-10", category: "actions", image: "/images/femme-musulmane-hijab-lecture-coran-islam.jpg" },
  { slug: "rever-accoucher-islam", label: "Rêver d'accoucher en islam", publishDate: "2025-08-15", category: "actions", image: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg" },
  { slug: "rever-chien-islam-signification", label: "Rêver de chien en islam", publishDate: "2025-08-20", category: "animaux", image: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg" },
  { slug: "rever-mort-islam-messages", label: "Rêver d'un mort en islam", publishDate: "2025-09-01", category: "personnes", image: "/images/priere-islam-doua-mosquee-silhouette.jpg" },
  { slug: "rever-crocodile-islam-protection", label: "Rêver de crocodile en islam", publishDate: "2025-09-10", category: "animaux", image: "/images/symbole-islam-croissant-etoile-dore-mosquee.jpg" },
  { slug: "rever-souris-islam", label: "Rêver de souris en islam", publishDate: "2025-09-15", category: "animaux", image: "/images/coran-ouvert-chapelet-bois-islam-versets.jpg" },
  { slug: "rever-poux-islam-protection", label: "Rêver de poux en islam", publishDate: "2025-09-20", category: "animaux", image: "/images/mains-priere-doua-islam-invocation.jpg" },
  { slug: "rever-tirer-dessus-islam", label: "Rêver de se faire tirer dessus en islam", publishDate: "2025-09-25", category: "actions", image: "/images/dome-mosquee-croissant-lune-islam-architecture.jpg" },
  { slug: "rever-rat-islam-purification", label: "Rêver de rat en islam", publishDate: "2025-10-01", category: "animaux", image: "/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg" },

  // HAUTE PRIORITÉ — jour 1 à 15
  { slug: "rever-argent-or-islam", label: "Rêver d'argent, de billets ou d'or", publishDate: "2026-03-07", category: "objets", image: "/images/croissant-lune-dore-etoiles-symbole-islam.jpg" },
  { slug: "rever-bebe-nouveau-ne-islam", label: "Rêver de bébé ou de nouveau-né", publishDate: "2026-03-08", category: "personnes", image: "/images/croissant-lune-lanterne-islam-decoration-pastel.jpg" },
  { slug: "rever-eau-mer-nager-islam", label: "Rêver d'eau, de mer ou de nager", publishDate: "2026-03-09", category: "nature", image: "/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg" },
  { slug: "rever-caca-toilettes-islam", label: "Rêver de caca ou de toilettes", publishDate: "2026-03-10", category: "actions", image: "/images/motifs-geometriques-islam-croissant-etoile.jpg" },
  { slug: "rever-perdre-cheveux-islam", label: "Rêver de perdre ses cheveux", publishDate: "2026-03-11", category: "actions", image: "/images/dome-mosquee-croissant-lune-islam-architecture.jpg" },
  { slug: "rever-accident-voiture-islam", label: "Rêver d'accident de voiture", publishDate: "2026-03-12", category: "actions", image: "/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg" },
  { slug: "rever-viande-islam", label: "Rêver de viande", publishDate: "2026-03-13", category: "nourriture", image: "/images/ramadan-islam-lanternes-orientales-croissant-dattes.jpg" },
  { slug: "rever-feu-incendie-islam", label: "Rêver de feu ou d'incendie", publishDate: "2026-03-14", category: "nature", image: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg" },
  { slug: "rever-bague-bijoux-islam", label: "Rêver de bague ou de bijoux", publishDate: "2026-03-15", category: "objets", image: "/images/motif-arabesque-islamique-geometrie-dore.jpg" },
  { slug: "rever-lire-coran-islam", label: "Rêver de lire ou réciter le Coran", publishDate: "2026-03-16", category: "spirituel", image: "/images/coran-ouvert-chapelet-bois-islam-versets.jpg" },
  { slug: "rever-lion-islam", label: "Rêver de lion", publishDate: "2026-03-17", category: "animaux", image: "/images/symbole-islam-croissant-etoile-dore-mosquee.jpg" },
  { slug: "rever-voyage-islam", label: "Rêver de voyage", publishDate: "2026-03-18", category: "actions", image: "/images/grande-mosquee-blanche-minarets-islam-architecture.jpg" },
  { slug: "rever-regles-islam", label: "Rêver d'avoir ses règles", publishDate: "2026-03-19", category: "actions", image: "/images/femme-musulmane-hijab-lecture-coran-islam.jpg" },
  { slug: "rever-chaussures-islam", label: "Rêver de chaussures", publishDate: "2026-03-20", category: "objets", image: "/images/motifs-geometriques-islam-croissant-etoile.jpg" },
  { slug: "rever-asticot-ver-islam", label: "Rêver d'asticots ou de vers", publishDate: "2026-03-21", category: "animaux", image: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg" },

  // MOYENNE PRIORITÉ — jour 16 à 44
  { slug: "rever-tortue-islam", label: "Rêver de tortue", publishDate: "2026-03-22", category: "animaux", image: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg" },
  { slug: "rever-parfum-islam", label: "Rêver de parfum", publishDate: "2026-03-23", category: "objets", image: "/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg" },
  { slug: "rever-dispute-bagarre-islam", label: "Rêver de dispute ou de bagarre", publishDate: "2026-03-24", category: "actions", image: "/images/priere-islam-doua-mosquee-silhouette.jpg" },
  { slug: "rever-pere-islam", label: "Rêver de son père", publishDate: "2026-03-25", category: "personnes", image: "/images/famille-musulmane-islam-croissant-lune-valeurs.jpg" },
  { slug: "rever-mecque-kaaba-islam", label: "Rêver de la Mecque ou de la Kaaba", publishDate: "2026-03-26", category: "lieux", image: "/images/kaaba-mecque-islam-lieu-saint.jpg" },
  { slug: "rever-miel-islam", label: "Rêver de miel", publishDate: "2026-03-27", category: "nourriture", image: "/images/ramadan-islam-lanternes-orientales-croissant-dattes.jpg" },
  { slug: "rever-mouton-agneau-islam", label: "Rêver de mouton ou d'agneau", publishDate: "2026-03-28", category: "animaux", image: "/images/decoration-ramadan-islam-lanternes-croissant-lune.jpg" },
  { slug: "rever-tigre-islam", label: "Rêver de tigre", publishDate: "2026-03-29", category: "animaux", image: "/images/symbole-islam-croissant-etoile-dore-mosquee.jpg" },
  { slug: "rever-prison-islam", label: "Rêver de prison", publishDate: "2026-03-30", category: "lieux", image: "/images/mains-priere-doua-islam-invocation.jpg" },
  { slug: "rever-pain-islam", label: "Rêver de pain", publishDate: "2026-03-31", category: "nourriture", image: "/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg" },
  { slug: "rever-abeille-guepe-islam", label: "Rêver d'abeille ou de guêpe", publishDate: "2026-04-01", category: "animaux", image: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg" },
  { slug: "rever-corbeau-islam", label: "Rêver de corbeau", publishDate: "2026-04-02", category: "animaux", image: "/images/croissant-lune-dore-etoiles-symbole-islam.jpg" },
  { slug: "rever-dattes-islam", label: "Rêver de dattes", publishDate: "2026-04-03", category: "nourriture", image: "/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg" },
  { slug: "rever-pigeon-oiseau-islam", label: "Rêver de pigeon ou d'oiseau", publishDate: "2026-04-04", category: "animaux", image: "/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg" },
  { slug: "rever-vomir-islam", label: "Rêver de vomir", publishDate: "2026-04-05", category: "actions", image: "/images/mains-priere-doua-islam-invocation.jpg" },
  { slug: "rever-vache-islam", label: "Rêver de vache", publishDate: "2026-04-06", category: "animaux", image: "/images/decoration-ramadan-islam-lanternes-croissant-lune.jpg" },
  { slug: "rever-poule-coq-islam", label: "Rêver de poule ou de coq", publishDate: "2026-04-07", category: "animaux", image: "/images/croissant-lune-lanterne-islam-decoration-pastel.jpg" },
  { slug: "rever-gateau-islam", label: "Rêver de gâteau", publishDate: "2026-04-08", category: "nourriture", image: "/images/ramadan-islam-lanternes-orientales-croissant-dattes.jpg" },
  { slug: "rever-elephant-islam", label: "Rêver d'éléphant", publishDate: "2026-04-09", category: "animaux", image: "/images/grande-mosquee-blanche-minarets-islam-architecture.jpg" },
  { slug: "rever-ane-islam", label: "Rêver d'âne", publishDate: "2026-04-10", category: "animaux", image: "/images/dome-mosquee-croissant-lune-islam-architecture.jpg" },
  { slug: "rever-voler-airs-islam", label: "Rêver de voler dans les airs", publishDate: "2026-04-11", category: "actions", image: "/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg" },
  { slug: "rever-president-islam", label: "Rêver de président", publishDate: "2026-04-12", category: "personnes", image: "/images/islam-science-savoir-connaissance-livre.jpg" },
  { slug: "rever-divorce-islam", label: "Rêver de divorce", publishDate: "2026-04-13", category: "actions", image: "/images/priere-islam-doua-mosquee-silhouette.jpg" },
  { slug: "rever-couteau-islam", label: "Rêver de couteau", publishDate: "2026-04-14", category: "objets", image: "/images/motif-arabesque-islamique-geometrie-dore.jpg" },
  { slug: "rever-ablutions-islam", label: "Rêver de faire ses ablutions", publishDate: "2026-04-15", category: "spirituel", image: "/images/prosternation-sujud-priere-islam-mosquee.jpg" },
  { slug: "rever-lune-islam", label: "Rêver de lune", publishDate: "2026-04-16", category: "nature", image: "/images/croissant-lune-dore-etoiles-symbole-islam.jpg" },
  { slug: "rever-cimetiere-islam", label: "Rêver de cimetière", publishDate: "2026-04-17", category: "lieux", image: "/images/priere-islam-doua-mosquee-silhouette.jpg" },
  { slug: "rever-couscous-islam", label: "Rêver de couscous", publishDate: "2026-04-18", category: "nourriture", image: "/images/ramadan-islam-lanternes-orientales-croissant-dattes.jpg" },
  { slug: "rever-vol-islam", label: "Rêver d'être victime de vol", publishDate: "2026-04-19", category: "actions", image: "/images/mains-priere-doua-islam-invocation.jpg" },

  // BASSE PRIORITÉ — jour 45 à 66
  { slug: "rever-orange-islam", label: "Rêver d'orange", publishDate: "2026-04-20", category: "nourriture", image: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg" },
  { slug: "rever-figue-islam", label: "Rêver de figue", publishDate: "2026-04-21", category: "nourriture", image: "/images/coran-ouvert-chapelet-bois-islam-versets.jpg" },
  { slug: "rever-personne-aimee-islam", label: "Rêver de quelqu'un qu'on aime", publishDate: "2026-04-22", category: "personnes", image: "/images/famille-musulmane-islam-croissant-lune-valeurs.jpg" },
  { slug: "rever-inondation-islam", label: "Rêver d'inondation", publishDate: "2026-04-23", category: "nature", image: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg" },
  { slug: "rever-fausse-couche-islam", label: "Rêver de fausse couche", publishDate: "2026-04-24", category: "actions", image: "/images/femme-musulmane-hijab-lecture-coran-islam.jpg" },
  { slug: "rever-livre-islam", label: "Rêver de livre", publishDate: "2026-04-25", category: "objets", image: "/images/islam-science-savoir-connaissance-livre.jpg" },
  { slug: "rever-papillon-islam", label: "Rêver de papillon", publishDate: "2026-04-26", category: "animaux", image: "/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg" },
  { slug: "rever-guerre-islam", label: "Rêver de guerre", publishDate: "2026-04-27", category: "actions", image: "/images/priere-islam-doua-mosquee-silhouette.jpg" },
  { slug: "rever-chameau-islam", label: "Rêver de chameau", publishDate: "2026-04-28", category: "animaux", image: "/images/dome-mosquee-croissant-lune-islam-architecture.jpg" },
  { slug: "rever-lapin-islam", label: "Rêver de lapin", publishDate: "2026-04-29", category: "animaux", image: "/images/croissant-lune-lanterne-islam-decoration-pastel.jpg" },
  { slug: "rever-grenouille-islam", label: "Rêver de grenouille", publishDate: "2026-04-30", category: "animaux", image: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg" },
  { slug: "rever-maison-islam", label: "Rêver de maison", publishDate: "2026-05-01", category: "lieux", image: "/images/grande-mosquee-blanche-minarets-islam-architecture.jpg" },
  { slug: "rever-cle-islam", label: "Rêver de clé", publishDate: "2026-05-02", category: "objets", image: "/images/motif-arabesque-islamique-geometrie-dore.jpg" },
  { slug: "rever-aigle-islam", label: "Rêver d'aigle", publishDate: "2026-05-03", category: "animaux", image: "/images/symbole-islam-croissant-etoile-dore-mosquee.jpg" },
  { slug: "rever-scorpion-islam", label: "Rêver de scorpion", publishDate: "2026-05-04", category: "animaux", image: "/images/mains-priere-doua-islam-invocation.jpg" },
  { slug: "rever-charbon-islam", label: "Rêver de charbon", publishDate: "2026-05-05", category: "objets", image: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg" },
  { slug: "rever-cancer-islam", label: "Rêver de cancer", publishDate: "2026-05-06", category: "actions", image: "/images/mains-priere-doua-islam-invocation.jpg" },
  { slug: "rever-marabout-islam", label: "Rêver de marabout", publishDate: "2026-05-07", category: "personnes", image: "/images/coran-chapelet-tasbih-islam-livre-sacre.jpg" },
  { slug: "rever-loup-islam", label: "Rêver de loup", publishDate: "2026-05-08", category: "animaux", image: "/images/symbole-islam-croissant-etoile-dore-mosquee.jpg" },
  { slug: "rever-singe-islam", label: "Rêver de singe", publishDate: "2026-05-09", category: "animaux", image: "/images/motifs-geometriques-islam-croissant-etoile.jpg" },
  { slug: "rever-hibou-chouette-islam", label: "Rêver de hibou ou de chouette", publishDate: "2026-05-10", category: "animaux", image: "/images/croissant-lune-dore-etoiles-symbole-islam.jpg" },
  { slug: "rever-menage-islam", label: "Rêver de faire le ménage", publishDate: "2026-05-11", category: "actions", image: "/images/decoration-ramadan-islam-lanternes-croissant-lune.jpg" },
];

export function isPublished(publishDate: string): boolean {
  const pub = new Date(publishDate + "T00:00:00");
  const now = new Date();
  return pub <= now;
}
