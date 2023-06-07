'use client'

import React, { useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'
import { validateCNPJ } from 'validations-br'

export const CNPJValidator: React.FC = () => {
  const [cnpj, setCnpj] = useState('')
  const [isValid, setIsValid] = useState<boolean | null>(null)

  const formatarCNPJ = (cnpj: string): string => {
    cnpj = cnpj.replace(/\D/g, '') // Remover caracteres não numéricos
    if (cnpj.length > 2 && cnpj.length <= 5) {
      cnpj = cnpj.replace(/(\d{2})(\d+)/, '$1.$2') // Adicionar o primeiro ponto
    } else if (cnpj.length > 5 && cnpj.length <= 8) {
      cnpj = cnpj.replace(/(\d{2})(\d{3})(\d+)/, '$1.$2.$3') // Adicionar o primeiro e segundo ponto
    } else if (cnpj.length > 8 && cnpj.length <= 12) {
      cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d+)/, '$1.$2.$3/$4') // Adicionar o primeiro, segundo ponto e a barra
    } else if (cnpj.length > 12) {
      cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/, '$1.$2.$3/$4-$5') // Adicionar o primeiro, segundo ponto a barra e o hífen
    }
    return cnpj
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(cnpj)
  }

  const handleChangeCNPJ = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const cnpjFormatada = formatarCNPJ(value)
    setCnpj(cnpjFormatada)
  }

  const validate = () => {
    const isValid = validateCNPJ(cnpj)
    setIsValid(isValid)
  }

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              value={cnpj}
              maxLength={18}
              onChange={handleChangeCNPJ}
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
              <span className="text-green-500">CNPJ Válido</span>
            ) : (
              <span className="text-red-500">CNPJ Inválido</span>
            )}
          </div>
        )}

        <button
          className="rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
          onClick={validate}
        >
          Validar CNPJ
        </button>
      </div>
    </div>
  )
}
