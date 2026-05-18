import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const colors = useThemeColor();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.title, {color: colors.text}]}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
  },
});