/* eslint-disable react/no-unescaped-entities */
import { HashGenerator } from './HashGenerator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Gerador de Hash Online | GeraFácil',
  description:
    'Utilize o gerador de hash do GeraFácil para criar hashes seguros e rápidos em diversos algoritmos como MD5, SHA1, SHA224, SHA256, SHA384 e SHA512. Ideal para segurança, criptografia e verificação de integridade.',
  keywords:
    'gerador de hash, hash online, MD5, SHA1, SHA224, SHA256, SHA384, SHA512, criptografia, segurança, verificação de integridade, GeraFácil',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/geradores/gerador-hash',
}

export default function GeradorHashPage() {
  return (
    <Page
      title="Gerador de Hash"
      subtitle="Gere Hashes instantaneamente com o Gerador de Hash Online do GeraFácil"
      description="Digite um texto ou números que queira codificar agora mesmo e veja os valores abaixo. "
    >
      <div className="page-content">
        <HashGenerator />
      </div>
    </Page>
  )
}
