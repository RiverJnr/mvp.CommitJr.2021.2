import { GetMoviesGenre} from "../Repository/Repository";

class MoviesService {
    async getMoviesGenre(idGenre: number) {
        const repositoryResponse = await GetMoviesGenre();
        if (repositoryResponse.status) {
            return view(repositoryResponse,idGenre);
        }
    }
     
}

function view({data}: any, idGenre: number) {
    const {results} = data;

    type typeGenre = { id: number, title: string, genre_ids: number};

    const genreList = results.map(
        ({ id, title, genre_ids }: typeGenre) => ({ id, title, genre_ids})
    );

    const newGenreList = genreList.find(
        ( genreList: { genre_ids: number; }) => genreList.genre_ids == idGenre
    ); 
return newGenreList;
}



export default MoviesService;