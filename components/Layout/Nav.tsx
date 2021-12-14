import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading, HStack, VStack } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/modal';
import { IconSwitch } from '@components/UI/IconSwitch';
import { InternalLink } from '@components/UI/InternalLink';
import type { MediaObject } from '@components/MediaContext';
import { useDisclosure } from '@chakra-ui/hooks';
import { IconButton } from '@chakra-ui/button';
import { FaChessBoard } from 'react-icons/fa';

interface NavProps {
  hasScrolled?: boolean;
  mediaQuery: MediaObject;
}

export const Nav: React.FC<NavProps> = ({
  mediaQuery: { isLargerThan500 },
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { push } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleNavHomePage = useCallback(() => push('/'), [push]);
  return (
    <Flex w="100%" alignItems="center" justifyContent="center">
      <Flex
        w="100%"
        maxW="1000px"
        py="2rem"
        px={['1rem', '1rem', '2rem']}
        justifyContent="space-between"
        alignItems="center"
        sx={{ '*': { fontFamily: 'Cutive Mono, monospace' } }}
      >
        <Heading
          as="h3"
          _hover={{ cursor: 'pointer' }}
          _selection={{ backgroundColor: 'transparent' }}
          fontSize={isLargerThan500 ? '2.5rem' : '1.75rem'}
          fontFamily="Cutive Mono, monospace"
          onClick={handleNavHomePage}
        >
          YenTing
        </Heading>
        {isLargerThan500 ? (
          <HStack alignItems="center" spacing="10">
            <InternalLink fontSize="md" href="/">
              Home
            </InternalLink>

            <InternalLink fontSize="md" href="/posts">
              Posts
            </InternalLink>

            <IconSwitch
              hasSwitched={colorMode === 'light'}
              onClick={toggleColorMode}
            />
          </HStack>
        ) : (
          <>
            <IconButton
              icon={<FaChessBoard />}
              aria-label="drawer-opener"
              colorScheme="gray"
              onClick={onOpen}
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent
                sx={{ '*': { fontFamily: 'Cutive Mono, monospace' } }}
              >
                <DrawerCloseButton size="lg" />
                <DrawerHeader fontSize="2rem" borderBottomWidth="1px">
                  <IconSwitch
                    hasSwitched={colorMode === 'light'}
                    onClick={toggleColorMode}
                  />
                </DrawerHeader>
                <DrawerBody>
                  <VStack mt="5" align="flex-start" spacing="5">
                    <InternalLink fontSize="1.25rem" href="/">
                      Home
                    </InternalLink>
                    <InternalLink fontSize="1.25rem" href="/posts">
                      Posts
                    </InternalLink>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </Flex>
    </Flex>
  );
};
