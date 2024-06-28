/* eslint-disable react/no-unescaped-entities */
import { TituloEleitorValidator } from './TituloEleitorValidator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Validador de Título de Eleitor Online | GeraFácil',
  description:
    'GeraFácil - Valide e gere números válidos de Título de Eleitor instantaneamente. Ferramenta online, rápida e gratuita para testes e validações de documentos eleitorais.',
  keywords:
    'validador de Título de Eleitor, gerador de Título de Eleitor, GeraFácil, Título de Eleitor válido, ferramenta de validação de Título de Eleitor, teste de Título de Eleitor, gerar Título de Eleitor online, documentos para testes eleitorais, validação de documentos eleitorais',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical:
    'https://www.gerafacil.com.br/validadores/validador-titulo-eleitor',
}

export default function ValidadorDeCPFPage() {
  return (
    <Page
      title="Validador de Título de Eleitor"
      subtitle="Valide se o número do Titulo de Eleitor é válido e qual estado ele pertence."
      description="Digite o número do Título de Eleitor abaixo e verifique se é um número válido ou não de acordo com as regras da Justiça Eleitoral."
    >
      <div className="page-content">
        <TituloEleitorValidator />
      </div>
    </Page>
  )
}
