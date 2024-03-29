import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { GuildProps } from '../../@types';
import { theme } from '../../config';
import { GuildIcon } from '../GuildIcon';
import { styles } from './styles';

export function Guild({ id, icon, isOwner, name, ...rest }: GuildProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon guildId={id} iconId={icon} />

      <View style={styles.content}>
        <View>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>
            {name}
          </Text>

          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.type}>
            {isOwner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>

      <Feather
        name='chevron-right'
        color={theme.colors.heading}
        size={RFValue(24)}
      />
    </TouchableOpacity>
  );
}
