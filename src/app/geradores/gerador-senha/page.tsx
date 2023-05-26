import { PasswordGenerator } from '@/components/generators'

export const metadata = {
  title: 'Gerador de senha | Gera Fácil',
  description: '',
}

export default function GeradorDeSenhaPage() {
  return (
    <div className="page">
      <h1>Gerador de Senha</h1>

      <div className="page-content">
        <PasswordGenerator />
      </div>
    </div>
  )
}
