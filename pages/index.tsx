import * as React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../styles/defaultTheme';
import { Home } from './home';

const Container = styled.div(() => ({
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

export default () => {
  return (
    <Container>
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    </Container>
  );
};
