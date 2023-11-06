import { createStackNavigator } from '@react-navigation/stack';

import { AppointmentDetails, Home, SignIn } from '../screens';
import { theme } from '../config';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName='SignIn'
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name='SignIn' component={SignIn} />
      <Screen name='Home' component={Home} />
      <Screen name='AppointmentDetails' component={AppointmentDetails} />
    </Navigator>
  );
}
