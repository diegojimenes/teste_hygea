import styled from 'styled-components'
import { i_movies } from '../../redux/reducers/movies'
import { Divider, Tag, Typography } from 'antd'

const { Text, Title } = Typography

const Container = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 99vw;
    padding: 10px;
    background-color: #f3f3f3;
  }
`

const Image = styled.img`
  min-height: 400px;
  margin: 0px;
  padding: 0px;
  border: 5px solid #821ec5;
  border-radius: 15px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
`

const Name = styled(Title)`
  font-weight: bold;
`

const Description = styled(Text)`
  padding-left: 10px;
  padding-right: 10px;
  margin: 0px;
  font-size: 19px;
`

const CreditsContainer = styled.div``


const Details = ({ movie: { title, banner, description, director, producer, average, providers, _id, ...movie } }: { movie: i_movies }) => {
  const providersParsed = JSON.parse(providers)
  const watchProviders = [...new Set([...providersParsed.rent ?? [], ...providersParsed.buy ?? []].map(({ provider_name }) => provider_name))]

  return <>
    <Container key={_id}>
      <Content>
        <Image src={banner} />
        <Description>
          {description}
          <Divider plain></Divider>
          {`IMDb RATING: ${average}`}
        </Description>
      </Content>
      <div>
        <Name>{title}</Name>
        {(director || producer) && <Title level={3}>Credits</Title>}
        <CreditsContainer>
          {director && <Tag color="magenta">Director: {director}</Tag>}
          {producer && <Tag color="orange">Producer: {producer}</Tag>}
        </CreditsContainer>
        {watchProviders.length > 0 && <Title level={3}>Watch providers</Title>}
        {
          watchProviders.map((provider) => {
            return <Tag color="magenta">{provider}</Tag>
          })
        }
      </div>
    </Container>
  </>
}

export default Details