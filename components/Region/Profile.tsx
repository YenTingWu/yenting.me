import React from 'react';
import { chakra } from '@chakra-ui/system';
import { Flex, Text, VStack, Heading, Link } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import type { MediaObject } from '@components/MediaContext';
import type { LinkProps } from '@chakra-ui/layout';

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
        maxW="700px"
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

        <VStack alignItems="flex-start" spacing="5" fontSize="md">
          <Text>
            My name is YenTing Wu, a self-motivated software engineer and a
            creator. My passion for being a software engineer lies in coming up
            with brilliant ideas with my colleges and enabling them. I take good
            care about experience, design and communication.
          </Text>
          <Text>
            I am also an open-source collaborator, mainly contribute to React
            community. I currently work with{' '}
            <ExternalLink href="https://www.chakra-ui.com">
              Chakra UI
            </ExternalLink>{' '}
            team to build the doc site and maintain DevRel. I love to
            collaborate with people coming from different backgrounds but having
            the same goal. That always excites me to think from different
            perspectives.
          </Text>
          <Text>
            {' '}
            Outside of programming, I love river trekking, biking in summer and
            exploring wild hot spring in winter. Nature always inspires me.
          </Text>{' '}
          <chakra.span pt="6">
            <Text spacing="5">
              Feel free to hang out with me on{' '}
              <ExternalLink href="https://twitter.com/YenTing09677393">
                Twitter
              </ExternalLink>{' '}
              and{' '}
              <ExternalLink href="https://github.com/YenTingWu">
                Github
              </ExternalLink>
              .
            </Text>
          </chakra.span>
        </VStack>
      </VStack>
    </Flex>
  );
};

const ExternalLink: React.FC<LinkProps> = ({ children, ...rest }) => {
  const linkColor = useColorModeValue('teal.500', 'teal.200');

  return (
    <Link
      color={linkColor}
      textDecoration="underline"
      textUnderlineOffset="1px"
      href="https://www.chakra-ui.com"
      isExternal
      fontWeight="900"
      {...rest}
    >
      {children}
    </Link>
  );
};
