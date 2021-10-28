import { SliderData } from './SliderData';
import { React, useState } from 'react';
import './style.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import getMovie from '../../APIs/getMovie'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const [generosMovie, setGenerosMovie] = useState([]);

    async function getApiGeneros() {
        const genresList = await getMovie();
        const genres = genresList.status ? genresList.movies : ([]);
        setGenerosMovie(genres);
    };

    const nextSlide = () => {   
        setCurrent(current === length - 1 ? 0 : current + 1);
        getApiGeneros();
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

            {SliderData.map((slide, index) => {
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (

                        <>
                            
                            <div className="image" >
                                <iframe width="500px" height="335" src={`https://www.youtube.com/embed/${slide.keyVideo}`} frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>

                            <div className="releases-texts"> 
                                <h1>{slide.title}</h1>  
                                <span className="movie-synopsis" ><strong>Sinopse:</strong> {slide.overview}</span>
                                <span className="movie-title-original"><strong>Original title: </strong> {slide.original_title} </span>
                                <span className="movie-title-original"><strong>Genres:</strong> {slide.genre_ids}</span>
                                <span className="movie-title-original"><strong>Release:</strong> {slide.release_date}</span>
                                <span className="movie-title-original"><strong>Adult content:</strong> {slide.adult ? "No" : "Yes"}</span>
                                <span className="runtime"><strong>Runtime: </strong>{`${parseInt(slide.runtime / 60)}h ${slide.runtime % 60}min`}</span>
                                <span className="movie-title-original"><strong>Avaliation:</strong></span>
                                <span className="avaliation"></span>  
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