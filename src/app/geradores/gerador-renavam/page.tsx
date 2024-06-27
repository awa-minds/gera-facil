/* eslint-disable react/no-unescaped-entities */
import { Aviso } from './Aviso'
import { RenavamGenerator } from './RenavamGenerator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Gerador de Renavam Online | GeraFácil',
  description:
    'Obtenha um número de Renavam válido de forma rápida e fácil com o nosso gerador de Renavam válido do GeraFácil. Gere o seu Renavam com segurança e confiança.',
  keywords:
    'gerador de renavam, gerador de Renavam online, Renavam válido, número de renavam, GeraFácil, ferramenta online, gerador de dados, gerador de dados online, gerador de renavam com dados, gerador e validador de renavam, geradores de renavam, renavam gerador online',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/geradores/gerador-renavam',
}

export default function GeradorDeRenavamPage() {
  return (
    <Page
      title="Gerador de Renavam"
      subtitle="Gere número de Renavam Válido Instantaneamente com o Gerador de Renavam Online"
      description="Clique no botão 'Gerar Renavam' agora mesmo e obtenha números de Renavam
        aleatórios e válidos de maneira instantânea."
    >
      <div className="page-content">
        <RenavamGenerator />
        <Aviso />
      </div>
    </Page>
  )
}
