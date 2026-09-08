import Image from 'next/image';
import { getPosts } from '@db/blogs';
import { clsx } from 'clsx';
import { CustomMDX } from '@components/mdx';
import { Header } from '@components/header';
import { Divider } from '@components/divider';
import { notFound } from 'next/navigation';
import { DateTime } from 'luxon';
import { rubik } from '@/fonts';
import { View } from './view';

interface GenerateMetadataProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: GenerateMetadataProps) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === slug);

  if (post == null) return;

  const { title, summary } = post.metadata;

  return {
    title,
    description: summary,
  };
}

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Post({ params }: PostPageProps) {
  const { slug: slugParam } = await params;
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === slugParam);

  if (post == null) {
    return notFound();
  }

  const {
    metadata: { title, publishedAt, image, imageAlt },
    content,
    slug,
  } = post;

  return (
    <div
      className={clsx(
        'w-screen',
        'flex',
        'justify-center',
        'items-center',
        'flex-col'
      )}
    >
      <main
        className={clsx(
          'flex',
          'items-center',
          'flex-col',
          'mx-auto',
          'min-h-screen',
          'w-full',
          'max-w-190',
          'px-5'
        )}
      >
        <Header />
        <View postId={`${slug}_${publishedAt}`} />

        <main className={clsx('max-w-195', 'sm:py-20', 'py-8', 'w-full')}>
          <div className={clsx('mb-10', rubik.className)}>
            <h1
              className={clsx(
                'text-4xl',
                'font-bold',
                'mb-2',
                'tracking-[3px]'
              )}
            >
              {title}
            </h1>
            <span className={clsx('text-zinc-500', 'tracking-[2px]')}>
              {DateTime.fromISO(publishedAt).toFormat('MMM dd, yyyy')}
            </span>
            <Divider />

            {image ? (
              <Image
                className={clsx('rounded-xs', 'mb-20', 'shadow-sm')}
                src={image}
                width={780}
                height={400}
                alt={imageAlt ?? 'Post Image'}
              />
            ) : null}
          </div>
          <article className={clsx('post-content-container')}>
            <CustomMDX source={content} />
          </article>
        </main>
      </main>
    </div>
  );
}
