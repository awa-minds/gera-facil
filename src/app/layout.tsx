import Footer from 'components/Footer'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Home | Gera Fácil',
  description: 'Geradores e validadores',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} flex h-screen bg-primary font-sans text-white`}
      >
        <Sidebar />

        <div className="flex-grow overflow-y-auto">
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
