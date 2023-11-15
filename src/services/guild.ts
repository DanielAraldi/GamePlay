import { UserGuildProps, UserGuildWidgetProps } from '../@types';
import { GuildServiceProps } from '../@types';

import { api } from '../config';

export const GuildService: GuildServiceProps = {
  async getGuilds(): Promise<CustomGuildProps[]> {
    const { data } = await api.get<UserGuildProps[]>('/users/@me/guilds');
    return data.map(guild => ({
      id: guild.id,
      icon: guild.icon,
      isOwner: guild.owner,
      name: guild.name,
    }));
  },

  async getGuild(id: string): Promise<UserGuildWidgetProps> {
    const { data } = await api.get<UserGuildWidgetProps>(
      `/guilds/${id}/widget.json`
    );
    return data;
  },
};
