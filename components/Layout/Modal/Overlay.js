import { useContext } from "react";
import ModalCtx from "../../../store/modalCtx";
import classes from "./modal.module.css";


const Overlay = () => {
  const modalCtx = useContext(ModalCtx);
  return <div className={classes.overlay} onClick={modalCtx.toggleModal}></div>
}

export default Overlay