import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks';
import { SignIn } from '../screens';

import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user?.id ? <AuthRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
