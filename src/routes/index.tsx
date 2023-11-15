import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { If, Then, Else } from 'react-if';

import { useAuth } from '../hooks';
import { SignIn } from '../screens';
import { api } from '../config';

import { AppRoutes } from './app.routes';

SplashScreen.preventAutoHideAsync();

export function Routes() {
  const { loadUserStorage, isLoadingUser } = useAuth();

  const isAuthorized = api.defaults.headers.authorization;

  useEffect(() => {
    async function loadAuthData(): Promise<void> {
      await loadUserStorage();
      await SplashScreen.hideAsync();
    }

    loadAuthData();
  }, []);

  if (isLoadingUser) return null;

  return (
    <NavigationContainer>
      <If condition={!!isAuthorized}>
        <Then>
          <AppRoutes />
        </Then>
        <Else>
          <SignIn />
        </Else>
      </If>
    </NavigationContainer>
  );
}
