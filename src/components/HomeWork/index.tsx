/* eslint-disable multiline-ternary */
import Link from 'next/link'
import { pdfjs, Document, Page } from 'react-pdf/'
import { useTheme } from 'styled-components'

import Text from '../Text'
import { Container } from './styles'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

interface HomeWorkProps {
  id: string
  title: string
  author: string
  description: string
  url: string
}

const HomeWork: React.FC<HomeWorkProps> = ({
  id,
  title,
  author,
  description,
  url
}) => {
  return (
    <Link href={`/work/${id}`}>
      <Container>
        <Document file={url}>
          <Page pageNumber={1} height={180} />
        </Document>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '10px'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Text size="title.md">{title}</Text>
            <Text size="text.md">{author}</Text>
          </div>

          {description.length > 140 ? (
            <div style={{ wordBreak: 'break-word' }}>
              {`${description.substring(0, 140)}...`}
              <a style={{ color: `${useTheme().colors.darkGreen}` }}>
                {' '}
                Read more
              </a>
            </div>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </Container>
    </Link>
  )
}

export default HomeWork
