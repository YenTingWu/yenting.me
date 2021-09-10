import React from 'react';
import { Flex, Text, VStack, Heading, HStack, Link } from '@chakra-ui/layout';
import { ChakraNextImage } from '@components/UI/ChakraNextImage';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import type { MediaObject } from '@components/MediaContext';

interface ProfileProps {
  media: MediaObject;
}

export const Profile: React.FC<ProfileProps> = ({
  media: { isLargerThan900 },
}) => {
  return (
    <Flex as="section" w="100%" alignItems="center">
      <Flex
        flexDir={isLargerThan900 ? 'row' : 'column'}
        maxW="1000px"
        alignSelf={isLargerThan900 ? 'flex-start' : 'center'}
        justifySelf="center"
        sx={{
          '*': {
            fontFamily: 'Cutive Mono, monospace',
            p: { fontSize: '1.2rem' },
          },
        }}
        p={isLargerThan900 ? '10' : '5'}
      >
        <ChakraNextImage
          src="/profile_photo.JPG"
          alt="profile_photo"
          width={400}
          height={400}
          placeholder="blur"
          blurDataURL="/profile_photo.JPG"
          objectFit="contain"
          loading="lazy"
        />
        <VStack
          ml={isLargerThan900 ? '20' : 'auto'}
          mt={isLargerThan900 ? '0' : '10'}
          px="5"
          maxW="550px"
          wordBreak="break-word"
          align="start"
          spacing="5"
        >
          <Heading fontFamily="Cutive Mono, monospace" as="h3">
            This is Yen-Ting Wu
          </Heading>
          <Text>Based in Taipei, Taiwan</Text>
          <HStack spacing="5">
            <Link href="https://twitter.com/YenTing09677393" isExternal>
              <FaTwitter size="2rem" />
            </Link>
            <Link href="https://github.com/YenTingWu" isExternal>
              <FaGithub size="2rem" />
            </Link>
          </HStack>
          <Text>
            I love making tools that are user-friendly, simple and delightful. I
            work as a Developer Advocate at ▲ Vercel — focusing on DX and
            helping the community create wonderful things. Welcome to my digital
            garden where I share what I'm learning about shipping great
            products, becoming a better developer and growing a career in tech.
            Let's hang out on Twitter.
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};
