import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Project() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Project Details</Text>

      <Text style={styles.label}>Project Name:</Text>
      <Text style={styles.value}>Smart Attendance System</Text>

      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>
        A mobile app that uses QR codes to mark student attendance efficiently.
      </Text>

      <Text style={styles.label}>Tech Stack:</Text>
      <Text style={styles.value}>React Native, Firebase, QR Scanner</Text>

      <Text style={styles.label}>Status:</Text>
      <Text style={styles.value}>In Progress</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
  },
});
