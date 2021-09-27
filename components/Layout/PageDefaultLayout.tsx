import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { Nav } from '@components/Layout/Nav';
import { Footer } from '@components/Layout/Footer';
import type { MediaObject } from '@components/MediaContext';

interface PageDefaultLayoutProps {
  media: MediaObject;
}

export const PageDefaultLayout: React.FC<PageDefaultLayoutProps> = ({
  children,
  media,
}) => (
  <Flex minH="100vh" w="100%" flexDir="column" alignItems="center">
    <Nav mediaQuery={media} />
    <Flex as="main" minH="80vh" py="8" flexDir="column">
      {children}
    </Flex>
    <Footer mediaQuery={media} />
  </Flex>
);
