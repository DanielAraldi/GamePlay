import { StyleSheet } from 'react-native';
import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    width: '100%',
    height: 56,

    alignItems: 'center',

    backgroundColor: theme.colors.primary,

    borderRadius: 8,
  },

  iconWrapper: {
    width: 56,
    height: 56,

    justifyContent: 'center',
    alignItems: 'center',

    borderRightWidth: 1,
    borderColor: theme.colors.line,
  },

  icon: {
    width: 24,
    height: 18,
  },

  title: {
    flex: 1,

    fontSize: 15,

    textAlign: 'center',

    color: theme.colors.heading,
  },
});
