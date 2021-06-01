import classes from "./blog.module.css";
import {formatTitle, formatText} from "../../utils/textFormat";

const BlogSummary = ({ blogPost, updateBlogPost }) => {
  const formattedDate = new Date(blogPost.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className={classes.summary}>
      <h2>{formatTitle(blogPost.title)}</h2>
      <time>{formattedDate}</time>
      <div className={classes.content}>
        <div className={classes.image}>
          <img src={blogPost.imageUrl} alt={`${blogPost.title}`} />
        </div>
        <div className={classes.text}>
          <p>
            {blogPost.text.length > 200
              ? blogPost.text.slice(0, 200) + "..."
              : blogPost.text}
          </p>
          <button className="btn" onClick={() => updateBlogPost(blogPost._id)}>
            Full Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSummary;
