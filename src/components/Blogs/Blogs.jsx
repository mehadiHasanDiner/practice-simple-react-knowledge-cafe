import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="md:w-2/3">
      <h2 className="text-2xl"> Blogs: {blogs.length}</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
