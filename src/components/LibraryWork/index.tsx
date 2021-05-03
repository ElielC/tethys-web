/* eslint-disable multiline-ternary */

import { Document, Page, pdfjs } from 'react-pdf'

import Text from '../Text'
import { Container } from './styles'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

interface LibraryWorkProps {
  id: string
  title: string
  url: string
}

const LibraryWork: React.FC<LibraryWorkProps> = ({ title, url }) => {
  return (
    <Container>
      <Text fontWeight={700} size={'text.md'}>
        {title}
      </Text>
      <Document file={url}>
        <Page pageNumber={1} width={250} />
      </Document>
    </Container>
  )
}

export default LibraryWork
