import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
// import Storybook from '../storybook';
import { theme } from './styles/theme';
import { Routes } from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
