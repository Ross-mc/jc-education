import Courses from "../components/Courses";
import Landing from "../components/Landing/Landing";
import data from "../utils/data"

const Home = (props) => {
  return (
    <>
      <Landing titleCard={props.titleCard} blurb={props.blurb}/>
      <Courses courses={props.courses}/>
    </>
  )
}

export default Home

export function getStaticProps(){

  return {
    props: {
      titleCard: data.titleCard,
      blurb: data.blurb,
      courses: data.courses
    }
  }
}