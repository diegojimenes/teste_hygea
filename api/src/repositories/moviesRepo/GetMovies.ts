import { Movies } from "../mongoDb/models/movie"

const PER_PAGE = 10

export class GetMovies {
  private base

  constructor(MoviesModel: Movies) {
    this.base = MoviesModel
  }

  async action(page: number) {
    try {
      const count = await this.base.model.count()
      const movies = await this.base.query.find({}).skip(PER_PAGE * (page ?? 0)).limit(PER_PAGE)
      return {
        count,
        movies
      }
    } catch (err) {
      return err
    }
  }
}