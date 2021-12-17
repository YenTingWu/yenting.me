import React, { useContext } from 'react';
import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/layout';
import { HeadController } from '@components/HeadController';
import { PageDefaultLayout } from '@components/Layout/PageDefaultLayout';
import { Profile } from '@components/Region/Profile';
import { MediaContext } from '@components/MediaContext';
import { Spinner } from '@chakra-ui/spinner';

interface HomeProps {}

const Home: NextPage<HomeProps> = ({}) => {
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
    <PageDefaultLayout media={mediaValue} justifyContent="space-between">
      <HeadController />
      <Profile media={mediaValue} />
    </PageDefaultLayout>
  );
};

export default Home;
