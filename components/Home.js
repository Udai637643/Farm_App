import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import APMC from './APMC.js';
import Article from './Article.js';
//import AppNavigation from '../navigation/appNavigation.js';
import WeatherApp from './WeatherApp.js';
import Toolbox from './Toolbox.js';
import Post from './Post.js';


function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
}

function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Home=()=> {
  return (
    
    <Tab.Navigator>
    <Tab.Screen
      name='APMC Data'
      component={APMC}
      options={{
        tabBarLabel: 'APMC Data', // Tab label
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-analytics" size={size} color="green" />
        ),
        tabBarLabelStyle: {
          fontSize: 16, // Adjust the font size
          fontWeight: 'bold',
          color:"green" // Adjust the font weight
          // Add any other text style properties as needed
        },
      }}
    />
    <Tab.Screen
      name='Weather'
      component={WeatherApp}
     
      options={{
        tabBarLabel: 'Weather', // Tab label
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="flash-outline" size={size} color="green"  />
        ),
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16, // Adjust the font size
          fontWeight: 'bold',
          color:"green" // Adjust the font weight
          // Add any other text style properties as needed
        },
      }}
    />


<Tab.Screen
      name='LoginScreen'
      component={Article}
      
      options={{
        tabBarLabel: 'Article', // Tab label
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="document-text-outline" size={size} color="green"  />
        ),
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16, // Adjust the font size
          fontWeight: 'bold',
          color:"green" // Adjust the font weight
          // Add any other text style properties as needed
        },
      }}
    />
    <Tab.Screen
      name='Post'
      component={Post}
      
      options={{
        tabBarLabel: 'Post', // Tab label
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="disc-outline" size={size} color="green"  />
        ),
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16, // Adjust the font size
          fontWeight: 'bold',
          color:"green" // Adjust the font weight
          // Add any other text style properties as needed
        },
      }}
    />
  </Tab.Navigator>
  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home