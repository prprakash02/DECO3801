// screens/Home.js
import React from 'react';
//import { View, Button, StyleSheet, Dimensions } from 'react-native';
//import { View, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity, ScrollView, Button, Modal} from 'react-native';
import { useState, useEffect } from 'react';
//import logo from '../data/Image';
import logo from '../assets/logo.jpg';
const DATABASE_URL = 'https://acoustic-cirrus-396009.ts.r.appspot.com/events';
const user = 'root';
const pass = '3_l6#_9%?SBqji=%';
const db_name = 'users';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [fetchedEventIDs, setFetchedEventIDs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://acoustic-cirrus-396009.ts.r.appspot.com/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: "",
            num_return: "100",
          }),
        });
        const result = await response.json();
        const newEvents = result.filter(event => !fetchedEventIDs.includes(event.eventID));
        setData(prevData => [...prevData, ...newEvents]);
        setFetchedEventIDs(prevIDs => [...prevIDs, ...newEvents.map(event => event.eventID)]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.eventID.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          console.log("Reached end of list"); // Just for debugging
          setPage(prevPage => prevPage + 1);
        }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<View style={{ height: 50 }} />} // Adding a footer
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.eventImage.url }} style={styles.image} />
            <View style={styles.descriptionContainer}>
              <Text>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};


/**
 * const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://acoustic-cirrus-396009.ts.r.appspot.com/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: "",
            num_return: "5",
          }),
        });
        const result = await response.json();
        setData(prevData => [...prevData, ...result]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.eventID.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onEndReached={() => setPage(prevPage => prevPage + 1)}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.eventImage.url }} style={styles.image} />
            <View style={styles.descriptionContainer}>
              <Text>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

 */

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 140,
    height: 60,
  },
  alertButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: width, // full width
    height: height / 4, // one-quarter of the phone's height
    resizeMode: 'cover',
  },
  itemContainer: {
    //height: height / 4, // one-quarter of the phone's height
  },
  descriptionContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
});


export default Home;



/**
 * import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo from '../assets/logo.jpg';

const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
    <Image source={logo} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Profile</Text>
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
  logo: {
    width: 100,
    height: 20,
  }
});

export default CustomHeader;
 */