import { View, Text, Alert } from 'react-native'
import React from 'react'
import messaging from '@react-native-firebase/messaging';

export default function useFirebase() {

  const susbscribeToTopic = () => {
    messaging().subscribeToTopic('tickets').then(() => { console.log('subscribed to topic') })
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
    foregroundNotifications,
    backgroundNotifications
  }
}