import React from 'react';
import { AuthWrapper, Title, Button } from '~/components';
import { Container, SuccessImg } from './styles';
import checkImage from '~/assets/img/CheckSuccess.png';

export const CreateAccountSuccessScreen = () => {
  return (
    <AuthWrapper bottomChildren={<Button>ACESSAR O APP</Button>}>
      <Container>
        <SuccessImg source={checkImage} />
        <Title align="center" mt={16}>
          Conta criado com sucesso!
        </Title>
      </Container>
    </AuthWrapper>
  );
};
