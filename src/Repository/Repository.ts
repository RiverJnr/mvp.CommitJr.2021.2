import api from '../config/axios';
import api_key from '../config/env';

async function GetGenresList() {
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

async function GetMoviesGenre(idGenre: string) {
    try {
        const response = await api.get(`/3/discover/movie?api_key=${api_key}&language=en-US&page=1&with_genres=${idGenre}`);
        if(response.status >= 200 && response.status < 300){
            const movieGenre = response.data;
            return{
                status: true,
                data: movieGenre
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

async function GetPopularMovies() {
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
export { GetGenresList, GetMoviesGenre, GetPopularMovies };