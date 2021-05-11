/* eslint-disable multiline-ternary */

import Link from 'next/link'
import { Document, Page, pdfjs } from 'react-pdf'

import Text from '../Text'
import { Container } from './styles'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

interface LibraryWorkProps {
  id: string
  title: string
  url: string
}

const LibraryWork: React.FC<LibraryWorkProps> = ({ id, title, url }) => {
  return (
    <Link href={`/work/${id}`}>
      <Container>
        <Text fontWeight={700} size={'text.md'}>
          {title}
        </Text>
        <Document file={url}>
          <Page pageNumber={1} width={250} />
        </Document>
      </Container>
    </Link>
  )
}

export default LibraryWork
