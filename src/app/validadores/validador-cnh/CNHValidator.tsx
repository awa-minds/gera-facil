'use client'

import React, { useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'
import { validateCNH } from 'validations-br'

export const CNHValidator: React.FC = () => {
  const [cnh, setCnh] = useState('')
  const [isValid, setIsValid] = useState<boolean | null>(null)

  const formatarCNH = (cnh: string): string => {
    cnh = cnh.replace(/\D/g, '') // Remover caracteres não numéricos
    if (cnh.length > 9) {
      cnh = cnh.replace(/(\d{9})(\d+)/, '$1-$2')
    }

    return cnh
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(cnh)
  }

  const handleChangeCNH = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const cnhFormatada = formatarCNH(value)
    setCnh(cnhFormatada)
  }

  const validate = () => {
    const isValid = validateCNH(cnh)
    setIsValid(isValid)
  }

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              value={cnh}
              maxLength={12}
              onChange={handleChangeCNH}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
            />

            <div
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-awa-100"
              onClick={handleCopyToClipboard}
              title="Copiar cnh"
            >
              <RxClipboardCopy color="white" />
            </div>
          </div>
        </div>

        {isValid !== null && (
          <div className="text grid justify-center">
            {isValid ? (
              <span className="text-green-500">CNH Válida</span>
            ) : (
              <span className="text-red-500">CNH Inválida</span>
            )}
          </div>
        )}

        <button
          className="rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
          onClick={validate}
        >
          Validar CNH
        </button>
      </div>
    </div>
  )
}
