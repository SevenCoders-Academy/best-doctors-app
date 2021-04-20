import styled from 'styled-components/native';
import { BaseTouchContainer } from '../Container';

export const ButtonContainer = styled(BaseTouchContainer)`
  background-color: ${({ theme, outline }) =>
    outline ? theme.colors.background : theme.colors.primary};
  height: ${({ theme }) => theme.metrics.px(56)}px;
  width: ${({ theme }) => theme.metrics.baseWidth}px;
  border-radius: ${({ theme }) => theme.metrics.px(36)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: ${({ theme }) => theme.metrics.px(2)}px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const TextButton = styled.Text`
  color: ${({ theme, outline }) =>
    outline ? theme.colors.primary : theme.colors.background};
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
