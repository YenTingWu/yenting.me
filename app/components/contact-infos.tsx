import { clsx } from 'clsx';

const data = [
  {
    title: 'github',
    link: 'https://github.com/YenTingWu',
  },
  {
    title: 'resume',
    link: 'https://resume.yenting.me',
  },
  {
    title: 'email',
    link: 'mailTo:a9600125a@gmail.com',
  },
  {
    title: 'bluesky',
    link: 'https://bsky.app/profile/yenwu.bsky.social',
  },
];

interface ContactInfosProps {
  className?: string;
}

export const ContactInfos = ({ className }: ContactInfosProps) => {
  return (
    <div className={clsx('w-full mt-[.25rem]', className)}>
      {data.map(({ title, link }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          className={clsx(
            'hover:underline sm:[&:not(:first-child)]:ml-3  [&:not(:first-child)]:ml-2 text-sm text-neutral-500'
          )}
        >
          {title}
        </a>
      ))}
    </div>
  );
};
