import classes from "./admin.module.css";

const BlogForm = ({user, contentRef, titleRef, storeImage, submitHandler}) => {
  return (
    <section>
      <h1>Hello {user}!</h1>
      <form onSubmit={submitHandler} className={classes.blogForm}>
        <h3>Enter a new blog post</h3>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" ref={titleRef} required className={classes.blogTitle}/>
        <label htmlFor="content">Content</label>
        <textarea name="content" cols="30" rows="10" ref={contentRef} required></textarea>
        <label htmlFor="image">Image Upload</label>
        <input type="file" name="image"  onChange={storeImage}/>
        <button type="submit" className="btn">Send Blog Post</button>
      </form>
    </section>
  )
}

export default BlogForm