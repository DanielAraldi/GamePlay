import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { CalendarSvg, PlayerSvg, theme } from '../../config';
import { AppointmentProps } from '../../@types';
import { CATEGORIES } from '../../utils';
import { GuildIcon } from '../GuildIcon';

import { styles } from './styles';

export function Appointment({
  guild,
  category,
  date,
  ...rest
}: AppointmentProps) {
  const [categorySelected] = CATEGORIES.filter(({ id }) => id === category);

  const { primary, on, secondary60, secondary80 } = theme.colors;

  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[secondary60, secondary80]}
        >
          <GuildIcon guildId={guild.id} iconId={guild.icon} />
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>
              {guild.name}
            </Text>

            <Text style={styles.category}>{categorySelected.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>{date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={guild.isOwner ? primary : on} />

              <Text
                style={[styles.player, { color: guild.isOwner ? primary : on }]}
              >
                {guild.isOwner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
