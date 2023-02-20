import { StyleSheet } from 'react-native';
import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    width: 49,
    height: 49,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: theme.colors.primary,

    borderRadius: 8,
  },
});
