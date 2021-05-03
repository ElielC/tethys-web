import Header from '@/components/Header'
import HomeWork from '@/components/HomeWork'

import { Container, BodyContainer } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Header page="Home" />

      <BodyContainer>
        <HomeWork
          title="teste"
          id="1"
          author="teste"
          description="aaaaaaaaaaaaaaaa"
        />
        <HomeWork
          title="teste"
          id="1"
          author="teste"
          description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        />
      </BodyContainer>
    </Container>
  )
}

export default Home
