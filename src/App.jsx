import { useEffect } from "react";
import Header from "./components/Header"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";

import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


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

      </main>


    </>
  )
}

export default App
