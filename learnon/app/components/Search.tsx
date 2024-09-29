'use client';

import { useState } from "react";
import { Post } from "../types/Post";

// search by title or content
export default function Search() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const searchPosts = async () => {
    setLoading(true);
    const res = await fetch(`/api/posts/search?search=${search}`);
    const { data } = await res.json();
    setResults(data);
    setLoading(false);
  };

  return (
    <div>
      <div className='flex flex-col items-center h-auto mx-4'>
        <h1 className='text-black p-6 text-4xl font-bold'>Pesquisar um post</h1>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Título ou conteúdo do post'
          className='p-2 border border-gray-300 rounded w-full'
        />
        <button
          onClick={searchPosts}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
        >
          Buscar
        </button>
        {loading && <p>Loading...</p>}
        <div className='flex flex-col items-center'>
          {results.map((post) => (
            <div key={post.id} className='border border-gray-300 rounded p-4 m-2'>
              <h2 className='text-xl font-bold'>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}