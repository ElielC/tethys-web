import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  margin-top: 70px;
  justify-content: space-between;
  height: 100%;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  border-left: 6px solid ${({ theme }) => theme.colors.green};
`

export const GoButton = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.green};
  border-color: ${({ theme }) => theme.colors.green};
  font-weight: 500;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  :hover {
    filter: opacity(90%);
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green};
  }

  &&&&:focus {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.green};
  }
`
