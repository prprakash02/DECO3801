// screens/Home.js
import React from 'react';
//import { View, Button, StyleSheet, Dimensions } from 'react-native';
import { View, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Button title="Emergency" onPress={() => {}} />
      <View style={styles.columnsContainer}>
        <View style={styles.column} />
        <View style={styles.column} />
        <View style={styles.column} />
        {/* Add more columns as needed */}
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, // Adjust as needed to position the columns below the button
  },
  column: {
    flex: 1,
    backgroundColor: 'grey', // Just for visualization
    height: 200, // Adjust the height as needed
    margin: 5, // Spacing between columns
  },
});

export default Home;