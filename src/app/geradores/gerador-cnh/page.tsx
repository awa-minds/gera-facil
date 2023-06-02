/* eslint-disable react/no-unescaped-entities */
import { CNHGenerator } from './CNHGenerator'

export const metadata = {
  title: 'Gerador de CNH | Gera Fácil',
  description:
    'Obtenha uma CNH válida de forma rápida e fácil com o nosso gerador de CNH válido do GeraFácil. Emita a sua CNH com segurança e confiança.',
  keywords:
    'gerador de CNH válido, gerar CNH, CNH válida, gerador dados, gerador dados online, gerador de CNH, gerador cnh, documento de habilitação, carteira de motorista',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com/geradores/gerador-cnh',
}

export default function GeradorDeCNHPage() {
  return (
    <div className="page">
      <h1>Gerador de CNH</h1>
      <h2>Gere CNHs Válidas Instantaneamente com o Gerador de CNH Online</h2>
      <p>
        Clique no botão 'Gerar CNH' agora mesmo e obtenha números de CNH
        aleatórios e válidos de maneira instantânea.
      </p>

      <div className="page-content">
        <CNHGenerator />
      </div>
    </div>
  )
}
