import cors from "cors"
import express from "express"
import { Movies } from "../repositories/mongoDb/models/movie"
import { ListMovies } from "../useCase/movies/ListMovies"
import { SendMovies } from "../useCase/movies/SendMovies"

var router = express.Router()

router.use(cors())

const MoviesModel = new Movies()
const sendMovies = new SendMovies(MoviesModel)
const listMovies = new ListMovies(MoviesModel)

router.post('/send/movies', (_, res) => sendMovies.execute(res))
router.get('/list/movies', (req, res) => listMovies.execute(req, res))

export default router