import { StyleSheet } from 'react-native';
import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 8,

    borderRadius: 8,
  },

  content: {
    width: 100,
    height: 116,

    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: 7,

    backgroundColor: theme.colors.secondary40,

    borderRadius: 8,
  },

  title: {
    fontSize: 15,
    fontFamily: theme.fonts.title500,

    color: theme.colors.heading,
  },

  check: {
    width: 12,
    height: 12,

    alignSelf: 'flex-end',

    marginRight: 7,

    backgroundColor: theme.colors.secondary100,

    borderWidth: 2,
    borderColor: theme.colors.secondary50,
    borderRadius: 3,
  },

  checked: {
    width: 10,
    height: 10,

    alignSelf: 'flex-end',

    marginRight: 7,

    backgroundColor: theme.colors.primary,

    borderRadius: 3,
  },
});
