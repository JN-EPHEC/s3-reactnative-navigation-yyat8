import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CourseStackParamList } from "../_layout";

type Props = NativeStackScreenProps<CourseStackParamList, "CourseDetail">;

export default function CourseDetailScreen({ route }: Props) {
  const { courseId, title, description } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Course ID</Text>
        <Text style={styles.value}>{courseId}</Text>

        <Text style={styles.label}>Title</Text>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.label}>Description</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3ff",
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff9f2",
    borderRadius: 16,
    padding: 24,
    gap: 12,
    borderWidth: 1,
    borderColor: "#fcd7c2",
    shadowColor: "#fb923c",
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 6,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: "#7c3aed",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#f97316",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#dc2626",
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#334155",
  },
});
