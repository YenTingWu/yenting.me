'use client';

import Link from 'next/link';
import { clsx } from 'clsx';
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
      className={clsx(
        isCurrentPath ? 'hover:text-neutral-900' : 'hover:text-neutral-500',
        isCurrentPath ? 'text-neutral-900' : 'text-neutral-400',
        '[&:not(:first-child)]:ml-[12px]',
        'py-1',
        'transition',
        'font-bold'
      )}
    >
      {children}
    </Link>
  );
};
