import styled from 'styled-components/native';
import { BaseTouchContainer } from '~/components/atoms/Container';

export const CardContainer = styled(BaseTouchContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.metrics.px(120)}px;
  width: ${({ theme }) => theme.metrics.baseWidth}px;
  border-width: ${({ theme, selected }) =>
    theme.metrics.px(selected ? 2 : 1)}px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.greyDark};
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  padding: ${({ theme }) => theme.metrics.px(6)}px;
`;

export const CheckView = styled.View`
  display: flex;
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextView = styled.View`
  display: flex;
  width: 80%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const CheckCircle = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.metrics.px(24)}px;
  width: ${({ theme }) => theme.metrics.px(24)}px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.greyDark};
  border-width: ${({ theme }) => theme.metrics.px(2)}px;
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.background};
`;
