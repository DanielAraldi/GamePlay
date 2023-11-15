import { MemberStatus } from '../components';

export interface GuildServiceProps {
  getGuilds(): Promise<CustomGuildProps[]>;
  getGuild(id: string): Promise<UserGuildWidgetProps>;
}

export interface UserGuildProps {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

export interface UserGuildWidgetProps {
  id: string;
  name: string;
  instant_invite: string | null;
  members: UserWidgetMembersProps[];
}

export interface UserWidgetMembersProps {
  id: string;
  username: string;
  avatar_url: string;
  status: MemberStatus;
}
