import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-between p-6">
      <div>Header</div>

      <div className="flex items-center justify-center gap-5 text-sm">
        <Link href="/">Principal</Link>
        <Link href="/">Geradores</Link>
        <Link href="/">Validadores</Link>
        <div className="h-6 border-l-2 border-primary"></div>
        <Link href="/">Contato</Link>
      </div>
    </header>
  )
}

export default Header
