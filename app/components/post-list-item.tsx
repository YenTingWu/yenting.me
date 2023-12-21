import Link from 'next/link';
import { clsx } from 'clsx';
import { rubik } from '@/fonts';
import { DateTime } from 'luxon';

interface PostListItemProps {
  title: string;
  publishedAt: string;
  slug: string;
}

export const PostListItem = ({
  title,
  publishedAt,
  slug,
}: PostListItemProps) => {
  return (
    <li
      className={clsx(
        'flex',
        'w-full',
        'max-sm:flex-col',
        'justify-between',
        'items-start'
      )}
    >
      <Link
        href={`/posts/${slug}`}
        className={clsx('max-w-[278px]', 'w-full', 'text-xl')}
      >
        {title}
      </Link>
      <span
        className={clsx(
          'uppercase',
          rubik.className,
          'font-medium',
          'text-sm',
          'tracking-[3px]',
          'leading-5',
          'text-neutral-500'
        )}
      >
        {DateTime.fromISO(publishedAt).toFormat('MMM dd, yyyy')}
      </span>
    </li>
  );
};
