import React from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { CourseStackParamList } from "../_layout";
import GradientBackground from "../../components/GradientBackground";

type Props = NativeStackScreenProps<CourseStackParamList, "CourseList">;

const PRIMARY_FONT = Platform.select({
  ios: "Avenir Next",
  android: "sans-serif-medium",
  default: "System",
});

type CourseCard = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
};

const COURSES: CourseCard[] = [
  {
    id: "rn101",
    title: "Introduction à React Native",
    tagline: "Construire des apps iOS/Android avec un seul code base",
    icon: "phone-portrait-outline" as const,
    iconColor: "#6366f1",
    description:
      "Découverte des composants, gestion de l'état et intégration d'API pour créer des expériences mobiles performantes.",
  },
  {
    id: "js300",
    title: "JavaScript avancé",
    tagline: "Devenir expert en logique et performances JS",
    icon: "code-slash-outline" as const,
    iconColor: "#f97316",
    description:
      "Closures, patterns asynchrones, mémoire et optimisation : tout pour écrire un JavaScript solide, élégant et maintenable.",
  },
  {
    id: "ux210",
    title: "UI/UX pour développeurs",
    tagline: "Designer des parcours intuitifs et accessibles",
    icon: "color-palette-outline" as const,
    iconColor: "#ec4899",
    description:
      "Principes d'accessibilité, grille, typographie et design systems pour traduire une intention UX en interface concrète.",
  },
  {
    id: "data105",
    title: "Stratégies de récupération de données",
    tagline: "REST, GraphQL & caching pour scaler en douceur",
    icon: "cloud-download-outline" as const,
    iconColor: "#14b8a6",
    description:
      "Comparaison des approches REST/GraphQL, mise en cache, requêtes progressives et bonnes pratiques de monitoring.",
  },
  {
    id: "ai210",
    title: "Prototyper avec l'IA générative",
    tagline: "Utiliser l'IA comme copilote produit/design",
    icon: "sparkles-outline" as const,
    iconColor: "#8b5cf6",
    description:
      "Prompting, génération de maquettes et assistants spécialisés pour accélérer la phase de conception sans perdre en qualité.",
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
      <View pointerEvents="none" style={styles.decorLayer}>
        <Ionicons
          name="book-outline"
          size={88}
          color="rgba(80, 70, 205, 0.18)"
          style={[styles.icon, styles.iconTopLeft]}
        />
        <Ionicons
          name="bar-chart-outline"
          size={72}
          color="rgba(79, 110, 227, 0.16)"
          style={[styles.icon, styles.iconTopRight]}
        />
        <Ionicons
          name="code-slash-outline"
          size={84}
          color="rgba(64, 58, 112, 0.16)"
          style={[styles.icon, styles.iconBottomLeft]}
        />
        <Ionicons
          name="school-outline"
          size={96}
          color="rgba(113, 102, 255, 0.14)"
          style={[styles.icon, styles.iconBottomRight]}
        />
      </View>

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
            <View style={styles.headerRow}>
              <View
                style={[
                  styles.iconBadge,
                  { backgroundColor: `${item.iconColor}1A` },
                  { borderColor: item.iconColor },
                ]}
              >
                <Ionicons
                  name={item.icon}
                  size={26}
                  color={item.iconColor}
                />
              </View>
              <View style={styles.headerText}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.tagline}>{item.tagline}</Text>
              </View>
            </View>
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
  iconTopLeft: {
    top: -6,
    left: -12,
  },
  iconTopRight: {
    top: 24,
    right: -18,
  },
  iconBottomLeft: {
    bottom: 120,
    left: -24,
  },
  iconBottomRight: {
    bottom: -20,
    right: -10,
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    gap: 8,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: "rgba(240, 240, 255, 0.75)",
    shadowColor: "rgba(81, 69, 205, 0.25)",
    shadowOpacity: 0.28,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 18,
    elevation: 6,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2d2a44",
    fontFamily: PRIMARY_FONT,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
  },
  iconBadge: {
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
  },
  headerText: {
    flex: 1,
    gap: 4,
  },
  tagline: {
    fontSize: 13,
    color: "#5145cd",
    fontFamily: PRIMARY_FONT,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: "#4b5563",
    fontFamily: PRIMARY_FONT,
  },
  moreLink: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
    color: "#5145cd",
    fontFamily: PRIMARY_FONT,
  },
});
