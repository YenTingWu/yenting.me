import { HeaderLink } from './header-link';
import { clsx } from 'clsx';

const linkData = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
];

export const Header = () => {
  return (
    <header className={clsx('w-full', 'max-w-[780px]', 'mt-6', 'py-8')}>
      {linkData.map(({ title, href }) => (
        <HeaderLink key={title} href={href}>
          {title}
        </HeaderLink>
      ))}
    </header>
  );
};
