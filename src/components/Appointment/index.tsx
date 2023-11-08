import { Text, TouchableOpacity, View } from 'react-native';

import { GuildIcon } from '../GuildIcon';
import { CalendarSvg, PlayerSvg, theme } from '../../config';
import { AppointmentProps } from '../../@types';
import { CATEGORIES } from '../../utils';
import { styles } from './styles';

export function Appointment({
  guild,
  category,
  date,
  ...rest
}: AppointmentProps) {
  const [categorySelected] = CATEGORIES.filter(({ id }) => id === category);

  const { primary, on } = theme.colors;

  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{guild.name}</Text>

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
