import Overlay from "./Overlay";
import classes from "./modal.module.css";
import { useContext } from "react";
import ModalCtx from "../../../store/modalCtx";

const Modal = () => {

  const modalCtx = useContext(ModalCtx);
  return (
    <>
    <div className={classes.modal}>
      <h1>{modalCtx.courseTitle}</h1>
    </div>
    <Overlay />
    </>
  )
}

export default Modal
