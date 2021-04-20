import React, { useEffect } from 'react';
import { Container, Logo } from './styles';
import background from '~/assets/img/auth_background.png';
import logoimg from '~/assets/img/logo.png';

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container source={background}>
      <Logo source={logoimg} />
    </Container>
  );
};
