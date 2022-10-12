import React from 'react'
import './style/Footer.css'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Angel Carrasco</h1>
                <p>Republica Dominicana</p>
            </div>

            <div className='footer-contact'>
                <h3>Contactame</h3>
                <p>Vamos a trabajar!!</p>
            </div>

            <div className='footer-social'>
                <div className='design-by'>
                    Diseñado Por Angel Carrasco con REACT
                </div>
                <div className='social-links'>
                    <a href="https://www.linkedin.com/in/angel-carrasco24" target="_blank" >
                    <i className="linkedin fa-brands fa-linkedin"></i>
                    </a>

                    <a href="https://github.com/acarrascocesa" target="_blank" >
                    <i className="github fa-brands fa-github"></i>
                    </a>

                    <a href="https://www.instagram.com/josecesa25/" target="_blank" >
                    <i className="instagram fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>



        </footer>
    )
}

export default Footer
