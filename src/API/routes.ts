import { Router } from "express";
import GenreController from "./api";

const router = Router();
const GenreList = new GenreController();

router.get('/genreList', GenreList.getGenreList);

export default router;