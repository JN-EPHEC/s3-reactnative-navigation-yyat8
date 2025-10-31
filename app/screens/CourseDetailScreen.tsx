import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CourseStackParamList } from "../_layout";
import GradientBackground from "../../components/GradientBackground";

type Props = NativeStackScreenProps<CourseStackParamList, "CourseDetail">;

export default function CourseDetailScreen({ route }: Props) {
  const { courseId, title, description } = route.params;

  return (
    <GradientBackground contentStyle={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.label}>Identifiant du cours</Text>
        <Text style={styles.value}>{courseId}</Text>

        <Text style={styles.label}>Titre</Text>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.label}>Description</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Touchez le bouton Retour pour revenir à la liste des cours.
          </Text>
        </View>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 24,
    padding: 28,
    gap: 14,
    borderWidth: 1.5,
    borderColor: "rgba(250, 250, 255, 0.65)",
    shadowColor: "rgba(80, 63, 205, 0.4)",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 14 },
    shadowRadius: 28,
    elevation: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: "#6b21a8",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4338ca",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1d4ed8",
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#1f2937",
  },
  footer: {
    marginTop: 8,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "rgba(148, 163, 184, 0.3)",
  },
  footerText: {
    fontSize: 13,
    color: "#475569",
  },
});
