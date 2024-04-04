import PropTypes from "prop-types";
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog }) => {
  const { title, cover, author, author_img, reading_time, date, hashtags } =
    blog;
  return (
    <div className="mb-12">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div className="ml-4">
            <h3 className="text-2xl">{author}</h3>
            <p>{date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button className="ml-2 text-red-500 text-2xl">
            <IoBookmarksOutline />
          </button>
        </div>
      </div>
      <h2 className="text-3xl my-2">{title}</h2>
      <p>
        {hashtags.map((hashtag, index) => (
          <span key={index}>
            <a href="">#{hashtag}</a>{" "}
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
