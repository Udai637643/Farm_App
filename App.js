


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const stack=createNativeStackNavigator();
import Login from './components/Login';
import Home from './components/Home';
import SignUp from "./components/SignUp";
import Detail from './components/Detail';
import AllPosts from './components/AllPosts';


export default function App() {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:"#017aff"
          },headerTintColor:"white",
          headerShown:false
        }}>
          {/* <stack.Screen name='Lab' component={Lab} options={{title:"Lab Work Android"}}/> */}
          
          <stack.Screen name='SignUp' component={SignUp}/>
          <stack.Screen name='Login' component={Login} />
          <stack.Screen name='Home' component={Home} options={{title:" "}}/>
          <stack.Screen name='Detail' component={Detail} />
          <stack.Screen name='AllPosts' component={AllPosts} />

        </stack.Navigator>
      </NavigationContainer>
    </>
    
  );
}















// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import APMC from './componets/APMC.js';
// import HomeScreen from './screens/HomeScreen.js';

// function LoginScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Login Screen</Text>
//     </View>
//   );
// }

// function SignupScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Signup Screen</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name='Login' component={LoginScreen} />
//         <Tab.Screen name='APMC' component={APMC} />
//         <Tab.Screen name='Home' component={HomeScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
