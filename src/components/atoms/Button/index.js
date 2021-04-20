import React from 'react';
import { ButtonContainer, TextButton } from './styles';

export const Button = ({ children, outline, ...props }) => {
  return (
    <ButtonContainer outline={outline} {...props}>
      <TextButton outline={outline}>
        {String(children).toUpperCase()}
      </TextButton>
    </ButtonContainer>
  );
};
