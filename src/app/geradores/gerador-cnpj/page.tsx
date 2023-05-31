import { CNPJGenerator } from './CNPJGenerator'

export const metadata = {
  title: 'Gerador de CNPJ | Gera Fácil',
  description: '',
}

export default function GeradorDeCNPJPage() {
  return (
    <div className="page">
      <h1>Gerador de CNPJ</h1>
      <h2>nivbeiuhre neiuhreiu ebinue niue</h2>

      <div className="page-content">
        <CNPJGenerator />
      </div>
    </div>
  )
}
