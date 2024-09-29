import Navbar from '@/app/components/Navbar';
import { getPost } from '../../lib/posts';
import Footer from '@/app/components/Footer';

// eslint-disable-next-line @next/next/no-async-client-component
export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <div>
      <Navbar />
      <div className='flex flex-col items-center h-auto'>
        <h1 className='text-black p-6 text-4xl font-bold'>{post.title}</h1>
        <p className='text-gray-700 px-16 text-xl text-justify'>{post.content}</p>
      </div>
      <Footer />
    </div>
  );
}
