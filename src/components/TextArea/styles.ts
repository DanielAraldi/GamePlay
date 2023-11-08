import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: RFValue(95),

    padding: RFValue(16),

    backgroundColor: theme.colors.secondary50,

    borderWidth: 1,
    borderColor: theme.colors.secondary60,
    borderRadius: 8,
  },

  input: {
    width: '100%',
    height: '100%',

    fontFamily: theme.fonts.text400,
    fontSize: RFValue(13),
    color: theme.colors.heading,

    textAlignVertical: 'top',
  },
});
