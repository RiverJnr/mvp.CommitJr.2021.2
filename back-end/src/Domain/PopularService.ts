import { getPopularMovies } from "../Repository/Repository";

class PopularService {    
    async getPopularMovies() {
        const repositoryResponse = await getPopularMovies();
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