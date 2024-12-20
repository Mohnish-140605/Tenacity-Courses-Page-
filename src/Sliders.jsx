import React from 'react'
import { useState } from 'react'
import './App.css'

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      {
        image: "https://imgs.search.brave.com/gW-RPEwgA_eZIU09jQLEyuebbt9JJeXtvtPWSfh0EYU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ibG9ja2NoYWlu/LWRldmVsb3Blci13/cml0aW5nLWNvZGVf/MTE2ODYxMi0zMjA3/MjAuanBnP3NlbXQ9/YWlzX2h5YnJpZA",
        text: "Blockchain Developer"
      },
      {
        image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png",
        text: "Full Stack Developer"
      },
      {
        image: "https://imgs.search.brave.com/Xj8XaXO35ixqeCnHgzfs3I-z7z7ijvfW126WDYSIz2o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzJy/MjZ5L3N0eWxlcy9j/b21tdW5pdHlJY29u/X21vOWRkaHdrZm53/YzEucG5n",
        text: "Android app Developer"
      },
      {
        image: "https://imgs.search.brave.com/DZCiaNafelqaP0pIn69S6AZ_MQebPh3YMiA9IfUhthw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTYw/NzMwNjM2NC9waG90/by9pdC1lbmdpbmVl/ci13b3JraW5nLW9u/LWNvbXB1dGVyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0x/R1g1VTVSdmhXdXBG/SlZfRk42Y0J4OWFI/RlJFeEozaVdUSl9F/dXdWcnRrPQ",
        text: "AI Engineer"
      },
      {
        image: "https://imgs.search.brave.com/AsPlEDMMesbFj8Rol6CFSsB20pdx1SzZ8u_ZrHyO0NE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ3/NDU2MzI5L3Bob3Rv/L2l0LWVuZ2luZWVy/LWluLWFjdGlvbi1j/b25maWd1cmluZy1z/ZXJ2ZXJzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1rXzRO/M0lMdEo2X3ppMExv/Ynp1dHdmSlNaT1Zt/RkROV3VhbnRIbDcx/WmNJPQ",
        text: "Data Engineer"
      }
    ];

    const handlePrevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    return (
      <div className="slider-container">
        <button className="slider-button prev-button" onClick={handlePrevSlide}>❮</button>
        <div className="slider-content" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slide-text">
                <h2>{`Slide ${index + 1}`}</h2>
                <p>{slide.text}</p>
              </div>
              <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
            </div>
          ))}
        </div>
        <button className="slider-button next-button" onClick={handleNextSlide}>❯</button>
      </div>
    );
}

export default Slider