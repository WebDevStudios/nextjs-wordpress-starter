import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import BlogHome from './BlogHome'
import BlogScreen from './BlogScreen'

export default function BlogStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName="BlogHome"
      >
        <Stack.Screen
          name="BlogHome"
          component={BlogHome}
          options={{ title: 'Blog' }}/>
        <Stack.Screen
          name="BlogScreen"
          component={BlogScreen}
          options={{ title: 'Post' }}/>
    </Stack.Navigator>
  )
}
