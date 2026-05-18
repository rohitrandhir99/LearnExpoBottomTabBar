import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColor } from '@/hooks/useThemeColor';

const ProfileScreen = () => {
const colors = useThemeColor();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Text style={[styles.title, { color: colors.text }]}>ProfileScreen</Text>
    </SafeAreaView>
  );
}

export default ProfileScreen

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