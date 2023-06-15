import CardPlus from '@/components/CardPlus'

export const metadata = {
  title: 'Validadores | GeraFácil',
  description: 'Validadores',
}

export default function ValidadoresPage() {
  return (
    <div className="page">
      <h1 className="flex-col">Validadores | GeraFácil</h1>
      <h2>
        Abaixo estão todos os validadores disponíveis em nosso site para uso.
      </h2>

      <div className="page-content">
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
          <CardPlus
            href="/validadores/validador-pis"
            title="Validador de PIS"
          />
          <CardPlus
            href="/validadores/validador-cnpj"
            title="Validador de CNPJ"
          />
        </div>
      </div>
    </div>
  )
}
