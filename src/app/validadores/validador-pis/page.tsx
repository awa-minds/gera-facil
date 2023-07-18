/* eslint-disable react/no-unescaped-entities */
import { PISValidator } from './PISValidator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Validador de PIS Online | GeraFácil',
  description:
    'Valide o número do PIS rapidamente com o GeraFácil, uma ferramenta online gratuita para validar números de PIS. Experimente agora e valide números de PIS de forma rápida e fácil.',
  keywords:
    'validador de PIS, validador de PIS online, PIS válido, número de PIS, GeraFácil, ferramenta online, validador de dados, validador de dados online, validador de pis com dados, gerador e validador de pis, validadores de pis, pis validador online',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/validadores/validador-pis',
}

export default function ValidadorDePISPage() {
  return (
    <Page
      title="Validador de PIS"
      subtitle="Valide se o número do PIS é válido."
      description="Digite o PIS abaixo e verifique se é um PIS válido ou não de acordo com as regras do Governo Federal."
    >
      <div className="page-content">
        <PISValidator />
      </div>
    </Page>
  )
}
