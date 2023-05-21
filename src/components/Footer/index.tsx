import DynamicLink from '../DynamicLink'

const Footer = () => {
  return (
    <footer className="flex flex-col px-6">
      <div className="menu-footer flex justify-center gap-5 border-t border-primary py-4 text-sm">
        <DynamicLink href="/">Principal</DynamicLink>
        <DynamicLink href="/geradores">Geradores</DynamicLink>
        <DynamicLink href="/validadores">Validadores</DynamicLink>
        <DynamicLink href="/politicas-de-privacidade">
          Políticas de Privacidade
        </DynamicLink>
        <DynamicLink href="/termos-de-uso">Termos de Uso</DynamicLink>
        <DynamicLink href="/contato">Fale Conosco</DynamicLink>
      </div>

      <div className="flex justify-center py-4 text-xs">
        Copyright © {new Date().getFullYear()} - Gerafácil
      </div>
    </footer>
  )
}

export default Footer
