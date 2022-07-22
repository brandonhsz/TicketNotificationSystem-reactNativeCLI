import { View, Text } from 'react-native'
import React from 'react'
import RadioButton from './RadioButton';
import { style } from '../Theme/formTheme';
import { useStore } from '../Zustand/stores/settings.store';

export default function Form() {
  const { morningTurn, afternoonTurn, unSetAfternoonTurn, unSetMorningTurn } = useStore();
  const { setAfternoonTurn, setMorningTurn } = useStore();


  return (
    <View style={style.container}>
      <Text style={style.text}>TURN TO RECEIVE NOTIFICATIONS:</Text>
      <View style={style.formContainer}>
        <RadioButton
          turnState={morningTurn}
          onChange={morningTurn ? unSetMorningTurn : setMorningTurn}
          label="Morning   "
        />

        <RadioButton
          turnState={afternoonTurn}
          onChange={afternoonTurn ? unSetAfternoonTurn : setAfternoonTurn}
          label="Afternoon"
        />

      </View>

    </View>
  )
}