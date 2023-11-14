import { GuildProps } from '../components';

export interface GuildServiceProps {
  getGuilds(): Promise<GuildProps[]>;
}

export interface UserGuildProps {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}
