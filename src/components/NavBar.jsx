import React from 'react'
import './style/NavBar.css'

const NavBar = ({scroll}) => {

  // Funcion para subir arriba al hacer click en navbar logo
  const toTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }
  return (
    <nav className={`navbar ${scroll > 20 ? "scrolling" : null}`}>
      <div className='navbar-logo' onClick={toTop}>Angel Carrasco</div>
    </nav>
  )
}

export default NavBar
