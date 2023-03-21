import express from "express"
import { GetMovies } from "../../repositories/moviesRepo/GetMovies"

export class ListMovies {
  private getMoviesApi = new GetMovies()
  async execute(req: express.Request, res: express.Response) {
    try {
      const movies = await this.getMoviesApi.action(parseInt(`${req.query.page}`))
      return res.json(movies)
    } catch (err) {
      return res.status(500).send(err)
    }
  }
}