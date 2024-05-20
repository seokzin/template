'use client'

import styled from '@emotion/styled'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()

  return (
    <html lang="ko">
      <head>
        <base href="/" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          {/* <ThemeProvider theme={theme()}> */}
          <Container>
            {/* <Global styles={global} /> */}
            {children}

            <ReactQueryDevtools initialIsOpen={false} />
          </Container>
          {/* </ThemeProvider> */}
        </QueryClientProvider>
      </body>
    </html>
  )
}

export default RootLayout

const Container = styled.div`
  width: 100%;
`
