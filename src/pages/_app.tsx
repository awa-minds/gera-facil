import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag' // Certifique-se de ter o arquivo 'gtag.ts' ou 'gtag.js' no diretório 'lib'

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
