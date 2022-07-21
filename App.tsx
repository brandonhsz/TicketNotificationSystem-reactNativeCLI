import React, { useEffect } from 'react'

import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import useFirebase from './src/hooks/useFirebase';
import TabNavigator from './src/Navigators/TabNavigator';

export default function App() {

  const { foregroundNotifications, susbscribeToTopic } = useFirebase()

  useEffect(() => {
    foregroundNotifications()
    susbscribeToTopic()
  }, []);


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