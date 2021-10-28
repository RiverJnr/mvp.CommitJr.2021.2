import { getGenresList } from "../Repository/Repository";

class MoviesListService {
    async getMoviesList() {
        const repositoryResponse = await getGenresList();
        if (repositoryResponse.status) {
            return view(repositoryResponse);
        }

        return { message: 'Failed to make request.' };
    }
}

function view({data}: any) {
    const {genres} = data;

    type typeGenre = { id: number, name: string};

    const genreList = genres.map(
        ({ id, name }: typeGenre) => ({ id, name})
    );

return genreList;
}



export default MoviesListService;