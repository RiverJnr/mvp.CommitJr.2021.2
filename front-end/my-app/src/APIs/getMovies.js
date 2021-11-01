import api from './baseAPI';

// Class responsible for searching for some films from my back end, using the baseAPI.
async function getMovie(props) {

    try {

        const response = await api.get(`/moviesGenre/${props}`);

            if(response.status === 200){
    
                const data = response.data;
    
                return ({
                    movies: data,
                    status: true,
                });
            };

            return ({
                movies: response.data,
                status: false
            });

    } catch(err){
        throw err;
    }
}

export default getMovie;