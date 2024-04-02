import { GestationalCalculator } from './GestationalCalculator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Calculadora Gestacional Online | GeraFácil',
  description:
    'Calculadora gestacional que estima a data provável do parto com base no primeiro dia da última menstruação.',
  keywords:
    'calculadora gestacional, data provável do parto, gravidez, gestação, calcular gestação, calcular data do parto',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/saude/calculadora-gestacional',
}

export default function CalculadoraGestacionalPage() {
  return (
    <Page
      title="Calculadora Gestacional"
      subtitle="Descubra a data provável do parto com base no primeiro dia da última menstruação."
      description="Digite a data do primeiro dia da última menstruação abaixo e veja a data provável do parto!"
    >
      <div className="page-content">
        <GestationalCalculator />
      </div>
    </Page>
  )
}
