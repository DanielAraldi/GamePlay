import { Text, View } from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage='https://github.com/danielaraldi.png' />

      <View style={styles.content}>
        <View style={styles.user}>
          <Text style={styles.username}>
            <Text style={styles.greeting}>Olá, </Text>Daniel
          </Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
