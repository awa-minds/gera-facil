/* eslint-disable react/no-unescaped-entities */
import { PISGenerator } from './PISGenerator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Gerador de PIS Online | GeraFácil',
  description:
    'Utilize nosso gerador de PIS online para obter números de PIS válidos instantaneamente. Gerador fácil de usar e confiável. Experimente agora!',
  keywords:
    'gerador de PIS, gerador de PIS válido, PIS válido online, número de PIS, gerador de PIS online, gerador de dados, gerador de dados online, GeraFácil',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/geradores/gerador-pis',
}

export default function GeradorDePISPage() {
  return (
    <Page
      title="Gerador de PIS"
      subtitle="Obtenha Números de PIS Válidos Instantaneamente"
      description="Clique no botão 'Gerar PIS' agora mesmo e obtenha números de PIS
        aleatórios e válidos de maneira instantânea."
    >
      <div className="page-content">
        <PISGenerator />
      </div>
    </Page>
  )
}
