import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Posts from "./posts/posts";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Search />
      <Posts />
      <Footer />
    </main>
  );
}
