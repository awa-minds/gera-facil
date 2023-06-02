import logo from '../../assets/images/logo.png'
import DynamicLink from '../DynamicLink'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div
      className={`sidebar h-full w-[305px] flex-shrink-0 overflow-y-auto bg-secondary p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-awa-400`}
    >
      <DynamicLink href="/">
        <Image src={logo} alt="Gerafácil" priority={true} />
      </DynamicLink>

      <div>
        <span>Geradores</span>
        <DynamicLink href="/geradores/gerador-senha">
          Gerador de Senha
        </DynamicLink>
        <DynamicLink href="/geradores/gerador-cpf">Gerador de CPF</DynamicLink>
        <DynamicLink href="/geradores/gerador-cnh">Gerador de CNH</DynamicLink>
        <DynamicLink href="/geradores/gerador-pis">Gerador de PIS</DynamicLink>
        <DynamicLink href="/geradores/gerador-cnpj">
          Gerador de CNPJ
        </DynamicLink>
        <DynamicLink href="/geradores/gerador-qrcode">
          Gerador de QRCode
        </DynamicLink>
      </div>

      <div>
        <span>Validadores</span>
        <DynamicLink href="/validadores/validador-senha">
          Validador de Senha
        </DynamicLink>
        <DynamicLink href="#">Validador de CPF</DynamicLink>
        <DynamicLink href="#">Validador de CNH</DynamicLink>
        <DynamicLink href="#">Validador de PIS</DynamicLink>
        <DynamicLink href="#">Validador de CNPJ</DynamicLink>
        <DynamicLink href="#">Validador de QRCode</DynamicLink>
      </div>
    </div>
  )
}

export default Sidebar
