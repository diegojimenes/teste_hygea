import { Movies } from "../mongoDb/models/movie"

const PER_PAGE = 10

export class GetMovies {
  private base = new Movies()

  async action(page: number) {
    try {
      return await this.base.query.find({}).skip(PER_PAGE * (page ?? 0)).limit(PER_PAGE)
    } catch (err) {
      return err
    }
  }
}