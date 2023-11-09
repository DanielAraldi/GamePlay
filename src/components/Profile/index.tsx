import { Text, View } from 'react-native';

import { useAuth } from '../../hooks';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export function Profile() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Avatar urlImage={user.avatar} />

      <View style={styles.content}>
        <View style={styles.user}>
          <Text ellipsizeMode='tail' numberOfLines={2} style={styles.username}>
            <Text style={styles.greeting}>Olá, </Text>
            {user.firstName}
          </Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
