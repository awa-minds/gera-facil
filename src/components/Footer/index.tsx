import DynamicLink from '../DynamicLink'

const Footer = () => {
  return (
    <footer className="flex min-w-[220px] flex-col p-6">
      <div className="menu-footer flex flex-wrap justify-center gap-5 border-t border-primary py-6 text-sm">
        <DynamicLink href="/">Principal</DynamicLink>
        <DynamicLink href="/geradores">Geradores</DynamicLink>
        <DynamicLink href="/validadores">Validadores</DynamicLink>
        <DynamicLink href="/politicas-de-privacidade">
          Políticas de Privacidade
        </DynamicLink>
        <DynamicLink href="/termos-de-uso">Termos de Uso</DynamicLink>
        <DynamicLink href="/contato">Fale Conosco</DynamicLink>
      </div>

      <div className="flex justify-center text-xs text-awa-300">
        Copyright © {new Date().getFullYear()} - Gerafácil
      </div>
    </footer>
  )
}

export default Footer
