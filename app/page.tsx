
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Services/>
    <Portfolio/>
    <Skills />
    <Contact/>
    <Footer/>
    </>
  );
}
