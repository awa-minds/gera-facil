import { useEffect, ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import { BsChevronLeft } from 'react-icons/bs'
import { CgMenu } from 'react-icons/cg'
import { Inter } from 'next/font/google'

import * as gtag from '../lib/gtag'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [sidebarVisible, setSidebarVisible] = useState(false)

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }

    if (router) {
      router.events.on('routeChangeComplete', handleRouteChange)

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router])

  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} flex h-screen bg-primary font-sans text-white`}
      >
        <div
          className={`${
            sidebarVisible ? 'left-[288px] w-[321px]' : 'left-[18px] w-[50px]'
          } absolute top-[18px] z-[999] md:hidden`}
        >
          <div
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-secondary"
            onClick={() => setSidebarVisible(!sidebarVisible)}
          >
            {sidebarVisible ? <BsChevronLeft /> : <CgMenu />}
          </div>
        </div>

        {typeof window !== 'undefined' && (
          <div
            className={`fixed z-[998] h-full w-[305px] ${
              sidebarVisible ? 'block' : 'hidden'
            } md:relative md:block`}
          >
            <Sidebar />
          </div>
        )}

        <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-awa-400">
          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-grow p-6">{children}</main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
