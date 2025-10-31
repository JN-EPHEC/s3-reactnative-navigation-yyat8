import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CourseStackParamList } from "../_layout";
import GradientBackground from "../../components/GradientBackground";

type Props = NativeStackScreenProps<CourseStackParamList, "CourseDetail">;

const PRIMARY_FONT = Platform.select({
  ios: "Avenir Next",
  android: "sans-serif-medium",
  default: "System",
});

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
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    borderRadius: 24,
    padding: 28,
    gap: 14,
    borderWidth: 1.4,
    borderColor: "rgba(236, 236, 255, 0.7)",
    shadowColor: "rgba(81, 69, 205, 0.25)",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 14 },
    shadowRadius: 24,
    elevation: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: "#5145cd",
    fontFamily: PRIMARY_FONT,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#403a70",
    fontFamily: PRIMARY_FONT,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2d2a44",
    fontFamily: PRIMARY_FONT,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#4b5563",
    fontFamily: PRIMARY_FONT,
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
    fontFamily: PRIMARY_FONT,
  },
});
