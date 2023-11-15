export interface GuildServiceProps {
  getGuilds(): Promise<CustomGuildProps[]>;
}

export interface UserGuildProps {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}
