import { Request, Response } from "express";
import GenreService from "../Domain/MoviesListService";
import MoviesService from "../Domain/MoviesGenreService";
import PopularService from "../Domain/PopularService";

class GenreController {
    async getMoviesList(request: Request, response: Response){
        try {
            const genreData = new GenreService();
            const genreList = await genreData.getMoviesList();
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
            const idGenre = request.params.idGenre;
            const genreList = await genreData.getMoviesGenre(idGenre);

            if(genreList != null){
                return response.send(genreList); 
            };

            return response.status(500).send({err: 'Err'});
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