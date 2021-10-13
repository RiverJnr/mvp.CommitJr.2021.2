import { GetMoviesGenre} from "../Repository/Repository";

class MoviesService {
    async getMoviesGenre() {
        const repositoryResponse = await GetMoviesGenre();
        if (repositoryResponse.status) {
            return repositoryResponse;
        }
    }
     
}

function view({data}: any) {
    const {results} = data;

    type typeGenre = { id: number, title: string};

    const genreList = results.map(
        ({ id, title }: typeGenre) => ({ id, title})
    );

return genreList;
}



export default MoviesService;