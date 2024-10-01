'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import FooterPost from '../../components/Footer-post';
import { createPost } from '../../lib/posts';
import { extractUserName } from '../../lib/user';

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
    <div className="mx-10 mt-10 p-8 bg-indigo-200 rounded-lg shadow-lg">
      
      <h2 className="text-center text-2xl font-bold text-indigo-800 mb-6">CRIAR UM POST</h2>

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
        onClick={handleCreatePost}
        className="w-full bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Criar
      </button>
    </div>
    <FooterPost />
    </div>
  );
}
