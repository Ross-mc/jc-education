import {createContext} from "react";

const ModalCtx = createContext({
  displayModal: false,
  toggleModal: () => {},
  courseTitle: "",
  updateTitle: () => {}
});

export default ModalCtx;