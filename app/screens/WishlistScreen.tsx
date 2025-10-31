import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votre liste de souhaits est vide.</Text>
      <Text style={styles.subtitle}>
        Explore more courses and add them to keep track of what to learn next.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2fbff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2563eb",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#0f172a",
    textAlign: "center",
    lineHeight: 22,
  },
});
