import {useRef} from "react"
import Overlay from "./Overlay";
import classes from "./modal.module.css";
import { useContext } from "react";
import ModalCtx from "../../../store/modalCtx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../../icons";
import { isDesktop } from "react-device-detect";
import { validateEnquiry } from "../../../utils/htmlTemplates/validateEnquiry";

const Modal = () => {
  const emailInputRef = useRef("");
  const firstNameInputRef = useRef("");
  const lastNameInputRef = useRef("");
  const phoneNumberInputRef = useRef("");
  const commentsInputRef = useRef("");

  const mobileScrollableStyle = {
    maxHeight: "calc(100vh - 80px)",
    overflowY: "auto",
  };

  const submitEnquiry = async (e) => {
    e.preventDefault()
    const email = emailInputRef.current.value.trim();
    const firstName = firstNameInputRef.current.value.trim();
    const lastName = lastNameInputRef.current.value.trim();
    const phoneNumber = phoneNumberInputRef.current.value.trim();
    const comments = commentsInputRef.current.value.trim();

    if (!validateEnquiry(email, firstName, lastName, phoneNumber)) {
      //some error notifacation on the front end
      return;
    }

    const response = await fetch("/api/enquire", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerName: `${firstName} ${lastName}`,
        customerEmail: email,
        customerPhone: phoneNumber,
        comments,
        courseTitle: modalCtx.courseTitle,
      }),
    });

    if (response.ok){
      //display success notification
      console.log("Syucces")
    } else {
      //display error notification
      console.log("Fail")
    }
  };

  const modalCtx = useContext(ModalCtx);
  return (
    <>
      <div
        className={classes.modal}
        style={isDesktop ? null : mobileScrollableStyle}
      >
        <div className={classes.icon} onClick={modalCtx.toggleModal}>
          <p style={{ visibility: "hidden" }}>.........</p>
          <FontAwesomeIcon icon={icons.close} />
        </div>
        <form className={classes.modalForm} onSubmit={submitEnquiry}>
          <h3>{modalCtx.courseTitle}</h3>
          <label htmlFor="email">Email</label>
          <input type="email" required name="email" ref={emailInputRef}/>
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" required ref={firstNameInputRef}/>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="last-name" required ref={lastNameInputRef}/>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            pattern="^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$"
            required
            ref={phoneNumberInputRef}
          />
          <label htmlFor="comments">
            Comments - <em>Optional</em>
          </label>
          <textarea name="comments" cols="30" rows="10" ref={commentsInputRef}></textarea>
          <button className="btn" style={{ width: "80%", maxWidth: "150px" }}>
            Submit Enquiry
          </button>
        </form>
      </div>
      <Overlay />
    </>
  );
};

export default Modal;
