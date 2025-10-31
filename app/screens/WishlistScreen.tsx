import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import GradientBackground from "../../components/GradientBackground";

const WISHLIST = [
  {
    id: "ux310",
    title: "Design d'interfaces inclusives",
    description:
      "Construire des parcours accessibles et intuitifs pour tous les utilisateurs.",
  },
  {
    id: "pm205",
    title: "Product management pour apps mobiles",
    description:
      "Définir une vision produit, orchestrer la roadmap et mesurer l'impact.",
  },
  {
    id: "ai120",
    title: "Introduction à l'IA générative",
    description:
      "Comprendre les modèles de langage et prototyper des assistants conversationnels.",
  },
];

export default function WishlistScreen() {
  return (
    <GradientBackground contentStyle={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>Ma liste d'envies</Text>
        <Text style={styles.subtitle}>
          Ces cours sont enregistrés pour être suivis prochainement.
        </Text>
      </View>

      <FlatList
        data={WISHLIST}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <Text style={styles.cardHint}>Identifiant: {item.id}</Text>
          </View>
        )}
      />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  header: {
    marginBottom: 12,
    gap: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1f1f46",
  },
  subtitle: {
    fontSize: 14,
    color: "#312e81",
  },
  listContent: {
    paddingBottom: 40,
    gap: 14,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 20,
    gap: 8,
    borderWidth: 1.2,
    borderColor: "rgba(255, 255, 255, 0.55)",
    shadowColor: "rgba(79, 70, 229, 0.35)",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 24,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#312e81",
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: "#1f2937",
  },
  cardHint: {
    fontSize: 12,
    color: "#4338ca",
    fontWeight: "500",
  },
});
