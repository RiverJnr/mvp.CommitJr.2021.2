import { SliderData } from './SliderData';
import ImageSlider from './ImageSlider'
import './style.css';
import getGenre from '../../APIs/getGenre';
import React, {useState, useEffect} from 'react';

function Lancamentos(){

    const [generos, setGeneros] = useState([]);

    async function getGenres() {
        const genres = await getGenre(35);
        setGeneros(genres.data);
    }

    useEffect(() => {
        getGenres();
    }, [])

    return(
        <section className="Lancamentos">
            <h1 className="title">Lançamentos</h1>
            <div>
            <ImageSlider slides={SliderData} />
            </div>
        </section>
    );
}

export default Lancamentos;