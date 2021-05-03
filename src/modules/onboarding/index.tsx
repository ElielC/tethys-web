import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'

import Badge from '@/components/Badge'
import QuestionStep from '@/components/QuestionStep'
import Search from '@/components/Search'
import Text from '@/components/Text'
import Wizard from '@/components/Wizard'
import OnBoardingLayout from '@/modules/layouts/OnBoarding'

import {
  OnBoardingDraw,
  ImageContainer,
  OnBoardingContainer,
  OccupationContainer,
  TechnologiesContainer
} from './styles'

const OnBoarding: React.FC = () => {
  const router = useRouter()

  const onFinishedWizard = () => router.push('/home')

  return (
    <OnBoardingLayout>
      <ImageContainer>
        <Text
          as="h2"
          size="title.md"
          colorKey="orange.200"
          className="mb-5 text-left"
        >
          Help us to personalize your experience
        </Text>
        <OnBoardingDraw src="/assets/onboarding-page-draw.svg" />
      </ImageContainer>
      <OnBoardingContainer>
        <Wizard onFinish={onFinishedWizard}>
          <QuestionStep message="What do you do?">
            <OccupationContainer>
              <Button size="lg" className="w-100" variant="outline-primary">
                Developer
              </Button>
              <Button size="lg" className="w-100" variant="outline-primary">
                Student
              </Button>
              <Button size="lg" className="w-100" variant="outline-primary">
                Enthusiastic
              </Button>
            </OccupationContainer>
          </QuestionStep>
          <QuestionStep message="Which technologies do you like?">
            <TechnologiesContainer>
              <Search />
              <div className="w-100 mt-5 pt-5 pb-5 d-flex justify-content-center align-items-center">
                <Badge className="mr-3">Java</Badge>
                <Badge>Node Js </Badge>
              </div>
            </TechnologiesContainer>
          </QuestionStep>
          <QuestionStep message="What do you want to focus on?">
            <div className="w-100 mt-5 pt-5 pb-5 d-flex justify-content-center align-items-center">
              <Badge className="mr-3">Java</Badge>
              <Badge outlined>Node Js </Badge>
            </div>
          </QuestionStep>
        </Wizard>
      </OnBoardingContainer>
    </OnBoardingLayout>
  )
}

export default OnBoarding
