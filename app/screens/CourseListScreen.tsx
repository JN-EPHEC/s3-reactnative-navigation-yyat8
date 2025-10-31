import React from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CourseStackParamList } from "../_layout";

type Props = NativeStackScreenProps<CourseStackParamList, "CourseList">;

const COURSES = [
  {
    id: "rn101",
    title: "Intro to React Native",
    description:
      "Build native mobile apps using React. Learn components, state, and core APIs.",
  },
  {
    id: "js300",
    title: "Advanced JavaScript",
    description:
      "Deep dive into closures, async patterns, and performance profiling.",
  },
  {
    id: "ux210",
    title: "UI/UX for Developers",
    description:
      "Design accessible, beautiful interfaces and translate them into code.",
  },
  {
    id: "data105",
    title: "Data Fetching Strategies",
    description:
      "Compare REST, GraphQL, and caching patterns for scalable apps.",
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
    <View style={styles.container}>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.id}
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
            <Text style={styles.moreLink}>View details →</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf7ff",
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff8f2",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    gap: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#ffe2d5",
    shadowColor: "#ffa94d",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
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
    color: "#f97316",
  },
});
