import { CNHGenerator } from './CNHGenerator'

export const metadata = {
  title: 'Gerador de CNH | Gera Fácil',
  description: '',
}

export default function GeradorDeCNHPage() {
  return (
    <div className="page">
      <h1>Gerador de CNH</h1>
      <h2>nivbeiuhre neiuhreiu ebinue niue</h2>

      <div className="page-content">
        <CNHGenerator />
      </div>
    </div>
  )
}
