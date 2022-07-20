import React, { useEffect } from 'react'

import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Escorza, Revolucion, Tlajomulco } from './src/Pages'
import useFirebase from './src/hooks/useFirebase';



export default function App() {
  const Drawer = createDrawerNavigator();
  const { foregroundNotifications, susbscribeToTopic } = useFirebase()

  useEffect(() => {
    foregroundNotifications()
    susbscribeToTopic()
  }, []);


  return (

    <NavigationContainer theme={MainTheme as any}>
      <Drawer.Navigator >

        <Drawer.Group>
          <Drawer.Screen name="ESCORZA" component={Escorza} options={{ headerTitleAlign: "center" }} />
          <Drawer.Screen name="REVOLUCION" component={Revolucion} options={{ headerTitleAlign: "center" }} />
          <Drawer.Screen name="TLAJOMULCO" component={Tlajomulco} options={{ headerTitleAlign: "center" }} />
        </Drawer.Group>

      </Drawer.Navigator>
    </NavigationContainer>

  )
}



const MainTheme = {
  colors: {
    ...DarkTheme.colors,
    background: '#18191A',
  }
};