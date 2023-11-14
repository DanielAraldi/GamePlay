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
  isLoadingUser: boolean;
  signIn(): Promise<void>;
  loadUserStorage(): Promise<void>;
}

export type AuthResponse = AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  };
};
