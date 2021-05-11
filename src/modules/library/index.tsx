import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Row, Container as BootstrapContainer, Col } from 'react-bootstrap'

import { api } from '@/api'
import CreateWorkDialog from '@/components/CreateWorkDialog'
import Header from '@/components/Header'
import LibraryMenu from '@/components/LibraryMenu'
import LibraryWork from '@/components/LibraryWork'

import ProtectedModule from '../protectedModule'
import { Container, BodyContainer, WorksContainer } from './styles'

const Library: React.FC = () => {
  const router = useRouter()

  const [item, setItem] = useState<'saved' | 'my'>('my')

  const [works, setWorks] = useState([])
  const [isCreatingWork, setIsCreatingWork] = useState(false)

  useEffect(() => {
    if (!router.isReady) return

    const { id } = router.query

    async function loadWorks() {
      try {
        const response = await api.get(`/work/list/${id}/`)

        setWorks(response.data.results)
        console.log(works)
      } catch (error) {
        console.log(error)
      }
    }
    loadWorks()
  }, [])

  function handleSavedWorks() {
    setItem('saved')
  }

  function handleMyWorks() {
    setItem('my')
  }

  function handleCloseDialog() {
    setIsCreatingWork(false)
  }

  function handleOpenDialog() {
    console.log(isCreatingWork)
    setIsCreatingWork(true)
  }

  return (
    <Container>
      <CreateWorkDialog open={isCreatingWork} onCancel={handleCloseDialog} />
      <Header page="Library" />

      <BodyContainer>
        <LibraryMenu
          item={item}
          onMyWorks={handleMyWorks}
          onSavedWorks={handleSavedWorks}
          onMoreWorks={handleOpenDialog}
        />
        <WorksContainer>
          <BootstrapContainer>
            <Row>
              {works
                .reduce(function (
                  accumulator,
                  currentValue,
                  currentIndex,
                  array
                ) {
                  if (currentIndex % 3 === 0) {
                    accumulator.push(
                      array.slice(currentIndex, currentIndex + 3)
                    )
                  }
                  return accumulator
                },
                [])
                .map(work => (
                  <>
                    {work[0] && (
                      <Col key={`work_${work[0].id}`}>
                        <LibraryWork
                          id={work[0].id}
                          title={work[0].title}
                          url={work[0].file.url}
                        />
                      </Col>
                    )}
                    {work[1] && (
                      <Col key={`work_${work[1].id}`}>
                        <LibraryWork
                          id={work[1].id}
                          title={work[1].title}
                          url={work[1].file.url}
                        />
                      </Col>
                    )}
                    {work[2] && (
                      <Col key={`work_${work[2].id}`}>
                        <LibraryWork
                          id={work[2].id}
                          title={work[2].title}
                          url={work[2].file.url}
                        />
                      </Col>
                    )}
                  </>
                ))}
            </Row>
          </BootstrapContainer>
        </WorksContainer>
      </BodyContainer>
    </Container>
  )
}

export default ProtectedModule(Library)
