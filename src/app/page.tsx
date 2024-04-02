import CardPlus from '@/components/CardPlus'

export const metadata = {
  title: 'GeraFácil - Gerador e Validador de Dados Online',
  description:
    'Gere e valide dados online de forma fácil com o GeraFácil. O site intuitivo para auxiliar usuários, estudantes e desenvolvedores com tarefas de dados pessoais.',
  keywords:
    'geradores de dados, validadores de dados, gerador de senha, gerador CPF, gerador CNH, gerador PIS, gerador QR Code, gerador de CNPJ, validador de dados, validador de CPF, validador de senha, validador de PIS, validador de QR Code, validador CNH',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br',
  verification: {
    google: 'fy0_KcqyT2MEMz66F1ExYsigsIUSMm4FBG5iz2fngro',
  },
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
          <CardPlus href="/geradores/gerador-rg" title="Gerador de RG" />
          <CardPlus href="/geradores/gerador-cnh" title="Gerador de CNH" />
          <CardPlus href="/geradores/gerador-cnpj" title="Gerador de CNPJ" />
          <CardPlus href="/geradores/gerador-pis" title="Gerador de PIS" />
          <CardPlus
            href="/geradores/gerador-qrcode"
            title="Gerador de QR Code"
          />
          <CardPlus
            href="/geradores/gerador-renavam"
            title="Gerador de Renavam"
          />
          <CardPlus
            href="/geradores/gerador-imagem"
            title="Gerador de Imagem AI"
          />
          <CardPlus href="/geradores/gerador-uuid" title="Gerador de UUID v4" />
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
          <CardPlus
            href="/validadores/validador-pis"
            title="Validador de PIS"
          />
          <CardPlus
            href="/validadores/validador-cnpj"
            title="Validador de CNPJ"
          />
          <CardPlus
            href="/validadores/validador-uuid"
            title="Validador de UUID"
          />
        </div>
        <h3>Strings e Funções</h3>
        <div className="mt-2 grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CardPlus
            href="/strings/contador-caracteres"
            title="Contador de Caracteres"
          />
        </div>
        <h3>Saúde</h3>
        <div className="mt-2 grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CardPlus href="/saude/calcular-imc" title="Calculadora de IMC" />
          <CardPlus
            href="/saude/calculadora-gestacional"
            title="Calculadora Gestacional"
          />
        </div>
      </div>
    </div>
  )
}
