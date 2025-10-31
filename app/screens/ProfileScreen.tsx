import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PROFILE = {
  name: "Alex Martin",
  role: "Product Designer & Frontend Developer",
  email: "alex.martin@example.com",
  bio: "Curious about crafting human-centered experiences and mentoring junior developers.",
  interests: ["React Native", "Motion Design", "Design Systems"],
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
    backgroundColor: "#f1f5f9",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    gap: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 6,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0f172a",
  },
  role: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2563eb",
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.7,
    color: "#64748b",
  },
  value: {
    fontSize: 15,
    color: "#1e293b",
    lineHeight: 22,
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    backgroundColor: "#eff6ff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#bfdbfe",
  },
  chipText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1d4ed8",
  },
});
