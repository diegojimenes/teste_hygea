import cors from "cors"
import express from "express"
import { ListMovies } from "../useCase/movies/ListMovies"
import { SendMovies } from "../useCase/movies/SendMovies"

var router = express.Router()

router.use(cors())

const sendMovies = new SendMovies()
const listMovies = new ListMovies()

router.post('/send/movies', (_, res) => sendMovies.execute(res))
router.get('/list/movies', (req, res) => listMovies.execute(req, res))

export default router