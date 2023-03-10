import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import CardBanner from '../components/CardBanner';
import Contact from '../components/Contact';
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>BlogOn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Banner />
      <CardBanner />
      <Contact />
      <Footer />
    </>
  )
}