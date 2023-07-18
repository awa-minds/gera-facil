/* eslint-disable react/no-unescaped-entities */
import { PasswordValidator } from './PasswordValidator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Validador de Senha Online | GeraFácil',
  description:
    'Verifique a segurança de suas senhas com o Validador de Senha do GeraFácil. Garanta proteção para suas contas com facilidade e precisão.',
  keywords:
    'Validador de Senha GeraFácil, Verificação de senha, Segurança de senha, Teste de senha, Senha forte, Senha confiável, Verificador de força de senha, Proteção de contas, Senha segura, Validar senha, Verificar senha, Ferramenta de validação de senha, Avaliação de senha, Validar senha online, Verificação de segurança de senha.',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/validadores/validador-senha',
}

export default function ValidadorDeSenhaPage() {
  return (
    <Page
      title="Validador de Senha"
      subtitle="Valide se a sua senha está realmente segura."
      description="Digite a sua senha abaixo e se adeque com as melhores práticas de
        segurança para senhas."
    >
      <div className="page-content">
        <PasswordValidator />
      </div>
    </Page>
  )
}
