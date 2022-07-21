import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DrawerNavigator from './DrawerNavigator'
import { Settings } from '../Pages'


export default function TabNavigator() {

  const Tab = createMaterialTopTabNavigator()
  return (
    <Tab.Navigator
      tabBarPosition='bottom'
    >
      <Tab.Screen name="Tickets" component={DrawerNavigator} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}