import { increaseView } from '@db/mutations';

export const View = ({
  slug,
  publishedAt,
}: {
  slug: string;
  publishedAt: string;
}) => {
  if (process.env.NODE_ENV === 'production') {
    increaseView(`${slug}_${publishedAt}`);
  }

  return null;
};
