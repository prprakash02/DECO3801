/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './screens/Home' 
import Chat from './screens/Chat'
import Advice from './screens/Advice';
import HealthData from './screens/HealthData';
import CustomHeader from './data/Header';
/*
const Tab = createBottomTabNavigator();
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Chat' component={Chat} />
          <Tab.Screen name='Advice' component={Advice} />
          <Tab.Screen name='HealthData' component={HealthData} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
*/
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <CustomHeader {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Advice" component={Advice} />
        <Stack.Screen name="HealthData" component={HealthData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;


/*
function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
*/
