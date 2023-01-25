import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import CardBanner from '../components/CardBanner';
import Contact from '../components/Contact';

export default function Home() { 
  return (
    <>
    <Navbar/>
    <Banner/>
    <CardBanner/>
    <Contact/>
    <Footer/> 
    </>
  )
}