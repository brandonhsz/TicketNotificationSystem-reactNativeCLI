import messagin from "@react-native-firebase/messaging"
import { Alert } from "react-native"

export function foregroundNotifications() {

  const unsubscribe = messagin().onMessage(async message => {
    Alert.alert("Nuevo ticket2")
  }
  )

  return unsubscribe
}