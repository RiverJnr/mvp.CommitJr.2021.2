import GetGenresList from "../Repository/Repository";

class GenreService {
    async getGenreList() {
        const repositoryResponse = await GetGenresList();
        if(repositoryResponse.status) {
            return repositoryResponse;
        };
    };
};

export default GenreService;