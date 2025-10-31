import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PROFILE = {
  name: "Aya Taifour",
  role: "3ème année e-business, spécialisation Business Analyst à l'EPHEC",
  email: "he134023@students.ephec.be",
  bio: "J'aime voyager et coder pour transformer des idées en expériences concrètes.",
  interests: ["Analyse de données", "Automatisation des processus", "Innovation produit"],
};

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>{PROFILE.name}</Text>
        <Text style={styles.role}>{PROFILE.role}</Text>
        <Text style={styles.sectionLabel}>Contact</Text>
        <Text style={styles.value}>{PROFILE.email}</Text>

        <Text style={styles.sectionLabel}>About</Text>
        <Text style={styles.value}>{PROFILE.bio}</Text>

        <Text style={styles.sectionLabel}>Learning Goals</Text>
        <View style={styles.chipsRow}>
          {PROFILE.interests.map((interest) => (
            <View key={interest} style={styles.chip}>
              <Text style={styles.chipText}>{interest}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f3ff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff7ed",
    borderRadius: 20,
    padding: 24,
    gap: 16,
    borderWidth: 1,
    borderColor: "#fed7aa",
    shadowColor: "#fb923c",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 16,
    elevation: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fb7185",
  },
  role: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0284c7",
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.7,
    color: "#6366f1",
  },
  value: {
    fontSize: 15,
    color: "#0f172a",
    lineHeight: 22,
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    backgroundColor: "#e0f2fe",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#bae6fd",
  },
  chipText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#0284c7",
  },
});
