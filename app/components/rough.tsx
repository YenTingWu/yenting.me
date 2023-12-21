'use client';

import { useRef, useEffect } from 'react';
import { annotate } from 'rough-notation';
import { clsx } from 'clsx';

interface RoughProps {
  children: React.ReactNode;
}

export const Rough = ({ children }: RoughProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current == null) return;

    const annotation = annotate(ref.current, {
      type: 'underline',
      color: '#555555',
      multiline: true,
      animate: false,
    });
    annotation.show();

    return () => {
      annotation.remove();
    };
  }, []);

  return (
    <h2 className={clsx('text-2xl', 'font-bold')}>
      <span ref={ref}>{children}</span>
    </h2>
  );
};
