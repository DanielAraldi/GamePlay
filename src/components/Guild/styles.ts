import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    width: '100%',

    alignItems: 'center',

    paddingHorizontal: RFValue(24),
  },

  content: {
    flex: 1,

    justifyContent: 'center',
  },

  title: {
    marginBottom: RFValue(11),

    fontFamily: theme.fonts.title700,
    fontSize: RFValue(18),
    color: theme.colors.heading,
  },

  type: {
    marginBottom: RFValue(24),

    fontFamily: theme.fonts.text400,
    fontSize: RFValue(13),
    color: theme.colors.highlight,
  },
});
