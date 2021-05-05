import Card from "./Card"
import classes from "./courses.module.css"

const Courses = ({courses}) => {
  return (
    <>
      <h1>COURSES</h1>
      <div className={classes.courseContainer}>
      {courses.map(course => {
        return <Card course={course} key={course.title}/>
      })}
      </div>
    </>
  )
}

export default Courses