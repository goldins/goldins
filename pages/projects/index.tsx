import * as React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export default () => (
  <div>
    Projects
    <br />
    <br />
    <Link href="/projects/bad-keyboard">
      <a>Drag and Drop Keyboard</a>
    </Link>
  </div>
);

export const getStaticProps: GetStaticProps = async (_context) => {
  return {
    props: {}
  };
};
