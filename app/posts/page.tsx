import { getPosts } from '@db/blogs';
import { clsx } from 'clsx';
import { Header } from '@components/header';
import { PostListItem } from '@components/post-list-item';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'My posts list',
};

export default async function Posts() {
  const posts = await getPosts();

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
          'max-w-[760px]',
          'w-full',
          'px-5'
        )}
      >
        <Header />
        <div className={clsx('w-full', 'mt-5')}>
          <h1 className={clsx('text-4xl', 'font-bold')}>Posts</h1>
        </div>
        <ul className={clsx('w-full', 'my-12', '[&_*:not(:first-child)]:mt-3')}>
          {posts.map((post) => {
            return (
              <PostListItem
                key={post.slug}
                title={post.metadata.title}
                publishedAt={post.metadata.publishedAt}
                slug={post.slug}
              />
            );
          })}
        </ul>
      </main>
    </div>
  );
}
