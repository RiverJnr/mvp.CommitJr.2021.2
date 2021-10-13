import { Router } from "express";
import GenreController from "./api";

const router = Router();
const GenreList = new GenreController();

router.get('/genresList', GenreList.getGenreList);
router.get('/moviesGenre', GenreList.getMovieGenre);
router.get('/popularMovies', GenreList.getPopularMovie);

export default router;