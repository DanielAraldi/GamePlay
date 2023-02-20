import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    width: RFValue(49),
    height: RFValue(49),

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: RFValue(20),

    borderRadius: 8,
  },

  avatar: {
    width: RFValue(46),
    height: RFValue(46),

    borderRadius: 8,
  },
});
