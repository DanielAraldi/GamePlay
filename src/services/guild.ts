import { GuildProps, UserGuildProps } from '../@types';
import { GuildServiceProps } from '../@types';

import { api } from '../config';

export const GuildService: GuildServiceProps = {
  async getGuilds(): Promise<GuildProps[]> {
    const { data } = await api.get<UserGuildProps[]>('/users/@me/guilds');
    return data.map(guild => ({
      id: guild.id,
      icon: guild.icon,
      isOwner: guild.owner,
      name: guild.name,
    }));
  },
};
