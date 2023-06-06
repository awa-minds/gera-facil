import { QRCodeGenerator } from './QRCodeGenerator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Gerador de QR Code Online | GeraFácil',
  description:
    'Gere facilmente QR Codes válidos online com o GeraFácil. Personalize suas URLs, textos ou informações de contato. Ferramenta gratuita e fácil de usar.',
  keywords:
    'gerador de QR Code, QR Code online, gerar QR Code, criar QR Code, QR Code válido, gerador QR Code, gerador QRCode, gerador de dados, gerador de dados online, GeraFácil',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com/geradores/gerador-qrcode',
}

export default function GeradorDeQRCodePage() {
  return (
    <Page
      title="Gerador de QR Code"
      subtitle="Gere QR Codes Válidos Instantaneamente com o Gerador de QR Code Online"
      description="Clique no botão 'Gerar QR Code' agora mesmo e obtenha a imagem
        gerada de acordo com o texto."
    >
      <div className="page-content">
        <QRCodeGenerator />
      </div>
    </Page>
  )
}
