import Navbar from '@/app/components/Navbar';
import { getPost } from '../../lib/posts';
import FooterPost from '@/app/components/Footer-post';

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  
  const date = new Date(post.createdAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });


  return (
    <div>
      <Navbar />
      <div className='mx-auto p-16'>
        <div className='flex flex-col h-auto'>
          <h1 className='text-black text-4xl font-bold'>{post.title}</h1>
          <div className='flex flex-col h-auto mt-4'>
            <p className='text-gray-700 font-semibold'>Author: {post.author}</p>
          </div>
          <div className='flex flex-col h-auto'>
            <p className='text-gray-700 font-semibold'>Publicado em: {date}</p>
          </div>
          <p className='text-gray-700 mt-4 text-justify'>{post.content}</p>
        </div>
      </div>
      <FooterPost />
    </div>
  );
}
