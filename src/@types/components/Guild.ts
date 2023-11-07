import { TouchableOpacityProps } from 'react-native';

export interface GuildProps extends TouchableOpacityProps {
  id: string;
  name: string;
  icon: string | null;
  isOwner: boolean;
}
