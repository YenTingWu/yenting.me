import { clsx } from 'clsx';

interface DividerProps {
  className?: string;
}

export const Divider = ({ className }: DividerProps) => {
  return (
    <div
      className={clsx('w-full', 'h-[1px]', 'bg-gray-200', 'my-10', className)}
    />
  );
};
