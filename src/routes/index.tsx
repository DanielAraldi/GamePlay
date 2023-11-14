import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks';
import { SignIn } from '../screens';

import { AppRoutes } from './app.routes';

SplashScreen.preventAutoHideAsync();

export function Routes() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { user, loadUserStorage } = useAuth();

  useEffect(() => {
    async function loadAuthData(): Promise<void> {
      setIsLoading(true);
      await loadUserStorage();
      await SplashScreen.hideAsync();
      setIsLoading(false);
    }

    loadAuthData();
  }, []);

  return (
    <NavigationContainer>
      {user?.id && !isLoading ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
