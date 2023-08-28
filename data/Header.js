import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Advice')}>
        <Text style={styles.buttonText}>Advice</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('HealthData')}>
        <Text style={styles.buttonText}>HealthData</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default CustomHeader;