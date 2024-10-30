import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Services/>
    <Portfolio/>
    <Skills />
{/*     <Contact/> */}
    <Footer/>
    </>
  );
}
