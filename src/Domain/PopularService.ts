import { GetPopularMovies } from "../Repository/Repository";

class PopularService {    
    async getPopularMovies() {
        const repositoryResponse = await GetPopularMovies();
        if (repositoryResponse.status) {
            return view(repositoryResponse);
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



export default PopularService;