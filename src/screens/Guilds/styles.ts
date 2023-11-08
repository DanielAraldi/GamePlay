import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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
});
