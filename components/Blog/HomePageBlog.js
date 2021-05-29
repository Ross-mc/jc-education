import BlogSummary from "./Summary"

const HomePageBlog = ({blogPost}) => {
  return (
    <div>
      <h1>Latest Blog Post</h1>
      <BlogSummary blogPost={blogPost}/>
    </div>
  )
}

export default HomePageBlog