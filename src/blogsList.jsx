import { Link } from "react-router-dom/cjs/react-router-dom.min";
const BlogsList = ({ blogs, title }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  return (
    <div className="blogs-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
