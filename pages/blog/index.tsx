import * as React from 'react';
import { Container } from 'next/app';
import { SiteHead } from '../../components/SiteHead';
import { Layout } from './Layout';

import MD from './pages/2020-05-30-01-picking-starter-kit.mdx';

export default () => (
  <Container>
    <SiteHead subTitle="Blog" />
    Blog
    <MD />
    <Layout />
  </Container>
);
