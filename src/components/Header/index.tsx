import DynamicLink from '../DynamicLink'

const Header = () => {
  return (
    <header className="flex justify-between p-6">
      <div />

      <div className="menu-header flex flex-wrap items-center justify-center gap-5 text-sm">
        <DynamicLink href="/">Principal</DynamicLink>
        <DynamicLink href="/geradores">Geradores</DynamicLink>
        <DynamicLink href="/validadores">Validadores</DynamicLink>
        <div className="hidden h-6 border-l-2 border-primary md:block"></div>
        <DynamicLink href="/contato">Contato</DynamicLink>
      </div>
    </header>
  )
}

export default Header
