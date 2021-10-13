import { Request, Response } from "express";
import GenreService from "../Domain/GenreService";
import MoviesService from "../Domain/MovieService";
import PopularService from "../Domain/PopularService";

class GenreController {
    async getGenreList(request: Request, response: Response){
        try {
            const genreData = new GenreService();
            const genreList = await genreData.getGenreList();
            if(genreList != null){
                return response.send(genreList); 
            };

            return response.send({err: 'Err'});
        } catch (err) {
            throw err;
        };
    };

    async getMovieGenre(request: Request, response: Response){
        try {
            const genreData = new MoviesService();
            const genreList = await genreData.getMoviesGenre();
            if(genreList != null){
                return response.send(genreList); 
            };

            return response.send({err: 'Err'});
        } catch (err) {
            throw err;
        };
    };

    async getPopularMovie(request: Request, response: Response){
        try {
            const genreData = new PopularService();
            const genreList = await genreData.getPopularMovies();
            if(genreList != null){
                return response.send(genreList); 
            };

            return response.send({err: 'Err'});
        } catch (err) {
            throw err;
        };
    };
};

export default GenreController;