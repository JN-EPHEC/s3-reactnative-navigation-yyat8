import "react-native-reanimated";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
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
      accessibilityLabel="Open drawer navigation"
    >
      <Text style={{ fontSize: 20 }}>☰</Text>
    </TouchableOpacity>
  );
}

function CourseStackScreen() {
  return (
    <CourseStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerLeft: () => <DrawerHamburger />,
      }}
    >
      <CourseStack.Screen
        name="CourseList"
        component={CourseListScreen}
        options={{ title: "All Courses" }}
      />
      <CourseStack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
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
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "#64748b",
      }}
    >
      <Tab.Screen
        name="AllCourses"
        component={CourseStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: "All Courses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          title: "My Wishlist",
          headerLeft: () => <DrawerHamburger />,
          tabBarLabel: "Wishlist",
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
      }}
    >
      <Drawer.Screen
        name="Courses"
        component={CoursesTabs}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "My Profile",
          headerLeft: () => <DrawerHamburger />,
        }}
      />
    </Drawer.Navigator>
  );
}
