import BlogSummary from "./Summary";

const BlogContainer = ({ blogPosts }) => {
  return blogPosts.length > 0 ? (
    blogPosts.map((blogPost) => (
      <BlogSummary blogPost={blogPost} key={blogPost._id} />
    ))
  ) : (
    <h1>No Blog Posts Found</h1>
  );
};

export default BlogContainer;
