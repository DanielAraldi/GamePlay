import { UserProps } from '../hooks';

export interface AuthServiceProps {
  getUser(): Promise<UserProps>;
}

export interface UserAuthProps {
  id: string;
  username: string;
  avatar?: string;
  email?: string;
}
