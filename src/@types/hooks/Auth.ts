import { AuthSessionResult } from 'expo-auth-session';

export interface UserProps {
  id: string;
  token: string;
  email: string;
  username: string;
  firstName: string;
  avatar: string;
}

export interface AuthContextData {
  user: UserProps;
  isLoadingAuth: boolean;
  setIsLoadingAuth(value: boolean): void;
  signIn(): Promise<void>;
}

export type AuthResponse = AuthSessionResult & {
  params: {
    access_token: string;
  };
};
