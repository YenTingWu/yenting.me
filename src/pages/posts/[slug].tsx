import React, { useContext } from 'react';
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import type { PostMetadata } from '@types';
import { getAllMetaData, getPostDataWithSlug } from '@lib/mdx';
import { getMDXComponent } from 'mdx-bundler/client';
import { Heading, Box, Flex } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { PageDefaultLayout } from '@components/Layout/PageDefaultLayout';
import { ChakraNextImage } from '@components/UI/ChakraNextImage';
import { mdxComponents } from '@components/UI/MDX';
import { HeadController } from '@components/HeadController';
import { MediaContext } from '@components/MediaContext';

interface SlugProps {
  code: string;
  metadata: PostMetadata;
}

const Slug: NextPage<SlugProps> = ({
  code,
  metadata: { image, title, description },
}) => {
  const Component = getMDXComponent(code);

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
      <HeadController title={title} description={description} />
      <ChakraNextImage
        src={image}
        blurDataURL={image}
        alt="cover_image"
        width={800}
        height={500}
        w="auto"
        h="auto"
        layout="responsive"
        objectFit="contain"
        placeholder="blur"
      />
      <Box
        alignSelf="center"
        as="article"
        w="100%"
        px="10"
        wordBreak="break-word"
        maxW="850px"
      >
        <Heading
          as="h1"
          fontSize={['4xl', '4xl', '4xl', '5xl']}
          mt={['1rem', '1rem', '1rem', '2rem']}
          mb={['1.5rem', '1.5rem', '1.5rem', '3rem']}
        >
          {title}
        </Heading>
        <Component components={mdxComponents} />
      </Box>
    </PageDefaultLayout>
  );
};

export const getStaticPaths: GetStaticPaths<Record<string, string>> = () => {
  const metadata = getAllMetaData();
  const paths = metadata.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug;

  if (typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const { code, metadata } = await getPostDataWithSlug(slug);

  return { props: { code, metadata } };
};

export default Slug;
