import Overlay from "./Overlay";
import classes from "./modal.module.css";
import { useContext } from "react";
import ModalCtx from "../../../store/modalCtx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../../icons";
import { isMobile } from "react-device-detect";

const Modal = () => {

  const mobileScrollableStyle = {
    maxHeight: "calc(100vh - 80px)",
    overflowY: "auto"
  }

  const modal = classes.modal;
  console.log(modal)



  const modalCtx = useContext(ModalCtx);
  return (
    <>
    <div className={classes.modal} style={isMobile ? mobileScrollableStyle: null}>
      <div className={classes.icon} onClick={modalCtx.toggleModal}>
      <p style={{visibility: "hidden"}}>.........</p><FontAwesomeIcon icon={icons.close}/></div>
      <form className={classes.modalForm}>
        <h3>{modalCtx.courseTitle}</h3>
        <label htmlFor="email">Email</label>
        <input type="email" required name="email"/>
        <label htmlFor="first-name">First Name</label>
        <input type="text" name="first-name" required />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" required />
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name="phone" pattern="^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$" />
        <label htmlFor="comments">Comments - <em>Optional</em></label>
        <textarea name="comments" cols="30" rows="10"></textarea>
        <button className="btn" style={{width: "80%", maxWidth: "150px"}}>Submit Enquiry</button>
      </form>
    </div>
    <Overlay />
    </>
  )
}

export default Modal
