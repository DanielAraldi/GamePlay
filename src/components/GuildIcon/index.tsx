import { Image, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { GuildIconProps } from '../../@types';
import { CDN_IMAGE, DiscordSvg } from '../../config';

import { styles } from './styles';

export function GuildIcon({ guildId, iconId }: GuildIconProps) {
  const URI = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  const size = RFValue(40);

  return (
    <View style={styles.container}>
      {iconId ? (
        <Image source={{ uri: URI }} style={styles.image} resizeMode='cover' />
      ) : (
        <DiscordSvg width={size} height={size} />
      )}
    </View>
  );
}
