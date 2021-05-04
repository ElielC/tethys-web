import { useEffect, useState } from 'react'

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
        <ul>
          {works.map(work => (
            <HomeWork
              key={`work_${work.id}`}
              id={work.id}
              title={work.title}
              description={work.description}
              author={work.user.name}
              url={work.file.url}
            />
          ))}
        </ul>
      </BodyContainer>
    </Container>
  )
}

export default ProtectedModule(Home)
