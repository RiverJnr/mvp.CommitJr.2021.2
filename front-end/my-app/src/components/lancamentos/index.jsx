import ImageSlider from './ImageSlider'
import './style.css';
import getMovies from '../../APIs/getMovies';
import React, {useState, useEffect} from 'react';

function Lancamentos(){

    const [movie, setMovie] = useState([]);

    async function getMovie() {

        const genres = await getMovies(35);
        console.log(genres);
        setMovie(genres.movies);
    }

    useEffect(() => {
        getMovie();
    }, [])

    useEffect(() => {
        console.log(movie);
    },[movie]);

    return(

        <section className="Lancamentos">

            <h1 className="title">Releases</h1>

            <div>
                <ImageSlider slides={movie} />
            </div>

        </section>

    );
}

export default Lancamentos;