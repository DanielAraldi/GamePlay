import { TouchableOpacityProps } from 'react-native';

export interface ButtonIconProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}
