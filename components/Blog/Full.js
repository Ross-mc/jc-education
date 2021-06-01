import classes from "./full.module.css";
import {formatText, formatTitle} from "../../utils/textFormat";


const FullBlogPost = ({blogPost}) => {
  const formattedDate = new Date(blogPost.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const textArray = formatText(blogPost.text);
  
  return (
    <div className={classes.full}>
      <h2>{formatTitle(blogPost.title)}</h2>
      <time>{formattedDate}</time>
      <div className={classes.content}>
        <div className={classes.image}>
          <img src={blogPost.imageUrl} alt={`${blogPost.title}`} />
        </div>
        <div className={classes.text}>
          {textArray.map((para, index) => <p key={index}>{para}</p>)}
        </div>
      </div>
    </div>
  );
}

export default FullBlogPost