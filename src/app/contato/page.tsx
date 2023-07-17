import { Contact } from './Contact'
import Page from '@/components/Page'

export const metadata = {
  title: 'Contato | Gera Fácil',
  description: '',
}

export default function ContatoPage() {
  return (
    <Page
      title="Fale Conosco"
      subtitle="Entre em contato conosco, envie críticas, sugestões de novos geradores, validadores ou afins, pedidos ou informações diversas relacionadas ao site."
      description="Preencha o formulário abaixo e aguarde o nosso contato! Se atente aos campos obrigatórios!"
    >
      <div className="page-content">
        <Contact />
      </div>
    </Page>
  )
}
