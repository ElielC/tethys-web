/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf/'

import { api } from '@/api'
import Header from '@/components/Header'
import Text from '@/components/Text'
import { faBookOpen, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ProtectedModule from '../protectedModule'
import {
  Container,
  BodyContainer,
  InfoContainer,
  Line,
  DescriptionContainer,
  ButtonGroup,
  ReadButton,
  SaveButton,
  PreviewContainer,
  CoverContainer
} from './styles'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Home: React.FC = () => {
  const router = useRouter()

  const [work, setWork] = useState(null)

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
      <Header page="Work" />

      <BodyContainer>
        <InfoContainer>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Text fontWeight={550} size="title.md">
              {work?.title}
            </Text>
            <div style={{ width: '0.5rem' }} />
            <Text fontWeight={550} size="text.lg">
              {work?.user.name}
            </Text>
          </div>
          <Line />
          <Text size="text.lg">Description:</Text>
          <DescriptionContainer>
            <Text
              style={{ wordBreak: 'break-word', marginTop: '-10px' }}
              size="text.sm"
            >
              {work?.description}
            </Text>
          </DescriptionContainer>
          <ButtonGroup>
            <Link href={`/view-work/${work?.id}`}>
              <ReadButton>
                Read <FontAwesomeIcon icon={faBookOpen} />
              </ReadButton>
            </Link>

            <SaveButton>
              Save <FontAwesomeIcon icon={faSave} />
            </SaveButton>
          </ButtonGroup>
          <PreviewContainer>
            <Document file={work?.file.url}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ marginLeft: '0.5rem', marginTop: '0.5rem' }}>
                  <Page pageNumber={2} width={250} />
                </div>
                <div style={{ marginRight: '0.5rem', marginTop: '0.5rem' }}>
                  <Page pageNumber={3} width={250} />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly'
                }}
              >
                <div style={{ marginTop: '0.5rem' }}>
                  <Page pageNumber={4} width={150} />
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <Page pageNumber={5} width={150} />
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <Page pageNumber={6} width={150} />
                </div>
              </div>
            </Document>
          </PreviewContainer>
        </InfoContainer>
        <CoverContainer>
          <Document file={work?.file.url}>
            <Page pageNumber={1} width={600} />
          </Document>
        </CoverContainer>
      </BodyContainer>
    </Container>
  )
}

export default ProtectedModule(Home)
