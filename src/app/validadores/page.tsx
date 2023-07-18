import CardPlus from '@/components/CardPlus'

export const metadata = {
  title: 'Validadores | GeraFácil',
  description:
    'Valide dados com GeraFácil! Garanta informações confiáveis e corretas. Números, dados pessoais e mais. Decisões seguras e validação rápida. Experimente agora!',
  keywords:
    'Validadores de dados, Validação de informações, Verificação de dados pessoais, Validação de CPF, Validar números, Validador online, Ferramenta de validação, Verificador de e-mails, Validação de CNPJ, Validar documentos, Validação de telefone, Dados corretos, Verificação de cadastros, Validação de endereço, Verificador de dados pessoais, validador cpf, validador cnpj, validador cnh, validador de senha, validador de pis, GeraFácil.',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/validadores/',
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
