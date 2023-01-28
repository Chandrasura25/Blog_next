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
      </Head>
      <Navbar />
      <Banner />
      <CardBanner />
      <Contact />
      <Footer />
    </>
  )
}
Home.getLayout = function PageLayout(page){
  return <>
  {page}
  </>
}