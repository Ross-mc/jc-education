import {useEffect, useState} from "react";
import {useRouter} from "next/router"
import BlogSummary from "./Summary";
import FullBlogPost from "./Full";

const BlogContainer = ({ blogPosts }) => {
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const router = useRouter();

  const updateBlogPost = (id) => {
    const blogPost = blogPosts.find(blogPost => blogPost._id === id);
    if (blogPost){
      setSelectedBlogPost(blogPost);
      router.push("/blog");
    }
  };

  const returnToAllPosts = () => {
    setSelectedBlogPost(null)
  }

  


  if (selectedBlogPost){
    return (
      <>
        <FullBlogPost blogPost={selectedBlogPost} />
        <button className="btn" style={{width: 100}} onClick={returnToAllPosts}>Return</button>
      </>
    )
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
