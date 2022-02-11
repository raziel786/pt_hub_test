import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Info from './Info';
import Market from './Market';
import Build from './Build';
const HomeTabs = createBottomTabNavigator();

const Home = () => {
  return (
    <HomeTabs.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <HomeTabs.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={'info'} size={size} color={color} />
          ),
        }}
      />
      <HomeTabs.Screen
        name="Market"
        component={Market}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={'analytics'} size={size} color={color} />
          ),
        }}
      />
      <HomeTabs.Screen
        name="Build"
        component={Build}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={'info'} size={size} color={color} />
          ),
        }}
      />
    </HomeTabs.Navigator>
  );
};

export default Home;
