import { object, string, number } from "yup"
import { i_movies, Movies } from "../mongoDb/models/movie"

const schema = object({
  title: string().required(),
  banner: string().url().required(),
  description: string().required(),
  director: string(),
  producer: string(),
  average: number(),
  providers: object(),
  id: number()
})

export class CreateMovie {
  private base

  constructor(MoviesModel: Movies) {
    this.base = MoviesModel
  }

  async action(data: i_movies): Promise<i_movies | unknown> {
    try {
      await schema.validate(data)
      const DATA = { ...data, providers: JSON.stringify(data.providers), id: data.id }
      const newMovie = new this.base.model(DATA)

      return await newMovie.save()
    } catch (err) {
      return err
    }
  }
}