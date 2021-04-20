import React from 'react';
import { Title } from '~/components/atoms';
import { Container, ButtonContainer, ContentContainer } from './styles';
import background from '~/assets/img/auth_background.png';

export const AuthWrapper = ({ children, title, bottomChildren }) => {
  return (
    <Container source={background}>
      <ContentContainer>
        {title && (
          <Title w="100%" mb={48}>
            {title}
          </Title>
        )}
        {children}
      </ContentContainer>
      <ButtonContainer>{bottomChildren}</ButtonContainer>
    </Container>
  );
};
