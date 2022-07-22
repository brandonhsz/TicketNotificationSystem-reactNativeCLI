import React, { useEffect, useState } from 'react'
import { INITIAL_STATE } from '../constants/INITIAL_STATE';

const useBranches = () => {

  const [tickets, setTickets] = useState<any>({
    escorza: [INITIAL_STATE],
    revolucion: [INITIAL_STATE],
    tlajomulco: [INITIAL_STATE]
  })

  const fetching = async (name: string = 'hook') => {
    const response = await fetch("https://native-request-production.up.railway.app/tickets")
    const data = await response.json()
    const { escorza, revo, tlajo } = data[0]
    setTickets({
      escorza: escorza,
      revo: revo,
      tlajo: tlajo
    })

    // console.log(`fetched desde ${name}`)
  }

  useEffect(() => {
    fetching()
  }, [])

  return {
    escorza: tickets.escorza,
    revolucion: tickets.revo,
    tlajomulco: tickets.tlajo,
    fetching
  }
}


export default useBranches