const mdx = require('@next/mdx');
const images = require('remark-images');
const emoji = require('remark-emoji');
const frontmatter = require('remark-frontmatter');

const withMDX = () =>
  mdx({
    extension: /\.(md|mdx)$/
  })({
    pageExtensions: ['tsx', 'md', 'mdx'],
    options: {
      mdPlugins: [images, emoji, frontmatter]
    }
  });

module.exports = () => withMDX();
