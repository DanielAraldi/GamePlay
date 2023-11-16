import AsyncStorage from '@react-native-async-storage/async-storage';

import { AsyncStorageProps, Key } from '../@types';
import { DateHelper } from '../helpers';

const STORAGE_NAME = '@gameplay';

export const Storage: AsyncStorageProps = {
  async clear(): Promise<void> {
    await AsyncStorage.clear();
  },

  async get<T = string>(key: Key): Promise<T | null> {
    const data = await AsyncStorage.getItem(`${STORAGE_NAME}:${key}`);
    if (data) return JSON.parse(data) as T;
    else return null;
  },

  async set<T = string>(key: Key, value: T): Promise<void> {
    await AsyncStorage.setItem(`${STORAGE_NAME}:${key}`, JSON.stringify(value));
  },

  async getAvailableAppointments(): Promise<CustomAppointmentProps[] | null> {
    const data = await this.get<CustomAppointmentProps[]>('appointments');
    if (data) {
      const currentDate = DateHelper.getCurrentDate();
      const availableAppointments = data.filter(
        appointnment => appointnment.expiredIn > currentDate.getTime(),
      );
      await this.set<CustomAppointmentProps[]>(
        'appointments',
        availableAppointments,
      );
      return availableAppointments;
    } else {
      return null;
    }
  },
};
