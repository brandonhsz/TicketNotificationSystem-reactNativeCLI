import { View, Text, Switch } from 'react-native'
import React from 'react'
import { style } from '../Theme/radioButtonTheme'

interface IProps {
  turnState: boolean
  dispatch: (action: any) => void
  label: string
}

export default function RadioButton({ turnState, dispatch, label }: IProps) {
  return (
    <View style={style.container}>
      <Text style={style.text}>{`${label}:${turnState ? "On" : 'OFF'}`}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#767577' }}
        thumbColor={turnState ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={dispatch}
        value={turnState}
      />
    </View>
  )
}