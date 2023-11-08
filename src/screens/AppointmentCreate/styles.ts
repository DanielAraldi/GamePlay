import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  labelSpace: {
    marginTop: RFValue(36),
    marginBottom: RFValue(18),
    marginLeft: RFValue(24),
  },

  label: {
    fontSize: RFValue(18),
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },

  labelBottom: {
    marginBottom: RFValue(12),
  },

  form: {
    paddingHorizontal: RFValue(24),
    marginTop: RFValue(32),
  },

  select: {
    flexDirection: 'row',

    overflow: 'hidden',

    width: '100%',
    height: RFValue(64),

    alignItems: 'center',

    paddingRight: RFValue(25),

    borderColor: theme.colors.secondary60,
    borderWidth: 1,
    borderRadius: 8,
  },

  image: {
    width: RFValue(64),
    height: RFValue(64),

    backgroundColor: theme.colors.secondary60,

    borderRadius: 8,
  },

  selectBody: {
    flex: 1,

    alignItems: 'center',
  },

  field: {
    flexDirection: 'row',

    width: '100%',

    justifyContent: 'space-between',

    marginTop: RFValue(30),
  },

  fieldSpace: {
    marginBottom: RFValue(12),
  },

  column: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  divider: {
    marginRight: RFValue(4),

    fontSize: RFValue(15),
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
  },

  caracteresLimit: {
    fontFamily: theme.fonts.text400,
    fontSize: RFValue(13),
    color: theme.colors.highlight,
  },

  footer: {
    marginVertical: RFValue(20),
    marginBottom: RFValue(56),
  },
});
