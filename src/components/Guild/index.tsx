import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { GuildProps } from '../../@types';
import { GuildIcon } from '../GuildIcon';
import { theme } from '../../config';

import { styles } from './styles';

export function Guild({
  icon,
  isOwner,
  name,
  ...rest
}: Omit<GuildProps, 'id'>) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{name}</Text>

          <Text style={styles.type}>
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
