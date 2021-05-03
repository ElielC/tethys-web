/* eslint-disable react/no-unescaped-entities */
import { pdfjs, Document, Page } from 'react-pdf/'

import Header from '@/components/Header'
import Text from '@/components/Text'
import { faBookOpen, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
              Work Title
            </Text>
            <div style={{ width: '0.5rem' }} />
            <Text fontWeight={550} size="text.lg">
              By Author's name
            </Text>
          </div>
          <Line />
          <Text size="text.lg">Description:</Text>
          <DescriptionContainer>
            <Text
              style={{ wordBreak: 'break-word', marginTop: '-10px' }}
              size="text.sm"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </DescriptionContainer>
          <ButtonGroup>
            <ReadButton>
              Read <FontAwesomeIcon icon={faBookOpen} />
            </ReadButton>
            <SaveButton>
              Save <FontAwesomeIcon icon={faSave} />
            </SaveButton>
          </ButtonGroup>
          <PreviewContainer>
            <Document file={'/assets/example.pdf'}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ marginLeft: '0.5rem', marginTop: '0.5rem' }}>
                  <Page pageNumber={2} width={240} />
                </div>
                <div style={{ marginRight: '0.5rem', marginTop: '0.5rem' }}>
                  <Page pageNumber={3} width={240} />
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
          <Document file={'/assets/example.pdf'}>
            <Page pageNumber={1} />
          </Document>
        </CoverContainer>
      </BodyContainer>
    </Container>
  )
}

export default Home
