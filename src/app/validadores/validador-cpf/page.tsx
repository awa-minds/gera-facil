/* eslint-disable react/no-unescaped-entities */
import { CPFValidator } from './CPFValidator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Validador de CPF Online | GeraFácil',
  description:
    'Valide CPFs rapidamente com o GeraFácil, uma ferramenta online gratuita para validar números de CPF. Experimente agora e valide CPFs de forma rápida e fácil.',
  keywords:
    'validador de CPF, validador de CPF online, CPF válido, número de CPF, GeraFácil, ferramenta online, validador de dados, validador de dados online, validador de cpf com dados, gerador e validador de cpf, validadores de cpf, cpf validador online',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/validadores/validador-cpf',
}

export default function ValidadorDeCPFPage() {
  return (
    <Page
      title="Validador de CPF"
      subtitle="Valide se o número de CPF é válido."
      description="Digite o CPF abaixo e verifique se é um CPF válido ou não de acordo com as regras da Receita Federal."
    >
      <div className="page-content">
        <CPFValidator />
      </div>
    </Page>
  )
}
