import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { startAsync } from 'expo-auth-session';

import { AuthContextData, AuthResponse, UserProps } from '../@types';
import { api, DISCORD_URL, env, RESPONSE_TYPE } from '../config';
import { AuthService } from '../services';
import { Storage } from '../libs';

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: Required<PropsWithChildren>) {
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(false);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);
  const [user, setUser] = useState<UserProps>({} as UserProps);

  async function signIn(): Promise<void> {
    try {
      setIsLoadingAuth(true);

      const authUrl = `${DISCORD_URL}/oauth2/authorize?client_id=${env.clientId}&redirect_uri=${env.redirectUri}&response_type=${RESPONSE_TYPE}&scope=${env.scope}`;

      const { type, params } = (await startAsync({
        authUrl,
      })) as AuthResponse;

      if (type === 'success' && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userData = await AuthService.getUser();

        await Storage.set<UserProps>('user', userData);
        setUser(userData);
      }
    } catch (error) {
      throw new Error('Não foi possível autenticar!');
    } finally {
      setIsLoadingAuth(false);
    }
  }

  async function loadUserStorage(): Promise<void> {
    setIsLoadingUser(true);
    const storage = await Storage.get<UserProps>('user');
    if (storage) {
      api.defaults.headers.authorization = storage.token;
      setUser(storage);
    }
    setIsLoadingUser(false);
  }

  return (
    <AuthContext.Provider
      value={{ user, isLoadingAuth, isLoadingUser, signIn, loadUserStorage }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
