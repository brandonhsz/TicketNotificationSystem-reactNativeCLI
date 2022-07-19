import { Alert } from 'react-native'
import React, { useEffect } from 'react'

import messaging from '@react-native-firebase/messaging';

import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Escorza from './src/Pages/Escorza';
import Revolucion from './src/Pages/Revolucion';
import Tlajomulco from './src/Pages/Tlajomulco';



export default function App() {
  const Drawer = createDrawerNavigator();



  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('Nuevo Ticket:', remoteMessage?.notification?.body);
    });
    return unsubscribe;
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