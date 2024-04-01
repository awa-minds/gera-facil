/* eslint-disable react/no-unescaped-entities */
import { UUIDGenerator } from './UUIDGenerator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Gerador de UUID v4 Online | GeraFácil',
  description:
    'Nosso gerador de UUID (Identificador Único Universal) oferece uma maneira simples e gratuita de criar IDs exclusivos para suas necessidades de desenvolvimento. Gere UUIDs aleatórios com facilidade e use-os em seus projetos. Experimente agora!',
  keywords:
    'gerador de uuid, uuid online, gerador de identificador único, uuid aleatório, criador de uuid, ferramenta de uuid, uuid gerado, uuid gratuito, identificador único online, uuid gerado aleatoriamente, uuid generator, uuid generator online, free uuid generator, random uuid generator, uuid creator',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/geradores/gerador-uuid',
}

export default function GeradorDeUUIDPage() {
  return (
    <Page
      title="Gerador de UUID v4"
      subtitle="Gere UUIDs Aleatórios rapidamente com nossa ferramenta online"
      description="Clique no botão 'Gerar UUID' agora mesmo e gere UUIDs aleatórios 
      com facilidade e use-os em seus projetos."
    >
      <div className="page-content">
        <UUIDGenerator />
      </div>
    </Page>
  )
}
