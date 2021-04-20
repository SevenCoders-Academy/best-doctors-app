import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from '~/modules/Auth/routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};
