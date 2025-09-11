import { useEffect, useState } from "react";
import Header from "./components/Header"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";


function App() {

  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    setTimeout(() => { setLoaded(false) }, 3900)
  }, [])

  return (

    <>
      {loaded ? <Loader /> : <div>
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
      </div>}






    </>
  )
}

export default App
