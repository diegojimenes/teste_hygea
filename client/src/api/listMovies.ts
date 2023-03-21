import axios from "axios"
import { i_movies } from "../redux/reducers/movies"

const listMovies = async (page: number = 0): Promise<{ movies: i_movies[], count: number }> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_MOVIES_API}/list/movies/?page=${page}`)
    return response.data
  } catch (err) {
    throw err
  }
}

export default listMovies