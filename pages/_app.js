import '../styles/globals.css';
import 'font-awesome/css/font-awesome.css'
import Head from 'next/head';
import axios from 'axios'
import { SWRConfig } from 'swr'
import NProgress from 'nprogress';
import '@mui/material'
import Router from 'next/router'
function MyApp({ Component, pageProps }) {
  NProgress.configure({showSpinner:false})
  Router.events.on('routeChangeStart',()=>{
    NProgress.start()
  })
  Router.events.on('routeChangeComplete',()=>{
    NProgress.done()
  })
  const fetcher = (url) => axios.get(url).then((response) => response.data)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
export default MyApp
