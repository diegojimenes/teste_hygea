import { object, string } from "yup"
import { i_movies, Movies } from "../mongoDb/models/movie"

const schema = object({
  title: string().required(),
  banner: string().url().required(),
  description: string().required(),
  director: string(),
  producer: string()
})

export class CreateMovie {
  private base = new Movies()

  async action(data: i_movies): Promise<i_movies | unknown> {
    try {
      await schema.validate(data)

      const newMovie = new this.base.model(data)

      return await newMovie.save()
    } catch (err) {
      return err
    }
  }
}