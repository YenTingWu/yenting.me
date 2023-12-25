import { increaseView } from '@db/mutations';

export const View = ({ postId }: { postId: string }) => {
  if (process.env.NODE_ENV === 'production') {
    increaseView(postId);
  }

  return null;
};
