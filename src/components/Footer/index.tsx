import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="px-6 text-center">
      <div className="flex justify-center gap-5 border-t border-primary py-4 text-sm">
        <Link href="/">Principal</Link>
        <Link href="/">Geradores</Link>
        <Link href="/">Validadores</Link>
        <Link href="/">Utilidades</Link>
        <Link href="/">Política de Privacidade</Link>
        <Link href="/">Termos de Uso</Link>
        <Link href="/">Fale Conosco</Link>
      </div>

      <div className="py-4 text-xs">Copyright © 2023 - Gerafácil</div>
    </footer>
  )
}

export default Footer
