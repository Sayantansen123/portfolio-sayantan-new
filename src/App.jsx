import { useEffect } from "react";
import Header from "./components/Header"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  return (

    <>

      <Header />
      <main >
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />

      </main>


    </>
  )
}

export default App
