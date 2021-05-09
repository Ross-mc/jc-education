import Head from "next/head"
import Layout from "../components/Layout/Layout"
import '../styles/globals.css'
import {Provider} from "next-auth/client"

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charSet="UTF-8"/>
        <meta http-httpequiv="X-UA-Compatible" content="IE=Edge"/>
        <meta ty/>
        <link rel="ico" href="/favicon.ico"/>
        <title>Jacki Clarke</title>
        <meta name="description" content="Jacki Clarke - CND Education Ambassador"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  
  )
}

export default MyApp
