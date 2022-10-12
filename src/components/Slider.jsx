import { motion } from 'framer-motion'
import React from 'react'
import images from './images'
import './style/Slide.css'



const Slider = () => {
    return (
        <motion.div className='slider-container'>
            <h1 className='slider-title'>Mis Proyectos</h1>
            <motion.div className='slider' drag="x" dragConstraints={{right: 0, left: -1500}}>
                {images.map(image => (
                    <motion.div className='item'>
                        <img src={image}  />
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    )
}

export default Slider
