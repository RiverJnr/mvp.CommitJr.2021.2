import { Router } from "express";
import MoviesController from "./api"; "./api";

const router = Router();
const control = new MoviesController();

router.get('/moviesList', control.getMoviesList);
router.get('/moviesGenre/:idGenre', control.getMovieGenre);
router.get('/popularMovies', control.getPopularMovie);

export default router;