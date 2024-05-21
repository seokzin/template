const gray = {
  white: '#FFFFFF',
  gray50: '#F6F6F6',
  gray100: '#EEEEEE',
  gray200: '#E2E2E2',
  gray300: '#CBCBCB',
  gray400: '#AFAFAF',
  gray500: '#757575',
  gray600: '#545454',
  gray700: '#333333',
  gray800: '#1F1F1F',
  gray900: '#141414',
  black: '#000000',
}

const magenta = {
  magenta50: '#FEF1F9',
  magenta100: '#FEE5F5',
  magenta200: '#FFCAED',
  magenta300: '#FF9FDB',
  magenta400: '#FF63C1',
  magenta500: '#FF27A0',
  magenta600: '#F01284',
  magenta700: '#D10568',
  magenta800: '#AD0755',
  magenta900: '#8F0C4A',
  magenta950: '#580028',
}

const purple = {
  purple50: '#F5F2FF',
  purple100: '#ECE8FF',
  purple200: '#DAD4FF',
  purple300: '#C1B1FF',
  purple400: '#A285FF',
  purple500: '#7E49FF',
  purple600: '#7630F7',
  purple700: '#681EE3',
  purple800: '#5718BF',
  purple900: '#48169C',
  purple950: '#2C0B6A',
}

const blue = {
  blue50: '#EDFAFF',
  blue100: '#D6F1FF',
  blue200: '#A0BFF9',
  blue300: '#83DCFF',
  blue400: '#48C7FF',
  blue500: '#1EA7FF',
  blue600: '#0689FF',
  blue700: '#0075FF',
  blue800: '#0859C5',
  blue900: '#0D4E9B',
  blue950: '#0E305D',
}

const green = {
  green50: '#E8FFE4',
  green100: '#CBFFC5',
  green200: '#9AFF92',
  green300: '#5BFF53',
  green400: '#24FB20',
  green500: '#00DD00',
  green600: '#00B505',
  green700: '#028907',
  green800: '#086C0C',
  green900: '#0C5B11',
  green950: '#003305',
}

const yellow = {
  yellow50: '#FFFFE7',
  yellow100: '#FEFFC1',
  yellow200: '#FFFD86',
  yellow300: '#FFF441',
  yellow400: '#FFE50D',
  yellow500: '#FFD600',
  yellow600: '#D19D00',
  yellow700: '#A67102',
  yellow800: '#89570A',
  yellow900: '#74470F',
  yellow950: '#442504',
}

const orange = {
  orange50: '#FFFAEC',
  orange100: '#FFF3D3',
  orange200: '#FFE3A5',
  orange300: '#FFCE6D',
  orange400: '#FFAD32',
  orange500: '#FF920A',
  orange600: '#FF7A00',
  orange700: '#CC5802',
  orange800: '#A1440B',
  orange900: '#823A0C',
  orange950: '#461B04',
}

const red = {
  red50: '#FFF2F1',
  red100: '#FFE1DF',
  red200: '#FFC8C5',
  red300: '#FFA29D',
  red400: '#FFA29D',
  red500: '#FF2C20',
  red600: '#ED2115',
  red700: '#C8170D',
  red800: '#A5170F',
  red900: '#881A14',
  red950: '#4B0804',
}

const brown = {
  brown50: '#FBF6EF',
  brown100: '#F3E5D2',
  brown200: '#E5C9A2',
  brown300: '#D8A971',
  brown400: '#CF8E50',
  brown500: '#C5733B',
  brown600: '#B95E35',
  brown700: '#91412C',
  brown800: '#773529',
  brown900: '#622D25',
  brown950: '#371511',
}

const platinum = {
  platinum50: '#F4F8FB',
  platinum100: '#E8F0F6',
  platinum200: '#CCDFEB',
  platinum300: '#9FC6DA',
  platinum400: '#81B4CD',
  platinum500: '#498DAE',
  platinum600: '#377192',
  platinum700: '#2D5B77',
  platinum800: '#294E63',
  platinum900: '#264254',
  platinum950: '#192B38',
}

const palette = {
  ...gray,
  ...magenta,
  ...purple,
  ...blue,
  ...green,
  ...yellow,
  ...orange,
  ...red,
  ...brown,
  ...platinum,
}

const light = {
  // Background
  background: palette.white,
  popup: palette.gray100,

  // Text
  text_primary: palette.black,
}

const dark = {
  // Background
  background: palette.black,
  popup: palette.gray900,

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
