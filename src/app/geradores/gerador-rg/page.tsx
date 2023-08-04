/* eslint-disable react/no-unescaped-entities */
import { RGGenerator } from './RGGenerator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Gerador de RG Online | GeraFácil',
  description:
    'Gere CPFs válidos rapidamente com o GeraFácil, uma ferramenta online gratuita para gerar números de CPF. Experimente agora e obtenha CPFs válidos de forma rápida e fácil.',
  keywords:
    'gerador de CPF, gerador de CPF online, CPF válido, número de CPF, GeraFácil, ferramenta online, gerador de dados, gerador de dados online, gerador de cpf com dados, gerador e validador de cpf, geradores de cpf, cpf gerador online',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/geradores/gerador-rg',
}

export default function GeradorDeCPFPage() {
  return (
    <Page
      title="Gerador de RG"
      subtitle="Gere RGs Válidos Instantaneamente com o Gerador de RG Online"
      description="Clique no botão 'Gerar RG' agora mesmo e obtenha números de RG
        aleatórios e válidos de maneira instantânea."
    >
      <div className="page-content">
        <RGGenerator />
      </div>
    </Page>
  )
}
