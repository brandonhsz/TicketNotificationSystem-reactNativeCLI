import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'

export default function Main({ navigation }: any) {

  const navigations = {
    escorza: 'Escorza',
    revolucion: 'Revolucion',
    tlajomulco: 'Tlajomulco',
  }

  console.log(Object.values(navigations))

  return (
    <View
      style={styles.container}
    >
      {
        Object.values(navigations).map((value: string) => (
          <TouchableOpacity
            key={value}
            onPress={() => navigation.navigate(value)}
          >
            <Text>{value}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});