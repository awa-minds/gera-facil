import { GenerateImage } from './ImageGenerator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Gerador de Imagem AI | GeraFácil',
  description:
    'Libere sua criatividade com o Gerador de Imagens com IA do GeraFácil! Transforme ideias em visuais deslumbrantes com nossa poderosa inteligência artificial. Crie, personalize e inspire-se com facilidade. Explore um mundo de possibilidades visuais sem limites. Experimente agora e dê vida às suas ideias com o GeraFácil, seu parceiro inovador na geração de imagens com inteligência artificial.',
  keywords:
    'gerador de imagem de ia, imagem de ia online, gerar Imagem, criar imagem, imagem inteligencia artificial, gerador imagem de ia, gerador imagem, gerador de imagem, gerador de imagem online, GeraFácil',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/geradores/gerador-imagem',
}

export default function GeradorDeImagemPage() {
  return (
    <Page
      title="Gerador de Imagem AI"
      subtitle="Gere imagens instantaneamente com o Gerador de Imagens AI - GeraFácil"
      description="Clique no botão 'Gerar Imagem' agora mesmo e obtenha a imagem
        gerada de acordo com o texto."
    >
      <div className="page-content">
        <GenerateImage />
      </div>
    </Page>
  )
}
