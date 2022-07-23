import React, { useEffect } from 'react'

import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import useFirebase from './src/hooks/useFirebase';
import TabNavigator from './src/Navigators/TabNavigator';
import { useStore } from './src/Zustand/stores/settings.store';
import AsyncStorage from '@react-native-community/async-storage';


export default function App() {

  const { foregroundNotifications, susbscribeToTopic, unsubscribeFromTopic } = useFirebase()
  const { afternoonTurn, morningTurn } = useStore()

  useEffect(() => {
    foregroundNotifications()
  }, [])

  useEffect(() => {
    if (morningTurn) {
      susbscribeToTopic('morning')
    } else {
      unsubscribeFromTopic('morning')
    }

    if (afternoonTurn) {
      susbscribeToTopic('afternoon')
    } else {
      unsubscribeFromTopic('afternoon')
    }
  }, [morningTurn, afternoonTurn])
  return (

    <NavigationContainer theme={MainTheme as any}>
      <TabNavigator />
    </NavigationContainer>

  )
}

const MainTheme = {
  colors: {
    ...DarkTheme.colors,
    background: '#18191A',
  }
};