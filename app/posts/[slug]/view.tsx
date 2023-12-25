import { increasePostView } from '@db/mutations';

export const View = ({
  slug,
  publishedAt,
}: {
  slug: string;
  publishedAt: string;
}) => {
  increasePostView(`${slug}_${publishedAt}`);

  return null;
};
