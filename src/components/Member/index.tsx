import { View, Text } from 'react-native';

import { Avatar } from '../Avatar';
import { theme } from '../../config';
import { MemberProps } from '../../@types';

import { styles } from './styles';

export function Member({
  avatarUrl,
  status,
  username,
}: Omit<MemberProps, 'id'>) {
  const { on, primary } = theme.colors;

  const isOnline = status === 'online';
  const backgroundColor = isOnline ? on : primary;

  return (
    <View style={styles.container}>
      <Avatar urlImage={avatarUrl} />

      <View>
        <Text style={styles.title}>{username}</Text>

        <View style={styles.status}>
          <View style={[styles.bulletStatus, { backgroundColor }]} />

          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  );
}
