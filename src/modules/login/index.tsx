/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRef, useState } from 'react'
import * as Yup from 'yup'

import Header from '@/components/Header'
import Input from '@/components/Input'
import Text from '@/components/Text'
import ApiStatus from '@/enums/ApiStatus'
import useAuthContext from '@/hooks/useAuthContext'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import {
  Container,
  GoButton,
  LoginContainer,
  RegisterContainer,
  BodyContainer
} from './styles'

const emailValidation = Yup.string()
  .email('Email Inválido')
  .required('Informe o email')

const passwordValidation = Yup.string()
  .max(20, 'A senha deve conter no máximo 20 caracteres')
  .min(5, 'A senha deve conter no mínimo 5 caracteres')
  .required('Informe a senha')

const Login: React.FC = () => {
  const loginRef = useRef<FormHandles>()
  const registerRef = useRef<FormHandles>()

  const { logIn } = useAuthContext()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [regEmail, setRegEmail] = useState('')
  const [regpassword, setRegPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function dumySubmit() {
    console.log('here')
  }

  async function handleLogin() {
    try {
      loginRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: emailValidation,
        password: passwordValidation
      })

      await schema.validate({ email, password }, { abortEarly: false })
      const status = await logIn(email, password)
      if (status === ApiStatus.HTTP_200_OK) {
        console.log('ok')
      }
    } catch (error) {
      const validationErrors = {}

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(error => {
          validationErrors[error.path!] = error.message
        })

        loginRef.current?.setErrors(validationErrors)
      }
    }
  }

  return (
    <Container>
      <Header page="Login" />

      <BodyContainer>
        <LoginContainer>
          <Form
            ref={loginRef}
            onSubmit={handleLogin}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Text fontWeight={700} size={'title.sm'}>
              Login
            </Text>
            <Input
              name="email"
              label="E-mail:"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              name="password"
              label="Password:"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <GoButton type="submit">GO</GoButton>
          </Form>
        </LoginContainer>
        <RegisterContainer>
          <Form
            ref={registerRef}
            onSubmit={dumySubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Text fontWeight={700} size={'title.sm'}>
              Register
            </Text>
            <Input name="email" label="E-mail:" />
            <Input name="password" label="Password:" type="password" />
            <Input
              name="confirmPassword"
              label="Confirm Password:"
              type="password"
            />
            <GoButton>GO</GoButton>
          </Form>
        </RegisterContainer>
      </BodyContainer>
    </Container>
  )
}

export default Login
