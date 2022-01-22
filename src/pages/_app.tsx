import type { AppProps } from 'next/app'

import Head from 'next/head'

import {
  ThemeProvider,
  Preflight,
  ColorModeProvider
} from '@xstyled/styled-components'

import { DefaultSeo } from 'next-seo'
import { SEO } from '../../next-seo.config'

import NextNProgress from 'nextjs-progressbar'

import { theme } from 'styles/theme'
import { GlobalStyles } from 'styles/global'

const AppPage = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />

        <GlobalStyles />

        <Head>
          <title>xStyled UI</title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta name="description" content="xStyled UI" />
        </Head>

        <DefaultSeo {...SEO} />

        <NextNProgress
          color="#f43f5e"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />

        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default AppPage
