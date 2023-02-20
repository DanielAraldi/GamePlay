import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',

    width: '100%',

    justifyContent: 'space-between',

    marginTop: RFValue(10),
    marginBottom: RFValue(42),

    paddingHorizontal: RFValue(24),
  },

  content: {
    flex: 1,

    marginTop: RFValue(42),
  },

  matches: {
    marginTop: RFValue(24),
    marginLeft: RFValue(24),
  },
});
