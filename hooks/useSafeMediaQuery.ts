import { useState, useEffect } from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';

export const useSafeMediaQuery = (query: string[]) => {
  const [mounted, setMounted] = useState(false);
  const value = useMediaQuery(query);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? value : null;
};
