import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs />
        <Bookmarks />
      </main>
    </div>
  );
};

export default App;
