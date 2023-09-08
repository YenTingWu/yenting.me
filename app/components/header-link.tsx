'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderLink {
  children: React.ReactNode;
  href: string;
}

export const HeaderLink = ({ children, href }: HeaderLink) => {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;

  return (
    <Link
      href={href}
      className={`
      hover:underline
      ${isCurrentPath ? 'text-neutral-900' : 'text-neutral-400'}
      [&:not(:first-child)]:ml-[12px]
      py-1
      transition
      `}
    >
      {children}
    </Link>
  );
};
