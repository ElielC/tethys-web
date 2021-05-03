import { SizeBreakpoints } from '@/types'

import useSize from './useSize'

type SizeSelectorParam<T> = {
  [key in SizeBreakpoints]?: T
}

export default function useSizeSelector<T = string>(
  selector: SizeSelectorParam<T>,
  defaultValue: T
): T {
  const size = useSize()

  const selected = selector[size]

  return selected ?? defaultValue
}
