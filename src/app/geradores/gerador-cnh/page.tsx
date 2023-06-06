/* eslint-disable react/no-unescaped-entities */
import { CNHGenerator } from './CNHGenerator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Gerador de CNH | Gera Fácil',
  description:
    'Obtenha uma CNH válida de forma rápida e fácil com o nosso gerador de CNH válido do GeraFácil. Emita a sua CNH com segurança e confiança.',
  keywords:
    'gerador de CNH válido, gerar CNH, CNH válida, gerador dados, gerador dados online, gerador de CNH, gerador cnh, documento de habilitação, carteira de motorista',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com/geradores/gerador-cnh',
}

export default function GeradorDeCNHPage() {
  return (
    <Page
      title="Gerador de CNH"
      subtitle="Gere CNHs Válidas Instantaneamente com o Gerador de CNH Online"
      description="Clique no botão 'Gerar CNH' agora mesmo e obtenha números de CNH
        aleatórios e válidos de maneira instantânea."
    >
      <div className="page-content">
        <CNHGenerator />
      </div>
    </Page>
  )
}
