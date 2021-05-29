import classes from "./blog.module.css";
import Link from "next/link";

const BlogSummary = ({ blogPost }) => {
  const formattedDate = new Date(blogPost.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
      <div className={classes.summary}>
        <h2>{blogPost.title}</h2>
        <time>{formattedDate}</time>
        <div className={classes.content}>
        <div className={classes.image}>
          <img src={blogPost.imageUrl} alt={`${blogPost.title}`} />
        </div>
          <div className={classes.text}>
            <p>{blogPost.text.length > 200 ? blogPost.text.slice(0, 200) + "..." : blogPost.text}</p>
            <Link href="/"><a className="btn">Full Post</a></Link>
          </div>
        </div>
      </div>
  );
};

export default BlogSummary;
