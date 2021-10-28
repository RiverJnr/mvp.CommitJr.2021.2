import ImageSlider from './ImageSlider'
import './style.css';
import getMovies from '../../APIs/getMovies';
import React, {useState, useEffect} from 'react';

function Lancamentos(){

    const [generos, setGeneros] = useState([]);

    async function getGenres() {

        const genres = await getMovies(35);
        setGeneros(genres.data);
    }

    useEffect(() => {
        getGenres();
    }, [])

    return(

        <section className="Lancamentos">

            <h1 className="title">Lançamentos</h1>

            <div>
                <ImageSlider slides={generos} />
            </div>

        </section>

    );
}

export default Lancamentos;