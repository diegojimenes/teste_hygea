import { useEffect, useState } from "react"
import { FloatButton, Pagination } from "antd"
import { DownloadOutlined, LoadingOutlined } from "@ant-design/icons";
import listMovies from "../../api/listMovies"
import MovieList from "../../components/movieList"
import { i_movies, save } from "../../redux/reducers/movies"
import { useAppDispatch, useAppSelector } from "../../redux/store"
import updateDatabase from "../../api/updateDatabase";

const List = () => {
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoad] = useState(false)

  const movies = useAppSelector((state: { movies: i_movies[] }) => state.movies)
  const dispatch = useAppDispatch()

  const getMovies = async (page: number = 0) => {
    const data = await listMovies(page)
    dispatch(save(data.movies))
    setTotalPages(data.count)
  }

  const updateDataBase = async () => {
    setLoad(true)
    await updateDatabase()
    setLoad(false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return <div>
    <MovieList movies={movies} />
    <Pagination defaultCurrent={0} total={totalPages} onChange={(page) => {
      getMovies(page - 1)
    }} />
    <FloatButton icon={loading ? <LoadingOutlined /> : <DownloadOutlined />} onClick={() => {
      if (!loading) {
        updateDataBase()
      }
    }} />
  </div>
}

export default List