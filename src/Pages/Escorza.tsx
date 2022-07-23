import { ScrollView, View } from 'react-native'
import React, { useEffect } from 'react'

import DangerText from '../Components/DangerText'
import { styles } from '../Theme/branchTheme'

import useBranches from '../hooks/useBranches';
import Ticket from '../Components/Ticket';
import { TicketInterface } from '../interfaces/ticket.interface';

export function Escorza({ navigation }: any) {

  const { escorza: branch, fetching } = useBranches();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

      fetching('escorza');
    });
    return unsubscribe;
  }, [navigation])

  return (
    <ScrollView>
      <View style={styles.modalView}>
        {
          branch?.length > 0 ? (
            branch.map((ticket: TicketInterface) => (
              <Ticket
                key={ticket.TicketNumber}
                TicketAuthor={ticket.TicketAuthor}
                TicketNumber={ticket.TicketNumber}
                TicketSubjet={ticket.TicketSubjet}
                TicketTime={ticket.TicketTime}
              />
            ))
          ) : (<DangerText message='Sin tickets' />)
        }
      </View>
    </ScrollView>
  )
}

export default Escorza;


