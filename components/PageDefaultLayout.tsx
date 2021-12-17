import React from 'react';
import { Flex } from '@chakra-ui/layout';
import type { FlexProps } from '@chakra-ui/layout';
import { Nav } from '@components/Nav';
import { Footer } from '@components/Footer';
import type { MediaObject } from '@components/MediaContext';

interface PageDefaultLayoutProps extends FlexProps {
  media: MediaObject;
}

export const PageDefaultLayout: React.FC<PageDefaultLayoutProps> = ({
  children,
  media,
  ...rest
}) => (
  <Flex minH="100vh" w="100%" flexDir="column" alignItems="center" {...rest}>
    <Nav mediaQuery={media} />
    <Flex as="main" py="8" flexDir="column">
      {children}
    </Flex>
    <Footer mediaQuery={media} />
  </Flex>
);
