import { useState, useEffect } from 'react'
import './App.css'
import About from './components/About'
import Cover from './components/Cover'
import Footer from './components/Footer'
import Info from './components/Info'
import NavBar from './components/NavBar'
import Slider from './components/Slider'

function App() {
  // Para guardar posicion del scroll
  const [scroll, setScroll] = useState(0)

  // Funcion para controlar scroll
  const handleScroll = () => {
    const position = window.pageYOffset
    setScroll(position)
  }

  // Para que se actualize cada vez que hagamos scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scroll])

  return (
    <div className="App">
      <NavBar scroll={scroll}/>
      <Cover />
      <About />
      <Slider />
      <Info />

      <Footer />

    </div>
  )
}

export default App
