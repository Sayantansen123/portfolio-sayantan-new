import { useEffect } from "react";
import Header from "./components/Header"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";

import Portfolio from "./components/Portfolio";


function App() {
 
  return (


    <>
    
      <Header/>
      <main >
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Portfolio/>
        
      </main>

      
    </>
  )
}

export default App
