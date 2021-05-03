import { createGlobalStyle } from 'styled-components'

import * as BootstrapOverrides from './bootstrap'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    color:  ${({ theme }) => theme.colors.black};
    font-size: 16px;
  }

  ::selection {
  color:${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.green};
}

  #__next{
    a {
      text-decoration: none;
    }

    ${Object.values(BootstrapOverrides)}
  }

`
