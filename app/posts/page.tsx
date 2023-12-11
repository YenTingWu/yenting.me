import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'My posts list',
};

export default function Posts() {
  return <div className="w-screen flex justify-center items-center">Posts</div>;
}
