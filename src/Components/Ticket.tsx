import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

import { styles } from '../Theme/ticketTheme'
import { TicketInterface } from '../interfaces/ticket.interface'


interface IProps extends TicketInterface {

}

export default function Ticket({ TicketNumber, TicketBranch, TicketTime, TicketSubjet, TicketAuthor }: IProps) {

  return (
    <View
      key={TicketNumber}
      style={styles.ticketContainer}
    >
      <Text style={styles.dataText}>
        Number  : {TicketBranch.trim()}
      </Text>
      <Text style={styles.dataText}>
        Time    : {TicketTime.trim()}
      </Text>
      <Text style={styles.dataText}>
        Subject : {TicketSubjet.trim()}
      </Text>
      <Text style={styles.dataText}>
        Author  : {TicketAuthor.trim()}
      </Text>

    </View>
  )
}