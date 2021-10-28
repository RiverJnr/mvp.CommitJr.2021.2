import axios from 'axios';

// Importing axios, my URL where I make requests on the back end.
const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api;