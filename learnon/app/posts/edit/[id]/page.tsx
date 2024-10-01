'use client'; 

import { useEffect, useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
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
        setTimeout(() => {
          window.location.href = "/";
        }
        , 1000);
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
      <h2 className="text-2xl font-bold text-indigo-800 m-6">Editar post</h2>
      <div className="mx-10 mt-10 p-8 bg-[#5340C6] bg-opacity-20 rounded-lg shadow-lg flex flex-col justify-center items-end">

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="mb-4 w-full">
          <label className="block text-indigo-800 font-bold mb-2" htmlFor="title">
            Título
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
            className="text-indigo-950 w-full px-4 py-2 border rounded-lg bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6 w-full">
          <label className="block text-indigo-800 font-bold mb-2" htmlFor="content">
            Conteúdo
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Conteúdo"
            className="text-indigo-950 w-full px-4 py-2 border rounded-lg bg-[#F0F0F0] h-[400px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        <button
          onClick={handleUpdatePost}
          className="w-[200px] bg-[#5340C6] text-white font-bold py-2 rounded-2xl hover:bg-indigo-700 transition-colors"
        >
          Publicar atualização
        </button>
      </div>
      <Footer />
    </div>
  );
}

