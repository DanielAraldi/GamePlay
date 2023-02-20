import { StyleSheet } from 'react-native';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 360,
  },

  content: {
    marginTop: -40,

    paddingHorizontal: 50,
  },

  title: {
    marginBottom: 16,

    fontSize: 40,
    fontFamily: theme.fonts.title700,

    textAlign: 'center',
    lineHeight: 40,

    color: theme.colors.heading,
  },

  subtitle: {
    marginBottom: 64,

    fontSize: 15,
    fontFamily: theme.fonts.title500,

    textAlign: 'center',
    lineHeight: 25,

    color: theme.colors.heading,
  },
});
