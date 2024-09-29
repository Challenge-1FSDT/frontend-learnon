import { Post } from '../types/Post';

export async function getPosts(): Promise<Post[]> {
  const response = await fetch('http://localhost:3000/posts');
  const posts = await response.json();

  return posts;
}

export async function getPost(id: string): Promise<Post> {
  const res = await fetch(`http://localhost:3000/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function createPost(post: Post): Promise<void> {
  await fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
}

export async function deletePost(id: string): Promise<void> {
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',
  });
}

export async function updatePost(id: string, post: Post): Promise<void> {
  await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
}

