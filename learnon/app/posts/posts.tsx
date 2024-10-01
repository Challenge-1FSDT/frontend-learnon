import Search from "../components/Search";
import { getPosts } from "../lib/posts";

export default async function Posts() {
  const allPosts = await getPosts();

  return (
      <div>
       <h1 className='text-indigo-950 text-2xl p-4 font-bold'>Posts</h1>
       <Search posts={allPosts} />
      </div>
  );
}