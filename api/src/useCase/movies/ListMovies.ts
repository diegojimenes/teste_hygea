import express from "express"
import { GetMovies } from "../../repositories/moviesRepo/getMovies"

export class ListMovies {
  async execute(req: express.Request, res: express.Response) {
    try {
      const movies = await new GetMovies().action(parseInt(req.query.page))

      return res.send(movies)
    } catch (err) {
      console.log(err)
      return res.status(500).send(err)
    }
  }
}