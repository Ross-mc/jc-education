import Footer from "./Footer";
import Navigation from "./Navigation";
import { isDesktop } from "react-device-detect";
import { useEffect } from "react";
import Modal from "./Modal/Modal";

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
      <Modal />
      <Footer />
    </div>
  );
};

export default Layout;
