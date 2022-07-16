import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import BranchTickets from './src/Components/BranchTickets'

export default function App() {
  return (
    <SafeAreaView
      style={{ backgroundColor: 'black', flex: 1 }}
    >
      <BranchTickets />
    </SafeAreaView>
  )
}