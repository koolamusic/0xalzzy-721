import React from 'react'
import { NextPage } from 'next'
import { WagmiProvider } from 'wagmi'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactElement
}

type Props = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: React.ReactElement) => page)
  return (
    <WagmiProvider>
      <ChakraProvider>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </WagmiProvider>
  )
}

export default MyApp
