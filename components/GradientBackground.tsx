import React from "react";
import {
  ImageBackground,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  children: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
};

export default function GradientBackground({ children, contentStyle }: Props) {
  return (
    <ImageBackground
      source={require("../assets/gradient-mauve-blue.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={[styles.overlay, contentStyle]}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
});
