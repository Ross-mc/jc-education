import { useState } from "react";
import { useEffect } from "react";
import BlogContainer from "../../components/Blog/Container";
import Loading from "../../components/Loading";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/blog");
      if (response.ok) {
        const blogPostData = await response.json();
        setBlogPosts(blogPostData.blogPosts);
      }
    } catch (error) {

    } finally {
      setLoading(false);
    }
  }, []);

  if (loading){
    return <Loading />
  }

  return (
    <BlogContainer blogPosts={blogPosts} />
  );
};

export default Blog;
