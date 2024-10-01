import { Post, PostForm } from '../types/Post';

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

export async function createPost(title: string, content: string, author: string, publish: boolean): Promise<void> {
  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ title, content, author, publish }),
  });
}



export async function deletePost(id: string): Promise<void> {
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
}

export async function updatePost(id: string, post: PostForm): Promise<void> {
  await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(post),
  });
}

export async function searchPosts(query: string): Promise<Post[]> {
  const res = await fetch(`http://localhost:3000/posts/search?query=${query}`);
  const { data } = await res.json();

  return data;
}
