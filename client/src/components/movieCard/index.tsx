import styled from 'styled-components'
import { i_movies } from '../../redux/reducers/movies'
import { Tag, Typography } from 'antd'

const { Text } = Typography

const Container = styled.div`
  width: 185px;
  padding: 10px;
  cursor: pointer;
`

const Image = styled.img`
  min-height: 278px;
  max-width: 185px;
  margin: 0px;
  padding: 0px;
`

const Content = styled.div`
  width: 185px;
  min-height: 109px;
`

const Title = styled(Text)`
  font-weight: bold;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

const Description = styled(Text)`
  width: 90%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const CreditsContainer = styled.div``


const MovieCard = ({ movie: { title, banner, description, director, producer, providers, average, _id }, selectMovie }: { movie: i_movies, selectMovie: (movie: i_movies) => void }) => {
  return <Container key={_id} onClick={() => selectMovie({ title, banner, description, director, producer, providers, average, _id })}>
    <Image src={banner} />
    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CreditsContainer>
        {director && <Tag color="magenta">Director: {director}</Tag>}
        {producer && <Tag color="orange">Producer: {producer}</Tag>}
      </CreditsContainer>
    </Content>
  </Container >
}

export default MovieCard