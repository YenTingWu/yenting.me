import React, { useMemo, useContext } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import type { PostMetadata } from '@types';
import { Divider, Flex } from '@chakra-ui/layout';
import { HeadController } from '@components/HeadController';
import { PageDefaultLayout } from '@components/Layout/PageDefaultLayout';
import { Profile } from '@components/Region/Profile';
import { Posts } from '@components/Region/Posts';
import { getAllMetaData } from '@lib/mdx';
import { MediaContext } from '@components/MediaContext';
import { Spinner } from '@chakra-ui/spinner';

interface HomeProps {
  metadata: PostMetadata[];
}

const Home: NextPage<HomeProps> = ({ metadata }) => {
  const recent2Metadata = useMemo(() => metadata.slice(0, 2), [metadata]);

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
      <Profile media={mediaValue} />
      <Divider alignSelf="center" my="20" width="90%" />
      <Posts
        media={mediaValue}
        metadata={recent2Metadata}
        isShowMorePosts={true}
      />
    </PageDefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const metadata = getAllMetaData();
  return {
    props: {
      metadata,
    },
  };
};

export default Home;
