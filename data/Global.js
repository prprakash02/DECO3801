import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const GlobalHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Your Logo Here</Text>
      {/* Add other global header components if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue', // Change this to your preferred color
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});