import CardPlus from '@/components/CardPlus'

export const metadata = {
  title: 'Home | Gera Fácil',
  description: 'Geradores e validadores',
}

export default function HomePage() {
  return (
    <div className="page">
      <h1 className="flex-col">
        Gere e/ou valide{' '}
        <span>
          rapidamente seus <span className="text-awa-100">{`{dados}`}</span>
        </span>
      </h1>
      <h2>O site com maior número de ferramentas úteis da internet.</h2>

      <div className="page-content">
        <h3>Geradores</h3>
        <div className="mt-2 grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CardPlus href="/geradores/gerador-senha" title="Gerador de Senha" />
          <CardPlus href="/geradores/gerador-cpf" title="Gerador de CPF" />
          <CardPlus href="/geradores/gerador-cnh" title="Gerador de CNH" />
          <CardPlus href="/geradores/gerador-cnpj" title="Gerador de CNPJ" />
          <CardPlus href="/geradores/gerador-pis" title="Gerador de PIS" />
          <CardPlus
            href="/geradores/gerador-qrcode"
            title="Gerador de QR Code"
          />
          <CardPlus href="/geradores/gerador-cpf" title="Gerador de CPF" />
        </div>
        <h3>Validadores</h3>
        <div className="mt-2 grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CardPlus
            href="/validadores/validador-senha"
            title="Validador de Senha"
          />
          <CardPlus
            href="/validadores/validador-cpf"
            title="Validador de CPF"
          />
          <CardPlus
            href="/validadores/validador-cnh"
            title="Validador de CNH"
          />
          <CardPlus href="#" title="Validador de CNPJ" />
          <CardPlus href="#" title="Validador de PIS" />
          <CardPlus href="#" title="Validador de QR Code" />
        </div>
      </div>
    </div>
  )
}
