import { increaseView } from '@db/mutations';

export const View = ({ postId }: { postId: string }) => {
  console.log('View: ', postId);
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);

  if (process.env.NODE_ENV === 'production') {
    increaseView(postId);
  }

  return null;
};
