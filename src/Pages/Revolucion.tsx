import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import DangerText from '../Components/DangerText'
import useBranches from '../hooks/useBranches';

export default function Revolucion({ navigation }: any) {

  const { revolucion: branch, fetching } = useBranches();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Screen was focused
      // Do something
      fetching('revo');
    });

    return unsubscribe;
  }, [navigation])
  return (
    <View style={styles.modalView}>
      {
        branch?.length > 0 ? (
          branch.map((data: any) => (
            <View
              key={data.TicketNumber}
              style={styles.ticketContainer}
            >
              <Text style={styles.dataText}>
                Number  : {data.TicketBranch.trim()}
              </Text>
              <Text style={styles.dataText}>
                Time    : {data.TicketTime.trim()}
              </Text>
              <Text style={styles.dataText}>
                Subject : {data.TicketSubjet.trim()}
              </Text>
              <Text style={styles.dataText}>
                Author  : {data.TicketAuthor.trim()}
              </Text>

            </View>
          ))
        ) : (<DangerText message='Sin tickets' />)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  ticketContainer: {
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 10,
    padding: 10,
    margin: 2,
    minWidth: "90%",
    maxWidth: "90%"
  },
  branchText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 10,
    textAlign: "center"
  },
  dataText: {
    color: "white",
    fontFamily: "monospace",
  },
  centeredView: {
    flex: 1,

    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
})
