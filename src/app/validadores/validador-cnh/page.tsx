/* eslint-disable react/no-unescaped-entities */
import { CNHValidator } from './CNHValidator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Validador de CNH Online | GeraFácil',
  description:
    'Valide CNHs rapidamente com o GeraFácil, uma ferramenta online gratuita para validar números de CNH. Experimente agora e valide CNHs de forma rápida e fácil.',
  keywords:
    'validador de CNH, validador de CNH online, CNH válido, número de CNH, GeraFácil, ferramenta online, validador de dados, validador de dados online, validador de cnh com dados, gerador e validador de cnh, validadores de cnh, cnh validador online',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/validadores/validador-cnh',
}

export default function ValidadorDeCNHPage() {
  return (
    <Page
      title="Validador de CNH"
      subtitle="Valide se o número de CNH é válido."
      description="Digite o CNH abaixo e verifique se é um CNH válido ou não de acordo com as regras do Detran."
    >
      <div className="page-content">
        <CNHValidator />
      </div>
    </Page>
  )
}
