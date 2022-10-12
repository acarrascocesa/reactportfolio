import React from 'react'
import './style/Slider.css'


const slidesInfo = [
    {
        src: "./src/assets/projects/card.png",
        alt: "Card",
        desc: "User Card",
        href: "https://acprofilecard.netlify.app/"
    },
    {
        src: "./src/assets/projects/quotes.png",
        alt: "Quotes",
        desc: "Quotes App",
        href: "https://acquotes.netlify.app/"
    },
    {
        src: "./src/assets/projects/weatherapp.png",
        alt: "Weather App",
        desc: "Weather App",
        href: "https://acweatherapp.netlify.app/"
    },
    {
        src: "./src/assets/projects/rickandmorty.png",
        alt: "RicksndMorty",
        desc: "Rick and Morty App",
        href: "https://ricknmortyappac.netlify.app"
    },
    {
        src: "./src/assets/projects/form.png",
        alt: "Form",
        desc: "Form",
        href: "https://petshopac.netlify.app"
    },
    {
        src: "./src/assets/projects/crudapp.png",
        alt: "CRUD App",
        desc: "CRUD APP",
        href: "https://accrudapp.netlify.app"
    }

]

const slides = slidesInfo.map(slide => (
    <div className='slide-container'>
        <a target="_blank" href={slide.href}><img src={slide.src} alt={slide.alt} /></a>
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides;
