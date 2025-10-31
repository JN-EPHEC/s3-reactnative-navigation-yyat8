import React from "react";
import { StyleSheet, Text, View } from "react-native";

import GradientBackground from "../../components/GradientBackground";

const PROFILE = {
  name: "Aya Taifour",
  role: "Étudiante en 3ᵉ année e-business, spécialisation Business Analyst à l'EPHEC",
  email: "he134023@students.ephec.be",
  bio: "J'aime voyager et coder pour transformer des idées en expériences concrètes.",
  learningGoals: [
    "Approfondir l'analyse de données métier",
    "Automatiser des processus avec des outils no-code",
    "Concevoir des tableaux de bord orientés décision",
  ],
};

export default function ProfileScreen() {
  return (
    <GradientBackground contentStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>{PROFILE.name}</Text>
        <Text style={styles.role}>{PROFILE.role}</Text>
        <Text style={styles.sectionLabel}>Mes coordonnées</Text>
        <Text style={styles.value}>{PROFILE.email}</Text>

        <Text style={styles.sectionLabel}>À propos</Text>
        <Text style={styles.value}>{PROFILE.bio}</Text>

        <Text style={styles.sectionLabel}>Objectifs d'apprentissage</Text>
        <View style={styles.chipsRow}>
          {PROFILE.learningGoals.map((goal) => (
            <View key={goal} style={styles.chip}>
              <Text style={styles.chipText}>{goal}</Text>
            </View>
          ))}
        </View>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 24,
    padding: 26,
    gap: 16,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.55)",
    shadowColor: "rgba(76, 72, 255, 0.36)",
    shadowOpacity: 0.33,
    shadowOffset: { width: 0, height: 14 },
    shadowRadius: 26,
    elevation: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#5b21b6",
  },
  role: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1d4ed8",
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.7,
    color: "#4338ca",
  },
  value: {
    fontSize: 15,
    color: "#1f2937",
    lineHeight: 22,
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    backgroundColor: "rgba(148, 163, 255, 0.25)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1.2,
    borderColor: "rgba(99, 102, 241, 0.6)",
  },
  chipText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#312e81",
  },
});
