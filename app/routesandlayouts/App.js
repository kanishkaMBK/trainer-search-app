import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Opppppp</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import React from "react";
import { SafeAreaView } from "react-native";
import Profile from "./profile";   // <-- adjust path if needed

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Profile />
    </SafeAreaView>
  );
}
