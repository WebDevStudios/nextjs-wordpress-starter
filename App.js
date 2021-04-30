import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import BlogStack from './mobile/blog/BlogStack';
import HomeScreen from './mobile/HomeScreen';
import TeamStack from './mobile/team/TeamStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#694fad' }}
          >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" color={color} size={26} />
              ),
            }}
            />
          <Tab.Screen
            name="Posts"
            component={BlogStack}
            options={{
              tabBarLabel: 'Posts',
              tabBarIcon: ({ color }) => (
                <Entypo name="news" color={color} size={26} />
              ),
            }}
            />
          <Tab.Screen
            name="Team"
            component={TeamStack}
            options={{
              tabBarLabel: 'Team',
              tabBarIcon: ({ color }) => (
                <AntDesign name="team" color={color} size={26} />
              ),
            }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
