import Courses from "../Courses";
import Hero from "./Hero"

const Brand = (props) => {
  const {name, blurb, courses, image} = props.brand;

  return (
    <div style={{width: "95%", margin: "0 auto", maxWidth: "1400px"}}>
      <h1>{name}</h1>
      {blurb.map((para, index) => <p key={index}>{para}</p>)}
      <Hero image={image}/>
      <Courses courses={courses} />
    </div>
  )
}

export default Brand