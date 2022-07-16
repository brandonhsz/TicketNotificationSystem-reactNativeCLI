import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import Tickets from './Tickets';

import { INITIAL_STATE } from '../constants/INITIAL_STATE';

const BranchTickets = () => {

  const [tickets, setTickets] = useState({
    escorza: [INITIAL_STATE],
    revo: [INITIAL_STATE],
    tlajo: [INITIAL_STATE]
  })


  const fetching = async () => {
    const response = await fetch("https://native-request-production.up.railway.app/tickets")
    const data = await response.json()
    const { escorza, revo, tlajo } = data[0]
    setTickets({
      escorza: escorza,
      revo: revo,
      tlajo: tlajo
    })
  }


  useEffect(() => {

    fetching()

  }, []);



  return (
    <View
      style={styles.mainContainer}>

      <View style={styles.ticketContainer}>

        <Tickets
          branch={"Escorza"}
          tickets={tickets.escorza}
        />


        <Tickets
          branch={"Revolucion"}
          tickets={tickets.revo}
        />

        <Tickets
          branch={"Tlajomulco"}
          tickets={tickets.tlajo}
        />



      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  ticketContainer: {
    flexDirection: 'row',
  }
});


export default BranchTickets