/* eslint-disable react/no-unescaped-entities */
import { Aviso } from './Aviso'
import { TituloEleitorGenerator } from './TituloEleitorGenerator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Gerador de Título de Eleitor Online | GeraFácil',
  description:
    'GeraFácil - Gere números válidos de Título de Eleitor de forma rápida e fácil. Ferramenta gratuita e eficiente para testes e validações de títulos de eleitor.',
  keywords:
    'gerador de Título de Eleitor, números válidos de Título de Eleitor, GeraFácil, gerador de documentos, Título de Eleitor válido, ferramenta de teste de Título de Eleitor, gerar Título de Eleitor online, ferramentas de validação de Título de Eleitor, documentos para testes',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/geradores/gerador-titulo-eleitor',
}

export default function GeradorDeTituloEleitorPage() {
  return (
    <Page
      title="Gerador de Título de Eleitor"
      subtitle="Gere números válidos de Título de Eleitor de forma rápida, fácil e gratuita. Ideal para testes e validações."
      description="Clique no botão 'Gerar Título de Eleitor' e obtenha instantaneamente números válidos e aleatórios de Título de Eleitor."
    >
      <div className="page-content">
        <TituloEleitorGenerator />
        <Aviso />
      </div>
    </Page>
  )
}
