import '@emotion/react'

import type { Color, Typography } from '@/foundations'

declare module '@emotion/react' {
  export interface Theme {
    color: Color
    typography: Typography
  }
}
