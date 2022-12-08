import '../styles/globals.css';
import 'font-awesome/css/font-awesome.css'
import Head from 'next/head';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
