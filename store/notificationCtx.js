import {createContext} from "react";

const NotificationCtx = createContext({
  displayNotification: false,
  toggleNotification: () => {},
  notification: {
    text: "",
    success: false
  },
  updateNotification: (text, success) => {}
});

export default NotificationCtx;