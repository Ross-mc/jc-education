import Footer from "./Footer";
import Navigation from "./Navigation";
import { isDesktop } from "react-device-detect";
import { useContext, useEffect } from "react";
import Modal from "./Modal/Modal";
import ModalCtx from "../../store/modalCtx";
import Notification from "./Notification";
import NotificationCtx from "../../store/notificationCtx";

const Layout = ({ children }) => {
  const minHeight = isDesktop ? "75" : "73";

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  });

  const modalCtx = useContext(ModalCtx);
  const notificationCtx = useContext(NotificationCtx)

  return (
    <div className="wrapper">
      <Navigation />
      <main
        style={{
          minHeight: "75vh",
          marginTop: "15vh",
          minHeight: `calc(var(--vh, 1vh) * ${minHeight})`,
        }}
      >
        {children}
      </main>
      {modalCtx.displayModal && <Modal />}
      {notificationCtx.displayNotification && <Notification />}
      <Footer />
    </div>
  );
};

export default Layout;
