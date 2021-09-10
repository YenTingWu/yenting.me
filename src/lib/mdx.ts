import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import glob from 'glob';
import { bundleMDX } from 'mdx-bundler';
import gfmRemark from 'remark-gfm';
import slugRemark from 'remark-slug';
import compareDesc from 'date-fns/fp/compareDesc';
import { PostMetadata } from '@types';

const ROOT = process.cwd();
const postsFolder = path.join(ROOT, 'src', 'posts');

export const getAllMetaData = () => {
  const postFilePaths = glob.sync(path.join(postsFolder, '*.mdx'));
  const metadata = postFilePaths
    .map((filePath) => {
      const { name: slug } = path.parse(filePath);
      const { data } = matter(fs.readFileSync(filePath, 'utf8'));
      return { ...data, slug } as PostMetadata;
    })
    .sort((a, b) =>
      compareDesc(new Date(b.publishedAt))(new Date(a.publishedAt))
    );

  return metadata as PostMetadata[];
};

export const getPostDataWithSlug = async (slug: string) => {
  const postFilePath = path.join(postsFolder, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath, 'utf8');

  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        gfmRemark,
        slugRemark,
      ];

      return options;
    },
  });

  return {
    code,
    metadata: {
      ...frontmatter,
      slug,
    },
  };
};
