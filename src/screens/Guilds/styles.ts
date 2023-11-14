import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',

    paddingTop: RFValue(24),
  },

  guilds: {
    width: '100%',
  },

  internalList: {
    paddingTop: RFValue(103),
    paddingBottom: RFValue(68),
  },

  emptyListText: {
    textAlign: 'center',

    fontFamily: theme.fonts.title700,
    fontSize: RFValue(18),
    color: theme.colors.heading,
  },
});
