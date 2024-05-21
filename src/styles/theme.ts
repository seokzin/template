import type { Theme } from '@emotion/react'

import { color, typography } from '../foundations'

const theme = (mode: 'light' | 'dark'): Theme => ({
  color: color[mode],
  typography,
})

export default theme
