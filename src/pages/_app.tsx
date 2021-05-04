import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { AuthContextProvider } from '@/contexts/AuthContext'
import GlobalStyle from '@/styles/global'
import { light } from '@/styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <AuthContextProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
