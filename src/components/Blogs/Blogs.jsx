import { useState } from "react";
import { useEffect } from "react";

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

  return <div></div>;
};

export default Blogs;
