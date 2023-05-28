import { QRCodeGenerator } from '@/components/generators'

export const metadata = {
  title: 'Gerador de QR Code | Gera Fácil',
  description: '',
}

export default function GeradorDeQRCodePage() {
  return (
    <div className="page">
      <h1>Gerador de QR Code</h1>
      <h2>nivbeiuhre neiuhreiu ebinue niue</h2>

      <div className="page-content">
        <QRCodeGenerator />
      </div>
    </div>
  )
}
