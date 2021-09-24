import React from 'react';
import { Flex, HStack, Link, Text } from '@chakra-ui/layout';
import type { MediaObject } from '@components/MediaContext';

interface FooterProps {
  mediaQuery: MediaObject;
}

export const Footer: React.FC<FooterProps> = ({}) => (
  <Flex
    sx={{ '*': { fontFamily: 'Cutive Mono, monospace' } }}
    w="100%"
    as="footer"
    my="20"
    justifyContent="center"
  >
    <Flex
      justifyContent="space-between"
      borderTopWidth={1}
      w="100%"
      maxW="900px"
      pt="10"
      fontSize="1rem"
      mx="1rem"
      px="1rem"
      flexDir={['column', 'column', 'column', 'row']}
      alignItems="center"
    >
      <Text>&copy; {new Date().getFullYear()} Yen-Ting Wu</Text>

      <HStack spacing="10" mt={['1rem', '1rem', '1rem', 0]}>
        <Link href="https://github.com/YenTingWu" isExternal>
          Github
        </Link>
        <Link href="https://twitter.com/YenTing09677393" isExternal>
          Twitter
        </Link>
        <Link href="mailTo:a9600125a@gmail.com" isExternal>
          Email
        </Link>
      </HStack>
    </Flex>
  </Flex>
);
