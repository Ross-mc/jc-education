import classes from "./courses.module.css"

const Card = ({course}) =>{
   return (
     <div className={classes.card}>
       <h2>{course.title}</h2>
       <h3>{course.price}</h3>
       <p>{course.brief}</p>
       <a href={course.details} target="_blank" rel="noreferrer" className="btn">More Details</a>
     </div>
   )
}

export default Card

// {
//   title: "CND™ Shellac™ Conversion",
//   brief: "CND™ Shellac™ Conversion class is designed for existing nail professionals to discover and learn the complete CND™ Shellac™ system from application to removal.  This class is product focused on ensuring the correct use of the CND™ Shellac™ systems.",
//   price: "£95.00 + VAT /€114.00",
//   details: "https://my.sweetsquared.com/education/course/87"
// }