import express from "express"
import { ListMovies } from "../useCase/movies/ListMovies"
import { SendMovies } from "../useCase/movies/SendMovies"

var router = express.Router()

const sendMovies = new SendMovies()
const listMovies = new ListMovies()

router.post('/send/movies', (_, res: express.Response) => sendMovies.execute(res))
router.get('/list/movies', (req, res: express.Response) => listMovies.execute(req, res))

export default router