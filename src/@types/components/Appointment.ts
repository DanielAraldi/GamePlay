import { TouchableOpacityProps } from 'react-native';

import { GuildProps } from './Guild';

export interface AppointmentProps extends TouchableOpacityProps {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}
