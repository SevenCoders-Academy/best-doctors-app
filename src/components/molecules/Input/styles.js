import styled from 'styled-components/native';
import { BaseContainer } from '~/components/atoms/Container';

export const InputContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${({ theme }) => theme.metrics.baseWidth}px;
  height: ${({ theme }) => theme.metrics.px(56)}px;
  border-width: ${({ theme, focus }) => theme.metrics.px(focus ? 2 : 1)}px;
  border-color: ${({ theme, focus }) =>
    focus ? theme.colors.primary : theme.colors.greyDark};
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
`;

export const InputLabel = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  padding: 0;
`;

export const InputText = styled.TextInput`
  width: 100%;
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.dark};
  margin: 0;
  padding: 0;
`;

export const ErrorLabel = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: red;
`;
