import { StyleSheet } from 'react-native';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    width: '100%',

    justifyContent: 'space-between',

    paddingHorizontal: 24,
  },

  title: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,

    color: theme.colors.heading,
  },

  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,

    color: theme.colors.highlight,
  },
});
