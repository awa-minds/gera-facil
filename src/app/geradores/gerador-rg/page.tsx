/* eslint-disable react/no-unescaped-entities */
import { RGGenerator } from './RGGenerator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Gerador de RG Online | GeraFácil',
  description:
    'Obtenha um número de RG válido de forma rápida e fácil com o nosso gerador de RG válido do GeraFácil. Gere o seu RG com segurança e confiança.',
  keywords:
    'gerador de RG, gerador de RG online, RG válido, número de rg, GeraFácil, ferramenta online, gerador de dados, gerador de dados online, gerador de rg com dados, gerador e validador de rg, geradores de rg, rg gerador online',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/geradores/gerador-rg',
}

export default function GeradorDeCPFPage() {
  return (
    <Page
      title="Gerador de RG"
      subtitle="Gere RGs Válidos Instantaneamente com o Gerador de RG Online"
      description="Clique no botão 'Gerar RG' agora mesmo e obtenha números de RG
        aleatórios e válidos de maneira instantânea."
    >
      <div className="page-content">
        <RGGenerator />
      </div>
    </Page>
  )
}
