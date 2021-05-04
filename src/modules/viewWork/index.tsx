/* eslint-disable prefer-spread */
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { pdfjs } from 'react-pdf/'

import { api } from '@/api'
import Header from '@/components/Header'

import ProtectedModule from '../protectedModule'
import { Container, BodyContainer, StyledDocument, StyledPage } from './styles'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const ViewWork: React.FC = () => {
  const router = useRouter()

  const [work, setWork] = useState(null)
  const [numPages, setNumPages] = useState(null)

  useEffect(() => {
    if (!router.isReady) return

    const { id } = router.query

    async function loadWorks() {
      console.log(id)
      try {
        const response = await api.get(`work/get/${id}/`)

        setWork(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    loadWorks()
  }, [])

  return (
    <Container>
      <Header page={work?.title} />

      <BodyContainer>
        <StyledDocument
          file={work?.file?.url}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <StyledPage
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={800}
            />
          ))}
        </StyledDocument>
      </BodyContainer>
    </Container>
  )
}

export default ProtectedModule(ViewWork)
