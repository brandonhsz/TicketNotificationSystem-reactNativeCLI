import { View, Text, Switch } from 'react-native'
import React, { useEffect } from 'react'
import useTurn from '../hooks/useTurn';
import RadioButton from './RadioButton';
import { style } from '../Theme/formTheme';

export default function Form() {

  const { turnState, dispatch } = useTurn()

  if (turnState.afternoonTurn && turnState.morningTurn) {
    dispatch({ type: 'setFulltime' })
  }

  return (
    <View style={style.container}>
      <Text style={style.text}>TURN TO RECEIVE NOTIFICATIONS:</Text>
      <View style={style.formContainer}>
        <RadioButton
          turnState={turnState.morningTurn}
          dispatch={() => dispatch({ type: 'setMorning' })}
          label="Morning   "
        />

        <RadioButton
          turnState={turnState.afternoonTurn}
          dispatch={() => dispatch({ type: 'setAfternoon' })}
          label="Afternoon"
        />

        <RadioButton
          turnState={turnState.fulltime}
          dispatch={() => dispatch({ type: 'setFulltime' })}
          label="Fulltime    "
        />
      </View>

    </View>
  )
}