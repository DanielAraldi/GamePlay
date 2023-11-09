import { UserProps } from '../hooks';

export interface AuthServiceProps {
  getUser(): Promise<UserProps>;
}

export interface UserAuthProps {
  id: string;
  username: string;
  discriminator: string;
  global_name?: string;
  avatar?: string;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  verified?: boolean;
  email?: string;
  flags?: number;
  banner?: string;
  accent_color?: number;
  locale?: string;
  premium_type?: number;
  public_flags?: number;
  avatar_decoration?: string;
}
