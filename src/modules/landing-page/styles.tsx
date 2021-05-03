import styled from 'styled-components'

export const HomeDraw = styled.img`
  width: 100%;
  max-width: 700px;
  align-self: center;
  justify-content: center;
`

export const MainContainer = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (min-width: 992px) {
    max-width: 400px;
  }
`

export const ImageContainer = styled.aside`
  grid-area: aside;
  display: flex;
  align-items: center;
  justify-content: center;
`
