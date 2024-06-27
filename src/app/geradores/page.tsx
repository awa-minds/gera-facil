import CardPlus from '@/components/CardPlus'

export const metadata = {
  title: 'Geradores | GeraFácil',
  description:
    'Experimente o GeraFácil! Geradores de dados eficientes para testes e projetos. Crie informações realistas e confiáveis com facilidade.',
  keywords:
    'Geradores de dados, Geração de dados, Dados autênticos, Dados realistas, Ferramentas de geração de dados, Gerador online, Dados fictícios, Dados personalizados, Testes com dados,   Dados precisos, Simulação de dados, Dados para desenvolvimento, Geração rápida de informações, Gerador de informações, Gerador de dados aleatórios, Ferramenta de geração de informações, gerador cpf, gerador senha, gerador cnh, gerador cnpj, gerador qrcode, gerador pis, GeraFácil',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/geradores/',
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
          <CardPlus href="/geradores/gerador-rg" title="Gerador de RG" />
          <CardPlus href="/geradores/gerador-cnh" title="Gerador de CNH" />
          <CardPlus href="/geradores/gerador-pis" title="Gerador de PIS" />
          <CardPlus href="/geradores/gerador-cnpj" title="Gerador de CNPJ" />
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
          <CardPlus
            href="/geradores/gerador-titulo-eleitor"
            title="Gerador de Título de Eleitor"
          />
        </div>
      </div>
    </div>
  )
}
