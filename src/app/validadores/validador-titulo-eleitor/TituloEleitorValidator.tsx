'use client'

import { useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'

const estados = [
  '',
  'SP',
  'MG',
  'RJ',
  'RS',
  'BA',
  'PR',
  'CE',
  'PE',
  'SC',
  'GO',
  'MA',
  'PB',
  'PA',
  'ES',
  'PI',
  'RN',
  'AL',
  'MT',
  'MS',
  'DF',
  'SE',
  'AM',
  'RO',
  'AC',
  'AP',
  'RR',
  'TO',
]

export const TituloEleitorValidator = () => {
  const [titulo, setTitulo] = useState('')
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [estado, setEstado] = useState('')

  const validateTitulo = () => {
    if (titulo.length !== 12) {
      setIsValid(false)
      setEstado('')
      return
    }

    const base = titulo.substring(0, 8).split('').map(Number)
    const estadoDigits = titulo.substring(8, 10).split('').map(Number)
    const digitosVerificadores = titulo.substring(10, 12).split('').map(Number)
    const estadoCode = parseInt(titulo.substring(8, 10))

    // Verificação do primeiro dígito verificador
    let soma = 0
    const multiplicadores1 = [2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < 8; i++) {
      soma += base[i] * multiplicadores1[i]
    }
    let resto = soma % 11
    const dv1 = resto === 10 ? 0 : resto

    // Verificação do segundo dígito verificador
    soma = 0
    const multiplicadores2 = [7, 8, 9]
    for (let i = 0; i < 2; i++) {
      soma += estadoDigits[i] * multiplicadores2[i]
    }
    soma += dv1 * 9
    resto = soma % 11
    const dv2 = resto === 10 ? 0 : resto

    if (dv1 === digitosVerificadores[0] && dv2 === digitosVerificadores[1]) {
      setIsValid(true)
      setEstado(estados[estadoCode])
    } else {
      setIsValid(false)
      setEstado('')
    }
  }

  // eslint-disable-next-line no-undef
  const handleChangeTitulo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitulo(e.target.value)
    setIsValid(null)
    setEstado('')
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(titulo)
  }

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              value={titulo}
              maxLength={12}
              onChange={handleChangeTitulo}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
            />

            <div
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-awa-100"
              onClick={handleCopyToClipboard}
              title="Copiar título de eleitor"
            >
              <RxClipboardCopy color="white" />
            </div>
          </div>
        </div>

        {isValid !== null && (
          <div className="text grid justify-center">
            {isValid ? (
              <>
                {estado && (
                  <span className="text-green-500">
                    Título de Eleitor Válido - {estado}
                  </span>
                )}
              </>
            ) : (
              <span className="text-red-500">Título de Eleitor Inválido</span>
            )}
          </div>
        )}

        <button
          className="rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
          onClick={validateTitulo}
        >
          Validar Título de Eleitor
        </button>
      </div>
    </div>
  )
}
