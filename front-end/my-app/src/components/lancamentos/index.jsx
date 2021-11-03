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

    console.log(movie);
setTimeout(() => (console.log(movie)),5000);
    return(

        <section className="Lancamentos">

            <h1 className="title">Lançamentos</h1>

            <div>
                <ImageSlider slides={movie} />
            </div>

        </section>

    );
}

export default Lancamentos;