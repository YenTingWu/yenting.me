import React, { useContext } from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { getAllMetaData } from '@lib/mdx';
import type { PostMetadata } from '@types';
import { PageDefaultLayout } from '@components/Layout/PageDefaultLayout';
import { HeadController } from '@components/HeadController';
import { Posts as PostsRegion } from '@components/Region/Posts';
import { MediaContext } from '@components/MediaContext';
import { Flex } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';

interface PostsProps {
  metadata: PostMetadata[];
}

const Posts: NextPage<PostsProps> = ({ metadata }) => {
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
    <PageDefaultLayout
      justifyContent={metadata.length > 1 ? 'flex-start' : 'space-between'}
      media={mediaValue}
    >
      <HeadController title="Posts" description="Posts Page" />
      <PostsRegion metadata={metadata} />
    </PageDefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const metadata = getAllMetaData();
  return {
    props: { metadata },
  };
};

export default Posts;
