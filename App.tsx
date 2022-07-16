import { View, Text, SafeAreaView, Alert } from 'react-native'
import React, { useEffect } from 'react'
import BranchTickets from './src/Components/BranchTickets'
import { foregroundNotifications } from './src/libs/notification'

import messaging from '@react-native-firebase/messaging';

export default function App() {

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  return (
    <SafeAreaView
      style={{ backgroundColor: '#282C34', flex: 1 }}
    >
      <BranchTickets />
    </SafeAreaView>
  )
}