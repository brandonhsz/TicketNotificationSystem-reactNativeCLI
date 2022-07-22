import create from 'zustand';
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

export const useStore = create<ISettingsStore>(set => ({
  morningTurn: false,
  afternoonTurn: false,


  setMorningTurn: () => {
    set(state => ({
      morningTurn: true,
    }));
    susbscribeToTopic('morningTurn');
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
}))