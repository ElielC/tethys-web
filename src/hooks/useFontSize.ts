import { DefaultTheme } from 'styled-components'

import useThemeProp from './useThemeProp'

export default function useFontSize(
  fontSize: keyof DefaultTheme['fontSize']
): string {
  return useThemeProp('fontSize', fontSize)
}
