import Head from "next/head"
import { useState } from "react"
import Layout from "../components/Layout/Layout"
import ModalCtx from "../store/modalCtx"
import '../styles/globals.css'
// import {Provider} from "next-auth/client"

function MyApp({ Component, pageProps }) {

  const [displayModal, setDisplayModal] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");

  const toggleModal = () => {
    setDisplayModal(!displayModal)
  }

  const updateTitle = (title) => {
    setCourseTitle(title)
  }

  return (
    // <Provider session={pageProps.session}>
    <ModalCtx.Provider value={{displayModal, toggleModal, courseTitle, updateTitle}}>
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charSet="UTF-8"/>
        <meta http-httpequiv="X-UA-Compatible" content="IE=Edge"/>
        <link rel="ico" href="/favicon.ico"/>
        <title>Jacki Clarke</title>
        <meta name="description" content="Jacki Clarke - CND Education Ambassador"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
    </ModalCtx.Provider>
    // {/* </Provider> */}
  
  )
}

export default MyApp
