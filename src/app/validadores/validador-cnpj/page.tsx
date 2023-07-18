/* eslint-disable react/no-unescaped-entities */
import { CNPJValidator } from './CNPJValidator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Validador de CNPJ Online | GeraFácil',
  description:
    'Valide o número do CNPJ rapidamente com o GeraFácil, uma ferramenta online gratuita para validar números de CNPJ. Experimente agora e valide números de CNPJ de forma rápida e fácil.',
  keywords:
    'validador de CNPJ, validador de CNPJ online, CNPJ válido, número de CNPJ, GeraFácil, ferramenta online, validador de dados, validador de dados online, validador de cnpj com dados, gerador e validador de cnpj, validadores de cnpj, cnpj validador online',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/validadores/validador-cnpj',
}

export default function ValidadorDeCNPJPage() {
  return (
    <Page
      title="Validador de CNPJ"
      subtitle="Valide se o número do CNPJ é válido."
      description="Digite o CNPJ abaixo e verifique se é um CNPJ válido ou não de acordo com as regras do Governo Federal."
    >
      <div className="page-content">
        <CNPJValidator />
      </div>
    </Page>
  )
}
