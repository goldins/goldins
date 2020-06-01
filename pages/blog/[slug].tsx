import dynamic from 'next/dynamic';
import { getMdSlugs } from './getPosts';

// reference: https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths
export default ({ filename }) => {
  const MDXContent = dynamic(() => import(`./content/${filename}`));
  const postMeta = require(`./content/${filename}`).metadata;
  return (
    <div>
      <h1>Blog</h1>
      <MDXContent />
      <h2>Blog Title: {postMeta.title}</h2>
      <h2>Date: {postMeta.date}</h2>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const filename = `${params.slug}.mdx`;

  return {
    props: {
      filename
    }
  };
}

export async function getStaticPaths() {
  const mdxFiles = getMdSlugs();
  // Loop through all post files and create array of slugs (to create links)
  const paths = mdxFiles.map((filename) => ({
    params: {
      slug: filename.split('.mdx')[0]
    }
  }));

  return {
    paths,
    fallback: false
  };
}
