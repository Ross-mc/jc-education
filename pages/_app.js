import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import ModalCtx from "../store/modalCtx";
import NotificationCtx from "../store/notificationCtx";
import "../styles/globals.css";
// import {Provider} from "next-auth/client"

function MyApp({ Component, pageProps }) {
  const [displayModal, setDisplayModal] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  const updateTitle = (title) => {
    setCourseTitle(title);
  };

  const [displayNotification, setDisplayNotification] = useState(null);
  const [notification, setNotification] = useState({
    text: "",
    success: false
  });

  const toggleNotification = () => {
    setDisplayNotification(true);
    setTimeout(() => {
      setDisplayNotification(false)
    }, 3000)
  };

  const updateNotification = (text, success) => {
    setNotification({
      text,
      success
    });
  };

  return (
    <ModalCtx.Provider
      value={{ displayModal, toggleModal, courseTitle, updateTitle }}
    >
      <NotificationCtx.Provider
        value={{
          displayNotification,
          toggleNotification,
          updateNotification,
          notification,
        }}
      >
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta charSet="UTF-8" />
            <meta http-httpequiv="X-UA-Compatible" content="IE=Edge" />
            <link rel="ico" href="/favicon.ico" />
            <title>JC Education</title>
            <meta
              name="description"
              content=" - Nail & Beauty Training Courses by Jacki Clarke"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </NotificationCtx.Provider>
    </ModalCtx.Provider>
  );
}

export default MyApp;
