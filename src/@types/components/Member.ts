export type MemberStatus = 'online' | 'offline';

export interface MemberProps {
  id: string;
  username: string;
  avatarUrl: string;
  status: MemberStatus;
}
