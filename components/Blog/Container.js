import {useRouter} from "next/router";
import BlogSummary from "./Summary";
import FullBlogPost from "./Full";

const BlogContainer = ({ blogPosts }) => {
  const router = useRouter();

  const updateBlogPost = (id) => {
    const blogPost = blogPosts.find(blogPost => blogPost._id === id);
    if (blogPost){
      router.push("/blog/" + blogPost.slug);
    }
  };

  return blogPosts.length > 0 ? (
    blogPosts.map((blogPost) => (
      <BlogSummary blogPost={blogPost} key={blogPost._id} updateBlogPost={updateBlogPost}/>
    ))
  ) : (
    <h1>No Blog Posts Found</h1>
  );
};

export default BlogContainer;
