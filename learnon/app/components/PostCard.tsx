'use client';

import { FC } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { deletePost } from '../lib/posts';
// user from auth
import { user } from '../lib/auth';

interface PostCardProps {
  id: string;
  title: string;
  description: string;
  author: string;
}

const PostCard: FC<PostCardProps> = ({ id, title, description, author }) => {
  const router = useRouter();

  // user from auth


  const handleEdit = () => {
    router.push(`/edit/${id}`);
  };

  const handleDelete = () => {
    if (confirm('Tem certeza que deseja deletar esse post?')) {
      deletePost(id).then(() => {
        router.refresh();
      })
    } else {
      alert('Post não deletado');
    }
  };

  const handleReadMore = () => {
    router.push(`/posts/${id}`);
  };

  return (
    <div className="bg-indigo-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">
          {title}
        </h2>
        {
          user ? (
            <div className="flex space-x-2">
              <button
                onClick={handleEdit}
                className="bg-indigo-600 text-white px-2 py-1 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <FaEdit />
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-700 transition-colors"
              >
                <FaTrashAlt />
              </button>
            </div>
          ) : null
        }
      </div>
      <p className="text-md text-indigo-700">Autor: {author}</p>

      <p className="text-gray-700 mb-4">
        {description}
      </p>

      <button
        onClick={handleReadMore}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Leia mais
      </button>
    </div>
  );
};

export default PostCard;
