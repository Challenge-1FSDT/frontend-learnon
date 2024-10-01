'use client'; 

import { useEffect, useState } from 'react';
import Navbar from '@/app/components/Navbar';
import FooterPost from '@/app/components/Footer-post';
import { updatePost, getPost } from '@/app/lib/posts';
import { useParams } from 'next/navigation';

export default function EditPostPage() {
  const params = useParams<{ id: string }>();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getPost(params.id as string);
        setTitle(post.title);
        setContent(post.content);
        setId(post.id);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    }

    fetchPost();
  }, [params.id]);

  const handleUpdatePost = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await updatePost(params.id as string, { title, content });
        // window.location.href = "/";
      } else {
        throw new Error("Token not found");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  }

  return (
    <div>
      <Navbar />
      <div className="mx-10 mt-10 p-8 bg-indigo-200 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-indigo-800 mb-6">EDITAR UM POST</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-indigo-800 font-bold mb-2" htmlFor="title">
            Título
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
            className="text-indigo-950 w-full px-4 py-2 border rounded-lg bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-indigo-800 font-bold mb-2" htmlFor="content">
            Conteúdo
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Conteúdo"
            className="text-indigo-950 w-full px-4 py-2 border rounded-lg bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        <button
          onClick={handleUpdatePost}
          className="w-full bg-indigo-800 text-white font-bold py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          ATUALIZAR
        </button>
      </div>
      <FooterPost />
    </div>
  );
}

