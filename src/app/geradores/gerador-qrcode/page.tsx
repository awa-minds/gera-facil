import { QRCodeGenerator } from './QRCodeGenerator'

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
    <div className="page">
      <h1>Gerador de QR Code</h1>
      <h2>
        Gere QR Codes Válidos Instantaneamente com o Gerador de QR Code Online
      </h2>
      <p>
        Clique no botão &apos;Gerar QR Code&apos; agora mesmo e obtenha a imagem
        gerada de acordo com o texto.
      </p>

      <div className="page-content">
        <QRCodeGenerator />
      </div>
    </div>
  )
}
