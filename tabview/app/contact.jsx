

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Details</Text>

      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>John Doe</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>johndoe@example.com</Text>

      <Text style={styles.label}>Phone:</Text>
      <Text style={styles.value}>+91 9876543210</Text>
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
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});
