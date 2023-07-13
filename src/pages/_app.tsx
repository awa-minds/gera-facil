import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import React, { useEffect } from 'react'

type AppProps = {
  Component: React.ComponentType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
