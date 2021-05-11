import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const StyledInput = styled.textarea`
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 5px;

  :focus {
    outline: none;
  }
`
