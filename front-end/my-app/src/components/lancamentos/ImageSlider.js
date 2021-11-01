import React, { useState } from 'react';
import './style.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {   
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if ( !Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        
        <section className="slider">

            <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide} />

            {slides.filter((slide) => slide.keyVideo.length !== 0 && slide.runtime > 0)
                   .map((slide, index) => {
                return(

                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (

                        <>
                            
                            <div className="image" >
                                <iframe width="500px" title="aaa" height="335" src={`https://www.youtube.com/embed/${slide.keyVideo[0]}`} frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>

                            <div className="releases-texts"> 
                                <h1>{slide.title}</h1>  
                                <span className="movie-synopsis" ><strong>Sinopse:</strong> {slide.overview}</span>
                                <span className="movie-title-original"><strong>Original title: </strong> {slide.original_title} </span>
                                <span className="movie-title-original"><strong>Genres:</strong> {slide.genre_names}</span>
                                <span className="movie-title-original"><strong>Release:</strong> {slide.release_date}</span>
                                <span className="movie-title-original"><strong>Adult content:</strong> {slide.adult ? "Não" : "Sim"}</span>
                                <span className="runtime"><strong>Runtime: </strong>{`${parseInt(slide.runtime / 60)}h ${slide.runtime % 60}min`}</span>
                                <span className="movie-title-original"><strong>Avaliation:</strong></span>
                                <span className="avaliation">
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Typography component="legend"></Typography>
                                        <Rating  value={slide.vote_average / 2} readOnly />
                                    </Box>
                                </span>  
                            </div>

                        </>

                        )}
                    </div>

                );
            })} 

        </section>
        
    );
};

export default ImageSlider;