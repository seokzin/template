import { css } from '@emotion/react'

import reset from './reset'

const global = css`
  @font-face {
    font-family: 'Pretendard Variable';
    font-weight: 400 500 600 700;
    src: url('fonts/PretendardVariable.woff2') format('woff2');
  }

  a {
    text-decoration: none;
  }

  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard Variable', Pretendard, Roboto,
      'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }
`

export default global
