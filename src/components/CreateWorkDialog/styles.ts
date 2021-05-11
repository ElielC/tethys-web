import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.green};
  padding: 0 2rem;
  height: 58px;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  position: fixed;
`

export const Line = styled.div`
  border-left: 3px solid ${({ theme }) => theme.colors.black};
  height: 45px;
  margin-left: 10px;
  margin-right: 10px;
`
export const Spacer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const OkButton = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.green};
  border-color: ${({ theme }) => theme.colors.green};
  font-weight: 500;

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

export const CancelButton = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.orange};
  border-color: ${({ theme }) => theme.colors.orange};
  font-weight: 500;

  :hover {
    filter: opacity(90%);
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.orange};
    border-color: ${({ theme }) => theme.colors.orange};
  }

  &&&&:focus {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.orange};
    border-color: ${({ theme }) => theme.colors.orange};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.orange};
  }
`
