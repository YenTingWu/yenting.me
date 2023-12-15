import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function parseFormat(fileContent: string) {
  /**
   * \s* 0 or more whitespace characters (spaces, tabs, newlines, etc.)
   * [\s\S]*? 0 or more characters of any kind (including newlines)
   */
  const formatRegex = /---\s*([\s\S]*?)\s*---/;
  const match = formatRegex.exec(fileContent);
  const frontMatterBlock = match![1];

  // Remove the front matter block from the file content
  const content = fileContent.replace(formatRegex, '').trim();

  let metadata: Partial<Metadata> = {};

  frontMatterBlock.split('\n').forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ');

    // Remove surrounding quotes
    value = value.replace(/^['"](.*)['"]$/, '$1');
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { content, metadata };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((d) => path.extname(d) === '.mdx');
}

function readMDXFile(filePath: string) {
  return fs.readFileSync(filePath, 'utf-8');
}

function getBlogSlug(filePath: string) {
  return path.basename(filePath, '.mdx');
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((filePath) => {
    const fileContent = readMDXFile(path.join(dir, filePath));
    return {
      slug: getBlogSlug(filePath),
      ...parseFormat(fileContent),
    };
  }) as { content: string; metadata: Metadata; slug: string }[];
}

export function getPosts() {
  return getMDXData(path.join(process.cwd(), 'contents'));
}
