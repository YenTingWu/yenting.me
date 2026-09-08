import { clsx } from 'clsx';

const data = [
  {
    title: 'github',
    link: 'https://github.com/YenTingWu',
  },
  {
    title: 'email',
    link: 'mailTo:a9600125a@gmail.com',
  },
  {
    title: 'x',
    link: 'https://x.com/YenTingWu',
  },
];

interface ContactInfosProps {
  className?: string;
}

export const ContactInfos = ({ className }: ContactInfosProps) => {
  return (
    <div
      className={clsx(
        'w-full mt-1 flex items-center sm:gap-3 gap-2 ml-3',
        className
      )}
    >
      {data.map(({ title, link }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          className={clsx('hover:underline text-sm text-neutral-500')}
        >
          {title}
        </a>
      ))}
    </div>
  );
};
