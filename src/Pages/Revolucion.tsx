import { View } from 'react-native'
import React, { useEffect } from 'react'

import DangerText from '../Components/DangerText'
import { styles } from '../Theme/branchTheme'

import useBranches from '../hooks/useBranches';
import { TicketInterface } from '../interfaces/ticket.interface';
import Ticket from '../Components/Ticket';

export function Revolucion({ navigation }: any) {

  const { revolucion: branch, fetching } = useBranches();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetching('revo');
    });

    return unsubscribe;
  }, [branch, navigation])
  return (
    <View style={styles.modalView}>
      {
        branch?.length > 0 ? (
          branch.map((ticket: TicketInterface) => (
            <Ticket
              TicketAuthor={ticket.TicketAuthor}
              TicketNumber={ticket.TicketNumber}
              TicketSubjet={ticket.TicketSubjet}
              TicketTime={ticket.TicketTime}
              key={ticket.TicketNumber}
            />
          ))
        ) : (<DangerText message='Sin tickets' />)
      }
    </View>
  )
}

export default Revolucion;

