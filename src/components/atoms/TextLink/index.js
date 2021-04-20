import React from 'react';
import { BaseTouchContainer } from '../Container';
import { CardTitle } from '../Text';

export const TextLink = ({ text, onPress, ...props }) => (
  <BaseTouchContainer
    onPress={onPress}
    align="flex-end"
    h={24}
    justify="flex-end"
    {...props}>
    <CardTitle>{text}</CardTitle>
  </BaseTouchContainer>
);
