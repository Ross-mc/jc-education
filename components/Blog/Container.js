import BlogSummary from "./Summary";
import {useState} from "react";

const BlogContainer = ({ blogPosts }) => {
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);

  const updateBlogPost = (id) => {
    const blogPost = blogPosts.find(blogPost => blogPost._id === id);
    if (blogPost){
      setSelectedBlogPost(blogPost);
      console.log(blogPost)
    }
  }


  return blogPosts.length > 0 ? (
    blogPosts.map((blogPost) => (
      <BlogSummary blogPost={blogPost} key={blogPost._id} updateBlogPost={updateBlogPost}/>
    ))
  ) : (
    <h1>No Blog Posts Found</h1>
  );
};

export default BlogContainer;
