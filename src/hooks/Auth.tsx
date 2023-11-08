import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { AuthContextData, UserProps } from '../@types';

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: Required<PropsWithChildren>) {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
