import React, { useMemo } from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CourseStackParamList } from "../_layout";
import GradientBackground from "../../components/GradientBackground";

type Props = NativeStackScreenProps<CourseStackParamList, "CourseDetail">;

const PRIMARY_FONT = Platform.select({
  ios: "Avenir Next",
  android: "sans-serif-medium",
  default: "System",
});

function withOpacity(hex: string, opacity: number) {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default function CourseDetailScreen({ route }: Props) {
  const { course } = route.params;
  const accent = course.iconColor;
  const accentSoft = useMemo(() => withOpacity(accent, 0.12), [accent]);

  return (
    <GradientBackground contentStyle={styles.wrapper}>
      <View pointerEvents="none" style={styles.decorLayer}>
        {course.decorIcons.map((icon) => (
          <Ionicons
            key={`${course.id}-${icon.name}-${icon.size}`}
            name={icon.name}
            size={icon.size}
            color={icon.color}
            style={[styles.decorIcon, icon.style]}
          />
        ))}
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.heroCard, { borderColor: accentSoft }]}>
          <View style={styles.heroTopRow}>
            <View
              style={[
                styles.iconBadge,
                { borderColor: accent, backgroundColor: accentSoft },
              ]}
            >
              <Ionicons name={course.icon} size={34} color={accent} />
            </View>
            <View style={styles.heroTitles}>
              <Text style={styles.identifier}>{course.id.toUpperCase()}</Text>
              <Text style={styles.title}>{course.title}</Text>
            </View>
          </View>
          <Text style={styles.tagline}>{course.tagline}</Text>

          <View style={styles.metaRow}>
            <View style={styles.metaBadge}>
              <Ionicons name="play-circle-outline" size={18} color={accent} />
              <Text style={[styles.metaText, { color: accent }]}>
                {course.readingTime}
              </Text>
            </View>
            <View style={styles.metaBadge}>
              <Ionicons name="people-outline" size={18} color={accent} />
              <Text style={[styles.metaText, { color: accent }]}>
                Niveau: Intermédiaire
              </Text>
            </View>
          </View>

          <Text style={styles.description}>{course.description}</Text>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Ionicons name="sparkles-outline" size={22} color={accent} />
            <Text style={styles.sectionTitle}>Ce que vous allez explorer</Text>
          </View>
          <View style={styles.listContainer}>
            {course.highlights.map((item) => (
              <View key={item} style={styles.listRow}>
                <View
                  style={[styles.bullet, { backgroundColor: accentSoft }]}
                >
                  <Ionicons
                    name="checkmark-outline"
                    size={16}
                    color={accent}
                  />
                </View>
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Ionicons name="trophy-outline" size={22} color={accent} />
            <Text style={styles.sectionTitle}>Compétences clés</Text>
          </View>
          <View style={styles.tagsRow}>
            {course.outcomes.map((item) => (
              <View
                key={item}
                style={[
                  styles.outcomeChip,
                  {
                    borderColor: accent,
                    backgroundColor: accentSoft,
                  },
                ]}
              >
                <Ionicons name="star-outline" size={16} color={accent} />
                <Text style={[styles.outcomeText, { color: "#403a70" }]}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Ionicons name="bookmark-outline" size={22} color={accent} />
            <Text style={styles.sectionTitle}>
              Envie d'aller plus loin ?
            </Text>
          </View>
          <Text style={styles.footerText}>
            Rejoignez notre communauté et partagez vos questions dans le forum.
            Sauvegardez ce cours dans votre wishlist pour le suivre plus tard et
            recevez des ressources complémentaires directement dans votre mail.
          </Text>
        </View>
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 0,
  },
  decorLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  decorIcon: {
    position: "absolute",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 80,
    gap: 18,
  },
  heroCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 28,
    padding: 28,
    gap: 14,
    borderWidth: 1.5,
    shadowColor: "rgba(81, 69, 205, 0.2)",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 18 },
    shadowRadius: 28,
    elevation: 10,
  },
  heroTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconBadge: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.6,
  },
  heroTitles: {
    flex: 1,
    gap: 4,
  },
  identifier: {
    fontSize: 12,
    fontWeight: "700",
    color: "#5145cd",
    letterSpacing: 1,
    fontFamily: PRIMARY_FONT,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2d2a44",
    fontFamily: PRIMARY_FONT,
  },
  tagline: {
    fontSize: 16,
    color: "#403a70",
    lineHeight: 22,
    fontFamily: PRIMARY_FONT,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  metaBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(240, 240, 255, 0.65)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  metaText: {
    fontSize: 13,
    fontWeight: "600",
    fontFamily: PRIMARY_FONT,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#4b5563",
    fontFamily: PRIMARY_FONT,
  },
  sectionCard: {
    backgroundColor: "rgba(255, 255, 255, 0.93)",
    borderRadius: 24,
    padding: 24,
    gap: 16,
    borderWidth: 1.3,
    borderColor: "rgba(236, 236, 255, 0.7)",
    shadowColor: "rgba(81, 69, 205, 0.16)",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 16 },
    shadowRadius: 24,
    elevation: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2d2a44",
    fontFamily: PRIMARY_FONT,
  },
  listContainer: {
    gap: 12,
  },
  listRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  bullet: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  listText: {
    flex: 1,
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 22,
    fontFamily: PRIMARY_FONT,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  outcomeChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1.2,
  },
  outcomeText: {
    fontSize: 13,
    fontWeight: "600",
    fontFamily: PRIMARY_FONT,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#475569",
    fontFamily: PRIMARY_FONT,
  },
});
