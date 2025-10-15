import "react-native-reanimated";
import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  PostList: undefined;
  PostDetail: { postId: string; title: string; content: string };
};

// Sample product data
const PRODUCTS = [
  { id: "1", title: "Product 1", description: "Description of Product 1" },
  { id: "2", title: "Product 2", description: "Description of Product 2" },
  { id: "3", title: "Product 3", description: "Description of Product 3" },
];

// Product List Screen
function ProductListScreen({ navigation }) {
  return (
    <FlatList
      data={PRODUCTS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          onPress={() =>
            navigation.navigate("ProductDetail", {
              product: item,
            })
          }
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
        >
          <Text style={{ fontSize: 18 }}>{item.title}</Text>
        </Pressable>
      )}
    />
  );
}

// Product Detail Screen
function ProductDetailScreen({ route }) {
  const { product } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>{product.title}</Text>
      <Text style={{ fontSize: 16 }}>{product.description}</Text>
    </View>
  );
}

// Shop Stack Navigator
const ShopStack = createNativeStackNavigator();

function ShopStackScreen() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen name="ProductList" component={ProductListScreen} options={{ title: "Shop" }} />
      <ShopStack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: "Product Details" }} />
    </ShopStack.Navigator>
  );
}

// My Cart Screen
function MyCartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Your Shopping Cart is empty.</Text>
    </View>
  );
}

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF5733",
        tabBarInactiveTintColor: "007AFF",
      }}
    >
      <Tab.Screen
        name="Shop"
        component={ShopStackScreen}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🛒</Text>,
        }}
      />
      <Tab.Screen
        name="MyCart"
        component={MyCartScreen}
        options={{
          tabBarLabel: "My Cart",
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🛍️</Text>,
        }}
      />
    </Tab.Navigator>
  );
}