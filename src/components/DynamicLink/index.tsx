'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type DynamicLinkProps = {
  children: ReactNode
} & LinkProps

const DynamicLink = ({ children, href, ...rest }: DynamicLinkProps) => {
  const pathname = usePathname()
  const isCurrentPath =
    pathname === href ||
    pathname === rest.as ||
    pathname?.startsWith(String(rest.as))

  return (
    <Link
      {...rest}
      href={href}
      className={`menu-link ${isCurrentPath ? 'menu-active' : ''}`}
    >
      {children}
    </Link>
  )
}

export default DynamicLink
