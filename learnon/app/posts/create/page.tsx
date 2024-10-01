'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
import { createPost } from '../../lib/posts';
import { extractUserName } from '../../lib/user';
import Link from 'next/link';

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleCreatePost = async () => {
    try {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      if (token) {
        const author = extractUserName(token);
        console.log(author);
      } else {
        throw new Error("Token not found");
      }

      console.log(user);
      
      const author = "Anelise Estevam";
      const publish = true;

      await createPost(title, content, author, publish);
      window.location.href = "/";
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div>
    <Navbar />
    <h2 className="text-2xl font-bold text-indigo-800 m-6">Criar post</h2>
      <div className="mx-10 mt-10 p-8 bg-[#5340C6] bg-opacity-20 rounded-lg shadow-lg flex flex-col justify-center items-end">

        {error && (
          <Link href={'/auth/login'}>
            <p className="text-red-500 text-center mb-4">Usuário não autenticado, clique para fazer login login</p>
          </Link>
        )}

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
          onClick={handleCreatePost}
          className="w-[200px] bg-[#5340C6] text-white font-bold py-2 rounded-2xl hover:bg-indigo-700 transition-colors"
        >
          Publicar
        </button>
      </div>
    
    <Footer />
    </div>
  );
}
