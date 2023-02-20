import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    width: RFValue(104),
    height: RFValue(120),

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: RFValue(8),

    borderRadius: 8,
  },

  content: {
    width: RFValue(100),
    height: RFValue(116),

    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: RFValue(7),

    backgroundColor: theme.colors.secondary40,

    borderRadius: 8,
  },

  title: {
    fontSize: RFValue(15),
    fontFamily: theme.fonts.title500,

    color: theme.colors.heading,
  },

  check: {
    width: RFValue(12),
    height: RFValue(12),

    alignSelf: 'flex-end',

    marginRight: RFValue(7),

    backgroundColor: theme.colors.secondary100,

    borderWidth: 2,
    borderColor: theme.colors.secondary50,
    borderRadius: 3,
  },

  checked: {
    width: RFValue(10),
    height: RFValue(10),

    alignSelf: 'flex-end',

    marginRight: RFValue(7),

    backgroundColor: theme.colors.primary,

    borderRadius: 3,
  },
});
