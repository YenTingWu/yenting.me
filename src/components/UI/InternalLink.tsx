import NextLink from 'next/link';
import { Link, LinkProps } from '@chakra-ui/layout';

interface InternalLinkProps extends LinkProps {
  href: string;
}

export const InternalLink: React.FC<InternalLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href}>
      <Link {...props}>{children}</Link>
    </NextLink>
  );
};
