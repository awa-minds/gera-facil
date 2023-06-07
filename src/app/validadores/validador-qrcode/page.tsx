/* eslint-disable react/no-unescaped-entities */
import { QRCodeValidator } from './QRCodeValidator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Validador de QR Code Online | GeraFácil',
  description:
    'Valide QR Code rapidamente com o GeraFácil, uma ferramenta online gratuita para validar QR Codes. Experimente agora e valide QR Code de forma rápida e fácil.',
  keywords:
    'validador de QR Code, validador de QR Code online, QR Code válido, scanner QR Code, GeraFácil, ferramenta online, validador de dados, validador de dados online, validador de QR Code com dados, gerador e validador de QR Code, validadores de QR Code, QR Code validador online',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com/validadores/validador-qrcode',
}

export default function ValidadorDeQRCodePage() {
  return (
    <Page
      title="Validador de QR Code"
      subtitle="Valide se o QR Code é válido."
      description="Faça o upload da imagem do QR Code abaixo e veja do que se trata a imagem ou o endereço de URL."
    >
      <div className="page-content">
        <QRCodeValidator />
      </div>
    </Page>
  )
}
