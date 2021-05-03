import { light } from '@/styles/theme'
import 'styled-components'

declare module 'styled-components' {
  export type ThemeType = typeof light

  export interface DefaultTheme extends ThemeType {}
}
