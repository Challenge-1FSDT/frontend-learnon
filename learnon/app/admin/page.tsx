import { Post } from '../types/Post';
import { getPosts, deletePost } from '../lib/posts';
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  // const router = useRouter();

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  async function handleDeletePost(id: string) {
    await deletePost(id);
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div>
      <h1>Admin</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/admin/posts/${post.id}`}>
              {post.title}
            </Link>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}