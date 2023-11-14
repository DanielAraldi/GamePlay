import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks';
import { SignIn } from '../screens';

import { AppRoutes } from './app.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user?.id ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
