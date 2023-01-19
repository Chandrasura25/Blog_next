import '../styles/globals.css';
import 'font-awesome/css/font-awesome.css'
import Head from 'next/head';
import "bootstrap/dist/css/bootstrap.css";
import '@mui/material'
// import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
