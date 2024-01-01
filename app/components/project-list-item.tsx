import { clsx } from 'clsx';

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

export const ProjectListItem = ({ title, description, link }: ProjectProps) => {
  return (
    <li
      className={clsx(
        'flex',
        'sm:flex-row',
        'flex-col',
        'w-full',
        'items-start',
        'text-lg',
        '[&:not(:first-child)]:mt-2'
      )}
    >
      <div className={clsx('min-w-[180px]')}>
        <a
          className={clsx(
            'text-stone-500',
            'font-bold',
            'underline',
            'underline-offset-2'
          )}
          href={link}
          target="_blank"
        >
          {title}
        </a>
      </div>
      <div
        className={clsx(
          'sm:ml-10',
          'max-sm:mt-2',
          'w-full',
          'before:content-["->"]',
          'before:mr-3'
        )}
      >
        {description}
      </div>
    </li>
  );
};
