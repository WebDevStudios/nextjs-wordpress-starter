import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import TeamHome from './TeamHome'
import TeamScreen from './TeamScreen'

export default function TeamStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName="TeamHome"
      >
        <Stack.Screen
          name="TeamHome"
          component={TeamHome}
          options={{ title: 'Team' }}/>
        <Stack.Screen
          name="TeamScreen"
          component={TeamScreen}
          options={{ title: 'Team Member'}}/>
    </Stack.Navigator>
  )
}
