import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

// --- Ecrans directement dans le layout ---
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue dans l'application !</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nom : John Doe</Text>
      <Text style={styles.text}>Nom d'utilisateur : @johndoe</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Paramètres de l'application</Text>
    </View>
  );
}

// --- Tab Navigator ---
export default function RootLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Accueil", tabBarIcon: () => <Text>🏠</Text> }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "Profil", tabBarIcon: () => <Text>👤</Text> }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: "Paramètres", tabBarIcon: () => <Text>⚙️</Text> }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, fontWeight: "bold", textAlign: "center" },
});
