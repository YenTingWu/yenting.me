import React, { useContext } from 'react';
import type { NextPage } from 'next';
import { Flex, Heading } from '@chakra-ui/layout';
import { HeadController } from '@components/HeadController';
import { PageDefaultLayout } from '@components/Layout/PageDefaultLayout';
import { MediaContext } from '@components/MediaContext';
import { Spinner } from '@chakra-ui/spinner';
import { InternalLink } from '@components/UI/InternalLink';

interface NotFoundProps {}

const NotFound: NextPage<NotFoundProps> = () => {
  const mediaValue = useContext(MediaContext);

  if (mediaValue == null) {
    return (
      <Flex minH="100vh" w="100%" justifyContent="center" alignItems="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }

  return (
    <PageDefaultLayout media={mediaValue}>
      <HeadController />
      <Flex
        flex="1"
        flexDir="column"
        justifyContent="center"
        alignItems={mediaValue.isLargerThan500 ? 'center' : 'flex-start'}
        alignSelf="center"
        sx={{
          '*': {
            fontFamily: 'Cutive Mono, monospace',
          },
        }}
        px="5"
      >
        <Heading as="h2" fontFamily="Cutive Mono, monospace">
          Unable to Reach this Page
        </Heading>
        <InternalLink fontSize="1.5rem" mt="1.5rem" href="/">
          Back to Home
        </InternalLink>
      </Flex>
    </PageDefaultLayout>
  );
};

export default NotFound;
