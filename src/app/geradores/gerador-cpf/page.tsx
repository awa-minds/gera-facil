/* eslint-disable react/no-unescaped-entities */
import { CPFGenerator } from './CPFGenerator'

export const metadata = {
  title: 'Gerador de CPF Online | GeraFácil',
  description:
    'Gere CPFs válidos rapidamente com o GeraFácil, uma ferramenta online gratuita para gerar números de CPF. Experimente agora e obtenha CPFs válidos de forma rápida e fácil.',
  keywords:
    'gerador de CPF, gerador de CPF online, CPF válido, número de CPF, GeraFácil, ferramenta online, gerador de dados, gerador de dados online, gerador de cpf com dados, gerador e validador de cpf, geradores de cpf, cpf gerador online',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com/geradores/gerador-cpf',
}

export default function GeradorDeCPFPage() {
  return (
    <div className="page">
      <h1>Gerador de CPF</h1>
      <h2>Gere CPFs Válidos Instantaneamente com o Gerador de CPF Online</h2>
      <p>
        Clique no botão 'Gerar CPF' agora mesmo e obtenha números de CPF
        aleatórios e válidos de maneira instantânea.
      </p>

      <div className="page-content">
        <CPFGenerator />
      </div>
    </div>
  )
}
