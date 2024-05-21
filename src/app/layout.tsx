'use client'

import { Global, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Popup } from '@/components'
import { useDarkModeStore } from '@/store'
import { global, theme } from '@/styles'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()

  const { isDarkMode } = useDarkModeStore()

  return (
    <html lang="ko">
      <head>
        <base href="/" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme(isDarkMode ? 'dark' : 'light')}>
            <Container>
              <Global styles={global} />
              <Popup />

              {children}

              <ReactQueryDevtools initialIsOpen={false} />
            </Container>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}

export default RootLayout

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.color.background};
`
