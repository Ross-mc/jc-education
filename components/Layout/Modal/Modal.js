import Overlay from "./Overlay";
import classes from "./modal.module.css";

const Modal = () => {
  return (
    <>
    <div className={classes.modal}>
      <h1>Modal</h1>
    </div>
    <Overlay />
    </>
  )
}

export default Modal
