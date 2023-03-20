import { object, string } from "yup"
import { i_movies, Movies } from "../mongoDb/models/movie"

const schema = object({
  title: string().required(),
  banner: string().url().required(),
  description: string().required(),
  director: string().required(),
  producer: string().required()
})

export class CreateMovie {
  async action(data: i_movies): Promise<i_movies | unknown> {
    try {
      await schema.validate(data)

      const base = new Movies()

      const newMovie = new base.model({
        title: 'string',
        banner: 'string',
        description: 'string',
        director: 'string',
        producer: 'string'
      })
      return await newMovie.save()
    } catch (err) {
      return err
    }
  }
}