import { TextInput, View } from 'react-native';

import { TextAreaProps } from '../../@types';

import { styles } from './styles';

export function TextArea(props: TextAreaProps) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}
