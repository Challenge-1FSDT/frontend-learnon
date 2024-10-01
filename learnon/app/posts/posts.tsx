import Search from "../components/Search";

const data = await fetch('http://localhost:3000/posts')
const posts = await data.json()
const allPosts = posts.data;

export default function Posts() {
  return (
      <div>
       <h1 className='text-indigo-950 text-2xl p-4 font-bold'>Posts</h1>
       <Search posts={allPosts} />
      </div>
  );
}