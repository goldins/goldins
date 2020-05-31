import * as React from 'react';
import { SiteHead } from '../../components/SiteHead';
import { Layout } from './Layout';

import MD from './content/2020-05-30-01-picking-starter-kit.mdx';

export default () => (
  <>
    <SiteHead subTitle="Blog" />
    Blog
    <MD />
    <Layout />
  </>
);
