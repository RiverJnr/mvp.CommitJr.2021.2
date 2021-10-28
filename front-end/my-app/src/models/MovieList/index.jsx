import React from 'react';
import Card from '../../components/card';

function MovieList() {

    const movieStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '300px'
    }

    return (
        <div className="movie-list" style={movieStyle}>
            {props.movies.map((movie) => (
            <Card img={"https://image.tmdb.org/t/p/w200" + movie.poster_path} alt={movie.title}></Card>
            ))}
        </div>
    )
}

export default MovieList;