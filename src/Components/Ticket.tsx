import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

import { styles } from '../Theme/ticketTheme'
import { TicketInterface } from '../interfaces/ticket.interface'


interface IProps extends TicketInterface {

}

export default function Ticket({ TicketNumber, TicketTime, TicketSubjet, TicketAuthor }: IProps) {

  return (
    <View
      key={TicketNumber}
      style={styles.ticketContainer}
    >
      <Text
        testID='number'
        style={styles.dataText}
      >
        Number  : {TicketNumber.trim()}
      </Text>
      <Text
        testID='time'
        style={styles.dataText}
      >
        Time    : {TicketTime.trim()}
      </Text>
      <Text
        testID='subject'
        style={styles.dataText}
      >
        Subject : {TicketSubjet.trim()}
      </Text>
      <Text
        testID='author'
        style={styles.dataText}
      >
        Author  : {TicketAuthor.trim()}
      </Text>

    </View>
  )
}