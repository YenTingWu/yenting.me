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
        className={clsx('max-w-[430px]', 'w-full', 'sm:text-lg', 'text-base')}
      >
        {title}
      </Link>
      <span
        className={clsx(
          'uppercase',
          rubik.className,
          'font-medium',
          'sm:text-sm',
          'text-xs',
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
