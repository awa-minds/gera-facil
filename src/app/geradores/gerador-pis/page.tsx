/* eslint-disable react/no-unescaped-entities */
import { PISGenerator } from './PISGenerator'

export const metadata = {
  title: 'Gerador de PIS Online | GeraFácil',
  description:
    'Utilize nosso gerador de PIS online para obter números de PIS válidos instantaneamente. Gerador fácil de usar e confiável. Experimente agora!',
  keywords:
    'gerador de PIS, gerador de PIS válido, PIS válido online, número de PIS, gerador de PIS online, gerador de dados, gerador de dados online, GeraFácil',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com/geradores/gerador-pis',
}

export default function GeradorDePISPage() {
  return (
    <div className="page">
      <h1>Gerador de PIS</h1>
      <h2>Obtenha Números de PIS Válidos Instantaneamente</h2>
      <p>
        Clique no botão 'Gerar PIS' agora mesmo e obtenha números de PIS
        aleatórios e válidos de maneira instantânea.
      </p>

      <div className="page-content">
        <PISGenerator />
      </div>
    </div>
  )
}
