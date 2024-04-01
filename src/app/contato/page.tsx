import { Contact } from './Contact'
import Page from '@/components/Page'

export const metadata = {
  title: 'Contato | GeraFácil',
  description:
    'Entre em contato com o GeraFácil e simplifique suas interações! Nossa página de contato é o caminho mais fácil para tirar dúvidas, obter suporte personalizado ou compartilhar suas sugestões. Conecte-se conosco agora mesmo e descubra como podemos ajudar a atender às suas necessidades. Estamos aqui para tornar sua experiência conosco ainda mais eficiente e agradável.',
  keywords:
    'Contato GeraFácil, Suporte ao cliente, Fale conosco, Atendimento ao usuário, Central de ajuda,  Suporte técnico, Dúvidas e sugestões, Serviço de atendimento, Comunicar problema, Solicitação de suporte, feedback, Assistência personalizada, Equipe de suporte, Canais de contato, Contato por e-mail, Suporte online, Ajuda e orientação',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/contato/',
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
