import { useContext } from "react"
import ModalCtx from "../../store/modalCtx"
import classes from "./courses.module.css"

const Card = ({course}) =>{

  const modalCtx = useContext(ModalCtx);

  const enquireHandler = () => {
    modalCtx.toggleModal();
    modalCtx.courseTitle = course.title;
  }

   return (
     <div className={classes.card}>
       <h2>{course.title}</h2>
       <h3>{course.price}</h3>
       <p>{course.brief}</p>
       <a href={course.details} target="_blank" rel="noreferrer" className="btn">More Details</a>
       <button className="btn" onClick={enquireHandler}>Enquire</button>
     </div>
   )
}

export default Card