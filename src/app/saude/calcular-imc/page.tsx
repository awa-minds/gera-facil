/* eslint-disable react/no-unescaped-entities */
import { IMCCalculator } from './IMCCalculator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Calculadora de IMC Online | GeraFácil',
  description:
    'Calcule seu Índice de Massa Corporal (IMC) de forma rápida e fácil com nossa calculadora online. Descubra se você está dentro do peso ideal ou se precisa fazer ajustes na sua saúde. Experimente agora!',
  keywords:
    'calculadora de imc, índice de massa corporal, imc, peso ideal, saúde, sobrepeso, obesidade, fitness, estilo de vida saudável, nutrição, exercício, bem-estar, dieta, avaliação física, massa corporal, peso e altura, imc online, ferramenta de imc, medição de imc, cálculo de imc',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/saude/calcular-imc',
}

export default function CalcularIMCPage() {
  return (
    <Page
      title="Calculadora de IMC"
      subtitle="Calcule seu Índice de Massa Corporal e descubra seu peso ideal."
      description="Digite o seu peso e altura abaixo para calcular o seu Índide de Massa Corporal (IMC) de forma rápida e precisa."
    >
      <div className="page-content">
        <IMCCalculator />
      </div>
    </Page>
  )
}
