import api from '../config/axios';
import api_key from '../config/env';

async function getGenresList() {
    try {
        const response = await api.get(`/3/genre/movie/list?api_key=${api_key}&language=en-US`);
        if(response.status >= 200 && response.status < 300){
            const genreList = response.data;
            return{
                status: true,
                data: genreList
            };
        };

        return{
            status: false,
            data: "Failed the request"
        };
    } catch (err) {
        throw(err)
    }
}

async function getMoviesGenre(idGenre: string) {
    try {
        const response = await api.get(`/3/discover/movie?api_key=${api_key}&language=en-US&with_genres=${idGenre}`);
        if(response.status >= 200 && response.status < 300){
            const moviesGenre = response.data;
            return{
                status: true,
                data: moviesGenre
            };
        };

        return{
            status: false,
            data: "Failed the request"
        };
    } catch (err) {
        throw(err)
    }
}

async function getPopularMovies() {
    try {
        const response = await api.get(`/3/movie/popular?api_key=${api_key}&language=en-US&page=1`);
        if(response.status >= 200 && response.status < 300){
            const popularMovies = response.data;
            return{
                status: true,
                data: popularMovies
            };
        };

        return{
            status: false,
            data: "Failed the request"
        };
    } catch (err) {
        throw(err)
    }
}

async function getMovieInfo(id:number){
    const response = await api.get(`/3/movie/${id}?api_key=${api_key}&language=en-US`);
    try {
        if(response.status >= 200 && response.status < 300){
            const infoMovie = response.data;
            
            return {
                status: true,
                data: infoMovie
            };
        };
        return {
            status: false,
            data: "Failed to make the request."
        };
    } catch (err) {
        throw (err);
    };
}

async function getMoviesVideo(id:number){
    try {
        const response = await api.get(`/3/movie/${id}/videos?api_key=${api_key}&language=en-US`);
        if(response.status >= 200 && response.status < 300){
            const videosList = response.data;
            
            return {
                status: true,
                data:videosList
            };
        };
        return {
            status: false,
            data: "Failed to make the request."
        };

    } catch (err) {
        throw (err);
    };
};
export { getGenresList, getMoviesGenre, getPopularMovies, getMovieInfo, getMoviesVideo };