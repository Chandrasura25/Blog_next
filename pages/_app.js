import '../styles/globals.css';
import 'font-awesome/css/font-awesome.css'
import Head from 'next/head';
import axios from 'axios'
import { SWRConfig } from 'swr'
import '@mui/material'
function MyApp({ Component, pageProps }) {
  const fetcher = (url) => axios.get(url).then((response) => response.data)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
export default MyApp
