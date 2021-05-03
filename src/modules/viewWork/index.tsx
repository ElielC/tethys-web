/* eslint-disable prefer-spread */
import { useState } from 'react'
import { pdfjs } from 'react-pdf/'

import Header from '@/components/Header'

import { Container, BodyContainer, StyledDocument, StyledPage } from './styles'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const ViewWork: React.FC = () => {
  const [numPages, setNumPages] = useState(null)

  return (
    <Container>
      <Header page="Work Title" />

      <BodyContainer>
        <StyledDocument
          file={'/assets/example.pdf'}
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

export default ViewWork
