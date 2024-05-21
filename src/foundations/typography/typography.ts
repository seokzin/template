const fontSize = {
  900: 40,
  800: 36,
  700: 32,
  600: 28,
  500: 24,
  400: 20,
  300: 16,
  200: 14,
  100: 12,
}

const lineHeight = {
  900: 52,
  800: 46,
  700: 42,
  600: 38,
  500: 34,
  400: 28,
  300: 24,
  200: 20,
  100: 18,
}

const fontWeight = {
  bold: 700,
  semiBold: 600,
  medium: 500,
  regular: 400,
}

const typography = {
  h1: {
    fontSize: fontSize[900],
    lineHeight: lineHeight[900],
    fontWeight: fontWeight.bold,
  },
  h2: {
    fontSize: fontSize[800],
    lineHeight: lineHeight[800],
    fontWeight: fontWeight.bold,
  },
  h3: {
    fontSize: fontSize[700],
    lineHeight: lineHeight[700],
    fontWeight: fontWeight.bold,
  },
  h4: {
    fontSize: fontSize[600],
    lineHeight: lineHeight[600],
    fontWeight: fontWeight.bold,
  },
  h5: {
    fontSize: fontSize[500],
    lineHeight: lineHeight[500],
    fontWeight: fontWeight.bold,
  },
  body1: {
    fontSize: fontSize[300],
    lineHeight: lineHeight[300],
    fontWeight: fontWeight.regular,
  },
  body2: {
    fontSize: fontSize[200],
    lineHeight: lineHeight[200],
    fontWeight: fontWeight.regular,
  },
}

export type TypographyKey = keyof typeof typography

export type Typography = Record<
  TypographyKey,
  {
    fontSize: number
    lineHeight: number
    fontWeight: number
  }
>

export default typography
