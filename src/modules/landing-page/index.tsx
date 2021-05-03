import Link from 'next/link'
import { Button, Col, Row } from 'react-bootstrap'

import Layout from '@/modules/layouts/LandingPage'

import { HomeDraw, MainContainer, ImageContainer } from './styles'

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <MainContainer>
        <div className="mb-4">
          <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Link href="/login">
                <Button size="lg" className="w-100 mb-2">
                  Start Now
                </Button>
              </Link>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Link href="/login">
                <Button size="lg" className="w-100" variant="outline-primary">
                  Login
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </MainContainer>
      <ImageContainer>
        <HomeDraw src="/assets/landing-page-draw.svg" />
      </ImageContainer>
    </Layout>
  )
}

export default LandingPage
