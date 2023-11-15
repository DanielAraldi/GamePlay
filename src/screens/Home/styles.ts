import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',

    width: '100%',

    justifyContent: 'space-between',

    marginTop: RFValue(10),
    marginBottom: RFValue(42),

    paddingHorizontal: RFValue(24),
  },

  matches: {
    marginTop: RFValue(24),
    marginLeft: RFValue(24),
  },

  emptyListText: {
    marginTop: RFValue(64),

    textAlign: 'center',

    fontFamily: theme.fonts.title700,
    fontSize: RFValue(18),
    color: theme.colors.heading,
  },
});
