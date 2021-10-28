import { Router } from "express";
import GenreController from "./api";

const router = Router();
const GenreList = new GenreController();

router.get('/moviesList', GenreList.getMoviesList);
router.get('/moviesGenre/:idGenre', GenreList.getMovieGenre);
router.get('/popularMovies', GenreList.getPopularMovie);

export default router;