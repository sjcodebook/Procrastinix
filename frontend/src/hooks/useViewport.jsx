import { useWindowSize } from 'react-use'

import { VIEWPORT } from '../utils/constants'

export const useViewport = () => {
  const { width } = useWindowSize()

  if (!width || width === Infinity) {
    return null
  }

  if (width > VIEWPORT.TABLET) {
    return 'desktop'
  }

  if (width > VIEWPORT.MOBILE) {
    return 'tablet'
  }

  return 'mobile'
}
