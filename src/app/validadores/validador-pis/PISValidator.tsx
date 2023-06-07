'use client'

import React, { useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'
import { validatePIS } from 'validations-br'

export const PISValidator: React.FC = () => {
  const [pis, setPis] = useState('')
  const [isValid, setIsValid] = useState<boolean | null>(null)

  const formatarPIS = (pis: string): string => {
    pis = pis.replace(/\D/g, '') // Remover caracteres não numéricos
    if (pis.length > 3 && pis.length <= 8) {
      pis = pis.replace(/(\d{3})(\d+)/, '$1.$2') // Adicionar o primeiro ponto
    } else if (pis.length > 8 && pis.length <= 10) {
      pis = pis.replace(/(\d{3})(\d{5})(\d+)/, '$1.$2.$3') // Adicionar o primeiro e segundo ponto
    } else if (pis.length > 10) {
      pis = pis.replace(/(\d{3})(\d{5})(\d{2})(\d+)/, '$1.$2.$3-$4') // Adicionar o primeiro e segundo ponto e o hífen
    }
    return pis
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(pis)
  }

  const handleChangePIS = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const pisFormatada = formatarPIS(value)
    setPis(pisFormatada)
  }

  const validate = () => {
    const isValid = validatePIS(pis)
    setIsValid(isValid)
  }

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              value={pis}
              maxLength={14}
              onChange={handleChangePIS}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
            />

            <div
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-awa-100"
              onClick={handleCopyToClipboard}
              title="Copiar pis"
            >
              <RxClipboardCopy color="white" />
            </div>
          </div>
        </div>

        {isValid !== null && (
          <div className="text grid justify-center">
            {isValid ? (
              <span className="text-green-500">PIS Válido</span>
            ) : (
              <span className="text-red-500">PIS Inválido</span>
            )}
          </div>
        )}

        <button
          className="rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
          onClick={validate}
        >
          Validar PIS
        </button>
      </div>
    </div>
  )
}
