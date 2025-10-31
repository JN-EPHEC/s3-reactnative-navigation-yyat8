import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import GradientBackground from "../../components/GradientBackground";

const PRIMARY_FONT = Platform.select({
  ios: "Avenir Next",
  android: "sans-serif-medium",
  default: "System",
});

export default function WishlistScreen() {
  return (
    <GradientBackground contentStyle={styles.wrapper}>
      <View pointerEvents="none" style={styles.decorLayer}>
        <Ionicons
          name="heart-outline"
          size={110}
          color="rgba(255, 120, 174, 0.22)"
          style={[styles.icon, styles.iconTopLeft]}
        />
        <Ionicons
          name="cloud-outline"
          size={100}
          color="rgba(167, 196, 255, 0.24)"
          style={[styles.icon, styles.iconTopRight]}
        />
        <Ionicons
          name="star-outline"
          size={90}
          color="rgba(129, 140, 248, 0.2)"
          style={[styles.icon, styles.iconBottomLeft]}
        />
        <Ionicons
          name="rainy-outline"
          size={96}
          color="rgba(94, 84, 170, 0.18)"
          style={[styles.icon, styles.iconBottomRight]}
        />
      </View>

      <View style={styles.card}>
        <Ionicons name="heart-circle" size={58} color="#f472b6" />
        <Text style={styles.title}>Ma liste d'envies est vide</Text>
        <Text style={styles.subtitle}>
          Explorez les cours et ajoutez vos favoris pour les retrouver ici.
        </Text>
        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Ionicons name="book-outline" size={18} color="#5145cd" />
            <Text style={styles.badgeText}>Cours</Text>
          </View>
          <View style={styles.badge}>
            <Ionicons name="star-outline" size={18} color="#5145cd" />
            <Text style={styles.badgeText}>Favoris</Text>
          </View>
          <View style={styles.badge}>
            <Ionicons name="calendar-outline" size={18} color="#5145cd" />
            <Text style={styles.badgeText}>À venir</Text>
          </View>
        </View>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 12,
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
    top: -14,
    left: -18,
  },
  iconTopRight: {
    top: 10,
    right: -20,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    borderRadius: 18,
    paddingVertical: 32,
    paddingHorizontal: 24,
    gap: 12,
    borderWidth: 1.3,
    borderColor: "rgba(236, 236, 255, 0.7)",
    shadowColor: "rgba(81, 69, 205, 0.25)",
    shadowOpacity: 0.28,
    shadowOffset: { width: 0, height: 18 },
    shadowRadius: 22,
    elevation: 7,
    alignItems: "center",
    marginTop: 48,
  },
  iconBottomLeft: {
    bottom: 120,
    left: -16,
  },
  iconBottomRight: {
    bottom: -18,
    right: -14,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2d2a44",
    fontFamily: PRIMARY_FONT,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#4c4a78",
    fontFamily: PRIMARY_FONT,
    textAlign: "center",
    lineHeight: 20,
  },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: "rgba(209, 213, 255, 0.35)",
    borderWidth: 1,
    borderColor: "rgba(129, 140, 248, 0.5)",
  },
  badgeText: {
    fontSize: 13,
    fontWeight: "600",
    fontFamily: PRIMARY_FONT,
    color: "#403a70",
  },
});
