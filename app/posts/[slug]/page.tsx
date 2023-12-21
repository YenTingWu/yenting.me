import { getPosts } from '@db/blogs';
import Image from 'next/image';
import { clsx } from 'clsx';
import { CustomMDX } from '@components/mdx';
import { Header } from '@components/header';
import { Divider } from '@components/divider';
import { notFound } from 'next/navigation';
import { DateTime } from 'luxon';
import { rubik } from '@/fonts';

interface GenerateMetadataProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: GenerateMetadataProps) {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === params.slug);

  if (post == null) return;

  const { title, summary } = post.metadata;

  return {
    title,
    description: summary,
  };
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostPageProps) {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === params.slug);

  if (post == null) {
    return notFound();
  }

  const {
    metadata: { title, publishedAt, image, imageAlt },
    content,
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
          'max-w-[760px]',
          'px-5'
        )}
      >
        <Header />

        <main className={clsx('max-w-[780px]', 'py-20', 'w-full')}>
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
                className={clsx('rounded-sm', 'mb-20', 'shadow')}
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
