import { View, Text } from 'react-native'
import React, { useReducer, useState } from 'react'

export default function useTurn() {

  const initialState = {
    morningTurn: false,
    afternoonTurn: false,
    fulltime: false,
  }

  type ActionType = {
    type: 'setMorning' | 'setAfternoon' | 'setFulltime' | 'reset'
  }

  const reducer = (state: typeof initialState, action: ActionType) => {

    switch (action.type) {
      case 'setMorning':
        return {
          ...state,
          morningTurn: !state.morningTurn,
        }

      case 'setAfternoon':
        return {
          ...state,
          afternoonTurn: !state.afternoonTurn,
        }

      case 'setFulltime':
        return {
          ...state,
          fulltime: !state.fulltime,
          morningTurn: false,
          afternoonTurn: false,
        }

      case 'reset':
        return {
          ...state,
          morningTurn: false,
          afternoonTurn: false,
        }

      default:
        return state
    }

  }

  const [turnState, dispatch] = useReducer(reducer, initialState)


  return {
    turnState,
    dispatch,
  }
}