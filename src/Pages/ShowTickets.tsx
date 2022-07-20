import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Escorza from './Escorza';
import Revolucion from './Revolucion';
import Tlajomulco from './Tlajomulco';
// import { Escorza, Revolucion, Tlajomulco } from './index'

export function ShowTickets() {

  const Drawer = createDrawerNavigator();

  return (

    <Drawer.Navigator>
      <Drawer.Screen name="Escorza" component={Escorza} />
      <Drawer.Screen name="Revolucion" component={Revolucion} />
      <Drawer.Screen name="Tlajomulco" component={Tlajomulco} />
    </Drawer.Navigator>

  )
}