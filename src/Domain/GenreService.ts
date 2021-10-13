import { GetGenresList } from "../Repository/Repository";

class GenreService {
    async getGenreList() {
        const repositoryResponse = await GetGenresList();
        if (repositoryResponse.status) {
            return view(repositoryResponse);
        }
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



export default GenreService;