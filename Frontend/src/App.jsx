import Header from "./Components/Header"
import Section from "./Components/Section"
import About from "./Components/About"
import Gallery from "./Components/ Gallery"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className=" overflow-hidden">
      <Header/>
      <Section/>
      <About/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
