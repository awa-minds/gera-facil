export const metadata = {
  title: 'Termos de Uso | Gera Fácil',
  description:
    'Conheça nossos Termos de Uso no GeraFácil e descubra como fornecemos uma experiência segura e confiável para todos os usuários. Nossa página de Termos de Uso abrange as diretrizes para acesso, utilização dos serviços e responsabilidades. A transparência é nossa prioridade, e queremos garantir que você compreenda seus direitos e obrigações ao utilizar nossos recursos. Leia mais e utilize nossos serviços com tranquilidade, sabendo que estamos comprometidos com a excelência em todas as interações.',
  keywords:
    'Termos de Uso GeraFácil, Políticas de Utilização, Responsabilidades do Usuário, Aceitação de Termos, Condições de Uso, GeraFácil',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/termos-de-uso/',
}

export default function TermosDeUsoPage() {
  return (
    <div className="page">
      <h1>Termos de Uso</h1>

      <div className="page-content">
        <p className="text-white">
          Ao acessar o GeraFácil, o usuário deve estar ciente e concordar com os
          termos de uso estabelecidos neste documento. Caso não concorde com
          estes termos, solicitamos que não utilize o site. O GeraFácil se
          reserva ao direito de modificar estes termos a qualquer momento, sem
          aviso prévio.
        </p>
      </div>
      <br></br>
      <h1>Licença de Uso</h1>
      <div className="page-content">
        <p className="text-white">
          O GeraFácil concede uma licença de uso limitada aos usuários que
          concordam e cumprem os termos de uso. O GeráFacil reserva-se o direito
          de restringir o acesso ao site para qualquer usuário, a qualquer
          momento e por qualquer motivo.
        </p>
      </div>
      <br></br>
      <h1>Responsabilidade de Uso</h1>
      <div className="page-content">
        <p className="text-white">
          Todos os conteúdos apresentados neste site têm finalidade
          exclusivamente informativa e não devem ser considerados completos ou
          atualizados. Eles não substituem a orientação de um profissional, como
          um advogado, médico ou financeiro. O GeraFácil não oferece garantias
          de qualquer tipo sobre os conteúdos e não se responsabiliza pelo uso
          que os usuários possam fazer deles. Qualquer risco decorrente da
          utilização dos conteúdos é assumido pelo próprio usuário.
        </p>
      </div>
    </div>
  )
}
