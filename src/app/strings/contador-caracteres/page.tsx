import { ContadorCaracteres } from './contadorCaracteres'
import Page from '@/components/Page'

export const metadata = {
  title: 'Contador de Caracteres, Palavras e Linhas | GeraFácil',
  description:
    'Utilize nossa plataforma online para verificar instantaneamente a contagem de caracteres, palavras e linhas em seu texto. Desfrute de um contador eficiente e ágil de caracteres.',
  keywords:
    'contador de caracteres online, ferramenta de contagem de palavras, contador de linhas rápido, contagem de caracteres em tempo real, ferramenta de análise de texto, contagem de palavras fácil, monitor de caracteres online, contador de texto eficiente, verificador de quantidade de palavras, análise de texto instantânea, ferramenta para contar caracteres, medidor de palavras online, contagem de caracteres em segundos, contagem de palavras rápida, análise de texto simplificada, contador de palavras em tempo real, gerafacil, contador de caracteres.',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/strings/contador-caracteres',
}

export default function contadorCaracteresPage() {
  return (
    <Page
      title="Contador de Caracteres, Palavras e Linhas"
      subtitle="Ferramenta para contar caracteres, palavras, linhas."
      description="Com o contador de Caracteres, Palavras e Linhas do GeraFácil, obtenha facilmente as métricas de um texto ou palavras."
    >
      <div className="page-content">
        <ContadorCaracteres />
      </div>
    </Page>
  )
}
