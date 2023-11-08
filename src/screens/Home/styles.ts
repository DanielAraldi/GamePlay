import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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
});
