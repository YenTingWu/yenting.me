import { ImageLoaderProps } from '@components/UI/ChakraNextImage';

export const loader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality}`;
};
