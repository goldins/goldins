import fs from 'fs';

const POSTS_DIR = 'content';

export const postsDirectory = `${process.cwd()}/pages/blog/${POSTS_DIR}`;

export function getMdSlugs() {
  return fs.readdirSync(postsDirectory);
}
