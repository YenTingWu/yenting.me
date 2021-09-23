import React from 'react';
import type {
  HeadingAttr,
  HrAttr,
  CommonAttr,
  BlockquoteAttr,
  OlAttr,
  UlAttr,
  LiAttr,
  PAttr,
  ImgAttr,
  AAttr,
} from './mdxType.d';
import {
  Text,
  Link,
  Heading,
  Flex,
  UnorderedList,
  ListItem,
  OrderedList,
  Divider,
} from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { chakra } from '@chakra-ui/system';
import { ChakraNextImage } from '@components/UI/ChakraNextImage';
import { loader } from '@lib/imageLoader';
import { CodeBlock } from './CodeBlock';

const StyledColorModeAnchor = (props: AAttr) => {
  const color = useColorModeValue('blue.500', 'blue.200');
  return (
    <Link
      {...props}
      isExternal
      fontSize={['1rem', '1rem', '1rem', '1.1rem']}
      lineHeight="35px"
      letterSpacing="1px"
      color={color}
      fontWeight="900"
    />
  );
};

const StyledBgModeBlockQuote = (props: BlockquoteAttr) => {
  const bg = useColorModeValue('gray.50', 'gray.700');

  return (
    <chakra.blockquote
      {...props}
      borderLeftWidth=".5rem"
      p="1rem 1rem 1rem 1.5rem"
      mr="2rem"
      my="2rem"
      bg={bg}
    />
  );
};

export const mdxComponents = {
  h1: (props: HeadingAttr) => (
    <Heading as="h1" fontSize="2.5rem" my="3rem" fontWeight="900" {...props} />
  ),
  h2: (props: HeadingAttr) => (
    <Heading as="h2" fontSize="2.25rem" my="3rem" fontWeight="800" {...props} />
  ),
  h3: (props: HeadingAttr) => (
    <Heading as="h3" fontSize="2rem" my="3rem" fontWeight="700" {...props} />
  ),
  h4: (props: HeadingAttr) => (
    <Heading as="h4" fontSize="1.75rem" my="3rem" fontWeight="700" {...props} />
  ),
  h5: (props: HeadingAttr) => (
    <Heading as="h5" fontSize="1.5rem" my="3rem" fontWeight="700" {...props} />
  ),
  h6: (props: HeadingAttr) => (
    <Heading as="h6" fontSize="1.25rem" my="3rem" fontWeight="700" {...props} />
  ),
  strong: (props: CommonAttr) => (
    <chakra.strong {...props} textShadow=".8px 0px #2D3748" />
  ),
  hr: (props: HrAttr) => <Divider {...props} my="5rem" w="90%" mx="auto" />,
  code: CodeBlock,
  blockquote: StyledBgModeBlockQuote,
  ul: (props: UlAttr) => <UnorderedList {...props} mt="2rem" />,
  ol: (props: OlAttr) => <OrderedList {...props} mt="2rem" />,
  li: (props: LiAttr) => (
    <ListItem
      {...props}
      ml="1rem"
      pl=".5rem"
      mb="1rem"
      fontSize={['.9rem', '.9rem', '.9rem', '1rem']}
      lineHeight="40px"
      letterSpacing="1px"
    />
  ),
  p: (props: PAttr) => (
    <Text
      fontSize={['1rem', '1rem', '1rem', '1.1rem']}
      lineHeight="35px"
      letterSpacing=".8px"
      _notFirst={{
        marginTop: '2rem',
      }}
      {...props}
    />
  ),
  a: StyledColorModeAnchor,
  img: (props: ImgAttr) => {
    const imgSrc = props.src || 'https://via.placeholder.com';
    const isLocalImage = /^\//.test(imgSrc);

    return (
      <Flex mt={10} justifyContent="center" alignSelf="center">
        <ChakraNextImage
          src={imgSrc}
          placeholder="blur"
          blurDataURL={imgSrc}
          width={600}
          height={300}
          w="auto"
          h="auto"
          mx="auto"
          layout="responsive"
          objectFit="contain"
          loader={isLocalImage ? loader : undefined}
          alt={`${props.alt}`}
        />
      </Flex>
    );
  },
};
