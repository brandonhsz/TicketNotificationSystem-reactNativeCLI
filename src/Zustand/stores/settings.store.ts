
import AsyncStorage from '@react-native-community/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import useFirebase from '../../hooks/useFirebase';

interface ISettingsStore {
  morningTurn: boolean;
  afternoonTurn: boolean;

  setMorningTurn: () => void;
  setAfternoonTurn: () => void;

  unSetMorningTurn: () => void;
  unSetAfternoonTurn: () => void;
}

const { susbscribeToTopic, unsubscribeFromTopic } = useFirebase()

export const useStore = create(
  persist<ISettingsStore>(
    (set, get) => ({
      morningTurn: false,
      afternoonTurn: false,


      setMorningTurn: async () => {
        set(state => ({
          morningTurn: true,
        }));
        susbscribeToTopic('morningTurn');
        await AsyncStorage.setItem('morningTurn', 'true');
      },
      setAfternoonTurn: () => {
        set(state => ({
          afternoonTurn: true,
        }));
        susbscribeToTopic('afternoonTurn');
      },

      unSetMorningTurn: () => {
        set(state => ({
          morningTurn: false,
        }));
        unsubscribeFromTopic('morningTurn');
      },

      unSetAfternoonTurn: () => {
        set(state => ({
          afternoonTurn: false,
        }));
        unsubscribeFromTopic('afternoonTurn');
      }
    }),
    {
      name: 'settingsStorage',
      getStorage: () => AsyncStorage,
    }
  )
)