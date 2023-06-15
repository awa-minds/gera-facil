import CardPlus from '@/components/CardPlus'

export const metadata = {
  title: 'Geradores | GeraFácil',
  description: 'Geradores',
}

export default function GeradoresPage() {
  return (
    <div className="page">
      <h1 className="flex-col">Geradores | GeraFácil</h1>
      <h2>
        Abaixo estão todos os geradores disponíveis em nosso site para uso.
      </h2>

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
      </div>
    </div>
  )
}
