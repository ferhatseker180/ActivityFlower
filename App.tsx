import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './src/screens/MainScreens/HomeScreen/HomeScreen';
import ArtScreen from './src/screens/MainScreens/ArtScreen/ArtScreen';
import ConcertScreen from './src/screens/MainScreens/ConcertScreen/ConcertScreen';
import TheaterScreen from './src/screens/MainScreens/TheaterScreen/TheaterScreen';
import PastActivityScreen from './src/screens/MainScreens/PastActivityScreen/PastActivity';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <Icon name="home" size={22} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Art"
            component={ArtScreen}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="paint-brush" size={22} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Concert"
            component={ConcertScreen}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="music" size={22} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Theater"
            component={TheaterScreen}
            options={{
              tabBarIcon: ({color}) => (
                <Icon2 name="theater-masks" size={22} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Past Activity"
            component={PastActivityScreen}
            options={{
              tabBarIcon: ({color}) => (
                <Icon3 name="clock-remove" size={22} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
