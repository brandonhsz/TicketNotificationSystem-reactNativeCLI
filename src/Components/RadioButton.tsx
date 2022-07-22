import { View, Text, Switch } from 'react-native'
import React from 'react'
import { style } from '../Theme/radioButtonTheme'

interface IProps {
  turnState: boolean
  label: string
  onChange: () => void
}

export default function RadioButton({ turnState, onChange, label }: IProps) {
  return (
    <View style={style.container}>
      <Text style={style.text}>{`${label}:${turnState ? "On" : 'OFF'}`}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#767577' }}
        thumbColor={turnState ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={onChange}
        value={turnState}
      />
    </View>
  )
}