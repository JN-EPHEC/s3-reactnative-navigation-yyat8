import React from "react";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CourseStackParamList } from "../_layout";
import GradientBackground from "../../components/GradientBackground";

type Props = NativeStackScreenProps<CourseStackParamList, "CourseList">;

const COURSES = [
  {
    id: "rn101",
    title: "Introduction à React Native",
    description:
      "Apprenez à créer des applications mobiles natives avec React, en découvrant les composants, l'état et les API essentielles.",
  },
  {
    id: "js300",
    title: "JavaScript avancé",
    description:
      "Maîtrisez les closures, les patterns asynchrones et optimisez les performances pour des applications web robustes.",
  },
  {
    id: "ux210",
    title: "UI/UX pour développeurs",
    description:
      "Comprenez les principes d'accessibilité et de design pour transformer de belles interfaces en expérience utilisateur fluide.",
  },
  {
    id: "data105",
    title: "Stratégies de récupération de données",
    description:
      "Comparez REST, GraphQL et les stratégies de mise en cache pour des applications évolutives et performantes.",
  },
];

export default function CourseListScreen({ navigation }: Props) {
  function handleSelectCourse(course: (typeof COURSES)[number]) {
    navigation.navigate("CourseDetail", {
      courseId: course.id,
      title: course.title,
      description: course.description,
    });
  }

  return (
    <GradientBackground contentStyle={styles.wrapper}>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handleSelectCourse(item)}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.moreLink}>Découvrir le programme</Text>
          </Pressable>
        )}
      />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.86)",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    gap: 8,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.45)",
    shadowColor: "rgba(96, 72, 255, 0.35)",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 7,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0f172a",
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: "#475569",
  },
  moreLink: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
    color: "#6d28d9",
  },
});
