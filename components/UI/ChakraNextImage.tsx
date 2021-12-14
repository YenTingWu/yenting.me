import React from 'react';
import { chakra } from '@chakra-ui/system';
import { Flex } from '@chakra-ui/layout';
import NextImage from 'next/image';
import type { FlexProps } from '@chakra-ui/layout';
import type { ImageProps, ImageLoaderProps } from 'next/image';

const ChakraNextUnwrappedImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
    ].includes(prop),
});

const myLoader = (resolverProps: ImageLoaderProps): string => {
  return `${resolverProps.src}?w=${resolverProps.width}&q=${resolverProps.quality}`;
};

type Props = FlexProps &
  ImageProps & {
    width: string | number;
    height: string | number;
  };

export const ChakraNextImage: React.FC<Props> = ({
  src,
  width,
  height,
  alt,
  quality,
  blurDataURL,
  ...rest
}) => {
  delete rest.loader;
  return (
    <Flex
      pos="relative"
      justifyContent="center"
      className="group"
      overflow="hidden"
      {...rest}
    >
      <ChakraNextUnwrappedImage
        w="auto"
        h="auto"
        loader={myLoader}
        width={width}
        quality={quality}
        height={height}
        placeholder="blur"
        objectFit="cover"
        blurDataURL={blurDataURL}
        src={src}
        alt={alt}
        transition="all 0.2s"
      />
    </Flex>
  );
};

export * from 'next/image';
