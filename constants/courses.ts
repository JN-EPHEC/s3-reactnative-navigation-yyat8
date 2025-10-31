import { Ionicons } from "@expo/vector-icons";

export type CourseDecorIcon = {
  name: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string;
  style: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
};

export type CourseInfo = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  highlights: string[];
  outcomes: string[];
  readingTime: string;
  decorIcons: CourseDecorIcon[];
};

export const COURSES: CourseInfo[] = [
  {
    id: "rn101",
    title: "Introduction à React Native",
    tagline: "Construire des apps iOS/Android avec un seul code base",
    description:
      "Découverte des composants, gestion de l'état et intégration d'API pour créer des expériences mobiles performantes.",
    icon: "phone-portrait-outline",
    iconColor: "#6366f1",
    readingTime: "12 modules • 18 h de pratique",
    highlights: [
      "Navigation native, gestion de l'état et communication avec des API REST",
      "Utilisation d'Expo, configuration de thèmes et optimisation des performances",
      "Déploiement sur TestFlight et Google Play en mode bêta",
    ],
    outcomes: [
      "Savoir configurer une app mobile multiplateforme de zéro",
      "Structurer un design system réutilisable dans React Native",
      "Maîtriser les patterns de navigation Stack, Tab et Drawer",
    ],
    decorIcons: [
      {
        name: "layers-outline",
        size: 92,
        color: "rgba(99, 102, 241, 0.18)",
        style: { top: -18, left: -20 },
      },
      {
        name: "phone-landscape-outline",
        size: 82,
        color: "rgba(129, 140, 248, 0.22)",
        style: { bottom: 120, right: -16 },
      },
      {
        name: "construct-outline",
        size: 100,
        color: "rgba(79, 70, 229, 0.15)",
        style: { bottom: -24, left: -14 },
      },
    ],
  },
  {
    id: "js300",
    title: "JavaScript avancé",
    tagline: "Devenir expert en logique et performances JS",
    description:
      "Closures, patterns asynchrones, mémoire et optimisation : tout pour écrire un JavaScript solide, élégant et maintenable.",
    icon: "code-slash-outline",
    iconColor: "#f97316",
    readingTime: "9 modules • 14 h de pratique",
    highlights: [
      "Remise à niveau sur le moteur JS, la boucle d'événements et le profilage",
      "Patrons avancés pour la composition, memoization et lazy loading",
      "Construction d'une bibliothèque utilitaire typée et testée",
    ],
    outcomes: [
      "Comprendre ce qui se passe sous le capot d'une app moderne",
      "Écrire un code fiable, typé et facilement testable",
      "Savoir profiler et corriger les goulots de performances",
    ],
    decorIcons: [
      {
        name: "terminal-outline",
        size: 90,
        color: "rgba(249, 115, 22, 0.22)",
        style: { top: -20, right: -24 },
      },
      {
        name: "flash-outline",
        size: 80,
        color: "rgba(251, 191, 36, 0.18)",
        style: { bottom: 100, left: -16 },
      },
      {
        name: "git-branch-outline",
        size: 100,
        color: "rgba(217, 119, 6, 0.16)",
        style: { bottom: -14, right: -18 },
      },
    ],
  },
  {
    id: "ux210",
    title: "UI/UX pour développeurs",
    tagline: "Designer des parcours intuitifs et accessibles",
    description:
      "Principes d'accessibilité, grille, typographie et design systems pour traduire une intention UX en interface concrète.",
    icon: "color-palette-outline",
    iconColor: "#ec4899",
    readingTime: "8 modules • 10 h de pratique",
    highlights: [
      "Comprendre les heuristiques de Nielsen et les biais cognitifs",
      "Figma en pratique : variantes, auto-layout et handoff développeur",
      "Audit d'accessibilité et mise en place de tests utilisateurs rapides",
    ],
    outcomes: [
      "Parler le même langage que les designers et product owners",
      "Créer des interfaces cohérentes avec une charte graphique",
      "Mesurer et améliorer l'expérience utilisateur en continu",
    ],
    decorIcons: [
      {
        name: "color-palette-outline",
        size: 94,
        color: "rgba(236, 72, 153, 0.25)",
        style: { top: -26, left: -12 },
      },
      {
        name: "eye-outline",
        size: 76,
        color: "rgba(244, 114, 182, 0.18)",
        style: { bottom: 110, right: -18 },
      },
      {
        name: "accessibility-outline",
        size: 96,
        color: "rgba(236, 72, 153, 0.2)",
        style: { bottom: -18, left: -20 },
      },
    ],
  },
  {
    id: "data105",
    title: "Stratégies de récupération de données",
    tagline: "REST, GraphQL & caching pour scaler en douceur",
    description:
      "Comparaison des approches REST/GraphQL, mise en cache, requêtes progressives et bonnes pratiques de monitoring.",
    icon: "cloud-download-outline",
    iconColor: "#14b8a6",
    readingTime: "11 modules • 16 h de pratique",
    highlights: [
      "Stratégies de pagination, retries et gestion des erreurs réseau",
      "Implémenter un cache distribué et des webhooks événementiels",
      "Monitoring avec Sentry et dashboards temps réel",
    ],
    outcomes: [
      "Choisir la bonne stratégie d'accès aux données selon le contexte",
      "Anticiper les problèmes de scalabilité et de résilience",
      "Exposer une API documentée et facile à consommer",
    ],
    decorIcons: [
      {
        name: "cloudy-outline",
        size: 96,
        color: "rgba(20, 184, 166, 0.22)",
        style: { top: -18, right: -16 },
      },
      {
        name: "server-outline",
        size: 78,
        color: "rgba(45, 212, 191, 0.18)",
        style: { bottom: 120, left: -18 },
      },
      {
        name: "pulse-outline",
        size: 90,
        color: "rgba(19, 194, 194, 0.16)",
        style: { bottom: -16, right: -12 },
      },
    ],
  },
  {
    id: "ai210",
    title: "Prototyper avec l'IA générative",
    tagline: "Utiliser l'IA comme copilote produit/design",
    description:
      "Prompting, génération de maquettes et assistants spécialisés pour accélérer la phase de conception sans perdre en qualité.",
    icon: "sparkles-outline",
    iconColor: "#8b5cf6",
    readingTime: "7 modules • 9 h de pratique",
    highlights: [
      "Écrire des prompts ciblés pour créer personas, user stories et briefs",
      "Générer wireframes, copies marketing et guidelines multicanaux",
      "Monter un assistant sur mesure pour guider les équipes produit",
    ],
    outcomes: [
      "Accélérer la conception sans sacrifier la cohérence produit",
      "Collaborer efficacement entre humains et IA générative",
      "Mettre en place une charte d'utilisation responsable de l'IA",
    ],
    decorIcons: [
      {
        name: "planet-outline",
        size: 92,
        color: "rgba(139, 92, 246, 0.2)",
        style: { top: -24, left: -18 },
      },
      {
        name: "sparkles-outline",
        size: 74,
        color: "rgba(192, 132, 252, 0.24)",
        style: { bottom: 120, right: -12 },
      },
      {
        name: "bulb-outline",
        size: 96,
        color: "rgba(168, 85, 247, 0.2)",
        style: { bottom: -18, left: -10 },
      },
    ],
  },
];
