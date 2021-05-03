import { createButton, createSvgIcon } from 'react-social-login-buttons'

import Header from '@/components/Header'
import Text from '@/components/Text'

import FacebookLogo from './facebook-icon.svg'
import GoogleLogo from './google-icon.svg'
import { Container, LoginContainer } from './styles'

const GoogleLoginButton = createButton({
  text: 'Log in with Google',
  icon: createSvgIcon(GoogleLogo),
  iconFormat: name => `fa fa-${name}`,
  style: { background: '#ffffff', textAlign: 'center', color: '#757575' },
  activeStyle: { boxShadow: '0 0 5px blue' }
})

const FacebookLoginButton = createButton({
  text: 'Log in with Facebook',
  icon: createSvgIcon(FacebookLogo),
  iconFormat: name => `fa fa-${name}`,
  style: { background: '#0b57bb', textAlign: 'center', color: '#fff' },
  activeStyle: { background: '#1064d4' }
})

const Login: React.FC = () => {
  return (
    <Container>
      <Header page="Login" />

      <LoginContainer>
        <Text fontWeight={700} size={'title.sm'}>
          Login
        </Text>
        <GoogleLoginButton onClick={() => console.log('here')} />
        <FacebookLoginButton />
      </LoginContainer>
    </Container>
  )
}

export default Login
