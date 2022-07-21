import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Escorza, Revolucion, Tlajomulco } from '../Pages';

export default function Navigator() {
  const Drawer = createDrawerNavigator();
  return (

    <Drawer.Navigator >

      <Drawer.Group>
        <Drawer.Screen name="ESCORZA" component={Escorza} options={{ headerTitleAlign: "center" }} />
        <Drawer.Screen name="REVOLUCION" component={Revolucion} options={{ headerTitleAlign: "center" }} />
        <Drawer.Screen name="TLAJOMULCO" component={Tlajomulco} options={{ headerTitleAlign: "center" }} />
      </Drawer.Group>

    </Drawer.Navigator>

  )
}