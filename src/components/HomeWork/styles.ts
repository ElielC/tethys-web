import styled from 'styled-components'

export const Container = styled.div`
  max-width: 50%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  padding-right: 0.4rem;
  box-shadow: 0px 1px 5px ${({ theme }) => theme.colors.green};
`
