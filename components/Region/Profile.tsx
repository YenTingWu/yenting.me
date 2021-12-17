import React from 'react';
import { Flex, Text, VStack, Heading, HStack, Link } from '@chakra-ui/layout';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/color-mode';
import type { MediaObject } from '@components/MediaContext';
import profileData from '../../profile-meta.json';

interface ProfileProps {
  media: MediaObject;
}

export const Profile: React.FC<ProfileProps> = ({
  media: { isLargerThan900 },
}) => {
  const grayTextColor = useColorModeValue('gray.600', 'gray.200');
  return (
    <Flex
      as="section"
      w="100%"
      alignItems="center"
      sx={{
        '*': {
          fontFamily: 'Cutive Mono, monospace',
        },
      }}
    >
      <VStack
        ml={isLargerThan900 ? '20' : 'auto'}
        mt={isLargerThan900 ? '0' : '10'}
        px="5"
        maxW="850px"
        w="100%"
        wordBreak="break-word"
        align="start"
        spacing="5"
      >
        <Heading fontFamily="Cutive Mono, monospace" as="h3">
          YenTing Wu
        </Heading>
        <Text fontSize="1rem" color={grayTextColor}>
          Based in Taipei, Taiwan
        </Text>
        <HStack spacing="5">
          <Link
            href="https://read.cv/yenting"
            fontWeight="900"
            textShadow=".7px -.2px #2D3748"
            fontSize="1.25rem"
            isExternal
          >
            CV
          </Link>
          <Link href="https://github.com/YenTingWu" isExternal>
            <FaGithub size="1.8rem" />
          </Link>
          <Link href="https://twitter.com/YenTing09677393" isExternal>
            <FaTwitter size="1.8rem" />
          </Link>
        </HStack>
        <VStack alignItems="flex-start" spacing="3" fontSize="md">
          {profileData['self-statement'].split('\n').map((str, i) => (
            <Text key={str}>{str}</Text>
          ))}
        </VStack>
      </VStack>
    </Flex>
  );
};
