/* eslint-disable react/no-unescaped-entities */
import { PasswordGenerator } from './PasswordGenerator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Gerador de Senhas Seguras Online | GeraFácil',
  description:
    'Crie senhas seguras e exclusivas para proteger suas contas online com o GeraFácil. Nosso gerador de senhas online gera combinações robustas de forma rápida e fácil. Experimente agora mesmo e fortaleça sua segurança online!',
  keywords:
    'gerador de senhas, senha segura, criar senha, senha online, gerador de senhas online, gerafacil, gerador de dados, gerador de dados online, gerador online',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com/geradores/gerador-senha',
}

export default function GeradorDeSenhaPage() {
  return (
    <Page
      title="Gerador de Senha"
      subtitle="Crie Senhas Seguras e Fortes em Instantes"
      description="Ferramenta online para gerar senhas seguras. O gerador de senhas do
        GeraFácil permite criar senhas aleatórias e robustas, personalizadas de
        acordo com suas necessidades. Ajuste o tamanho da senha deslizando o
        botão e veja uma nova senha ser gerada automaticamente. Se desejar
        alterar a senha gerada, basta clicar no botão 'Gerar Senha' novamente."
    >
      <div className="page-content">
        <PasswordGenerator />
      </div>
    </Page>
  )
}
