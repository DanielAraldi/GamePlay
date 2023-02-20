import { StyleSheet } from 'react-native';
import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    width: '100%',

    alignSelf: 'center',
  },

  content: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',

    width: '100%',

    justifyContent: 'space-between',

    marginBottom: 12,
  },

  title: {
    flex: 1,

    marginRight: 20,

    fontSize: 18,
    fontFamily: theme.fonts.title700,

    color: theme.colors.heading,
  },

  category: {
    marginRight: 24,

    fontSize: 13,
    fontFamily: theme.fonts.text400,

    color: theme.colors.highlight,
  },

  footer: {
    flexDirection: 'row',

    width: '100%',

    justifyContent: 'space-between',
  },

  dateInfo: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  playersInfo: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  date: {
    marginLeft: 7,

    fontSize: 13,
    fontFamily: theme.fonts.text500,

    color: theme.colors.heading,
  },

  player: {
    marginRight: 24,
    marginLeft: 7,

    fontSize: 13,
    fontFamily: theme.fonts.text500,
  },
});
