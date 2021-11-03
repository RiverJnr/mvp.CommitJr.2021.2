import api from './baseAPI';


// Class responsible for fetching all my genres from the backend
async function getGenres() {
    try {
        const response = await api.get(`/genresList`);
            if(response.status === 200){
                const movies = response.data;
                return ({
                    data: movies,
                    status: true,
                });
            };

            return ({
                data: response.data,
                status: false
            });

    } catch(err){
        throw err;
    }
}

export default getGenres;