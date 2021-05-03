import { useMediaQuery } from 'react-responsive'

import { SizeBreakpoints } from '@/types'
export default function useSize(): SizeBreakpoints {
  const isSmall = useMediaQuery({ query: '(min-width: 576px)' })
  const isMedium = useMediaQuery({ query: '(min-width: 768px)' })
  const isLarge = useMediaQuery({ query: '(min-width: 992px)' })
  const isExtraLarge = useMediaQuery({ query: '(min-width: 1200px)' })
  const isExtraExtraLarge = useMediaQuery({ query: '(min-width: 1400px)' })

  if (isExtraExtraLarge) return 'xxl'
  if (isExtraLarge) return 'xl'
  if (isLarge) return 'lg'
  if (isMedium) return 'md'
  if (isSmall) return 'sm'

  return 'xs'
}
