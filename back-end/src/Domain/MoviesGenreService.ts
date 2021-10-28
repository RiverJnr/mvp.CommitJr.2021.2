import { getMovieInfo, getMoviesGenre, getMoviesVideo} from "../Repository/Repository";

class MoviesGenreService {
    async getMoviesGenre(idGenre: string) {
        
        const repositoryResponse = await getMoviesGenre(idGenre);
        
        if (repositoryResponse.status) {
            return view(repositoryResponse);
        };
        
        return {message: 'Failed to make the request.'};
    };
     
};

async function view({data}: any) {

    const {results} = data;

    let run = getInfo(1234);


/*
    for(let i = 0; i < data.data['results'].length; i++){
        let valor = await getInfo(Number(data.data['results'][i].id));

        const namesGenres = valor.genres.map((item:any) => ({
            return item.name;
        }))
        
        let key = await getVideo(parseInt(data.data['results'][i].id));
        let keyYoutube = key['results'].map(function (item:any, indice:string) {
            return item.key;
        });
    };
    let movies = await getInfo(results.map((id:number) => ({id})));
*/
    type typeMovie = { id: number, title: string, overview: string
                       original_title: string, adult: boolean
                       vote_average: number, release_date: string
                       genre_ids: [], poster_path: string,
                       backdrop_path: string, runtime: number, keyVideo: boolean};

    const moviesList = results.map(
        ({ id, title, overview, original_title, adult, vote_average, release_date, genre_ids, poster_path, backdrop_path, runtime, keyVideo }: typeMovie) => (
         { id, title, overview, original_title, adult, vote_average, release_date, genre_ids, poster_path, backdrop_path, runtime, keyVideo})
    );

    return moviesList;
};

async function getInfo(idMovie:number){
    const repositoryResponse = await getMovieInfo(idMovie);
    return repositoryResponse.data;
};

async function getVideo(idMovie:number){
    const repositoryResponse = await getMoviesVideo(idMovie);
    return repositoryResponse.data;
};


export default MoviesGenreService;