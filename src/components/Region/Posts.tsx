import React, { useMemo } from 'react';
import { Flex, Heading, Box } from '@chakra-ui/layout';
import { LinkOverlayCard } from '@components/UI/LinkOverlayCard';
import { InternalLink } from '@components/UI/InternalLink';
import type { PostMetadata } from '@types';
import type { MediaObject } from '@components/MediaContext';

interface PostsProps {
  metadata: PostMetadata[];
  media?: MediaObject;
  isShowMorePosts?: boolean;
}

export const Posts: React.FC<PostsProps> = ({
  metadata,
  isShowMorePosts = false,
}) => {
  return (
    <Flex as="section" w="100%" justifyContent="center">
      <Flex px={['5', '5', '5', 0, 0]} w="100%" maxW="700px" flexDir="column">
        <Heading
          fontFamily="Cutive Mono, monospace"
          fontSize="3xl"
          as="h3"
          mb="5"
        >
          Recent Posts
        </Heading>
        <Box mx="auto" py="10">
          {useMemo(
            () =>
              metadata.map(
                ({ title, description, image, slug, publishedAt }, i) => (
                  <LinkOverlayCard
                    key={`${title}_${i}`}
                    title={title}
                    description={description}
                    image={image}
                    publishedAt={new Date(publishedAt)}
                    linkTo={`/posts/${slug}`}
                  />
                )
              ),
            [metadata]
          )}
        </Box>
        {isShowMorePosts && (
          <InternalLink
            href="/posts"
            fontFamily="Cutive Mono, monospace"
            fontSize="1rem"
            mt="5"
            alignSelf="center"
            color="black"
          >
            Show More Posts
          </InternalLink>
        )}
      </Flex>
    </Flex>
  );
};
