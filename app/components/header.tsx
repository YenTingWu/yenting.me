import { HeaderLink } from './header-link';

const linkData = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
];

export const Header = () => {
  return (
    <header className="mt-[5rem]">
      {linkData.map(({ title, href }) => (
        <HeaderLink key={title} href={href}>
          {title}
        </HeaderLink>
      ))}
    </header>
  );
};
