import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #bbf2d8;
  padding: 0 2rem;
  height: 100%;
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  padding-top: 70px;
  padding-bottom: 20px;
  position: fixed;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10rem;
  width: 100%;
`

export const Spacer = styled.div`
  height: 100%;
`

export const MenuButton = styled(Button)`
  width: 90%;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.green};
  border-color: ${({ theme }) => theme.colors.green};
  font-weight: 500;
  z-index: 1;

  :hover {
    filter: opacity(80%);
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
