import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const URI =
    'https://www.designtagebuch.de/wp-content/uploads/mediathek//2021/05/discord-logo.jpg';

  return (
    <Image source={{ uri: URI }} style={styles.image} resizeMode='cover' />
  );
}
