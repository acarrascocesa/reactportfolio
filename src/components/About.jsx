import React from 'react'
import './style/About.css'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-desc'>
                <h3>Te cuento sobre mi...</h3>
                <p>Mi nombre es Angel Carrasco, soy de Republica Dominicana. Soy un apasionado de la programacion. He estudiado varias tecnologias en Udemy y ED Team como Python, Javascript, HTML y CSS.
                    Actualmente soy estudiante del Bootcamp "Fullstack Developer" de Academlo donde he aprendido HTML, CSS, JAVASCRIPT y REACT.
                    Me interesa seguir ampliando mis conocimientos en el area de la programacion y aplicar lo que ya he aprendido en una empresa que me de la oportunidad!! 
                </p>
            </div>
            <div className='about-img'>
                <img  src="./src/assets/me.png" alt="" />
            </div>

        </div>
    )
}

export default About
