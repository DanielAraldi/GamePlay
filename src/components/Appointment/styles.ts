import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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

  guildIconContainer: {
    width: RFValue(64),
    height: RFValue(68),

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: RFValue(20),

    borderRadius: 8,
  },

  header: {
    flexDirection: 'row',

    width: '100%',

    justifyContent: 'space-between',

    marginBottom: RFValue(12),
  },

  title: {
    flex: 1,

    marginRight: RFValue(20),

    fontSize: RFValue(18),
    fontFamily: theme.fonts.title700,

    color: theme.colors.heading,
  },

  category: {
    marginRight: RFValue(24),

    fontSize: RFValue(13),
    fontFamily: theme.fonts.text400,

    color: theme.colors.highlight,
  },

  footer: {
    flexDirection: 'row',

    width: '100%',

    justifyContent: 'space-between',
  },

  dateInfo: {
    flex: 1,
    flexDirection: 'row',

    alignItems: 'center',
  },

  playersInfo: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  date: {
    marginLeft: RFValue(7),

    fontSize: RFValue(13),
    fontFamily: theme.fonts.text500,

    color: theme.colors.heading,
  },

  player: {
    marginRight: RFValue(24),
    marginLeft: RFValue(7),

    fontSize: RFValue(13),
    fontFamily: theme.fonts.text500,
  },
});
