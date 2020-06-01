import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Container } from '../components/Container';
import { defaultTheme } from '../styles/defaultTheme';

export default ({ Component, pageProps }: any) => {
  return (
    <Container>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Container>
  );
};
