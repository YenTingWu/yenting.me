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
  PreAttr,
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
import type { HeadingProps } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { chakra } from '@chakra-ui/system';
import { ChakraNextImage } from '@components/UI/ChakraNextImage';
import { loader } from '@lib/imageLoader';
import { CodeBlock } from './CodeBlock';

const StyledAnchor = (props: AAttr) => {
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

const StyledBlockQuote = (props: BlockquoteAttr) => {
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

const StyledHeading = (props: Omit<HeadingProps, 'fontFamily'>) => (
  <Heading fontFamily="Cutive Mono, monospace" {...props} />
);

const StyledPre = (props: PreAttr) => (
  <chakra.pre {...props} overflow="scroll" maxW="calc(100vw - 40px)" />
);

export const mdxComponents = {
  h1: (props: HeadingAttr) => (
    <StyledHeading
      as="h1"
      fontSize="3rem"
      mt="3rem"
      mb="2rem"
      textShadow=".5px -.5px #171923"
      fontWeight="900"
      {...props}
    />
  ),
  h2: (props: HeadingAttr) => (
    <StyledHeading
      as="h2"
      fontSize="2.75rem"
      mt="3rem"
      mb="2rem"
      fontWeight="800"
      {...props}
    />
  ),
  h3: (props: HeadingAttr) => (
    <StyledHeading
      as="h3"
      fontSize="2.5rem"
      mt="3rem"
      mb="2rem"
      fontWeight="700"
      {...props}
    />
  ),
  h4: (props: HeadingAttr) => (
    <StyledHeading
      as="h4"
      fontSize="2.25rem"
      mt="3rem"
      mb="2rem"
      fontWeight="700"
      {...props}
    />
  ),
  h5: (props: HeadingAttr) => (
    <StyledHeading
      as="h5"
      fontSize="2rem"
      mt="3rem"
      mb="2rem"
      fontWeight="700"
      {...props}
    />
  ),
  h6: (props: HeadingAttr) => (
    <StyledHeading
      as="h6"
      fontSize="1.5rem"
      mt="3rem"
      mb="1.5rem"
      fontWeight="700"
      {...props}
    />
  ),
  strong: (props: CommonAttr) => (
    <chakra.strong {...props} textShadow=".8px 0px #2D3748" />
  ),
  hr: (props: HrAttr) => <Divider {...props} my="5rem" w="90%" mx="auto" />,
  code: CodeBlock,
  pre: StyledPre,
  blockquote: StyledBlockQuote,
  ul: (props: UlAttr) => <UnorderedList {...props} my="2rem" />,
  ol: (props: OlAttr) => <OrderedList {...props} my="2rem" />,
  li: (props: LiAttr) => (
    <ListItem
      {...props}
      ml="1rem"
      pl=".5rem"
      mb=".5rem"
      fontSize={['.9rem', '.9rem', '.9rem', '1rem']}
      lineHeight="40px"
      letterSpacing="1px"
    />
  ),
  p: (props: PAttr) => (
    <Text
      fontSize={['1rem', '1rem', '1rem', '1.1rem']}
      lineHeight="40px"
      letterSpacing=".8px"
      _notFirst={{
        marginTop: '1rem',
      }}
      {...props}
    />
  ),
  a: StyledAnchor,
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
