import { DefaultTheme } from 'styled-components'

import useThemeProp from './useThemeProp'

export default function useColor(
  colorKey: keyof DefaultTheme['colors']
): string {
  return useThemeProp('colors', colorKey)
}
