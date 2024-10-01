import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Posts from "./posts/posts";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Posts />
      <Footer />
    </main>
  );
}
