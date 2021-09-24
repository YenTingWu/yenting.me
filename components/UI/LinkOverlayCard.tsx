import React from 'react';
import NextLink from 'next/link';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { LinkOverlay, LinkBox, Box, Heading, Text } from '@chakra-ui/layout';
import { ChakraNextImage } from '@components/UI/ChakraNextImage';
import format from 'date-fns/fp/format';
import { loader } from '@lib/imageLoader';

interface LinkOverlayCardProps {
  image: string;
  title: string;
  description: string;
  publishedAt: Date;
  linkTo: string;
}

export const LinkOverlayCard: React.FC<LinkOverlayCardProps> = ({
  image,
  title,
  description,
  linkTo,
  publishedAt,
}) => {
  const linkBoxShadowColor = useColorModeValue(
    'rgba(0, 0, 0, .1)',
    '#cfcfcfd2'
  );

  return (
    <LinkBox
      w="100%"
      //h="330px"
      maxW="440px"
      borderRadius="4px"
      boxShadow={`1px 1px 10px 1px ${linkBoxShadowColor}`}
      py="6"
      px="5"
      cursor="pointer"
      _notFirst={{
        marginTop: ['2rem', '2rem', '2rem', '2.5rem'],
      }}
    >
      <ChakraNextImage
        width={480}
        height={200}
        objectFit="cover"
        layout="responsive"
        loader={loader}
        placeholder="blur"
        blurDataURL={image}
        src={image}
      />
      <Box pt="1" px="2">
        <Heading
          // lineHeight="110%"
          letterSpacing=".1px"
          as="h4"
          fontSize="1.5rem"
          noOfLines={2}
          my="5px"
          fontWeight="900"
        >
          <NextLink href={linkTo}>
            <LinkOverlay>{title}</LinkOverlay>
          </NextLink>
        </Heading>
        <Text fontSize="12px" color="gray.400" mb="5px">
          {format('MMM d, yyyy', publishedAt)}
        </Text>
        <Text
          fontSize="14px"
          color="gray.500"
          letterSpacing=".1px"
          lineHeight="18px"
          noOfLines={3}
        >
          {description}
        </Text>
      </Box>
    </LinkBox>
  );
};
