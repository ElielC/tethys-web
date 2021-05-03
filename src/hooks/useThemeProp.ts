import { DefaultTheme, useTheme } from 'styled-components'

export default function useThemeProp<
  P extends keyof DefaultTheme,
  K extends keyof DefaultTheme[P]
>(prop: P, key: K): DefaultTheme[P][K] {
  const theme = useTheme()
  return theme[prop][key]
}
