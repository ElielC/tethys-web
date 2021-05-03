import { Document, Page } from 'react-pdf/'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const StyledDocument = styled(Document)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledPage = styled(Page)`
  max-width: calc('100% - 2em');
  margin: 1em;

  canvas {
    max-width: 100%;
    height: auto !important;
  }
`

export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;
`
