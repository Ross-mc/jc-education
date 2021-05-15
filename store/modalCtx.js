import {createContext} from "react";

const ModalCtx = createContext({
  displayModal: false,
  toggleModal: () => {},
  courseTitle: ""
});

export default ModalCtx;