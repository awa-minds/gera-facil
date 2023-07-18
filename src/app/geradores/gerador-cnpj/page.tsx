/* eslint-disable react/no-unescaped-entities */
import { CNPJGenerator } from './CNPJGenerator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Gerador de CNPJ Online | GeraFácil',
  description:
    'Use nosso gerador de CNPJ válido online para obter números de CNPJ instantaneamente. Gerador de CNPJ fácil de usar e confiável no GeraFácil.',
  keywords:
    'gerador de cnpj, gerador de cnpj online, gerador de cnpj online válido, gerador de cnpj válido, gerar cnpj, cnpj válido, cnpj online, gerador de dados, gerador de dados online, gerafácil',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/geradores/gerador-cnpj',
}

export default function GeradorDeCNPJPage() {
  return (
    <Page
      title="Gerador de CNPJ"
      subtitle="Gere CNPJs Válidos Instantaneamente com o Gerador de CNPJ Online"
      description="Clique no botão 'Gerar CNPJ' agora mesmo e obtenha números de CNPJ
        aleatórios e válidos de maneira instantânea."
    >
      <div className="page-content">
        <CNPJGenerator />
      </div>
    </Page>
  )
}
