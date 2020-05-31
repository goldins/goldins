const mdx = require('@next/mdx');

const withMDX = mdx({
  extension: /\.(md|mdx)$/
});

module.exports = () =>
  withMDX({
    pageExtensions: ['tsx', 'md', 'mdx']
  });
