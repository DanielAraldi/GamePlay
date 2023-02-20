import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',

    width: '100%',

    justifyContent: 'space-between',

    marginTop: 10,
    marginBottom: 42,

    paddingHorizontal: 24,
  },

  content: {
    flex: 1,

    marginTop: 42,
  },

  matches: {
    marginTop: 24,
    marginLeft: 24,
  },
});
