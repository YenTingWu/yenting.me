import { chakra } from '@chakra-ui/system';
import NextImage from 'next/image';

export const ChakraNextImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader',
      'onClick',
      'loading',
    ].includes(prop),
});

export * from 'next/image';
