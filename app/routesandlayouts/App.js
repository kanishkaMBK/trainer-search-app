import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
  const randomNames = [
    "Aarav Sharma",
    "Riya Mehta",
    "Kabir Singh",
    "Kanishka MBK",
    "Arjun Menon",
    "Maya Das",
    "Vivaan Jain",
    "Anaya Roy",
  ];

  const [name, setName] = useState("Tap the button");

  const generateName = () => {
    const idx = Math.floor(Math.random() * randomNames.length);
    setName(randomNames[idx]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://i.pravatar.cc/820",
          }}
        />

        <Text style={styles.name}>{name}</Text>

        <TouchableOpacity style={styles.button} onPress={generateName}>
          <Text style={styles.btnText}>Generate Random Name</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 320,
    backgroundColor: "#481fa8ff",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 18,
    alignItems: "center",
    elevation: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
