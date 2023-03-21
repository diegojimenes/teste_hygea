import axios from "axios"
import { i_movies } from "../redux/reducers/movies"

const updateDatabase = async (): Promise<{ movies: i_movies[] }> => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_MOVIES_API}/send/movies`)
    return response.data
  } catch (err) {
    throw err
  }
}

export default updateDatabase