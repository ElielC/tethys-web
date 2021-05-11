import { useEffect, useState } from 'react'
import { Row, Container as BootstrapContainer, Col } from 'react-bootstrap'

import { api } from '@/api'
import Header from '@/components/Header'
import HomeWork from '@/components/HomeWork'

import ProtectedModule from '../protectedModule'
import { Container, BodyContainer } from './styles'

const Home: React.FC = () => {
  const [works, setWorks] = useState([])

  useEffect(() => {
    async function loadWorks() {
      try {
        const response = await api.get('work/list/')

        setWorks(response.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    loadWorks()
  }, [])

  return (
    <Container>
      <Header page="Home" />

      <BodyContainer>
        <BootstrapContainer>
          <Row>
            {works
              .reduce(function (
                accumulator,
                currentValue,
                currentIndex,
                array
              ) {
                if (currentIndex % 2 === 0) {
                  accumulator.push(array.slice(currentIndex, currentIndex + 2))
                }
                return accumulator
              },
              [])
              .map(work => (
                <>
                  {work[0] && (
                    <Col key={`work_${work[0].id}`}>
                      <HomeWork
                        id={work[0].id}
                        title={work[0].title}
                        description={work[0].description}
                        author={work[0].user.name}
                        url={work[0].file.url}
                      />
                    </Col>
                  )}
                  {work[1] && (
                    <Col key={`work_${work[1].id}`}>
                      <HomeWork
                        id={work[1].id}
                        title={work[1].title}
                        description={work[1].description}
                        author={work[1].user.name}
                        url={work[1].file.url}
                      />
                    </Col>
                  )}
                </>
              ))}
          </Row>
        </BootstrapContainer>
      </BodyContainer>
    </Container>
  )
}

export default ProtectedModule(Home)
