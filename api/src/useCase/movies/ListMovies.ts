import express from "express"
import { Movies } from "../../repositories/mongoDb/models/movie"
import { GetMovies } from "../../repositories/moviesRepo/GetMovies"

export class ListMovies {
  private getMoviesApi

  constructor(MoviesModel: Movies) {
    this.getMoviesApi = new GetMovies(MoviesModel)
  }

  async execute(req: express.Request, res: express.Response) {
    try {
      const movies = await this.getMoviesApi.action(parseInt(`${req.query.page}`))
      return res.json(movies)
    } catch (err) {
      return res.status(500).send(err)
    }
  }
}