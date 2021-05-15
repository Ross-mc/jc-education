import { useContext } from "react"
import ModalCtx from "../../store/modalCtx"
import classes from "./courses.module.css"

const Card = ({course}) =>{

  const modalCtx = useContext(ModalCtx);

  const enquireHandler = () => {
    modalCtx.toggleModal();
    modalCtx.updateTitle(course.title)
  }

   return (
     <div className={classes.card}>
       <h2>{course.title}</h2>
       <h3>{course.price}</h3>
       <p>{course.brief}</p>
       <a href={course.details} target="_blank" rel="noreferrer" className="btn">More Details</a>
       <div>
       <button className="btn" style={{margin: "1rem auto", fontFamily: "var(--font-dosis)", fontSize: "16px", width: "35%", padding: ".5rem"}} onClick={enquireHandler}>Enquire</button>
       </div>
     </div>
   )
}

export default Card