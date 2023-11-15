import { TouchableOpacityProps } from 'react-native';

export interface GenericButtonProps extends TouchableOpacityProps {
  variant: 'cancel' | 'primary';
  title: string;
  isLoading?: boolean;
}
