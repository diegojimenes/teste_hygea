import { Movies } from "../mongoDb/models/movie"

export class GetMovies {
  private base = new Movies()

  async action(page: number) {
    try {
      return await this.base.query.find({}).skip(10 * page)
    } catch (err) {
      console.log(err)
      return err
    }
  }
}