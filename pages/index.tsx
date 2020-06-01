import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { Container } from '../components/Container';
import { defaultTheme } from '../styles/defaultTheme';
import { Home } from './home';

export default () => {
  return (
    <Container>
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    </Container>
  );
};
