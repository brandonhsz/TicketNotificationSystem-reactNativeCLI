import React, { useEffect } from 'react'

import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Escorza, Revolucion, Tlajomulco } from './src/Pages'
import useFirebase from './src/hooks/useFirebase';
import Navigator from './src/Components/Navigator';



export default function App() {

  const { foregroundNotifications, susbscribeToTopic } = useFirebase()

  useEffect(() => {
    foregroundNotifications()
    susbscribeToTopic()
  }, []);


  return (

    <NavigationContainer theme={MainTheme as any}>
      <Navigator />
    </NavigationContainer>

  )
}



const MainTheme = {
  colors: {
    ...DarkTheme.colors,
    background: '#18191A',
  }
};