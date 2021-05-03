import Header from '@/components/Header'
import LibraryMenu from '@/components/LibraryMenu'
import LibraryWork from '@/components/LibraryWork'

import { Container, BodyContainer, WorksContainer } from './styles'

const Library: React.FC = () => {
  return (
    <Container>
      <Header page="Library" />

      <BodyContainer>
        <LibraryMenu />
        <WorksContainer>
          <LibraryWork id="1" title="teste" url={'/assets/example.pdf'} />
        </WorksContainer>
      </BodyContainer>
    </Container>
  )
}

export default Library
