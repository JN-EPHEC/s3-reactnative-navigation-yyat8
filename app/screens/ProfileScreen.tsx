import React from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import GradientBackground from "../../components/GradientBackground";

const PRIMARY_FONT = Platform.select({
  ios: "Avenir Next",
  android: "sans-serif-medium",
  default: "System",
});

const PROFILE = {
  name: "Aya Taifour",
  role: "Étudiante en 3ᵉ année e-business, spécialisation Business Analyst à l'EPHEC",
  email: "he134023@students.ephec.be",
  location: "Bruxelles, Belgique",
  motto: "Construire des expériences numériques utiles, inclusives et orientées résultats.",
  bio: "J'aime voyager et coder pour transformer des idées en expériences concrètes.",
  summary:
    "Actuellement en dernière année d'e-business, je m'intéresse aux parcours digitaux qui allient analyse de données et empathie utilisateur. J'adore décomposer un problème, prototyper rapidement puis mesurer l'impact avec des indicateurs clairs.",
  learningGoals: [
    "Approfondir l'analyse de données métier",
    "Automatiser des processus avec des outils no-code",
    "Concevoir des tableaux de bord orientés décision",
  ],
  focusAreas: [
    "Analyse de besoins",
    "Cartographie de parcours client",
    "Data storytelling",
    "Pilotage agile",
  ],
  experiences: [
    {
      title: "Stage Business Analyst",
      subtitle: "Startup SaaS - 2024",
      description:
        "Audit du parcours d'onboarding, interviews clients et mise en place d'un tableau de bord KPI dans Notion + Looker Studio.",
      icon: "briefcase-outline" as const,
    },
    {
      title: "Projet Capstone EPHEC",
      subtitle: "Analyse d'un flux e-commerce",
      description:
        "Analyse des données de navigation et prototypage d'améliorations UX avec Figma, augmentant le taux de conversion simulé de 12%.",
      icon: "analytics-outline" as const,
    },
    {
      title: "Facilitatrice Hackathon",
      subtitle: "Hack For Future - 2023",
      description:
        "Co-animation d'un atelier d'idéation et cadrage d'un prototype de plateforme green-tech en 48 heures.",
      icon: "flash-outline" as const,
    },
  ],
  tools: ["Figma", "Notion", "Power BI", "Airtable", "Miro"],
  hobbies: ["Voyages urbains", "Hackathons", "Mentorat étudiant"],
};

export default function ProfileScreen() {
  return (
    <GradientBackground contentStyle={styles.container}>
      <View pointerEvents="none" style={styles.decorLayer}>
        <Ionicons
          name="airplane-outline"
          size={90}
          color="rgba(99, 102, 241, 0.18)"
          style={[styles.icon, styles.iconTopRight]}
        />
        <Ionicons
          name="paper-plane-outline"
          size={76}
          color="rgba(94, 84, 170, 0.2)"
          style={[styles.icon, styles.iconBottomLeft]}
        />
        <Ionicons
          name="code-slash-outline"
          size={96}
          color="rgba(63, 56, 118, 0.16)"
          style={[styles.icon, styles.iconBottomRight]}
        />
        <Ionicons
          name="globe-outline"
          size={80}
          color="rgba(129, 140, 248, 0.18)"
          style={[styles.icon, styles.iconTopLeft]}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <View style={styles.heroHeader}>
            <View>
              <Text style={styles.name}>{PROFILE.name}</Text>
              <Text style={styles.role}>{PROFILE.role}</Text>
            </View>
            <Ionicons name="sparkles-outline" size={44} color="#7469e6" />
          </View>
          <Text style={styles.motto}>{PROFILE.motto}</Text>
          <View style={styles.infoRow}>
            <View style={styles.infoChip}>
              <Ionicons name="location-outline" size={18} color="#5145cd" />
              <Text style={styles.infoText}>{PROFILE.location}</Text>
            </View>
            <View style={styles.infoChip}>
              <Ionicons name="mail-unread-outline" size={18} color="#5145cd" />
              <Text style={styles.infoText}>{PROFILE.email}</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>À propos</Text>
          <Text style={styles.summary}>{PROFILE.summary}</Text>
          <Text style={styles.value}>{PROFILE.bio}</Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Objectifs d'apprentissage</Text>
          <View style={styles.chipsRow}>
            {PROFILE.learningGoals.map((goal) => (
              <View key={goal} style={styles.chip}>
                <Ionicons name="checkmark-circle-outline" size={18} color="#5145cd" />
                <Text style={styles.chipText}>{goal}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Expériences marquantes</Text>
          <View style={styles.timeline}>
            {PROFILE.experiences.map((exp) => (
              <View key={exp.title} style={styles.timelineItem}>
                <View style={styles.timelineIcon}>
                  <Ionicons name={exp.icon} size={18} color="#5145cd" />
                </View>
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTitle}>{exp.title}</Text>
                  <Text style={styles.timelineSubtitle}>{exp.subtitle}</Text>
                  <Text style={styles.timelineDescription}>{exp.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Domaines de prédilection</Text>
          <View style={styles.badgeGrid}>
            {PROFILE.focusAreas.map((area) => (
              <View key={area} style={styles.badge}>
                <Ionicons name="ellipse-outline" size={14} color="#7469e6" />
                <Text style={styles.badgeText}>{area}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Outils favoris</Text>
          <View style={styles.toolRow}>
            {PROFILE.tools.map((tool) => (
              <View key={tool} style={styles.toolChip}>
                <Text style={styles.toolText}>{tool}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Ce qui m'inspire</Text>
          <View style={styles.chipsRow}>
            {PROFILE.hobbies.map((hobby) => (
              <View key={hobby} style={styles.softChip}>
                <Ionicons name="heart-outline" size={16} color="#f472b6" />
                <Text style={styles.softChipText}>{hobby}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 28,
    gap: 16,
  },
  decorLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  icon: {
    position: "absolute",
  },
  iconTopRight: {
    top: 30,
    right: -16,
  },
  iconBottomLeft: {
    bottom: 40,
    left: -22,
  },
  iconBottomRight: {
    bottom: -10,
    right: -12,
  },
  iconTopLeft: {
    top: -18,
    left: -14,
  },
  heroCard: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 28,
    padding: 26,
    gap: 14,
    borderWidth: 1.4,
    borderColor: "rgba(236, 236, 255, 0.8)",
    shadowColor: "rgba(81, 69, 205, 0.22)",
    shadowOpacity: 0.28,
    shadowOffset: { width: 0, height: 16 },
    shadowRadius: 26,
    elevation: 9,
  },
  heroHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#403a70",
    fontFamily: PRIMARY_FONT,
  },
  role: {
    fontSize: 16,
    fontWeight: "500",
    color: "#4f46e5",
    fontFamily: PRIMARY_FONT,
  },
  motto: {
    fontSize: 15,
    color: "#4b5563",
    fontFamily: PRIMARY_FONT,
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  infoChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(209, 213, 255, 0.35)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(129, 140, 248, 0.45)",
  },
  infoText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#403a70",
    fontFamily: PRIMARY_FONT,
  },
  sectionCard: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.93)",
    borderRadius: 24,
    padding: 24,
    gap: 12,
    borderWidth: 1.2,
    borderColor: "rgba(236, 236, 255, 0.7)",
    shadowColor: "rgba(81, 69, 205, 0.18)",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 14 },
    shadowRadius: 20,
    elevation: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#403a70",
    fontFamily: PRIMARY_FONT,
  },
  summary: {
    fontSize: 15,
    color: "#374151",
    fontFamily: PRIMARY_FONT,
    lineHeight: 22,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.7,
    color: "#5145cd",
    fontFamily: PRIMARY_FONT,
  },
  value: {
    fontSize: 15,
    color: "#4b5563",
    lineHeight: 22,
    fontFamily: PRIMARY_FONT,
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    backgroundColor: "rgba(209, 213, 255, 0.35)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1.1,
    borderColor: "rgba(129, 140, 248, 0.6)",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  chipText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#403a70",
    fontFamily: PRIMARY_FONT,
  },
  timeline: {
    gap: 14,
  },
  timelineItem: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  timelineIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(129, 140, 248, 0.18)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  timelineContent: {
    flex: 1,
    backgroundColor: "rgba(248, 249, 255, 0.9)",
    borderRadius: 16,
    padding: 14,
    gap: 6,
    borderWidth: 1,
    borderColor: "rgba(209, 213, 255, 0.6)",
  },
  timelineTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#403a70",
    fontFamily: PRIMARY_FONT,
  },
  timelineSubtitle: {
    fontSize: 13,
    color: "#4f46e5",
    fontFamily: PRIMARY_FONT,
  },
  timelineDescription: {
    fontSize: 13,
    color: "#4b5563",
    lineHeight: 20,
    fontFamily: PRIMARY_FONT,
  },
  badgeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 14,
    backgroundColor: "rgba(92, 82, 200, 0.12)",
  },
  badgeText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#403a70",
    fontFamily: PRIMARY_FONT,
  },
  toolRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  toolChip: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: "rgba(236, 233, 255, 0.7)",
    borderWidth: 1,
    borderColor: "rgba(185, 180, 255, 0.45)",
  },
  toolText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#4f46e5",
    fontFamily: PRIMARY_FONT,
  },
  softChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: "rgba(251, 207, 232, 0.3)",
    borderWidth: 1,
    borderColor: "rgba(244, 114, 182, 0.35)",
  },
  softChipText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#be185d",
    fontFamily: PRIMARY_FONT,
  },
});
