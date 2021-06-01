import {useRouter} from "next/router"
import FullBlogPost from "../../components/Blog/Full";
import { getHandler } from "../api/blog";

const BlogPost = ({blogPost}) => {
  const router = useRouter();
  if (blogPost){
    return (
      <FullBlogPost blogPost={blogPost}/>
    )
  } else {
    return <h1>No Blogs Post with that title</h1>
  }

};

export default BlogPost

export async function getStaticProps(context) {
  const { slug } = context.params;
  const blogPosts = await getHandler();
  const blogPost = blogPosts.find((blogPost) => blogPost.slug === slug);
  if (blogPost){
    blogPost._id = blogPost._id.toString();
    return {
      props: {
        blogPost
      }
    }
  } else {
    return {
      props: {
        blogPost: null // if there is an error, we must return null
        //as json cannot serialise undefined. the null value gets handled by showing the error
      }, 
      revalidate: 600
    }
  }
 
}

export async function getStaticPaths(){
  const blogPosts = await getHandler();
  const paths = blogPosts.reduce((acc, post) => {
    if (!post.slug){
      return acc
    }
    acc.push("/blog/"+post.slug);
    return acc
  }, [])

  return{
    paths,
    fallback: "blocking"
  }
}
