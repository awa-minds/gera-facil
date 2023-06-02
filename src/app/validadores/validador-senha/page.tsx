/* eslint-disable react/no-unescaped-entities */
import { PasswordValidator } from './PasswordValidator'

export const metadata = {
  title: 'Validador de Senha Online | GeraFácil',
  description:
    'Gere CPFs válidos rapidamente com o GeraFácil, uma ferramenta online gratuita para gerar números de CPF. Experimente agora e obtenha CPFs válidos de forma rápida e fácil.',
  keywords:
    'gerador de CPF, gerador de CPF online, CPF válido, número de CPF, GeraFácil, ferramenta online, gerador de dados, gerador de dados online, gerador de cpf com dados, gerador e validador de cpf, geradores de cpf, cpf gerador online',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com/geradores/gerador-cpf',
}

export default function ValidadorDeSenhaPage() {
  return (
    <div className="page">
      <h1>Validador de Senha</h1>
      <h2>Valide se a sua senha está realmente segura.</h2>
      <p>
        Digite a sua senha abaixo e se adeque com as melhores práticas de
        segurança para senhas.
      </p>

      <div className="page-content">
        <PasswordValidator />
      </div>
    </div>
  )
}
