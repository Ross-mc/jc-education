import { useContext } from "react";
import NotificationCtx from "../../../store/notificationCtx";
import classes from "./notification.module.css";

const Notification = () => {
  const notificationCtx = useContext(NotificationCtx);
  return (
    <div className={notificationCtx.notification.success ? classes.success : classes.failure}>
      <p>{notificationCtx.notification.text}</p>
    </div>
  )
}

export default Notification