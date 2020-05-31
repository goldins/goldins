import * as React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { Global } from '@emotion/core';
import { SiteHead } from '../components/SiteHead';

import normalize from '../styles/normalize';
import { Theme } from '../styles/defaultTheme';

const Container = styled.div(() => ({
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

const H1 = styled.h1(() => ({
  margin: 0,
  lineHeight: 1.15,
  fontSize: '4rem',
  '& a': {
    color: '#0070F3',
    textDecoration: 'none',
    '&:hover, &:focus, &:active': {
      textDecoration: 'underline'
    }
  }
}));

const Footer = styled.footer(() => ({
  width: '100%',
  height: 100,
  borderTop: '1px solid #EAEAEA',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const Home = () => {
  const theme = useTheme<Theme>();

  return (
    <Container>
      <Global styles={normalize(theme)} />
      <SiteHead />

      <main>
        <H1>Simon.Goldin</H1>
      </main>

      <Footer>Footer</Footer>

      <a href="/blog">Blog</a>
      <a href="/projects">Projects</a>
    </Container>
  );
};
