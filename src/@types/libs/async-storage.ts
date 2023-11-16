export type Key = 'user' | 'appointments';

export interface AsyncStorageProps {
  get<T = string>(key: Key): Promise<T | null>;
  set<T = string>(key: Key, value: T): Promise<void>;
  clear(): Promise<void>;
  getAvailableAppointments(): Promise<CustomAppointmentProps[] | null>;
}
