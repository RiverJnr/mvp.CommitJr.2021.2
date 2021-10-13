import { GetGenresList, GetMoviesGenre, GetPopularMovies } from "../Repository/Repository";

class GenreService {
    async getGenreList() {
        const repositoryResponse = await GetGenresList();
        if(repositoryResponse.status) {
            return repositoryResponse;
        };
    };

    async getMoviesGenre() {
        const repositoryResponse = await GetMoviesGenre();
        if(repositoryResponse.status) {
            return repositoryResponse;
        };
    };

    async getPopularMovies() {
        const repositoryResponse = await GetPopularMovies();
        if(repositoryResponse.status) {
            return repositoryResponse;
        };
    };
};

export default GenreService;