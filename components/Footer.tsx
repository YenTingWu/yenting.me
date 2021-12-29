import React from 'react';
import { Flex, HStack, Link, Text, Stack } from '@chakra-ui/layout';
import type { MediaObject } from '@components/MediaContext';

interface FooterProps {
  mediaQuery: MediaObject;
}

export const Footer: React.FC<FooterProps> = ({}) => (
  <Flex
    sx={{ '*': { fontFamily: 'Cutive Mono, monospace' } }}
    w="full"
    as="footer"
    my="20"
    justifyContent="center"
    flexWrap="wrap"
  >
    <Flex
      justifyContent="space-between"
      borderTopWidth={1}
      w="full"
      maxW="900px"
      pt="10"
      fontSize="1rem"
      mx="1rem"
      px="1rem"
      flexDir={['column', 'column', 'column', 'row']}
      alignItems="center"
    >
      <Text flex="1">&copy; {new Date().getFullYear()} Yen-Ting Wu</Text>

      <Stack
        flex="1"
        direction={['column', 'row']}
        spacing={['2', '10']}
        mt={['6', '6', '6', 0]}
        justifyContent="center"
        alignItems="center"
      >
        <HStack spacing="10">
          <Link href="https://resume.yenting.me" isExternal>
            Resume
          </Link>
          <Link href="https://github.com/YenTingWu" isExternal>
            Github
          </Link>
        </HStack>
        <HStack spacing="10">
          <Link href="https://twitter.com/YenTing09677393" isExternal>
            Twitter
          </Link>
          <Link href="mailTo:a9600125a@gmail.com" isExternal>
            Email
          </Link>
        </HStack>
      </Stack>
    </Flex>
  </Flex>
);
