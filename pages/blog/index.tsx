import * as React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { SiteHead } from '../../components/SiteHead';
import { getMdSlugs } from './getPosts';

interface Props {
  fileNames: string[];
}

export default ({ fileNames }: Props) => {
  return (
    <>
      <SiteHead subTitle="Blog" />
      <Link href="../">
        <a>Back</a>
      </Link>
      <br />
      <br />
      <h2>Blog</h2>
      <br />
      <br />
      {fileNames.map((path, index) => (
        <React.Fragment key={index}>
          <br />
          {/*<span>{format(parse(meta.date, 'yyyy/mm/dd', new Date()), 'MMMM Do, yyyy')}</span>*/}
          <br />

          <Link href={'blog/[slug]'} as={`blog/${path.split('.mdx')[0]}`}>
            {/* <a>{meta.title}</a> */}
          </Link>
        </React.Fragment>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fileNames = getMdSlugs();
  return {
    props: {
      fileNames
    }
  };
};
