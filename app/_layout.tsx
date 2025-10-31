import "react-native-reanimated";
import React from "react";
import { TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import CourseListScreen from "./screens/CourseListScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import WishlistScreen from "./screens/WishlistScreen";
import ProfileScreen from "./screens/ProfileScreen";

export type CourseStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string; title: string; description: string };
};

type CourseTabsParamList = {
  AllCourses: undefined;
  Wishlist: undefined;
};

type DrawerParamList = {
  Courses: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();
const Tab = createBottomTabNavigator<CourseTabsParamList>();
const CourseStack = createNativeStackNavigator<CourseStackParamList>();

function DrawerHamburger() {
  const navigation = useNavigation();

  function handleToggleDrawer() {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <TouchableOpacity
      onPress={handleToggleDrawer}
      style={{ paddingHorizontal: 12, paddingVertical: 4 }}
      accessibilityLabel="Ouvrir le menu principal"
    >
      <Ionicons name="menu-outline" size={26} color="#403a70" />
    </TouchableOpacity>
  );
}

function CourseStackScreen() {
  return (
    <CourseStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "#403a70",
        headerStyle: { backgroundColor: "#dcd0ff" },
        headerTitleStyle: { color: "#403a70", fontSize: 18, fontWeight: "600" },
        headerRight: () => <DrawerHamburger />,
      }}
    >
      <CourseStack.Screen
        name="CourseList"
        component={CourseListScreen}
        options={{ title: "Tous les cours" }}
      />
      <CourseStack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitle: "Retour",
        })}
      />
    </CourseStack.Navigator>
  );
}

function CoursesTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#5145cd",
        tabBarInactiveTintColor: "#b4c1ff",
        tabBarStyle: { backgroundColor: "#e6dcff" },
      }}
    >
      <Tab.Screen
        name="AllCourses"
        component={CourseStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Catalogue",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          title: "Ma liste d'envies",
          headerRight: () => <DrawerHamburger />,
          headerTintColor: "#403a70",
          headerStyle: { backgroundColor: "#dcd0ff" },
          headerTitleStyle: { color: "#403a70", fontSize: 18, fontWeight: "600" },
          tabBarLabel: "Mes envies",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootLayout() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "#403a70",
        headerStyle: { backgroundColor: "#dcd0ff" },
        headerTitleStyle: { color: "#403a70", fontSize: 18, fontWeight: "600" },
        drawerActiveTintColor: "#5145cd",
        drawerInactiveTintColor: "#403a70",
        drawerStyle: { backgroundColor: "#f1ecff" },
      }}
    >
      <Drawer.Screen
        name="Courses"
        component={CoursesTabs}
        options={{ headerShown: false, title: "Cours", drawerLabel: "Cours" }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Mes informations",
          drawerLabel: "Mes informations",
          headerLeft: () => <DrawerHamburger />,
        }}
      />
    </Drawer.Navigator>
  );
}
