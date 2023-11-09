import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { startAsync } from 'expo-auth-session';

import { AuthContextData, AuthResponse, UserProps } from '../@types';
import { api, DISCORD_URL, env, RESPONSE_TYPE } from '../config';
import { AuthService } from '../services';

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: Required<PropsWithChildren>) {
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(false);
  const [user, setUser] = useState<UserProps>({} as UserProps);

  async function signIn(): Promise<void> {
    setIsLoadingAuth(true);

    const authUrl = `${DISCORD_URL}/oauth2/authorize?client_id=${env.clientId}&redirect_uri=${env.redirectUri}&response_type=${RESPONSE_TYPE}&scope=${env.scope}`;

    const { type, params } = (await startAsync({
      authUrl,
    })) as AuthResponse;

    if (type === 'success') {
      api.defaults.headers.authorization = `Bearer ${params.access_token}`;

      const userInfo = await AuthService.getUser();
      setUser(userInfo);
    } else if (type === 'error') {
      setIsLoadingAuth(false);
      throw new Error('Não foi possível autenticar!');
    }

    setIsLoadingAuth(false);
  }

  return (
    <AuthContext.Provider
      value={{ user, isLoadingAuth, setIsLoadingAuth, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
