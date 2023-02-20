import { TouchableOpacityProps } from 'react-native';

interface GuildProps {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

export interface AppointmentProps extends TouchableOpacityProps {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}
