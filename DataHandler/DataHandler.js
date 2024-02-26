
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../store';
import { connection_setValue } from '../connectionSlice';
import { number_setValue } from '../numberSlice';

export const loadData = async () => {
    try {
      const savedConnection = await AsyncStorage.getItem('connection');
      const savedNumber = await AsyncStorage.getItem('number');
      return { connection: savedConnection, number: savedNumber };
    } catch (error) {
      console.error('Error loading data:', error);
    }
}
export const saveData = async (props) => {
    try {
      await AsyncStorage.setItem('connection', props.connection);
      await AsyncStorage.setItem('number', props.number);
    } catch (error) {
      console.error('Error saving data:', error);
    }
}