import styled from 'styled-components'
import MovieCard from "../movieCard"
import { i_movies } from "../../redux/reducers/movies"
import Details from '../details'
import { useState } from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const ContainerList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const MovieList = ({ movies }: { movies: i_movies[] }) => {
  const [movie, setMovie] = useState<i_movies>(movies[0])

  const renderMovies = () => movies.map((movie) => {
    return <MovieCard movie={movie} selectMovie={(movie: i_movies) => {
      setMovie(movie)
    }} />
  })

  return <>
    <Container>
      <ContainerList>
        {
          renderMovies()
        }

      </ContainerList>
      {movie && <Details movie={movie} />}
    </Container>
  </>
}

export default MovieList