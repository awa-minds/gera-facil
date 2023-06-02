'use client'

import Link from 'next/link'

type CardPlusProps = {
  href: string
  title: string
}

const CardPlus = ({ title, href, ...rest }: CardPlusProps) => {
  return (
    <Link {...rest} href={href}>
      <div className="rounded-lg bg-awa-400 p-6 text-center text-white transition-colors duration-500 hover:bg-awa-100">
        {title}
      </div>
    </Link>
  )
}

export default CardPlus
