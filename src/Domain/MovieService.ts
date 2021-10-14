import { GetMoviesGenre} from "../Repository/Repository";

class MoviesService {
    async getMoviesGenre(idGenre: string) {
        const repositoryResponse = await GetMoviesGenre(idGenre);
        if (repositoryResponse.status) {
            return view(repositoryResponse);
        }
    }
     
}

function view({data}: any) {
    const {results} = data;

    type typeGenre = { id: number, title: string, genre_ids: number[]};

    const genreList = results.map(
        ({ id, title, genre_ids }: typeGenre) => ({ id, title, genre_ids})
    );

return genreList;
}



export default MoviesService;