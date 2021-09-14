import React from 'react';
import { Flex, Text, VStack, Heading, HStack, Link } from '@chakra-ui/layout';
import { ChakraNextImage } from '@components/UI/ChakraNextImage';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/color-mode';
import type { MediaObject } from '@components/MediaContext';

interface ProfileProps {
  media: MediaObject;
}

export const Profile: React.FC<ProfileProps> = ({
  media: { isLargerThan900 },
}) => {
  const grayTextColor = useColorModeValue('gray.600', 'gray.200');
  const anchorTextColor = useColorModeValue('blue.400', 'blue.200');
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
          },
        }}
        p={isLargerThan900 ? '10' : '5'}
      >
        <ChakraNextImage
          src="/profile_photo.JPG"
          alt="profile_photo"
          width={isLargerThan900 ? 200 : 350}
          height={isLargerThan900 ? 200 : 350}
          layout="responsive"
          placeholder="blur"
          blurDataURL="/profile_photo.JPG"
          objectFit="contain"
          loading="lazy"
        />
        <VStack
          ml={isLargerThan900 ? '20' : 'auto'}
          mt={isLargerThan900 ? '0' : '10'}
          px="5"
          maxW="600px"
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
          <VStack alignItems="flex-start" spacing="3" fontSize="1.2rem">
            <Text>
              Hi, my name is YenTing, who enjoys building things and keeping it
              simple.
            </Text>
            <Text>
              {' '}
              I used to work at{' '}
              <Link
                color={anchorTextColor}
                fontWeight="600"
                href="https://www.weserve.tw"
                isExternal
              >
                StarkTech
              </Link>{' '}
              as UI engineer on building web and mobile app with react.
            </Text>
            <Text>
              This blog serves as a place for me to practice my expression and
              remember my steps in the tech infinity.
            </Text>
            <Text>
              Currently looking for a role as UI engineer,{' '}
              {/* <Box as="span" bg="blue.800" fontWeight="900"> */}
              hire me?
              {/* </Box> */}
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </Flex>
  );
};
