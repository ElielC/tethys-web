import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 70px;
  margin-left: 1rem;
  justify-content: space-between;
  height: 100%;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.5;
  max-width: 50%;
  height: 100%;
`

export const CoverContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 50%;
`

export const DescriptionContainer = styled.div`
  max-width: 70%;
`

export const PreviewContainer = styled.div`
  width: 80%;
  height: 34rem;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.green};
`

export const ButtonGroup = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-around;
`

export const ReadButton = styled(Button)`
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

export const SaveButton = styled(Button)`
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

export const Line = styled.div`
  border-top: 3px solid ${({ theme }) => theme.colors.green};
  width: 240px;
  margin-top: -20px;
  margin-bottom: 10px;
`
