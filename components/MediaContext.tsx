import { createContext } from 'react';
import { useSafeMediaQuery } from '@hooks/useSafeMediaQuery';

export type MediaObject = {
  isLargerThan500: boolean;
  isLargerThan900: boolean;
};

export const MediaContext = createContext<MediaObject | null>(null);

export const MediaContextProvider: React.FC = ({ children }) => {
  const mediaValue = useSafeMediaQuery([
    '(min-width: 500px)',
    '(min-width: 900px)',
  ]);

  if (mediaValue == null) {
    return (
      <MediaContext.Provider value={null}>{children}</MediaContext.Provider>
    );
  }

  const [isLargerThan500, isLargerThan900] = mediaValue;

  const mediaObj = {
    isLargerThan500,
    isLargerThan900,
  };

  return (
    <MediaContext.Provider value={mediaObj}>{children}</MediaContext.Provider>
  );
};
