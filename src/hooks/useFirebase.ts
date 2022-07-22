import { View, Text, Alert } from 'react-native'
import React from 'react'
import messaging from '@react-native-firebase/messaging';

export default function useFirebase() {

  const susbscribeToTopic = (turn: string = 'morningTurn') => {
    messaging().subscribeToTopic(turn).then(() => { console.log(`subscribed to ${turn}`) })
  }

  const unsubscribeFromTopic = (turn: string) => {
    messaging().unsubscribeFromTopic(turn).then(() => { console.log(`unsubscribed from ${turn}`) })
  }

  const foregroundNotifications = () => {
    messaging().onMessage(async remoteMessage => {
      Alert.alert('Nuevo Ticket:', remoteMessage?.notification?.body);
    });
  }

  const backgroundNotifications = () => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
  }


  return {
    susbscribeToTopic,
    unsubscribeFromTopic,
    foregroundNotifications,
    backgroundNotifications
  }
}