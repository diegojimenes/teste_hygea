import axios from "axios"
import { i_movies } from "../repositories/mongoDb/models/movie"

const discover_api = (process.env.MOVIES_API ?? '').replace('${end-point}', 'discover/movie')

export class MovieApi {
  async getMovies() {
    const list = await axios.get(discover_api)
    const movies = await this.normalize(list)

    return movies
  }

  async normalize(movies: any) {
    let movieList: i_movies[] = []

    await Promise.all(movies.data.results.map(async ({
      id,
      title,
      overview,
      poster_path,
      vote_average,
    }: any) => {
      const producerAndDirector = await this.getProducerAndDirector(id)
      const wathcProviders = await this.getWatchProviders(id)

      movieList.push({
        title: title,
        banner: "https://image.tmdb.org/t/p/w185/" + poster_path,
        description: overview,
        director: producerAndDirector.director.name,
        producer: producerAndDirector.producer.name,
        average: vote_average,
        providers: wathcProviders,
        id: id
      })
    }))

    return movieList
  }

  async getProducerAndDirector(id: number) {
    const credits_api = (process.env.MOVIES_API ?? '').replace('${end-point}', `movie/${id}/credits`)
    const credits = await axios.get(credits_api)
    const result = {
      director: {
        job: '',
        name: ''
      },
      producer: {
        job: '',
        name: ''
      }
    }

    credits.data.cast.filter(({ known_for_department, name }: any) => {
      if (
        known_for_department == 'Directing'
      ) {
        result.director.job = known_for_department
        result.director.name = name
      } else if (
        known_for_department == 'Production'
      ) {
        result.producer.job = known_for_department
        result.producer.name = name
      }
    })

    return result
  }

  async getWatchProviders(id: number) {
    const watch_providers_api = (process.env.MOVIES_API ?? '').replace('${end-point}', `/movie/${id}/watch/providers`)
    const watchProviders = await axios.get(watch_providers_api)
    return watchProviders.data.results.BR ?? {}
  }
}