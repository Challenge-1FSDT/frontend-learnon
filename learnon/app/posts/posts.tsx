import PostCard from "../components/PostCard";
import { Post } from "../types/Post";

const data = await fetch('http://localhost:3000/posts')
const posts = await data.json()

export default function Posts() {
  return (
      <div>
       <h1 className='text-indigo-950 text-2xl p-4 font-bold'>Posts</h1>
       <ul className='px-4 text-indigo-900'>
         {posts.data.map((post: Post) => (
           <li key={post.id} className='p-2'>
             <PostCard id={post.id} title={post.title} description={post.content} author={post.author} />
           </li>
         ))}
       </ul>
      </div>
  );
}