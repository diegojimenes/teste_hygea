import { useEffect } from "react"

import listMovies from "../../api/listMovies"
import Button from "../../components/button"
import { i_movies, save } from "../../redux/reducers/movies"
import { useAppDispatch, useAppSelector } from "../../redux/store"

const List = () => {
  const movies = useAppSelector((state: { movies: i_movies[] }) => state.movies)
  const dispatch = useAppDispatch()

  const getMovies = async () => {
    dispatch(save(await listMovies()))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return <div>
    <Button onClick={() => console.log(movies)} size="large">Start</Button>
  </div>
}

export default List