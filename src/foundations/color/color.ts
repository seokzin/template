const gray = {
  white: '#FFFFFF',
  black: '#000000',
}

const palette = {
  ...gray,
}

const light = {
  // Background
  background: palette.white,

  // Text
  text_primary: palette.black,
}

const dark = {
  // Background
  background: palette.black,

  // Text
  text_primary: palette.white,
}

const color = {
  light,
  dark,
}

export type ColorKey = keyof typeof color.light
export type Color = Record<ColorKey, string>

export default color
