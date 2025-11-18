import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const randomNames = [
  "Aarav",
  "Riya",
  "Kabir",
  "Zara",
  "Arjun",
  "Maya",
  "Vivaan",
  "Anaya",
];

export default function Profile() {
  const [name, setName] = useState("Tap the button");

  const generateRandomName = () => {
    const index = Math.floor(Math.random() * randomNames.length);
    setName(randomNames[index]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Profile</Text>
        <Text style={styles.name}>{name}</Text>
        <Button title="Generate Random Name" onPress={generateRandomName} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eaeaea",
  },
  card: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 4,
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    marginBottom: 20,
  },
});
