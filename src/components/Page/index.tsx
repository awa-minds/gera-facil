'use client'

import { ReactNode } from 'react'

type PageProps = {
  children: ReactNode
  title: string
  subtitle: string
  description: string
}

const Page = ({ children, title, subtitle, description }: PageProps) => {
  return (
    <div className="page">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>

      <div className="page-content">{children}</div>
    </div>
  )
}

export default Page
