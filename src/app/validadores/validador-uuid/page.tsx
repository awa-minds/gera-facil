/* eslint-disable react/no-unescaped-entities */
import { UUIDValidator } from './UUIDValidator'
import Page from '@/components/Page'

export const metadata = {
  title: 'Validador de UUID Online | GeraFácil',
  description:
    'Validador de UUID GeraFácil - Verifique se o UUID é válido e descubra sua versão.',
  keywords:
    'UUID, identificador único, validador de UUID, verificar UUID, UUID online, verificar versao uuid',
  robots: 'index, follow',
  author: 'GeraFácil',
  canonical: 'https://www.gerafacil.com.br/validadores/validador-uuid',
}

export default function ValidadorDeUUIDPage() {
  return (
    <Page
      title="Validador de UUID"
      subtitle="Valide se o número do UUID é válido e qual a versão validada."
      description="Digite o UUID abaixo e verifique se o mesmo é válido e qual a versão validada."
    >
      <div className="page-content">
        <UUIDValidator />
      </div>
    </Page>
  )
}
