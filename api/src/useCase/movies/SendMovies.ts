import express from "express"
import { i_movies } from "../../repositories/mongoDb/models/movie"
import { CreateMovie } from "../../repositories/moviesRepo/CreateMovie"
import { MovieApi } from "../../services/MoviesApi"

export class SendMovies {
  async execute(res: express.Response) {
    try {
      const moviesApi = new MovieApi()
      const movies = await moviesApi.getMovies()
      const createMovie = new CreateMovie()
      const addedMovies: i_movies[] = []

      await Promise.all(movies.map(async (movie) => {
        await createMovie.action(movie)
        addedMovies.push(movie)
      }))

      return res.send(addedMovies)
    } catch (err) {
      return res.status(500).send(err)
    }
  }
}