import { CPFGenerator } from './CPFGenerator'

export const metadata = {
  title: 'Gerador de CPF | Gera Fácil',
  description: '',
}

export default function GeradorDeCPFPage() {
  return (
    <div className="page">
      <h1>Gerador de CPF</h1>
      <h2>nivbeiuhre neiuhreiu ebinue niue</h2>

      <div className="page-content">
        <CPFGenerator />
      </div>
    </div>
  )
}
